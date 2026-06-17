import { describe, it, expect } from 'vitest';
import { raycastVoxel } from './raycast';

describe('raycastVoxel', () => {
  it('hits the ground looking straight down; normal points up', () => {
    const isSolid = (_x: number, y: number) => y <= 0;
    const hit = raycastVoxel({ x: 0.5, y: 5, z: 0.5 }, { x: 0, y: -1, z: 0 }, 10, isSolid);
    expect(hit).toEqual({ x: 0, y: 0, z: 0, nx: 0, ny: 1, nz: 0 });
  });

  it('hits a wall ahead; normal faces back toward the ray', () => {
    const isSolid = (x: number) => x >= 3;
    const hit = raycastVoxel({ x: 0.5, y: 0.5, z: 0.5 }, { x: 1, y: 0, z: 0 }, 10, isSolid);
    expect(hit?.x).toBe(3);
    expect(hit?.nx).toBe(-1); // 命中的是墙的 -X 面
    // 放置格 = 命中 + 法线 = 紧贴墙前的空格
    expect((hit?.x ?? 0) + (hit?.nx ?? 0)).toBe(2);
  });

  it('returns null when nothing is within reach', () => {
    const isSolid = (_x: number, y: number) => y <= 0;
    const hit = raycastVoxel({ x: 0.5, y: 5, z: 0.5 }, { x: 0, y: 1, z: 0 }, 4.5, isSolid);
    expect(hit).toBeNull();
  });
});
