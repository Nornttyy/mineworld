import { type Survival } from '../core/survival/survival';

const url = (n: string): string => `url(${import.meta.env.BASE_URL}textures/ui/${n}.png)`;

/** 快捷栏上方的红心 + 饥饿条（各 10 个图标，每图标 = 2 点）。按 Survival 状态刷新。 */
export class StatusBar {
  private readonly hearts: HTMLElement[] = [];
  private readonly foods: HTMLElement[] = [];

  constructor(healthEl: HTMLElement, hungerEl: HTMLElement, icons = 10) {
    this.hearts = this.build(healthEl, icons);
    this.foods = this.build(hungerEl, icons);
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
  }

  private fill(cells: HTMLElement[], value: number, kind: 'heart' | 'food'): void {
    for (let i = 0; i < cells.length; i++) {
      const pts = value - i * 2; // 该图标对应的点数（0/1/2）
      const variant = pts >= 2 ? 'full' : pts === 1 ? 'half' : 'empty';
      cells[i].style.backgroundImage = url(`${kind}_${variant}`);
    }
  }
}
