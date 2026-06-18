import { describe, it, expect } from 'vitest';
import {
  RAW_PORKCHOP,
  COOKED_PORKCHOP,
  RAW_BEEF,
  COOKED_BEEF,
  RAW_MUTTON,
  COOKED_MUTTON,
  RAW_CHICKEN,
  COOKED_CHICKEN,
  LEATHER,
  WOOL,
  FEATHER,
  EGG,
  foodValue,
  isFood,
  itemName,
} from './items';
import { smeltResult, isSmeltable } from '../crafting/smelting';

describe('生物掉落物品 + 熟肉（1:1 MC）', () => {
  it('生肉/熟肉的食物值', () => {
    expect(foodValue(RAW_PORKCHOP)).toEqual({ nutrition: 3, saturationModifier: 0.3 });
    expect(foodValue(COOKED_PORKCHOP)).toEqual({ nutrition: 8, saturationModifier: 0.8 });
    expect(foodValue(RAW_BEEF)).toEqual({ nutrition: 3, saturationModifier: 0.3 });
    expect(foodValue(COOKED_BEEF)).toEqual({ nutrition: 8, saturationModifier: 0.8 });
    expect(foodValue(RAW_MUTTON)).toEqual({ nutrition: 2, saturationModifier: 0.3 });
    expect(foodValue(COOKED_MUTTON)).toEqual({ nutrition: 6, saturationModifier: 0.8 });
    expect(foodValue(RAW_CHICKEN)).toEqual({ nutrition: 2, saturationModifier: 0.3 });
    expect(foodValue(COOKED_CHICKEN)).toEqual({ nutrition: 6, saturationModifier: 0.6 });
  });

  it('皮革/羊毛/羽毛/蛋 不是食物', () => {
    for (const id of [LEATHER, WOOL, FEATHER, EGG]) expect(isFood(id)).toBe(false);
  });

  it('生肉冶炼成对应熟肉', () => {
    expect(smeltResult(RAW_PORKCHOP)).toBe(COOKED_PORKCHOP);
    expect(smeltResult(RAW_BEEF)).toBe(COOKED_BEEF);
    expect(smeltResult(RAW_MUTTON)).toBe(COOKED_MUTTON);
    expect(smeltResult(RAW_CHICKEN)).toBe(COOKED_CHICKEN);
    expect(isSmeltable(RAW_BEEF)).toBe(true);
  });

  it('每个新物品都有名字（图标/掉落渲染要用）', () => {
    const all = [
      RAW_PORKCHOP, COOKED_PORKCHOP, RAW_BEEF, COOKED_BEEF, RAW_MUTTON, COOKED_MUTTON,
      RAW_CHICKEN, COOKED_CHICKEN, LEATHER, WOOL, FEATHER, EGG,
    ];
    for (const id of all) expect(itemName(id)).toBeTruthy();
    expect(new Set(all).size).toBe(all.length); // id 不重复
  });
});
