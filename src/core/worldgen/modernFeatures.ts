/**
 * Playable decoration for the modern terrain adapter. Ore count/height/size,
 * replacement predicates and air-discard probabilities are official 26.3 data.
 * Candidate RNG sequencing and tree shapes are Mineworld approximations, NOT
 * seed-exact Java feature placement. Source chunks are replayed in fixed order
 * so neighbouring chunks remain independent of worker completion order.
 */
import { XoroshiroRandom } from 'deepslate/math';
import type { Random } from 'deepslate/math';
import { Chunk } from '../world/chunk';
import { BLOCKS, OAK_LOG, OAK_LEAVES, SPRUCE_LOG, SPRUCE_LEAVES, BIRCH_LOG, BIRCH_LEAVES } from '../blocks/registry';
import oreData from './data/java26-ores.json';

type ObjectValue = Record<string, unknown>;
type OreFeature = { size: number; discard_chance_on_air_exposure: number; targets: {state: string; target: ObjectValue}[] };
const data = oreData as unknown as {
  placed: Record<string, {feature: string; placement: ObjectValue[]}>;
  configured: Record<string, OreFeature>;
  block_tags: Record<string, {values: string[]}>;
};
const ids = new Map(BLOCKS.map(b => [`minecraft:${b.name}`, b.id]));
const tags = new Map<string, Set<number>>();
function resolveTag(name: string): Set<number> {
  const existing = tags.get(name); if (existing) return existing;
  const result = new Set<number>(); tags.set(name, result);
  for (const value of data.block_tags[name]?.values ?? []) {
    if (value.startsWith('#')) for (const id of resolveTag(value.slice(1))) result.add(id);
    else { const id = ids.get(value); if (id !== undefined) result.add(id); }
  }
  return result;
}
export function modernOreTargetMatches(predicate: ObjectValue, id: number, y: number): boolean {
  switch (predicate.predicate_type) {
    case 'minecraft:tag_match': return resolveTag(predicate.tag as string).has(id);
    case 'minecraft:height_match': return y >= (predicate.min_inclusive as number) && y <= (predicate.max_inclusive as number);
    case 'minecraft:not': return !modernOreTargetMatches(predicate.rule as ObjectValue, id, y);
    case 'minecraft:all_of': return (predicate.rules as ObjectValue[]).every(p => modernOreTargetMatches(p, id, y));
    case 'minecraft:any_of': return (predicate.rules as ObjectValue[]).some(p => modernOreTargetMatches(p, id, y));
    default: throw new Error(`Unsupported ore predicate ${predicate.predicate_type}`);
  }
}
function anchor(obj: ObjectValue): number {
  if ('absolute' in obj) return obj.absolute as number;
  if ('above_bottom' in obj) return -64 + (obj.above_bottom as number);
  if ('below_top' in obj) return 319 - (obj.below_top as number);
  throw new Error('Unknown height anchor');
}
export function modernFeatureHeight(obj: ObjectValue, random: Random): number {
  const min = anchor(obj.min_inclusive as ObjectValue); const max = anchor(obj.max_inclusive as ObjectValue);
  const span = max - min;
  if (obj.type === 'minecraft:uniform') return min + random.nextInt(span + 1);
  if (obj.type === 'minecraft:trapezoid') {
    const plateau = (obj.plateau as number | undefined) ?? 0;
    if (plateau >= span) return min + random.nextInt(span + 1);
    const slope = Math.floor((span - plateau) / 2);
    return min + random.nextInt(span - slope + 1) + random.nextInt(slope + 1);
  }
  throw new Error(`Unsupported height provider ${obj.type}`);
}
export interface ModernFeatureSampler {
  height(x: number, z: number): number;
  biome(x: number, z: number, y: number): string;
  density(x: number, y: number, z: number): number;
}
function countValue(value: unknown, random: Random): number {
  if (typeof value === 'number') return value;
  const obj = value as ObjectValue;
  if (obj.type === 'minecraft:uniform') return (obj.min_inclusive as number) + random.nextInt((obj.max_inclusive as number) - (obj.min_inclusive as number) + 1);
  throw new Error('Unsupported feature count provider');
}

function decorateOres(chunk: Chunk, cx: number, cz: number, seed: bigint, sampler: ModernFeatureSampler): void {
  const positional = XoroshiroRandom.create(seed).forkPositional();
  const minX = cx * 16; const minZ = cz * 16;
  // An immutable copy prevents earlier veins changing exposure tests.
  const base = chunk.blocks.slice();
  const outsideAir = new Map<string, boolean>();
  const exposure = new Uint8Array(base.length); // 0 unknown, 1 enclosed, 2 exposed
  const airAt = (x: number, y: number, z: number): boolean => {
    if (x >= minX && x < minX + 16 && z >= minZ && z < minZ + 16 && y >= -64 && y < 320) {
      return base[(x - minX) + (z - minZ) * 16 + (y + 64) * 256] === 0;
    }
    const key = `${x}:${y}:${z}`;
    let value = outsideAir.get(key);
    if (value === undefined) { value = sampler.density(x, y, z) <= 0; outsideAir.set(key, value); }
    return value; // external-column aquifer state is not materialized
  };
  let featureIndex = 0;
  for (const [name, placed] of Object.entries(data.placed)) {
    const feature = data.configured[placed.feature];
    const height = placed.placement.find(p => p.type === 'minecraft:height_range')!.height as ObjectValue;
    const count = placed.placement.find(p => p.type === 'minecraft:count')?.count ?? 1;
    const rarity = placed.placement.find(p => p.type === 'minecraft:rarity_filter')?.chance as number | undefined;
    const featureRandom = positional.fromHashOf(`mineworld:26.3/ore/${name}`).forkPositional();
    const discarded = new Set<number>();
    for (let sx = cx - 1; sx <= cx + 1; sx++) for (let sz = cz - 1; sz <= cz + 1; sz++) {
      const random = featureRandom.at(sx, featureIndex, sz);
      const attempts = countValue(count, random);
      for (let attempt = 0; attempt < attempts; attempt++) {
        if (rarity && random.nextInt(rarity) !== 0) continue;
        const x = sx * 16 + random.nextInt(16); const z = sz * 16 + random.nextInt(16);
        const y = modernFeatureHeight(height, random);
        const angle = random.nextFloat() * Math.PI; const length = feature.size / 8;
        const dx = Math.sin(angle) * length; const dz = Math.cos(angle) * length;
        const y0 = y + random.nextInt(3) - 2; const y1 = y + random.nextInt(3) - 2;
        const maxRadius = (feature.size / 8 + 1) / 2;
        const intersects = x + Math.abs(dx) + maxRadius >= minX && x - Math.abs(dx) - maxRadius < minX + 16
          && z + Math.abs(dz) + maxRadius >= minZ && z - Math.abs(dz) - maxRadius < minZ + 16
          && Math.max(y0, y1) + maxRadius >= -64 && Math.min(y0, y1) - maxRadius < 320;
        const ellipsoids: number[][] = [];
        for (let step = 0; step < feature.size; step++) {
          const t = step / feature.size;
          const roll = random.nextDouble(); // preserve the sequence even when culled
          if (!intersects) continue;
          const radius = ((Math.sin(Math.PI * t) + 1) * roll * feature.size / 16 + 1) / 2;
          ellipsoids.push([x + dx * (1 - 2 * t), y0 + (y1 - y0) * t, z + dz * (1 - 2 * t), radius]);
        }
        for (const [vx, vy, vz, radius] of ellipsoids) {
          if (vx + radius < minX || vx - radius >= minX + 16 || vz + radius < minZ || vz - radius >= minZ + 16) continue;
          for (let wx = Math.max(minX, Math.floor(vx - radius)); wx <= Math.min(minX + 15, Math.floor(vx + radius)); wx++) {
            for (let wz = Math.max(minZ, Math.floor(vz - radius)); wz <= Math.min(minZ + 15, Math.floor(vz + radius)); wz++) {
              for (let wy = Math.max(-64, Math.floor(vy - radius)); wy <= Math.min(319, Math.floor(vy + radius)); wy++) {
                if (((wx + .5 - vx) ** 2 + (wy + .5 - vy) ** 2 + (wz + .5 - vz) ** 2) >= radius * radius) continue;
                const index = (wx - minX) + (wz - minZ) * 16 + (wy + 64) * 256;
                if (discarded.has(index)) continue;
                const existing = chunk.get(wx - minX, wy, wz - minZ);
                const target = feature.targets.find(t => modernOreTargetMatches(t.target, existing, wy));
                if (!target) continue;
                if (feature.discard_chance_on_air_exposure > 0 && exposure[index] === 0) {
                  exposure[index] = (airAt(wx - 1, wy, wz) || airAt(wx + 1, wy, wz) || airAt(wx, wy - 1, wz) || airAt(wx, wy + 1, wz) || airAt(wx, wy, wz - 1) || airAt(wx, wy, wz + 1)) ? 2 : 1;
                }
                if (exposure[index] === 2 && feature.discard_chance_on_air_exposure > 0 && featureRandom.at(wx, wy, wz).nextFloat() < feature.discard_chance_on_air_exposure) {
                  discarded.add(index); continue;
                }
                chunk.set(wx - minX, wy, wz - minZ, ids.get(target.state)!);
              }
            }
          }
        }
      }
    }
    featureIndex++;
  }
}

export interface ModernTreeCandidate { x: number; y: number; z: number; height: number; log: number; leaves: number }
/** Procedural stand-in until full Java configured-tree features are supported. */
export function modernTreeCandidates(sourceCx: number, sourceCz: number, seed: bigint, sampler: ModernFeatureSampler): ModernTreeCandidate[] {
  const random = XoroshiroRandom.create(seed).forkPositional().fromHashOf('mineworld:26.3/trees').forkPositional().at(sourceCx, 0, sourceCz);
  const trees: ModernTreeCandidate[] = [];
  for (let cellX = 0; cellX < 2; cellX++) for (let cellZ = 0; cellZ < 2; cellZ++) {
    const x = sourceCx * 16 + cellX * 8 + random.nextInt(8); const z = sourceCz * 16 + cellZ * 8 + random.nextInt(8);
    const y = sampler.height(x, z); const biome = sampler.biome(x, z, y + 1);
    const roll = random.nextFloat(); const heightRoll = random.nextInt(3);
    const forest = /forest|taiga|grove/.test(biome) && !/pale|mangrove|cherry/.test(biome);
    const plain = biome === 'minecraft:plains' || biome === 'minecraft:sunflower_plains';
    if ((!forest && !plain) || roll > (forest ? .85 : .06) || y < 63 || y > 250) continue;
    if (Math.abs(sampler.height(x - 2, z) - y) > 2 || Math.abs(sampler.height(x + 2, z) - y) > 2 || Math.abs(sampler.height(x, z - 2) - y) > 2 || Math.abs(sampler.height(x, z + 2) - y) > 2) continue;
    const spruce = /taiga|grove/.test(biome); const birch = /birch/.test(biome) || (!spruce && roll < .15);
    trees.push({ x, y: y + 1, z, height: (spruce ? 7 : birch ? 5 : 4) + heightRoll,
      log: spruce ? SPRUCE_LOG : birch ? BIRCH_LOG : OAK_LOG,
      leaves: spruce ? SPRUCE_LEAVES : birch ? BIRCH_LEAVES : OAK_LEAVES });
  }
  return trees;
}
function decorateTrees(chunk: Chunk, cx: number, cz: number, seed: bigint, sampler: ModernFeatureSampler): void {
  const minX = cx * 16; const minZ = cz * 16;
  const set = (x: number, y: number, z: number, id: number, trunk = false): void => {
    const lx = x - minX; const lz = z - minZ;
    if (lx < 0 || lx > 15 || lz < 0 || lz > 15 || y < -64 || y > 319) return;
    const old = chunk.get(lx, y, lz);
    if (old === 0 || (trunk && [OAK_LEAVES, BIRCH_LEAVES, SPRUCE_LEAVES].includes(old))) chunk.set(lx, y, lz, id);
  };
  for (let sx = cx - 1; sx <= cx + 1; sx++) for (let sz = cz - 1; sz <= cz + 1; sz++) {
    for (const tree of modernTreeCandidates(sx, sz, seed, sampler)) {
      const top = tree.y + tree.height;
      if (tree.log === SPRUCE_LOG) {
        for (let y = tree.y + 2; y <= top; y++) {
          const r = Math.min(2, Math.floor((top - y + 1) / 2));
          for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) if (Math.abs(dx) + Math.abs(dz) <= r + 1) set(tree.x + dx, y, tree.z + dz, tree.leaves);
        }
      } else {
        for (let y = top - 3; y <= top; y++) {
          const r = y >= top - 1 ? 1 : 2;
          for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) if (!(Math.abs(dx) === r && Math.abs(dz) === r)) set(tree.x + dx, y, tree.z + dz, tree.leaves);
        }
      }
      for (let y = tree.y; y < top; y++) set(tree.x, y, tree.z, tree.log, true);
    }
  }
}
export function decorateModernFeatures(chunk: Chunk, cx: number, cz: number, seed: bigint, sampler: ModernFeatureSampler): void {
  decorateOres(chunk, cx, cz, seed, sampler);
  decorateTrees(chunk, cx, cz, seed, sampler);
}
