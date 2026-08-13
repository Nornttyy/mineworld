import { describe, expect, it } from 'vitest';
import { stickVector } from './TouchControls';

describe('stickVector', () => {
  it('filters small movements inside the dead zone', () => {
    expect(stickVector(4, -3, 50)).toEqual({ x: 0, y: 0, strength: 0 });
  });

  it('maps the stick circle to movement axes', () => {
    const v = stickVector(25, -25, 50);
    expect(v.x).toBeCloseTo(0.5);
    expect(v.y).toBeCloseTo(0.5);
    expect(v.strength).toBeCloseTo(Math.SQRT1_2);
  });

  it('clamps touches dragged beyond the stick edge', () => {
    const v = stickVector(300, 400, 50);
    expect(Math.hypot(v.x, v.y)).toBeCloseTo(1);
    expect(v.strength).toBe(1);
  });
});
