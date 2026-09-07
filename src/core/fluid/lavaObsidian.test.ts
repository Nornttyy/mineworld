import { describe, expect, it } from 'vitest';
import { LAVA, OBSIDIAN } from '../blocks/registry';
import { FluidSim, type FluidGrid } from './fluidSim';

interface WaterCell {
  amount: number;
  source: boolean;
  falling: boolean;
}

class MixingGrid implements FluidGrid {
  private readonly blocks = new Map<string, number>();
  private readonly water = new Map<string, WaterCell>();

  private key(x: number, y: number, z: number): string {
    return `${x},${y},${z}`;
  }

  isSolid(x: number, y: number, z: number): boolean {
    const block = this.getBlock(x, y, z);
    if (block === LAVA) return false;
    return y < 0 || block !== 0;
  }

  amount(x: number, y: number, z: number): number {
    return this.water.get(this.key(x, y, z))?.amount ?? 0;
  }

  isSource(x: number, y: number, z: number): boolean {
    return this.water.get(this.key(x, y, z))?.source ?? false;
  }

  isFalling(x: number, y: number, z: number): boolean {
    return this.water.get(this.key(x, y, z))?.falling ?? false;
  }

  setWater(
    x: number,
    y: number,
    z: number,
    amount: number,
    source: boolean,
    falling: boolean,
  ): void {
    const key = this.key(x, y, z);
    if (amount <= 0) this.water.delete(key);
    else this.water.set(key, { amount, source, falling });
  }

  getBlock(x: number, y: number, z: number): number {
    return this.blocks.get(this.key(x, y, z)) ?? 0;
  }

  setBlock(x: number, y: number, z: number, id: number): void {
    const key = this.key(x, y, z);
    if (id === 0) this.blocks.delete(key);
    else this.blocks.set(key, id);
  }

  source(x: number, y: number, z: number): void {
    this.setWater(x, y, z, 8, true, false);
  }

  flow(x: number, y: number, z: number, amount: number): void {
    this.setWater(x, y, z, amount, false, false);
  }
}

describe('水与静态岩浆混合（1.12）', () => {
  it('源头水水平接触岩浆时生成黑曜石，水源保留', () => {
    const grid = new MixingGrid();
    grid.source(0, 0, 0);
    grid.setBlock(1, 0, 0, LAVA);
    const sim = new FluidSim();

    sim.activate(0, 0, 0);
    sim.tick(grid);

    expect(grid.getBlock(1, 0, 0)).toBe(OBSIDIAN);
    expect(grid.amount(0, 0, 0)).toBe(8);
    expect(grid.isSource(0, 0, 0)).toBe(true);
  });

  it('有上游支撑的流动水接触岩浆时不会被反应强制清空', () => {
    const grid = new MixingGrid();
    grid.source(-1, 0, 0);
    grid.flow(0, 0, 0, 7);
    grid.setBlock(1, 0, 0, LAVA);
    const sim = new FluidSim();

    sim.activate(0, 0, 0);
    sim.tick(grid);

    expect(grid.getBlock(1, 0, 0)).toBe(OBSIDIAN);
    expect(grid.amount(0, 0, 0)).toBe(7);
    expect(grid.isSource(0, 0, 0)).toBe(false);
  });

  it('水在岩浆上方时生成黑曜石', () => {
    const grid = new MixingGrid();
    grid.source(0, 0, 0);
    grid.setBlock(0, -1, 0, LAVA);
    const sim = new FluidSim();

    sim.activate(0, 0, 0);
    sim.tick(grid);

    expect(grid.getBlock(0, -1, 0)).toBe(OBSIDIAN);
  });

  it('水只在岩浆正下方时不触发混合', () => {
    const grid = new MixingGrid();
    grid.source(0, 0, 0);
    grid.setBlock(0, 1, 0, LAVA);
    const sim = new FluidSim();

    sim.activate(0, 0, 0);
    sim.tick(grid);

    expect(grid.getBlock(0, 1, 0)).toBe(LAVA);
  });
});
