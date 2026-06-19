import { describe, it, expect } from 'vitest';
import { chunksNeedingWater } from './waterChunks';

describe('chunksNeedingWater（探索期增量灌水规划）', () => {
  it('空集时返回 (2r+1)^2 个区块，中心最先', () => {
    const keys = chunksNeedingWater(10, 20, 1, new Set());
    expect(keys.length).toBe(9); // 3×3
    expect(keys[0]).toBe('10,20'); // 中心距离 0，排最前
    expect(keys).toContain('9,19');
    expect(keys).toContain('11,21');
  });

  it('已灌过的区块被排除', () => {
    const watered = new Set(['10,20', '11,20']);
    const keys = chunksNeedingWater(10, 20, 1, watered);
    expect(keys).not.toContain('10,20');
    expect(keys).not.toContain('11,20');
    expect(keys.length).toBe(7); // 9 − 2
  });

  it('radius 0 只看中心；中心已灌过则为空', () => {
    expect(chunksNeedingWater(0, 0, 0, new Set())).toEqual(['0,0']);
    expect(chunksNeedingWater(0, 0, 0, new Set(['0,0']))).toEqual([]);
  });

  it('近的区块排在远的之前', () => {
    const keys = chunksNeedingWater(0, 0, 2, new Set());
    expect(keys[0]).toBe('0,0'); // d=0
    expect(keys.indexOf('1,0')).toBeLessThan(keys.indexOf('2,2')); // d=1 先于 d=8
  });
});
