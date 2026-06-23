// 流动水模拟 —— 严格对照 Minecraft Java 的水机制。纯逻辑，operates on FluidGrid，可单测。
//
// 关键规则（同 MC，全世界一套，无海平面分界）：
//  - 水量 1..8（8=满/源头）；源头(source)恒满、稳定；falling=从上方灌下的瀑布柱。
//  - 更新某格水(getNewLiquid)：上方有水→满 falling(瀑布)；
//    否则 MC 经典「无限水」：**≥2 个正交相邻源头 → 自身也成源头**（水自我找平到水位）。
//    单个源头不连锁（邻格只挨着 1 个源头→只是衰减流动水），所以一个小口子不会把整片秒变源头。
//    再否则衰减：取水平最高邻格 −1。水永不向上爬。
//  - 扩散(spread)：能向下就只向下（下方成 falling 满水，柱体单薄）；不能向下才向四周铺。
//  - 朝洞找路：向四周铺时用"坡度距离"(最多探 SLOPE_FIND=4 格)找最近的落差，只朝最近方向铺；
//    多个方向并列或找不到洞 → 一起铺（平地铺成片）。这就是 MC 水会"找洞流过去"的行为。
//  - 双缓冲：本刻所有判定都基于刻初状态，统一应用，保证每刻只推进一格、与处理顺序无关。

export interface FluidGrid {
  isSolid(x: number, y: number, z: number): boolean;
  amount(x: number, y: number, z: number): number; // 0..8
  isSource(x: number, y: number, z: number): boolean;
  isFalling(x: number, y: number, z: number): boolean;
  setWater(x: number, y: number, z: number, amount: number, source: boolean, falling: boolean): void;
  getBlock(x: number, y: number, z: number): number;
  setBlock(x: number, y: number, z: number, id: number): void;
}

const FULL = 8;
const DROPOFF = 1; // 水每横向一格 −1
const SLOPE_FIND = 4; // 坡度搜索最大格距（水=4）
const DIRS: readonly [number, number][] = [
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

  // maxPerTick：单刻最多评估的活跃格数（预算，防卡顿）；超出的留到下刻继续。
  constructor(maxPerTick = 4000) {
    this.maxPerTick = maxPerTick;
  }

  get activeCount(): number {
    return this.active.size;
  }

  // 标记某格及其邻居在下次 tick 需要重算（挖/放方块、水变化时调用）
  activate(x: number, y: number, z: number): void {
    this.active.add(key(x, y, z));
    for (const [dx, dz] of DIRS) this.active.add(key(x + dx, y, z + dz));
    this.active.add(key(x, y + 1, z));
    this.active.add(key(x, y - 1, z));
  }

  tick(g: FluidGrid): void {
    if (this.active.size === 0) return;
    const cells = [...this.active];
    this.active.clear();

    // 双缓冲：本刻只“提议”，按刻初状态评估；冲突取水量最大（源头优先）
    const writes = new Map<string, { x: number; y: number; z: number; c: Cell }>();
    const propose = (x: number, y: number, z: number, c: Cell): void => {
      const k = key(x, y, z);
      const ex = writes.get(k);
      if (!ex || c.amount > ex.c.amount || (c.amount === ex.c.amount && c.source && !ex.c.source)) {
        writes.set(k, { x, y, z, c });
      }
    };

    let budget = this.maxPerTick;
    for (const ck of cells) {
      if (budget-- <= 0) {
        this.active.add(ck);
        continue;
      }
      const [x, y, z] = ck.split(',').map(Number);
      this.evaluate(g, x, y, z, propose);
    }

    // 统一应用变化，并把变动格 + 邻居排进下一刻
    for (const { x, y, z, c } of writes.values()) {
      if (c.amount !== g.amount(x, y, z) || c.source !== g.isSource(x, y, z) || c.falling !== g.isFalling(x, y, z)) {
        g.setWater(x, y, z, c.amount, c.source, c.falling);
        this.activate(x, y, z);
      }
    }
  }

  // 评估一格：只读 g，向 propose 提交自身与扩散目标的新状态。空气格只能被邻格扩散填充。
  private evaluate(g: FluidGrid, x: number, y: number, z: number, propose: (x: number, y: number, z: number, c: Cell) => void): void {
    if (g.isSolid(x, y, z)) {
      if (g.amount(x, y, z) > 0) propose(x, y, z, EMPTY); // 变实心 → 清水
      return;
    }
    const isWater = g.amount(x, y, z) > 0 || g.isSource(x, y, z);
    if (!isWater) return; // 空气：自身不动，靠邻格扩散进来

    // 流动水（非源）接触岩浆(23) → 岩浆变黑曜石(18)，水被消耗
    if (g.amount(x, y, z) > 0 && !g.isSource(x, y, z)) {
      const neighbors: [number, number, number][] = [
        [x + 1, y, z], [x - 1, y, z], [x, y, z + 1], [x, y, z - 1],
        [x, y + 1, z], [x, y - 1, z],
      ];
      for (const [nx, ny, nz] of neighbors) {
        if (g.getBlock(nx, ny, nz) === 23) {
          g.setBlock(nx, ny, nz, 18);
          propose(x, y, z, EMPTY);
          return;
        }
      }
    }

    const self: Cell = g.isSource(x, y, z)
      ? { amount: FULL, source: true, falling: false }
      : this.getNewLiquid(g, x, y, z);
    propose(x, y, z, self);
    if (self.amount > 0) this.spread(g, x, y, z, self, propose);
  }

  // 重算某(已是水的)格应有的水量。规则（同 MC，全世界一套）：
  //  - 上方有水 → 满 falling（瀑布柱往下灌）。上方是方块(无水)就走不到这条 → 水不会向上爬。
  //  - MC 经典「无限水」：≥2 个正交相邻源头 → 自身也成源头（水找平到水位、自我修复）。
  //  - 否则衰减：水平最高邻格 −1。
  // 单个源头【不】连锁（邻格只挨 1 源头 → 只是衰减流动水），所以挖个小口子不会把整片秒变源头；
  //   只有真正连到一大片水体(多源头相邻)的同层凹陷才会被填到水位——这正是 MC 的行为。
  private getNewLiquid(g: FluidGrid, x: number, y: number, z: number): Cell {
    if (g.amount(x, y + 1, z) > 0) return { amount: FULL, source: false, falling: true };

    let maxN = 0;
    let srcCount = 0;
    for (const [dx, dz] of DIRS) {
      const a = g.amount(x + dx, y, z + dz);
      if (a > 0) {
        if (a > maxN) maxN = a;
        if (g.isSource(x + dx, y, z + dz)) srcCount++;
      }
    }
    if (srcCount >= 2) return { amount: FULL, source: true, falling: false };
    const n = maxN - DROPOFF;
    return n > 0 ? { amount: n, source: false, falling: false } : EMPTY;
  }

  // 扩散：能向下就只向下；否则朝最近落差方向横向铺。
  private spread(g: FluidGrid, x: number, y: number, z: number, cell: Cell, propose: (x: number, y: number, z: number, c: Cell) => void): void {
    const by = y - 1;
    const belowFull = g.amount(x, by, z) === FULL && !g.isFalling(x, by, z); // 下方已成池满水
    if (!g.isSolid(x, by, z) && !belowFull) {
      propose(x, by, z, { amount: FULL, source: false, falling: true }); // 下落柱
      return; // 能向下就只向下，保证瀑布柱单薄（全世界一致，无海平面特例）
    }
    const own = cell.source ? FULL : cell.amount;
    const give = own - DROPOFF;
    if (give < 1) return;
    for (const [dx, dz] of this.getSpreadDirs(g, x, y, z, own)) {
      const nx = x + dx;
      const nz = z + dz;
      if (g.isSolid(nx, y, nz) || g.isSource(nx, y, nz)) continue;
      if (g.amount(nx, y, nz) >= give) continue; // 已不低于，无需铺
      propose(nx, y, nz, { amount: give, source: false, falling: false });
    }
  }

  // 选择横向铺的方向：按"坡度距离"取最近落差的方向（可多个并列）；找不到洞→全部并列。
  private getSpreadDirs(g: FluidGrid, x: number, y: number, z: number, own: number): [number, number][] {
    let minDist = SLOPE_FIND + 1;
    const result: [number, number][] = [];
    for (const d of DIRS) {
      const nx = x + d[0];
      const nz = z + d[1];
      if (g.isSolid(nx, y, nz)) continue;
      if (g.amount(nx, y, nz) >= own) continue; // 不朝更高/等高处铺
      const dist = this.isHole(g, nx, y, nz) ? 0 : this.slopeDistance(g, nx, y, nz, 1, [-d[0], -d[1]]);
      if (dist < minDist) {
        minDist = dist;
        result.length = 0;
        result.push(d);
      } else if (dist === minDist) {
        result.push(d);
      }
    }
    return result;
  }

  // (x,y,z) 处的水能否继续往下落（下方非固体且非满水）
  private isHole(g: FluidGrid, x: number, y: number, z: number): boolean {
    return !g.isSolid(x, y - 1, z) && g.amount(x, y - 1, z) < FULL;
  }

  // 从 (x,y,z) 出发、最多探 SLOPE_FIND 格，返回到最近落差的格距；找不到则返回 SLOPE_FIND。
  private slopeDistance(g: FluidGrid, x: number, y: number, z: number, depth: number, from: [number, number]): number {
    let min = SLOPE_FIND;
    for (const d of DIRS) {
      if (d[0] === from[0] && d[1] === from[1]) continue; // 不回头
      const nx = x + d[0];
      const nz = z + d[1];
      if (g.isSolid(nx, y, nz)) continue;
      if (this.isHole(g, nx, y, nz)) return depth; // 找到落差
      if (depth < SLOPE_FIND) {
        const dd = this.slopeDistance(g, nx, y, nz, depth + 1, [-d[0], -d[1]]);
        if (dd < min) min = dd;
      }
    }
    return min;
  }
}
