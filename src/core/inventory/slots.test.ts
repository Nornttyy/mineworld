import { describe, it, expect } from 'vitest';
import { leftClick, rightClick, quickMove, dragSplitEven, dragOnePer, type SlotRef } from './slots';
import { emptyInventory, type ItemStack } from './inventory';

const max64 = (): number => 64;
const maxOf = (id: number): number => (id >= 256 ? 1 : 64); // 工具(≥256)不堆叠
const refsOf = (arr: (ItemStack | null)[]): SlotRef[] =>
  arr.map((_, i) => ({ get: () => arr[i], set: (s) => (arr[i] = s) }));

describe('slots 光标交互（MC 同款）', () => {
  it('左键空手拿起整组', () => {
    const slots: (ItemStack | null)[] = [{ id: 2, count: 10 }, null];
    const cur = leftClick(slots, 0, null, max64);
    expect(cur).toEqual({ id: 2, count: 10 });
    expect(slots[0]).toBeNull();
  });

  it('左键持物放到空格', () => {
    const slots: (ItemStack | null)[] = [null];
    const cur = leftClick(slots, 0, { id: 2, count: 5 }, max64);
    expect(cur).toBeNull();
    expect(slots[0]).toEqual({ id: 2, count: 5 });
  });

  it('左键同类堆叠，超上限留在光标', () => {
    const slots: (ItemStack | null)[] = [{ id: 2, count: 60 }];
    const cur = leftClick(slots, 0, { id: 2, count: 10 }, max64);
    expect(slots[0]).toEqual({ id: 2, count: 64 });
    expect(cur).toEqual({ id: 2, count: 6 });
  });

  it('左键异类交换', () => {
    const slots: (ItemStack | null)[] = [{ id: 2, count: 5 }];
    const cur = leftClick(slots, 0, { id: 3, count: 2 }, max64);
    expect(slots[0]).toEqual({ id: 3, count: 2 });
    expect(cur).toEqual({ id: 2, count: 5 });
  });

  it('右键空手拿一半(向上取整)', () => {
    const slots: (ItemStack | null)[] = [{ id: 2, count: 7 }];
    const cur = rightClick(slots, 0, null, max64);
    expect(cur).toEqual({ id: 2, count: 4 });
    expect(slots[0]).toEqual({ id: 2, count: 3 });
  });

  it('右键持物放 1 个', () => {
    const slots: (ItemStack | null)[] = [null];
    const cur = rightClick(slots, 0, { id: 2, count: 3 }, max64);
    expect(slots[0]).toEqual({ id: 2, count: 1 });
    expect(cur).toEqual({ id: 2, count: 2 });
  });

  it('右键放最后 1 个后光标清空', () => {
    const slots: (ItemStack | null)[] = [null];
    const cur = rightClick(slots, 0, { id: 2, count: 1 }, max64);
    expect(slots[0]).toEqual({ id: 2, count: 1 });
    expect(cur).toBeNull();
  });

  it('quickMove 整组转移到空背包', () => {
    const from: (ItemStack | null)[] = [{ id: 2, count: 10 }];
    const to = emptyInventory();
    quickMove(from, 0, to, max64);
    expect(from[0]).toBeNull();
    expect(to[0]).toEqual({ id: 2, count: 10 });
  });

  it('工具 maxStack=1：同类满栈点击不堆叠', () => {
    const slots: (ItemStack | null)[] = [{ id: 259, count: 1 }];
    const cur = leftClick(slots, 0, { id: 259, count: 1 }, maxOf);
    expect(slots[0]).toEqual({ id: 259, count: 1 });
    expect(cur).toEqual({ id: 259, count: 1 });
  });
});

describe('涂抹分发（MC 拖拽手势）', () => {
  it('左键平分：9 个分到 3 空格 → 每格 3，光标清空', () => {
    const arr: (ItemStack | null)[] = [null, null, null];
    const cur = dragSplitEven(refsOf(arr), { id: 2, count: 9 }, max64);
    expect(arr).toEqual([{ id: 2, count: 3 }, { id: 2, count: 3 }, { id: 2, count: 3 }]);
    expect(cur).toBeNull();
  });

  it('左键平分：10 个分到 3 格 → 每格 3，余 1 留光标', () => {
    const arr: (ItemStack | null)[] = [null, null, null];
    const cur = dragSplitEven(refsOf(arr), { id: 2, count: 10 }, max64);
    expect(arr.map((s) => s?.count)).toEqual([3, 3, 3]);
    expect(cur).toEqual({ id: 2, count: 1 });
  });

  it('左键平分：只分给空格/同类未满，跳过异类与满栈', () => {
    const arr: (ItemStack | null)[] = [null, { id: 3, count: 5 }, { id: 2, count: 60 }];
    const cur = dragSplitEven(refsOf(arr), { id: 2, count: 8 }, max64); // 合格格=arr[0],arr[2]，每格 4
    expect(arr[0]).toEqual({ id: 2, count: 4 });
    expect(arr[1]).toEqual({ id: 3, count: 5 }); // 异类不动
    expect(arr[2]).toEqual({ id: 2, count: 64 }); // 60+4 封顶
    expect(cur).toBeNull();
  });

  it('左键平分：不够每格 1 个 → 不分，光标原样', () => {
    const arr: (ItemStack | null)[] = [null, null, null, null, null];
    const cur = dragSplitEven(refsOf(arr), { id: 2, count: 2 }, max64);
    expect(arr.every((s) => s === null)).toBe(true);
    expect(cur).toEqual({ id: 2, count: 2 });
  });

  it('右键每格放 1：3 个扫过 5 空格 → 前 3 格各 1，光标清空', () => {
    const arr: (ItemStack | null)[] = [null, null, null, null, null];
    const cur = dragOnePer(refsOf(arr), { id: 2, count: 3 }, max64);
    expect(arr.map((s) => s?.count ?? 0)).toEqual([1, 1, 1, 0, 0]);
    expect(cur).toBeNull();
  });
});
