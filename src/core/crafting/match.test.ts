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
