import { fbm2 } from '../math/noise';
import { biomeForest } from './terrain';

export type Biome = 'snow' | 'plains' | 'forest' | 'desert';

const TEMP_SCALE = 320; // 大尺度 → 群系成片
const COLD = 0.38;
const HOT = 0.66;

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
