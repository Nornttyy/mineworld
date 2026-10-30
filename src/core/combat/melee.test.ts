import { describe, expect, it } from 'vitest';
import * as items from '../items/items';
import { hurtMob, spawnMob } from '../entity/mob';
import { attackStrength, chargedMeleeDamage, meleeAttributes } from './melee';

// Unenchanted Java weapon attributes; do not derive the expected table from
// tool tiers, since that would repeat rather than verify the implementation.
const attributes = [
  [items.WOODEN_SWORD, 4, 1.6], [items.STONE_SWORD, 5, 1.6],
  [items.IRON_SWORD, 6, 1.6], [items.DIAMOND_SWORD, 7, 1.6],
  [items.WOODEN_AXE, 7, 0.8], [items.STONE_AXE, 9, 0.8],
  [items.IRON_AXE, 9, 0.9], [items.DIAMOND_AXE, 9, 1],
  [items.WOODEN_PICKAXE, 2, 1.2], [items.STONE_PICKAXE, 3, 1.2],
  [items.IRON_PICKAXE, 4, 1.2], [items.DIAMOND_PICKAXE, 5, 1.2],
  [items.WOODEN_SHOVEL, 2.5, 1], [items.STONE_SHOVEL, 3.5, 1],
  [items.IRON_SHOVEL, 4.5, 1], [items.DIAMOND_SHOVEL, 5.5, 1],
  [items.WOODEN_HOE, 1, 1], [items.STONE_HOE, 1, 2],
  [items.IRON_HOE, 1, 3], [items.DIAMOND_HOE, 1, 4],
] as const;

describe('Java melee damage and cooldown', () => {
  it.each(attributes)('item %i has damage %f and attack speed %f', (id, damage, speed) => {
    expect(meleeAttributes(id)).toEqual({ damage, speed });
    expect(attackStrength(id, 10 / speed, 0)).toBeCloseTo(0.5);
    expect(attackStrength(id, 20 / speed, 0)).toBeCloseTo(1);
  });

  it('empty hand and ordinary items use the player base attributes', () => {
    for (const id of [null, items.STICK, items.BOW, 4]) {
      expect(meleeAttributes(id)).toEqual({ damage: 1, speed: 4 });
    }
  });

  it('clamps charge and samples damage at the half-tick offset', () => {
    expect(attackStrength(items.IRON_SWORD, -10, 0)).toBe(0);
    expect(attackStrength(items.IRON_SWORD, 1000)).toBe(1);
    expect(attackStrength(items.IRON_SWORD, 0)).toBeCloseTo(0.04);
    expect(attackStrength(items.IRON_SWORD, 12)).toBe(1);
    expect(chargedMeleeDamage(items.IRON_SWORD, 0)).toBeCloseTo(1.20768);
    expect(chargedMeleeDamage(items.IRON_SWORD, 12)).toBe(6);
  });

  it('uses a quadratic weak-hit curve and only permits charged falling critical hits', () => {
    expect(chargedMeleeDamage(items.WOODEN_SWORD, 5.75)).toBeCloseTo(1.6);
    expect(chargedMeleeDamage(items.WOODEN_SWORD, 5.75, true)).toBeCloseTo(1.6);
    expect(chargedMeleeDamage(items.WOODEN_SWORD, 12, true)).toBe(6);
    expect(chargedMeleeDamage(items.WOODEN_SWORD, 10.75, true)).toBeCloseTo(
      chargedMeleeDamage(items.WOODEN_SWORD, 10.75, false),
    );
  });
});

describe('damage immunity window', () => {
  it('rejects equal/weaker hits and stronger hits only add the difference without knockback', () => {
    const initial = spawnMob('zombie', 0, 0, 0);
    const first = hurtMob(initial, 4, { x: 1, z: 0 }, () => 0.5);
    expect(initial.health).toBe(20);
    expect(first.mob.health).toBe(16);
    expect(first.mob.hurtCooldown).toBe(10);
    for (const amount of [1, 4]) {
      const ignored = hurtMob(first.mob, amount, { x: 0, z: 1 }, () => 0.5);
      expect(ignored.events).toEqual([]);
      expect(ignored.mob).toEqual(first.mob);
    }
    first.mob.hurtCooldown = 6;
    const stronger = hurtMob(first.mob, 9, { x: 0, z: 1 }, () => 0.5);
    expect(stronger.mob.health).toBe(11);
    expect(stronger.events.map((e) => e.kind)).toEqual(['hurt']);
    expect(stronger.mob.hurtCooldown).toBe(6);
    expect(stronger.mob.hurtWindowDamage).toBe(9);
    expect(stronger.mob.vel).toEqual(first.mob.vel);
    expect(stronger.mob.kbx).toBe(first.mob.kbx);
    expect(stronger.mob.kbz).toBe(first.mob.kbz);
    stronger.mob.hurtCooldown = 0;
    const nextWindow = hurtMob(stronger.mob, 4, { x: 0, z: 1 }, () => 0.5);
    expect(nextWindow.mob.health).toBe(7);
    expect(nextWindow.mob.hurtWindowDamage).toBe(4);
    expect(nextWindow.mob.kbz).toBe(0.4);
  });
});
