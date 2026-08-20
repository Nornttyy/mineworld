import * as THREE from 'three';
import { describe, expect, it, vi } from 'vitest';
import { PlanarReflection, SEA_SURFACE_Y } from './PlanarReflection';

function fakeRenderer(renderImpl?: () => void) {
  const viewport = new THREE.Vector4(7, 9, 800, 450);
  const scissor = new THREE.Vector4(11, 13, 700, 400);
  const render = vi.fn(() => renderImpl?.());
  const setRenderTarget = vi.fn();
  const setViewport = vi.fn();
  const setScissor = vi.fn();
  const setScissorTest = vi.fn();
  const clear = vi.fn();
  const depthMask = vi.fn();
  const glContext = {
    DEPTH_WRITEMASK: 0x0b72,
    getParameter: vi.fn(() => false),
  };
  const xr = { enabled: true };
  const shadowMap = { autoUpdate: true, needsUpdate: true };
  const renderer = {
    xr,
    shadowMap,
    state: { buffers: { depth: { setMask: depthMask } } },
    getContext: vi.fn(() => glContext),
    getRenderTarget: vi.fn(() => null),
    getViewport: vi.fn((out: THREE.Vector4) => out.copy(viewport)),
    getScissor: vi.fn((out: THREE.Vector4) => out.copy(scissor)),
    getScissorTest: vi.fn(() => true),
    setRenderTarget,
    setViewport,
    setScissor,
    setScissorTest,
    clear,
    render,
  } as unknown as THREE.WebGLRenderer;
  return {
    renderer,
    render,
    setRenderTarget,
    setViewport,
    setScissor,
    setScissorTest,
    clear,
    depthMask,
    xr,
    shadowMap,
  };
}

function sourceCamera(): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(68, 16 / 9, 0.1, 600);
  camera.position.set(5, SEA_SURFACE_Y + 14, 22);
  camera.lookAt(-2, SEA_SURFACE_Y, -8);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);
  return camera;
}

describe('PlanarReflection', () => {
  it('owns a resizable half-float target and excludes the water layer', () => {
    const reflection = new PlanarReflection(640, 360);
    expect(reflection.planeY).toBeCloseTo(116 + 8 / 9, 8);
    expect(reflection.renderTarget.width).toBe(640);
    expect(reflection.renderTarget.height).toBe(360);
    expect(reflection.renderTarget.texture.type).toBe(THREE.HalfFloatType);
    expect(reflection.renderTarget.texture.colorSpace).toBe(THREE.NoColorSpace);
    expect(reflection.renderTarget.samples).toBe(4);
    expect(reflection.overscan).toBeCloseTo(1.08);
    expect(reflection.texture).toBe(reflection.renderTarget.texture);
    expect(reflection.camera.layers.isEnabled(0)).toBe(true);
    expect(reflection.camera.layers.isEnabled(1)).toBe(false);

    reflection.resize(321.4, 181.6);
    expect(reflection.renderTarget.width).toBe(321);
    expect(reflection.renderTarget.height).toBe(182);

    const dispose = vi.spyOn(reflection.renderTarget, 'dispose');
    reflection.dispose();
    expect(dispose).toHaveBeenCalledOnce();
  });

  it('mirrors position and orientation and builds world-space projective UVs', () => {
    const reflection = new PlanarReflection(320, 180);
    const source = sourceCamera();
    const fake = fakeRenderer(() => {
      expect(fake.shadowMap.autoUpdate).toBe(false);
      expect(fake.shadowMap.needsUpdate).toBe(false);
    });
    const scene = new THREE.Scene();
    const order: string[] = [];

    reflection.render(
      fake.renderer,
      scene,
      source,
      (camera, target) => {
        order.push('before');
        expect(camera).toBe(reflection.camera);
        expect(target).toBe(reflection.renderTarget);
      },
      () => order.push('after'),
    );

    expect(order).toEqual(['before', 'after']);
    expect(fake.render).toHaveBeenCalledWith(scene, reflection.camera);
    expect(fake.shadowMap.autoUpdate).toBe(true);
    expect(fake.shadowMap.needsUpdate).toBe(true);
    expect(reflection.camera.position.x).toBeCloseTo(source.position.x, 8);
    expect(reflection.camera.position.y).toBeCloseTo(2 * SEA_SURFACE_Y - source.position.y, 8);
    expect(reflection.camera.position.z).toBeCloseTo(source.position.z, 8);
    expect(reflection.camera.projectionMatrix.elements[0]).toBeCloseTo(
      source.projectionMatrix.elements[0] / reflection.overscan,
      8,
    );
    expect(reflection.camera.projectionMatrix.elements[5]).toBeCloseTo(
      source.projectionMatrix.elements[5] / reflection.overscan,
      8,
    );

    const sourceDirection = source.getWorldDirection(new THREE.Vector3());
    const reflectedDirection = reflection.camera.getWorldDirection(new THREE.Vector3());
    expect(reflectedDirection.x).toBeCloseTo(sourceDirection.x, 7);
    expect(reflectedDirection.y).toBeCloseTo(-sourceDirection.y, 7);
    expect(reflectedDirection.z).toBeCloseTo(sourceDirection.z, 7);

    const world = new THREE.Vector4(1.5, SEA_SURFACE_Y + 3, -4, 1);
    const clip = world
      .clone()
      .applyMatrix4(reflection.camera.matrixWorldInverse)
      .applyMatrix4(reflection.camera.projectionMatrix);
    const projected = world.clone().applyMatrix4(reflection.textureMatrix);
    expect(projected.x / projected.w).toBeCloseTo((clip.x / clip.w) * 0.5 + 0.5, 7);
    expect(projected.y / projected.w).toBeCloseTo((clip.y / clip.w) * 0.5 + 0.5, 7);

    reflection.dispose();
  });

  it('maps a reflected world point to the same screen position as its source-camera mirror', () => {
    // Regression coordinates from the high-contrast contact-column diagnostic.
    // This is intentionally independent of the texture matrix: reflecting both
    // camera forward and up preserves the mirror's reversed handedness, so a real
    // point's reflected-camera X is the negative of the source camera X for the
    // corresponding virtual point; Y is unchanged.
    const planeY = 116 + 8 / 9;
    const reflection = new PlanarReflection(2560, 1440, { planeY });
    const source = new THREE.PerspectiveCamera(70, 16 / 9, 0.1, 600);
    const sourceDirection = new THREE.Vector3(
      -0.8813287166328794,
      -0.11971220728891936,
      -0.4570872212180444,
    );
    source.position.set(-62.231875913286814, 119.38888888888889, 79.80832611206853);
    source.lookAt(source.position.clone().add(sourceDirection));
    source.updateProjectionMatrix();
    source.updateMatrixWorld(true);

    reflection.render(fakeRenderer().renderer, new THREE.Scene(), source);

    const realPoint = new THREE.Vector3(-77.5, 121, 73);
    const mirroredPoint = realPoint.clone();
    mirroredPoint.y = 2 * planeY - mirroredPoint.y;
    const reflectedNdc = realPoint.clone().project(reflection.camera);
    const sourceNdc = mirroredPoint.project(source);

    // Overscan widens the reflected projection symmetrically around NDC zero.
    expect(reflectedNdc.x).toBeCloseTo(-sourceNdc.x / reflection.overscan, 7);
    expect(reflectedNdc.y).toBeCloseTo(sourceNdc.y / reflection.overscan, 7);
    expect(reflectedNdc.x).toBeCloseTo(0.04223, 5);
    expect(reflectedNdc.y).toBeCloseTo(-0.347795, 5);

    const projected = new THREE.Vector4(realPoint.x, realPoint.y, realPoint.z, 1).applyMatrix4(
      reflection.textureMatrix,
    );
    expect(projected.x / projected.w).toBeCloseTo(0.521115, 5);
    expect(projected.y / projected.w).toBeCloseTo(0.326103, 5);

    reflection.dispose();
  });

  it('lets setRenderTarget install the physical-pixel viewport without applying DPR twice', () => {
    const reflection = new PlanarReflection(2560, 1440);
    const fake = fakeRenderer();

    reflection.render(fake.renderer, new THREE.Scene(), sourceCamera());

    expect(fake.setRenderTarget).toHaveBeenNthCalledWith(1, reflection.renderTarget);
    // The sole public setViewport call restores the canvas viewport. Calling it
    // with the RT's already-physical 2560x1440 dimensions would become
    // 5120x2880 on a DPR=2 renderer and move NDC centre to the target edge.
    expect(fake.setViewport).toHaveBeenCalledTimes(1);
    expect(fake.setViewport).toHaveBeenCalledWith(new THREE.Vector4(7, 9, 800, 450));
    expect(fake.setViewport).not.toHaveBeenCalledWith(0, 0, 2560, 1440);

    reflection.dispose();
  });

  it('uses the water surface as an oblique near plane and clips underwater geometry', () => {
    const reflection = new PlanarReflection(320, 180, { clipBias: 0 });
    const source = new THREE.PerspectiveCamera(70, 16 / 9, 0.1, 500);
    source.position.set(0, SEA_SURFACE_Y + 14, 20);
    source.lookAt(0, SEA_SURFACE_Y, 0);
    source.updateProjectionMatrix();
    source.updateMatrixWorld(true);
    reflection.render(fakeRenderer().renderer, new THREE.Scene(), source);

    const above = new THREE.Vector3(0, SEA_SURFACE_Y + 5, -2).project(reflection.camera);
    const below = new THREE.Vector3(0, SEA_SURFACE_Y - 5, -2).project(reflection.camera);
    expect(above.z).toBeGreaterThanOrEqual(-1);
    expect(above.z).toBeLessThanOrEqual(1);
    expect(below.z).toBeLessThan(-1);

    reflection.dispose();
  });

  it('restores renderer state and runs the after hook when rendering throws', () => {
    const reflection = new PlanarReflection();
    const fake = fakeRenderer(() => {
      throw new Error('reflection render failed');
    });
    const after = vi.fn();

    expect(() =>
      reflection.render(fake.renderer, new THREE.Scene(), sourceCamera(), undefined, after),
    ).toThrow('reflection render failed');
    expect(after).toHaveBeenCalledOnce();
    expect(fake.xr.enabled).toBe(true);
    expect(fake.shadowMap.autoUpdate).toBe(true);
    expect(fake.shadowMap.needsUpdate).toBe(true);
    expect(fake.setRenderTarget).toHaveBeenLastCalledWith(null);
    expect(fake.setViewport).toHaveBeenLastCalledWith(expect.any(THREE.Vector4));
    expect(fake.setScissor).toHaveBeenLastCalledWith(expect.any(THREE.Vector4));
    expect(fake.setScissorTest).toHaveBeenLastCalledWith(true);
    expect(fake.depthMask).toHaveBeenCalledWith(true);
    expect(fake.depthMask).toHaveBeenLastCalledWith(false);
    expect(fake.clear).toHaveBeenCalledWith(true, true, false);

    reflection.dispose();
  });
});
