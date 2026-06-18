import * as THREE from 'three';
import { Renderer } from '../render/Renderer';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_H } from '../core/world/chunk';
import { columnHeight, SEA_LEVEL } from '../core/worldgen/terrain';
import { worldToChunk } from '../core/world/coords';
import {
  isSolidId,
  isWaterId,
  breakTimeMs,
  dropFor,
  OAK_LEAVES,
  CRAFTING_TABLE,
  FURNACE,
  type HeldTool,
} from '../core/blocks/registry';
import { raycastVoxel, type RayHit } from '../core/world/raycast';
import { loadAtlas } from '../render/atlas';
import { loadSettings, type TexturePack } from '../core/settings';
import { ChunkMeshManager } from '../render/ChunkMeshManager';
import { CrackOverlay } from '../render/CrackOverlay';
import { DropRenderer } from '../render/DropRenderer';
import { FirstPersonHand } from '../render/FirstPersonHand';
import { step } from '../core/physics/step';
import { EYE, WIDTH, HEIGHT, type Player, type VoxelWorld } from '../core/physics/player';
import { spawnDrop, stepDrop, canPickup, type ItemDrop } from '../core/entity/itemDrop';
import { updateMob, hurtMob, isHostile, MOB_DEFS, type Mob, type MobKind } from '../core/entity/mob';
import { updateHostile } from '../core/entity/hostileAi';
import { spawnRingGroup, spawnHostileRing, type SpawnWorld } from '../core/entity/mobSpawn';
import { serializeMob, deserializeMob } from '../core/entity/mobSave';
import { MobRenderer } from '../render/MobRenderer';
import { makeRng } from '../core/math/rng';
import { FluidSim, type FluidGrid } from '../core/fluid/fluidSim';
import { presettleWater } from '../core/fluid/presettle';
import {
  emptyInventory,
  addItem,
  takeOne,
  damageTool,
  serializeInventory,
  deserializeInventory,
  type Inventory,
} from '../core/inventory/inventory';
import { readMove, consumeJump } from '../input/keyboard';
import { PointerLookControls } from '../input/PointerLookControls';
import { Hotbar } from '../ui/hotbar';
import { StatusBar } from '../ui/statusBar';
import { InventoryUI } from '../ui/inventoryUI';
import { FurnaceUI } from '../ui/furnaceUI';
import { newFurnace, tickFurnace, furnaceActive, type FurnaceState } from '../core/crafting/smelting';
import {
  newSurvival,
  tickSurvival,
  addExhaustion,
  applyDamage,
  isDead as survivalIsDead,
  eat,
  trackFall,
  tickOxygen,
  MAX_FOOD,
  type Survival,
} from '../core/survival/survival';
import { APPLE, EGG, isFood, foodValue, toolOf } from '../core/items/items';
import { skyStateAt, DAY_START, DAY_LENGTH } from '../core/world/dayNight';
import { ParticleRenderer } from '../render/ParticleRenderer';
import { spawnBurst, stepParticles, particleColor, type Particle } from '../core/particles/particles';
import type { WorldSave } from '../save/worldStore';

const TICK_MS = 50; // 20 TPS 固定步长
const RENDER_RADIUS = 6; // 渲染半径（区块）
const REACH = 5; // 交互距离（方块）
const HOTBAR_SLOTS = 9;
const DROP_TTL = 300; // 掉落物存活上限（秒，同 MC 5 分钟）
const AIR = 0;
const EAT_TIME = 1.6; // 吃东西耗时（秒，同 MC）
const LEAF_APPLE_CHANCE = 0.05; // 树叶掉苹果概率（1:1 是 0.5%，调高更可玩）
const SPRINT_EXHAUSTION = 0.1; // 每格疾跑消耗（MC）
const JUMP_EXHAUSTION = 0.05;
const SPRINT_JUMP_EXHAUSTION = 0.2;
const BREAK_EXHAUSTION = 0.005;
const DAMAGE_EXHAUSTION = 0.1;
const MOB_REACH = 3.5; // 攻击实体距离（格，≈MC）
const MOB_CAP = 16; // 玩家附近生物上限（性能保险）
const MOB_DESPAWN_R = 88; // 超出此横向距离即卸载（略小于渲染半径，让落在身后的及时清掉、腾出名额）
const MOB_NEAR_R = 48; // 统计/维持种群的半径
const MOB_NEAR_TARGET = 6; // 身边维持的目标数量
const HOSTILE_NEAR_TARGET = 4; // 夜里身边维持的敌对生物数（僵尸/骷髅）
const MOB_SPAWN_EVERY = 25; // 每多少刻尝试一次补刷（~1.25s）
const MOB_KINDS: MobKind[] = ['pig', 'cow', 'sheep', 'chicken'];

// 近战伤害（1:1 MC）：拳 1 / 木剑 4 / 石剑 5 / 铁剑 6（非剑按拳算）。
function mobDamage(heldId: number | null): number {
  if (heldId == null) return 1;
  const t = toolOf(heldId);
  if (t?.kind === 'sword') return t.tier === 1 ? 4 : t.tier === 2 ? 5 : 6;
  return 1;
}

// 射线 vs 轴对齐盒（slab 法）：返回最近正向命中距离 t，未命中返回 null。
function rayAabb(
  ox: number, oy: number, oz: number,
  dx: number, dy: number, dz: number,
  minX: number, minY: number, minZ: number,
  maxX: number, maxY: number, maxZ: number,
): number | null {
  let tmin = 0;
  let tmax = Infinity;
  const slab = (o: number, d: number, lo: number, hi: number): boolean => {
    if (Math.abs(d) < 1e-9) return o >= lo && o <= hi;
    let t1 = (lo - o) / d;
    let t2 = (hi - o) / d;
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1);
    tmax = Math.min(tmax, t2);
    return tmax >= tmin;
  };
  if (!slab(ox, dx, minX, maxX)) return null;
  if (!slab(oy, dy, minY, maxY)) return null;
  if (!slab(oz, dz, minZ, maxZ)) return null;
  return tmin;
}

/** 装配各层 + 固定步长模拟 + 跟随玩家动态加载区块 + 挖掘/放置 + 生命/饥饿。从存档启动。 */
export class Game {
  private readonly canvas: HTMLCanvasElement;
  private readonly save: WorldSave;
  private readonly renderer: Renderer;
  private readonly look: PointerLookControls;
  private readonly world: ChunkWorld;
  private readonly physWorld: VoxelWorld;
  private readonly chunks: ChunkMeshManager;
  private readonly highlight: THREE.LineSegments;
  private readonly underwaterEl: HTMLElement | null;
  private readonly normalFog: THREE.FogBase | null;
  private readonly underFog = new THREE.Fog(0x245f8a, 0.1, 16); // 水下：浓蓝雾
  private player: Player;
  private prev: Player;
  private readonly hotbar: Hotbar;
  private readonly inv: Inventory;
  private readonly crack: CrackOverlay;
  private readonly dropRenderer: DropRenderer;
  private readonly hand: FirstPersonHand;
  private readonly particleFx: ParticleRenderer;
  private particles: Particle[] = []; // 碎屑粒子数据（挖方块四溅）
  private digFxT = 0; // 挖掘碎屑喷发节流计时
  private readonly invUI: InventoryUI;
  private craftingGrid = 0; // 背包/合成界面：0=关闭 2=个人(2×2) 3=工作台(3×3)
  private readonly furnaceUI: FurnaceUI;
  private readonly furnaces = new Map<string, FurnaceState>(); // 坐标"x,y,z"→熔炉状态
  private furnaceKey: string | null = null; // 当前打开的熔炉坐标(null=没开)
  private readonly drops: ItemDrop[] = [];
  private readonly mobs: Mob[] = []; // 世界里的被动动物
  private readonly mobRenderer: MobRenderer;
  private readonly mobRng: () => number;
  private readonly spawnWorld: SpawnWorld; // 给生物生成用的只读世界视图
  private readonly surfaceY = (x: number, z: number): number => columnHeight(x, z, this.save.seed);
  private mobSpawnTick = 0; // 补刷计时
  private digging = false; // 是否按住左键挖掘
  private digTarget: { x: number; y: number; z: number } | null = null;
  private digProgress = 0; // 当前目标已挖秒数
  private readonly fluidSim = new FluidSim();
  private readonly fluidGrid: FluidGrid;
  private fluidTick = 0; // 计数：每 5 刻跑一次水模拟（同 MC）
  private worldTime: number; // 昼夜更替：世界时间(刻)，每模拟刻 +1；24000 刻=20 分一整天
  private fov = 70;
  private last = 0;
  private acc = 0;
  private survival: Survival;
  private readonly statusBar: StatusBar;
  private readonly worldSpawn: { x: number; y: number; z: number };
  private dead = false;
  private fallDistance = 0; // 当前连续下落格数
  private eating = false; // 是否按住右键吃东西
  private eatProgress = 0;
  private eatFxT = 0; // 吃东西喷食物渣的节流计时
  private texturePack: TexturePack; // 当前材质风格（卡通/经典）

  constructor(canvas: HTMLCanvasElement, save: WorldSave) {
    this.canvas = canvas;
    this.save = save;
    this.renderer = new Renderer(canvas);
    this.normalFog = this.renderer.scene.fog;
    this.underwaterEl = document.getElementById('underwater');
    this.hotbar = new Hotbar(document.getElementById('hotbar') as HTMLElement, HOTBAR_SLOTS);
    this.inv = save.inv ? deserializeInventory(save.inv) : emptyInventory();
    this.hotbar.render(this.inv);
    // 生命/饥饿：有存档用存档（已死状态则重置为满），否则全满。
    // 先铺 newSurvival() 默认值，再覆盖存档字段——补齐旧存档没有的字段(如 oxygen)，避免缺值。
    const sv = save.survival;
    this.survival = sv && sv.health > 0 ? { ...newSurvival(), ...sv, foodTimer: 0 } : newSurvival();
    this.statusBar = new StatusBar(
      document.getElementById('health') as HTMLElement,
      document.getElementById('hunger') as HTMLElement,
    );
    this.statusBar.render(this.survival);
    this.worldTime = save.worldTime ?? DAY_START; // 昼夜：续存档时刻，新世界从清晨开始

    this.world = new ChunkWorld(save.seed);
    this.fluidGrid = {
      // 世界顶/底之外视作固体：水不会灌进虚空(否则到 y=0 会无限提议下落、永不收敛)
      isSolid: (x, y, z) => y < 0 || y >= CHUNK_H || isSolidId(this.world.getBlock(x, y, z)),
      amount: (x, y, z) => this.world.waterAmount(x, y, z),
      isSource: (x, y, z) => this.world.isWaterSource(x, y, z),
      isFalling: (x, y, z) => this.world.isWaterFalling(x, y, z),
      setWater: (x, y, z, a, s, f) => this.world.setWater(x, y, z, a, s, f),
    };
    // 应用存档里玩家改过的方块（delta），并激活其周围的水（重新流入/退去）
    for (const key of Object.keys(save.edits)) {
      const [x, y, z] = key.split(',').map(Number);
      this.world.setBlock(x, y, z, save.edits[key]);
      this.fluidSim.activate(x, y, z);
    }
    this.texturePack = loadSettings().texturePack; // 按设置选卡通/经典图集
    const atlas = loadAtlas(this.texturePack);
    this.chunks = new ChunkMeshManager(this.renderer.scene, this.world, atlas);
    this.crack = new CrackOverlay(this.renderer.scene);
    this.dropRenderer = new DropRenderer(this.renderer.scene, atlas);
    this.mobRenderer = new MobRenderer(this.renderer.scene);
    this.mobRng = makeRng((save.seed ^ 0x9e3779b9) >>> 0);
    this.spawnWorld = { getBlock: (x, y, z) => this.world.getBlock(x, y, z) };
    this.hand = new FirstPersonHand(atlas);
    this.particleFx = new ParticleRenderer(this.renderer.scene);
    this.invUI = new InventoryUI(document.getElementById('inventory') as HTMLElement);
    this.furnaceUI = new FurnaceUI(document.getElementById('furnace') as HTMLElement);
    this.furnaceUI.onChange = (): void => this.hotbar.render(this.inv);
    this.invUI.onChange = (): void => this.hotbar.render(this.inv);
    this.physWorld = {
      isSolid: (x, y, z) => isSolidId(this.world.getBlock(x, y, z)),
      isWater: (x, y, z) => isWaterId(this.world.getBlock(x, y, z)),
    };

    // 出生：worldSpawn 始终为世界出生点（死亡重生用）；有存档位置则从那里继续
    const p = save.player;
    this.worldSpawn = this.findSpawn(save.seed);
    const spawn = p ? { x: p.x, y: p.y, z: p.z } : this.worldSpawn;
    this.player = { pos: { ...spawn }, vel: { x: 0, y: 0, z: 0 }, onGround: false };
    this.prev = this.player;
    this.chunks.update(worldToChunk(Math.floor(spawn.x)), worldToChunk(Math.floor(spawn.z)), 2, 999);
    // 生物：有存档就还原玩家上次离开时附近的（动物/敌对）；否则（新世界/旧档）出生周边撒几群
    if (save.mobs && save.mobs.length) {
      for (const sm of save.mobs) this.mobs.push(deserializeMob(sm));
    } else {
      for (let i = 0; i < 4; i++) {
        this.mobs.push(...spawnRingGroup(MOB_KINDS[i % 4], spawn.x, spawn.z, this.mobRng, this.spawnWorld, this.surfaceY, 6, 26));
      }
    }

    const box = new THREE.BoxGeometry(1.001, 1.001, 1.001);
    this.highlight = new THREE.LineSegments(
      new THREE.EdgesGeometry(box),
      new THREE.LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35 }),
    );
    this.highlight.visible = false;
    this.renderer.scene.add(this.highlight);

    this.look = new PointerLookControls(canvas);
    this.look.yaw = p ? p.yaw : Math.atan2(-spawn.z, -spawn.x);
    this.look.pitch = p ? p.pitch : -0.18;

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('mousedown', (e) => {
      if (document.pointerLockElement !== canvas) return;
      if (e.button === 0) {
        const target = this.mobUnderCrosshair();
        if (target) {
          this.attackMob(target); // 准星对着生物 → 打它（不挖方块）
          return;
        }
        this.digging = true; // 按住左键持续挖掘（按硬度耗时）
        this.digTarget = null; // 重新评估目标
      } else if (e.button === 2) this.onUseDown(); // 右键：吃 / 放方块
    });
    const stopDig = (): void => {
      this.digging = false;
      this.digProgress = 0;
      this.digTarget = null;
      this.crack.hide();
    };
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) stopDig();
      else if (e.button === 2) this.stopEating();
    });
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== canvas) {
        stopDig(); // 松开锁定即停挖
        this.stopEating();
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyE') {
        if (this.furnaceKey) this.closeFurnace();
        else if (this.craftingGrid > 0) this.closeCrafting();
        else if (document.pointerLockElement === canvas) this.openCrafting(2);
        return;
      }
      if (e.code === 'Escape' && this.furnaceKey) {
        this.closeFurnace();
        return;
      }
      if (e.code === 'Escape' && this.craftingGrid > 0) {
        this.closeCrafting();
        return;
      }
      const n = Number(e.key);
      if (Number.isInteger(n) && n >= 1 && n <= HOTBAR_SLOTS) this.hotbar.setSelected(n - 1);
    });
    canvas.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        this.hotbar.scroll(Math.sign(e.deltaY));
      },
      { passive: false },
    );
  }

  // 当前世界状态快照（写回存档对象，供持久化）
  snapshot(): WorldSave {
    this.save.player = {
      x: this.player.pos.x,
      y: this.player.pos.y,
      z: this.player.pos.z,
      yaw: this.look.yaw,
      pitch: this.look.pitch,
    };
    this.save.inv = serializeInventory(this.inv);
    const sv = this.survival;
    this.save.survival = {
      health: sv.health,
      food: sv.food,
      saturation: sv.saturation,
      exhaustion: sv.exhaustion,
    };
    this.save.worldTime = this.worldTime; // 昼夜：存当前时刻，下次续上
    this.save.mobs = this.mobs.map(serializeMob); // 附近生物（动物/敌对）随档保存
    this.save.lastPlayed = Date.now();
    return this.save;
  }

  private findSpawn(seed: number): { x: number; y: number; z: number } {
    for (let r = 1; r < 160; r++) {
      for (let i = -r; i <= r; i++) {
        for (const [x, z] of [
          [i, -r],
          [i, r],
          [-r, i],
          [r, i],
        ] as [number, number][]) {
          const h = columnHeight(x, z, seed);
          // 该列须是海岸平地，且地面上方是空气(没长树)，否则会出生卡在树干里
          if (h > SEA_LEVEL && h <= SEA_LEVEL + 4 && this.world.getBlock(x, h + 1, z) === 0)
            return { x: x + 0.5, y: h + 2, z: z + 0.5 };
        }
      }
    }
    return { x: 0.5, y: SEA_LEVEL + 3, z: 0.5 };
  }

  // 加载阶段：请求出生周围区块(后台并行生成)并等全部就绪 + 网格化，避免进游戏后远处渐显。
  async preloadSpawn(radius = 3): Promise<void> {
    const cx = worldToChunk(Math.floor(this.player.pos.x));
    const cz = worldToChunk(Math.floor(this.player.pos.z));
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
    // 开局预流动：读档会重放玩家改过的方块并激活其周围的水(见构造)，这些水本会在进场后头几秒慢慢流。
    // 这里在加载阶段先把活跃水跑到稳态，再网格化——玩家进场即见已流好的水，而非眼前慢慢流(全新世界活跃集空=瞬返)。
    presettleWater(this.fluidSim, this.fluidGrid);
    // 分摊网格化:loading 期间逐帧建几个(深世界单区块 mesh 重，一次全建会卡死)
    const rounds = Math.ceil((radius * 2 + 1) ** 2 / 4) + 1;
    for (let i = 0; i < rounds; i++) {
      this.chunks.update(cx, cz, radius, 4);
      await new Promise<void>((r) => requestAnimationFrame(() => r()));
    }
  }

  start(): void {
    this.last = performance.now();
    const frame = (now: number): void => {
      requestAnimationFrame(frame);
      const dt = Math.min(now - this.last, 100) / 1000; // 帧间隔(秒)，限幅防卡顿跳变
      this.acc += now - this.last;
      this.last = now;
      if (this.acc > 250) this.acc = 250;
      const playing = document.pointerLockElement === this.canvas;
      while (playing && this.acc >= TICK_MS) {
        this.prev = this.player;
        const m = readMove();
        const jumped = consumeJump();
        this.player = step(
          this.player,
          {
            forward: m.forward,
            right: m.right,
            yaw: this.look.yaw,
            jump: jumped,
            swimUp: m.jumpHeld,
            sprint: m.sprint,
          },
          this.physWorld,
        );
        this.stepSurvival(m.sprint, jumped);
        if (++this.worldTime >= DAY_LENGTH) this.worldTime = 0; // 昼夜推进：每模拟刻 +1（暂停即冻结）
        // 流动水：每 5 刻更新一次（同 MC），变动后重建脏区块网格
        if (++this.fluidTick >= 5) {
          this.fluidTick = 0;
          this.fluidSim.tick(this.fluidGrid);
          this.chunks.remeshDirty();
        }
        // 熔炉：每刻推进活跃熔炉的冶炼；打开中的熔炉刷新界面
        for (const st of this.furnaces.values()) {
          if (furnaceActive(st)) tickFurnace(st);
        }
        if (this.furnaceKey) this.furnaceUI.render();
        this.tickMobs(); // 生物 AI/物理/掉蛋/周期刷新（每刻）
        this.acc -= TICK_MS;
      }
      if (!playing) this.acc = 0; // 暂停：冻结物理，不累积

      this.chunks.update(
        worldToChunk(Math.floor(this.player.pos.x)),
        worldToChunk(Math.floor(this.player.pos.z)),
        RENDER_RADIUS,
        1, // 每帧最多建 1 个区块网格(深世界 mesh 重，降到 1 避免移动间隔卡)
      );
      const wantFov = playing && readMove().sprint ? 80 : 70;
      this.fov += (wantFov - this.fov) * 0.15;
      this.renderer.camera.fov = this.fov;
      this.renderer.camera.updateProjectionMatrix();
      if (playing) {
        this.updateMining(dt);
        this.updateDrops(dt);
        this.updateEating(dt);
        this.statusBar.render(this.survival);
        if (this.digging) this.hand.swing(); // 按住挖时连续摆臂
      } else {
        this.crack.hide();
      }
      this.chunks.animateWater(dt); // 水面流动动画
      this.updateDayNight(); // 昼夜更替：天空/雾/世界亮度
      this.updateWater();
      this.updateHighlight();
      this.updateCamera(this.acc / TICK_MS);
      // 碎屑粒子：每帧推进 + 刷新
      this.particles = stepParticles(this.particles, dt);
      this.particleFx.sync(this.particles);
      this.mobRenderer.sync(this.mobs, dt); // 生物模型跟随/动画
      // 第一人称手臂：手持当前选中方块、按移动速度晃动；吃东西时送嘴边抖动
      const held = this.inv[this.hotbar.index];
      this.hand.setHeld(held ? held.id : null);
      this.hand.setEating(playing && this.eating);
      const walk = Math.min(1, Math.hypot(this.player.vel.x, this.player.vel.z) / 0.22);
      this.hand.update(dt, playing ? walk : 0);
      if (this.hand.camera.aspect !== this.renderer.camera.aspect) {
        this.hand.resize(this.renderer.camera.aspect);
      }
      this.renderer.render();
      this.renderer.renderOverlay(this.hand.scene, this.hand.camera);
    };
    requestAnimationFrame(frame);
  }

  // 每模拟刻推进生命/饥饿：累积疲劳(疾跑/跳)、结算摔落、回血/掉血、判定死亡。
  private stepSurvival(sprint: boolean, jumped: boolean): void {
    const dx = this.player.pos.x - this.prev.pos.x;
    const dz = this.player.pos.z - this.prev.pos.z;
    const dy = this.player.pos.y - this.prev.pos.y;
    if (sprint) addExhaustion(this.survival, SPRINT_EXHAUSTION * Math.hypot(dx, dz));
    if (jumped) addExhaustion(this.survival, sprint ? SPRINT_JUMP_EXHAUSTION : JUMP_EXHAUSTION);
    const px = Math.floor(this.player.pos.x);
    const pz = Math.floor(this.player.pos.z);
    const inWater = isWaterId(this.world.getBlock(px, Math.floor(this.player.pos.y), pz));
    const fall = trackFall(this.fallDistance, dy, this.player.onGround, inWater);
    this.fallDistance = fall.fallDistance;
    if (fall.damage > 0) {
      applyDamage(this.survival, fall.damage);
      addExhaustion(this.survival, DAMAGE_EXHAUSTION);
      this.flashHurt();
    }
    // 氧气：头(眼睛)所在格是水才憋气；淹溺掉血也闪红
    const headInWater = isWaterId(this.world.getBlock(px, Math.floor(this.player.pos.y + EYE), pz));
    const hpBefore = this.survival.health;
    tickOxygen(this.survival, headInWater);
    if (this.survival.health < hpBefore) this.flashHurt();
    tickSurvival(this.survival);
    if (survivalIsDead(this.survival) && !this.dead) this.die();
  }

  // 受伤红屏反馈：触发一次 CSS 闪动（先移除再加 class 以重启动画）。
  private flashHurt(): void {
    const el = document.getElementById('hurt');
    if (!el) return;
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
  }

  private die(): void {
    this.dead = true;
    this.digging = false;
    this.stopEating();
    void document.exitPointerLock(); // 解锁 → main 切到死亡界面
  }

  isDead(): boolean {
    return this.dead;
  }

  // 切换材质风格（设置里改"材质"时由 main 调用）：换图集到方块/手持/掉落物，无需重建网格。
  setTexturePack(pack: TexturePack): void {
    if (pack === this.texturePack) return;
    this.texturePack = pack;
    const atlas = loadAtlas(pack);
    this.chunks.setAtlas(atlas);
    this.hand.setAtlas(atlas);
    this.dropRenderer.setAtlas(atlas);
  }

  // 重生：满状态 + 回到世界出生点。
  respawn(): void {
    this.survival = newSurvival();
    this.dead = false;
    this.fallDistance = 0;
    const s = this.worldSpawn;
    this.player = { pos: { ...s }, vel: { x: 0, y: 0, z: 0 }, onGround: false };
    this.prev = this.player;
    this.chunks.update(worldToChunk(Math.floor(s.x)), worldToChunk(Math.floor(s.z)), 2, 999);
    this.statusBar.render(this.survival);
  }

  // 右键按下：手持食物则开吃，否则放方块。
  private onUseDown(): void {
    // 右键工作台 → 打开 3×3 合成
    const hit = this.rayHit();
    if (hit && this.world.getBlock(hit.x, hit.y, hit.z) === CRAFTING_TABLE) {
      this.openCrafting(3);
      return;
    }
    if (hit && this.world.getBlock(hit.x, hit.y, hit.z) === FURNACE) {
      this.openFurnace(hit.x, hit.y, hit.z);
      return;
    }
    const stack = this.inv[this.hotbar.index];
    // 手持食物且饱食度未满 → 开吃；饱食度满时不能吃（同 MC，普通食物吃不下）。
    if (stack && stack.count > 0 && isFood(stack.id) && this.survival.food < MAX_FOOD) {
      this.eating = true;
      this.eatProgress = 0;
    } else {
      this.placeBlock();
    }
  }

  // —— 合成界面 ——
  isCraftingOpen(): boolean {
    return this.craftingGrid > 0;
  }
  private openCrafting(gridSize: number): void {
    this.craftingGrid = gridSize;
    this.invUI.show(this.inv, gridSize);
    document.exitPointerLock(); // 解锁鼠标操作界面（暂停在 pointerlockchange 里被抑制）
  }
  private closeCrafting(): void {
    this.craftingGrid = 0;
    this.invUI.hide();
    void this.canvas.requestPointerLock(); // 回到游戏
  }

  // —— 熔炉界面 ——
  private openFurnace(x: number, y: number, z: number): void {
    const key = `${x},${y},${z}`;
    let st = this.furnaces.get(key);
    if (!st) {
      st = newFurnace();
      this.furnaces.set(key, st);
    }
    this.furnaceKey = key;
    this.furnaceUI.show(this.inv, st);
    document.exitPointerLock();
  }
  private closeFurnace(): void {
    this.furnaceKey = null;
    this.furnaceUI.hide();
    void this.canvas.requestPointerLock();
  }

  private stopEating(): void {
    this.eating = false;
    this.eatProgress = 0;
  }

  // 按住右键吃：满 1.6s 消耗 1 个并回饥饿；饥饿已满则不吃。
  private updateEating(dt: number): void {
    if (!this.eating) return;
    const sel = this.hotbar.index;
    const stack = this.inv[sel];
    if (!stack || stack.count <= 0 || !isFood(stack.id) || this.survival.food >= MAX_FOOD) {
      this.eatProgress = 0;
      return;
    }
    this.eatProgress += dt;
    // 吃东西喷食物渣：在嘴前方按节流喷出食物色碎屑（同 MC 啃食粒子）
    this.eatFxT += dt;
    if (this.eatFxT >= 0.09) {
      this.eatFxT = 0;
      const cy = Math.cos(this.look.yaw);
      const sy = Math.sin(this.look.yaw);
      const cp = Math.cos(this.look.pitch);
      const sp = Math.sin(this.look.pitch);
      const ox = this.player.pos.x + cy * cp * 0.4;
      const oy = this.player.pos.y + EYE - 0.18 + sp * 0.4;
      const oz = this.player.pos.z + sy * cp * 0.4;
      this.particles.push(...spawnBurst(ox, oy, oz, particleColor(stack.id), 2));
    }
    if (this.eatProgress >= EAT_TIME) {
      const food = foodValue(stack.id);
      const id = takeOne(this.inv, sel);
      if (food && id !== null) {
        eat(this.survival, food);
        this.hotbar.render(this.inv);
      }
      this.eatProgress = 0;
    }
  }

  private rayHit(): RayHit | null {
    const o = { x: this.player.pos.x, y: this.player.pos.y + EYE, z: this.player.pos.z };
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const cp = Math.cos(this.look.pitch);
    const sp = Math.sin(this.look.pitch);
    const dir = { x: cy * cp, y: sp, z: sy * cp };
    return raycastVoxel(o, dir, REACH, (x, y, z) => isSolidId(this.world.getBlock(x, y, z)));
  }

  // 记录方块改动到存档 delta
  private edit(x: number, y: number, z: number, id: number): void {
    this.world.setBlock(x, y, z, id);
    this.save.edits[`${x},${y},${z}`] = id;
    this.fluidSim.activate(x, y, z); // 让相邻的水流进/退去
    this.chunks.remeshDirty();
  }

  // 持续挖掘：按住左键，按方块硬度累积进度并显示裂纹；满了就破坏、掉落。
  private updateMining(dt: number): void {
    if (!this.digging) {
      this.crack.hide();
      return;
    }
    const hit = this.rayHit();
    if (!hit) {
      this.digProgress = 0;
      this.digTarget = null;
      this.crack.hide();
      return;
    }
    if (
      !this.digTarget ||
      this.digTarget.x !== hit.x ||
      this.digTarget.y !== hit.y ||
      this.digTarget.z !== hit.z
    ) {
      this.digTarget = { x: hit.x, y: hit.y, z: hit.z }; // 换了目标 → 进度归零
      this.digProgress = 0;
    }
    const id = this.world.getBlock(hit.x, hit.y, hit.z);
    const need = breakTimeMs(id, this.heldTool()) / 1000;
    if (need <= 0) {
      this.mineBlock(hit.x, hit.y, hit.z, id); // 瞬破方块
      return;
    }
    this.digProgress += dt;
    if (this.digProgress >= need) {
      this.mineBlock(hit.x, hit.y, hit.z, id);
    } else {
      this.crack.show(hit.x, hit.y, hit.z, this.digProgress / need);
      // 挖掘中持续喷碎屑（节流，免得每帧爆量）
      this.digFxT += dt;
      if (this.digFxT >= 0.07) {
        this.digFxT = 0;
        this.particles.push(...spawnBurst(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5, particleColor(id), 3));
      }
    }
  }

  // 当前选中槽里的工具（非工具/空手返回 null），影响挖掘速度与掉落。
  private heldTool(): HeldTool | null {
    const sel = this.inv[this.hotbar.index];
    return sel ? toolOf(sel.id) : null;
  }

  // 破坏一个方块：清空 + 按掉落表生成掉落物（树叶概率掉苹果）+ 累积疲劳。
  private mineBlock(x: number, y: number, z: number, id: number): void {
    const drop = dropFor(id, this.heldTool()); // 需镐的方块要用镐才掉
    this.edit(x, y, z, AIR);
    this.particles.push(...spawnBurst(x + 0.5, y + 0.5, z + 0.5, particleColor(id), 16)); // 破碎爆一蓬碎屑
    if (drop !== null) this.drops.push(spawnDrop(drop, x, y, z));
    if (id === OAK_LEAVES && Math.random() < LEAF_APPLE_CHANCE) {
      this.drops.push(spawnDrop(APPLE, x, y, z)); // 树叶概率掉苹果（同 MC）
    }
    // 破坏熔炉：吐出炉内原料/燃料/产物 + 删状态
    if (id === FURNACE) {
      const st = this.furnaces.get(`${x},${y},${z}`);
      if (st) {
        const slots: ReadonlyArray<readonly [number, number]> = [
          [st.input, st.inputN],
          [st.fuel, st.fuelN],
          [st.output, st.outputN],
        ];
        for (const [bid, n] of slots) for (let k = 0; k < n; k++) this.drops.push(spawnDrop(bid, x, y, z));
        this.furnaces.delete(`${x},${y},${z}`);
      }
    }
    addExhaustion(this.survival, BREAK_EXHAUSTION);
    // 工具耐久：用工具挖一格 −1，用尽则损坏消失（空手/食物等无 tool → 不扣）。
    const sel = this.inv[this.hotbar.index];
    const td = sel ? toolOf(sel.id) : null;
    if (td) {
      damageTool(this.inv, this.hotbar.index, td.maxDurability);
      this.hotbar.render(this.inv); // 刷新耐久条 / 损坏后清格
    }
    this.digProgress = 0;
    this.digTarget = null;
    this.crack.hide();
  }

  // 推进掉落物物理 + 拾取 + 超时消失，并同步渲染。
  private updateDrops(dt: number): void {
    const px = this.player.pos.x;
    const py = this.player.pos.y + 0.9; // 玩家身体中部
    const pz = this.player.pos.z;
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      stepDrop(d, this.physWorld, dt);
      if (d.age > DROP_TTL) {
        this.drops.splice(i, 1);
        continue;
      }
      if (canPickup(d, px, py, pz)) {
        const leftover = addItem(this.inv, d.id, 1);
        if (leftover === 0) {
          this.drops.splice(i, 1);
          this.hotbar.render(this.inv);
        }
      }
    }
    this.dropRenderer.sync(this.drops);
  }

  // —— 生物 ——
  // 每刻：推进所有生物 + 处理事件(掉蛋) + 太远卸载 + 维持玩家周边种群(边走边在前方补群，
  //   修"走几步就看不到"——旧逻辑刷太慢/太远，走动后身边掉到 0)。
  private tickMobs(): void {
    const px = this.player.pos.x;
    const pz = this.player.pos.z;
    const target = { x: px, y: this.player.pos.y, z: pz };
    let nearCount = 0;
    let hostileNear = 0;
    for (let i = this.mobs.length - 1; i >= 0; i--) {
      const mob = this.mobs[i];
      const ddx = mob.pos.x - px;
      const ddz = mob.pos.z - pz;
      const d2 = ddx * ddx + ddz * ddz;
      if (d2 > MOB_DESPAWN_R * MOB_DESPAWN_R) {
        this.mobs.splice(i, 1);
        continue;
      }
      const hostile = isHostile(mob.kind);
      if (d2 < MOB_NEAR_R * MOB_NEAR_R) {
        nearCount++;
        if (hostile) hostileNear++;
      }
      // 敌对走追击 AI（追玩家+接触攻击+日晒受损），被动走原游荡 AI
      const res = hostile
        ? updateHostile(mob, this.physWorld, this.mobRng, target, this.isSunlit(mob))
        : updateMob(mob, this.physWorld, this.mobRng);
      Object.assign(mob, res.mob); // 原地更新，保持对象身份（渲染按身份缓存模型）
      let died = false;
      for (const ev of res.events) {
        if (ev.kind === 'layEgg') {
          this.drops.push(spawnDrop(EGG, Math.floor(ev.pos.x), Math.floor(ev.pos.y), Math.floor(ev.pos.z)));
        } else if (ev.kind === 'attackPlayer') {
          applyDamage(this.survival, ev.damage);
          if (survivalIsDead(this.survival) && !this.dead) this.die();
        } else if (ev.kind === 'drops') {
          for (const stack of ev.items)
            for (let k = 0; k < stack.count; k++)
              this.drops.push(spawnDrop(stack.id, Math.floor(ev.pos.x), Math.floor(ev.pos.y), Math.floor(ev.pos.z)));
        } else if (ev.kind === 'death') {
          died = true; // 日晒烧死：本刻末移除
        }
      }
      if (died) this.mobs.splice(i, 1);
    }
    // 维持种群：每 ~1.25s 一次，身边不足目标且未到上限 → 朝玩家前进方向的环带补一群，
    //   让玩家边走边走进新兽群（同 MC 的"跟着玩家刷"体感）。
    if (++this.mobSpawnTick >= MOB_SPAWN_EVERY) {
      this.mobSpawnTick = 0;
      if (nearCount < MOB_NEAR_TARGET && this.mobs.length < MOB_CAP) {
        const v = this.player.vel;
        const dir = Math.hypot(v.x, v.z) > 1e-3 ? Math.atan2(v.z, v.x) : null;
        this.mobs.push(
          ...spawnRingGroup(
            MOB_KINDS[Math.floor(this.mobRng() * 4)],
            px,
            pz,
            this.mobRng,
            this.spawnWorld,
            this.surfaceY,
            24,
            44,
            dir,
            Math.PI / 2,
          ),
        );
      }
      // 夜里刷僵尸/骷髅：身边敌对不足且未到总上限就在环带刷一小群（白天它们会被日晒烧光）
      if (skyStateAt(this.worldTime).isNight && hostileNear < HOSTILE_NEAR_TARGET && this.mobs.length < MOB_CAP) {
        const kind: MobKind = this.mobRng() < 0.5 ? 'zombie' : 'skeleton';
        this.mobs.push(...spawnHostileRing(kind, px, pz, this.mobRng, this.spawnWorld, this.surfaceY));
      }
    }
  }

  // 此刻该生物是否被太阳直晒（白天 + 头顶通天，无遮挡）→ 敌对生物会被烧。
  private isSunlit(mob: Mob): boolean {
    if (skyStateAt(this.worldTime).isNight) return false;
    const x = Math.floor(mob.pos.x);
    const z = Math.floor(mob.pos.z);
    for (let y = Math.floor(mob.pos.y + 2); y < CHUNK_H; y++) {
      if (isSolidId(this.world.getBlock(x, y, z))) return false; // 头顶有遮挡 → 阴影里不晒
    }
    return true;
  }

  // 准星(视线)对准的最近生物（攻击距离内），无则 null。
  private mobUnderCrosshair(): Mob | null {
    const ox = this.player.pos.x;
    const oy = this.player.pos.y + EYE;
    const oz = this.player.pos.z;
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const cp = Math.cos(this.look.pitch);
    const sp = Math.sin(this.look.pitch);
    const dx = cy * cp;
    const dy = sp;
    const dz = sy * cp;
    let best: Mob | null = null;
    let bestT = MOB_REACH;
    for (const mob of this.mobs) {
      const def = MOB_DEFS[mob.kind];
      const hw = def.width / 2;
      const t = rayAabb(
        ox, oy, oz, dx, dy, dz,
        mob.pos.x - hw, mob.pos.y, mob.pos.z - hw,
        mob.pos.x + hw, mob.pos.y + def.height, mob.pos.z + hw,
      );
      if (t !== null && t < bestT) {
        bestT = t;
        best = mob;
      }
    }
    return best;
  }

  // 攻击一只生物：按手持武器结算伤害 + 击退；死亡则掉落 + 移除。
  private attackMob(mob: Mob): void {
    this.hand.swing();
    const held = this.inv[this.hotbar.index];
    const dmg = mobDamage(held ? held.id : null);
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const res = hurtMob(mob, dmg, { x: cy, z: sy }, this.mobRng);
    Object.assign(mob, res.mob);
    for (const ev of res.events) {
      if (ev.kind === 'drops') {
        for (const stack of ev.items)
          for (let k = 0; k < stack.count; k++)
            this.drops.push(spawnDrop(stack.id, Math.floor(ev.pos.x), Math.floor(ev.pos.y), Math.floor(ev.pos.z)));
      } else if (ev.kind === 'death') {
        const idx = this.mobs.indexOf(mob);
        if (idx >= 0) this.mobs.splice(idx, 1);
      }
    }
  }

  // 放置：消耗当前快捷栏格里的方块（空手/手持食物则不放）。
  private placeBlock(): void {
    const sel = this.hotbar.index;
    const stack = this.inv[sel];
    if (!stack || stack.count <= 0 || stack.id >= 256) return; // 空手或手持物品(食物/工具/棍等不可放置)
    const hit = this.rayHit();
    if (!hit) return;
    const px = hit.x + hit.nx;
    const py = hit.y + hit.ny;
    const pz = hit.z + hit.nz;
    const target = this.world.getBlock(px, py, pz);
    if (target !== AIR && !isWaterId(target)) return; // 仅可放进空气或水
    if (this.overlapsPlayer(px, py, pz)) return; // 不能埋住自己
    const id = takeOne(this.inv, sel);
    if (id === null) return;
    this.edit(px, py, pz, id);
    this.hotbar.render(this.inv);
    this.hand.swing(); // 放方块摆一下臂
  }

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

  // 昼夜更替：按世界时间套用天空渐变、雾色、世界亮度着色。水下时雾被 updateWater 换成蓝雾，
  //   这里只改“正常雾”的颜色，故两者不冲突。
  private updateDayNight(): void {
    const s = skyStateAt(this.worldTime);
    this.renderer.setSkyColors(s.skyTop, s.skyHorizon);
    const fog = this.normalFog;
    if (fog) fog.color.setRGB(s.skyHorizon[0], s.skyHorizon[1], s.skyHorizon[2], THREE.SRGBColorSpace);
    // 把 worldTint 拆成"色相(满亮)"+"暗度"：色相给 uSkyTint(夜偏蓝)，暗度给 uSkyMul。
    // mx⁴ → 白天 1、深夜≈0.06：地表夜里几乎全黑(要火把)，而火把=方块光不受 uSkyMul 影响照常亮。
    const t = s.worldTint;
    const mx = Math.max(t[0], t[1], t[2], 0.001);
    this.chunks.setTint([t[0] / mx, t[1] / mx, t[2] / mx]);
    this.chunks.setSkyMul(Math.pow(mx, 4));
  }

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
