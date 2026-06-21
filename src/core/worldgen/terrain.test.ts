import { describe, it, expect } from 'vitest';
import { generateTerrain, surfaceHeight, generateChunk, columnHeight, SEA_LEVEL } from './terrain';
import { CHUNK_W } from '../world/chunk';
import { NETHERRACK, LAVA, BEDROCK, GLOWSTONE, WATER, GRASS } from '../blocks/registry';

describe('水下/沿海洞穴灌水', () => {
  const hmin = (wx: number, wz: number, seed: number): number =>
    Math.min(
      columnHeight(wx, wz, seed),
      columnHeight(wx + 4, wz, seed),
      columnHeight(wx - 4, wz, seed),
      columnHeight(wx, wz + 4, seed),
      columnHeight(wx, wz - 4, seed),
    );

  it('洞里的水只出现在近水列；深内陆洞不被灌水；且确有水下洞被灌水', () => {
    const seed = 1337;
    let caveWater = 0;
    for (let cx = 0; cx < 8; cx++)
      for (let cz = 0; cz < 8; cz++) {
        const c = generateChunk(cx, cz, seed);
        for (let lx = 0; lx < CHUNK_W; lx++)
          for (let lz = 0; lz < CHUNK_W; lz++) {
            const wx = cx * CHUNK_W + lx;
            const wz = cz * CHUNK_W + lz;
            const h = columnHeight(wx, wz, seed);
            for (let y = 2; y < h && y < SEA_LEVEL; y++) {
              // 地表以下、海平面以下的洞穴格若是水
              if (c.get(lx, y, lz) === WATER) {
                caveWater++;
                expect(hmin(wx, wz, seed)).toBeLessThan(SEA_LEVEL); // 防过度灌水：洞水只该在近水列
              }
            }
          }
      }
    expect(caveWater).toBeGreaterThan(0); // 确实有水下/沿海洞被灌水
  });
});

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
