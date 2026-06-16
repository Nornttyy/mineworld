import { Renderer } from '../render/Renderer';
import { demoChunk } from '../core/world/demoChunk';
import { meshSection } from '../core/mesh/mesher';
import { isSolidId } from '../core/blocks/registry';
import { loadAtlas } from '../render/atlas';
import { buildChunkMesh } from '../render/ChunkRenderer';
import { step } from '../core/physics/step';
import { EYE, type Player, type VoxelWorld } from '../core/physics/player';
import { readMove } from '../input/keyboard';
import { PointerLookControls } from '../input/PointerLookControls';

const TICK_MS = 50; // 20 TPS 固定步长

/** 装配各层 + 固定步长模拟 + 可变帧率渲染（插值平滑相机）。 */
export class Game {
  private readonly renderer: Renderer;
  private readonly look: PointerLookControls;
  private readonly world: VoxelWorld;
  private player: Player = {
    pos: { x: 2.5, y: 9, z: 2.5 },
    vel: { x: 0, y: 0, z: 0 },
    onGround: false,
  };
  private prev: Player = this.player;
  private last = 0;
  private acc = 0;

  constructor(canvas: HTMLCanvasElement, overlay: HTMLElement) {
    this.renderer = new Renderer(canvas);
    const sec = demoChunk();
    this.renderer.scene.add(buildChunkMesh(meshSection(sec), loadAtlas()));
    // 单区块世界：区块外视为空气（可走到边缘掉下去）。
    this.world = {
      isSolid: (x, y, z) =>
        x >= 0 && x < 16 && y >= 0 && y < 16 && z >= 0 && z < 16 && isSolidId(sec.get(x, y, z)),
    };
    this.look = new PointerLookControls(canvas, overlay);
    this.look.yaw = 0.8; // 初始朝地形中心
    this.look.pitch = -0.3;
  }

  start(): void {
    this.last = performance.now();
    const frame = (now: number): void => {
      requestAnimationFrame(frame);
      this.acc += now - this.last;
      this.last = now;
      if (this.acc > 250) this.acc = 250; // 防卡顿后追帧爆炸
      while (this.acc >= TICK_MS) {
        this.prev = this.player;
        this.player = step(this.player, { ...readMove(), yaw: this.look.yaw }, this.world);
        this.acc -= TICK_MS;
      }
      this.updateCamera(this.acc / TICK_MS);
      this.renderer.render();
    };
    requestAnimationFrame(frame);
  }

  private updateCamera(alpha: number): void {
    const a = this.prev.pos;
    const b = this.player.pos;
    const x = a.x + (b.x - a.x) * alpha;
    const y = a.y + (b.y - a.y) * alpha;
    const z = a.z + (b.z - a.z) * alpha;
    const cam = this.renderer.camera;
    cam.position.set(x, y + EYE, z);
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const cp = Math.cos(this.look.pitch);
    const sp = Math.sin(this.look.pitch);
    cam.lookAt(x + cy * cp, y + EYE + sp, z + sy * cp);
  }
}
