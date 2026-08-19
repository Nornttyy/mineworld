import * as THREE from 'three';
import { SEA_LEVEL } from '../core/worldgen/terrain';
import { SKY_RENDER_LAYER } from './renderLayers';

/** Full source-water height: block y plus the mesher's 8/9 top surface. */
export const SEA_SURFACE_Y = SEA_LEVEL + 8 / 9;

export interface PlanarReflectionOptions {
  /** Horizontal reflection plane. Defaults to the overworld ocean surface. */
  planeY?: number;
  /** Small oblique-plane offset that avoids a bright seam at the waterline. */
  clipBias?: number;
  /** MSAA samples resolved into the sampled reflection texture. */
  samples?: number;
  /** Extra field of view kept around the screen so wave UV offsets never clamp to one edge texel. */
  overscan?: number;
}

export type PlanarReflectionHook = (
  camera: THREE.PerspectiveCamera,
  target: THREE.WebGLRenderTarget,
) => void;

const BIAS_MATRIX = new THREE.Matrix4().set(
  0.5,
  0,
  0,
  0.5,
  0,
  0.5,
  0,
  0.5,
  0,
  0,
  0.5,
  0.5,
  0,
  0,
  0,
  1,
);

/**
 * Renders the world mirrored across a horizontal water plane.
 *
 * `textureMatrix` transforms a world-space position into projective texture
 * coordinates, so shaders can sample with
 * `texture2DProj(tReflection, textureMatrix * vec4(worldPos, 1.0))`.
 * The reflection camera deliberately sees layer 0 only; Mineworld water lives
 * on layer 1 and therefore cannot recursively render itself.
 */
export class PlanarReflection {
  readonly camera = new THREE.PerspectiveCamera();
  readonly textureMatrix = new THREE.Matrix4();
  readonly renderTarget: THREE.WebGLRenderTarget;
  readonly planeY: number;
  readonly clipBias: number;
  readonly overscan: number;

  private readonly plane = new THREE.Plane();
  private readonly cameraPlane = new THREE.Plane();
  private readonly planeNormal = new THREE.Vector3(0, 1, 0);
  private readonly sourcePosition = new THREE.Vector3();
  private readonly reflectedPosition = new THREE.Vector3();
  private readonly reflectedDirection = new THREE.Vector3();
  private readonly reflectedUp = new THREE.Vector3();
  private readonly lookTarget = new THREE.Vector3();
  private readonly sourceQuaternion = new THREE.Quaternion();
  private readonly clipPlane = new THREE.Vector4();
  private readonly clipCorner = new THREE.Vector4();
  private readonly savedViewport = new THREE.Vector4();
  private readonly savedScissor = new THREE.Vector4();

  constructor(width = 1, height = 1, options: PlanarReflectionOptions = {}) {
    this.planeY = options.planeY ?? SEA_SURFACE_Y;
    this.clipBias = options.clipBias ?? 0.001;
    this.overscan = THREE.MathUtils.clamp(options.overscan ?? 1.08, 1, 1.2);
    this.plane.set(this.planeNormal, -this.planeY);

    this.renderTarget = new THREE.WebGLRenderTarget(
      Math.max(1, Math.round(width)),
      Math.max(1, Math.round(height)),
      {
        type: THREE.HalfFloatType,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        generateMipmaps: false,
        depthBuffer: true,
        stencilBuffer: false,
        samples: Math.max(0, Math.round(options.samples ?? 4)),
      },
    );
    this.renderTarget.texture.name = 'mineworld-planar-reflection';
    this.renderTarget.texture.colorSpace = THREE.NoColorSpace;

    // Layer 0 is opaque/cutout terrain, entities, sky and clouds. Water is
    // assigned layer 1 by ChunkMeshManager and must never enter this pass.
    this.camera.layers.set(0);
    this.camera.layers.enable(SKY_RENDER_LAYER);
  }

  get texture(): THREE.Texture {
    return this.renderTarget.texture;
  }

  resize(width: number, height: number): void {
    this.renderTarget.setSize(Math.max(1, Math.round(width)), Math.max(1, Math.round(height)));
  }

  /**
   * Update the mirrored camera, render the reflection, and restore all renderer
   * state touched by the pass. Hooks are useful for temporarily moving a sky
   * dome to the reflected camera or hiding special layer-0 helpers.
   */
  render(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    sourceCamera: THREE.PerspectiveCamera,
    before?: PlanarReflectionHook,
    after?: PlanarReflectionHook,
  ): void {
    this.updateCamera(sourceCamera);

    const previousTarget = renderer.getRenderTarget();
    renderer.getViewport(this.savedViewport);
    renderer.getScissor(this.savedScissor);
    const previousScissorTest = renderer.getScissorTest();
    const previousXrEnabled = renderer.xr.enabled;
    const previousShadowAutoUpdate = renderer.shadowMap.autoUpdate;
    const previousShadowNeedsUpdate = renderer.shadowMap.needsUpdate;

    try {
      before?.(this.camera, this.renderTarget);
      renderer.xr.enabled = false;
      // The main pass owns shadow-map updates. `autoUpdate=false` is not enough:
      // three.js still renders a shadow map when `needsUpdate=true`. Because the
      // reflection pass runs first, it used to consume the six-frame dirty pulse
      // and briefly render a different shoreline/object set into this RT. Preserve
      // the pulse for the following main-camera pass instead.
      renderer.shadowMap.autoUpdate = false;
      renderer.shadowMap.needsUpdate = false;
      renderer.setRenderTarget(this.renderTarget);
      renderer.setViewport(0, 0, this.renderTarget.width, this.renderTarget.height);
      renderer.setScissorTest(false);
      renderer.state.buffers.depth.setMask(true);
      renderer.clear(true, true, true);
      renderer.render(scene, this.camera);
    } finally {
      renderer.xr.enabled = previousXrEnabled;
      renderer.shadowMap.autoUpdate = previousShadowAutoUpdate;
      renderer.shadowMap.needsUpdate = previousShadowNeedsUpdate;
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

    // Mirror position, forward and roll-aware up vector around y = planeY.
    this.reflectedPosition
      .copy(this.sourcePosition)
      .addScaledVector(this.planeNormal, -2 * this.plane.distanceToPoint(this.sourcePosition));
    this.reflectedDirection
      .set(0, 0, -1)
      .applyQuaternion(this.sourceQuaternion)
      .reflect(this.planeNormal);
    this.reflectedUp.set(0, 1, 0).applyQuaternion(this.sourceQuaternion).reflect(this.planeNormal);

    this.camera.position.copy(this.reflectedPosition);
    this.camera.up.copy(this.reflectedUp);
    this.lookTarget.copy(this.reflectedPosition).add(this.reflectedDirection);
    this.camera.lookAt(this.lookTarget);
    this.camera.updateMatrixWorld(true);

    // Copy the exact source projection (including zoom, film offset or view
    // offsets) before replacing its near plane with the water plane.
    this.camera.near = sourceCamera.near;
    this.camera.far = sourceCamera.far;
    this.camera.fov = sourceCamera.fov;
    this.camera.aspect = sourceCamera.aspect;
    this.camera.zoom = sourceCamera.zoom;
    this.camera.focus = sourceCamera.focus;
    this.camera.filmGauge = sourceCamera.filmGauge;
    this.camera.filmOffset = sourceCamera.filmOffset;
    this.camera.projectionMatrix.copy(sourceCamera.projectionMatrix);
    // 留出约 8% 反射视野护边。主相机屏幕边缘因此仍落在 RT 内部，
    // 水波的 2–4px UV 扰动不会把整列像素 clamp 到同一个边缘 texel 后同步闪烁。
    this.camera.projectionMatrix.elements[0] /= this.overscan;
    this.camera.projectionMatrix.elements[5] /= this.overscan;

    this.applyObliqueNearPlane();
    this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert();

    // World position -> reflection clip coordinates -> [0,1] projective UV.
    this.textureMatrix
      .copy(BIAS_MATRIX)
      .multiply(this.camera.projectionMatrix)
      .multiply(this.camera.matrixWorldInverse);
  }

  private applyObliqueNearPlane(): void {
    this.cameraPlane.copy(this.plane).applyMatrix4(this.camera.matrixWorldInverse);
    this.clipPlane.set(
      this.cameraPlane.normal.x,
      this.cameraPlane.normal.y,
      this.cameraPlane.normal.z,
      this.cameraPlane.constant,
    );

    const projection = this.camera.projectionMatrix;
    const e = projection.elements;
    this.clipCorner.set(
      (Math.sign(this.clipPlane.x) + e[8]) / e[0],
      (Math.sign(this.clipPlane.y) + e[9]) / e[5],
      -1,
      (1 + e[10]) / e[14],
    );

    const denominator = this.clipPlane.dot(this.clipCorner);
    // A normal perspective camera above or below a horizontal plane never
    // reaches this degeneracy, but guarding it prevents a malformed custom
    // projection from filling the matrix with infinities.
    if (Math.abs(denominator) < 1e-7) return;
    this.clipPlane.multiplyScalar(2 / denominator);

    // Lengyel oblique near-plane projection: replace projection row three.
    e[2] = this.clipPlane.x;
    e[6] = this.clipPlane.y;
    e[10] = this.clipPlane.z + 1 - this.clipBias;
    e[14] = this.clipPlane.w;
  }
}
