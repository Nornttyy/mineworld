import { describe, it, expect } from 'vitest';
import { heldRenderKind, mcSwingPose } from './FirstPersonHand';

// 手持渲染分类：方块=3D 立方体，物品(食物/工具/材料)=平面图标精灵，其余=只露手臂。
describe('FirstPersonHand heldRenderKind', () => {
  it('方块(木板/工作台/泥土) → block（3D 立方体）', () => {
    expect(heldRenderKind(2)).toBe('block'); // 泥土
    expect(heldRenderKind(7)).toBe('block'); // 木板
    expect(heldRenderKind(11)).toBe('block'); // 工作台
  });

  it('物品(棍/工具/食物/煤) → sprite（修复：以前手持不显示，只有手臂）', () => {
    expect(heldRenderKind(256)).toBe('sprite'); // 苹果
    expect(heldRenderKind(257)).toBe('sprite'); // 木棍
    expect(heldRenderKind(258)).toBe('sprite'); // 煤炭
    expect(heldRenderKind(259)).toBe('sprite'); // 木镐
    expect(heldRenderKind(262)).toBe('sprite'); // 木剑
    expect(heldRenderKind(268)).toBe('sprite'); // 石锄
  });

  it('空手 / 空气 / 未知 id → none（只露手臂）', () => {
    expect(heldRenderKind(null)).toBe('none');
    expect(heldRenderKind(0)).toBe('none');
    expect(heldRenderKind(99999)).toBe('none');
  });
});

describe('mcSwingPose（1:1 复刻 MC 挥击）', () => {
  it('t=0 静止：无平移、绕 X 不下劈、Y 旋转净为 0', () => {
    const p = mcSwingPose(0);
    expect(p.tx).toBeCloseTo(0);
    expect(p.ty).toBeCloseTo(0);
    expect(p.tz).toBeCloseTo(0);
    expect(p.rx).toBeCloseTo(0);
    expect(p.ry1 + p.ry2).toBeCloseTo(0); // 45° 与 −45° 抵消
  });

  it('主下劈：rx 在挥击中为负(向前下)，峰值约 −80°×尺度', () => {
    // ft=sin(√t·π) 在 t=0.25 处达峰(=1) → rx≈−80°
    const peak = mcSwingPose(0.25);
    expect(peak.rx).toBeLessThan(0);
    expect(peak.rx).toBeCloseTo((-80 * Math.PI) / 180, 2);
  });

  it('平移：挥击中往中间(tx<0)、往前方(tz<0)', () => {
    const m = mcSwingPose(0.25);
    expect(m.tx).toBeLessThan(0); // 右手往左(中间)
    expect(m.tz).toBeLessThan(0); // 往画面里(前方)
  });
});
