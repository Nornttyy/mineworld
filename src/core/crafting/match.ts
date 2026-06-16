import type { ItemId, ItemStack } from '../item/types';
import type { CraftGrid, Recipe, ShapedRecipe, ShapelessRecipe } from './types';
import { RECIPES } from './recipes';

type Cell = ItemId | null;
type Matrix = Cell[][];

// 只有 count>=1 的格子才算"有物品"
function cellItem(stack: ItemStack | null): Cell {
  return stack && stack.count >= 1 ? stack.item : null;
}

function toMatrix(grid: CraftGrid): Matrix {
  return grid.map((row) => row.map(cellItem));
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

// 非空格的紧凑包围盒；全空返回 null。裁剪即实现"配方可放任意位置"
function trim(m: Matrix): Matrix | null {
  let minR = Infinity;
  let maxR = -1;
  let minC = Infinity;
  let maxC = -1;
  for (let r = 0; r < m.length; r++) {
    for (let c = 0; c < m[r].length; c++) {
      if (m[r][c] !== null) {
        if (r < minR) minR = r;
        if (r > maxR) maxR = r;
        if (c < minC) minC = c;
        if (c > maxC) maxC = c;
      }
    }
  }
  if (maxR === -1) return null;
  const out: Matrix = [];
  for (let r = minR; r <= maxR; r++) out.push(m[r].slice(minC, maxC + 1));
  return out;
}

function patternMatrix(recipe: ShapedRecipe): Matrix {
  return recipe.pattern.map((row) =>
    Array.from(row, (ch) => (ch === ' ' ? null : recipe.key[ch] ?? null)),
  );
}

function mirror(m: Matrix): Matrix {
  return m.map((row) => [...row].reverse());
}

function equals(a: Matrix, b: Matrix): boolean {
  if (a.length !== b.length) return false;
  for (let r = 0; r < a.length; r++) {
    if (a[r].length !== b[r].length) return false;
    for (let c = 0; c < a[r].length; c++) {
      if (a[r][c] !== b[r][c]) return false;
    }
  }
  return true;
}

function matchesShaped(recipe: ShapedRecipe, input: Matrix): boolean {
  const pattern = trim(patternMatrix(recipe));
  if (!pattern) return false;
  return equals(pattern, input) || equals(mirror(pattern), input);
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
  const input = trim(toMatrix(grid));
  for (const recipe of RECIPES) {
    if (recipe.type === 'shaped') {
      if (input && matchesShaped(recipe, input)) return recipe;
    } else if (matchesShapeless(recipe, ids)) {
      return recipe;
    }
  }
  return null;
}

export function getCraftingResult(grid: CraftGrid): ItemStack | null {
  const recipe = findRecipe(grid);
  return recipe ? { item: recipe.result.item, count: recipe.result.count } : null;
}
