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
  // 铁矿：石中矿脉，需镐采集；挖掉得铁矿石方块（冶炼成锭待后续里程碑）。MC 硬度 3。
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
  },
];

export const WATER = 9;
export const OAK_LEAVES = 10;
export const OAK_LOG = 6;
export const OAK_PLANKS = 7;
export const COBBLESTONE = 4;
export const CRAFTING_TABLE = 11;
export const IRON_ORE = 12;
export const COAL_ORE = 8;

export const isSolidId = (id: number): boolean => BLOCKS[id]?.solid ?? false;
export const isWaterId = (id: number): boolean => id === WATER;
export const isCutoutId = (id: number): boolean => id === OAK_LEAVES; // 镂空(树叶)
// 不透明（挡视线）：实心且不透明。水/空气/树叶不算。
export const isOpaque = (id: number): boolean => {
  const b = BLOCKS[id];
  return b ? b.solid && !b.transparent : false;
};
export const blockFaceTile = (id: number, face: Face): number => BLOCKS[id].faces[face];

export const blockHardness = (id: number): number => BLOCKS[id]?.hardness ?? 0;
export const blockNeedsTool = (id: number): boolean => BLOCKS[id]?.needsTool ?? false;

// 工具是否与某方块"对口"（用它挖更快；needsTool 时也靠它才能采集）
function toolMatches(id: number, tool: HeldTool | null): tool is HeldTool {
  const bt = BLOCKS[id]?.tool ?? null;
  return tool !== null && bt !== null && tool.kind === bt;
}
// 能否采集(挖掉有掉落)：不需工具的随便挖；需工具的必须用对口工具。
export const canHarvest = (id: number, tool: HeldTool | null = null): boolean =>
  !blockNeedsTool(id) || toolMatches(id, tool);

// 破坏耗时(ms)，1:1 MC Java：ceil(硬度 ×(能采?30:100) / 工具速度) ×50（1 tick=50ms）。
// tool=null 即徒手(速度 1)。例(徒手)：土 0.75s、原木 3s、石 7.5s；木镐挖石 ≈1.15s。
export const breakTimeMs = (id: number, tool: HeldTool | null = null): number => {
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
