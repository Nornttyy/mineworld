import type { ItemDef, ItemId } from './types';

function def(id: ItemId, name: string, maxStack = 64): ItemDef {
  return { id, name, maxStack };
}

const DEFS: ItemDef[] = [
  def('oak_log', 'Oak Log'),
  def('oak_planks', 'Oak Planks'),
  def('cobblestone', 'Cobblestone'),
  def('crafting_table', 'Crafting Table'),
  def('chest', 'Chest'),
  def('furnace', 'Furnace'),
  def('torch', 'Torch'),
  def('stick', 'Stick'),
  def('coal', 'Coal'),
  def('feather', 'Feather'),
  def('raw_chicken', 'Raw Chicken'),
  def('cooked_chicken', 'Cooked Chicken'),
  def('egg', 'Egg', 16),
  def('wooden_pickaxe', 'Wooden Pickaxe', 1),
  def('wooden_axe', 'Wooden Axe', 1),
  def('wooden_shovel', 'Wooden Shovel', 1),
  def('wooden_sword', 'Wooden Sword', 1),
  def('wooden_hoe', 'Wooden Hoe', 1),
  def('stone_pickaxe', 'Stone Pickaxe', 1),
  def('stone_axe', 'Stone Axe', 1),
  def('stone_shovel', 'Stone Shovel', 1),
  def('stone_sword', 'Stone Sword', 1),
  def('stone_hoe', 'Stone Hoe', 1),
  def('iron_ore', 'Iron Ore'),
  def('iron_ingot', 'Iron Ingot'),
  def('iron_pickaxe', 'Iron Pickaxe', 1),
  def('iron_axe', 'Iron Axe', 1),
  def('iron_shovel', 'Iron Shovel', 1),
  def('iron_sword', 'Iron Sword', 1),
  def('iron_hoe', 'Iron Hoe', 1),
  def('flint', 'Flint'),
  def('flint_and_steel', 'Flint and Steel', 1),
  def('nether_quartz', 'Nether Quartz'),
  def('string', 'String'),
  def('arrow', 'Arrow'),
  def('bow', 'Bow', 1),
];

export const ITEMS: ReadonlyMap<ItemId, ItemDef> = new Map(DEFS.map((d) => [d.id, d]));

export function getItem(id: ItemId): ItemDef {
  const d = ITEMS.get(id);
  if (!d) throw new Error(`Unknown item: ${id}`);
  return d;
}

export function maxStack(id: ItemId): number {
  return getItem(id).maxStack;
}

export function hasItem(id: ItemId): boolean {
  return ITEMS.has(id);
}
