import { describe, it, expect } from 'vitest';
import { spawnBurst, stepParticles, particleColor, type Particle } from './particles';

// 确定性 rand：固定序列，便于断言。
function seq(vals: number[]): () => number {
  let i = 0;
  return () => vals[i++ % vals.length];
}

describe('particles 碎屑粒子', () => {
  it('spawnBurst 生成指定数量、带给定颜色、初始 age=0', () => {
    const ps = spawnBurst(0, 10, 0, [1, 0, 0.5], 8, seq([0.5]));
    expect(ps).toHaveLength(8);
    for (const p of ps) {
      expect([p.r, p.g, p.b]).toEqual([1, 0, 0.5]);
      expect(p.age).toBe(0);
      expect(p.life).toBeGreaterThan(0);
      // 散布在中心附近 ±0.3
      expect(Math.abs(p.x)).toBeLessThanOrEqual(0.31);
    }
  });

  it('初速向上（vy>0），随后受重力下拽', () => {
    const ps = spawnBurst(0, 10, 0, [1, 1, 1], 1, seq([0.5]));
    expect(ps[0].vy).toBeGreaterThan(0);
    const vy0 = ps[0].vy;
    stepParticles(ps, 0.1);
    expect(ps[0].vy).toBeLessThan(vy0); // 重力让 vy 减小
    expect(ps[0].y).toBeGreaterThan(10); // 这一刻还在上升
  });

  it('过了寿命就被移除', () => {
    const ps = spawnBurst(0, 10, 0, [1, 1, 1], 3, seq([0.5]));
    let cur: Particle[] = ps;
    cur = stepParticles(cur, 5); // 远超寿命
    expect(cur).toHaveLength(0);
  });

  it('未到寿命则保留并移动', () => {
    const ps = spawnBurst(0, 10, 0, [1, 1, 1], 2, seq([0.5]));
    const cur = stepParticles(ps, 0.05);
    expect(cur).toHaveLength(2);
  });

  it('particleColor：已知方块/食物给专属色，未知给灰', () => {
    expect(particleColor(2)).toEqual([0.55, 0.42, 0.25]); // 泥土
    expect(particleColor(256)).toEqual([0.79, 0.16, 0.13]); // 苹果
    expect(particleColor(99999)).toEqual([0.5, 0.5, 0.5]);
  });
});
