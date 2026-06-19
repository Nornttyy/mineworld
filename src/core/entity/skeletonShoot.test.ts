import { describe, it, expect } from 'vitest';
import { spawnMob } from './mob';
import { updateHostile, SKELETON_ARROW_SPEED } from './hostileAi';
import { spawnArrow, stepArrow } from './arrow';
import { WIDTH, HEIGHT, type Vec3, type VoxelWorld } from '../physics/player';

// 端到端：骷髅 AI 射箭事件 → 生成箭实体 → 抛物线飞行（带下坠瞄准补偿）→ 命中玩家 AABB（复刻 Game 的扫掠判定）。
const FLAT: VoxelWorld = { isSolid: (_x: number, y: number) => y <= 10, isWater: () => false };

// 在 FLAT 世界里：骷髅在原点，玩家正东 dist 格、站在 y=11，模拟一发是否命中玩家碰撞盒。
function hitsPlayerAt(dist: number): boolean {
  const sk = spawnMob('skeleton', 0, 11, 0);
  const player: Vec3 = { x: dist, y: 11, z: 0 };
  const { events } = updateHostile(sk, FLAT, () => 0.5, player, false);
  const ev = events.find((e) => e.kind === 'shootArrow');
  if (!ev || ev.kind !== 'shootArrow') return false;
  const a = spawnArrow(ev.from.x, ev.from.y, ev.from.z, ev.dir.x, ev.dir.y, ev.dir.z, SKELETON_ARROW_SPEED, false, ev.damage);
  const hw = WIDTH / 2;
  const inPlayer = (x: number, y: number, z: number): boolean =>
    x >= player.x - hw && x <= player.x + hw && y >= player.y && y <= player.y + HEIGHT && z >= player.z - hw && z <= player.z + hw;
  for (let t = 0; t < 120 && !a.stuck; t++) {
    const ox = a.x;
    const oy = a.y;
    const oz = a.z;
    stepArrow(a, FLAT);
    const steps = Math.max(1, Math.ceil(Math.hypot(a.x - ox, a.y - oy, a.z - oz) / 0.2));
    for (let s = 1; s <= steps; s++) {
      const f = s / steps;
      if (inPlayer(ox + (a.x - ox) * f, oy + (a.y - oy) * f, oz + (a.z - oz) * f)) return true;
    }
  }
  return false;
}

describe('骷髅射箭命中玩家（端到端链路）', () => {
  // 近、中、远全射程都应命中（下坠补偿生效，不会落地射空）
  for (const dist of [4, 6, 9, 12, 14]) {
    it(`${dist} 格外的玩家会被骷髅一箭命中`, () => {
      expect(hitsPlayerAt(dist)).toBe(true);
    });
  }
});
