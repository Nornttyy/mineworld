import { describe, it, expect } from 'vitest';
import { RECIPES } from './recipes';
import { hasItem } from '../item/registry';

describe('recipe data', () => {
  it('contains all 30 recipes', () => {
    expect(RECIPES).toHaveLength(30);
  });

  it('储存方块：沙石/石英(2×2)、煤块/铁块(3×3) + 可逆拆解', () => {
    const shapedResult = (item: string): number | undefined =>
      RECIPES.find((r) => r.type === 'shaped' && r.result.item === item)?.result.count;
    expect(shapedResult('sandstone')).toBe(1); // 4 沙 → 1 沙石
    expect(shapedResult('quartz_block')).toBe(1); // 4 石英 → 1 石英块
    expect(shapedResult('coal_block')).toBe(1); // 9 煤 → 1 煤块
    expect(shapedResult('iron_block')).toBe(1); // 9 铁锭 → 1 铁块
    // 可逆：块 → 9 原料（shapeless）
    const unpack = (block: string): number | undefined =>
      RECIPES.find((r) => r.type === 'shapeless' && r.ingredients.length === 1 && r.ingredients[0] === block)
        ?.result.count;
    expect(unpack('coal_block')).toBe(9);
    expect(unpack('iron_block')).toBe(9);
  });

  it('打火石 = 燧石 + 铁锭（shapeless）', () => {
    const fs = RECIPES.find((r) => r.type === 'shapeless' && r.result.item === 'flint_and_steel');
    expect(fs).toBeTruthy();
    expect(fs && fs.type === 'shapeless' && [...fs.ingredients].sort()).toEqual(['flint', 'iron_ingot']);
  });

  it('every referenced item id exists in the registry', () => {
    for (const r of RECIPES) {
      expect(hasItem(r.result.item)).toBe(true);
      if (r.type === 'shapeless') {
        for (const id of r.ingredients) expect(hasItem(id)).toBe(true);
      } else {
        for (const id of Object.values(r.key)) expect(hasItem(id)).toBe(true);
      }
    }
  });

  it('produces 4 planks from one log (shapeless)', () => {
    const planks = RECIPES.find((r) => r.type === 'shapeless' && r.result.item === 'oak_planks');
    expect(planks?.result.count).toBe(4);
  });
});
