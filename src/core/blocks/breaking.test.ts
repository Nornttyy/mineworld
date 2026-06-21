import { describe, it, expect } from 'vitest';
import { breakTimeMs, handDrop } from './registry';

// 方块 id
const STONE = 1;
const DIRT = 2;
const GRASS = 3;
const COBBLE = 4;
const SAND = 5;
const LOG = 6;
const PLANKS = 7;
const COAL_ORE = 8;
const WATER = 9;
const LEAVES = 10;

describe('破坏耗时（徒手，毫秒）', () => {
  it.each([
    [DIRT, 750], // 0.5 ×1.5
    [GRASS, 900], // 0.6 ×1.5
    [SAND, 750], // 0.5 ×1.5
    [LOG, 5000], // 3.33 ×1.5（木头能手采，按需求徒手 5s）
    [PLANKS, 3000], // 2.0 ×1.5
    [LEAVES, 300], // 0.2 ×1.5
    [STONE, 10000], // 2.0 ×5（需镐，按需求徒手 10s）
    [COBBLE, 10000], // 2.0 ×5
    [COAL_ORE, 15000], // 3.0 ×5
    [WATER, 0], // 不可破坏
  ])('id %i → %i ms', (id, ms) => {
    expect(breakTimeMs(id)).toBe(ms);
  });
});

describe('草丛/长草瞬破（任何手持都打得掉）', () => {
  const GRASS_PLANT = 16;
  const TALL_GRASS = 17;
  const sword = { kind: 'sword' as const, tier: 1, speed: 1.5 };
  it('空手瞬破', () => {
    expect(breakTimeMs(GRASS_PLANT)).toBe(0);
    expect(breakTimeMs(TALL_GRASS)).toBe(0);
  });
  it('握剑也瞬破（普通方块握剑挖不动，草是例外）', () => {
    expect(breakTimeMs(GRASS_PLANT, sword)).toBe(0);
    expect(breakTimeMs(STONE, sword)).toBe(Infinity); // 对照：剑挖不动石头
  });
});

describe('徒手掉落：需镐的方块不掉', () => {
  it('石/圆石/煤矿徒手挖不掉东西', () => {
    expect(handDrop(STONE)).toBeNull();
    expect(handDrop(COBBLE)).toBeNull();
    expect(handDrop(COAL_ORE)).toBeNull();
  });
  it('能手采的方块按掉落表', () => {
    expect(handDrop(DIRT)).toBe(DIRT);
    expect(handDrop(GRASS)).toBe(DIRT); // 草方块掉土
    expect(handDrop(LOG)).toBe(LOG);
    expect(handDrop(SAND)).toBe(SAND);
    expect(handDrop(LEAVES)).toBeNull(); // 树叶本就不掉
  });
});
