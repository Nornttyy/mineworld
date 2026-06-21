import { describe, it, expect } from 'vitest';
import { isDarkEnoughForSpawn, spawnHostileRing, spawnHostileCave, type SpawnWorld } from './mobSpawn';
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

// 地下洞世界：地表 y=64；y∈[40,41] 是空气洞室(洞底 y=39 实心)，其余 y≤64 实心。可放火把。
function caveWorld(torches: [number, number, number][] = []): SpawnWorld {
  const t = new Set(torches.map(([x, y, z]) => `${x},${y},${z}`));
  return {
    getBlock: (x, y, z) => {
      if (t.has(`${x},${y},${z}`)) return TORCH;
      if (y > 64) return 0; // 地表上空气
      if (y === 40 || y === 41) return 0; // 洞室(两格高)
      return STONE;
    },
  };
}

describe('矿洞刷怪：地下暗洞(白天黑夜)', () => {
  it('地下暗洞里能刷怪，且落在地表下够深(暗)', () => {
    const mobs = spawnHostileCave('zombie', 0, 41, 0, rng, caveWorld(), surfaceY);
    expect(mobs.length).toBeGreaterThan(0);
    for (const m of mobs) expect(m.pos.y).toBeLessThan(SURFACE - 4); // 地表下≥5格
  });

  it('实心岩(无空腔) → 不刷', () => {
    const solid: SpawnWorld = { getBlock: (_x, y, _z) => (y <= 64 ? STONE : 0) };
    expect(spawnHostileCave('zombie', 0, 41, 0, rng, solid, surfaceY)).toEqual([]);
  });

  it('洞里被火把照亮 → 不刷', () => {
    expect(spawnHostileCave('zombie', 0, 41, 0, rng, caveWorld([[-15, 40, 0]]), surfaceY)).toEqual([]);
  });

  it('浅坑(离地表<5格) → 不刷(够亮)', () => {
    const shallow: SpawnWorld = {
      getBlock: (_x, y, _z) => (y > 64 ? 0 : y === 62 || y === 63 ? 0 : STONE),
    };
    expect(spawnHostileCave('zombie', 0, 63, 0, rng, shallow, surfaceY)).toEqual([]);
  });
});
