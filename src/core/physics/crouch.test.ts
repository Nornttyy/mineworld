import { describe, it, expect } from 'vitest';
import { step } from './step';
import {
  CROUCH_HEIGHT,
  CROUCH_EYE,
  playerEyeHeight,
  playerHeight,
  type Player,
  type VoxelWorld,
} from './player';

const idle = { forward: 0, right: 0, yaw: 0, jump: false };
const player = (y = 0): Player => ({
  pos: { x: 0.5, y, z: 0.5 },
  vel: { x: 0, y: 0, z: 0 },
  onGround: false,
});

describe('modern Java crouching pose', () => {
  it('uses a 1.5-block collision height and 1.27-block eye height', () => {
    expect(CROUCH_HEIGHT).toBe(1.5);
    expect(CROUCH_EYE).toBe(1.27);
    const p = step(player(), { ...idle, crouch: true }, { isSolid: (_x, y) => y < 0 });
    expect(p.crouching).toBe(true);
    expect(playerHeight(p)).toBe(1.5);
    expect(playerEyeHeight(p)).toBe(1.27);
    expect(playerHeight({})).toBe(1.8);
    expect(playerEyeHeight({})).toBe(1.62);
  });

  it('keeps the low pose when releasing crouch would overlap a ceiling', () => {
    // Feet at .5 and roof at 2 leave exactly 1.5 blocks of headroom.
    // The full-cube world adapter does not model slabs; no slab is invented here.
    const roof: VoxelWorld = { isSolid: (_x, y) => y >= 2 };
    const p = step({ ...player(0.5), crouching: true }, idle, roof);
    expect(p.crouching).toBe(true);
    expect(p.pos.y + playerHeight(p)).toBeLessThanOrEqual(2);
    expect(playerEyeHeight(p)).toBe(1.27);
  });

  it('returns to standing when space is available and crouch is released', () => {
    const p = step({ ...player(), crouching: true }, idle, { isSolid: (_x, y) => y < 0 });
    expect(p.crouching).toBe(false);
    expect(playerHeight(p)).toBe(1.8);
    expect(playerEyeHeight(p)).toBe(1.62);
  });

  it('cannot use the crouching pose as a substitute for one-block-high crawling', () => {
    const passage: VoxelWorld = { isSolid: (x, y) => y < 0 || (x >= 2 && y >= 1) };
    let p = player();
    for (let i = 0; i < 80; i++) p = step(p, { ...idle, forward: 1, crouch: true }, passage);
    expect(p.pos.x).toBeLessThanOrEqual(1.7001);
    expect(p.crouching).toBe(true);
  });
});
