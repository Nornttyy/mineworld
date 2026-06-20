import { describe, it, expect } from 'vitest';
import { computeSkyLight, computeBlockLight, lightFactor, MAX_LIGHT } from './skylight';

// 测试网格：W×H×W，opaque 由一个集合给出。idx 与实现一致。
function make(W: number, H: number, solids: [number, number, number][]) {
  const set = new Set(solids.map(([x, y, z]) => `${x},${y},${z}`));
  const opaque = (x: number, y: number, z: number): boolean => set.has(`${x},${y},${z}`);
  const light = computeSkyLight(W, H, opaque);
  const at = (x: number, y: number, z: number): number => light[x + z * W + y * W * W];
  return { at };
}

describe('天光传播', () => {
  it('完全露天 → 处处满 15', () => {
    const { at } = make(3, 4, []);
    expect(at(1, 3, 1)).toBe(MAX_LIGHT);
    expect(at(0, 0, 0)).toBe(MAX_LIGHT);
  });

  it('地板之上满 15，地板(挡光)本身为 0', () => {
    const solids: [number, number, number][] = [];
    for (let x = 0; x < 3; x++) for (let z = 0; z < 3; z++) solids.push([x, 0, z]); // y=0 整层地板
    const { at } = make(3, 4, solids);
    expect(at(1, 1, 1)).toBe(MAX_LIGHT); // 地板上方=露天
    expect(at(1, 0, 1)).toBe(0); // 地板格本身不带光
  });

  it('封闭洞穴 → 内部为 0(真黑)', () => {
    // 5×5×5，外壳全实心，中心 (2,2,2) 是空气 → 应为 0
    const W = 5,
      H = 5;
    const solids: [number, number, number][] = [];
    for (let x = 0; x < W; x++)
      for (let y = 0; y < H; y++)
        for (let z = 0; z < W; z++)
          if (x === 0 || x === W - 1 || y === 0 || y === H - 1 || z === 0 || z === W - 1) solids.push([x, y, z]);
    const { at } = make(W, H, solids);
    expect(at(2, 2, 2)).toBe(0);
  });

  it('檐下/横向：光从开口逐格 −1 渗入', () => {
    // 顶层 y=2 全实心(盖住)，只在 x=0 处留个口让光进到 y=1 层；y=1 层向 +x 渗 −1
    const W = 5,
      H = 3;
    const solids: [number, number, number][] = [];
    for (let x = 0; x < W; x++) for (let z = 0; z < W; z++) if (x !== 0) solids.push([x, 2, z]); // 顶盖，x=0 开口
    const { at } = make(W, H, solids);
    expect(at(0, 1, 0)).toBe(MAX_LIGHT); // 开口正下：直通天，满 15
    expect(at(1, 1, 0)).toBe(MAX_LIGHT - 1); // 往里一格 14
    expect(at(2, 1, 0)).toBe(MAX_LIGHT - 2); // 13
  });

  it('半透明衰减(水)：露天柱穿过水每格额外 −1 → 水下越深越暗', () => {
    // 单列、全非实心；y=2,3,4 是"水"(opacity 1)，y=0,1 是空气
    const W = 1,
      H = 5;
    const opaque = (): boolean => false;
    const opacity = (_x: number, y: number): number => (y >= 2 ? 1 : 0);
    const light = computeSkyLight(W, H, opaque, opacity);
    const at = (y: number): number => light[y]; // W=1 → idx=y
    expect(at(4)).toBe(14); // 顶层水：15−1
    expect(at(3)).toBe(13);
    expect(at(2)).toBe(12);
    expect(at(1)).toBe(12); // 水下方空气：保持穿水后的等级(空气不再衰减)
  });

  it('lightFactor：0 最暗(>0)、15 满亮、单调递增', () => {
    expect(lightFactor(0)).toBeGreaterThan(0);
    expect(lightFactor(0)).toBeLessThan(0.2);
    expect(lightFactor(15)).toBeCloseTo(1, 5);
    expect(lightFactor(15)).toBeGreaterThan(lightFactor(10));
    expect(lightFactor(10)).toBeGreaterThan(lightFactor(4));
  });
});

describe('方块光传播(火把)', () => {
  const noEmit = (): number => 0;
  const noOpaque = (): boolean => false;

  it('无光源 → 处处 0', () => {
    const light = computeBlockLight(3, 3, noEmit, noOpaque);
    expect(Math.max(...light)).toBe(0);
  });

  it('单个火把(14) → 自身 14，逐格 −1 球状衰减', () => {
    const W = 9,
      H = 9;
    const c = 4; // 中心
    const emit = (x: number, y: number, z: number): number => (x === c && y === c && z === c ? 14 : 0);
    const light = computeBlockLight(W, H, emit, noOpaque);
    const at = (x: number, y: number, z: number): number => light[x + z * W + y * W * W];
    expect(at(c, c, c)).toBe(14);
    expect(at(c + 1, c, c)).toBe(13); // 相邻 −1
    expect(at(c + 2, c, c)).toBe(12);
    expect(at(c, c, c)).toBeGreaterThan(at(c + 3, c, c)); // 越远越暗
    expect(at(c + 4, c, c)).toBe(10); // 曼哈顿距离 4 → 14−4
  });

  it('挡光墙挡住火把光：墙后更暗(需绕路)', () => {
    // 一面 x=c 的实心墙(除火把所在行外)，火把在 x=c-1，墙后 x=c+1 的光要绕墙顶 → 比直射更暗
    const W = 7,
      H = 7;
    const c = 3;
    const emit = (x: number, y: number, z: number): number => (x === c - 1 && y === 0 && z === c ? 14 : 0);
    const opaque = (x: number, _y: number, _z: number): boolean => x === c; // 整面 x=c 墙
    const light = computeBlockLight(W, H, emit, opaque);
    const at = (x: number, y: number, z: number): number => light[x + z * W + y * W * W];
    expect(at(c, 0, c)).toBe(0); // 墙内不带光
    expect(at(c - 1, 0, c)).toBe(14); // 火把处
    // 墙后(x=c+1,y=0) 只能从墙上方绕过来 → 远小于直射的 13
    expect(at(c + 1, 0, c)).toBeLessThan(13);
  });
});
