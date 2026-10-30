import { describe, it, expect } from 'vitest';
import { step } from './step';
import type { Player, VoxelWorld } from './player';
import { SOUL_SAND, STONE } from '../blocks/registry';

function flatWorld(floorId: number): VoxelWorld {
  return {
    getBlock: (_x: number, y: number, _z: number) => (y < 1 ? floorId : 0),
    isSolid: (_x: number, y: number, _z: number) => y < 1,
    isWater: () => false,
  };
}

function steadyDistance(floorId: number): number {
  let p: Player = { pos: { x: 0, y: 1, z: 0 }, vel: { x: 0, y: 0, z: 0 }, onGround: true };
  const w = flatWorld(floorId);
  let distance = 0;
  for (let i = 0; i < 40; i++) {
    const previousX = p.pos.x;
    p = step(p, { forward: 1, right: 0, yaw: 0, jump: false, sprint: false }, w);
    distance = p.pos.x - previousX;
  }
  return distance;
}

describe('soul sand slowdown', () => {
  it('applies the .4 block speed factor after movement, before ordinary ground drag', () => {
    // Compare actual distance per tick, not the smaller post-drag stored velocity.
    const stone = steadyDistance(STONE);
    const soul = steadyDistance(SOUL_SAND);
    expect(stone).toBeCloseTo(0.2158591, 6);
    expect(soul).toBeCloseTo(0.1253838, 6);
  });
});
