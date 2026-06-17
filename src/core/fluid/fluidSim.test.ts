import { describe, it, expect } from 'vitest';
import { FluidSim, type FluidGrid } from './fluidSim';

// 简易内存网格：y<floorY 处为固体地面，其余可放水。
class TestGrid implements FluidGrid {
  private water = new Map<string, { a: number; s: boolean; f: boolean }>();
  constructor(private readonly floorY: number) {}
  private k(x: number, y: number, z: number): string {
    return `${x},${y},${z}`;
  }
  isSolid(x: number, y: number, z: number): boolean {
    void x;
    void z;
    return y < this.floorY; // 无限平铺地面：只看高度
  }
  amount(x: number, y: number, z: number): number {
    return this.water.get(this.k(x, y, z))?.a ?? 0;
  }
  isSource(x: number, y: number, z: number): boolean {
    return this.water.get(this.k(x, y, z))?.s ?? false;
  }
  isFalling(x: number, y: number, z: number): boolean {
    return this.water.get(this.k(x, y, z))?.f ?? false;
  }
  setWater(x: number, y: number, z: number, a: number, s: boolean, f: boolean): void {
    if (a <= 0) this.water.delete(this.k(x, y, z));
    else this.water.set(this.k(x, y, z), { a, s, f });
  }
  putSource(x: number, y: number, z: number): void {
    this.setWater(x, y, z, 8, true, false);
  }
}

function run(sim: FluidSim, g: FluidGrid, ticks: number): void {
  for (let i = 0; i < ticks; i++) sim.tick(g);
}

describe('fluidSim', () => {
  it('源头向下流成水柱并在地面铺开', () => {
    const g = new TestGrid(0); // 地面在 y<0
    g.putSource(0, 5, 0);
    const sim = new FluidSim();
    sim.activate(0, 5, 0);
    run(sim, g, 30);
    // 水柱：0..4 都有水
    for (let y = 0; y <= 5; y++) expect(g.amount(0, y, 0)).toBeGreaterThan(0);
    // 落到地面(y=0)后向四周铺开
    expect(g.amount(1, 0, 0)).toBeGreaterThan(0);
    expect(g.amount(-1, 0, 0)).toBeGreaterThan(0);
  });

  it('平地上从源头水平铺开恰好 7 格', () => {
    const g = new TestGrid(0);
    g.putSource(0, 0, 0);
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    run(sim, g, 40);
    // 相邻 7、依次递减到 1，第 8 格无水
    expect(g.amount(1, 0, 0)).toBe(7);
    expect(g.amount(7, 0, 0)).toBe(1);
    expect(g.amount(8, 0, 0)).toBe(0);
  });

  it('瀑布水柱不向半空乱铺（柱体单薄）', () => {
    const g = new TestGrid(0);
    g.putSource(0, 5, 0);
    const sim = new FluidSim();
    sim.activate(0, 5, 0);
    run(sim, g, 30);
    // 半空中(y=3)柱子旁边不应有水
    expect(g.amount(1, 3, 0)).toBe(0);
    expect(g.amount(2, 3, 0)).toBe(0);
  });

  it('源头移除后下游退水', () => {
    const g = new TestGrid(0);
    g.putSource(0, 0, 0);
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    run(sim, g, 40);
    expect(g.amount(3, 0, 0)).toBeGreaterThan(0); // 先铺到了
    // 移除源头
    g.setWater(0, 0, 0, 0, false, false);
    sim.activate(0, 0, 0);
    run(sim, g, 60);
    expect(g.amount(3, 0, 0)).toBe(0); // 退干
    expect(g.amount(1, 0, 0)).toBe(0);
  });

  it('空闲时不再有活跃格（收敛）', () => {
    const g = new TestGrid(0);
    g.putSource(0, 0, 0);
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    run(sim, g, 60);
    expect(sim.activeCount).toBe(0);
  });
});
