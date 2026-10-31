/** Official Feature.place captures; Mineworld chooses which capture to place.
 * Preserve revision 4's old silhouettes in old saves. */
import { XoroshiroRandom } from 'deepslate/math';
import source from './data/java26-tree-shapes.json';
import { architectureStateId, baseBlockId } from '../blocks/architecture';
import {
  LEAF_IDS,
  LOG_IDS,
  isCrossPlantId,
  SNOW_LAYER,
  GRASS,
  COARSE_DIRT,
  PODZOL,
  MYCELIUM,
} from '../blocks/registry';
import type { Chunk } from '../world/chunk';
import type { ModernFeatureSampler } from './modernFeatures';
import { expandedTreeKind, type FeatureBlock } from './expandedBiomes';

export interface TreeCapture {
  kind: string;
  seed: string;
  blocks: number[][];
  min: number[];
  max: number[];
}
const data = source as unknown as {
  palette: { Name: string; Properties?: Record<string, string> }[];
  samples: TreeCapture[];
};
const converted = new Map<TreeCapture, FeatureBlock[]>();
export const vanillaTreeKinds = [...new Set(data.samples.map((s) => s.kind))];
export function vanillaTreeShape(kind: string, variant = 0): FeatureBlock[] {
  const variants = data.samples.filter((s) => s.kind === kind),
    sample = variants[variant % variants.length];
  if (!sample) throw new Error(`Missing official tree capture: ${kind}`);
  let out = converted.get(sample);
  if (!out) {
    out = sample.blocks.map(([x, y, z, index]) => {
      const p = data.palette[index];
      return [x, y, z, architectureStateId(p.Name, p.Properties)] as const;
    });
    converted.set(sample, out);
  }
  return out;
}
export function vanillaTrees(
  cx: number,
  cz: number,
  seed: bigint,
  sampler: ModernFeatureSampler,
): FeatureBlock[] {
  const x0 = cx * 16,
    z0 = cz * 16,
    ground = sampler.height(x0 + 8, z0 + 8),
    biome = sampler.biome(x0 + 8, z0 + 8, ground + 1),
    kind = expandedTreeKind(biome);
  if (!kind) return [];
  const random = XoroshiroRandom.create(seed)
    .forkPositional()
    .fromHashOf('mineworld:vanilla-shapes5')
    .forkPositional()
    .at(cx, 0, cz);
  const count =
    kind === 'acacia' || kind === 'mushroom'
      ? 2
      : kind === 'dark_oak'
        ? 6
        : kind === 'jungle'
          ? 7
          : 3;
  const result: FeatureBlock[] = [];
  for (let i = 0; i < count; i++) {
    const x = x0 + random.nextInt(16),
      z = z0 + random.nextInt(16),
      y = sampler.height(x, z) + 1;
    if (y < 64 || y > 289 || expandedTreeKind(sampler.biome(x, z, y)) !== kind) continue;
    if (
      [
        [0, 1],
        [1, 0],
        [1, 1],
        [-1, 0],
        [0, -1],
      ].some(([dx, dz]) => Math.abs(sampler.height(x + dx, z + dz) + 1 - y) > 1)
    )
      continue;
    const shape =
      kind === 'mushroom'
        ? random.nextInt(2)
          ? 'red_mushroom'
          : 'brown_mushroom'
        : kind === 'pine'
          ? 'mega_spruce'
          : kind === 'swamp'
            ? 'swamp_oak'
            : kind === 'jungle' && random.nextInt(3) === 0
              ? 'mega_jungle'
              : kind === 'dark_oak' && random.nextInt(9) === 0
                ? 'brown_mushroom'
                : kind;
    for (const [dx, dy, dz, id] of vanillaTreeShape(shape, random.nextInt(4)))
      result.push([x + dx, y + dy, z + dz, id]);
  }
  return result;
}
export function decorateVanillaVegetation(
  chunk: Chunk,
  cx: number,
  cz: number,
  seed: bigint,
  sampler: ModernFeatureSampler,
): void {
  const plan: FeatureBlock[] = [];
  for (let sx = cx - 1; sx <= cx + 1; sx++)
    for (let sz = cz - 1; sz <= cz + 1; sz++) plan.push(...vanillaTrees(sx, sz, seed, sampler));
  // Soil, trunks/caps, then leaves/vines. Never modify a neighbor's mutable chunk.
  for (let pass = 0; pass < 3; pass++)
    for (const [wx, y, wz, id] of plan) {
      const x = wx - cx * 16,
        z = wz - cz * 16;
      if (x < 0 || x >= 16 || z < 0 || z >= 16 || y < chunk.minY || y >= chunk.maxY) continue;
      const base = baseBlockId(id),
        soil = [2, PODZOL, MYCELIUM].includes(base),
        leaves = LEAF_IDS.has(base);
      const expected = soil
        ? 0
        : LOG_IDS.has(base) || base === 110 || base === 111 || base === 112
          ? 1
          : 2;
      if (pass !== expected) continue;
      const old = chunk.get(x, y, z),
        oldBase = baseBlockId(old);
      if (soil) {
        if ([GRASS, 2, COARSE_DIRT, PODZOL, MYCELIUM].includes(oldBase)) chunk.set(x, y, z, id);
      } else if (
        old === 0 ||
        isCrossPlantId(oldBase) ||
        oldBase === SNOW_LAYER ||
        (!leaves && LEAF_IDS.has(oldBase))
      )
        chunk.set(x, y, z, id);
    }
}
