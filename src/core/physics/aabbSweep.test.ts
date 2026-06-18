import { describe, it, expect } from 'vitest';
import { sweepAabb } from './aabbSweep';
import type { VoxelWorld } from './player';

describe('sweepAabb（参数化 AABB 扫掠，供实体物理复用）', () => {
  it('下落落到实心地面顶部：脚停在 y=0，onGround=true，竖直速度归零', () => {
    const world: VoxelWorld = { isSolid: (_x, y) => y < 0 }; // y<0 实心，地面顶=y=0
    const r = sweepAabb({ x: 0.5, y: 2, z: 0.5 }, 0.9, 0.9, { x: 0, y: -5, z: 0 }, world);
    expect(r.pos.y).toBeCloseTo(0, 4);
    expect(r.onGround).toBe(true);
    expect(r.vel.y).toBe(0);
  });

  it('水平撞墙：右缘停在墙面(x=1)，x 速度归零', () => {
    const world: VoxelWorld = { isSolid: (x) => x >= 1 }; // x≥1 的格实心
    const r = sweepAabb({ x: 0.5, y: 0, z: 0.5 }, 0.6, 1, { x: 1, y: 0, z: 0 }, world);
    expect(r.pos.x).toBeCloseTo(0.7, 2); // 右缘 pos.x+0.3 ≈ 1
    expect(r.vel.x).toBe(0);
  });

  it('空中无阻挡：完整移动，onGround=false', () => {
    const world: VoxelWorld = { isSolid: () => false };
    const r = sweepAabb({ x: 0, y: 5, z: 0 }, 0.4, 0.7, { x: 0.2, y: 0, z: 0.3 }, world);
    expect(r.pos.x).toBeCloseTo(0.2, 5);
    expect(r.pos.z).toBeCloseTo(0.3, 5);
    expect(r.onGround).toBe(false);
  });

  it('尺寸参数化：站在地面上、平移不应穿墙（宽体更早被挡）', () => {
    const world: VoxelWorld = { isSolid: (x, y) => y < 0 || x >= 2 };
    const r = sweepAabb({ x: 0.5, y: 0, z: 0.5 }, 0.9, 1.3, { x: 5, y: 0, z: 0 }, world);
    expect(r.pos.x).toBeCloseTo(1.55, 2); // 宽 0.9 → 右缘 pos.x+0.45 ≈ 2
    expect(r.vel.x).toBe(0);
    expect(r.onGround).toBe(true);
  });
});
