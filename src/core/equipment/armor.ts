import { armorOf, type ArmorSlot } from '../items/items';
import type { ItemStack } from '../inventory/inventory';

export { armorOf } from '../items/items';
export const ARMOR_SLOTS: readonly ArmorSlot[] = ['head', 'chest', 'legs', 'feet'];
export type ArmorInventory = [
  ItemStack | null,
  ItemStack | null,
  ItemStack | null,
  ItemStack | null,
];
export type ArmorDamageKind =
  | 'melee'
  | 'projectile'
  | 'explosion'
  | 'cactus'
  | 'lava'
  | 'fall'
  | 'drown'
  | 'starve'
  | 'on_fire';

export function emptyArmor(): ArmorInventory {
  return [null, null, null, null];
}

export function acceptsArmor(index: number, stack: ItemStack | null): boolean {
  return (
    index >= 0 &&
    index < 4 &&
    (!stack || (stack.count === 1 && armorOf(stack.id)?.slot === ARMOR_SLOTS[index]))
  );
}

/** Older saves have no equipment field. Never move invalid equipment into the bag. */
export function deserializeArmor(value: unknown): ArmorInventory {
  const result = emptyArmor();
  if (!Array.isArray(value)) return result;
  for (let i = 0; i < 4; i++) {
    const s = value[i];
    if (
      !s ||
      typeof s !== 'object' ||
      !Number.isInteger(s.id) ||
      !Number.isFinite(s.count) ||
      s.count < 1
    )
      continue;
    const def = armorOf(s.id);
    if (!def || def.slot !== ARMOR_SLOTS[i]) continue;
    if (s.dur !== undefined && (!Number.isFinite(s.dur) || s.dur <= 0)) continue;
    result[i] =
      s.dur === undefined
        ? { id: s.id, count: 1 }
        : { id: s.id, count: 1, dur: Math.min(def.maxDurability, Math.floor(s.dur)) };
    if (result[i]?.dur === 0) result[i] = null;
  }
  return result;
}

export function serializeArmor(armor: ArmorInventory): ArmorInventory {
  return deserializeArmor(armor);
}

export function armorStats(armor: ArmorInventory): { armor: number; toughness: number } {
  let points = 0,
    toughness = 0;
  for (let i = 0; i < 4; i++) {
    const stack = armor[i];
    if (!stack || !acceptsArmor(i, stack) || (stack.dur !== undefined && stack.dur <= 0)) continue;
    const def = armorOf(stack.id)!;
    points += def.armor;
    toughness += def.toughness;
  }
  return { armor: points, toughness };
}

/** Java CombatRules, without enchantments or resistance effects. */
export function damageAfterArmor(rawDamage: number, armor: ArmorInventory): number {
  if (!Number.isFinite(rawDamage) || rawDamage <= 0) return 0;
  const stats = armorStats(armor);
  const effective = Math.min(
    20,
    Math.max(stats.armor / 5, stats.armor - rawDamage / (2 + stats.toughness / 4)),
  );
  return rawDamage * (1 - effective / 25);
}

/** Official data/minecraft/tags/damage_type/bypasses_armor.json. Lava/cactus are not bypasses. */
export function bypassesArmor(kind: ArmorDamageKind): boolean {
  return kind === 'fall' || kind === 'drown' || kind === 'starve' || kind === 'on_fire';
}

/** Call only for the damage accepted by the hurt cooldown, before applying it to health. */
export function wearArmor(
  armor: ArmorInventory,
  rawDamage: number,
  kind: ArmorDamageKind,
): number[] {
  const broken: number[] = [];
  if (!Number.isFinite(rawDamage) || rawDamage <= 0 || bypassesArmor(kind)) return broken;
  const wear = Math.max(1, Math.floor(rawDamage / 4));
  for (let i = 0; i < 4; i++) {
    const stack = armor[i];
    if (!stack || !acceptsArmor(i, stack)) continue;
    const max = armorOf(stack.id)!.maxDurability;
    stack.dur = Math.min(stack.dur ?? max, max) - wear;
    if (stack.dur <= 0) {
      broken.push(stack.id);
      armor[i] = null;
    }
  }
  return broken;
}
