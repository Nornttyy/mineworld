import { describe, it, expect } from 'vitest';
import { BLOCKS, blockFaceTile, isSolidId, Face } from './registry';

describe('block registry', () => {
  it('air is non-solid, stone is solid', () => {
    expect(BLOCKS[0].name).toBe('air');
    expect(isSolidId(0)).toBe(false);
    expect(isSolidId(1)).toBe(true); // stone
  });
  it('grass uses grass_top on top, dirt on bottom, grass_side on sides', () => {
    const grass = BLOCKS.findIndex((b) => b.name === 'grass');
    expect(blockFaceTile(grass, Face.PosY)).toBe(2); // grass_top
    expect(blockFaceTile(grass, Face.NegY)).toBe(1); // dirt
    expect(blockFaceTile(grass, Face.PosX)).toBe(3); // grass_side
  });
  it('stone uses the same tile on every face', () => {
    const f = [Face.PosX, Face.NegX, Face.PosY, Face.NegY, Face.PosZ, Face.NegZ];
    expect(f.every((face) => blockFaceTile(1, face) === 0)).toBe(true);
  });
  it('isSolidId of unknown id is false', () => {
    expect(isSolidId(999)).toBe(false);
  });
});
