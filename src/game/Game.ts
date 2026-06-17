import { Renderer } from '../render/Renderer';
import { ChunkWorld } from '../core/world/chunkWorld';
import { columnHeight } from '../core/worldgen/terrain';
import { worldToChunk } from '../core/world/coords';
import { isSolidId } from '../core/blocks/registry';
import { loadAtlas } from '../render/atlas';
import { ChunkMeshManager } from '../render/ChunkMeshManager';
import { step } from '../core/physics/step';
import { EYE, type Player, type VoxelWorld } from '../core/physics/player';
import { readMove } from '../input/keyboard';
import { PointerLookControls } from '../input/PointerLookControls';

const TICK_MS = 50; // 20 TPS 固定步长
const SEED = 1337;
const RENDER_RADIUS = 6; // 渲染半径（区块）

/** 装配各层 + 固定步长模拟 + 跟随玩家动态加载区块。 */
export class Game {
  private readonly renderer: Renderer;
  private readonly look: PointerLookControls;
  private readonly world = new ChunkWorld(SEED);
  private readonly physWorld: VoxelWorld;
  private readonly chunks: ChunkMeshManager;
  private player: Player;
  private prev: Player;
  private last = 0;
  private acc = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas);
    this.chunks = new ChunkMeshManager(this.renderer.scene, this.world, loadAtlas());
    // 物理直接查无限世界（按需生成区块），故未渲染的区域也不会穿地
    this.physWorld = { isSolid: (x, y, z) => isSolidId(this.world.getBlock(x, y, z)) };

    const groundY = columnHeight(0, 0, SEED) + 2; // 略高于地表，落下稳住
    this.player = {
      pos: { x: 0.5, y: groundY, z: 0.5 },
      vel: { x: 0, y: 0, z: 0 },
      onGround: false,
    };
    this.prev = this.player;

    this.chunks.update(0, 0, 2, 999); // 同步预建出生点附近，避免开局空白

    this.look = new PointerLookControls(canvas);
    this.look.yaw = 0.6;
    this.look.pitch = -0.12;
  }

  start(): void {
    this.last = performance.now();
    const frame = (now: number): void => {
      requestAnimationFrame(frame);
      this.acc += now - this.last;
      this.last = now;
      if (this.acc > 250) this.acc = 250;
      while (this.acc >= TICK_MS) {
        this.prev = this.player;
        this.player = step(this.player, { ...readMove(), yaw: this.look.yaw }, this.physWorld);
        this.acc -= TICK_MS;
      }
      const pcx = worldToChunk(Math.floor(this.player.pos.x));
      const pcz = worldToChunk(Math.floor(this.player.pos.z));
      this.chunks.update(pcx, pcz, RENDER_RADIUS, 2);
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
