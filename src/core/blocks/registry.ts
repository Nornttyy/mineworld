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
} as const;

export interface BlockDef {
  id: number;
  name: string;
  solid: boolean;
  transparent: boolean;
  faces: [number, number, number, number, number, number]; // +X,-X,+Y,-Y,+Z,-Z 的 tile 索引
  hardness: number; // MC Java 硬度（秒基准）；0=瞬破，越大越慢
  drop: number | null; // 挖掉后掉落的方块 id；null=不掉落
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

// 硬度/掉落取自 MC Java（无工具按手挖近似）：草→土、石→圆石、矿→自身(暂无独立掉落物)、
// 草方块/树叶手挖不掉(需精准采集/剪刀)。drop=null 表示挖掉后什么都不掉。
export const BLOCKS: BlockDef[] = [
  { id: 0, name: 'air', solid: false, transparent: true, faces: all(0), hardness: 0, drop: null },
  { id: 1, name: 'stone', solid: true, transparent: false, faces: all(T.stone), hardness: 1.5, drop: 4 },
  { id: 2, name: 'dirt', solid: true, transparent: false, faces: all(T.dirt), hardness: 0.5, drop: 2 },
  {
    id: 3,
    name: 'grass',
    solid: true,
    transparent: false,
    faces: column(T.grass_side, T.grass_top, T.dirt),
    hardness: 0.6,
    drop: 2, // 草方块掉土
  },
  {
    id: 4,
    name: 'cobblestone',
    solid: true,
    transparent: false,
    faces: all(T.cobblestone),
    hardness: 2.0,
    drop: 4,
  },
  { id: 5, name: 'sand', solid: true, transparent: false, faces: all(T.sand), hardness: 0.5, drop: 5 },
  {
    id: 6,
    name: 'oak_log',
    solid: true,
    transparent: false,
    faces: column(T.oak_log_side, T.oak_log_top, T.oak_log_top),
    hardness: 2.0,
    drop: 6,
  },
  {
    id: 7,
    name: 'oak_planks',
    solid: true,
    transparent: false,
    faces: all(T.oak_planks),
    hardness: 2.0,
    drop: 7,
  },
  { id: 8, name: 'coal_ore', solid: true, transparent: false, faces: all(T.coal_ore), hardness: 3.0, drop: 8 },
  // 水：非实心（可进入）、半透明（渲染单独成批）；不可破坏
  { id: 9, name: 'water', solid: false, transparent: true, faces: all(T.water), hardness: 0, drop: null },
  // 树叶：实心(可站)但非不透明(能透看)，渲染走镂空；手挖很快但不掉落
  {
    id: 10,
    name: 'oak_leaves',
    solid: true,
    transparent: true,
    faces: all(T.oak_leaves),
    hardness: 0.2,
    drop: null,
  },
];

export const WATER = 9;
export const OAK_LEAVES = 10;
export const OAK_LOG = 6;

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
export const blockDrop = (id: number): number | null => BLOCKS[id]?.drop ?? null;
// 破坏耗时(ms)：按 MC 手挖近似 = 硬度 × 1.5 秒（硬度 0 → 瞬破）。工具系统到位后再细化。
export const breakTimeMs = (id: number): number => Math.max(0, blockHardness(id)) * 1500;
