import { World } from '../world/world';
import { Chunk, CHUNK_W, CHUNK_H, flByte } from '../world/chunk';
import { worldToChunk, localCoord } from '../world/coords';
import { fbm2, hash2, valueNoise3 } from '../math/noise';
import { WATER, OAK_LOG, OAK_LEAVES, SANDSTONE, CACTUS, ICE, SNOW_LAYER, SPRUCE_LOG, SPRUCE_LEAVES, isSolidId, NETHERRACK, LAVA, GLOWSTONE, NETHER_QUARTZ_ORE, BEDROCK, SOUL_SAND } from '../blocks/registry';
import { biomeAt, biomeForest as _biomeForest } from './biome';

// Re-export biomeForest so existing callers (incl. biome.test.ts if any) still work.
// biomeForest now lives in biome.ts to avoid a circular import.
export { biomeForest } from './biome';

// 方块 id（见 core/blocks/registry）
const STONE = 1;
const DIRT = 2;
const GRASS = 3;
const SAND = 5;
const COAL_ORE = 8;
const IRON_ORE = 12;
const GRAVEL = 15;
const GRASS_PLANT = 16; // 草丛
const TALL_GRASS = 17; // 长草
export const SEA_LEVEL = 116; // 海平面(地表~99-151 偏下段→陆多海少~45%)：低于此注水成海/湖，岸边铺沙
const SEA_FLUID = flByte(8, true, false); // 生成水的流体字节：满量源头

// 地形是否平坦：四向各 5 格内地表高度差都 ≤3。竖井只在平坦处刷，免把山体切碎。
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
// depth=地表往下的格数；每层只算该层需要的噪声(省算力)。不算矿洞。
// hmin=周围最低地表、flat=是否平坦，都只依赖 (wx,wz)→由调用方按列算一次传入(避免每格重算 9 次 columnHeight，这是生成耗时主因)。
function caveAt(wx: number, wy: number, wz: number, hmin: number, seed: number): boolean {
  // 注：露天竖井已移到 generateChunk 主循环单独处理(需破草顶成露天口)，这里只管地下隧道/矿洞。
  const depth = hmin - wy;
  if (depth < 12) return false; // 距周围最低地表 12 格内留实心(山坡侧面也不破洞)
  // domain warp：三轴都用低频噪声把采样坐标推歪 → 洞穴在 X/Y/Z 各方向都蜿蜒(不再偏某一方向)；3 次噪声。
  const wxw = wx + (valueNoise3(wx / 36, wy / 30, wz / 36, seed + 991) - 0.5) * 26;
  const wyw = wy + (valueNoise3(wy / 30, wx / 34, wz / 34, seed + 993) - 0.5) * 22; // 加 Y 扭曲 → 洞穴也上下起伏，不再是水平层
  const wzw = wz + (valueNoise3(wz / 36, wy / 30, wx / 36, seed + 992) - 0.5) * 26;
  // 采样各向同性(X/Y/Z 同尺度) → 洞穴不再被竖直压成水平片、方向均匀分布。
  if (depth < 50) {
    // 浅层：小矿洞，稀疏
    return Math.abs(valueNoise3(wxw / 14, wyw / 14, wzw / 14, seed + 222) - 0.5) < 0.03;
  }
  if (depth < 100) {
    // 中层：中矿洞 + 一些大矿洞
    if (Math.abs(valueNoise3(wxw / 18, wyw / 18, wzw / 18, seed + 333) - 0.5) < 0.05) return true;
    return valueNoise3(wxw / 22, wyw / 22, wzw / 22, seed + 700) < 0.07;
  }
  // 深层：大矿洞为主 + 连通中隧道
  if (valueNoise3(wxw / 26, wyw / 26, wzw / 26, seed + 700) < 0.16) return true;
  return Math.abs(valueNoise3(wxw / 18, wyw / 18, wzw / 18, seed + 333) - 0.5) < 0.04;
}

// 矿石(仅石层、非洞穴格)：煤各深度、铁偏中下层。返回石头或矿石 id。
function oreAt(wx: number, wy: number, wz: number, height: number, seed: number): number {
  const coal = valueNoise3(wx / 4.5, wy / 4.5, wz / 4.5, seed + 101);
  if (coal > 0.84) return COAL_ORE;
  const iron = valueNoise3(wx / 4, wy / 4, wz / 4, seed + 202);
  if (iron > 0.83 && wy <= height * 0.6) return IRON_ORE;
  const gravel = valueNoise3(wx / 5, wy / 5, wz / 5, seed + 303);
  if (gravel > 0.82) return GRAVEL; // 砂砾团（挖掉小概率出燧石）
  return STONE;
}

// 某世界列 (wx,wz) 的地表高度（用世界坐标采样，跨区块连续，确定性）。
// 叠加多种尺度形成：大海(大陆度)、池子(丘陵凹陷)、河流(蜿蜒细谷)。
export function columnHeight(wx: number, wz: number, seed: number): number {
  const continent = fbm2(wx / 260, wz / 260, seed, 4); // 大尺度：海(低) vs 陆(高)，尺度放大=坡更缓
  const hills = fbm2(wx / 72, wz / 72, seed + 17, 3); // 中尺度丘陵：波长放缓+幅度减半 → 地表平滑、不再密集锯齿台阶
  // continent 重塑成三段，让"平原"紧贴海平面(玩家站平地不再像俯视深谷、水系不再深凹)，丘陵/山只是少数：
  //   c<0.45 海/海岸(海床→岸，低于海平面=水) · 0.45~0.72 平原(贴海平面、微起伏) · >0.72 丘陵→山
  // 阈值按 continent 实际分布(集中 0.43~0.62)定：c<0.46 海(~38%) · 0.46~0.56 平原(~37%,贴海平面) · >0.56 丘陵山(~25%)
  let base: number;
  if (continent < 0.46) base = 90 + continent * 56; // ~90~116：低于海平面 → 海/湖(海床深度随 c)
  else if (continent < 0.56) base = 116 + (continent - 0.46) * 80; // 116~124：平原，紧贴海平面(占比最大)
  else base = 124 + (continent - 0.56) * 180; // 124~167：丘陵→山(约 1/4)
  let h = base + (hills - 0.5) * 8;

  // 河流：蜿蜒河谷下切；河床深度随噪声变化(3~8 格)，不再固定整齐。
  {
    const rn = fbm2(wx / 140, wz / 140, seed + 777, 3); // 蜿蜒场
    const dist = Math.abs(rn - 0.5);
    const width = 0.028 + hills * 0.022 + Math.max(0, continent - 0.54) * 0.4; // 平原河窄；经过山区(continent高)时明显加宽→"两山夹一河"的宽阔山谷
    if (dist < width) {
      let t = 1 - dist / width;
      t = t * t * (3 - 2 * t); // smoothstep：岸边平滑过渡
      const depth = 2 + Math.floor(fbm2(wx / 60, wz / 60, seed + 555, 2) * 3); // 河床深 2~4：浅河，不再深谷
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

// 某列长树的概率：平原极稀疏(开阔)、森林茂密(树冠近乎相连)。
function treeDensity(wx: number, wz: number, seed: number): number {
  const f = _biomeForest(wx, wz, seed);
  if (f < 0.45) return 0.003; // 平原：几乎无树
  if (f > 0.62) return 0.08; // 森林：密树
  return 0.003 + ((f - 0.45) / 0.17) * 0.077; // 过渡带
}

// 树干高 4~6（确定性 → 接缝处同一棵树形状一致）
function treeHeight(wx: number, wz: number, seed: number): number {
  return 4 + Math.floor(hash2(wx, wz, seed * 31 + 5) * 3);
}

// 在本区块放一棵根在世界列 (rootWx,rootWz) 的树；只写落在本区块内的方块。
// ground = 该列草块 y。先放叶后放干，保证树干中心不被叶子盖住。
// logId/leavesId 可选，默认橡树；传入 SPRUCE_LOG/SPRUCE_LEAVES 即变成云杉（树冠形状复用橡树）。
function placeTree(
  c: Chunk,
  cx: number,
  cz: number,
  rootWx: number,
  rootWz: number,
  ground: number,
  seed: number,
  logId: number = OAK_LOG,
  leavesId: number = OAK_LEAVES,
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
        put(rootWx + dx, topY + dy, rootWz + dz, leavesId, true);
      }
    }
  }
  // 顶层 3×3
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      put(rootWx + dx, topY, rootWz + dz, leavesId, true);
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
  for (const [dx, dz] of cap) put(rootWx + dx, topY + 1, rootWz + dz, leavesId, true);
  // 树干（覆盖中心叶子/空气）
  for (let y = ground + 1; y <= topY; y++) put(rootWx, y, rootWz, logId, false);
}

// 下界生成参数
const NETHER_TOP = 127; // 顶（含基岩天花板）
const NETHER_LAVA_Y = 31; // 岩浆面：此高度及以下的洞腔灌静态岩浆

// 下界区块：地狱岩为主、3D 噪声挖大洞窟、岩浆面以下灌静态岩浆、石英矿脉、零星灵魂沙、洞顶荧石簇、基岩封顶封底。确定性。
function generateNetherChunk(cx: number, cz: number, seed: number): Chunk {
  const c = new Chunk();
  const s = seed + 70000; // 下界独立种子偏移（与主世界不雷同）
  for (let lz = 0; lz < CHUNK_W; lz++) {
    for (let lx = 0; lx < CHUNK_W; lx++) {
      const wx = cx * CHUNK_W + lx;
      const wz = cz * CHUNK_W + lz;
      for (let y = 0; y <= NETHER_TOP; y++) {
        if (y <= 1 || y >= NETHER_TOP - 1) {
          c.set(lx, y, lz, BEDROCK); // 基岩封底(0..1) + 封顶(126..127)
          continue;
        }
        // 3D 噪声挖大洞窟（两层叠加 → 更连通的腔体）
        const cave = valueNoise3(wx / 18, y / 16, wz / 18, s + 1) > 0.55 || valueNoise3(wx / 9, y / 10, wz / 9, s + 2) > 0.78;
        if (cave) {
          if (y <= NETHER_LAVA_Y) c.set(lx, y, lz, LAVA); // 岩浆面以下的腔体灌静态岩浆
          continue; // 以上腔体留空气
        }
        let id = NETHERRACK;
        if (valueNoise3(wx / 4, y / 4, wz / 4, s + 3) > 0.86) id = NETHER_QUARTZ_ORE; // 石英矿脉
        else if (valueNoise3(wx / 10, y / 10, wz / 10, s + 4) > 0.9) id = SOUL_SAND; // 灵魂沙斑块
        c.set(lx, y, lz, id);
      }
      // 洞顶荧石簇：天花板下沿稀疏挂团（确定性 hash）
      if (hash2(wx, wz, s + 5) < 0.012) {
        for (let y = NETHER_TOP - 2; y > NETHER_TOP - 7; y--) {
          if (c.get(lx, y, lz) === 0) {
            c.set(lx, y, lz, GLOWSTONE);
            break;
          }
        }
      }
    }
  }
  c.dirty = true;
  return c;
}

// 生成单个区块列 (cx,cz)：主世界=石基→土→草顶+海/树；下界=地狱岩+岩浆海。确定性、跨区块无缝。
export function generateChunk(cx: number, cz: number, seed: number, dimension: 'overworld' | 'nether' = 'overworld'): Chunk {
  if (dimension === 'nether') return generateNetherChunk(cx, cz, seed);
  const c = new Chunk();
  for (let lz = 0; lz < CHUNK_W; lz++) {
    for (let lx = 0; lx < CHUNK_W; lx++) {
      const wx = cx * CHUNK_W + lx;
      const wz = cz * CHUNK_W + lz;
      const height = columnHeight(wx, wz, seed);
      // 列级预算(只依赖 wx,wz)：hmin=周围最低地表(洞穴防破坡)、flat=平坦(竖井)。算一次，y 循环复用 → 省掉每格 9 次 columnHeight。
      const hmin = Math.min(
        height,
        columnHeight(wx + 4, wz, seed),
        columnHeight(wx - 4, wz, seed),
        columnHeight(wx, wz + 4, seed),
        columnHeight(wx, wz - 4, seed),
      );
      const flat = isFlat(wx, wz, seed);
      const beach = height <= SEA_LEVEL + 1; // 海平面附近用沙
      const biome = biomeAt(wx, wz, seed); // 群系（仅影响陆地非沙滩列）
      for (let y = 0; y <= height; y++) {
        // 露天竖井：平坦地形的稀疏大竖井，【连草顶一起挖穿】→ 地面可见的露天矿洞口(否则草顶封住、地面看不到洞)
        const shaft = flat && valueNoise3((wx + y * 0.8) / 8, y / 120, (wz + y * 0.6) / 8, seed + 888) > 0.9;
        // 竖井破到地表(y<=height)；矿洞只在 y<height(草顶保留、不破地表)。底2层(y<=1)实心。
        if (y > 1 && (shaft || (y < height && caveAt(wx, y, wz, hmin, seed)))) {
          // 洞穴/竖井生成时【留空气，不预灌水】。水下的洞由流体模拟从开口(竖井/破口)自然流入——
          // 能流到的灌进去、流完自行 settle；流不到的封闭腔保持干燥。(原来预灌满量水，改为按需自然流入。)
          continue;
        }
        let id = STONE;
        if (beach) {
          // 沙滩/水边：沙覆盖，不受群系影响（保持原行为）
          if (y === height) id = SAND;
          else if (y >= height - 3) id = SAND;
          else id = oreAt(wx, y, wz, height, seed);
        } else if (biome === 'desert') {
          // 沙漠：地表~3格沙 + 下方~4格沙石 + 再下石/矿
          if (y === height) id = SAND;
          else if (y >= height - 3) id = SAND;
          else if (y >= height - 7) id = SANDSTONE;
          else id = oreAt(wx, y, wz, height, seed);
        } else {
          // 温带(plains/forest) + 雪原：草顶 + 土填充（雪原地表草，Task 3.2 再加雪层）
          if (y === height) id = GRASS;
          else if (y >= height - 3) id = DIRT;
          else id = oreAt(wx, y, wz, height, seed);
        }
        c.set(lx, y, lz, id);
      }
      for (let y = height + 1; y <= SEA_LEVEL; y++) {
        c.set(lx, y, lz, WATER); // 注水到海平面
        c.setFluid(lx, y, lz, SEA_FLUID); // 海/湖/河皆为稳定源头(满量)
      }
      // 结冰：雪原群系水面顶格（SEA_LEVEL）改为冰
      if (height < SEA_LEVEL && biome === 'snow') {
        c.set(lx, SEA_LEVEL, lz, ICE);
      }
      // 雪层：雪原陆地草顶上方，约 85% 概率铺雪层（hash 确定性，留少量空缺自然感）
      if (!beach && height > SEA_LEVEL + 1 && biome === 'snow') {
        const surfaceBlock = c.get(lx, height, lz);
        const above = c.get(lx, height + 1, lz);
        if (surfaceBlock === GRASS && above === 0 && hash2(wx + 1, wz + 3, seed * 19 + 41) < 0.85) {
          c.set(lx, height + 1, lz, SNOW_LAYER);
        }
      }
    }
  }

  // 装饰：种橡树（仅平原/森林群系）。外扩 TREE_MARGIN 遍历，让邻列的树把枝叶探进本区块（接缝处不断树）。
  const x0 = cx * CHUNK_W;
  const z0 = cz * CHUNK_W;
  for (let wx = x0 - TREE_MARGIN; wx < x0 + CHUNK_W + TREE_MARGIN; wx++) {
    for (let wz = z0 - TREE_MARGIN; wz < z0 + CHUNK_W + TREE_MARGIN; wz++) {
      const r = hash2(wx, wz, seed * 13 + 7);
      if (r >= TREE_MAX_DENSITY) continue; // 便宜地剔除绝大多数列
      const g = columnHeight(wx, wz, seed);
      if (g <= SEA_LEVEL + 1) continue; // 只在草地（避开沙滩/水）
      // 守卫：橡树只在温带（平原/森林）生长，不进沙漠/雪原
      const bm = biomeAt(wx, wz, seed);
      if (bm !== 'plains' && bm !== 'forest') continue;
      if (r < treeDensity(wx, wz, seed)) placeTree(c, cx, cz, wx, wz, g, seed);
    }
  }

  // 装饰：云杉（雪原）。仿橡树逻辑，外扩 TREE_MARGIN，只在 snow 群系且地表是草的列种树。
  for (let wx = x0 - TREE_MARGIN; wx < x0 + CHUNK_W + TREE_MARGIN; wx++) {
    for (let wz = z0 - TREE_MARGIN; wz < z0 + CHUNK_W + TREE_MARGIN; wz++) {
      if (biomeAt(wx, wz, seed) !== 'snow') continue;
      const g = columnHeight(wx, wz, seed);
      if (g <= SEA_LEVEL + 1) continue; // 只在陆地
      // 稀疏密度：约 3%（比平原橡树稍多，雪原景观感）
      const r = hash2(wx, wz, seed * 17 + 3);
      if (r >= 0.03) continue;
      placeTree(c, cx, cz, wx, wz, g, seed, SPRUCE_LOG, SPRUCE_LEAVES);
    }
  }

  // 装饰：仙人掌（沙漠，沙地上）。在本区块内扫描，直接写本区块格。
  for (let lz = 0; lz < CHUNK_W; lz++) {
    for (let lx = 0; lx < CHUNK_W; lx++) {
      const wx = x0 + lx;
      const wz = z0 + lz;
      if (biomeAt(wx, wz, seed) !== 'desert') continue;
      const h = columnHeight(wx, wz, seed);
      if (h <= SEA_LEVEL + 1) continue; // 只在陆地
      if (c.get(lx, h, lz) !== SAND) continue; // 地表须为沙
      if (c.get(lx, h + 1, lz) !== 0) continue; // 上方须为空气（未被他物占据）
      // 低密度：约 2% → 不密集，避免连片
      const r = hash2(wx, wz, seed * 11 + 53);
      if (r >= 0.02) continue;
      // MC 1.12：仙人掌底格(h+1)的 4 个水平邻格不能是仙人掌或实心方块，否则弹出。
      // 只检查本区块内的邻格；跨区块边界是已接受的限制（极少数情形，注释说明）。
      const baseY = h + 1;
      if (
        (lx > 0  && (c.get(lx - 1, baseY, lz) === CACTUS || isSolidId(c.get(lx - 1, baseY, lz)))) ||
        (lx < CHUNK_W - 1 && (c.get(lx + 1, baseY, lz) === CACTUS || isSolidId(c.get(lx + 1, baseY, lz)))) ||
        (lz > 0  && (c.get(lx, baseY, lz - 1) === CACTUS || isSolidId(c.get(lx, baseY, lz - 1)))) ||
        (lz < CHUNK_W - 1 && (c.get(lx, baseY, lz + 1) === CACTUS || isSolidId(c.get(lx, baseY, lz + 1))))
      ) continue; // 有邻格阻挡 → 跳过此列，对齐 MC 1.12 行为
      // 高度 1~3（hash 确定性）
      const cactusH = 1 + Math.floor(hash2(wx * 3, wz * 3, seed * 7 + 13) * 3);
      for (let dy = 1; dy <= cactusH; dy++) {
        const cy = h + dy;
        if (cy >= CHUNK_H) break;
        c.set(lx, cy, lz, CACTUS);
      }
    }
  }

  // 装饰：草地上撒草丛/长草（仅平原/森林，cross billboard，可穿过、瞬破）。在种树之后——只放进空气格、避开树干。
  for (let lz = 0; lz < CHUNK_W; lz++) {
    for (let lx = 0; lx < CHUNK_W; lx++) {
      const wx = x0 + lx;
      const wz = z0 + lz;
      // 守卫：草丛只在温带（平原/森林）长，沙漠/雪原不长草丛
      const bm = biomeAt(wx, wz, seed);
      if (bm !== 'plains' && bm !== 'forest') continue;
      const h = columnHeight(wx, wz, seed);
      if (h <= SEA_LEVEL + 1) continue; // 沙滩/水下不长草
      if (c.get(lx, h, lz) !== GRASS || c.get(lx, h + 1, lz) !== 0) continue; // 表层须草方块、其上须空气(避树干/竖井)
      const gr = hash2(wx, wz, seed * 7 + 31); // [0,1)
      if (gr > 0.4) continue; // ~40% 草地长草
      c.set(lx, h + 1, lz, gr < 0.08 ? TALL_GRASS : GRASS_PLANT); // 其中 ~1/5 是长草
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
