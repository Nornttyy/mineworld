import { describe, it, expect } from 'vitest';
import { splitByY, SECTION_H } from './meshSplit';
import type { MeshData } from '../core/mesh/mesher';

// 在给定 y 造一个水平四边形(4 顶点 / 2 三角形)
function quad(y: number): { pos: number[]; idx: number[] } {
  return { pos: [0, y, 0, 1, y, 0, 1, y, 1, 0, y, 1], idx: [0, 1, 2, 0, 2, 3] };
}
function build(ys: number[]): MeshData {
  const P: number[] = [];
  const I: number[] = [];
  let base = 0;
  for (const y of ys) {
    const q = quad(y);
    P.push(...q.pos);
    I.push(...q.idx.map((i) => i + base));
    base += 4;
  }
  const v = P.length / 3;
  return { positions: new Float32Array(P), uvs: new Float32Array(v * 2), colors: new Float32Array(v * 3), indices: new Uint16Array(I) };
}

describe('splitByY（竖直分段，给视锥剔除用）', () => {
  it('按 Y 把三角形分到对应段，三角形总数守恒', () => {
    const data = build([10, 10, 100, 100, 150]); // 5 个四边形=10 三角形；SECTION_H=48 → 段0:4, 段2:4, 段3:2
    const secs = splitByY(data);
    const totalTris = secs.reduce((n, s) => n + s.indices.length / 3, 0);
    expect(totalTris).toBe(10); // 守恒（5 四边形 × 2 三角形）
    expect(secs.length).toBe(3); // y=10→段0, y=100→段2, y=150→段3
  });

  it('每段顶点 Y 集中在其分段附近（包围球才小）', () => {
    for (const s of splitByY(build([10, 100]))) {
      const ys: number[] = [];
      for (let i = 1; i < s.positions.length; i += 3) ys.push(s.positions[i]);
      const sec = Math.floor(Math.min(...ys) / SECTION_H);
      expect(Math.max(...ys)).toBeLessThan((sec + 1) * SECTION_H + 1.5); // 不跨出本段太多
    }
  });

  it('保留 uv/color/light 属性的对应关系', () => {
    const data = build([10]);
    data.uvs = new Float32Array([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]);
    data.light = new Float32Array([1, 0, 1, 0, 1, 0, 1, 0]);
    const [s] = splitByY(data);
    expect(s.uvs.length).toBe(8);
    expect(s.light?.length).toBe(8);
  });

  it('空数据 → 空数组', () => {
    expect(splitByY(build([]))).toEqual([]);
  });
});
