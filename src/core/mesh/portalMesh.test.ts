import { describe, expect, it } from 'vitest';
import { NETHER_PORTAL } from '../blocks/registry';
import { meshChunkData } from './mesher';

const key = (x: number, y: number, z: number): string => `${x},${y},${z}`;

function portalMesh(cells: ReadonlyArray<readonly [number, number, number]>) {
  const blocks = new Map(cells.map(([x, y, z]) => [key(x, y, z), NETHER_PORTAL]));
  return meshChunkData(
    0,
    0,
    (x, y, z) => blocks.get(key(x, y, z)) ?? 0,
    () => 0,
  ).portal;
}

describe('nether portal mesh', () => {
  it('renders an x-axis portal as centered purple planes instead of invisible air', () => {
    const mesh = portalMesh([
      [1, 1, 1],
      [2, 1, 1],
    ]);

    expect(mesh.indices.length).toBe(12);
    const zValues = Array.from(mesh.positions).filter((_, index) => index % 3 === 2);
    expect(zValues.every((z) => z === 1.5)).toBe(true);
  });

  it('orients a z-axis portal on the other horizontal plane', () => {
    const mesh = portalMesh([
      [1, 1, 1],
      [1, 1, 2],
    ]);

    expect(mesh.indices.length).toBe(12);
    const xValues = Array.from(mesh.positions).filter((_, index) => index % 3 === 0);
    expect(xValues.every((x) => x === 1.5)).toBe(true);
  });
});
