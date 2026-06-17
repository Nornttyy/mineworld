import type { Vec3 } from '../physics/player';

export interface RayHit {
  x: number; // 命中方块坐标
  y: number;
  z: number;
  nx: number; // 命中面法线（指向射线来向；放置格 = 命中方块 + 法线）
  ny: number;
  nz: number;
}

// 体素 DDA 射线（Amanatides & Woo）：沿 dir 步进格子，命中第一个实心方块即返回。
export function raycastVoxel(
  origin: Vec3,
  dir: Vec3,
  maxDist: number,
  isSolid: (x: number, y: number, z: number) => boolean,
): RayHit | null {
  let x = Math.floor(origin.x);
  let y = Math.floor(origin.y);
  let z = Math.floor(origin.z);
  const stepX = Math.sign(dir.x);
  const stepY = Math.sign(dir.y);
  const stepZ = Math.sign(dir.z);
  const tDeltaX = dir.x !== 0 ? Math.abs(1 / dir.x) : Infinity;
  const tDeltaY = dir.y !== 0 ? Math.abs(1 / dir.y) : Infinity;
  const tDeltaZ = dir.z !== 0 ? Math.abs(1 / dir.z) : Infinity;
  const boundary = (o: number, step: number): number =>
    step > 0 ? Math.floor(o) + 1 - o : step < 0 ? o - Math.floor(o) : Infinity;
  let tMaxX = dir.x !== 0 ? boundary(origin.x, stepX) * tDeltaX : Infinity;
  let tMaxY = dir.y !== 0 ? boundary(origin.y, stepY) * tDeltaY : Infinity;
  let tMaxZ = dir.z !== 0 ? boundary(origin.z, stepZ) * tDeltaZ : Infinity;

  if (isSolid(x, y, z)) return { x, y, z, nx: 0, ny: 0, nz: 0 };

  let t = 0;
  for (let i = 0; i < 256; i++) {
    let nx = 0;
    let ny = 0;
    let nz = 0;
    if (tMaxX < tMaxY && tMaxX < tMaxZ) {
      x += stepX;
      t = tMaxX;
      tMaxX += tDeltaX;
      nx = -stepX;
    } else if (tMaxY < tMaxZ) {
      y += stepY;
      t = tMaxY;
      tMaxY += tDeltaY;
      ny = -stepY;
    } else {
      z += stepZ;
      t = tMaxZ;
      tMaxZ += tDeltaZ;
      nz = -stepZ;
    }
    if (t > maxDist) break;
    if (isSolid(x, y, z)) return { x, y, z, nx, ny, nz };
  }
  return null;
}
