// MC 同款背包/合成界面：主背包 27 + 快捷栏 9 + N×N 合成网格 + 输出槽。
// 交互：左键拿/放整组、右键放1个/拿一半、Shift 快速转移；光标(手持物品)跟随鼠标。
// 逻辑全在 core/inventory/slots + core/crafting/gridCraft 纯函数里，这里只渲染 + 转发事件。
import { addItem, type Inventory, type ItemStack } from '../core/inventory/inventory';
import { leftClick, rightClick, quickMove } from '../core/inventory/slots';
import { gridResult, consumeGrid } from '../core/crafting/gridCraft';
import { itemMaxStack } from '../core/items/items';
import { iconUrl, itemLabel } from './itemIcons';

const maxOf = (id: number): number => itemMaxStack(id);
const HOTBAR = 9;
const MAIN = 27;

interface Cell {
  el: HTMLElement;
  icon: HTMLElement;
  cnt: HTMLElement;
}
type Region = 'main' | 'hotbar' | 'craft' | 'output';

export class InventoryUI {
  private readonly root: HTMLElement;
  private inv: Inventory | null = null;
  private gridN = 2;
  private craft: (ItemStack | null)[][] = [];
  private cursor: ItemStack | null = null;
  private open = false;

  private readonly cursorEl: HTMLElement;
  private readonly cursorIcon: HTMLElement;
  private readonly cursorCnt: HTMLElement;
  private readonly titleEl: HTMLElement;
  private readonly cgridEl: HTMLElement;
  private readonly outCell: Cell;
  private readonly mainCells: Cell[] = [];
  private readonly hotbarCells: Cell[] = [];
  private craftCells: Cell[] = [];

  onChange: (() => void) | null = null; // 背包变动 → Game 刷新快捷栏

  constructor(root: HTMLElement) {
    this.root = root;
    root.classList.add('hidden');
    root.innerHTML = `
      <div class="inv-panel">
        <div class="inv-title">合成</div>
        <div class="inv-top">
          <div class="inv-cgrid"></div>
          <div class="inv-arrow">▶</div>
          <div class="inv-out-wrap"></div>
        </div>
        <div class="inv-main"></div>
        <div class="inv-hotbar"></div>
        <div class="inv-hint">E / Esc 关闭 · 左键拿放 · 右键放一个/拿一半 · Shift 快速转移</div>
      </div>`;
    this.titleEl = root.querySelector('.inv-title') as HTMLElement;
    this.cgridEl = root.querySelector('.inv-cgrid') as HTMLElement;
    const mainEl = root.querySelector('.inv-main') as HTMLElement;
    const hotEl = root.querySelector('.inv-hotbar') as HTMLElement;
    for (let i = 0; i < MAIN; i++) this.mainCells.push(this.makeSlot(mainEl, 'main', i));
    for (let i = 0; i < HOTBAR; i++) this.hotbarCells.push(this.makeSlot(hotEl, 'hotbar', i));
    this.outCell = this.makeSlot(root.querySelector('.inv-out-wrap') as HTMLElement, 'output', 0);
    this.outCell.el.classList.add('inv-out');

    this.cursorEl = document.createElement('div');
    this.cursorEl.className = 'inv-cursor';
    this.cursorIcon = document.createElement('div');
    this.cursorIcon.className = 'slot-icon';
    this.cursorCnt = document.createElement('div');
    this.cursorCnt.className = 'slot-count';
    this.cursorEl.append(this.cursorIcon, this.cursorCnt);
    this.cursorEl.style.display = 'none';
    document.body.appendChild(this.cursorEl);
    document.addEventListener('mousemove', (e) => {
      if (!this.open) return;
      this.cursorEl.style.left = `${e.clientX}px`;
      this.cursorEl.style.top = `${e.clientY}px`;
    });
  }

  private makeSlot(parent: HTMLElement, region: Region, i: number): Cell {
    const el = document.createElement('div');
    el.className = 'inv-slot';
    const icon = document.createElement('div');
    icon.className = 'slot-icon';
    const cnt = document.createElement('div');
    cnt.className = 'slot-count';
    el.append(icon, cnt);
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.clickSlot(region, i, e);
    });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    parent.appendChild(el);
    return { el, icon, cnt };
  }

  isOpen(): boolean {
    return this.open;
  }

  // gridN=2 个人背包合成 / 3 工作台
  show(inv: Inventory, gridN: number): void {
    this.inv = inv;
    this.gridN = gridN;
    this.craft = Array.from({ length: gridN }, () => Array<ItemStack | null>(gridN).fill(null));
    this.buildCraftGrid(gridN);
    this.titleEl.textContent = gridN >= 3 ? '工作台' : '背包';
    this.open = true;
    this.root.classList.remove('hidden');
    this.render();
  }

  // 关闭：合成格 + 光标里的残留物品退回背包，避免凭空消失
  hide(): void {
    if (this.inv) {
      for (const row of this.craft) {
        for (let c = 0; c < row.length; c++) {
          const s = row[c];
          if (s) {
            addItem(this.inv, s.id, s.count, maxOf(s.id));
            row[c] = null;
          }
        }
      }
      if (this.cursor) {
        addItem(this.inv, this.cursor.id, this.cursor.count, maxOf(this.cursor.id));
        this.cursor = null;
      }
    }
    this.open = false;
    this.root.classList.add('hidden');
    this.cursorEl.style.display = 'none';
    this.onChange?.();
  }

  private buildCraftGrid(n: number): void {
    this.cgridEl.innerHTML = '';
    this.cgridEl.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    this.craftCells = [];
    for (let i = 0; i < n * n; i++) this.craftCells.push(this.makeSlot(this.cgridEl, 'craft', i));
  }

  private clickSlot(region: Region, i: number, e: MouseEvent): void {
    if (!this.inv) return;
    if (region === 'output') {
      this.takeOutput();
    } else if (e.shiftKey) {
      this.quickMoveFrom(region, i);
    } else {
      const right = e.button === 2;
      if (region === 'craft') {
        const n = this.gridN;
        const row = this.craft[Math.floor(i / n)];
        const c = i % n;
        this.cursor = right ? rightClick(row, c, this.cursor, maxOf) : leftClick(row, c, this.cursor, maxOf);
      } else {
        const idx = region === 'main' ? HOTBAR + i : i;
        this.cursor = right
          ? rightClick(this.inv, idx, this.cursor, maxOf)
          : leftClick(this.inv, idx, this.cursor, maxOf);
      }
    }
    this.render();
    this.onChange?.();
  }

  private quickMoveFrom(region: Region, i: number): void {
    if (!this.inv) return;
    if (region === 'craft') {
      const n = this.gridN;
      quickMove(this.craft[Math.floor(i / n)], i % n, this.inv, maxOf);
    } else if (region === 'main') {
      quickMove(this.inv, HOTBAR + i, this.inv, maxOf, 0, HOTBAR); // 背包 → 快捷栏
    } else {
      quickMove(this.inv, i, this.inv, maxOf, HOTBAR, HOTBAR + MAIN); // 快捷栏 → 背包
    }
  }

  // 取出合成成果到光标(同类堆叠/占空)，并消耗输入格各 1。
  private takeOutput(): void {
    const res = gridResult(this.craft);
    if (!res) return;
    if (!this.cursor) this.cursor = { id: res.id, count: res.count };
    else if (this.cursor.id === res.id && this.cursor.count + res.count <= maxOf(res.id))
      this.cursor.count += res.count;
    else return; // 光标拿着别的/会超栈 → 先放下
    consumeGrid(this.craft);
  }

  render(): void {
    if (!this.inv) return;
    for (let i = 0; i < MAIN; i++) this.paint(this.mainCells[i], this.inv[HOTBAR + i]);
    for (let i = 0; i < HOTBAR; i++) this.paint(this.hotbarCells[i], this.inv[i]);
    const n = this.gridN;
    for (let i = 0; i < this.craftCells.length; i++) {
      this.paint(this.craftCells[i], this.craft[Math.floor(i / n)][i % n]);
    }
    this.paint(this.outCell, gridResult(this.craft));
    if (this.cursor) {
      this.cursorEl.style.display = 'block';
      this.fill(this.cursorIcon, this.cursorCnt, this.cursor);
    } else {
      this.cursorEl.style.display = 'none';
    }
  }

  private paint(cell: Cell, stack: ItemStack | null): void {
    this.fill(cell.icon, cell.cnt, stack);
  }

  private fill(icon: HTMLElement, cnt: HTMLElement, stack: ItemStack | null): void {
    if (stack && stack.count > 0) {
      const url = iconUrl(stack.id);
      if (url) {
        icon.style.backgroundImage = `url(${url})`;
        icon.textContent = '';
        icon.classList.remove('txt');
      } else {
        icon.style.backgroundImage = 'none';
        icon.textContent = itemLabel(stack.id);
        icon.classList.add('txt');
      }
      cnt.textContent = stack.count > 1 ? String(stack.count) : '';
    } else {
      icon.style.backgroundImage = 'none';
      icon.textContent = '';
      icon.classList.remove('txt');
      cnt.textContent = '';
    }
  }
}
