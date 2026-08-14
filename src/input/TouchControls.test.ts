import { describe, expect, it } from 'vitest';
import { dpadAxes, isTouchSprintDoubleTap, TOUCH_SPRINT_DOUBLE_TAP_MS, type TouchDirection } from './TouchControls';

describe('dpadAxes', () => {
  it('maps each held direction onto the correct movement axis', () => {
    expect(dpadAxes(new Set<TouchDirection>(['forward', 'right']))).toEqual({ forward: 1, right: 1 });
    expect(dpadAxes(new Set<TouchDirection>(['back', 'left']))).toEqual({ forward: -1, right: -1 });
  });

  it('allows diagonal movement while cancelling opposite directions', () => {
    expect(dpadAxes(new Set<TouchDirection>(['forward', 'left']))).toEqual({ forward: 1, right: -1 });
    expect(dpadAxes(new Set<TouchDirection>(['forward', 'back', 'left', 'right']))).toEqual({ forward: 0, right: 0 });
  });
});

describe('isTouchSprintDoubleTap', () => {
  it('accepts a second forward press inside the sprint window', () => {
    expect(isTouchSprintDoubleTap(1_000, 1_000 + TOUCH_SPRINT_DOUBLE_TAP_MS)).toBe(true);
  });

  it('rejects a slow or backwards timestamp', () => {
    expect(isTouchSprintDoubleTap(1_000, 1_000 + TOUCH_SPRINT_DOUBLE_TAP_MS + 1)).toBe(false);
    expect(isTouchSprintDoubleTap(1_000, 999)).toBe(false);
  });
});
