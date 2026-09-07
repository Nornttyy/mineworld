import type { Inventory, ItemStack } from './inventory';
import { ITEM_IDS, itemMaxStack } from '../items/items';

export type CreativeCategory = 'building' | 'decoration' | 'tools' | 'food' | 'materials';

export interface CreativeCategoryDef {
  id: CreativeCategory;
  label: string;
  items: readonly number[];
}

/**
 * 当前游戏真正支持的创造物品目录。水、岩浆和传送门暂时没有桶/门方块物品，
 * 因此不直接暴露，避免产生无法按原版方式使用的内部方块。
 */
export const CREATIVE_CATEGORIES: readonly CreativeCategoryDef[] = [
  {
    id: 'building',
    label: '建筑方块',
    items: [
      1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 18, 19, 20, 21, 22, 24, 26, 27, 28, 30, 31, 32,
      33, 34, 35, 36,
    ],
  },
  { id: 'decoration', label: '装饰方块', items: [14, 16, 17, 29] },
  {
    id: 'tools',
    label: '工具武器',
    items: [
      259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 292, 294, 297, 298,
      299, 300, 301,
    ],
  },
  {
    id: 'food',
    label: '食物',
    items: [256, 275, 276, 277, 278, 279, 280, 281, 282, 287],
  },
  {
    id: 'materials',
    label: '材料杂项',
    items: [257, 258, 274, 283, 284, 285, 286, 288, 289, 290, 291, 293, 295, 296],
  },
] as const;

export const CREATIVE_ITEM_IDS: readonly number[] = CREATIVE_CATEGORIES.flatMap(
  (category) => category.items,
);

const CREATIVE_ITEM_SET = new Set(CREATIVE_ITEM_IDS);

export function creativeItemsIn(category: CreativeCategory): readonly number[] {
  return CREATIVE_CATEGORIES.find((entry) => entry.id === category)?.items ?? [];
}

export function isCreativeItem(id: number): boolean {
  return CREATIVE_ITEM_SET.has(id);
}

export function creativeStack(id: number, single = false): ItemStack | null {
  if (!isCreativeItem(id)) return null;
  return { id, count: single ? 1 : itemMaxStack(id) };
}

/** 原版创造中键：快捷栏已有该方块就选中，否则把满组复制到当前格。 */
export function pickCreativeItem(inv: Inventory, selected: number, id: number): number {
  if (!isCreativeItem(id)) return selected;
  const existing = inv.slice(0, 9).findIndex((stack) => stack?.id === id);
  if (existing >= 0) return existing;
  inv[selected] = creativeStack(id);
  return selected;
}

/** 回归保护：创造目录必须覆盖每一种已注册的普通物品。 */
export function missingCreativeItems(): number[] {
  return ITEM_IDS.filter((id) => !CREATIVE_ITEM_SET.has(id));
}
