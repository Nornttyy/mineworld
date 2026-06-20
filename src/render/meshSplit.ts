import type { MeshData } from '../core/mesh/mesher';
import { CHUNK_H } from '../core/world/chunk';

// 竖直分段高度（格）：把区块整列(CHUNK_H=192)网格切成 ceil(192/48)=4 段。
// 整列网格的包围球半径≈CHUNK_H/2，几乎永远与视锥相交、剔不掉 → 视野外(尤其身后)的区块也全画，
// 三角形爆炸。切成矮段后每段包围球小(半径≈√((CHUNK_W/2)²+(SECTION_H/2)²×…))，three.js 的视锥剔除
// 就能剔掉身后/上下方的段，每帧画的三角形大减。
export const SECTION_H = 48;

// 把一份区块整列 MeshData 按三角形重心 Y 切成若干竖直段，每段重建紧凑顶点+索引（独立 geometry）。
export function splitByY(data: MeshData): MeshData[] {
  const idx = data.indices;
  if (idx.length === 0) return [];
  const pos = data.positions;
  const nSec = Math.ceil(CHUNK_H / SECTION_H);
  const buckets: number[][] = [];
  for (let s = 0; s < nSec; s++) buckets.push([]);

  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t];
    const b = idx[t + 1];
    const c = idx[t + 2];
    const yc = (pos[a * 3 + 1] + pos[b * 3 + 1] + pos[c * 3 + 1]) / 3; // 三角形重心 Y
    let s = Math.floor(yc / SECTION_H);
    if (s < 0) s = 0;
    else if (s >= nSec) s = nSec - 1;
    buckets[s].push(a, b, c);
  }

  const hasLight = !!(data.light && data.light.length);
  const hasTop = !!(data.top && data.top.length);
  const out: MeshData[] = [];
  for (const bucket of buckets) {
    if (bucket.length === 0) continue;
    const remap = new Map<number, number>(); // 原顶点下标 → 本段紧凑下标
    const P: number[] = [];
    const U: number[] = [];
    const C: number[] = [];
    const L: number[] = [];
    const T: number[] = [];
    const I = new Uint32Array(bucket.length);
    for (let i = 0; i < bucket.length; i++) {
      const v = bucket[i];
      let nv = remap.get(v);
      if (nv === undefined) {
        nv = P.length / 3;
        remap.set(v, nv);
        P.push(pos[v * 3], pos[v * 3 + 1], pos[v * 3 + 2]);
        U.push(data.uvs[v * 2], data.uvs[v * 2 + 1]);
        C.push(data.colors[v * 3], data.colors[v * 3 + 1], data.colors[v * 3 + 2]);
        if (hasLight) L.push(data.light![v * 2], data.light![v * 2 + 1]);
        if (hasTop) T.push(data.top![v]);
      }
      I[i] = nv;
    }
    const verts = P.length / 3;
    out.push({
      positions: new Float32Array(P),
      uvs: new Float32Array(U),
      colors: new Float32Array(C),
      indices: verts <= 65535 ? new Uint16Array(I) : new Uint32Array(I), // 顶点没超 Uint16 就用窄索引
      light: hasLight ? new Float32Array(L) : undefined,
      top: hasTop ? new Float32Array(T) : undefined,
    });
  }
  return out;
}
