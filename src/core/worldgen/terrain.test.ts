import { describe, it, expect } from 'vitest';
import { generateTerrain, surfaceHeight, generateChunk, SEA_LEVEL, columnHeight } from './terrain';
import { biomeAt } from './biome';
import { localCoord, worldToChunk } from '../world/coords';

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
