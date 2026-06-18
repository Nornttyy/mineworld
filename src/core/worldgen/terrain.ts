import { World } from '../world/world';
import { Chunk, CHUNK_W, CHUNK_H, flByte } from '../world/chunk';
import { worldToChunk, localCoord } from '../world/coords';
import { fbm2, hash2, fbm3, valueNoise3 } from '../math/noise';
import { WATER, OAK_LOG, OAK_LEAVES } from '../blocks/registry';

// 方块 id（见 core/blocks/registry）
const STONE = 1;
const DIRT = 2;
const GRASS = 3;
const SAND = 5;
const COAL_ORE = 8;
const IRON_ORE = 12;
export const SEA_LEVEL = 18; // 海平面：低于此的地表注水、岸边铺沙
const SEA_FLUID = flByte(8, true, false); // 生成水的流体字节：满量源头

// 多种洞穴类型叠加，判断某格是否为空腔。调用方在土层也调它 → 部分洞穴破顶=露天；
// 海床(height<海平面)下的洞穴自然成水底矿洞。返回 true=挖空。
function caveAt(wx: number, wy: number, wz: number, seed: number): boolean {
  // 小矿洞：两条 fbm3 等值面相交 → 蜿蜒细管(spaghetti caves)
  const a = fbm3(wx / 26, wy / 18, wz / 26, seed + 555);
  const b = fbm3(wx / 26, wy / 18, wz / 26, seed + 1555);
  if (Math.abs(a - 0.5) < 0.02 && Math.abs(b - 0.5) < 0.055) return true;
  // 中矿洞：单 fbm3 中等带宽隧道
  const m = fbm3(wx / 17, wy / 12, wz / 17, seed + 222);
  if (Math.abs(m - 0.5) < 0.02) return true;
  // 大矿洞：低频 3D 噪声谷底 → 偶发大空腔洞室(cheese caves)
  const room = fbm3(wx / 34, wy / 24, wz / 34, seed + 700);
  if (room < 0.12) return true;
  // 峡谷：2D 蜿蜒窄缝(横向极窄) + 竖直深切(从深处一直到近地表)
  const rv = fbm2(wx / 110, wz / 110, seed + 888);
  if (Math.abs(rv - 0.5) < 0.006 && wy >= 3) return true;
  return false;
}

// 矿石(仅石层、非洞穴格)：煤各深度、铁偏中下层。返回石头或矿石 id。
function oreAt(wx: number, wy: number, wz: number, height: number, seed: number): number {
  const coal = valueNoise3(wx / 4.5, wy / 4.5, wz / 4.5, seed + 101);
  if (coal > 0.84) return COAL_ORE;
  const iron = valueNoise3(wx / 4, wy / 4, wz / 4, seed + 202);
  if (iron > 0.83 && wy <= height * 0.6) return IRON_ORE;
  return STONE;
}

// 某世界列 (wx,wz) 的地表高度（用世界坐标采样，跨区块连续，确定性）。
// 叠加多种尺度形成：大海(大陆度)、池子(丘陵凹陷)、河流(蜿蜒细谷)。
export function columnHeight(wx: number, wz: number, seed: number): number {
  const continent = fbm2(wx / 220, wz / 220, seed, 4); // 大尺度：海(低) vs 陆(高)
  const hills = fbm2(wx / 42, wz / 42, seed + 17, 4); // 中尺度：丘陵/小池
  let h = 2 + continent * 46 + (hills - 0.5) * 12;

  // 河流：一条横贯地图的蜿蜒河谷。沿河心把地形平滑压到水下，两岸用 smoothstep
  // 渐变成谷(不是突兀的峭壁)，因此平原、丘陵都能被一条河穿过、与海/湖相连。
  // 宽度随位置变 → 河有宽有窄、有长有短。
  {
    const rn = fbm2(wx / 140, wz / 140, seed + 777, 3); // 蜿蜒场
    const dist = Math.abs(rn - 0.5); // 沿蜿蜒中线≈0
    const width = 0.035 + hills * 0.03;
    if (dist < width) {
      let t = 1 - dist / width; // 0..1，河心=1
      t = t * t * (3 - 2 * t); // smoothstep：岸边平滑过渡
      const bed = SEA_LEVEL - 2; // 河床高度
      h = h * (1 - t) + bed * t; // 向河床平滑下切
    }
  }
  return Math.floor(h);
}

// ── 树木（橡树）─────────────────────────────────────────────────────────────
// 树冠最大水平半径：邻近区块里这么近的树会把枝叶探进本区块，生成时须一并考虑。
const TREE_MARGIN = 2;
const TREE_MAX_DENSITY = 0.08; // 便宜的快速剔除上限（须 ≥ treeDensity 最大值=森林密度）

// 生物群系：大尺度噪声把世界分成平原(开阔、几乎无树)与森林(密树)，中间平滑过渡。
// 返回 0..1：<0.45 平原，>0.62 森林，之间过渡带。
export function biomeForest(wx: number, wz: number, seed: number): number {
  return fbm2(wx / 130, wz / 130, seed + 4321, 2);
}
// 某列长树的概率：平原极稀疏(开阔)、森林茂密(树冠近乎相连)。
function treeDensity(wx: number, wz: number, seed: number): number {
  const f = biomeForest(wx, wz, seed);
  if (f < 0.45) return 0.003; // 平原：几乎无树
  if (f > 0.62) return 0.08; // 森林：密树
  return 0.003 + ((f - 0.45) / 0.17) * 0.077; // 过渡带
}

// 树干高 4~6（确定性 → 接缝处同一棵树形状一致）
function treeHeight(wx: number, wz: number, seed: number): number {
  return 4 + Math.floor(hash2(wx, wz, seed * 31 + 5) * 3);
}

// 在本区块放一棵根在世界列 (rootWx,rootWz) 的橡树；只写落在本区块内的方块。
// ground = 该列草块 y。先放叶后放干，保证树干中心不被叶子盖住。
function placeTree(
  c: Chunk,
  cx: number,
  cz: number,
  rootWx: number,
  rootWz: number,
  ground: number,
  seed: number,
): void {
  const topY = ground + treeHeight(rootWx, rootWz, seed); // 最高那块原木

  const put = (wx: number, wy: number, wz: number, id: number, onlyIfAir: boolean): void => {
    if (wy < 0 || wy >= CHUNK_H) return;
    if (worldToChunk(wx) !== cx || worldToChunk(wz) !== cz) return; // 只写本区块（跨界部分留给邻块自己生成）
    const lx = localCoord(wx);
    const lz = localCoord(wz);
    if (onlyIfAir && c.get(lx, wy, lz) !== 0) return; // 叶子不覆盖地形/原木
    c.set(lx, wy, lz, id);
  };

  // 下两层 5×5（去四角→八边形），围住上部树干
  for (const dy of [-2, -1]) {
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        if (Math.abs(dx) === 2 && Math.abs(dz) === 2) continue; // 去角
        put(rootWx + dx, topY + dy, rootWz + dz, OAK_LEAVES, true);
      }
    }
  }
  // 顶层 3×3
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      put(rootWx + dx, topY, rootWz + dz, OAK_LEAVES, true);
    }
  }
  // 树冠顶：十字小帽
  const cap: ReadonlyArray<readonly [number, number]> = [
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  for (const [dx, dz] of cap) put(rootWx + dx, topY + 1, rootWz + dz, OAK_LEAVES, true);
  // 树干（覆盖中心叶子/空气）
  for (let y = ground + 1; y <= topY; y++) put(rootWx, y, rootWz, OAK_LOG, false);
}

// 生成单个区块列 (cx,cz)：石基→土→草顶；海平面以下注水、岸边铺沙；最后种树。确定性、跨区块无缝。
export function generateChunk(cx: number, cz: number, seed: number): Chunk {
  const c = new Chunk();
  for (let lz = 0; lz < CHUNK_W; lz++) {
    for (let lx = 0; lx < CHUNK_W; lx++) {
      const wx = cx * CHUNK_W + lx;
      const wz = cz * CHUNK_W + lz;
      const height = columnHeight(wx, wz, seed);
      const beach = height <= SEA_LEVEL + 1; // 海平面附近用沙
      for (let y = 0; y <= height; y++) {
        // 洞穴优先：底2层除外、草顶(y==height)保留；可挖穿土层 → 露天，海床下 → 水底矿洞
        if (y > 1 && y < height && caveAt(wx, y, wz, seed)) continue; // 留空气
        let id = STONE;
        if (y === height) id = beach ? SAND : GRASS;
        else if (y >= height - 3) id = beach ? SAND : DIRT;
        else id = oreAt(wx, y, wz, height, seed); // 石层：矿脉/石
        c.set(lx, y, lz, id);
      }
      for (let y = height + 1; y <= SEA_LEVEL; y++) {
        c.set(lx, y, lz, WATER); // 注水到海平面
        c.setFluid(lx, y, lz, SEA_FLUID); // 海/湖/河皆为稳定源头(满量)
      }
    }
  }

  // 装饰：种树。外扩 TREE_MARGIN 遍历，让邻列的树把枝叶探进本区块（接缝处不断树）。
  const x0 = cx * CHUNK_W;
  const z0 = cz * CHUNK_W;
  for (let wx = x0 - TREE_MARGIN; wx < x0 + CHUNK_W + TREE_MARGIN; wx++) {
    for (let wz = z0 - TREE_MARGIN; wz < z0 + CHUNK_W + TREE_MARGIN; wz++) {
      const r = hash2(wx, wz, seed * 13 + 7);
      if (r >= TREE_MAX_DENSITY) continue; // 便宜地剔除绝大多数列
      const g = columnHeight(wx, wz, seed);
      if (g <= SEA_LEVEL + 1) continue; // 只在草地（避开沙滩/水）
      if (r < treeDensity(wx, wz, seed)) placeTree(c, cx, cz, wx, wz, g, seed);
    }
  }

  c.dirty = true;
  return c;
}

export interface TerrainOptions {
  sizeX?: number;
  sizeZ?: number;
  seed?: number;
}

// 噪声高度图 → 起伏地形：石基、表层土、草顶；低洼处铺沙（"海滩"）。确定性。
export function generateTerrain(opts: TerrainOptions = {}): World {
  const sizeX = opts.sizeX ?? 64;
  const sizeZ = opts.sizeZ ?? 64;
  const seed = opts.seed ?? 1337;
  const sy = 48;
  const beach = 13; // 此高度及以下的地表用沙
  const w = new World(sizeX, sy, sizeZ);

  for (let z = 0; z < sizeZ; z++) {
    for (let x = 0; x < sizeX; x++) {
      const n = fbm2(x / 40, z / 40, seed, 4); // [0,1) 平缓丘陵
      const height = Math.floor(10 + n * 24); // 10..33
      const sandy = height <= beach;
      for (let y = 0; y <= height; y++) {
        let id = STONE;
        if (y === height) id = sandy ? SAND : GRASS;
        else if (y >= height - 3) id = sandy ? SAND : DIRT;
        w.set(x, y, z, id);
      }
    }
  }
  return w;
}

// 取某 (x,z) 列的地表高度（最高非空气块的 y），供出生点站位用
export function surfaceHeight(world: World, x: number, z: number): number {
  for (let y = world.sy - 1; y >= 0; y--) if (world.get(x, y, z) !== 0) return y;
  return 0;
}
