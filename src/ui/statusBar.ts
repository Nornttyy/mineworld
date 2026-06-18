import { type Survival, MAX_OXYGEN } from '../core/survival/survival';

const url = (n: string): string => `url(${import.meta.env.BASE_URL}textures/ui/${n}.png)`;

/** 快捷栏上方的红心 + 饥饿 + 氧气条（各 10 图标，每图标 = 2 点）。
 *  氧气满则隐藏（仅水下憋气时显示）；血量/饱食 ≤4 时对应条抖动（MC 低值提示）。 */
export class StatusBar {
  private readonly hearts: HTMLElement[];
  private readonly foods: HTMLElement[];
  private bubbles: HTMLElement[] = [];
  private readonly healthEl: HTMLElement;
  private readonly hungerEl: HTMLElement;
  private readonly oxygenEl: HTMLElement | null;

  constructor(healthEl: HTMLElement, hungerEl: HTMLElement, icons = 10) {
    this.healthEl = healthEl;
    this.hungerEl = hungerEl;
    this.oxygenEl = document.getElementById('oxygen');
    this.hearts = this.build(healthEl, icons);
    this.foods = this.build(hungerEl, icons);
    if (this.oxygenEl) this.bubbles = this.build(this.oxygenEl, icons);
  }

  private build(parent: HTMLElement, n: number): HTMLElement[] {
    parent.innerHTML = '';
    const cells: HTMLElement[] = [];
    for (let i = 0; i < n; i++) {
      const d = document.createElement('div');
      d.className = 'hud-icon';
      parent.appendChild(d);
      cells.push(d);
    }
    return cells;
  }

  render(s: Survival): void {
    this.fill(this.hearts, s.health, 'heart');
    this.fill(this.foods, s.food, 'food');
    // 血量 / 饱食 ≤4：对应条抖动（MC 低值提示）
    this.healthEl.classList.toggle('low', s.health <= 4);
    this.hungerEl.classList.toggle('low', s.food <= 4);
    // 氧气：满则隐藏，水下消耗时显示气泡
    if (this.oxygenEl) {
      const show = s.oxygen < MAX_OXYGEN;
      this.oxygenEl.style.display = show ? 'flex' : 'none';
      if (show) {
        for (let i = 0; i < this.bubbles.length; i++) {
          this.bubbles[i].style.backgroundImage = url(s.oxygen > i ? 'bubble_full' : 'bubble_empty');
        }
      }
    }
  }

  private fill(cells: HTMLElement[], value: number, kind: 'heart' | 'food'): void {
    for (let i = 0; i < cells.length; i++) {
      const pts = value - i * 2; // 该图标对应的点数（0/1/2）
      const variant = pts >= 2 ? 'full' : pts === 1 ? 'half' : 'empty';
      cells[i].style.backgroundImage = url(`${kind}_${variant}`);
    }
  }
}
