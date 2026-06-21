import { describe, it, expect } from 'vitest';
import { Section } from '../world/section';
import { ChunkWorld } from '../world/chunkWorld';
import { meshSection, meshChunk, aoLevel } from './mesher';
import { SNOW_LAYER } from '../blocks/registry';

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
    // 一格图集 = 横 1/4 × 纵 1/8 UV（图集 4 列×8 行）；内缩须远小于 1 像素，否则边缘像素只剩半格。
    expect(Math.max(...us) - Math.min(...us)).toBeGreaterThan(0.99 / 4);
    expect(Math.max(...vs) - Math.min(...vs)).toBeGreaterThan(0.99 / 8);
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

describe('mesher 雪层特判', () => {
  it('雪层渲染为贴地薄四边形（所有顶点 y 偏移 ≤ 0.2）', () => {
    const w = new ChunkWorld(99);
    // 在 y=160 放一块实心石头作地面，y=161 放雪层
    const STONE = 1;
    w.setBlock(8, 160, 8, STONE);
    w.setBlock(8, 161, 8, SNOW_LAYER);

    const m = meshChunk(w, 0, 0);
    // 雪层应当进入 cutout 批（薄平四边形）
    expect(m.cutout.positions.length).toBeGreaterThan(0);

    // 雪层格局部坐标为 (8, 161, 8)；其顶点 y 应在 [161, 161+0.2] 范围内（贴地薄层）
    const pos = m.cutout.positions;
    const snowYValues: number[] = [];
    for (let i = 1; i < pos.length; i += 3) {
      const y = pos[i];
      // 雪层格 y=161，收集该格附近的 y 值（忽略其他块的顶点）
      if (y >= 161 && y <= 163) snowYValues.push(y);
    }
    expect(snowYValues.length).toBeGreaterThan(0);
    // 所有雪层顶点相对于格底的 y 偏移应 ≤ 0.2
    const maxOffset = Math.max(...snowYValues) - 161;
    expect(maxOffset).toBeLessThanOrEqual(0.2);
  });
});
