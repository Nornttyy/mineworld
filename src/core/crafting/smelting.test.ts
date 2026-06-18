import { describe, it, expect } from 'vitest';
import {
  newFurnace,
  tickFurnace,
  isFuel,
  isSmeltable,
  smeltResult,
  fuelTicks,
  furnaceActive,
  COOK_TICKS,
} from './smelting';
import { COAL, IRON_INGOT } from '../items/items';
import { IRON_ORE } from '../blocks/registry';

describe('smelting', () => {
  it('铁矿可冶炼成铁锭', () => {
    expect(isSmeltable(IRON_ORE)).toBe(true);
    expect(smeltResult(IRON_ORE)).toBe(IRON_INGOT);
  });

  it('煤是燃料、烧 1600 刻', () => {
    expect(isFuel(COAL)).toBe(true);
    expect(fuelTicks(COAL)).toBe(1600);
  });

  it('铁矿+煤 → 炼出铁锭，消耗 1 原料 + 1 煤', () => {
    const s = newFurnace();
    s.input = IRON_ORE;
    s.inputN = 1;
    s.fuel = COAL;
    s.fuelN = 1;
    for (let i = 0; i < COOK_TICKS + 1; i++) tickFurnace(s);
    expect(s.output).toBe(IRON_INGOT);
    expect(s.outputN).toBe(1);
    expect(s.inputN).toBe(0); // 原料用完
    expect(s.fuelN).toBe(0); // 烧掉 1 个煤
    expect(s.burn).toBeGreaterThan(0); // 煤 1600 刻，炼 200 后还剩很多
  });

  it('没燃料则不冶炼、进度为 0', () => {
    const s = newFurnace();
    s.input = IRON_ORE;
    s.inputN = 1;
    for (let i = 0; i < COOK_TICKS + 10; i++) tickFurnace(s);
    expect(s.outputN).toBe(0);
    expect(s.cook).toBe(0);
    expect(furnaceActive(s)).toBe(false);
  });

  it('1 个煤能炼 8 个(1600/200)', () => {
    const s = newFurnace();
    s.input = IRON_ORE;
    s.inputN = 10;
    s.fuel = COAL;
    s.fuelN = 1;
    for (let i = 0; i < COOK_TICKS * 9; i++) tickFurnace(s);
    expect(s.outputN).toBe(8);
    expect(s.inputN).toBe(2); // 炼了 8 个、还剩 2 个原料没燃料
  });
});
