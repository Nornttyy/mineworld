/** Revision 4 decorations. Hand-authored silhouettes and deterministic placement;
 * not Java's feature RNG. Replay immutable plans to keep chunk borders seamless. */
import { XoroshiroRandom } from 'deepslate/math';
import * as B from '../blocks/registry';
import type { Chunk } from '../world/chunk';
import type { ModernFeatureSampler } from './modernFeatures';

export type ExpandedTree =
  | 'acacia'
  | 'jungle'
  | 'dark_oak'
  | 'cherry'
  | 'mushroom'
  | 'pine'
  | 'swamp';
export type FeatureBlock = readonly [x: number, y: number, z: number, id: number];
export function expandedTreeKind(biome: string): ExpandedTree | undefined {
  if (biome.includes('savanna')) return 'acacia';
  if (biome.includes('jungle')) return 'jungle';
  if (biome.endsWith(':dark_forest')) return 'dark_oak';
  if (biome.endsWith(':cherry_grove')) return 'cherry';
  if (biome.endsWith(':mushroom_fields')) return 'mushroom';
  if (/:(old_growth_.*taiga|grove)$/.test(biome)) return 'pine';
  if (biome.endsWith(':swamp')) return 'swamp';
  return undefined;
}

/** Coordinates are relative to the first trunk block, never to a chunk. */
export function planExpandedTree(kind: ExpandedTree, seed: bigint): FeatureBlock[] {
  const rng = XoroshiroRandom.create(seed);
  const blocks = new Map<string, FeatureBlock>();
  const put = (x: number, y: number, z: number, id: number) =>
    blocks.set(`${x},${y},${z}`, [x, y, z, id]);
  const trunk = (x: number, z: number, h: number, id: number, width = 1) => {
    for (let y = 0; y < h; y++)
      for (let dx = 0; dx < width; dx++)
        for (let dz = 0; dz < width; dz++) put(x + dx, y, z + dz, id);
  };
  const crown = (x: number, y: number, z: number, r: number, id: number) => {
    for (let dx = -r; dx <= r; dx++)
      for (let dz = -r; dz <= r; dz++) {
        if (r > 0 && Math.abs(dx) === r && Math.abs(dz) === r) continue;
        if (!blocks.has(`${x + dx},${y},${z + dz}`)) put(x + dx, y, z + dz, id);
      }
  };
  if (kind === 'acacia') {
    const h = 5 + rng.nextInt(3),
      s = rng.nextInt(2) * 2 - 1;
    trunk(0, 0, h - 2, B.ACACIA_LOG);
    put(s, h - 3, 0, B.ACACIA_LOG);
    put(s, h - 2, 0, B.ACACIA_LOG);
    put(s * 2, h - 2, 0, B.ACACIA_LOG);
    put(s * 2, h - 1, 0, B.ACACIA_LOG);
    crown(s * 2, h, 0, 3, B.ACACIA_LEAVES);
    crown(s * 2, h + 1, 0, 2, B.ACACIA_LEAVES);
    put(-s, h - 3, 0, B.ACACIA_LOG);
    crown(-s, h - 2, 0, 2, B.ACACIA_LEAVES);
  } else if (kind === 'jungle') {
    const big = rng.nextInt(3) === 0,
      h = (big ? 13 : 7) + rng.nextInt(5),
      w = big ? 2 : 1;
    trunk(0, 0, h, B.JUNGLE_LOG, w);
    crown(0, h - 1, 0, big ? 4 : 3, B.JUNGLE_LEAVES);
    crown(0, h, 0, 3, B.JUNGLE_LEAVES);
    crown(0, h + 1, 0, 2, B.JUNGLE_LEAVES);
    if (big)
      for (const s of [-1, 1]) {
        for (let n = 1; n <= 3; n++) {
          put(s * n, h - 5 + Math.floor(n / 2), 0, B.JUNGLE_LOG);
          if (n === 2) put(s * n, h - 5, 0, B.JUNGLE_LOG);
        }
        crown(s * 3, h - 3, 0, 2, B.JUNGLE_LEAVES);
        crown(s * 3, h - 2, 0, 1, B.JUNGLE_LEAVES);
      }
  } else if (kind === 'dark_oak') {
    const h = 6 + rng.nextInt(3);
    trunk(0, 0, h, B.DARK_OAK_LOG, 2);
    for (let y = h - 2; y <= h; y++) crown(0, y, 0, y === h ? 3 : 4, B.DARK_OAK_LEAVES);
    crown(0, h + 1, 0, 2, B.DARK_OAK_LEAVES);
  } else if (kind === 'cherry') {
    const h = 5 + rng.nextInt(2);
    trunk(0, 0, h, B.CHERRY_LOG);
    for (const s of [-1, 1]) {
      for (let n = 1; n <= 3; n++) {
        put(s * n, h - 2 + Math.floor(n / 2), 0, B.CHERRY_LOG);
        if (n === 2) put(s * n, h - 2, 0, B.CHERRY_LOG);
      }
      const dz = s > 0 ? 1 : -1;
      crown(s * 2, h, dz, s > 0 ? 3 : 2, B.CHERRY_LEAVES);
      crown(s * 2, h + 1, dz, 2, B.CHERRY_LEAVES);
      crown(s * 2, h - 1, dz, 2, B.CHERRY_LEAVES);
      put(s * 4, h - 2, dz, B.CHERRY_LEAVES);
    }
  } else if (kind === 'mushroom') {
    const red = rng.nextInt(2) === 0,
      h = 4 + rng.nextInt(3);
    trunk(0, 0, h, B.MUSHROOM_STEM);
    const id = red ? B.RED_MUSHROOM_BLOCK : B.BROWN_MUSHROOM_BLOCK;
    crown(0, h, 0, red ? 2 : 3, id);
    if (red)
      for (let y = h - 2; y < h; y++)
        for (let dx = -2; dx <= 2; dx++)
          for (let dz = -2; dz <= 2; dz++)
            if ((Math.abs(dx) === 2) !== (Math.abs(dz) === 2)) put(dx, y, dz, id);
  } else if (kind === 'pine') {
    const h = 12 + rng.nextInt(7);
    trunk(0, 0, h, B.SPRUCE_LOG, 2);
    for (let y = h - 8; y <= h + 1; y++)
      for (const x of [0, 1])
        for (const z of [0, 1])
          crown(x, y, z, Math.max(0, Math.min(3, Math.floor((h + 1 - y) / 2))), B.SPRUCE_LEAVES);
  } else {
    const h = 5 + rng.nextInt(3);
    trunk(0, 0, h, B.OAK_LOG);
    for (let y = h - 2; y <= h + 1; y++) crown(0, y, 0, y > h - 1 ? 2 : 3, B.OAK_LEAVES);
  }
  const rotation = rng.nextInt(4);
  return [...blocks.values()].map(
    ([x, y, z, id]): FeatureBlock =>
      rotation === 0
        ? [x, y, z, id]
        : rotation === 1
          ? [-z, y, x, id]
          : rotation === 2
            ? [-x, y, -z, id]
            : [z, y, -x, id],
  );
}

export function expandedTrees(
  cx: number,
  cz: number,
  seed: bigint,
  sampler: ModernFeatureSampler,
): FeatureBlock[] {
  const x0 = cx * 16,
    z0 = cz * 16,
    y0 = sampler.height(x0 + 8, z0 + 8);
  const biome = sampler.biome(x0 + 8, z0 + 8, y0 + 1),
    kind = expandedTreeKind(biome);
  if (!kind) return [];
  const random = XoroshiroRandom.create(seed)
    .forkPositional()
    .fromHashOf('mineworld:biomes4')
    .forkPositional()
    .at(cx, 0, cz);
  const count =
    kind === 'acacia'
      ? 2
      : kind === 'mushroom'
        ? 2
        : kind === 'jungle'
          ? 9
          : kind === 'dark_oak'
            ? 7
            : 4;
  const out: FeatureBlock[] = [];
  for (let n = 0; n < count; n++) {
    const x = x0 + random.nextInt(16),
      z = z0 + random.nextInt(16),
      y = sampler.height(x, z) + 1;
    if (y < 64 || y > 292 || expandedTreeKind(sampler.biome(x, z, y)) !== kind) continue;
    if (
      Math.abs(sampler.height(x - 1, z) - y + 1) > 1 ||
      Math.abs(sampler.height(x + 1, z + 1) - y + 1) > 1
    )
      continue;
    const shape = kind === 'dark_oak' && random.nextInt(9) === 0 ? 'mushroom' : kind;
    for (const [dx, dy, dz, id] of planExpandedTree(shape, random.nextLong()))
      out.push([x + dx, y + dy, z + dz, id]);
  }
  return out;
}

export function decorateExpandedBiomes(
  chunk: Chunk,
  cx: number,
  cz: number,
  seed: bigint,
  sampler: ModernFeatureSampler,
): void {
  const plans: FeatureBlock[] = [];
  for (let sx = cx - 1; sx <= cx + 1; sx++)
    for (let sz = cz - 1; sz <= cz + 1; sz++) plans.push(...expandedTrees(sx, sz, seed, sampler));
  // Trunks first, then foliage. No mutable neighboring chunk reads.
  for (const leaves of [false, true])
    for (const [x, y, z, id] of plans) {
      if (
        B.LEAF_IDS.has(id) !== leaves ||
        x < cx * 16 ||
        x >= cx * 16 + 16 ||
        z < cz * 16 ||
        z >= cz * 16 + 16
      )
        continue;
      const lx = x - cx * 16,
        lz = z - cz * 16,
        old = chunk.get(lx, y, lz);
      if (
        old === 0 ||
        B.isCrossPlantId(old) ||
        old === B.SNOW_LAYER ||
        (!leaves && B.LEAF_IDS.has(old))
      )
        chunk.set(lx, y, lz, id);
    }
}
