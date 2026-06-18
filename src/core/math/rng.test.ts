import { describe, it, expect } from 'vitest';
import { makeRng } from './rng';

describe('makeRng（种子化确定性 RNG）', () => {
  it('同种子产出完全相同的序列（可复现，供实体 AI 单测）', () => {
    const a = makeRng(12345);
    const b = makeRng(12345);
    const seqA = Array.from({ length: 8 }, () => a());
    const seqB = Array.from({ length: 8 }, () => b());
    expect(seqA).toEqual(seqB);
  });

  it('不同种子产出不同序列', () => {
    const a = makeRng(1);
    const b = makeRng(2);
    expect(a()).not.toBe(b());
  });

  it('输出始终落在 [0,1)', () => {
    const r = makeRng(987654);
    for (let i = 0; i < 2000; i++) {
      const v = r();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});
