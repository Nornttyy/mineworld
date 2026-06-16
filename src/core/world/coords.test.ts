import { describe, it, expect } from 'vitest';
import { worldToChunk, localCoord, idx } from './coords';

describe('coords', () => {
  it('worldToChunk uses floor-div (handles negatives)', () => {
    expect(worldToChunk(0)).toBe(0);
    expect(worldToChunk(15)).toBe(0);
    expect(worldToChunk(16)).toBe(1);
    expect(worldToChunk(-1)).toBe(-1);
    expect(worldToChunk(-16)).toBe(-1);
    expect(worldToChunk(-17)).toBe(-2);
  });
  it('localCoord wraps 0..15 (handles negatives)', () => {
    expect(localCoord(0)).toBe(0);
    expect(localCoord(15)).toBe(15);
    expect(localCoord(-1)).toBe(15);
    expect(localCoord(16)).toBe(0);
  });
  it('idx packs x|(z<<4)|(y<<8)', () => {
    expect(idx(1, 2, 3)).toBe(1 | (3 << 4) | (2 << 8));
    expect(idx(15, 15, 15)).toBe(4095);
    expect(idx(0, 0, 0)).toBe(0);
  });
});
