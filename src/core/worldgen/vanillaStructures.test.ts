import { describe, it, expect } from 'vitest';
import { BLOCKS, GRASS } from '../blocks/registry';
import { architectureModel } from '../blocks/architecture';
import {
  planVanillaTemplate,
  planVanillaStructure,
  stampVanillaStructure,
} from './vanillaStructures';
import { vanillaTreeKinds, vanillaTreeShape } from './vanillaVegetation';
import { Chunk } from '../world/chunk';
import source from './data/java26-structures.json';
import { generateModernChunk } from './modernOverworld';

describe('official structure and tree integration', () => {
  it.each(Object.keys(source.templates))('resolves all actual block states in %s', (name) => {
    const plan = planVanillaTemplate(name);
    expect(plan.length).toBeGreaterThan(50);
    for (const p of plan) expect(BLOCKS[p[3]], `${name}: ${p}`).toBeDefined();
    if (name.startsWith('village/')) expect(plan.some((p) => p[3] === 0)).toBe(false);
  });
  it('preserves desert pyramid room, four chests, nine TNT and central pressure plate', () => {
    const plan = planVanillaStructure('desert_ruin');
    const count = (name: string) =>
      plan.filter((p) => architectureModel(p[3])?.name === `minecraft:${name}`).length;
    expect(count('chest')).toBe(4);
    expect(count('tnt')).toBe(9);
    expect(count('stone_pressure_plate')).toBe(1);
    expect(Math.min(...plan.map((p) => p[1]))).toBe(-13);
    expect(Math.max(...plan.map((p) => p[1]))).toBe(11);
  });
  it.each(vanillaTreeKinds)('loads four exact %s samples', (kind) => {
    for (let i = 0; i < 4; i++) {
      const shape = vanillaTreeShape(kind, i);
      expect(shape.length).toBeGreaterThan(25);
      expect(shape.every((p) => !!BLOCKS[p[3]])).toBe(true);
    }
  });
  it('stamps a boundary-crossing structure without turning the surroundings into trenches', () => {
    const chunks = new Map<string, Chunk>();
    const start = { kind: 'village' as const, x: 15, y: 80, z: 15, biome: 'minecraft:plains' };
    for (let cx = -1; cx <= 2; cx++)
      for (let cz = -1; cz <= 2; cz++) {
        const c = new Chunk(-64, 384);
        for (let x = 0; x < 16; x++) for (let z = 0; z < 16; z++) c.set(x, 80, z, GRASS);
        stampVanillaStructure(c, cx, cz, start, {
          height: () => 80,
          biome: () => start.biome,
          density: () => 1,
        });
        chunks.set(`${cx},${cz}`, c);
      }
    for (const [dx, dy, dz, id] of planVanillaStructure('village')) {
      const x = 15 + dx,
        z = 15 + dz,
        c = chunks.get(`${Math.floor(x / 16)},${Math.floor(z / 16)}`)!;
      expect(c.get(((x % 16) + 16) % 16, 80 + dy, ((z % 16) + 16) % 16)).toBe(id);
    }
    for (const c of chunks.values())
      for (let x = 0; x < 16; x++) for (let z = 0; z < 16; z++) expect(c.get(x, 80, z)).not.toBe(0);
  });
  it('generates a revision 5 village deterministically across chunk order', () => {
    const hash = (cx: number, cz: number) =>
      generateModernChunk(cx, cz, '9', 5).blocks.reduce(
        (h, v) => Math.imul(h ^ v, 16777619) >>> 0,
        2166136261,
      );
    const a = hash(4, -5),
      b = hash(5, -5);
    expect(hash(5, -5)).toBe(b);
    expect(hash(4, -5)).toBe(a);
    expect(a).not.toBe(b);
  });
});
