import { describe, expect, it } from 'vitest';
import { sampleWaterWave, WATER_WAVE_CONSTANTS, WATER_WAVE_GLSL } from './waterWave';

function percentile(sortedValues: readonly number[], portion: number): number {
  return sortedValues[Math.floor((sortedValues.length - 1) * portion)];
}

describe('shared geometric water wave', () => {
  it('keeps the shader-facing coefficients numeric and the requested height curves exact', () => {
    const c = WATER_WAVE_CONSTANTS;
    for (const value of Object.values(c)) {
      if (typeof value === 'number') {
        expect(Number.isFinite(value)).toBe(true);
        expect(value).toBe(Number(value.toFixed(3)));
      } else {
        expect(value.every((component) => Number.isFinite(component))).toBe(true);
        expect(value.every((component) => component === Number(component.toFixed(3)))).toBe(true);
      }
    }

    expect(c.calmLinear).toBe(0.145);
    expect(c.calmQuadratic).toBe(-0.055);
    expect(c.oceanLinear).toBe(0.34);
    expect(c.oceanQuadratic).toBe(0.04);
    expect(c.quadraticBias).toBe(0.17);
  });

  it('generates stable finite GLSL with the stronger deep-water curve', () => {
    expect(WATER_WAVE_GLSL).toContain('vec3 mwWaveField(vec2 p, float t, float ocean)');
    expect(WATER_WAVE_GLSL).toContain('float pgw =');
    expect(WATER_WAVE_GLSL).toContain('float p1w =');
    expect(WATER_WAVE_GLSL).toContain('float p2w =');
    expect(WATER_WAVE_GLSL).toContain('float p3w =');
    expect(WATER_WAVE_GLSL).toContain('groupPhaseGrad');
    expect(WATER_WAVE_GLSL).toContain('cos(p3w)');
    expect(WATER_WAVE_GLSL).toContain('float oceanH = 0.340 * q + (q * q - 0.170) * 0.040;');
    expect(WATER_WAVE_GLSL).not.toMatch(/NaN|undefined|Infinity/);
    expect(WATER_WAVE_GLSL).not.toMatch(/-0\.000/);
  });

  it('uses a bounded eight-direction spectrum without expanding the safe waterline envelope', () => {
    const c = WATER_WAVE_CONSTANTS;
    const directions = [c.dg, c.dgw, c.d1, c.d1w, c.d2, c.d2w, c.d3, c.d3w];
    for (const direction of directions) {
      expect(Math.hypot(direction[0], direction[1])).toBeCloseTo(1, 3);
    }
    const headingBins = new Set(
      directions.map((direction) =>
        Math.round(Math.atan2(direction[1], direction[0]) / (Math.PI / 12)),
      ),
    );
    expect(headingBins.size).toBeGreaterThanOrEqual(6);

    const waveNumbers = [
      c.groupWaveNumber,
      c.groupWarpWaveNumber,
      c.wave1Number,
      c.wave1WarpNumber,
      c.wave2Number,
      c.wave2WarpNumber,
      c.wave3Number,
      c.wave3WarpNumber,
    ];
    expect(new Set(waveNumbers).size).toBe(8);
    expect(Math.max(...waveNumbers) / Math.min(...waveNumbers)).toBeGreaterThan(16);
    for (const strength of [
      c.groupWarpStrength,
      c.wave1WarpStrength,
      c.wave2WarpStrength,
      c.wave3WarpStrength,
    ]) {
      expect(strength).toBeGreaterThan(0);
      expect(strength).toBeLessThanOrEqual(0.42);
    }

    // Phase modulation bends and splits each band but never changes its [-1, 1]
    // amplitude. The existing CPU waterline early-out therefore stays exact.
    const maxGroup = c.groupBase + Math.abs(c.groupAmplitude);
    const maxQ =
      Math.abs(c.wave1Weight) * maxGroup + Math.abs(c.wave2Weight) + Math.abs(c.wave3Weight);
    expect(maxGroup).toBe(1);
    expect(maxQ).toBe(1);
    const highestCrest = c.oceanLinear * maxQ + c.oceanQuadratic * (maxQ * maxQ - c.quadraticBias);
    const lowestTrough = -c.oceanLinear * maxQ + c.oceanQuadratic * (maxQ * maxQ - c.quadraticBias);
    const calmCrest = c.calmLinear * maxQ + c.calmQuadratic * maxQ * maxQ;
    const calmTrough = -c.calmLinear * maxQ + c.calmQuadratic * maxQ * maxQ;
    expect(highestCrest).toBeLessThan(0.38);
    expect(lowestTrough).toBeGreaterThan(-0.32);
    expect(calmCrest).toBeLessThan(0.091);
    expect(calmTrough).toBeGreaterThanOrEqual(-0.2);
  });

  it('matches centered finite differences for both analytic slopes', () => {
    const epsilon = 1e-4;
    const samples = [
      [-31.25, 8.75, -4.2, 0],
      [0, 0, 0, 1],
      [7.125, -19.875, 3.4, 0.35],
      [42.5, 57.75, 19.125, 1],
      [-83.625, -61.25, 103.75, 0.8],
    ] as const;

    for (const [x, z, time, ocean] of samples) {
      const wave = sampleWaterWave(x, z, time, ocean);
      const finiteX =
        (sampleWaterWave(x + epsilon, z, time, ocean).height -
          sampleWaterWave(x - epsilon, z, time, ocean).height) /
        (2 * epsilon);
      const finiteZ =
        (sampleWaterWave(x, z + epsilon, time, ocean).height -
          sampleWaterWave(x, z - epsilon, time, ocean).height) /
        (2 * epsilon);

      expect(Math.abs(wave.slopeX - finiteX)).toBeLessThan(1e-8);
      expect(Math.abs(wave.slopeZ - finiteZ)).toBeLessThan(1e-8);
    }
  });

  it('moves continuously between adjacent frames without spikes', () => {
    const positions = [
      [-48.5, -23.25],
      [-7.75, 12.125],
      [0, 0],
      [18.5, -39.75],
      [65.125, 51.5],
    ] as const;
    const frameSeconds = 1 / 60;

    for (const [x, z] of positions) {
      let previous = sampleWaterWave(x, z, -2, 1);
      for (let frame = 1; frame <= 360; frame++) {
        const current = sampleWaterWave(x, z, -2 + frame * frameSeconds, 1);
        expect(Math.abs(current.height - previous.height)).toBeLessThan(0.004);
        expect(Math.abs(current.slopeX - previous.slopeX)).toBeLessThan(0.004);
        expect(Math.abs(current.slopeZ - previous.slopeZ)).toBeLessThan(0.004);
        previous = current;
      }
    }
  });

  it('keeps half-block normal changes and dense one-frame motion below shimmer budgets', () => {
    let maxHalfBlockSlopeDelta = 0;
    let maxFrameHeightDelta = 0;
    let maxFrameSlopeDelta = 0;
    const frameSeconds = 1 / 60;

    for (const time of [0, 3.75, 9.5, 17.25]) {
      for (let z = -32; z <= 32; z += 2) {
        for (let x = -32; x <= 32; x += 2) {
          const current = sampleWaterWave(x, z, time, 1);
          const nextX = sampleWaterWave(x + 0.5, z, time, 1);
          const nextZ = sampleWaterWave(x, z + 0.5, time, 1);
          maxHalfBlockSlopeDelta = Math.max(
            maxHalfBlockSlopeDelta,
            Math.hypot(nextX.slopeX - current.slopeX, nextX.slopeZ - current.slopeZ),
            Math.hypot(nextZ.slopeX - current.slopeX, nextZ.slopeZ - current.slopeZ),
          );

          const nextFrame = sampleWaterWave(x, z, time + frameSeconds, 1);
          maxFrameHeightDelta = Math.max(
            maxFrameHeightDelta,
            Math.abs(nextFrame.height - current.height),
          );
          maxFrameSlopeDelta = Math.max(
            maxFrameSlopeDelta,
            Math.hypot(nextFrame.slopeX - current.slopeX, nextFrame.slopeZ - current.slopeZ),
          );
        }
      }
    }

    expect(maxHalfBlockSlopeDelta).toBeLessThan(0.08);
    expect(maxFrameHeightDelta).toBeLessThan(0.0034);
    expect(maxFrameSlopeDelta).toBeLessThan(0.0028);
  });

  it('breaks repeated crest spacing into an irregular but coherent train', () => {
    const peakPositions: number[] = [];
    const step = 0.1;
    const z = 7.25;
    const time = 4.5;
    let left = sampleWaterWave(-100, z, time, 1).height;
    let middle = sampleWaterWave(-100 + step, z, time, 1).height;
    for (let index = 2; index <= 2000; index++) {
      const x = -100 + index * step;
      const right = sampleWaterWave(x, z, time, 1).height;
      if (middle > left && middle >= right) peakPositions.push(x - step);
      left = middle;
      middle = right;
    }

    const intervals = peakPositions
      .slice(1)
      .map((position, index) => position - peakPositions[index]);
    const mean = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length;
    const deviation = Math.sqrt(
      intervals.reduce((sum, interval) => sum + (interval - mean) ** 2, 0) / intervals.length,
    );
    expect(peakPositions.length).toBeGreaterThan(24);
    expect(peakPositions.length).toBeLessThan(34);
    expect(Math.max(...intervals) / Math.min(...intervals)).toBeGreaterThan(2.5);
    expect(deviation / mean).toBeGreaterThan(0.22);
  });

  it('keeps the analytic CPU waterline within the half-block GPU triangle surface budget', () => {
    let maxInterpolationError = 0;
    const cellSize = 0.5;
    const fractions = [0.2, 0.5, 0.8] as const;

    for (const time of [0, 2.75, 8.5, 16.25]) {
      for (let z = -16; z < 16; z += cellSize) {
        for (let x = -16; x < 16; x += cellSize) {
          const h00 = sampleWaterWave(x, z, time, 1).height;
          const h01 = sampleWaterWave(x, z + cellSize, time, 1).height;
          const h11 = sampleWaterWave(x + cellSize, z + cellSize, time, 1).height;
          const h10 = sampleWaterWave(x + cellSize, z, time, 1).height;

          for (const u of fractions) {
            for (const v of fractions) {
              // Mesher triangles are (00,01,11) and (00,11,10).
              const interpolated =
                u <= v
                  ? h00 * (1 - v) + h01 * (v - u) + h11 * u
                  : h00 * (1 - u) + h11 * v + h10 * (u - v);
              const analytic = sampleWaterWave(x + u * cellSize, z + v * cellSize, time, 1).height;
              maxInterpolationError = Math.max(
                maxInterpolationError,
                Math.abs(interpolated - analytic),
              );
            }
          }
        }
      }
    }

    expect(maxInterpolationError).toBeLessThan(0.006);
  });

  it('has visible but bounded deep-water height and slope energy on a dense fixed grid', () => {
    const heights: number[] = [];
    const slopes: number[] = [];
    const times = [0, 1.75, 4.5, 9.25, 17] as const;
    const gridSize = 121;

    for (const time of times) {
      for (let iz = 0; iz < gridSize; iz++) {
        const z = -72 + (144 * iz) / (gridSize - 1);
        for (let ix = 0; ix < gridSize; ix++) {
          const x = -72 + (144 * ix) / (gridSize - 1);
          const wave = sampleWaterWave(x, z, time, 1);
          const slope = Math.hypot(wave.slopeX, wave.slopeZ);
          expect(Number.isFinite(wave.height)).toBe(true);
          expect(Number.isFinite(wave.slopeX)).toBe(true);
          expect(Number.isFinite(wave.slopeZ)).toBe(true);
          expect(Number.isFinite(slope)).toBe(true);
          heights.push(wave.height);
          slopes.push(slope);
        }
      }
    }

    heights.sort((a, b) => a - b);
    slopes.sort((a, b) => a - b);
    const heightRms = Math.sqrt(
      heights.reduce((sum, height) => sum + height * height, 0) / heights.length,
    );
    const slopeRms = Math.sqrt(
      slopes.reduce((sum, slope) => sum + slope * slope, 0) / slopes.length,
    );
    const heightRange = heights[heights.length - 1] - heights[0];
    const slopeP95 = percentile(slopes, 0.95);

    expect(heightRange).toBeGreaterThan(0.62);
    expect(heightRange).toBeLessThan(0.7);
    expect(heightRms).toBeGreaterThanOrEqual(0.11);
    expect(heightRms).toBeLessThan(0.15);
    expect(slopeRms).toBeGreaterThan(0.075);
    expect(slopeRms).toBeLessThan(0.11);
    expect(slopeP95).toBeGreaterThan(0.12);
    expect(slopeP95).toBeLessThan(0.18);
    expect(slopes[slopes.length - 1]).toBeLessThan(0.2);
  });
});
