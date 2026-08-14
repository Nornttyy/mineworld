import { describe, expect, it } from 'vitest';
import {
  isTouchLookDrag,
  isTouchSprintDoubleTap,
  slidingDpadAxes,
  TOUCH_DPAD_DEAD_ZONE,
  TOUCH_INTERACT_HOLD_MS,
  TOUCH_LOOK_DRAG_DISTANCE,
  TOUCH_SPRINT_DOUBLE_TAP_MS,
  touchLookReleaseAction,
} from './TouchControls';

describe('slidingDpadAxes', () => {
  it('has a small neutral zone at the centre of the movement pad', () => {
    expect(slidingDpadAxes(0, 0)).toEqual({ forward: 0, right: 0 });
    expect(slidingDpadAxes(TOUCH_DPAD_DEAD_ZONE - 0.001, 0)).toEqual({ forward: 0, right: 0 });
  });

  it('maps the four cardinal sections to the correct movement axes', () => {
    expect(slidingDpadAxes(0, -0.8)).toEqual({ forward: 1, right: 0 });
    expect(slidingDpadAxes(0, 0.8)).toEqual({ forward: -1, right: 0 });
    expect(slidingDpadAxes(-0.8, 0)).toEqual({ forward: 0, right: -1 });
    expect(slidingDpadAxes(0.8, 0)).toEqual({ forward: 0, right: 1 });
  });

  it('lets a single sliding thumb pass between every diagonal without lifting', () => {
    expect(slidingDpadAxes(-0.75, -0.75)).toEqual({ forward: 1, right: -1 });
    expect(slidingDpadAxes(0.75, -0.75)).toEqual({ forward: 1, right: 1 });
    expect(slidingDpadAxes(0.75, 0.75)).toEqual({ forward: -1, right: 1 });
    expect(slidingDpadAxes(-0.75, 0.75)).toEqual({ forward: -1, right: -1 });
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

describe('direct touch look gestures', () => {
  it('keeps small finger jitter as a tap but turns a real swipe into look mode', () => {
    expect(isTouchLookDrag(100, 100, 100 + TOUCH_LOOK_DRAG_DISTANCE - 1, 100)).toBe(false);
    expect(isTouchLookDrag(100, 100, 100 + TOUCH_LOOK_DRAG_DISTANCE, 100)).toBe(true);
  });

  it('never turns a drag or a cancelled hold into a use tap', () => {
    expect(touchLookReleaseAction(false, false)).toBe('tap');
    expect(touchLookReleaseAction(false, true)).toBe('hold-end');
    expect(touchLookReleaseAction(true, false)).toBe('none');
    expect(touchLookReleaseAction(false, true, true)).toBe('none');
  });

  it('treats a late timer after a real hold as a hold rather than an accidental tap', () => {
    // 低端设备掉帧时 pointerup 可能先于 setTimeout 回调被处理；时长本身仍是最终依据。
    expect(touchLookReleaseAction(false, false, false, TOUCH_INTERACT_HOLD_MS - 1)).toBe('tap');
    expect(touchLookReleaseAction(false, false, false, TOUCH_INTERACT_HOLD_MS)).toBe('hold-end');
  });

  it('keeps drag classification sticky once the finger crossed the tolerance', () => {
    // 手指划出阈值后又回到按下位置时，控制器会保留 dragged=true，不能回头触发放置。
    expect(isTouchLookDrag(200, 200, 200 + TOUCH_LOOK_DRAG_DISTANCE, 200)).toBe(true);
    expect(touchLookReleaseAction(true, false, false, 0)).toBe('none');
  });
});
