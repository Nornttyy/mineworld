export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface Player {
  pos: Vec3; // 脚部中心（AABB 底面中心）
  vel: Vec3; // 方块 / tick
  onGround: boolean;
}

export interface MoveIntent {
  forward: number; // -1..1
  right: number; // -1..1
  yaw: number; // 朝向（弧度）
  jump: boolean;
}

export interface VoxelWorld {
  isSolid(x: number, y: number, z: number): boolean;
  isWater?(x: number, y: number, z: number): boolean; // 可选：用于浮力/游泳
}

// 1:1 数值（每 tick），见 docs/minecraft-values.md
export const WIDTH = 0.6;
export const HEIGHT = 1.8;
export const EYE = 1.62;
export const GRAVITY = 0.08;
export const VDRAG = 0.98;
export const JUMP = 0.42;
export const WALK_PER_TICK = 4.317 / 20; // ≈0.216 b/tick 目标水平速度
