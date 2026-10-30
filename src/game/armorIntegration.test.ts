import { beforeAll, describe, expect, it, vi } from 'vitest';
import { emptyArmor, damageAfterArmor, type ArmorInventory } from '../core/equipment/armor';
import { IRON_CHESTPLATE } from '../core/items/items';
import { newSurvival } from '../core/survival/survival';

let Game: typeof import('./Game').Game;
beforeAll(async () => {
  vi.stubGlobal('window', { addEventListener: vi.fn() });
  vi.stubGlobal('document', { addEventListener: vi.fn() });
  Game = (await import('./Game')).Game;
});

function setup() {
  const armor = emptyArmor();
  armor[1] = { id: IRON_CHESTPLATE, count: 1, dur: 240 };
  return Object.assign(Object.create(Game.prototype), {
    armor, survival: newSurvival(), creative: false, hurtCd: 0, hurtWindowMax: 0,
    dead: false, flashHurt: vi.fn(), die: vi.fn(), invUI: { render: vi.fn() },
    player: { pos: { x: 0, y: 64, z: 0 }, vel: {x:0,y:0,z:0}, onGround: true },
  }) as { armor: ArmorInventory; survival: ReturnType<typeof newSurvival>; hurtCd: number; hurtWindowMax: number;
    hurtPlayer(d: number, x: number, z: number, noKnock?: boolean, kind?: string): void };
}

describe('armor in the actual player damage pipeline', () => {
  it('reduces accepted damage and rejects repeated hits without wearing equipment again', () => {
    const g = setup();
    const reduced = damageAfterArmor(4, g.armor);
    g.hurtPlayer(4, 1, 0);
    expect(g.survival.health).toBeCloseTo(20 - reduced);
    expect(g.armor[1]?.dur).toBe(239);
    g.hurtPlayer(4, 1, 0);
    expect(g.armor[1]?.dur).toBe(239);
    expect(g.survival.health).toBeCloseTo(20 - reduced);
  });
  it('applies only the stronger-hit difference inside the hurt window', () => {
    const g = setup();
    g.hurtPlayer(2, 0, 0, true, 'cactus');
    const afterFirst = g.survival.health;
    const difference = damageAfterArmor(4, g.armor);
    g.hurtPlayer(6, 0, 0, true, 'lava');
    expect(g.hurtWindowMax).toBe(6);
    expect(g.survival.health).toBeCloseTo(afterFirst - difference);
    expect(g.armor[1]?.dur).toBe(238);
  });
  it('fall damage bypasses armor while lava does not', () => {
    const fall = setup(), lava = setup();
    fall.hurtPlayer(4, 0, 0, true, 'fall');
    lava.hurtPlayer(4, 0, 0, true, 'lava');
    expect(fall.survival.health).toBe(16);
    expect(fall.armor[1]?.dur).toBe(240);
    expect(lava.survival.health).toBeGreaterThan(16);
    expect(lava.armor[1]?.dur).toBe(239);
  });
  it('removes a broken piece before calculating this hits armor reduction', () => {
    const g = setup();
    g.armor[1]!.dur = 1;
    g.hurtPlayer(4, 0, 0, true, 'melee');
    expect(g.armor[1]).toBeNull();
    expect(g.survival.health).toBe(16);
  });
});
