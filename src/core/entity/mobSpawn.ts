import { GRASS, isSolidId, TORCH } from '../blocks/registry';
import { spawnMob, type Mob, type MobKind } from './mob';

const TORCH_LIGHT = 14; // 火把发光等级（与 registry 一致）；逐格 −1 衰减

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

// 敌对生物落脚：脚下任意实心(不限草地) + 头两格空。用于夜里在地表刷僵尸/骷髅。
export function canSpawnHostileAt(world: SpawnWorld, x: number, y: number, z: number): boolean {
  if (!isSolidId(world.getBlock(x, y - 1, z))) return false;
  if (isSolidId(world.getBlock(x, y, z))) return false;
  if (isSolidId(world.getBlock(x, y + 1, z))) return false;
  return true;
}

// (x,y,z) 处是否够暗能刷敌对：曼哈顿 14 格内无火把（→ 方块光为 0）。忽略遮挡=偏保守(火把安全区略大些)。
// 夜里天光本就≈0，故"无火把照到"即"亮度 0"。火把因此能在身边圈出不刷怪的安全区（同 MC）。
export function isDarkEnoughForSpawn(world: SpawnWorld, x: number, y: number, z: number): boolean {
  const R = TORCH_LIGHT - 1; // 13：火把在此距离内会让该格方块光 >0
  for (let dy = -R; dy <= R; dy++) {
    const ry = R - Math.abs(dy);
    for (let dz = -ry; dz <= ry; dz++) {
      const rx = ry - Math.abs(dz);
      for (let dx = -rx; dx <= rx; dx++) {
        if (world.getBlock(x + dx, y + dy, z + dz) === TORCH) return false; // 有火把照到 → 不够暗
      }
    }
  }
  return true;
}

// 夜里在玩家周围环带(默认 16–32 格)的【暗处】地表刷一小群敌对生物：远到不贴脸、近到会摸上门。
// 仅在 Game 判定"夜晚"时调用（白天会被日晒清掉）；火把照亮处(亮度>0)不刷。找不到合适地表则返回空。
export function spawnHostileRing(
  kind: MobKind,
  cx: number,
  cz: number,
  rng: () => number,
  world: SpawnWorld,
  surfaceY: (x: number, z: number) => number,
  ringMin = 16,
  ringMax = 32,
): Mob[] {
  for (let tries = 0; tries < 14; tries++) {
    const ang = rng() * Math.PI * 2;
    const d = ringMin + rng() * (ringMax - ringMin);
    const bx = Math.floor(cx + Math.cos(ang) * d);
    const bz = Math.floor(cz + Math.sin(ang) * d);
    const bh = surfaceY(bx, bz);
    if (!isDarkEnoughForSpawn(world, bx, bh + 1, bz)) continue; // 太亮(近火把) → 换个方向再试
    const mobs: Mob[] = [];
    const n = 1 + Math.floor(rng() * 3); // 1–3 只一小群
    for (let i = 0; i < n; i++) {
      const x = bx + Math.floor((rng() * 2 - 1) * 2);
      const z = bz + Math.floor((rng() * 2 - 1) * 2);
      const h = surfaceY(x, z);
      if (canSpawnHostileAt(world, x, h + 1, z)) mobs.push(spawnMob(kind, x + 0.5, h + 1, z + 0.5));
    }
    if (mobs.length) return mobs;
  }
  return [];
}

// 在玩家附近【地下暗洞/矿洞】刷敌对：白天黑夜都刷（洞里常暗，同 MC）。
// 在水平环带随机选列，在玩家 y 上下的竖直带里找：脚下实心 + 头两格空(可落脚) + 离地表 ≥DEPTH(无天光，够暗)
// + 无火把照到 的洞室。地表/浅坑(够亮)与实心岩(无空腔)自然找不到 → 返回空(不硬刷)。
export function spawnHostileCave(
  kind: MobKind,
  cx: number,
  cy: number, // 玩家 y：在其上下竖直带里找洞
  cz: number,
  rng: () => number,
  world: SpawnWorld,
  surfaceY: (x: number, z: number) => number,
  ringMin = 5,
  ringMax = 24,
): Mob[] {
  const DEPTH = 5; // 距地表至少 5 格才算"够暗的洞"(避开浅坑/天光直射处)
  for (let tries = 0; tries < 24; tries++) {
    const ang = rng() * Math.PI * 2;
    const d = ringMin + rng() * (ringMax - ringMin);
    const bx = Math.floor(cx + Math.cos(ang) * d);
    const bz = Math.floor(cz + Math.sin(ang) * d);
    const yTop = Math.min(Math.floor(cy) + 8, surfaceY(bx, bz) - DEPTH); // 不高于地表下 DEPTH(保证暗)
    const yBot = Math.max(2, Math.floor(cy) - 14);
    for (let y = yTop; y >= yBot; y--) {
      if (!canSpawnHostileAt(world, bx, y, bz)) continue; // 脚下实心 + 头两格空(洞室)
      if (!isDarkEnoughForSpawn(world, bx, y, bz)) continue; // 近火把 → 换格往下找
      const mobs: Mob[] = [];
      const n = 1 + Math.floor(rng() * 2); // 洞里 1–2 只
      for (let i = 0; i < n; i++) {
        const x = bx + Math.floor((rng() * 2 - 1) * 2);
        const z = bz + Math.floor((rng() * 2 - 1) * 2);
        for (let dy = 1; dy >= -1; dy--) {
          const sy = y + dy;
          if (sy < surfaceY(x, z) - DEPTH && canSpawnHostileAt(world, x, sy, z)) {
            mobs.push(spawnMob(kind, x + 0.5, sy, z + 0.5));
            break;
          }
        }
      }
      if (mobs.length) return mobs;
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
