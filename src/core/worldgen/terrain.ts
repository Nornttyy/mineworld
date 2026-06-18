import { World } from '../world/world';
import { Chunk, CHUNK_W, CHUNK_H, flByte } from '../world/chunk';
import { worldToChunk, localCoord } from '../world/coords';
import { fbm2, hash2, valueNoise3 } from '../math/noise';
import { WATER, OAK_LOG, OAK_LEAVES } from '../blocks/registry';

// 方块 id（见 core/blocks/registry）
const STONE = 1;
const DIRT = 2;
const GRASS = 3;
const SAND = 5;
const COAL_ORE = 8;
const IRON_ORE = 12;
export const SEA_LEVEL = 116; // 海平面(地表~99-151 偏下段→陆多海少~45%)：低于此注水成海/湖，岸边铺沙
const SEA_FLUID = flByte(8, true, false); // 生成水的流体字节：满量源头

// 地形是否平坦：四向各 5 格内地表高度差都 ≤3。峡谷只在平坦处刷，免把山体切碎成条纹。
function isFlat(wx: number, wz: number, seed: number): boolean {
  const h = columnHeight(wx, wz, seed);
  return (
    Math.abs(columnHeight(wx + 5, wz, seed) - h) <= 3 &&
    Math.abs(columnHeight(wx - 5, wz, seed) - h) <= 3 &&
    Math.abs(columnHeight(wx, wz + 5, seed) - h) <= 3 &&
    Math.abs(columnHeight(wx, wz - 5, seed) - h) <= 3
  );
}

// 多种洞穴类型叠加，判断某格是否为空腔。调用方限制 y<height-3(洞穴只在地表下≥4格)，
// 故洞穴不碰土层/草顶 → 山坡再陡也不会露出方块条纹。返回 true=挖空。
// 矿洞(按深度分层)：浅层小矿洞为主+少量中、中层中矿洞+一些大、深层大矿洞。
// depth=地表往下的格数；每层只算该层需要的噪声(省算力)。峡谷另算(ravineAt)，不算矿洞。
// hmin=周围最低地表、flat=是否平坦，都只依赖 (wx,wz)→由调用方按列算一次传入(避免每格重算 9 次 columnHeight，这是生成耗时主因)。
function caveAt(wx: number, wy: number, wz: number, hmin: number, flat: boolean, seed: number): boolean {
  // 露天矿洞口：只在【平坦地形】开(山陡坡不破→不出现山体方块缺口)，稀疏大竖井贯通地表
  if (flat && Math.abs(valueNoise3(wx / 7, wy / 72, wz / 7, seed + 888) - 0.5) < 0.05) return true;
  const depth = hmin - wy;
  if (depth < 12) return false; // 距周围最低地表 12 格内留实心(山坡侧面也不破洞)
  // domain warp：用低频噪声把采样坐标推歪 → 洞穴蜿蜒弯曲(单层 valueNoise3 等值面太规整笔直)；仅 2 次噪声，远快于 fbm3
  const wxw = wx + (valueNoise3(wx / 36, wy / 30, wz / 36, seed + 991) - 0.5) * 26;
  const wzw = wz + (valueNoise3(wz / 36, wy / 30, wx / 36, seed + 992) - 0.5) * 26;
  if (depth < 50) {
    // 浅层：小矿洞，稀疏
    return Math.abs(valueNoise3(wxw / 14, wy / 10, wzw / 14, seed + 222) - 0.5) < 0.03;
  }
  if (depth < 100) {
    // 中层：中矿洞 + 一些大矿洞
    if (Math.abs(valueNoise3(wxw / 18, wy / 14, wzw / 18, seed + 333) - 0.5) < 0.05) return true;
    return valueNoise3(wxw / 22, wy / 16, wzw / 22, seed + 700) < 0.07;
  }
  // 深层：大矿洞为主 + 连通中隧道
  if (valueNoise3(wxw / 26, wy / 18, wzw / 26, seed + 700) < 0.16) return true;
  return Math.abs(valueNoise3(wxw / 18, wy / 14, wzw / 18, seed + 333) - 0.5) < 0.04;
}

// 峡谷(独立，不算矿洞)：平坦地形的竖直深裂缝，从近地表一直切到很深。flat 由调用方列级传入。
function ravineAt(wx: number, wy: number, wz: number, flat: boolean, seed: number): boolean {
  if (!flat || wy < 2) return false;
  const rv = fbm2(wx / 145, wz / 145, seed + 888);
  return Math.abs(rv - 0.5) < 0.02;
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
  const continent = fbm2(wx / 260, wz / 260, seed, 4); // 大尺度：海(低) vs 陆(高)，尺度放大=坡更缓
  const hills = fbm2(wx / 72, wz / 72, seed + 17, 3); // 中尺度丘陵：波长放缓+幅度减半 → 地表平滑、不再密集锯齿台阶
  // 起伏主要来自大尺度 continent(缓坡)，hills 只加小起伏(±5)；海/湖深度仍随 continent 自然变化。
  let h = 88 + continent * 100 + (hills - 0.5) * 10;

  // 河流：蜿蜒河谷下切；河床深度随噪声变化(3~8 格)，不再固定整齐。
  {
    const rn = fbm2(wx / 140, wz / 140, seed + 777, 3); // 蜿蜒场
    const dist = Math.abs(rn - 0.5);
    const width = 0.035 + hills * 0.03;
    if (dist < width) {
      let t = 1 - dist / width;
      t = t * t * (3 - 2 * t); // smoothstep：岸边平滑过渡
      const depth = 3 + Math.floor(fbm2(wx / 60, wz / 60, seed + 555, 2) * 6); // 河床深 3~8 变化
      const bed = SEA_LEVEL - depth;
      h = h * (1 - t) + bed * t;
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
      // 列级预算(只依赖 wx,wz)：hmin=周围最低地表(洞穴防破坡)、flat=平坦(竖井/峡谷)。算一次，y 循环复用 → 省掉每格 9 次 columnHeight。
      const hmin = Math.min(
        height,
        columnHeight(wx + 4, wz, seed),
        columnHeight(wx - 4, wz, seed),
        columnHeight(wx, wz + 4, seed),
        columnHeight(wx, wz - 4, seed),
      );
      const flat = isFlat(wx, wz, seed);
      const beach = height <= SEA_LEVEL + 1; // 海平面附近用沙
      for (let y = 0; y <= height; y++) {
        // 洞穴优先：底2层除外、草顶(y==height)保留；可挖穿土层 → 露天，海床下 → 水底矿洞
        // 矿洞(按周围最低地表留表层、竖井除外=露天口)或峡谷(露天裂缝)。草顶 y==height 始终保留。
        if (y > 1 && y < height && (caveAt(wx, y, wz, hmin, flat, seed) || ravineAt(wx, y, wz, flat, seed))) continue;
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
