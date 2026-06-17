// 把游戏的「数字 id 合成网格」桥接到 core/crafting 的字符串匹配核心(match/recipes)。
// 维护 数字 id ↔ 字符串 name 映射(方块取 registry 名、物品取 items 名)。
import { BLOCKS } from '../blocks/registry';
import { ITEM_IDS, itemName } from '../items/items';
import { getCraftingResult } from './match';
import type { CraftGrid } from './types';
import type { ItemStack } from '../inventory/inventory';

const ID_TO_NAME = new Map<number, string>();
const NAME_TO_ID = new Map<string, number>();
for (const b of BLOCKS) {
  if (b.id !== 0) {
    ID_TO_NAME.set(b.id, b.name);
    NAME_TO_ID.set(b.name, b.id);
  }
}
for (const id of ITEM_IDS) {
  const n = itemName(id);
  if (n) {
    ID_TO_NAME.set(id, n);
    NAME_TO_ID.set(n, id);
  }
}

export const idToName = (id: number): string | null => ID_TO_NAME.get(id) ?? null;
export const nameToId = (name: string): number | null => NAME_TO_ID.get(name) ?? null;

// 数字 id 方阵 → 合成输出(数字 id)；无匹配返回 null。
export function gridResult(grid: (ItemStack | null)[][]): ItemStack | null {
  const str: CraftGrid = grid.map((row) =>
    row.map((c) => {
      if (!c) return null;
      const name = ID_TO_NAME.get(c.id);
      return name ? { item: name, count: c.count } : null;
    }),
  );
  const res = getCraftingResult(str);
  if (!res) return null;
  const id = NAME_TO_ID.get(res.item);
  return id == null ? null : { id, count: res.count };
}

// 取出一次成果后，消耗每个非空输入格各 1 个。
export function consumeGrid(grid: (ItemStack | null)[][]): void {
  for (const row of grid) {
    for (let i = 0; i < row.length; i++) {
      const c = row[i];
      if (c) {
        c.count -= 1;
        if (c.count <= 0) row[i] = null;
      }
    }
  }
}
