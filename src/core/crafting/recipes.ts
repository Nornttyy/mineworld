import type { ItemId } from '../item/types';
import type { Recipe, ShapedRecipe } from './types';

// MC 工具图案（P=主材料，S=木棍，' '=空）；存为紧凑形式
const PICKAXE = ['PPP', ' S ', ' S '];
const AXE = ['PP', 'PS', ' S'];
const SHOVEL = ['P', 'S', 'S'];
const SWORD = ['P', 'P', 'S'];
const HOE = ['PP', ' S', ' S'];

function toolRecipe(pattern: string[], material: ItemId, result: ItemId): ShapedRecipe {
  return {
    type: 'shaped',
    pattern,
    key: { P: material, S: 'stick' },
    result: { item: result, count: 1 },
  };
}

export const RECIPES: Recipe[] = [
  { type: 'shapeless', ingredients: ['oak_log'], result: { item: 'oak_planks', count: 4 } },
  // 打火石：燧石 + 铁锭（点燃下界传送门）
  { type: 'shapeless', ingredients: ['flint', 'iron_ingot'], result: { item: 'flint_and_steel', count: 1 } },
  {
    type: 'shaped',
    pattern: ['#', '#'],
    key: { '#': 'oak_planks' },
    result: { item: 'stick', count: 4 },
  },
  {
    type: 'shaped',
    pattern: ['##', '##'],
    key: { '#': 'oak_planks' },
    result: { item: 'crafting_table', count: 1 },
  },
  {
    type: 'shaped',
    pattern: ['###', '# #', '###'],
    key: { '#': 'oak_planks' },
    result: { item: 'chest', count: 1 },
  },
  {
    type: 'shaped',
    pattern: ['###', '# #', '###'],
    key: { '#': 'cobblestone' },
    result: { item: 'furnace', count: 1 },
  },
  {
    type: 'shaped',
    pattern: ['C', 'S'],
    key: { C: 'coal', S: 'stick' },
    result: { item: 'torch', count: 4 },
  },
  // 箭：燧石(上) + 木棍(中) + 羽毛(下) 竖排 → 4 支（MC）
  {
    type: 'shaped',
    pattern: ['F', 'S', 'E'],
    key: { F: 'flint', S: 'stick', E: 'feather' },
    result: { item: 'arrow', count: 4 },
  },
  // 弓：3 线 + 3 木棍（MC 弓形：木棍成弧、线在一侧）→ 1 把
  {
    type: 'shaped',
    pattern: [' TS', 'T S', ' TS'],
    key: { T: 'stick', S: 'string' },
    result: { item: 'bow', count: 1 },
  },
  toolRecipe(PICKAXE, 'oak_planks', 'wooden_pickaxe'),
  toolRecipe(AXE, 'oak_planks', 'wooden_axe'),
  toolRecipe(SHOVEL, 'oak_planks', 'wooden_shovel'),
  toolRecipe(SWORD, 'oak_planks', 'wooden_sword'),
  toolRecipe(HOE, 'oak_planks', 'wooden_hoe'),
  toolRecipe(PICKAXE, 'cobblestone', 'stone_pickaxe'),
  toolRecipe(AXE, 'cobblestone', 'stone_axe'),
  toolRecipe(SHOVEL, 'cobblestone', 'stone_shovel'),
  toolRecipe(SWORD, 'cobblestone', 'stone_sword'),
  toolRecipe(HOE, 'cobblestone', 'stone_hoe'),
  toolRecipe(PICKAXE, 'iron_ingot', 'iron_pickaxe'),
  toolRecipe(AXE, 'iron_ingot', 'iron_axe'),
  toolRecipe(SHOVEL, 'iron_ingot', 'iron_shovel'),
  toolRecipe(SWORD, 'iron_ingot', 'iron_sword'),
  toolRecipe(HOE, 'iron_ingot', 'iron_hoe'),
];
