import * as THREE from 'three';
import type { LightingQuality } from '../core/settings';
import { buildCloudShadowData } from './surfaceNoise';

/** Shared, world-space parameters for the finite cloud slab. */
export const CLOUD_VOLUME_CONSTANTS = {
  baseY: 218,
  topY: 258,
  extent: 1800,
  maxDistance: 850,
  fadeStart: 650,
  textureSize: 128,
  uvScale: 0.0055,
  windX: 0.0014,
  windZ: 0.0008,
  extinction: 0.055,
  standardSteps: 20,
  highSteps: 32,
  reflectionSteps: 12,
  maxSteps: 32,
} as const;

export interface CloudSlabInterval {
  readonly enter: number;
  readonly exit: number;
}

/** Number of deterministic midpoint samples used by each public lighting preset. */
export function cloudStepCount(quality: LightingQuality): number {
  if (quality === 'high') return CLOUD_VOLUME_CONSTANTS.highSteps;
  if (quality === 'standard') return CLOUD_VOLUME_CONSTANTS.standardSteps;
  return 0;
}

/**
 * Intersect a ray with the horizontal cloud slab. Kept in TypeScript so the
 * boundary cases can be tested independently of a WebGL context.
 */
export function intersectCloudSlab(
  originY: number,
  rayY: number,
  maxDistance = CLOUD_VOLUME_CONSTANTS.maxDistance,
): CloudSlabInterval | null {
  if (!Number.isFinite(originY) || !Number.isFinite(rayY) || Math.abs(rayY) < 1e-5) return null;
  const a = (CLOUD_VOLUME_CONSTANTS.baseY - originY) / rayY;
  const b = (CLOUD_VOLUME_CONSTANTS.topY - originY) / rayY;
  const enter = Math.max(0, Math.min(a, b));
  const exit = Math.min(Math.max(a, b), Math.max(0, maxDistance));
  return exit > enter ? { enter, exit } : null;
}

/** Smooth flat-bottom/billowy-top envelope shared by tests and shader constants. */
export function cloudVerticalProfile(height01: number): number {
  const h = Math.max(0, Math.min(1, height01));
  const smoothstep = (lo: number, hi: number, x: number): number => {
    const t = Math.max(0, Math.min(1, (x - lo) / (hi - lo)));
    return t * t * (3 - 2 * t);
  };
  return smoothstep(0, 0.16, h) * (1 - smoothstep(0.68, 1, h));
}

/**
 * Beer-Lambert reference integrator for deterministic unit tests. Density is
 * sampled at fixed cell centres, matching the shader's temporal-stable scheme.
 */
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

/** Deterministic, mipmapped linear data used as weather shape and erosion. */
export function makeCloudVolumeTexture(
  size: number = CLOUD_VOLUME_CONSTANTS.textureSize,
): THREE.DataTexture {
  const texture = new THREE.DataTexture(buildCloudShadowData(size), size, size, THREE.RGBAFormat);
  texture.name = 'mineworld-cloud-volume-noise';
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.colorSpace = THREE.NoColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export const CLOUD_VOLUME_VERT = /* glsl */ `
varying vec3 vCloudEntry;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vCloudEntry = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim();

/**
 * Stable finite-height cloud integration. The loop has a compile-time ceiling,
 * while uStepCount selects exactly 20 or 32 midpoint samples without stochastic
 * jitter, temporal history, or camera-space noise.
 */
export const CLOUD_VOLUME_FRAG = /* glsl */ `
uniform sampler2D uCloudNoise;
uniform float uTime;
uniform int uStepCount;
uniform vec3 uTint;
uniform vec3 uSunDir;
varying vec3 vCloudEntry;

const float MW_CLOUD_BASE = 218.0;
const float MW_CLOUD_TOP = 258.0;
const float MW_CLOUD_MAX_DISTANCE = 850.0;
const float MW_CLOUD_FADE_START = 650.0;
const float MW_CLOUD_UV_SCALE = 0.0055;
const float MW_CLOUD_EXTINCTION = 0.055;

float mwSmooth01(float x) {
  x = clamp(x, 0.0, 1.0);
  return x * x * (3.0 - 2.0 * x);
}

float mwVerticalProfile(float h) {
  float bottom = mwSmooth01(h / 0.16);
  float top = 1.0 - mwSmooth01((h - 0.68) / 0.32);
  return bottom * top;
}

mat2 mwCloudRotation() {
  return mat2(0.8192, -0.5736, 0.5736, 0.8192);
}

float mwCloudDensity(vec3 p) {
  float h = clamp((p.y - MW_CLOUD_BASE) / (MW_CLOUD_TOP - MW_CLOUD_BASE), 0.0, 1.0);
  float vertical = mwVerticalProfile(h);
  vec2 wind = vec2(uTime * 0.0014, uTime * 0.0008);
  vec2 weatherUv = p.xz * MW_CLOUD_UV_SCALE + wind;
  // Height-dependent advection turns the 2D weather tile into a coherent 3D
  // billow: upper lobes lean and erode instead of forming vertical cotton boxes.
  vec2 heightWarp = vec2(
    h * 0.44 + sin(h * 7.0) * 0.04,
    -h * 0.33 + cos(h * 5.0) * 0.03
  );
  float macroA = texture2D(uCloudNoise, weatherUv + heightWarp).b;
  vec2 macroUvB = mwCloudRotation() * (weatherUv * 0.63)
    + vec2(0.347, 0.791) - wind * 0.17 - heightWarp.yx * 0.72;
  float macroB = texture2D(uCloudNoise, macroUvB).b;
  float macroShape = macroA * 0.68 + macroB * 0.32;
  vec2 detailUv = mwCloudRotation() * (weatherUv * 3.7)
    + heightWarp * 2.35 - wind * 0.31 + vec2(0.173, 0.619);
  vec4 detailSample = texture2D(uCloudNoise, detailUv);
  float billow = mix(detailSample.b, detailSample.a, 0.24);
  float shape = macroShape * 0.78 + billow * 0.22;
  float threshold = 0.52 + (1.0 - vertical) * 0.25 + (detailSample.a - 0.5) * 0.035;
  return smoothstep(threshold, threshold + 0.13, shape) * vertical;
}

void main() {
  vec3 rayDir = normalize(vCloudEntry - cameraPosition);
  if (abs(rayDir.y) < 0.00001) discard;

  float ta = (MW_CLOUD_BASE - cameraPosition.y) / rayDir.y;
  float tb = (MW_CLOUD_TOP - cameraPosition.y) / rayDir.y;
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
  vec3 ambient = uTint * mix(0.34, 0.58, sunHeight);

  vec3 integrated = vec3(0.0);
  float transmittance = 1.0;
  for (int i = 0; i < 32; i++) {
    if (i >= uStepCount) break;
    float t = rayEnter + (float(i) + 0.5) * stepLength;
    vec3 p = cameraPosition + rayDir * t;
    float density = mwCloudDensity(p);
    if (density > 0.001) {
      vec2 wind = vec2(uTime * 0.0014, uTime * 0.0008);
      vec2 shadowUv = (p.xz + sunDir.xz * 34.0) * MW_CLOUD_UV_SCALE + wind;
      float ahead = texture2D(uCloudNoise, shadowUv).b;
      float selfShadow = exp(-max(ahead - 0.43, 0.0) * 3.1) * (1.0 - density * 0.24);
      float edgeLight = pow(max(viewSun, 0.0), 5.0) * (1.0 - density) * sunHeight;
      vec3 lighting = ambient + warmSun * sunHeight * phase * selfShadow * 0.72;
      lighting += vec3(1.0, 0.91, 0.72) * edgeLight * 0.28;
      lighting = min(lighting, vec3(1.16));
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
