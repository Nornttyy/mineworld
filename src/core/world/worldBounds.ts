/** Generator identity is persisted: never regenerate an existing save with a different algorithm. */
export type GeneratorVersion = 'legacy' | 'java26' | 'java26v2' | 'java26v3' | 'java26v4' | 'java26v5';
export const isModernGenerator = (value: unknown): value is 'java26' | 'java26v2' | 'java26v3' | 'java26v4' | 'java26v5' => value === 'java26' || value === 'java26v2' || value === 'java26v3' || value === 'java26v4' || value === 'java26v5';
export const isGeneratorVersion = (value: unknown): value is GeneratorVersion => value === 'legacy' || isModernGenerator(value);
export interface WorldBounds { minY: number; height: number; maxY: number; seaLevel: number }

export function worldBounds(generator: GeneratorVersion = 'legacy', dimension: 'overworld' | 'nether' = 'overworld'): WorldBounds {
  if (isModernGenerator(generator) && dimension === 'overworld') {
    return { minY: -64, height: 384, maxY: 320, seaLevel: 63 };
  }
  return { minY: 0, height: 192, maxY: 192, seaLevel: dimension === 'nether' ? 31 : 116 };
}

export function isJavaSeed(value: unknown): value is string {
  if (typeof value !== 'string' || !/^-?\d{1,20}$/.test(value)) return false;
  const seed = BigInt(value);
  return seed >= -(1n << 63n) && seed < (1n << 63n);
}

/** Java uses a signed long for numeric seeds and signed String.hashCode for text seeds. */
export function parseJavaSeed(input: string): string | undefined {
  const value = input.trim();
  if (!value) return undefined;
  if (/^[+-]?\d+$/.test(value)) {
    try {
      const seed = BigInt(value);
      if (seed >= -(1n << 63n) && seed < (1n << 63n)) return seed.toString();
    } catch { /* Numeric overflow follows Java's text-seed path. */ }
  }
  let hash = 0;
  for (let i = 0; i < value.length; i++) hash = (Math.imul(hash, 31) + value.charCodeAt(i)) | 0;
  return String(hash);
}
