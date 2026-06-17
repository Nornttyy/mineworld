import { World } from '../world/world';
import { Chunk, CHUNK_W, CHUNK_H } from '../world/chunk';
import { worldToChunk, localCoord } from '../world/coords';
import { fbm2, hash2 } from '../math/noise';
import { WATER, OAK_LOG, OAK_LEAVES } from '../blocks/registry';

// 方块 id（见 core/blocks/registry）
const STONE = 1;
const DIRT = 2;
const GRASS = 3;
const SAND = 5;
export const SEA_LEVEL = 18; // 海平面：低于此的地表注水、岸边铺沙

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
const TREE_MAX_DENSITY = 0.07; // 便宜的快速剔除上限（须 ≥ treeDensity 的最大可能值）

// 某列长树的概率：低频噪声造出"森林斑块"——平原稀疏、林区茂密。
function treeDensity(wx: number, wz: number, seed: number): number {
  const forest = fbm2(wx / 70, wz / 70, seed + 4321, 2); // 0..1 森林场
  return 0.01 + Math.max(0, forest - 0.5) * 0.22; // 平原~1%，林区~6.5%
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
      const height = columnHeight(cx * CHUNK_W + lx, cz * CHUNK_W + lz, seed);
      const beach = height <= SEA_LEVEL + 1; // 海平面附近用沙
      for (let y = 0; y <= height; y++) {
        let id = STONE;
        if (y === height) id = beach ? SAND : GRASS;
        else if (y >= height - 3) id = beach ? SAND : DIRT;
        c.set(lx, y, lz, id);
      }
      for (let y = height + 1; y <= SEA_LEVEL; y++) c.set(lx, y, lz, WATER); // 注水到海平面
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
