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

// 在玩家周围「环带」(默认 28–48 格：在视野里、又不贴脸)的草地上刷一群，供"边走边补充种群"。
// surfaceY(x,z) 给某列地表(草)y；试多个角度/距离，找到草地就在那刷群，找不到返回空(不硬刷)。
export function spawnRingGroup(
  kind: MobKind,
  cx: number,
  cz: number,
  rng: () => number,
  world: SpawnWorld,
  surfaceY: (x: number, z: number) => number,
  ringMin = 24,
  ringMax = 44,
  dirAngle: number | null = null, // 给定则把刷点偏向该朝向(玩家前进方向)，让玩家走进兽群
  spread = Math.PI,
): Mob[] {
  for (let tries = 0; tries < 12; tries++) {
    const ang = dirAngle === null ? rng() * Math.PI * 2 : dirAngle + (rng() * 2 - 1) * spread;
    const d = ringMin + rng() * (ringMax - ringMin);
    const x = Math.floor(cx + Math.cos(ang) * d);
    const z = Math.floor(cz + Math.sin(ang) * d);
    const h = surfaceY(x, z);
    if (world.getBlock(x, h, z) === GRASS) {
      return spawnGroup(kind, x + 0.5, h + 1, z + 0.5, rng, world);
    }
  }
  return [];
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
