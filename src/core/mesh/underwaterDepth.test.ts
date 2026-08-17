import { describe, expect, it } from 'vitest';
import { WATER } from '../blocks/registry';
import { meshChunkData } from './mesher';

const key = (x: number, y: number, z: number): string => `${x},${y},${z}`;

function meshSparse(blocks: Map<string, number>) {
  return meshChunkData(
    0,
    0,
    (x, y, z) => blocks.get(key(x, y, z)) ?? 0,
    (x, y, z) => (blocks.get(key(x, y, z)) === WATER ? 8 : 0),
  );
}

describe('不透明网格的水下深度属性', () => {
  it('水底顶面写入上方连续水柱深度', () => {
    const blocks = new Map<string, number>();
    blocks.set(key(5, 100, 5), 1);
    for (let y = 101; y <= 103; y++) blocks.set(key(5, y, 5), WATER);

    const opaque = meshSparse(blocks).opaque;
    const depth = opaque.underwater;
    expect(depth).toBeDefined();
    expect(depth?.length).toBe(opaque.positions.length / 3);
    expect(Math.max(...(depth ?? []))).toBe(3);
    expect([...(depth ?? [])].filter((value) => value > 0)).toEqual([3, 3, 3, 3]);
  });

  it('普通露天地表深度为 0，且属性始终与不透明顶点等长', () => {
    const blocks = new Map<string, number>([[key(5, 100, 5), 1]]);
    const opaque = meshSparse(blocks).opaque;
    const depth = opaque.underwater;

    expect(depth).toBeDefined();
    expect(depth?.length).toBe(opaque.positions.length / 3);
    expect([...(depth ?? [])].every((value) => value === 0)).toBe(true);
  });

  it('超过八格的深水柱封顶为 8', () => {
    const blocks = new Map<string, number>();
    blocks.set(key(5, 100, 5), 1);
    for (let y = 101; y <= 112; y++) blocks.set(key(5, y, 5), WATER);

    expect(Math.max(...(meshSparse(blocks).opaque.underwater ?? []))).toBe(8);
  });
});
