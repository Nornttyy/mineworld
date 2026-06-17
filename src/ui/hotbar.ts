// 底部快捷栏（MC 同款）：一排方块槽，显示图标 + 当前选中高亮。
// 方块 id → 用作图标的纹理名（public/textures/blocks/<name>.png）
const ICON: Record<number, string> = {
  1: 'stone',
  2: 'dirt',
  3: 'grass_side',
  4: 'cobblestone',
  5: 'sand',
  6: 'oak_log_side',
  7: 'oak_planks',
  8: 'coal_ore',
  9: 'water',
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
        icon.style.backgroundImage = `url(${import.meta.env.BASE_URL}textures/blocks/${name}.png)`;
      }
      slot.appendChild(icon);

      const num = document.createElement('span');
      num.className = 'hotbar-num';
      num.textContent = String(i + 1);
      slot.appendChild(num);

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
