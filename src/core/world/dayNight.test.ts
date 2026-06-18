import { describe, it, expect } from 'vitest';
import { skyStateAt, wrapTime, DAY_LENGTH } from './dayNight';

const avg = (c: [number, number, number]): number => (c[0] + c[1] + c[2]) / 3;

describe('dayNight 昼夜更替', () => {
  it('正午是大白天（接近全亮、非夜）', () => {
    const s = skyStateAt(6000);
    expect(s.isNight).toBe(false);
    expect(avg(s.worldTint)).toBeGreaterThan(0.9); // 几乎不压暗
    expect(s.light).toBeGreaterThan(0.9);
  });

  it('午夜是夜晚且明显压暗', () => {
    const s = skyStateAt(18000);
    expect(s.isNight).toBe(true);
    expect(avg(s.worldTint)).toBeLessThan(0.5); // 比白天暗
    expect(avg(s.skyTop)).toBeLessThan(0.2); // 天空很暗
  });

  it('夜晚仍可玩：亮度永不为 0', () => {
    for (let t = 0; t < DAY_LENGTH; t += 250) {
      expect(skyStateAt(t).light).toBeGreaterThan(0.05);
    }
  });

  it('夜比昼暗（午夜亮度 < 正午亮度）', () => {
    expect(skyStateAt(18000).light).toBeLessThan(skyStateAt(6000).light);
  });

  it('跨午夜无缝回绕：t=0 与 t=DAY_LENGTH 状态一致', () => {
    const a = skyStateAt(0);
    const b = skyStateAt(DAY_LENGTH);
    expect(b.worldTint).toEqual(a.worldTint);
    expect(b.skyTop).toEqual(a.skyTop);
  });

  it('负数 / 超界时间会归一', () => {
    expect(wrapTime(-1)).toBe(DAY_LENGTH - 1);
    expect(wrapTime(DAY_LENGTH + 500)).toBe(500);
    expect(skyStateAt(-1).worldTint).toEqual(skyStateAt(DAY_LENGTH - 1).worldTint);
  });

  it('颜色分量始终在 [0,1]', () => {
    for (let t = 0; t < DAY_LENGTH; t += 137) {
      const s = skyStateAt(t);
      for (const c of [...s.skyTop, ...s.skyHorizon, ...s.worldTint]) {
        expect(c).toBeGreaterThanOrEqual(0);
        expect(c).toBeLessThanOrEqual(1);
      }
    }
  });

  it('黄昏(日落)出现暖色地平线（红分量明显高于蓝）', () => {
    const s = skyStateAt(12200);
    expect(s.skyHorizon[0]).toBeGreaterThan(s.skyHorizon[2] + 0.3);
  });
});
