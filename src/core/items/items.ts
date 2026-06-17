// 非方块"物品"注册表（区别于 blocks/registry 里的可放置方块）。
// 物品 id 从 256 起，与方块 id（0..255 段）不冲突；不会进世界、只在物品栏/掉落里。
import type { FoodValue } from '../survival/survival';

export const APPLE = 256;

interface ItemDef {
  name: string; // 用于图标/掉落渲染查找
  food: FoodValue | null; // null = 不可吃
}

const ITEMS: Record<number, ItemDef> = {
  [APPLE]: { name: 'apple', food: { nutrition: 4, saturationModifier: 0.3 } }, // MC 苹果
};

export function isItem(id: number): boolean {
  return id in ITEMS;
}

export function isFood(id: number): boolean {
  return ITEMS[id]?.food != null;
}

export function foodValue(id: number): FoodValue | null {
  return ITEMS[id]?.food ?? null;
}

export function itemName(id: number): string | null {
  return ITEMS[id]?.name ?? null;
}
