import { describe, expect, it } from 'vitest';
import { ICE } from '../blocks/registry';
import { meshChunkData } from './mesher';

const key = (x: number, y: number, z: number): string => `${x},${y},${z}`;

function meshSparse(blocks: Map<string, number>) {
  return meshChunkData(
    0,
    0,
    (x, y, z) => blocks.get(key(x, y, z)) ?? 0,
    () => 0,
  );
}

describe('冰独立网格批次', () => {
  it('冰进入 ice 而不是 opaque，且顶点属性等长', () => {
    const blocks = new Map<string, number>([[key(5, 100, 5), ICE]]);
    const mesh = meshSparse(blocks);
    const vertices = mesh.ice.positions.length / 3;

    expect(mesh.opaque.indices.length).toBe(0);
    expect(vertices).toBe(24);
    expect(mesh.ice.indices.length).toBe(36);
    expect(mesh.ice.uvs.length).toBe(vertices * 2);
    expect(mesh.ice.colors.length).toBe(vertices * 3);
    expect(mesh.ice.light?.length).toBe(vertices * 2);
    expect(mesh.ice.underwater).toBeUndefined();
  });

  it('冰临接 opaque 方块时仍剔除相邻面', () => {
    const blocks = new Map<string, number>([
      [key(5, 100, 5), ICE],
      [key(6, 100, 5), 1],
    ]);
    const mesh = meshSparse(blocks);

    expect(mesh.ice.indices.length).toBe(5 * 6);
    expect(mesh.opaque.indices.length).toBe(5 * 6);
  });
});
