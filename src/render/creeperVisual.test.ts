import { describe, it, expect } from 'vitest';
import { creeperFuseVisual } from './creeperVisual';

// 苦力怕引爆前视觉：闪白 + 膨胀（同 MC）。这里只测纯动画曲线（whiteness 0..1 / swell 缩放倍数）。
describe('苦力怕引信视觉曲线', () => {
  it('未点燃(fuse=0) → 原样：不闪白、不膨胀', () => {
    expect(creeperFuseVisual(0)).toEqual({ whiteness: 0, swell: 1 });
  });

  it('点燃后(fuse>0)既闪白又膨胀(比原来大)', () => {
    const v = creeperFuseVisual(5);
    expect(v.whiteness).toBeGreaterThan(0);
    expect(v.whiteness).toBeLessThanOrEqual(1);
    expect(v.swell).toBeGreaterThan(1);
  });

  it('越接近引爆越白、越大', () => {
    const early = creeperFuseVisual(3);
    const late = creeperFuseVisual(28);
    expect(late.whiteness).toBeGreaterThan(early.whiteness);
    expect(late.swell).toBeGreaterThan(early.swell);
  });

  it('引爆阈值处接近全白、约 1.5× 大小', () => {
    const v = creeperFuseVisual(30);
    expect(v.whiteness).toBe(1);
    expect(v.swell).toBeCloseTo(1.5, 5);
  });

  it('whiteness 封顶 1、swell 封顶 1.5（不会无限膨胀）', () => {
    const v = creeperFuseVisual(100);
    expect(v.whiteness).toBe(1);
    expect(v.swell).toBeCloseTo(1.5, 5);
  });
});
