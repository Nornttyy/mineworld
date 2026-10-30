import { type Survival, OXYGEN_AIR_TICKS, oxygenAirTicks } from '../core/survival/survival';

import { asset } from '../asset';

const url = (n: string): string => `url(${asset(`textures/ui/java/hud/${n}.png`)})`;

/** 快捷栏上方的官方红心/饥饿图层及氧气气泡。
 *  红心与饥饿每格表示2点；氧气在水下或出水尚未恢复满时显示。 */
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

  render(s: Survival, underwater = false): void {
    this.fill(this.hearts, s.health, 'heart');
    this.fill(this.foods, s.food, 'food');
    // 保留低值状态类，避免把通用整行 CSS 动画冒充原版逐图标状态动画。
    this.healthEl.classList.toggle('low', s.health <= 4);
    this.hungerEl.classList.toggle('low', s.food <= 4);
    // 氧气：满则隐藏，水下消耗时显示气泡
    if (this.oxygenEl) {
      const show = underwater || oxygenAirTicks(s) < OXYGEN_AIR_TICKS;
      this.oxygenEl.style.display = show ? 'flex' : 'none';
      if (show) {
        const air = oxygenAirTicks(s);
        const full = Math.max(0, Math.ceil((air - 2) * this.bubbles.length / OXYGEN_AIR_TICKS));
        const bursting = Math.ceil(air * this.bubbles.length / OXYGEN_AIR_TICKS) - full;
        for (let i = 0; i < this.bubbles.length; i++) {
          const sprite = i < full ? 'air' : i < full + bursting ? 'air_bursting' : 'air_empty';
          this.bubbles[i].style.backgroundImage = url(sprite);
        }
      }
    }
  }

  private fill(cells: HTMLElement[], value: number, kind: 'heart' | 'food'): void {
    const displayed = Math.ceil(value); // Java HUD rounds fractional healing up to the next half-heart.
    for (let i = 0; i < cells.length; i++) {
      const pts = displayed - i * 2; // 该图标对应的点数（0/1/2）
      // The official heart/food foreground sprites are transparent. Java draws
      // their empty container first; overlaying both preserves the black border
      // and the visible empty half instead of showing the world through it.
      const container = url(kind === 'heart' ? 'heart/container' : 'food_empty');
      const variant = pts >= 2 ? 'full' : pts === 1 ? 'half' : null;
      const foreground = variant ? url(kind === 'heart' ? `heart/${variant}` : `food_${variant}`) : null;
      cells[i].style.backgroundImage = foreground ? `${foreground}, ${container}` : container;
    }
  }
}
