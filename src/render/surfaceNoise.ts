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

// Integer wave vectors make every component exactly periodic over the tile. The
// spectrum deliberately spreads comparable energy across four direction bands:
// a single dominant band made the old normal map read as endless parallel brush
// strokes once the planar reflection stretched it towards the horizon. Co-prime
// frequencies plus per-wave packets keep the tile seamless without exposing a
// smaller repeating sub-pattern.
const DIRECTIONAL_WAVES: readonly DirectionalWave[] = [
  { kx: 4, ky: 1, amplitude: 0.18 },
  { kx: 1, ky: 5, amplitude: 0.175 },
  { kx: 5, ky: 3, amplitude: 0.16 },
  { kx: -3, ky: 6, amplitude: 0.155 },
  { kx: 7, ky: -2, amplitude: 0.142 },
  { kx: 2, ky: 8, amplitude: 0.138 },
  { kx: 8, ky: 5, amplitude: 0.123 },
  { kx: -6, ky: 9, amplitude: 0.12 },
  { kx: 11, ky: -5, amplitude: 0.104 },
  { kx: 5, ky: 12, amplitude: 0.102 },
  { kx: 13, ky: 8, amplitude: 0.086 },
  { kx: -9, ky: 14, amplitude: 0.083 },
  { kx: 16, ky: -7, amplitude: 0.071 },
  { kx: 7, ky: 17, amplitude: 0.069 },
  { kx: 19, ky: 11, amplitude: 0.058 },
  { kx: -12, ky: 20, amplitude: 0.057 },
  { kx: 23, ky: -10, amplitude: 0.047 },
  { kx: 11, ky: 24, amplitude: 0.046 },
  { kx: 27, ky: 16, amplitude: 0.038 },
  { kx: -17, ky: 28, amplitude: 0.037 },
  { kx: 32, ky: -15, amplitude: 0.03 },
  { kx: 16, ky: 33, amplitude: 0.029 },
  { kx: 38, ky: 21, amplitude: 0.023 },
  { kx: -22, ky: 39, amplitude: 0.022 },
];

// Low-frequency periodic envelopes turn infinite Fourier crest lines into wave
// packets. Each carrier uses a different packet direction and phase, so their
// ends do not line up into a second visible grid.
const WAVE_PACKETS: readonly (readonly [number, number])[] = [
  [1, 2],
  [-2, 1],
  [3, 1],
  [-1, 3],
  [2, -3],
  [3, -2],
  [-3, -1],
  [1, -3],
];

const wavePhase = (wave: DirectionalWave, index: number): number =>
  hash(wave.kx + index * 37 + 101, wave.ky - index * 53 - 211) * TAU;

const packetPhase = (wave: DirectionalWave, index: number): number =>
  hash(wave.ky + index * 61 - 307, wave.kx + index * 43 + 419) * TAU;

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
      // Two crossed periodic warps bend every direction differently. The warp
      // frequencies are integer-valued, preserving exact repeat wrapping.
      const warpU =
        Math.sin(TAU * (2 * u + 3 * v) + 1.71) * 0.012 +
        Math.sin(TAU * (-3 * u + 2 * v) + 4.19) * 0.007 +
        Math.sin(TAU * (5 * u - v) + 2.43) * 0.003;
      const warpV =
        Math.sin(TAU * (-2 * u + 3 * v) + 0.63) * 0.011 +
        Math.sin(TAU * (3 * u + 4 * v) + 2.77) * 0.006 +
        Math.sin(TAU * (u - 5 * v) + 5.31) * 0.003;

      let h = 0;
      let weight = 0;
      for (let i = 0; i < DIRECTIONAL_WAVES.length; i++) {
        const wave = DIRECTIONAL_WAVES[i];
        const phase = wavePhase(wave, i);
        const warpSign = (i & 1) === 0 ? 1 : -1;
        const theta =
          TAU *
            (wave.kx * (u + warpU * warpSign) + wave.ky * (v + warpV * (0.82 - warpSign * 0.18))) +
          phase;
        const packetVector = WAVE_PACKETS[i % WAVE_PACKETS.length];
        const packetTheta =
          TAU * (packetVector[0] * u + packetVector[1] * v) + packetPhase(wave, i);
        const packet01 = Math.sin(packetTheta) * 0.5 + 0.5;
        const packet = 0.22 + smooth(packet01) * 0.78;
        // Harmonics give a steep front and rounded trough; packet modulation
        // breaks those fronts into short, irregular crest groups. Fade the
        // third harmonic out of the highest carriers: after domain warp those
        // frequencies approach the 256px tile Nyquist limit and would alias as
        // frame-to-frame glitter once sampled by a moving water surface.
        const waveNumber = Math.hypot(wave.kx, wave.ky);
        const harmonic3 = 0.035 * (1 - smooth(clamp01((waveNumber - 18) / 12)));
        const component =
          Math.sin(theta) +
          Math.sin(theta * 2 + phase * 0.37) * 0.17 +
          Math.sin(theta * 3 - phase * 0.19) * harmonic3;
        h += component * wave.amplitude * packet;
        weight += wave.amplitude;
      }
      // A small isotropic toroidal detail field prevents calm gaps between wave
      // packets from exposing the carrier spectrum or a checkerboard repeat.
      const detail =
        (periodicNoise(x + 29, y - 47, size, 16) - 0.5) * 0.07 +
        (periodicNoise(x - 73, y + 31, size, 32) - 0.5) * 0.035;
      h = h / (weight * 0.92) + detail;
      height[x + y * size] = h;
      lo = Math.min(lo, h);
      hi = Math.max(hi, h);
    }
  }

  const span = Math.max(1e-6, hi - lo);
  for (let i = 0; i < count; i++) height[i] = (height[i] - lo) / span;

  const at = (x: number, y: number): number => height[wrap(x, size) + wrap(y, size) * size];
  const slopeScale = 4.8 * (size / DEFAULT_DIRECTIONAL_WAVE_SIZE);
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
      // Segment the curvature ridge with an independent toroidal field. This is
      // the crucial difference between a short sun-glint/caustic crest and the
      // old full-width parallel white streaks.
      const segmentField =
        periodicNoise(x + 83, y - 19, size, 16) * 0.58 +
        periodicNoise(x - 41, y + 67, size, 32) * 0.42;
      const segment = smooth(clamp01((segmentField - 0.31) / 0.49));
      const ridge = clamp01(curvature[x + y * size] / (curvatureMax * 0.36));
      const crest = Math.pow(ridge, 0.76) * segment;
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
