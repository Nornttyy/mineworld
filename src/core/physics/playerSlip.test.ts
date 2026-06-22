import { describe, it, expect } from 'vitest';
import { step } from './step';
import type { Player, VoxelWorld } from './player';
import { ICE } from '../blocks/registry';

// 石头方块 id（非冰）
const STONE = 1;

/**
 * 构造一个 VoxelWorld：y < 0 是地板（实心），脚下方块 id 由 floorId 决定。
 * 脚部位置约 y=0，getBlock(x, -1, z) 返回 floorId（脚正下方 0.1 格处向下取整 = -1 → 返回 floorId）。
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

describe('ice slipperiness (Task 4.2)', () => {
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

  it('普通地面（石头）的行为与原实现一致：无输入速度应衰减', () => {
    const stoneWorld = makeWorld(STONE);
    const p0 = slidingPlayer(0.3, 0);
    const idle = { forward: 0, right: 0, yaw: 0, jump: false };

    const after = step(p0, idle, stoneWorld);
    // 普通地面速度应减小（不是原样保留）
    expect(Math.hypot(after.vel.x, after.vel.z)).toBeLessThan(0.3);
  });

  it('冰上无输入速度应大幅保留（接近0.98×初速）', () => {
    const iceWorld = makeWorld(ICE);
    const p0 = slidingPlayer(0.3, 0);
    const idle = { forward: 0, right: 0, yaw: 0, jump: false };

    const after = step(p0, idle, iceWorld);
    const speedAfter = Math.hypot(after.vel.x, after.vel.z);

    // 冰上0.98滑度：保留速度应接近 0.3 * 0.98 ≈ 0.294
    expect(speedAfter).toBeGreaterThan(0.25); // 明显保留
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

    // 空中水平速度不受地面影响（两者相同，都是 wish=0 所以 vel.x=0）
    expect(afterIce.vel.x).toBeCloseTo(afterStone.vel.x, 5);
  });
});
