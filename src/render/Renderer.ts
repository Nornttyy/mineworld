import * as THREE from 'three';

/** 场景、相机、天空与 WebGL 渲染器；只负责"画"，不含游戏逻辑。 */
export class Renderer {
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  private readonly gl: THREE.WebGLRenderer;

  constructor(canvas: HTMLCanvasElement) {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false });
    this.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.scene.background = new THREE.Color(0x87ceeb); // 天蓝
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000); // FOV 70，同 MC
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.gl.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  render(): void {
    this.gl.render(this.scene, this.camera);
  }
}
