import type { CraftOption } from '../core/crafting/craft';

// 中文名（合成界面显示用）
const ZH: Record<number, string> = {
  1: '石头',
  2: '泥土',
  3: '草方块',
  4: '圆石',
  5: '沙子',
  6: '原木',
  7: '木板',
  8: '煤矿',
  10: '树叶',
  11: '工作台',
  256: '苹果',
  257: '木棍',
  258: '煤炭',
  259: '木镐',
  260: '木斧',
  261: '木锹',
  262: '木剑',
  263: '木锄',
  264: '石镐',
  265: '石斧',
  266: '石锹',
  267: '石剑',
  268: '石锄',
};
// 有 iso 图标文件的 id → 图标名（其余回退到文字名）。新物品图标待补。
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
  256: 'apple',
};
const dispName = (id: number): string => ZH[id] ?? `#${id}`;

/** 合成界面：列出当前可见配方（够材料的高亮），点一下即合成。个人 2×2 / 工作台 3×3。 */
export class CraftingMenu {
  private readonly listEl: HTMLElement;
  private readonly titleEl: HTMLElement;
  onCraft: ((opt: CraftOption) => void) | null = null;

  constructor(private readonly root: HTMLElement) {
    root.innerHTML = `
      <div class="craft-panel">
        <div class="craft-title"></div>
        <div class="craft-list"></div>
        <div class="craft-hint">点击合成 · E / Esc 关闭</div>
      </div>`;
    this.titleEl = root.querySelector('.craft-title') as HTMLElement;
    this.listEl = root.querySelector('.craft-list') as HTMLElement;
  }

  // 物品图标小方格（有图标用图标，否则用文字名）
  private chip(id: number, count: number): string {
    const icon = ICON[id];
    const inner = icon
      ? `<span class="craft-icon" style="background-image:url(${import.meta.env.BASE_URL}textures/icons/${icon}.png)"></span>`
      : `<span class="craft-txt">${dispName(id)}</span>`;
    const n = count > 1 ? `<span class="craft-n">${count}</span>` : '';
    return `<span class="craft-chip" title="${dispName(id)}">${inner}${n}</span>`;
  }

  render(options: CraftOption[], title: string): void {
    this.titleEl.textContent = title;
    this.listEl.innerHTML = '';
    if (options.length === 0) {
      this.listEl.innerHTML = '<div class="craft-empty">没有可合成的东西</div>';
      return;
    }
    for (const opt of options) {
      const row = document.createElement('div');
      row.className = 'craft-row' + (opt.craftable ? ' craftable' : '');
      const ings = opt.ingredients.map((g) => this.chip(g.id, g.count)).join('');
      row.innerHTML = `${this.chip(opt.result.id, opt.result.count)}<span class="craft-arrow">⟸</span><span class="craft-ings">${ings}</span>`;
      if (opt.craftable) row.addEventListener('click', () => this.onCraft?.(opt));
      this.listEl.appendChild(row);
    }
  }

  show(): void {
    this.root.classList.remove('hidden');
  }
  hide(): void {
    this.root.classList.add('hidden');
  }
  get visible(): boolean {
    return !this.root.classList.contains('hidden');
  }
}
