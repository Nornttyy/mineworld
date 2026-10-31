/** Mineworld revision 4 structures: original templates, not Java jigsaw/NBT placement. */
import { XoroshiroRandom } from 'deepslate/math';
import * as B from '../blocks/registry';
import { flByte, type Chunk } from '../world/chunk';
import type { ModernFeatureSampler } from './modernFeatures';
import type { FeatureBlock } from './expandedBiomes';

export type StructureKind = 'village' | 'desert_ruin' | 'stone_tower' | 'igloo';
export interface StructureStart {
  kind: StructureKind;
  x: number;
  y: number;
  z: number;
  biome: string;
}
export const STRUCTURE_REGION = 160;
export function structureForBiome(biome: string): StructureKind | undefined {
  if (/:(plains|sunflower_plains|savanna|taiga)$/.test(biome)) return 'village';
  if (biome === 'minecraft:desert') return 'desert_ruin';
  if (/:(forest|birch_forest|dark_forest|cherry_grove|flower_forest)$/.test(biome))
    return 'stone_tower';
  if (/:(snowy_plains|snowy_taiga)$/.test(biome)) return 'igloo';
  return undefined;
}

export function findStructureInRegion(
  rx: number,
  rz: number,
  seed: bigint,
  sampler: ModernFeatureSampler,
): StructureStart | undefined {
  const random = XoroshiroRandom.create(seed)
    .forkPositional()
    .fromHashOf('mineworld:structures4')
    .forkPositional()
    .at(rx, 0, rz);
  for (let attempt = 0; attempt < 5; attempt++) {
    const x = rx * STRUCTURE_REGION + 24 + random.nextInt(STRUCTURE_REGION - 48);
    const z = rz * STRUCTURE_REGION + 24 + random.nextInt(STRUCTURE_REGION - 48);
    const ground = sampler.height(x, z),
      biome = sampler.biome(x, z, ground + 1),
      kind = structureForBiome(biome);
    if (!kind || ground < 64 || ground > 220) continue;
    const r = kind === 'village' ? 15 : kind === 'desert_ruin' ? 9 : 7,
      heights: number[] = [];
    let valid = true;
    for (let dx = -r; dx <= r && valid; dx += 3)
      for (let dz = -r; dz <= r; dz += 3) {
        const h = sampler.height(x + dx, z + dz);
        if (
          h < 63 ||
          Math.abs(h - ground) > 3 ||
          !structureForBiome(sampler.biome(x + dx, z + dz, h + 1))
        ) {
          valid = false;
          break;
        }
        heights.push(h);
      }
    if (valid && Math.max(...heights) - Math.min(...heights) <= 4)
      return { kind, x, y: ground, z, biome };
  }
  return undefined;
}

/** Includes explicit air for doors/windows/interiors. y=0 is the finished floor. */
export function planStructure(kind: StructureKind, biome = 'minecraft:plains'): FeatureBlock[] {
  const blocks = new Map<string, FeatureBlock>();
  const put = (x: number, y: number, z: number, id: number) =>
    blocks.set(`${x},${y},${z}`, [x, y, z, id]);
  const box = (
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number,
    id: number,
  ) => {
    for (let x = x1; x <= x2; x++)
      for (let y = y1; y <= y2; y++) for (let z = z1; z <= z2; z++) put(x, y, z, id);
  };
  if (kind === 'village') {
    const acacia = biome.endsWith(':savanna'),
      wood = acacia ? B.ACACIA_PLANKS : B.OAK_PLANKS,
      log = acacia ? B.ACACIA_LOG : biome.endsWith(':taiga') ? B.SPRUCE_LOG : B.OAK_LOG;
    box(-12, 0, -1, 12, 0, 1, B.COARSE_DIRT);
    box(-1, 0, -12, 1, 0, 12, B.COARSE_DIRT);
    const house = (ox: number, oz: number, work: number) => {
      box(ox - 3, 0, oz - 3, ox + 3, 0, oz + 3, B.COBBLESTONE);
      box(ox - 2, 1, oz - 2, ox + 2, 3, oz + 2, wood);
      box(ox - 1, 1, oz - 1, ox + 1, 3, oz + 1, 0);
      for (const dx of [-2, 2])
        for (const dz of [-2, 2]) box(ox + dx, 1, oz + dz, ox + dx, 3, oz + dz, log);
      // Open entrance faces the central lane. Paths meet every threshold.
      const sign = oz > 0 ? -1 : 1;
      box(ox, 1, oz + sign * 2, ox, 2, oz + sign * 2, 0);
      box(
        ox - 1,
        0,
        Math.min(oz + sign * 3, 0),
        ox + 1,
        0,
        Math.max(oz + sign * 3, 0),
        B.COARSE_DIRT,
      );
      put(ox - 2, 2, oz, 0);
      put(ox + 2, 2, oz, 0);
      put(ox, 2, oz - sign * 2, 0);
      for (let layer = 0; layer < 3; layer++)
        box(ox - 3 + layer, 4 + layer, oz - 3, ox + 3 - layer, 4 + layer, oz + 3, wood);
      put(ox + 1, 1, oz + sign, work);
      put(ox - 1, 1, oz - sign, B.TORCH);
    };
    house(-8, -7, B.CRAFTING_TABLE);
    house(8, -7, B.FURNACE);
    house(8, 7, B.CRAFTING_TABLE);
    box(-2, 0, -2, 2, 0, 2, B.COBBLESTONE);
    box(-1, 0, -1, 1, 0, 1, B.WATER);
    for (const dx of [-2, 2]) for (const dz of [-2, 2]) box(dx, 1, dz, dx, 3, dz, log);
    box(-3, 4, -3, 3, 4, 3, wood);
    put(0, 5, 0, B.TORCH);
  } else if (kind === 'desert_ruin') {
    box(-7, 0, -7, 7, 0, 7, B.SANDSTONE);
    box(-5, 1, -5, 5, 4, 5, B.SANDSTONE);
    box(-4, 1, -4, 4, 3, 4, 0);
    box(-1, 1, 4, 1, 2, 5, 0);
    box(-1, 0, 6, 1, 0, 9, B.SANDSTONE);
    box(-4, 5, -4, 4, 5, 4, B.SANDSTONE);
    box(-3, 6, -3, 3, 6, 3, B.SANDSTONE);
    box(-2, 7, -2, 2, 7, 2, B.SANDSTONE);
    for (const x of [-6, 6]) {
      box(x - 1, 1, -6, x + 1, 7, -4, B.SANDSTONE);
      box(x - 1, 8, -6, x + 1, 8, -4, B.ORANGE_TERRACOTTA);
      for (let y = 2; y <= 5; y++) put(x, y, -4, B.ORANGE_TERRACOTTA);
      put(x, 4, -4, B.BLUE_TERRACOTTA);
    }
    for (let x = -2; x <= 2; x++)
      for (let z = -2; z <= 2; z++)
        if (Math.abs(x) + Math.abs(z) <= 2) put(x, 0, z, B.ORANGE_TERRACOTTA);
    put(0, 0, 0, B.BLUE_TERRACOTTA);
    put(-3, 1, -3, B.TORCH);
    put(3, 1, -3, B.TORCH);
    put(0, 1, -3, B.CRAFTING_TABLE);
  } else if (kind === 'stone_tower') {
    box(-3, 0, -3, 3, 9, 3, B.COBBLESTONE);
    box(-2, 1, -2, 2, 8, 2, 0);
    for (let y = 1; y < 9; y += 2) {
      put(-3, y, 1, B.MOSSY_COBBLESTONE);
      put(3, y, -1, B.MOSSY_COBBLESTONE);
    }
    box(0, 1, -3, 0, 2, -3, 0);
    box(-1, 0, -5, 1, 0, -4, B.MOSSY_COBBLESTONE);
    for (const y of [4, 7]) {
      put(-3, y, 0, 0);
      put(3, y, 0, 0);
      put(0, y, 3, 0);
    }
    const steps = [
      [0, -2],
      [1, -2],
      [2, -2],
      [2, -1],
      [2, 0],
      [2, 1],
      [2, 2],
      [1, 2],
      [0, 2],
    ];
    steps.forEach(([x, z], i) => {
      box(x, 1, z, x, i + 1, z, B.COBBLESTONE);
      box(x, i + 2, z, x, i + 3, z, 0);
    });
    for (let n = -3; n <= 3; n += 2)
      for (const edge of [-3, 3]) {
        put(n, 10, edge, B.MOSSY_COBBLESTONE);
        put(edge, 10, n, B.MOSSY_COBBLESTONE);
      }
    put(-2, 1, 1, B.TORCH);
    put(-1, 1, 2, B.FURNACE);
    put(-2, 10, -2, B.TORCH);
  } else {
    box(-4, 0, -4, 4, 0, 4, B.SNOW_BLOCK);
    for (let y = 1; y <= 4; y++) {
      const r = y < 3 ? 4 : y === 3 ? 3 : 2;
      for (let x = -r; x <= r; x++)
        for (let z = -r; z <= r; z++) {
          if (x * x + z * z > r * r + 2) continue;
          put(x, y, z, y === 4 || x * x + z * z > (r - 1) * (r - 1) ? B.SNOW_BLOCK : 0);
        }
    }
    box(-1, 0, 3, 1, 3, 6, B.SNOW_BLOCK);
    box(0, 1, 3, 0, 2, 6, 0);
    put(-2, 1, -1, B.CRAFTING_TABLE);
    put(2, 1, -1, B.FURNACE);
    put(0, 1, -2, B.TORCH);
  }
  return [...blocks.values()];
}

export function stampStructure(
  chunk: Chunk,
  cx: number,
  cz: number,
  start: StructureStart,
  sampler: ModernFeatureSampler,
): void {
  const plan = planStructure(start.kind, start.biome),
    x0 = cx * 16,
    z0 = cz * 16;
  const columns = new Set<string>();
  for (const [dx, dy, dz] of plan) if (dy === 0) columns.add(`${dx},${dz}`);
  for (const column of columns) {
    const [dx, dz] = column.split(',').map(Number),
      x = start.x + dx - x0,
      z = start.z + dz - z0;
    if (x < 0 || x > 15 || z < 0 || z > 15) continue;
    const ground = sampler.height(x + x0, z + z0);
    for (let y = Math.min(ground, start.y) - 2; y <= start.y + 24; y++) {
      chunk.set(x, y, z, y < start.y ? B.COBBLESTONE : 0);
      chunk.setFluid(x, y, z, 0);
    }
  }
  for (const [dx, dy, dz, id] of plan) {
    const x = start.x + dx - x0,
      z = start.z + dz - z0,
      y = start.y + dy;
    if (x < 0 || x > 15 || z < 0 || z > 15) continue;
    chunk.set(x, y, z, id);
    chunk.setFluid(x, y, z, id === B.WATER ? flByte(8, true, false) : 0);
  }
}

const starts = new Map<string, StructureStart | undefined>();
export function clearStructureCache(): void {
  starts.clear();
}
export function decorateStructures(
  chunk: Chunk,
  cx: number,
  cz: number,
  seed: bigint,
  sampler: ModernFeatureSampler,
): void {
  // Candidates have a 24-block region margin; every template fits inside it.
  const rx = Math.floor((cx * 16) / STRUCTURE_REGION),
    rz = Math.floor((cz * 16) / STRUCTURE_REGION),
    key = `${seed}:${rx}:${rz}`;
  if (!starts.has(key)) {
    starts.set(key, findStructureInRegion(rx, rz, seed, sampler));
    if (starts.size > 256) starts.delete(starts.keys().next().value!);
  }
  const start = starts.get(key);
  if (start && Math.abs(start.x - (cx * 16 + 8)) < 25 && Math.abs(start.z - (cz * 16 + 8)) < 25)
    stampStructure(chunk, cx, cz, start, sampler);
}
