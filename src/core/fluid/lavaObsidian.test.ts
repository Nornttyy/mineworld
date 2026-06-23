/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect } from 'vitest';
import { FluidSim } from './fluidSim';

describe('水浇岩浆 → 黑曜石', () => {
  it('流动水临岩浆 → 岩浆变黑曜石、水被消耗', () => {
    const blocks = new Map<string, number>();
    const water = new Map<string, { a: number; s: boolean; f: boolean }>();
    const K = (x: number, y: number, z: number) => `${x},${y},${z}`;
    blocks.set(K(1, 0, 0), 23); // 岩浆
    water.set(K(0, 0, 0), { a: 6, s: false, f: false }); // 流动水(非源)
    const grid: any = {
      isSolid: (x: number, y: number, z: number) => { const b = blocks.get(K(x, y, z)) ?? 0; return b !== 0 && b !== 23; },
      amount: (x: number, y: number, z: number) => water.get(K(x, y, z))?.a ?? 0,
      isSource: (x: number, y: number, z: number) => !!water.get(K(x, y, z))?.s,
      isFalling: (x: number, y: number, z: number) => !!water.get(K(x, y, z))?.f,
      setWater: (x: number, y: number, z: number, a: number, s: boolean, f: boolean) => { a > 0 ? water.set(K(x, y, z), { a, s, f }) : water.delete(K(x, y, z)); },
      getBlock: (x: number, y: number, z: number) => blocks.get(K(x, y, z)) ?? 0,
      setBlock: (x: number, y: number, z: number, id: number) => { id === 0 ? blocks.delete(K(x, y, z)) : blocks.set(K(x, y, z), id); },
    };
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    sim.tick(grid);
    expect(blocks.get(K(1, 0, 0))).toBe(18);      // 岩浆→黑曜石
    expect(water.get(K(0, 0, 0))?.a ?? 0).toBe(0); // 水被消耗
  });
});
