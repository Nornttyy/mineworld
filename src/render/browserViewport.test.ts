import { describe, expect, it } from 'vitest';
import { browserViewportSize } from './browserViewport';

describe('browserViewportSize', () => {
  it('uses the visual viewport when mobile browser bars change the visible area', () => {
    expect(
      browserViewportSize({
        innerWidth: 844,
        innerHeight: 430,
        visualViewport: { width: 844, height: 390 },
      }),
    ).toEqual({ width: 844, height: 390 });
  });

  it('falls back to the layout viewport on desktop', () => {
    expect(browserViewportSize({ innerWidth: 1280, innerHeight: 720 })).toEqual({ width: 1280, height: 720 });
  });

  it('rounds fractional CSS pixels up so no one-pixel strip is exposed', () => {
    expect(
      browserViewportSize({
        innerWidth: 390,
        innerHeight: 844,
        visualViewport: { width: 389.4, height: 782.2 },
      }),
    ).toEqual({ width: 390, height: 783 });
  });
});
