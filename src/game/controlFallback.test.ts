import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { PointerLookControls } from '../input/PointerLookControls';
import { emptyInventory } from '../core/inventory/inventory';
import type { Game as GameInstance } from './Game';

let Game: typeof import('./Game').Game;
beforeAll(async () => {
  vi.stubGlobal('window', new EventTarget());
  vi.stubGlobal('document', new EventTarget());
  Game = (await import('./Game')).Game;
});
afterEach(() => {
  vi.unstubAllGlobals();
});

type Actions = {
  openPlayerInventory(): void;
  closeCrafting(): void;
  publishControlState(): void;
  releaseBow(): void;
};

function fixture() {
  const win = new EventTarget();
  const doc = Object.assign(new EventTarget(), { pointerLockElement: null });
  vi.stubGlobal('window', win);
  vi.stubGlobal('document', doc);
  const canvas = Object.assign(new EventTarget(), {
    ownerDocument: doc,
    requestPointerLock: vi.fn(() =>
      Promise.reject(new DOMException('Embedded browser', 'WrongDocumentError')),
    ),
  });
  const look = new PointerLookControls(canvas as unknown as HTMLCanvasElement);
  const game = Object.create(Game.prototype) as Actions &
    Pick<
      GameInstance,
      'requestPlayControl' | 'pausePlayControl' | 'isGameplayActive' | 'isContainerOpen'
    >;
  const hint = { style: { display: 'none' } };
  let open = false;
  const invUI = {
    show: vi.fn(() => {
      open = true;
    }),
    hide: vi.fn(() => {
      open = false;
      return [];
    }),
    isOpen: () => open,
  };
  Object.assign(game, {
    look,
    controlHint: hint,
    touch: null,
    dead: false,
    creative: false,
    craftingGrid: 0,
    furnaceKey: null,
    furnaceUI: { isOpen: () => false },
    inv: emptyInventory(),
    invUI,
    crack: { hide: vi.fn() },
    dropOverflow: vi.fn(),
    arrows: [],
    digging: true,
    drawingBow: true,
    bowCharge: 0.8,
    eating: true,
    eatProgress: 1,
  });
  look.onChange = () => game.publishControlState();
  const changed = vi.fn();
  win.addEventListener('mineworld:control-change', changed);
  return { game, look, hint, changed, invUI, canvas };
}

describe('Game embedded control fallback integration', () => {
  it('publishes active fallback so the main UI can reveal the HUD', async () => {
    const { game, look, hint, changed } = fixture();
    await expect(game.requestPlayControl()).resolves.toBe(true);
    expect(game.isGameplayActive()).toBe(true);
    expect(hint.style.display).toBe('block');
    expect(changed).toHaveBeenCalledOnce();
    game.pausePlayControl();
    expect(game.isGameplayActive()).toBe(false);
    expect(hint.style.display).toBe('none');
    expect(changed).toHaveBeenCalledTimes(2);
    look.dispose();
  });

  it('container opening cancels held actions and closing explicitly restores fallback', async () => {
    const { game, look, hint, invUI, canvas } = fixture();
    await game.requestPlayControl();
    game.openPlayerInventory();
    expect(invUI.show).toHaveBeenCalledOnce();
    expect(game.isContainerOpen()).toBe(true);
    expect(game.isGameplayActive()).toBe(false);
    expect(look.isActive).toBe(false);
    expect(hint.style.display).toBe('none');
    const state = game as unknown as {
      digging: boolean;
      drawingBow: boolean;
      bowCharge: number;
      eating: boolean;
      arrows: unknown[];
    };
    expect(state).toMatchObject({ digging: false, drawingBow: false, bowCharge: 0, eating: false });
    game.releaseBow(); // Mouse release after cancellation must never create an arrow.
    expect(state.arrows).toEqual([]);
    await expect(game.requestPlayControl()).resolves.toBe(false);
    game.closeCrafting();
    expect(game.isContainerOpen()).toBe(false);
    expect(game.isGameplayActive()).toBe(true);
    expect(hint.style.display).toBe('block');
    expect(canvas.requestPointerLock).toHaveBeenCalledOnce();
    look.dispose();
  });

  it('a dead player cannot reactivate controls', async () => {
    const { game, look, canvas } = fixture();
    Object.assign(game, { dead: true });
    await expect(game.requestPlayControl()).resolves.toBe(false);
    expect(canvas.requestPointerLock).not.toHaveBeenCalled();
    expect(game.isGameplayActive()).toBe(false);
    look.dispose();
  });
});
