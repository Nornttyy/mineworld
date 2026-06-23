import { describe, it, expect } from 'vitest';
import { ChunkWorld } from '../world/chunkWorld';
import { isSolidId } from '../blocks/registry';
import { FluidSim, type FluidGrid } from './fluidSim';
import { presettleWater } from './presettle';
import { CHUNK_H } from '../world/chunk';

// 复刻 Game 里的 fluidGrid 接线
function gridFor(w: ChunkWorld): FluidGrid {
  return {
    isSolid: (x, y, z) => y < 0 || y >= CHUNK_H || isSolidId(w.getBlock(x, y, z)),
    amount: (x, y, z) => w.waterAmount(x, y, z),
    isSource: (x, y, z) => w.isWaterSource(x, y, z),
    isFalling: (x, y, z) => w.isWaterFalling(x, y, z),
    setWater: (x, y, z, a, s, f) => w.setWater(x, y, z, a, s, f),
    getBlock: (x, y, z) => w.getBlock(x, y, z),
    setBlock: (x, y, z, id) => w.setBlock(x, y, z, id),
  };
}

describe('开局预流动 presettleWater', () => {
  it('把"待流动的水"跑到稳态(模拟读档激活后，进场前已铺好)', () => {
    const w = new ChunkWorld(1);
    const STONE = 1;
    const Y = 150; // 海平面之上：此处无生成水，场景完全可控
    // 封闭平底水池：地板铺石、四周砌墙、内部空气 → 无落差，源头会平铺到邻格
    for (let x = 2; x <= 9; x++)
      for (let z = 2; z <= 8; z++) {
        w.setBlock(x, Y - 1, z, STONE);
        const wall = x === 2 || x === 9 || z === 2 || z === 8;
        w.setBlock(x, Y, z, wall ? STONE : 0);
      }
    w.setWater(5, Y, 5, 8, true, false); // 一个满源头
    const sim = new FluidSim();
    sim.activate(5, Y, 5); // 模拟读档 delta 对水的激活
    expect(w.waterAmount(6, Y, 5)).toBe(0); // 预流动前：旁边没水

    const ticks = presettleWater(sim, gridFor(w));

    expect(w.waterAmount(6, Y, 5)).toBeGreaterThan(0); // 进场前已铺到旁边
    expect(w.waterAmount(5, Y, 5)).toBe(8); // 源头仍在
    expect(ticks).toBeGreaterThan(0);
    expect(ticks).toBeLessThan(240); // 远没到上限
    expect(sim.activeCount).toBe(0); // 已稳定，进游戏不再有可见流动
  });

  it('没有待流动的水(空活跃集，如全新世界) → 零刻瞬间返回', () => {
    const w = new ChunkWorld(2);
    const sim = new FluidSim();
    expect(presettleWater(sim, gridFor(w))).toBe(0);
  });
});
