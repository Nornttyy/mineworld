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
const RADIUS = 4; // 加载半径（区块）——菜单背景纯装饰，小半径省内存（进游戏 dispose 前的瞬时占用也更小，缓解低内存机 OOM）

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
  // resize 监听存成字段：dispose 时 removeEventListener，否则这个闭包持有 this → 整套菜单世界永不被 GC(进游戏后双份占内存→OOM)。
  private readonly onResize = (): void => this.resize();

  constructor(canvas: HTMLCanvasElement, seed = 4242) {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false });
    this.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 分辨率按设备(保清晰)。⚠️ 不加 powerPreference(部分机器会创建上下文失败)
    this.scene.background = makeSkyTexture();
    this.scene.fog = new THREE.Fog(HORIZON_COLOR, 40, RADIUS * 16); // 雾在加载边缘前盖住

    this.world = new ChunkWorld(seed);
    this.seekWater(); // 起点设到附近的水边，开局就有湖
    this.chunks = new ChunkMeshManager(this.scene, this.world, loadAtlas());
    this.chunks.update(worldToChunk(Math.floor(this.x)), worldToChunk(Math.floor(this.z)), RADIUS, 999);

    this.resize();
    window.addEventListener('resize', this.onResize);
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

  // 预加载：请求整个渲染范围(=RADIUS，雾内全部)区块后台生成 + 等就绪 + 网格化，主菜单背景一显示就完整(不渐显)。
  async preload(radius = RADIUS): Promise<void> {
    const cx = worldToChunk(Math.floor(this.x));
    const cz = worldToChunk(Math.floor(this.z));
    for (let dz = -radius; dz <= radius; dz++)
      for (let dx = -radius; dx <= radius; dx++) this.world.request(cx + dx, cz + dz);
    await new Promise<void>((resolve) => {
      const check = (): void => {
        let ready = true;
        for (let dz = -radius; dz <= radius && ready; dz++)
          for (let dx = -radius; dx <= radius && ready; dx++)
            if (!this.world.peek(cx + dx, cz + dz)) ready = false;
        if (ready) resolve();
        else setTimeout(check, 30);
      };
      check();
    });
    // 网格化已移到 Web Worker：派活后必须每帧 flushMesh 把算好的网格【上屏】，否则背景空着(只剩天空)。
    // 轮询直到全部网格化结果都上屏(meshBusy 转 false)，主菜单一显示就铺满；600 帧封顶兜底防卡死。
    for (let i = 0; i < 600 && (i < 3 || this.chunks.meshBusy()); i++) {
      this.chunks.update(cx, cz, radius, 999);
      this.chunks.flushMesh(999);
      await new Promise<void>((r) => requestAnimationFrame(() => r()));
    }
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    const loop = (): void => {
      if (!this.running) return;
      requestAnimationFrame(loop);
      // 不再前飞：相机定在原地，只缓慢旋转(原地转头看一圈)，像 MC 主菜单的旋转全景。
      this.heading += 0.0006; // 缓慢旋转(~全圈 3 分钟)
      this.camera.position.set(this.x, this.y, this.z);
      this.camera.lookAt(
        this.x + Math.cos(this.heading) * 26,
        this.y - 17, // 略俯视
        this.z + Math.sin(this.heading) * 26,
      );
      this.chunks.flushMesh(2); // 把 worker 算好的网格上屏(预加载没铺完的兜底)
      this.gl.render(this.scene, this.camera);
    };
    requestAnimationFrame(loop);
  }

  stop(): void {
    this.running = false;
  }

  /**
   * 进游戏时调用：停渲染循环 + 释放整套菜单世界(区块网格/worker/材质) + 丢弃 WebGL 上下文。
   * 否则菜单背景(独立 scene + ChunkMeshManager + 第二个 WebGL 上下文)会与游戏世界【双份】常驻内存 → OOM。
   * 进游戏后不再返回菜单(退出走 location.reload 重建)，故可安全永久释放。
   */
  dispose(): void {
    this.running = false; // 停 rAF 循环
    window.removeEventListener('resize', this.onResize); // 摘掉监听,否则闭包持有 this → 整套世界泄漏
    this.chunks.dispose(); // 卸载菜单世界所有区块网格 + 终止其 mesh worker + 销毁材质
    this.world.dispose(); // 终止 chunkGen worker + 清空区块数据(JS 堆大头,泄漏会 OOM)
    this.gl.dispose();
    this.gl.forceContextLoss(); // 释放该 WebGL 上下文的全部 GPU 资源(几何/纹理/帧缓冲)
  }
}
