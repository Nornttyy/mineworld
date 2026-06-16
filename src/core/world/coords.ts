export const SECTION = 16;

// ⚠️ 负坐标：区块坐标用算术右移(=向下取整)，局部坐标用 &15，不能用 /16|0 或 %16
export const worldToChunk = (w: number): number => w >> 4;
export const localCoord = (w: number): number => w & 15;

// 区块内线性索引：idx = x | (z<<4) | (y<<8)
export const idx = (x: number, y: number, z: number): number => x | (z << 4) | (y << 8);
