/**
 * Shared parameters for the geometric water-wave field.
 *
 * Every leaf is a number so the renderer can interpolate the values directly
 * into GLSL while CPU-side diagnostics use the exact same coefficients.
 */
export const WATER_WAVE_CONSTANTS = {
  dg: [-0.3, 0.954],
  d1: [0.821, 0.571],
  d2: [-0.419, 0.908],
  d3: [0.96, -0.28],
  groupWaveNumber: 0.075,
  groupTimeRate: -0.07,
  groupBase: 0.76,
  groupAmplitude: 0.24,
  wave1Number: 0.2,
  wave1TimeRate: 0.24,
  wave1Weight: 0.42,
  wave2Number: 0.8,
  wave2TimeRate: -0.58,
  wave2Weight: 0.4,
  wave3Number: 1.08,
  wave3TimeRate: 0.8,
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

const wave = WATER_WAVE_CONSTANTS;

/** Complete shader implementation generated from {@link WATER_WAVE_CONSTANTS}. */
export const WATER_WAVE_GLSL = `
vec3 mwWaveField(vec2 p, float t, float ocean) {
  vec2 dg = vec2(${glslFloat(wave.dg[0])}, ${glslFloat(wave.dg[1])});
  vec2 d1 = vec2(${glslFloat(wave.d1[0])}, ${glslFloat(wave.d1[1])});
  vec2 d2 = vec2(${glslFloat(wave.d2[0])}, ${glslFloat(wave.d2[1])});
  vec2 d3 = vec2(${glslFloat(wave.d3[0])}, ${glslFloat(wave.d3[1])});
  float pg = dot(p, dg) * ${glslFloat(wave.groupWaveNumber)} ${glslSignedProduct(wave.groupTimeRate, 't')};
  float sg = sin(pg);
  float cg = cos(pg);
  float group = ${glslFloat(wave.groupBase)} + ${glslFloat(wave.groupAmplitude)} * sg;
  vec2 groupGrad = ${glslFloat(wave.groupAmplitude)} * ${glslFloat(wave.groupWaveNumber)} * cg * dg;
  float p1 = dot(p, d1) * ${glslFloat(wave.wave1Number)} ${glslSignedProduct(wave.wave1TimeRate, 't')};
  float p2 = dot(p, d2) * ${glslFloat(wave.wave2Number)} ${glslSignedProduct(wave.wave2TimeRate, 't')};
  float p3 = dot(p, d3) * ${glslFloat(wave.wave3Number)} ${glslSignedProduct(wave.wave3TimeRate, 't')};
  float s1 = sin(p1), s2 = sin(p2), s3 = sin(p3);
  float q = ${glslFloat(wave.wave1Weight)} * group * s1
    + ${glslFloat(wave.wave2Weight)} * s2
    + ${glslFloat(wave.wave3Weight)} * s3;
  vec2 qGrad = ${glslFloat(wave.wave1Weight)} * (groupGrad * s1 + group * cos(p1) * ${glslFloat(wave.wave1Number)} * d1)
    + ${glslFloat(wave.wave2Weight)} * cos(p2) * ${glslFloat(wave.wave2Number)} * d2
    + ${glslFloat(wave.wave3Weight)} * cos(p3) * ${glslFloat(wave.wave3Number)} * d3;
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

/** Samples the same wave height and analytic horizontal derivatives used by GLSL. */
export function sampleWaterWave(
  x: number,
  z: number,
  time: number,
  ocean: number,
): WaterWaveSample {
  const c = WATER_WAVE_CONSTANTS;
  const groupPhase = (x * c.dg[0] + z * c.dg[1]) * c.groupWaveNumber + time * c.groupTimeRate;
  const groupSin = Math.sin(groupPhase);
  const groupCos = Math.cos(groupPhase);
  const group = c.groupBase + c.groupAmplitude * groupSin;
  const groupSlopeScale = c.groupAmplitude * c.groupWaveNumber * groupCos;
  const groupSlopeX = groupSlopeScale * c.dg[0];
  const groupSlopeZ = groupSlopeScale * c.dg[1];

  const phase1 = (x * c.d1[0] + z * c.d1[1]) * c.wave1Number + time * c.wave1TimeRate;
  const phase2 = (x * c.d2[0] + z * c.d2[1]) * c.wave2Number + time * c.wave2TimeRate;
  const phase3 = (x * c.d3[0] + z * c.d3[1]) * c.wave3Number + time * c.wave3TimeRate;
  const sin1 = Math.sin(phase1);
  const sin2 = Math.sin(phase2);
  const sin3 = Math.sin(phase3);
  const cos1 = Math.cos(phase1);
  const cos2 = Math.cos(phase2);
  const cos3 = Math.cos(phase3);

  const q = c.wave1Weight * group * sin1 + c.wave2Weight * sin2 + c.wave3Weight * sin3;
  const qSlopeX =
    c.wave1Weight * (groupSlopeX * sin1 + group * cos1 * c.wave1Number * c.d1[0]) +
    c.wave2Weight * cos2 * c.wave2Number * c.d2[0] +
    c.wave3Weight * cos3 * c.wave3Number * c.d3[0];
  const qSlopeZ =
    c.wave1Weight * (groupSlopeZ * sin1 + group * cos1 * c.wave1Number * c.d1[1]) +
    c.wave2Weight * cos2 * c.wave2Number * c.d2[1] +
    c.wave3Weight * cos3 * c.wave3Number * c.d3[1];

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
