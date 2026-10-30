import { describe, expect, it } from 'vitest';
import { XoroshiroRandom } from 'deepslate/math';
import { Chunk } from '../world/chunk';
import { BEDROCK, DEEPSLATE, COAL_ORE, IRON_ORE, GOLD_ORE, DEEPSLATE_COAL_ORE, DEEPSLATE_IRON_ORE, DEEPSLATE_GOLD_ORE, DIAMOND_ORE, DEEPSLATE_DIAMOND_ORE, OAK_LOG, OAK_LEAVES, BIRCH_LOG, BIRCH_LEAVES } from '../blocks/registry';
import { decorateModernFeatures, modernFeatureHeight, modernOreTargetMatches, modernTreeCandidates } from './modernFeatures';
import oreData from './data/java26-ores.json';

const sampler = { height: () => 80, biome: () => 'minecraft:forest', density: (_x: number, y: number) => 80 - y };
function ground(): Chunk {
  const chunk = new Chunk(-64, 384);
  for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) for (let y = -64; y <= 80; y++) {
    chunk.set(x, y, z, y === -64 ? BEDROCK : y < 0 ? DEEPSLATE : y === 80 ? 3 : 1);
  }
  return chunk;
}
describe('modern feature stage', () => {
  it('reads modern ore counts, negative-Y height distributions and material-specific target predicates', () => {
    expect(oreData.placed.ore_iron_upper.placement[0].count).toBe(90);
    const diamond = oreData.placed.ore_diamond.placement.find(p => p.type === 'minecraft:height_range')!;
    const random = XoroshiroRandom.create(0n);
    const heights = Array.from({ length: 1000 }, () => modernFeatureHeight(diamond.height!, random));
    expect(Math.min(...heights)).toBeLessThan(-64);
    expect(Math.max(...heights)).toBeLessThanOrEqual(16);
    const targets = oreData.configured['minecraft:ore_iron'].targets;
    expect(modernOreTargetMatches(targets[0].target, 1, 20)).toBe(true);
    expect(modernOreTargetMatches(targets[0].target, DEEPSLATE, -30)).toBe(false);
    expect(modernOreTargetMatches(targets[1].target, DEEPSLATE, -30)).toBe(true);
    expect(targets.every(t => !modernOreTargetMatches(t.target, BEDROCK, -64))).toBe(true);
  });

  it('generates a playable ore and wood supply without replacing bedrock or sky', () => {
    const chunk = ground(); decorateModernFeatures(chunk, 0, 0, 0n, sampler);
    const counts = new Map<number, number>(); for (const id of chunk.blocks) counts.set(id, (counts.get(id) ?? 0) + 1);
    expect((counts.get(COAL_ORE) ?? 0) + (counts.get(DEEPSLATE_COAL_ORE) ?? 0)).toBeGreaterThan(0);
    expect((counts.get(IRON_ORE) ?? 0) + (counts.get(DEEPSLATE_IRON_ORE) ?? 0)).toBeGreaterThan(0);
    expect((counts.get(GOLD_ORE) ?? 0) + (counts.get(DEEPSLATE_GOLD_ORE) ?? 0)).toBeGreaterThan(0);
    expect((counts.get(DIAMOND_ORE) ?? 0) + (counts.get(DEEPSLATE_DIAMOND_ORE) ?? 0)).toBeGreaterThan(0);
    expect((counts.get(OAK_LOG) ?? 0) + (counts.get(BIRCH_LOG) ?? 0)).toBeGreaterThan(0);
    for (let z = 0; z < 16; z++) for (let x = 0; x < 16; x++) expect(chunk.get(x, -64, z)).toBe(BEDROCK);
  });

  it('replays border-crossing trees independently of target chunk loading order', () => {
    const chunks = [ground(), ground(), ground(), ground()];
    decorateModernFeatures(chunks[0], -1, 0, 0n, sampler);
    decorateModernFeatures(chunks[1], 0, 0, 0n, sampler);
    decorateModernFeatures(chunks[3], 0, 0, 0n, sampler);
    decorateModernFeatures(chunks[2], -1, 0, 0n, sampler);
    expect(chunks[0].blocks).toEqual(chunks[2].blocks);
    expect(chunks[1].blocks).toEqual(chunks[3].blocks);
    const candidates = modernTreeCandidates(-1, 0, 0n, sampler);
    for (const tree of candidates) {
      expect(chunks[0].get(tree.x + 16, tree.y, tree.z)).toBe(tree.log);
    }
    // Ensure both canopy and trunk are real registered geometry, not only a marker.
    expect(chunks[0].blocks.some(id => id === OAK_LEAVES || id === BIRCH_LEAVES)).toBe(true);
  });
});
