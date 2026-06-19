import { describe, it, expect } from 'vitest';
import type { CraftGrid } from './types';
import { getCraftingResult } from './match';

const s = (item: string): { item: string; count: number } => ({ item, count: 1 });

describe('箭 + 弓 配方（3×3 工作台）', () => {
  it('燧石(上) + 木棍(中) + 羽毛(下) 竖排 → 4 支箭', () => {
    const grid: CraftGrid = [
      [null, s('flint'), null],
      [null, s('stick'), null],
      [null, s('feather'), null],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'arrow', count: 4 });
  });

  it('3 线 + 3 木棍（弓形）→ 1 把弓', () => {
    const grid: CraftGrid = [
      [null, s('stick'), s('string')],
      [s('stick'), null, s('string')],
      [null, s('stick'), s('string')],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'bow', count: 1 });
  });
});
