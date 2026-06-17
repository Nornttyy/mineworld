import * as THREE from 'three';
import { Renderer } from '../render/Renderer';
import { ChunkWorld } from '../core/world/chunkWorld';
import { columnHeight, SEA_LEVEL } from '../core/worldgen/terrain';
import { worldToChunk } from '../core/world/coords';
import { isSolidId, isWaterId } from '../core/blocks/registry';
import { raycastVoxel, type RayHit } from '../core/world/raycast';
import { loadAtlas } from '../render/atlas';
import { ChunkMeshManager } from '../render/ChunkMeshManager';
import { step } from '../core/physics/step';
import { EYE, WIDTH, HEIGHT, type Player, type VoxelWorld } from '../core/physics/player';
import { readMove, consumeJump } from '../input/keyboard';
import { PointerLookControls } from '../input/PointerLookControls';
import { Hotbar } from '../ui/hotbar';

const TICK_MS = 50; // 20 TPS 固定步长
const SEED = 1337;
const RENDER_RADIUS = 6; // 渲染半径（区块）
const REACH = 5; // 交互距离（方块）
// 快捷栏 1..9 的放置方块（id 见 registry）
const PALETTE = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 石/土/草/圆石/沙/原木/木板/煤矿/水
const AIR = 0;

/** 装配各层 + 固定步长模拟 + 跟随玩家动态加载区块 + 挖掘/放置。 */
export class Game {
  private readonly renderer: Renderer;
  private readonly look: PointerLookControls;
  private readonly world = new ChunkWorld(SEED);
  private readonly physWorld: VoxelWorld;
  private readonly chunks: ChunkMeshManager;
  private readonly highlight: THREE.LineSegments;
  private readonly underwaterEl: HTMLElement | null;
  private readonly normalFog: THREE.FogBase | null;
  private readonly underFog = new THREE.Fog(0x245f8a, 0.1, 16); // 水下：浓蓝雾
  private player: Player;
  private prev: Player;
  private readonly hotbar: Hotbar;
  private fov = 70; // 当前相机 FOV（疾跑时平滑拉宽）
  private last = 0;
  private acc = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas);
    this.normalFog = this.renderer.scene.fog;
    this.underwaterEl = document.getElementById('underwater');
    this.hotbar = new Hotbar(document.getElementById('hotbar') as HTMLElement, PALETTE);
    this.chunks = new ChunkMeshManager(this.renderer.scene, this.world, loadAtlas());
    this.physWorld = {
      isSolid: (x, y, z) => isSolidId(this.world.getBlock(x, y, z)),
      isWater: (x, y, z) => isWaterId(this.world.getBlock(x, y, z)),
    };

    const spawn = this.findSpawn();
    this.player = {
      pos: { x: spawn.x, y: spawn.y, z: spawn.z },
      vel: { x: 0, y: 0, z: 0 },
      onGround: false,
    };
    this.prev = this.player;
    this.chunks.update(
      worldToChunk(Math.floor(spawn.x)),
      worldToChunk(Math.floor(spawn.z)),
      2,
      999,
    ); // 预建出生点附近

    // 选中方块的线框高亮
    const box = new THREE.BoxGeometry(1.001, 1.001, 1.001);
    this.highlight = new THREE.LineSegments(
      new THREE.EdgesGeometry(box),
      new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 }),
    );
    this.highlight.visible = false;
    this.renderer.scene.add(this.highlight);

    this.look = new PointerLookControls(canvas);
    this.look.yaw = Math.atan2(-spawn.z, -spawn.x); // 朝原点（多半有水）看
    this.look.pitch = -0.18;

    // 左键挖、右键放（仅在指针锁定时）
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('mousedown', (e) => {
      if (document.pointerLockElement !== canvas) return;
      if (e.button === 0) this.breakBlock();
      else if (e.button === 2) this.placeBlock();
    });
    // 数字键选快捷栏方块
    window.addEventListener('keydown', (e) => {
      const n = Number(e.key);
      if (Number.isInteger(n) && n >= 1 && n <= PALETTE.length) this.hotbar.setSelected(n - 1);
    });
    // 滚轮切换快捷栏（同 MC）
    canvas.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        this.hotbar.scroll(Math.sign(e.deltaY));
      },
      { passive: false },
    );
  }

  // 从原点向外找一处略高于海平面的海岸陆地作为出生点
  private findSpawn(): { x: number; y: number; z: number } {
    for (let r = 1; r < 160; r++) {
      for (let i = -r; i <= r; i++) {
        const ring: [number, number][] = [
          [i, -r],
          [i, r],
          [-r, i],
          [r, i],
        ];
        for (const [x, z] of ring) {
          const h = columnHeight(x, z, SEED);
          if (h > SEA_LEVEL && h <= SEA_LEVEL + 4) return { x: x + 0.5, y: h + 2, z: z + 0.5 };
        }
      }
    }
    return { x: 0.5, y: SEA_LEVEL + 3, z: 0.5 };
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
        const m = readMove();
        this.player = step(
          this.player,
          {
            forward: m.forward,
            right: m.right,
            yaw: this.look.yaw,
            jump: consumeJump(), // 边沿：一次按键一次跳
            swimUp: m.jumpHeld, // 水中持续上浮
            sprint: m.sprint,
          },
          this.physWorld,
        );
        this.acc -= TICK_MS;
      }
      this.chunks.update(
        worldToChunk(Math.floor(this.player.pos.x)),
        worldToChunk(Math.floor(this.player.pos.z)),
        RENDER_RADIUS,
        2,
      );
      // 疾跑时平滑拉宽视野（同 MC 的速度感）
      const wantFov = readMove().sprint ? 80 : 70;
      this.fov += (wantFov - this.fov) * 0.15;
      this.renderer.camera.fov = this.fov;
      this.renderer.camera.updateProjectionMatrix();
      this.updateWater();
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
    const target = this.world.getBlock(px, py, pz);
    if (target !== AIR && !isWaterId(target)) return; // 仅可放进空气或水
    if (this.overlapsPlayer(px, py, pz)) return; // 不能埋住自己
    this.world.setBlock(px, py, pz, PALETTE[this.hotbar.index]);
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

  // 眼睛在水里 → 切到浓蓝雾 + 蓝色屏幕叠层（同 MC 水下观感）
  private updateWater(): void {
    const ex = Math.floor(this.player.pos.x);
    const ey = Math.floor(this.player.pos.y + EYE);
    const ez = Math.floor(this.player.pos.z);
    const under = isWaterId(this.world.getBlock(ex, ey, ez));
    this.renderer.scene.fog = under ? this.underFog : this.normalFog;
    if (this.underwaterEl) this.underwaterEl.style.display = under ? 'block' : 'none';
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
