import { describe, it, expect } from 'vitest';
import { generateTerrain, surfaceHeight } from './terrain';

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
