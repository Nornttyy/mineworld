import * as THREE from 'three';
import type { LightingQuality } from '../core/settings';
import { buildCloudShadowData } from './surfaceNoise';

/** World-space bounds for the genuinely three-dimensional cloud field. */
export const CLOUD_VOLUME_CONSTANTS = {
  minY: 145,
  maxY: 365,
  // Proxy only supplies view-ray directions. Keep every cube corner inside the
  // gameplay camera's 1000-block far plane: 900 / 2 * sqrt(3) ~= 779.
  extent: 900,
  maxDistance: 850,
  fadeStart: 650,
  weatherTextureSize: 128,
  detailTextureSize: 64,
  weatherUvScale: 0.0038,
  extinction: 0.042,
  standardSteps: 36,
  highSteps: 64,
  reflectionSteps: 20,
  maxSteps: 64,
} as const;

export interface CloudVolumeInterval {
  readonly enter: number;
  readonly exit: number;
}

/** Number of deterministic midpoint samples used by each public lighting preset. */
export function cloudStepCount(quality: LightingQuality): number {
  if (quality === 'high') return CLOUD_VOLUME_CONSTANTS.highSteps;
  if (quality === 'standard') return CLOUD_VOLUME_CONSTANTS.standardSteps;
  return 0;
}

/** Intersect a ray with the complete vertical cloud field. */
export function intersectCloudVolume(
  originY: number,
  rayY: number,
  maxDistance = CLOUD_VOLUME_CONSTANTS.maxDistance,
): CloudVolumeInterval | null {
  if (!Number.isFinite(originY) || !Number.isFinite(rayY) || Math.abs(rayY) < 1e-5) return null;
  const a = (CLOUD_VOLUME_CONSTANTS.minY - originY) / rayY;
  const b = (CLOUD_VOLUME_CONSTANTS.maxY - originY) / rayY;
  const enter = Math.max(0, Math.min(a, b));
  const exit = Math.min(Math.max(a, b), Math.max(0, maxDistance));
  return exit > enter ? { enter, exit } : null;
}

/** Smooth lower and upper envelope used by individual cloud bodies. */
export function cloudVerticalProfile(height01: number): number {
  const h = Math.max(0, Math.min(1, height01));
  const smoothstep = (lo: number, hi: number, x: number): number => {
    const t = Math.max(0, Math.min(1, (x - lo) / (hi - lo)));
    return t * t * (3 - 2 * t);
  };
  return smoothstep(0, 0.12, h) * (1 - smoothstep(0.64, 1, h));
}

/** Beer-Lambert reference integrator for deterministic unit tests. */
export function integrateCloudOpacity(
  densities: readonly number[],
  pathLength: number,
  extinction = CLOUD_VOLUME_CONSTANTS.extinction,
): number {
  if (densities.length === 0 || pathLength <= 0 || extinction <= 0) return 0;
  const stepLength = pathLength / densities.length;
  let transmittance = 1;
  for (const rawDensity of densities) {
    const density = Math.max(0, Math.min(1, rawDensity));
    transmittance *= Math.exp(-density * extinction * stepLength);
  }
  return Math.max(0, Math.min(1, 1 - transmittance));
}

const wrap = (value: number, period: number): number => ((value % period) + period) % period;

const hash3 = (x: number, y: number, z: number): number => {
  let h = Math.imul(x ^ 0x68bc21eb, 0x27d4eb2d);
  h = Math.imul(h ^ y, 0x165667b1);
  h = Math.imul(h ^ z, 0x1b873593);
  h ^= h >>> 15;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  return (h >>> 0) / 4294967295;
};

const smooth = (value: number): number => value * value * (3 - 2 * value);

const periodicValueNoise3D = (x: number, y: number, z: number, cells: number): number => {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const z0 = Math.floor(z);
  const fx = smooth(x - x0);
  const fy = smooth(y - y0);
  const fz = smooth(z - z0);
  const at = (dx: number, dy: number, dz: number): number =>
    hash3(wrap(x0 + dx, cells), wrap(y0 + dy, cells), wrap(z0 + dz, cells));
  const x00 = at(0, 0, 0) * (1 - fx) + at(1, 0, 0) * fx;
  const x10 = at(0, 1, 0) * (1 - fx) + at(1, 1, 0) * fx;
  const x01 = at(0, 0, 1) * (1 - fx) + at(1, 0, 1) * fx;
  const x11 = at(0, 1, 1) * (1 - fx) + at(1, 1, 1) * fx;
  const z0Mix = x00 * (1 - fy) + x10 * fy;
  const z1Mix = x01 * (1 - fy) + x11 * fy;
  return z0Mix * (1 - fz) + z1Mix * fz;
};

/** Periodic fBm sampled in all three axes; integer offsets repeat exactly. */
export function samplePeriodicCloudNoise3D(x01: number, y01: number, z01: number): number {
  let value = 0;
  let weight = 0;
  let amplitude = 1;
  for (const cells of [2, 4, 8, 16]) {
    value += periodicValueNoise3D(x01 * cells, y01 * cells, z01 * cells, cells) * amplitude;
    weight += amplitude;
    amplitude *= 0.52;
  }
  return value / weight;
}

/** Build the actual 3D density texture used inside every ray-marched cloud body. */
export function buildCloudDetailData(
  size: number = CLOUD_VOLUME_CONSTANTS.detailTextureSize,
): Uint8Array {
  if (!Number.isInteger(size) || size < 16 || (size & (size - 1)) !== 0)
    throw new Error('cloud volume texture size must be a power of two >= 16');
  const values = new Float32Array(size * size * size);
  let low = Infinity;
  let high = -Infinity;
  let index = 0;
  for (let z = 0; z < size; z++) {
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const value = samplePeriodicCloudNoise3D(x / size, y / size, z / size);
        values[index++] = value;
        low = Math.min(low, value);
        high = Math.max(high, value);
      }
    }
  }
  const data = new Uint8Array(values.length);
  const span = Math.max(1e-6, high - low);
  for (let i = 0; i < values.length; i++) data[i] = Math.round(((values[i] - low) / span) * 255);
  return data;
}

/** Broad 2D weather coverage. It places cloud systems but never defines their volume. */
export function makeCloudWeatherTexture(
  size: number = CLOUD_VOLUME_CONSTANTS.weatherTextureSize,
): THREE.DataTexture {
  const texture = new THREE.DataTexture(buildCloudShadowData(size), size, size, THREE.RGBAFormat);
  texture.name = 'mineworld-cloud-weather';
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.colorSpace = THREE.NoColorSpace;
  texture.needsUpdate = true;
  return texture;
}

/** Repeatable trilinear density volume. Y stores independent data, not a warped 2D map. */
export function makeCloudDetailTexture3D(
  size: number = CLOUD_VOLUME_CONSTANTS.detailTextureSize,
): THREE.Data3DTexture {
  const texture = new THREE.Data3DTexture(buildCloudDetailData(size), size, size, size);
  texture.name = 'mineworld-cloud-detail-3d';
  texture.format = THREE.RedFormat;
  texture.type = THREE.UnsignedByteType;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.wrapR = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearFilter;
  texture.unpackAlignment = 1;
  texture.colorSpace = THREE.NoColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export const CLOUD_VOLUME_VERT = /* glsl */ `
varying vec3 vCloudExit;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vCloudExit = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim();

/**
 * Deterministic 3D density integration. A camera-centred proxy box merely starts
 * the ray; all visible shapes come from world-space sampler3D density, varying
 * cloud bases/tops and a separate high-altitude field.
 */
export const CLOUD_VOLUME_FRAG = /* glsl */ `
uniform sampler2D uCloudWeather;
uniform sampler3D uCloudDetail3D;
uniform float uTime;
uniform int uStepCount;
uniform vec3 uTint;
uniform vec3 uSunDir;
varying vec3 vCloudExit;

const float MW_CLOUD_MIN_Y = 145.0;
const float MW_CLOUD_MAX_Y = 365.0;
const float MW_CLOUD_MAX_DISTANCE = 850.0;
const float MW_CLOUD_FADE_START = 650.0;
const float MW_CLOUD_WEATHER_SCALE = 0.0038;
const float MW_CLOUD_EXTINCTION = 0.042;

float mwSmooth01(float x) {
  x = clamp(x, 0.0, 1.0);
  return x * x * (3.0 - 2.0 * x);
}

float mwProfile(float h, float topStart) {
  float bottom = mwSmooth01(h / 0.12);
  float top = 1.0 - mwSmooth01((h - topStart) / max(0.01, 1.0 - topStart));
  return bottom * top;
}

mat2 mwCloudRotation() {
  return mat2(0.8192, -0.5736, 0.5736, 0.8192);
}

vec3 mwRotateVolume(vec3 p) {
  return vec3(
    p.x * 0.816 + p.z * 0.412 - p.y * 0.074,
    p.y * 0.923 + p.x * 0.218 + p.z * 0.119,
    p.z * 0.872 - p.x * 0.357 + p.y * 0.164
  );
}

float mwCloudDensity(vec3 p) {
  vec2 weatherWind = vec2(uTime * 0.0014, uTime * 0.0008);
  vec2 weatherUv = p.xz * MW_CLOUD_WEATHER_SCALE + weatherWind;
  vec4 weatherA = texture2D(uCloudWeather, weatherUv);
  vec4 weatherB = texture2D(
    uCloudWeather,
    mwCloudRotation() * (weatherUv * 0.61) + vec2(0.347, 0.791) - weatherWind * 0.19
  );
  float coverage = clamp(weatherA.b * 0.68 + weatherB.b * 0.32, 0.0, 1.0);
  float convection = smoothstep(0.49, 0.84, coverage * 0.62 + weatherB.b * 0.38);

  // Every weather cell gets its own base and top. Towering cells can rise over
  // 130 blocks while neighbouring fair-weather clouds remain much lower.
  float baseY = mix(166.0, 215.0, weatherB.b);
  float topY = baseY + mix(42.0, 132.0, convection) + (weatherA.b - 0.5) * 12.0;
  float height = (p.y - baseY) / max(18.0, topY - baseY);
  float bodyProfile = mwProfile(height, mix(0.54, 0.70, convection));

  vec3 wind3 = vec3(uTime * 0.0012, uTime * 0.00008, uTime * 0.00065);
  vec3 broadUv = p * vec3(0.0048, 0.0064, 0.0048) + wind3;
  float broad = texture(uCloudDetail3D, broadUv).r;
  vec3 detailUv = mwRotateVolume(p) * vec3(0.0135, 0.0175, 0.0135)
    - wind3 * 1.7 + vec3(0.173, 0.619, 0.347);
  float detail = texture(uCloudDetail3D, detailUv).r;
  float bodyNoise = broad * 0.76 + detail * 0.24;
  float bodyThreshold = mix(0.66, 0.45, smoothstep(0.30, 0.78, coverage));
  bodyThreshold += (1.0 - bodyProfile) * 0.15 + (detail - 0.5) * 0.025;
  float cumulus = smoothstep(bodyThreshold, bodyThreshold + 0.18, bodyNoise) * bodyProfile;

  // A second, independently placed low field provides detached foreground
  // puffs. It has its own base/top and 3D phase, so the result is not one lid.
  vec2 lowWeatherUv = mwCloudRotation() * (weatherUv * 0.73)
    + vec2(0.713, 0.269) + weatherWind * 0.22;
  float lowWeather = texture2D(uCloudWeather, lowWeatherUv).b;
  float lowCoverage = smoothstep(0.58, 0.84, lowWeather);
  float lowBase = mix(148.0, 176.0, weatherA.b);
  float lowTop = lowBase + mix(34.0, 66.0, lowWeather);
  float lowHeight = (p.y - lowBase) / max(18.0, lowTop - lowBase);
  float lowProfile = mwProfile(lowHeight, 0.62);
  float lowBroad = texture(uCloudDetail3D, broadUv * 1.17 + vec3(0.47, 0.11, 0.73)).r;
  float lowDetail = texture(uCloudDetail3D, detailUv * 0.91 + vec3(0.19, 0.67, 0.31)).r;
  float lowShape = lowBroad * 0.79 + lowDetail * 0.21;
  float scattered = smoothstep(0.58, 0.76, lowShape) * lowProfile * lowCoverage * 0.58;
  return clamp(max(cumulus, scattered), 0.0, 1.0);
}

void main() {
  vec3 rayDir = normalize(vCloudExit - cameraPosition);
  if (abs(rayDir.y) < 0.00001) discard;

  float ta = (MW_CLOUD_MIN_Y - cameraPosition.y) / rayDir.y;
  float tb = (MW_CLOUD_MAX_Y - cameraPosition.y) / rayDir.y;
  float rayEnter = max(0.0, min(ta, tb));
  float rayExit = min(max(ta, tb), MW_CLOUD_MAX_DISTANCE);
  if (rayExit <= rayEnter) discard;

  float distanceFade = 1.0 - smoothstep(MW_CLOUD_FADE_START, MW_CLOUD_MAX_DISTANCE, rayEnter);
  if (distanceFade <= 0.001) discard;

  float stepLength = (rayExit - rayEnter) / float(max(uStepCount, 1));
  vec3 sunDir = normalize(uSunDir);
  float sunHeight = smoothstep(-0.05, 0.42, sunDir.y);
  float viewSun = clamp(dot(rayDir, sunDir), -1.0, 1.0);
  const float g = 0.45;
  float hg = (1.0 - g * g) / pow(max(0.08, 1.0 + g * g - 2.0 * g * viewSun), 1.5);
  float phase = clamp(0.34 + hg * 0.13, 0.32, 1.18);
  vec3 warmSun = mix(vec3(1.0, 0.42, 0.12), vec3(1.0, 0.96, 0.82), sunHeight);
  vec3 ambient = uTint * mix(0.30, 0.56, sunHeight);
  // A continuous world/ray-space phase breaks coherent march contours without
  // temporal noise or frame accumulation. It moves smoothly with camera and ray.
  float samplePhase = 0.2 + texture(
    uCloudDetail3D,
    cameraPosition * 0.0013 + rayDir * vec3(0.37, 0.19, 0.29)
  ).r * 0.6;

  vec3 integrated = vec3(0.0);
  float transmittance = 1.0;
  for (int i = 0; i < 64; i++) {
    if (i >= uStepCount) break;
    float t = rayEnter + (float(i) + samplePhase) * stepLength;
    vec3 p = cameraPosition + rayDir * t;
    float density = mwCloudDensity(p);
    if (density > 0.001) {
      vec3 wind3 = vec3(uTime * 0.0012, uTime * 0.00008, uTime * 0.00065);
      float ahead = texture(
        uCloudDetail3D,
        (p + sunDir * 32.0) * vec3(0.0048, 0.0064, 0.0048) + wind3
      ).r;
      float selfShadow = exp(-max(ahead + density * 0.34 - 0.5, 0.0) * 2.7);
      float edgeLight = pow(max(viewSun, 0.0), 5.0) * (1.0 - density) * sunHeight;
      float altitudeLight = mix(0.76, 1.08, smoothstep(150.0, 330.0, p.y));
      vec3 lighting = (ambient + warmSun * sunHeight * phase * selfShadow * 0.74)
        * altitudeLight;
      lighting += vec3(1.0, 0.91, 0.72) * edgeLight * 0.25;
      lighting = min(lighting, vec3(1.18));
      float sampleAlpha = 1.0 - exp(-density * MW_CLOUD_EXTINCTION * stepLength);
      integrated += transmittance * sampleAlpha * lighting;
      transmittance *= 1.0 - sampleAlpha;
      if (transmittance < 0.03) break;
    }
  }

  float opacity = 1.0 - transmittance;
  if (opacity < 0.002) discard;
  vec3 straightColor = integrated / max(opacity, 0.001);
  gl_FragColor = vec4(straightColor, opacity * distanceFade);
  #include <colorspace_fragment>
}
`.trim();
