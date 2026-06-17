import type { Inventory } from '../core/inventory/inventory';

// 底部快捷栏（MC 同款，生存式）：9 格，显示背包前 9 格的方块图标 + 数量，当前选中高亮。
// 方块 id → 等距图标名（public/textures/icons/<name>.png）
const ICON: Record<number, string> = {
  1: 'stone',
  2: 'dirt',
  3: 'grass',
  4: 'cobblestone',
  5: 'sand',
  6: 'oak_log',
  7: 'oak_planks',
  8: 'coal_ore',
  10: 'oak_leaves',
};

export class Hotbar {
  private readonly icons: HTMLElement[] = [];
  private readonly counts: HTMLElement[] = [];
  private readonly cells: HTMLElement[] = [];
  private selected = 0;
  readonly size: number;

  constructor(el: HTMLElement, size = 9) {
    this.size = size;
    el.innerHTML = '';
    for (let i = 0; i < size; i++) {
      const slot = document.createElement('div');
      slot.className = 'hotbar-slot';
      const icon = document.createElement('div');
      icon.className = 'hotbar-icon';
      const count = document.createElement('div');
      count.className = 'hotbar-count';
      slot.append(icon, count);
      el.appendChild(slot);
      this.cells.push(slot);
      this.icons.push(icon);
      this.counts.push(count);
    }
    this.setSelected(0);
  }

  // 按背包内容刷新图标与数量
  render(inv: Inventory): void {
    for (let i = 0; i < this.size; i++) {
      const s = inv[i] ?? null;
      const icon = this.icons[i];
      const count = this.counts[i];
      if (s && s.count > 0) {
        const name = ICON[s.id];
        icon.style.backgroundImage = name
          ? `url(${import.meta.env.BASE_URL}textures/icons/${name}.png)`
          : 'none';
        count.textContent = s.count > 1 ? String(s.count) : '';
      } else {
        icon.style.backgroundImage = 'none';
        count.textContent = '';
      }
    }
  }

  setSelected(i: number): void {
    this.selected = ((i % this.size) + this.size) % this.size;
    this.cells.forEach((s, idx) => s.classList.toggle('selected', idx === this.selected));
  }

  scroll(dir: number): void {
    this.setSelected(this.selected + dir);
  }

  get index(): number {
    return this.selected;
  }
}
