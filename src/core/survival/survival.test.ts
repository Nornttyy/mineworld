import { describe, it, expect } from 'vitest';
import {
  newSurvival,
  addExhaustion,
  tickSurvival,
  applyDamage,
  isDead,
  eat,
  fallDamage,
  trackFall,
  tickOxygen,
  MAX_HEALTH,
  MAX_FOOD,
  MAX_OXYGEN,
} from './survival';

const APPLE = { nutrition: 4, saturationModifier: 0.3 }; // MC 苹果

describe('survival: initial state', () => {
  it('starts at full health/food, no exhaustion', () => {
    const s = newSurvival();
    expect(s.health).toBe(MAX_HEALTH); // 20 = 10 颗心
    expect(s.food).toBe(MAX_FOOD); // 20 = 10 个鸡腿
    expect(s.exhaustion).toBe(0);
    expect(s.saturation).toBe(5); // MC 出生饱和度 5
  });
});

describe('survival: exhaustion -> saturation/food drain (MC 1:1)', () => {
  it('accumulates exhaustion', () => {
    const s = newSurvival();
    addExhaustion(s, 2);
    addExhaustion(s, 1.5);
    expect(s.exhaustion).toBeCloseTo(3.5);
  });

  it('exhaustion >4 on a tick: -4 exhaustion, -1 saturation', () => {
    const s = newSurvival(); // saturation 5
    s.exhaustion = 5;
    tickSurvival(s);
    expect(s.exhaustion).toBeCloseTo(1);
    expect(s.saturation).toBe(4);
  });

  it('exhaustion >4 with no saturation: drains 1 food instead', () => {
    const s = newSurvival();
    s.saturation = 0;
    s.food = 12;
    s.exhaustion = 5;
    tickSurvival(s);
    expect(s.food).toBe(11);
  });

  it('exhaustion exactly 4 does NOT drain (strict >4)', () => {
    const s = newSurvival();
    s.exhaustion = 4;
    tickSurvival(s);
    expect(s.exhaustion).toBe(4);
    expect(s.saturation).toBe(5);
  });
});

describe('survival: natural regeneration (MC 1:1)', () => {
  it('food >=18 heals 1 HP per 80 ticks (4s)', () => {
    const s = newSurvival();
    s.health = 10;
    s.food = 18;
    s.saturation = 0;
    for (let i = 0; i < 79; i++) tickSurvival(s);
    expect(s.health).toBe(10); // not yet
    tickSurvival(s);
    expect(s.health).toBe(11); // 80th tick
  });

  it('food ==20 with saturation heals fast: 1 HP per 10 ticks', () => {
    const s = newSurvival();
    s.health = 10;
    s.food = 20;
    s.saturation = 5;
    for (let i = 0; i < 10; i++) tickSurvival(s);
    expect(s.health).toBe(11);
  });

  it('does not regen past max health', () => {
    const s = newSurvival(); // health 20
    s.food = 20;
    s.saturation = 5;
    for (let i = 0; i < 40; i++) tickSurvival(s);
    expect(s.health).toBe(MAX_HEALTH);
  });
});

describe('survival: starvation (MC normal 1:1)', () => {
  it('food ==0 loses 1 HP per 80 ticks', () => {
    const s = newSurvival();
    s.health = 10;
    s.food = 0;
    s.saturation = 0;
    for (let i = 0; i < 80; i++) tickSurvival(s);
    expect(s.health).toBe(9);
  });

  it('starvation floors at 1 HP on normal (cannot starve to death)', () => {
    const s = newSurvival();
    s.health = 1;
    s.food = 0;
    s.saturation = 0;
    for (let i = 0; i < 160; i++) tickSurvival(s);
    expect(s.health).toBe(1);
  });
});

describe('survival: eating (MC 1:1)', () => {
  it('apple restores nutrition + saturation', () => {
    const s = newSurvival();
    s.food = 10;
    s.saturation = 0;
    eat(s, APPLE);
    expect(s.food).toBe(14); // +4
    expect(s.saturation).toBeCloseTo(2.4); // 4 * 0.3 * 2
  });

  it('food clamps at 20; saturation never exceeds food', () => {
    const s = newSurvival();
    s.food = 18;
    s.saturation = 0;
    eat(s, APPLE);
    expect(s.food).toBe(20); // clamp
    expect(s.saturation).toBeCloseTo(2.4);
  });
});

describe('survival: damage & death', () => {
  it('applyDamage reduces health, clamps at 0', () => {
    const s = newSurvival();
    s.health = 5;
    applyDamage(s, 3);
    expect(s.health).toBe(2);
    applyDamage(s, 10);
    expect(s.health).toBe(0);
  });

  it('isDead when health reaches 0', () => {
    const s = newSurvival();
    expect(isDead(s)).toBe(false);
    s.health = 0;
    expect(isDead(s)).toBe(true);
  });
});

describe('survival: fall damage (MC 1:1)', () => {
  it('no damage for <=3 blocks', () => {
    expect(fallDamage(0)).toBe(0);
    expect(fallDamage(3)).toBe(0);
  });
  it('1 damage per block beyond 3', () => {
    expect(fallDamage(4)).toBe(1);
    expect(fallDamage(5.5)).toBe(2); // floor(5.5 - 3)
    expect(fallDamage(13)).toBe(10);
  });
});

describe('survival: fall-distance tracking (MC 1:1)', () => {
  it('accumulates downward distance while airborne', () => {
    expect(trackFall(0, -1, false, false).fallDistance).toBe(1);
    expect(trackFall(1, -2, false, false).fallDistance).toBe(3);
  });
  it('moving up does not change fall distance', () => {
    expect(trackFall(2, 0.5, false, false).fallDistance).toBe(2);
  });
  it('landing on ground applies fall damage then resets', () => {
    const r = trackFall(5, 0, true, false);
    expect(r.damage).toBe(2); // floor(5 - 3)
    expect(r.fallDistance).toBe(0);
  });
  it('water cancels fall (no damage, reset)', () => {
    expect(trackFall(10, 0, false, true)).toEqual({ fallDistance: 0, damage: 0 });
    expect(trackFall(10, 0, true, true).damage).toBe(0);
  });
});

describe('survival: oxygen 水下憋气', () => {
  it('头不在水下 → 氧气保持满', () => {
    const s = newSurvival();
    s.oxygen = 3;
    tickOxygen(s, false);
    expect(s.oxygen).toBe(MAX_OXYGEN);
  });
  it('头在水下每 30 刻耗 1 气泡', () => {
    const s = newSurvival();
    for (let i = 0; i < 30; i++) tickOxygen(s, true);
    expect(s.oxygen).toBe(MAX_OXYGEN - 1);
  });
  it('气泡耗尽后每 20 刻淹溺掉 2 血', () => {
    const s = newSurvival();
    s.oxygen = 0;
    s.health = 10;
    for (let i = 0; i < 20; i++) tickOxygen(s, true);
    expect(s.health).toBe(8);
  });
  it('出水立即回满气泡', () => {
    const s = newSurvival();
    s.oxygen = 2;
    tickOxygen(s, false);
    expect(s.oxygen).toBe(MAX_OXYGEN);
  });
});
