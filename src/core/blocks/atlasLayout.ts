/** 方块图集的唯一布局定义。渲染、网格、手持和掉落物都必须从这里读取。 */
export const ATLAS_COLUMNS = 4;
export const ATLAS_ROWS = 12;
export const CLASSIC_ATLAS_TILE_PX = 16;

export function atlasPixelSize(tilePixels: number): readonly [number, number] {
  return [ATLAS_COLUMNS * tilePixels, ATLAS_ROWS * tilePixels];
}

/**
 * 把每格 UV 收到最外圈纹素中心。UV 若落在格子边界，GPU 舍入或线性采样会读到
 * 相邻材质；典型表现就是夜间仙人掌沾到熔岩橙线、沙子出现邻格黑线。
 */
export function atlasUvInset(tilePixels: number): readonly [number, number] {
  return [0.5 / (ATLAS_COLUMNS * tilePixels), 0.5 / (ATLAS_ROWS * tilePixels)];
}

/** 与地形 shader 相同的 UV→格子计算，供边界和发光材质回归测试。 */
export function atlasTileAtUv(u: number, v: number): number {
  const column = Math.min(ATLAS_COLUMNS - 1, Math.max(0, Math.floor(u * ATLAS_COLUMNS)));
  const row = Math.min(ATLAS_ROWS - 1, Math.max(0, Math.floor((1 - v) * ATLAS_ROWS)));
  return column + row * ATLAS_COLUMNS;
}
