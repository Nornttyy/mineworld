import { describe, it, expect } from 'vitest';
import { spawnMob } from './mob';
import { updateHostile } from './hostileAi';
import { spawnArrow, stepArrow } from './arrow';
import { WIDTH, HEIGHT, type Vec3, type VoxelWorld } from '../physics/player';

// 端到端：骷髅 AI 射箭事件 → 生成箭实体 → 抛物线飞行 → 进入玩家 AABB（复刻 Game 的命中采样）。
const FLAT: VoxelWorld = { isSolid: (_x: number, y: number) => y <= 10, isWater: () => false };

describe('骷髅射箭命中玩家（端到端链路）', () => {
  it('骷髅 AI 射出的箭飞向玩家、途中进入玩家碰撞盒', () => {
    const sk = spawnMob('skeleton', 0, 11, 0);
    const player: Vec3 = { x: 8, y: 11, z: 0 }; // 玩家脚部，正东 8 格

    // 1) AI 决策 → shootArrow 事件
    const { events } = updateHostile(sk, FLAT, () => 0.5, player, false);
    const ev = events.find((e) => e.kind === 'shootArrow');
    expect(ev).toBeDefined();
    const shoot = ev as Extract<typeof ev, { kind: 'shootArrow' }>;
    expect(shoot.damage).toBeGreaterThan(0);

    // 2) 用事件生成敌对箭（同 Game：fromPlayer=false、骷髅箭速 1.3）
    const a = spawnArrow(shoot.from.x, shoot.from.y, shoot.from.z, shoot.dir.x, shoot.dir.y, shoot.dir.z, 1.3, false, shoot.damage);

    // 3) 逐刻推进 + 沿段采样命中（复刻 Game.tickArrows 的扫掠判定）
    const hw = WIDTH / 2;
    const inPlayer = (x: number, y: number, z: number): boolean =>
      x >= player.x - hw && x <= player.x + hw && y >= player.y && y <= player.y + HEIGHT && z >= player.z - hw && z <= player.z + hw;
    let hit = false;
    for (let t = 0; t < 80 && !hit && !a.stuck; t++) {
      const ox = a.x;
      const oy = a.y;
      const oz = a.z;
      stepArrow(a, FLAT);
      const steps = Math.max(1, Math.ceil(Math.hypot(a.x - ox, a.y - oy, a.z - oz) / 0.2));
      for (let s = 1; s <= steps; s++) {
        const f = s / steps;
        if (inPlayer(ox + (a.x - ox) * f, oy + (a.y - oy) * f, oz + (a.z - oz) * f)) {
          hit = true;
          break;
        }
      }
    }
    expect(hit).toBe(true);
  });
});
