import type { Inventory } from '../core/inventory/inventory';
import { iconUrl } from './itemIcons';

// 底部快捷栏（MC 同款，生存式）：9 格，显示背包前 9 格的方块/物品图标 + 数量，当前选中高亮。
// 图标统一走 itemIcons（方块 iso + 工具/棍/煤 2D 图标）。

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
        const url = iconUrl(s.id);
        icon.style.backgroundImage = url ? `url(${url})` : 'none';
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
