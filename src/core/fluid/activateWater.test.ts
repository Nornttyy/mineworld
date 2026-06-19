import { describe, it, expect } from 'vitest';
import { activateFlowableWater } from './activateWater';

describe('activateFlowableWater（开局激活"能流动"的水）', () => {
  it('只激活下方或四周挨着空气的水（能流动的），被包住的水不激活', () => {
    const water = new Set(['0,0,0', '1,0,0', '2,0,0']);
    const air = new Set(['1,-1,0', '3,0,0']); // (1,0,0) 下方空气；(2,0,0) 侧面(3,0,0)空气
    const scan = {
      isWater: (x: number, y: number, z: number) => water.has(`${x},${y},${z}`),
      isAir: (x: number, y: number, z: number) => air.has(`${x},${y},${z}`),
    };
    const activated = new Set<string>();
    const sim = { activate: (x: number, y: number, z: number) => activated.add(`${x},${y},${z}`) };

    const n = activateFlowableWater(sim, scan, { minX: 0, minY: 0, minZ: 0, maxX: 2, maxY: 0, maxZ: 0 });

    expect(activated.has('1,0,0')).toBe(true); // 下方是空气 → 能流 → 激活
    expect(activated.has('2,0,0')).toBe(true); // 侧面是空气 → 能流 → 激活
    expect(activated.has('0,0,0')).toBe(false); // 四周/下方都不是空气 → 稳定 → 不激活
    expect(n).toBe(2);
  });

  it('区域里没水 → 不激活、返回 0', () => {
    const scan = { isWater: () => false, isAir: () => true };
    let count = 0;
    const sim = { activate: () => count++ };
    expect(activateFlowableWater(sim, scan, { minX: 0, minY: 0, minZ: 0, maxX: 4, maxY: 4, maxZ: 4 })).toBe(0);
    expect(count).toBe(0);
  });
});
