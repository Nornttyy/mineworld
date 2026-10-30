/** Revision 2: data-backed small-tree shapes and biome-specific surface patches.
 * Placement streams and noise-based providers are Mineworld approximations.
 * Keep this separate from revision 1: old saves must regenerate unchanged.
 */
import { XoroshiroRandom } from 'deepslate/math';
import type { Random } from 'deepslate/math';
import { Chunk } from '../world/chunk';
import { BLOCKS, GRASS_PLANT, canPlantSurvive, isCutoutId } from '../blocks/registry';
import { valueNoise2 } from '../math/noise';
import type { ModernFeatureSampler } from './modernFeatures';
import source from './data/java26-vegetation.json';

type IntProvider = number | { type: string; min?: number; max?: number; min_inclusive?: number; max_inclusive?: number; plateau?: number; distribution?: { data: IntProvider; weight: number }[] };
type StateProvider = string | { id?: string; type?: string; entries?: { data: StateProvider; weight: number }[]; states?: string[]; high_states?: string[]; low_states?: string[]; threshold?: number; high_chance?: number; default_state?: string; scale?: number; seed?: number };
type Modifier = { type: string; count?: IntProvider; chance?: number; above_noise?: number; below_noise?: number; noise_level?: number; x?: IntProvider; y?: IntProvider; z?: IntProvider };
type TreeData = { trunk_placer: { base_height: number; height_rand_a: number; height_rand_b: number }; trunk_provider: { id: string }; foliage_provider: { id: string }; foliage_placer: { type: string; radius: IntProvider; offset: IntProvider; height?: IntProvider; trunk_height?: IntProvider } };
const data = source as unknown as {
  trees: Record<string, TreeData>; tree_counts: Record<string, IntProvider>;
  placed: Record<string, { feature: string; placement: Modifier[] }>;
  features: Record<string, { to_place: StateProvider }>;
  providers: Record<string, StateProvider>; biomes: Record<string, string[]>;
};
const ids = new Map(BLOCKS.map(b => [`minecraft:${b.name}`, b.id]));
ids.set('minecraft:short_grass', GRASS_PLANT);
// Double-height meadow grass needs block-state support; use short grass until then.
ids.set('minecraft:tall_grass', GRASS_PLANT);
export type SmallTreeKind = 'oak' | 'birch' | 'spruce' | 'pine';
type IntRandom = Pick<Random, 'nextInt'>;
function weighted<T>(entries: { data: T; weight: number }[], random: IntRandom): T {
  let n = random.nextInt(entries.reduce((s, e) => s + e.weight, 0));
  for (const entry of entries) { n -= entry.weight; if (n < 0) return entry.data; }
  throw new Error('Empty vegetation distribution');
}
function integer(value: IntProvider, random: IntRandom): number {
  if (typeof value === 'number') return value;
  if (value.type === 'minecraft:weighted_list') return integer(weighted(value.distribution!, random), random);
  const min = value.min_inclusive ?? value.min!; const max = value.max_inclusive ?? value.max!;
  if (value.type === 'minecraft:uniform') return min + random.nextInt(max - min + 1);
  if (value.type === 'minecraft:trapezoid') {
    const plateau = value.plateau ?? 0; const range = max - min;
    if (plateau >= range) return min + random.nextInt(range + 1);
    const slope = Math.floor((range - plateau) / 2);
    return min + random.nextInt(range - slope + 1) + random.nextInt(slope + 1);
  }
  throw new Error(`Unsupported vegetation integer provider ${value.type}`);
}
/** Leaf offsets around the trunk attachment. Java integer division truncates toward zero. */
export function smallTreeFoliage(kind: SmallTreeKind, height: number, radius: number, offset: number, random: IntRandom): [number, number, number][] {
  const leaves: [number, number, number][] = [];
  const row = (y: number, r: number): void => {
    for (let x = -r; x <= r; x++) for (let z = -r; z <= r; z++) {
      const corner = Math.abs(x) === r && Math.abs(z) === r;
      if (kind === 'oak' || kind === 'birch') {
        if (corner && (random.nextInt(2) === 0 || y === 0)) continue;
      } else if (corner && r > 0) continue;
      leaves.push([x + 0, y, z + 0]);
    }
  };
  if (kind === 'oak' || kind === 'birch') {
    for (let y = offset; y >= offset - height; y--) row(y, Math.max(radius - 1 - Math.trunc(y / 2), 0));
  } else if (kind === 'spruce') {
    let r = random.nextInt(2); let limit = 1; let reset = 0;
    for (let y = offset; y >= -height; y--) {
      row(y, r);
      if (r >= limit) { r = reset; reset = 1; limit = Math.min(limit + 1, radius); } else r++;
    }
  } else {
    let r = 0;
    for (let y = offset; y >= offset - height; y--) {
      row(y, r);
      if (r >= 1 && y === offset - height + 1) r--;
      else if (r < radius) r++;
    }
  }
  return leaves;
}
interface Tree { x: number; y: number; z: number; height: number; log: number; leaves: number; canopy: [number, number, number][]; kind: SmallTreeKind }
export function vegetationTrees(cx: number, cz: number, seed: bigint, sampler: ModernFeatureSampler): Tree[] {
  const positional = XoroshiroRandom.create(seed).forkPositional().fromHashOf('mineworld:vegetation2/trees').forkPositional();
  const random = positional.at(cx, 0, cz);
  const centerY = sampler.height(cx * 16 + 8, cz * 16 + 8);
  const centerBiome = sampler.biome(cx * 16 + 8, cz * 16 + 8, centerY + 1);
  const plains = /:(sunflower_)?plains$/.test(centerBiome);
  const taiga = /:(snowy_)?taiga$/.test(centerBiome);
  const forest = /:(birch_forest|forest|flower_forest|old_growth_birch_forest)$/.test(centerBiome);
  if (!plains && !taiga && !forest) return [];
  const count = integer(data.tree_counts[plains ? 'trees_plains' : taiga ? 'trees_taiga' : 'trees_birch'], random);
  const trees: Tree[] = [];
  for (let i = 0; i < count; i++) {
    const x = cx * 16 + random.nextInt(16); const z = cz * 16 + random.nextInt(16);
    const ground = sampler.height(x, z); const y = ground + 1;
    if (ground < 63 || ground > 300 || sampler.biome(x, z, y) !== centerBiome) continue;
    // Reject cliff-edge roots; there is no cross-chunk mutable tree pass.
    if (Math.abs(sampler.height(x - 1, z) - ground) > 1 || Math.abs(sampler.height(x + 1, z) - ground) > 1 || Math.abs(sampler.height(x, z - 1) - ground) > 1 || Math.abs(sampler.height(x, z + 1) - ground) > 1) continue;
    const kind: SmallTreeKind = taiga ? (random.nextFloat() < 1 / 3 ? 'pine' : 'spruce') : centerBiome.includes('birch') || (!plains && random.nextFloat() < .2) ? 'birch' : 'oak';
    const feature = data.trees[kind]; const trunk = feature.trunk_placer; const foliage = feature.foliage_placer;
    const height = trunk.base_height + random.nextInt(trunk.height_rand_a + 1) + random.nextInt(trunk.height_rand_b + 1);
    const foliageHeight = kind === 'spruce' ? Math.max(4, height - integer(foliage.trunk_height!, random)) : integer(foliage.height!, random);
    const bare = height - foliageHeight;
    const radius = integer(foliage.radius, random) + (kind === 'pine' ? random.nextInt(Math.max(bare + 1, 1)) : 0);
    const offset = integer(foliage.offset, random);
    // A position-specific stream keeps border replay independent of culling.
    const canopy = smallTreeFoliage(kind, foliageHeight, radius, offset, positional.at(x, y, z));
    trees.push({ x, y, z, height, kind, log: ids.get(feature.trunk_provider.id)!, leaves: ids.get(feature.foliage_provider.id)!, canopy });
  }
  return trees;
}
function providerState(provider: StateProvider, x: number, z: number, random: Random): number {
  if (typeof provider === 'string') {
    if (ids.has(provider)) return ids.get(provider)!;
    return providerState(data.providers[provider], x, z, random);
  }
  if (provider.id) return ids.get(provider.id) ?? 0;
  if (provider.type === 'minecraft:weighted') return providerState(weighted(provider.entries!, random), x, z, random);
  // Preserve data-selected species and spatial patches, but not vanilla's noise field.
  const noise = valueNoise2(x * (provider.scale ?? .02), z * (provider.scale ?? .02), provider.seed ?? 2345);
  if (provider.type === 'minecraft:noise_threshold') {
    if (noise * 2 - 1 < provider.threshold!) {
      const states = provider.low_states!; return ids.get(states[random.nextInt(states.length)]) ?? 0;
    }
    if (random.nextFloat() >= provider.high_chance!) return ids.get(provider.default_state!) ?? 0;
    const states = provider.high_states!; return ids.get(states[random.nextInt(states.length)]) ?? 0;
  }
  const states = provider.states!;
  return ids.get(states[Math.min(states.length - 1, Math.floor(noise * states.length))]) ?? 0;
}
export function decorateVegetationV2(chunk: Chunk, cx: number, cz: number, seed: bigint, sampler: ModernFeatureSampler): void {
  const minX = cx * 16; const minZ = cz * 16;
  const inside = (x: number, y: number, z: number): boolean => x >= minX && x < minX + 16 && z >= minZ && z < minZ + 16 && y >= -64 && y < 320;
  const trees: Tree[] = [];
  for (let sx = cx - 1; sx <= cx + 1; sx++) for (let sz = cz - 1; sz <= cz + 1; sz++) trees.push(...vegetationTrees(sx, sz, seed, sampler));
  // Write all trunks first. Leaves cannot replace trunks, ores, water or terrain.
  for (const tree of trees) {
    for (let y = tree.y; y < tree.y + tree.height; y++) {
      if (!inside(tree.x, y, tree.z)) continue;
      const old = chunk.get(tree.x - minX, y, tree.z - minZ);
      if (old === 0 || isCutoutId(old)) chunk.set(tree.x - minX, y, tree.z - minZ, tree.log);
    }
  }
  for (const tree of trees) for (const [dx, dy, dz] of tree.canopy) {
    const x = tree.x + dx; const y = tree.y + tree.height + dy; const z = tree.z + dz;
    if (inside(x, y, z) && chunk.get(x - minX, y, z - minZ) === 0) chunk.set(x - minX, y, z - minZ, tree.leaves);
  }
  const positional = XoroshiroRandom.create(seed).forkPositional();
  for (let sx = cx - 1; sx <= cx + 1; sx++) for (let sz = cz - 1; sz <= cz + 1; sz++) {
    const centerY = sampler.height(sx * 16 + 8, sz * 16 + 8);
    const names = data.biomes[sampler.biome(sx * 16 + 8, sz * 16 + 8, centerY + 1)] ?? [];
    // Flowers before grass: otherwise ordinary grass could mask a complete patch.
    for (const name of [...names].sort((a, b) => Number(b.startsWith('flower')) - Number(a.startsWith('flower')))) {
      const feature = data.placed[name];
      const random = positional.fromHashOf(`mineworld:vegetation2/${name}`).forkPositional().at(sx, 0, sz);
      const visit = (step: number, x: number, y: number, z: number): void => {
        if (step === feature.placement.length) {
          if (!(data.biomes[sampler.biome(x, z, y)] ?? []).includes(name)) return;
          // Consume provider randomness even outside the target chunk, so the
          // rest of this source patch replays identically on either side.
          const id = providerState(data.features[feature.feature].to_place, x, z, random);
          if (!inside(x, y, z) || chunk.get(x - minX, y, z - minZ) !== 0) return;
          if (id && canPlantSurvive(id, chunk.get(x - minX, y - 1, z - minZ))) chunk.set(x - minX, y, z - minZ, id);
          return;
        }
        const p = feature.placement[step];
        const next = (nx = x, ny = y, nz = z): void => visit(step + 1, nx, ny, nz);
        switch (p.type) {
          case 'minecraft:count': for (let n = integer(p.count!, random); n > 0; n--) next(); break;
          case 'minecraft:noise_threshold_count': {
            const n = valueNoise2(x / 200, z / 200, 2345) * 2 - 1 < p.noise_level! ? p.below_noise! : p.above_noise!;
            for (let i = 0; i < n; i++) next(); break;
          }
          case 'minecraft:rarity_filter': if (random.nextInt(p.chance!) === 0) next(); break;
          case 'minecraft:in_square': next(x + random.nextInt(16), y, z + random.nextInt(16)); break;
          case 'minecraft:heightmap': next(x, sampler.height(x, z) + 1, z); break;
          case 'minecraft:offset': next(x + integer(p.x!, random), y + integer(p.y!, random), z + integer(p.z!, random)); break;
          case 'minecraft:biome': if ((data.biomes[sampler.biome(x, z, y)] ?? []).includes(name)) next(); break;
          case 'minecraft:block_predicate_filter': next(); break; // final air + soil test above
          default: throw new Error(`Unsupported vegetation modifier ${p.type}`);
        }
      };
      visit(0, sx * 16, 0, sz * 16);
    }
  }
}
