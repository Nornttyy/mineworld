import { describe, expect, it } from 'vitest';
import {
  ARMOR_ITEM_IDS,
  itemMaxDurability,
  itemMaxStack,
  armorOf,
  IRON_CHESTPLATE,
  DIAMOND_HELMET,
  GOLD_INGOT,
} from '../items/items';
import {
  armorStats,
  damageAfterArmor,
  emptyArmor,
  deserializeArmor,
  serializeArmor,
  wearArmor,
  bypassesArmor,
  type ArmorInventory,
} from './armor';
import { gridResult } from '../crafting/gridCraft';
import { smeltResult } from '../crafting/smelting';
import { missingCreativeItems } from '../inventory/creative';

const set = (first: number): ArmorInventory =>
  [0, 1, 2, 3].map((i) => ({ id: first + i, count: 1 })) as ArmorInventory;

describe('Java 26.3 unenchanted armor', () => {
  it.each([
    [302, [55, 80, 75, 65], 7, 0],
    [306, [165, 240, 225, 195], 15, 0],
    [310, [77, 112, 105, 91], 11, 0],
    [314, [363, 528, 495, 429], 20, 8],
  ] as const)(
    'matches official components for set beginning %i',
    (first, durability, points, toughness) => {
      expect(armorStats(set(first))).toEqual({ armor: points, toughness });
      for (let i = 0; i < 4; i++) {
        expect(itemMaxDurability(first + i)).toBe(durability[i]);
        expect(itemMaxStack(first + i)).toBe(1);
      }
    },
  );

  it('reduces small and large hits using toughness and retains fractional damage', () => {
    expect(damageAfterArmor(10, emptyArmor())).toBe(10);
    expect(damageAfterArmor(10, set(306))).toBeCloseTo(6);
    expect(damageAfterArmor(10, set(314))).toBeCloseTo(3);
    expect(damageAfterArmor(100, set(314))).toBeCloseTo(84);
    expect(damageAfterArmor(1, set(306))).toBeCloseTo(0.42);
    expect(damageAfterArmor(NaN, set(306))).toBe(0);
  });

  it('wears every equipped piece by floor(raw/4), min one, and removes broken pieces', () => {
    const armor = set(306);
    armor[0]!.dur = 2;
    expect(wearArmor(armor, 11, 'projectile')).toEqual([306]);
    expect(armor[0]).toBeNull();
    expect(armor[1]!.dur).toBe(238);
    expect(wearArmor(armor, 0.5, 'melee')).toEqual([]);
    expect(armor[1]!.dur).toBe(237);
    const before = serializeArmor(armor);
    wearArmor(armor, 0, 'lava');
    expect(armor).toEqual(before);
  });

  it('bypasses armor and wear for fall, starvation, drowning and ongoing fire', () => {
    for (const kind of ['fall', 'starve', 'drown', 'on_fire'] as const) {
      const armor = set(306);
      expect(bypassesArmor(kind)).toBe(true);
      wearArmor(armor, 10, kind);
      expect(armor).toEqual(set(306));
    }
    for (const kind of ['lava', 'cactus', 'melee', 'projectile', 'explosion'] as const) {
      expect(bypassesArmor(kind)).toBe(false);
    }
  });

  it('the breaking hit uses remaining armor, matching the immediate attribute-removal callback', () => {
    const armor: ArmorInventory = [null, { id: IRON_CHESTPLATE, count: 1, dur: 1 }, null, null];
    wearArmor(armor, 4, 'melee');
    expect(damageAfterArmor(4, armor)).toBe(4);
  });

  it('migrates absent equipment and sanitizes wrong slots/IDs/invalid durability independently of inventory', () => {
    expect(deserializeArmor(undefined)).toEqual(emptyArmor());
    expect(
      deserializeArmor([
        { id: IRON_CHESTPLATE, count: 1 },
        { id: 7, count: 64 },
        { id: 308, count: 1, dur: NaN },
        { id: 309, count: 1, dur: 0 },
      ]),
    ).toEqual(emptyArmor());
    const armor = deserializeArmor([{ id: DIAMOND_HELMET, count: 3, dur: 999 }, null, null, null]);
    expect(armor[0]).toEqual({ id: DIAMOND_HELMET, count: 1, dur: 363 });
    const saved = serializeArmor(armor);
    armor[0]!.dur = 1;
    expect(saved[0]!.dur).toBe(363);
  });

  it('crafts all sixteen pieces with the official patterns and makes gold obtainable', () => {
    const patterns = [
      ['XXX', 'X X'],
      ['X X', 'XXX', 'XXX'],
      ['XXX', 'X X', 'X X'],
      ['X X', 'X X'],
    ];
    for (const id of ARMOR_ITEM_IDS) {
      const index = ['head', 'chest', 'legs', 'feet'].indexOf(armorOf(id)!.slot);
      const ingredient = { leather: 283, iron: 274, gold: 318, diamond: 296 }[
        armorOf(id)!.material
      ];
      const grid = patterns[index].map((row) =>
        [...row].map((c) => (c === 'X' ? { id: ingredient, count: 1 } : null)),
      );
      expect(gridResult(grid)).toEqual({ id, count: 1 });
    }
    expect(smeltResult(76)).toBe(GOLD_INGOT);
    expect(smeltResult(79)).toBe(GOLD_INGOT);
    expect(smeltResult(78)).toBe(274);
    expect(smeltResult(319)).toBe(274);
    expect(smeltResult(320)).toBe(GOLD_INGOT);
    expect(missingCreativeItems()).toEqual([]);
  });
});
