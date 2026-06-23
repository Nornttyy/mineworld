import { Section } from '../world/section';
import { World } from '../world/world';
import { ChunkWorld } from '../world/chunkWorld';
import { CHUNK_W, CHUNK_H } from '../world/chunk';
import { isSolidId, isOpaque, isWaterId, isCutoutId, isPlantId, blockFaceTile, blockLight, Face, TORCH, TALL_GRASS, SNOW_LAYER, ICE } from '../blocks/registry';
import { computeSkyLight, computeBlockLight } from '../light/skylight';

const ATLAS_COLS = 4;
const ATLAS_ROWS = 9; // 4×9=36 槽（18-25 下界, 26-31 沙漠/雪原, 32-34 合成储存）；与 gen_textures.py、DropRenderer、FirstPersonHand 同步
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
  normals?: Float32Array; // 只有旧 meshGrid 路径产出；区块走 MeshBasicMaterial 不打灯，不需法线(省 ~23% 顶点带宽)
  uvs: Float32Array;
  colors: Float32Array;
  indices: Uint16Array | Uint32Array; // 顶点 ≤65535 用 Uint16，索引带宽/显存减半
  light?: Float32Array; // 每顶点 (天光01, 方块光01)，itemSize 2；交给 shader 按昼夜合成亮度。火把网格不带。
  top?: Float32Array; // 仅水：每顶点是否在水面(1=面顶,0=侧壁底)，光影里只让水面顶点起伏(侧壁底不动,免穿帮)
  sway?: Float32Array; // 仅 cutout：每顶点摆动权重 0..1（草丛底=0顶=1根锚定；树叶=1整体摆）
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
  U: number[];
  C: number[];
  I: number[];
  L: number[]; // 每顶点 (天光01, 方块光01)
  T: number[]; // 仅水用：每顶点是否在水面(1/0)；其余网格留空
  SW: number[]; // 仅 cutout：每顶点摆动权重 0..1（草丛底=0顶=1；树叶=1）
}
const emptyArrays = (): FaceArrays => ({ P: [], U: [], C: [], I: [], L: [], T: [], SW: [] });
const toMeshData = (a: FaceArrays): MeshData => {
  const verts = a.P.length / 3;
  return {
    positions: new Float32Array(a.P),
    uvs: new Float32Array(a.U),
    colors: new Float32Array(a.C),
    // 顶点数没超 Uint16 上限就用 Uint16(绝大多数区块如此)，否则退回 Uint32
    indices: verts <= 65535 ? new Uint16Array(a.I) : new Uint32Array(a.I),
    light: new Float32Array(a.L),
    top: a.T.length ? new Float32Array(a.T) : undefined,
    sway: a.SW.length ? new Float32Array(a.SW) : undefined,
  };
};

export interface ChunkMesh {
  opaque: MeshData;
  cutout: MeshData; // 镂空(树叶等，alpha-test)
  water: MeshData;
  torch: MeshData; // 火把：暖色小十字，自发光(不参与天光 shader)
}

// 网格化无限世界中的一个区块 (cx,cz)，分别产出"不透明"和"水"两套网格。
// 位置用区块局部坐标；邻居按世界坐标采样（含相邻区块），故接缝正确剔除、无内墙。
export function meshChunkData(
  cx: number,
  cz: number,
  getBlock: (wx: number, wy: number, wz: number) => number,
  waterAmount: (wx: number, wy: number, wz: number) => number,
): ChunkMesh {
  const ox = cx * CHUNK_W;
  const oz = cz * CHUNK_W;
  const op = emptyArrays();
  const cut = emptyArrays();
  const wa = emptyArrays();
  const to = emptyArrays(); // 火把
  const eps = 0.01 / (TILE_PX * ATLAS_COLS);
  const du = 1 / ATLAS_COLS - 2 * eps;
  const dv = 1 / ATLAS_ROWS - 2 * eps;

  const occ = (x: number, y: number, z: number): boolean => isOpaque(getBlock(x, y, z));

  // 光照：对本区块 + 1 格光晕(覆盖邻块边界，让边界面取到邻块的光)算每格天光 + 方块光，各 0..15。
  // 顶点存"该面朝向格"的 (天光, 方块光)，交给材质 shader 合成亮度——昼夜只缩放天光，火把光恒定。
  const LW = CHUNK_W + 2;
  // 半透明衰减(同 MC opacity)：水/树叶 = 1（光穿过它们每格额外 −1 → 水下越深越暗）。
  const opac = (hx: number, hy: number, hz: number): number => {
    const id = getBlock(ox + hx - 1, hy, oz + hz - 1);
    return isWaterId(id) || isCutoutId(id) ? 1 : 0;
  };
  const skyLight = computeSkyLight(LW, CHUNK_H, (hx, hy, hz) => occ(ox + hx - 1, hy, oz + hz - 1), opac);
  const blkLight = computeBlockLight(
    LW,
    CHUNK_H,
    (hx, hy, hz) => blockLight(getBlock(ox + hx - 1, hy, oz + hz - 1)),
    (hx, hy, hz) => occ(ox + hx - 1, hy, oz + hz - 1),
    opac,
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
  // 平滑光照(同 MC smooth lighting)：某面某角，取"面外格 + 两条边格 + 对角格"中【非遮挡】格的
  // (天光,方块光) 平均 → 顶点间渐变、柔和的明暗，而不是整面一个平铺光值。(ex,ey,ez)=面外那一格(local)。
  const cornerLight = (ex: number, ey: number, ez: number, f: number, k: number): [number, number] => {
    const ax = AO_AXES[f];
    const corner = DIRS[f].c[k];
    const su = corner[ax.ui] === 1 ? 1 : -1;
    const sv = corner[ax.vi] === 1 ? 1 : -1;
    const s1x = ex + su * ax.u[0], s1y = ey + su * ax.u[1], s1z = ez + su * ax.u[2];
    const s2x = ex + sv * ax.v[0], s2y = ey + sv * ax.v[1], s2z = ez + sv * ax.v[2];
    const ccx = s1x + sv * ax.v[0], ccy = s1y + sv * ax.v[1], ccz = s1z + sv * ax.v[2];
    const o1 = occ(ox + s1x, s1y, oz + s1z);
    const o2 = occ(ox + s2x, s2y, oz + s2z);
    const oc = occ(ox + ccx, ccy, oz + ccz);
    let sSum = skyAt(ex, ey, ez), bSum = blkAt(ex, ey, ez), n = 1;
    if (!o1) { sSum += skyAt(s1x, s1y, s1z); bSum += blkAt(s1x, s1y, s1z); n++; }
    if (!o2) { sSum += skyAt(s2x, s2y, s2z); bSum += blkAt(s2x, s2y, s2z); n++; }
    if (!(o1 && o2) && !oc) { sSum += skyAt(ccx, ccy, ccz); bSum += blkAt(ccx, ccy, ccz); n++; } // 两侧都挡→对角被藏，不计
    return [sSum / n / 15, bSum / n / 15];
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
    const base = a.P.length / 3;
    const ao = [0, 0, 0, 0];
    for (let k = 0; k < 4; k++) {
      const corner = d.c[k];
      ao[k] = cornerAO(occ, ox + lx, ly, oz + lz, f, k);
      const c = shade * ao[k]; // 几何阴影 × AO；天光/方块光由 shader 再乘
      const [sky, blk] = cornerLight(ex, ey, ez, f, k); // 每角平滑光照
      a.P.push(lx + corner[0], ly + corner[1], lz + corner[2]);
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
    if (a === cut) a.SW.push(1, 1, 1, 1); // cutout(树叶等)：整体摆
  };

  // 火把：在格中心立一个暖色"交叉竖片"小网格，自发光(走独立材质，不参与天光 shader)。
  const emitTorch = (lx: number, lz: number, ly: number): void => {
    const cx = lx + 0.5;
    const cz = lz + 0.5;
    const r = 0.09; // 细杆(原 0.34 太粗→像个大X,不像火把)；细十字билборд=任意角度都是一根细棍
    const h = 0.62;
    const body = [0.42, 0.28, 0.13]; // 棍身棕
    const tip = [1.0, 0.8, 0.32]; // 顶端火光暖橙黄
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
        to.U.push(0, 0);
        to.C.push(v[3], v[4], v[5]);
      }
      to.I.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
  };

  // 草丛/长草：格中心两片交叉竖片(cross billboard)，贴 grass_plant 图、入 cutout(alpha-test+双面)批。
  // 高度 hgt 由调用方给(草矮/长草高)；光照取本格天光/方块光(露天满、树下变暗)。
  const emitPlant = (lx: number, ly: number, lz: number, tile: number, hgt: number): void => {
    const u0 = (tile % ATLAS_COLS) / ATLAS_COLS + eps;
    const u1 = u0 + du;
    const vB = 1 - (Math.floor(tile / ATLAS_COLS) + 1) / ATLAS_ROWS + eps; // 底边 V
    const vT = vB + dv; // 顶边 V
    const sky = skyAt(lx, ly, lz) / 15;
    const blk = blkAt(lx, ly, lz) / 15;
    const sh = 0.9; // 无 AO，轻微压暗
    const cx = lx + 0.5;
    const cz = lz + 0.5;
    const r = 0.5;
    const quads: [number, number, number, number][] = [
      [cx - r, cz - r, cx + r, cz + r], // 对角片
      [cx - r, cz + r, cx + r, cz - r], // 反对角片
    ];
    for (const [x0, z0, x1, z1] of quads) {
      const base = cut.P.length / 3;
      cut.P.push(x0, ly, z0, x1, ly, z1, x1, ly + hgt, z1, x0, ly + hgt, z0); // 底左,底右,顶右,顶左
      cut.U.push(u0, vB, u1, vB, u1, vT, u0, vT);
      cut.C.push(sh, sh, sh, sh, sh, sh, sh, sh, sh, sh, sh, sh);
      cut.L.push(sky, blk, sky, blk, sky, blk, sky, blk);
      cut.SW.push(0, 0, 1, 1); // 底左,底右=根锚定(0)；顶右,顶左=草尖摆(1)
      cut.I.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
  };

  // 雪层：贴地薄水平四边形，高度偏移 0.06，整张 snow tile，入 cutout(双面) 批。
  // 不用 cross billboard——雪是贴地平铺，不是竖立交叉片。
  const emitSnowLayer = (lx: number, ly: number, lz: number, tile: number): void => {
    const u0 = (tile % ATLAS_COLS) / ATLAS_COLS + eps;
    const u1 = u0 + du;
    const vB = 1 - (Math.floor(tile / ATLAS_COLS) + 1) / ATLAS_ROWS + eps;
    const vT = vB + dv;
    const sky = skyAt(lx, ly, lz) / 15;
    const blk = blkAt(lx, ly, lz) / 15;
    const sh = 1.0; // 顶面满亮度
    const yTop = ly + 0.06; // 薄层高度：贴地 6% 格高
    const base = cut.P.length / 3;
    // 一张水平四边形：4 角按顶面 DIRS[2].c 排列（+Y 面 CCW）
    cut.P.push(lx, yTop, lz,  lx, yTop, lz + 1,  lx + 1, yTop, lz + 1,  lx + 1, yTop, lz);
    cut.U.push(u0, vB,  u0, vT,  u1, vT,  u1, vB);
    cut.C.push(sh, sh, sh,  sh, sh, sh,  sh, sh, sh,  sh, sh, sh);
    cut.L.push(sky, blk,  sky, blk,  sky, blk,  sky, blk);
    cut.I.push(base, base + 1, base + 2,  base, base + 2, base + 3);
  };

  // 水专用：按每个角的高度 yArr[4]（对应 DIRS[f].c 顺序）发射一个面，可画斜水面/落差侧壁。
  // UV 用世界坐标平铺（顶/底用 x,z；侧面用 水平,y）：整片水面连续平铺、斜水面不会扭曲，
  // 配合独立可滚动水纹理做流动动画。
  // 起伏权重：1=平静水面(湖/海,头顶是空气)→可大幅上下起伏；0=水柱内/瀑布体(头顶还是水)→不起伏，避免流水/瀑布撕缝。每个水格设一次。
  let waterWobble = 1;
  let waterDepth = 1; // 当前水格所在水柱深度(格,封顶7)；每个水格设一次,emitWaterFace 写入每顶点
  const emitWaterFace = (lx: number, ly: number, lz: number, f: number, yArr: number[]): void => {
    const d = DIRS[f];
    const shade = FACE_SHADE[f];
    const sky = skyAt(lx + d.o[0], ly + d.o[1], lz + d.o[2]) / 15; // 该面朝向格的光，交 shader 合成
    const blk = blkAt(lx + d.o[0], ly + d.o[1], lz + d.o[2]) / 15;
    const base = wa.P.length / 3;
    const topFace = f === 2; // Face.PosY=水面
    for (let k = 0; k < 4; k++) {
      const corner = d.c[k];
      const py = ly + yArr[k];
      wa.P.push(lx + corner[0], py, lz + corner[2]);
      const wx = ox + lx + corner[0];
      const wz = oz + lz + corner[2];
      if (f === 2 || f === 3) wa.U.push(wx, wz); // 顶/底面
      else if (f === 0 || f === 1) wa.U.push(wz, py); // ±X 侧
      else wa.U.push(wx, py); // ±Z 侧
      wa.C.push(shade, shade, shade);
      wa.L.push(sky, blk);
      // 水面顶点(顶面全部 + 侧壁上沿 yArr>0)起伏权重=waterWobble；侧壁底沿/底面=0 不动(免穿帮露缝)。
      // 平静水(waterWobble=1)整面随涌浪起伏；瀑布/落水体(=0)不起伏 → 流水不撕缝。
      const wob = (topFace || yArr[k] > 0.01) ? waterWobble : 0; // 0/1 起伏 gate
      wa.T.push((wob > 0 ? 1 : -1) * waterDepth); // aTop=带符号水深:|值|=水柱深度(片元调透明),符号=起伏 gate(复用现有属性,不新增=零额外显存)
    }
    wa.I.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };
  // 角高度(MC 平均法)：该角周围 4 格水的自身高度平均；近满(≥0.8)权重×10；空气计 0 高度。
  //  只有"上方还是水"(同一水柱内)才算满；头顶是方块【不再】强行灌满——否则流进/放方块后的浅水会被画成整块
  //  (用户报的 bug：放方块后水变整块)。水在真实高度画出水面(下方顶面逻辑已改成头顶有方块也画顶面)。
  const cornerH = (wy: number, cells: [number, number][]): number => {
    let total = 0;
    let count = 0;
    for (const [cx, cz] of cells) {
      const a = waterAmount(cx, wy, cz);
      if (waterAmount(cx, wy + 1, cz) > 0) return 1; // 上方有水(柱内) → 满
      if (a > 0) {
        const h = a / 9;
        if (h >= 0.8) {
          total += h * 10;
          count += 10;
        } else {
          total += h;
          count += 1;
        }
      } else if (!isSolidId(getBlock(cx, wy, cz))) {
        count += 1; // 空气：贡献 0 高度，把该角往下拉成斜坡
      }
    }
    return count > 0 ? total / count : 0.5;
  };

  for (let ly = 0; ly < CHUNK_H; ly++) {
    for (let lz = 0; lz < CHUNK_W; lz++) {
      for (let lx = 0; lx < CHUNK_W; lx++) {
        const id = getBlock(ox + lx, ly, oz + lz);
        if (isOpaque(id)) {
          for (let f = 0; f < 6; f++) {
            const d = DIRS[f];
            // 不透明面：邻格也不透明才剔除（露给空气/水都要画）
            if (isOpaque(getBlock(ox + lx + d.o[0], ly + d.o[1], oz + lz + d.o[2]))) continue;
            emit(op, lx, ly, lz, id, f);
          }
        } else if (isCutoutId(id)) {
          for (let f = 0; f < 6; f++) {
            const d = DIRS[f];
            // 镂空(树叶)：像 MC「精细」叶——只对【不透明实心邻】剔面；叶-叶之间也画 → 树冠密实、挖进去里面仍是叶子(不透空)
            if (isOpaque(getBlock(ox + lx + d.o[0], ly + d.o[1], oz + lz + d.o[2]))) continue;
            emit(cut, lx, ly, lz, id, f);
          }
        } else if (isWaterId(id)) {
          const wx = ox + lx;
          const wz = oz + lz;
          // 头顶是空气=平静水面(可起伏)；头顶还是水=水柱内/瀑布体(不起伏，免流水/瀑布撕缝)。
          waterWobble = waterAmount(wx, ly + 1, wz) > 0 ? 0 : 1;
          // 水柱深度:向上找到水面 + 向下找到底(封顶7格,够 shader 区分浅/深)。浅水透、深水实。
          let wd = 1;
          for (let yy = ly + 1; wd < 7 && yy < CHUNK_H && waterAmount(wx, yy, wz) > 0; yy++) wd++;
          for (let yy = ly - 1; wd < 7 && yy >= 0 && waterAmount(wx, yy, wz) > 0; yy--) wd++;
          waterDepth = wd;
          // 四角高度（取邻格平均 → 顺流斜面）。角命名 hAB：A=本格 x 侧(0/1)，B=z 侧(0/1)。
          const h00 = cornerH(ly, [[wx, wz], [wx - 1, wz], [wx, wz - 1], [wx - 1, wz - 1]]);
          const h01 = cornerH(ly, [[wx, wz], [wx - 1, wz], [wx, wz + 1], [wx - 1, wz + 1]]);
          const h11 = cornerH(ly, [[wx, wz], [wx + 1, wz], [wx, wz + 1], [wx + 1, wz + 1]]);
          const h10 = cornerH(ly, [[wx, wz], [wx + 1, wz], [wx, wz - 1], [wx + 1, wz - 1]]);
          // 顶面（上方只要不是水就画——【即便头顶有方块】也在水的真实高度画出水面）：
          //  这样"流进上方有方块的格"的水看得见(修 bug：覆盖格的水流进去却看不见、像没流进)，
          //  且不会被强行画成整块。水面高度 < 1(/9 上限≈0.89)，恒低于头顶方块底面，不会穿帮/z-fight。
          if (waterAmount(wx, ly + 1, wz) === 0) {
            emitWaterFace(lx, ly, lz, Face.PosY, [h00, h01, h11, h10]);
          }
          // 底面：下方是空气才画
          if (getBlock(wx, ly - 1, wz) === 0) emitWaterFace(lx, ly, lz, Face.NegY, [0, 0, 0, 0]);
          // 侧面：只对【空气邻】画整段水墙。
          //  较低的"水邻"不再单独画侧面——相邻水格顶面用 cornerH 已是连续的(共享角等高，
          //  高度差表现为斜坡)，若再用 ownH(amount/9) 当侧面底边会和邻格真实顶面对不上，露竖缝(BUG)。
          const side = (f: number, dx: number, dz: number, yTop: number[]): void => {
            const nb = getBlock(wx + dx, ly, wz + dz);
            if (nb === 0) emitWaterFace(lx, ly, lz, f, yTop); // 仅空气邻
          };
          side(Face.PosX, 1, 0, [0, h10, h11, 0]);
          side(Face.NegX, -1, 0, [0, 0, h01, h00]);
          side(Face.PosZ, 0, 1, [0, 0, h11, h01]);
          side(Face.NegZ, 0, -1, [0, h00, h10, 0]);
        } else if (id === TORCH) {
          emitTorch(lx, lz, ly);
        } else if (isPlantId(id)) {
          if (id === SNOW_LAYER) {
            emitSnowLayer(lx, ly, lz, blockFaceTile(id, Face.PosY));
          } else {
            emitPlant(lx, ly, lz, blockFaceTile(id, Face.PosY), id === TALL_GRASS ? 1.45 : 0.82); // 草矮、长草高
          }
        } else if (id === ICE) {
          // 冰：solid+transparent 但非 cutout；按不透明方块渲染（贴图本身无 alpha，走 opaque 批）
          for (let f = 0; f < 6; f++) {
            const d = DIRS[f];
            if (isOpaque(getBlock(ox + lx + d.o[0], ly + d.o[1], oz + lz + d.o[2]))) continue;
            emit(op, lx, ly, lz, id, f);
          }
        }
      }
    }
  }

  return { opaque: toMeshData(op), cutout: toMeshData(cut), water: toMeshData(wa), torch: toMeshData(to) };
}

// 主线程入口(同步；用于 remeshDirty 即时重建、无 Worker 测试回退)：包一层 ChunkWorld 的访问器。
export function meshChunk(w: ChunkWorld, cx: number, cz: number): ChunkMesh {
  return meshChunkData(
    cx,
    cz,
    (wx, wy, wz) => w.getBlock(wx, wy, wz),
    (wx, wy, wz) => w.waterAmount(wx, wy, wz),
  );
}
