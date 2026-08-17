import * as THREE from 'three';

export const DEFAULT_CLOUD_SHADOW_SIZE = 64;
export const DEFAULT_DIRECTIONAL_WAVE_SIZE = 256;

const smooth = (t: number): number => t * t * (3 - 2 * t);
const clamp01 = (v: number): number => Math.max(0, Math.min(1, v));
const TAU = Math.PI * 2;

// Deterministic integer hash. Keeping the generator pure makes shader-water
// screenshots reproducible across browsers and machines.
const hash = (x: number, y: number): number => {
  let h = Math.imul(x ^ 0x9e3779b9, 0x85ebca6b) ^ Math.imul(y ^ 0xc2b2ae35, 0x27d4eb2d);
  h ^= h >>> 15;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  return (h >>> 0) / 0xffffffff;
};

const wrap = (v: number, size: number): number => ((v % size) + size) % size;

const assertPowerOfTwo = (size: number, minimum: number, label: string): void => {
  if (!Number.isInteger(size) || size < minimum || (size & (size - 1)) !== 0) {
    throw new Error(`${label} size must be a power of two >= ${minimum}`);
  }
};

/** Periodic value noise. `cells` is an integer divisor of the output size. */
const periodicNoise = (x: number, y: number, size: number, cells: number): number => {
  const px = (x / size) * cells;
  const py = (y / size) * cells;
  const ix = Math.floor(px);
  const iy = Math.floor(py);
  const fx = smooth(px - ix);
  const fy = smooth(py - iy);
  const x0 = wrap(ix, cells);
  const x1 = wrap(ix + 1, cells);
  const y0 = wrap(iy, cells);
  const y1 = wrap(iy + 1, cells);
  const a = hash(x0, y0);
  const b = hash(x1, y0);
  const c = hash(x0, y1);
  const d = hash(x1, y1);
  return (a + (b - a) * fx) * (1 - fy) + (c + (d - c) * fx) * fy;
};

/**
 * Build the broad seamless fBm tile used by slow cloud shadows. R/G and A are
 * retained for backwards compatibility; cloud shading primarily consumes the
 * height field in B. Water should use the dedicated directional-wave texture.
 */
export function buildCloudShadowData(size = DEFAULT_CLOUD_SHADOW_SIZE): Uint8Array {
  assertPowerOfTwo(size, 16, 'cloud-shadow');

  const height = new Float32Array(size * size);
  let lo = Infinity;
  let hi = -Infinity;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Periodic fBm: broad swells plus two ripple scales. The first octave is
      // intentionally small so a repeated tile never reads as a checkerboard.
      let value = 0;
      let weight = 0;
      let amp = 1;
      for (const cells of [2, 4, 8, 16]) {
        value += periodicNoise(x, y, size, cells) * amp;
        weight += amp;
        amp *= 0.52;
      }
      value /= weight;
      height[x + y * size] = value;
      lo = Math.min(lo, value);
      hi = Math.max(hi, value);
    }
  }

  const span = Math.max(1e-6, hi - lo);
  for (let i = 0; i < height.length; i++) height[i] = (height[i] - lo) / span;

  const data = new Uint8Array(size * size * 4);
  const at = (x: number, y: number): number => height[wrap(x, size) + wrap(y, size) * size];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * 3.8;
      const dz = (at(x, y + 1) - at(x, y - 1)) * 3.8;
      const invLen = 1 / Math.hypot(dx, 1, dz);
      const nx = -dx * invLen;
      const nz = -dz * invLen;
      const h = at(x, y);
      // Bright around the crossing of several height bands; combining two
      // independently moving samples in the shader turns this into caustic webbing.
      const ridge = Math.pow(Math.max(0, 1 - Math.abs(h * 2 - 1)), 2.5);
      const i = (x + y * size) * 4;
      data[i] = Math.round((nx * 0.5 + 0.5) * 255);
      data[i + 1] = Math.round((nz * 0.5 + 0.5) * 255);
      data[i + 2] = Math.round(h * 255);
      data[i + 3] = Math.round(ridge * 255);
    }
  }
  return data;
}

/**
 * Backwards-compatible name used by the current terrain material. New water
 * code should use {@link buildDirectionalWaveData} instead of sharing this
 * broad, low-frequency cloud field.
 */
export function buildSurfaceNoiseData(size = DEFAULT_CLOUD_SHADOW_SIZE): Uint8Array {
  return buildCloudShadowData(size);
}

const configureDataTexture = (
  texture: THREE.DataTexture,
  name: string,
  anisotropy = 1,
): THREE.DataTexture => {
  texture.name = name;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.colorSpace = THREE.NoColorSpace;
  texture.anisotropy = anisotropy;
  texture.needsUpdate = true;
  return texture;
};

/** Broad periodic fBm used for slow cloud shadows, not water normals. */
export function makeCloudShadowTexture(size = DEFAULT_CLOUD_SHADOW_SIZE): THREE.DataTexture {
  const texture = new THREE.DataTexture(buildCloudShadowData(size), size, size, THREE.RGBAFormat);
  return configureDataTexture(texture, 'mineworld-cloud-shadow-noise');
}

/** Backwards-compatible texture factory retained while callers migrate. */
export function makeSurfaceNoiseTexture(size = DEFAULT_CLOUD_SHADOW_SIZE): THREE.DataTexture {
  const texture = new THREE.DataTexture(buildSurfaceNoiseData(size), size, size, THREE.RGBAFormat);
  return configureDataTexture(texture, 'mineworld-surface-noise');
}

interface DirectionalWave {
  readonly kx: number;
  readonly ky: number;
  readonly amplitude: number;
}

// Integer wave vectors make every component exactly periodic over the tile.
// Most energy travels along +X/+Z with a narrow angular spread, while weaker
// cross waves break up parallel bands. This is closer to wind-driven water
// than isotropic value noise and remains suitable for two rotated flow-map
// samples in the water shader.
const DIRECTIONAL_WAVES: readonly DirectionalWave[] = [
  { kx: 3, ky: 1, amplitude: 0.32 },
  { kx: 4, ky: 1, amplitude: 0.27 },
  { kx: 5, ky: 2, amplitude: 0.23 },
  { kx: 7, ky: 2, amplitude: 0.19 },
  { kx: 9, ky: 3, amplitude: 0.155 },
  { kx: 11, ky: 4, amplitude: 0.126 },
  { kx: 14, ky: 5, amplitude: 0.1 },
  { kx: 17, ky: 6, amplitude: 0.079 },
  { kx: 21, ky: 7, amplitude: 0.062 },
  { kx: 26, ky: 9, amplitude: 0.048 },
  { kx: 32, ky: 11, amplitude: 0.037 },
  { kx: 39, ky: 14, amplitude: 0.028 },
  { kx: 5, ky: -2, amplitude: 0.105 },
  { kx: 8, ky: -3, amplitude: 0.077 },
  { kx: 13, ky: -5, amplitude: 0.052 },
  { kx: 20, ky: -7, amplitude: 0.035 },
  { kx: -2, ky: 6, amplitude: 0.055 },
  { kx: -3, ky: 10, amplitude: 0.036 },
];

const wavePhase = (wave: DirectionalWave, index: number): number =>
  hash(wave.kx + index * 37 + 101, wave.ky - index * 53 - 211) * TAU;

/**
 * Build a seamless wind-driven wave tile.
 *
 * Encoding is linear data (never sRGB):
 *  - R/G: tangent-space horizontal normal X/Z, remapped from [-1, 1]
 *  - B: normalized wave height
 *  - A: narrow positive-curvature crest mask for glints/caustics
 *
 * The default is deliberately 256x256. Macro displacement should still be
 * analytic in the vertex shader; this texture supplies mid/micro-scale shape.
 */
export function buildDirectionalWaveData(size = DEFAULT_DIRECTIONAL_WAVE_SIZE): Uint8Array {
  assertPowerOfTwo(size, DEFAULT_DIRECTIONAL_WAVE_SIZE, 'directional-wave');

  const count = size * size;
  const height = new Float32Array(count);
  let lo = Infinity;
  let hi = -Infinity;

  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const u = x / size;
      // Low-frequency periodic domain warp bends otherwise parallel crests
      // without compromising exact tileability.
      const warpU =
        Math.sin(TAU * (2 * u + v) + 1.71) * 0.013 + Math.sin(TAU * (-u + 3 * v) + 4.19) * 0.006;
      const warpV =
        Math.sin(TAU * (u - 2 * v) + 0.63) * 0.009 + Math.sin(TAU * (3 * u + v) + 2.77) * 0.004;

      let h = 0;
      let weight = 0;
      for (let i = 0; i < DIRECTIONAL_WAVES.length; i++) {
        const wave = DIRECTIONAL_WAVES[i];
        const phase = wavePhase(wave, i);
        const theta = TAU * (wave.kx * (u + warpU) + wave.ky * (v + warpV)) + phase;
        // A weak second harmonic sharpens crests but keeps troughs broad, like
        // choppy wind water. 2*k is still integer-periodic.
        const component = Math.sin(theta) + Math.sin(theta * 2 + phase * 0.37) * 0.16;
        h += component * wave.amplitude;
        weight += wave.amplitude;
      }
      h /= weight * 1.16;
      height[x + y * size] = h;
      lo = Math.min(lo, h);
      hi = Math.max(hi, h);
    }
  }

  const span = Math.max(1e-6, hi - lo);
  for (let i = 0; i < count; i++) height[i] = (height[i] - lo) / span;

  const at = (x: number, y: number): number => height[wrap(x, size) + wrap(y, size) * size];
  const slopeScale = 5.2 * (size / DEFAULT_DIRECTIONAL_WAVE_SIZE);
  const curvature = new Float32Array(count);
  let curvatureMax = 1e-6;

  // Positive Laplacian in this sign convention selects convex wave crests.
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const h = at(x, y);
      const lap = h * 4 - at(x - 1, y) - at(x + 1, y) - at(x, y - 1) - at(x, y + 1);
      const c = Math.max(0, lap) * smooth(clamp01((h - 0.38) / 0.52));
      curvature[x + y * size] = c;
      curvatureMax = Math.max(curvatureMax, c);
    }
  }

  const data = new Uint8Array(count * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * slopeScale;
      const dz = (at(x, y + 1) - at(x, y - 1)) * slopeScale;
      const invLen = 1 / Math.hypot(dx, 1, dz);
      const nx = -dx * invLen;
      const nz = -dz * invLen;
      const h = at(x, y);
      // Keep the mask sparse enough for sun glints and focused bottom caustics;
      // it is not intended as a diffuse white pattern on the water surface.
      const crest = Math.pow(clamp01(curvature[x + y * size] / (curvatureMax * 0.42)), 0.72);
      const i = (x + y * size) * 4;
      data[i] = Math.round((nx * 0.5 + 0.5) * 255);
      data[i + 1] = Math.round((nz * 0.5 + 0.5) * 255);
      data[i + 2] = Math.round(h * 255);
      data[i + 3] = Math.round(crest * 255);
    }
  }
  return data;
}

/** High-resolution linear-data wave texture for the dedicated water shader. */
export function makeDirectionalWaveTexture(
  size = DEFAULT_DIRECTIONAL_WAVE_SIZE,
): THREE.DataTexture {
  const texture = new THREE.DataTexture(
    buildDirectionalWaveData(size),
    size,
    size,
    THREE.RGBAFormat,
  );
  return configureDataTexture(texture, 'mineworld-directional-wave', 8);
}
