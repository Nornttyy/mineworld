import { describe, it, expect } from 'vitest';
import { isMobSunlit } from './mobSun';
import { spawnMob } from './mob';
import { GRASS, WATER } from '../blocks/registry';

const AIR = 0;
const STONE = 1; // 实心
// 默认世界：y=64 草、y<64 石、y>64 空；over 覆盖个别格
function world(over: Record<string, number> = {}): { getBlock: (x: number, y: number, z: number) => number } {
  return {
    getBlock: (x, y, z) => over[`${x},${y},${z}`] ?? (y === 64 ? GRASS : y < 64 ? STONE : AIR),
  };
}

describe('isMobSunlit（怪物日晒判定 → 是否会燃烧）', () => {
  it('白天 + 开阔天空 → 晒（会烧）', () => {
    const m = spawnMob('zombie', 5.5, 65, 5.5);
    expect(isMobSunlit(m, world(), false)).toBe(true);
  });
  it('夜晚 → 不晒', () => {
    const m = spawnMob('zombie', 5.5, 65, 5.5);
    expect(isMobSunlit(m, world(), true)).toBe(false);
  });
  it('头顶有方块 → 不晒（屋檐/洞里）', () => {
    const m = spawnMob('zombie', 5.5, 65, 5.5);
    expect(isMobSunlit(m, world({ '5,67,5': STONE }), false)).toBe(false);
  });
  it('在水里 → 不烧（水灭火）', () => {
    const m = spawnMob('zombie', 5.5, 65, 5.5);
    expect(isMobSunlit(m, world({ '5,65,5': WATER, '5,66,5': WATER }), false)).toBe(false);
  });
  it('水下（头顶也是水）→ 不烧', () => {
    const m = spawnMob('skeleton', 5.5, 65, 5.5);
    expect(isMobSunlit(m, world({ '5,65,5': WATER, '5,66,5': WATER, '5,68,5': WATER }), false)).toBe(false);
  });
});
