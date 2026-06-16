import { Renderer } from '../render/Renderer';
import { generateTerrain, surfaceHeight } from '../core/worldgen/terrain';
import { meshWorld } from '../core/mesh/mesher';
import { isSolidId } from '../core/blocks/registry';
import { loadAtlas } from '../render/atlas';
import { buildChunkMesh } from '../render/ChunkRenderer';
import { step } from '../core/physics/step';
import { EYE, type Player, type VoxelWorld } from '../core/physics/player';
import { readMove } from '../input/keyboard';
import { PointerLookControls } from '../input/PointerLookControls';

const TICK_MS = 50; // 20 TPS 固定步长
const SIZE = 64; // 地形边长

/** 装配各层 + 固定步长模拟 + 可变帧率渲染（插值平滑相机）。 */
export class Game {
  private readonly renderer: Renderer;
  private readonly look: PointerLookControls;
  private readonly world: VoxelWorld;
  private player: Player;
  private prev: Player;
  private last = 0;
  private acc = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas);

    const terrain = generateTerrain({ sizeX: SIZE, sizeZ: SIZE, seed: 1337 });
    this.renderer.scene.add(buildChunkMesh(meshWorld(terrain), loadAtlas()));
    this.world = { isSolid: (x, y, z) => isSolidId(terrain.get(x, y, z)) };

    // 在地形中心的地表出生
    const cx = SIZE >> 1;
    const cz = SIZE >> 1;
    const groundY = surfaceHeight(terrain, cx, cz) + 1;
    this.player = {
      pos: { x: cx + 0.5, y: groundY, z: cz + 0.5 },
      vel: { x: 0, y: 0, z: 0 },
      onGround: false,
    };
    this.prev = this.player;

    this.look = new PointerLookControls(canvas);
    this.look.yaw = 0.6;
    this.look.pitch = -0.15;
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
