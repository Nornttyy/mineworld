import { describe, it, expect } from 'vitest';
import { step } from './step';
import type { Player, VoxelWorld } from './player';
import { ICE } from '../blocks/registry';

// 石头方块 id（非冰）
const STONE = 1;

/**
 * 构造一个 VoxelWorld：y < 0 是地板（实心），脚下方块 id 由 floorId 决定。
 * 脚部位置约 y=0，getBlock(x, -1, z) 返回脚下支持方块。
 */
function makeWorld(floorId: number): VoxelWorld {
  return {
    isSolid: (_x, y, _z) => y < 0,
    isWater: () => false,
    getBlock: (_x, y, _z) => (y < 0 ? floorId : 0),
  };
}

/** 站在地板上、带初速度、无输入方向 */
function slidingPlayer(vx: number, vz: number): Player {
  return {
    pos: { x: 0.5, y: 0, z: 0.5 },
    vel: { x: vx, y: 0, z: vz },
    onGround: true,
  };
}

describe('ice friction', () => {
  it('冰上比石头上更滑：同初速无输入下一刻保留更多水平速度', () => {
    const iceWorld = makeWorld(ICE);
    const stoneWorld = makeWorld(STONE);

    const p0 = slidingPlayer(0.3, 0);
    const idle = { forward: 0, right: 0, yaw: 0, jump: false };

    const afterIce = step(p0, idle, iceWorld);
    const afterStone = step(p0, idle, stoneWorld);

    const speedIce = Math.hypot(afterIce.vel.x, afterIce.vel.z);
    const speedStone = Math.hypot(afterStone.vel.x, afterStone.vel.z);

    // 冰上保留速度 > 石头上保留速度（滑得更远）
    expect(speedIce).toBeGreaterThan(speedStone);
  });

  it('ordinary ground retains friction times .91 of incoming velocity', () => {
    const stoneWorld = makeWorld(STONE);
    const p0 = slidingPlayer(0.3, 0);
    const idle = { forward: 0, right: 0, yaw: 0, jump: false };

    const after = step(p0, idle, stoneWorld);
    expect(after.vel.x).toBeCloseTo(0.3 * Math.fround(Math.fround(0.6) * Math.fround(0.91)), 10);
  });

  it('ice retains .98 × .91, not .98 alone', () => {
    const iceWorld = makeWorld(ICE);
    const p0 = slidingPlayer(0.3, 0);
    const idle = { forward: 0, right: 0, yaw: 0, jump: false };

    const after = step(p0, idle, iceWorld);
    const speedAfter = Math.hypot(after.vel.x, after.vel.z);

    expect(speedAfter).toBeCloseTo(0.3 * Math.fround(Math.fround(0.98) * Math.fround(0.91)), 10);
  });

  it('空中时不受脚下方块影响（无接地）', () => {
    const iceWorld = makeWorld(ICE);
    const stoneWorld = makeWorld(STONE);

    // 玩家在空中（y=5，远离地面），带水平初速
    const airPlayer: Player = {
      pos: { x: 0.5, y: 5, z: 0.5 },
      vel: { x: 0.3, y: 0, z: 0 },
      onGround: false,
    };
    const idle = { forward: 0, right: 0, yaw: 0, jump: false };

    const afterIce = step(airPlayer, idle, iceWorld);
    const afterStone = step(airPlayer, idle, stoneWorld);

    // 空中水平速度不受下方方块影响，并保留原惯性的 .91。
    expect(afterIce.vel.x).toBeCloseTo(afterStone.vel.x, 5);
    expect(afterIce.vel.x).toBeCloseTo(0.3 * Math.fround(0.91), 10);
  });
});
