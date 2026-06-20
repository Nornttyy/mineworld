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

  it('掉进水里能爬上相邻的岸（不再困在水面上不去）', () => {
    // x<2 是 2 格深的水池（水面≈y62）；x>=2 是岸（岸顶 y62，与水面齐平）。
    // 牛浮在顶层水块里(脚≈y61)，要上岸得从脚高跨过 1 格台阶——正是它会卡住的地方。
    const pool: VoxelWorld = {
      isSolid: (x, y) => (x >= 2 ? y < 62 : y < 60),
      isWater: (x, y) => x < 2 && y >= 60 && y < 62,
    };
    let m = spawnMob('cow', 0.5, 61, 0.5); // 泡在水里
    const rng = makeRng(7);
    for (let i = 0; i < 200; i++) {
      m.ai.state = 'wander'; // 强制定向朝岸(+x)走，去掉随机游荡
      m.ai.target = { x: 6, y: 61, z: 0.5 }; // y 不参与水平寻路，仅满足 Vec3 类型
      m.ai.timer = 9999;
      m = updateMob(m, pool, rng).mob;
    }
    expect(m.pos.x).toBeGreaterThan(2.5); // 爬上了岸（越过 x=2 水陆边界）
    expect(m.pos.y).toBeGreaterThan(61.5); // 站到岸顶(≈62)，没困在水面(≈61)
    expect(m.onGround).toBe(true);
  });

  it('陆地（世界无 isWater）行为不变：照常受重力下落', () => {
    const land: VoxelWorld = { isSolid: (_x, y) => y < 10 };
    let m = spawnMob('cow', 0.5, 20, 0.5);
    const rng = makeRng(3);
    for (let i = 0; i < 3; i++) m = updateMob(m, land, rng).mob;
    expect(m.pos.y).toBeLessThan(20); // 没水 → 正常下落
  });
});
