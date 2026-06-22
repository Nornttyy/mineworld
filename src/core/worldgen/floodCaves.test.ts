import { describe, it, expect } from 'vitest';
import { generateChunk, columnHeight } from './terrain';
import { WATER } from '../blocks/registry';

// 矿洞生成时【不预灌水】(留空气)——水下的洞由流体模拟从开口(竖井/破口)自然流入(运行时)：
// 能流到的灌进去、流完自行 settle，流不到的封闭腔保持干燥。这里守住"生成期地表以下不出现预填的洞水"。
describe('worldgen — 矿洞生成不预灌水', () => {
  it('地表以下被挖空的洞穴格生成时是空气，不是水', () => {
    const seed = 4242;
    let subsurfaceWater = 0;
    for (let cx = -2; cx <= 2; cx++) {
      for (let cz = -2; cz <= 2; cz++) {
        const c = generateChunk(cx, cz, seed);
        for (let lx = 0; lx < 16; lx++) {
          for (let lz = 0; lz < 16; lz++) {
            const wx = cx * 16 + lx;
            const wz = cz * 16 + lz;
            const h = columnHeight(wx, wz, seed);
            for (let y = 2; y < h; y++) {
              if (c.get(lx, y, lz) === WATER) subsurfaceWater++;
            }
          }
        }
      }
    }
    expect(subsurfaceWater).toBe(0); // 生成期洞穴不灌水（水靠运行时流体从开口流入）
  });
});
