import { describe, expect, it } from 'vitest';
import { ICE, WATER } from '../blocks/registry';
import { WATER_WAVE_OPEN_RADIUS as WORLD_WAVE_OPEN_RADIUS } from '../world/chunkWorld';
import {
  meshChunkData,
  WATER_SURFACE_SUBDIVISIONS,
  WATER_WAVE_OPEN_RADIUS,
  type MeshData,
} from './mesher';

const Y = 120;
const STONE = 1;
const key = (x: number, y: number, z: number): string => `${x},${y},${z}`;

interface SparseWorld {
  blocks: Map<string, number>;
  amounts: Map<string, number>;
  setBlock(x: number, y: number, z: number, id: number): void;
  setWater(x: number, y: number, z: number, amount?: number): void;
  mesh(cx?: number, cz?: number): MeshData;
}

function sparseWorld(): SparseWorld {
  const blocks = new Map<string, number>();
  const amounts = new Map<string, number>();
  return {
    blocks,
    amounts,
    setBlock(x, y, z, id): void {
      blocks.set(key(x, y, z), id);
      if (id !== WATER) amounts.delete(key(x, y, z));
    },
    setWater(x, y, z, amount = 8): void {
      blocks.set(key(x, y, z), WATER);
      amounts.set(key(x, y, z), amount);
    },
    mesh(cx = 0, cz = 0): MeshData {
      return meshChunkData(
        cx,
        cz,
        (x, y, z) => blocks.get(key(x, y, z)) ?? 0,
        (x, y, z) => amounts.get(key(x, y, z)) ?? 0,
      ).water;
    },
  };
}

function fillWaterPlane(w: SparseWorld, x0: number, x1: number, z0: number, z1: number): void {
  for (let z = z0; z <= z1; z++)
    for (let x = x0; x <= x1; x++) w.setWater(x, Y, z);
}

function valuesAt(
  mesh: MeshData,
  px: number,
  pz: number,
  minY: number,
): { y: number; top: number; shore: number; waveOpen: number }[] {
  const out: { y: number; top: number; shore: number; waveOpen: number }[] = [];
  for (let i = 0; i < mesh.positions.length / 3; i++) {
    const x = mesh.positions[i * 3];
    const y = mesh.positions[i * 3 + 1];
    const z = mesh.positions[i * 3 + 2];
    if (Math.abs(x - px) < 1e-5 && Math.abs(z - pz) < 1e-5 && y > minY) {
      out.push({
        y,
        top: mesh.top?.[i] ?? -99,
        shore: mesh.shore?.[i] ?? -99,
        waveOpen: mesh.waveOpen?.[i] ?? -99,
      });
    }
  }
  return out;
}

describe('water geometry subdivision', () => {
  it('uses a shared 3x3 lattice for each 2x2 top face and keeps every water attribute aligned', () => {
    const w = sparseWorld();
    w.setWater(5, Y, 5);
    w.setBlock(5, Y - 1, 5, STONE);
    for (const [x, z] of [[4, 5], [6, 5], [5, 4], [5, 6]]) w.setBlock(x, Y, z, STONE);

    const mesh = w.mesh(); // 周围/底部封住，只会发射一个顶面
    const vertices = mesh.positions.length / 3;
    expect(WATER_SURFACE_SUBDIVISIONS).toBe(2);
    expect(WATER_WAVE_OPEN_RADIUS).toBe(WORLD_WAVE_OPEN_RADIUS);
    expect(vertices).toBe(9);
    expect(mesh.indices.length).toBe(24); // 2×2 quads × 2 tris × 3 indices
    expect([...new Set(Array.from(mesh.positions).filter((_v, i) => i % 3 === 0))].sort()).toEqual([5, 5.5, 6]);
    expect([...new Set(Array.from(mesh.positions).filter((_v, i) => i % 3 === 2))].sort()).toEqual([5, 5.5, 6]);
    expect(mesh.uvs.length).toBe(vertices * 2);
    expect(mesh.colors.length).toBe(vertices * 3);
    expect(mesh.light?.length).toBe(vertices * 2);
    expect(mesh.top?.length).toBe(vertices);
    expect(mesh.shore?.length).toBe(vertices);
    expect(mesh.waveOpen?.length).toBe(vertices);
    expect(Array.from(mesh.waveOpen ?? []).every((v) => v === 0)).toBe(true);
    expect(Math.max(...mesh.indices)).toBeLessThan(vertices);
  });

  it('subdivides exposed side upper edges at the same half-block coordinates as the top', () => {
    const w = sparseWorld();
    w.setWater(5, Y, 5);
    w.setBlock(5, Y - 1, 5, STONE); // 底面封住，保留四个暴露侧面
    const mesh = w.mesh();

    expect(mesh.positions.length / 3).toBe(9 + 4 * 6); // top grid + four 2-segment side grids
    expect(mesh.indices.length).toBe(24 + 4 * 12);
    let maxY = -Infinity;
    for (let i = 1; i < mesh.positions.length; i += 3) maxY = Math.max(maxY, mesh.positions[i]);
    const shared = valuesAt(mesh, 6, 5.5, maxY - 1e-4);
    expect(shared).toHaveLength(2); // 顶面东边中点 + 东侧壁上沿中点
    expect(shared[0].y).toBeCloseTo(shared[1].y, 6);
    expect(shared[0].top).toBeCloseTo(shared[1].top, 6);
    expect(shared[0].shore).toBeCloseTo(shared[1].shore, 6);
    expect(shared[0].waveOpen).toBeCloseTo(shared[1].waveOpen, 6);
  });
});

describe('water waveOpen attribute', () => {
  it('is one in a broad uncovered water plane and zero at ice/roof obstacles without changing shore semantics', () => {
    const open = sparseWorld();
    fillWaterPlane(open, -6, 22, -6, 22);
    const openCenter = valuesAt(open.mesh(), 8, 8, Y + 0.8);
    expect(openCenter.length).toBeGreaterThan(0);
    expect(openCenter.every((v) => Math.abs(v.waveOpen - 1) < 1e-6)).toBe(true);
    expect(openCenter.every((v) => Math.abs(v.shore) < 1e-6)).toBe(true);

    const frozen = sparseWorld();
    fillWaterPlane(frozen, -6, 22, -6, 22);
    frozen.setBlock(8, Y, 8, ICE);
    const iceCorner = valuesAt(frozen.mesh(), 8, 8, Y + 0.8);
    expect(iceCorner.length).toBeGreaterThan(0);
    expect(iceCorner.every((v) => Math.abs(v.waveOpen) < 1e-6)).toBe(true);
    expect(iceCorner.every((v) => Math.abs(v.shore) < 1e-6)).toBe(true); // 冰仍算 wet，不制造岸泡沫

    const roofed = sparseWorld();
    fillWaterPlane(roofed, -6, 22, -6, 22);
    roofed.setBlock(8, Y + 1, 8, STONE);
    const roofCorner = valuesAt(roofed.mesh(), 8, 8, Y + 0.8);
    expect(roofCorner.length).toBeGreaterThan(0);
    expect(roofCorner.every((v) => Math.abs(v.waveOpen) < 1e-6)).toBe(true);
    const roofFade = valuesAt(roofed.mesh(), 6, 8, Y + 0.8);
    expect(roofFade.length).toBeGreaterThan(0);
    expect(roofFade.every((v) => v.waveOpen > 0 && v.waveOpen < 1)).toBe(true);
  });

  it('matches subdivided edge positions and attributes exactly across a chunk seam', () => {
    const w = sparseWorld();
    fillWaterPlane(w, -6, 38, -6, 22);
    const west = w.mesh(0, 0);
    const east = w.mesh(1, 0);

    const seam = (mesh: MeshData, cx: number): Map<string, string> => {
      const values = new Map<string, string>();
      for (let i = 0; i < mesh.positions.length / 3; i++) {
        const wx = mesh.positions[i * 3] + cx * 16;
        const y = mesh.positions[i * 3 + 1];
        const z = mesh.positions[i * 3 + 2];
        if (Math.abs(wx - 16) > 1e-5 || y <= Y + 0.8 || z < 0 || z > 16) continue;
        const value = [y, mesh.top?.[i], mesh.shore?.[i], mesh.waveOpen?.[i]]
          .map((n) => Number(n).toFixed(6))
          .join(',');
        const prior = values.get(z.toFixed(3));
        if (prior !== undefined) expect(value).toBe(prior); // 同一 chunk 的重复角也必须一致
        values.set(z.toFixed(3), value);
      }
      return values;
    };

    const a = seam(west, 0);
    const b = seam(east, 1);
    expect([...a.keys()].sort()).toEqual([...b.keys()].sort());
    expect(a.size).toBe(16 * WATER_SURFACE_SUBDIVISIONS + 1);
    for (const [z, value] of a) expect(b.get(z)).toBe(value);
  });
});
