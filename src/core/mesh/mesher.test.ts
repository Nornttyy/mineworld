import { describe, it, expect } from 'vitest';
import { Section } from '../world/section';
import { meshSection } from './mesher';

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
});
