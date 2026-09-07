import { beforeAll, describe, expect, it, vi } from 'vitest';
import { COBBLESTONE, NETHER_PORTAL, OBSIDIAN, SAND, TORCH, WATER } from '../core/blocks/registry';
import { spawnMob, type Mob } from '../core/entity/mob';
import { ARROW, BOW, FLINT_AND_STEEL, WOODEN_PICKAXE } from '../core/items/items';
import { emptyInventory } from '../core/inventory/inventory';
import type { Game as GameInstance } from './Game';

let Game: typeof import('./Game').Game;

beforeAll(async () => {
  // Game 的键盘模块会在 import 时注册监听器；纯逻辑回归测试只需最小事件目标桩。
  (globalThis as unknown as { window: Pick<Window, 'addEventListener'> }).window = {
    addEventListener: () => undefined,
  };
  (globalThis as unknown as { document: Pick<Document, 'addEventListener'> }).document = {
    addEventListener: () => undefined,
  };
  Game = (await import('./Game')).Game;
});

type BlockWorld = {
  getBlock(x: number, y: number, z: number): number;
  setBlock(x: number, y: number, z: number, id: number): void;
};

function blockMap(entries: ReadonlyArray<readonly [number, number, number, number]>): {
  blocks: Map<string, number>;
  world: BlockWorld;
  edit(x: number, y: number, z: number, id: number): void;
} {
  const blocks = new Map(entries.map(([x, y, z, id]) => [`${x},${y},${z}`, id]));
  return {
    blocks,
    world: {
      getBlock: (x, y, z) => blocks.get(`${x},${y},${z}`) ?? 0,
      setBlock: (x, y, z, id) => blocks.set(`${x},${y},${z}`, id),
    },
    edit: (x, y, z, id) => blocks.set(`${x},${y},${z}`, id),
  };
}

describe('Game high-risk regressions', () => {
  it('creative pick-block selects an existing hotbar stack or copies a full stack', () => {
    const inv = emptyInventory();
    inv[6] = { id: COBBLESTONE, count: 4 };
    const setSelected = vi.fn();
    const render = vi.fn();
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      inv,
      world: { getBlock: () => COBBLESTONE },
      rayHit: () => ({ x: 2, y: 3, z: 4 }),
      hotbar: { index: 1, setSelected, render },
    });
    const pick = game as unknown as { pickTargetedBlock(): void };

    pick.pickTargetedBlock();
    expect(setSelected).toHaveBeenLastCalledWith(6);
    expect(inv[1]).toBeNull();

    Object.assign(game, { world: { getBlock: () => OBSIDIAN } });
    pick.pickTargetedBlock();
    expect(setSelected).toHaveBeenLastCalledWith(1);
    expect(inv[1]).toEqual({ id: OBSIDIAN, count: 64 });
    expect(render).toHaveBeenCalledWith(inv);
  });

  it('opens the creative catalog instead of the survival crafting inventory', () => {
    const inv = emptyInventory();
    const showCreative = vi.fn();
    const show = vi.fn();
    const setActive = vi.fn();
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      creative: true,
      craftingGrid: 0,
      inv,
      invUI: { showCreative, show },
      touch: { setActive },
    });

    (game as unknown as { openPlayerInventory(): void }).openPlayerInventory();

    expect(showCreative).toHaveBeenCalledWith(inv);
    expect(show).not.toHaveBeenCalled();
    expect(setActive).toHaveBeenCalledWith(false);
    expect((game as unknown as { craftingGrid: number }).craftingGrid).toBe(2);
  });

  it('placed sand stays on immediate support and falls through water onto the next support', () => {
    const first = blockMap([
      [0, 5, 0, SAND],
      [0, 4, 0, COBBLESTONE],
    ]);
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      world: first.world,
      applyLocalEdit: first.edit,
      chunks: { remeshDirty: vi.fn() },
    });
    const internals = game as unknown as {
      settleFallingBlock(x: number, y: number, z: number): boolean;
    };

    expect(internals.settleFallingBlock(0, 5, 0)).toBe(false);
    expect(first.world.getBlock(0, 5, 0)).toBe(SAND);
    expect(first.world.getBlock(0, 4, 0)).toBe(COBBLESTONE);

    const second = blockMap([
      [0, 5, 0, SAND],
      [0, 4, 0, WATER],
      [0, 3, 0, WATER],
      [0, 1, 0, COBBLESTONE],
    ]);
    Object.assign(game, { world: second.world, applyLocalEdit: second.edit });
    expect(internals.settleFallingBlock(0, 5, 0)).toBe(true);
    expect(second.world.getBlock(0, 2, 0)).toBe(SAND);
    expect(second.world.getBlock(0, 5, 0)).toBe(0);

    const torchTrap = blockMap([
      [0, 5, 0, SAND],
      [0, 2, 0, TORCH],
      [0, 1, 0, COBBLESTONE],
    ]);
    const drops: Array<{ id: number }> = [];
    Object.assign(game, { world: torchTrap.world, applyLocalEdit: torchTrap.edit, drops });
    expect(internals.settleFallingBlock(0, 5, 0)).toBe(true);
    expect(torchTrap.world.getBlock(0, 2, 0)).toBe(TORCH);
    expect(drops.map((drop) => drop.id)).toEqual([SAND]);
  });

  it('breaking a required obsidian frame block clears the connected portal interior', () => {
    const entries: Array<[number, number, number, number]> = [];
    for (let y = 1; y <= 3; y++) {
      entries.push([1, y, 0, NETHER_PORTAL], [2, y, 0, NETHER_PORTAL]);
      entries.push([0, y, 0, OBSIDIAN], [3, y, 0, OBSIDIAN]);
    }
    for (const x of [1, 2]) entries.push([x, 0, 0, OBSIDIAN], [x, 4, 0, OBSIDIAN]);
    const state = blockMap(entries);
    state.edit(0, 2, 0, 0); // Game 调用此检查前已经挖掉了边框。
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      world: state.world,
      dimension: 'overworld',
      editMany: (edits: ReadonlyArray<readonly [number, number, number, number]>) => {
        for (const [x, y, z, id] of edits) state.edit(x, y, z, id);
      },
    });

    (
      game as unknown as { collapseInvalidPortalsAround(x: number, y: number, z: number): void }
    ).collapseInvalidPortalsAround(0, 2, 0);

    for (let y = 1; y <= 3; y++) {
      expect(state.world.getBlock(1, y, 0)).toBe(0);
      expect(state.world.getBlock(2, y, 0)).toBe(0);
    }
  });

  it('protects an adjacent valid portal while clearing a connected invalid portal sheet', () => {
    const entries: Array<[number, number, number, number]> = [];
    for (let y = 1; y <= 3; y++) {
      entries.push([1, y, 0, NETHER_PORTAL], [2, y, 0, NETHER_PORTAL]);
      entries.push([1, y, 1, NETHER_PORTAL], [2, y, 1, NETHER_PORTAL]);
      entries.push([0, y, 0, OBSIDIAN], [3, y, 0, OBSIDIAN]);
    }
    for (const x of [0, 1, 2, 3]) entries.push([x, 0, 0, OBSIDIAN], [x, 4, 0, OBSIDIAN]);
    const state = blockMap(entries);
    const game = Object.create(Game.prototype) as GameInstance;
    let batches = 0;
    Object.assign(game, {
      world: state.world,
      dimension: 'overworld',
      editMany: (edits: ReadonlyArray<readonly [number, number, number, number]>) => {
        batches++;
        for (const [x, y, z, id] of edits) state.edit(x, y, z, id);
      },
    });

    (
      game as unknown as { collapseInvalidPortalsAround(x: number, y: number, z: number): void }
    ).collapseInvalidPortalsAround(1, 2, 1);

    expect(batches).toBe(1);
    for (let y = 1; y <= 3; y++) {
      expect(state.world.getBlock(1, y, 0)).toBe(NETHER_PORTAL);
      expect(state.world.getBlock(2, y, 0)).toBe(NETHER_PORTAL);
      expect(state.world.getBlock(1, y, 1)).toBe(0);
      expect(state.world.getBlock(2, y, 1)).toBe(0);
    }
  });

  it('uses one canonical key for every cell in the same active portal', () => {
    const entries: Array<[number, number, number, number]> = [];
    for (let y = 1; y <= 3; y++) {
      entries.push([1, y, 0, NETHER_PORTAL], [2, y, 0, NETHER_PORTAL]);
      entries.push([0, y, 0, OBSIDIAN], [3, y, 0, OBSIDIAN]);
    }
    for (const x of [0, 1, 2, 3]) entries.push([x, 0, 0, OBSIDIAN], [x, 4, 0, OBSIDIAN]);
    const state = blockMap(entries);
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, { world: state.world, dimension: 'overworld' });
    const internals = game as unknown as {
      activePortalFrameAt(
        dim: 'overworld',
        x: number,
        y: number,
        z: number,
      ): {
        axis: 'x' | 'z';
        inner: Array<[number, number, number]>;
      } | null;
      portalKey(
        dim: 'overworld',
        frame: { axis: 'x' | 'z'; inner: Array<[number, number, number]> },
      ): string;
    };
    const lowerLeft = internals.activePortalFrameAt('overworld', 1, 1, 0);
    const upperRight = internals.activePortalFrameAt('overworld', 2, 3, 0);

    expect(lowerLeft).not.toBeNull();
    expect(upperRight).not.toBeNull();
    expect(internals.portalKey('overworld', lowerLeft!)).toBe(
      internals.portalKey('overworld', upperRight!),
    );
  });

  it('does not reuse a saved portal outside the circular 128-block search radius', () => {
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      save: { edits: { 'nether:100,40,100': NETHER_PORTAL } },
      activePortalFrameAt: (_dim: 'nether', x: number, y: number, z: number) => ({
        axis: 'x' as const,
        inner: [[x, y, z] as [number, number, number]],
      }),
    });

    expect(
      (
        game as unknown as {
          findSavedPortalNear(dim: 'nether', x: number, z: number, radius?: number): unknown;
        }
      ).findSavedPortalNear('nether', 0, 0),
    ).toBeNull();
  });

  it('indexes saved edits lazily and records later edits for unloaded chunks', () => {
    const activate = vi.fn();
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      save: { seed: 123, edits: { '160,50,0': WATER } },
      dimension: 'overworld',
      fluidSim: { activate },
      activeEditsByChunk: new Map(),
      worldEpoch: 0,
    });
    const internals = game as unknown as {
      world: {
        peek(cx: number, cz: number): unknown;
        getBlock(x: number, y: number, z: number): number;
        waterAmount(x: number, y: number, z: number): number;
        isWaterSource(x: number, y: number, z: number): boolean;
        dispose(): void;
      };
      buildDimension(dim: 'overworld'): void;
      recordEdit(dim: 'overworld', x: number, y: number, z: number, id: number): void;
    };

    internals.buildDimension('overworld');
    expect(internals.world.peek(10, 0)).toBeUndefined();
    expect(internals.world.getBlock(160, 50, 0)).toBe(WATER);
    expect(internals.world.waterAmount(160, 50, 0)).toBe(8);
    expect(internals.world.isWaterSource(160, 50, 0)).toBe(true);

    internals.recordEdit('overworld', -160, 51, -1, COBBLESTONE);
    expect(internals.world.peek(-10, -1)).toBeUndefined();
    expect(internals.world.getBlock(-160, 51, -1)).toBe(COBBLESTONE);
    expect(activate).toHaveBeenCalledWith(-160, 51, -1);
    internals.world.dispose();
  });

  it('cancels a spawn preload whose chunk worker never becomes ready', async () => {
    const controller = new AbortController();
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      worldEpoch: 1,
      world: { request: vi.fn(), peek: vi.fn(() => undefined) },
      chunks: {},
      player: { pos: { x: 0.5, y: 64, z: 0.5 } },
      wateredChunks: new Set<string>(),
    });

    const preload = game.preloadSpawn(0, controller.signal);
    controller.abort();

    await expect(preload).resolves.toBeUndefined();
  });

  it('spawn water preload never reads outside the chunks it requested', async () => {
    const reads: Array<[number, number]> = [];
    const requested: Array<[number, number]> = [];
    const previousRaf = globalThis.requestAnimationFrame;
    const previousCancel = globalThis.cancelAnimationFrame;
    globalThis.requestAnimationFrame = ((callback: FrameRequestCallback): number => {
      callback(0);
      return 1;
    }) as typeof requestAnimationFrame;
    globalThis.cancelAnimationFrame = (() => undefined) as typeof cancelAnimationFrame;
    try {
      const world = {
        request: (cx: number, cz: number) => requested.push([cx, cz]),
        peek: () => ({}),
        getBlock: (x: number, _y: number, z: number) => {
          reads.push([x, z]);
          return 0;
        },
        waterAmount: () => 0,
        isWaterSource: () => false,
        isWaterFalling: () => false,
        setWater: vi.fn(),
      };
      const game = Object.create(Game.prototype) as GameInstance;
      Object.assign(game, {
        worldEpoch: 1,
        world,
        chunks: {
          update: vi.fn(),
          flushMesh: vi.fn(),
          meshBusy: () => false,
        },
        player: { pos: { x: 0.5, y: 64, z: 0.5 } },
        wateredChunks: new Set<string>(),
        fluidSim: { activate: vi.fn(), activeCount: 0, tick: vi.fn() },
      });

      await game.preloadSpawn(0);

      expect(requested).toEqual([[0, 0]]);
      expect(reads.length).toBeGreaterThan(0);
      expect(reads.every(([x, z]) => x >= 0 && x < 16 && z >= 0 && z < 16)).toBe(true);
    } finally {
      if (previousRaf) globalThis.requestAnimationFrame = previousRaf;
      else
        delete (globalThis as { requestAnimationFrame?: typeof requestAnimationFrame })
          .requestAnimationFrame;
      if (previousCancel) globalThis.cancelAnimationFrame = previousCancel;
      else
        delete (globalThis as { cancelAnimationFrame?: typeof cancelAnimationFrame })
          .cancelAnimationFrame;
    }
  });

  it('rejects a stale portal destination and rebuilds a safe active target portal', () => {
    const sourceEntries: Array<[number, number, number, number]> = [];
    for (let y = 1; y <= 3; y++) {
      sourceEntries.push([1, y, 0, NETHER_PORTAL], [2, y, 0, NETHER_PORTAL]);
      sourceEntries.push([0, y, 0, OBSIDIAN], [3, y, 0, OBSIDIAN]);
    }
    for (const x of [0, 1, 2, 3]) sourceEntries.push([x, 0, 0, OBSIDIAN], [x, 4, 0, OBSIDIAN]);
    const source = blockMap(sourceEntries);
    const targetBlocks = new Map<string, number>();
    const oldDestination: [number, number, number] = [50.5, 33, 50.5];
    const save = {
      seed: 1,
      edits: {},
      portalLinks: { 'overworld:1,1,0': oldDestination },
    };
    const switchDimension = vi.fn();
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      world: source.world,
      dimension: 'overworld',
      player: { pos: { x: 1.5, y: 1, z: 0.5 } },
      portalTimer: 3.96,
      portalArmed: true,
      portalCooldown: 0,
      save,
      worldAt: (dim: 'overworld' | 'nether', x: number, y: number, z: number): number => {
        if (dim === 'overworld') return source.world.getBlock(x, y, z);
        return targetBlocks.get(`${x},${y},${z}`) ?? (y === 32 ? COBBLESTONE : 0);
      },
      editDim: (_dim: 'nether', x: number, y: number, z: number, id: number) => {
        targetBlocks.set(`${x},${y},${z}`, id);
      },
      switchDimension,
    });

    (game as unknown as { tickPortalTravel(): void }).tickPortalTravel();

    expect(switchDimension).toHaveBeenCalledOnce();
    const [, destination] = switchDimension.mock.calls[0] as [
      'nether',
      { x: number; y: number; z: number },
    ];
    expect(destination).not.toEqual({ x: 50.5, y: 33, z: 50.5 });
    expect(
      targetBlocks.get(
        `${Math.floor(destination.x)},${destination.y},${Math.floor(destination.z)}`,
      ),
    ).toBe(NETHER_PORTAL);
    expect(save.portalLinks['overworld:1,1,0']).toBeUndefined();
    expect(Object.keys(save.portalLinks).some((key) => key.startsWith('portal:overworld:'))).toBe(
      true,
    );
  });

  it('searches again on a far-offset portal return instead of forcing a reverse link', () => {
    const makePortal = (anchorX: number): Array<[number, number, number, number]> => {
      const entries: Array<[number, number, number, number]> = [];
      for (let y = 1; y <= 3; y++) {
        entries.push(
          [anchorX, y, 0, NETHER_PORTAL],
          [anchorX + 1, y, 0, NETHER_PORTAL],
          [anchorX - 1, y, 0, OBSIDIAN],
          [anchorX + 2, y, 0, OBSIDIAN],
        );
      }
      for (let x = anchorX - 1; x <= anchorX + 2; x++) {
        entries.push([x, 0, 0, OBSIDIAN], [x, 4, 0, OBSIDIAN]);
      }
      return entries;
    };
    const overworldSource = blockMap(makePortal(1000));
    const netherDestination = blockMap(makePortal(0));
    const edits: Record<string, number> = {};
    for (const [x, y, z, id] of makePortal(1000)) edits[`${x},${y},${z}`] = id;
    for (const [x, y, z, id] of makePortal(0)) edits[`nether:${x},${y},${z}`] = id;
    const save = { seed: 1, edits, portalLinks: {} as Record<string, [number, number, number]> };

    // 1000 / 8 = 125；下界 x=0 的旧门仍在 128 格搜索范围内，所以去程合法复用它。
    const forwardSwitch = vi.fn();
    const forward = Object.create(Game.prototype) as GameInstance;
    Object.assign(forward, {
      world: overworldSource.world,
      dimension: 'overworld',
      player: { pos: { x: 1000.5, y: 1, z: 0.5 } },
      portalTimer: 3.96,
      portalArmed: true,
      portalCooldown: 0,
      save,
      worldAt: (dim: 'overworld' | 'nether', x: number, y: number, z: number): number =>
        dim === 'overworld'
          ? overworldSource.world.getBlock(x, y, z)
          : netherDestination.world.getBlock(x, y, z),
      editDim: vi.fn(),
      switchDimension: forwardSwitch,
    });

    (forward as unknown as { tickPortalTravel(): void }).tickPortalTravel();

    expect(forwardSwitch).toHaveBeenCalledWith('nether', { x: 0.5, y: 1, z: 0.5 });
    expect(save.portalLinks['portal:overworld:x:1000,1,0']).toEqual([0.5, 1, 0.5]);
    expect(Object.keys(save.portalLinks).some((key) => key.startsWith('portal:nether:'))).toBe(
      false,
    );

    // 从这座远偏移下界门返程时，它的映射点在主世界 x/z≈4，不应穿回 996 格外的原门。
    // 注入旧版曾无条件写下的反向链接，同时覆盖旧存档迁移场景。
    save.portalLinks['portal:nether:x:0,1,0'] = [1000.5, 1, 0.5];
    const rebuiltOverworld = new Map<string, number>();
    const returnSwitch = vi.fn();
    const returning = Object.create(Game.prototype) as GameInstance;
    Object.assign(returning, {
      world: netherDestination.world,
      dimension: 'nether',
      player: { pos: { x: 0.5, y: 1, z: 0.5 } },
      portalTimer: 3.96,
      portalArmed: true,
      portalCooldown: 0,
      save,
      worldAt: (dim: 'overworld' | 'nether', x: number, y: number, z: number): number => {
        if (dim === 'nether') return netherDestination.world.getBlock(x, y, z);
        return rebuiltOverworld.get(`${x},${y},${z}`) ?? (y === 32 ? COBBLESTONE : 0);
      },
      editDim: (_dim: 'overworld', x: number, y: number, z: number, id: number) => {
        rebuiltOverworld.set(`${x},${y},${z}`, id);
        edits[`${x},${y},${z}`] = id;
      },
      switchDimension: returnSwitch,
    });

    (returning as unknown as { tickPortalTravel(): void }).tickPortalTravel();

    expect(returnSwitch).toHaveBeenCalledOnce();
    const [, returned] = returnSwitch.mock.calls[0] as [
      'overworld',
      { x: number; y: number; z: number },
    ];
    expect(returned.x).toBeLessThan(20);
    expect(returned.x).not.toBe(1000.5);
    expect(
      rebuiltOverworld.get(`${Math.floor(returned.x)},${returned.y},${Math.floor(returned.z)}`),
    ).toBe(NETHER_PORTAL);
    expect(save.portalLinks['portal:nether:x:0,1,0']).toEqual([returned.x, returned.y, returned.z]);
  });

  it('does not spawn overworld mobs while the current dimension is nether', () => {
    const surfaceY = vi.fn(() => 64);
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      dimension: 'nether',
      player: { pos: { x: 0, y: 64, z: 0 }, vel: { x: 0, y: 0, z: 0 } },
      mobs: [],
      mobSpawnTick: 1000,
      mobRng: () => 0.5,
      spawnWorld: {},
      surfaceY,
    });

    (game as unknown as { tickMobs(): void }).tickMobs();

    expect((game as unknown as { mobs: Mob[] }).mobs).toEqual([]);
    expect(surfaceY).not.toHaveBeenCalled();
  });

  it('uses bow ammunition and durability in survival but not in creative', () => {
    const makeGame = (creative: boolean, withArrow: boolean) => {
      const inv: Array<{ id: number; count: number; dur?: number } | null> = [
        { id: BOW, count: 1 },
        withArrow ? { id: ARROW, count: 1 } : null,
      ];
      const arrows: unknown[] = [];
      const game = Object.create(Game.prototype) as GameInstance;
      Object.assign(game, {
        creative,
        inv,
        hotbar: { index: 0, render: vi.fn() },
        drawingBow: true,
        bowCharge: 1,
        player: { pos: { x: 0, y: 64, z: 0 } },
        look: { yaw: 0, pitch: 0 },
        arrows,
        hand: { swing: vi.fn() },
      });
      return { game, inv, arrows };
    };

    const survival = makeGame(false, true);
    (survival.game as unknown as { releaseBow(): void }).releaseBow();
    expect(survival.inv[0]).toEqual({ id: BOW, count: 1, dur: 383 });
    expect(survival.inv[1]).toBeNull();
    expect(survival.arrows).toHaveLength(1);

    const creative = makeGame(true, false);
    (creative.game as unknown as { releaseBow(): void }).releaseBow();
    expect(creative.inv[0]).toEqual({ id: BOW, count: 1 });
    expect(creative.arrows).toHaveLength(1);
  });

  it('damages flint and steel only when a survival player successfully lights a portal', () => {
    const entries: Array<[number, number, number, number]> = [];
    for (const x of [0, 1, 2, 3]) entries.push([x, 0, 0, OBSIDIAN], [x, 4, 0, OBSIDIAN]);
    for (let y = 1; y <= 3; y++) entries.push([0, y, 0, OBSIDIAN], [3, y, 0, OBSIDIAN]);
    const hit = { x: 1, y: 0, z: 0, nx: 0, ny: 1, nz: 0 };
    const light = (creative: boolean) => {
      const state = blockMap(entries);
      const inv = [{ id: FLINT_AND_STEEL, count: 1 }] as Array<{
        id: number;
        count: number;
        dur?: number;
      } | null>;
      const game = Object.create(Game.prototype) as GameInstance;
      Object.assign(game, {
        creative,
        world: state.world,
        inv,
        hotbar: { index: 0, render: vi.fn() },
        editMany: (edits: ReadonlyArray<readonly [number, number, number, number]>) => {
          for (const [x, y, z, id] of edits) state.edit(x, y, z, id);
        },
      });
      const lit = (
        game as unknown as {
          tryIgnitePortal(
            targetHit: { x: number; y: number; z: number; nx: number; ny: number; nz: number },
            heldId: number,
          ): boolean;
        }
      ).tryIgnitePortal(hit, FLINT_AND_STEEL);
      return { lit, inv, state };
    };

    const survival = light(false);
    expect(survival.lit).toBe(true);
    expect(survival.inv[0]).toEqual({ id: FLINT_AND_STEEL, count: 1, dur: 63 });
    expect(survival.state.world.getBlock(1, 1, 0)).toBe(NETHER_PORTAL);

    const creative = light(true);
    expect(creative.lit).toBe(true);
    expect(creative.inv[0]).toEqual({ id: FLINT_AND_STEEL, count: 1 });
  });

  it('preserves wooden-tool durability when a furnace fuel slot is dropped', () => {
    const key = 'overworld:2,3,4';
    const furnaces = new Map([
      [
        key,
        {
          input: 0,
          inputN: 0,
          fuel: WOODEN_PICKAXE,
          fuelN: 1,
          fuelDur: 37,
          output: 0,
          outputN: 0,
          burn: 0,
          burnMax: 0,
          cook: 0,
        },
      ],
    ]);
    const drops: Array<{ id: number; count: number; dur?: number }> = [];
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      dimension: 'overworld',
      furnaceKey: null,
      furnaces,
      drops,
    });

    (
      game as unknown as { destroyFurnaceState(x: number, y: number, z: number): void }
    ).destroyFurnaceState(2, 3, 4);

    expect(drops).toHaveLength(1);
    expect(drops[0]).toMatchObject({ id: WOODEN_PICKAXE, count: 1, dur: 37 });
    expect(furnaces.has(key)).toBe(false);
  });

  it('creeper explosion does not splice its source or other dead mobs during mob iteration', () => {
    const source = spawnMob('creeper', 0, 2, 0);
    const victim = spawnMob('pig', 0.5, 2, 0);
    const mobs: Mob[] = [victim, source];
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      world: { getBlock: () => 0 },
      chunks: { remeshDirty: () => undefined },
      particles: [],
      player: { pos: { x: 100, y: 100, z: 100 } },
      mobs,
      drops: [],
      mobRng: () => 0,
    });

    (
      game as unknown as {
        explode(
          center: { x: number; y: number; z: number },
          radius: number,
          damage: number,
          source: Mob,
        ): void;
      }
    ).explode(source.pos, 3, 50, source);

    expect(mobs).toHaveLength(2);
    expect(mobs).toContain(source);
    expect(source.health).toBeGreaterThan(0);
    expect(victim.health).toBeLessThanOrEqual(0);
  });

  it('computes explosion shielding before the blast removes the wall', () => {
    const state = blockMap([[1, 2, 0, COBBLESTONE]]);
    const source = spawnMob('creeper', 0, 2, 0);
    const shielded = spawnMob('pig', 2.5, 2, 0);
    const exposed = spawnMob('pig', 0, 2, 2.5);
    const initialHealth = shielded.health;
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      world: state.world,
      chunks: { remeshDirty: () => undefined },
      particles: [],
      player: { pos: { x: 100, y: 100, z: 100 } },
      mobs: [shielded, exposed, source],
      drops: [],
      mobRng: () => 0,
      fluidSim: { activate: () => undefined },
      save: { edits: {} },
      dimension: 'overworld',
      activeEditsByChunk: new Map(),
    });

    (
      game as unknown as {
        explode(
          center: { x: number; y: number; z: number },
          radius: number,
          damage: number,
          source: Mob,
        ): void;
      }
    ).explode(source.pos, 3, 10, source);

    expect(initialHealth - exposed.health).toBeGreaterThan(initialHealth - shielded.health);
    expect(state.world.getBlock(1, 2, 0)).toBe(0);
  });

  it('sends explosion and chained falling sand as one deduplicated multiplayer batch', () => {
    const state = blockMap([
      [0, 0, 0, COBBLESTONE],
      [0, 3, 0, COBBLESTONE],
      [0, 4, 0, SAND],
    ]);
    const sendBlockBatch = vi.fn();
    const sendBlock = vi.fn(() => {
      throw new Error('explosion must not emit per-block packets');
    });
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      world: state.world,
      chunks: { remeshDirty: vi.fn() },
      particles: [],
      player: { pos: { x: 100, y: 100, z: 100 } },
      mobs: [],
      drops: [],
      mobRng: () => 0,
      fluidSim: { activate: vi.fn() },
      save: { edits: {} },
      dimension: 'overworld',
      activeEditsByChunk: new Map(),
      multiplayer: { sendBlock, sendBlockBatch },
    });

    (
      game as unknown as {
        explode(center: { x: number; y: number; z: number }, radius: number, damage: number): void;
      }
    ).explode({ x: 0, y: 2, z: 0 }, 1, 1);

    expect(sendBlock).not.toHaveBeenCalled();
    expect(sendBlockBatch).toHaveBeenCalledOnce();
    const [kind, edits] = sendBlockBatch.mock.calls[0] as [
      string,
      Array<{ x: number; y: number; z: number; id: number }>,
    ];
    expect(kind).toBe('explosion');
    expect(new Set(edits.map((edit) => `${edit.x},${edit.y},${edit.z}`)).size).toBe(edits.length);
    expect(edits).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ x: 0, y: 4, z: 0, id: 0 }),
        expect.objectContaining({ x: 0, y: 1, z: 0, id: SAND }),
      ]),
    );
    expect(state.world.getBlock(0, 1, 0)).toBe(SAND);
    expect(state.world.getBlock(0, 4, 0)).toBe(0);
  });

  it('sends an ordinary long sand fall as one gravity batch instead of out-of-reach block packets', () => {
    const state = blockMap([
      [0, 1, 0, COBBLESTONE],
      [0, 20, 0, SAND],
    ]);
    const sendBlockBatch = vi.fn();
    const sendBlock = vi.fn();
    const game = Object.create(Game.prototype) as GameInstance;
    Object.assign(game, {
      world: state.world,
      applyLocalEdit: state.edit,
      chunks: { remeshDirty: vi.fn() },
      multiplayer: { sendBlock, sendBlockBatch },
      dimension: 'overworld',
      drops: [],
    });

    expect(
      (
        game as unknown as {
          settleFallingBlock(x: number, y: number, z: number): boolean;
        }
      ).settleFallingBlock(0, 20, 0),
    ).toBe(true);
    expect(sendBlock).not.toHaveBeenCalled();
    expect(sendBlockBatch).toHaveBeenCalledOnce();
    expect(sendBlockBatch).toHaveBeenCalledWith(
      'gravity',
      expect.arrayContaining([
        expect.objectContaining({ x: 0, y: 20, z: 0, id: 0 }),
        expect.objectContaining({ x: 0, y: 2, z: 0, id: SAND }),
      ]),
      { center: { x: 0.5, y: 20.5, z: 0.5 } },
    );
  });
});
