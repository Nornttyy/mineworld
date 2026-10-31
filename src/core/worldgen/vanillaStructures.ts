/** Original block layouts; candidate placement is Mineworld's, not Java jigsaw placement. */
import templatesSource from './data/java26-structures.json';
import pyramid from './data/java26-desert-pyramid.json';
import { architectureStateId } from '../blocks/architecture';
import { BLOCKS, COBBLESTONE, SANDSTONE, WATER } from '../blocks/registry';
import { flByte, type Chunk } from '../world/chunk';
import type { ModernFeatureSampler } from './modernFeatures';
import type { FeatureBlock } from './expandedBiomes';
import {
  findStructureInRegion,
  STRUCTURE_REGION,
  type StructureKind,
  type StructureStart,
} from './modernStructures';
interface Template {
  size: number[];
  groundOffset: number;
  palette: { Name: string; Properties?: Record<string, string> }[];
  blocks: [number, number, number, number, Record<string, unknown>?][];
  entrances?: { pos: number[]; facing: string }[];
}
const templates = (templatesSource as unknown as { templates: Record<string, Template> }).templates;
const plans = new Map<string, FeatureBlock[]>();
export function planVanillaTemplate(name: string): FeatureBlock[] {
  const cached = plans.get(name);
  if (cached) return cached;
  const t = templates[name];
  if (!t) throw new Error(`Missing structure ${name}`);
  const result: FeatureBlock[] = [];
  for (const [x, y, z, i, nbt] of t.blocks) {
    let state = t.palette[i];
    if (state.Name === 'minecraft:jigsaw') {
      const final = String(nbt?.final_state ?? 'minecraft:structure_void');
      const match = /^([^\[]+)(?:\[([^\]]+)\])?$/.exec(final)!;
      state = {
        Name: match[1],
        Properties: Object.fromEntries((match[2]?.split(',') ?? []).map((p) => p.split('='))),
      };
    }
    if (/:(structure_void|structure_block)$/.test(state.Name)) continue;
    // LegacySinglePoolElement uses STRUCTURE_AND_AIR: retain the existing ground.
    if (name.startsWith('village/') && state.Name === 'minecraft:air') continue;
    result.push([
      x - Math.floor(t.size[0] / 2),
      y - t.groundOffset,
      z - Math.floor(t.size[2] / 2),
      architectureStateId(state.Name, state.Properties),
    ]);
  }
  plans.set(name, result);
  return result;
}
export function planVanillaStructure(
  kind: StructureKind,
  biome = 'minecraft:plains',
): FeatureBlock[] {
  const key = `${kind}:${biome}`,
    cached = plans.get(key);
  if (cached) return cached;
  const out = new Map<string, FeatureBlock>();
  const put = (x: number, y: number, z: number, id: number) =>
    out.set(`${x},${y},${z}`, [x, y, z, id]);
  const add = (name: string, ox = 0, oz = 0) => {
    for (const [x, y, z, id] of planVanillaTemplate(name)) put(x + ox, y, z + oz, id);
  };
  if (kind === 'desert_ruin') {
    for (const [x, y, z, i] of pyramid.blocks) {
      const p = pyramid.palette[i];
      put(
        x - 10,
        y - pyramid.groundOffset,
        z - 10,
        architectureStateId(p.Name, p.Properties as Record<string, string> | undefined),
      );
    }
  } else if (kind === 'igloo') {
    add('igloo/top');
    put(0, 0, 1, architectureStateId('snow_block'));
  } else if (kind === 'stone_tower') add('village/plains/houses/plains_temple_3');
  else {
    const species = biome.endsWith(':savanna')
      ? 'savanna'
      : biome.endsWith(':taiga')
        ? 'taiga'
        : 'plains';
    const units = [
      [-11, -11, 1],
      [11, -11, 2],
      [11, 11, 1],
    ];
    const path = architectureStateId('dirt_path');
    // Connect the supplied doorway coordinates to the fountain before stamping exact units.
    for (const [ox, oz, n] of units) {
      const name = `village/${species}/houses/${species}_small_house_${n}`,
        t = templates[name];
      const e = t.entrances?.[0];
      let x = ox + (e?.pos[0] ?? 3) - Math.floor(t.size[0] / 2),
        z = oz + (e?.pos[2] ?? 3) - Math.floor(t.size[2] / 2);
      const facing = e?.facing ?? 'south';
      // Door facing points toward the inside; approach its rear side.
      const dx = facing === 'east' ? -1 : facing === 'west' ? 1 : 0,
        dz = facing === 'south' ? -1 : facing === 'north' ? 1 : 0;
      x += dx * 3;
      z += dz * 3;
      const pave = (px: number, pz: number) => {
        for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) put(px + a, 0, pz + b, path);
      };
      const startX = x,
        startZ = z;
      for (let a = 0; a <= 3; a++) pave(startX - dx * a, startZ - dz * a);
      while (x !== 0) {
        pave(x, z);
        x -= Math.sign(x);
      }
      while (z !== 0) {
        pave(x, z);
        z -= Math.sign(z);
      }
    }
    for (const [x, z, n] of units)
      add(`village/${species}/houses/${species}_small_house_${n}`, x, z);
    add('village/plains/town_centers/plains_fountain_01');
  }
  const result = [...out.values()];
  plans.set(key, result);
  return result;
}
export function stampVanillaStructure(
  chunk: Chunk,
  cx: number,
  cz: number,
  start: StructureStart,
  sampler: ModernFeatureSampler,
): void {
  const plan = planVanillaStructure(start.kind, start.biome),
    columns = new Map<string, { bottom: number; top: number; id: number }>();
  for (const [x, y, z, id] of plan) {
    const k = `${x},${z}`,
      c = columns.get(k);
    if (!c) columns.set(k, { bottom: y, top: y, id });
    else {
      c.top = Math.max(c.top, y);
      if (y < c.bottom) {
        c.bottom = y;
        c.id = id;
      }
    }
  }
  for (const [k, c] of columns) {
    const [dx, dz] = k.split(',').map(Number),
      wx = start.x + dx,
      wz = start.z + dz,
      x = wx - cx * 16,
      z = wz - cz * 16;
    if (x < 0 || x > 15 || z < 0 || z > 15) continue;
    const bottom = start.y + c.bottom,
      ground = sampler.height(wx, wz);
    // Support the existing template floor; never fill its interior or basement.
    if (BLOCKS[c.id]?.solid)
      for (let y = Math.min(ground, bottom) - 1; y < bottom; y++) {
        chunk.set(x, y, z, start.kind === 'desert_ruin' ? SANDSTONE : COBBLESTONE);
        chunk.setFluid(x, y, z, 0);
      }
    for (let y = Math.max(bottom, start.y + 1); y <= Math.max(ground + 26, start.y + c.top); y++) {
      chunk.set(x, y, z, 0);
      chunk.setFluid(x, y, z, 0);
    }
  }
  for (const [dx, dy, dz, id] of plan) {
    const x = start.x + dx - cx * 16,
      z = start.z + dz - cz * 16,
      y = start.y + dy;
    if (x < 0 || x > 15 || z < 0 || z > 15 || y < chunk.minY || y >= chunk.maxY) continue;
    chunk.set(x, y, z, id);
    chunk.setFluid(x, y, z, id === WATER ? flByte(8, true, false) : 0);
  }
}
const starts = new Map<string, StructureStart | undefined>();
export function clearVanillaStructureCache(): void {
  starts.clear();
}
export function decorateVanillaStructures(
  chunk: Chunk,
  cx: number,
  cz: number,
  seed: bigint,
  sampler: ModernFeatureSampler,
): void {
  const rx = Math.floor((cx * 16) / STRUCTURE_REGION),
    rz = Math.floor((cz * 16) / STRUCTURE_REGION),
    key = `${seed}:${rx}:${rz}`;
  if (!starts.has(key)) {
    starts.set(key, findStructureInRegion(rx, rz, seed, sampler));
    if (starts.size > 256) starts.delete(starts.keys().next().value!);
  }
  const start = starts.get(key);
  if (start && Math.abs(start.x - (cx * 16 + 8)) < 32 && Math.abs(start.z - (cz * 16 + 8)) < 32)
    stampVanillaStructure(chunk, cx, cz, start, sampler);
}
