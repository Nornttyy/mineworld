import { describe, it, expect } from 'vitest';
import { spawnMob, updateMob, hurtMob, rollDrops, MOB_DEFS } from './mob';
import { makeRng } from '../math/rng';
import type { VoxelWorld } from '../physics/player';
import {
  RAW_PORKCHOP,
  RAW_BEEF,
  LEATHER,
  RAW_MUTTON,
  WOOL,
  RAW_CHICKEN,
  FEATHER,
} from '../items/items';

const flat = (topY: number): VoxelWorld => ({ isSolid: (_x, y) => y < topY });
const air: VoxelWorld = { isSolid: () => false };

describe('MOB_DEFS（1:1 MC）', () => {
  it('生命/体型/免摔', () => {
    expect(MOB_DEFS.chicken.hp).toBe(4);
    expect(MOB_DEFS.pig.hp).toBe(10);
    expect(MOB_DEFS.cow.hp).toBe(10);
    expect(MOB_DEFS.sheep.hp).toBe(8);
    expect(MOB_DEFS.chicken.fallImmune).toBe(true);
    expect(MOB_DEFS.pig.fallImmune).toBe(false);
    expect(MOB_DEFS.cow.height).toBe(1.4);
  });
});

describe('spawnMob', () => {
  it('按种类满血、idle、定位', () => {
    const m = spawnMob('sheep', 5, 10, 7);
    expect(m.kind).toBe('sheep');
    expect(m.health).toBe(8);
    expect(m.ai.state).toBe('idle');
    expect(m.pos).toEqual({ x: 5, y: 10, z: 7 });
    expect(m.hurtCooldown).toBe(0);
  });
});

describe('rollDrops（掉落表 1:1 MC）', () => {
  it('猪：1–3 生猪排', () => {
    const rng = makeRng(1);
    for (let i = 0; i < 50; i++) {
      const d = rollDrops('pig', rng);
      expect(d).toHaveLength(1);
      expect(d[0].id).toBe(RAW_PORKCHOP);
      expect(d[0].count).toBeGreaterThanOrEqual(1);
      expect(d[0].count).toBeLessThanOrEqual(3);
    }
  });
  it('牛：1–3 生牛肉 + 0–2 皮革', () => {
    const rng = makeRng(2);
    let sawLeather = false;
    for (let i = 0; i < 80; i++) {
      const d = rollDrops('cow', rng);
      const beef = d.find((s) => s.id === RAW_BEEF)!;
      expect(beef.count).toBeGreaterThanOrEqual(1);
      expect(beef.count).toBeLessThanOrEqual(3);
      const leather = d.find((s) => s.id === LEATHER);
      if (leather) {
        sawLeather = true;
        expect(leather.count).toBeGreaterThanOrEqual(1);
        expect(leather.count).toBeLessThanOrEqual(2);
      }
    }
    expect(sawLeather).toBe(true);
  });
  it('羊：1–2 生羊肉 + 1 羊毛', () => {
    const rng = makeRng(3);
    for (let i = 0; i < 50; i++) {
      const d = rollDrops('sheep', rng);
      expect(d.find((s) => s.id === WOOL)?.count).toBe(1);
      const m = d.find((s) => s.id === RAW_MUTTON)!;
      expect(m.count).toBeGreaterThanOrEqual(1);
      expect(m.count).toBeLessThanOrEqual(2);
    }
  });
  it('鸡：1 生鸡肉 + 0–2 羽毛', () => {
    const rng = makeRng(4);
    for (let i = 0; i < 50; i++) {
      const d = rollDrops('chicken', rng);
      expect(d.find((s) => s.id === RAW_CHICKEN)?.count).toBe(1);
      const f = d.find((s) => s.id === FEATHER);
      if (f) {
        expect(f.count).toBeGreaterThanOrEqual(1);
        expect(f.count).toBeLessThanOrEqual(2);
      }
    }
  });
});

describe('updateMob — 重力/落地', () => {
  it('空中下落：y 减小', () => {
    let m = spawnMob('pig', 0, 20, 0);
    const rng = makeRng(1);
    for (let i = 0; i < 3; i++) m = updateMob(m, air, rng).mob;
    expect(m.pos.y).toBeLessThan(20);
  });
  it('落到地面停住，onGround=true', () => {
    let m = spawnMob('pig', 0.5, 12, 0.5);
    const rng = makeRng(1);
    const w = flat(10);
    for (let i = 0; i < 60; i++) m = updateMob(m, w, rng).mob;
    expect(m.pos.y).toBeCloseTo(10, 1);
    expect(m.onGround).toBe(true);
  });
  it('鸡缓降：下落速度被钳住（不像猪越落越快）', () => {
    let chicken = spawnMob('chicken', 0, 50, 0);
    let pig = spawnMob('pig', 0, 50, 0);
    const rng = makeRng(1);
    for (let i = 0; i < 12; i++) {
      chicken = updateMob(chicken, air, rng).mob;
      pig = updateMob(pig, air, rng).mob;
    }
    expect(chicken.vel.y).toBeGreaterThan(-0.1);
    expect(pig.vel.y).toBeLessThan(-0.3);
  });
});

describe('updateMob — wander 朝目标走', () => {
  it('wander 状态朝目标方向产生水平速度', () => {
    const m = spawnMob('pig', 0.5, 10, 0.5);
    m.onGround = true;
    m.ai = { state: 'wander', timer: 100, target: { x: 10.5, y: 10, z: 0.5 } };
    const r = updateMob(m, flat(10), makeRng(1));
    expect(r.mob.vel.x).toBeGreaterThan(0);
    expect(r.mob.pos.x).toBeGreaterThan(0.5);
  });
});

describe('updateMob — 不掉崖', () => {
  it('1 格平台上朝崖外游荡也不掉下去', () => {
    const w: VoxelWorld = { isSolid: (x, y) => y < 10 && x === 0 }; // 只有 x=0 这一列是平台
    let m = spawnMob('pig', 0.5, 10, 0.5);
    m.onGround = true;
    m.ai = { state: 'wander', timer: 9999, target: { x: 50, y: 10, z: 0.5 } };
    const rng = makeRng(1);
    for (let i = 0; i < 40; i++) m = updateMob(m, w, rng).mob;
    expect(m.pos.y).toBeCloseTo(10, 1);
    expect(m.pos.x).toBeLessThan(1.5);
  });
});

describe('hurtMob', () => {
  it('扣血 + 进 panic + 击退 + 无敌帧', () => {
    const m = spawnMob('pig', 0, 10, 0);
    const r = hurtMob(m, 4, { x: 1, z: 0 }, makeRng(1));
    expect(r.mob.health).toBe(6);
    expect(r.mob.ai.state).toBe('panic');
    expect(r.mob.hurtCooldown).toBeGreaterThan(0);
    expect(r.mob.vel.x).toBeGreaterThan(0);
  });
  it('无敌帧内再次受击不掉血', () => {
    const m = spawnMob('pig', 0, 10, 0);
    const r1 = hurtMob(m, 4, { x: 1, z: 0 }, makeRng(1));
    const r2 = hurtMob(r1.mob, 4, { x: 1, z: 0 }, makeRng(1));
    expect(r2.mob.health).toBe(6);
  });
  it('血量归零 → death + drops 事件', () => {
    const m = spawnMob('chicken', 3, 10, 3);
    const r = hurtMob(m, 4, { x: 1, z: 0 }, makeRng(1));
    expect(r.mob.health).toBeLessThanOrEqual(0);
    expect(r.events.some((e) => e.kind === 'death')).toBe(true);
    expect(r.events.some((e) => e.kind === 'drops')).toBe(true);
  });
});

describe('updateMob — 鸡下蛋', () => {
  it('eggTimer 到 0 → layEgg 一次并重置到 6000–12000', () => {
    const m = spawnMob('chicken', 0.5, 10, 0.5);
    m.onGround = true;
    m.eggTimer = 1;
    const r = updateMob(m, flat(10), makeRng(1));
    expect(r.events.some((e) => e.kind === 'layEgg')).toBe(true);
    expect(r.mob.eggTimer).toBeGreaterThanOrEqual(6000);
    expect(r.mob.eggTimer).toBeLessThanOrEqual(12000);
  });
  it('猪不下蛋', () => {
    const m = spawnMob('pig', 0.5, 10, 0.5);
    m.onGround = true;
    m.eggTimer = 1;
    const r = updateMob(m, flat(10), makeRng(1));
    expect(r.events.some((e) => e.kind === 'layEgg')).toBe(false);
  });
});
