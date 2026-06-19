import { describe, it, expect } from 'vitest';
import { spawnArrow, stepArrow } from './arrow';
import type { VoxelWorld } from '../physics/player';

// 空世界（什么都不实心/不是水）
const AIR_WORLD: VoxelWorld = {
  isSolid: () => false,
  isWater: () => false,
};

// 在 y<=0 处是地面的世界
const FLOOR_WORLD: VoxelWorld = {
  isSolid: (_x: number, y: number) => y <= 0,
  isWater: () => false,
};

describe('arrow（飞行的箭）', () => {
  it('spawnArrow 把方向归一化后 × 速度', () => {
    const a = spawnArrow(0, 10, 0, 0, 0, 2, 1.5, true, 4); // 朝 +z，速度 1.5
    expect(a.vx).toBeCloseTo(0);
    expect(a.vy).toBeCloseTo(0);
    expect(a.vz).toBeCloseTo(1.5);
    expect(a.fromPlayer).toBe(true);
    expect(a.damage).toBe(4);
    expect(a.stuck).toBe(false);
  });

  it('飞行时受重力（vy 递减）并前进', () => {
    const a = spawnArrow(0, 10, 0, 1, 0, 0, 1, false, 2); // 水平朝 +x
    const before = a.vy;
    stepArrow(a, AIR_WORLD);
    expect(a.vy).toBeLessThan(before); // 重力把 vy 拉低
    expect(a.x).toBeGreaterThan(0); // 前进了
    expect(a.age).toBe(1);
  });

  it('撞到实心方块 → 插住、停下、位置在方块之前', () => {
    const a = spawnArrow(5, 1.5, 5, 0, -1, 0, 1, false, 2); // 朝下射向地面(y<=0 实心)
    for (let i = 0; i < 20 && !a.stuck; i++) stepArrow(a, FLOOR_WORLD);
    expect(a.stuck).toBe(true);
    expect(a.y).toBeGreaterThanOrEqual(1); // 停在地面(y=0 方块顶, floor=0)之前，没穿进去
    const y = a.y;
    stepArrow(a, FLOOR_WORLD); // 插住后不再移动
    expect(a.y).toBe(y);
  });

  it('高速也不穿墙（子步进）', () => {
    // 一堵 x>=3 的墙；箭从 x=0 以 5/tick 高速射向 +x，单步会跨过墙，必须子步进截停
    const WALL: VoxelWorld = { isSolid: (x: number) => x >= 3, isWater: () => false };
    const a = spawnArrow(0, 5, 0, 1, 0, 0, 5, true, 4);
    stepArrow(a, WALL);
    expect(a.stuck).toBe(true);
    expect(a.x).toBeLessThan(3); // 停在墙前，没穿过去
  });
});
