import { describe, it, expect } from 'vitest';
import { demoChunk } from './demoChunk';

describe('demoChunk', () => {
  it('has grass on top, dirt under, stone below, plus ore and a log', () => {
    const s = demoChunk();
    const ids = new Set<number>();
    for (let i = 0; i < s.blocks.length; i++) ids.add(s.blocks[i]);
    expect(ids.has(3)).toBe(true); // grass
    expect(ids.has(2)).toBe(true); // dirt
    expect(ids.has(1)).toBe(true); // stone
    expect(ids.has(8)).toBe(true); // coal_ore
    expect(ids.has(6)).toBe(true); // oak_log
  });

  it('surface is grass, sky above is air', () => {
    const s = demoChunk();
    expect(s.get(0, 8, 0)).toBe(3); // grass at ground level
    expect(s.get(0, 15, 0)).toBe(0); // air well above
  });

  it('is deterministic', () => {
    expect(Array.from(demoChunk().blocks)).toEqual(Array.from(demoChunk().blocks));
  });
});
