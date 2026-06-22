import { describe, it, expect } from 'vitest';
import { temperatureAt, biomeAt } from './biome';

describe('biome 群系', () => {
  it('temperatureAt 同种子确定、范围 0..1', () => {
    const a = temperatureAt(123, 456, 7);
    const b = temperatureAt(123, 456, 7);
    expect(a).toBe(b);
    expect(a).toBeGreaterThanOrEqual(0);
    expect(a).toBeLessThanOrEqual(1);
  });
  it('扫一大片能同时出现沙漠/雪原/温带', () => {
    const seen = new Set<string>();
    for (let x = 0; x < 4000; x += 40)
      for (let z = 0; z < 400; z += 40) seen.add(biomeAt(x, z, 1337));
    expect(seen.has('desert')).toBe(true);
    expect(seen.has('snow')).toBe(true);
    expect([...seen].some((b) => b === 'plains' || b === 'forest')).toBe(true);
  });
});
