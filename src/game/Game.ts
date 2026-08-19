import * as THREE from 'three';
import { Renderer } from '../render/Renderer';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_H, CHUNK_W } from '../core/world/chunk';
import { columnHeight, SEA_LEVEL, generateChunk } from '../core/worldgen/terrain';
import { worldToChunk, localCoord } from '../core/world/coords';
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
  OBSIDIAN,
  NETHER_PORTAL,
  isNetherPortalId,
  type HeldTool,
  ICE,
  TORCH,
  SAND,
  BEDROCK,
  SPRUCE_LOG,
  SPRUCE_LEAVES,
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
import { readMove, consumeJump, type MoveKeys } from '../input/keyboard';
import { PointerLookControls } from '../input/PointerLookControls';
import { TouchControls, supportsTouchControls } from '../input/TouchControls';
import { Hotbar } from '../ui/hotbar';
import { setIconTexturePack } from '../ui/itemIcons';
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
  canSprint,
  MAX_FOOD,
  type Survival,
} from '../core/survival/survival';
import {
  APPLE,
  EGG,
  FLINT,
  ARROW,
  BOW,
  FLINT_AND_STEEL,
  DIAMOND_PICKAXE,
  DIAMOND_AXE,
  DIAMOND_SHOVEL,
  DIAMOND_SWORD,
  DIAMOND_HOE,
  isFood,
  foodValue,
  toolOf,
  itemMaxStack,
} from '../core/items/items';
import { ignitePortal, mapPortalCoord, buildDestinationPortal } from '../core/world/portalFill';
import { skyStateAt, skyDarkenAt, DAY_START, DAY_LENGTH } from '../core/world/dayNight';
import { ParticleRenderer } from '../render/ParticleRenderer';
import { SkyObjects } from '../render/SkyObjects';
import { spawnBurst, stepParticles, particleColor, type Particle } from '../core/particles/particles';
import { dimEditKey, parseEditKey, type WorldSave } from '../save/worldStore';
import { touchesCactus } from '../core/survival/cactus';
import { MultiplayerClient, type BlockEdit } from '../multiplayer/MultiplayerClient';
import { RemotePlayerRenderer } from '../render/RemotePlayerRenderer';

const TICK_MS = 50; // 20 TPS 固定步长
const REACH_SURVIVAL = 4.5; // 交互距离(1.12 生存 4.5)
const REACH_CREATIVE = 5.0; // 创造 5.0
const HOTBAR_SLOTS = 9;
const DROP_TTL = 300; // 掉落物存活上限（秒，同 MC 5 分钟）
const WORLD_Y_OFFSET = -125; // 坐标显示整体下移：世界底(内部 y=0)显示为 -125，地表≈-9。仅影响 F3 坐标显示，世界存储/性能不变。
const AIR = 0;

// 创造模式初始物品栏：常用建材放快捷栏(0-8)，更多方块/铁工具/弓箭放主背包。创造放置不耗、可无限用。
const CREATIVE_LOADOUT: { id: number; count: number }[] = [
  { id: 3, count: 64 }, { id: 2, count: 64 }, { id: 1, count: 64 }, { id: 4, count: 64 }, // 草/土/石/圆石
  { id: 7, count: 64 }, { id: 6, count: 64 }, { id: 5, count: 64 }, { id: 21, count: 64 }, { id: 14, count: 64 }, // 木板/原木/沙/荧石/火把
  { id: 15, count: 64 }, { id: 26, count: 64 }, { id: 32, count: 64 }, { id: 33, count: 64 }, { id: 34, count: 64 }, { id: 36, count: 64 }, // 砂砾/沙石/煤块/铁块/石英块/钻石块
  { id: 18, count: 64 }, { id: 19, count: 64 }, { id: 20, count: 64 }, { id: 10, count: 64 }, { id: 30, count: 64 }, // 黑曜石/地狱岩/灵魂沙/树叶/云杉木
  { id: 8, count: 64 }, { id: 12, count: 64 }, { id: 35, count: 64 }, { id: 11, count: 64 }, { id: 13, count: 64 }, { id: 27, count: 64 }, { id: 28, count: 64 }, // 煤矿/铁矿/钻石矿/工作台/熔炉/仙人掌/冰
  { id: 269, count: 1 }, // 铁镐：保留一把用于查看铁阶段；其余格留给钻石工具与弓箭
  { id: DIAMOND_PICKAXE, count: 1 }, { id: DIAMOND_AXE, count: 1 }, { id: DIAMOND_SHOVEL, count: 1 }, { id: DIAMOND_SWORD, count: 1 }, { id: DIAMOND_HOE, count: 1 },
  { id: BOW, count: 1 }, { id: ARROW, count: 64 },
];

function creativeInventory(): Inventory {
  const inv = emptyInventory();
  for (let i = 0; i < CREATIVE_LOADOUT.length && i < inv.length; i++) inv[i] = { ...CREATIVE_LOADOUT[i] };
  return inv;
}
const EAT_TIME = 1.6; // 吃东西耗时（秒，同 MC）
const LEAF_APPLE_CHANCE = 0.005; // 树叶掉苹果概率(1.12 = 0.5%,1:1 硬约束)
const SPRINT_EXHAUSTION = 0.1; // 每格疾跑消耗（MC）
const JUMP_EXHAUSTION = 0.05;
const SPRINT_JUMP_EXHAUSTION = 0.2;
const BREAK_EXHAUSTION = 0.005;
const DAMAGE_EXHAUSTION = 0.1;
const MOB_REACH = 3.0; // Java 1.12 生存近战实体距离（格）
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
const BOW_DAMAGE = 9; // 满蓄力伤害(1.12 满蓄力 9,暴击可到 10)
// 骷髅箭速从 hostileAi 导入（与那边的下坠瞄准补偿同一值）
const PLAYER_KNOCK_H = 0.42; // 玩家被攻击时的水平击退初速（格/tick，经 KB_DECAY 衰减约退 1 格）
const PLAYER_KNOCK_UP = 0.36; // 玩家被攻击时的上抛速度（格/tick，同怪物被击退手感）

// 近战伤害（1:1 MC）：拳 1 / 木剑 4 / 石剑 5 / 铁剑 6 / 钻石剑 7（非剑按拳算）。
function mobDamage(heldId: number | null): number {
  if (heldId == null) return 1;
  const t = toolOf(heldId);
  if (t?.kind === 'sword') return t.tier === 1 ? 4 : t.tier === 2 ? 5 : t.tier === 3 ? 6 : 7;
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

/**
 * 一次世界交互所使用的射线。桌面端始终取准星中心；触屏端则由手指按下的屏幕位置换算而来。
 * 使用普通数值对象而不是把 THREE.Ray 传遍游戏逻辑，避免输入层和渲染对象产生不必要耦合。
 */
type InteractionRay = Readonly<{
  origin: Readonly<{ x: number; y: number; z: number }>;
  direction: Readonly<{ x: number; y: number; z: number }>;
}>;

/** 装配各层 + 固定步长模拟 + 跟随玩家动态加载区块 + 挖掘/放置 + 生命/饥饿。从存档启动。 */
export class Game {
  private readonly canvas: HTMLCanvasElement;
  private readonly save: WorldSave;
  private readonly renderer: Renderer;
  /** 在线房间只同步玩家位置和方块；空值代表普通单人世界。单人世界可在暂停时直接开放为房间。 */
  private multiplayer: MultiplayerClient | null;
  private readonly remotePlayers: RemotePlayerRenderer;
  private readonly look: PointerLookControls;
  private readonly touch: TouchControls | null;
  private world!: ChunkWorld; // 切维度时整体替换(去 readonly)；构造里由 buildDimension() 赋值(故用 ! 断言已赋值)；fluidGrid/physWorld 等闭包始终读 this.world，自动跟随
  private readonly physWorld: VoxelWorld;
  private chunks: ChunkMeshManager; // 构造时建一次；切维度复用同一个(setWorld 换世界引用)，故非 readonly 但实际只建一次
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
  private dimension: 'overworld' | 'nether' = 'overworld'; // 当前维度（Task 9 接真实切换）
  private portalCooldown = 0; // 过传送门后的冷却(刻)，>0 期间不再触发切维度，防站门里来回弹
  private portalTimer = 0; // 站在传送门里的累计秒数；满 4s 触发传送，离开传送门即清零
  private portalArmed = true; // Fix2: 需离开传送门后再进才能触发下一次传送，防 AFK 在到达门口来回弹
  private particles: Particle[] = []; // 碎屑粒子数据（挖方块四溅）
  private digFxT = 0; // 挖掘碎屑喷发节流计时
  private readonly invUI: InventoryUI;
  private craftingGrid = 0; // 背包/合成界面：0=关闭 2=个人(2×2) 3=工作台(3×3)
  private readonly furnaceUI: FurnaceUI;
  private readonly furnaces = new Map<string, FurnaceState>(); // 坐标"x,y,z"→熔炉状态
  private furnaceKey: string | null = null; // 当前打开的熔炉坐标(null=没开)
  /** 触屏空白世界区域当前已经开始的长按行为，确保拖动/系统取消不会误射弓或遗留挖掘状态。 */
  private touchHoldAction: 'primary' | 'use' | null = null;
  /**
   * 长按挖掘时锁定中央箭头在长按开始瞬间命中的方块。
   * 因而手指随后用于转镜头也不会中断挖掘；桌面端保持动态准星挖掘。
   */
  private touchDigging = false;
  private touchDigHit: RayHit | null = null;
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
  private lastMeleeMs = 0; // 上次近战命中时刻(ms)：加 ~0.5s 攻击冷却，防疯狂点击=无限伤害(同 MC 1.9+)
  private digTarget: { x: number; y: number; z: number } | null = null;
  private digProgress = 0; // 当前目标已挖秒数
  private readonly fluidSim = new FluidSim();
  private readonly fluidGrid: FluidGrid;
  private fluidTick = 0; // 计数：每 5 刻跑一次水模拟（同 MC）
  private readonly wateredChunks = new Set<string>(); // 已增量激活过「能流动的水」的区块，避免重复扫描
  private worldTime: number; // 昼夜更替：世界时间(刻)，每模拟刻 +1；24000 刻=20 分一整天
  private fov = 70;
  // 当前实际应用到物理的疾跑状态；FOV 和疲劳必须读它，不能只读按键。
  private actualSprinting = false;
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
  private readonly _handSun = new THREE.Vector3();
  private readonly _handSkyColor = new THREE.Color();

  constructor(canvas: HTMLCanvasElement, save: WorldSave, multiplayer: MultiplayerClient | null = null) {
    const settings = loadSettings();
    setIconTexturePack(settings.texturePack);
    this.canvas = canvas;
    this.save = save;
    this.creative = save.gameMode === 'creative';
    this.renderer = new Renderer(canvas);
    this.multiplayer = multiplayer;
    this.remotePlayers = new RemotePlayerRenderer(this.renderer.scene);
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

    this.fluidGrid = {
      // 世界顶/底之外视作固体：水不会灌进虚空(否则到 y=0 会无限提议下落、永不收敛)
      // 注意：读 this.world（非捕获局部），切维度替换 world 后这些闭包自动指向新世界。
      isSolid: (x, y, z) => y < 0 || y >= CHUNK_H || isSolidId(this.world.getBlock(x, y, z)),
      amount: (x, y, z) => this.world.waterAmount(x, y, z),
      isSource: (x, y, z) => this.world.isWaterSource(x, y, z),
      isFalling: (x, y, z) => this.world.isWaterFalling(x, y, z),
      setWater: (x, y, z, a, s, f) => this.world.setWater(x, y, z, a, s, f),
      getBlock: (x, y, z) => this.world.getBlock(x, y, z),
      setBlock: (x, y, z, id) => this.edit(x, y, z, id),
    };
    // 维度：续存档维度，新档/旧档默认主世界。buildDimension 建对应维度的世界 + 只贴该维度的玩家改动。
    this.dimension = save.currentDimension ?? 'overworld';
    this.buildDimension(this.dimension);
    this.texturePack = settings.texturePack; // 按设置选鲜艳/标准像素图集
    this.lightingQuality = settings.lightingQuality; // 光影档位初值（决定 god-ray 是否开启）
    this.renderDistance = settings.renderDistance; // 渲染距离初值
    const atlas = loadAtlas(this.texturePack);
    this.chunks = new ChunkMeshManager(this.renderer.scene, this.world, atlas);
    this.renderer.setWaterRefractionSink((color, depth, width, height) =>
      this.chunks.setWaterRefraction(color, depth, width, height),
    );
    this.renderer.setWaterReflectionSink((color, textureMatrix) =>
      this.chunks.setWaterReflection(color, textureMatrix),
    );
    this.chunks.setLightingQuality(settings.lightingQuality); // 光影开关初值(真实水面波动/反射)
    this.chunks.setSunEnabled(this.dimension === 'overworld');
    this.setRenderDistance(this.renderDistance); // 套用初始雾距 + 雾剔除（须在 chunks 初始化之后，否则 setFogFar 崩）
    // welcome 到创建 Game 之间可能已经收到了别人的方块包；MultiplayerClient 会排队，直到这里世界/网格都就绪后再交付。
    if (this.multiplayer) this.bindMultiplayer(this.multiplayer);
    this.crack = new CrackOverlay(this.renderer.scene);
    this.dropRenderer = new DropRenderer(this.renderer.scene, atlas);
    this.arrowRenderer = new ArrowRenderer(this.renderer.scene);
    this.mobRenderer = new MobRenderer(this.renderer.scene);
    this.mobRng = makeRng((save.seed ^ 0x9e3779b9) >>> 0);
    this.spawnWorld = { getBlock: (x, y, z) => this.world.getBlock(x, y, z) };
    this.hand = new FirstPersonHand(atlas);
    this.hand.setLightingQuality(settings.lightingQuality);
    this.particleFx = new ParticleRenderer(this.renderer.scene);
    this.skyObjects = new SkyObjects(this.renderer.scene); // 方块太阳/月亮/云
    this.skyObjects.setLightingQuality(settings.lightingQuality); // 光影初值：开=柔和真实云、关=MC立体云
    this.skyObjects.setDimension(this.dimension); // 初始维度同步（默认 overworld，Task 9 接真实切换）
    this.invUI = new InventoryUI(document.getElementById('inventory') as HTMLElement);
    this.furnaceUI = new FurnaceUI(document.getElementById('furnace') as HTMLElement);
    this.coordEl = document.createElement('div');
    this.coordEl.style.cssText =
      'position:fixed;left:8px;top:8px;z-index:30;padding:4px 8px;font:14px Zpix,monospace;' +
      'color:#fff;background:rgba(0,0,0,.45);white-space:pre;display:none;pointer-events:none;text-shadow:1px 1px 0 #000;';
    document.body.appendChild(this.coordEl);
    this.furnaceUI.onChange = (): void => this.hotbar.render(this.inv);
    this.furnaceUI.onClose = (): void => this.closeFurnace();
    this.invUI.onChange = (): void => this.hotbar.render(this.inv);
    this.invUI.onClose = (): void => this.closeCrafting();
    this.physWorld = {
      isSolid: (x, y, z) => isSolidId(this.world.getBlock(x, y, z)),
      isWater: (x, y, z) => isWaterId(this.world.getBlock(x, y, z)),
    };

    // 出生：worldSpawn 始终为【主世界】出生点（死亡重生用）；
    //   有存档位置则从那里继续——优先用当前维度的存档位(playerByDimension[dim])，
    //   这样在下界存档重开仍落回下界；否则退回 save.player（旧档/未分维度）。
    const p = save.playerByDimension?.[this.dimension] ?? save.player;
    this.worldSpawn = this.findSpawn(save.seed);
    const spawn = p ? { x: p.x, y: p.y, z: p.z } : this.worldSpawn;
    this.player = { pos: { ...spawn }, vel: { x: 0, y: 0, z: 0 }, onGround: false };
    this.prev = this.player;
    this.chunks.update(worldToChunk(Math.floor(spawn.x)), worldToChunk(Math.floor(spawn.z)), 2, 999);
    // 生物：有存档就还原玩家上次离开时附近的（动物/敌对）；否则（新世界/旧档）出生周边撒几群
    //   优先取当前维度的生物群（mobsByDimension[dim]），退回 save.mobs（旧档/未分维度）。
    const savedMobs = save.mobsByDimension?.[this.dimension] ?? save.mobs;
    if (savedMobs && savedMobs.length) {
      for (const sm of savedMobs) this.mobs.push(deserializeMob(sm));
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

    const touchEnabled = supportsTouchControls();
    this.look = new PointerLookControls(canvas, !touchEnabled);
    this.look.yaw = p ? p.yaw : Math.atan2(-spawn.z, -spawn.x);
    this.look.pitch = p ? p.pitch : -0.18;

    this.touch = touchEnabled
      ? new TouchControls(document.getElementById('touch-controls') as HTMLElement, {
          look: (yaw, pitch) => this.look.rotate(yaw, pitch),
          interactTap: () => this.onTouchInteractTap(),
          interactHoldStart: () => this.beginTouchHoldAction(),
          interactHoldEnd: () => this.endTouchHoldAction(),
          interactHoldCancel: () => this.cancelTouchHoldAction(),
          inventory: () => {
            if (this.furnaceKey) this.closeFurnace();
            else if (this.craftingGrid > 0) this.closeCrafting();
            else this.openCrafting(2);
          },
          pause: () => window.dispatchEvent(new Event('mineworld:touch-pause')),
        })
      : null;

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    canvas.addEventListener('mousedown', (e) => {
      if (document.pointerLockElement !== canvas) return;
      if (e.button === 0) this.beginPrimaryAction();
      else if (e.button === 2) this.onUseDown(); // 右键：吃 / 放方块
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.stopDigging();
      else if (e.button === 2) {
        this.releaseBow(); // 松开右键：弓发射
        this.stopEating();
      }
    });
    document.addEventListener('pointerlockchange', () => {
      if (this.touch) return;
      if (document.pointerLockElement !== canvas) {
        this.stopDigging(); // 松开锁定即停挖
        this.drawingBow = false; // 失焦取消拉弓
        this.bowCharge = 0;
        this.stopEating();
      }
    });
    window.addEventListener('keydown', (e) => {
      if (e.code === 'KeyE') {
        if (this.furnaceKey) this.closeFurnace();
        else if (this.craftingGrid > 0) this.closeCrafting();
        else if (this.isGameplayActive()) this.openCrafting(2);
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

  /** 主循环与外层 UI 共用：桌面靠指针锁定，触屏靠虚拟控制层的 active 状态。 */
  isGameplayActive(): boolean {
    return this.touch?.isActive ?? document.pointerLockElement === this.canvas;
  }

  usesTouchControls(): boolean {
    return this.touch !== null;
  }

  setTouchActive(active: boolean): void {
    this.touch?.setActive(active && !this.dead && this.craftingGrid === 0 && !this.furnaceKey);
  }

  /**
   * 把正在运行的单人世界开放成联机房间，不需要重新创建 Game。
   * 服务端创建房间时已收到当前快照的 seed / 方块改动 / 时间；这里只接上之后的实时同步。
   */
  attachMultiplayer(client: MultiplayerClient): boolean {
    if (this.multiplayer !== null) return false;
    this.multiplayer = client;
    this.bindMultiplayer(client);
    this.publishMultiplayerState();
    return true;
  }

  private bindMultiplayer(client: MultiplayerClient): void {
    client.setBlockHandler((edit) => this.applyRemoteBlockEdit(edit));
    client.setWorldTimeHandler((worldTime) => this.setNetworkWorldTime(worldTime));
  }

  private readMovement(): MoveKeys {
    const keyboard = readMove();
    if (!this.touch?.isActive) return keyboard;
    const touch = this.touch.readMove();
    return {
      forward: Math.max(-1, Math.min(1, keyboard.forward + touch.forward)),
      right: Math.max(-1, Math.min(1, keyboard.right + touch.right)),
      sprint: keyboard.sprint || touch.sprint,
      jumpHeld: keyboard.jumpHeld || touch.jumpHeld,
      crouch: keyboard.crouch || touch.crouch,
    };
  }

  /** 固定步长物理之后采样本机状态；client 自己节流到 15Hz，避免每 20TPS 都发包。 */
  private publishMultiplayerState(): void {
    if (!this.multiplayer) return;
    const p = this.player.pos;
    this.multiplayer.sendState({
      x: p.x,
      y: p.y,
      z: p.z,
      yaw: this.look.yaw,
      pitch: this.look.pitch,
      dimension: this.dimension,
    });
  }

  /**
   * 开始左键/长按的主操作。触屏会传入“中央箭头在按住开始时”的射线并锁定命中；
   * 桌面端不传，保持动态准星行为。
   */
  private beginPrimaryAction(aim?: InteractionRay): void {
    if (!this.isGameplayActive()) return;
    // 每次主操作先清掉上一次触屏锁定，避免攻击生物后留下旧方块目标。
    this.touchDigging = false;
    this.touchDigHit = null;
    const target = this.mobUnderRay(aim);
    if (target) {
      // 攻击冷却 ~0.5s(同 MC 1.9+)：冷却内的点击不再造成伤害。对着生物时不挖它后面的方块。
      const nowMs = performance.now();
      if (nowMs - this.lastMeleeMs >= 500) {
        this.attackMob(target, aim);
        this.lastMeleeMs = nowMs;
      }
      return;
    }
    // 传入 aim 即代表触屏：即便箭头当时没有命中方块，也绝不能在玩家转镜头后换目标。
    this.touchDigging = aim !== undefined;
    this.touchDigHit = aim ? this.rayHitFor(aim) : null;
    this.digging = true;
    this.digTarget = null;
  }

  private stopDigging(): void {
    this.digging = false;
    this.touchDigging = false;
    this.touchDigHit = null;
    this.digProgress = 0;
    this.digTarget = null;
    this.crack.hide();
  }

  /**
   * 手机版《我的世界》式直接触控：空白世界区域轻点是使用/放置，长按则按手持物决定挖掘/攻击或吃东西/拉弓。
   * TouchControls 保证一次手势只会进入其中一个分支，不能先放方块再开始挖。
   */
  private onTouchInteractTap(): void {
    if (!this.isGameplayActive()) return;
    // 手机版点击哪一边都只触发“使用”，实际目标始终以中央箭头为准。
    const hit = this.rayHit();
    if (this.useTargetedBlock(hit)) return;
    const stack = this.inv[this.hotbar.index];
    if (this.tryIgnitePortal(hit, stack?.id ?? null)) return;
    // 食物/弓只允许长按；短点只负责方块放置和一次性目标使用，避免误吃/误射。
    this.placeBlock(hit);
  }

  private shouldUseHeldItemOnTouchHold(): boolean {
    const stack = this.inv[this.hotbar.index];
    if (!stack || stack.count <= 0) return false;
    if (stack.id === BOW) return countItem(this.inv, ARROW) > 0;
    return isFood(stack.id) && this.survival.food < MAX_FOOD;
  }

  private beginTouchHoldAction(): void {
    if (!this.isGameplayActive() || this.touchHoldAction !== null) return;
    if (this.shouldUseHeldItemOnTouchHold() && this.beginHeldItemUse()) {
      this.touchHoldAction = 'use';
      return;
    }
    this.touchHoldAction = 'primary';
    // 把中央箭头此刻命中的方块锁定；之后拖动右手转镜头也不会重置裂纹进度。
    this.beginPrimaryAction(this.crosshairRay());
  }

  private endTouchHoldAction(): void {
    const action = this.touchHoldAction;
    this.touchHoldAction = null;
    if (action === 'primary') {
      this.stopDigging();
      return;
    }
    if (action === 'use') {
      this.releaseBow();
      this.stopEating();
    }
  }

  private cancelTouchHoldAction(): void {
    const action = this.touchHoldAction;
    this.touchHoldAction = null;
    if (action === 'primary') {
      this.stopDigging();
      return;
    }
    // 拖动、系统手势、失焦都属于取消：弓不可在这里放箭。
    if (action === 'use') {
      this.drawingBow = false;
      this.bowCharge = 0;
      this.stopEating();
    }
  }

  /**
   * 建/换当前维度的世界（不动 chunks 网格管理器——构造时建一次、切维度复用）：
   *   ① new ChunkWorld(seed, dim)（原始种子；下界 +70000 偏移在 generateNetherChunk 内按 dim 加，这里不重复加）
   *   ② editHook：远处区块被驱逐后重生成是纯地形，用此 hook 贴回本维度的玩家改动
   *   ③ 应用本维度已有的玩家改动（delta）并激活其周围的水
   * 关键：edits 是按维度前缀键存的（主世界无前缀 "x,y,z"、下界 "nether:x,y,z"），
   *   读写两侧都按 parseEditKey(key).dim === dim 过滤，确保下界改的块只在下界生效/恢复、不污染主世界。
   */
  private buildDimension(dim: 'overworld' | 'nether'): void {
    this.world = new ChunkWorld(this.save.seed, dim);
    // 驱逐后重生成时贴回本维度的玩家改动（只贴 dim 匹配 + 该区块内的）
    this.world.editHook = (cx, cz, c): void => {
      for (const key in this.save.edits) {
        const e = parseEditKey(key);
        if (e.dim !== dim) continue;
        if ((e.x >> 4) === cx && (e.z >> 4) === cz) c.set(e.x & 15, e.y, e.z & 15, this.save.edits[key]);
      }
    };
    // 应用本维度玩家改过的方块（delta），并激活其周围的水（重新流入/退去）
    for (const key of Object.keys(this.save.edits)) {
      const e = parseEditKey(key);
      if (e.dim !== dim) continue;
      this.world.setBlock(e.x, e.y, e.z, this.save.edits[key]);
      this.fluidSim.activate(e.x, e.y, e.z);
    }
  }

  /**
   * 切维度（过传送门时调用）：复用同一个 ChunkMeshManager，只换世界引用 + 各维度独立的玩家位/生物。
   *   1) 存当前维度的玩家位置 + 生物到 save.playerByDimension / mobsByDimension
   *   2) 建目标维度的 world（buildDimension），把 chunks 指向它（setWorld 清旧网格），再 dispose 旧 world
   *      —— 顺序关键：先 setWorld 再 old.dispose()，否则 dispose 会 terminate 旧 worker 留下半成品网格。
   *   3) 落点 + 还原目标维度生物 + 天空切换 + 预加载落点周围 + 冷却防来回弹
   * 触发方（站在传送门里检测 + 目标坐标映射）由 Task 10 在游戏循环里接上并调用本方法。
   * 非 private：供 Task 10 的传送门触发逻辑（同在 Game 内）调用；当前任务只提供切换机制本身。
   */
  switchDimension(target: 'overworld' | 'nether', pos: { x: number; y: number; z: number }): void {
    // 1) 存当前维度玩家位 + 生物
    (this.save.playerByDimension ??= {})[this.dimension] = {
      x: this.player.pos.x,
      y: this.player.pos.y,
      z: this.player.pos.z,
      yaw: this.look.yaw,
      pitch: this.look.pitch,
    };
    (this.save.mobsByDimension ??= {})[this.dimension] = this.mobs.map(serializeMob);
    // 2) 切维度：建新世界 → 换 chunks 世界引用 → dispose 旧世界(terminate 旧 gen worker，防双世界常驻)
    const old = this.world;
    this.dimension = target;
    this.save.currentDimension = target;
    this.buildDimension(target);
    this.chunks.setWorld(this.world);
    this.chunks.setSunEnabled(target === 'overworld');
    old.dispose();
    // 流体活跃集：FluidSim 无公开 clear（其 active 集每刻 tick 后自动清空），故无需手动重置——非致命，跳过。
    // 还原目标维度的生物（清掉来源维度的）
    this.mobs.length = 0;
    for (const sm of this.save.mobsByDimension?.[target] ?? []) this.mobs.push(deserializeMob(sm));
    // 3) 落点 + 天空 + 预加载落点周围区块
    this.player = { pos: { ...pos }, vel: { x: 0, y: 0, z: 0 }, onGround: false };
    this.prev = this.player;
    this.skyObjects.setDimension(target);
    const cx = worldToChunk(Math.floor(pos.x));
    const cz = worldToChunk(Math.floor(pos.z));
    this.chunks.update(cx, cz, 2, 999); // 派发落点周围网格化（后台 worker 算）
    this.chunks.flushMesh(64); // 把已就绪的尽量上屏（其余由游戏循环逐帧续上）
    this.portalCooldown = 60; // ~过门后 60 刻冷却，防来回弹
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
      oxygen: sv.oxygen, // 曾漏存:水下快淹死时存档重进=白嫖满氧(bug)
      oxygenTimer: sv.oxygenTimer,
    };
    this.save.worldTime = this.worldTime; // 昼夜：存当前时刻，下次续上
    this.save.mobs = this.mobs.map(serializeMob); // 附近生物（动物/敌对）随档保存
    this.save.furnaces = Object.fromEntries(this.furnaces); // 熔炉状态(炉内料/燃料/进度)随档保存，否则重开就丢
    // 维度：记当前维度 + 把当前维度的玩家位/生物镜像进各维度表（与 switchDimension 一致），
    //   这样在下界存档→重开仍落回下界（构造按 currentDimension + playerByDimension 恢复）。
    this.save.currentDimension = this.dimension;
    (this.save.playerByDimension ??= {})[this.dimension] = { ...this.save.player };
    (this.save.mobsByDimension ??= {})[this.dimension] = this.save.mobs;
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
    // 先发一次出生位置；桌面端在点进指针锁定前也能让已在房内的玩家看见自己。
    this.publishMultiplayerState();
    const frame = (now: number): void => {
      requestAnimationFrame(frame);
      const dt = Math.min(now - this.last, 100) / 1000; // 帧间隔(秒)，限幅防卡顿跳变
      this.acc += now - this.last;
      this.last = now;
      if (this.acc > 250) this.acc = 250;
      const playing = this.isGameplayActive();
      while (playing && this.acc >= TICK_MS) {
        this.prev = this.player;
        const m = this.readMovement();
        const jumped = consumeJump() || (this.touch?.consumeJump() ?? false);
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
        // Java 1.12 生存模式食物值至少 7 才能疾跑；创造模式不受饥饿限制。
        this.actualSprinting = m.sprint && (this.creative || canSprint(this.survival));
        this.player = step(
          this.player,
          {
            forward: m.forward,
            right: m.right,
            yaw: this.look.yaw,
            jump: jumped,
            swimUp: m.jumpHeld,
            sprint: this.actualSprinting,
            crouch: this.flying ? false : m.crouch, // 下蹲：减速 + 不走下边缘 + 矮碰撞
            slow: this.eating, // 吃东西减速（同 MC 用物品 ≈20% 速度）
            fly: this.flying, // 创造飞行：无重力，竖直由下面 flyUp/flyDown 控制
            flyUp: m.jumpHeld, // 空格按住上升
            flyDown: m.crouch, // Shift 按住下降
          },
          this.physWorld,
        );
        this.publishMultiplayerState();
        this.stepSurvival(this.actualSprinting, jumped);
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
        if (this.portalCooldown > 0) this.portalCooldown--; // 过传送门冷却倒计时
        this.tickPortalTravel(); // 站门 4s → 传送到对侧维度(必要时造目的地门)
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
      this.chunks.cullToView(
        this.player.pos.x,
        this.player.pos.z,
        Math.cos(this.look.yaw),
        Math.sin(this.look.yaw),
        this.look.pitch,
      );
      const wantFov = playing && this.actualSprinting ? 80 : 70;
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
      // 太阳投影阴影：只在主世界光影档运行；下界没有太阳，不能残留“隐形太阳”阴影 pass。
      if (
        this.dimension === 'overworld' &&
        this.lightingQuality !== 'off' &&
        ++this.shadowTick >= 6
      ) {
        this.shadowTick = 0;
        this.chunks.updateSun(this.worldTime, this.player.pos.x, this.player.pos.y, this.player.pos.z);
        this.renderer.markShadowDirty();
      } else if (this.dimension !== 'overworld' || this.lightingQuality === 'off') {
        this.shadowTick = 0;
      }
      this.updateWater();
      this.updateHighlight();
      this.updateCamera(this.acc / TICK_MS);
      // 碎屑粒子：每帧推进 + 刷新
      this.particles = stepParticles(this.particles, dt);
      this.particleFx.sync(this.particles);
      this.mobRenderer.sync(this.mobs, dt, this.entityLight); // 生物模型跟随/动画(+按所在处光照变暗)
      // 远端玩家走独立渲染器，绝不塞进 mobs（否则会被本地 AI/攻击系统接管）。
      this.remotePlayers.sync(
        this.multiplayer?.remotePlayers.filter((player) => player.dimension === this.dimension) ?? [],
        dt,
        this.entityLight(this.player.pos.x, this.player.pos.y + EYE, this.player.pos.z),
      );
      this.arrowRenderer.sync(this.arrows); // 箭模型跟随
      // 第一人称手臂：手持当前选中方块、按移动速度晃动；吃东西时送嘴边抖动
      const held = this.inv[this.hotbar.index];
      this.hand.setHeld(held ? held.id : null);
      this.hand.setEating(playing && this.eating);
      const walk = Math.min(1, Math.hypot(this.player.vel.x, this.player.vel.z) / 0.22);
      this.hand.update(dt, playing ? walk : 0);
      const [handSky, handBlock] = this.chunks.lightLevelAt(
        this.player.pos.x,
        this.player.pos.y + EYE,
        this.player.pos.z,
      );
      // 手持/手臂按眼睛处环境光变暗。下界刚切换、光照网格尚未回传时的
      // [15,0] 是通用 fallback，不是真天光；先压暗它，避免过门后瞬间闪白。
      const handEntityLight =
        this.dimension === 'nether' && handSky > 14.5 && handBlock < 0.5
          ? 0.08
          : this.entityLight(this.player.pos.x, this.player.pos.y + EYE, this.player.pos.z);
      this.hand.setBrightness(handEntityLight);
      const handPhi = (this.worldTime / DAY_LENGTH) * Math.PI * 2;
      this._handSun.set(Math.cos(handPhi), Math.sin(handPhi), 0.1).normalize();
      const handSkyState = skyStateAt(this.worldTime, this.dimension);
      this._handSkyColor.setRGB(
        handSkyState.worldTint[0],
        handSkyState.worldTint[1],
        handSkyState.worldTint[2],
        THREE.SRGBColorSpace,
      );
      this.hand.setLighting({
        skyLevel: handSky,
        blockLevel: handBlock,
        skyDarken: this.skyDarkenNow,
        sunEnabled: this.dimension === 'overworld',
        skyColor: this._handSkyColor,
        sunDirectionWorld: this._handSun,
        cameraQuaternion: this.renderer.camera.quaternion,
      });
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
      this.hurtPlayer(fall.damage, 0, 0, true); // 走统一伤害管线(无敌帧/补差),环境伤害无击退
      addExhaustion(this.survival, DAMAGE_EXHAUSTION);
    }
    // 仙人掌接触伤害(MC 1.12：贴住每 0.5s 掉 1 血，复用 hurtCd 无敌帧防多刻叠加)
    if (touchesCactus(this.player.pos.x, this.player.pos.y, this.player.pos.z, (x, y, z) => this.world.getBlock(x, y, z))) {
      this.hurtPlayer(1, 0, 0, true);
    }
    // 岩浆接触伤害(MC 1.12：4HP/0.5s，复用 hurtCd 无敌帧——每刻都调 hurtPlayer，被 hurtCd 自然节流为 0.5s 一次)
    const feetLava = isLavaId(this.world.getBlock(px, Math.floor(this.player.pos.y), pz));
    const bodyLava = isLavaId(this.world.getBlock(px, Math.floor(this.player.pos.y + 0.9), pz));
    if (feetLava || bodyLava) this.hurtPlayer(4, 0, 0, true); // MC 1.12 岩浆 4HP/0.5s(无击退;窗口内会对仙人掌1点补差,不再被抢无敌帧)
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

  private hurtWindowMax = 0; // 本无敌帧窗口内已受的最高伤害(1.12:窗口内更高伤害要补差值)
  // 玩家被攻击：扣血 + 红屏/手抖 + 沿来源→玩家方向被击退（近战传攻击者坐标，箭传飞行方向）。
  // noKnock=环境伤害(仙人掌/岩浆/摔落/溺水,1.12 无击退——曾经的上抛反而帮玩家逃出岩浆)。
  private hurtPlayer(damage: number, knockDirX: number, knockDirZ: number, noKnock = false): void {
    if (this.creative) return; // 创造：免疫一切伤害（怪/箭/爆炸/仙人掌）
    if (this.hurtCd > 0) {
      // 1.12 hurtResistantTime 规则:窗口内新伤害更高 → 补打差额(修"仙人掌1点抢无敌帧,岩浆4点永不生效")
      if (damage > this.hurtWindowMax) {
        applyDamage(this.survival, damage - this.hurtWindowMax);
        this.hurtWindowMax = damage;
        this.flashHurt();
        if (survivalIsDead(this.survival) && !this.dead) this.die();
      }
      return;
    }
    this.hurtCd = 10; // 0.5s 无敌
    this.hurtWindowMax = damage;
    applyDamage(this.survival, damage);
    this.flashHurt();
    if (!noKnock) {
      const d = Math.hypot(knockDirX, knockDirZ) || 1;
      this.player.kbx = (knockDirX / d) * PLAYER_KNOCK_H;
      this.player.kbz = (knockDirZ / d) * PLAYER_KNOCK_H;
      this.player.vel.y = PLAYER_KNOCK_UP; // 上抛（step 保留 vel.y）
    }
    if (survivalIsDead(this.survival) && !this.dead) this.die();
  }

  private die(): void {
    this.dead = true;
    this.stopDigging();
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
    this.dropRenderer.sync(this.drops, this.entityLight);
    if (this.touch) {
      this.touch.setActive(false);
      window.dispatchEvent(new Event('mineworld:touch-death'));
    } else void document.exitPointerLock(); // 解锁 → main 切到死亡界面
  }

  isDead(): boolean {
    return this.dead;
  }

  // 切换材质风格（设置里改"材质"时由 main 调用）：换图集到方块/手持/掉落物，无需重建网格。
  setTexturePack(pack: TexturePack): void {
    if (pack === this.texturePack) return;
    this.texturePack = pack;
    setIconTexturePack(pack);
    const atlas = loadAtlas(pack);
    this.chunks.setAtlas(atlas);
    this.hand.setAtlas(atlas);
    this.dropRenderer.setAtlas(atlas);
    this.hotbar.render(this.inv);
  }

  // 光影画质（设置里改"光影"时由 main 调用）：真实水面波动/反射/高光 + 云风格(立体↔真实)，无需重建网格。
  setLightingQuality(q: LightingQuality): void {
    this.lightingQuality = q;
    this.chunks.setLightingQuality(q);
    this.hand.setLightingQuality(q);
    this.skyObjects.setLightingQuality(q);
    // off 档立即关闭 god-ray 后处理（释放 RT），避免残留
    if (q === 'off') this.renderer.setGodRays(null);
  }

  // 渲染距离（设置项）：改区块加载半径 + 雾距(far=rd×16 格) + 雾剔除距离。小=雾近、区块少、更流畅。
  setRenderDistance(rd: number): void {
    this.renderDistance = rd;
    const far = rd * 16;
    if (this.normalFog instanceof THREE.Fog) {
      this.normalFog.near = far * 0.72; // MC 雾贴着渲染边缘才起(≈0.75×)；曾 0.5×,半个视距就开始发灰蒙雾
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

  /** 短点/右键先操作明确瞄准到的可交互方块，避免拿食物时无法打开工作台。 */
  private useTargetedBlock(hit: RayHit | null): boolean {
    if (!hit) return false;
    if (this.world.getBlock(hit.x, hit.y, hit.z) === CRAFTING_TABLE) {
      this.openCrafting(3);
      return true;
    }
    if (this.world.getBlock(hit.x, hit.y, hit.z) === FURNACE) {
      this.openFurnace(hit.x, hit.y, hit.z);
      return true;
    }
    return false;
  }

  /** 打火石点在黑曜石边框上时尝试补成传送门；点不到/结构不合法都交给后续普通使用。 */
  private tryIgnitePortal(hit: RayHit | null, heldId: number | null): boolean {
    if (!hit || heldId !== FLINT_AND_STEEL || this.world.getBlock(hit.x, hit.y, hit.z) !== OBSIDIAN) return false;
    const inner = ignitePortal((x, y, z) => this.world.getBlock(x, y, z), hit.x, hit.y, hit.z);
    if (!inner) return false;
    for (const [x, y, z] of inner) this.edit(x, y, z, NETHER_PORTAL);
    return true;
  }

  /** 只开始弓/食物这种需要持续按住的“手持物使用”；返回是否真的进入了使用状态。 */
  private beginHeldItemUse(): boolean {
    const stack = this.inv[this.hotbar.index];
    if (stack && stack.id === BOW && countItem(this.inv, ARROW) > 0) {
      this.drawingBow = true;
      this.bowCharge = 0;
      return true;
    }
    if (stack && stack.count > 0 && isFood(stack.id) && this.survival.food < MAX_FOOD) {
      this.eating = true;
      this.eatProgress = 0;
      return true;
    }
    return false;
  }

  // 右键按下：先使用工作台/熔炉/打火石，再按住食物或弓，最后才放方块。
  private onUseDown(): void {
    const hit = this.rayHit();
    if (this.useTargetedBlock(hit)) return;
    const stack = this.inv[this.hotbar.index];
    if (this.tryIgnitePortal(hit, stack?.id ?? null)) return;
    if (this.beginHeldItemUse()) return;
    this.placeBlock(hit);
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
    if (this.touch) this.touch.setActive(false);
    else document.exitPointerLock(); // 解锁鼠标操作界面（暂停在 pointerlockchange 里被抑制）
  }
  private closeCrafting(): void {
    this.craftingGrid = 0;
    this.invUI.hide();
    if (this.touch) this.touch.setActive(!this.dead);
    else void this.canvas.requestPointerLock(); // 回到游戏
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
    if (this.touch) this.touch.setActive(false);
    else document.exitPointerLock();
  }
  private closeFurnace(): void {
    this.furnaceKey = null;
    this.furnaceUI.hide();
    if (this.touch) this.touch.setActive(!this.dead);
    else void this.canvas.requestPointerLock();
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
      this.stopEating(); // 曾只清进度不清 eating 标志 → 吃饱后按住右键一直 20% 减速+假啃食动画(bug)
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

  /** 桌面准星中心射线。保持原有的玩家眼睛原点，桌面鼠标行为不发生变化。 */
  private crosshairRay(): InteractionRay {
    const origin = { x: this.player.pos.x, y: this.player.pos.y + EYE, z: this.player.pos.z };
    const cy = Math.cos(this.look.yaw);
    const sy = Math.sin(this.look.yaw);
    const cp = Math.cos(this.look.pitch);
    const sp = Math.sin(this.look.pitch);
    return { origin, direction: { x: cy * cp, y: sp, z: sy * cp } };
  }

  /** 选中判定共用同一条射线；草丛也可被选中，水/空气会穿透。 */
  private rayHitFor(aim: InteractionRay): RayHit | null {
    // 选中判定用 isTargetableId(实心 + 草丛)，让草丛能被瞄准/打掉；非 isSolidId 否则射线穿草打到后面方块。
    return raycastVoxel(
      aim.origin,
      aim.direction,
      this.creative ? REACH_CREATIVE : REACH_SURVIVAL,
      (x, y, z) => isTargetableId(this.world.getBlock(x, y, z)),
    );
  }

  private rayHit(): RayHit | null {
    return this.rayHitFor(this.crosshairRay());
  }

  // 记录方块改动到存档 delta
  private edit(x: number, y: number, z: number, id: number): void {
    this.world.setBlock(x, y, z, id);
    this.save.edits[dimEditKey(this.dimension, x, y, z)] = id; // 按维度前缀键存(下界 "nether:" 前缀)，避免跨维度污染
    this.fluidSim.activate(x, y, z); // 让相邻的水流进/退去
    this.chunks.remeshDirty();
    // 本地所有正常挖/放都会经过 edit；联机时把最终方块值发给同一房间。
    this.multiplayer?.sendBlock({ dimension: this.dimension, x, y, z, id });
  }

  /** 应用服务端确认/其他玩家送来的方块改动；不走 edit，避免收到广播后又发回服务器形成循环。 */
  private applyRemoteBlockEdit(edit: BlockEdit): void {
    if (
      (edit.dimension !== 'overworld' && edit.dimension !== 'nether') ||
      !Number.isInteger(edit.x) ||
      !Number.isInteger(edit.y) ||
      !Number.isInteger(edit.z) ||
      !Number.isInteger(edit.id) ||
      edit.y < 0 ||
      edit.y >= CHUNK_H
    )
      return;
    this.save.edits[dimEditKey(edit.dimension, edit.x, edit.y, edit.z)] = edit.id;
    if (edit.dimension !== this.dimension) return;
    // 远处其他玩家可能在几千格外建造；不能为一条网络包同步生成整列区块，否则会把本机卡住。
    // delta 已写入 save，等玩家走近时 buildDimension 的 editHook 会自动贴回这一格。
    if (!this.world.peek(worldToChunk(edit.x), worldToChunk(edit.z))) return;
    this.world.setBlock(edit.x, edit.y, edit.z, edit.id);
    this.fluidSim.activate(edit.x, edit.y, edit.z);
    this.chunks.remeshDirty();
  }

  /** 服务端偶尔校正世界时间，避免有人暂停后与房间里的昼夜越走越远。 */
  private setNetworkWorldTime(worldTime: number): void {
    if (!Number.isFinite(worldTime)) return;
    const normalized = Math.floor(worldTime) % DAY_LENGTH;
    this.worldTime = normalized < 0 ? normalized + DAY_LENGTH : normalized;
  }

  // 只写存档 delta（不动当前世界——给「另一个未加载维度」写方块用：切过去 buildDimension 时应用）。
  private editDim(dim: 'overworld' | 'nether', x: number, y: number, z: number, id: number): void {
    this.save.edits[dimEditKey(dim, x, y, z)] = id;
  }

  // 读「任意维度」某格：当前维度走活的 world；其它维度优先读存档 delta，否则同步生成该列采样一次(仅造门用,量小)。
  // buildChunkCache: Fix1 临时缓存注入——造目的地门期间避免同列重复 generateChunk（每列仅生成一次）。
  private worldAt(
    dim: 'overworld' | 'nether',
    x: number,
    y: number,
    z: number,
    buildChunkCache?: Map<string, ReturnType<typeof generateChunk>>,
  ): number {
    if (dim === this.dimension) return this.world.getBlock(x, y, z);
    const e = this.save.edits[dimEditKey(dim, x, y, z)];
    if (e !== undefined) return e;
    if (y < 0 || y >= CHUNK_H) return 0;
    const cx = worldToChunk(x);
    const cz = worldToChunk(z);
    const cacheKey = `${dim}:${cx},${cz}`;
    let chunk = buildChunkCache?.get(cacheKey);
    if (!chunk) {
      chunk = generateChunk(cx, cz, this.save.seed, dim);
      buildChunkCache?.set(cacheKey, chunk);
    }
    return chunk.get(localCoord(x), y, localCoord(z));
  }

  // 站在传送门里计时；满 4 秒(且不在冷却且 portalArmed)→ 传送到对侧维度。首次去某门时按 1:8 映射造目的地门并双向记链接。
  private tickPortalTravel(): void {
    const pos = this.player.pos;
    const bx = Math.floor(pos.x);
    const by = Math.floor(pos.y);
    const bz = Math.floor(pos.z);
    const inPortal = isNetherPortalId(this.world.getBlock(bx, by, bz));
    this.portalTimer = inPortal ? this.portalTimer + TICK_MS / 1000 : 0; // 离开传送门即清零
    if (!inPortal) this.portalArmed = true; // Fix2: 离开传送门后重新 arm，需再走进去才能触发下一次传送
    if (!inPortal || !this.portalArmed || this.portalCooldown !== 0 || this.portalTimer < 4) return; // 1:1 生存：站门 4 秒才传送

    const target: 'overworld' | 'nether' = this.dimension === 'overworld' ? 'nether' : 'overworld';
    const srcKey = `${this.dimension}:${bx},${by},${bz}`;
    const links = (this.save.portalLinks ??= {});
    let dest = links[srcKey];
    if (!dest) {
      // Fix1: 每次 buildDestinationPortal 前创建本次专用缓存，确保同列 chunk 只 generateChunk 一次，用完即弃。
      const buildChunkCache = new Map<string, ReturnType<typeof generateChunk>>();
      const [tx, tz] = mapPortalCoord(this.dimension, pos.x, pos.z);
      const built = buildDestinationPortal((x, y, z) => this.worldAt(target, x, y, z, buildChunkCache), target, tx, tz);
      buildChunkCache.clear(); // 释放临时缓存，不跨次传送保留
      for (const [x, y, z, id] of built.edits) this.editDim(target, x, y, z, id); // 写进目标维度 edits(前缀键)
      dest = [built.spawn.x, built.spawn.y, built.spawn.z];
      links[srcKey] = dest; // 去程链接
      // 回程链接：目标门落点 → 当前站位（双向，回去复用同一对门）
      links[`${target}:${Math.floor(dest[0])},${Math.floor(dest[1])},${Math.floor(dest[2])}`] = [pos.x, pos.y, pos.z];
    }
    this.portalArmed = false; // Fix2: 传送后 disarm，到达门里必须先走出再走进才能再次触发
    this.portalTimer = 0; // 传送后清零：到达对侧门里需重新站满 4s 才再触发(配合 cooldown 防 AFK 来回弹)
    this.switchDimension(target, { x: dest[0], y: dest[1], z: dest[2] }); // 内部会把 portalCooldown 置 60，防到点立刻弹回
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
      const lv = this.world.getBlock(d.x, d.y, d.z);
      if (lv !== OAK_LEAVES && lv !== SPRUCE_LEAVES) continue; // 已被挖掉/已腐烂(云杉叶也腐烂)
      this.edit(d.x, d.y, d.z, AIR);
      this.particles.push(...spawnBurst(d.x + 0.5, d.y + 0.5, d.z + 0.5, particleColor(lv), 8));
      if (Math.random() < LEAF_APPLE_CHANCE) this.drops.push(spawnDrop(APPLE, d.x, d.y, d.z));
    }
  }

  // 持续挖掘：按住左键，按方块硬度累积进度并显示裂纹；满了就破坏、掉落。
  private updateMining(dt: number): void {
    if (!this.digging) {
      this.crack.hide();
      return;
    }
    // 桌面端按住左键时仍跟随准星；触屏端长按则锁定中央箭头开始时的命中，转镜头不打断进度。
    const hit = this.touchDigging ? this.touchDigHit : this.rayHit();
    if (!hit) {
      this.digProgress = 0;
      this.digTarget = null;
      this.crack.hide();
      // 中央箭头开始时本来就没方块，不能等玩家之后转镜头再换目标开始挖。
      if (this.touchDigging) this.stopDigging();
      return;
    }
    const id = this.world.getBlock(hit.x, hit.y, hit.z);
    // 锁定目标被其他玩家/上一次破坏改成空气时，结束这一次触屏动作；桌面端仍会自然跟着准星找下一个方块。
    if (this.touchDigging && !isTargetableId(id)) {
      this.stopDigging();
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
    if (blockHardness(id) < 0) {
      this.crack.hide();
      return; // 不可破坏（基岩 hardness<0）：生存/创造都挖不动
    }
    const need = this.creative ? 0 : breakTimeMs(id, this.heldTool()) / 1000; // 创造：瞬破
    if (need <= 0) {
      this.mineBlock(hit.x, hit.y, hit.z, id); // 瞬破方块
      if (this.touchDigging) this.stopDigging(); // 触屏一次长按只处理按下时选中的那格
      return;
    }
    this.digProgress += dt;
    if (this.digProgress >= need) {
      this.mineBlock(hit.x, hit.y, hit.z, id);
      if (this.touchDigging) this.stopDigging();
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

  // 重力方块(1.12 沙/砾石)：下方被清空后,把上方连续的沙/砾石整列下移(逐块落到最低空位)。
  private settleFallingAt(x: number, y: number, z: number): void {
    let src = y + 1;
    while (true) {
      const b = this.world.getBlock(x, src, z);
      if (b !== SAND && b !== GRAVEL) break;
      let land = src - 1;
      while (land > 1 && this.world.getBlock(x, land - 1, z) === AIR) land--;
      if (land >= src) break;
      this.edit(x, src, z, AIR);
      this.edit(x, land, z, b);
      src++;
    }
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
    // 冰(1.12)：破坏后若下方非空气 → 该格变水源(创造不变)
    if (id === ICE && !this.creative && this.world.getBlock(x, y - 1, z) !== AIR) {
      this.world.setWater(x, y, z, 8, true, false);
      this.fluidSim.activate(x, y, z);
    }
    // 失去支撑的草丛/火把随之破坏(同 MC：都需下方方块支撑；火把弹出掉落自身)。
    const above = this.world.getBlock(x, y + 1, z);
    if (isPlantId(above) || above === TORCH) {
      this.edit(x, y + 1, z, AIR);
      if (above === TORCH && !this.creative) this.drops.push(spawnDrop(TORCH, x, y + 1, z));
      this.particles.push(...spawnBurst(x + 0.5, y + 1.5, z + 0.5, particleColor(above), 6));
    }
    this.settleFallingAt(x, y, z); // 重力方块(沙/砾石)失去支撑整列下落(1.12)
    this.particles.push(...spawnBurst(x + 0.5, y + 0.5, z + 0.5, particleColor(id), 16)); // 破碎爆一蓬碎屑
    if (drop !== null) this.drops.push(spawnDrop(drop, x, y, z));
    if (!this.creative && id === OAK_LEAVES && Math.random() < LEAF_APPLE_CHANCE) {
      this.drops.push(spawnDrop(APPLE, x, y, z)); // 树叶概率掉苹果（同 MC；创造不掉）
    }
    if (id === OAK_LOG || id === SPRUCE_LOG) this.queueLeafDecay(x, y, z); // 砍掉原木(含云杉) → 失去支撑的树叶排队腐烂
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
    this.dropRenderer.sync(this.drops, this.entityLight);
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
        // MC 1.12 刷怪光照规则：敌对只在【位置光照 ≤7】生成(用区块粗光照网格,天光按昼夜衰减)。
        // 白天地表天光 15 → 自然不刷(修"苦力怕白天生成"——它 sunImmune 只是不怕晒,不等于白天能刷)；
        // 夜里地表 15-11=4 → 刷；矿洞恒暗 → 全天刷；火把(光 ≥8)圈出安全区(1:1 火把防刷怪机制)。
        const spawnLight = (x: number, y: number, z: number): number => {
          const [sky, blk] = this.chunks.lightLevelAt(x, y, z);
          return Math.max(blk, sky - this.skyDarkenNow);
        };
        const cave = spawnHostileCave(kind, px, this.player.pos.y, pz, this.mobRng, this.spawnWorld, this.surfaceY, undefined, undefined, spawnLight).slice(0, room);
        this.mobs.push(...cave);
        room -= cave.length;
        if (room > 0) {
          this.mobs.push(...spawnHostileRing(kind, px, pz, this.mobRng, this.spawnWorld, this.surfaceY, undefined, undefined, spawnLight).slice(0, room));
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
          if (b === BEDROCK || b === OBSIDIAN) continue; // 1.12 高爆炸抗性方块免疫(曾能炸穿世界底板 bug)
          this.world.setBlock(bx, by, bz, AIR);
          this.save.edits[dimEditKey(this.dimension, bx, by, bz)] = AIR; // 坑随存档保留(按维度前缀键)
          this.fluidSim.activate(bx, by, bz); // 让周围的水流进坑
        }
    // 爆坑上缘的沙/砾石失去支撑 → 整列下落(1.12 重力方块)
    for (let dz = -ri; dz <= ri; dz++)
      for (let dx = -ri; dx <= ri; dx++) this.settleFallingAt(cx + dx, cy - ri, cz + dz);
    this.chunks.remeshDirty(); // 一次性重建被波及的脏区块
    this.particles.push(...spawnBurst(center.x, center.y + 0.4, center.z, [0.33, 0.33, 0.33], 30)); // 爆炸烟尘(灰)
    // 距离衰减伤害 + 击退：爆心约满伤、边缘=0（伤害范围略大于炸块半径）
    const p = this.player.pos;
    const ddx = p.x - center.x;
    const ddz = p.z - center.z;
    const dist = Math.hypot(ddx, p.y + 0.9 - center.y, ddz);
    let dmg = Math.round(maxDamage * (1 - dist / (radius + 1.5)));
    if (dmg > 0 && this.explosionBlocked(center, { x: p.x, y: p.y + 0.9, z: p.z })) dmg = Math.round(dmg * 0.3); // 遮挡减伤(近似 1.12 暴露度)
    if (dmg > 0) this.hurtPlayer(dmg, ddx, ddz);
    // 1.12 爆炸波及所有实体(曾只伤玩家：苦力怕炸不死旁边的僵尸/牛)
    for (let i = this.mobs.length - 1; i >= 0; i--) {
      const mob = this.mobs[i];
      const mdx = mob.pos.x - center.x;
      const mdz = mob.pos.z - center.z;
      const md = Math.hypot(mdx, mob.pos.y + 0.5 - center.y, mdz);
      let mdmg = Math.round(maxDamage * (1 - md / (radius + 1.5)));
      if (mdmg > 0 && this.explosionBlocked(center, { x: mob.pos.x, y: mob.pos.y + 0.5, z: mob.pos.z })) mdmg = Math.round(mdmg * 0.3);
      if (mdmg <= 0) continue;
      const res = hurtMob(mob, mdmg, { x: mdx, z: mdz }, this.mobRng);
      Object.assign(mob, res.mob);
      for (const ev of res.events) {
        if (ev.kind === 'drops') {
          for (const stack of ev.items)
            this.drops.push(spawnDrop(stack.id, Math.floor(ev.pos.x), Math.floor(ev.pos.y), Math.floor(ev.pos.z), Math.random, stack.count));
        } else if (ev.kind === 'death') {
          this.mobs.splice(i, 1);
        }
      }
    }
  }

  // 爆心到目标的视线是否被实心方块遮挡(8 步采样,近似 1.12 爆炸暴露度:全遮挡伤害大减)。
  private explosionBlocked(a: { x: number; y: number; z: number }, b: { x: number; y: number; z: number }): boolean {
    const STEPS = 8;
    for (let i = 1; i < STEPS; i++) {
      const t = i / STEPS;
      const sx = Math.floor(a.x + (b.x - a.x) * t);
      const sy = Math.floor(a.y + (b.y - a.y) * t);
      const sz = Math.floor(a.z + (b.z - a.z) * t);
      if (isSolidId(this.world.getBlock(sx, sy, sz))) return true;
    }
    return false;
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

  /**
   * 指定射线命中的最近生物（攻击距离内）。不传时就是桌面准星；触屏长按传入按下点的相机射线。
   */
  private mobUnderRay(aim: InteractionRay = this.crosshairRay()): Mob | null {
    const { origin, direction } = aim;
    const { x: ox, y: oy, z: oz } = origin;
    const { x: dx, y: dy, z: dz } = direction;
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
  private attackMob(mob: Mob, aim?: InteractionRay): void {
    this.hand.swing();
    const held = this.inv[this.hotbar.index];
    const dmg = mobDamage(held ? held.id : null);
    // MC：攻击生物消耗耐久——剑每击 −1，其它工具当武器用每击 −2（非工具/空手不掉）
    const wtd = held ? toolOf(held.id) : null;
    if (wtd) {
      for (let n = wtd.kind === 'sword' ? 1 : 2; n > 0; n--) damageTool(this.inv, this.hotbar.index, wtd.maxDurability);
      this.hotbar.render(this.inv);
    }
    // 触屏点画面边缘攻击时，击退方向也跟随该点的射线；竖直朝上/下时退回当前朝向。
    const dir = aim?.direction;
    const horizontal = dir ? Math.hypot(dir.x, dir.z) : 0;
    const knockX = dir && horizontal > 1e-6 ? dir.x / horizontal : Math.cos(this.look.yaw);
    const knockZ = dir && horizontal > 1e-6 ? dir.z / horizontal : Math.sin(this.look.yaw);
    const res = hurtMob(mob, dmg, { x: knockX, z: knockZ }, this.mobRng);
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
  private placeBlock(hit: RayHit | null = this.rayHit()): void {
    const sel = this.hotbar.index;
    const stack = this.inv[sel];
    if (!stack || stack.count <= 0 || stack.id >= 256) return; // 空手或手持物品(食物/工具/棍等不可放置)
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

  // 实体环境光照(生物/掉落物/手持共用)：采区块粗光照网格 → 亮度系数(与方块 shader 同曲线)。
  //   skyDarkenNow 由 updateDayNight 每帧刷新(夜里天光递减)。
  private skyDarkenNow = 0;
  private readonly entityLight = (x: number, y: number, z: number): number =>
    this.chunks.brightnessAt(x, y, z, this.skyDarkenNow);

  // 昼夜更替：按世界时间套用天空渐变、雾色、世界亮度着色。水下时雾被 updateWater 换成蓝雾，
  //   这里只改“正常雾”的颜色，故两者不冲突。
  private updateDayNight(): void {
    const s = skyStateAt(this.worldTime, this.dimension);
    // 晨昏暖染：太阳贴近地平线(仰角 -0.15..0.3)时,穹顶太阳侧染暖、背侧偏冷。下界无太阳=0。
    const sunPhi = (this.worldTime / DAY_LENGTH) * Math.PI * 2;
    const sunElev = Math.sin(sunPhi);
    let warmth = 0;
    if (this.dimension === 'overworld' && sunElev > -0.15) {
      warmth = Math.max(0, 1 - Math.abs(sunElev) / 0.3) * Math.min(1, (sunElev + 0.15) / 0.15);
    }
    this.renderer.setSkyColors(s.skyTop, s.skyHorizon, Math.atan2(0.1, Math.cos(sunPhi)), warmth);
    const fog = this.normalFog;
    if (fog) fog.color.setRGB(s.skyHorizon[0], s.skyHorizon[1], s.skyHorizon[2], THREE.SRGBColorSpace);
    // 天光色相 → uSkyTint(夜偏蓝)，火把照亮处不变蓝。
    const t = s.worldTint;
    const mx = Math.max(t[0], t[1], t[2], 0.001);
    // 环境天光只保留天空本身的色相；暖黄色只交给 terrain shader 的太阳直射层。
    // 这样受光面暖、阴影冷，不会把整片雪地/天空一起染黄后又互相抵消。
    this.chunks.setTint([t[0] / mx, t[1] / mx, t[2] / mx]);
    // 夜晚走 MC 1:1 skyDarken(0..11)：露天天光 15-11=4，半夜偏暗但看得见(不再近黑)。
    const darken = skyDarkenAt(this.worldTime);
    // 光影档保留更可读的冷色月夜（最大约 9.5 而不是 11）；洞穴仍因无天光保持黑暗。
    const renderedDarken = this.lightingQuality === 'off' ? darken : darken * 0.86;
    this.skyDarkenNow = renderedDarken; // 供实体环境光照(entityLight)用
    this.chunks.setSkyDarken(renderedDarken);
    this.chunks.setSkyMul(1 - darken / 11); // 仅供水面太阳粼光强度(白天 1、夜 0)
    // 光影水面：反射色取地平线天空色(黄昏偏橙/夜里偏暗)；太阳方向随时间走(驱动镜面高光)。
    this.chunks.setSkyReflection(s.skyHorizon, s.skyTop);
    const phi = (this.worldTime / DAY_LENGTH) * Math.PI * 2; // 正午最高、夜里在地平线下→无高光
    this.chunks.setSunDir(Math.cos(phi), Math.sin(phi), 0.1); // z 同 SkyObjects/updateSun(0.1)，粼光对准太阳盘
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

    // 太阳世界方向（同 SkyObjects.update & ChunkMeshManager.updateSun 的公式，z 分量三处必须一致=0.28，
    // 否则 god-ray 光束中心与可见太阳盘错位）。
    const phi = (this.worldTime / DAY_LENGTH) * Math.PI * 2;
    const sx = Math.cos(phi);
    const sy = Math.sin(phi); // Y > 0 = 地平线以上
    const sz = 0.1; // 同 SkyObjects/updateSun：MC 1.12 过天顶轨道
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
    if (this.dimension === 'overworld' && sunUp > 0 && facing > 0 && onScreen) {
      // 平滑渐入：太阳刚过地平线时强度 0，正午偏强。历史：0.6=白纱(当时光晕150+泛光1.0+×1.15 齐叠)
      // →0.32 用户嫌淡 →0.45 仍嫌淡 →0.6(白纱三因子已各自治理,现在 0.6 只剩光束本体)。
      intensity = Math.min(0.6, sunUp * 2.6);
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
    // 光影档由全屏深度重建真实水中光程；若再叠 16 格的旧蓝雾，会把水下压成
    // 一整块纯蓝。旧雾只留给 off 档，高档让 Beer-Lambert 吸收决定能见度。
    this.renderer.scene.fog =
      under && this.lightingQuality === 'off' ? this.underFog : this.normalFog;
    this.renderer.setUnderwater(under);
    this.chunks.setCameraUnderwater(under);
    this.hand.setUnderwater(under);
    // 关闭光影时没有 HDR 后处理，才保留旧遮罩作兼容；标准/高档由深度吸收完成水下效果。
    if (this.underwaterEl)
      this.underwaterEl.style.display =
        under && this.lightingQuality === 'off' ? 'block' : 'none';
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
