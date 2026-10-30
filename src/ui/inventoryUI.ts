// MC 同款背包/合成界面：主背包 27 + 快捷栏 9 + N×N 合成网格 + 输出槽。
// 交互：左键拿/放整组、右键放1个/拿一半、Shift 快速转移；光标(手持物品)跟随鼠标。
// 逻辑全在 core/inventory/slots + core/crafting/gridCraft 纯函数里，这里只渲染 + 转发事件。
import { addStack, type Inventory, type ItemStack } from '../core/inventory/inventory';
import {
  leftClick,
  rightClick,
  quickMove,
  dragSplitEven,
  dragOnePer,
  type SlotRef,
} from '../core/inventory/slots';
import { gridResult, consumeGrid } from '../core/crafting/gridCraft';
import {
  emptyArmor,
  ARMOR_SLOTS,
  acceptsArmor,
  armorOf,
  type ArmorInventory,
} from '../core/equipment/armor';
import { itemMaxStack, itemMaxDurability } from '../core/items/items';
import {
  CREATIVE_CATEGORIES,
  CREATIVE_ITEM_IDS,
  creativeItemsIn,
  creativeStack,
  type CreativeCategory,
} from '../core/inventory/creative';
import { iconUrl, itemLabel } from './itemIcons';
import { asset } from '../asset';
import { PlayerPreview } from './PlayerPreview';
import './javaInventory.css';

const maxOf = (id: number): number => itemMaxStack(id);
const HOTBAR = 9;
const MAIN = 27;
// 手机上没有右键：按住不动一小会儿，等同于桌面的右键。
const TOUCH_HOLD_MS = 420;
const TOUCH_MOVE_TOLERANCE = 12;

interface Cell {
  el: HTMLElement;
  icon: HTMLElement;
  cnt: HTMLElement;
  dur?: HTMLElement;
}
type Region = 'armor' | 'main' | 'hotbar' | 'craft' | 'output' | 'catalog' | 'trash';

interface DragState {
  region: Region;
  i: number;
  right: boolean; // 右键拖（每格放1）还是左键拖（平分）
  started: boolean; // 是否已离开起点格、正式成为拖拽手势
  mode: 'distribute' | 'move'; // 按下时持物=涂抹分发；空手=拿起整组拖动
  swept: SlotRef[]; // 划过的格子（distribute）
  sweptKeys: Set<string>;
  sweptCells: Cell[]; // 高亮过的格子，松手时清除
  pointerId: number;
  touch: boolean;
  startX: number;
  startY: number;
  holdTimer: number | null;
  longPressed: boolean;
}

export class InventoryUI {
  private readonly root: HTMLElement;
  private inv: Inventory | null = null;
  private gridN = 2;
  private armor: ArmorInventory = emptyArmor();
  private readonly armorCells: Cell[] = [];
  private craft: (ItemStack | null)[][] = [];
  private cursor: ItemStack | null = null;
  private open = false;
  private mode: 'survival' | 'creative' = 'survival';
  private creativeCategory: CreativeCategory = 'building';
  private creativeIds: readonly number[] = [];
  private viewportHandler: (() => void) | null = null;
  private trackedViewport: VisualViewport | null = null;
  private playerPreview: PlayerPreview | null = null;

  private readonly cursorEl: HTMLElement;
  private readonly cursorIcon: HTMLElement;
  private readonly cursorCnt: HTMLElement;
  private readonly titleEl: HTMLElement;
  private readonly standardEl: HTMLElement;
  private readonly creativeEl: HTMLElement;
  private readonly creativeGridEl: HTMLElement;
  private readonly creativeSearchEl: HTMLInputElement;
  private readonly hintEl: HTMLElement;
  private readonly cgridEl: HTMLElement;
  private readonly outCell: Cell;
  private readonly trashCell: Cell;
  private readonly mainCells: Cell[] = [];
  private readonly hotbarCells: Cell[] = [];
  private craftCells: Cell[] = [];
  private creativeCells: Cell[] = [];
  private readonly creativeTabButtons: HTMLButtonElement[] = [];

  // 拖拽手势状态：按下后挂起，划过其它格才"开始"。distribute=持物涂抹分发；move=空手按住拖单组。
  private drag: DragState | null = null;

  onChange: (() => void) | null = null; // 背包变动 → Game 刷新快捷栏
  onClose: (() => void) | null = null;
  onSelectHotbar: ((index: number) => void) | null = null;

  constructor(root: HTMLElement) {
    this.root = root;
    root.classList.add('hidden', 'java-container');
    root.dataset.container = 'inventory';
    root.style.setProperty(
      '--inventory-background',
      `url(${asset('textures/ui/java/container/inventory.png')})`,
    );
    root.style.setProperty(
      '--crafting-background',
      `url(${asset('textures/ui/java/container/crafting_table.png')})`,
    );
    root.style.setProperty(
      '--creative-background',
      `url(${asset('textures/ui/java/container/creative_inventory/tab_item_search.png')})`,
    );
    for (const name of ['helmet', 'chestplate', 'leggings', 'boots', 'shield'])
      root.style.setProperty(
        `--empty-${name}`,
        `url(${asset(`textures/ui/java/container/slot/${name}.png`)})`,
      );
    root.innerHTML = `
      <div class="inv-panel" role="dialog" aria-label="背包" aria-describedby="inventory-controls">
        <div class="inv-title-row">
          <div class="inv-title">合成</div>
          <button class="inv-close" type="button" aria-label="关闭背包" title="关闭（E / Esc）">×</button>
        </div>
        <div class="inv-standard">
          <div class="java-player-area">
            <div class="java-equipment" aria-label="盔甲装备栏"></div>
            <div class="java-player-preview" role="img" aria-label="Steve 角色预览"></div>
            <div class="java-equipment-slot java-offhand" aria-disabled="true" title="副手栏尚未实现"></div>
          </div>
          <div class="inv-top">
            <div class="inv-cgrid"></div>
            <div class="inv-out-wrap"></div>
          </div>
          <div class="java-inventory-label">物品栏</div>
          <div class="inv-main"></div>
        </div>
        <div class="creative-view hidden">
          <div class="creative-tabs"></div>
          <input class="creative-search" type="search" maxlength="24" autocomplete="off" placeholder="搜索物品" aria-label="搜索创造物品" />
          <div class="creative-grid"></div>
          <div class="creative-trash-row">
            <span>把不要的物品拿到这里删除</span>
            <div class="creative-trash-wrap"></div>
          </div>
        </div>
        <div class="inv-hotbar"></div>
        <div class="inv-hint" id="inventory-controls">轻点拿放 · 长按放一个/拿一半 · Shift 快速转移 · E / Esc 关闭</div>
      </div>`;
    this.titleEl = root.querySelector('.inv-title') as HTMLElement;
    this.standardEl = root.querySelector('.inv-standard') as HTMLElement;
    this.creativeEl = root.querySelector('.creative-view') as HTMLElement;
    this.creativeGridEl = root.querySelector('.creative-grid') as HTMLElement;
    this.creativeSearchEl = root.querySelector('.creative-search') as HTMLInputElement;
    this.hintEl = root.querySelector('.inv-hint') as HTMLElement;
    (root.querySelector('.inv-close') as HTMLButtonElement).addEventListener('click', () =>
      this.onClose?.(),
    );
    this.cgridEl = root.querySelector('.inv-cgrid') as HTMLElement;
    const mainEl = root.querySelector('.inv-main') as HTMLElement;
    const hotEl = root.querySelector('.inv-hotbar') as HTMLElement;
    const equipmentEl = root.querySelector('.java-equipment') as HTMLElement;
    for (const [i, name] of ['helmet', 'chestplate', 'leggings', 'boots'].entries()) {
      const cell = this.makeSlot(equipmentEl, 'armor', i);
      cell.el.classList.add('java-equipment-slot');
      cell.el.dataset.equipment = name;
      cell.el.setAttribute('aria-label', ['头盔', '胸甲', '护腿', '靴子'][i]);
      this.armorCells.push(cell);
    }
    for (let i = 0; i < MAIN; i++) this.mainCells.push(this.makeSlot(mainEl, 'main', i));
    for (let i = 0; i < HOTBAR; i++) this.hotbarCells.push(this.makeSlot(hotEl, 'hotbar', i));
    this.outCell = this.makeSlot(root.querySelector('.inv-out-wrap') as HTMLElement, 'output', 0);
    this.outCell.el.classList.add('inv-out');
    this.trashCell = this.makeSlot(
      root.querySelector('.creative-trash-wrap') as HTMLElement,
      'trash',
      0,
    );
    this.trashCell.el.classList.add('creative-trash');
    this.trashCell.icon.textContent = '×';
    this.trashCell.icon.classList.add('txt');
    this.trashCell.el.title = '删除物品';

    const tabsEl = root.querySelector('.creative-tabs') as HTMLElement;
    for (const category of CREATIVE_CATEGORIES) {
      const button = document.createElement('button');
      button.className = 'creative-tab';
      button.type = 'button';
      button.title = category.label;
      button.setAttribute('aria-label', category.label);
      const icon = document.createElement('span');
      icon.className = 'slot-icon';
      const categoryIcon = iconUrl(category.items[0]);
      if (categoryIcon) icon.style.backgroundImage = `url(${categoryIcon})`;
      button.appendChild(icon);
      button.dataset.category = category.id;
      button.addEventListener('click', () => {
        this.creativeCategory = category.id;
        this.creativeSearchEl.value = '';
        this.rebuildCreativeCatalog();
      });
      tabsEl.appendChild(button);
      this.creativeTabButtons.push(button);
    }
    this.creativeSearchEl.addEventListener('input', () => this.rebuildCreativeCatalog());

    this.cursorEl = document.createElement('div');
    this.cursorEl.className = 'inv-cursor java-item-cursor';
    this.cursorIcon = document.createElement('div');
    this.cursorIcon.className = 'slot-icon';
    this.cursorCnt = document.createElement('div');
    this.cursorCnt.className = 'slot-count';
    this.cursorEl.append(this.cursorIcon, this.cursorCnt);
    this.cursorEl.style.display = 'none';
    this.cursorEl.style.pointerEvents = 'none'; // 别挡住 elementFromPoint 命中下方格子
    document.body.appendChild(this.cursorEl);
    document.addEventListener('pointermove', (e) => {
      if (!this.open) return;
      this.cursorEl.style.left = `${e.clientX}px`;
      this.cursorEl.style.top = `${e.clientY}px`;
      if (this.drag) this.onDragMove(e);
    });
    document.addEventListener('pointerup', (e) => {
      if (this.open && this.drag) this.endDrag(e);
    });
    document.addEventListener('pointercancel', (e) => {
      if (this.open && this.drag?.pointerId === e.pointerId) this.cancelDrag();
    });
  }

  private trackViewport(): void {
    if (this.viewportHandler) return;
    this.viewportHandler = () => this.positionPanel();
    this.trackedViewport = window.visualViewport ?? null;
    window.addEventListener('resize', this.viewportHandler);
    this.trackedViewport?.addEventListener('resize', this.viewportHandler);
    this.trackedViewport?.addEventListener('scroll', this.viewportHandler);
  }

  private untrackViewport(): void {
    if (!this.viewportHandler) return;
    window.removeEventListener('resize', this.viewportHandler);
    this.trackedViewport?.removeEventListener('resize', this.viewportHandler);
    this.trackedViewport?.removeEventListener('scroll', this.viewportHandler);
    this.viewportHandler = null;
    this.trackedViewport = null;
  }

  private positionPanel(): void {
    const scale = Math.max(
      1,
      Math.floor(Number(getComputedStyle(this.root).getPropertyValue('--gui-scale')) || 2),
    );
    const width = this.mode === 'creative' ? 195 : 176;
    const height = this.mode === 'creative' ? 136 : 166;
    const viewport = window.visualViewport;
    const availableWidth = viewport?.width ?? window.innerWidth;
    const availableHeight = viewport?.height ?? window.innerHeight;
    const left = Math.round(viewport?.offsetLeft ?? 0);
    const top = Math.round(viewport?.offsetTop ?? 0);
    // Java rounds in logical pixels before scaling; ordinary CSS centering can land on half pixels.
    this.root.style.setProperty(
      '--container-left',
      `${left + Math.max(0, Math.floor((availableWidth / scale - width) / 2)) * scale}px`,
    );
    this.root.style.setProperty(
      '--container-top',
      `${top + Math.max(0, Math.floor((availableHeight / scale - height) / 2)) * scale}px`,
    );
  }

  private makeSlot(parent: HTMLElement, region: Region, i: number): Cell {
    const el = document.createElement('div');
    el.className = 'inv-slot';
    el.dataset.region = region;
    el.dataset.idx = String(i);
    // 防止触屏拖动物品时被浏览器当成滚动/长按菜单。
    el.style.touchAction = 'none';
    const icon = document.createElement('div');
    icon.className = 'slot-icon';
    const cnt = document.createElement('div');
    cnt.className = 'slot-count';
    const dur = document.createElement('div');
    dur.className = 'item-durability';
    dur.hidden = true;
    el.append(icon, cnt, dur);
    el.addEventListener('pointerdown', (e) => {
      if (!e.isPrimary || (e.pointerType === 'mouse' && e.button !== 0 && e.button !== 2)) return;
      e.preventDefault();
      this.beginDrag(region, i, e);
    });
    el.addEventListener('contextmenu', (e) => e.preventDefault());
    parent.appendChild(el);
    return { el, icon, cnt, dur };
  }

  isOpen(): boolean {
    return this.open;
  }

  /** For application teardown; normal close keeps the single preview context reusable. */
  disposePlayerPreview(): void {
    this.playerPreview?.dispose();
    this.playerPreview = null;
  }

  // gridN=2 个人背包合成 / 3 工作台
  setArmor(armor: ArmorInventory): void {
    this.armor = armor;
    this.playerPreview?.setArmor(armor);
    if (this.open) this.render();
  }

  show(inv: Inventory, gridN: number, armor?: ArmorInventory): void {
    if (armor) this.armor = armor;
    this.inv = inv;
    this.mode = 'survival';
    this.gridN = gridN;
    this.craft = Array.from({ length: gridN }, () => Array<ItemStack | null>(gridN).fill(null));
    this.buildCraftGrid(gridN);
    this.root.dataset.container = gridN >= 3 ? 'crafting' : 'inventory';
    this.root
      .querySelector('.inv-panel')
      ?.setAttribute('aria-label', gridN >= 3 ? '工作台' : '背包');
    this.titleEl.textContent = '合成';
    this.standardEl.classList.remove('hidden');
    this.creativeEl.classList.add('hidden');
    this.hintEl.textContent = '轻点拿放 · 长按放一个/拿一半 · Shift 快速转移 · E / Esc 关闭';
    this.positionPanel();
    this.trackViewport();
    this.open = true;
    this.root.classList.remove('hidden');
    if (gridN === 2 && !this.playerPreview) {
      const host = this.root.querySelector('.java-player-preview') as HTMLElement | null;
      if (host) this.playerPreview = new PlayerPreview(host);
    }
    this.playerPreview?.setVisible(gridN === 2);
    this.render();
  }

  /** 已实现物品的创造目录：分类/搜索、底部快捷栏和删除槽。 */
  showCreative(inv: Inventory): void {
    this.playerPreview?.setVisible(false);
    this.inv = inv;
    this.mode = 'creative';
    this.gridN = 0;
    this.craft = [];
    this.craftCells = [];
    this.cgridEl.innerHTML = '';
    this.cursor = null;
    this.root.dataset.container = 'creative';
    this.root.querySelector('.inv-panel')?.setAttribute('aria-label', '创造模式物品栏');
    this.titleEl.textContent = '创造模式物品栏';
    this.standardEl.classList.add('hidden');
    this.creativeEl.classList.remove('hidden');
    this.hintEl.textContent = '左键拿一组 · 右键拿一个 · Shift 放入快捷栏 · 中键可在世界中选方块';
    this.positionPanel();
    this.trackViewport();
    this.open = true;
    this.root.classList.remove('hidden');
    this.rebuildCreativeCatalog();
    this.render();
  }

  // 关闭：合成格 + 光标里的残留物品退回背包。背包放不下的
  // 完整返回给 Game 变成掉落物，不在 UI 里静默吞掉；耐久也必须保留。
  hide(): ItemStack[] {
    this.playerPreview?.setVisible(false);
    this.untrackViewport();
    this.cancelDrag();
    const overflow: ItemStack[] = [];
    for (const row of this.craft) {
      for (let c = 0; c < row.length; c++) {
        const s = row[c];
        if (s) {
          this.returnOrOverflow(s, overflow);
          row[c] = null;
        }
      }
    }
    if (this.cursor) {
      // 创造目录复制出来的光标物品关闭时直接丢弃；原版不会因为按 E 关闭就偷偷塞进隐藏的主背包。
      if (this.mode !== 'creative') this.returnOrOverflow(this.cursor, overflow);
      this.cursor = null;
    }
    this.open = false;
    this.root.classList.add('hidden');
    this.cursorEl.style.display = 'none';
    this.onChange?.();
    return overflow;
  }

  private returnOrOverflow(stack: ItemStack, overflow: ItemStack[]): void {
    const left = this.inv ? addStack(this.inv, stack, maxOf(stack.id)) : stack.count;
    if (left <= 0) return;
    overflow.push(
      stack.dur === undefined
        ? { id: stack.id, count: left }
        : { id: stack.id, count: left, dur: stack.dur },
    );
  }

  private buildCraftGrid(n: number): void {
    this.cgridEl.innerHTML = '';
    this.cgridEl.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    this.craftCells = [];
    for (let i = 0; i < n * n; i++) this.craftCells.push(this.makeSlot(this.cgridEl, 'craft', i));
  }

  // 鼠标按下：输出槽/Shift 即时处理；其余挂起为「待定拖拽」，松手或划格时再决定是点击还是手势。
  private beginDrag(region: Region, i: number, e: PointerEvent): void {
    if (!this.inv) return;
    this.cursorEl.style.left = `${e.clientX}px`;
    this.cursorEl.style.top = `${e.clientY}px`;
    if (region === 'catalog') {
      const id = this.creativeIds[i];
      const stack = creativeStack(id, e.button === 2);
      if (!stack) return;
      if (e.shiftKey) {
        const existing = this.inv.slice(0, HOTBAR).findIndex((entry) => entry?.id === id);
        const empty = this.inv.slice(0, HOTBAR).findIndex((entry) => entry === null);
        const target = existing >= 0 ? existing : empty >= 0 ? empty : 0;
        this.inv[target] = creativeStack(id);
        this.onSelectHotbar?.(target);
      } else {
        this.cursor = stack;
      }
      this.render();
      this.onChange?.();
      return;
    }
    if (region === 'trash') {
      if (e.shiftKey) this.inv.fill(null); // 原版：Shift 点击删除槽清空整个玩家物品栏。
      this.cursor = null;
      this.render();
      this.onChange?.();
      return;
    }
    if (region === 'output') {
      this.takeOutput();
      this.render();
      this.onChange?.();
      return;
    }
    if (e.shiftKey) {
      this.quickMoveFrom(region, i);
      this.render();
      this.onChange?.();
      return;
    }
    this.drag = {
      region,
      i,
      right: e.button === 2,
      started: false,
      mode: this.cursor ? 'distribute' : 'move',
      swept: [],
      sweptKeys: new Set(),
      sweptCells: [],
      pointerId: e.pointerId,
      touch: e.pointerType === 'touch',
      startX: e.clientX,
      startY: e.clientY,
      holdTimer: null,
      longPressed: false,
    };
    if (this.drag.touch) this.startTouchHold(this.drag);
  }

  // 拖拽移动：首次划到别的格 → 正式开始（distribute 收集划过的格；move 把起点整组拿到光标）。
  private onDragMove(e: PointerEvent): void {
    const d = this.drag;
    if (!d || !this.inv || d.pointerId !== e.pointerId) return;
    if (d.touch && !d.longPressed) {
      const moved = Math.hypot(e.clientX - d.startX, e.clientY - d.startY);
      if (moved > TOUCH_MOVE_TOLERANCE) this.clearTouchHold(d);
    }
    // 长按已作为一次右键处理，松手时不能再补一次普通左键。
    if (d.longPressed) return;
    const hit = this.slotAt(e);
    if (!d.started) {
      if (!hit || (hit.region === d.region && hit.i === d.i)) return; // 还没离开起点格
      d.started = true;
      if (d.mode === 'distribute') {
        this.addSwept(d, d.region, d.i); // 起点也算一格
        this.addSwept(d, hit.region, hit.i);
      } else {
        this.applyClick(d.region, d.i, false); // move：左键拿起起点整组到光标
        this.render();
      }
      return;
    }
    if (d.mode === 'distribute' && hit) this.addSwept(d, hit.region, hit.i);
  }

  // 松手提交：没划动=普通点击；distribute=平分/每格1；move=放到松手所在格(否则留光标)。
  private endDrag(e: PointerEvent): void {
    const d = this.drag;
    if (!d || d.pointerId !== e.pointerId) return;
    this.clearTouchHold(d);
    this.drag = null;
    for (const c of d?.sweptCells ?? []) c.el.classList.remove('inv-drag-hi');
    if (!this.inv) return;
    if (d.longPressed) return;
    if (!d.started) {
      this.applyClick(d.region, d.i, d.right); // 原地按放 = 普通左右键点击
    } else if (d.mode === 'distribute') {
      this.cursor = d.right
        ? dragOnePer(d.swept, this.cursor, maxOf)
        : dragSplitEven(d.swept, this.cursor, maxOf);
    } else {
      const hit = this.slotAt(e);
      if (hit?.region === 'trash') {
        this.cursor = null;
      } else if (
        hit &&
        (hit.region === 'main' ||
          hit.region === 'hotbar' ||
          hit.region === 'craft' ||
          hit.region === 'armor') &&
        !(hit.region === d.region && hit.i === d.i)
      ) {
        this.applyClick(hit.region, hit.i, false); // 放到松手所在格
      }
      // 松手在起点/界外 → 光标继续持有（等同点击拿起）
    }
    this.render();
    this.onChange?.();
  }

  private cancelDrag(): void {
    if (!this.drag) return;
    this.clearTouchHold(this.drag);
    for (const c of this.drag.sweptCells) c.el.classList.remove('inv-drag-hi');
    this.drag = null;
  }

  private startTouchHold(d: DragState): void {
    d.holdTimer = window.setTimeout(() => {
      d.holdTimer = null;
      if (!this.open || this.drag !== d || d.started || !this.inv) return;
      d.longPressed = true;
      // 触屏长按等同右键：空手从一叠中拿一半；持物时只放一个。
      this.applyClick(d.region, d.i, true);
      this.render();
      this.onChange?.();
    }, TOUCH_HOLD_MS);
  }

  private clearTouchHold(d: DragState): void {
    if (d.holdTimer === null) return;
    window.clearTimeout(d.holdTimer);
    d.holdTimer = null;
  }

  private addSwept(d: DragState, region: Region, i: number): void {
    if (region === 'output' || region === 'catalog' || region === 'trash') return;
    if (region === 'armor' && (this.gridN !== 2 || !acceptsArmor(i, this.cursor))) return;
    const key = `${region}:${i}`;
    if (d.sweptKeys.has(key)) return;
    d.sweptKeys.add(key);
    d.swept.push(this.slotRef(region, i));
    const cell = this.cellOf(region, i);
    if (cell) {
      cell.el.classList.add('inv-drag-hi');
      d.sweptCells.push(cell);
    }
  }

  // 在 region 第 i 格应用左右键（光标↔格子）——原 clickSlot 的核心，松手时调用。
  private applyClick(region: Region, i: number, right: boolean): void {
    if (!this.inv) return;
    if (region === 'armor') {
      if (this.gridN !== 2 || !acceptsArmor(i, this.cursor)) return;
      this.cursor = right
        ? rightClick(this.armor, i, this.cursor, maxOf)
        : leftClick(this.armor, i, this.cursor, maxOf);
    } else if (region === 'craft') {
      const n = this.gridN;
      const row = this.craft[Math.floor(i / n)];
      const c = i % n;
      this.cursor = right
        ? rightClick(row, c, this.cursor, maxOf)
        : leftClick(row, c, this.cursor, maxOf);
    } else if (region === 'main' || region === 'hotbar') {
      const idx = region === 'main' ? HOTBAR + i : i;
      this.cursor = right
        ? rightClick(this.inv, idx, this.cursor, maxOf)
        : leftClick(this.inv, idx, this.cursor, maxOf);
    }
  }

  // region+i → 跨数组的格子引用（涂抹分发统一操作背包格与合成格）。
  private slotRef(region: Region, i: number): SlotRef {
    if (region === 'armor')
      return {
        get: () => this.armor[i],
        set: (s) => {
          if (acceptsArmor(i, s)) this.armor[i] = s;
        },
      };
    if (region === 'craft') {
      const n = this.gridN;
      const row = this.craft[Math.floor(i / n)];
      const c = i % n;
      return { get: () => row[c], set: (s) => (row[c] = s) };
    }
    if (region !== 'main' && region !== 'hotbar') throw new Error('只允许拖到背包格');
    const inv = this.inv as Inventory;
    const idx = region === 'main' ? HOTBAR + i : i;
    return { get: () => inv[idx], set: (s) => (inv[idx] = s) };
  }

  // 鼠标位置下的格子（命中测试），无则 null。
  private slotAt(
    e: Pick<PointerEvent, 'clientX' | 'clientY'>,
  ): { region: Region; i: number } | null {
    const hit = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
    const el = hit?.closest('.inv-slot') as HTMLElement | null;
    if (!el || el.dataset.region === undefined) return null;
    return { region: el.dataset.region as Region, i: Number(el.dataset.idx) };
  }

  private cellOf(region: Region, i: number): Cell | null {
    if (region === 'armor') return this.armorCells[i] ?? null;
    if (region === 'main') return this.mainCells[i] ?? null;
    if (region === 'hotbar') return this.hotbarCells[i] ?? null;
    if (region === 'craft') return this.craftCells[i] ?? null;
    if (region === 'catalog') return this.creativeCells[i] ?? null;
    if (region === 'trash') return this.trashCell;
    return null;
  }

  private quickMoveFrom(region: Region, i: number): void {
    if (!this.inv) return;
    if (region === 'armor') {
      if (this.gridN === 2) quickMove(this.armor, i, this.inv, maxOf);
      return;
    }
    if (this.gridN === 2 && (region === 'main' || region === 'hotbar')) {
      const index = region === 'main' ? HOTBAR + i : i;
      const stack = this.inv[index];
      const def = stack && armorOf(stack.id);
      const slot = def ? ARMOR_SLOTS.indexOf(def.slot) : -1;
      if (slot >= 0 && !this.armor[slot] && acceptsArmor(slot, stack)) {
        this.armor[slot] = stack;
        this.inv[index] = null;
        return;
      }
    }
    if (region === 'craft') {
      const n = this.gridN;
      quickMove(this.craft[Math.floor(i / n)], i % n, this.inv, maxOf);
    } else if (region === 'main') {
      quickMove(this.inv, HOTBAR + i, this.inv, maxOf, 0, HOTBAR); // 背包 → 快捷栏
    } else if (region === 'hotbar') {
      quickMove(this.inv, i, this.inv, maxOf, HOTBAR, HOTBAR + MAIN); // 快捷栏 → 背包
    }
  }

  private rebuildCreativeCatalog(): void {
    const query = this.creativeSearchEl.value.trim().toLocaleLowerCase();
    const source = query ? CREATIVE_ITEM_IDS : creativeItemsIn(this.creativeCategory);
    this.creativeIds = query
      ? source.filter(
          (id) => itemLabel(id).toLocaleLowerCase().includes(query) || String(id) === query,
        )
      : source;
    this.creativeGridEl.innerHTML = '';
    this.creativeCells = [];
    for (let i = 0; i < this.creativeIds.length; i++) {
      const cell = this.makeSlot(this.creativeGridEl, 'catalog', i);
      cell.el.title = itemLabel(this.creativeIds[i]);
      this.creativeCells.push(cell);
    }
    for (const button of this.creativeTabButtons)
      button.classList.toggle('active', button.dataset.category === this.creativeCategory);
    this.titleEl.textContent = this.creativeSearchEl.value.trim()
      ? '搜索物品'
      : CREATIVE_CATEGORIES.find((category) => category.id === this.creativeCategory)?.label ??
        '物品栏';
    this.render();
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
    for (let i = 0; i < this.armorCells.length; i++) this.paint(this.armorCells[i], this.armor[i]);
    this.playerPreview?.setArmor(this.armor);
    const n = this.gridN;
    for (let i = 0; i < this.craftCells.length; i++) {
      this.paint(this.craftCells[i], this.craft[Math.floor(i / n)][i % n]);
    }
    this.paint(this.outCell, gridResult(this.craft));
    if (this.mode === 'creative') {
      for (let i = 0; i < this.creativeCells.length; i++)
        this.paint(this.creativeCells[i], { id: this.creativeIds[i], count: 1 });
    }
    if (this.cursor) {
      this.cursorEl.style.display = 'block';
      this.fill(this.cursorIcon, this.cursorCnt, this.cursor);
    } else {
      this.cursorEl.style.display = 'none';
    }
  }

  private paint(cell: Cell, stack: ItemStack | null): void {
    this.fill(cell.icon, cell.cnt, stack);
    cell.el.title = stack ? itemLabel(stack.id) : '';
    cell.el.classList.toggle('occupied', !!stack);
    if (cell.dur) {
      const max = stack ? itemMaxDurability(stack.id) : null;
      const remaining = stack?.dur ?? max;
      cell.dur.hidden = !max || remaining === null || remaining >= max;
      if (max && remaining !== null) {
        const ratio = Math.max(0, Math.min(1, remaining / max));
        cell.dur.style.setProperty('--dur-width', `${Math.round(13 * ratio)}px`);
        cell.dur.style.setProperty('--dur-color', `hsl(${120 * ratio} 100% 50%)`);
      }
    }
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
