import { describe, it, expect } from 'vitest';
import {
  emptyInventory,
  addItem,
  addTool,
  takeOne,
  damageTool,
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

  it('damageTool：用一次扣 1 耐久，用尽则该格清空(损坏)', () => {
    const inv = emptyInventory();
    inv[0] = { id: 259, count: 1 }; // 工具，dur 未定义 → 视作满
    expect(damageTool(inv, 0, 3)).toBe(false); // 满3 → 2
    expect(inv[0]?.dur).toBe(2);
    expect(damageTool(inv, 0, 3)).toBe(false); // 2 → 1
    expect(inv[0]?.dur).toBe(1);
    expect(damageTool(inv, 0, 3)).toBe(true); // 1 → 0 损坏
    expect(inv[0]).toBeNull();
  });

  it('耐久随存档往返保留', () => {
    const inv = emptyInventory();
    inv[0] = { id: 259, count: 1, dur: 17 };
    const round = deserializeInventory(serializeInventory(inv));
    expect(round[0]?.dur).toBe(17);
  });

  it('addTool：带磨损的工具放进空格并保留耐久', () => {
    const inv = emptyInventory();
    inv[0] = { id: 1, count: 5 }; // 槽0 占用
    expect(addTool(inv, 259, 30)).toBe(true);
    expect(inv[1]).toEqual({ id: 259, count: 1, dur: 30 }); // 落到槽1，耐久保留
  });

  it('addTool：背包满时返回 false', () => {
    const inv = emptyInventory();
    for (let i = 0; i < INV_SIZE; i++) inv[i] = { id: 1, count: 1 };
    expect(addTool(inv, 259, 10)).toBe(false);
  });
});
