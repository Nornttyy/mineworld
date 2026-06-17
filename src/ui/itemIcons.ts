// 物品/方块的显示资源：等距图标(public/textures/icons/<name>.png)或中文文字占位。
// hotbar / 合成 / 背包界面共用，避免各处重复维护映射。
import { APPLE } from '../core/items/items';

// 有等距图标文件的 id → 文件名；其余回退中文文字
const ICON: Record<number, string> = {
  1: 'stone',
  2: 'dirt',
  3: 'grass',
  4: 'cobblestone',
  5: 'sand',
  6: 'oak_log',
  7: 'oak_planks',
  8: 'coal_ore',
  10: 'oak_leaves',
  [APPLE]: 'apple',
};

// 显示名（无图标时文字占位 + hover 提示）
const ZH: Record<number, string> = {
  1: '石头',
  2: '泥土',
  3: '草方块',
  4: '圆石',
  5: '沙子',
  6: '原木',
  7: '木板',
  8: '煤矿',
  10: '树叶',
  11: '工作台',
  256: '苹果',
  257: '木棍',
  258: '煤炭',
  259: '木镐',
  260: '木斧',
  261: '木锹',
  262: '木剑',
  263: '木锄',
  264: '石镐',
  265: '石斧',
  266: '石锹',
  267: '石剑',
  268: '石锄',
};

export const iconUrl = (id: number): string | null =>
  ICON[id] ? `${import.meta.env.BASE_URL}textures/icons/${ICON[id]}.png` : null;

export const itemLabel = (id: number): string => ZH[id] ?? `#${id}`;
