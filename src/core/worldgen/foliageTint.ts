import { baseBlockId } from '../blocks/architecture';
import grassColors from './data/java26-grass-colors.json';
import colors from './data/java26-foliage-colors.json';
import { BLOCKS, BIRCH_LEAVES, SPRUCE_LEAVES, CHERRY_LEAVES, LEAF_IDS } from '../blocks/registry';
import { biomeAt } from './biome';
import { modernBiomeAt, modernSeed } from './modernOverworld';
import { createBiomeZoom } from './biomeZoom';
import { isModernGenerator, type GeneratorVersion } from '../world/worldBounds';

export type FoliageTint = readonly [number, number, number];
export const linearChannel = (v: number): number =>
  v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
export const colorToLinear = (color: number): FoliageTint => [
  linearChannel(((color >> 16) & 255) / 255),
  linearChannel(((color >> 8) & 255) / 255),
  linearChannel((color & 255) / 255),
];
export const isGrassTint = (id:number):boolean => /^(grass|grass_block|grass_plant|short_grass|large_fern|fern)$/.test(BLOCKS[baseBlockId(id)]?.name??'');
export const defaultLeafTint = (id: number): FoliageTint =>
  id>=113 && isGrassTint(id) ? colorToLinear(0x91bd59) : BLOCKS[baseBlockId(id)]?.name==='vine' ? colorToLinear(0x77ab2f) : colorToLinear(!LEAF_IDS.has(baseBlockId(id)) || baseBlockId(id) === CHERRY_LEAVES ? 0xffffff : baseBlockId(id) === SPRUCE_LEAVES ? 0x619961 : baseBlockId(id) === BIRCH_LEAVES ? 0x80a755 : 0x77ab2f);
export type FoliageSampler = (id: number, x: number, y: number, z: number) => FoliageTint;
interface Source {
  seed: number;
  seed64?: string;
  generator: GeneratorVersion;
  dimension?: string;
}
/** Cache lifetime is one mesh job. Biomes use Java's block zoom and default radius-2 tint blending. */
export function createFoliageSampler(source: Source): FoliageSampler {
  const seed = source.seed64 ?? source.seed;
  const modern = isModernGenerator(source.generator) && source.dimension !== 'nether';
  const zoom = modern
    ? createBiomeZoom(modernSeed(seed), (x, y, z) => modernBiomeAt(x * 4, z * 4, seed, y * 4))
    : null;
  const sampled = new Map<string, number>();
  const blended = new Map<string, FoliageTint>();
  const at = (x: number, y: number, z: number, grass=false): number => {
    const key = `${grass}:${x},${y},${z}`;
    let v = sampled.get(key);
    if (v !== undefined) return v;
    const legacy = () => {
      const b = biomeAt(x, z, source.seed);
      return b === 'snow' ? 'taiga' : b;
    };
    const biome = zoom ? zoom(x, y, z) : `minecraft:${legacy()}`;
    v = ((grass?grassColors:colors) as Record<string, number>)[biome] ?? 0x77ab2f;
    sampled.set(key, v);
    return v;
  };
  return (id, x, y, z) => {
    const grass=id>=113 && isGrassTint(id);
    id = baseBlockId(id);
    if ((!grass && !LEAF_IDS.has(id) && BLOCKS[id]?.name !== 'vine') || id === CHERRY_LEAVES || id === SPRUCE_LEAVES || id === BIRCH_LEAVES)
      return id === SPRUCE_LEAVES || id === BIRCH_LEAVES ? defaultLeafTint(id) : [1, 1, 1];
    const key = `${grass}:${x},${y},${z}`;
    const cached = blended.get(key);
    if (cached) return cached;
    let r = 0,
      g = 0,
      b = 0;
    for (let dx = -2; dx <= 2; dx++)
      for (let dz = -2; dz <= 2; dz++) {
        const c = at(x + dx, y, z + dz,grass);
        r += (c >> 16) & 255;
        g += (c >> 8) & 255;
        b += c & 255;
      }
    const result = colorToLinear(
      (Math.floor(r / 25) << 16) | (Math.floor(g / 25) << 8) | Math.floor(b / 25),
    );
    blended.set(key, result);
    return result;
  };
}
