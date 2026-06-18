import { describe, it, expect } from 'vitest';
import { GRASS } from '../blocks/registry';
import { spawnRingGroup, type SpawnWorld } from './mobSpawn';
import { updateMob, type Mob, type MobKind } from './mob';
import { makeRng } from '../math/rng';

// 回归测试：复刻 Game.tickMobs 的「边走边补充种群」逻辑，确认玩家走动时身边始终有生物
// （修用户反馈"走几步路就看不到了"）。用平坦全草地 FakeWorld 隔离 worldgen 随机，只测密度维持逻辑。
const GROUND = 64; // 草地表层 cell；脚站在 GROUND+1
const DESPAWN_R = 88;
const NEAR_R = 48;
const NEAR_TARGET = 6;
const MOB_CAP = 16;
const KINDS: MobKind[] = ['pig', 'cow', 'sheep', 'chicken'];

function near(mobs: Mob[], px: number, pz: number, r = NEAR_R): number {
  return mobs.filter((m) => (m.pos.x - px) ** 2 + (m.pos.z - pz) ** 2 < r * r).length;
}

describe('生物种群：玩家走动时身边始终有生物（回归"走几步就看不到"）', () => {
  it('一路走 250 格，身边 48 格内生物数全程 ≥ 1', () => {
    const spawnWorld: SpawnWorld = { getBlock: (_x, y) => (y === GROUND ? GRASS : y < GROUND ? 1 : 0) };
    const physWorld = { isSolid: (_x: number, y: number) => y <= GROUND };
    const surfaceY = (): number => GROUND;
    const rng = makeRng(20240618);

    const mobs: Mob[] = [];
    const player = { x: 0.5, y: GROUND + 1, z: 0.5 };
    for (let i = 0; i < 3; i++) mobs.push(...spawnRingGroup(KINDS[i % 4], player.x, player.z, rng, spawnWorld, surfaceY, 6, 24));

    let timer = 0;
    let prevX = player.x;
    let prevZ = player.z;
    const tick = (): void => {
      for (let i = mobs.length - 1; i >= 0; i--) {
        const m = mobs[i];
        if ((m.pos.x - player.x) ** 2 + (m.pos.z - player.z) ** 2 > DESPAWN_R * DESPAWN_R) {
          mobs.splice(i, 1);
          continue;
        }
        Object.assign(m, updateMob(m, physWorld, rng).mob);
      }
      const vx = player.x - prevX;
      const vz = player.z - prevZ;
      prevX = player.x;
      prevZ = player.z;
      if (++timer >= 25 && near(mobs, player.x, player.z) < NEAR_TARGET && mobs.length < MOB_CAP) {
        timer = 0;
        const dir = Math.hypot(vx, vz) > 1e-3 ? Math.atan2(vz, vx) : null;
        mobs.push(...spawnRingGroup(KINDS[Math.floor(rng() * 4)], player.x, player.z, rng, spawnWorld, surfaceY, 24, 44, dir, Math.PI / 2));
      }
    };

    let minNear = Infinity;
    for (let t = 0; t < 1400; t++) {
      player.x += 0.18; // 走路 ~3.6 格/秒
      tick();
      if (t > 60) minNear = Math.min(minNear, near(mobs, player.x, player.z)); // 跳过热身
    }
    expect(minNear).toBeGreaterThanOrEqual(1);
  });
});
