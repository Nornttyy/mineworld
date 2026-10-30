import { describe, expect, it } from 'vitest';
import { BLOCKS, BEDROCK, DEEPSLATE, WATER, LAVA, OAK_LOG, OAK_LEAVES, BIRCH_LOG, BIRCH_LEAVES, SPRUCE_LOG, SPRUCE_LEAVES } from '../blocks/registry';
import {
  clearModernWorldgenCaches, generateModernChunk, modernBiomeAt,
  modernColumnHeight, modernDensityAt, modernSeed, MODERN_SEA_LEVEL,
} from './modernOverworld';
import data from './data/java26-overworld.json';
import biomes from './data/java26-biomes.json';
import vanillaSamples from './data/java26-reference-samples.json';

describe('official 26.3 generation data', () => {
  it('compares official server samples rather than self-generated golden values', () => {
    let maxError = 0;
    const biomeDifferences: unknown[] = [];
    for (const sample of vanillaSamples) {
      const actual = modernDensityAt(sample.x, sample.y, sample.z, sample.seed);
      maxError = Math.max(maxError, Math.abs(actual - sample.density));
      expect(Math.sign(actual)).toBe(Math.sign(sample.density));
      const biome = modernBiomeAt(sample.x, sample.z, sample.seed, sample.y);
      if (biome !== sample.biome) biomeDifferences.push({ ...sample, actual: biome });
    }
    expect(maxError).toBeLessThan(0.00001);
    expect(biomeDifferences).toEqual([]);
  });
  it('uses the official vertical range, sea level and expanded datagen biome parameters', () => {
    expect(data.settings.noise).toEqual({ min_y: -64, height: 384 });
    expect(MODERN_SEA_LEVEL).toBe(63);
    expect(data.settings.sea_level).toBe(63);
    expect(biomes.biomes).toHaveLength(7594);
    expect(new Set(biomes.biomes.map(b => b.biome))).toContain('minecraft:dappled_forest');
  });

  it('preserves signed 64-bit seeds and refuses already-rounded JS numbers', () => {
    expect(modernSeed('-9223372036854775808')).toBe(-(1n << 63n));
    expect(modernSeed('9223372036854775807')).toBe((1n << 63n) - 1n);
    expect(() => modernSeed(9007199254740992)).toThrow(RangeError);
    expect(() => modernSeed('9223372036854775808')).toThrow(RangeError);
    expect(() => modernSeed('not-a-seed')).toThrow(TypeError);
    const a = modernDensityAt(37, 70, -29, '1');
    const b = modernDensityAt(37, 70, -29, '4294967297');
    expect(a).not.toBe(b);
  });

  it('uses stable world coordinates across negative chunk edges and cache eviction', () => {
    const points = [[-17, -30, -1], [-16, 0, 0], [-1, 64, 16], [0, 80, 17], [16, 100, 0]];
    const before = points.map(([x, y, z]) => modernDensityAt(x, y, z, '765432109876543210'));
    clearModernWorldgenCaches();
    const after = points.map(([x, y, z]) => modernDensityAt(x, y, z, '765432109876543210'));
    expect(after).toEqual(before);
    expect(after.every(Number.isFinite)).toBe(true);
    const name = modernBiomeAt(-17, 33, '765432109876543210');
    expect(data.biomes).toContain(name.replace('minecraft:', ''));
  });

  it('builds all 256 surface columns including bedrock and deepslate, with real-Y access', () => {
    const chunk = generateModernChunk(0, 0, '0');
    expect(chunk.minY).toBe(-64); expect(chunk.height).toBe(384);
    expect(chunk.blocks.length).toBe(16 * 384 * 16);
    expect(chunk.get(0, -65, 0)).toBe(0); expect(chunk.get(0, 320, 0)).toBe(0);
    let deep = 0; let fluid = 0;
    for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) {
      expect(chunk.get(x, -64, z)).toBe(BEDROCK);
      let top = -64;
      for (let y = -64; y < 320; y++) {
        const id = chunk.get(x, y, z);
        expect(BLOCKS[id]).toBeDefined();
        if (id === DEEPSLATE) deep++;
        if (id === WATER || id === LAVA) { fluid++; expect(chunk.getFluid(x, y, z)).toBe(24); }
        else if (id !== 0 && ![OAK_LOG, OAK_LEAVES, BIRCH_LOG, BIRCH_LEAVES, SPRUCE_LOG, SPRUCE_LEAVES].includes(id)) top = y;
      }
      expect(modernColumnHeight(x, z, '0')).toBe(top);
      expect(chunk.surfaceHeights![x + z * 16]).toBe(top);
    }
    expect(deep).toBeGreaterThan(1000);
    expect(fluid).toBeGreaterThan(0);
  }, 20_000);
});
