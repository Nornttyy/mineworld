import { describe, it, expect } from 'vitest';
import { computeSkyLight, lightFactor, MAX_LIGHT } from './skylight';

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

  it('lightFactor：0 最暗(>0)、15 满亮、单调递增', () => {
    expect(lightFactor(0)).toBeGreaterThan(0);
    expect(lightFactor(0)).toBeLessThan(0.2);
    expect(lightFactor(15)).toBeCloseTo(1, 5);
    expect(lightFactor(15)).toBeGreaterThan(lightFactor(10));
    expect(lightFactor(10)).toBeGreaterThan(lightFactor(4));
  });
});
