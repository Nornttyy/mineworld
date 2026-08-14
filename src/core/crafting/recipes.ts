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
  // (箱子配方暂移除：chest 尚无方块注册,原配方"能匹配却不出货"是死配方——箱子方块做好后恢复)
  {
    type: 'shaped',
    pattern: ['##', '##'],
    key: { '#': 'string' },
    result: { item: 'wool', count: 1 }, // 1.12：4 线 → 1 羊毛
  },
  {
    type: 'shaped',
    pattern: ['###', '# #', '###'],
    key: { '#': 'cobblestone' },
    result: { item: 'furnace', count: 1 },
  },
  // ── 储存/压缩方块（背包 2×2 / 工作台 3×3），1:1 MC ────────────────────────
  // 沙石：2×2 沙 → 1 沙石（背包可做）
  {
    type: 'shaped',
    pattern: ['##', '##'],
    key: { '#': 'sand' },
    result: { item: 'sandstone', count: 1 },
  },
  // 石英块：2×2 下界石英 → 1 石英块（背包可做，给下界石英一个用途）
  {
    type: 'shaped',
    pattern: ['##', '##'],
    key: { '#': 'nether_quartz' },
    result: { item: 'quartz_block', count: 1 },
  },
  // 煤炭块：3×3 煤 → 1 块（需工作台）；可逆：1 块 → 9 煤
  {
    type: 'shaped',
    pattern: ['###', '###', '###'],
    key: { '#': 'coal' },
    result: { item: 'coal_block', count: 1 },
  },
  { type: 'shapeless', ingredients: ['coal_block'], result: { item: 'coal', count: 9 } },
  // 铁块：3×3 铁锭 → 1 块（需工作台）；可逆：1 块 → 9 铁锭
  {
    type: 'shaped',
    pattern: ['###', '###', '###'],
    key: { '#': 'iron_ingot' },
    result: { item: 'iron_block', count: 1 },
  },
  { type: 'shapeless', ingredients: ['iron_block'], result: { item: 'iron_ingot', count: 9 } },
  // 钻石块：3×3 钻石压缩；可逆拆为 9 颗。
  {
    type: 'shaped',
    pattern: ['###', '###', '###'],
    key: { '#': 'diamond' },
    result: { item: 'diamond_block', count: 1 },
  },
  { type: 'shapeless', ingredients: ['diamond_block'], result: { item: 'diamond', count: 9 } },
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
  // 钻石工具：同 1.12 的材料图案，须使用 3×3 工作台。
  toolRecipe(PICKAXE, 'diamond', 'diamond_pickaxe'),
  toolRecipe(AXE, 'diamond', 'diamond_axe'),
  toolRecipe(SHOVEL, 'diamond', 'diamond_shovel'),
  toolRecipe(SWORD, 'diamond', 'diamond_sword'),
  toolRecipe(HOE, 'diamond', 'diamond_hoe'),
];
