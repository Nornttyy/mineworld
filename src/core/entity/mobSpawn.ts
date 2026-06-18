import { GRASS, isSolidId } from '../blocks/registry';
import { spawnMob, type Mob, type MobKind } from './mob';

// 自然生成规则（纯逻辑，靠只读世界视图，可单测）。
export interface SpawnWorld {
  getBlock(x: number, y: number, z: number): number;
}

// 能否在 (x,y,z) 落脚生成：脚下(y-1)是草方块，且身体两格(y, y+1)非实心。
export function canSpawnAt(world: SpawnWorld, x: number, y: number, z: number): boolean {
  if (world.getBlock(x, y - 1, z) !== GRASS) return false;
  if (isSolidId(world.getBlock(x, y, z))) return false;
  if (isSolidId(world.getBlock(x, y + 1, z))) return false;
  return true;
}

// 成群生成（最多 4 只，同 MC）：在中心 ±4 格内随机撒点，每点在 cy 附近上下找可落脚的格。
export function spawnGroup(
  kind: MobKind,
  cx: number,
  cy: number,
  cz: number,
  rng: () => number,
  world: SpawnWorld,
): Mob[] {
  const mobs: Mob[] = [];
  for (let tries = 0; tries < 16 && mobs.length < 4; tries++) {
    const x = Math.floor(cx) + Math.floor((rng() * 2 - 1) * 4);
    const z = Math.floor(cz) + Math.floor((rng() * 2 - 1) * 4);
    for (let dy = 3; dy >= -3; dy--) {
      const y = Math.floor(cy) + dy;
      if (canSpawnAt(world, x, y, z)) {
        mobs.push(spawnMob(kind, x + 0.5, y, z + 0.5));
        break;
      }
    }
  }
  return mobs;
}
