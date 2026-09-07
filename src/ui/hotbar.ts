import type { Inventory } from '../core/inventory/inventory';
import { iconUrl, itemLabel } from './itemIcons';
import { itemMaxDurability } from '../core/items/items';

// 底部快捷栏（MC 同款，生存式）：9 格，显示背包前 9 格的方块/物品图标 + 数量，当前选中高亮。
// 图标统一走 itemIcons（方块 iso + 工具/棍/煤 2D 图标）。

export class Hotbar {
  private readonly icons: HTMLElement[] = [];
  private readonly counts: HTMLElement[] = [];
  private readonly cells: HTMLElement[] = [];
  private readonly durTracks: HTMLElement[] = []; // 耐久条底槽
  private readonly durFills: HTMLElement[] = []; // 耐久条填充
  private readonly itemNameEl: HTMLElement | null;
  private inventory: Inventory | null = null;
  private selectedItemId: number | null = null;
  private selected = 0;
  readonly size: number;

  constructor(el: HTMLElement, size = 9, itemNameEl: HTMLElement | null = null) {
    this.size = size;
    this.itemNameEl = itemNameEl;
    el.innerHTML = '';
    for (let i = 0; i < size; i++) {
      const slot = document.createElement('div');
      slot.className = 'hotbar-slot';
      slot.style.position = 'relative'; // 给耐久条做定位上下文
      const icon = document.createElement('div');
      icon.className = 'hotbar-icon';
      const count = document.createElement('div');
      count.className = 'hotbar-count';
      // 耐久条（仅工具且未满时显示）：底部一条，绿→红随剩余比例
      const durTrack = document.createElement('div');
      durTrack.style.cssText =
        'position:absolute;left:12%;right:12%;bottom:9%;height:3px;background:rgba(0,0,0,.55);border-radius:1px;display:none;overflow:hidden;';
      const durFill = document.createElement('div');
      durFill.style.cssText = 'height:100%;width:100%;';
      durTrack.appendChild(durFill);
      slot.append(icon, count, durTrack);
      // 触屏直接点快捷栏选格；pointerdown 可在多指操作中与移动/转向并行。
      slot.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse') return;
        e.preventDefault();
        e.stopPropagation();
        this.setSelected(i);
      });
      el.appendChild(slot);
      this.cells.push(slot);
      this.icons.push(icon);
      this.counts.push(count);
      this.durTracks.push(durTrack);
      this.durFills.push(durFill);
    }
    this.setSelected(0);
  }

  // 按背包内容刷新图标与数量
  render(inv: Inventory): void {
    this.inventory = inv;
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
      // 耐久条：所有可磨损物品（工具、弓、打火石）且已磨损才显示
      const maxDur = s && s.count > 0 ? itemMaxDurability(s.id) : null;
      if (s && maxDur && (s.dur ?? maxDur) < maxDur) {
        const ratio = Math.max(0, (s.dur ?? maxDur) / maxDur);
        this.durTracks[i].style.display = 'block';
        this.durFills[i].style.width = `${ratio * 100}%`;
        this.durFills[i].style.background = `hsl(${Math.round(ratio * 120)},85%,45%)`; // 120=绿 → 0=红
      } else {
        this.durTracks[i].style.display = 'none';
      }
    }
    const nextId = inv[this.selected]?.id ?? null;
    if (nextId !== this.selectedItemId) {
      this.selectedItemId = nextId;
      this.showSelectedItemName();
    }
  }

  setSelected(i: number): void {
    const next = ((i % this.size) + this.size) % this.size;
    const changed = next !== this.selected;
    const previousItemId = this.selectedItemId;
    this.selected = next;
    this.cells.forEach((s, idx) => s.classList.toggle('selected', idx === this.selected));
    this.selectedItemId = this.inventory?.[this.selected]?.id ?? null;
    if (changed || this.selectedItemId !== previousItemId) this.showSelectedItemName();
  }

  scroll(dir: number): void {
    this.setSelected(this.selected + dir);
  }

  get index(): number {
    return this.selected;
  }

  /** 原版快捷栏字幕：切换到有物品的格子时，在快捷栏上方短暂显示名称。 */
  private showSelectedItemName(): void {
    if (!this.itemNameEl) return;
    const stack = this.inventory?.[this.selected] ?? null;
    this.itemNameEl.classList.remove('show');
    if (!stack || stack.count <= 0) {
      this.itemNameEl.textContent = '';
      return;
    }
    this.itemNameEl.textContent = itemLabel(stack.id);
    // 强制提交一次无动画状态，使连续滚轮/数字键切换也能重新播放淡出。
    void this.itemNameEl.offsetWidth;
    this.itemNameEl.classList.add('show');
  }
}
