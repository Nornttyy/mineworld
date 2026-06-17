import { describe, it, expect } from 'vitest';
import { FluidSim, type FluidGrid } from './fluidSim';

// 灵活内存网格：y<floor 为实心地面；可 carveHole 在地面打洞、addSolid 加方块。
class Grid implements FluidGrid {
  private water = new Map<string, { a: number; s: boolean; f: boolean }>();
  private solids = new Set<string>();
  private holes = new Set<string>();
  constructor(private readonly floor = 0) {}
  private k(x: number, y: number, z: number): string {
    return `${x},${y},${z}`;
  }
  isSolid(x: number, y: number, z: number): boolean {
    const kk = this.k(x, y, z);
    if (this.holes.has(kk)) return false;
    if (this.solids.has(kk)) return true;
    return y < this.floor;
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
  src(x: number, y: number, z: number): void {
    this.setWater(x, y, z, 8, true, false);
  }
  carveHole(x: number, y: number, z: number): void {
    this.holes.add(this.k(x, y, z));
  }
}

function run(sim: FluidSim, g: FluidGrid, ticks: number): void {
  for (let i = 0; i < ticks; i++) sim.tick(g);
}

describe('fluidSim（对照 MC）', () => {
  it('源头向下流成水柱并在地面铺开', () => {
    const g = new Grid(0);
    g.src(0, 5, 0);
    const sim = new FluidSim();
    sim.activate(0, 5, 0);
    run(sim, g, 40);
    for (let y = 0; y <= 5; y++) expect(g.amount(0, y, 0)).toBeGreaterThan(0);
    expect(g.amount(1, 0, 0)).toBeGreaterThan(0);
    expect(g.amount(-1, 0, 0)).toBeGreaterThan(0);
  });

  it('平地上从源头水平铺开恰好 7 格', () => {
    const g = new Grid(0);
    g.src(0, 0, 0);
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    run(sim, g, 50);
    expect(g.amount(1, 0, 0)).toBe(7);
    expect(g.amount(7, 0, 0)).toBe(1);
    expect(g.amount(8, 0, 0)).toBe(0);
  });

  it('瀑布水柱不向半空乱铺（柱体单薄）', () => {
    const g = new Grid(0);
    g.src(0, 5, 0);
    const sim = new FluidSim();
    sim.activate(0, 5, 0);
    run(sim, g, 40);
    expect(g.amount(1, 3, 0)).toBe(0);
    expect(g.amount(2, 3, 0)).toBe(0);
  });

  it('朝最近的洞流过去（不四面平均）', () => {
    const g = new Grid(0);
    g.carveHole(4, -1, 0); // (4,0,0) 脚下打洞 → 该处能下落
    g.src(0, 0, 0);
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    run(sim, g, 40);
    expect(g.amount(1, 0, 0)).toBeGreaterThan(0); // 朝洞(+X)流
    expect(g.amount(-1, 0, 0)).toBe(0); // 不朝 -X 乱铺
    expect(g.amount(4, -1, 0)).toBeGreaterThan(0); // 流到洞口并落下
  });

  it('源头移除后下游退水', () => {
    const g = new Grid(0);
    g.src(0, 0, 0);
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    run(sim, g, 50);
    expect(g.amount(3, 0, 0)).toBeGreaterThan(0);
    g.setWater(0, 0, 0, 0, false, false); // 移除源头
    sim.activate(0, 0, 0);
    run(sim, g, 80);
    expect(g.amount(3, 0, 0)).toBe(0);
    expect(g.amount(1, 0, 0)).toBe(0);
  });

  it('空闲时收敛（无活跃格）', () => {
    const g = new Grid(0);
    g.src(0, 0, 0);
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    run(sim, g, 80);
    expect(sim.activeCount).toBe(0);
  });
});
