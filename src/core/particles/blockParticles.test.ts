import { expect, it } from 'vitest';
import { spawnBlockBreak, spawnBlockHit, blockParticleTile } from './blockParticles';
import { stepParticles } from './particles';
import { ATLAS_TILES, GRASS, STONE, OAK_LEAVES } from '../blocks/registry';
import { crackStage } from '../../render/CrackOverlay';

it('full cubes emit a 4x4x4 lattice, with randomized quarter-sprite chips', () => {
  const ps = spawnBlockBreak(10, 20, 30, STONE, [1, 1, 1], () => 0.5);
  expect(ps).toHaveLength(64);
  expect([...new Set(ps.map((p) => p.x))]).toEqual([10.125, 10.375, 10.625, 10.875]);
  expect(new Set(ps.map((p) => `${p.x},${p.y},${p.z}`)).size).toBe(64);
  expect(
    ps.every(
      (p) => p.tile === ATLAS_TILES.stone && p.size === 0.07500000000000001 && p.u === 0.375,
    ),
  ).toBe(true);
  expect(blockParticleTile(GRASS)).toBe(ATLAS_TILES.dirt);
  expect(blockParticleTile(OAK_LEAVES)).toBe(ATLAS_TILES.oak_leaves);
});
it('hit chips originate outside each actual hit face and are smaller than break fragments', () => {
  for (const [nx, ny, nz] of [
    [1, 0, 0],
    [-1, 0, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, 0, 1],
    [0, 0, -1],
  ]) {
    const p = spawnBlockHit({ x: 2, y: 3, z: 4, nx, ny, nz }, STONE, [1, 1, 1], () => 0.5);
    if (nx) expect(p.x).toBeCloseTo(2 + (nx > 0 ? 1.1 : -0.1));
    if (ny) expect(p.y).toBeCloseTo(3 + (ny > 0 ? 1.1 : -0.1));
    if (nz) expect(p.z).toBeCloseTo(4 + (nz > 0 ? 1.1 : -0.1));
    expect(p.size).toBeCloseTo(0.045);
  }
});
it('tick integration is frame-rate independent and collides with ground', () => {
  const make = () => ({ ...spawnBlockBreak(0, 2, 0, STONE, [1, 1, 1], () => 0.5)[0], life: 5 });
  const a = make(),
    b = make();
  const world = { isSolid: (_x: number, y: number, _z: number) => y < 1 };
  for (let i = 0; i < 60; i++) stepParticles([a], 1 / 60, world);
  for (let i = 0; i < 20; i++) stepParticles([b], 0.05, world);
  expect(a.x).toBeCloseTo(b.x, 8);
  expect(a.y).toBeCloseTo(b.y, 8);
  expect(a.y).toBeGreaterThanOrEqual(1);
  expect(a.y).toBeLessThan(1.0001);
  expect(Math.abs(a.vx)).toBeLessThan(0.05);
});
it('cracks follow Java local damage stages, and clear when damage resets', () => {
  expect(crackStage(0)).toBe(-1);
  expect(crackStage(0.099)).toBe(0);
  expect(crackStage(0.1)).toBe(1);
  expect(crackStage(0.9)).toBe(9);
  expect(crackStage(1)).toBe(9);
});
