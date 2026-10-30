import { afterEach, describe, expect, it, vi } from 'vitest';
import { emptyInventory, type ItemStack } from '../core/inventory/inventory';
import { newFurnace } from '../core/crafting/smelting';
import { InventoryUI } from './inventoryUI';
import { FurnaceUI } from './furnaceUI';

function element() {
  return {
    textContent: '',
    innerHTML: '',
    title: '',
    dataset: {} as Record<string, string>,
    style: { display: '', backgroundImage: '', setProperty: vi.fn() },
    classList: { add: vi.fn(), remove: vi.fn(), toggle: vi.fn() },
    setAttribute: vi.fn(),
  };
}

const cell = () => ({ el: element(), icon: element(), cnt: element() });

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('Java container presentation keeps existing inventory state safe', () => {
  it('can open creative after a 3×3 workbench without rendering stale craft cells', () => {
    const viewport = {
      width: 960,
      height: 720,
      offsetLeft: 0,
      offsetTop: 0,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };
    const windowEvents = { addEventListener: vi.fn(), removeEventListener: vi.fn() };
    vi.stubGlobal('window', {
      innerWidth: 960,
      innerHeight: 720,
      visualViewport: viewport,
      ...windowEvents,
    });
    let scale = '3';
    vi.stubGlobal('getComputedStyle', () => ({ getPropertyValue: () => scale }));
    const root = { ...element(), querySelector: () => element() };
    const inv = emptyInventory();
    inv[0] = { id: 7, count: 4 };
    const ui = Object.create(InventoryUI.prototype) as InventoryUI;
    Object.assign(ui, {
      root,
      mode: 'survival',
      gridN: 3,
      inv,
      craft: Array.from({ length: 3 }, () => Array<ItemStack | null>(3).fill(null)),
      craftCells: Array.from({ length: 9 }, cell),
      cgridEl: element(),
      titleEl: element(),
      standardEl: element(),
      creativeEl: element(),
      hintEl: element(),
      cursorEl: element(),
      cursor: null,
      outCell: cell(),
      mainCells: Array.from({ length: 27 }, cell),
      hotbarCells: Array.from({ length: 9 }, cell),
      creativeCells: [],
      // Catalog construction requires DOM nodes; the real render below must still run.
      rebuildCreativeCatalog: vi.fn(),
    });

    expect(() => ui.showCreative(inv)).not.toThrow();

    const state = ui as unknown as { craftCells: unknown[]; craft: unknown[]; gridN: number };
    expect(state.craftCells).toEqual([]);
    expect(state.craft).toEqual([]);
    expect(state.gridN).toBe(0);
    expect(inv[0]).toEqual({ id: 7, count: 4 });
    expect(root.dataset.container).toBe('creative');
    // A 195px panel at scale 3 must start at logical x=62, not physical x=187.5.
    expect(root.style.setProperty).toHaveBeenCalledWith('--container-left', '186px');
    expect(root.style.setProperty).toHaveBeenCalledWith('--container-top', '156px');

    // A visual viewport change alone must refresh positioning after the root updates GUI scale.
    scale = '2';
    Object.assign(viewport, { width: 640, height: 480, offsetLeft: 3, offsetTop: 7 });
    const reposition = viewport.addEventListener.mock.calls.find(
      ([event]) => event === 'resize',
    )![1];
    reposition();
    expect(root.style.setProperty).toHaveBeenLastCalledWith('--container-top', '111px');
    expect(root.style.setProperty).toHaveBeenCalledWith('--container-left', '127px');
    ui.showCreative(inv); // Repeated show must not add another pair of viewport listeners.
    expect(viewport.addEventListener).toHaveBeenCalledTimes(2);
    expect(windowEvents.addEventListener).toHaveBeenCalledTimes(1);
    ui.hide();
    expect(viewport.removeEventListener).toHaveBeenCalledWith('resize', reposition);
    expect(viewport.removeEventListener).toHaveBeenCalledWith('scroll', reposition);
    expect(windowEvents.removeEventListener).toHaveBeenCalledWith('resize', reposition);
  });

  it('centers a furnace in integer GUI pixels without altering persistent furnace contents', () => {
    const viewport = {
      width: 961,
      height: 721,
      offsetLeft: 0,
      offsetTop: 0,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    };
    const windowEvents = { addEventListener: vi.fn(), removeEventListener: vi.fn() };
    vi.stubGlobal('window', {
      innerWidth: 961,
      innerHeight: 721,
      visualViewport: viewport,
      ...windowEvents,
    });
    let scale = '3';
    vi.stubGlobal('getComputedStyle', () => ({ getPropertyValue: () => scale }));
    const root = element();
    const furnace = newFurnace();
    Object.assign(furnace, { input: 12, inputN: 8, fuel: 258, fuelN: 3, burn: 123, cook: 42 });
    const saved = { ...furnace };
    const ui = Object.create(FurnaceUI.prototype) as FurnaceUI;
    Object.assign(ui, { root, cursorEl: element(), render: vi.fn() });

    ui.show(emptyInventory(), furnace);

    expect(root.style.setProperty).toHaveBeenCalledWith('--container-left', '216px');
    expect(root.style.setProperty).toHaveBeenCalledWith('--container-top', '111px');
    expect(furnace).toEqual(saved);
    expect(ui.isOpen()).toBe(true);

    scale = '1';
    Object.assign(viewport, { width: 375, height: 240, offsetTop: 200 });
    const reposition = viewport.addEventListener.mock.calls.find(
      ([event]) => event === 'scroll',
    )![1];
    reposition();
    expect(root.style.setProperty).toHaveBeenCalledWith('--container-left', '99px');
    expect(root.style.setProperty).toHaveBeenLastCalledWith('--container-top', '237px');
    ui.hide();
    expect(viewport.removeEventListener).toHaveBeenCalledWith('resize', reposition);
    expect(viewport.removeEventListener).toHaveBeenCalledWith('scroll', reposition);
    expect(windowEvents.removeEventListener).toHaveBeenCalledWith('resize', reposition);
    expect(furnace).toEqual(saved);
  });
});
