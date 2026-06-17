import { describe, it, expect } from 'vitest';
import { emptyInventory, addItem, countItem } from '../inventory/inventory';
import { availableRecipes, craftRecipe } from './craft';
import { OAK_LOG, OAK_PLANKS, CRAFTING_TABLE } from '../blocks/registry';
import { STICK, WOODEN_PICKAXE } from '../items/items';

describe('合成桥接（数字 id）', () => {
  it('2×2：原木 → 4 木板', () => {
    const inv = emptyInventory();
    addItem(inv, OAK_LOG, 1);
    const planks = availableRecipes(inv, 2).find((o) => o.result.id === OAK_PLANKS);
    expect(planks?.craftable).toBe(true);
    expect(craftRecipe(inv, planks!.recipe)).toBe(true);
    expect(countItem(inv, OAK_LOG)).toBe(0);
    expect(countItem(inv, OAK_PLANKS)).toBe(4);
  });

  it('2×2：木板 → 棍子 / 工作台', () => {
    const inv = emptyInventory();
    addItem(inv, OAK_PLANKS, 6);
    const opts = availableRecipes(inv, 2);
    expect(opts.find((o) => o.result.id === STICK)?.craftable).toBe(true);
    const table = opts.find((o) => o.result.id === CRAFTING_TABLE);
    expect(table?.craftable).toBe(true);
    craftRecipe(inv, table!.recipe); // 4 板 → 1 工作台
    expect(countItem(inv, CRAFTING_TABLE)).toBe(1);
    expect(countItem(inv, OAK_PLANKS)).toBe(2);
  });

  it('木镐需要工作台(3×3)，2×2 里没有', () => {
    const inv = emptyInventory();
    addItem(inv, OAK_PLANKS, 3);
    addItem(inv, STICK, 2);
    expect(availableRecipes(inv, 2).some((o) => o.result.id === WOODEN_PICKAXE)).toBe(false);
    const pick = availableRecipes(inv, 3).find((o) => o.result.id === WOODEN_PICKAXE);
    expect(pick?.craftable).toBe(true);
    expect(craftRecipe(inv, pick!.recipe)).toBe(true);
    expect(countItem(inv, WOODEN_PICKAXE)).toBe(1);
    expect(countItem(inv, OAK_PLANKS)).toBe(0);
    expect(countItem(inv, STICK)).toBe(0);
  });

  it('材料不够时不可合成', () => {
    const inv = emptyInventory();
    addItem(inv, OAK_PLANKS, 1); // 不够做工作台(要4)
    const table = availableRecipes(inv, 2).find((o) => o.result.id === CRAFTING_TABLE);
    expect(table?.craftable).toBe(false);
    expect(craftRecipe(inv, table!.recipe)).toBe(false);
  });
});
