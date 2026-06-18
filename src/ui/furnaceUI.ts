// 熔炉界面：背包(27+9) + 原料/燃料/产物 3 槽 + 火焰(燃料剩余)&箭头(冶炼进度)。
// 直接读写传入的 FurnaceState(三槽当 1 格 mini-inventory 处理，复用 slots 纯函数)。
import { addItem, type Inventory, type ItemStack } from '../core/inventory/inventory';
import { leftClick, rightClick } from '../core/inventory/slots';
import { itemMaxStack } from '../core/items/items';
import { iconUrl, itemLabel } from './itemIcons';
import { type FurnaceState, isFuel, COOK_TICKS } from '../core/crafting/smelting';

const maxOf = (id: number): number => itemMaxStack(id);
const HOTBAR = 9;
const MAIN = 27;

interface Cell {
  el: HTMLElement;
  icon: HTMLElement;
  cnt: HTMLElement;
}
type Slot = 'input' | 'fuel' | 'output';

export class FurnaceUI {
  private readonly root: HTMLElement;
  private inv: Inventory | null = null;
  private furnace: FurnaceState | null = null;
  private cursor: ItemStack | null = null;
  private open = false;

  private readonly cursorEl: HTMLElement;
  private readonly cursorIcon: HTMLElement;
  private readonly cursorCnt: HTMLElement;
  private readonly inputCell: Cell;
  private readonly fuelCell: Cell;
  private readonly outCell: Cell;
  private readonly flameEl: HTMLElement;
  private readonly arrowFillEl: HTMLElement;
  private readonly mainCells: Cell[] = [];
  private readonly hotbarCells: Cell[] = [];

  onChange: (() => void) | null = null; // 背包变动 → Game 刷新快捷栏

  constructor(root: HTMLElement) {
    this.root = root;
    root.classList.add('hidden');
    root.innerHTML = `
      <div class="inv-panel">
        <div class="inv-title">熔炉</div>
        <div class="fur-top">
          <div class="fur-col">
            <div class="fur-slot fur-input"></div>
            <div class="fur-flame"><div class="fur-flame-fill"></div></div>
            <div class="fur-slot fur-fuel"></div>
          </div>
          <div class="fur-arrow"><div class="fur-arrow-fill"></div></div>
          <div class="fur-slot fur-out"></div>
        </div>
        <div class="inv-main"></div>
        <div class="inv-hotbar"></div>
        <div class="inv-hint">E / Esc 关闭 · 上槽放矿、下槽放燃料(煤/木) · 取走成品</div>
      </div>`;
    const mk = (sel: string): Cell => this.bindSlot(root.querySelector(sel) as HTMLElement);
    this.inputCell = mk('.fur-input');
    this.fuelCell = mk('.fur-fuel');
    this.outCell = mk('.fur-out');
    this.inputCell.el.addEventListener('mousedown', (e) => this.clickFur('input', e));
    this.fuelCell.el.addEventListener('mousedown', (e) => this.clickFur('fuel', e));
    this.outCell.el.addEventListener('mousedown', (e) => this.clickFur('output', e));
    this.flameEl = root.querySelector('.fur-flame-fill') as HTMLElement;
    this.arrowFillEl = root.querySelector('.fur-arrow-fill') as HTMLElement;

    const mainEl = root.querySelector('.inv-main') as HTMLElement;
    const hotEl = root.querySelector('.inv-hotbar') as HTMLElement;
    for (let i = 0; i < MAIN; i++) this.mainCells.push(this.makeInvSlot(mainEl, 'main', i));
    for (let i = 0; i < HOTBAR; i++) this.hotbarCells.push(this.makeInvSlot(hotEl, 'hotbar', i));

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

  private bindSlot(el: HTMLElement): Cell {
    el.classList.add('inv-slot');
    const icon = document.createElement('div');
    icon.className = 'slot-icon';
    const cnt = document.createElement('div');
    cnt.className = 'slot-count';
    el.append(icon, cnt);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    return { el, icon, cnt };
  }

  private makeInvSlot(parent: HTMLElement, region: 'main' | 'hotbar', i: number): Cell {
    const el = document.createElement('div');
    el.className = 'inv-slot';
    const icon = document.createElement('div');
    icon.className = 'slot-icon';
    const cnt = document.createElement('div');
    cnt.className = 'slot-count';
    el.append(icon, cnt);
    el.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.clickInv(region, i, e);
    });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    parent.appendChild(el);
    return { el, icon, cnt };
  }

  isOpen(): boolean {
    return this.open;
  }

  show(inv: Inventory, furnace: FurnaceState): void {
    this.inv = inv;
    this.furnace = furnace;
    this.open = true;
    this.root.classList.remove('hidden');
    this.render();
  }

  // 关闭：光标残留退回背包
  hide(): void {
    if (this.inv && this.cursor) {
      addItem(this.inv, this.cursor.id, this.cursor.count, maxOf(this.cursor.id));
      this.cursor = null;
    }
    this.open = false;
    this.root.classList.add('hidden');
    this.cursorEl.style.display = 'none';
    this.onChange?.();
  }

  private clickInv(region: 'main' | 'hotbar', i: number, e: MouseEvent): void {
    if (!this.inv) return;
    const idx = region === 'main' ? HOTBAR + i : i;
    if (e.shiftKey) {
      // Shift：快速送进对应熔炉槽(燃料→燃料槽，可炼→原料槽)，否则背包内挪
      this.shiftToFurnace(idx);
    } else {
      this.cursor =
        e.button === 2
          ? rightClick(this.inv, idx, this.cursor, maxOf)
          : leftClick(this.inv, idx, this.cursor, maxOf);
    }
    this.render();
    this.onChange?.();
  }

  private shiftToFurnace(idx: number): void {
    const f = this.furnace;
    const inv = this.inv;
    if (!f || !inv) return;
    const st = inv[idx];
    if (!st) return;
    const toFuel = isFuel(st.id);
    if (toFuel && (f.fuel === 0 || f.fuel === st.id)) {
      const space = maxOf(st.id) - f.fuelN;
      const mv = Math.min(space, st.count);
      f.fuel = st.id;
      f.fuelN += mv;
      st.count -= mv;
      if (st.count <= 0) inv[idx] = null;
    } else if (!toFuel && (f.input === 0 || f.input === st.id)) {
      const space = maxOf(st.id) - f.inputN;
      const mv = Math.min(space, st.count);
      f.input = st.id;
      f.inputN += mv;
      st.count -= mv;
      if (st.count <= 0) inv[idx] = null;
    }
  }

  // 熔炉三槽点击：input/fuel 当 1 格 mini-inv 用光标拿放；output 只能取。
  private clickFur(slot: Slot, e: MouseEvent): void {
    e.preventDefault();
    const f = this.furnace;
    if (!f) return;
    if (slot === 'output') {
      this.takeOutput();
    } else {
      const id = slot === 'input' ? f.input : f.fuel;
      const n = slot === 'input' ? f.inputN : f.fuelN;
      const arr: (ItemStack | null)[] = [n > 0 ? { id, count: n } : null];
      // 燃料槽不收非燃料(空槽时)
      if (slot === 'fuel' && arr[0] === null && this.cursor && !isFuel(this.cursor.id)) return;
      this.cursor =
        e.button === 2 ? rightClick(arr, 0, this.cursor, maxOf) : leftClick(arr, 0, this.cursor, maxOf);
      const r = arr[0];
      if (slot === 'input') {
        f.input = r?.id ?? 0;
        f.inputN = r?.count ?? 0;
      } else {
        f.fuel = r?.id ?? 0;
        f.fuelN = r?.count ?? 0;
      }
    }
    this.render();
    this.onChange?.();
  }

  private takeOutput(): void {
    const f = this.furnace;
    if (!f || f.outputN <= 0) return;
    if (!this.cursor) {
      this.cursor = { id: f.output, count: f.outputN };
      f.output = 0;
      f.outputN = 0;
    } else if (this.cursor.id === f.output && this.cursor.count + f.outputN <= maxOf(f.output)) {
      this.cursor.count += f.outputN;
      f.output = 0;
      f.outputN = 0;
    }
  }

  render(): void {
    if (!this.inv || !this.furnace) return;
    const f = this.furnace;
    for (let i = 0; i < MAIN; i++) this.fill(this.mainCells[i], this.inv[HOTBAR + i]);
    for (let i = 0; i < HOTBAR; i++) this.fill(this.hotbarCells[i], this.inv[i]);
    this.fill(this.inputCell, f.inputN > 0 ? { id: f.input, count: f.inputN } : null);
    this.fill(this.fuelCell, f.fuelN > 0 ? { id: f.fuel, count: f.fuelN } : null);
    this.fill(this.outCell, f.outputN > 0 ? { id: f.output, count: f.outputN } : null);
    // 火焰：剩余燃料比例(从下往上)；箭头：冶炼进度(从左往右)
    this.flameEl.style.height = `${f.burnMax > 0 ? Math.round((f.burn / f.burnMax) * 100) : 0}%`;
    this.arrowFillEl.style.width = `${Math.round((f.cook / COOK_TICKS) * 100)}%`;
    if (this.cursor) {
      this.cursorEl.style.display = 'block';
      this.fillRaw(this.cursorIcon, this.cursorCnt, this.cursor);
    } else {
      this.cursorEl.style.display = 'none';
    }
  }

  private fill(cell: Cell, stack: ItemStack | null): void {
    this.fillRaw(cell.icon, cell.cnt, stack);
  }

  private fillRaw(icon: HTMLElement, cnt: HTMLElement, stack: ItemStack | null): void {
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
