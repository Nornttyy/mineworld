import * as THREE from 'three';
import { generateTerrain } from '../core/worldgen/terrain';
import { meshWorld, type MeshData } from '../core/mesh/mesher';
import { loadAtlas } from './atlas';
import { makeSkyTexture, HORIZON_COLOR } from './sky';

// 主菜单的旋转全景背景：一个固定种子的装饰地形 + 缓慢绕转的相机。
// 与玩家存档/游戏完全无关，纯装饰。用独立画布，不与游戏渲染器冲突。
export class MenuBackground {
  private readonly gl: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
  private readonly center: THREE.Vector3;
  private running = false;
  private angle = 0;

  constructor(canvas: HTMLCanvasElement, seed = 24680) {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false });
    this.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.scene.background = makeSkyTexture();
    this.scene.fog = new THREE.Fog(HORIZON_COLOR, 40, 140);

    const SIZE = 64;
    const world = generateTerrain({ sizeX: SIZE, sizeZ: SIZE, seed });
    this.scene.add(
      new THREE.Mesh(
        this.geo(meshWorld(world)),
        new THREE.MeshBasicMaterial({ map: loadAtlas(), vertexColors: true }),
      ),
    );
    this.center = new THREE.Vector3(SIZE / 2, 16, SIZE / 2);

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  private geo(d: MeshData): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(d.positions, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(d.uvs, 2));
    g.setAttribute('color', new THREE.BufferAttribute(d.colors, 3));
    g.setIndex(new THREE.BufferAttribute(d.indices, 1));
    return g;
  }

  private resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.gl.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    const loop = (): void => {
      if (!this.running) return;
      requestAnimationFrame(loop);
      this.angle += 0.0011; // 缓慢绕转
      const r = 44;
      this.camera.position.set(
        this.center.x + Math.cos(this.angle) * r,
        this.center.y + 18,
        this.center.z + Math.sin(this.angle) * r,
      );
      this.camera.lookAt(this.center.x, this.center.y, this.center.z);
      this.gl.render(this.scene, this.camera);
    };
    requestAnimationFrame(loop);
  }

  stop(): void {
    this.running = false;
  }
}
