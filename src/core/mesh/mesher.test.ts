import { describe, it, expect } from 'vitest';
import { Section } from '../world/section';
import { meshSection, aoLevel } from './mesher';

describe('mesher (face culling)', () => {
  it('empty section -> no geometry', () => {
    const m = meshSection(new Section());
    expect(m.indices.length).toBe(0);
    expect(m.positions.length).toBe(0);
  });

  it('single block -> 6 faces (24 verts, 36 indices)', () => {
    const s = new Section();
    s.set(8, 8, 8, 1);
    const m = meshSection(s);
    expect(m.positions.length / 3).toBe(24);
    expect(m.indices.length).toBe(36);
    expect(m.uvs.length / 2).toBe(24);
    expect(m.colors.length / 3).toBe(24);
  });

  it('two adjacent blocks -> shared faces culled (10 faces)', () => {
    const s = new Section();
    s.set(8, 8, 8, 1);
    s.set(9, 8, 8, 1);
    expect(meshSection(s).indices.length).toBe(10 * 6);
  });

  it('bakes MC face brightness: top 1.0, bottom 0.5', () => {
    const s = new Section();
    s.set(0, 0, 0, 1);
    const m = meshSection(s);
    let mx = 0;
    let mn = 1;
    for (const c of m.colors) {
      mx = Math.max(mx, c);
      mn = Math.min(mn, c);
    }
    expect(mx).toBeCloseTo(1.0);
    expect(mn).toBeCloseTo(0.5);
  });

  it('UV 内缩为亚像素：方块边缘纹素近满格（不是半格）', () => {
    const s = new Section();
    s.set(0, 0, 0, 1); // stone = 图集 tile 0
    const m = meshSection(s);
    const us: number[] = [];
    const vs: number[] = [];
    for (let i = 0; i < m.uvs.length; i += 2) {
      us.push(m.uvs[i]);
      vs.push(m.uvs[i + 1]);
    }
    // 一格图集 = 横 1/4 × 纵 1/5 UV（图集 4 列×5 行）；内缩须远小于 1 像素，否则边缘像素只剩半格。
    expect(Math.max(...us) - Math.min(...us)).toBeGreaterThan(0.99 / 4);
    expect(Math.max(...vs) - Math.min(...vs)).toBeGreaterThan(0.99 / 5);
  });

  it('AO level：标准体素环境光遮蔽', () => {
    expect(aoLevel(false, false, false)).toBe(3); // 无遮挡=最亮
    expect(aoLevel(true, false, false)).toBe(2);
    expect(aoLevel(false, true, false)).toBe(2);
    expect(aoLevel(false, false, true)).toBe(2);
    expect(aoLevel(true, false, true)).toBe(1);
    expect(aoLevel(true, true, false)).toBe(0); // 两侧都挡=最暗(忽略对角)
    expect(aoLevel(true, true, true)).toBe(0);
  });
});
