import { describe, it, expect } from 'vitest';
import { breakTimeMs, canHarvest, dropFor, type HeldTool } from './registry';
import { COAL } from '../items/items';

const STONE = 1;
const COBBLE = 4;
const DIRT = 2;
const COAL_ORE = 8;
const woodPick: HeldTool = { kind: 'pickaxe', tier: 1, speed: 2 };
const stonePick: HeldTool = { kind: 'pickaxe', tier: 2, speed: 4 };
const shovel: HeldTool = { kind: 'shovel', tier: 1, speed: 2 };

describe('工具采集 1:1 MC', () => {
  it('石头：徒手挖不掉且慢；木镐能挖、更快', () => {
    expect(canHarvest(STONE, null)).toBe(false);
    expect(dropFor(STONE, null)).toBeNull();
    expect(breakTimeMs(STONE, null)).toBe(10000);
    expect(canHarvest(STONE, woodPick)).toBe(true);
    expect(dropFor(STONE, woodPick)).toBe(COBBLE);
    expect(breakTimeMs(STONE, woodPick)).toBe(Math.ceil((30 * 2.0) / 2) * 50); // 1500ms
  });

  it('石镐比木镐更快', () => {
    expect(breakTimeMs(STONE, stonePick)).toBeLessThan(breakTimeMs(STONE, woodPick));
  });

  it('煤矿用镐掉煤(物品)，徒手不掉', () => {
    expect(dropFor(COAL_ORE, woodPick)).toBe(COAL);
    expect(dropFor(COAL_ORE, null)).toBeNull();
  });

  it('锹挖土更快，掉落不受影响', () => {
    expect(breakTimeMs(DIRT, shovel)).toBeLessThan(breakTimeMs(DIRT, null));
    expect(dropFor(DIRT, shovel)).toBe(DIRT);
    expect(dropFor(DIRT, null)).toBe(DIRT);
  });

  it('用错工具不加速（镐挖土 = 徒手）', () => {
    expect(breakTimeMs(DIRT, woodPick)).toBe(breakTimeMs(DIRT, null));
  });

  it('铁矿：木镐挖不出(慢且不掉)，石镐才能采', () => {
    const IRON = 12;
    expect(canHarvest(IRON, woodPick)).toBe(false); // 木镐 tier1 < 铁矿要求 2
    expect(dropFor(IRON, woodPick)).toBeNull();
    expect(canHarvest(IRON, stonePick)).toBe(true); // 石镐 tier2 ✓
    expect(dropFor(IRON, stonePick)).toBe(IRON);
    expect(breakTimeMs(IRON, stonePick)).toBeLessThan(breakTimeMs(IRON, woodPick)); // 石镐更快
  });

  it('剑能挖方块（慢挖、不享工具加成；之前错误地完全挖不动=Infinity，已按 MC 修正）', () => {
    const sword: HeldTool = { kind: 'sword', tier: 1, speed: 1.5 };
    // MC：剑能挖所有方块(慢)，对石/矿不掉落但仍可破坏。不再是 Infinity。
    expect(breakTimeMs(STONE, sword)).toBeGreaterThan(0);
    expect(breakTimeMs(STONE, sword)).toBeLessThan(Infinity);
    expect(breakTimeMs(DIRT, sword)).toBeLessThan(Infinity);
    expect(breakTimeMs(8 /* coal_ore */, sword)).toBeLessThan(Infinity);
  });
});
