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
// 4×8=32 槽: 0-17 基础, 18-25 下界, 26-31 沙漠/雪原
const T = {
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
} as const;

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
export const BLOCKS: BlockDef[] = [
  { id: 0, name: 'air', solid: false, transparent: true, faces: all(0), hardness: 0, drop: null, needsTool: false, tool: null },
  { id: 1, name: 'stone', solid: true, transparent: false, faces: all(T.stone), hardness: 2.0, drop: 4, needsTool: true, tool: 'pickaxe' }, // 徒手 10s（需镐 ×5）
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
    hardness: 3.33, // 徒手 5s（×1.5）；斧更快
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
    drop: 12,
    needsTool: true,
    tool: 'pickaxe',
    minTier: 2, // 木镐挖不出来（慢且不掉），需石镐(tier≥2)
  },
  // 熔炉：圆石质，侧面炉口(4 面同贴图)；右键开冶炼界面(游戏层)。配方已在 recipes(8 圆石)。
  {
    id: 13,
    name: 'furnace',
    solid: true,
    transparent: false,
    faces: column(T.furnace_front, T.cobblestone, T.cobblestone),
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
  { id: 18, name: 'obsidian', solid: true, transparent: false, faces: all(T.obsidian), hardness: 12, drop: 18, needsTool: true, tool: 'pickaxe', minTier: 2 },
  { id: 19, name: 'netherrack', solid: true, transparent: false, faces: all(T.netherrack), hardness: 0.4, drop: 19, needsTool: false, tool: 'pickaxe' },
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
  // 冰：雪原水面冻结；打滑(物理层)；MC 硬度 0.5，无精准采集→不掉(drop:null)。半透明渲染。
  { id: 28, name: 'ice', solid: true, transparent: true, faces: all(T.ice), hardness: 0.5, drop: null, needsTool: true, tool: 'pickaxe' },
  // 雪层：贴地薄装饰，非实心(可穿)、瞬破不掉(暂无雪球)；mesher 画薄四边形。
  { id: 29, name: 'snow_layer', solid: false, transparent: true, faces: all(T.snow), hardness: 0, drop: null, needsTool: false, tool: 'shovel' },
  // 云杉原木：同橡木原木数值，斧更快。顶/底复用 oak_log_top。
  { id: 30, name: 'spruce_log', solid: true, transparent: false, faces: column(T.spruce_log, T.oak_log_top, T.oak_log_top), hardness: 3.33, drop: 30, needsTool: false, tool: 'axe' },
  // 云杉树叶：同橡树叶(镂空、手挖快不掉)。
  { id: 31, name: 'spruce_leaves', solid: true, transparent: true, faces: all(T.spruce_leaves), hardness: 0.2, drop: null, needsTool: false, tool: null },
];

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

export const isLavaId = (id: number): boolean => id === LAVA;
export const isNetherPortalId = (id: number): boolean => id === NETHER_PORTAL;

export const isSolidId = (id: number): boolean => BLOCKS[id]?.solid ?? false;
export const isWaterId = (id: number): boolean => id === WATER;
export const isCutoutId = (id: number): boolean => id === OAK_LEAVES || id === SPRUCE_LEAVES; // 镂空(树叶)
export const isPlantId = (id: number): boolean => id === GRASS_PLANT || id === TALL_GRASS || id === SNOW_LAYER; // cross/薄层 特判
// 可被挖掘射线选中/打掉：实心方块 + 植物。草丛虽非实心(可穿过、不挡移动)，但能被瞄准破坏——
// 同 MC「选择框 ≠ 碰撞框」。水/空气不可选。挖掘 raycast 用此判定(而非 isSolidId)，否则射线穿过草打到后面的方块。
export const isTargetableId = (id: number): boolean => isSolidId(id) || isPlantId(id);
// 可被放置覆盖的格：空气/水/草丛(放方块时直接替换，不挡手)。
export const isReplaceableId = (id: number): boolean =>
  id === 0 || id === WATER || isPlantId(id) || id === NETHER_PORTAL;
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
  if (tool && tool.kind === 'sword') return Infinity; // 剑不破坏方块（同 MC 不同：这里完全挖不动）
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
export const blockSlipperiness = (id: number): number => (id === ICE ? 0.98 : 0.6);
