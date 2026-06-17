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

  // 水专用：按每个角的高度 yArr[4]（对应 DIRS[f].c 顺序）发射一个面，可画斜水面/落差侧壁。
  const emitWaterFace = (lx: number, ly: number, lz: number, f: number, yArr: number[]): void => {
    const d = DIRS[f];
    const tile = blockFaceTile(WATER, f as Face);
    const u0 = (tile % ATLAS_COLS) / ATLAS_COLS + eps;
    const v0 = 1 - (Math.floor(tile / ATLAS_COLS) + 1) / ATLAS_ROWS + eps;
    const shade = FACE_SHADE[f];
    const base = wa.P.length / 3;
    for (let k = 0; k < 4; k++) {
      const corner = d.c[k];
      wa.P.push(lx + corner[0], ly + yArr[k], lz + corner[2]);
      wa.N.push(d.n[0], d.n[1], d.n[2]);
      wa.U.push(u0 + d.uv[k][0] * du, v0 + d.uv[k][1] * dv);
      wa.C.push(shade, shade, shade);
    }
    wa.I.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };
  // 单格水自身高度(0..1)：上方有水→1；否则水量/9（同 MC，源 8/9≈0.889）。
  const ownH = (wx: number, wy: number, wz: number): number => {
    if (world.waterAmount(wx, wy + 1, wz) > 0) return 1;
    return world.waterAmount(wx, wy, wz) / 9;
  };
  // 角高度(MC 平均法)：该角周围 4 格水的自身高度平均；近满(≥0.8)权重×10；空气计 0 高度。
  const cornerH = (wy: number, cells: [number, number][]): number => {
    let total = 0;
    let count = 0;
    for (const [cx, cz] of cells) {
      if (world.waterAmount(cx, wy + 1, cz) > 0) return 1;
      const a = world.waterAmount(cx, wy, cz);
      if (a > 0) {
        const h = a / 9;
        if (h >= 0.8) {
          total += h * 10;
          count += 10;
        } else {
          total += h;
          count += 1;
        }
      } else if (!isSolidId(world.getBlock(cx, wy, cz))) {
        count += 1; // 空气：贡献 0 高度，把该角往下拉成斜坡
      }
    }
    return count > 0 ? total / count : 0.5;
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
          // 四角高度（取邻格平均 → 顺流斜面）。角命名 hAB：A=本格 x 侧(0/1)，B=z 侧(0/1)。
          const h00 = cornerH(ly, [[wx, wz], [wx - 1, wz], [wx, wz - 1], [wx - 1, wz - 1]]);
          const h01 = cornerH(ly, [[wx, wz], [wx - 1, wz], [wx, wz + 1], [wx - 1, wz + 1]]);
          const h11 = cornerH(ly, [[wx, wz], [wx + 1, wz], [wx, wz + 1], [wx + 1, wz + 1]]);
          const h10 = cornerH(ly, [[wx, wz], [wx + 1, wz], [wx, wz - 1], [wx + 1, wz - 1]]);
          // 顶面（上方非水且非不透明）：斜水面
          if (world.waterAmount(wx, ly + 1, wz) === 0 && !isOpaque(world.getBlock(wx, ly + 1, wz))) {
            emitWaterFace(lx, ly, lz, Face.PosY, [h00, h01, h11, h10]);
          }
          // 底面：下方是空气才画
          if (world.getBlock(wx, ly - 1, wz) === 0) emitWaterFace(lx, ly, lz, Face.NegY, [0, 0, 0, 0]);
          // 侧面：空气邻 → 整段；较低水邻 → 只画高出的落差；固体/树叶 → 剔除。
          //  yArr 顺序对应该面 DIRS.c；low=邻格水面高(或 0)，顶边用对应两角高度。
          const side = (f: number, dx: number, dz: number, yArr: (low: number) => number[], topA: number, topB: number): void => {
            const nb = world.getBlock(wx + dx, ly, wz + dz);
            if (isSolidId(nb)) return; // 固体/树叶挡住
            if (nb === 0) {
              emitWaterFace(lx, ly, lz, f, yArr(0));
            } else if (isWaterId(nb)) {
              const low = ownH(wx + dx, ly, wz + dz);
              if (Math.max(topA, topB) > low + 1e-4) emitWaterFace(lx, ly, lz, f, yArr(low));
            }
          };
          side(Face.PosX, 1, 0, (low) => [low, h10, h11, low], h10, h11);
          side(Face.NegX, -1, 0, (low) => [low, low, h01, h00], h00, h01);
          side(Face.PosZ, 0, 1, (low) => [low, low, h11, h01], h01, h11);
          side(Face.NegZ, 0, -1, (low) => [low, h00, h10, low], h00, h10);
        }
      }
    }
  }

  return { opaque: toMeshData(op), cutout: toMeshData(cut), water: toMeshData(wa) };
}
