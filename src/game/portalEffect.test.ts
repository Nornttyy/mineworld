import { describe, expect, it } from 'vitest';
import {
  PORTAL_FLASH_SECONDS,
  PORTAL_TRAVEL_SECONDS,
  portalEffectOpacity,
  portalEffectProgress,
} from './portalEffect';

describe('nether portal screen effect', () => {
  it('stays hidden while the player is not charging a portal', () => {
    expect(portalEffectOpacity(PORTAL_TRAVEL_SECONDS, false, 0)).toBe(0);
    expect(portalEffectProgress(PORTAL_TRAVEL_SECONDS, false)).toBe(0);
  });

  it('grows steadily throughout the four-second portal charge', () => {
    const start = portalEffectOpacity(0.05, true, 0);
    const middle = portalEffectOpacity(PORTAL_TRAVEL_SECONDS / 2, true, 0);
    const end = portalEffectOpacity(PORTAL_TRAVEL_SECONDS, true, 0);

    expect(start).toBeGreaterThan(0);
    expect(middle).toBeGreaterThan(start);
    expect(end).toBeGreaterThan(middle);
    expect(portalEffectProgress(PORTAL_TRAVEL_SECONDS / 2, true)).toBe(0.5);
    expect(portalEffectProgress(PORTAL_TRAVEL_SECONDS * 2, true)).toBe(1);
  });

  it('flashes at the dimension switch and then fades completely', () => {
    expect(portalEffectOpacity(0, false, PORTAL_FLASH_SECONDS)).toBe(1);
    expect(portalEffectOpacity(0, false, PORTAL_FLASH_SECONDS / 2)).toBeCloseTo(0.25, 6);
    expect(portalEffectOpacity(0, false, 0)).toBe(0);
  });
});
