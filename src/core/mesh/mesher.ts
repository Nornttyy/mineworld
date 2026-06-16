import { Section } from '../world/section';
import { World } from '../world/world';
import { isSolidId, blockFaceTile, Face } from '../blocks/registry';

const ATLAS_COLS = 4;
const ATLAS_ROWS = 4;
const TILE_PX = 16;

// MC 固定面亮度（烤进顶点色）：顺序同 Face 枚举 +X,-X,+Y,-Y,+Z,-Z
const FACE_SHADE = [0.6, 0.6, 1.0, 0.5, 0.8, 0.8];

// 每个面：法线 n、邻居偏移 o、4 角 c（CCW 外向）、每角 tile UV。
// ⚠️ UV 逐面定制，让贴图 V 轴对齐世界 +Y（草侧边等纹理永远正立、绿边在顶）。
//    侧面: v=角的世界 y, u=水平坐标; 顶/底面: u=世界 x, v=世界 z。
const DIRS: {
  n: [number, number, number];
  o: [number, number, number];
  c: number[][];
  uv: number[][];
}[] = [
  // +X (水平=z, 竖直=y)
  { n: [1, 0, 0], o: [1, 0, 0], c: [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]], uv: [[0, 0], [0, 1], [1, 1], [1, 0]] },
  // -X
  { n: [-1, 0, 0], o: [-1, 0, 0], c: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  // +Y 上 (u=x, v=z)
  { n: [0, 1, 0], o: [0, 1, 0], c: [[0, 1, 0], [0, 1, 1], [1, 1, 1], [1, 1, 0]], uv: [[0, 0], [0, 1], [1, 1], [1, 0]] },
  // -Y 下
  { n: [0, -1, 0], o: [0, -1, 0], c: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  // +Z (水平=x, 竖直=y)
  { n: [0, 0, 1], o: [0, 0, 1], c: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], uv: [[0, 0], [1, 0], [1, 1], [0, 1]] },
  // -Z
  { n: [0, 0, -1], o: [0, 0, -1], c: [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]], uv: [[0, 0], [0, 1], [1, 1], [1, 0]] },
];

export interface MeshData {
  positions: Float32Array;
  normals: Float32Array;
  uvs: Float32Array;
  colors: Float32Array;
  indices: Uint32Array;
}

interface BlockGrid {
  sx: number;
  sy: number;
  sz: number;
  get(x: number, y: number, z: number): number;
}

function meshGrid(g: BlockGrid): MeshData {
  const P: number[] = [];
  const N: number[] = [];
  const U: number[] = [];
  const C: number[] = [];
  const I: number[] = [];

  const solidAt = (x: number, y: number, z: number): boolean =>
    x < 0 || x >= g.sx || y < 0 || y >= g.sy || z < 0 || z >= g.sz ? false : isSolidId(g.get(x, y, z));

  const eps = 0.5 / (TILE_PX * ATLAS_COLS); // 半像素内缩，防接缝渗色
  const du = 1 / ATLAS_COLS - 2 * eps;
  const dv = 1 / ATLAS_ROWS - 2 * eps;

  for (let y = 0; y < g.sy; y++) {
    for (let z = 0; z < g.sz; z++) {
      for (let x = 0; x < g.sx; x++) {
        const id = g.get(x, y, z);
        if (!isSolidId(id)) continue;
        for (let f = 0; f < 6; f++) {
          const d = DIRS[f];
          if (solidAt(x + d.o[0], y + d.o[1], z + d.o[2])) continue; // 邻格实心 → 剔除
          const tile = blockFaceTile(id, f as Face);
          const col = tile % ATLAS_COLS;
          const row = Math.floor(tile / ATLAS_COLS);
          const u0 = col / ATLAS_COLS + eps;
          const v0 = 1 - (row + 1) / ATLAS_ROWS + eps; // 图集 V 翻转
          const shade = FACE_SHADE[f];
          const base = P.length / 3;
          for (let k = 0; k < 4; k++) {
            const corner = d.c[k];
            P.push(x + corner[0], y + corner[1], z + corner[2]);
            N.push(d.n[0], d.n[1], d.n[2]);
            U.push(u0 + d.uv[k][0] * du, v0 + d.uv[k][1] * dv);
            C.push(shade, shade, shade);
          }
          I.push(base, base + 1, base + 2, base, base + 2, base + 3);
        }
      }
    }
  }

  return {
    positions: new Float32Array(P),
    normals: new Float32Array(N),
    uvs: new Float32Array(U),
    colors: new Float32Array(C),
    indices: new Uint32Array(I),
  };
}

// 16³ 区块网格化（保留给原有调用/测试）
export function meshSection(sec: Section): MeshData {
  return meshGrid({ sx: 16, sy: 16, sz: 16, get: (x, y, z) => sec.get(x, y, z) });
}

// 整片地形网格化
export function meshWorld(world: World): MeshData {
  return meshGrid(world);
}
