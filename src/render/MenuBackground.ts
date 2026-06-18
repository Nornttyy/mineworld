import * as THREE from 'three';
import { ChunkWorld } from '../core/world/chunkWorld';
import { worldToChunk } from '../core/world/coords';
import { isWaterId } from '../core/blocks/registry';
import { SEA_LEVEL } from '../core/worldgen/terrain';
import { ChunkMeshManager } from './ChunkMeshManager';
import { loadAtlas } from './atlas';
import { makeSkyTexture, HORIZON_COLOR } from './sky';

// 主菜单旋转全景：低空飞过无限世界（与游戏同款地形：水/海滩），相机缓缓前飞 + 转向，
// 区块随飞随加载。固定种子、纯装饰，与玩家存档/游戏无关。独立画布，不冲突。
const RADIUS = 6; // 加载半径（区块）

export class MenuBackground {
  private readonly gl: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000);
  private readonly world: ChunkWorld;
  private readonly chunks: ChunkMeshManager;
  private running = false;
  private x = 0.5;
  private z = 0.5;
  private heading = 0.7;
  private readonly y = 175; // 飞行高度（地表~100-180，在地形之上俯瞰海/湖）

  constructor(canvas: HTMLCanvasElement, seed = 4242) {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false });
    this.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.scene.background = makeSkyTexture();
    this.scene.fog = new THREE.Fog(HORIZON_COLOR, 40, RADIUS * 16); // 雾在加载边缘前盖住

    this.world = new ChunkWorld(seed);
    this.seekWater(); // 起点设到附近的水边，开局就有湖
    this.chunks = new ChunkMeshManager(this.scene, this.world, loadAtlas());
    this.chunks.update(worldToChunk(Math.floor(this.x)), worldToChunk(Math.floor(this.z)), RADIUS, 999);

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  // 从原点向外找最近的水，把起点放到它前方 14 格、朝它飞
  private seekWater(): void {
    for (let r = 4; r < 120; r += 3) {
      for (let a = 0; a < 12; a++) {
        const ang = (a / 12) * Math.PI * 2;
        const wx = Math.round(Math.cos(ang) * r);
        const wz = Math.round(Math.sin(ang) * r);
        if (isWaterId(this.world.getBlock(wx, SEA_LEVEL, wz))) {
          this.heading = ang;
          this.x = wx - Math.cos(ang) * 14 + 0.5;
          this.z = wz - Math.sin(ang) * 14 + 0.5;
          return;
        }
      }
    }
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
      this.heading += 0.00022; // 缓慢转向
      this.x += Math.cos(this.heading) * 0.022; // 缓缓前飞
      this.z += Math.sin(this.heading) * 0.022;
      this.camera.position.set(this.x, this.y, this.z);
      this.camera.lookAt(
        this.x + Math.cos(this.heading) * 26,
        this.y - 17, // 略俯视
        this.z + Math.sin(this.heading) * 26,
      );
      this.chunks.update(worldToChunk(Math.floor(this.x)), worldToChunk(Math.floor(this.z)), RADIUS, 3);
      this.gl.render(this.scene, this.camera);
    };
    requestAnimationFrame(loop);
  }

  stop(): void {
    this.running = false;
  }
}
