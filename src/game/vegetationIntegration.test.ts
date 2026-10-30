import { beforeAll, describe, expect, it, vi } from 'vitest';
import { POPPY, DEAD_BUSH, GRASS, SAND, WATER, isReplaceableId, plantDrops } from '../core/blocks/registry';
import { emptyInventory } from '../core/inventory/inventory';
import { heldRenderKind } from '../render/FirstPersonHand';
import { meshChunkData } from '../core/mesh/mesher';
import type { Game as GameInstance } from './Game';
let Game: typeof import('./Game').Game;
beforeAll(async () => {
  Object.assign(globalThis, { window: { addEventListener() {} }, document: { addEventListener() {} } });
  Game = (await import('./Game')).Game;
});
function fixture(below: number, target = 0) {
  const game = Object.create(Game.prototype) as GameInstance;
  const inv = emptyInventory(); inv[0] = { id: POPPY, count: 2 };
  const edit = vi.fn(); const drops: { id: number; count: number }[] = [];
  Object.assign(game, {
    inv, drops, creative: false, hotbar: { index: 0, render: vi.fn() }, hand: { swing: vi.fn() },
    world: { getBlock: (_x: number, y: number) => y === 80 ? below : target },
    player: { pos: { x: 100, y: 80, z: 100 }, crouching: false },
    particles: [], crack: { hide: vi.fn() }, edit,
  });
  return { game: game as unknown as { placeBlock(hit: object): void; mineBlock(x: number, y: number, z: number, id: number): void }, inv, edit, drops };
}
describe('surface vegetation interactions', () => {
  it('picking a flower produces its actual inventory item without tool wear', () => {
    const f = fixture(GRASS);
    f.game.mineBlock(0, 81, 0, POPPY);
    expect(f.edit).toHaveBeenCalledWith(0, 81, 0, 0);
    expect(f.drops).toHaveLength(1); expect(f.drops[0].id).toBe(POPPY);
  });
  it.each([1, WATER, SAND])('rejects flower placement on unsupported block %s without consuming it', below => {
    const f = fixture(below); f.game.placeBlock({ x: 0, y: 80, z: 0, nx: 0, ny: 1, nz: 0 });
    expect(f.edit).not.toHaveBeenCalled(); expect(f.inv[0]?.count).toBe(2);
  });
  it('places flowers on soil and refuses to overwrite an existing flower', () => {
    const f = fixture(GRASS); f.game.placeBlock({ x: 0, y: 80, z: 0, nx: 0, ny: 1, nz: 0 });
    expect(f.edit).toHaveBeenCalledWith(0, 81, 0, POPPY); expect(f.inv[0]?.count).toBe(1);
    expect(isReplaceableId(POPPY)).toBe(false);
  });
  it('uses transparent cross geometry and a sprite in the hand, never a flower-textured cube', () => {
    const mesh = meshChunkData(0, 0, (x, y, z) => x === 8 && y === 100 && z === 8 ? POPPY : 0, () => 0);
    expect(mesh.opaque.positions).toHaveLength(0);
    expect(mesh.cutout.positions).toHaveLength(24); // two four-vertex planes
    expect(Math.max(...mesh.cutout.positions.filter((_v, i) => i % 3 === 1))).toBe(101);
    expect(heldRenderKind(POPPY)).toBe('sprite');
    expect(heldRenderKind(DEAD_BUSH)).toBe('sprite');
  });
  it('dead bushes drop zero to two sticks', () => {
    expect(plantDrops(DEAD_BUSH, () => 0)).toBeNull();
    expect(plantDrops(DEAD_BUSH, () => .5)).toEqual({ id: 257, count: 1 });
    expect(plantDrops(DEAD_BUSH, () => .99)).toEqual({ id: 257, count: 2 });
  });
});
