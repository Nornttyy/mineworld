import { describe, it, expect } from 'vitest';
import { canSpawnAt, spawnGroup } from './mobSpawn';
import { makeRng } from '../math/rng';
import { GRASS } from '../blocks/registry';

// 平坦草地：cell y=9 是草(顶面=y=10)，y<9 石头(实心)，y>=10 空气。
const grassWorld = {
  getBlock: (_x: number, y: number, _z: number): number => (y === 9 ? GRASS : y < 9 ? 1 : 0),
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
