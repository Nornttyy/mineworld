import type { ItemId, ItemStack } from '../item/types';
import type { CraftGrid, Recipe, ShapelessRecipe } from './types';
import { RECIPES } from './recipes';

// 只有 count>=1 的格子才算"有物品"
function cellItem(stack: ItemStack | null): ItemId | null {
  return stack && stack.count >= 1 ? stack.item : null;
}

function collectItems(grid: CraftGrid): ItemId[] {
  const ids: ItemId[] = [];
  for (const row of grid) {
    for (const stack of row) {
      const item = cellItem(stack);
      if (item) ids.push(item);
    }
  }
  return ids;
}

function multiset(ids: ItemId[]): Map<ItemId, number> {
  const m = new Map<ItemId, number>();
  for (const id of ids) m.set(id, (m.get(id) ?? 0) + 1);
  return m;
}

function matchesShapeless(recipe: ShapelessRecipe, ids: ItemId[]): boolean {
  if (recipe.ingredients.length !== ids.length) return false;
  const a = multiset(recipe.ingredients);
  const b = multiset(ids);
  if (a.size !== b.size) return false;
  for (const [k, v] of a) if (b.get(k) !== v) return false;
  return true;
}

export function findRecipe(grid: CraftGrid): Recipe | null {
  const ids = collectItems(grid);
  if (ids.length === 0) return null;
  for (const recipe of RECIPES) {
    if (recipe.type === 'shapeless' && matchesShapeless(recipe, ids)) return recipe;
  }
  return null;
}

export function getCraftingResult(grid: CraftGrid): ItemStack | null {
  const recipe = findRecipe(grid);
  return recipe ? { item: recipe.result.item, count: recipe.result.count } : null;
}
