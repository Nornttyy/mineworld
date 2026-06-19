import { describe, it, expect } from 'vitest';
import { ChunkWorld } from '../world/chunkWorld';
import { meshChunk } from './mesher';

// 水网格高度：头顶有方块时，浅水(流动)应保持自身矮高度、不被画成整块；源头(本就满)才贴住方块。
function maxWaterY(w: ChunkWorld): number {
  const water = meshChunk(w, 0, 0).water;
  let maxY = 0;
  for (let i = 1; i < water.positions.length; i += 3) if (water.positions[i] > maxY) maxY = water.positions[i];
  return maxY;
}

describe('水面高度·头顶有方块', () => {
  const STONE = 1;
  const Y = 150; // 地表之上,场景可控

  it('浅水(流动 amount3)头顶有方块 → 仍是矮水，不变整块', () => {
    const w = new ChunkWorld(99);
    w.setBlock(5, Y - 1, 5, STONE); // 地板
    w.setBlock(5, Y + 1, 5, STONE); // 头顶方块
    for (const [x, z] of [[6, 5], [4, 5], [5, 6], [5, 4]]) w.setBlock(x, Y, z, 0); // 四周空气(侧面会画)
    w.setWater(5, Y, 5, 3, false, false); // 浅的流动水(非源头)
    expect(maxWaterY(w)).toBeLessThan(Y + 0.6); // 不该被灌成满格(Y+1)
  });

  it('源头水头顶有方块 → 灌满贴住方块(不留缝)', () => {
    const w = new ChunkWorld(99);
    w.setBlock(5, Y - 1, 5, STONE);
    w.setBlock(5, Y + 1, 5, STONE);
    for (const [x, z] of [[6, 5], [4, 5], [5, 6], [5, 4]]) w.setBlock(x, Y, z, 0);
    w.setWater(5, Y, 5, 8, true, false); // 源头(满)
    expect(maxWaterY(w)).toBeGreaterThan(Y + 0.9);
  });
});
