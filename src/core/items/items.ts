// 非方块"物品"注册表（区别于 blocks/registry 里的可放置方块）。
// 物品 id 从 256 起，与方块 id（0..255 段）不冲突；不会进世界、只在物品栏/掉落里。
import type { FoodValue } from '../survival/survival';

export const APPLE = 256;
export const STICK = 257;
export const COAL = 258;
export const WOODEN_PICKAXE = 259;
export const WOODEN_AXE = 260;
export const WOODEN_SHOVEL = 261;
export const WOODEN_SWORD = 262;
export const WOODEN_HOE = 263;
export const STONE_PICKAXE = 264;
export const STONE_AXE = 265;
export const STONE_SHOVEL = 266;
export const STONE_SWORD = 267;
export const STONE_HOE = 268;

export type ToolKind = 'pickaxe' | 'axe' | 'shovel' | 'sword' | 'hoe';
export interface ToolDef {
  kind: ToolKind;
  tier: number; // 1=木 2=石（采集门槛：needsTool 方块需对应 kind 的工具，tier 影响掉落上限/后续）
  speed: number; // 挖掘速度倍率（对口方块）
}

interface ItemDef {
  name: string; // 与 crafting 配方的字符串 id 对应，也用于图标/掉落渲染
  maxStack: number;
  food: FoodValue | null; // null = 不可吃
  tool: ToolDef | null;
}

// 工具：剑/锄不是挖矿工具，速度压低
function toolDef(name: string, kind: ToolKind, tier: number, baseSpeed: number): ItemDef {
  const speed = kind === 'sword' ? 1.5 : kind === 'hoe' ? 1 : baseSpeed;
  return { name, maxStack: 1, food: null, tool: { kind, tier, speed } };
}

const ITEMS: Record<number, ItemDef> = {
  [APPLE]: { name: 'apple', maxStack: 64, food: { nutrition: 4, saturationModifier: 0.3 }, tool: null },
  [STICK]: { name: 'stick', maxStack: 64, food: null, tool: null },
  [COAL]: { name: 'coal', maxStack: 64, food: null, tool: null },
  [WOODEN_PICKAXE]: toolDef('wooden_pickaxe', 'pickaxe', 1, 2),
  [WOODEN_AXE]: toolDef('wooden_axe', 'axe', 1, 2),
  [WOODEN_SHOVEL]: toolDef('wooden_shovel', 'shovel', 1, 2),
  [WOODEN_SWORD]: toolDef('wooden_sword', 'sword', 1, 2),
  [WOODEN_HOE]: toolDef('wooden_hoe', 'hoe', 1, 2),
  [STONE_PICKAXE]: toolDef('stone_pickaxe', 'pickaxe', 2, 4),
  [STONE_AXE]: toolDef('stone_axe', 'axe', 2, 4),
  [STONE_SHOVEL]: toolDef('stone_shovel', 'shovel', 2, 4),
  [STONE_SWORD]: toolDef('stone_sword', 'sword', 2, 4),
  [STONE_HOE]: toolDef('stone_hoe', 'hoe', 2, 4),
};

export const ITEM_IDS: number[] = Object.keys(ITEMS).map(Number);

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

export function itemMaxStack(id: number): number {
  return ITEMS[id]?.maxStack ?? 64;
}

// 物品(非方块)的工具属性；非工具/方块返回 null
export function toolOf(id: number): ToolDef | null {
  return ITEMS[id]?.tool ?? null;
}
