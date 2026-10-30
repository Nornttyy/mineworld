import { beforeAll, describe, expect, it, vi } from 'vitest';
import { COBBLESTONE, WATER } from '../core/blocks/registry';
import { spawnArrow, type Arrow } from '../core/entity/arrow';
import { emptyInventory } from '../core/inventory/inventory';
import { ARROW, BOW } from '../core/items/items';
import { type Player } from '../core/physics/player';
import { step } from '../core/physics/step';
import { newSurvival, oxygenAirTicks } from '../core/survival/survival';
import type { RayHit } from '../core/world/raycast';
import type { Game as GameInstance } from './Game';

let Game: typeof import('./Game').Game;

beforeAll(async () => {
  // Import the real Game methods without constructing a WebGL renderer.
  vi.stubGlobal('window', { addEventListener: () => undefined });
  vi.stubGlobal('document', { addEventListener: () => undefined });
  Game = (await import('./Game')).Game;
});

type Actions = {
  releaseBow(): void;
  crosshairRay(): { origin: { x: number; y: number; z: number } };
  placeBlock(hit: RayHit): void;
  stepSurvival(sprint: boolean, jumped: boolean): void;
  tickArrows(): void;
  updateCamera(alpha: number): void;
};

function player(crouching: boolean, y = 0): Player {
  return {
    pos: { x: 0.5, y, z: 0.5 },
    vel: { x: 0, y: 0, z: 0 },
    onGround: true,
    crouching,
  };
}

function bareGame(fields: Record<string, unknown>): Actions {
  const game = Object.create(Game.prototype) as GameInstance;
  Object.assign(game, fields);
  return game as unknown as Actions;
}

describe('Game uses the collision-resolved crouching pose', () => {
  it.each([
    [true, 1.27],
    [false, 1.62],
  ])('shoots and targets from the actual eye height when crouching=%s', (crouching, eye) => {
    const inv = emptyInventory();
    inv[0] = { id: BOW, count: 1 };
    inv[1] = { id: ARROW, count: 2 };
    const arrows: Arrow[] = [];
    const game = bareGame({
      player: player(crouching, 64),
      creative: false,
      inv,
      hotbar: { index: 0, render: vi.fn() },
      drawingBow: true,
      bowCharge: 1,
      look: { yaw: 0, pitch: 0 },
      arrows,
      hand: { swing: vi.fn() },
    });

    game.releaseBow();

    expect(arrows).toHaveLength(1);
    expect(arrows[0].y).toBeCloseTo(64 + eye);
    expect(arrows[0].x).toBeCloseTo(0.9);
    expect(game.crosshairRay().origin.y).toBeCloseTo(arrows[0].y);
    expect(inv[1]).toEqual({ id: ARROW, count: 1 });
  });

  it.each([true, false])(
    'uses actual body height for headroom placement, crouching=%s',
    (crouching) => {
      const inv = emptyInventory();
      inv[0] = { id: COBBLESTONE, count: 2 };
      const edit = vi.fn();
      const game = bareGame({
        // At y=.5 a crouching head ends at 2; a standing head overlaps the target.
        player: player(crouching, 0.5),
        creative: false,
        inv,
        hotbar: { index: 0, render: vi.fn() },
        world: { getBlock: (x: number) => (x === 1 ? COBBLESTONE : 0) },
        edit,
        hand: { swing: vi.fn() },
      });

      game.placeBlock({ x: 1, y: 2, z: 0, nx: -1, ny: 0, nz: 0 });

      if (crouching) {
        expect(edit).toHaveBeenCalledWith(0, 2, 0, COBBLESTONE);
        expect(inv[0]?.count).toBe(1);
      } else {
        expect(edit).not.toHaveBeenCalled();
        expect(inv[0]?.count).toBe(2);
      }
    },
  );

  it('starts drowning on crouching below the waterline and recovers only after standing', () => {
    const p = player(true, 0.5);
    const survival = newSurvival();
    survival.oxygenTimer = 10; // 290 air, so both drain and partial recovery are observable.
    const getBlock = (_x: number, y: number) => (y < 2 ? WATER : 0);
    const game = bareGame({
      player: p,
      prev: { pos: { ...p.pos } },
      survival,
      creative: false,
      dead: false,
      hurtCd: 0,
      fallDistance: 0,
      dimension: 'overworld',
      lightingQuality: 'off',
      waterWaveTime: 0,
      world: { getBlock },
      waterSurfaceWorld: { getBlock },
      flashHurt: vi.fn(),
      die: vi.fn(),
    });

    game.stepSurvival(false, false);
    expect(oxygenAirTicks(survival)).toBe(289); // Eye 1.77 is submerged.
    p.crouching = false;
    game.stepSurvival(false, false);
    expect(oxygenAirTicks(survival)).toBe(293); // Eye 2.12 is above the surface.
  });

  it.each([true, false])('incoming arrows respect the actual hitbox, crouching=%s', (crouching) => {
    const arrow = spawnArrow(-0.5, 1.65, 0.5, 1, 0, 0, 1.5, false, 4);
    arrow.vy = 0.05; // Cancel this tick's gravity: passes above a crouching head.
    const hurtPlayer = vi.fn();
    const arrows = [arrow];
    const game = bareGame({
      player: player(crouching),
      arrows,
      physWorld: { isSolid: () => false },
      hurtPlayer,
    });

    game.tickArrows();

    expect(hurtPlayer).toHaveBeenCalledTimes(crouching ? 0 : 1);
    expect(arrows).toHaveLength(crouching ? 1 : 0);
  });

  it('keeps the camera low after releasing crouch under a ceiling', () => {
    const p = step(
      player(true, 0.5),
      { forward: 0, right: 0, yaw: 0, jump: false, crouch: false },
      { isSolid: (_x, y) => y >= 2 },
    );
    const set = vi.fn();
    const game = bareGame({
      player: p,
      prev: { pos: { ...p.pos } },
      camEye: 1.27,
      renderer: { camera: { position: { set }, lookAt: vi.fn() } },
      look: { yaw: 0, pitch: 0 },
    });

    game.updateCamera(1);

    expect(p.crouching).toBe(true);
    expect(set).toHaveBeenCalledWith(p.pos.x, p.pos.y + 1.27, p.pos.z);
  });
});
