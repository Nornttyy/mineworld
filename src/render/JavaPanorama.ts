import * as THREE from 'three';
import { asset } from '../asset';
import { browserViewportSize } from './browserViewport';
import type { TexturePack } from '../core/settings';

/** Official title panorama: a fixed cubemap, with the Java title screen's slow rotation. */
export class JavaPanorama {
  private readonly gl: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(90, 1, 0.01, 10);
  private readonly texture: THREE.CubeTexture;
  private readonly ready: Promise<void>;
  private frame = 0;
  private disposed = false;
  private heading = 0;
  private lastTime = 0;
  private readonly onResize = (): void => {
    const { width, height } = browserViewportSize(window);
    this.gl.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  constructor(canvas: HTMLCanvasElement, _seed = 4242, _pack: TexturePack = 'classic') {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false });
    this.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    let resolveReady!: () => void;
    let rejectReady!: (error: unknown) => void;
    this.ready = new Promise<void>((resolve, reject) => {
      resolveReady = resolve;
      rejectReady = reject;
    });
    // CubeTexture uses +X, -X, +Y, -Y, +Z, -Z.
    this.texture = new THREE.CubeTextureLoader().load(
      [1, 3, 4, 5, 2, 0].map((i) => asset(`textures/ui/java/panorama/panorama_${i}.png`)),
      (texture) => {
        if (this.disposed) texture.dispose();
        resolveReady();
      },
      undefined,
      rejectReady,
    );
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.scene.background = this.texture;
    this.onResize();
    window.addEventListener('resize', this.onResize);
    window.visualViewport?.addEventListener('resize', this.onResize);
  }

  async preload(_radius?: number, signal?: AbortSignal): Promise<void> {
    if (this.disposed || signal?.aborted) return;
    let cancel: (() => void) | undefined;
    const aborted = new Promise<void>((resolve) => {
      cancel = () => resolve();
      signal?.addEventListener('abort', cancel, { once: true });
    });
    try {
      await Promise.race([this.ready, aborted]);
    } finally {
      if (cancel) signal?.removeEventListener('abort', cancel);
    }
  }

  start(): void {
    if (this.frame || this.disposed) return;
    this.lastTime = performance.now();
    const render = (now: number): void => {
      if (this.disposed) return;
      const dt = Math.min(0.1, (now - this.lastTime) / 1000);
      this.lastTime = now;
      this.heading += dt * 0.018;
      this.camera.rotation.set(-Math.PI / 18, this.heading, 0, 'YXZ');
      this.gl.render(this.scene, this.camera);
      this.frame = requestAnimationFrame(render);
    };
    this.frame = requestAnimationFrame(render);
  }

  stop(): void {
    cancelAnimationFrame(this.frame);
    this.frame = 0;
  }

  // Resource-pack selection affects the world, not the fixed official panorama.
  setTexturePack(_pack: TexturePack): void {}

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    this.stop();
    window.removeEventListener('resize', this.onResize);
    window.visualViewport?.removeEventListener('resize', this.onResize);
    this.texture.dispose();
    this.gl.dispose();
    this.gl.forceContextLoss();
  }
}
