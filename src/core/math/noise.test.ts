import { describe, it, expect } from 'vitest';
import { hash2, valueNoise2, fbm2 } from './noise';

describe('noise', () => {
  it('hash2 is deterministic and in [0,1)', () => {
    expect(hash2(3, 7, 42)).toBe(hash2(3, 7, 42));
    const h = hash2(3, 7, 42);
    expect(h).toBeGreaterThanOrEqual(0);
    expect(h).toBeLessThan(1);
  });

  it('valueNoise2 is continuous: integer points equal their hash', () => {
    expect(valueNoise2(5, 9, 1)).toBeCloseTo(hash2(5, 9, 1), 10);
  });

  it('fbm2 is deterministic and in [0,1)', () => {
    expect(fbm2(1.5, 2.5, 7)).toBe(fbm2(1.5, 2.5, 7));
    for (let i = 0; i < 50; i++) {
      const v = fbm2(i * 0.37, i * 0.91, 7);
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });

  it('different seeds give different fields', () => {
    expect(fbm2(2, 3, 1)).not.toBe(fbm2(2, 3, 2));
  });
});
