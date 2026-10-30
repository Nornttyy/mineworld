import { afterEach, describe, expect, it, vi } from 'vitest';

const generation = vi.hoisted(() => ({ legacy: vi.fn(), modern: vi.fn() }));
vi.mock('./terrain', () => ({ generateChunk: generation.legacy, columnHeight: vi.fn() }));
vi.mock('./modernOverworld', () => ({
  generateModernChunk: generation.modern,
  modernColumnHeight: vi.fn(),
}));
import { generateChunkForWorld } from './generator';

afterEach(() => {
  vi.clearAllMocks();
});

describe('saved generator identity', () => {
  it.each([-2_000_000_000, 2_000_000_000, -123, 0, 123])(
    'never remaps a valid old seed %s',
    (seed) => {
      generateChunkForWorld(2, -3, seed, 'overworld', 'legacy');
      expect(generation.legacy).toHaveBeenCalledWith(2, -3, seed, 'overworld');
      expect(generation.modern).not.toHaveBeenCalled();
    },
  );

  it('preserves the complete signed-long seed for modern overworld generation', () => {
    generateChunkForWorld(0, 0, '-9223372036854775808', 'overworld', 'java26');
    expect(generation.modern).toHaveBeenCalledWith(0, 0, '-9223372036854775808');
    expect(generation.legacy).not.toHaveBeenCalled();
  });
});
