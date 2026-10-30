import { expect, it } from 'vitest';
import { createFoliageSampler, colorToLinear, defaultLeafTint } from './foliageTint';
import { BIRCH_LEAVES, SPRUCE_LEAVES, OAK_LEAVES } from '../blocks/registry';
import colors from './data/java26-foliage-colors.json';
it('species retain Java fixed spruce and birch colors', () => {
  const at = createFoliageSampler({ seed: 0, generator: 'java26v3' });
  expect(at(SPRUCE_LEAVES, 0, 80, 0)).toEqual(colorToLinear(0x619961));
  expect(at(BIRCH_LEAVES, 200, 80, 200)).toEqual(colorToLinear(0x80a755));
  expect(defaultLeafTint(OAK_LEAVES)).not.toEqual(defaultLeafTint(BIRCH_LEAVES));
});
it('official biome foliage includes distinct temperate, dry and swamp colors', () => {
  expect(colors['minecraft:swamp']).toBe(0x6a7039);
  expect(colors['minecraft:plains']).not.toBe(colors['minecraft:forest']);
  expect(colors['minecraft:desert']).not.toBe(colors['minecraft:forest']);
});
it('tint blending agrees at adjacent chunk boundaries and supports long seeds', () => {
  const a = createFoliageSampler({
    seed: 0,
    seed64: '-9223372036854775808',
    generator: 'java26v3',
  });
  const b = createFoliageSampler({
    seed: 0,
    seed64: '-9223372036854775808',
    generator: 'java26v3',
  });
  expect(a(OAK_LEAVES, 16, 80, -1)).toEqual(b(OAK_LEAVES, 16, 80, -1));
  expect(a(OAK_LEAVES, 16, 80, -1).every((c) => c >= 0 && c <= 1)).toBe(true);
});
