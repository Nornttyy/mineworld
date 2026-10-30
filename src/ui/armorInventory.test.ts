import { describe, expect, it, vi } from 'vitest';
import { InventoryUI } from './inventoryUI';
import { emptyInventory, type Inventory, type ItemStack } from '../core/inventory/inventory';
import { emptyArmor, type ArmorInventory } from '../core/equipment/armor';

interface Actions {
  armor: ArmorInventory;
  inv: Inventory;
  cursor: ItemStack | null;
  gridN: number;
  applyClick(region: 'armor' | 'main' | 'hotbar', i: number, right: boolean): void;
  quickMoveFrom(region: 'armor' | 'main' | 'hotbar', i: number): void;
}
function fixture() {
  const ui = Object.create(InventoryUI.prototype) as InventoryUI;
  Object.assign(ui, {
    armor: emptyArmor(),
    inv: emptyInventory(),
    cursor: null,
    gridN: 2,
    craft: [],
    mode: 'survival',
    root: { classList: { add: vi.fn() } },
    cursorEl: { style: {} },
  });
  return { ui, actions: ui as unknown as Actions };
}

describe('real armor slots preserve inventory ownership', () => {
  it('rejects blocks and wrong piece types without consuming the cursor', () => {
    const { actions: a } = fixture();
    a.cursor = { id: 7, count: 64 };
    a.applyClick('armor', 0, false);
    expect(a.cursor).toEqual({ id: 7, count: 64 });
    a.cursor = { id: 307, count: 1, dur: 18 };
    a.applyClick('armor', 0, true);
    expect(a.armor).toEqual(emptyArmor());
    expect(a.cursor!.dur).toBe(18);
  });

  it('equips, swaps and unequips with durability intact using actual click handlers', () => {
    const { actions: a } = fixture();
    a.cursor = { id: 306, count: 1, dur: 17 };
    a.applyClick('armor', 0, false);
    expect(a.cursor).toBeNull();
    a.cursor = { id: 314, count: 1, dur: 200 };
    a.applyClick('armor', 0, true);
    expect(a.cursor).toEqual({ id: 306, count: 1, dur: 17 });
    a.applyClick('hotbar', 0, false);
    a.applyClick('armor', 0, true);
    expect(a.cursor).toEqual({ id: 314, count: 1, dur: 200 });
    expect(a.armor[0]).toBeNull();
  });

  it('shift equips a matching empty slot, leaves worn pieces in place when bag full', () => {
    const { actions: a } = fixture();
    a.inv[9] = { id: 308, count: 1, dur: 45 };
    a.quickMoveFrom('main', 0);
    expect(a.inv[9]).toBeNull();
    expect(a.armor[2]).toEqual({ id: 308, count: 1, dur: 45 });
    a.inv.fill({ id: 7, count: 64 });
    a.quickMoveFrom('armor', 2);
    expect(a.armor[2]!.dur).toBe(45);
    a.inv[3] = null;
    a.quickMoveFrom('armor', 2);
    expect(a.armor[2]).toBeNull();
    expect(a.inv[3]).toEqual({ id: 308, count: 1, dur: 45 });
  });

  it('workbench quick move does not silently equip armor; closing personal inventory keeps it worn', () => {
    const { ui, actions: a } = fixture();
    a.gridN = 3;
    a.inv[9] = { id: 302, count: 1 };
    a.quickMoveFrom('main', 0);
    expect(a.armor).toEqual(emptyArmor());
    expect(a.inv[0]).toEqual({ id: 302, count: 1 });
    a.gridN = 2;
    a.quickMoveFrom('hotbar', 0);
    expect(ui.hide()).toEqual([]);
    expect(a.armor[0]).toEqual({ id: 302, count: 1 });
    expect(a.inv.every((s) => s === null)).toBe(true);
  });
});
