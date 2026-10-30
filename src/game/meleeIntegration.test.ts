import { beforeAll, describe, expect, it, vi } from 'vitest';
import { emptyInventory, type Inventory } from '../core/inventory/inventory';
import { spawnMob, type Mob } from '../core/entity/mob';
import { newSurvival, type Survival } from '../core/survival/survival';
import { IRON_SWORD, STONE_AXE, WOODEN_SWORD } from '../core/items/items';

vi.mock('../audio/GameAudio', () => ({ gameAudio: { attack: vi.fn(), mobHurt: vi.fn(), toolBreak: vi.fn() } }));
let Game: typeof import('./Game').Game;
beforeAll(async () => {
  Object.assign(globalThis, {
    window: { addEventListener() {} },
    document: { addEventListener() {}, getElementById: () => null },
  });
  Game = (await import('./Game')).Game;
});

interface CombatGame {
  inv: Inventory;
  hotbar: { index: number; render: ReturnType<typeof vi.fn> };
  hand: { swing: ReturnType<typeof vi.fn> };
  player: { pos: { x: number; y: number; z: number }; vel: { x: number; y: number; z: number }; onGround: boolean };
  survival: Survival;
  creative: boolean;
  actualSprinting: boolean;
  meleeHeldId: number | null;
  meleeTicks: number;
  pointInWater: () => boolean;
  mobUnderRay: () => Mob | null;
  rayHit: () => unknown;
  touchDigging: boolean;
  digging: boolean;
  mobs: Mob[];
  syncMeleeItem(): number | null;
  advanceMeleeTick(): void;
  updateAttackIndicator(playing: boolean): void;
  beginPrimaryAction(): void;
  attackMob(mob: Mob): void;
}

function setup(id = WOODEN_SWORD): CombatGame {
  const inv = emptyInventory();
  inv[0] = { id, count: 1 };
  return Object.assign(Object.create(Game.prototype), {
    inv, hotbar: { index: 0, render: vi.fn() }, hand: { swing: vi.fn() },
    player: { pos: { x: 0, y: 1, z: 0 }, vel: { x: 0, y: 0, z: 0 }, onGround: true },
    look: { yaw: 0 }, survival: newSurvival(), creative: false, actualSprinting: false,
    meleeHeldId: id, meleeTicks: 1000, pointInWater: () => false,
    mobUnderRay: () => null, rayHit: () => null, isGameplayActive: () => true,
    mobRng: () => 0.5, mobs: [], drops: [],
  }) as CombatGame;
}

describe('Game melee integration', () => {
  it('a real empty swing resets charge without consuming durability or exhaustion', () => {
    const game = setup();
    game.beginPrimaryAction();
    expect(game.meleeTicks).toBe(0);
    expect(game.hand.swing).toHaveBeenCalledOnce();
    expect(game.digging).toBe(true);
    expect(game.inv[0]?.dur).toBeUndefined();
    expect(game.survival.exhaustion).toBe(0);
  });

  it('a real targeted swing applies a strong first hit followed by a rejected weak hit', () => {
    const game = setup(), mob = spawnMob('zombie', 2, 1, 0);
    game.mobUnderRay = () => mob;
    game.beginPrimaryAction();
    expect(mob.health).toBe(16);
    expect(game.inv[0]?.dur).toBe(58);
    expect(game.survival.exhaustion).toBeCloseTo(0.1);
    game.beginPrimaryAction();
    expect(mob.health).toBe(16);
    expect(game.inv[0]?.dur).toBe(58);
    expect(game.survival.exhaustion).toBeCloseTo(0.1);
    expect(game.hand.swing).toHaveBeenCalledTimes(2);
  });

  it('switching to a different held item resets charge before a hit and simulation ticks recover it', () => {
    const game = setup();
    game.inv[1] = { id: IRON_SWORD, count: 1 };
    game.hotbar.index = 1;
    expect(game.syncMeleeItem()).toBe(IRON_SWORD);
    expect(game.meleeTicks).toBe(0);
    for (let i = 0; i < 12; i++) game.advanceMeleeTick();
    expect(game.meleeTicks).toBe(12);
    game.syncMeleeItem();
    expect(game.meleeTicks).toBe(12);
    const mob = spawnMob('zombie', 2, 1, 0);
    game.attackMob(mob);
    expect(mob.health).toBe(14);
    expect(game.meleeTicks).toBe(0);
    game.hotbar.index = 0;
    game.attackMob(spawnMob('zombie', 2, 1, 0));
    expect(game.meleeHeldId).toBe(WOODEN_SWORD);
  });

  it.each([
    [false, false, -0.1, false, 6],
    [true, false, -0.1, false, 4],
    [false, true, -0.1, false, 4],
    [false, false, 0.1, false, 4],
    [false, false, -0.1, true, 4],
  ])('critical eligibility ground=%s sprint=%s vy=%s water=%s', (ground, sprint, vy, water, damage) => {
    const game = setup(), mob = spawnMob('zombie', 2, 1, 0);
    game.player.onGround = ground as boolean;
    game.player.vel.y = vy as number;
    game.actualSprinting = sprint as boolean;
    game.pointInWater = () => water as boolean;
    game.attackMob(mob);
    expect(mob.health).toBe(20 - (damage as number));
  });

  it('a weak first hit can be topped up during protection without a second knockback', () => {
    const game = setup(STONE_AXE), mob = spawnMob('zombie', 2, 1, 0);
    game.meleeTicks = 0;
    game.attackMob(mob);
    const knock = { ...mob.vel };
    expect(mob.health).toBeCloseTo(18.19712);
    expect(game.inv[0]?.dur).toBe(129);
    game.meleeTicks = 1000;
    game.attackMob(mob);
    expect(mob.health).toBeCloseTo(11);
    expect(mob.vel).toEqual(knock);
    expect(game.inv[0]?.dur).toBe(127);
    expect(game.survival.exhaustion).toBeCloseTo(0.2);
  });

  it('creative accepted hits consume neither tool durability nor exhaustion', () => {
    const game = setup();
    game.creative = true;
    game.attackMob(spawnMob('zombie', 2, 1, 0));
    expect(game.inv[0]?.dur).toBeUndefined();
    expect(game.survival.exhaustion).toBe(0);
  });

  it('rendering the attack indicator never advances the simulation counter', () => {
    const indicator = { hidden: false, style: { setProperty: vi.fn() }, setAttribute: vi.fn() };
    Object.assign(document, { getElementById: () => indicator });
    const game = setup();
    game.meleeTicks = 5;
    for (let frame = 0; frame < 120; frame++) game.updateAttackIndicator(false);
    expect(game.meleeTicks).toBe(5);
    expect(indicator.hidden).toBe(true);
    game.updateAttackIndicator(true);
    expect(indicator.hidden).toBe(false);
    expect(indicator.style.setProperty).toHaveBeenLastCalledWith('--attack-charge', '0.4');
    game.meleeTicks = 13;
    game.updateAttackIndicator(true);
    expect(indicator.hidden).toBe(true);
  });
});
