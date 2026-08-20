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
  ).opaque;
}

describe('地表岸边湿润度', () => {
  it('属性始终与不透明顶点等长，远离水体时为 0', () => {
    const mesh = meshSparse(new Map([[key(6, 100, 6), 5]]));
    expect(mesh.wetness).toBeDefined();
    expect(mesh.wetness?.length).toBe(mesh.positions.length / 3);
    expect(Math.max(...(mesh.wetness ?? []))).toBe(0);
  });

  it('相邻海岸的共享顶点得到平滑湿润值', () => {
    const blocks = new Map<string, number>([
      [key(6, 100, 6), 5],
      [key(7, 100, 6), WATER],
    ]);
    const wetness = meshSparse(blocks).wetness ?? [];
    expect(Math.max(...wetness)).toBeGreaterThan(0.8);
    expect([...wetness].some((value) => value > 0 && value < 1)).toBe(true);
  });

  it('水底可见面湿润度固定为 1', () => {
    const blocks = new Map<string, number>([
      [key(6, 100, 6), 1],
      [key(6, 101, 6), WATER],
    ]);
    const mesh = meshSparse(blocks);
    const depths = mesh.underwater ?? [];
    const wetness = mesh.wetness ?? [];
    const submerged = [...depths]
      .map((depth, index) => ({ depth, wet: wetness[index] }))
      .filter(({ depth }) => depth > 0);
    expect(submerged).toHaveLength(4);
    expect(submerged.every(({ wet }) => wet === 1)).toBe(true);
  });
});
