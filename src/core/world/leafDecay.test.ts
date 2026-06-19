import { describe, it, expect } from 'vitest';
import { findUnsupportedLeaves } from './leafDecay';
import { OAK_LEAVES, OAK_LOG } from '../blocks/registry';

// 用 Map 模拟体素世界：缺省=空气(0)。
function makeWorld(cells: Record<string, number>) {
  return (x: number, y: number, z: number): number => cells[`${x},${y},${z}`] ?? 0;
}
const has = (out: { x: number; y: number; z: number }[], x: number, y: number, z: number): boolean =>
  out.some((c) => c.x === x && c.y === y && c.z === z);

describe('findUnsupportedLeaves', () => {
  it('紧挨原木的树叶受支撑，不腐烂', () => {
    const gb = makeWorld({ '0,0,0': OAK_LOG, '1,0,0': OAK_LEAVES });
    const out = findUnsupportedLeaves(gb, 0, 0, 0, 6);
    expect(has(out, 1, 0, 0)).toBe(false);
    expect(out.length).toBe(0);
  });

  it('附近没有原木的树叶失去支撑，应腐烂', () => {
    const gb = makeWorld({ '0,0,0': OAK_LEAVES });
    const out = findUnsupportedLeaves(gb, 0, 0, 0, 6);
    expect(has(out, 0, 0, 0)).toBe(true);
  });

  it('沿树叶洪泛距离 ≤6 受支撑，>6 腐烂', () => {
    const cells: Record<string, number> = { '0,0,0': OAK_LOG };
    for (let x = 1; x <= 8; x++) cells[`${x},0,0`] = OAK_LEAVES; // 连续树叶链 x=1..8
    const out = findUnsupportedLeaves(makeWorld(cells), 0, 0, 0, 8);
    // x=1..6 距离 1..6 受支撑；x=7,8 距离 7,8 腐烂
    for (let x = 1; x <= 6; x++) expect(has(out, x, 0, 0)).toBe(false);
    expect(has(out, 7, 0, 0)).toBe(true);
    expect(has(out, 8, 0, 0)).toBe(true);
  });

  it('整棵树原木全没了 → 整片树冠都列入腐烂', () => {
    // 一团 3×3×2 的树叶，周围无任何原木
    const cells: Record<string, number> = {};
    for (let x = -1; x <= 1; x++) for (let z = -1; z <= 1; z++) for (let y = 0; y <= 1; y++) cells[`${x},${y},${z}`] = OAK_LEAVES;
    const out = findUnsupportedLeaves(makeWorld(cells), 0, 0, 0, 6);
    expect(out.length).toBe(3 * 3 * 2); // 全部 18 片都腐烂
  });
});
