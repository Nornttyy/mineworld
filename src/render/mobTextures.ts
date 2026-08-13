import * as THREE from 'three';
import type { MobKind } from '../core/entity/mob';

// 生物皮肤采用 64×64 像素图集。每个方盒部位按「顶/底/右/前/左/后」展开，
// 与经典方块生物的做法一致；所有线条均落在整数像素，无缩放绘制或抗锯齿。
export const MOB_SKIN_SIZE = 64;

export interface SkinPart {
  u: number;
  v: number;
  x: number; // 方盒 X 向贴图像素数
  y: number; // 方盒高度贴图像素数
  z: number; // 方盒 Z 向贴图像素数
}

export type SkinFace = 'right' | 'front' | 'left' | 'back' | 'top' | 'bottom';

export interface SkinRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

// 同一种生物只会使用 animalBody / humanBody 其中之一，因此它们可以共享图集区域。
export const MOB_SKIN_PARTS = {
  head: { u: 0, v: 0, x: 8, y: 8, z: 8 },
  snout: { u: 32, v: 0, x: 4, y: 3, z: 6 },
  animalBody: { u: 0, v: 16, x: 12, y: 8, z: 8 },
  humanBody: { u: 0, v: 16, x: 4, y: 12, z: 8 },
  leg: { u: 0, v: 36, x: 4, y: 12, z: 4 },
  arm: { u: 16, v: 36, x: 4, y: 12, z: 4 },
  wing: { u: 32, v: 16, x: 8, y: 6, z: 2 },
  tail: { u: 32, v: 36, x: 2, y: 8, z: 2 },
} as const satisfies Record<string, SkinPart>;

export type MobSkinPart = keyof typeof MOB_SKIN_PARTS;

/** 返回经典方盒皮肤展开中某一面的像素矩形。+X 是本项目生物的正面，对应 right。 */
export function skinFaceRect(part: SkinPart, face: SkinFace): SkinRect {
  const { u, v, x, y, z } = part;
  switch (face) {
    case 'top': return { x: u + z, y: v, w: x, h: z };
    case 'bottom': return { x: u + z + x, y: v, w: x, h: z };
    case 'right': return { x: u, y: v + z, w: z, h: y };
    case 'front': return { x: u + z, y: v + z, w: x, h: y };
    case 'left': return { x: u + z + x, y: v + z, w: z, h: y };
    case 'back': return { x: u + z + x + z, y: v + z, w: x, h: y };
  }
}

const cache = new Map<MobKind, THREE.CanvasTexture>();

function srand(seed: number): () => number {
  let state = seed % 2147483647;
  if (state <= 0) state += 2147483646;
  return () => (state = (state * 16807) % 2147483647) / 2147483647;
}

function rgb(hex: string): [number, number, number] {
  const n = Number.parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function shade(hex: string, amount: number): string {
  const [r, g, b] = rgb(hex);
  const c = (n: number): string => Math.max(0, Math.min(255, Math.round(n * amount))).toString(16).padStart(2, '0');
  return `#${c(r)}${c(g)}${c(b)}`;
}

function fill(ctx: CanvasRenderingContext2D, color: string, rect: SkinRect): void {
  ctx.fillStyle = color;
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
}

function pixel(ctx: CanvasRenderingContext2D, color: string, x: number, y: number, w = 1, h = 1): void {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

function paintBox(ctx: CanvasRenderingContext2D, part: SkinPart, base: string, accent: string, seed: number): void {
  const factors: Record<SkinFace, number> = {
    top: 1.08,
    bottom: 0.62,
    right: 0.96,
    front: 0.88,
    left: 0.78,
    back: 0.83,
  };
  const random = srand(seed);
  const faces: SkinFace[] = ['right', 'front', 'left', 'back', 'top', 'bottom'];
  for (const face of faces) {
    const rect = skinFaceRect(part, face);
    fill(ctx, shade(base, factors[face]), rect);
    const count = Math.max(2, Math.floor((rect.w * rect.h) / 12));
    for (let i = 0; i < count; i++) {
      pixel(
        ctx,
        shade(accent, factors[face]),
        rect.x + Math.floor(random() * rect.w),
        rect.y + Math.floor(random() * rect.h),
      );
    }
  }
}

function facePixel(
  ctx: CanvasRenderingContext2D,
  part: SkinPart,
  face: SkinFace,
  color: string,
  x: number,
  y: number,
  w = 1,
  h = 1,
): void {
  const rect = skinFaceRect(part, face);
  pixel(ctx, color, rect.x + x, rect.y + y, w, h);
}

function paintAnimal(ctx: CanvasRenderingContext2D, kind: 'pig' | 'cow' | 'sheep' | 'chicken'): void {
  const head = MOB_SKIN_PARTS.head;
  const body = MOB_SKIN_PARTS.animalBody;
  const leg = MOB_SKIN_PARTS.leg;
  const snout = MOB_SKIN_PARTS.snout;

  if (kind === 'pig') {
    paintBox(ctx, head, '#e7a39d', '#f0b2ab', 11);
    paintBox(ctx, body, '#e5a09a', '#d98e8b', 12);
    paintBox(ctx, leg, '#dc9692', '#c97f7d', 13);
    paintBox(ctx, snout, '#d88b8b', '#efaaa4', 14);
    facePixel(ctx, head, 'right', '#202020', 1, 2, 2, 2);
    facePixel(ctx, head, 'right', '#202020', 5, 2, 2, 2);
    facePixel(ctx, snout, 'right', '#7c4d55', 1, 1);
    facePixel(ctx, snout, 'right', '#7c4d55', 4, 1);
  } else if (kind === 'cow') {
    paintBox(ctx, head, '#554033', '#382b23', 21);
    paintBox(ctx, body, '#594435', '#3f3026', 22);
    paintBox(ctx, leg, '#4c382c', '#2f241d', 23);
    paintBox(ctx, snout, '#b9a28e', '#8e7663', 24);
    for (const face of ['right', 'front', 'left', 'back', 'top'] as const) {
      const rect = skinFaceRect(body, face);
      pixel(ctx, '#e7ddcd', rect.x + 1, rect.y + 1, Math.max(2, Math.floor(rect.w / 3)), Math.max(2, Math.floor(rect.h / 2)));
      pixel(ctx, '#e7ddcd', rect.x + Math.max(1, rect.w - 4), rect.y + Math.max(1, rect.h - 3), 3, 2);
    }
    facePixel(ctx, head, 'right', '#f0e7d9', 0, 0, 3, 5);
    facePixel(ctx, head, 'right', '#171717', 1, 2, 2, 2);
    facePixel(ctx, head, 'right', '#171717', 5, 2, 2, 2);
    facePixel(ctx, snout, 'right', '#4b3834', 1, 1);
    facePixel(ctx, snout, 'right', '#4b3834', 4, 1);
  } else if (kind === 'sheep') {
    paintBox(ctx, head, '#4a433d', '#625950', 31);
    paintBox(ctx, body, '#ece9e1', '#d7d3c9', 32);
    paintBox(ctx, leg, '#4a433d', '#312d29', 33);
    for (const face of ['front', 'back', 'top', 'right', 'left'] as const) {
      const rect = skinFaceRect(body, face);
      for (let y = 0; y < rect.h; y += 3) {
        for (let x = (y / 3) % 2; x < rect.w; x += 3) pixel(ctx, '#f8f6ef', rect.x + x, rect.y + y, 2, 2);
      }
    }
    facePixel(ctx, head, 'right', '#ece9e1', 0, 0, 8, 2);
    facePixel(ctx, head, 'right', '#171717', 1, 3, 2, 2);
    facePixel(ctx, head, 'right', '#171717', 5, 3, 2, 2);
  } else {
    paintBox(ctx, head, '#f1f1ef', '#d9d9d6', 41);
    paintBox(ctx, body, '#eeeeeb', '#d6d6d2', 42);
    paintBox(ctx, leg, '#d99020', '#a96917', 43);
    paintBox(ctx, MOB_SKIN_PARTS.wing, '#f7f7f5', '#d4d4d0', 44);
    facePixel(ctx, head, 'right', '#151515', 1, 2, 2, 2);
    facePixel(ctx, head, 'right', '#151515', 5, 2, 2, 2);
    facePixel(ctx, head, 'right', '#ffffff', 1, 2);
    facePixel(ctx, head, 'right', '#ffffff', 5, 2);
  }
}

function paintHumanoid(ctx: CanvasRenderingContext2D, kind: 'zombie' | 'skeleton' | 'husk'): void {
  const head = MOB_SKIN_PARTS.head;
  const body = MOB_SKIN_PARTS.humanBody;
  const arm = MOB_SKIN_PARTS.arm;
  const leg = MOB_SKIN_PARTS.leg;

  if (kind === 'skeleton') {
    paintBox(ctx, head, '#dcdcd0', '#bcbcaf', 71);
    paintBox(ctx, body, '#d8d8cc', '#9f9f91', 72);
    paintBox(ctx, arm, '#d6d6ca', '#a5a598', 73);
    paintBox(ctx, leg, '#d6d6ca', '#a5a598', 74);
    facePixel(ctx, head, 'right', '#1b1b1b', 1, 2, 2, 2);
    facePixel(ctx, head, 'right', '#1b1b1b', 5, 2, 2, 2);
    facePixel(ctx, head, 'right', '#77776d', 3, 4, 2, 1);
    facePixel(ctx, head, 'right', '#77776d', 1, 6, 6, 1);
    const front = skinFaceRect(body, 'right');
    pixel(ctx, '#9b9b8e', front.x + 3, front.y + 1, 2, 10);
    for (const y of [2, 5, 8]) {
      pixel(ctx, '#85857a', front.x, front.y + y, 3, 1);
      pixel(ctx, '#85857a', front.x + 5, front.y + y, 3, 1);
    }
    return;
  }

  const husk = kind === 'husk';
  const skin = husk ? '#b29a5e' : '#568746';
  const skinAccent = husk ? '#8f783f' : '#3f6e37';
  const shirt = husk ? '#b9a66d' : '#2f6a69';
  const shirtAccent = husk ? '#8c7645' : '#244f50';
  const pants = husk ? '#66542e' : '#2d3158';
  paintBox(ctx, head, skin, skinAccent, husk ? 67 : 61);
  paintBox(ctx, body, shirt, shirtAccent, husk ? 68 : 62);
  paintBox(ctx, arm, shirt, skin, husk ? 69 : 63);
  paintBox(ctx, leg, pants, shade(pants, 0.75), husk ? 70 : 64);
  for (const face of ['right', 'front', 'left', 'back'] as const) {
    const sleeve = skinFaceRect(arm, face);
    pixel(ctx, shade(skin, face === 'left' ? 0.8 : 0.95), sleeve.x, sleeve.y + 7, sleeve.w, 5);
  }
  facePixel(ctx, head, 'right', '#242022', 1, 2, 2, 1);
  facePixel(ctx, head, 'right', '#242022', 5, 2, 2, 1);
  facePixel(ctx, head, 'right', husk ? '#5e4724' : '#31562c', 2, 6, 4, 1);
  const torso = skinFaceRect(body, 'right');
  pixel(ctx, skinAccent, torso.x + 1, torso.y + 7, 2, 3);
  pixel(ctx, shade(shirt, 0.72), torso.x + 5, torso.y + 10, 3, 2);
}

function paintCreeper(ctx: CanvasRenderingContext2D): void {
  const head = MOB_SKIN_PARTS.head;
  const body = MOB_SKIN_PARTS.humanBody;
  paintBox(ctx, head, '#5d9f43', '#407c31', 81);
  paintBox(ctx, body, '#5a9840', '#3d762e', 82);
  paintBox(ctx, MOB_SKIN_PARTS.leg, '#4d8937', '#326628', 83);
  facePixel(ctx, head, 'right', '#101010', 1, 2, 2, 2);
  facePixel(ctx, head, 'right', '#101010', 5, 2, 2, 2);
  facePixel(ctx, head, 'right', '#101010', 3, 4, 2, 2);
  facePixel(ctx, head, 'right', '#101010', 2, 6, 2, 2);
  facePixel(ctx, head, 'right', '#101010', 4, 6, 2, 2);
}

function drawSkin(kind: MobKind, ctx: CanvasRenderingContext2D): void {
  ctx.clearRect(0, 0, MOB_SKIN_SIZE, MOB_SKIN_SIZE);
  ctx.imageSmoothingEnabled = false;
  if (kind === 'pig' || kind === 'cow' || kind === 'sheep' || kind === 'chicken') paintAnimal(ctx, kind);
  else if (kind === 'creeper') paintCreeper(ctx);
  else paintHumanoid(ctx, kind);
}

export function mobTexture(kind: MobKind): THREE.CanvasTexture {
  const cached = cache.get(kind);
  if (cached) return cached;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = MOB_SKIN_SIZE;
  const ctx = canvas.getContext('2d');
  if (ctx) drawSkin(kind, ctx);
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  cache.set(kind, texture);
  return texture;
}
