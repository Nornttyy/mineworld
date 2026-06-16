import { describe, it, expect } from 'vitest';
import { Section } from './section';

describe('section', () => {
  it('defaults to air (0) and stores blocks', () => {
    const s = new Section();
    expect(s.get(1, 2, 3)).toBe(0);
    s.set(1, 2, 3, 5);
    expect(s.get(1, 2, 3)).toBe(5);
  });
  it('distinct cells do not collide', () => {
    const s = new Section();
    s.set(0, 0, 0, 1);
    s.set(15, 15, 15, 2);
    expect(s.get(0, 0, 0)).toBe(1);
    expect(s.get(15, 15, 15)).toBe(2);
    expect(s.get(1, 0, 0)).toBe(0);
  });
});
