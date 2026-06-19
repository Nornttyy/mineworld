import { describe, it, expect } from 'vitest';
import { spawnMob, updateMob } from './mob';
import { makeRng } from '../math/rng';
import type { VoxelWorld } from '../physics/player';

// 深水世界：y<60 实心底；y∈[60,70) 是水（水面在 y=70）。
const deepWater: VoxelWorld = {
  isSolid: (_x, y) => y < 60,
  isWater: (_x, y) => y >= 60 && y < 70,
};

describe('updateMob — 在水里像玩家一样漂（浮力，不沉底）', () => {
  it('丢进深水会浮上来（不沉到底）', () => {
    let m = spawnMob('cow', 0.5, 64, 0.5);
    const rng = makeRng(1);
    for (let i = 0; i < 90; i++) m = updateMob(m, deepWater, rng).mob;
    expect(m.pos.y).toBeGreaterThan(67); // 浮到水面附近，而非沉到 60
    expect(m.pos.y).toBeLessThan(70.6); // 也没冲出水太多
  });

  it('稳定后在水面附近漂着，不沉也不飞出', () => {
    let m = spawnMob('pig', 0.5, 68, 0.5);
    const rng = makeRng(2);
    let minY = Infinity;
    let maxY = -Infinity;
    for (let i = 0; i < 300; i++) {
      m = updateMob(m, deepWater, rng).mob;
      if (i > 120) {
        minY = Math.min(minY, m.pos.y);
        maxY = Math.max(maxY, m.pos.y);
      }
    }
    expect(minY).toBeGreaterThan(67);
    expect(maxY).toBeLessThan(71);
  });

  it('陆地（世界无 isWater）行为不变：照常受重力下落', () => {
    const land: VoxelWorld = { isSolid: (_x, y) => y < 10 };
    let m = spawnMob('cow', 0.5, 20, 0.5);
    const rng = makeRng(3);
    for (let i = 0; i < 3; i++) m = updateMob(m, land, rng).mob;
    expect(m.pos.y).toBeLessThan(20); // 没水 → 正常下落
  });
});
