import { describe, expect, it } from 'vitest';
import { emptyInventory } from './inventory';
import {
  CREATIVE_ITEM_IDS,
  creativeStack,
  isCreativeItem,
  missingCreativeItems,
  pickCreativeItem,
} from './creative';
import { DIAMOND_PICKAXE } from '../items/items';

describe('creative inventory', () => {
  it('目录覆盖所有已注册物品且不重复', () => {
    expect(missingCreativeItems()).toEqual([]);
    expect(new Set(CREATIVE_ITEM_IDS).size).toBe(CREATIVE_ITEM_IDS.length);
  });

  it('方块给满组，工具只给一件，并拒绝内部水/传送门方块', () => {
    expect(creativeStack(1)).toEqual({ id: 1, count: 64 });
    expect(creativeStack(DIAMOND_PICKAXE)).toEqual({ id: DIAMOND_PICKAXE, count: 1 });
    expect(isCreativeItem(9)).toBe(false);
    expect(isCreativeItem(25)).toBe(false);
    expect(creativeStack(25)).toBeNull();
  });

  it('中键优先选择快捷栏已有方块，否则复制到当前格', () => {
    const inv = emptyInventory();
    inv[4] = { id: 3, count: 12 };

    expect(pickCreativeItem(inv, 1, 3)).toBe(4);
    expect(inv[4]).toEqual({ id: 3, count: 12 });
    expect(pickCreativeItem(inv, 1, 36)).toBe(1);
    expect(inv[1]).toEqual({ id: 36, count: 64 });
  });
});
