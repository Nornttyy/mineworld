import { describe, expect, it } from 'vitest';
import { LegacyRandom } from 'deepslate/math';
import { Chunk } from '../world/chunk';
import { GRASS, SAND, WATER, DEAD_BUSH, FERN, GRASS_PLANT, isFlowerId, isCrossPlantId, canPlantSurvive } from '../blocks/registry';
import { decorateVegetationV2, smallTreeFoliage, vegetationTrees, type SmallTreeKind } from './modernVegetation';
import fixtures from './reference/foliage26.fixtures.json';

function ground(id = GRASS): Chunk {
  const c = new Chunk(-64, 384);
  for (let x = 0; x < 16; x++) for (let z = 0; z < 16; z++) c.set(x, 80, z, id);
  return c;
}
const sampler = (biome: string) => ({ height: () => 80, biome: () => `minecraft:${biome}`, density: (_x: number, y: number) => 80 - y });

describe('revision 2 vegetation', () => {
  it.each(fixtures)('$kind canopy matches the actual Java foliage placer with seed $seed', f => {
    expect(smallTreeFoliage(f.kind as SmallTreeKind, f.height, f.radius, f.offset, new LegacyRandom(BigInt(f.seed)))).toEqual(f.leaves);
  });
  it('uses different configured species and heights in birch forest and taiga', () => {
    const birch = vegetationTrees(0, 0, 42n, sampler('birch_forest'));
    expect(birch.length).toBeGreaterThan(0);
    expect(birch.every(t => t.kind === 'birch' && t.height >= 5 && t.height <= 7)).toBe(true);
    const taiga = Array.from({ length: 5 }, (_, x) => vegetationTrees(x, 0, 42n, sampler('taiga'))).flat();
    expect(new Set(taiga.map(t => t.kind))).toEqual(new Set(['pine', 'spruce']));
    expect(vegetationTrees(0, 0, 42n, sampler('desert'))).toHaveLength(0);
  });
  it.each(['plains', 'forest', 'taiga', 'meadow', 'flower_forest', 'desert', 'badlands'])('generates supported vegetation on appropriate soil in %s', biome => {
    const sand = biome === 'desert' || biome === 'badlands';
    const plants: number[] = [];
    for (let x = 0; x < 4; x++) {
      const c = ground(sand ? SAND : GRASS);
      decorateVegetationV2(c, x, 0, 42n, sampler(biome));
      for (let bx = 0; bx < 16; bx++) for (let bz = 0; bz < 16; bz++) {
        const id = c.get(bx, 81, bz);
        if (isCrossPlantId(id)) { plants.push(id); expect(canPlantSurvive(id, c.get(bx, 80, bz))).toBe(true); }
      }
    }
    expect(plants.length).toBeGreaterThan(0);
    if (sand) expect(plants.every(id => id === DEAD_BUSH)).toBe(true);
    if (biome === 'taiga') expect(plants).toContain(FERN);
    if (biome === 'meadow' || biome === 'flower_forest') expect(plants.some(isFlowerId)).toBe(true);
    if (biome === 'plains') expect(plants).toContain(GRASS_PLANT);
  });
  it('never plants flowers into water or on stone', () => {
    for (const id of [WATER, 1]) {
      const c = ground(id); decorateVegetationV2(c, 0, 0, 42n, sampler('meadow'));
      expect(c.blocks.some(isCrossPlantId)).toBe(false);
    }
  });
  it('replays full cross-border tree crowns without dependence on chunk generation order', () => {
    const s = sampler('birch_forest');
    const a = ground(), b = ground(), a2 = ground(), b2 = ground();
    decorateVegetationV2(a, -1, 0, 0n, s); decorateVegetationV2(b, 0, 0, 0n, s);
    decorateVegetationV2(b2, 0, 0, 0n, s); decorateVegetationV2(a2, -1, 0, 0n, s);
    expect(a.blocks).toEqual(a2.blocks); expect(b.blocks).toEqual(b2.blocks);
    const trees = vegetationTrees(-1, 0, 0n, s);
    let borderLeaves = 0;
    for (const t of trees) for (const [dx, dy, dz] of t.canopy) {
      const x = t.x + dx, z = t.z + dz, y = t.y + t.height + dy;
      if (x >= 0 && x < 16 && z >= 0 && z < 16) {
        expect([t.leaves, t.log]).toContain(b.get(x, y, z)); borderLeaves++;
      }
    }
    expect(borderLeaves).toBeGreaterThan(0);
  });
});
