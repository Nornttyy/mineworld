import { generateChunk, columnHeight } from './terrain';
import { generateModernChunk, modernColumnHeight } from './modernOverworld';
import type { GeneratorVersion } from '../world/worldBounds';
import type { Chunk } from '../world/chunk';

export function generateChunkForWorld(cx: number, cz: number, seed: number | string, dimension: 'overworld' | 'nether' = 'overworld', generator: GeneratorVersion = 'legacy'): Chunk {
  return generator === 'java26' && dimension === 'overworld'
    ? generateModernChunk(cx, cz, seed)
    : generateChunk(cx, cz, generator === 'legacy' ? Number(seed) : Number(BigInt(seed) % 2_000_000_000n), dimension);
}

export function surfaceHeightForWorld(x: number, z: number, seed: number | string, generator: GeneratorVersion = 'legacy'): number {
  return generator === 'java26' ? modernColumnHeight(x, z, seed) : columnHeight(x, z, Number(seed));
}
