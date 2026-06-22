import { fbm2 } from '../math/noise';

export type Biome = 'snow' | 'plains' | 'forest' | 'desert';

const TEMP_SCALE = 320; // 大尺度 → 群系成片
const COLD = 0.38;
const HOT = 0.66;

// 生物群系：大尺度噪声把世界分成平原(开阔、几乎无树)与森林(密树)，中间平滑过渡。
// 返回 0..1：<0.45 平原，>0.62 森林，之间过渡带。
// 已从 terrain.ts 移至此处（避免 terrain↔biome 循环依赖）；terrain.ts re-export 此函数。
export function biomeForest(wx: number, wz: number, seed: number): number {
  return fbm2(wx / 130, wz / 130, seed + 4321, 2);
}

// 0..1：大尺度气温场，独立 seed 偏移，避免与高度/森林噪声相关。
export function temperatureAt(wx: number, wz: number, seed: number): number {
  return fbm2(wx / TEMP_SCALE, wz / TEMP_SCALE, seed + 9001, 3);
}

export function biomeAt(wx: number, wz: number, seed: number): Biome {
  const t = temperatureAt(wx, wz, seed);
  if (t < COLD) return 'snow';
  if (t > HOT) return 'desert';
  return biomeForest(wx, wz, seed) > 0.62 ? 'forest' : 'plains'; // 温带内用现有森林噪声
}
