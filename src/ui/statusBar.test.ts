import { describe, expect, it, vi } from 'vitest';
import { newSurvival, tickOxygen } from '../core/survival/survival';
import { StatusBar } from './statusBar';

function fixture() {
  const icon = () => ({ style: { backgroundImage: '' } });
  const hearts = Array.from({ length: 10 }, icon);
  const foods = Array.from({ length: 10 }, icon);
  const bubbles = Array.from({ length: 10 }, icon);
  const armorIcons = Array.from({ length: 10 }, icon);
  const armorEl = { style: { display: '' } };
  const oxygenEl = { style: { display: '' } };
  const bar = Object.create(StatusBar.prototype) as StatusBar;
  Object.assign(bar, {
    hearts,
    foods,
    bubbles,
    oxygenEl,
    armorIcons,
    armorEl,
    healthEl: { classList: { toggle: vi.fn() } },
    hungerEl: { classList: { toggle: vi.fn() } },
  });
  return { bar, hearts, foods, bubbles, oxygenEl, armorIcons, armorEl };
}

describe('现代生存状态显示', () => {
  it('盔甲条使用真实盔甲点数，脱完时隐藏', () => {
    const { bar, armorIcons, armorEl } = fixture();
    bar.render(newSurvival(), false, 7);
    expect(armorEl.style.display).toBe('flex');
    expect(armorIcons[2].style.backgroundImage).toContain('armor_full.png');
    expect(armorIcons[3].style.backgroundImage).toContain('armor_half.png');
    expect(armorIcons[4].style.backgroundImage).toContain('armor_empty.png');
    bar.render(newSurvival(), false, 0);
    expect(armorEl.style.display).toBe('none');
  });
  it('分数回血向上取半心，不能把刚恢复的生命画成空心', () => {
    const { bar, hearts } = fixture();
    const s = newSurvival();
    s.health = 10.25;
    bar.render(s);
    expect(hearts[4].style.backgroundImage).toContain('heart/full.png');
    expect(hearts[5].style.backgroundImage).toContain('heart/half.png');
    expect(hearts[6].style.backgroundImage).toContain('heart/container.png');
    expect(hearts[5].style.backgroundImage).toContain('heart/container.png');
    expect(hearts[6].style.backgroundImage).not.toContain('heart/half.png');
  });

  it('入水立即显示满气泡，出水后等空气彻底回满才隐藏', () => {
    const { bar, oxygenEl } = fixture();
    const s = newSurvival();
    bar.render(s, true);
    expect(oxygenEl.style.display).toBe('flex');
    for (let i = 0; i < 20; i++) tickOxygen(s, true);
    bar.render(s, false);
    expect(oxygenEl.style.display).toBe('flex');
    for (let i = 0; i < 4; i++) tickOxygen(s, false);
    bar.render(s, false);
    expect(oxygenEl.style.display).toBe('flex');
    tickOxygen(s, false);
    bar.render(s, false);
    expect(oxygenEl.style.display).toBe('none');
  });

  it('使用官方空容器衬底和半格图层，不让半颗心/半格饥饿透出世界', () => {
    const { bar, foods } = fixture();
    const s = newSurvival();
    s.food = 3;
    bar.render(s);
    expect(foods[0].style.backgroundImage).toContain('food_full.png');
    expect(foods[1].style.backgroundImage).toContain('food_half.png');
    expect(foods[1].style.backgroundImage).toContain('food_empty.png');
    expect(foods[2].style.backgroundImage).not.toContain('food_full.png');
  });

  it('在实际空气值跨过气泡边界时切换破裂/空泡，而非只按整数oxygen画满泡', () => {
    const { bar, bubbles } = fixture();
    const s = newSurvival();
    s.oxygenTimer = 29;
    bar.render(s, true);
    expect(bubbles[8].style.backgroundImage).toContain('/air.png');
    expect(bubbles[9].style.backgroundImage).toContain('/air_bursting.png');
    s.oxygen = 9;
    s.oxygenTimer = 0;
    bar.render(s, true);
    expect(bubbles[9].style.backgroundImage).toContain('/air_empty.png');
  });
});
