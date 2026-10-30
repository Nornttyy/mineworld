// 面方向顺序与 mesher 的 DIRS、FACE_SHADE 一致：0=+X 1=-X 2=+Y(上) 3=-Y(下) 4=+Z 5=-Z
export enum Face {
  PosX,
  NegX,
  PosY,
  NegY,
  PosZ,
  NegZ,
}

// atlas.png 的格子索引（与 tools/textures/gen_textures.py 的 ATLAS_ORDER 一致）
// Existing slots 0..47 stay fixed; modern terrain materials append from slot 48.
export const ATLAS_TILES = {
  stone: 0,
  dirt: 1,
  grass_top: 2,
  grass_side: 3,
  cobblestone: 4,
  sand: 5,
  oak_log_top: 6,
  oak_log_side: 7,
  oak_planks: 8,
  coal_ore: 9,
  water: 10,
  oak_leaves: 11,
  crafting_table_top: 12,
  crafting_table_side: 13,
  iron_ore: 14,
  furnace_front: 15,
  gravel: 16,
  grass_plant: 17,
  // 下界方块图集索引 (18-25)
  obsidian: 18,
  netherrack: 19,
  soul_sand: 20,
  glowstone: 21,
  nether_quartz_ore: 22,
  lava: 23,
  bedrock: 24,
  nether_portal: 25,
  // 沙漠/雪原方块图集索引 (26-31)
  sandstone: 26,
  cactus: 27,
  ice: 28,
  snow: 29,
  spruce_log: 30,
  spruce_leaves: 31,
  // 合成储存方块图集索引 (32-34)：背包/工作台配方产物（图集第 9 行）
  coal_block: 32,
  iron_block: 33,
  quartz_block: 34,
  // 1.12 生存矿物进度（图集第 10 行）
  diamond_ore: 35,
  diamond_block: 36,
  granite: 37,
  diorite: 38,
  andesite: 39,
  bricks: 40,
  mossy_cobblestone: 41,
  red_sand: 42,
  birch_log_top: 43,
  birch_log_side: 44,
  birch_leaves: 45,
  furnace_top: 46,
  furnace_side: 47,
  deepslate: 48,
  deepslate_top: 49,
  cobbled_deepslate: 50,
  tuff: 51,
  calcite: 52,
  packed_ice: 53,
  terracotta: 54,
  white_terracotta: 55,
  orange_terracotta: 56,
  magenta_terracotta: 57,
  light_blue_terracotta: 58,
  yellow_terracotta: 59,
  lime_terracotta: 60,
  pink_terracotta: 61,
  gray_terracotta: 62,
  light_gray_terracotta: 63,
  cyan_terracotta: 64,
  purple_terracotta: 65,
  blue_terracotta: 66,
  brown_terracotta: 67,
  green_terracotta: 68,
  red_terracotta: 69,
  black_terracotta: 70,
  coarse_dirt: 71,
  podzol_top: 72,
  podzol_side: 73,
  mycelium_top: 74,
  mycelium_side: 75,
  mud: 76,
  red_sandstone: 77,
  red_sandstone_top: 78,
  red_sandstone_bottom: 79,
  powder_snow: 80,
  cinnabar: 81,
  sulfur: 82,
  gold_ore: 83,
  deepslate_coal_ore: 84,
  deepslate_iron_ore: 85,
  deepslate_gold_ore: 86,
  deepslate_diamond_ore: 87,

  poppy: 88,
  dandelion: 89,
  blue_orchid: 90,
  allium: 91,
  azure_bluet: 92,
  red_tulip: 93,
  orange_tulip: 94,
  white_tulip: 95,
  pink_tulip: 96,
  oxeye_daisy: 97,
  cornflower: 98,
  lily_of_the_valley: 99,
  fern: 100,
  dead_bush: 101,
} as const;
const T = ATLAS_TILES;

export interface BlockDef {
  id: number;
  name: string;
  solid: boolean;
  transparent: boolean;
  faces: [number, number, number, number, number, number]; // +X,-X,+Y,-Y,+Z,-Z 的 tile 索引
  hardness: number; // MC Java 硬度（秒基准）；0=瞬破，越大越慢
  drop: number | null; // 用对工具挖掉后掉落的方块/物品 id；null=不掉落
  needsTool: boolean; // 是否需要工具(镐)才能采集：手挖会 ×5 耗时且不掉落（石/圆石/矿）
  tool: 'pickaxe' | 'axe' | 'shovel' | null; // 对口工具：用它挖更快(且 needsTool 时才掉落)
  minTier?: number; // 采集所需最低工具等级（默认 1=木）。铁矿=2 → 需石镐才能挖出。
  light?: number; // 方块自发光等级 0..15（火把=14），供方块光传播。0/缺省=不发光。
}

// 工具描述（由 items.ts 提供，这里只读其结构，避免反向依赖）
export interface HeldTool {
  kind: 'pickaxe' | 'axe' | 'shovel' | 'sword' | 'hoe';
  tier: number;
  speed: number;
}

const all = (t: number): BlockDef['faces'] => [t, t, t, t, t, t];
// 柱状方块：侧面一种、顶/底各一种（顺序 +X,-X,+Y(top),-Y(bottom),+Z,-Z）
const column = (side: number, top: number, bottom: number): BlockDef['faces'] => [
  side,
  side,
  top,
  bottom,
  side,
  side,
];

// 硬度/掉落取自 MC Java 真实值。手挖耗时 = 硬度 ×(needsTool?5:1.5) 秒（见 breakTimeMs）。
// needsTool(石/圆石/矿)：手挖 ×5 且不掉落（要镐）。草→土、草方块/树叶手挖不掉(需精准采集/剪刀)。
const COAL_ITEM = 258; // items.ts 的 COAL；煤矿用镐挖掉煤(物品)
const RAW_IRON_ITEM = 319;
const RAW_GOLD_ITEM = 320;
const DIAMOND_ITEM = 296; // items.ts 的 DIAMOND；避免 blocks/items 双向依赖
export const BLOCKS: BlockDef[] = [
  { id: 0, name: 'air', solid: false, transparent: true, faces: all(0), hardness: 0, drop: null, needsTool: false, tool: null },
  { id: 1, name: 'stone', solid: true, transparent: false, faces: all(T.stone), hardness: 1.5, drop: 4, needsTool: true, tool: 'pickaxe' }, // 1.12 石头硬度 1.5:徒手 7.5s(不掉),木镐 1.15s
  { id: 2, name: 'dirt', solid: true, transparent: false, faces: all(T.dirt), hardness: 0.5, drop: 2, needsTool: false, tool: 'shovel' },
  {
    id: 3,
    name: 'grass',
    solid: true,
    transparent: false,
    faces: column(T.grass_side, T.grass_top, T.dirt),
    hardness: 0.6,
    drop: 2, // 草方块掉土
    needsTool: false,
    tool: 'shovel',
  },
  {
    id: 4,
    name: 'cobblestone',
    solid: true,
    transparent: false,
    faces: all(T.cobblestone),
    hardness: 2.0,
    drop: 4,
    needsTool: true,
    tool: 'pickaxe',
  },
  { id: 5, name: 'sand', solid: true, transparent: false, faces: all(T.sand), hardness: 0.5, drop: 5, needsTool: false, tool: 'shovel' },
  {
    id: 6,
    name: 'oak_log',
    solid: true,
    transparent: false,
    faces: column(T.oak_log_side, T.oak_log_top, T.oak_log_top),
    hardness: 2.0, // 1.12 原木硬度 2:徒手 3s,斧更快
    drop: 6,
    needsTool: false, // 木头手挖即可采集(斧只是更快)
    tool: 'axe',
  },
  {
    id: 7,
    name: 'oak_planks',
    solid: true,
    transparent: false,
    faces: all(T.oak_planks),
    hardness: 2.0,
    drop: 7,
    needsTool: false,
    tool: 'axe',
  },
  {
    id: 8,
    name: 'coal_ore',
    solid: true,
    transparent: false,
    faces: all(T.coal_ore),
    hardness: 3.0,
    drop: COAL_ITEM, // 用镐挖 → 掉煤(物品)
    needsTool: true,
    tool: 'pickaxe',
  },
  // 水：非实心（可进入）、半透明（渲染单独成批）；不可破坏
  { id: 9, name: 'water', solid: false, transparent: true, faces: all(T.water), hardness: 0, drop: null, needsTool: false, tool: null },
  // 树叶：实心(可站)但非不透明(能透看)，渲染走镂空；手挖很快但不掉落
  {
    id: 10,
    name: 'oak_leaves',
    solid: true,
    transparent: true,
    faces: all(T.oak_leaves),
    hardness: 0.2,
    drop: null,
    needsTool: false,
    tool: null,
  },
  // 工作台：木质，斧更快；右键打开 3×3 合成（游戏层处理）。专属贴图：顶=田字工作格，侧=工具剪影。
  {
    id: 11,
    name: 'crafting_table',
    solid: true,
    transparent: false,
    faces: column(T.crafting_table_side, T.crafting_table_top, T.oak_planks),
    hardness: 2.5,
    drop: 11,
    needsTool: false,
    tool: 'axe',
  },
  // 铁矿：石中矿脉，需【石镐及以上】采集；挖掉得铁矿石方块（冶炼成锭待后续里程碑）。MC 硬度 3。
  {
    id: 12,
    name: 'iron_ore',
    solid: true,
    transparent: false,
    faces: all(T.iron_ore),
    hardness: 3.0,
    drop: RAW_IRON_ITEM,
    needsTool: true,
    tool: 'pickaxe',
    minTier: 2, // 木镐挖不出来（慢且不掉），需石镐(tier≥2)
  },
  // 熔炉：沿用官方未旋转模型，炉口固定朝 north/-Z；本项目尚无放置朝向状态。
  // 官方 models/block/orientable_with_bottom.json: north=#front，其余水平面=#side。
  {
    id: 13,
    name: 'furnace',
    solid: true,
    transparent: false,
    faces: [T.furnace_side, T.furnace_side, T.furnace_top, T.furnace_top, T.furnace_side, T.furnace_front],
    hardness: 3.5,
    drop: 13,
    needsTool: true,
    tool: 'pickaxe',
  },
  // 火把：非实心(可穿过)、非阻光(不挡天光/视线)、瞬破；自发光 14 照亮四周。
  // 无图集贴图——由 mesher 特判画成"暖色小十字"自发光网格(故 faces 仅占位)。配方=煤+棍→4(已在 recipes)。
  {
    id: 14,
    name: 'torch',
    solid: false,
    transparent: true,
    faces: all(0),
    hardness: 0,
    drop: 14,
    needsTool: false,
    tool: null,
    light: 14,
  },
  // 砂砾：地下成团生成，锹更快；挖掉默认掉自身，小概率(见 Game)改掉燧石。
  {
    id: 15,
    name: 'gravel',
    solid: true,
    transparent: false,
    faces: all(T.gravel),
    hardness: 0.6, // MC 砂砾 0.6
    drop: 15, // 默认掉自身
    needsTool: false,
    tool: 'shovel',
  },
  // 草丛 / 长草：非实心(可穿过)、镂空 cross billboard(mesher 特判)、瞬破不掉落、可被放置覆盖。
  // 装饰用，世界生成时撒在草地上。faces 仅占位(实际由 mesher 画成交叉竖片)。
  {
    id: 16,
    name: 'grass_plant',
    solid: false,
    transparent: true,
    faces: all(T.grass_plant),
    hardness: 0,
    drop: null,
    needsTool: false,
    tool: null,
  },
  {
    id: 17,
    name: 'tall_grass',
    solid: false,
    transparent: true,
    faces: all(T.grass_plant),
    hardness: 0,
    drop: null,
    needsTool: false,
    tool: null,
  },
  // ── 下界方块 (18-25) ─────────────────────────────────────────────────────
  { id: 18, name: 'obsidian', solid: true, transparent: false, faces: all(T.obsidian), hardness: 50, drop: 18, needsTool: true, tool: 'pickaxe', minTier: 4 }, // 1.12：硬度50，必须钻石镐（tier 4）采集
  { id: 19, name: 'netherrack', solid: true, transparent: false, faces: all(T.netherrack), hardness: 0.4, drop: 19, needsTool: true, tool: 'pickaxe' }, // MC:地狱岩需镐才掉
  { id: 20, name: 'soul_sand', solid: true, transparent: false, faces: all(T.soul_sand), hardness: 0.5, drop: 20, needsTool: false, tool: 'shovel' },
  { id: 21, name: 'glowstone', solid: true, transparent: false, faces: all(T.glowstone), hardness: 0.3, drop: 21, needsTool: false, tool: null, light: 15 },
  { id: 22, name: 'nether_quartz_ore', solid: true, transparent: false, faces: all(T.nether_quartz_ore), hardness: 3, drop: 295 /* NETHER_QUARTZ item(Task2) */, needsTool: true, tool: 'pickaxe', minTier: 1 },
  { id: 23, name: 'lava', solid: false, transparent: true, faces: all(T.lava), hardness: 100, drop: null, needsTool: false, tool: null, light: 15 },
  { id: 24, name: 'bedrock', solid: true, transparent: false, faces: all(T.bedrock), hardness: -1, drop: null, needsTool: false, tool: null },
  { id: 25, name: 'nether_portal', solid: false, transparent: true, faces: all(T.nether_portal), hardness: -1, drop: null, needsTool: false, tool: null, light: 11 },
  // ── 沙漠/雪原方块 (26-31) ────────────────────────────────────────────────
  // 沙石：沙漠沙层之下，镐采。MC 硬度 0.8。
  { id: 26, name: 'sandstone', solid: true, transparent: false, faces: all(T.sandstone), hardness: 0.8, drop: 26, needsTool: true, tool: 'pickaxe' },
  // 仙人掌：沙上生长，徒手可采；接触伤害(游戏层处理)。MC 硬度 0.4。
  // transparent:false → isOpaque=true → 走 opaque 渲染批(贴图为不透明纯绿、无 alpha)；
  // 若设 transparent:true 则不属任何 mesher 分支 → 不可见(曾踩)。叠柱内部面也能正确剔除。
  { id: 27, name: 'cactus', solid: true, transparent: false, faces: all(T.cactus), hardness: 0.4, drop: 27, needsTool: false, tool: null },
  // 冰：雪原水面冻结；打滑(物理层)；MC 硬度 0.5，无精准采集→不掉(drop:null)。
  // ⚠️ transparent 必须 false：true 时 isOpaque=false 且非 cutout/water/plant → 不进任何网格分支 → 冰整块不渲染/有缝(用户报"连接不流畅")。
  // false → 进不透明批、冰-冰互相剔面 = 平滑连接的冰面(渲成实心冰蓝块,牺牲透视换正确渲染)。
  { id: 28, name: 'ice', solid: true, transparent: false, faces: all(T.ice), hardness: 0.5, drop: null, needsTool: false, tool: 'pickaxe' }, // MC:任何工具/徒手都能破冰(无精准采集→drop:null);needsTool 应为 false
  // 雪层：贴地薄装饰，非实心(可穿)、瞬破不掉(暂无雪球)；mesher 画薄四边形。
  { id: 29, name: 'snow_layer', solid: false, transparent: true, faces: all(T.snow), hardness: 0, drop: null, needsTool: false, tool: 'shovel' },
  // 云杉原木：同橡木原木数值，斧更快。顶/底复用 oak_log_top。
  { id: 30, name: 'spruce_log', solid: true, transparent: false, faces: column(T.spruce_log, T.oak_log_top, T.oak_log_top), hardness: 2.0, drop: 30, needsTool: false, tool: 'axe' },
  // 云杉树叶：同橡树叶(镂空、手挖快不掉)。
  { id: 31, name: 'spruce_leaves', solid: true, transparent: true, faces: all(T.spruce_leaves), hardness: 0.2, drop: null, needsTool: false, tool: null },
  // ── 合成储存方块 (32-34)：把零散资源压成一格存储，背包/工作台配方产物 ───────────
  // 煤炭块：9 煤合成(可逆)；镐采掉自身。MC 硬度 5，木镐即可。
  { id: 32, name: 'coal_block', solid: true, transparent: false, faces: all(T.coal_block), hardness: 5, drop: 32, needsTool: true, tool: 'pickaxe' },
  // 铁块：9 铁锭合成(可逆)；需石镐及以上(同 MC)。MC 硬度 5。
  { id: 33, name: 'iron_block', solid: true, transparent: false, faces: all(T.iron_block), hardness: 5, drop: 33, needsTool: true, tool: 'pickaxe', minTier: 2 },
  // 石英块：4 下界石英合成；镐采掉自身。MC 硬度 0.8。
  { id: 34, name: 'quartz_block', solid: true, transparent: false, faces: all(T.quartz_block), hardness: 0.8, drop: 34, needsTool: true, tool: 'pickaxe' },
  // ── 钻石进度 (35-36)：铁镐挖出钻石，钻石镐开启黑曜石/下界链 ──────────────────
  // 钻石矿：MC 1.12 硬度 3，铁镐及以上可采，默认掉 1 颗钻石（时运/经验后续由掉落表扩展）。
  {
    id: 35,
    name: 'diamond_ore',
    solid: true,
    transparent: false,
    faces: all(T.diamond_ore),
    hardness: 3.0,
    drop: DIAMOND_ITEM,
    needsTool: true,
    tool: 'pickaxe',
    minTier: 3,
  },
  // 钻石块：9 钻石压缩存储，铁镐及以上才能完整采集。
  {
    id: 36,
    name: 'diamond_block',
    solid: true,
    transparent: false,
    faces: all(T.diamond_block),
    hardness: 5.0,
    drop: 36,
    needsTool: true,
    tool: 'pickaxe',
    minTier: 3,
  },
  // ── 1.12 扩展建材与群系方块 (37-44) ─────────────────────────────────────
  { id: 37, name: 'granite', solid: true, transparent: false, faces: all(T.granite), hardness: 1.5, drop: 37, needsTool: true, tool: 'pickaxe' },
  { id: 38, name: 'diorite', solid: true, transparent: false, faces: all(T.diorite), hardness: 1.5, drop: 38, needsTool: true, tool: 'pickaxe' },
  { id: 39, name: 'andesite', solid: true, transparent: false, faces: all(T.andesite), hardness: 1.5, drop: 39, needsTool: true, tool: 'pickaxe' },
  { id: 40, name: 'bricks', solid: true, transparent: false, faces: all(T.bricks), hardness: 2, drop: 40, needsTool: true, tool: 'pickaxe' },
  { id: 41, name: 'mossy_cobblestone', solid: true, transparent: false, faces: all(T.mossy_cobblestone), hardness: 2, drop: 41, needsTool: true, tool: 'pickaxe' },
  { id: 42, name: 'red_sand', solid: true, transparent: false, faces: all(T.red_sand), hardness: 0.5, drop: 42, needsTool: false, tool: 'shovel' },
  {
    id: 43,
    name: 'birch_log',
    solid: true,
    transparent: false,
    faces: column(T.birch_log_side, T.birch_log_top, T.birch_log_top),
    hardness: 2,
    drop: 43,
    needsTool: false,
    tool: 'axe',
  },
  { id: 44, name: 'birch_leaves', solid: true, transparent: true, faces: all(T.birch_leaves), hardness: 0.2, drop: null, needsTool: false, tool: null },
  // Modern terrain IDs append only; IDs 0..44 remain save-compatible.
  { id: 45, name: 'deepslate', solid: true, transparent: false, faces: column(T.deepslate, T.deepslate_top, T.deepslate_top), hardness: 3, drop: 46, needsTool: true, tool: 'pickaxe' },
  { id: 46, name: 'cobbled_deepslate', solid: true, transparent: false, faces: all(T.cobbled_deepslate), hardness: 3.5, drop: 46, needsTool: true, tool: 'pickaxe' },
  { id: 47, name: 'tuff', solid: true, transparent: false, faces: all(T.tuff), hardness: 1.5, drop: 47, needsTool: true, tool: 'pickaxe' },
  { id: 48, name: 'calcite', solid: true, transparent: false, faces: all(T.calcite), hardness: 0.75, drop: 48, needsTool: true, tool: 'pickaxe' },
  { id: 49, name: 'snow_block', solid: true, transparent: false, faces: all(T.snow), hardness: 0.2, drop: null, needsTool: false, tool: 'shovel' },
  { id: 50, name: 'packed_ice', solid: true, transparent: false, faces: all(T.packed_ice), hardness: 0.5, drop: null, needsTool: false, tool: 'pickaxe' },
  { id: 51, name: 'terracotta', solid: true, transparent: false, faces: all(T.terracotta), hardness: 1.25, drop: 51, needsTool: true, tool: 'pickaxe' },
  { id: 52, name: 'white_terracotta', solid: true, transparent: false, faces: all(T.white_terracotta), hardness: 1.25, drop: 52, needsTool: true, tool: 'pickaxe' },
  { id: 53, name: 'orange_terracotta', solid: true, transparent: false, faces: all(T.orange_terracotta), hardness: 1.25, drop: 53, needsTool: true, tool: 'pickaxe' },
  { id: 54, name: 'magenta_terracotta', solid: true, transparent: false, faces: all(T.magenta_terracotta), hardness: 1.25, drop: 54, needsTool: true, tool: 'pickaxe' },
  { id: 55, name: 'light_blue_terracotta', solid: true, transparent: false, faces: all(T.light_blue_terracotta), hardness: 1.25, drop: 55, needsTool: true, tool: 'pickaxe' },
  { id: 56, name: 'yellow_terracotta', solid: true, transparent: false, faces: all(T.yellow_terracotta), hardness: 1.25, drop: 56, needsTool: true, tool: 'pickaxe' },
  { id: 57, name: 'lime_terracotta', solid: true, transparent: false, faces: all(T.lime_terracotta), hardness: 1.25, drop: 57, needsTool: true, tool: 'pickaxe' },
  { id: 58, name: 'pink_terracotta', solid: true, transparent: false, faces: all(T.pink_terracotta), hardness: 1.25, drop: 58, needsTool: true, tool: 'pickaxe' },
  { id: 59, name: 'gray_terracotta', solid: true, transparent: false, faces: all(T.gray_terracotta), hardness: 1.25, drop: 59, needsTool: true, tool: 'pickaxe' },
  { id: 60, name: 'light_gray_terracotta', solid: true, transparent: false, faces: all(T.light_gray_terracotta), hardness: 1.25, drop: 60, needsTool: true, tool: 'pickaxe' },
  { id: 61, name: 'cyan_terracotta', solid: true, transparent: false, faces: all(T.cyan_terracotta), hardness: 1.25, drop: 61, needsTool: true, tool: 'pickaxe' },
  { id: 62, name: 'purple_terracotta', solid: true, transparent: false, faces: all(T.purple_terracotta), hardness: 1.25, drop: 62, needsTool: true, tool: 'pickaxe' },
  { id: 63, name: 'blue_terracotta', solid: true, transparent: false, faces: all(T.blue_terracotta), hardness: 1.25, drop: 63, needsTool: true, tool: 'pickaxe' },
  { id: 64, name: 'brown_terracotta', solid: true, transparent: false, faces: all(T.brown_terracotta), hardness: 1.25, drop: 64, needsTool: true, tool: 'pickaxe' },
  { id: 65, name: 'green_terracotta', solid: true, transparent: false, faces: all(T.green_terracotta), hardness: 1.25, drop: 65, needsTool: true, tool: 'pickaxe' },
  { id: 66, name: 'red_terracotta', solid: true, transparent: false, faces: all(T.red_terracotta), hardness: 1.25, drop: 66, needsTool: true, tool: 'pickaxe' },
  { id: 67, name: 'black_terracotta', solid: true, transparent: false, faces: all(T.black_terracotta), hardness: 1.25, drop: 67, needsTool: true, tool: 'pickaxe' },
  { id: 68, name: 'coarse_dirt', solid: true, transparent: false, faces: all(T.coarse_dirt), hardness: 0.5, drop: 68, needsTool: false, tool: 'shovel' },
  { id: 69, name: 'podzol', solid: true, transparent: false, faces: column(T.podzol_side, T.podzol_top, T.dirt), hardness: 0.5, drop: 2, needsTool: false, tool: 'shovel' },
  { id: 70, name: 'mycelium', solid: true, transparent: false, faces: column(T.mycelium_side, T.mycelium_top, T.dirt), hardness: 0.5, drop: 2, needsTool: false, tool: 'shovel' },
  { id: 71, name: 'mud', solid: true, transparent: false, faces: all(T.mud), hardness: 0.5, drop: 71, needsTool: false, tool: 'shovel' },
  { id: 72, name: 'red_sandstone', solid: true, transparent: false, faces: column(T.red_sandstone,T.red_sandstone_top,T.red_sandstone_bottom), hardness: 0.8, drop: 72, needsTool: true, tool: 'pickaxe' },
  { id: 73, name: 'powder_snow', solid: true, transparent: false, faces: all(T.powder_snow), hardness: 0.25, drop: null, needsTool: false, tool: 'shovel' },
  { id: 74, name: 'cinnabar', solid: true, transparent: false, faces: all(T.cinnabar), hardness: 1.5, drop: 74, needsTool: true, tool: 'pickaxe' },
  { id: 75, name: 'sulfur', solid: true, transparent: false, faces: all(T.sulfur), hardness: 1.5, drop: 75, needsTool: true, tool: 'pickaxe' },
  { id: 76, name: 'gold_ore', solid: true, transparent: false, faces: all(T.gold_ore), hardness: 3, drop: RAW_GOLD_ITEM, needsTool: true, tool: 'pickaxe', minTier: 3 },
  { id: 77, name: 'deepslate_coal_ore', solid: true, transparent: false, faces: all(T.deepslate_coal_ore), hardness: 4.5, drop: COAL_ITEM, needsTool: true, tool: 'pickaxe', minTier: 1 },
  { id: 78, name: 'deepslate_iron_ore', solid: true, transparent: false, faces: all(T.deepslate_iron_ore), hardness: 4.5, drop: RAW_IRON_ITEM, needsTool: true, tool: 'pickaxe', minTier: 2 },
  { id: 79, name: 'deepslate_gold_ore', solid: true, transparent: false, faces: all(T.deepslate_gold_ore), hardness: 4.5, drop: RAW_GOLD_ITEM, needsTool: true, tool: 'pickaxe', minTier: 3 },
  { id: 80, name: 'deepslate_diamond_ore', solid: true, transparent: false, faces: all(T.deepslate_diamond_ore), hardness: 4.5, drop: DIAMOND_ITEM, needsTool: true, tool: 'pickaxe', minTier: 3 },
  { id: 81, name: 'poppy', solid: false, transparent: true, faces: all(T.poppy), hardness: 0, drop: 81, needsTool: false, tool: null },
  { id: 82, name: 'dandelion', solid: false, transparent: true, faces: all(T.dandelion), hardness: 0, drop: 82, needsTool: false, tool: null },
  { id: 83, name: 'blue_orchid', solid: false, transparent: true, faces: all(T.blue_orchid), hardness: 0, drop: 83, needsTool: false, tool: null },
  { id: 84, name: 'allium', solid: false, transparent: true, faces: all(T.allium), hardness: 0, drop: 84, needsTool: false, tool: null },
  { id: 85, name: 'azure_bluet', solid: false, transparent: true, faces: all(T.azure_bluet), hardness: 0, drop: 85, needsTool: false, tool: null },
  { id: 86, name: 'red_tulip', solid: false, transparent: true, faces: all(T.red_tulip), hardness: 0, drop: 86, needsTool: false, tool: null },
  { id: 87, name: 'orange_tulip', solid: false, transparent: true, faces: all(T.orange_tulip), hardness: 0, drop: 87, needsTool: false, tool: null },
  { id: 88, name: 'white_tulip', solid: false, transparent: true, faces: all(T.white_tulip), hardness: 0, drop: 88, needsTool: false, tool: null },
  { id: 89, name: 'pink_tulip', solid: false, transparent: true, faces: all(T.pink_tulip), hardness: 0, drop: 89, needsTool: false, tool: null },
  { id: 90, name: 'oxeye_daisy', solid: false, transparent: true, faces: all(T.oxeye_daisy), hardness: 0, drop: 90, needsTool: false, tool: null },
  { id: 91, name: 'cornflower', solid: false, transparent: true, faces: all(T.cornflower), hardness: 0, drop: 91, needsTool: false, tool: null },
  { id: 92, name: 'lily_of_the_valley', solid: false, transparent: true, faces: all(T.lily_of_the_valley), hardness: 0, drop: 92, needsTool: false, tool: null },
  { id: 93, name: 'fern', solid: false, transparent: true, faces: all(T.fern), hardness: 0, drop: null, needsTool: false, tool: null },
  { id: 94, name: 'dead_bush', solid: false, transparent: true, faces: all(T.dead_bush), hardness: 0, drop: null, needsTool: false, tool: null },
];

export const POPPY = 81;
export const DANDELION = 82;
export const BLUE_ORCHID = 83;
export const ALLIUM = 84;
export const AZURE_BLUET = 85;
export const RED_TULIP = 86;
export const ORANGE_TULIP = 87;
export const WHITE_TULIP = 88;
export const PINK_TULIP = 89;
export const OXEYE_DAISY = 90;
export const CORNFLOWER = 91;
export const LILY_OF_THE_VALLEY = 92;
export const FERN = 93;
export const DEAD_BUSH = 94;
export const DEEPSLATE = 45;
export const COBBLED_DEEPSLATE = 46;
export const TUFF = 47;
export const CALCITE = 48;
export const SNOW_BLOCK = 49;
export const PACKED_ICE = 50;
export const TERRACOTTA = 51;
export const WHITE_TERRACOTTA = 52;
export const ORANGE_TERRACOTTA = 53;
export const MAGENTA_TERRACOTTA = 54;
export const LIGHT_BLUE_TERRACOTTA = 55;
export const YELLOW_TERRACOTTA = 56;
export const LIME_TERRACOTTA = 57;
export const PINK_TERRACOTTA = 58;
export const GRAY_TERRACOTTA = 59;
export const LIGHT_GRAY_TERRACOTTA = 60;
export const CYAN_TERRACOTTA = 61;
export const PURPLE_TERRACOTTA = 62;
export const BLUE_TERRACOTTA = 63;
export const BROWN_TERRACOTTA = 64;
export const GREEN_TERRACOTTA = 65;
export const RED_TERRACOTTA = 66;
export const BLACK_TERRACOTTA = 67;
export const COARSE_DIRT = 68;
export const PODZOL = 69;
export const MYCELIUM = 70;
export const MUD = 71;
export const RED_SANDSTONE = 72;
export const POWDER_SNOW = 73;
export const CINNABAR = 74;
export const SULFUR = 75;
export const GOLD_ORE = 76;
export const DEEPSLATE_COAL_ORE = 77;
export const DEEPSLATE_IRON_ORE = 78;
export const DEEPSLATE_GOLD_ORE = 79;
export const DEEPSLATE_DIAMOND_ORE = 80;

export const STONE = 1;
export const GRASS = 3;
export const WATER = 9;
export const OAK_LEAVES = 10;
export const OAK_LOG = 6;
export const OAK_PLANKS = 7;
export const COBBLESTONE = 4;
export const CRAFTING_TABLE = 11;
export const IRON_ORE = 12;
export const COAL_ORE = 8;
export const FURNACE = 13;
export const TORCH = 14;
export const GRAVEL = 15;
export const GRASS_PLANT = 16; // 草丛(短)
export const TALL_GRASS = 17; // 长草(高)
// 下界方块
export const OBSIDIAN = 18;
export const NETHERRACK = 19;
export const SAND = 5;
export const SOUL_SAND = 20;
export const GLOWSTONE = 21;
export const NETHER_QUARTZ_ORE = 22;
export const LAVA = 23;
export const BEDROCK = 24;
export const NETHER_PORTAL = 25;
// 沙漠/雪原方块 (重编号 26-31)
export const SANDSTONE = 26;   // 沙漠沙石层
export const CACTUS = 27;      // 仙人掌
export const ICE = 28;         // 雪原冰
export const SNOW_LAYER = 29;  // 雪层
export const SPRUCE_LOG = 30;  // 云杉原木
export const SPRUCE_LEAVES = 31; // 云杉树叶
// 合成储存方块 (32-34)
export const COAL_BLOCK = 32;   // 煤炭块（9 煤）
export const IRON_BLOCK = 33;   // 铁块（9 铁锭）
export const QUARTZ_BLOCK = 34; // 石英块（4 下界石英）
// 钻石进度
export const DIAMOND_ORE = 35;
export const DIAMOND_BLOCK = 36;
export const GRANITE = 37;
export const DIORITE = 38;
export const ANDESITE = 39;
export const BRICKS = 40;
export const MOSSY_COBBLESTONE = 41;
export const RED_SAND = 42;
export const BIRCH_LOG = 43;
export const BIRCH_LEAVES = 44;

export const isLavaId = (id: number): boolean => id === LAVA;
export const isNetherPortalId = (id: number): boolean => id === NETHER_PORTAL;

export const isSolidId = (id: number): boolean => BLOCKS[id]?.solid ?? false;
export const isWaterId = (id: number): boolean => id === WATER;
export const isCutoutId = (id: number): boolean =>
  id === OAK_LEAVES || id === SPRUCE_LEAVES || id === BIRCH_LEAVES; // 镂空(树叶)
export const isFlowerId = (id: number): boolean => id >= POPPY && id <= LILY_OF_THE_VALLEY;
export const isCrossPlantId = (id: number): boolean => id === GRASS_PLANT || id === TALL_GRASS || (id >= POPPY && id <= DEAD_BUSH);
export const isPlantId = (id: number): boolean => isCrossPlantId(id) || id === SNOW_LAYER; // cross/薄层 特判
// 可被挖掘射线选中/打掉：实心方块 + 植物 + 火把。草丛/火把虽非实心，但能被瞄准破坏——
// 同 MC「选择框 ≠ 碰撞框」。水/空气不可选。挖掘 raycast 用此判定(而非 isSolidId)，否则射线穿过草打到后面的方块。
export const isTargetableId = (id: number): boolean => isSolidId(id) || isPlantId(id) || id === TORCH;
// 可被放置覆盖的格：空气/水/草丛(放方块时直接替换，不挡手)。
export const isReplaceableId = (id: number): boolean =>
  id === 0 || id === WATER || id === GRASS_PLANT || id === TALL_GRASS || id === FERN || id === DEAD_BUSH || id === SNOW_LAYER || id === NETHER_PORTAL;
// 不透明（挡视线）：实心且不透明。水/空气/树叶不算。
export const isOpaque = (id: number): boolean => {
  const b = BLOCKS[id];
  return b ? b.solid && !b.transparent : false;
};
export const blockFaceTile = (id: number, face: Face): number => BLOCKS[id].faces[face];

export const blockHardness = (id: number): number => BLOCKS[id]?.hardness ?? 0;
export const blockNeedsTool = (id: number): boolean => BLOCKS[id]?.needsTool ?? false;
// 方块自发光等级 0..15（火把=14），供方块光(blocklight)播种。
export const blockLight = (id: number): number => BLOCKS[id]?.light ?? 0;

// 工具是否与某方块"对口"（用它挖更快；needsTool 时也靠它才能采集）
function toolMatches(id: number, tool: HeldTool | null): tool is HeldTool {
  const bt = BLOCKS[id]?.tool ?? null;
  return tool !== null && bt !== null && tool.kind === bt;
}
// 能否采集(挖掉有掉落)：不需工具的随便挖；需工具的必须用对口工具，且工具等级 ≥ 方块要求(铁矿需石镐)。
export const canHarvest = (id: number, tool: HeldTool | null = null): boolean => {
  if (!blockNeedsTool(id)) return true;
  if (!toolMatches(id, tool)) return false;
  return tool.tier >= (BLOCKS[id]?.minTier ?? 1);
};

// 破坏耗时(ms)，1:1 MC Java：ceil(硬度 ×(能采?30:100) / 工具速度) ×50（1 tick=50ms）。
// tool=null 即徒手(速度 1)。例(徒手)：土 0.75s、原木 3s、石 7.5s；木镚挖石 ≈1.15s。
export const breakTimeMs = (id: number, tool: HeldTool | null = null): number => {
  if (isPlantId(id)) return 0; // 草丛/长草：任何手持(含剑/空手)都瞬破，同 MC——否则握剑时草打不掉
  // 剑能挖方块（同 MC：慢挖、不享工具加成，对石/矿仍不掉落）。之前 return Infinity 让握剑完全挖不动，是错误偏差。
  const h = Math.max(0, blockHardness(id));
  if (h === 0) return 0;
  const speed = toolMatches(id, tool) ? tool.speed : 1;
  const per = canHarvest(id, tool) ? 30 : 100;
  return Math.ceil((per * h) / speed) * 50;
};
// 实际掉落：能采集 → 掉落表，否则不掉。
export const dropFor = (id: number, tool: HeldTool | null = null): number | null =>
  canHarvest(id, tool) ? BLOCKS[id]?.drop ?? null : null;
// 徒手掉落（兼容旧调用）
export const handDrop = (id: number): number | null => dropFor(id, null);
export const blockDrop = (id: number): number | null => BLOCKS[id]?.drop ?? null;
export const blockTool = (id: number): 'pickaxe' | 'axe' | 'shovel' | null => BLOCKS[id]?.tool ?? null;
export const isCactus = (id: number): boolean => id === CACTUS;
// 方块滑度（水平移动摩擦用）：冰滑(同 MC 0.98)，其余普通 0.6。
export const blockSlipperiness = (id: number): number => (id === ICE || id === PACKED_ICE ? 0.98 : 0.6);

/** Surface plants need soil, not an arbitrary solid cube or a water block. */
export function canPlantSurvive(id: number, below: number): boolean {
  if (!isCrossPlantId(id)) return true;
  const soil = below === GRASS || below === 2 || below === COARSE_DIRT || below === PODZOL || below === MYCELIUM || below === MUD;
  return soil || (id === DEAD_BUSH && (below === SAND || below === RED_SAND || (below >= TERRACOTTA && below <= BLACK_TERRACOTTA)));
}
export function plantDrops(id: number, random: () => number = Math.random): { id: number; count: number } | null {
  if (isFlowerId(id)) return { id, count: 1 };
  if (id === DEAD_BUSH) { const count = Math.floor(random() * 3); return count ? { id: 257, count } : null; }
  return null;
}
