import { describe, it, expect } from 'vitest';
import type { CraftGrid } from './types';
import { findRecipe, getCraftingResult } from './match';

function stack(item: string, count = 1) {
  return { item, count };
}

describe('shapeless matching', () => {
  it('one log anywhere in a 2x2 grid -> 4 planks', () => {
    const grid: CraftGrid = [
      [null, stack('oak_log')],
      [null, null],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'oak_planks', count: 4 });
  });

  it('empty grid -> null', () => {
    const grid: CraftGrid = [
      [null, null],
      [null, null],
    ];
    expect(findRecipe(grid)).toBeNull();
  });
});

describe('shaped matching', () => {
  it('two planks stacked -> 4 sticks', () => {
    const grid: CraftGrid = [
      [stack('oak_planks'), null],
      [stack('oak_planks'), null],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'stick', count: 4 });
  });

  it('2x2 planks -> crafting table, in any corner of a 3x3 grid (position independent)', () => {
    const grid: CraftGrid = [
      [null, null, null],
      [null, stack('oak_planks'), stack('oak_planks')],
      [null, stack('oak_planks'), stack('oak_planks')],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'crafting_table', count: 1 });
  });

  it('ring of 8 cobblestone -> furnace', () => {
    const c = () => stack('cobblestone');
    const grid: CraftGrid = [
      [c(), c(), c()],
      [c(), null, c()],
      [c(), c(), c()],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'furnace', count: 1 });
  });

  it('matches the mirror image of an asymmetric tool (axe)', () => {
    // 标准木斧 ['PP','PS',' S'] 的水平镜像摆法，也应命中
    const P = () => stack('oak_planks');
    const S = () => stack('stick');
    const grid: CraftGrid = [
      [P(), P()],
      [S(), P()],
      [S(), null],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'wooden_axe', count: 1 });
  });
});
