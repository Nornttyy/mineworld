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
  it('扫一大片能出现六种群系（含白桦林与恶地）', () => {
    const seen = new Set<string>();
    for (let x = -4000; x <= 4000; x += 40)
      for (let z = -1200; z <= 1200; z += 40) seen.add(biomeAt(x, z, 1337));
    for (const biome of ['desert', 'snow', 'plains', 'forest', 'birch_forest', 'badlands'])
      expect(seen.has(biome), `missing biome: ${biome}`).toBe(true);
  });
});
