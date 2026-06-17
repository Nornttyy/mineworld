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

export const BLOCKS: BlockDef[] = [
  { id: 0, name: 'air', solid: false, transparent: true, faces: all(0) },
  { id: 1, name: 'stone', solid: true, transparent: false, faces: all(T.stone) },
  { id: 2, name: 'dirt', solid: true, transparent: false, faces: all(T.dirt) },
  {
    id: 3,
    name: 'grass',
    solid: true,
    transparent: false,
    faces: column(T.grass_side, T.grass_top, T.dirt),
  },
  { id: 4, name: 'cobblestone', solid: true, transparent: false, faces: all(T.cobblestone) },
  { id: 5, name: 'sand', solid: true, transparent: false, faces: all(T.sand) },
  {
    id: 6,
    name: 'oak_log',
    solid: true,
    transparent: false,
    faces: column(T.oak_log_side, T.oak_log_top, T.oak_log_top),
  },
  { id: 7, name: 'oak_planks', solid: true, transparent: false, faces: all(T.oak_planks) },
  { id: 8, name: 'coal_ore', solid: true, transparent: false, faces: all(T.coal_ore) },
  // 水：非实心（可进入）、半透明（渲染单独成批）
  { id: 9, name: 'water', solid: false, transparent: true, faces: all(T.water) },
  // 树叶：实心(可站)但非不透明(能透看)，渲染走镂空(alpha-test)
  { id: 10, name: 'oak_leaves', solid: true, transparent: true, faces: all(T.oak_leaves) },
];

export const WATER = 9;
export const OAK_LEAVES = 10;

export const isSolidId = (id: number): boolean => BLOCKS[id]?.solid ?? false;
export const isWaterId = (id: number): boolean => id === WATER;
export const isCutoutId = (id: number): boolean => id === OAK_LEAVES; // 镂空(树叶)
// 不透明（挡视线）：实心且不透明。水/空气/树叶不算。
export const isOpaque = (id: number): boolean => {
  const b = BLOCKS[id];
  return b ? b.solid && !b.transparent : false;
};
export const blockFaceTile = (id: number, face: Face): number => BLOCKS[id].faces[face];
