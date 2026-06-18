import type { VoxelWorld, Vec3 } from './player';

// 通用 AABB 扫掠步进：把一个宽 w(footprint w×w)、高 h、脚部中心在 pos 的盒子，按 vel 推进，
// 逐轴解算与实心体素的碰撞（撞到则精确钳到接触面、该轴速度归零），并报告是否贴地。
// 与玩家 step.ts 同算法，但尺寸参数化，供实体(生物)复用；不施加重力(交给调用方)。
type Axis = 'x' | 'y' | 'z';

export interface SweepResult {
  pos: Vec3;
  vel: Vec3;
  onGround: boolean;
}

// 盒子在 pos 处是否与任一实心体素重叠（hw=w/2）
function overlaps(p: Vec3, hw: number, h: number, world: VoxelWorld): boolean {
  const e = 1e-6;
  const x0 = Math.floor(p.x - hw + e);
  const x1 = Math.ceil(p.x + hw - e) - 1;
  const y0 = Math.floor(p.y + e);
  const y1 = Math.ceil(p.y + h - e) - 1;
  const z0 = Math.floor(p.z - hw + e);
  const z1 = Math.ceil(p.z + hw - e) - 1;
  for (let y = y0; y <= y1; y++)
    for (let x = x0; x <= x1; x++)
      for (let z = z0; z <= z1; z++) if (world.isSolid(x, y, z)) return true;
  return false;
}

// 沿单轴扫掠 delta；碰撞则二分逼近接触面。返回是否撞到。
function resolveAxis(p: Vec3, axis: Axis, delta: number, hw: number, h: number, world: VoxelWorld): boolean {
  if (delta === 0) return false;
  const sign = Math.sign(delta);
  const SUB = 0.2; // 子步 < 最小 AABB(0.4)，防高速穿越
  let remaining = Math.abs(delta);
  while (remaining > 1e-9) {
    const amt = Math.min(remaining, SUB) * sign;
    remaining -= Math.abs(amt);
    p[axis] += amt;
    if (overlaps(p, hw, h, world)) {
      p[axis] -= amt;
      let fine = amt / 2;
      for (let i = 0; i < 24 && Math.abs(fine) > 1e-5; i++) {
        p[axis] += fine;
        if (overlaps(p, hw, h, world)) p[axis] -= fine;
        fine /= 2;
      }
      return true;
    }
  }
  return false;
}

// 脚下极薄一层是否实心（独立于速度的贴地检测）
function isOnGround(p: Vec3, hw: number, h: number, world: VoxelWorld): boolean {
  if (overlaps(p, hw, h, world)) return false;
  return overlaps({ x: p.x, y: p.y - 0.06, z: p.z }, hw, h, world);
}

export function sweepAabb(pos: Vec3, w: number, h: number, vel: Vec3, world: VoxelWorld): SweepResult {
  const hw = w / 2;
  const p: Vec3 = { ...pos };
  const v: Vec3 = { ...vel };
  if (resolveAxis(p, 'y', v.y, hw, h, world)) v.y = 0;
  if (resolveAxis(p, 'x', v.x, hw, h, world)) v.x = 0;
  if (resolveAxis(p, 'z', v.z, hw, h, world)) v.z = 0;
  return { pos: p, vel: v, onGround: isOnGround(p, hw, h, world) };
}
