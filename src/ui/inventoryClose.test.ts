import { describe, expect, it, vi } from 'vitest';
import { emptyInventory, type Inventory, type ItemStack } from '../core/inventory/inventory';
import { DIAMOND_PICKAXE, WOODEN_PICKAXE } from '../core/items/items';
import { newFurnace, type FurnaceState } from '../core/crafting/smelting';
import { FurnaceUI } from './furnaceUI';
import { InventoryUI } from './inventoryUI';

interface InventoryUiState {
  inv: Inventory | null;
  craft: (ItemStack | null)[][];
  cursor: ItemStack | null;
  open: boolean;
  root: HTMLElement;
  cursorEl: HTMLElement;
  onChange: (() => void) | null;
}

interface FurnaceUiState {
  inv: Inventory | null;
  furnace: FurnaceState | null;
  cursor: ItemStack | null;
  open: boolean;
  root: HTMLElement;
  cursorEl: HTMLElement;
  onChange: (() => void) | null;
}

function fakeElement(): HTMLElement {
  return {
    classList: { add: vi.fn() },
    style: { display: '' },
  } as unknown as HTMLElement;
}

function fullInventory(): Inventory {
  return Array.from({ length: emptyInventory().length }, () => ({ id: 1, count: 64 }));
}

function bareInventoryUi(
  state: Omit<InventoryUiState, 'root' | 'cursorEl' | 'open' | 'onChange'>,
): InventoryUI {
  const ui = Object.create(InventoryUI.prototype) as InventoryUI;
  Object.assign(ui, {
    ...state,
    root: fakeElement(),
    cursorEl: fakeElement(),
    open: true,
    onChange: null,
  } satisfies InventoryUiState);
  return ui;
}

function bareFurnaceUi(state: Pick<FurnaceUiState, 'inv' | 'cursor'>): FurnaceUI {
  const ui = Object.create(FurnaceUI.prototype) as FurnaceUI;
  Object.assign(ui, {
    ...state,
    furnace: null,
    root: fakeElement(),
    cursorEl: fakeElement(),
    open: true,
    onChange: null,
  } satisfies FurnaceUiState);
  return ui;
}

describe('container UI close safety', () => {
  it('inventory close returns every item that cannot fit and preserves durability', () => {
    const inv = fullInventory();
    inv[0] = { id: 2, count: 63 };
    const ui = bareInventoryUi({
      inv,
      craft: [
        [
          { id: 2, count: 4 },
          { id: DIAMOND_PICKAXE, count: 1, dur: 37 },
        ],
        [null, null],
      ],
      cursor: { id: 2, count: 2 },
    });

    const overflow = ui.hide();

    expect(inv[0]).toEqual({ id: 2, count: 64 });
    expect(overflow).toEqual([
      { id: 2, count: 3 },
      { id: DIAMOND_PICKAXE, count: 1, dur: 37 },
      { id: 2, count: 2 },
    ]);
    const state = ui as unknown as InventoryUiState;
    expect(state.craft.flat().every((stack) => stack === null)).toBe(true);
    expect(state.cursor).toBeNull();
    expect(state.open).toBe(false);
  });

  it('furnace close returns an overflowing cursor stack with durability intact', () => {
    const inv = fullInventory();
    const ui = bareFurnaceUi({
      inv,
      cursor: { id: DIAMOND_PICKAXE, count: 1, dur: 9 },
    });

    expect(ui.hide()).toEqual([{ id: DIAMOND_PICKAXE, count: 1, dur: 9 }]);
    const state = ui as unknown as FurnaceUiState;
    expect(state.cursor).toBeNull();
    expect(state.open).toBe(false);
  });

  it('rejects a damaged tool from the furnace input instead of erasing its durability', () => {
    const ui = bareFurnaceUi({
      inv: emptyInventory(),
      cursor: { id: DIAMOND_PICKAXE, count: 1, dur: 9 },
    });
    const furnace = newFurnace();
    Object.assign(ui, { furnace });

    (
      ui as unknown as { performFurnaceClick(slot: 'input', right: boolean): void }
    ).performFurnaceClick('input', false);

    expect(furnace.inputN).toBe(0);
    expect((ui as unknown as FurnaceUiState).cursor).toEqual({
      id: DIAMOND_PICKAXE,
      count: 1,
      dur: 9,
    });
  });

  it('preserves a damaged wooden tool when shift-moving it into fuel and taking it back', () => {
    const inv = emptyInventory();
    inv[0] = { id: WOODEN_PICKAXE, count: 1, dur: 17 };
    const ui = bareFurnaceUi({ inv, cursor: null });
    vi.spyOn(ui, 'render').mockImplementation(() => undefined);
    const furnace = newFurnace();
    Object.assign(ui, { furnace });
    const actions = ui as unknown as {
      shiftToFurnace(index: number): void;
      performFurnaceClick(slot: 'fuel', right: boolean): void;
    };

    actions.shiftToFurnace(0);

    expect(inv[0]).toBeNull();
    expect(furnace).toMatchObject({ fuel: WOODEN_PICKAXE, fuelN: 1, fuelDur: 17 });

    actions.performFurnaceClick('fuel', false);

    expect(furnace.fuel).toBe(0);
    expect(furnace.fuelN).toBe(0);
    expect(furnace.fuelDur).toBeUndefined();
    expect((ui as unknown as FurnaceUiState).cursor).toEqual({
      id: WOODEN_PICKAXE,
      count: 1,
      dur: 17,
    });
  });

  it('swaps rather than merges same fuel tools with different durability', () => {
    const ui = bareFurnaceUi({
      inv: emptyInventory(),
      cursor: { id: WOODEN_PICKAXE, count: 1, dur: 8 },
    });
    vi.spyOn(ui, 'render').mockImplementation(() => undefined);
    const furnace = newFurnace();
    furnace.fuel = WOODEN_PICKAXE;
    furnace.fuelN = 1;
    furnace.fuelDur = 29;
    Object.assign(ui, { furnace });

    (
      ui as unknown as { performFurnaceClick(slot: 'fuel', right: boolean): void }
    ).performFurnaceClick('fuel', false);

    expect(furnace).toMatchObject({ fuel: WOODEN_PICKAXE, fuelN: 1, fuelDur: 8 });
    expect((ui as unknown as FurnaceUiState).cursor).toEqual({
      id: WOODEN_PICKAXE,
      count: 1,
      dur: 29,
    });
  });
});
