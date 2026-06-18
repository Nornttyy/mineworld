import { describe, it, expect } from 'vitest';
import { canSpawnAt, spawnGroup, spawnRingGroup } from './mobSpawn';
import { makeRng } from '../math/rng';
import { GRASS } from '../blocks/registry';

// 平坦草地：cell y=9 是草(顶面=y=10)，y<9 石头(实心)，y>=10 空气。
const grassWorld = {
  getBlock: (_x: number, y: number): number => (y === 9 ? GRASS : y < 9 ? 1 : 0),
};

describe('canSpawnAt', () => {
  it('脚下草、身体两格空 → 可生成', () => {
    expect(canSpawnAt(grassWorld, 5, 10, 5)).toBe(true);
  });
  it('脚下不是草 → 不可', () => {
    expect(canSpawnAt(grassWorld, 5, 11, 5)).toBe(false);
  });
  it('身体被方块堵住 → 不可', () => {
    const blocked = { getBlock: (_x: number, y: number): number => (y === 9 ? GRASS : y === 10 ? 1 : 0) };
    expect(canSpawnAt(blocked, 5, 10, 5)).toBe(false);
  });
});

describe('spawnGroup', () => {
  it('草地上成群生成（1–4 只），每只都落在合法草地格', () => {
    const mobs = spawnGroup('cow', 0, 10, 0, makeRng(1), grassWorld);
    expect(mobs.length).toBeGreaterThan(0);
    expect(mobs.length).toBeLessThanOrEqual(4);
    for (const m of mobs) {
      expect(m.kind).toBe('cow');
      expect(canSpawnAt(grassWorld, Math.floor(m.pos.x), Math.round(m.pos.y), Math.floor(m.pos.z))).toBe(true);
    }
  });
});

describe('spawnRingGroup（玩家周围环带刷群，供"边走边补充"）', () => {
  // 任意列地表草在 y=9（顶面=10）
  const allGrass = { getBlock: (_x: number, y: number): number => (y === 9 ? GRASS : y < 9 ? 1 : 0) };
  const surfaceY = (): number => 9;

  it('草地世界：在环带(≈28–48格)内刷出一群', () => {
    const mobs = spawnRingGroup('pig', 0, 0, makeRng(7), allGrass, surfaceY);
    expect(mobs.length).toBeGreaterThan(0);
    for (const m of mobs) {
      const d = Math.hypot(m.pos.x, m.pos.z);
      expect(d).toBeGreaterThan(20); // 不会贴脸刷
      expect(d).toBeLessThan(58); // 也不会太远
    }
  });

  it('找不到草地：返回空（不硬刷到非草地）', () => {
    const noGrass = { getBlock: (): number => 1 }; // 全石头
    expect(spawnRingGroup('cow', 0, 0, makeRng(7), noGrass, () => 9)).toHaveLength(0);
  });
});
