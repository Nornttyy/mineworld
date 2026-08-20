import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import {
  CLOUD_VOLUME_FRAG,
  buildCloudDetailData,
  cloudStepCount,
  cloudVerticalProfile,
  integrateCloudOpacity,
  intersectCloudVolume,
  makeCloudDetailTexture3D,
  makeCloudWeatherTexture,
  samplePeriodicCloudNoise3D,
} from './cloudVolume';

describe('three-dimensional cloud volume', () => {
  it('uses fixed quality sample counts and no temporal jitter', () => {
    expect(cloudStepCount('off')).toBe(0);
    expect(cloudStepCount('standard')).toBe(36);
    expect(cloudStepCount('high')).toBe(64);
    expect(CLOUD_VOLUME_FRAG).toContain('for (int i = 0; i < 64; i++)');
    expect(CLOUD_VOLUME_FRAG).toContain('(float(i) + samplePhase) * stepLength');
    expect(CLOUD_VOLUME_FRAG).toContain('cameraPosition * 0.0013 + rayDir');
    expect(CLOUD_VOLUME_FRAG).not.toMatch(/blueNoise/i);
  });

  it('intersects the full multi-height field from below, inside, and above', () => {
    expect(intersectCloudVolume(118, 1)).toEqual({ enter: 27, exit: 247 });
    expect(intersectCloudVolume(230, 1)).toEqual({ enter: 0, exit: 135 });
    expect(intersectCloudVolume(400, -1)).toEqual({ enter: 35, exit: 255 });
    expect(intersectCloudVolume(118, -1)).toBeNull();
    expect(intersectCloudVolume(118, 0)).toBeNull();
  });

  it('builds a flat-bottom, billowy-top density envelope', () => {
    expect(cloudVerticalProfile(0)).toBe(0);
    expect(cloudVerticalProfile(0.12)).toBeCloseTo(1, 8);
    expect(cloudVerticalProfile(0.5)).toBeCloseTo(1, 8);
    expect(cloudVerticalProfile(1)).toBe(0);
    expect(cloudVerticalProfile(0.82)).toBeGreaterThan(0);
  });

  it('keeps 36 and 64 midpoint steps close to a 128-step opacity reference', () => {
    const densityAt = (x: number): number =>
      Math.max(0, Math.min(1, 0.42 + Math.sin(x * 5.7) * 0.17 + Math.sin(x * 13.1) * 0.07));
    const integrate = (steps: number): number =>
      integrateCloudOpacity(
        Array.from({ length: steps }, (_, i) => densityAt((i + 0.5) / steps)),
        40,
      );
    const reference = integrate(128);
    expect(Math.abs(integrate(36) - reference)).toBeLessThan(0.012);
    expect(Math.abs(integrate(64) - reference)).toBeLessThan(0.006);
  });

  it('creates independent periodic density in x, y, and z', () => {
    const origin = samplePeriodicCloudNoise3D(0.173, 0.291, 0.637);
    expect(samplePeriodicCloudNoise3D(1.173, 0.291, 0.637)).toBeCloseTo(origin, 12);
    expect(samplePeriodicCloudNoise3D(0.173, 1.291, 0.637)).toBeCloseTo(origin, 12);
    expect(samplePeriodicCloudNoise3D(0.173, 0.291, 1.637)).toBeCloseTo(origin, 12);
    expect(samplePeriodicCloudNoise3D(0.173, 0.491, 0.637)).not.toBeCloseTo(origin, 3);
    expect(CLOUD_VOLUME_FRAG).toContain('uniform sampler3D uCloudDetail3D');
    expect(CLOUD_VOLUME_FRAG).toContain('texture(uCloudDetail3D');
  });

  it('creates repeatable 2D weather and a trilinear 3D density texture', () => {
    const weather = makeCloudWeatherTexture(32);
    expect(weather.image.width).toBe(32);
    expect(weather.image.height).toBe(32);
    expect(weather.wrapS).toBe(THREE.RepeatWrapping);
    expect(weather.wrapT).toBe(THREE.RepeatWrapping);
    expect(weather.colorSpace).toBe(THREE.NoColorSpace);
    expect(weather.generateMipmaps).toBe(true);

    const data = buildCloudDetailData(16);
    const detail = makeCloudDetailTexture3D(16);
    expect(data.length).toBe(16 ** 3);
    expect(detail.image.width).toBe(16);
    expect(detail.image.height).toBe(16);
    expect(detail.image.depth).toBe(16);
    expect(detail.wrapR).toBe(THREE.RepeatWrapping);
    expect(detail.format).toBe(THREE.RedFormat);
    expect(detail.colorSpace).toBe(THREE.NoColorSpace);
    weather.dispose();
    detail.dispose();
  });
});
