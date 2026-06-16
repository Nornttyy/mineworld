import * as THREE from 'three';

export const HORIZON_COLOR = 0xcfe6f7; // 地平线/雾色（浅蓝）

// 竖向渐变天空：顶部深蓝 → 地平线浅蓝。用作场景背景。
export function makeSkyTexture(): THREE.Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 2;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const g = ctx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, '#4d86c9'); // 天顶
    g.addColorStop(0.55, '#82b4e3');
    g.addColorStop(1, '#cfe6f7'); // 地平线
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 2, 256);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
