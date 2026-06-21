import { describe, it, expect } from 'vitest';
import { generateChunk, columnHeight, SEA_LEVEL } from './terrain';
import { WATER } from '../blocks/registry';

// 水下/沿海矿洞灌水：海/湖下方 + 岸边/水下崖壁(近水：周围±4 内有水下地表 → hmin<海平面)的【地表以下】
// 且【海平面以下】的洞穴格应含水；远离水的深内陆洞仍是干的(地表以下无水)。
describe('worldgen — 水下/沿海矿洞灌水', () => {
  const hmin = (wx: number, wz: number, seed: number): number =>
    Math.min(
      columnHeight(wx, wz, seed),
      columnHeight(wx + 4, wz, seed),
      columnHeight(wx - 4, wz, seed),
      columnHeight(wx, wz + 4, seed),
      columnHeight(wx, wz - 4, seed),
    );

  it('近水的地表以下洞穴含水；远离水的内陆洞仍是空气', () => {
    const seed = 4242;
    let nearWaterCaveWater = 0;
    let inlandCaveWater = 0;
    for (let cx = -2; cx <= 2; cx++) {
      for (let cz = -2; cz <= 2; cz++) {
        const c = generateChunk(cx, cz, seed);
        for (let lx = 0; lx < 16; lx++) {
          for (let lz = 0; lz < 16; lz++) {
            const wx = cx * 16 + lx;
            const wz = cz * 16 + lz;
            const h = columnHeight(wx, wz, seed);
            for (let y = 2; y < h; y++) {
              if (c.get(lx, y, lz) === WATER) {
                if (hmin(wx, wz, seed) < SEA_LEVEL) nearWaterCaveWater++;
                else inlandCaveWater++;
              }
            }
          }
        }
      }
    }
    expect(nearWaterCaveWater).toBeGreaterThan(0); // 近水洞被灌水
    expect(inlandCaveWater).toBe(0); // 远离水的内陆洞仍干（地表以下无水）
  });
});
