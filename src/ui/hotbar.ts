// 底部快捷栏（MC 同款）：一排方块槽，等距方块图标 + 当前选中高亮框。
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
  private readonly slots: HTMLElement[] = [];
  private selected = 0;
  readonly size: number;

  constructor(el: HTMLElement, blockIds: number[]) {
    this.size = blockIds.length;
    for (let i = 0; i < blockIds.length; i++) {
      const slot = document.createElement('div');
      slot.className = 'hotbar-slot';

      const icon = document.createElement('div');
      icon.className = 'hotbar-icon';
      const name = ICON[blockIds[i]];
      if (name) {
        icon.style.backgroundImage = `url(${import.meta.env.BASE_URL}textures/icons/${name}.png)`;
      }
      slot.appendChild(icon);

      el.appendChild(slot);
      this.slots.push(slot);
    }
    this.setSelected(0);
  }

  setSelected(i: number): void {
    this.selected = ((i % this.size) + this.size) % this.size;
    this.slots.forEach((s, idx) => s.classList.toggle('selected', idx === this.selected));
  }

  // 相对滚动选择（滚轮用）
  scroll(dir: number): void {
    this.setSelected(this.selected + dir);
  }

  get index(): number {
    return this.selected;
  }
}
