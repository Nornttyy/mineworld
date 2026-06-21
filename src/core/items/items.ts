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
export const IRON_PICKAXE = 269;
export const IRON_AXE = 270;
export const IRON_SHOVEL = 271;
export const IRON_SWORD = 272;
export const IRON_HOE = 273;
export const IRON_INGOT = 274;
// 生物掉落 + 熟食（id 续 275+）
export const RAW_PORKCHOP = 275;
export const COOKED_PORKCHOP = 276;
export const RAW_BEEF = 277;
export const COOKED_BEEF = 278; // 牛排
export const RAW_MUTTON = 279;
export const COOKED_MUTTON = 280;
export const RAW_CHICKEN = 281;
export const COOKED_CHICKEN = 282;
export const LEATHER = 283;
export const WOOL = 284;
export const FEATHER = 285;
export const EGG = 286;
export const ROTTEN_FLESH = 287; // 僵尸掉落，可吃(MC 有饥饿debuff，这里先只给营养)
export const BONE = 288; // 骷髅掉落
export const FLINT = 289; // 挖砂砾小概率掉；合成箭
export const STRING = 290; // 骷髅掉（无蜘蛛，用骷髅替代来源）；合成弓
export const ARROW = 291; // 燧石+羽毛+木棍 合成；弓射出；落地可捡
export const BOW = 292; // 3 线+3 棍 合成；蓄力射箭（在 Game 里特判，不是挖掘工具）
export const GUNPOWDER = 293; // 苦力怕掉落（0-2）

export type ToolKind = 'pickaxe' | 'axe' | 'shovel' | 'sword' | 'hoe';
export interface ToolDef {
  kind: ToolKind;
  tier: number; // 1=木 2=石（采集门槛：needsTool 方块需对应 kind 的工具，tier 影响掉落上限/后续）
  speed: number; // 挖掘速度倍率（对口方块）
  maxDurability: number; // 最大耐久（用尽即损坏）。1:1 MC：木=59，石=131。
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
  const maxDurability = tier === 1 ? 59 : tier === 2 ? 131 : 250; // 木59/石131/铁250（同 MC）
  return { name, maxStack: 1, food: null, tool: { kind, tier, speed, maxDurability } };
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
  [IRON_PICKAXE]: toolDef('iron_pickaxe', 'pickaxe', 3, 6),
  [IRON_AXE]: toolDef('iron_axe', 'axe', 3, 6),
  [IRON_SHOVEL]: toolDef('iron_shovel', 'shovel', 3, 6),
  [IRON_SWORD]: toolDef('iron_sword', 'sword', 3, 6),
  [IRON_HOE]: toolDef('iron_hoe', 'hoe', 3, 6),
  [IRON_INGOT]: { name: 'iron_ingot', maxStack: 64, food: null, tool: null },
  // 生物掉落 + 熟食（食物值 1:1 MC）
  [RAW_PORKCHOP]: { name: 'raw_porkchop', maxStack: 64, food: { nutrition: 3, saturationModifier: 0.3 }, tool: null },
  [COOKED_PORKCHOP]: { name: 'cooked_porkchop', maxStack: 64, food: { nutrition: 8, saturationModifier: 0.8 }, tool: null },
  [RAW_BEEF]: { name: 'raw_beef', maxStack: 64, food: { nutrition: 3, saturationModifier: 0.3 }, tool: null },
  [COOKED_BEEF]: { name: 'cooked_beef', maxStack: 64, food: { nutrition: 8, saturationModifier: 0.8 }, tool: null },
  [RAW_MUTTON]: { name: 'raw_mutton', maxStack: 64, food: { nutrition: 2, saturationModifier: 0.3 }, tool: null },
  [COOKED_MUTTON]: { name: 'cooked_mutton', maxStack: 64, food: { nutrition: 6, saturationModifier: 0.8 }, tool: null },
  [RAW_CHICKEN]: { name: 'raw_chicken', maxStack: 64, food: { nutrition: 2, saturationModifier: 0.3 }, tool: null },
  [COOKED_CHICKEN]: { name: 'cooked_chicken', maxStack: 64, food: { nutrition: 6, saturationModifier: 0.6 }, tool: null },
  [LEATHER]: { name: 'leather', maxStack: 64, food: null, tool: null },
  [WOOL]: { name: 'wool', maxStack: 64, food: null, tool: null },
  [FEATHER]: { name: 'feather', maxStack: 64, food: null, tool: null },
  [EGG]: { name: 'egg', maxStack: 16, food: null, tool: null },
  [ROTTEN_FLESH]: { name: 'rotten_flesh', maxStack: 64, food: { nutrition: 4, saturationModifier: 0.1 }, tool: null },
  [BONE]: { name: 'bone', maxStack: 64, food: null, tool: null },
  [FLINT]: { name: 'flint', maxStack: 64, food: null, tool: null },
  [STRING]: { name: 'string', maxStack: 64, food: null, tool: null },
  [ARROW]: { name: 'arrow', maxStack: 64, food: null, tool: null },
  [BOW]: { name: 'bow', maxStack: 1, food: null, tool: null }, // 武器，但非挖掘 ToolDef
  [GUNPOWDER]: { name: 'gunpowder', maxStack: 64, food: null, tool: null }, // 苦力怕掉落
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
