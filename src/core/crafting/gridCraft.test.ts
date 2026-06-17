import { describe, it, expect } from 'vitest';
import { gridResult, consumeGrid, idToName, nameToId } from './gridCraft';
import type { ItemStack } from '../inventory/inventory';

const OAK_LOG = 6;
const OAK_PLANKS = 7;
const STICK = 257;
const WOODEN_PICKAXE = 259;

describe('gridCraft 数字 id 网格合成', () => {
  it('id ↔ name 双向映射', () => {
    expect(idToName(OAK_PLANKS)).toBe('oak_planks');
    expect(nameToId('stick')).toBe(STICK);
  });

  it('1 原木(无序) → 4 木板', () => {
    const grid: (ItemStack | null)[][] = [
      [{ id: OAK_LOG, count: 1 }, null],
      [null, null],
    ];
    expect(gridResult(grid)).toEqual({ id: OAK_PLANKS, count: 4 });
  });

  it('竖排 2 木板 → 4 木棍', () => {
    const grid: (ItemStack | null)[][] = [
      [{ id: OAK_PLANKS, count: 1 }, null],
      [{ id: OAK_PLANKS, count: 1 }, null],
    ];
    expect(gridResult(grid)).toEqual({ id: STICK, count: 4 });
  });

  it('3×3 木镐图案 → 木镐', () => {
    const P = { id: OAK_PLANKS, count: 1 };
    const S = { id: STICK, count: 1 };
    const grid: (ItemStack | null)[][] = [
      [P, P, P],
      [null, S, null],
      [null, S, null],
    ];
    expect(gridResult(grid)).toEqual({ id: WOODEN_PICKAXE, count: 1 });
  });

  it('乱放无匹配 → null', () => {
    const grid: (ItemStack | null)[][] = [
      [{ id: OAK_LOG, count: 1 }, { id: STICK, count: 1 }],
      [null, null],
    ];
    expect(gridResult(grid)).toBeNull();
  });

  it('consumeGrid 每个非空格 -1，扣空置 null', () => {
    const grid: (ItemStack | null)[][] = [
      [{ id: OAK_PLANKS, count: 2 }, null],
      [{ id: OAK_PLANKS, count: 1 }, null],
    ];
    consumeGrid(grid);
    expect(grid[0][0]).toEqual({ id: OAK_PLANKS, count: 1 });
    expect(grid[1][0]).toBeNull();
  });
});
