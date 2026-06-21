import { describe, it, expect } from 'vitest';
import { splitByY, SECTION_H } from './meshSplit';
import { meshChunkData } from '../core/mesh/mesher';
import { generateChunk } from '../core/worldgen/terrain';
import { Chunk, CHUNK_H, flAmount } from '../core/world/chunk';
import { worldToChunk, localCoord } from '../core/world/coords';
import type { MeshData } from '../core/mesh/mesher';

// 用真实生成的区块网格化，给 splitByY 一份非平凡的整列 MeshData。
function realChunkMesh(): MeshData {
  const seed = 4242;
  const chunks = new Map<string, Chunk>();
  const key = (cx: number, cz: number): string => `${cx},${cz}`;
  for (let cx = -1; cx <= 1; cx++) for (let cz = -1; cz <= 1; cz++) chunks.set(key(cx, cz), generateChunk(cx, cz, seed));
  const getBlock = (wx: number, wy: number, wz: number): number => {
    if (wy < 0 || wy >= CHUNK_H) return 0;
    const c = chunks.get(key(worldToChunk(wx), worldToChunk(wz)));
    return c ? c.get(localCoord(wx), wy, localCoord(wz)) : 0;
  };
  const waterAmount = (wx: number, wy: number, wz: number): number => {
    if (wy < 0 || wy >= CHUNK_H) return 0;
    const c = chunks.get(key(worldToChunk(wx), worldToChunk(wz)));
    return c ? flAmount(c.getFluid(localCoord(wx), wy, localCoord(wz))) : 0;
  };
  return meshChunkData(0, 0, getBlock, waterAmount).opaque;
}

describe('竖直分段 splitByY', () => {
  it('空网格 → 空段数组', () => {
    const empty: MeshData = { positions: new Float32Array(), uvs: new Float32Array(), colors: new Float32Array(), indices: new Uint16Array() };
    expect(splitByY(empty)).toEqual([]);
  });

  const full = realChunkMesh();
  const sections = splitByY(full);

  it('真实区块能切出多段(竖直分段生效)', () => {
    expect(full.indices.length).toBeGreaterThan(0);
    expect(sections.length).toBeGreaterThan(1); // 地表 + 地下洞穴至少跨 2 段
  });

  it('三角形守恒：各段三角形之和 = 原网格(无丢面)', () => {
    const sum = sections.reduce((n, s) => n + s.indices.length / 3, 0);
    expect(sum).toBe(full.indices.length / 3);
  });

  it('每段索引都在本段顶点范围内(顶点重映射正确，不会画出垃圾)', () => {
    for (const s of sections) {
      const nVerts = s.positions.length / 3;
      for (let i = 0; i < s.indices.length; i++) expect(s.indices[i]).toBeLessThan(nVerts);
    }
  });

  it('每段包围盒在竖直方向很矮(≤段高+2) —— 这正是视锥剔除能逐段剔掉的前提', () => {
    for (const s of sections) {
      let lo = Infinity, hi = -Infinity;
      for (let i = 1; i < s.positions.length; i += 3) {
        const y = s.positions[i];
        if (y < lo) lo = y;
        if (y > hi) hi = y;
      }
      expect(hi - lo).toBeLessThanOrEqual(SECTION_H + 2); // 矮包围盒 → 站地面时地下段在视锥外被剔
    }
  });
});
