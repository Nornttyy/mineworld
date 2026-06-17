import { Section } from '../world/section';
import { World } from '../world/world';
import { ChunkWorld } from '../world/chunkWorld';
import { CHUNK_W, CHUNK_H } from '../world/chunk';
import { isSolidId, isOpaque, isWaterId, isCutoutId, blockFaceTile, Face, WATER } from '../blocks/registry';

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

interface FaceArrays {
  P: number[];
  N: number[];
  U: number[];
  C: number[];
  I: number[];
}
const emptyArrays = (): FaceArrays => ({ P: [], N: [], U: [], C: [], I: [] });
const toMeshData = (a: FaceArrays): MeshData => ({
  positions: new Float32Array(a.P),
  normals: new Float32Array(a.N),
  uvs: new Float32Array(a.U),
  colors: new Float32Array(a.C),
  indices: new Uint32Array(a.I),
});

export interface ChunkMesh {
  opaque: MeshData;
  cutout: MeshData; // 镂空(树叶等，alpha-test)
  water: MeshData;
}

// 网格化无限世界中的一个区块 (cx,cz)，分别产出"不透明"和"水"两套网格。
// 位置用区块局部坐标；邻居按世界坐标采样（含相邻区块），故接缝正确剔除、无内墙。
export function meshChunk(world: ChunkWorld, cx: number, cz: number): ChunkMesh {
  const ox = cx * CHUNK_W;
  const oz = cz * CHUNK_W;
  const op = emptyArrays();
  const cut = emptyArrays();
  const wa = emptyArrays();
  const eps = 0.5 / (TILE_PX * ATLAS_COLS);
  const du = 1 / ATLAS_COLS - 2 * eps;
  const dv = 1 / ATLAS_ROWS - 2 * eps;

  const emit = (a: FaceArrays, lx: number, ly: number, lz: number, id: number, f: number): void => {
    const d = DIRS[f];
    const tile = blockFaceTile(id, f as Face);
    const u0 = (tile % ATLAS_COLS) / ATLAS_COLS + eps;
    const v0 = 1 - (Math.floor(tile / ATLAS_COLS) + 1) / ATLAS_ROWS + eps;
    const shade = FACE_SHADE[f];
    const base = a.P.length / 3;
    for (let k = 0; k < 4; k++) {
      const corner = d.c[k];
      a.P.push(lx + corner[0], ly + corner[1], lz + corner[2]);
      a.N.push(d.n[0], d.n[1], d.n[2]);
      a.U.push(u0 + d.uv[k][0] * du, v0 + d.uv[k][1] * dv);
      a.C.push(shade, shade, shade);
    }
    a.I.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };

  // 水专用：把单位立方某面的 y(0/1) 替换为实际高度 [yLow,yHigh]，可画半高水面与落差侧壁。
  const emitWaterFace = (
    lx: number,
    ly: number,
    lz: number,
    f: number,
    yLow: number,
    yHigh: number,
  ): void => {
    const d = DIRS[f];
    const tile = blockFaceTile(WATER, f as Face);
    const u0 = (tile % ATLAS_COLS) / ATLAS_COLS + eps;
    const v0 = 1 - (Math.floor(tile / ATLAS_COLS) + 1) / ATLAS_ROWS + eps;
    const shade = FACE_SHADE[f];
    const base = wa.P.length / 3;
    for (let k = 0; k < 4; k++) {
      const corner = d.c[k];
      const yy = corner[1] === 0 ? yLow : yHigh; // 单位立方 y 替换为实际水高
      wa.P.push(lx + corner[0], ly + yy, lz + corner[2]);
      wa.N.push(d.n[0], d.n[1], d.n[2]);
      wa.U.push(u0 + d.uv[k][0] * du, v0 + d.uv[k][1] * dv);
      wa.C.push(shade, shade, shade);
    }
    wa.I.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };
  // 水面高度(0..1)：上方有水→满；否则按水量(源 8 满，流动越低越浅)。
  const waterTop = (wx: number, wy: number, wz: number): number => {
    if (world.waterAmount(wx, wy + 1, wz) > 0) return 1;
    return world.waterAmount(wx, wy, wz) / 8;
  };

  for (let ly = 0; ly < CHUNK_H; ly++) {
    for (let lz = 0; lz < CHUNK_W; lz++) {
      for (let lx = 0; lx < CHUNK_W; lx++) {
        const id = world.getBlock(ox + lx, ly, oz + lz);
        if (isOpaque(id)) {
          for (let f = 0; f < 6; f++) {
            const d = DIRS[f];
            // 不透明面：邻格也不透明才剔除（露给空气/水都要画）
            if (isOpaque(world.getBlock(ox + lx + d.o[0], ly + d.o[1], oz + lz + d.o[2]))) continue;
            emit(op, lx, ly, lz, id, f);
          }
        } else if (isCutoutId(id)) {
          for (let f = 0; f < 6; f++) {
            const d = DIRS[f];
            // 镂空(树叶)：露给非实心(空气/水)的面才画；叶-叶、叶-实心剔除
            if (isSolidId(world.getBlock(ox + lx + d.o[0], ly + d.o[1], oz + lz + d.o[2]))) continue;
            emit(cut, lx, ly, lz, id, f);
          }
        } else if (isWaterId(id)) {
          const wx = ox + lx;
          const wz = oz + lz;
          const h = waterTop(wx, ly, wz);
          // 顶面：上方不是水且非不透明 → 露出水面，画在高度 h
          if (world.waterAmount(wx, ly + 1, wz) === 0 && !isOpaque(world.getBlock(wx, ly + 1, wz))) {
            emitWaterFace(lx, ly, lz, Face.PosY, h, h);
          }
          // 底面：下方是空气才画
          if (world.getBlock(wx, ly - 1, wz) === 0) emitWaterFace(lx, ly, lz, Face.NegY, 0, 0);
          // 四侧：露给空气 → 整段；与较低水相邻 → 只画落差那段水壁
          const sides: [number, number, number][] = [
            [Face.PosX, 1, 0],
            [Face.NegX, -1, 0],
            [Face.PosZ, 0, 1],
            [Face.NegZ, 0, -1],
          ];
          for (const [f, dx, dz] of sides) {
            const nb = world.getBlock(wx + dx, ly, wz + dz);
            if (isWaterId(nb)) {
              const nh = waterTop(wx + dx, ly, wz + dz);
              if (h > nh + 1e-4) emitWaterFace(lx, ly, lz, f, nh, h);
            } else if (nb === 0) {
              emitWaterFace(lx, ly, lz, f, 0, h);
            }
          }
        }
      }
    }
  }

  return { opaque: toMeshData(op), cutout: toMeshData(cut), water: toMeshData(wa) };
}
