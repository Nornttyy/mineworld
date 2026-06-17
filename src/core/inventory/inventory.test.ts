import { describe, it, expect } from 'vitest';
import {
  emptyInventory,
  addItem,
  takeOne,
  serializeInventory,
  deserializeInventory,
  STACK_MAX,
  INV_SIZE,
} from './inventory';

describe('inventory', () => {
  it('空背包是 36 个空格(9 快捷栏 + 27 主背包)', () => {
    const inv = emptyInventory();
    expect(inv).toHaveLength(INV_SIZE);
    expect(inv.every((s) => s === null)).toBe(true);
  });

  it('加入物品落到第一个空格', () => {
    const inv = emptyInventory();
    expect(addItem(inv, 2, 5)).toBe(0);
    expect(inv[0]).toEqual({ id: 2, count: 5 });
  });

  it('同类物品叠加到已有栈', () => {
    const inv = emptyInventory();
    addItem(inv, 2, 5);
    addItem(inv, 2, 3);
    expect(inv[0]).toEqual({ id: 2, count: 8 });
    expect(inv[1]).toBeNull();
  });

  it('超过堆叠上限溢出到下一格', () => {
    const inv = emptyInventory();
    addItem(inv, 2, STACK_MAX - 1);
    addItem(inv, 2, 5); // 1 填满第一格，4 进下一格
    expect(inv[0]).toEqual({ id: 2, count: STACK_MAX });
    expect(inv[1]).toEqual({ id: 2, count: 4 });
  });

  it('背包满时返回放不下的剩余', () => {
    const inv = emptyInventory();
    for (let i = 0; i < INV_SIZE; i++) addItem(inv, 1, STACK_MAX);
    expect(addItem(inv, 1, 10)).toBe(10); // 全满，10 个都放不下
  });

  it('takeOne 取一个，取空置 null', () => {
    const inv = emptyInventory();
    addItem(inv, 5, 2);
    expect(takeOne(inv, 0)).toBe(5);
    expect(inv[0]).toEqual({ id: 5, count: 1 });
    expect(takeOne(inv, 0)).toBe(5);
    expect(inv[0]).toBeNull();
    expect(takeOne(inv, 0)).toBeNull(); // 空格取不出
  });

  it('序列化往返一致', () => {
    const inv = emptyInventory();
    addItem(inv, 6, 12);
    addItem(inv, 4, 64);
    const round = deserializeInventory(serializeInventory(inv));
    expect(round).toEqual(inv);
  });

  it('反序列化能容忍脏数据', () => {
    expect(deserializeInventory(null)).toHaveLength(INV_SIZE);
    expect(deserializeInventory([{ id: 1, count: 0 }, 'x', null])[0]).toBeNull();
  });
});
