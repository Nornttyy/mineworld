import { Section } from '../world/section';
import { World } from '../world/world';
import { ChunkWorld } from '../world/chunkWorld';
import { CHUNK_W, CHUNK_H } from '../world/chunk';
import { isSolidId, isOpaque, isWaterId, isCutoutId, blockFaceTile, blockLight, Face, TORCH } from '../blocks/registry';
import { computeSkyLight, computeBlockLight } from '../light/skylight';

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

// ── 环境光遮蔽 (AO)：凹角/贴墙处压暗顶点色，给体素地形立体感（同 MC 平滑光照）──
const AO_FACTOR = [0.5, 0.7, 0.86, 1.0]; // level 0(最暗)..3(无遮挡)

// 标准体素 AO：两侧 + 对角是否被遮挡 → 0..3；两侧都挡则强制 0（最暗）。
export function aoLevel(side1: boolean, side2: boolean, corner: boolean): number {
  if (side1 && side2) return 0;
  return 3 - (Number(side1) + Number(side2) + Number(corner));
}

// 每个面的两条面内轴(单位偏移) + 对应角分量索引，用来取该角的 3 个 AO 邻居。
const AO_AXES: { u: number[]; v: number[]; ui: number; vi: number }[] = [
  { u: [0, 1, 0], v: [0, 0, 1], ui: 1, vi: 2 }, // +X：面内轴 Y,Z
  { u: [0, 1, 0], v: [0, 0, 1], ui: 1, vi: 2 }, // -X
  { u: [1, 0, 0], v: [0, 0, 1], ui: 0, vi: 2 }, // +Y：X,Z
  { u: [1, 0, 0], v: [0, 0, 1], ui: 0, vi: 2 }, // -Y
  { u: [1, 0, 0], v: [0, 1, 0], ui: 0, vi: 1 }, // +Z：X,Y
  { u: [1, 0, 0], v: [0, 1, 0], ui: 0, vi: 1 }, // -Z
];

// 某面某角的 AO 系数。occ(x,y,z)=该格是否遮挡(不透明)；(wx,wy,wz)=方块坐标。
function cornerAO(
  occ: (x: number, y: number, z: number) => boolean,
  wx: number,
  wy: number,
  wz: number,
  f: number,
  k: number,
): number {
  const d = DIRS[f];
  const ax = AO_AXES[f];
  const corner = d.c[k];
  const su = corner[ax.ui] === 1 ? 1 : -1;
  const sv = corner[ax.vi] === 1 ? 1 : -1;
  const bx = wx + d.n[0];
  const by = wy + d.n[1];
  const bz = wz + d.n[2]; // 面外那一格
  const s1 = occ(bx + su * ax.u[0], by + su * ax.u[1], bz + su * ax.u[2]);
  const s2 = occ(bx + sv * ax.v[0], by + sv * ax.v[1], bz + sv * ax.v[2]);
  const cc = occ(
    bx + su * ax.u[0] + sv * ax.v[0],
    by + su * ax.u[1] + sv * ax.v[1],
    bz + su * ax.u[2] + sv * ax.v[2],
  );
  return AO_FACTOR[aoLevel(s1, s2, cc)];
}

export interface MeshData {
  positions: Float32Array;
  normals: Float32Array;
  uvs: Float32Array;
  colors: Float32Array;
  indices: Uint32Array;
  light?: Float32Array; // 每顶点 (天光01, 方块光01)，itemSize 2；交给 shader 按昼夜合成亮度。火把网格不带。
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
  const occ = (x: number, y: number, z: number): boolean =>
    x < 0 || x >= g.sx || y < 0 || y >= g.sy || z < 0 || z >= g.sz ? false : isOpaque(g.get(x, y, z));

  const eps = 0.01 / (TILE_PX * ATLAS_COLS); // 极小内缩防图集邻块渗色；NearestFilter 下别用半像素内缩(否则方块边缘像素只剩半格)
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
          const ao = [0, 0, 0, 0];
          for (let k = 0; k < 4; k++) {
            const corner = d.c[k];
            ao[k] = cornerAO(occ, x, y, z, f, k);
            const c = shade * ao[k];
            P.push(x + corner[0], y + corner[1], z + corner[2]);
            N.push(d.n[0], d.n[1], d.n[2]);
            U.push(u0 + d.uv[k][0] * du, v0 + d.uv[k][1] * dv);
            C.push(c, c, c);
          }
          // 按 AO 翻转四边形对角线，避免梯度插值出现折痕
          if (ao[0] + ao[2] > ao[1] + ao[3]) {
            I.push(base, base + 1, base + 2, base, base + 2, base + 3);
          } else {
            I.push(base + 1, base + 2, base + 3, base + 1, base + 3, base);
          }
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
  L: number[]; // 每顶点 (天光01, 方块光01)
}
const emptyArrays = (): FaceArrays => ({ P: [], N: [], U: [], C: [], I: [], L: [] });
const toMeshData = (a: FaceArrays): MeshData => ({
  positions: new Float32Array(a.P),
  normals: new Float32Array(a.N),
  uvs: new Float32Array(a.U),
  colors: new Float32Array(a.C),
  indices: new Uint32Array(a.I),
  light: new Float32Array(a.L),
});

export interface ChunkMesh {
  opaque: MeshData;
  cutout: MeshData; // 镂空(树叶等，alpha-test)
  water: MeshData;
  torch: MeshData; // 火把：暖色小十字，自发光(不参与天光 shader)
}

// 网格化无限世界中的一个区块 (cx,cz)，分别产出"不透明"和"水"两套网格。
// 位置用区块局部坐标；邻居按世界坐标采样（含相邻区块），故接缝正确剔除、无内墙。
export function meshChunk(world: ChunkWorld, cx: number, cz: number): ChunkMesh {
  const ox = cx * CHUNK_W;
  const oz = cz * CHUNK_W;
  const op = emptyArrays();
  const cut = emptyArrays();
  const wa = emptyArrays();
  const to = emptyArrays(); // 火把
  const eps = 0.01 / (TILE_PX * ATLAS_COLS);
  const du = 1 / ATLAS_COLS - 2 * eps;
  const dv = 1 / ATLAS_ROWS - 2 * eps;

  const occ = (x: number, y: number, z: number): boolean => isOpaque(world.getBlock(x, y, z));

  // 光照：对本区块 + 1 格光晕(覆盖邻块边界，让边界面取到邻块的光)算每格天光 + 方块光，各 0..15。
  // 顶点存"该面朝向格"的 (天光, 方块光)，交给材质 shader 合成亮度——昼夜只缩放天光，火把光恒定。
  const LW = CHUNK_W + 2;
  const skyLight = computeSkyLight(LW, CHUNK_H, (hx, hy, hz) => occ(ox + hx - 1, hy, oz + hz - 1));
  const blkLight = computeBlockLight(
    LW,
    CHUNK_H,
    (hx, hy, hz) => blockLight(world.getBlock(ox + hx - 1, hy, oz + hz - 1)),
    (hx, hy, hz) => occ(ox + hx - 1, hy, oz + hz - 1),
  );
  const skyAt = (lx: number, ly: number, lz: number): number => {
    if (ly >= CHUNK_H) return 15; // 世界顶之上=露天
    if (ly < 0) return 0; // 世界底之下=黑
    return skyLight[lx + 1 + (lz + 1) * LW + ly * LW * LW];
  };
  const blkAt = (lx: number, ly: number, lz: number): number => {
    if (ly >= CHUNK_H || ly < 0) return 0;
    return blkLight[lx + 1 + (lz + 1) * LW + ly * LW * LW];
  };

  const emit = (a: FaceArrays, lx: number, ly: number, lz: number, id: number, f: number): void => {
    const d = DIRS[f];
    const tile = blockFaceTile(id, f as Face);
    const u0 = (tile % ATLAS_COLS) / ATLAS_COLS + eps;
    const v0 = 1 - (Math.floor(tile / ATLAS_COLS) + 1) / ATLAS_ROWS + eps;
    const shade = FACE_SHADE[f];
    const ex = lx + d.o[0]; // 该面朝向(外侧)那一格 → 取它的光
    const ey = ly + d.o[1];
    const ez = lz + d.o[2];
    const sky = skyAt(ex, ey, ez) / 15;
    const blk = blkAt(ex, ey, ez) / 15;
    const base = a.P.length / 3;
    const ao = [0, 0, 0, 0];
    for (let k = 0; k < 4; k++) {
      const corner = d.c[k];
      ao[k] = cornerAO(occ, ox + lx, ly, oz + lz, f, k);
      const c = shade * ao[k]; // 几何阴影 × AO；天光/方块光由 shader 再乘
      a.P.push(lx + corner[0], ly + corner[1], lz + corner[2]);
      a.N.push(d.n[0], d.n[1], d.n[2]);
      a.U.push(u0 + d.uv[k][0] * du, v0 + d.uv[k][1] * dv);
      a.C.push(c, c, c);
      a.L.push(sky, blk);
    }
    // 按 AO 翻转四边形对角线，避免梯度插值出现折痕
    if (ao[0] + ao[2] > ao[1] + ao[3]) {
      a.I.push(base, base + 1, base + 2, base, base + 2, base + 3);
    } else {
      a.I.push(base + 1, base + 2, base + 3, base + 1, base + 3, base);
    }
  };

  // 火把：在格中心立一个暖色"交叉竖片"小网格，自发光(走独立材质，不参与天光 shader)。
  const emitTorch = (lx: number, lz: number, ly: number): void => {
    const cx = lx + 0.5;
    const cz = lz + 0.5;
    const r = 0.34;
    const h = 0.62;
    const body = [0.5, 0.32, 0.14]; // 棍身棕
    const tip = [1.0, 0.74, 0.24]; // 顶端火光暖橙
    const quads = [
      [cx - r, cz - r, cx + r, cz + r], // 对角片
      [cx - r, cz + r, cx + r, cz - r], // 反对角片
    ];
    for (const [x0, z0, x1, z1] of quads) {
      const base = to.P.length / 3;
      const verts = [
        [x0, ly, z0, ...body],
        [x1, ly, z1, ...body],
        [x1, ly + h, z1, ...tip],
        [x0, ly + h, z0, ...tip],
      ];
      for (const v of verts) {
        to.P.push(v[0], v[1], v[2]);
        to.N.push(0, 1, 0);
        to.U.push(0, 0);
        to.C.push(v[3], v[4], v[5]);
      }
      to.I.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
  };

  // 水专用：按每个角的高度 yArr[4]（对应 DIRS[f].c 顺序）发射一个面，可画斜水面/落差侧壁。
  // UV 用世界坐标平铺（顶/底用 x,z；侧面用 水平,y）：整片水面连续平铺、斜水面不会扭曲，
  // 配合独立可滚动水纹理做流动动画。
  const emitWaterFace = (lx: number, ly: number, lz: number, f: number, yArr: number[]): void => {
    const d = DIRS[f];
    const shade = FACE_SHADE[f];
    const sky = skyAt(lx + d.o[0], ly + d.o[1], lz + d.o[2]) / 15; // 该面朝向格的光，交 shader 合成
    const blk = blkAt(lx + d.o[0], ly + d.o[1], lz + d.o[2]) / 15;
    const base = wa.P.length / 3;
    for (let k = 0; k < 4; k++) {
      const corner = d.c[k];
      const py = ly + yArr[k];
      wa.P.push(lx + corner[0], py, lz + corner[2]);
      wa.N.push(d.n[0], d.n[1], d.n[2]);
      const wx = ox + lx + corner[0];
      const wz = oz + lz + corner[2];
      if (f === 2 || f === 3) wa.U.push(wx, wz); // 顶/底面
      else if (f === 0 || f === 1) wa.U.push(wz, py); // ±X 侧
      else wa.U.push(wx, py); // ±Z 侧
      wa.C.push(shade, shade, shade);
      wa.L.push(sky, blk);
    }
    wa.I.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };
  // 角高度(MC 平均法)：该角周围 4 格水的自身高度平均；近满(≥0.8)权重×10；空气计 0 高度。
  //  被"水或不透明方块"盖住头顶的水格 → 灌满到顶(高度 1)，否则方块下的浅水会露出空洞/缝。
  const cornerH = (wy: number, cells: [number, number][]): number => {
    let total = 0;
    let count = 0;
    for (const [cx, cz] of cells) {
      const a = world.waterAmount(cx, wy, cz);
      if (world.waterAmount(cx, wy + 1, cz) > 0) return 1; // 上方有水(柱内) → 满
      if (a > 0 && isOpaque(world.getBlock(cx, wy + 1, cz))) return 1; // 头顶是实心方块的水 → 灌满到顶
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
          // 侧面：只对【空气邻】画整段水墙。
          //  较低的"水邻"不再单独画侧面——相邻水格顶面用 cornerH 已是连续的(共享角等高，
          //  高度差表现为斜坡)，若再用 ownH(amount/9) 当侧面底边会和邻格真实顶面对不上，露竖缝(BUG)。
          const side = (f: number, dx: number, dz: number, yTop: number[]): void => {
            const nb = world.getBlock(wx + dx, ly, wz + dz);
            if (nb === 0) emitWaterFace(lx, ly, lz, f, yTop); // 仅空气邻
          };
          side(Face.PosX, 1, 0, [0, h10, h11, 0]);
          side(Face.NegX, -1, 0, [0, 0, h01, h00]);
          side(Face.PosZ, 0, 1, [0, 0, h11, h01]);
          side(Face.NegZ, 0, -1, [0, h00, h10, 0]);
        } else if (id === TORCH) {
          emitTorch(lx, lz, ly);
        }
      }
    }
  }

  return { opaque: toMeshData(op), cutout: toMeshData(cut), water: toMeshData(wa), torch: toMeshData(to) };
}
