import { describe, it, expect } from 'vitest';
import { spawnMob, type MobEvent } from './mob';
import { updateHostile } from './hostileAi';
import type { VoxelWorld } from '../physics/player';

// 平地世界：y≤0 实心(地板)，生物站在 y=1。
const flat: VoxelWorld = { isSolid: (_x, y, _z) => y <= 0, isWater: () => false };
const rng = (): number => 0.5;
const dmgOf = (events: MobEvent[]): number | null => {
  const e = events.find((ev) => ev.kind === 'attackPlayer');
  return e && e.kind === 'attackPlayer' ? e.damage : null;
};

describe('敌对生物 AI（僵尸/骷髅）', () => {
  it('察觉范围内朝玩家移动（追击）', () => {
    const z = spawnMob('zombie', 5, 1, 5);
    const r = updateHostile(z, flat, rng, { x: 12, y: 1, z: 5 }, false);
    expect(r.mob.ai.state).toBe('chase');
    expect(r.mob.pos.x).toBeGreaterThan(5); // 朝 +x（玩家方向）挪动
  });

  it('贴近时接触攻击玩家：发 attackPlayer + 进入冷却（冷却内不再攻击）', () => {
    const z = spawnMob('zombie', 5, 1, 5);
    const r = updateHostile(z, flat, rng, { x: 6.2, y: 1, z: 5 }, false);
    expect(dmgOf(r.events)).toBe(3); // 僵尸攻击 3
    expect(r.mob.atkCd).toBeGreaterThan(0);
    const r2 = updateHostile(r.mob, flat, rng, { x: 6.2, y: 1, z: 5 }, false);
    expect(dmgOf(r2.events)).toBeNull(); // 冷却内
  });

  it('白天日晒持续掉血 → 最终烧死并掉落', () => {
    let m = spawnMob('skeleton', 5, 1, 5);
    let dead = false;
    let dropped = false;
    for (let i = 0; i < 400 && !dead; i++) {
      const r = updateHostile(m, flat, rng, null, true); // sunlit=true
      m = r.mob;
      if (r.events.some((e) => e.kind === 'death')) dead = true;
      if (r.events.some((e) => e.kind === 'drops')) dropped = true;
    }
    expect(dead).toBe(true);
    expect(dropped).toBe(true);
    expect(m.health).toBeLessThanOrEqual(0);
  });

  it('夜里/阴影下（sunlit=false）不掉血', () => {
    const m = spawnMob('zombie', 5, 1, 5);
    const r = updateHostile(m, flat, rng, null, false);
    expect(r.mob.health).toBe(m.health);
  });

  it('没察觉到玩家（target=null）不攻击', () => {
    const z = spawnMob('zombie', 5, 1, 5);
    const r = updateHostile(z, flat, rng, null, false);
    expect(dmgOf(r.events)).toBeNull();
  });
});
