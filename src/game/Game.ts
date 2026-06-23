import * as THREE from 'three';
import { Renderer } from '../render/Renderer';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_H, CHUNK_W } from '../core/world/chunk';
import { columnHeight, SEA_LEVEL } from '../core/worldgen/terrain';
import { worldToChunk } from '../core/world/coords';
import {
  isSolidId,
  isWaterId,
  isLavaId,
  isReplaceableId,
  isPlantId,
  isTargetableId,
  breakTimeMs,
  blockHardness,
  dropFor,
  OAK_LEAVES,
  OAK_LOG,
  CRAFTING_TABLE,
  FURNACE,
  GRAVEL,
  type HeldTool,
} from '../core/blocks/registry';
import { raycastVoxel, type RayHit } from '../core/world/raycast';
import { findUnsupportedLeaves } from '../core/world/leafDecay';
import { loadAtlas } from '../render/atlas';
import { loadSettings, type TexturePack, type LightingQuality } from '../core/settings';
import { ChunkMeshManager } from '../render/ChunkMeshManager';
import { CrackOverlay } from '../render/CrackOverlay';
import { DropRenderer } from '../render/DropRenderer';
import { FirstPersonHand } from '../render/FirstPersonHand';
import { step } from '../core/physics/step';
import { EYE, CROUCH_EYE, WIDTH, HEIGHT, type Player, type VoxelWorld } from '../core/physics/player';
import { spawnDrop, stepDrop, canPickup, mergeDrops, type ItemDrop } from '../core/entity/itemDrop';
import { spawnArrow, stepArrow, type Arrow } from '../core/entity/arrow';
import { ArrowRenderer } from '../render/ArrowRenderer';
import { updateMob, hurtMob, isHostile, MOB_DEFS, type Mob, type MobKind } from '../core/entity/mob';
import { updateHostile, SKELETON_ARROW_SPEED } from '../core/entity/hostileAi';
import { spawnRingGroup, spawnHostileRing, spawnHostileCave, hostileKindFor, type SpawnWorld } from '../core/entity/mobSpawn';
import { biomeAt } from '../core/worldgen/biome';
import { serializeMob, deserializeMob } from '../core/entity/mobSave';
import { isMobSunlit } from '../core/entity/mobSun';
import { MobRenderer } from '../render/MobRenderer';
import { makeRng } from '../core/math/rng';
import { FluidSim, type FluidGrid } from '../core/fluid/fluidSim';
import { presettleWater } from '../core/fluid/presettle';
import { activateFlowableWater } from '../core/fluid/activateWater';
import { chunksNeedingWater } from '../core/fluid/waterChunks';
import {
  emptyInventory,
  addItem,
  addTool,
  takeOne,
  damageTool,
  countItem,
  removeItems,
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
import { APPLE, EGG, FLINT, ARROW, BOW, isFood, foodValue, toolOf, itemMaxStack } from '../core/items/items';
import { skyStateAt, skyDarkenAt, DAY_START, DAY_LENGTH } from '../core/world/dayNight';
import { ParticleRenderer } from '../render/ParticleRenderer';
import { SkyObjects } from '../render/SkyObjects';
import { spawnBurst, stepParticles, particleColor, type Particle } from '../core/particles/particles';
import type { WorldSave } from '../save/worldStore';
import { touchesCactus } from '../core/survival/cactus';

const TICK_MS = 50; // 20 TPS 固定步长
const REACH = 5; // 交互距离（方块）
const HOTBAR_SLOTS = 9;
const DROP_TTL = 300; // 掉落物存活上限（秒，同 MC 5 分钟）
const WORLD_Y_OFFSET = -125; // 坐标显示整体下移：世界底(内部 y=0)显示为 -125，地表≈-9。仅影响 F3 坐标显示，世界存储/性能不变。
const AIR = 0;

// 创造模式初始物品栏：常用建材放快捷栏(0-8)，更多方块/铁工具/弓箭放主背包。创造放置不耗、可无限用。
const CREATIVE_LOADOUT: { id: number; count: number }[] = [
  { id: 3, count: 64 }, { id: 2, count: 64 }, { id: 1, count: 64 }, { id: 4, count: 64 }, // 草/土/石/圆石
  { id: 7, count: 64 }, { id: 6, count: 64 }, { id: 5, count: 64 }, { id: 21, count: 64 }, { id: 14, count: 64 }, // 木板/原木/沙/荧石/火把
  { id: 15, count: 64 }, { id: 26, count: 64 }, { id: 32, count: 64 }, { id: 33, count: 64 }, { id: 34, count: 64 }, // 砂砾/沙石/煤块/铁块/石英块
  { id: 18, count: 64 }, { id: 19, count: 64 }, { id: 20, count: 64 }, { id: 10, count: 64 }, { id: 30, count: 64 }, // 黑曜石/地狱岩/灵魂沙/树叶/云杉木
  { id: 8, count: 64 }, { id: 12, count: 64 }, { id: 11, count: 64 }, { id: 13, count: 64 }, { id: 27, count: 64 }, { id: 28, count: 64 }, // 煤矿/铁矿/工作台/熔炉/仙人掌/冰
  { id: 269, count: 1 }, { id: 270, count: 1 }, { id: 271, count: 1 }, { id: 272, count: 1 }, // 铁镐/斧/锹/剑
  { id: BOW, count: 1 }, { id: ARROW, count: 64 },
];

function creativeInventory(): Inventory {
  const inv = emptyInventory();
  for (let i = 0; i < CREATIVE_LOADOUT.length && i < inv.length; i++) inv[i] = { ...CREATIVE_LOADOUT[i] };
  return inv;
}
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
const MOB_NEAR_TARGET = 3; // 身边维持的目标数量（降低动物密度/刷新：6→3）
const HOSTILE_NEAR_TARGET = 4; // 夜里身边维持的敌对生物数（僵尸/骷髅）
const HOSTILE_CAP = 8; // 敌对生物硬上限（玩家周围最多这么多僵尸/骷髅，防夜里越积越多）
const MOB_SPAWN_EVERY = 50; // 每多少刻尝试一次补刷（降低刷新率：25→50，约 2.5s 一次）
const MOB_KINDS: MobKind[] = ['pig', 'cow', 'sheep', 'chicken'];
// 弓箭
const ARROW_TTL = 1200; // 箭存活上限（tick，60s）后消失
const ARROW_PICKUP_DELAY = 10; // 插地后多少 tick 才可拾取（防刚射出就吸回）
const BOW_MIN_CHARGE = 0.25; // 最短蓄力（秒）：不到不发射（取消）
const BOW_MAX_CHARGE = 1.0; // 满蓄力（秒，同 MC）
const BOW_MIN_SPEED = 0.6; // 最弱射速（格/tick）
const BOW_MAX_SPEED = 2.4; // 满蓄力射速（格/tick）
const BOW_DAMAGE = 6; // 满蓄力伤害（MC 弓 6~10，这里取中）
// 骷髅箭速从 hostileAi 导入（与那边的下坠瞄准补偿同一值）
const PLAYER_KNOCK_H = 0.42; // 玩家被攻击时的水平击退初速（格/tick，经 KB_DECAY 衰减约退 1 格）
const PLAYER_KNOCK_UP = 0.36; // 玩家被攻击时的上抛速度（格/tick，同怪物被击退手感）

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
  private readonly skyObjects: SkyObjects;
  private particles: Particle[] = []; // 碎屑粒子数据（挖方块四溅）
  private digFxT = 0; // 挖掘碎屑喷发节流计时
  private readonly invUI: InventoryUI;
  private craftingGrid = 0; // 背包/合成界面：0=关闭 2=个人(2×2) 3=工作台(3×3)
  private readonly furnaceUI: FurnaceUI;
  private readonly furnaces = new Map<string, FurnaceState>(); // 坐标"x,y,z"→熔炉状态
  private furnaceKey: string | null = null; // 当前打开的熔炉坐标(null=没开)
  private readonly drops: ItemDrop[] = [];
  private readonly arrows: Arrow[] = []; // 飞行/插地的箭（玩家弓射 + 骷髅射）
  private readonly arrowRenderer: ArrowRenderer;
  private drawingBow = false; // 是否在拉弓蓄力
  private bowCharge = 0; // 拉弓已蓄时间（秒）
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
  private readonly wateredChunks = new Set<string>(); // 已增量激活过「能流动的水」的区块，避免重复扫描
  private worldTime: number; // 昼夜更替：世界时间(刻)，每模拟刻 +1；24000 刻=20 分一整天
  private fov = 70;
  private shadowTick = 99; // 阴影节流计数；首帧即更新一次 shadow map
  private evictCt = 0; // 区块数据驱逐节流计数（治越走越卡的内存泄漏）
  private last = 0;
  private acc = 0;
  private survival: Survival;
  private readonly statusBar: StatusBar;
  private readonly worldSpawn: { x: number; y: number; z: number };
  private dead = false;
  private readonly creative: boolean; // 创造模式：无敌/不饿、秒破不掉落、放置不耗、可飞
  private flying = false; // 创造飞行中（双击空格切换）
  private flyTapWindow = 0; // 双击空格检测窗口(刻)；>0 时再按一次空格即切换飞行
  private fallDistance = 0; // 当前连续下落格数
  private hurtCd = 0; // 受伤无敌帧剩余刻(同 MC：受伤后 0.5s=10 刻无敌，防多怪/多箭同刻叠加爆伤)
  private readonly coordEl: HTMLElement; // F3 坐标显示(X/Y/Z；Y 按 WORLD_Y_OFFSET 偏移)
  private coordOn = false;
  private eating = false; // 是否按住右键吃东西
  private eatProgress = 0;
  private eatFxT = 0; // 吃东西喷食物渣的节流计时
  private crouching = false; // 当前是否下蹲（驱动相机下沉）
  private camEye = EYE; // 平滑后的视点高度（下蹲时降向 CROUCH_EYE）
  private decayQueue: { x: number; y: number; z: number; t: number }[] = []; // 待腐烂的树叶 + 倒计时(tick)
  private texturePack: TexturePack; // 当前材质风格（卡通/经典）
  private lightingQuality: LightingQuality; // 当前光影档位（off/standard/high）；供每帧 god-ray 开关用
  private renderDistance: number; // 区块加载半径（设置项；小=雾近更流畅）
  // God-ray 复用对象（避免每帧 GC）
  private readonly _godSunUV = new THREE.Vector2();
  private readonly _godSunColor = new THREE.Color();
  private readonly _godSunWorld = new THREE.Vector3();
  private readonly _godFwd = new THREE.Vector3(); // 相机朝向（判太阳是否在前方，防背后投影出 NaN→黑屏）

  constructor(canvas: HTMLCanvasElement, save: WorldSave) {
    this.canvas = canvas;
    this.save = save;
    this.creative = save.gameMode === 'creative';
    this.renderer = new Renderer(canvas);
    this.normalFog = this.renderer.scene.fog;
    this.underwaterEl = document.getElementById('underwater');
    this.hotbar = new Hotbar(document.getElementById('hotbar') as HTMLElement, HOTBAR_SLOTS);
    // 创造新世界发整套建材/工具；有存档照存档；生存新世界空背包。
    this.inv = save.inv ? deserializeInventory(save.inv) : this.creative ? creativeInventory() : emptyInventory();
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
      getBlock: (x, y, z) => this.world.getBlock(x, y, z),
      setBlock: (x, y, z, id) => this.edit(x, y, z, id),
    };
    // 应用存档里玩家改过的方块（delta），并激活其周围的水（重新流入/退去）
    for (const key of Object.keys(save.edits)) {
      const [x, y, z] = key.split(',').map(Number);
      this.world.setBlock(x, y, z, save.edits[key]);
      this.fluidSim.activate(x, y, z);
    }
    // 远处区块被驱逐释放内存(治越走越卡)，走回来重生成是纯地形 → 用此 hook 把该区块的玩家改动贴回。
    this.world.editHook = (cx, cz, c): void => {
      for (const key in this.save.edits) {
        const ci = key.indexOf(',');
        const cj = key.indexOf(',', ci + 1);
        const x = +key.slice(0, ci);
        const z = +key.slice(cj + 1);
        if ((x >> 4) === cx && (z >> 4) === cz) c.set(x & 15, +key.slice(ci + 1, cj), z & 15, this.save.edits[key]);
      }
    };
    this.texturePack = loadSettings().texturePack; // 按设置选卡通/经典图集
    this.lightingQuality = loadSettings().lightingQuality; // 光影档位初值（决定 god-ray 是否开启）
    this.renderDistance = loadSettings().renderDistance; // 渲染距离初值
    const atlas = loadAtlas(this.texturePack);
    this.chunks = new ChunkMeshManager(this.renderer.scene, this.world, atlas);
    this.chunks.setLightingQuality(loadSettings().lightingQuality); // 光影开关初值(真实水面波动/反射)
    this.setRenderDistance(this.renderDistance); // 套用初始雾距 + 雾剔除（须在 chunks 初始化之后，否则 setFogFar 崩）
    this.crack = new CrackOverlay(this.renderer.scene);
    this.dropRenderer = new DropRenderer(this.renderer.scene, atlas);
    this.arrowRenderer = new ArrowRenderer(this.renderer.scene);
    this.mobRenderer = new MobRenderer(this.renderer.scene);
    this.mobRng = makeRng((save.seed ^ 0x9e3779b9) >>> 0);
    this.spawnWorld = { getBlock: (x, y, z) => this.world.getBlock(x, y, z) };
    this.hand = new FirstPersonHand(atlas);
    this.particleFx = new ParticleRenderer(this.renderer.scene);
    this.skyObjects = new SkyObjects(this.renderer.scene); // 方块太阳/月亮/云
    this.skyObjects.setLightingQuality(loadSettings().lightingQuality); // 光影初值：开=柔和真实云、关=MC立体云
    this.invUI = new InventoryUI(document.getElementById('inventory') as HTMLElement);
    this.furnaceUI = new FurnaceUI(document.getElementById('furnace') as HTMLElement);
    this.coordEl = document.createElement('div');
    this.coordEl.style.cssText =
      'position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;' +
      'color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;';
    document.body.appendChild(this.coordEl);
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
    // 熔炉：还原存档里的炉内料/燃料/冶炼进度（否则重开熔炉炉内物品全丢失）
    if (save.furnaces) for (const [k, v] of Object.entries(save.furnaces)) this.furnaces.set(k, v);

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
      else if (e.button === 2) {
        this.releaseBow(); // 松开右键：弓发射
        this.stopEating();
      }
    });
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== canvas) {
        stopDig(); // 松开锁定即停挖
        this.drawingBow = false; // 失焦取消拉弓
        this.bowCharge = 0;
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
      if (e.code === 'F3') {
        e.preventDefault(); // F3 切换坐标显示(MC 风)
        this.coordOn = !this.coordOn;
        this.coordEl.style.display = this.coordOn ? 'block' : 'none';
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
    this.save.furnaces = Object.fromEntries(this.furnaces); // 熔炉状态(炉内料/燃料/进度)随档保存，否则重开就丢
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
          // 该列须是海岸平地；玩家占的 2 格 + 周围 4 邻格头顶都得空(不被树干/邻树夹住)，否则出生卡树里看不到天
          const clear = (xx: number, zz: number): boolean =>
            this.world.getBlock(xx, h + 1, zz) === 0 && this.world.getBlock(xx, h + 2, zz) === 0;
          // 脚下草顶 + 下两格须实心，否则是峡谷/竖井/悬空 → 出生会直接掉下去
          const solidGround =
            this.world.getBlock(x, h, z) !== 0 &&
            this.world.getBlock(x, h - 1, z) !== 0 &&
            this.world.getBlock(x, h - 2, z) !== 0;
          if (
            h > SEA_LEVEL &&
            h <= SEA_LEVEL + 4 &&
            solidGround &&
            clear(x, z) &&
            clear(x + 1, z) &&
            clear(x - 1, z) &&
            clear(x, z + 1) &&
            clear(x, z - 1)
          )
            return { x: x + 0.5, y: h + 1, z: z + 0.5 }; // 脚站草顶(h)之上 = h+1；之前 h+2 高一格、每次落地都掉一下(还可能头卡进树叶)
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
    // 开局预流动：① 激活出生区「能流动」的水——世界生成的水都是静止源头、从不被激活，所以海/湖边的
    //   瀑布口、洞穴破口等本来永远不流；这里把它们(挨着空气的水 front)激活。② 连同读档激活的水(见构造)
    //   一起 presettle 跑到位，玩家进场即见已流完的水，而非进游戏后在眼前慢慢流。
    const span = (radius + 1) * CHUNK_W; // 覆盖出生时已网格化的整片(±radius 区块)，进场即见水流完；再大也无意义(没网格化看不见)
    const px = Math.floor(this.player.pos.x);
    const pz = Math.floor(this.player.pos.z);
    activateFlowableWater(
      this.fluidSim,
      {
        isWater: (x, y, z) => isWaterId(this.world.getBlock(x, y, z)),
        isAir: (x, y, z) => this.world.getBlock(x, y, z) === AIR,
      },
      {
        minX: px - span,
        maxX: px + span,
        minZ: pz - span,
        maxZ: pz + span,
        minY: Math.max(1, SEA_LEVEL - 48),
        maxY: Math.min(CHUNK_H - 1, SEA_LEVEL + 2),
      },
    );
    presettleWater(this.fluidSim, this.fluidGrid, 1200); // 提高上限：尽量把能流的一次流完
    // 出生区(±radius 区块)已激活+presettle，标记为已灌水，免得探索期增量灌水重复扫描这片
    for (let dz = -radius; dz <= radius; dz++)
      for (let dx = -radius; dx <= radius; dx++) this.wateredChunks.add(`${cx + dx},${cz + dz}`);
    // 分摊网格化:loading 期间逐帧派发(后台 worker 算)+ 上屏(flushMesh)。等出生区基本铺完再进，
    // 否则进游戏后还在大面积上屏 → 头几秒卡。网格化全在 worker(不再同步出版)，这里只是等它铺完。
    const rounds = Math.ceil((radius * 2 + 1) ** 2 / 4) + 1;
    for (let guard = 0; guard < rounds + 240; guard++) {
      this.chunks.update(cx, cz, radius, 4);
      this.chunks.flushMesh(8); // 预加载阶段多上屏些(loading 界面挡着，不影响手感)
      await new Promise<void>((r) => requestAnimationFrame(() => r()));
      if (guard >= rounds && !this.chunks.meshBusy()) break; // 已铺完(无在途/待上屏)→ 进游戏
    }
  }

  // 探索期增量灌水：玩家走到哪，就把附近新载入区块里「能流动的水」(海/湖边、洞穴破口的 front)激活，
  //   交给常驻水模拟流进相连的洞/坑——否则远离出生点的连通水永远是静止源头、不破方块就不流。
  //   每区块只激活一次(wateredChunks 去重)；未载入的区块跳过且不标记，待其载入后下次再试。
  private activateNearbyWater(): void {
    const ACTIVATE_RADIUS = 4; // 区块；约 64 格，覆盖玩家近场
    const PER_TICK_CAP = 3; // 每次最多处理几个新区块，摊平移动跨界时的扫描开销
    const pcx = worldToChunk(Math.floor(this.player.pos.x));
    const pcz = worldToChunk(Math.floor(this.player.pos.z));
    const minY = Math.max(1, SEA_LEVEL - 48);
    const maxY = Math.min(CHUNK_H - 1, SEA_LEVEL + 2);
    let done = 0;
    for (const key of chunksNeedingWater(pcx, pcz, ACTIVATE_RADIUS, this.wateredChunks)) {
      if (done >= PER_TICK_CAP) break;
      const [cx, cz] = key.split(',').map(Number);
      if (!this.world.peek(cx, cz)) continue; // 未载入：先不标记，载入后再处理
      activateFlowableWater(
        this.fluidSim,
        {
          isWater: (x, y, z) => isWaterId(this.world.getBlock(x, y, z)),
          isAir: (x, y, z) => this.world.getBlock(x, y, z) === AIR,
        },
        { minX: cx * CHUNK_W, maxX: cx * CHUNK_W + CHUNK_W - 1, minZ: cz * CHUNK_W, maxZ: cz * CHUNK_W + CHUNK_W - 1, minY, maxY },
      );
      this.wateredChunks.add(key);
      done++;
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
        // 创造：双击空格切换飞行（两次起跳按键落在 6 刻≈0.3s 窗口内）。
        if (this.creative && jumped) {
          if (this.flyTapWindow > 0) {
            this.flying = !this.flying;
            this.flyTapWindow = 0;
          } else this.flyTapWindow = 6;
        }
        if (this.flyTapWindow > 0) this.flyTapWindow--;
        if (!this.creative) this.flying = false;
        this.crouching = this.flying ? false : m.crouch; // 飞行时 Shift=下降，不当下蹲(相机不下沉)
        this.player = step(
          this.player,
          {
            forward: m.forward,
            right: m.right,
            yaw: this.look.yaw,
            jump: jumped,
            swimUp: m.jumpHeld,
            sprint: m.sprint,
            crouch: this.flying ? false : m.crouch, // 下蹲：减速 + 不走下边缘 + 矮碰撞
            slow: this.eating, // 吃东西减速（同 MC 用物品 ≈20% 速度）
            fly: this.flying, // 创造飞行：无重力，竖直由下面 flyUp/flyDown 控制
            flyUp: m.jumpHeld, // 空格按住上升
            flyDown: m.crouch, // Shift 按住下降
          },
          this.physWorld,
        );
        this.stepSurvival(m.sprint, jumped);
        if (++this.worldTime >= DAY_LENGTH) this.worldTime = 0; // 昼夜推进：每模拟刻 +1（暂停即冻结）
        // 流动水：每 5 刻更新一次（同 MC），变动后重建脏区块网格
        if (++this.fluidTick >= 5) {
          this.fluidTick = 0;
          this.activateNearbyWater(); // 先激活探索到的新水 front，再跑模拟让其流动
          this.fluidSim.tick(this.fluidGrid);
          this.chunks.remeshDirty();
        }
        // 熔炉：每刻推进活跃熔炉的冶炼；打开中的熔炉刷新界面
        for (const st of this.furnaces.values()) {
          if (furnaceActive(st)) tickFurnace(st);
        }
        if (this.furnaceKey) this.furnaceUI.render();
        this.tickMobs(); // 生物 AI/物理/掉蛋/周期刷新（每刻）
        this.tickArrows(); // 飞行的箭：推进 + 命中判定 + 拾取
        this.tickLeafDecay(); // 失去支撑的树叶慢慢腐烂
        this.acc -= TICK_MS;
      }
      if (!playing) this.acc = 0; // 暂停：冻结物理，不累积

      // 自适应区块加载【派发】预算：派发只是把活丢给后台 worker（主线程只付 collectNeighbors 拷贝），
      // 重活(meshing)在 worker、上屏(buildGeo/GPU)另有 6ms 时间预算护着帧——所以派发不该塌到 1。
      // 旧版低帧率塌到 1/帧 → ≤4 个 worker 长期闲置 → 加载追不上移动 → 区块"没加载出来"的空洞。
      // 改：低/中帧率也保底 3~4/帧(喂饱 worker)，不再塌到 1。修空洞。
      const loadBudget = dt > 0.026 ? 3 : dt > 0.018 ? 4 : 4; // <38fps→3，38~55→4，>55fps→4
      this.chunks.update(
        worldToChunk(Math.floor(this.player.pos.x)),
        worldToChunk(Math.floor(this.player.pos.z)),
        this.renderDistance,
        loadBudget, // 每帧最多【派发】给 worker 网格化(后台算，不卡主线程)
        Math.cos(this.look.yaw), // 前方优先：把预算先砸向玩家正走向/看得见的区块(根治"前面加载不出来")
        Math.sin(this.look.yaw),
      );
      // 上屏按【时间预算】而非固定个数：buildGeo + GPU 上传是加载卡帧的大头，且每个网格大小不一。
      // 本帧最多花 ~6ms 在上屏上，到点即停、剩下的下帧继续 → 区块加载更顺、不再一帧塞太多撑爆帧时间。
      const meshDeadline = performance.now() + 6;
      while (this.chunks.meshQueueLen() > 0 && performance.now() < meshDeadline) this.chunks.flushMesh(1);
      // 周期驱逐远处区块数据：治"越走越卡"内存泄漏。⚠️ 半径必须 ≥ 任何会 getBlock 的距离，否则访问被驱逐
      // 的区块会触发【主线程同步 generateChunk】→ 卡成 PPT。生物漫游可达 MOB_DESPAWN_R≈5.5 区块、其 AI 还会
      // 探前方/查日照 → 取 max(渲染距离+4, 12)，恒比生物可达范围大，绝不驱逐生物/物理/流体会读到的区块。
      if (++this.evictCt >= 45) {
        this.evictCt = 0;
        const evictR = Math.max(this.renderDistance + 4, 12);
        this.world.evictBeyond(worldToChunk(Math.floor(this.player.pos.x)), worldToChunk(Math.floor(this.player.pos.z)), evictR);
      }
      // 水平视锥剔除：隐藏身后/两侧看不见的区块（整列网格包围球太大、three.js 内建剔除剔不掉）
      this.chunks.cullToView(this.player.pos.x, this.player.pos.z, Math.cos(this.look.yaw), Math.sin(this.look.yaw));
      const wantFov = playing && readMove().sprint ? 80 : 70;
      this.fov += (wantFov - this.fov) * 0.15;
      this.renderer.camera.fov = this.fov;
      this.renderer.camera.updateProjectionMatrix();
      if (playing) {
        this.updateMining(dt);
        this.updateDrops(dt);
        this.updateEating(dt);
        this.updateBow(dt);
        this.statusBar.render(this.survival);
        if (this.digging) this.hand.swing(); // 按住挖时连续摆臂
      } else {
        this.crack.hide();
      }
      this.chunks.animateWater(dt); // 水面流动动画
      this.updateDayNight(); // 昼夜更替：天空/雾/世界亮度
      this.skyObjects.update(this.worldTime, this.renderer.camera.position); // 方块太阳/月亮随昼夜走天球 + 云缓飘
      // 太阳投影阴影：节流——shadow pass 开销大、太阳走得慢，每 6 帧才摆光 + 重渲一次 shadow map(阴影默认常开，不靠光影开关)
      if (++this.shadowTick >= 6) {
        this.shadowTick = 0;
        this.chunks.updateSun(this.worldTime, this.player.pos.x, this.player.pos.y, this.player.pos.z);
        this.renderer.markShadowDirty();
      }
      this.updateWater();
      this.updateHighlight();
      this.updateCamera(this.acc / TICK_MS);
      // 碎屑粒子：每帧推进 + 刷新
      this.particles = stepParticles(this.particles, dt);
      this.particleFx.sync(this.particles);
      this.mobRenderer.sync(this.mobs, dt); // 生物模型跟随/动画
      this.arrowRenderer.sync(this.arrows); // 箭模型跟随
      // 第一人称手臂：手持当前选中方块、按移动速度晃动；吃东西时送嘴边抖动
      const held = this.inv[this.hotbar.index];
      this.hand.setHeld(held ? held.id : null);
      this.hand.setEating(playing && this.eating);
      const walk = Math.min(1, Math.hypot(this.player.vel.x, this.player.vel.z) / 0.22);
      this.hand.update(dt, playing ? walk : 0);
      if (this.hand.camera.aspect !== this.renderer.camera.aspect) {
        this.hand.resize(this.renderer.camera.aspect);
      }
      if (this.coordOn) {
        const p = this.player.pos;
        const cs = this.chunks.pipelineStats(); // 区块管线：再现"加载不出来"时看哪阶段堵
        this.coordEl.textContent =
          `XYZ  ${Math.floor(p.x)} / ${Math.floor(p.y) + WORLD_Y_OFFSET} / ${Math.floor(p.z)}\n` +
          `区块 已上屏${cs.meshed} 可见${cs.visible} 派发中${cs.pending} 待上屏${cs.queued}`;
      }
      this.updateGodRays(); // 体积光：每帧喂太阳屏幕 UV + 档位给 Renderer
      this.renderer.render();
      this.renderer.renderOverlay(this.hand.scene, this.hand.camera);
    };
    requestAnimationFrame(frame);
  }

  // 每模拟刻推进生命/饥饿：累积疲劳(疾跑/跳)、结算摔落、回血/掉血、判定死亡。
  private stepSurvival(sprint: boolean, jumped: boolean): void {
    if (this.creative) {
      this.fallDistance = 0; // 创造：不饿、不摔伤、不淹、不掉血——满状态无敌
      return;
    }
    if (this.hurtCd > 0) this.hurtCd--; // 受伤无敌帧倒计时
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
    // 仙人掌接触伤害(MC 1.12：贴住每 0.5s 掉 1 血，复用 hurtCd 无敌帧防多刻叠加)
    if (touchesCactus(this.player.pos.x, this.player.pos.y, this.player.pos.z, (x, y, z) => this.world.getBlock(x, y, z))) {
      this.hurtPlayer(1, 0, 0);
    }
    // 岩浆接触伤害(MC 1.12：4HP/0.5s，复用 hurtCd 无敌帧——每刻都调 hurtPlayer，被 hurtCd 自然节流为 0.5s 一次)
    const feetLava = isLavaId(this.world.getBlock(px, Math.floor(this.player.pos.y), pz));
    const bodyLava = isLavaId(this.world.getBlock(px, Math.floor(this.player.pos.y + 0.9), pz));
    if (feetLava || bodyLava) this.hurtPlayer(4, 0, 0); // MC 1.12 岩浆 4HP/0.5s
    // 氧气：头(眼睛)所在格是水才憋气；淹溺掉血也闪红
    const headInWater = isWaterId(this.world.getBlock(px, Math.floor(this.player.pos.y + EYE), pz));
    const hpBefore = this.survival.health;
    tickOxygen(this.survival, headInWater);
    if (this.survival.health < hpBefore) this.flashHurt();
    tickSurvival(this.survival);
    if (survivalIsDead(this.survival) && !this.dead) this.die();
  }

  // 受伤红屏反馈：触发一次 CSS 闪动（先移除再加 class 以重启动画）+ 手快速抖一下。
  private flashHurt(): void {
    this.hand.hurtShake();
    const el = document.getElementById('hurt');
    if (!el) return;
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
  }

  // 玩家被攻击：扣血 + 红屏/手抖 + 沿来源→玩家方向被击退（近战传攻击者坐标，箭传飞行方向）。
  private hurtPlayer(damage: number, knockDirX: number, knockDirZ: number): void {
    if (this.creative) return; // 创造：免疫一切伤害（怪/箭/爆炸/仙人掌）
    if (this.hurtCd > 0) return; // 无敌帧内：免疫(同 MC hurtResistantTime，防同刻多源爆伤)
    this.hurtCd = 10; // 0.5s 无敌
    applyDamage(this.survival, damage);
    this.flashHurt();
    const d = Math.hypot(knockDirX, knockDirZ) || 1;
    this.player.kbx = (knockDirX / d) * PLAYER_KNOCK_H;
    this.player.kbz = (knockDirZ / d) * PLAYER_KNOCK_H;
    this.player.vel.y = PLAYER_KNOCK_UP; // 上抛（step 保留 vel.y）
    if (survivalIsDead(this.survival) && !this.dead) this.die();
  }

  private die(): void {
    this.dead = true;
    this.digging = false;
    this.stopEating();
    // MC：死亡把背包(快捷栏+主背包)全部撒在原地，各物品带随机初速，DROP_TTL(5min)后消失——回不去就永久丢失
    const bx = Math.floor(this.player.pos.x);
    const by = Math.floor(this.player.pos.y);
    const bz = Math.floor(this.player.pos.z);
    for (let i = 0; i < this.inv.length; i++) {
      const s = this.inv[i];
      if (s && s.count > 0) this.drops.push(spawnDrop(s.id, bx, by, bz, Math.random, s.count, s.dur));
      this.inv[i] = null;
    }
    this.hotbar.render(this.inv);
    this.dropRenderer.sync(this.drops);
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

  // 光影画质（设置里改"光影"时由 main 调用）：真实水面波动/反射/高光 + 云风格(立体↔真实)，无需重建网格。
  setLightingQuality(q: LightingQuality): void {
    this.lightingQuality = q;
    this.chunks.setLightingQuality(q);
    this.skyObjects.setLightingQuality(q);
    // off 档立即关闭 god-ray 后处理（释放 RT），避免残留
    if (q === 'off') this.renderer.setGodRays(null);
  }

  // 渲染距离（设置项）：改区块加载半径 + 雾距(far=rd×16 格) + 雾剔除距离。小=雾近、区块少、更流畅。
  setRenderDistance(rd: number): void {
    this.renderDistance = rd;
    const far = rd * 16;
    if (this.normalFog instanceof THREE.Fog) {
      this.normalFog.near = far * 0.5;
      this.normalFog.far = far;
    }
    this.chunks.setFogFar(far);
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
    // 手持弓且有箭 → 拉弓蓄力（松开右键时发射）
    if (stack && stack.id === BOW && countItem(this.inv, ARROW) > 0) {
      this.drawingBow = true;
      this.bowCharge = 0;
      return;
    }
    // 手持食物且饱食度未满 → 开吃；饱食度满时不能吃（同 MC，普通食物吃不下）。
    if (stack && stack.count > 0 && isFood(stack.id) && this.survival.food < MAX_FOOD) {
      this.eating = true;
      this.eatProgress = 0;
    } else {
      this.placeBlock();
    }
  }

  // 拉弓蓄力（每帧）：累加蓄力时间，封顶满蓄力。
  private updateBow(dt: number): void {
    if (!this.drawingBow) return;
    const stack = this.inv[this.hotbar.index];
    if (!stack || stack.id !== BOW) {
      this.drawingBow = false; // 切走了手持弓 → 取消
      this.bowCharge = 0;
      return;
    }
    this.bowCharge = Math.min(this.bowCharge + dt, BOW_MAX_CHARGE);
  }

  // 松开右键发射：蓄力达标则按比例射速射一箭、扣 1 箭；不够则取消。
  private releaseBow(): void {
    if (!this.drawingBow) return;
    this.drawingBow = false;
    const charge = this.bowCharge;
    this.bowCharge = 0;
    const stack = this.inv[this.hotbar.index];
    if (!stack || stack.id !== BOW) return;
    if (charge < BOW_MIN_CHARGE) return; // 没拉够 → 不发射
    if (removeItems(this.inv, ARROW, 1) < 1) return; // 没箭
    this.hotbar.render(this.inv);
    const t = (charge - BOW_MIN_CHARGE) / (BOW_MAX_CHARGE - BOW_MIN_CHARGE); // 0..1
    const speed = BOW_MIN_SPEED + t * (BOW_MAX_SPEED - BOW_MIN_SPEED);
    const damage = Math.max(1, Math.round(2 + t * (BOW_DAMAGE - 2))); // 蓄力越满越疼
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const cp = Math.cos(this.look.pitch);
    const sp = Math.sin(this.look.pitch);
    const ox = this.player.pos.x;
    const oy = this.player.pos.y + EYE;
    const oz = this.player.pos.z;
    this.arrows.push(spawnArrow(ox + cy * cp * 0.4, oy + sp * 0.4, oz + sy * cp * 0.4, cy * cp, sp, sy * cp, speed, true, damage));
    this.hand.swing();
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
    // 选中判定用 isTargetableId(实心 + 草丛)，让草丛能被瞄准/打掉；非 isSolidId 否则射线穿草打到后面方块。
    return raycastVoxel(o, dir, REACH, (x, y, z) => isTargetableId(this.world.getBlock(x, y, z)));
  }

  // 记录方块改动到存档 delta
  private edit(x: number, y: number, z: number, id: number): void {
    this.world.setBlock(x, y, z, id);
    this.save.edits[`${x},${y},${z}`] = id;
    this.fluidSim.activate(x, y, z); // 让相邻的水流进/退去
    this.chunks.remeshDirty();
  }

  // 砍木后：把此处附近"失去原木支撑"的树叶排入腐烂队列（去重），给每片一个随机倒计时 → 慢慢腐烂。
  private queueLeafDecay(x: number, y: number, z: number): void {
    for (const c of findUnsupportedLeaves((bx, by, bz) => this.world.getBlock(bx, by, bz), x, y, z)) {
      if (this.decayQueue.some((d) => d.x === c.x && d.y === c.y && d.z === c.z)) continue;
      this.decayQueue.push({ x: c.x, y: c.y, z: c.z, t: 40 + Math.floor(Math.random() * 160) }); // 2~10s 内陆续掉
    }
  }

  // 每刻推进树叶腐烂：到点的树叶移除（掉苹果概率同手挖）+ 碎屑；只处理仍是树叶的格(可能已被挖走)。
  private tickLeafDecay(): void {
    if (this.decayQueue.length === 0) return;
    for (let i = this.decayQueue.length - 1; i >= 0; i--) {
      const d = this.decayQueue[i];
      if (--d.t > 0) continue;
      this.decayQueue.splice(i, 1);
      if (this.world.getBlock(d.x, d.y, d.z) !== OAK_LEAVES) continue; // 已被挖掉/已腐烂
      this.edit(d.x, d.y, d.z, AIR);
      this.particles.push(...spawnBurst(d.x + 0.5, d.y + 0.5, d.z + 0.5, particleColor(OAK_LEAVES), 8));
      if (Math.random() < LEAF_APPLE_CHANCE) this.drops.push(spawnDrop(APPLE, d.x, d.y, d.z));
    }
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
    if (blockHardness(id) < 0) {
      this.crack.hide();
      return; // 不可破坏（基岩 hardness<0）：生存/创造都挖不动
    }
    const need = this.creative ? 0 : breakTimeMs(id, this.heldTool()) / 1000; // 创造：瞬破
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
    // 草丛/长草：瞬破、无掉落、不耗工具耐久/疲劳。直接清掉即可。
    if (isPlantId(id)) {
      this.edit(x, y, z, AIR);
      this.particles.push(...spawnBurst(x + 0.5, y + 0.5, z + 0.5, particleColor(id), 6));
      this.digProgress = 0;
      this.digTarget = null;
      this.crack.hide();
      return;
    }
    let drop = this.creative ? null : dropFor(id, this.heldTool()); // 创造不掉落；需镐的方块要用镐才掉
    if (drop === GRAVEL && Math.random() < 0.1) drop = FLINT; // 砂砾 10% 出燧石（MC）
    this.edit(x, y, z, AIR);
    // 失去支撑的草丛随之破坏：破坏的方块上方若是草丛/长草，一并清掉(同 MC，草需下方方块支撑)。
    const above = this.world.getBlock(x, y + 1, z);
    if (isPlantId(above)) {
      this.edit(x, y + 1, z, AIR);
      this.particles.push(...spawnBurst(x + 0.5, y + 1.5, z + 0.5, particleColor(above), 6));
    }
    this.particles.push(...spawnBurst(x + 0.5, y + 0.5, z + 0.5, particleColor(id), 16)); // 破碎爆一蓬碎屑
    if (drop !== null) this.drops.push(spawnDrop(drop, x, y, z));
    if (!this.creative && id === OAK_LEAVES && Math.random() < LEAF_APPLE_CHANCE) {
      this.drops.push(spawnDrop(APPLE, x, y, z)); // 树叶概率掉苹果（同 MC；创造不掉）
    }
    if (id === OAK_LOG) this.queueLeafDecay(x, y, z); // 砍掉原木 → 失去支撑的树叶排队腐烂
    // 破坏熔炉：吐出炉内原料/燃料/产物 + 删状态
    if (id === FURNACE) {
      const st = this.furnaces.get(`${x},${y},${z}`);
      if (st) {
        const slots: ReadonlyArray<readonly [number, number]> = [
          [st.input, st.inputN],
          [st.fuel, st.fuelN],
          [st.output, st.outputN],
        ];
        for (const [bid, n] of slots) if (n > 0) this.drops.push(spawnDrop(bid, x, y, z, Math.random, n));
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
    mergeDrops(this.drops, itemMaxStack); // 同类掉落物靠近合并成一堆(同 MC)，也减少实体数
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      stepDrop(d, this.physWorld, dt);
      if (d.age > DROP_TTL) {
        this.drops.splice(i, 1);
        continue;
      }
      if (canPickup(d, px, py, pz)) {
        if (d.dur !== undefined) {
          // 带磨损的工具：非堆叠，放进空格并保留耐久（死亡掉落捡回不再变满）
          if (addTool(this.inv, d.id, d.dur)) {
            this.drops.splice(i, 1);
            this.hotbar.render(this.inv);
          }
        } else {
          const leftover = addItem(this.inv, d.id, d.count, itemMaxStack(d.id)); // 整堆收取；按物品真实上限(鸡蛋=16)
          if (leftover < d.count) this.hotbar.render(this.inv); // 至少拿到一部分 → 刷新背包
          if (leftover === 0) this.drops.splice(i, 1);
          else d.count = leftover; // 背包装不下，剩余量留在地上
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
    let hostileTotal = 0; // 玩家周围(卸载半径内)敌对总数，用于硬上限
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
      if (hostile) hostileTotal++;
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
          // 近战命中：扣血 + 闪红/抖手 + 把玩家从怪物方向推开
          this.hurtPlayer(ev.damage, px - mob.pos.x, pz - mob.pos.z);
          // 尸壳命中附加饥饿效果（MC 1.12：每次命中+3点耗竭，近似 Hunger I）
          if (mob.kind === 'husk') addExhaustion(this.survival, 3);
        } else if (ev.kind === 'shootArrow') {
          // 骷髅射箭：从其眼高朝玩家方向生成一支敌对箭
          this.arrows.push(
            spawnArrow(ev.from.x, ev.from.y, ev.from.z, ev.dir.x, ev.dir.y, ev.dir.z, SKELETON_ARROW_SPEED, false, ev.damage),
          );
        } else if (ev.kind === 'explode') {
          this.explode(ev.pos, ev.radius, ev.damage); // 苦力怕引爆：炸方块 + 按距离伤玩家
        } else if (ev.kind === 'drops') {
          for (const stack of ev.items)
            this.drops.push(spawnDrop(stack.id, Math.floor(ev.pos.x), Math.floor(ev.pos.y), Math.floor(ev.pos.z), Math.random, stack.count));
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
      // 刷敌对：身边敌对不足、未达硬上限、未到总生物上限才刷。矿洞(地下暗洞)白天黑夜都刷；
      // 地表只在夜里刷(白天会被日晒烧光)。按剩余名额裁剪，确保不超过 HOSTILE_CAP。
      let room = Math.min(HOSTILE_CAP - hostileTotal, MOB_CAP - this.mobs.length);
      if (hostileNear < HOSTILE_NEAR_TARGET && room > 0) {
        const rk = this.mobRng();
        const biome = biomeAt(px, pz, this.save.seed);
        const kind: MobKind = hostileKindFor(biome, rk);
        // 矿洞：玩家附近地下暗洞，不分昼夜（同 MC）
        const cave = spawnHostileCave(kind, px, this.player.pos.y, pz, this.mobRng, this.spawnWorld, this.surfaceY).slice(0, room);
        this.mobs.push(...cave);
        room -= cave.length;
        // 夜晚：地表暗处也刷一小群（尸壳 sunImmune，沙漠白天地表也刷）
        if (room > 0 && (skyStateAt(this.worldTime).isNight || MOB_DEFS[kind].sunImmune)) {
          this.mobs.push(...spawnHostileRing(kind, px, pz, this.mobRng, this.spawnWorld, this.surfaceY).slice(0, room));
        }
      }
    }
  }

  // 苦力怕引爆：球形炸掉半径内的实心方块（空气/水不炸；y<0 由 setBlock 兜底）。批量改方块、最后只
  // remesh 一次（remeshDirty 是同步重建，逐块调会卡死）；爆心烟尘 + 按距离衰减伤玩家并击退。
  private explode(center: { x: number; y: number; z: number }, radius: number, maxDamage: number): void {
    const cx = Math.floor(center.x);
    const cy = Math.floor(center.y);
    const cz = Math.floor(center.z);
    const r2 = radius * radius;
    const ri = Math.ceil(radius);
    for (let dy = -ri; dy <= ri; dy++)
      for (let dz = -ri; dz <= ri; dz++)
        for (let dx = -ri; dx <= ri; dx++) {
          if (dx * dx + dy * dy + dz * dz > r2) continue;
          const bx = cx + dx;
          const by = cy + dy;
          const bz = cz + dz;
          const b = this.world.getBlock(bx, by, bz);
          if (!isSolidId(b) && !isPlantId(b)) continue; // 空气/水不炸；实心 + 草丛都炸(免得炸完草浮空)
          this.world.setBlock(bx, by, bz, AIR);
          this.save.edits[`${bx},${by},${bz}`] = AIR; // 坑随存档保留
          this.fluidSim.activate(bx, by, bz); // 让周围的水流进坑
        }
    this.chunks.remeshDirty(); // 一次性重建被波及的脏区块
    this.particles.push(...spawnBurst(center.x, center.y + 0.4, center.z, [0.33, 0.33, 0.33], 30)); // 爆炸烟尘(灰)
    // 距离衰减伤害 + 击退：爆心约满伤、边缘=0（伤害范围略大于炸块半径）
    const p = this.player.pos;
    const ddx = p.x - center.x;
    const ddz = p.z - center.z;
    const dist = Math.hypot(ddx, p.y + 0.9 - center.y, ddz);
    const dmg = Math.round(maxDamage * (1 - dist / (radius + 1.5)));
    if (dmg > 0) this.hurtPlayer(dmg, ddx, ddz);
  }

  // 此刻该生物是否被太阳直晒（白天 + 头顶通天，无遮挡）→ 敌对生物会被烧。
  // 怪物是否被日晒（→ 白天燃烧）：夜里/在水里/头顶有方块或水遮挡 → 不烧（同 MC）。
  private isSunlit(mob: Mob): boolean {
    return isMobSunlit(mob, this.world, skyStateAt(this.worldTime).isNight);
  }

  // 飞行的箭：每刻推进 + 沿移动段采样命中（玩家箭伤生物 / 骷髅箭伤玩家）+ 插地后可拾取。
  private tickArrows(): void {
    const inAabb = (x: number, y: number, z: number, cx: number, cz: number, minY: number, hw: number, h: number): boolean =>
      x >= cx - hw && x <= cx + hw && y >= minY && y <= minY + h && z >= cz - hw && z <= cz + hw;
    for (let i = this.arrows.length - 1; i >= 0; i--) {
      const a = this.arrows[i];
      if (a.age > ARROW_TTL) {
        this.arrows.splice(i, 1);
        continue;
      }
      if (a.stuck) {
        a.age++; // 插地的箭也计龄（不再走 stepArrow），否则 age 冻结 → 永不到 TTL → 无限堆积
        // 插地：靠近玩家且过了拾取延迟 → 捡回 1 支箭（玩家/骷髅的都能捡，方便补给）
        if (a.age > ARROW_PICKUP_DELAY) {
          const dx = a.x - this.player.pos.x;
          const dy = a.y - (this.player.pos.y + 0.9);
          const dz = a.z - this.player.pos.z;
          // addItem 返回「放不下的剩余数」：0=已全部收入 → 才移除地上的箭（背包满时 leftover>0，箭留地上）
          if (dx * dx + dy * dy + dz * dz < 1.4 * 1.4 && addItem(this.inv, ARROW, 1) === 0) {
            this.hotbar.render(this.inv);
            this.arrows.splice(i, 1);
          }
        }
        continue;
      }
      const ox = a.x;
      const oy = a.y;
      const oz = a.z;
      stepArrow(a, this.physWorld);
      // 沿本刻移动段采样做命中，防快箭穿过薄目标
      const dx = a.x - ox;
      const dy = a.y - oy;
      const dz = a.z - oz;
      const steps = Math.max(1, Math.ceil(Math.hypot(dx, dy, dz) / 0.2));
      let consumed = false;
      for (let s = 1; s <= steps && !consumed; s++) {
        const t = s / steps;
        const x = ox + dx * t;
        const y = oy + dy * t;
        const z = oz + dz * t;
        if (a.fromPlayer) {
          for (const mob of this.mobs) {
            const def = MOB_DEFS[mob.kind];
            if (inAabb(x, y, z, mob.pos.x, mob.pos.z, mob.pos.y, def.width / 2, def.height)) {
              this.damageMobWithArrow(mob, a);
              consumed = true;
              break;
            }
          }
        } else if (inAabb(x, y, z, this.player.pos.x, this.player.pos.z, this.player.pos.y, WIDTH / 2, HEIGHT)) {
          // 中箭：扣血 + 闪红/抖手 + 沿箭飞行方向被击退
          this.hurtPlayer(a.damage, a.vx, a.vz);
          consumed = true;
        }
      }
      if (consumed) this.arrows.splice(i, 1);
    }
  }

  // 箭命中生物：按箭伤 + 沿箭飞行方向击退，处理掉落/死亡（与近战 attackMob 同套事件处理）。
  private damageMobWithArrow(mob: Mob, a: Arrow): void {
    const res = hurtMob(mob, a.damage, { x: a.vx, z: a.vz }, this.mobRng);
    Object.assign(mob, res.mob);
    for (const ev of res.events) {
      if (ev.kind === 'drops') {
        for (const stack of ev.items)
          this.drops.push(spawnDrop(stack.id, Math.floor(ev.pos.x), Math.floor(ev.pos.y), Math.floor(ev.pos.z), Math.random, stack.count));
      } else if (ev.kind === 'death') {
        const idx = this.mobs.indexOf(mob);
        if (idx >= 0) this.mobs.splice(idx, 1);
      }
    }
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
    // MC：近战被方块挡——眼睛到怪之间(距离<bestT)有实心方块则打不到（隔墙无效）
    if (best !== null) {
      const blocked = raycastVoxel(
        { x: ox, y: oy, z: oz },
        { x: dx, y: dy, z: dz },
        bestT,
        (bx, by, bz) => isSolidId(this.world.getBlock(bx, by, bz)),
      );
      if (blocked) return null;
    }
    return best;
  }

  // 攻击一只生物：按手持武器结算伤害 + 击退；死亡则掉落 + 移除。
  private attackMob(mob: Mob): void {
    this.hand.swing();
    const held = this.inv[this.hotbar.index];
    const dmg = mobDamage(held ? held.id : null);
    // MC：攻击生物消耗耐久——剑每击 −1，其它工具当武器用每击 −2（非工具/空手不掉）
    const wtd = held ? toolOf(held.id) : null;
    if (wtd) {
      for (let n = wtd.kind === 'sword' ? 1 : 2; n > 0; n--) damageTool(this.inv, this.hotbar.index, wtd.maxDurability);
      this.hotbar.render(this.inv);
    }
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const res = hurtMob(mob, dmg, { x: cy, z: sy }, this.mobRng);
    Object.assign(mob, res.mob);
    for (const ev of res.events) {
      if (ev.kind === 'drops') {
        for (const stack of ev.items)
          this.drops.push(spawnDrop(stack.id, Math.floor(ev.pos.x), Math.floor(ev.pos.y), Math.floor(ev.pos.z), Math.random, stack.count));
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
    // 瞄到的若是可替换块(草丛)→ 直接放在它那格(替换掉草)；否则放在命中面的外侧那格。
    const onReplaceable = isReplaceableId(this.world.getBlock(hit.x, hit.y, hit.z));
    const px = onReplaceable ? hit.x : hit.x + hit.nx;
    const py = onReplaceable ? hit.y : hit.y + hit.ny;
    const pz = onReplaceable ? hit.z : hit.z + hit.nz;
    const target = this.world.getBlock(px, py, pz);
    if (!isReplaceableId(target)) return; // 仅可放进空气/水/草丛(草丛可被覆盖)
    if (this.overlapsPlayer(px, py, pz)) return; // 不能埋住自己
    // 创造：放置不消耗物品（无限建材）；生存：取走 1 个。
    const id = this.creative ? stack.id : takeOne(this.inv, sel);
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
    // 天光色相 → uSkyTint(夜偏蓝)，火把照亮处不变蓝。
    const t = s.worldTint;
    const mx = Math.max(t[0], t[1], t[2], 0.001);
    // 白天把天光色调暖 → 阳光照到的地面/开阔处泛暖金(MC 光影感)；夜晚不动(保留冷蓝)。
    // day=1 白天→0 午夜；暖到 (1, 0.95, 0.85)。仅染受天光的面(洞内/夜晚不暖)。
    const day = 1 - skyDarkenAt(this.worldTime) / 11;
    this.chunks.setTint([t[0] / mx, (t[1] / mx) * (1 - day * 0.05), (t[2] / mx) * (1 - day * 0.15)]);
    // 夜晚走 MC 1:1 skyDarken(0..11)：露天天光 15-11=4，半夜偏暗但看得见(不再近黑)。
    const darken = skyDarkenAt(this.worldTime);
    this.chunks.setSkyDarken(darken);
    this.chunks.setSkyMul(1 - darken / 11); // 仅供水面太阳粼光强度(白天 1、夜 0)
    // 光影水面：反射色取地平线天空色(黄昏偏橙/夜里偏暗)；太阳方向随时间走(驱动镜面高光)。
    this.chunks.setSkyReflection(s.skyHorizon, s.skyTop);
    const phi = (this.worldTime / DAY_LENGTH) * Math.PI * 2; // 正午最高、夜里在地平线下→无高光
    this.chunks.setSunDir(Math.cos(phi), Math.sin(phi), 0.35);
  }

  /**
   * 每帧把太阳屏幕 UV + 当前档位喂给 Renderer.setGodRays()。
   *
   * 太阳方向：同 updateDayNight / SkyObjects 的公式——phi = worldTime/DAY_LENGTH*2π，
   * 世界空间 sunDir = (cos(phi), sin(phi), 0.35).normalize()（Y=上，Z=北）。
   *
   * 投影到屏幕 UV：用 THREE.Vector3.project(camera) → NDC [-1,1] → UV [0,1]。
   * THREE.js 的 NDC Y 轴向上，UV Y 轴也向上（0=底部），与屏幕坐标 Y 反转无关
   * ——着色器里直接用 UV，与 vUv 一致（vUv 也是 Y 向上）。
   *
   * off 档：调 renderer.setGodRays(null) → off 路径，零后处理开销。
   * 太阳在地平线下或屏幕外：intensity = 0 → shader 早返回，只输出 sceneColor。
   */
  private updateGodRays(): void {
    if (this.lightingQuality === 'off') {
      // setLightingQuality('off') 时已调 setGodRays(null)，这里不重复调（避免每帧 dispose/rebuild）。
      return;
    }

    // 太阳世界方向（同 SkyObjects.update & ChunkMeshManager.updateSun 的公式）。
    const phi = (this.worldTime / DAY_LENGTH) * Math.PI * 2;
    const sx = Math.cos(phi);
    const sy = Math.sin(phi); // Y > 0 = 地平线以上
    const sz = 0.35;
    const len = Math.hypot(sx, sy, sz) || 1;

    // 太阳在地平线以下 → intensity 0（仍传 setGodRays 以保持 RT active，shader 早返回）。
    const sunUp = sy / len; // 归一化 Y 分量

    // 太阳世界位置 = 相机位置 + 太阳方向 × 远距离（投影用，距离不影响屏幕 UV）。
    const cam = this.renderer.camera;
    // 太阳是否在相机前方(dot>0)。在背后时 project() 会算出 NaN/乱值的屏幕坐标 → 合成出黑屏；必须门控。
    cam.getWorldDirection(this._godFwd);
    const facing = this._godFwd.x * (sx / len) + this._godFwd.y * (sy / len) + this._godFwd.z * (sz / len);
    // 把太阳方向映射到 NDC，再转 UV。
    // THREE.Vector3.project 把世界坐标 → NDC；这里用方向 × 距离 + 相机位置。
    const FAR = 500; // 足够远，超出地形遮挡范围
    this._godSunWorld.set(
      cam.position.x + (sx / len) * FAR,
      cam.position.y + (sy / len) * FAR,
      cam.position.z + (sz / len) * FAR,
    );
    this._godSunWorld.project(cam); // → NDC [-1,1]³
    const sunWorld = this._godSunWorld;
    // NDC.x/y → UV [0,1]（Y 轴方向与 vUv 一致，不需要翻转）
    const uvX = sunWorld.x * 0.5 + 0.5;
    const uvY = sunWorld.y * 0.5 + 0.5;

    // 太阳是否在视锥内（NDC 各维 [-1,1]）。仅检 X/Y；Z 不检（太阳永远在 far plane 外）。
    const onScreen = uvX >= 0 && uvX <= 1 && uvY >= 0 && uvY <= 1;

    // 强度：太阳高于地平线 + 在屏幕内才有光束；高度平滑过渡（tan-like 0..1）。
    let intensity = 0;
    if (sunUp > 0 && facing > 0 && onScreen) {
      // 平滑渐入：太阳刚过地平线时强度 0，正午偏强，上限 0.6（防过曝）。
      intensity = Math.min(0.6, sunUp * 2.5);
    }

    // 太阳颜色：黎明/黄昏偏橙，正午白。用简化双线性近似，避免引入 skyStateAt 的开销。
    // sunUp 0→橙(1.0,0.6,0.3)；sunUp 0.5→白(1.0,0.95,0.8)。
    const cr = 1.0;
    const cg = 0.6 + sunUp * 0.7;
    const cb = 0.3 + sunUp * 1.0;
    this._godSunColor.setRGB(cr, Math.min(1.0, cg), Math.min(1.0, cb));
    this._godSunUV.set(uvX, uvY);

    this.renderer.setGodRays({
      quality: this.lightingQuality,
      sunUV: this._godSunUV,
      intensity,
      sunColor: this._godSunColor,
    });
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
    // 视点高度向目标(下蹲=CROUCH_EYE)平滑过渡，下蹲时相机下沉
    this.camEye += ((this.crouching ? CROUCH_EYE : EYE) - this.camEye) * 0.3;
    const eye = this.camEye;
    cam.position.set(x, y + eye, z);
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const cp = Math.cos(this.look.pitch);
    const sp = Math.sin(this.look.pitch);
    cam.lookAt(x + cy * cp, y + eye + sp, z + sy * cp);
  }
}
