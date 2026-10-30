import { toolOf } from '../items/items';

/** Java attack attributes for the implemented unenchanted tools (wood, stone, iron, diamond). */
export function meleeAttributes(id: number | null): { damage: number; speed: number } {
  const tool = id === null ? null : toolOf(id);
  if (!tool) return { damage: 1, speed: 4 };
  const tier = Math.max(1, Math.min(4, tool.tier));
  switch (tool.kind) {
    case 'sword':
      return { damage: tier + 3, speed: 1.6 };
    case 'axe':
      return { damage: tier === 1 ? 7 : 9, speed: [0.8, 0.8, 0.9, 1][tier - 1] };
    case 'pickaxe':
      return { damage: tier + 1, speed: 1.2 };
    case 'shovel':
      return { damage: tier + 1.5, speed: 1 };
    case 'hoe':
      return { damage: 1, speed: tier };
  }
}

export function attackStrength(id: number | null, elapsedTicks: number, partialTick = 0.5): number {
  return Math.max(0, Math.min(1, ((elapsedTicks + partialTick) * meleeAttributes(id).speed) / 20));
}

export function chargedMeleeDamage(
  id: number | null,
  elapsedTicks: number,
  fallingCritical = false,
): number {
  const strength = attackStrength(id, elapsedTicks);
  const critical = fallingCritical && strength > 0.9;
  return meleeAttributes(id).damage * (0.2 + 0.8 * strength * strength) * (critical ? 1.5 : 1);
}
