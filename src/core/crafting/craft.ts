// 把字符串 id 的合成核心(recipes/match)桥接到游戏的数字 id 物品系统。
// 提供"按背包能做哪些配方 + 一键合成"的接口，供合成界面用。
import { BLOCKS } from '../blocks/registry';
import { ITEM_IDS, itemName, itemMaxStack } from '../items/items';
import { addItem, removeItems, countItem, type Inventory } from '../inventory/inventory';
import { RECIPES } from './recipes';
import type { Recipe } from './types';

// 名字 ↔ 数字 id：方块用 registry 名字，物品用 items 名字
const NAME_TO_ID = new Map<string, number>();
for (const b of BLOCKS) if (b.id !== 0) NAME_TO_ID.set(b.name, b.id);
for (const id of ITEM_IDS) {
  const n = itemName(id);
  if (n) NAME_TO_ID.set(n, id);
}
const nameToId = (name: string): number | null => NAME_TO_ID.get(name) ?? null;

// 配方需要的材料（名字→个数）
function ingredientNames(recipe: Recipe): Map<string, number> {
  const m = new Map<string, number>();
  const add = (n: string): void => void m.set(n, (m.get(n) ?? 0) + 1);
  if (recipe.type === 'shapeless') {
    for (const ing of recipe.ingredients) add(ing);
  } else {
    for (const row of recipe.pattern) {
      for (const ch of row) {
        if (ch === ' ') continue;
        const ing = recipe.key[ch];
        if (ing) add(ing);
      }
    }
  }
  return m;
}

// 配方是否能放进 g×g 的合成格（个人 2×2 / 工作台 3×3）
function fitsGrid(recipe: Recipe, g: number): boolean {
  if (recipe.type === 'shapeless') return recipe.ingredients.length <= g * g;
  const rows = recipe.pattern.length;
  const cols = recipe.pattern.reduce((m, r) => Math.max(m, r.length), 0);
  return rows <= g && cols <= g;
}

export interface CraftOption {
  recipe: Recipe;
  ingredients: { id: number; count: number }[];
  result: { id: number; count: number };
  craftable: boolean; // 背包是否够材料
}

function numericIngredients(recipe: Recipe): { id: number; count: number }[] | null {
  const out: { id: number; count: number }[] = [];
  for (const [name, n] of ingredientNames(recipe)) {
    const id = nameToId(name);
    if (id === null) return null; // 材料是游戏里还没有的物品 → 配方暂不可用
    out.push({ id, count: n });
  }
  return out;
}
function numericResult(recipe: Recipe): { id: number; count: number } | null {
  const id = nameToId(recipe.result.item);
  return id === null ? null : { id, count: recipe.result.count };
}

// 当前背包 + 合成格大小下"可见"的配方（含够不够材料的标记）。
export function availableRecipes(inv: Inventory, gridSize: number): CraftOption[] {
  const out: CraftOption[] = [];
  for (const recipe of RECIPES) {
    if (!fitsGrid(recipe, gridSize)) continue;
    const ingredients = numericIngredients(recipe);
    const result = numericResult(recipe);
    if (!ingredients || !result) continue; // 引用了游戏里还没有的物品/方块
    const craftable = ingredients.every((g) => countItem(inv, g.id) >= g.count);
    out.push({ recipe, ingredients, result, craftable });
  }
  return out;
}

// 执行一次合成：扣材料、加成品。返回是否成功（材料不足/背包满则失败）。
export function craftRecipe(inv: Inventory, recipe: Recipe): boolean {
  const ingredients = numericIngredients(recipe);
  const result = numericResult(recipe);
  if (!ingredients || !result) return false;
  if (!ingredients.every((g) => countItem(inv, g.id) >= g.count)) return false;
  for (const g of ingredients) removeItems(inv, g.id, g.count);
  addItem(inv, result.id, result.count, itemMaxStack(result.id));
  return true;
}
