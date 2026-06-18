import * as THREE from 'three';

export const HORIZON_COLOR = 0xcfe6f7; // 地平线/雾色（浅蓝）
export type RGB = [number, number, number];

const DAY_TOP: RGB = [0.3, 0.52, 0.79]; // 白天天顶
const DAY_HORIZON: RGB = [0.81, 0.9, 0.97]; // 白天地平线

const css = (c: RGB): string => `rgb(${Math.round(c[0] * 255)},${Math.round(c[1] * 255)},${Math.round(c[2] * 255)})`;

// 把竖向天空渐变（天顶 top → 中段 → 地平线 horizon）画进 2×256 的 canvas。中段取两端平均。
export function drawSkyGradient(ctx: CanvasRenderingContext2D, top: RGB, horizon: RGB): void {
  const mid: RGB = [(top[0] + horizon[0]) / 2, (top[1] + horizon[1]) / 2, (top[2] + horizon[2]) / 2];
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, css(top));
  g.addColorStop(0.55, css(mid));
  g.addColorStop(1, css(horizon));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 2, 256);
}

// 竖向渐变天空（白天配色）。用作场景背景 / 主菜单背景。
export function makeSkyTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 2;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) drawSkyGradient(ctx, DAY_TOP, DAY_HORIZON);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
