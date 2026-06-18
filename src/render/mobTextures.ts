import * as THREE from 'three';
import type { MobKind } from '../core/entity/mob';

// 程序生成的生物「身体」像素贴图（MC 风：牛斑/羊卷毛/猪皮/鸡羽）。贴到盒模型身体面，
// 配合 vertexColors 的烤光 + 个体染色一起用。每种缓存一张，NearestFilter 保持像素硬边。
const cache = new Map<MobKind, THREE.CanvasTexture>();

// 确定性 RNG（同种动物同花纹）
function srand(seed: number): () => number {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function draw(kind: MobKind, ctx: CanvasRenderingContext2D, S: number): void {
  const fill = (col: string, x: number, y: number, w = 1, h = 1): void => {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
  };
  if (kind === 'pig') {
    fill('#e7a39d', 0, 0, S, S); // 粉底
    const r = srand(11);
    for (let i = 0; i < 14; i++) fill(r() > 0.5 ? '#dd9890' : '#efb0aa', Math.floor(r() * S), Math.floor(r() * S)); // 皮肤斑驳
    fill('#d98c8c', 0, S - 2, S, 2); // 肚子下沿略深
  } else if (kind === 'cow') {
    fill('#5b4636', 0, 0, S, S); // 棕底
    ctx.fillStyle = '#e7ddcd'; // 白斑（不规则）
    for (const [x, y, w, h] of [
      [2, 2, 5, 4],
      [9, 7, 6, 5],
      [3, 10, 4, 4],
      [12, 1, 3, 4],
      [7, 4, 2, 2],
    ])
      ctx.fillRect(x, y, w, h);
    const r = srand(23);
    for (let i = 0; i < 6; i++) fill('#4a3a2c', Math.floor(r() * S), Math.floor(r() * S)); // 棕色阴影点
  } else if (kind === 'sheep') {
    fill('#ece9e1', 0, 0, S, S); // 羊毛底
    const r = srand(31);
    for (let i = 0; i < 30; i++) {
      const c = r() > 0.55 ? '#dcd8cc' : '#f7f5ef';
      fill(c, Math.floor(r() * S), Math.floor(r() * S), 2, 2); // 卷毛簇
    }
  } else {
    fill('#f1f1f1', 0, 0, S, S); // 白底
    const r = srand(41);
    for (let i = 0; i < 10; i++) fill('#e0e0e0', Math.floor(r() * S), Math.floor(r() * S), 1, 2); // 羽毛纹
    fill('#dadada', 0, S - 2, S, 2);
  }
}

export function bodyTexture(kind: MobKind): THREE.CanvasTexture {
  let t = cache.get(kind);
  if (t) return t;
  const S = 16;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d');
  if (ctx) draw(kind, ctx, S);
  t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  cache.set(kind, t);
  return t;
}
