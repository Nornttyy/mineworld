import { describe, expect, it } from 'vitest';
import { sampleWaterWave, WATER_WAVE_CONSTANTS, WATER_WAVE_GLSL } from './waterWave';

function percentile(sortedValues: readonly number[], portion: number): number {
  return sortedValues[Math.floor((sortedValues.length - 1) * portion)];
}

describe('shared geometric water wave', () => {
  it('keeps the shader-facing coefficients numeric and the requested height curves exact', () => {
    const c = WATER_WAVE_CONSTANTS;
    for (const value of Object.values(c)) {
      if (Array.isArray(value)) {
        expect(value.every((component) => Number.isFinite(component))).toBe(true);
      } else {
        expect(Number.isFinite(value)).toBe(true);
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
    expect(WATER_WAVE_GLSL).toContain('float oceanH = 0.340 * q + (q * q - 0.170) * 0.040;');
    expect(WATER_WAVE_GLSL).not.toMatch(/NaN|undefined|Infinity/);
    expect(WATER_WAVE_GLSL).not.toMatch(/-0\.000/);
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
