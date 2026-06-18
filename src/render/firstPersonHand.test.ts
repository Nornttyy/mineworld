import { describe, it, expect } from 'vitest';
import { heldRenderKind } from './FirstPersonHand';

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
