import { MOB_DEFS, type Mob } from './mob';
import { isSolidId, isWaterId } from '../blocks/registry';
import { CHUNK_H } from '../world/chunk';

export interface BlockReader {
  getBlock(x: number, y: number, z: number): number;
}

// 怪物此刻是否被日光直晒（→ 白天会燃烧）。同 MC：白天、且不在水里、且头顶到天空无遮挡。
//  - 夜晚 → 否。
//  - 身体任一格在水里 → 否（水灭火/挡阳）。
//  - 头顶往上遇到实心方块或水（遮住阳光）→ 否（屋檐/洞里/水下）。
export function isMobSunlit(mob: Mob, world: BlockReader, isNight: boolean): boolean {
  if (isNight) return false;
  const x = Math.floor(mob.pos.x);
  const z = Math.floor(mob.pos.z);
  const top = Math.floor(mob.pos.y + MOB_DEFS[mob.kind].height);
  for (let y = Math.floor(mob.pos.y); y <= top; y++) {
    if (isWaterId(world.getBlock(x, y, z))) return false; // 身体泡在水里
  }
  for (let y = top + 1; y < CHUNK_H; y++) {
    const b = world.getBlock(x, y, z);
    if (isSolidId(b) || isWaterId(b)) return false; // 头顶有遮挡（方块或水）
  }
  return true;
}
