import { describe, it, expect } from 'vitest';
import { APPLE, isFood, foodValue, itemName, isItem, ITEMS, FLINT_AND_STEEL, NETHER_QUARTZ } from './items';

describe('items: apple food', () => {
  it('apple is food with MC values', () => {
    expect(isFood(APPLE)).toBe(true);
    expect(foodValue(APPLE)).toEqual({ nutrition: 4, saturationModifier: 0.3 });
    expect(itemName(APPLE)).toBe('apple');
    expect(isItem(APPLE)).toBe(true);
  });
  it('下界物品：打火石(不堆叠) + 石英', () => {
    expect(ITEMS[FLINT_AND_STEEL].name).toBe('flint_and_steel');
    expect(ITEMS[FLINT_AND_STEEL].maxStack).toBe(1); // 工具类不堆叠
    expect(ITEMS[NETHER_QUARTZ].name).toBe('nether_quartz');
    expect(ITEMS[NETHER_QUARTZ].maxStack).toBe(64);
  });
  it('block ids are not items/food', () => {
    expect(isFood(1)).toBe(false); // stone
    expect(foodValue(1)).toBeNull();
    expect(isItem(1)).toBe(false);
    expect(itemName(1)).toBeNull();
  });
});
