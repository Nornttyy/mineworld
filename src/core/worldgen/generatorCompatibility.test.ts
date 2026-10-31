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
  it('uses official structure shapes only in revision 5 worlds',()=>{generateChunkForWorld(1,-2,'42','overworld','java26v5');expect(generation.modern).toHaveBeenCalledWith(1,-2,'42',5);});
  it('selects biome and structure expansion only for revision 4 worlds', () => {
    generateChunkForWorld(1, -2, '42', 'overworld', 'java26v4');
    expect(generation.modern).toHaveBeenCalledWith(1, -2, '42', 4);
  });
  it('selects audited terrain only for revision 3 worlds', () => {
    generateChunkForWorld(1, -2, '42', 'overworld', 'java26v3');
    expect(generation.modern).toHaveBeenCalledWith(1, -2, '42', 3);
  });
  it('selects the new vegetation only for revision 2 worlds', () => {
    generateChunkForWorld(1, -2, '42', 'overworld', 'java26v2');
    expect(generation.modern).toHaveBeenCalledWith(1, -2, '42', 2);
    expect(generation.legacy).not.toHaveBeenCalled();
  });
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
    expect(generation.modern).toHaveBeenCalledWith(0, 0, '-9223372036854775808', 1);
    expect(generation.legacy).not.toHaveBeenCalled();
  });
});
