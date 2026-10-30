import { describe, expect, it } from 'vitest';
import { Chunk, flByte } from './chunk';
import { isJavaSeed, parseJavaSeed, worldBounds } from './worldBounds';
import { meshChunkData } from '../mesh/mesher';
import { buildDestinationPortal } from './portalFill';

describe('modern world coordinates', () => {
  it('stores negative and upper build limits without shifting world coordinates', () => {
    const c = new Chunk(-64, 384);
    c.set(0, -64, 0, 1); c.set(15, 319, 15, 2);
    c.set(0, -65, 0, 3); c.set(0, 320, 0, 3);
    c.setFluid(8, -32, 8, flByte(8, true, false));
    const copy = Chunk.fromBuffers(c.blocks.buffer, c.fluid.buffer, c.minY, c.height);
    expect(copy.get(0, -64, 0)).toBe(1);
    expect(copy.get(15, 319, 15)).toBe(2);
    expect(copy.get(0, -65, 0)).toBe(0);
    expect(copy.get(0, 320, 0)).toBe(0);
    expect(copy.getFluid(8, -32, 8)).toBe(flByte(8, true, false));
    expect(new Chunk().height).toBe(192);
    expect(worldBounds('legacy')).toEqual({ minY: 0, height: 192, maxY: 192, seaLevel: 116 });
  });

  it('meshes negative-Y blocks and lights them in the same coordinate frame', () => {
    const mesh = meshChunkData(0, 0, (x, y, z) => x === 1 && y === -62 && z === 1 ? 1 : 0, () => 0, -64, 16);
    const ys = [...mesh.opaque.positions].filter((_, i) => i % 3 === 1);
    expect(Math.min(...ys)).toBe(-62);
    expect(Math.max(...ys)).toBe(-61);
    expect(mesh.opaque.positions.length).toBe(6 * 4 * 3);
    expect(mesh.light3d.length).toBe(4 * 4 * 4);
    expect(mesh.light3d.some(v => v >> 4 === 15)).toBe(true);
  });

  it('finds a modern mountain portal destination above the old 191 ceiling', () => {
    const p = buildDestinationPortal((_x, y) => y <= 240 ? 1 : 0, 'overworld', 0, 0, worldBounds('java26'));
    expect(p.spawn.y).toBe(241);
    expect(p.edits.every(e => e[1] >= -64 && e[1] < 320)).toBe(true);
  });
});

describe('Java long seed preservation', () => {
  it('keeps signed 64-bit numeric seeds without Number precision loss', () => {
    expect(parseJavaSeed('9223372036854775807')).toBe('9223372036854775807');
    expect(parseJavaSeed('-9223372036854775808')).toBe('-9223372036854775808');
    expect(parseJavaSeed('-42')).toBe('-42');
    expect(parseJavaSeed('+42')).toBe('42');
    expect(isJavaSeed('9223372036854775808')).toBe(false);
    expect(isJavaSeed('-9223372036854775809')).toBe(false);
  });
  it('uses signed Java string hashing and keeps empty input random', () => {
    expect(parseJavaSeed('Minecraft')).toBe('-1595926131');
    expect(parseJavaSeed('  ')).toBeUndefined();
    expect(parseJavaSeed('hello')).toBe('99162322');
  });
});
