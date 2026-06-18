import { describe, it, expect } from 'vitest';
import { ChunkWorld } from '../world/chunkWorld';
import { meshChunk } from './mesher';

// 验证天光真的烤进了网格顶点色：封闭处的面应明显比露天的暗。
describe('mesher 天光接入', () => {
  it('封闭空腔的面 远暗于 露天表面', () => {
    const w = new ChunkWorld(42);
    // 在地表之上(y=310)围一个空气格(9,310,9)：6 个正交邻居全设实心 → 该空气格被封死、天光=0，
    // 这些实心块朝向它的面会很暗；而世界地表是露天(天光15)很亮。
    const STONE = 1;
    for (const [x, y, z] of [
      [10, 310, 9],
      [8, 310, 9],
      [9, 311, 9],
      [9, 309, 9],
      [9, 310, 10],
      [9, 310, 8],
    ])
      w.setBlock(x, y, z, STONE);

    const colors = meshChunk(w, 0, 0).opaque.colors;
    let min = 1,
      max = 0;
    for (let i = 0; i < colors.length; i++) {
      if (colors[i] < min) min = colors[i];
      if (colors[i] > max) max = colors[i];
    }
    expect(max).toBeGreaterThan(0.7); // 露天表面：天光15 → 亮
    expect(min).toBeLessThan(0.15); // 封闭面：天光0 → 暗
    expect(max).toBeGreaterThan(min * 4); // 明暗确实拉开了差距(不是全局均匀)
  });
});
