/* eslint-disable @typescript-eslint/no-explicit-any */
// Unit test for SkyObjects.setDimension — verifies nether hides all sky objects,
// and overworld restores them via setLightingQuality.
import * as THREE from 'three';
import { describe, it, beforeAll, expect } from 'vitest';

// THREE's canvas texture helpers call document.createElement('canvas').getContext('2d').
// Node has no DOM → stub with a recursive Proxy that returns itself for any property/call,
// so createRadialGradient().addColorStop() and all other chained calls are no-ops.
function makeRecursiveProxy(): any {
  return new Proxy(function () {}, {
    get() { return makeRecursiveProxy(); },
    apply() { return makeRecursiveProxy(); },
    set() { return true; },
  });
}
const fakeCanvas = () => ({
  width: 0, height: 0,
  getContext: () => makeRecursiveProxy(),
  addEventListener() {}, style: {},
});
beforeAll(() => {
  if (typeof (globalThis as any).document === 'undefined') {
    (globalThis as any).document = {
      createElementNS: () => ({ addEventListener() {}, removeEventListener() {}, setAttribute() {}, style: {} }),
      createElement: () => fakeCanvas(),
    };
  }
});

import { SkyObjects } from './SkyObjects';

describe('SkyObjects.setDimension', () => {
  it('setDimension("nether") hides all 7 sky objects', () => {
    const so = new SkyObjects(new THREE.Scene()) as any;
    so.setDimension('nether');
    for (const m of [so.sun, so.moon, so.realSun, so.sunGlow, so.realMoon, so.voxelClouds, so.softClouds]) {
      expect(m.visible).toBe(false);
    }
  });

  it('setDimension("overworld") restores visibility via setLightingQuality', () => {
    const so = new SkyObjects(new THREE.Scene()) as any;
    // Set nether first, then restore
    so.setDimension('nether');
    so.setDimension('overworld');
    // After restoring overworld with default lq='off': sun and moon should be visible,
    // realSun/sunGlow/realMoon should NOT be visible (off mode = block sun/moon, not real)
    expect(so.sun.visible).toBe(true);
    expect(so.moon.visible).toBe(true);
    expect(so.realSun.visible).toBe(false);
    expect(so.realMoon.visible).toBe(false);
  });

  it('dim field defaults to overworld', () => {
    const so = new SkyObjects(new THREE.Scene()) as any;
    expect(so.dim).toBe('overworld');
  });

  it('lq field is stored when setLightingQuality is called', () => {
    const so = new SkyObjects(new THREE.Scene()) as any;
    so.setLightingQuality('standard');
    expect(so.lq).toBe('standard');
  });
});
