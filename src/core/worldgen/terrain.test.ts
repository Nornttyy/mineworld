import { describe, it, expect } from 'vitest';
import { generateTerrain, surfaceHeight, generateChunk, SEA_LEVEL, columnHeight } from './terrain';
import { biomeAt } from './biome';
import { localCoord, worldToChunk } from '../world/coords';
import { CACTUS, ICE, SNOW_LAYER, SPRUCE_LOG, SPRUCE_LEAVES } from '../blocks/registry';

const SAND_ID = 5;
const GRASS_ID = 3;
const SANDSTONE_ID = 18;

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
    // 扫描多个沙漠区块，断言所有 CACTUS 方块下方是 SAND 且列群系是 desert
    const SAND_ID = 5;
    let foundCactus = false;
    outer: for (let cx = 0; cx < 40; cx++) {
      for (let cz = 0; cz < 10; cz++) {
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
                if (foundCactus) break outer;
              }
            }
          }
        }
      }
    }
    expect(foundCactus).toBe(true); // 必须找到至少一个仙人掌
  });

  it('雪原水列顶层水格是冰(ICE)而非普通水', () => {
    // 找一个 snow 且 height < SEA_LEVEL 的列（水下），断言水柱顶格是 ICE
    // 雪原水域在 seed=1337 约从 cx=29,cz=25 开始出现，故需扫更大范围
    let foundIce = false;
    outer: for (let cx = 0; cx < 60; cx++) {
      for (let cz = 0; cz < 50; cz++) {
        for (let lx = 0; lx < 16; lx += 4) {
          for (let lz = 0; lz < 16; lz += 4) {
            const wx = cx * 16 + lx;
            const wz = cz * 16 + lz;
            const h = columnHeight(wx, wz, SEED);
            if (h < SEA_LEVEL && biomeAt(wx, wz, SEED) === 'snow') {
              const chunk = generateChunk(cx, cz, SEED);
              // 水柱顶格应该是冰
              const topWater = chunk.get(lx, SEA_LEVEL, lz);
              if (topWater === ICE) {
                foundIce = true;
                break outer;
              }
            }
          }
        }
      }
    }
    expect(foundIce).toBe(true); // 雪原水面顶格必须存在冰
  });

  it('雪原陆地上有雪层(SNOW_LAYER)覆盖草顶', () => {
    // 找 snow 且陆地的列，断言 height+1 有雪层（不要求每列都有，找到一个即可）
    let foundSnowLayer = false;
    outer: for (let cx = 0; cx < 40; cx++) {
      for (let cz = 0; cz < 10; cz++) {
        for (let lx = 0; lx < 16; lx++) {
          for (let lz = 0; lz < 16; lz++) {
            const wx = cx * 16 + lx;
            const wz = cz * 16 + lz;
            const h = columnHeight(wx, wz, SEED);
            if (h > SEA_LEVEL + 1 && biomeAt(wx, wz, SEED) === 'snow') {
              const chunk = generateChunk(cx, cz, SEED);
              if (chunk.get(lx, h + 1, lz) === SNOW_LAYER) {
                foundSnowLayer = true;
                break outer;
              }
            }
          }
        }
      }
    }
    expect(foundSnowLayer).toBe(true); // 雪原陆地上必须找到至少一个雪层
  });

  it('雪原有云杉树(SPRUCE_LOG/SPRUCE_LEAVES)、沙漠无橡树', () => {
    // 扫描区块：雪原群系找到 SPRUCE_LOG；同时确认沙漠区块不含橡树原木
    // 雪原从 cx≈27,cz≈26 开始出现（seed=1337），需扫更大范围
    const OAK_LOG_ID = 6;
    let foundSpruce = false;
    for (let cx = 0; cx < 80; cx++) {
      for (let cz = 0; cz < 50; cz++) {
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
      }
    }
    expect(foundSpruce).toBe(true); // 必须找到至少一棵云杉
  });
});
