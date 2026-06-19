import { describe, it, expect } from 'vitest';
import { spawnMob, type MobEvent } from './mob';
import { updateHostile } from './hostileAi';
import type { Vec3, VoxelWorld } from '../physics/player';

// 平地：y<=10 实心，怪站在 y=11
const FLAT: VoxelWorld = { isSolid: (_x: number, y: number) => y <= 10, isWater: () => false };
const rng = (): number => 0.5; // 确定性

function shoot(events: MobEvent[]): Extract<MobEvent, { kind: 'shootArrow' }> | undefined {
  return events.find((e) => e.kind === 'shootArrow') as never;
}

describe('骷髅远程 AI（拉开距离 + 射箭）', () => {
  it('玩家在射程内 + 视线通畅 + 冷却就绪 → 射一箭，方向朝玩家', () => {
    const sk = spawnMob('skeleton', 0, 11, 0);
    const target: Vec3 = { x: 8, y: 11, z: 0 }; // 正东 8 格
    const { events } = updateHostile(sk, FLAT, rng, target, false);
    const ev = shoot(events);
    expect(ev).toBeDefined();
    expect(ev!.dir.x).toBeGreaterThan(0); // 朝 +x（玩家方向）
    expect(ev!.damage).toBeGreaterThan(0);
  });

  it('射完进入冷却：下一刻不再射', () => {
    const sk = spawnMob('skeleton', 0, 11, 0);
    const target: Vec3 = { x: 8, y: 11, z: 0 };
    const r1 = updateHostile(sk, FLAT, rng, target, false);
    expect(shoot(r1.events)).toBeDefined();
    Object.assign(sk, r1.mob); // atkCd 已置
    const r2 = updateHostile(sk, FLAT, rng, target, false);
    expect(shoot(r2.events)).toBeUndefined();
  });

  it('玩家贴太近 → 后退拉开距离（远离玩家而非贴上去）', () => {
    const sk = spawnMob('skeleton', 0, 11, 0);
    const target: Vec3 = { x: 3, y: 11, z: 0 }; // 仅 3 格，太近
    const { mob } = updateHostile(sk, FLAT, rng, target, false);
    expect(mob.vel.x).toBeLessThan(0); // 朝 -x 后退（玩家在 +x）
  });

  it('中间有墙挡住视线 → 不射箭', () => {
    const WALL: VoxelWorld = {
      isSolid: (x: number, y: number) => y <= 10 || x === 4, // 平地 + x=4 整列墙
      isWater: () => false,
    };
    const sk = spawnMob('skeleton', 0, 11, 0);
    const target: Vec3 = { x: 8, y: 11, z: 0 }; // 射程内但被 x=4 墙挡
    const { events } = updateHostile(sk, WALL, rng, target, false);
    expect(shoot(events)).toBeUndefined();
  });
});
