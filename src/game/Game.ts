import * as THREE from 'three';
import { Renderer } from '../render/Renderer';
import { ChunkWorld } from '../core/world/chunkWorld';
import { columnHeight } from '../core/worldgen/terrain';
import { worldToChunk } from '../core/world/coords';
import { isSolidId } from '../core/blocks/registry';
import { raycastVoxel, type RayHit } from '../core/world/raycast';
import { loadAtlas } from '../render/atlas';
import { ChunkMeshManager } from '../render/ChunkMeshManager';
import { step } from '../core/physics/step';
import { EYE, WIDTH, HEIGHT, type Player, type VoxelWorld } from '../core/physics/player';
import { readMove } from '../input/keyboard';
import { PointerLookControls } from '../input/PointerLookControls';

const TICK_MS = 50; // 20 TPS 固定步长
const SEED = 1337;
const RENDER_RADIUS = 6; // 渲染半径（区块）
const REACH = 5; // 交互距离（方块）
// 数字键 1..n 可选的放置方块（id 见 registry）
const PALETTE = [1, 2, 3, 4, 5, 6, 7, 8]; // stone,dirt,grass,cobblestone,sand,oak_log,oak_planks,coal_ore
const AIR = 0;

/** 装配各层 + 固定步长模拟 + 跟随玩家动态加载区块 + 挖掘/放置。 */
export class Game {
  private readonly renderer: Renderer;
  private readonly look: PointerLookControls;
  private readonly world = new ChunkWorld(SEED);
  private readonly physWorld: VoxelWorld;
  private readonly chunks: ChunkMeshManager;
  private readonly highlight: THREE.LineSegments;
  private player: Player;
  private prev: Player;
  private selected = PALETTE[3]; // 默认圆石
  private last = 0;
  private acc = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas);
    this.chunks = new ChunkMeshManager(this.renderer.scene, this.world, loadAtlas());
    this.physWorld = { isSolid: (x, y, z) => isSolidId(this.world.getBlock(x, y, z)) };

    const groundY = columnHeight(0, 0, SEED) + 2;
    this.player = {
      pos: { x: 0.5, y: groundY, z: 0.5 },
      vel: { x: 0, y: 0, z: 0 },
      onGround: false,
    };
    this.prev = this.player;
    this.chunks.update(0, 0, 2, 999); // 预建出生点附近

    // 选中方块的线框高亮
    const box = new THREE.BoxGeometry(1.001, 1.001, 1.001);
    this.highlight = new THREE.LineSegments(
      new THREE.EdgesGeometry(box),
      new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 }),
    );
    this.highlight.visible = false;
    this.renderer.scene.add(this.highlight);

    this.look = new PointerLookControls(canvas);
    this.look.yaw = 0.6;
    this.look.pitch = -0.12;

    // 左键挖、右键放（仅在指针锁定时）
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('mousedown', (e) => {
      if (document.pointerLockElement !== canvas) return;
      if (e.button === 0) this.breakBlock();
      else if (e.button === 2) this.placeBlock();
    });
    // 数字键选放置方块
    window.addEventListener('keydown', (e) => {
      const n = Number(e.key);
      if (Number.isInteger(n) && n >= 1 && n <= PALETTE.length) this.selected = PALETTE[n - 1];
    });
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
      this.chunks.update(
        worldToChunk(Math.floor(this.player.pos.x)),
        worldToChunk(Math.floor(this.player.pos.z)),
        RENDER_RADIUS,
        2,
      );
      this.updateHighlight();
      this.updateCamera(this.acc / TICK_MS);
      this.renderer.render();
    };
    requestAnimationFrame(frame);
  }

  // 从眼睛沿视线投射，返回命中方块
  private rayHit(): RayHit | null {
    const o = { x: this.player.pos.x, y: this.player.pos.y + EYE, z: this.player.pos.z };
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const cp = Math.cos(this.look.pitch);
    const sp = Math.sin(this.look.pitch);
    const dir = { x: cy * cp, y: sp, z: sy * cp };
    return raycastVoxel(o, dir, REACH, (x, y, z) => isSolidId(this.world.getBlock(x, y, z)));
  }

  private breakBlock(): void {
    const hit = this.rayHit();
    if (!hit) return;
    this.world.setBlock(hit.x, hit.y, hit.z, AIR);
    this.chunks.remeshDirty();
  }

  private placeBlock(): void {
    const hit = this.rayHit();
    if (!hit) return;
    const px = hit.x + hit.nx;
    const py = hit.y + hit.ny;
    const pz = hit.z + hit.nz;
    if (this.world.getBlock(px, py, pz) !== AIR) return; // 目标格非空
    if (this.overlapsPlayer(px, py, pz)) return; // 不能埋住自己
    this.world.setBlock(px, py, pz, this.selected);
    this.chunks.remeshDirty();
  }

  // 方块 [b,b+1]³ 是否与玩家 AABB 相交
  private overlapsPlayer(bx: number, by: number, bz: number): boolean {
    const p = this.player.pos;
    const hw = WIDTH / 2;
    return (
      bx < p.x + hw &&
      bx + 1 > p.x - hw &&
      by < p.y + HEIGHT &&
      by + 1 > p.y &&
      bz < p.z + hw &&
      bz + 1 > p.z - hw
    );
  }

  private updateHighlight(): void {
    const hit = this.rayHit();
    if (hit) {
      this.highlight.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
      this.highlight.visible = true;
    } else {
      this.highlight.visible = false;
    }
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
