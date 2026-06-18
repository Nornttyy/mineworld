import { describe, it, expect } from 'vitest';
import { ChunkWorld } from '../world/chunkWorld';
import { meshChunk } from './mesher';
import { TORCH } from '../blocks/registry';

// 天光/方块光现在以每顶点 aLight=(天光01, 方块光01) 存进网格，由 shader 按昼夜合成。
// 这里直接验证 light 属性：封闭面天光≈0、露天面天光≈1；火把照亮周围(方块光>0)且自身生成网格。
describe('mesher 光照属性(天光+方块光)', () => {
  it('封闭空腔的面天光≈0，露天表面天光≈1', () => {
    const w = new ChunkWorld(42);
    const STONE = 1; // y=188 接近世界顶(CHUNK_H=192)，必在地表之上=露天
    for (const [x, y, z] of [
      [10, 188, 9],
      [8, 188, 9],
      [9, 189, 9],
      [9, 187, 9],
      [9, 188, 10],
      [9, 188, 8],
    ])
      w.setBlock(x, y, z, STONE);

    const light = meshChunk(w, 0, 0).opaque.light!;
    let skyMin = 1,
      skyMax = 0;
    for (let i = 0; i < light.length; i += 2) {
      // 偶数下标=天光
      if (light[i] < skyMin) skyMin = light[i];
      if (light[i] > skyMax) skyMax = light[i];
    }
    expect(skyMax).toBeGreaterThan(0.9); // 露天表面：天光满
    expect(skyMin).toBe(0); // 封闭面：天光 0
  });

  it('火把：生成自发光网格 + 给周围方块面带来方块光', () => {
    const w = new ChunkWorld(7);
    // 地表之上(y=186)搭一个石台 + 台上放火把，台面的面应当被方块光照亮
    const STONE = 1;
    for (let x = 6; x <= 12; x++) for (let z = 6; z <= 12; z++) w.setBlock(x, 186, z, STONE);
    w.setBlock(9, 187, 9, TORCH); // 台面中央放火把

    const m = meshChunk(w, 0, 0);
    expect(m.torch.positions.length).toBeGreaterThan(0); // 火把画出了网格(交叉片)
    // 不透明面里，方块光通道(奇数下标)应有 >0 的值(火把照亮了台面/邻块面)
    const light = m.opaque.light!;
    let blkMax = 0;
    for (let i = 1; i < light.length; i += 2) if (light[i] > blkMax) blkMax = light[i];
    expect(blkMax).toBeGreaterThan(0.5); // 紧邻火把的面方块光接近满
  });
});
