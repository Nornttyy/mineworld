import * as THREE from 'three';
import { describe, expect, it, vi } from 'vitest';
import { PlanarRefraction, REFRACTION_SEA_SURFACE_Y } from './PlanarRefraction';

function fakeRenderer(renderImpl?: (renderer: THREE.WebGLRenderer) => void) {
  const viewport = new THREE.Vector4(7, 9, 800, 450);
  const scissor = new THREE.Vector4(11, 13, 700, 400);
  const previousTarget = new THREE.WebGLRenderTarget(2, 2);
  const previousPlane = new THREE.Plane(new THREE.Vector3(1, 0, 0), -4);
  const xr = { enabled: true };
  const shadowMap = { autoUpdate: true, needsUpdate: true };
  const state = {
    xr,
    shadowMap,
    clippingPlanes: [previousPlane],
    localClippingEnabled: true,
  };
  const render = vi.fn(() => renderImpl?.(renderer));
  const setRenderTarget = vi.fn();
  const setViewport = vi.fn();
  const setScissor = vi.fn();
  const setScissorTest = vi.fn();
  const clear = vi.fn();
  const depthMask = vi.fn();
  const context = {
    DEPTH_WRITEMASK: 0x0b72,
    getParameter: vi.fn(() => false),
  } as unknown as WebGL2RenderingContext;
  const renderer = {
    ...state,
    state: { buffers: { depth: { setMask: depthMask } } },
    getRenderTarget: vi.fn(() => previousTarget),
    getViewport: vi.fn((out: THREE.Vector4) => out.copy(viewport)),
    getScissor: vi.fn((out: THREE.Vector4) => out.copy(scissor)),
    getScissorTest: vi.fn(() => true),
    getContext: vi.fn(() => context),
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
    previousTarget,
    previousPlanes: state.clippingPlanes,
  };
}

function sourceCamera(): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(68, 16 / 9, 0.15, 720);
  camera.position.set(5, REFRACTION_SEA_SURFACE_Y + 14, 22);
  camera.lookAt(-2, REFRACTION_SEA_SURFACE_Y - 3, -8);
  camera.setViewOffset(1920, 1080, 9, 5, 1900, 1060);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);
  return camera;
}

describe('PlanarRefraction', () => {
  it('owns a resizable half-float color target with an unsigned-int depth texture', () => {
    const refraction = new PlanarRefraction(640, 360);

    expect(refraction.planeY).toBeCloseTo(116 + 8 / 9, 8);
    expect(refraction.renderTarget.width).toBe(640);
    expect(refraction.renderTarget.height).toBe(360);
    expect(refraction.renderTarget.texture.type).toBe(THREE.HalfFloatType);
    expect(refraction.renderTarget.texture.colorSpace).toBe(THREE.NoColorSpace);
    expect(refraction.renderTarget.texture.minFilter).toBe(THREE.LinearFilter);
    expect(refraction.renderTarget.texture.magFilter).toBe(THREE.LinearFilter);
    expect(refraction.renderTarget.texture.generateMipmaps).toBe(false);
    expect(refraction.renderTarget.depthBuffer).toBe(true);
    expect(refraction.depthTexture).toBe(refraction.renderTarget.depthTexture);
    expect(refraction.depthTexture.type).toBe(THREE.UnsignedIntType);
    expect(refraction.texture).toBe(refraction.renderTarget.texture);
    expect(refraction.camera.layers.isEnabled(0)).toBe(true);
    expect(refraction.camera.layers.isEnabled(1)).toBe(false);

    refraction.resize(321.4, 181.6);
    expect(refraction.renderTarget.width).toBe(321);
    expect(refraction.renderTarget.height).toBe(182);
    expect(refraction.depthTexture.image.width).toBe(321);
    expect(refraction.depthTexture.image.height).toBe(182);

    const dispose = vi.spyOn(refraction.renderTarget, 'dispose');
    refraction.dispose();
    expect(dispose).toHaveBeenCalledOnce();
  });

  it('copies the source world camera and projection without changing depth mapping', () => {
    const refraction = new PlanarRefraction(320, 180);
    const source = sourceCamera();
    const scene = new THREE.Scene();
    const fake = fakeRenderer();

    refraction.render(fake.renderer, scene, source);

    expect(fake.render).toHaveBeenCalledWith(scene, refraction.camera);
    expect(refraction.camera.position.toArray()).toEqual(source.position.toArray());
    expect(refraction.camera.quaternion.angleTo(source.quaternion)).toBeLessThan(1e-7);
    expect(refraction.camera.near).toBe(source.near);
    expect(refraction.camera.far).toBe(source.far);
    expect(refraction.camera.projectionMatrix.elements).toEqual(source.projectionMatrix.elements);
    expect(refraction.camera.projectionMatrixInverse.elements).toEqual(
      source.projectionMatrixInverse.elements,
    );
    expect(refraction.camera.view).toEqual(source.view);

    const worldPoint = new THREE.Vector3(1, REFRACTION_SEA_SURFACE_Y - 6, -12);
    const sourceNdc = worldPoint.clone().project(source);
    const refractionNdc = worldPoint.clone().project(refraction.camera);
    expect(refractionNdc.x).toBeCloseTo(sourceNdc.x, 10);
    expect(refractionNdc.y).toBeCloseTo(sourceNdc.y, 10);
    expect(refractionNdc.z).toBeCloseTo(sourceNdc.z, 10);

    refraction.dispose();
    fake.previousTarget.dispose();
  });

  it('installs a downward global plane that keeps only the underwater half-space', () => {
    const planeY = 42;
    const refraction = new PlanarRefraction(320, 180, { planeY, clipBias: 0.01 });
    let passPlane: THREE.Plane | undefined;
    const fake = fakeRenderer((renderer) => {
      expect(renderer.localClippingEnabled).toBe(false);
      expect(renderer.clippingPlanes).toHaveLength(1);
      passPlane = renderer.clippingPlanes[0];
    });

    refraction.render(fake.renderer, new THREE.Scene(), sourceCamera());

    expect(passPlane).toBeDefined();
    expect(passPlane?.normal.toArray()).toEqual([0, -1, 0]);
    // three.js global clipping keeps Plane.distanceToPoint >= 0 and discards
    // the negative half-space.
    expect(passPlane?.distanceToPoint(new THREE.Vector3(0, planeY - 1, 0))).toBeGreaterThan(0);
    expect(passPlane?.distanceToPoint(new THREE.Vector3(0, planeY + 1, 0))).toBeLessThan(0);
    expect(passPlane?.distanceToPoint(new THREE.Vector3(0, planeY, 0))).toBeLessThan(0);

    refraction.dispose();
    fake.previousTarget.dispose();
  });

  it('reverses the clip plane and exposes air/sky layers for an underwater camera', () => {
    const planeY = 42;
    const refraction = new PlanarRefraction(320, 180, { planeY, clipBias: 0.01 });
    let passPlane: THREE.Plane | undefined;
    const fake = fakeRenderer((renderer) => {
      passPlane = renderer.clippingPlanes[0];
      expect(refraction.camera.layers.isEnabled(0)).toBe(true);
      expect(refraction.camera.layers.isEnabled(1)).toBe(false);
      expect(refraction.camera.layers.isEnabled(2)).toBe(true);
      expect(refraction.camera.layers.isEnabled(3)).toBe(true);
    });

    refraction.render(
      fake.renderer,
      new THREE.Scene(),
      sourceCamera(),
      undefined,
      undefined,
      'above',
    );

    expect(passPlane?.normal.toArray()).toEqual([0, 1, 0]);
    expect(passPlane?.distanceToPoint(new THREE.Vector3(0, planeY + 1, 0))).toBeGreaterThan(0);
    expect(passPlane?.distanceToPoint(new THREE.Vector3(0, planeY - 1, 0))).toBeLessThan(0);

    refraction.dispose();
    fake.previousTarget.dispose();
  });

  it('restores renderer state and runs the after hook when rendering throws', () => {
    const refraction = new PlanarRefraction();
    const fake = fakeRenderer((renderer) => {
      expect(renderer.xr.enabled).toBe(false);
      expect(renderer.shadowMap.autoUpdate).toBe(false);
      expect(renderer.shadowMap.needsUpdate).toBe(false);
      expect(renderer.localClippingEnabled).toBe(false);
      expect(renderer.clippingPlanes).not.toBe(fake.previousPlanes);
      throw new Error('refraction render failed');
    });
    const after = vi.fn();

    expect(() =>
      refraction.render(fake.renderer, new THREE.Scene(), sourceCamera(), undefined, after),
    ).toThrow('refraction render failed');
    expect(after).toHaveBeenCalledOnce();
    expect(fake.xr.enabled).toBe(true);
    expect(fake.shadowMap.autoUpdate).toBe(true);
    expect(fake.shadowMap.needsUpdate).toBe(true);
    expect(fake.renderer.clippingPlanes).toBe(fake.previousPlanes);
    expect(fake.renderer.localClippingEnabled).toBe(true);
    expect(fake.setRenderTarget).toHaveBeenLastCalledWith(fake.previousTarget);
    expect(fake.setViewport).toHaveBeenLastCalledWith(expect.any(THREE.Vector4));
    expect(fake.setScissor).toHaveBeenLastCalledWith(expect.any(THREE.Vector4));
    expect(fake.setScissorTest).toHaveBeenLastCalledWith(true);
    expect(fake.depthMask).toHaveBeenCalledWith(true);
    expect(fake.depthMask).toHaveBeenLastCalledWith(false);
    expect(fake.clear).toHaveBeenCalledWith(true, true, false);

    refraction.dispose();
    fake.previousTarget.dispose();
  });
});
