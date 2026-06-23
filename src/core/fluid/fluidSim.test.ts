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
  getBlock(): number {
    return 0; // no lava in these tests
  }
  setBlock(): void {
    // no-op: these tests don't exercise lava→obsidian
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

  it('MC 无限水：两源头夹一格 → 中间变源头(8)；撤掉一侧后中间仍是源头(自我修复)', () => {
    const g = new Grid(0);
    g.src(0, 0, 0);
    g.src(2, 0, 0); // 两侧源头夹住 (1,0,0)
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    sim.activate(2, 0, 0);
    run(sim, g, 40);
    expect(g.amount(1, 0, 0)).toBe(8); // ≥2 相邻源头 → 自身成源头（MC 经典无限水）
    expect(g.isSource(1, 0, 0)).toBe(true);
    // 撤掉一侧源头：中间已是源头 → 持久存在（不退干），并把空出来的一侧重新喂成流动水
    g.setWater(0, 0, 0, 0, false, false);
    sim.activate(0, 0, 0);
    run(sim, g, 40);
    expect(g.isSource(1, 0, 0)).toBe(true); // 仍是源头（无限水自我修复）
    expect(g.amount(0, 0, 0)).toBe(7); // 被中间源头重新喂满成流动水
  });

  it('三面是源头 → 中心也变源头(8)', () => {
    const g = new Grid(0);
    g.src(1, 0, 0);
    g.src(-1, 0, 0);
    g.src(0, 0, 1); // 中心 (0,0,0) 被三面源头包围
    const sim = new FluidSim();
    sim.activate(1, 0, 0);
    sim.activate(-1, 0, 0);
    sim.activate(0, 0, 1);
    run(sim, g, 30);
    expect(g.amount(0, 0, 0)).toBe(8); // ≥2 源头 → 填满
    expect(g.isSource(0, 0, 0)).toBe(true); // 并成为源头
  });

  it('bug 修复：单源头绝不连锁出新源头（小口子不会把整片灌满成源头）', () => {
    // 旧 bug（今天引入）：海平面以下「挨着 1 个源头就变源头」→ 一个口子连锁把整片变永久源头。
    // 现在：单个源头只会衰减流动铺开，邻格【绝不】变成源头，远处自然衰减为 0。
    const g = new Grid(0);
    g.src(0, 0, 0);
    const sim = new FluidSim();
    sim.activate(0, 0, 0);
    run(sim, g, 80);
    // 平地铺开 7,6,…,1，全是流动水、无一变源头（关键：没有连锁灌满）
    for (let x = 1; x <= 7; x++) {
      expect(g.amount(x, 0, 0)).toBe(8 - x);
      expect(g.isSource(x, 0, 0)).toBe(false);
    }
    expect(g.amount(8, 0, 0)).toBe(0); // 不无限蔓延
  });

  it('全世界一套规则：高 y 与低 y 行为完全相同（无海平面 y=18 突变）', () => {
    const make = (baseY: number): Grid => {
      const g = new Grid(baseY); // 地面在 baseY 之下
      g.src(0, baseY, 0);
      return g;
    };
    const low = make(2);
    const high = make(40);
    const simL = new FluidSim();
    const simH = new FluidSim();
    simL.activate(0, 2, 0);
    simH.activate(0, 40, 0);
    run(simL, low, 50);
    run(simH, high, 50);
    // 同样的单源头平地铺开，结果逐格一致，证明不再以海平面分上下两套
    for (let x = 0; x <= 8; x++) {
      expect(low.amount(x, 2, 0)).toBe(high.amount(x, 40, 0));
      expect(low.isSource(x, 2, 0)).toBe(high.isSource(x, 40, 0));
    }
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
