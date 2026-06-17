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
  solid(x: number, y: number, z: number): void {
    this.solids.add(this.k(x, y, z));
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

  it('水落到世界底部停住并收敛（不灌虚空）', () => {
    const g = new Grid(0); // y<0 视作固体（= 游戏里"世界底=固体"的约定）
    g.src(0, 5, 0);
    const sim = new FluidSim();
    sim.activate(0, 5, 0);
    run(sim, g, 80);
    expect(g.amount(0, 0, 0)).toBeGreaterThan(0); // 停在 y=0
    expect(g.amount(0, -1, 0)).toBe(0); // 没灌进 y<0
    expect(sim.activeCount).toBe(0); // 收敛，不再 churn
  });

  it('海平面下、连到水源的洼地进水（衰减铺开，绝不生成新源头）', () => {
    const g = new Grid(0); // y<0 固体
    const SEA = 5;
    for (let y = 0; y <= SEA; y++) g.src(-1, y, 0); // 一面"深海"源头墙(x=-1)
    g.solid(2, 0, 0); // 远端挡墙，限制洪泛范围便于断言
    for (let y = 0; y <= SEA + 1; y++) {
      g.solid(2, y, 0);
      g.solid(0, y, 1);
      g.solid(0, y, -1);
      g.solid(1, y, 1);
      g.solid(1, y, -1);
    }
    const sim = new FluidSim(SEA); // 传入海平面
    for (let y = 0; y <= SEA; y++) sim.activate(-1, y, 0);
    run(sim, g, 40);
    // 坑(x=0,1 各 y=0..5)应进水，但只能是流动水，不能凭空变成无限源头
    expect(g.amount(0, 0, 0)).toBeGreaterThan(0); // 底
    expect(g.amount(0, SEA, 0)).toBeGreaterThan(0); // 顶
    expect(g.amount(1, 0, 0)).toBeGreaterThan(0); // 远一格的底也进水
    expect(g.isSource(0, 0, 0)).toBe(false); // 进来的水绝不是源头 → 可被抽干
    expect(g.isSource(1, 0, 0)).toBe(false);
  });

  it('永不生成无限水：两源头夹一格 → 中间只是流动水(7)，撤掉源头后退干', () => {
    const g = new Grid(0);
    g.src(0, 0, 0);
    g.src(2, 0, 0); // 两侧源头夹住 (1,0,0)
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    sim.activate(2, 0, 0);
    run(sim, g, 40);
    expect(g.amount(1, 0, 0)).toBe(7); // 衰减为 7，而非 MC 经典“变源头”
    expect(g.isSource(1, 0, 0)).toBe(false);
    // 撤掉两个源头 → 中间应彻底退干（证明不是无限水）
    g.setWater(0, 0, 0, 0, false, false);
    g.setWater(2, 0, 0, 0, false, false);
    sim.activate(0, 0, 0);
    sim.activate(2, 0, 0);
    run(sim, g, 60);
    expect(g.amount(1, 0, 0)).toBe(0);
  });

  it('三面(及以上)是源头 → 该格灌满到满量(8)，但仍不是源头', () => {
    const g = new Grid(0);
    g.src(1, 0, 0);
    g.src(-1, 0, 0);
    g.src(0, 0, 1); // 中心 (0,0,0) 被三面源头包围
    const sim = new FluidSim();
    sim.activate(1, 0, 0);
    sim.activate(-1, 0, 0);
    sim.activate(0, 0, 1);
    run(sim, g, 30);
    expect(g.amount(0, 0, 0)).toBe(8); // 三面源头 → 直接填满
    expect(g.isSource(0, 0, 0)).toBe(false); // 仍是流动水，不是无限源头
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
