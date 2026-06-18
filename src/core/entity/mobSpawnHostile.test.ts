import { describe, it, expect } from 'vitest';
import { isDarkEnoughForSpawn, spawnHostileRing, type SpawnWorld } from './mobSpawn';
import { TORCH } from '../blocks/registry';

const STONE = 1;
const SURFACE = 64;
// 平地世界：y≤64 实心、其上空气；可在指定格放火把。
function world(torches: [number, number, number][] = []): SpawnWorld {
  const t = new Set(torches.map(([x, y, z]) => `${x},${y},${z}`));
  return { getBlock: (x, y, z) => (t.has(`${x},${y},${z}`) ? TORCH : y <= SURFACE ? STONE : 0) };
}
const surfaceY = (): number => SURFACE;
const rng = (): number => 0.5;

describe('敌对刷新：暗度门控 + 16–32 环带', () => {
  it('近处有火把 → 不够暗(不刷)', () => {
    expect(isDarkEnoughForSpawn(world([[10, SURFACE + 1, 10]]), 10, SURFACE + 1, 10)).toBe(false);
  });

  it('13 格内无火把 → 够暗(可刷)', () => {
    expect(isDarkEnoughForSpawn(world([[100, SURFACE + 1, 100]]), 10, SURFACE + 1, 10)).toBe(true);
  });

  it('火把铺满四周 → 安全区不刷怪(返回空)', () => {
    const torches: [number, number, number][] = [];
    for (let x = -40; x <= 40; x += 2) for (let z = -40; z <= 40; z += 2) torches.push([x, SURFACE + 1, z]);
    expect(spawnHostileRing('zombie', 0, 0, rng, world(torches), surfaceY)).toEqual([]);
  });

  it('暗处正常刷一小群，且落在 16–32 环带内', () => {
    const mobs = spawnHostileRing('zombie', 0, 0, rng, world([]), surfaceY);
    expect(mobs.length).toBeGreaterThan(0);
    for (const m of mobs) {
      const d = Math.hypot(m.pos.x, m.pos.z);
      expect(d).toBeGreaterThan(14); // 群内散开 ±2，放宽下界
      expect(d).toBeLessThan(35);
    }
  });
});
