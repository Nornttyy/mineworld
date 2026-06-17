// 流动水模拟（仿 MC 元胞自动机）。纯逻辑，operates on a FluidGrid，可单测。
// 规则要点：
//  - 源头(source)恒满(8)，稳定不动；
//  - 上方有水 → 本格被灌满(下落)，能继续下落则标 falling、不向四周铺；
//  - 不能下落的水(脚下是固体/已成池) → 向四周空格铺，水量每格 −1，到 0 干涸（最多 7 格）；
//  - 双缓冲：按当前状态算出所有格的新状态，再统一应用，避免顺序依赖（退水也靠这个逐 tick 收敛）。

export interface FluidGrid {
  isSolid(x: number, y: number, z: number): boolean; // 固体方块（水进不去）
  amount(x: number, y: number, z: number): number; // 水量 0..8
  isSource(x: number, y: number, z: number): boolean;
  isFalling(x: number, y: number, z: number): boolean;
  setWater(x: number, y: number, z: number, amount: number, source: boolean, falling: boolean): void;
}

const FULL = 8;
const H: [number, number][] = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

interface Cell {
  amount: number;
  source: boolean;
  falling: boolean;
}
const EMPTY: Cell = { amount: 0, source: false, falling: false };

const key = (x: number, y: number, z: number): string => `${x},${y},${z}`;

export class FluidSim {
  private active = new Set<string>();
  private readonly maxPerTick: number;

  constructor(maxPerTick = 6000) {
    this.maxPerTick = maxPerTick;
  }

  get activeCount(): number {
    return this.active.size;
  }

  // 标记某格（及其 6 邻居）需要在下次 tick 重算。挖/放方块、水状态变化时调用。
  activate(x: number, y: number, z: number): void {
    this.active.add(key(x, y, z));
    this.active.add(key(x + 1, y, z));
    this.active.add(key(x - 1, y, z));
    this.active.add(key(x, y + 1, z));
    this.active.add(key(x, y - 1, z));
    this.active.add(key(x, y, z + 1));
    this.active.add(key(x, y, z - 1));
  }

  // 推进一刻：算出所有候选格的新状态并应用；变化的格子把邻居排进下一刻。
  tick(g: FluidGrid): void {
    if (this.active.size === 0) return;
    const cells = [...this.active];
    this.active.clear();

    const updates: { x: number; y: number; z: number; c: Cell }[] = [];
    let budget = this.maxPerTick;
    for (const ck of cells) {
      if (budget-- <= 0) {
        this.active.add(ck); // 超预算 → 留到下一刻
        continue;
      }
      const [x, y, z] = ck.split(',').map(Number);
      const next = this.computeNew(g, x, y, z);
      if (
        next.amount !== g.amount(x, y, z) ||
        next.source !== g.isSource(x, y, z) ||
        next.falling !== g.isFalling(x, y, z)
      ) {
        updates.push({ x, y, z, c: next });
      }
    }
    for (const u of updates) {
      g.setWater(u.x, u.y, u.z, u.c.amount, u.c.source, u.c.falling);
      this.activate(u.x, u.y, u.z); // 邻居下一刻重算（含本格，便于二次收敛）
    }
  }

  // 按当前世界状态计算某格应有的水状态。
  private computeNew(g: FluidGrid, x: number, y: number, z: number): Cell {
    if (g.isSolid(x, y, z)) return EMPTY;
    if (g.isSource(x, y, z)) return { amount: FULL, source: true, falling: false };
    // 上方有水 → 被灌满。只有脚下是固体才算“落地”(可向四周铺)；否则为 falling 瀑布柱，
    // 不向四周铺。注意：脚下是水(柱中/池上)也算 falling，避免“非下落”沿柱体向上传播成胖柱。
    if (g.amount(x, y + 1, z) > 0) {
      return { amount: FULL, source: false, falling: !g.isSolid(x, y - 1, z) };
    }
    // 水平：来自“已支撑(不能下落)且非下落”的邻格，取最大水量 −1
    let best = 0;
    for (const [dx, dz] of H) {
      const nx = x + dx;
      const nz = z + dz;
      const a = g.amount(nx, y, nz);
      if (a > 1 && !g.isFalling(nx, y, nz) && !this.canFlowDown(g, nx, y, nz)) {
        best = Math.max(best, a - 1);
      }
    }
    return { amount: best, source: false, falling: false };
  }

  // 本格的水能否继续往下流：下方非固体、且不是“已成池的满水”（含下方是 falling，会让位）。
  private canFlowDown(g: FluidGrid, x: number, y: number, z: number): boolean {
    const by = y - 1;
    if (g.isSolid(x, by, z)) return false;
    if (g.amount(x, by, z) >= FULL && !g.isFalling(x, by, z)) return false;
    return true;
  }
}
