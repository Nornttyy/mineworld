import type { ItemId, ItemStack } from '../item/types';

export type CraftGrid = (ItemStack | null)[][];

export interface RecipeResult {
  item: ItemId;
  count: number;
}

export interface ShapedRecipe {
  type: 'shaped';
  pattern: string[]; // 紧凑图案（已去全空边行/列），每字符一格，' ' = 空
  key: Record<string, ItemId>;
  result: RecipeResult;
}

export interface ShapelessRecipe {
  type: 'shapeless';
  ingredients: ItemId[];
  result: RecipeResult;
}

export type Recipe = ShapedRecipe | ShapelessRecipe;
