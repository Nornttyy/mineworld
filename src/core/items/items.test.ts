import { describe, it, expect } from 'vitest';
import {
  APPLE,
  DIAMOND,
  DIAMOND_AXE,
  DIAMOND_HOE,
  DIAMOND_PICKAXE,
  DIAMOND_SHOVEL,
  DIAMOND_SWORD,
  FLINT_AND_STEEL,
  ITEMS,
  NETHER_QUARTZ,
  foodValue,
  isFood,
  isItem,
  itemName,
  toolOf,
} from './items';

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
  it('钻石与五种钻石工具遵循 1.12 数值', () => {
    expect(itemName(DIAMOND)).toBe('diamond');
    expect(ITEMS[DIAMOND].maxStack).toBe(64);
    for (const id of [DIAMOND_PICKAXE, DIAMOND_AXE, DIAMOND_SHOVEL, DIAMOND_SWORD, DIAMOND_HOE]) {
      const tool = toolOf(id);
      expect(tool?.tier).toBe(4);
      expect(tool?.maxDurability).toBe(1561);
      expect(ITEMS[id].maxStack).toBe(1);
    }
    expect(toolOf(DIAMOND_PICKAXE)?.speed).toBe(8);
    expect(toolOf(DIAMOND_AXE)?.speed).toBe(8);
    expect(toolOf(DIAMOND_SHOVEL)?.speed).toBe(8);
    expect(toolOf(DIAMOND_SWORD)?.speed).toBe(1.5);
    expect(toolOf(DIAMOND_HOE)?.speed).toBe(1);
  });
});
