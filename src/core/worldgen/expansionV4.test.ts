import { describe, expect, it } from 'vitest';
import * as B from '../blocks/registry';
import { Chunk } from '../world/chunk';
import {
  decorateExpandedBiomes,
  expandedTrees,
  planExpandedTree,
  type ExpandedTree,
} from './expandedBiomes';
import {
  findStructureInRegion,
  planStructure,
  stampStructure,
  structureForBiome,
  type StructureKind,
} from './modernStructures';
import { generateModernChunk, clearModernWorldgenCaches } from './modernOverworld';
import { fuelTicks } from '../crafting/smelting';
import { defaultLeafTint } from './foliageTint';
import blockSounds from '../../audio/data/block-sounds.json';
const BLOCK_SOUNDS: Record<string, unknown> = blockSounds;

const sampler = (name: string, h = 80) => ({
  height: () => h,
  biome: () => `minecraft:${name}`,
  density: () => 1,
});
const ground = () => {
  const c = new Chunk(-64, 384);
  for (let x = 0; x < 16; x++) for (let z = 0; z < 16; z++) c.set(x, 80, z, B.GRASS);
  return c;
};
const kinds: ExpandedTree[] = [
  'acacia',
  'jungle',
  'dark_oak',
  'cherry',
  'mushroom',
  'pine',
  'swamp',
];
describe('revision 4 biome expansion', () => {
  it.each(kinds)('%s has reproducible, connected trunk and bounded crown', (kind) => {
    const plan = planExpandedTree(kind, 9223372036854775807n);
    expect(plan).toEqual(planExpandedTree(kind, 9223372036854775807n));
    expect(plan.length).toBeGreaterThan(25);
    expect(
      plan.every(
        ([x, y, z, id]) => Math.abs(x) < 8 && Math.abs(z) < 8 && y >= 0 && y < 25 && B.BLOCKS[id],
      ),
    ).toBe(true);
    const solid = new Set(
      plan.filter((p) => !B.LEAF_IDS.has(p[3])).map((p) => p.slice(0, 3).join(',')),
    );
    expect(solid.has('0,0,0')).toBe(true);
    const reached = new Set(['0,0,0']),
      queue = [[0, 0, 0]];
    for (let i = 0; i < queue.length; i++) {
      const [x, y, z] = queue[i];
      for (const [dx, dy, dz] of [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1],
      ]) {
        const p = [x + dx, y + dy, z + dz],
          key = p.join(',');
        if (solid.has(key) && !reached.has(key)) {
          reached.add(key);
          queue.push(p);
        }
      }
    }
    expect(reached.size).toBe(solid.size);
  });
  it.each([
    'savanna',
    'jungle',
    'dark_forest',
    'cherry_grove',
    'mushroom_fields',
    'old_growth_pine_taiga',
    'swamp',
  ])('decorates %s, including across negative chunk boundaries', (biome) => {
    const s = sampler(biome),
      seed = -9223372036854775808n;
    const left = ground(),
      right = ground(),
      rightFirst = ground(),
      leftSecond = ground();
    decorateExpandedBiomes(left, -1, 0, seed, s);
    decorateExpandedBiomes(right, 0, 0, seed, s);
    decorateExpandedBiomes(rightFirst, 0, 0, seed, s);
    decorateExpandedBiomes(leftSecond, -1, 0, seed, s);
    expect(left.blocks).toEqual(leftSecond.blocks);
    expect(right.blocks).toEqual(rightFirst.blocks);
    const border = expandedTrees(-1, 0, seed, s).filter(
      ([x, , z]) => x >= 0 && x < 16 && z >= 0 && z < 16,
    );
    for (const [x, y, z] of border) expect(right.get(x, y, z)).not.toBe(0);
    expect(left.blocks.some((id) => B.LOG_IDS.has(id) || id === B.MUSHROOM_STEM)).toBe(true);
  });
  it('does not put the new trees into oceans, deserts or submerged ground', () => {
    for (const s of [sampler('ocean'), sampler('desert'), sampler('jungle', 60)])
      expect(expandedTrees(0, 0, 42n, s)).toEqual([]);
  });
  it('new woods burn and cherry leaves retain their pink instead of biome green', () => {
    for (const id of [
      B.ACACIA_LOG,
      B.JUNGLE_LOG,
      B.DARK_OAK_LOG,
      B.CHERRY_LOG,
      B.ACACIA_PLANKS,
      B.JUNGLE_PLANKS,
      B.DARK_OAK_PLANKS,
      B.CHERRY_PLANKS,
    ]) {
      expect(fuelTicks(id)).toBe(300);
      expect(BLOCK_SOUNDS[B.BLOCKS[id].name]).toBeDefined();
    }
    expect(defaultLeafTint(B.CHERRY_LEAVES)).toEqual([1, 1, 1]);
  });
});

describe('revision 4 buildings', () => {
  const kinds: StructureKind[] = ['village', 'desert_ruin', 'stone_tower', 'igloo'];
  it.each(kinds)(
    '%s is clipped identically across a four-chunk boundary and survives regeneration',
    (kind) => {
      const start = { kind, x: 0, y: 80, z: 0, biome: 'minecraft:plains' },
        s = sampler('plains');
      const plan = planStructure(kind),
        chunks = new Map<string, Chunk>();
      for (const [cx, cz] of [
        [0, 0],
        [-1, -1],
        [0, -1],
        [-1, 0],
      ]) {
        const c = ground();
        stampStructure(c, cx, cz, start, s);
        chunks.set(`${cx},${cz}`, c);
        const regenerated = ground();
        stampStructure(regenerated, cx, cz, start, s);
        expect(c.blocks).toEqual(regenerated.blocks);
      }
      for (const [x, dy, z, id] of plan) {
        const cx = Math.floor(x / 16),
          cz = Math.floor(z / 16),
          c = chunks.get(`${cx},${cz}`)!;
        expect(c.get(x - cx * 16, 80 + dy, z - cz * 16)).toBe(id);
        expect(c.getFluid(x - cx * 16, 80 + dy, z - cz * 16)).toBe(id === B.WATER ? 24 : 0);
      }
    },
  );
  it.each(kinds)('%s has a two-block-high entrance and usable interior', (kind) => {
    const plan = planStructure(kind),
      get = (x: number, y: number, z: number) =>
        plan.find((p) => p[0] === x && p[1] === y && p[2] === z)?.[3] ?? 0;
    const [x, z] =
      kind === 'village'
        ? [-8, -5]
        : kind === 'desert_ruin'
          ? [0, 5]
          : kind === 'stone_tower'
            ? [0, -3]
            : [0, 6];
    expect(get(x, 1, z)).toBe(0);
    expect(get(x, 2, z)).toBe(0);
    expect(B.isSolidId(get(x, 0, z))).toBe(true);
    expect(plan.some((p) => p[3] === B.TORCH)).toBe(true);
    expect(plan.some((p) => p[3] === B.CRAFTING_TABLE || p[3] === B.FURNACE)).toBe(true);
  });
  it.each([
    ['plains', 'village'],
    ['savanna', 'village'],
    ['desert', 'desert_ruin'],
    ['forest', 'stone_tower'],
    ['snowy_taiga', 'igloo'],
  ])('chooses %s structures deterministically using the full signed seed', (biome, kind) => {
    const s = sampler(biome),
      a = findStructureInRegion(-2, 3, -9223372036854775808n, s);
    expect(a?.kind).toBe(kind);
    expect(a).toEqual(findStructureInRegion(-2, 3, -9223372036854775808n, s));
    expect(a).not.toEqual(findStructureInRegion(-2, 3, 0n, s));
    expect(a!.x).toBeGreaterThan(-320 + 23);
    expect(a!.x).toBeLessThan(-160 - 23);
  });
  it('rejects water, oceans and steep terrain instead of placing floating buildings', () => {
    expect(structureForBiome('minecraft:deep_ocean')).toBeUndefined();
    expect(findStructureInRegion(0, 0, 0n, sampler('plains', 60))).toBeUndefined();
    expect(
      findStructureInRegion(0, 0, 0n, {
        ...sampler('plains'),
        height: (x, z) => 80 + ((x + z) & 7) * 3,
      }),
    ).toBeUndefined();
  });
});

it('generates the verified village naturally in seed 9, without adding it to revision 3 saves', () => {
  clearModernWorldgenCaches();
  const newer = generateModernChunk(4, -5, '9', 4);
  expect(newer.get(8, 65, 10)).toBe(B.WATER);
  expect(newer.getFluid(8, 65, 10)).toBe(24);
  expect(newer.get(8, 69, 10)).toBe(B.OAK_PLANKS);
  expect(newer.get(0, 66, 5)).toBe(0);
  expect(newer.get(0, 67, 5)).toBe(0);
  const old = generateModernChunk(4, -5, '9', 3);
  expect(old.get(8, 69, 10)).not.toBe(B.OAK_PLANKS);
});
