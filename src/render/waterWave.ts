/**
 * Shared parameters for the geometric water-wave field.
 *
 * Every leaf is a number so the renderer can interpolate the values directly
 * into GLSL while CPU-side diagnostics use the exact same coefficients.
 */
export const WATER_WAVE_CONSTANTS = {
  dg: [-0.3, 0.954],
  dgw: [0.847, 0.532],
  d1: [0.821, 0.571],
  d1w: [-0.173, 0.985],
  d2: [-0.419, 0.908],
  d2w: [0.982, 0.188],
  d3: [0.96, -0.28],
  d3w: [-0.735, -0.678],
  groupWaveNumber: 0.075,
  groupTimeRate: -0.07,
  groupWarpWaveNumber: 0.131,
  groupWarpTimeRate: 0.093,
  groupWarpPhase: 1.11,
  groupWarpStrength: 0.42,
  groupBase: 0.76,
  groupAmplitude: 0.24,
  wave1Number: 0.22,
  wave1TimeRate: 0.24,
  wave1WarpNumber: 0.34,
  wave1WarpTimeRate: -0.3,
  wave1WarpPhase: 1.37,
  wave1WarpStrength: 0.24,
  wave1Weight: 0.42,
  wave2Number: 0.7,
  wave2TimeRate: -0.54,
  wave2WarpNumber: 0.96,
  wave2WarpTimeRate: 0.72,
  wave2WarpPhase: -0.83,
  wave2WarpStrength: 0.18,
  wave2Weight: 0.4,
  wave3Number: 1.12,
  wave3TimeRate: 0.86,
  wave3WarpNumber: 1.42,
  wave3WarpTimeRate: -1.08,
  wave3WarpPhase: 2.11,
  wave3WarpStrength: 0.14,
  wave3Weight: 0.18,
  calmLinear: 0.145,
  calmQuadratic: -0.055,
  oceanLinear: 0.34,
  oceanQuadratic: 0.04,
  quadraticBias: 0.17,
} as const;

export interface WaterWaveSample {
  height: number;
  slopeX: number;
  slopeZ: number;
}

function glslFloat(value: number): string {
  if (!Number.isFinite(value)) throw new Error(`Water-wave GLSL constant must be finite: ${value}`);
  return (Object.is(value, -0) ? 0 : value).toFixed(3);
}

function glslSignedProduct(value: number, left: string): string {
  return `${value < 0 ? '-' : '+'} ${left} * ${glslFloat(Math.abs(value))}`;
}

function glslSignedTerm(value: number): string {
  return `${value < 0 ? '-' : '+'} ${glslFloat(Math.abs(value))}`;
}

const wave = WATER_WAVE_CONSTANTS;

/** Complete shader implementation generated from {@link WATER_WAVE_CONSTANTS}. */
export const WATER_WAVE_GLSL = `
vec3 mwWaveField(vec2 p, float t, float ocean) {
  vec2 dg = vec2(${glslFloat(wave.dg[0])}, ${glslFloat(wave.dg[1])});
  vec2 dgw = vec2(${glslFloat(wave.dgw[0])}, ${glslFloat(wave.dgw[1])});
  vec2 d1 = vec2(${glslFloat(wave.d1[0])}, ${glslFloat(wave.d1[1])});
  vec2 d1w = vec2(${glslFloat(wave.d1w[0])}, ${glslFloat(wave.d1w[1])});
  vec2 d2 = vec2(${glslFloat(wave.d2[0])}, ${glslFloat(wave.d2[1])});
  vec2 d2w = vec2(${glslFloat(wave.d2w[0])}, ${glslFloat(wave.d2w[1])});
  vec2 d3 = vec2(${glslFloat(wave.d3[0])}, ${glslFloat(wave.d3[1])});
  vec2 d3w = vec2(${glslFloat(wave.d3w[0])}, ${glslFloat(wave.d3w[1])});
  float pgw = dot(p, dgw) * ${glslFloat(wave.groupWarpWaveNumber)} ${glslSignedProduct(wave.groupWarpTimeRate, 't')} ${glslSignedTerm(wave.groupWarpPhase)};
  float pg = dot(p, dg) * ${glslFloat(wave.groupWaveNumber)} ${glslSignedProduct(wave.groupTimeRate, 't')}
    + ${glslFloat(wave.groupWarpStrength)} * sin(pgw);
  float sg = sin(pg), cg = cos(pg), cgw = cos(pgw);
  float group = ${glslFloat(wave.groupBase)} + ${glslFloat(wave.groupAmplitude)} * sg;
  vec2 groupPhaseGrad = ${glslFloat(wave.groupWaveNumber)} * dg
    + ${glslFloat(wave.groupWarpStrength)} * cgw * ${glslFloat(wave.groupWarpWaveNumber)} * dgw;
  vec2 groupGrad = ${glslFloat(wave.groupAmplitude)} * cg * groupPhaseGrad;
  float p1w = dot(p, d1w) * ${glslFloat(wave.wave1WarpNumber)} ${glslSignedProduct(wave.wave1WarpTimeRate, 't')} ${glslSignedTerm(wave.wave1WarpPhase)};
  float p2w = dot(p, d2w) * ${glslFloat(wave.wave2WarpNumber)} ${glslSignedProduct(wave.wave2WarpTimeRate, 't')} ${glslSignedTerm(wave.wave2WarpPhase)};
  float p3w = dot(p, d3w) * ${glslFloat(wave.wave3WarpNumber)} ${glslSignedProduct(wave.wave3WarpTimeRate, 't')} ${glslSignedTerm(wave.wave3WarpPhase)};
  float p1 = dot(p, d1) * ${glslFloat(wave.wave1Number)} ${glslSignedProduct(wave.wave1TimeRate, 't')}
    + ${glslFloat(wave.wave1WarpStrength)} * sin(p1w);
  float p2 = dot(p, d2) * ${glslFloat(wave.wave2Number)} ${glslSignedProduct(wave.wave2TimeRate, 't')}
    + ${glslFloat(wave.wave2WarpStrength)} * sin(p2w);
  float p3 = dot(p, d3) * ${glslFloat(wave.wave3Number)} ${glslSignedProduct(wave.wave3TimeRate, 't')}
    + ${glslFloat(wave.wave3WarpStrength)} * sin(p3w);
  float s1 = sin(p1), s2 = sin(p2), s3 = sin(p3);
  vec2 p1Grad = ${glslFloat(wave.wave1Number)} * d1
    + ${glslFloat(wave.wave1WarpStrength)} * cos(p1w) * ${glslFloat(wave.wave1WarpNumber)} * d1w;
  vec2 p2Grad = ${glslFloat(wave.wave2Number)} * d2
    + ${glslFloat(wave.wave2WarpStrength)} * cos(p2w) * ${glslFloat(wave.wave2WarpNumber)} * d2w;
  vec2 p3Grad = ${glslFloat(wave.wave3Number)} * d3
    + ${glslFloat(wave.wave3WarpStrength)} * cos(p3w) * ${glslFloat(wave.wave3WarpNumber)} * d3w;
  float q = ${glslFloat(wave.wave1Weight)} * group * s1
    + ${glslFloat(wave.wave2Weight)} * s2
    + ${glslFloat(wave.wave3Weight)} * s3;
  vec2 qGrad = ${glslFloat(wave.wave1Weight)} * (groupGrad * s1 + group * cos(p1) * p1Grad)
    + ${glslFloat(wave.wave2Weight)} * cos(p2) * p2Grad
    + ${glslFloat(wave.wave3Weight)} * cos(p3) * p3Grad;
  float calmH = ${glslFloat(wave.calmLinear)} * q ${glslSignedProduct(wave.calmQuadratic, 'q * q')};
  float oceanH = ${glslFloat(wave.oceanLinear)} * q ${glslSignedProduct(wave.oceanQuadratic, `(q * q - ${glslFloat(wave.quadraticBias)})`)};
  float h = mix(calmH, oceanH, ocean);
  float dhdq = mix(
    ${glslFloat(wave.calmLinear)} ${glslSignedProduct(2 * wave.calmQuadratic, 'q')},
    ${glslFloat(wave.oceanLinear)} ${glslSignedProduct(2 * wave.oceanQuadratic, 'q')},
    ocean
  );
  vec2 hGrad = dhdq * qGrad;
  return vec3(h, hGrad);
}`.trim();

function sampleWarpedSine(
  x: number,
  z: number,
  time: number,
  direction: readonly [number, number],
  waveNumber: number,
  timeRate: number,
  warpDirection: readonly [number, number],
  warpWaveNumber: number,
  warpTimeRate: number,
  warpPhase: number,
  warpStrength: number,
): WaterWaveSample {
  const warp =
    (x * warpDirection[0] + z * warpDirection[1]) * warpWaveNumber +
    time * warpTimeRate +
    warpPhase;
  const warpCos = Math.cos(warp);
  const phase =
    (x * direction[0] + z * direction[1]) * waveNumber +
    time * timeRate +
    warpStrength * Math.sin(warp);
  const phaseCos = Math.cos(phase);
  return {
    height: Math.sin(phase),
    slopeX:
      phaseCos *
      (waveNumber * direction[0] + warpStrength * warpCos * warpWaveNumber * warpDirection[0]),
    slopeZ:
      phaseCos *
      (waveNumber * direction[1] + warpStrength * warpCos * warpWaveNumber * warpDirection[1]),
  };
}

/** Samples the same wave height and analytic horizontal derivatives used by GLSL. */
export function sampleWaterWave(
  x: number,
  z: number,
  time: number,
  ocean: number,
): WaterWaveSample {
  const c = WATER_WAVE_CONSTANTS;
  const groupWave = sampleWarpedSine(
    x,
    z,
    time,
    c.dg,
    c.groupWaveNumber,
    c.groupTimeRate,
    c.dgw,
    c.groupWarpWaveNumber,
    c.groupWarpTimeRate,
    c.groupWarpPhase,
    c.groupWarpStrength,
  );
  const group = c.groupBase + c.groupAmplitude * groupWave.height;
  const groupSlopeX = c.groupAmplitude * groupWave.slopeX;
  const groupSlopeZ = c.groupAmplitude * groupWave.slopeZ;
  const wave1 = sampleWarpedSine(
    x,
    z,
    time,
    c.d1,
    c.wave1Number,
    c.wave1TimeRate,
    c.d1w,
    c.wave1WarpNumber,
    c.wave1WarpTimeRate,
    c.wave1WarpPhase,
    c.wave1WarpStrength,
  );
  const wave2 = sampleWarpedSine(
    x,
    z,
    time,
    c.d2,
    c.wave2Number,
    c.wave2TimeRate,
    c.d2w,
    c.wave2WarpNumber,
    c.wave2WarpTimeRate,
    c.wave2WarpPhase,
    c.wave2WarpStrength,
  );
  const wave3 = sampleWarpedSine(
    x,
    z,
    time,
    c.d3,
    c.wave3Number,
    c.wave3TimeRate,
    c.d3w,
    c.wave3WarpNumber,
    c.wave3WarpTimeRate,
    c.wave3WarpPhase,
    c.wave3WarpStrength,
  );

  const q =
    c.wave1Weight * group * wave1.height +
    c.wave2Weight * wave2.height +
    c.wave3Weight * wave3.height;
  const qSlopeX =
    c.wave1Weight * (groupSlopeX * wave1.height + group * wave1.slopeX) +
    c.wave2Weight * wave2.slopeX +
    c.wave3Weight * wave3.slopeX;
  const qSlopeZ =
    c.wave1Weight * (groupSlopeZ * wave1.height + group * wave1.slopeZ) +
    c.wave2Weight * wave2.slopeZ +
    c.wave3Weight * wave3.slopeZ;

  const qSquared = q * q;
  const calmHeight = c.calmLinear * q + c.calmQuadratic * qSquared;
  const oceanHeight = c.oceanLinear * q + c.oceanQuadratic * (qSquared - c.quadraticBias);
  const height = calmHeight + (oceanHeight - calmHeight) * ocean;
  const calmDerivative = c.calmLinear + 2 * c.calmQuadratic * q;
  const oceanDerivative = c.oceanLinear + 2 * c.oceanQuadratic * q;
  const heightDerivative = calmDerivative + (oceanDerivative - calmDerivative) * ocean;

  return {
    height,
    slopeX: heightDerivative * qSlopeX,
    slopeZ: heightDerivative * qSlopeZ,
  };
}
