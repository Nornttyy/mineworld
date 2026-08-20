import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import {
  CLOUD_VOLUME_FRAG,
  cloudStepCount,
  cloudVerticalProfile,
  integrateCloudOpacity,
  intersectCloudSlab,
  makeCloudVolumeTexture,
} from './cloudVolume';

describe('finite cloud volume', () => {
  it('uses fixed quality sample counts and no temporal jitter', () => {
    expect(cloudStepCount('off')).toBe(0);
    expect(cloudStepCount('standard')).toBe(20);
    expect(cloudStepCount('high')).toBe(32);
    expect(CLOUD_VOLUME_FRAG).toContain('for (int i = 0; i < 32; i++)');
    expect(CLOUD_VOLUME_FRAG).toContain('(float(i) + 0.5) * stepLength');
    expect(CLOUD_VOLUME_FRAG).not.toMatch(/jitter|blueNoise|history/i);
  });

  it('intersects the slab from below, inside, and above', () => {
    expect(intersectCloudSlab(118, 1)).toEqual({ enter: 100, exit: 140 });
    expect(intersectCloudSlab(230, 1)).toEqual({ enter: 0, exit: 28 });
    expect(intersectCloudSlab(300, -1)).toEqual({ enter: 42, exit: 82 });
    expect(intersectCloudSlab(118, -1)).toBeNull();
    expect(intersectCloudSlab(118, 0)).toBeNull();
  });

  it('builds a flat-bottom, billowy-top density envelope', () => {
    expect(cloudVerticalProfile(0)).toBe(0);
    expect(cloudVerticalProfile(0.16)).toBeCloseTo(1, 8);
    expect(cloudVerticalProfile(0.5)).toBeCloseTo(1, 8);
    expect(cloudVerticalProfile(1)).toBe(0);
    expect(cloudVerticalProfile(0.82)).toBeGreaterThan(0);
  });

  it('keeps 20 and 32 midpoint steps close to a 64-step opacity reference', () => {
    const densityAt = (x: number): number =>
      Math.max(0, Math.min(1, 0.42 + Math.sin(x * 5.7) * 0.17 + Math.sin(x * 13.1) * 0.07));
    const integrate = (steps: number): number =>
      integrateCloudOpacity(
        Array.from({ length: steps }, (_, i) => densityAt((i + 0.5) / steps)),
        40,
      );
    const reference = integrate(64);
    expect(Math.abs(integrate(20) - reference)).toBeLessThan(0.015);
    expect(Math.abs(integrate(32) - reference)).toBeLessThan(0.008);
  });

  it('creates a seamless linear repeat texture for world-space density', () => {
    const texture = makeCloudVolumeTexture(32);
    expect(texture.image.width).toBe(32);
    expect(texture.image.height).toBe(32);
    expect(texture.wrapS).toBe(THREE.RepeatWrapping);
    expect(texture.wrapT).toBe(THREE.RepeatWrapping);
    expect(texture.colorSpace).toBe(THREE.NoColorSpace);
    expect(texture.generateMipmaps).toBe(true);
    texture.dispose();
  });
});
