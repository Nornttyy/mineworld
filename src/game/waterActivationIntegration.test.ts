import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { WATER } from '../core/blocks/registry';
import { worldToChunk } from '../core/world/coords';

let Game: typeof import('./Game').Game;
beforeAll(async () => {
  Object.assign(globalThis, {
    window: { addEventListener() {} },
    document: { addEventListener() {} },
  });
  Game = (await import('./Game')).Game;
});
afterEach(() => { vi.unstubAllGlobals(); });

type WaterGame = {
  player: { pos: { x: number; y: number; z: number } };
  wateredChunks: Set<string>;
  activateNearbyWater(): void;
  forgetWaterActivation(key: string): void;
  preloadSpawn(radius: number): Promise<void>;
};

function setup(modern = true, y = -32, loaded = new Set(['0,0'])) {
  const blocks = new Map<string, number>();
  const reads: Array<[number, number, number]> = [];
  const activate = vi.fn();
  const world = {
    minY: modern ? -64 : 0, maxY: modern ? 320 : 192,
    height: modern ? 384 : 192, seaLevel: modern ? 63 : 116,
    request: vi.fn(),
    peek: (cx: number, cz: number) => loaded.has(`${cx},${cz}`) ? {} : undefined,
    getBlock: (x: number, by: number, z: number) => {
      if (!loaded.has(`${worldToChunk(x)},${worldToChunk(z)}`))
        throw new Error('Water scan synchronously read an unloaded chunk');
      reads.push([x, by, z]);
      return blocks.get(`${x},${by},${z}`) ?? 0;
    },
    waterAmount: () => 0, isWaterSource: () => false, isWaterFalling: () => false,
    setWater: vi.fn(),
  };
  const game = Object.assign(Object.create(Game.prototype), {
    world, worldEpoch: 1, wateredChunks: new Set<string>(),
    player: { pos: { x: 0.5, y, z: 0.5 } },
    fluidSim: { activate, activeCount: 0, tick: vi.fn() },
    chunks: { update: vi.fn(), flushMesh: vi.fn(), meshBusy: () => false },
  }) as WaterGame;
  return { game, world, blocks, reads, activate, loaded };
}

describe('Game water activation across modern vertical sections', () => {
  it('activates negative-Y water after the same horizontal chunk was scanned at sea level', () => {
    const { game, blocks, activate } = setup(true, 64);
    blocks.set('1,62,1', WATER);
    blocks.set('1,-31,1', WATER);
    game.activateNearbyWater();
    expect(activate).toHaveBeenCalledWith(1, 62, 1);
    expect(activate).not.toHaveBeenCalledWith(1, -31, 1);
    game.player.pos.y = -32;
    game.activateNearbyWater();
    expect(activate).toHaveBeenCalledWith(1, -31, 1);
    expect(game.wateredChunks.has('0,0,-2')).toBe(true);
    expect(game.wateredChunks.has('0,0')).toBe(false);
    const calls = activate.mock.calls.length;
    game.activateNearbyWater();
    expect(activate).toHaveBeenCalledTimes(calls);
  });

  it('limits each exploration pass to three 16-high sections even when all nearby chunks are loaded', () => {
    const loaded = new Set<string>();
    for (let x = -5; x <= 5; x++) for (let z = -5; z <= 5; z++) loaded.add(`${x},${z}`);
    const { game, reads } = setup(true, -32, loaded);
    game.activateNearbyWater();
    expect(game.wateredChunks.size).toBe(3);
    expect(reads.length).toBe(3 * 18 * 18 * 16);
    expect(Math.min(...reads.map((p) => p[1]))).toBe(-48);
    expect(Math.max(...reads.map((p) => p[1]))).toBe(-1);
    game.activateNearbyWater();
    expect(game.wateredChunks.size).toBe(6);
    expect(reads.length).toBe(6 * 18 * 18 * 16);
  });

  it.each([-64, 319])('clamps section scans at world edge %s without scanning the whole column', (y) => {
    const { game, reads } = setup(true, y);
    game.activateNearbyWater();
    expect(game.wateredChunks.size).toBe(2);
    expect(reads.every(([, by]) => by >= -64 && by < 320)).toBe(true);
    expect(new Set(reads.map(([, by]) => by)).size).toBe(32);
  });

  it('skips unloaded chunks without marking them, then scans them when they arrive', () => {
    const { game, loaded, reads, blocks, activate } = setup(true, -32, new Set());
    blocks.set('1,-31,1', WATER);
    game.activateNearbyWater();
    expect(reads).toHaveLength(0);
    expect(game.wateredChunks.size).toBe(0);
    loaded.add('0,0');
    game.activateNearbyWater();
    expect(activate).toHaveBeenCalledWith(1, -31, 1);
  });

  it('clears every section of an evicted chunk, preserving other chunk records', () => {
    const { game, blocks, activate } = setup();
    blocks.set('1,-31,1', WATER);
    game.activateNearbyWater();
    game.wateredChunks.add('0,0,19');
    game.wateredChunks.add('1,0,-2');
    game.forgetWaterActivation('0,0');
    expect([...game.wateredChunks]).toEqual(['1,0,-2']);
    game.activateNearbyWater();
    expect(activate).toHaveBeenCalledTimes(2);
  });

  it('retains the legacy sea band and whole-column deduplication', () => {
    const { game, blocks, reads, activate } = setup(false, 64);
    blocks.set('1,100,1', WATER);
    blocks.set('1,30,1', WATER);
    game.activateNearbyWater();
    expect(activate).toHaveBeenCalledWith(1, 100, 1);
    expect(activate).not.toHaveBeenCalledWith(1, 30, 1);
    expect([...game.wateredChunks]).toEqual(['0,0']);
    const count = reads.length;
    game.player.pos.y = 30;
    game.activateNearbyWater();
    expect(reads.length).toBe(count);
    game.forgetWaterActivation('0,0');
    expect(game.wateredChunks.size).toBe(0);
  });

  it('preloads only nearby sections, stays within requested chunks and yields within a nine-section budget', async () => {
    const loaded = new Set<string>();
    for (let x = -1; x <= 1; x++) for (let z = -1; z <= 1; z++) loaded.add(`${x},${z}`);
    const { game, world, reads, blocks, activate } = setup(true, -32, loaded);
    blocks.set('1,-31,1', WATER);
    let lastReadCount = 0;
    const batchReads: number[] = [];
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      batchReads.push(reads.length - lastReadCount);
      lastReadCount = reads.length;
      callback(0);
      return 1;
    });
    vi.stubGlobal('cancelAnimationFrame', () => undefined);
    await game.preloadSpawn(1);
    expect(world.request).toHaveBeenCalledTimes(9);
    expect(activate).toHaveBeenCalledWith(1, -31, 1);
    expect(game.wateredChunks.size).toBe(27);
    expect([...game.wateredChunks].every((key) => key.split(',').length === 3)).toBe(true);
    expect(reads.every(([x, by, z]) => x >= -16 && x < 32 && z >= -16 && z < 32 && by >= -48 && by <= -1)).toBe(true);
    // One extra read tests the water block's open neighbour; all-air sections cost exactly 16³ reads.
    expect(Math.max(...batchReads)).toBeLessThanOrEqual(9 * 16 * 16 * 16 + 1);
    const before = activate.mock.calls.length;
    game.activateNearbyWater();
    expect(activate).toHaveBeenCalledTimes(before);
  });
});
