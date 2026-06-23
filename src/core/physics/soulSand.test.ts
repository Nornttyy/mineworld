/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { describe, it, expect } from 'vitest';
import { step } from './step';

function flatWorld(floorId: number): any {
  return {
    getBlock: (_x: number, y: number, _z: number) => (y < 1 ? floorId : 0),
    isSolid: (_x: number, y: number, _z: number) => y < 1,
    isWater: () => false,
  };
}

function steadySpeed(floorId: number): number {
  let p: any = { pos: { x: 0, y: 1, z: 0 }, vel: { x: 0, y: 0, z: 0 }, onGround: true };
  const w = flatWorld(floorId);
  for (let i = 0; i < 40; i++) {
    p = step(p, { forward: 1, right: 0, yaw: 0, jump: false, sprint: false } as any, w);
  }
  return Math.hypot(p.vel.x, p.vel.z);
}

describe('soul sand slowdown', () => {
  it('灵魂沙上稳定速度约为石头上的一半', () => {
    const stone = steadySpeed(3);
    const soul = steadySpeed(20);
    expect(soul).toBeLessThan(stone * 0.65);
    expect(soul).toBeGreaterThan(stone * 0.35);
  });
});
