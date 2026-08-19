import * as THREE from 'three';
import { SEA_LEVEL } from '../core/worldgen/terrain';
import { NO_WATER_REFLECTION_LAYER, SKY_RENDER_LAYER } from './renderLayers';

/** Full source-water height: block y plus the mesher's 8/9 top surface. */
export const REFRACTION_SEA_SURFACE_Y = SEA_LEVEL + 8 / 9;

export interface PlanarRefractionOptions {
  /** Horizontal refraction plane. Defaults to the overworld ocean surface. */
  planeY?: number;
  /** Moves the retained half-space slightly below the waterline to avoid a surface seam. */
  clipBias?: number;
  /** Optional MSAA samples resolved into the sampled refraction texture. */
  samples?: number;
}

export type PlanarRefractionHook = (
  camera: THREE.PerspectiveCamera,
  target: THREE.WebGLRenderTarget,
) => void;

export type RefractionHalfSpace = 'below' | 'above';

/**
 * Renders only the part of the scene below a horizontal water plane.
 *
 * Unlike a planar reflection, refraction uses the source camera's exact view
 * and projection matrices. Keeping the regular perspective projection is
 * important because the water shader linearizes the target depth with the
 * source camera's near/far values. The water half-space is selected with a
 * temporary renderer-global clipping plane instead of an oblique projection.
 *
 * The refraction camera deliberately sees layer 0 only. Mineworld water lives
 * on layer 1, while sky-only objects can be put on their own layer and omitted
 * from this underwater capture.
 */
export class PlanarRefraction {
  readonly camera = new THREE.PerspectiveCamera();
  readonly renderTarget: THREE.WebGLRenderTarget;
  readonly planeY: number;
  readonly clipBias: number;

  private readonly underwaterPlane = new THREE.Plane();
  private readonly underwaterPlanes: THREE.Plane[];
  private readonly airPlane = new THREE.Plane();
  private readonly airPlanes: THREE.Plane[];
  private readonly sourcePosition = new THREE.Vector3();
  private readonly sourceQuaternion = new THREE.Quaternion();
  private readonly savedViewport = new THREE.Vector4();
  private readonly savedScissor = new THREE.Vector4();

  constructor(width = 1, height = 1, options: PlanarRefractionOptions = {}) {
    this.planeY = options.planeY ?? REFRACTION_SEA_SURFACE_Y;
    this.clipBias = Math.max(0, options.clipBias ?? 0.001);

    // three.js keeps the positive half-space of a clipping plane. A downward
    // normal therefore retains y <= planeY - clipBias and clips the air side.
    this.underwaterPlane.set(new THREE.Vector3(0, -1, 0), this.planeY - this.clipBias);
    this.underwaterPlanes = [this.underwaterPlane];
    // Underwater cameras need the opposite medium: keep y >= planeY + bias so
    // the underside of the water transmits the real sky and shore above it.
    this.airPlane.set(new THREE.Vector3(0, 1, 0), -(this.planeY + this.clipBias));
    this.airPlanes = [this.airPlane];

    const targetWidth = Math.max(1, Math.round(width));
    const targetHeight = Math.max(1, Math.round(height));
    const depthTexture = new THREE.DepthTexture(targetWidth, targetHeight, THREE.UnsignedIntType);
    depthTexture.name = 'mineworld-planar-refraction-depth';

    this.renderTarget = new THREE.WebGLRenderTarget(targetWidth, targetHeight, {
      type: THREE.HalfFloatType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      generateMipmaps: false,
      depthTexture,
      depthBuffer: true,
      stencilBuffer: false,
      samples: Math.max(0, Math.round(options.samples ?? 0)),
    });
    this.renderTarget.texture.name = 'mineworld-planar-refraction';
    this.renderTarget.texture.colorSpace = THREE.NoColorSpace;

    // Layer 0 contains terrain/entities. Water is layer 1 and must not sample
    // itself; sky-only objects can be assigned a separate layer by Renderer.
    this.camera.layers.set(0);
  }

  get texture(): THREE.Texture {
    return this.renderTarget.texture;
  }

  get depthTexture(): THREE.DepthTexture {
    // This target always owns a depth texture; the getter keeps that guarantee
    // explicit for callers instead of leaking WebGLRenderTarget's nullable API.
    return this.renderTarget.depthTexture as THREE.DepthTexture;
  }

  resize(width: number, height: number): void {
    const targetWidth = Math.max(1, Math.round(width));
    const targetHeight = Math.max(1, Math.round(height));
    this.renderTarget.setSize(targetWidth, targetHeight);
    // three r165 synchronizes an attached DepthTexture lazily when the target is
    // next bound. Keep its public dimensions correct immediately after resize
    // as well, which is useful to texture consumers between resize and render.
    this.depthTexture.image.width = targetWidth;
    this.depthTexture.image.height = targetHeight;
  }

  /**
   * Synchronize the source camera, render the clipped underwater scene, then
   * restore every renderer-global state touched by this pass.
   */
  render(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    sourceCamera: THREE.PerspectiveCamera,
    before?: PlanarRefractionHook,
    after?: PlanarRefractionHook,
    halfSpace: RefractionHalfSpace = 'below',
  ): void {
    this.updateCamera(sourceCamera);
    this.camera.layers.set(0);
    if (halfSpace === 'above') {
      this.camera.layers.enable(NO_WATER_REFLECTION_LAYER);
      this.camera.layers.enable(SKY_RENDER_LAYER);
    }

    const previousTarget = renderer.getRenderTarget();
    renderer.getViewport(this.savedViewport);
    renderer.getScissor(this.savedScissor);
    const previousScissorTest = renderer.getScissorTest();
    const previousXrEnabled = renderer.xr.enabled;
    const previousShadowAutoUpdate = renderer.shadowMap.autoUpdate;
    const previousShadowNeedsUpdate = renderer.shadowMap.needsUpdate;
    const previousClippingPlanes = renderer.clippingPlanes;
    const previousLocalClippingEnabled = renderer.localClippingEnabled;
    const context = renderer.getContext();
    const previousDepthMask = Boolean(context.getParameter(context.DEPTH_WRITEMASK));

    try {
      before?.(this.camera, this.renderTarget);
      renderer.xr.enabled = false;
      renderer.shadowMap.autoUpdate = false;
      renderer.shadowMap.needsUpdate = false;
      renderer.clippingPlanes = halfSpace === 'above' ? this.airPlanes : this.underwaterPlanes;
      // The pass owns one global half-space. Disable material-local planes so
      // they cannot unexpectedly cut holes into the captured underwater scene.
      renderer.localClippingEnabled = false;
      renderer.setRenderTarget(this.renderTarget);
      // setRenderTarget() applies the render target's physical viewport. Calling
      // setViewport() with these physical dimensions would multiply them by DPR
      // again, shifting the capture on high-DPI displays.
      renderer.setScissorTest(false);
      renderer.state.buffers.depth.setMask(true);
      renderer.clear(true, true, false);
      renderer.render(scene, this.camera);
    } finally {
      renderer.xr.enabled = previousXrEnabled;
      renderer.shadowMap.autoUpdate = previousShadowAutoUpdate;
      renderer.shadowMap.needsUpdate = previousShadowNeedsUpdate;
      renderer.clippingPlanes = previousClippingPlanes;
      renderer.localClippingEnabled = previousLocalClippingEnabled;
      renderer.state.buffers.depth.setMask(previousDepthMask);
      renderer.setRenderTarget(previousTarget);
      renderer.setViewport(this.savedViewport);
      renderer.setScissor(this.savedScissor);
      renderer.setScissorTest(previousScissorTest);
      after?.(this.camera, this.renderTarget);
    }
  }

  dispose(): void {
    this.renderTarget.dispose();
  }

  private updateCamera(sourceCamera: THREE.PerspectiveCamera): void {
    sourceCamera.updateWorldMatrix(true, false);
    sourceCamera.getWorldPosition(this.sourcePosition);
    sourceCamera.getWorldQuaternion(this.sourceQuaternion);

    this.camera.position.copy(this.sourcePosition);
    this.camera.quaternion.copy(this.sourceQuaternion);
    this.camera.up.copy(sourceCamera.up);
    this.camera.updateMatrixWorld(true);

    // Synchronize PerspectiveCamera's public lens state for consumers, while copying
    // the matrices verbatim so custom/view-offset projections retain identical
    // depth mapping in the source and refraction passes.
    this.camera.near = sourceCamera.near;
    this.camera.far = sourceCamera.far;
    this.camera.fov = sourceCamera.fov;
    this.camera.aspect = sourceCamera.aspect;
    this.camera.zoom = sourceCamera.zoom;
    this.camera.focus = sourceCamera.focus;
    this.camera.filmGauge = sourceCamera.filmGauge;
    this.camera.filmOffset = sourceCamera.filmOffset;
    this.camera.view = sourceCamera.view === null ? null : { ...sourceCamera.view };
    this.camera.coordinateSystem = sourceCamera.coordinateSystem;
    this.camera.projectionMatrix.copy(sourceCamera.projectionMatrix);
    this.camera.projectionMatrixInverse.copy(sourceCamera.projectionMatrixInverse);
  }
}
