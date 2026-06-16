import { describe, it, expect } from 'vitest';
import { step } from './step';
import type { Player, VoxelWorld, MoveIntent } from './player';

const floor: VoxelWorld = { isSolid: (_x, y) => y < 0 };
const idle: MoveIntent = { forward: 0, right: 0, yaw: 0, jump: false };
const fresh = (): Player => ({
  pos: { x: 0.5, y: 5, z: 0.5 },
  vel: { x: 0, y: 0, z: 0 },
  onGround: false,
});

describe('physics step', () => {
  it('falls under gravity and lands on the ground (y≈0)', () => {
    let p = fresh();
    for (let i = 0; i < 120; i++) p = step(p, idle, floor);
    expect(p.onGround).toBe(true);
    expect(p.pos.y).toBeCloseTo(0, 2);
    expect(p.vel.y).toBeCloseTo(0, 5);
  });

  it('jump gives upward velocity when on ground', () => {
    let p = fresh();
    for (let i = 0; i < 120; i++) p = step(p, idle, floor); // 先落地
    expect(p.onGround).toBe(true);
    p = step(p, { ...idle, jump: true }, floor);
    expect(p.vel.y).toBeGreaterThan(0.3);
    expect(p.onGround).toBe(false);
  });

  it('walking into a wall does not tunnel through it', () => {
    const wall: VoxelWorld = { isSolid: (x, y) => y < 0 || x >= 2 };
    let p: Player = { pos: { x: 0.5, y: 0, z: 0.5 }, vel: { x: 0, y: 0, z: 0 }, onGround: true };
    for (let i = 0; i < 80; i++) p = step(p, { forward: 1, right: 0, yaw: 0, jump: false }, wall);
    expect(p.pos.x).toBeLessThan(2); // 没穿过 x=2 的墙
    expect(p.pos.x).toBeGreaterThan(0.5); // 确实往前走了
  });

  it('high fall speed does not tunnel through a thin floor', () => {
    let p: Player = { pos: { x: 0.5, y: 30, z: 0.5 }, vel: { x: 0, y: 0, z: 0 }, onGround: false };
    for (let i = 0; i < 200; i++) p = step(p, idle, floor);
    expect(p.pos.y).toBeGreaterThanOrEqual(-0.01); // 没掉穿地面
  });
});
