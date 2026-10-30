import { describe, expect, it } from 'vitest';
import { ICE, PACKED_ICE, SOUL_SAND, STONE } from '../blocks/registry';
import { step } from './step';
import {
  type MoveIntent,
  type Player,
  type VoxelWorld,
  WALK_PER_TICK,
  SPRINT_PER_TICK,
} from './player';
import fixtures from './physics26.fixtures.json';

// Independent Java float/double reference arithmetic, evaluated by
// docs/Physics26Reference.java after inspecting the official 26.3 instructions.
// These fixtures are not traces from a running Minecraft client.
const idle: MoveIntent = { forward: 0, right: 0, yaw: 0, jump: false };
const forward = { ...idle, forward: 1 };
const player = (y = 0): Player => ({
  pos: { x: 0, y, z: 0.5 },
  vel: { x: 0, y: 0, z: 0 },
  onGround: y === 0,
});
const flat = (id = STONE): VoxelWorld => ({
  isSolid: (_x, y) => y < 0,
  getBlock: (_x, y) => (y < 0 ? id : 0),
});
const water: VoxelWorld = { isSolid: () => false, isWater: () => true };

describe('verified Java 26.3 baseline motion', () => {
  it.each([
    ['walk', STONE, false],
    ['sprint', STONE, true],
    ['ice', ICE, false],
    ['ice', PACKED_ICE, false],
    ['soulSand', SOUL_SAND, false],
  ] as const)('matches the first eight %s ticks on block %i (sprint %s)', (name, block, sprint) => {
    let p = player();
    for (const [x, vx] of fixtures[name]) {
      p = step(p, { ...forward, sprint }, flat(block));
      expect(p.pos.x).toBeCloseTo(x, 10);
      expect(p.vel.x).toBeCloseTo(vx, 10);
      expect(p.onGround).toBe(true);
    }
  });

  it('accelerates to walk/run speed instead of starting at terminal speed', () => {
    const measure = (sprint: boolean) => {
      let p = player();
      let distance = 0;
      for (let tick = 0; tick < 60; tick++) {
        const previousX = p.pos.x;
        p = step(p, { ...forward, sprint }, flat());
        distance = p.pos.x - previousX;
      }
      return distance;
    };
    expect(step(player(), forward, flat()).pos.x).toBeLessThan(WALK_PER_TICK / 2);
    expect(measure(false)).toBeCloseTo(WALK_PER_TICK, 10);
    expect(measure(true)).toBeCloseTo(SPRINT_PER_TICK, 10);
    expect(WALK_PER_TICK * 20).toBeCloseTo(4.317, 3);
    expect(SPRINT_PER_TICK * 20).toBeCloseTo(5.612, 3);
  });

  it('preserves inertia while airborne, including against opposite input', () => {
    const p = player(10);
    p.vel.x = 0.3;
    const same = step(p, forward, flat());
    const opposite = step(p, { ...forward, forward: -1 }, flat());
    expect(same.pos.x).toBeCloseTo(0.31959999994337557, 10);
    expect(opposite.pos.x).toBeCloseTo(0.2804000000566244, 10);
    expect(opposite.vel.x).toBeGreaterThan(0);
    expect(same.vel.x).toBeCloseTo(same.pos.x * Math.fround(0.91), 10);
  });

  it('normalizes keyboard diagonals but preserves analog and slowed input magnitude', () => {
    const axis = step(player(), forward, flat());
    const analog = step(player(), { ...forward, forward: 0.5 }, flat());
    const diagonal = step(player(), { ...forward, right: 1 }, flat());
    const crouchAxis = step(player(), { ...forward, crouch: true }, flat());
    const crouchDiagonal = step(player(), { ...forward, right: 1, crouch: true }, flat());
    const eat = step(player(), { ...forward, slow: true, sprint: true }, flat());
    expect(analog.pos.x).toBeCloseTo(axis.pos.x * 0.5, 8);
    expect(Math.hypot(diagonal.pos.x, diagonal.pos.z - 0.5)).toBeCloseTo(0.1, 7);
    expect(crouchAxis.pos.x).toBeCloseTo(axis.pos.x * 0.3, 8);
    // 26.3's square-input adjustment occurs after sneak/item slowdown.
    expect(crouchDiagonal.pos.x).toBeCloseTo(crouchAxis.pos.x, 8);
    expect(crouchDiagonal.pos.z - 0.5).toBeCloseTo(crouchAxis.pos.x, 8);
    expect(eat.pos.x).toBeCloseTo(axis.pos.x * 0.2, 8);
  });

  it('matches the jump trajectory through the apex without applying gravity before movement', () => {
    let p = player();
    for (let tick = 0; tick < fixtures.jump.length; tick++) {
      p = step(p, { ...idle, jump: tick === 0 }, flat());
      expect(p.pos.y).toBeCloseTo(fixtures.jump[tick][0], 10);
      expect(p.vel.y).toBeCloseTo(fixtures.jump[tick][1], 10);
    }
    expect(Math.max(...fixtures.jump.map(([y]) => y))).toBeCloseTo(1.2522033, 6);
  });

  it('adds a .2 facing impulse for a sprint jump while retaining ground acceleration that tick', () => {
    const p = step(player(), { ...forward, jump: true, sprint: true }, flat());
    expect(p.pos.x).toBeCloseTo(fixtures.sprint[0][0] + 0.2, 10);
    expect(p.vel.x).toBeCloseTo(
      (fixtures.sprint[0][0] + 0.2) * Math.fround(Math.fround(0.6) * Math.fround(0.91)),
      10,
    );
    const z = step(player(), { ...idle, jump: true, sprint: true, yaw: Math.PI / 2 }, flat());
    expect(z.pos.z).toBeCloseTo(0.7, 10);
    expect(z.pos.x).toBeCloseTo(0, 10);
  });

  it('holding jump repeats after landing and a release clears the ten-tick lockout', () => {
    let p = player();
    let jumps = 0;
    for (let tick = 0; tick < 30; tick++) {
      p = step(p, { ...idle, jumpHeld: true }, flat());
      if (p.didJumpFromGround) jumps++;
    }
    expect(jumps).toBeGreaterThanOrEqual(2);
    const locked = { ...player(), jumpDelayTicks: 10 };
    const blockedJump = step(locked, { ...idle, jumpHeld: true }, flat());
    expect(blockedJump.pos.y).toBe(0);
    expect(blockedJump.didJumpFromGround).toBe(false);
    const released = step(locked, idle, flat());
    expect(released.jumpDelayTicks).toBe(0);
    expect(step(released, { ...idle, jumpHeld: true }, flat()).pos.y).toBeCloseTo(0.42, 6);
  });

  it('matches continuous liquid ascent and permits only a small impulse near the open surface', () => {
    let p = player(10);
    for (const [y, vy] of fixtures.swimUp) {
      p = step(p, { ...idle, swimUp: true }, water);
      expect(p.pos.y - 10).toBeCloseTo(y, 10);
      expect(p.vel.y).toBeCloseTo(vy, 10);
    }
    const shallow: VoxelWorld = { isSolid: () => false, isWater: (_x, y) => y < 1 };
    const surface = step(player(0.8), { ...idle, jump: true }, shallow);
    expect(surface.pos.y).toBeCloseTo(0.8399999991059303, 10);
    expect(surface.vel.y).toBeCloseTo(0.02699999976158141, 10);
    expect(surface.didJumpFromGround).toBe(false);
  });

  it('water slows horizontal motion by .8/.9 and uses .005 gravity without sprinting', () => {
    const ordinary = step(player(10), forward, water);
    const sprint = step(player(10), { ...forward, sprint: true }, water);
    expect(ordinary.pos.x).toBeCloseTo(0.01959999994337558, 10);
    expect(ordinary.vel.x).toBeCloseTo(ordinary.pos.x * Math.fround(0.8), 10);
    expect(sprint.vel.x).toBeCloseTo(sprint.pos.x * Math.fround(0.9), 10);
    expect(ordinary.vel.y).toBe(-0.005);
    expect(sprint.vel.y).toBe(0);
    const down = step(player(10), { ...idle, crouch: true }, water);
    expect(down.pos.y).toBeCloseTo(10 - Math.fround(0.04), 10);
    expect(down.vel.y).toBeCloseTo(-0.036999999761581415, 10);
  });

  it('requires a wall and dry raised collision box for the .3 shoreline exit assist', () => {
    const shore: VoxelWorld = {
      isSolid: (x, y) => x >= 1 && y < 1,
      isWater: (x, y) => x < 1 && y < 1,
    };
    const nearWall = (y: number) => ({ ...player(y), pos: { x: 0.69, y, z: 0.5 } });
    const surface = step(nearWall(0.6), forward, shore);
    const deep = step(nearWall(0.1), forward, shore);
    const open = step(player(0.6), forward, shore);
    const roof = step(nearWall(0.6), forward, {
      ...shore,
      isSolid: (x, y) => shore.isSolid(x, y, 0) || y >= 2,
    });
    expect(surface.vel.y).toBe(Math.fround(0.3));
    expect(surface.pos.x).toBeLessThanOrEqual(0.7001);
    expect(deep.vel.y).toBe(-0.005);
    expect(open.vel.y).toBe(-0.005);
    expect(roof.vel.y).toBe(-0.005);
  });

  it('consumes a pending knockback once and then decays its inertia', () => {
    const p = step({ ...player(10), kbx: 0.4 }, idle, flat());
    const next = step(p, idle, flat());
    expect(p.pos.x).toBe(0.4);
    expect(p.kbx).toBe(0);
    expect(next.pos.x - p.pos.x).toBeCloseTo(0.4 * Math.fround(0.91), 10);
    expect(next.vel.x).toBeCloseTo(0.4 * Math.fround(0.91) ** 2, 10);
  });

  it('uses the player horizontal vector threshold instead of snapping each axis independently', () => {
    const diagonal = step({ ...player(10), vel: { x: 0.0025, y: 0.002, z: 0.0025 } }, idle, flat());
    const small = step({ ...player(10), vel: { x: 0.002, y: 0, z: 0.002 } }, idle, flat());
    expect(diagonal.pos.x).toBe(0.0025);
    expect(diagonal.pos.y).toBe(10);
    expect(small.pos.x).toBe(0);
  });
});
