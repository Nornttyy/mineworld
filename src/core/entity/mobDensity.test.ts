import { describe, it, expect } from 'vitest';
import { ChunkWorld } from '../world/chunkWorld';
import { columnHeight } from '../worldgen/terrain';
import { GRASS, isSolidId } from '../blocks/registry';
import { spawnRingGroup, type SpawnWorld } from './mobSpawn';
import { updateMob, type Mob, type MobKind } from './mob';
import { makeRng } from '../math/rng';

// 回归测试：复刻 Game.tickMobs 的「边走边补充种群」逻辑，确认玩家走动时身边始终有生物
// （修复用户反馈"走几步路就看不到了"——旧逻辑刷新太慢/太远，走动后身边掉到 0）。
const DESPAWN_R = 88;
const NEAR_R = 48; // 统计/目标半径
const NEAR_TARGET = 6;
const MOB_CAP = 16;
const KINDS: MobKind[] = ['pig', 'cow', 'sheep', 'chicken'];

function near(mobs: Mob[], px: number, pz: number, r = NEAR_R): number {
  return mobs.filter((m) => (m.pos.x - px) ** 2 + (m.pos.z - pz) ** 2 < r * r).length;
}

describe('生物种群：玩家走动时身边始终有生物（回归"走几步就看不到"）', () => {
  it('沿地表走 200+ 格，身边 48 格内生物数全程 ≥ 1', () => {
    const seed = 1337;
    const world = new ChunkWorld(seed);
    const physWorld = { isSolid: (x: number, y: number, z: number) => isSolidId(world.getBlock(x, y, z)) };
    const spawnWorld: SpawnWorld = { getBlock: (x, y, z) => world.getBlock(x, y, z) };
    const surfaceY = (x: number, z: number): number => columnHeight(x, z, seed);
    const rng = makeRng((seed ^ 0x9e3779b9) >>> 0);

    // 找草地出生点
    let sx = 0, sz = 0, sy = 0;
    outer: for (let r = 0; r < 200; r++)
      for (let i = -r; i <= r; i++)
        for (const [x, z] of [[i, -r], [i, r], [-r, i], [r, i]] as [number, number][]) {
          const h = columnHeight(x, z, seed);
          if (world.getBlock(x, h, z) === GRASS) { sx = x; sz = z; sy = h + 2; break outer; }
        }

    const mobs: Mob[] = [];
    const player = { x: sx + 0.5, y: sy, z: sz + 0.5 };
    // 初始在周围撒 3 群
    for (let i = 0; i < 3; i++) mobs.push(...spawnRingGroup(KINDS[i % 4], player.x, player.z, rng, spawnWorld, surfaceY, 6, 24));

    let timer = 0;
    let prevX = player.x, prevZ = player.z;
    const tick = (): void => {
      for (let i = mobs.length - 1; i >= 0; i--) {
        const m = mobs[i];
        if ((m.pos.x - player.x) ** 2 + (m.pos.z - player.z) ** 2 > DESPAWN_R * DESPAWN_R) { mobs.splice(i, 1); continue; }
        Object.assign(m, updateMob(m, physWorld, rng).mob);
      }
      // 每 ~25 刻：身边不足目标就在「前进方向」环带补一群（玩家走进兽群）
      const vx = player.x - prevX, vz = player.z - prevZ;
      prevX = player.x; prevZ = player.z;
      if (++timer >= 25 && near(mobs, player.x, player.z) < NEAR_TARGET && mobs.length < MOB_CAP) {
        timer = 0;
        const dir = Math.hypot(vx, vz) > 1e-3 ? Math.atan2(vz, vx) : null;
        mobs.push(...spawnRingGroup(KINDS[Math.floor(rng() * 4)], player.x, player.z, rng, spawnWorld, surfaceY, 24, 44, dir, Math.PI / 2));
      }
    };

    // 走 1400 刻（~250 格），全程记录身边生物数
    let minNear = Infinity;
    for (let t = 0; t < 1400; t++) {
      player.x += 0.18;
      tick();
      if (t > 60) minNear = Math.min(minNear, near(mobs, player.x, player.z)); // 跳过最初热身
    }
    expect(minNear).toBeGreaterThanOrEqual(1); // 全程身边都至少有 1 只
  });
});
