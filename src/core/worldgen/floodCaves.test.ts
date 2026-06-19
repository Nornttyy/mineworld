import { describe, it, expect } from 'vitest';
import { generateChunk, columnHeight, SEA_LEVEL } from './terrain';
import { WATER } from '../blocks/registry';

// 水下矿洞灌水：海/湖正下方(地表低于海平面)的列，其地表以下被挖空的洞/竖井格应含水；
// 陆地列(地表高于海平面)的洞仍是干的(地表以下不应出现水)。
describe('worldgen — 水下矿洞灌水', () => {
  it('海/湖下方的矿洞生成即含水；陆地干洞仍是空气', () => {
    const seed = 4242;
    let underwaterSubsurfaceWater = 0;
    let landSubsurfaceWater = 0;
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
                if (h < SEA_LEVEL) underwaterSubsurfaceWater++;
                else landSubsurfaceWater++;
              }
            }
          }
        }
      }
    }
    expect(underwaterSubsurfaceWater).toBeGreaterThan(0); // 水下洞被灌水
    expect(landSubsurfaceWater).toBe(0); // 陆地洞仍干（地表以下无水）
  });
});
