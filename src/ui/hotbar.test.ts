import { describe, expect, it, vi } from 'vitest';
import { emptyInventory } from '../core/inventory/inventory';
import { OBSIDIAN } from '../core/blocks/registry';
import { Hotbar } from './hotbar';

describe('hotbar item name subtitle', () => {
  it('shows the selected item name even when an item is copied into the current slot', () => {
    const inv = emptyInventory();
    const label = {
      textContent: '',
      offsetWidth: 0,
      classList: { add: vi.fn(), remove: vi.fn() },
    } as unknown as HTMLElement;
    const cells = Array.from({ length: 9 }, () => ({
      classList: { toggle: vi.fn() },
    })) as unknown as HTMLElement[];
    const hotbar = Object.create(Hotbar.prototype) as Hotbar;
    Object.assign(hotbar, {
      itemNameEl: label,
      inventory: inv,
      selectedItemId: null,
      selected: 0,
      size: 9,
      cells,
    });

    inv[0] = { id: OBSIDIAN, count: 64 };
    hotbar.setSelected(0);

    expect(label.textContent).toBe('黑曜石');
    expect(label.classList.add).toHaveBeenCalledWith('show');
  });
});
