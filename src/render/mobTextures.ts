import * as THREE from 'three';
import type { MobKind } from '../core/entity/mob';

// 程序生成的生物像素贴图(MC 风)。身体(bodyTexture):牛斑/羊卷毛/猪皮/鸡羽/僵尸破衫/骷髅肋骨。
// 头(headTexture,仅僵尸/骷髅):绿烂皮 / 裂骨。配合 vertexColors 烤光 + 个体染色。NearestFilter 像素硬边。
const cache = new Map<string, THREE.CanvasTexture>();

function srand(seed: number): () => number {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

function makeTex(key: string, paint: (ctx: CanvasRenderingContext2D, S: number) => void): THREE.CanvasTexture {
  let t = cache.get(key);
  if (t) return t;
  const S = 16;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d');
  if (ctx) paint(ctx, S);
  t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, t);
  return t;
}

function drawBody(kind: MobKind, ctx: CanvasRenderingContext2D, S: number): void {
  const fill = (col: string, x: number, y: number, w = 1, h = 1): void => {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
  };
  if (kind === 'pig') {
    fill('#e7a39d', 0, 0, S, S);
    const r = srand(11);
    for (let i = 0; i < 14; i++) fill(r() > 0.5 ? '#dd9890' : '#efb0aa', Math.floor(r() * S), Math.floor(r() * S));
    fill('#d98c8c', 0, S - 2, S, 2);
  } else if (kind === 'cow') {
    fill('#5b4636', 0, 0, S, S);
    ctx.fillStyle = '#e7ddcd';
    for (const [x, y, w, h] of [[2, 2, 5, 4], [9, 7, 6, 5], [3, 10, 4, 4], [12, 1, 3, 4], [7, 4, 2, 2]]) ctx.fillRect(x, y, w, h);
    const r = srand(23);
    for (let i = 0; i < 6; i++) fill('#4a3a2c', Math.floor(r() * S), Math.floor(r() * S));
  } else if (kind === 'sheep') {
    fill('#ece9e1', 0, 0, S, S);
    const r = srand(31);
    for (let i = 0; i < 30; i++) fill(r() > 0.55 ? '#dcd8cc' : '#f7f5ef', Math.floor(r() * S), Math.floor(r() * S), 2, 2);
  } else if (kind === 'zombie') {
    fill('#2f6a6a', 0, 0, S, S); // 青衫底
    const r = srand(51);
    for (let i = 0; i < 12; i++) fill(r() > 0.5 ? '#234e4e' : '#356f6f', Math.floor(r() * S), Math.floor(r() * S), 1 + Math.floor(r() * 2), 1 + Math.floor(r() * 2)); // 磨损斑
    fill('#5a8f4a', 4, 9, 3, 3); // 破洞露绿皮
    fill('#4f7e42', 5, 10, 1, 1);
    for (let x = 0; x < S; x++) if (srand(90 + x)() > 0.45) fill('#264f4f', x, S - 1, 1, 1); // 破烂下摆
  } else if (kind === 'skeleton') {
    fill('#d8d8cc', 0, 0, S, S); // 骨白底
    fill('#c6c6b8', 7, 1, 2, S - 2); // 胸骨竖
    for (const y of [3, 6, 9, 12]) {
      fill('#9c9c8e', 1, y, 6, 1);
      fill('#9c9c8e', 9, y, 6, 1); // 左右肋
      fill('#84847a', 1, y + 1, 6, 1);
      fill('#84847a', 9, y + 1, 6, 1); // 肋下影
    }
  } else if (kind === 'creeper') {
    fill('#5fa044', 0, 0, S, S); // 苦力怕绿底
    const r = srand(81);
    for (let i = 0; i < 22; i++)
      fill(r() > 0.5 ? '#4d8a36' : '#6fb050', Math.floor(r() * S), Math.floor(r() * S), 1, 1 + Math.floor(r() * 2)); // 深浅绿斑(苦力怕斑驳)
  } else {
    fill('#f1f1f1', 0, 0, S, S); // 鸡:白羽
    const r = srand(41);
    for (let i = 0; i < 10; i++) fill('#e0e0e0', Math.floor(r() * S), Math.floor(r() * S), 1, 2);
    fill('#dadada', 0, S - 2, S, 2);
  }
}

function drawHead(kind: 'zombie' | 'skeleton', ctx: CanvasRenderingContext2D, S: number): void {
  const fill = (col: string, x: number, y: number, w = 1, h = 1): void => {
    ctx.fillStyle = col;
    ctx.fillRect(x, y, w, h);
  };
  if (kind === 'zombie') {
    fill('#5a8f4a', 0, 0, S, S); // 绿皮
    const r = srand(61);
    for (let i = 0; i < 18; i++) fill(r() > 0.5 ? '#4c7a3e' : '#6aa055', Math.floor(r() * S), Math.floor(r() * S)); // 腐烂斑驳
    fill('#3f6a34', 0, S - 2, S, 2); // 下颌阴影
  } else {
    fill('#dcdcd0', 0, 0, S, S); // 骨白
    const r = srand(71);
    for (let i = 0; i < 9; i++) fill('#bdbdb0', Math.floor(r() * S), Math.floor(r() * S), 1, 1 + Math.floor(r() * 2)); // 裂纹/阴影
  }
}

export function bodyTexture(kind: MobKind): THREE.CanvasTexture {
  return makeTex('b-' + kind, (ctx, S) => drawBody(kind, ctx, S));
}

// 头部贴图：仅僵尸/骷髅有(绿烂皮 / 裂骨)；其它动物用纯色头，返回 null。
export function headTexture(kind: MobKind): THREE.CanvasTexture | null {
  if (kind !== 'zombie' && kind !== 'skeleton') return null;
  return makeTex('h-' + kind, (ctx, S) => drawHead(kind, ctx, S));
}
