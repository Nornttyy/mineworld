import { describe, it, expect } from 'vitest';
import { leftClick, rightClick, quickMove } from './slots';
import { emptyInventory, type ItemStack } from './inventory';

const max64 = (): number => 64;
const maxOf = (id: number): number => (id >= 256 ? 1 : 64); // 工具(≥256)不堆叠

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
