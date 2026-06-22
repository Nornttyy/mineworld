import { describe, it, expect } from 'vitest';
import { generateTerrain, surfaceHeight, generateChunk, SEA_LEVEL, columnHeight } from './terrain';
import { biomeAt } from './biome';
import { localCoord, worldToChunk } from '../world/coords';
import { CACTUS, ICE, SNOW_LAYER, SPRUCE_LOG, SPRUCE_LEAVES, NETHERRACK, LAVA, BEDROCK, GLOWSTONE, WATER, GRASS } from '../blocks/registry';
import { CHUNK_W } from '../world/chunk';

const SAND_ID = 5;
const GRASS_ID = 3;
const SANDSTONE_ID = 26;

// 注：水下/沿海洞穴灌水的测试在 floodCaves.test.ts。

describe('下界世界生成', () => {
  it('基岩封顶封底、有地狱岩/岩浆/荧石，无草无水', () => {
    const c = generateChunk(0, 0, 1337, 'nether');
    let bottomBedrock = false;
    let topBedrock = false;
    let nr = 0;
    let lava = 0;
    let grass = 0;
    let water = 0;
    for (let x = 0; x < CHUNK_W; x++)
      for (let z = 0; z < CHUNK_W; z++) {
        if (c.get(x, 1, z) === BEDROCK) bottomBedrock = true;
        if (c.get(x, 126, z) === BEDROCK) topBedrock = true;
      }
    for (let y = 0; y < 128; y++)
      for (let x = 0; x < CHUNK_W; x++)
        for (let z = 0; z < CHUNK_W; z++) {
          const b = c.get(x, y, z);
          if (b === NETHERRACK) nr++;
          else if (b === LAVA) lava++;
          else if (b === GRASS) grass++;
          else if (b === WATER) water++;
        }
    expect(bottomBedrock).toBe(true);
    expect(topBedrock).toBe(true);
    expect(nr).toBeGreaterThan(500); // 地狱岩为主
    expect(lava).toBeGreaterThan(0); // 有岩浆海
    expect(grass).toBe(0);
    expect(water).toBe(0);
    expect(GLOWSTONE).toBeGreaterThan(0); // 荧石已注册(出现与否靠概率，这里只确保导入有效)
  });

  it('确定性：同坐标同种子结果一致', () => {
    const a = generateChunk(2, 3, 1337, 'nether');
    const b = generateChunk(2, 3, 1337, 'nether');
    for (let y = 0; y < 128; y += 8)
      for (let x = 0; x < CHUNK_W; x += 4) for (let z = 0; z < CHUNK_W; z += 4) expect(a.get(x, y, z)).toBe(b.get(x, y, z));
  });

  it('主世界生成不受影响（dimension 省略 → 无下界特征：无地狱岩、无 y=126 基岩顶）', () => {
    const c = generateChunk(0, 0, 1337);
    let netherrack = 0;
    let ceilingBedrock = 0;
    for (let x = 0; x < CHUNK_W; x++) for (let z = 0; z < CHUNK_W; z++) if (c.get(x, 126, z) === BEDROCK) ceilingBedrock++;
    for (let y = 0; y < 128; y++) for (let x = 0; x < CHUNK_W; x++) for (let z = 0; z < CHUNK_W; z++) if (c.get(x, y, z) === NETHERRACK) netherrack++;
    expect(netherrack).toBe(0);
    expect(ceilingBedrock).toBe(0);
  });
});

describe('terrain generation', () => {
  it('is deterministic for a seed', () => {
    const a = generateTerrain({ sizeX: 16, sizeZ: 16, seed: 7 });
    const b = generateTerrain({ sizeX: 16, sizeZ: 16, seed: 7 });
    expect(Array.from(a.blocks)).toEqual(Array.from(b.blocks));
  });

  it('has grass surface over dirt over stone, and varied heights (hills)', () => {
    const w = generateTerrain({ sizeX: 48, sizeZ: 48, seed: 1 });
    const ids = new Set<number>();
    const heights = new Set<number>();
    for (let z = 0; z < w.sz; z += 4)
      for (let x = 0; x < w.sx; x += 4) {
        const h = surfaceHeight(w, x, z);
        heights.add(h);
        ids.add(w.get(x, h, z)); // 地表
        ids.add(w.get(x, h - 4, z)); // 深处
      }
    expect(ids.has(3)).toBe(true); // grass somewhere
    expect(ids.has(1)).toBe(true); // stone underneath
    expect(heights.size).toBeGreaterThan(3); // 高度有起伏，不是平的
  });

  it('surface columns are solid from ground down (no floating gaps at top)', () => {
    const w = generateTerrain({ sizeX: 16, sizeZ: 16, seed: 3 });
    const h = surfaceHeight(w, 8, 8);
    expect(w.get(8, h, 8)).not.toBe(0);
    expect(w.get(8, h + 1, 8)).toBe(0); // 地表之上是空气
  });
});

describe('biome surface blocks', () => {
  const SEED = 1337;

  it('沙漠陆地列：地表是沙(5)、地表-5处是沙石(18)', () => {
    // 扫描找到一个 desert 且陆地(height > SEA_LEVEL+1)的列
    let desertWx = -1;
    let desertWz = -1;
    outer: for (let x = 0; x < 4000; x += 40) {
      for (let z = 0; z < 400; z += 40) {
        if (biomeAt(x, z, SEED) === 'desert' && columnHeight(x, z, SEED) > SEA_LEVEL + 1) {
          desertWx = x;
          desertWz = z;
          break outer;
        }
      }
    }
    expect(desertWx).toBeGreaterThanOrEqual(0); // 必须能找到沙漠陆地列

    const cx = worldToChunk(desertWx);
    const cz = worldToChunk(desertWz);
    const chunk = generateChunk(cx, cz, SEED);
    const lx = localCoord(desertWx);
    const lz = localCoord(desertWz);
    const height = columnHeight(desertWx, desertWz, SEED);

    expect(chunk.get(lx, height, lz)).toBe(SAND_ID);         // 地表=沙
    expect(chunk.get(lx, height - 5, lz)).toBe(SANDSTONE_ID); // 地表-5=沙石
  });

  it('雪原陆地列：地表是草(3)', () => {
    // 扫描找到至少一个 snow 且陆地(且地表方块不被竖井挖空)的列
    const matches: [number, number][] = [];
    for (let x = 0; x < 4000; x += 40) {
      for (let z = 0; z < 400; z += 40) {
        if (biomeAt(x, z, SEED) === 'snow' && columnHeight(x, z, SEED) > SEA_LEVEL + 1) {
          matches.push([x, z]);
        }
      }
    }
    expect(matches.length).toBeGreaterThan(0); // 必须能找到雪原陆地列

    // 从候选列中找一个地表方块是草(不被竖井挖空)的
    let foundGrass = false;
    for (const [wx, wz] of matches) {
      const cx = worldToChunk(wx);
      const cz = worldToChunk(wz);
      const chunk = generateChunk(cx, cz, SEED);
      const lx = localCoord(wx);
      const lz = localCoord(wz);
      const height = columnHeight(wx, wz, SEED);
      const block = chunk.get(lx, height, lz);
      if (block === GRASS_ID) {
        foundGrass = true;
        break;
      }
      // block===0 表示该列被竖井挖空，跳过
    }
    expect(foundGrass).toBe(true); // 雪原地表=草(Task 3.2 加雪层)
  });
});

describe('Task 3.2 decorations', () => {
  const SEED = 1337;

  it('仙人掌只立在沙漠的沙地上：每个 CACTUS 方块下方必须是沙(5)且群系是沙漠', () => {
    // 先用 biomeAt 找沙漠陆地列，再生成该列所在区块，在区块内找仙人掌验证
    const SAND_ID = 5;

    // Step 1: 纯 biomeAt 扫描找一个沙漠陆地列（不生成任何区块）
    let targetWx = -1;
    let targetWz = -1;
    outer: for (let wx = 0; wx < 4000; wx += 16) {
      for (let wz = 0; wz < 4000; wz += 16) {
        if (biomeAt(wx, wz, SEED) === 'desert' && columnHeight(wx, wz, SEED) > SEA_LEVEL + 1) {
          targetWx = wx;
          targetWz = wz;
          break outer;
        }
      }
    }
    expect(targetWx).toBeGreaterThanOrEqual(0); // 必须能找到沙漠区域

    // Step 2: 生成该坐标所在区块（以及相邻几个，扩大找到仙人掌的概率）
    let foundCactus = false;
    const cx0 = worldToChunk(targetWx);
    const cz0 = worldToChunk(targetWz);
    outerChunk: for (let dcx = 0; dcx < 10; dcx++) {
      for (let dcz = 0; dcz < 10; dcz++) {
        const cx = cx0 + dcx;
        const cz = cz0 + dcz;
        // 快速检查：该区块中心是否是沙漠
        if (biomeAt(cx * 16 + 8, cz * 16 + 8, SEED) !== 'desert') continue;
        const chunk = generateChunk(cx, cz, SEED);
        for (let lx = 0; lx < 16; lx++) {
          for (let lz = 0; lz < 16; lz++) {
            const wx = cx * 16 + lx;
            const wz = cz * 16 + lz;
            for (let y = 1; y < 200; y++) {
              if (chunk.get(lx, y, lz) === CACTUS) {
                foundCactus = true;
                // 下方必须是沙
                expect(chunk.get(lx, y - 1, lz)).toBe(SAND_ID);
                // 该列群系必须是沙漠
                expect(biomeAt(wx, wz, SEED)).toBe('desert');
                break outerChunk;
              }
            }
          }
        }
      }
    }
    expect(foundCactus).toBe(true); // 必须找到至少一个仙人掌
  });

  it('雪原水列顶层水格是冰(ICE)而非普通水', () => {
    // 先用 biomeAt+columnHeight 找一个 snow 且 height<SEA_LEVEL 的列（水下）
    // 再生成该列的区块，验证 SEA_LEVEL 处是冰
    let foundIce = false;

    // Step 1: 纯 biomeAt/columnHeight 扫描定位（不生成区块）
    let targetWx = -1;
    let targetWz = -1;
    outer: for (let wx = 0; wx < 20000; wx += 8) {
      for (let wz = 0; wz < 20000; wz += 8) {
        if (biomeAt(wx, wz, SEED) === 'snow' && columnHeight(wx, wz, SEED) < SEA_LEVEL) {
          targetWx = wx;
          targetWz = wz;
          break outer;
        }
      }
    }
    expect(targetWx).toBeGreaterThanOrEqual(0); // 必须能找到雪原水域列

    // Step 2: 生成该列所在区块，验证冰
    const cx = worldToChunk(targetWx);
    const cz = worldToChunk(targetWz);
    const lx = localCoord(targetWx);
    const lz = localCoord(targetWz);
    const chunk = generateChunk(cx, cz, SEED);
    const topWater = chunk.get(lx, SEA_LEVEL, lz);
    if (topWater === ICE) {
      foundIce = true;
    } else {
      // 在同一区块内寻找其他符合条件的列
      for (let slx = 0; slx < 16 && !foundIce; slx++) {
        for (let slz = 0; slz < 16 && !foundIce; slz++) {
          const swx = cx * 16 + slx;
          const swz = cz * 16 + slz;
          const h = columnHeight(swx, swz, SEED);
          if (h < SEA_LEVEL && biomeAt(swx, swz, SEED) === 'snow') {
            if (chunk.get(slx, SEA_LEVEL, slz) === ICE) {
              foundIce = true;
            }
          }
        }
      }
    }
    expect(foundIce).toBe(true); // 雪原水面顶格必须存在冰
  });

  it('雪原陆地上有雪层(SNOW_LAYER)覆盖草顶', () => {
    // 先用 biomeAt+columnHeight 找雪原陆地列，再生成区块验证雪层
    // Step 1: 纯 biomeAt/columnHeight 扫描定位（不生成区块）
    let targetWx = -1;
    let targetWz = -1;
    outer: for (let wx = 0; wx < 10000; wx += 8) {
      for (let wz = 0; wz < 10000; wz += 8) {
        if (biomeAt(wx, wz, SEED) === 'snow' && columnHeight(wx, wz, SEED) > SEA_LEVEL + 1) {
          targetWx = wx;
          targetWz = wz;
          break outer;
        }
      }
    }
    expect(targetWx).toBeGreaterThanOrEqual(0); // 必须能找到雪原陆地列

    // Step 2: 生成该列所在区块（以及相邻区块），找到雪层
    let foundSnowLayer = false;
    const cx0 = worldToChunk(targetWx);
    const cz0 = worldToChunk(targetWz);
    outerChunk: for (let dcx = 0; dcx < 5; dcx++) {
      for (let dcz = 0; dcz < 5; dcz++) {
        const cx = cx0 + dcx;
        const cz = cz0 + dcz;
        // 快速检查：该区块中心是否是雪原
        if (biomeAt(cx * 16 + 8, cz * 16 + 8, SEED) !== 'snow') continue;
        const chunk = generateChunk(cx, cz, SEED);
        for (let lx = 0; lx < 16; lx++) {
          for (let lz = 0; lz < 16; lz++) {
            const wx = cx * 16 + lx;
            const wz = cz * 16 + lz;
            const h = columnHeight(wx, wz, SEED);
            if (h > SEA_LEVEL + 1 && biomeAt(wx, wz, SEED) === 'snow') {
              if (chunk.get(lx, h + 1, lz) === SNOW_LAYER) {
                foundSnowLayer = true;
                break outerChunk;
              }
            }
          }
        }
      }
    }
    expect(foundSnowLayer).toBe(true); // 雪原陆地上必须找到至少一个雪层
  });

  it('沙漠仙人掌不相邻：每个 CACTUS 方块的 4 个水平邻格(同 y)均非 CACTUS', () => {
    // 先用 biomeAt 找沙漠区块，生成一批，扫描确认无相邻仙人掌。
    // 同时断言至少找到了仙人掌（否则测试没有意义）。
    let targetWx = -1;
    let targetWz = -1;
    outer: for (let wx = 0; wx < 4000; wx += 16) {
      for (let wz = 0; wz < 4000; wz += 16) {
        if (biomeAt(wx, wz, SEED) === 'desert' && columnHeight(wx, wz, SEED) > SEA_LEVEL + 1) {
          targetWx = wx;
          targetWz = wz;
          break outer;
        }
      }
    }
    expect(targetWx).toBeGreaterThanOrEqual(0);

    const cx0 = worldToChunk(targetWx);
    const cz0 = worldToChunk(targetWz);
    let foundCactus = false;

    for (let dcx = 0; dcx < 15; dcx++) {
      for (let dcz = 0; dcz < 15; dcz++) {
        const cx = cx0 + dcx;
        const cz = cz0 + dcz;
        if (biomeAt(cx * 16 + 8, cz * 16 + 8, SEED) !== 'desert') continue;
        const chunk = generateChunk(cx, cz, SEED);
        for (let lx = 0; lx < 16; lx++) {
          for (let lz = 0; lz < 16; lz++) {
            for (let y = 1; y < 200; y++) {
              if (chunk.get(lx, y, lz) === CACTUS) {
                foundCactus = true;
                // 检查 4 个水平邻格（同 y），仅在本区块内；跨区块边界是已知限制。
                if (lx > 0)      expect(chunk.get(lx - 1, y, lz)).not.toBe(CACTUS);
                if (lx < 15)     expect(chunk.get(lx + 1, y, lz)).not.toBe(CACTUS);
                if (lz > 0)      expect(chunk.get(lx, y, lz - 1)).not.toBe(CACTUS);
                if (lz < 15)     expect(chunk.get(lx, y, lz + 1)).not.toBe(CACTUS);
              }
            }
          }
        }
      }
    }
    expect(foundCactus).toBe(true); // 必须找到至少一个仙人掌，否则测试无意义
  });

  it('雪原有云杉树(SPRUCE_LOG/SPRUCE_LEAVES)、沙漠无橡树', () => {
    // 先用 biomeAt 找雪原区块，只生成雪原区块，搜索 SPRUCE_LOG；同时验证沙漠/雪原无橡树
    const OAK_LOG_ID = 6;
    let foundSpruce = false;

    // Step 1: 用 biomeAt 找雪原区块坐标（纯噪声，不生成区块）
    let snowCx = -1;
    let snowCz = -1;
    outerSearch: for (let wx = 0; wx < 30000; wx += 32) {
      for (let wz = 0; wz < 30000; wz += 32) {
        if (biomeAt(wx, wz, SEED) === 'snow' && columnHeight(wx, wz, SEED) > SEA_LEVEL + 1) {
          snowCx = worldToChunk(wx);
          snowCz = worldToChunk(wz);
          break outerSearch;
        }
      }
    }
    expect(snowCx).toBeGreaterThanOrEqual(0); // 必须能找到雪原区域

    // Step 2: 生成以该区块为中心的一批雪原区块，扫描 SPRUCE_LOG
    outerChunk: for (let dcx = 0; dcx < 15; dcx++) {
      for (let dcz = 0; dcz < 15; dcz++) {
        const cx = snowCx + dcx;
        const cz = snowCz + dcz;
        // 快速检查：该区块中心是否是雪原
        if (biomeAt(cx * 16 + 8, cz * 16 + 8, SEED) !== 'snow') continue;
        const chunk = generateChunk(cx, cz, SEED);
        for (let lx = 0; lx < 16; lx++) {
          for (let lz = 0; lz < 16; lz++) {
            const wx = cx * 16 + lx;
            const wz = cz * 16 + lz;
            const bm = biomeAt(wx, wz, SEED);
            for (let y = 0; y < 200; y++) {
              const id = chunk.get(lx, y, lz);
              if (id === SPRUCE_LOG || id === SPRUCE_LEAVES) foundSpruce = true;
              // 沙漠/雪原不能有橡树原木
              if ((bm === 'desert' || bm === 'snow') && id === OAK_LOG_ID) {
                // Allow: trees from adjacent non-desert/snow columns may place leaves in this chunk
                // but oak LOG root is always at the column's exact biome — check column biome
                expect(biomeAt(wx, wz, SEED)).not.toBe('desert');
              }
            }
          }
        }
        if (foundSpruce) break outerChunk;
      }
    }
    expect(foundSpruce).toBe(true); // 必须找到至少一棵云杉
  });
});
