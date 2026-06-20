import { describe, it, expect } from 'vitest';
import { spawnDrop, stepDrop, canPickup, mergeDrops, DROP_SIZE } from './itemDrop';
import type { VoxelWorld } from '../physics/player';

// 地面在 y<10 都是实心，y>=10 为空
const ground: VoxelWorld = { isSolid: (_x, y) => y < 10 };

describe('itemDrop', () => {
  it('在方块中心生成、带向上初速', () => {
    const d = spawnDrop(2, 5, 12, 7, () => 0.5);
    expect(d).toMatchObject({ id: 2, x: 5.5, y: 12.5, z: 7.5 });
    expect(d.vx).toBe(0); // rand 0.5 → 无水平
    expect(d.vy).toBeGreaterThan(0);
  });

  it('受重力下落并停在实心块顶面', () => {
    const d = spawnDrop(2, 5, 20, 7, () => 0.5);
    for (let i = 0; i < 600; i++) stepDrop(d, ground, 1 / 60); // ~10s
    // 地面顶面 = y=10，物品中心应停在 10 + 半高
    expect(d.y).toBeCloseTo(10 + DROP_SIZE / 2, 3);
    expect(d.vy).toBe(0);
  });

  it('age 随时间累加', () => {
    const d = spawnDrop(2, 0, 20, 0, () => 0.5);
    stepDrop(d, ground, 0.5);
    expect(d.age).toBeCloseTo(0.5, 5);
  });

  it('刚生成不能被拾取（拾取延迟）', () => {
    const d = spawnDrop(2, 0, 12, 0, () => 0.5);
    expect(canPickup(d, 0.5, 12.5, 0.5)).toBe(false); // age=0
    d.age = 0.5;
    expect(canPickup(d, 0.5, 12.5, 0.5)).toBe(true); // 近且过了延迟
    expect(canPickup(d, 9, 12.5, 0.5)).toBe(false); // 太远
  });
});

describe('mergeDrops', () => {
  const cap64 = (): number => 64;

  it('相邻同类合并成一堆，第二个移除', () => {
    const a = spawnDrop(2, 0, 10, 0, () => 0.5); // 中心 (0.5,10.5,0.5)
    const b = spawnDrop(2, 0, 10, 0, () => 0.5); // 同位
    a.count = 3;
    b.count = 5;
    const drops = [a, b];
    mergeDrops(drops, cap64);
    expect(drops.length).toBe(1);
    expect(drops[0].count).toBe(8);
  });

  it('异类不合并', () => {
    const drops = [spawnDrop(2, 0, 10, 0, () => 0.5), spawnDrop(3, 0, 10, 0, () => 0.5)];
    mergeDrops(drops, cap64);
    expect(drops.length).toBe(2);
  });

  it('距离过远不合并', () => {
    const drops = [spawnDrop(2, 0, 10, 0, () => 0.5), spawnDrop(2, 5, 10, 0, () => 0.5)];
    mergeDrops(drops, cap64);
    expect(drops.length).toBe(2);
  });

  it('受堆叠上限约束：超出留作单独一堆', () => {
    const a = spawnDrop(2, 0, 10, 0, () => 0.5);
    const b = spawnDrop(2, 0, 10, 0, () => 0.5);
    a.count = 60;
    b.count = 10;
    const drops = [a, b];
    mergeDrops(drops, () => 64); // 上限 64
    expect(drops.length).toBe(2);
    expect(drops[0].count).toBe(64); // 填满
    expect(drops[1].count).toBe(6); // 余 6 留下
  });
});
