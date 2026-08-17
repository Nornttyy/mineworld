import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import {
  DEFAULT_DIRECTIONAL_WAVE_SIZE,
  buildCloudShadowData,
  buildDirectionalWaveData,
  buildSurfaceNoiseData,
  makeCloudShadowTexture,
  makeDirectionalWaveTexture,
} from './surfaceNoise';

describe('surface noise texture', () => {
  it('is deterministic, RGBA, and contains useful normal/height variation', () => {
    const a = buildSurfaceNoiseData(32);
    const b = buildSurfaceNoiseData(32);
    expect(a).toEqual(b);
    expect(a).toHaveLength(32 * 32 * 4);

    const ranges = [0, 1, 2, 3].map((channel) => {
      let lo = 255;
      let hi = 0;
      for (let i = channel; i < a.length; i += 4) {
        lo = Math.min(lo, a[i]);
        hi = Math.max(hi, a[i]);
      }
      return hi - lo;
    });
    expect(ranges[0]).toBeGreaterThan(20);
    expect(ranges[1]).toBeGreaterThan(20);
    expect(ranges[2]).toBeGreaterThan(180);
    expect(ranges[3]).toBeGreaterThan(100);
  });

  it('rejects non-power-of-two sizes so generated mipmaps remain portable', () => {
    expect(() => buildSurfaceNoiseData(30)).toThrow(/power of two/);
  });

  it('keeps the broad fBm field available through the explicit cloud-shadow API', () => {
    expect(buildCloudShadowData(32)).toEqual(buildSurfaceNoiseData(32));

    const texture = makeCloudShadowTexture(32);
    expect(texture.name).toBe('mineworld-cloud-shadow-noise');
    expect(texture.wrapS).toBe(THREE.RepeatWrapping);
    expect(texture.wrapT).toBe(THREE.RepeatWrapping);
    expect(texture.colorSpace).toBe(THREE.NoColorSpace);
    texture.dispose();
  });
});

describe('directional water-wave texture', () => {
  it('defaults to a deterministic 256px linear RGBA data tile', () => {
    expect(DEFAULT_DIRECTIONAL_WAVE_SIZE).toBeGreaterThanOrEqual(256);
    const a = buildDirectionalWaveData();
    const b = buildDirectionalWaveData();
    expect(a).toEqual(b);
    expect(a).toHaveLength(DEFAULT_DIRECTIONAL_WAVE_SIZE ** 2 * 4);

    const ranges = [0, 1, 2, 3].map((channel) => {
      let lo = 255;
      let hi = 0;
      for (let i = channel; i < a.length; i += 4) {
        lo = Math.min(lo, a[i]);
        hi = Math.max(hi, a[i]);
      }
      return hi - lo;
    });
    expect(ranges[0]).toBeGreaterThan(70);
    expect(ranges[1]).toBeGreaterThan(45);
    expect(ranges[2]).toBeGreaterThan(240);
    expect(ranges[3]).toBeGreaterThan(180);
  });

  it('encodes bounded, useful normals that agree with the wrapped height gradient', () => {
    const size = DEFAULT_DIRECTIONAL_WAVE_SIZE;
    const data = buildDirectionalWaveData(size);
    const heightAt = (x: number, y: number): number => {
      const wx = (x + size) % size;
      const wy = (y + size) % size;
      return data[(wx + wy * size) * 4 + 2] / 255;
    };
    let horizontalNormalSum = 0;
    let signMatches = 0;
    let signSamples = 0;
    let maxHorizontalNormalSq = 0;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = (x + y * size) * 4;
        const nx = (data[i] / 255) * 2 - 1;
        const nz = (data[i + 1] / 255) * 2 - 1;
        const horizontalSq = nx * nx + nz * nz;
        horizontalNormalSum += Math.sqrt(horizontalSq);
        maxHorizontalNormalSq = Math.max(maxHorizontalNormalSq, horizontalSq);

        const dx = heightAt(x + 1, y) - heightAt(x - 1, y);
        const dz = heightAt(x, y + 1) - heightAt(x, y - 1);
        if (Math.abs(dx) > 1 / 255) {
          signSamples++;
          if (Math.sign(nx) === -Math.sign(dx)) signMatches++;
        }
        if (Math.abs(dz) > 1 / 255) {
          signSamples++;
          if (Math.sign(nz) === -Math.sign(dz)) signMatches++;
        }
      }
    }

    const meanHorizontalNormal = horizontalNormalSum / (size * size);
    expect(meanHorizontalNormal).toBeGreaterThan(0.1);
    expect(meanHorizontalNormal).toBeLessThan(0.55);
    expect(maxHorizontalNormalSq).toBeLessThan(1.03);
    expect(signMatches / signSamples).toBeGreaterThan(0.96);
  });

  it('has directional energy without a discontinuity at the repeating seam', () => {
    const size = DEFAULT_DIRECTIONAL_WAVE_SIZE;
    const data = buildDirectionalWaveData(size);
    const h = (x: number, y: number): number => data[(x + y * size) * 4 + 2] / 255;
    let energyX = 0;
    let energyY = 0;
    let interiorEdge = 0;
    let seamEdge = 0;
    for (let y = 0; y < size; y++) {
      seamEdge += Math.abs(h(0, y) - h(size - 1, y));
      for (let x = 0; x < size; x++) {
        const nextX = (x + 1) % size;
        const nextY = (y + 1) % size;
        const dx = h(nextX, y) - h(x, y);
        const dy = h(x, nextY) - h(x, y);
        energyX += dx * dx;
        energyY += dy * dy;
        if (x < size - 1) interiorEdge += Math.abs(dx);
      }
    }
    const meanInteriorEdge = interiorEdge / (size * (size - 1));
    const meanSeamEdge = seamEdge / size;
    expect(energyX / energyY).toBeGreaterThan(1.3);
    expect(meanSeamEdge).toBeLessThan(meanInteriorEdge * 2.2);
  });

  it('creates a repeat-wrapped mipmapped texture and rejects undersized tiles', () => {
    expect(() => buildDirectionalWaveData(128)).toThrow(/>= 256/);
    expect(() => buildDirectionalWaveData(300)).toThrow(/power of two/);

    const texture = makeDirectionalWaveTexture();
    expect(texture.name).toBe('mineworld-directional-wave');
    expect(texture.image.width).toBe(DEFAULT_DIRECTIONAL_WAVE_SIZE);
    expect(texture.image.height).toBe(DEFAULT_DIRECTIONAL_WAVE_SIZE);
    expect(texture.wrapS).toBe(THREE.RepeatWrapping);
    expect(texture.wrapT).toBe(THREE.RepeatWrapping);
    expect(texture.minFilter).toBe(THREE.LinearMipmapLinearFilter);
    expect(texture.magFilter).toBe(THREE.LinearFilter);
    expect(texture.generateMipmaps).toBe(true);
    expect(texture.colorSpace).toBe(THREE.NoColorSpace);
    expect(texture.anisotropy).toBe(8);
    texture.dispose();
  });
});
