export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface Player {
  pos: Vec3; // 脚部中心（AABB 底面中心）
  vel: Vec3; // 方块 / tick
  onGround: boolean;
  kbx?: number; // 被击退的水平速度(格/tick)，叠加到移动上并逐刻衰减；缺省=0(无击退)
  kbz?: number;
}

export const KB_DECAY = 0.6; // 击退每 tick 衰减系数(约 4~5 tick 退完)

export interface MoveIntent {
  forward: number; // -1..1
  right: number; // -1..1
  yaw: number; // 朝向（弧度）
  jump: boolean; // 起跳（边沿，一次按键一次）
  sprint?: boolean; // 疾跑（双击 W）
  swimUp?: boolean; // 水中上浮（空格按住）
  crouch?: boolean; // 下蹲（Shift/C）：碰撞变矮 + 减速 + 贴地时不走下方块边缘
  slow?: boolean; // 减速（吃东西/用物品时，同 MC 速度降到约 20%）
}

export interface VoxelWorld {
  isSolid(x: number, y: number, z: number): boolean;
  isWater?(x: number, y: number, z: number): boolean; // 可选：用于浮力/游泳
}

// 1:1 数值（每 tick），见 docs/minecraft-values.md
export const WIDTH = 0.6;
export const HEIGHT = 1.8;
export const EYE = 1.62;
export const CROUCH_HEIGHT = 1.25; // 下蹲时碰撞箱高度
export const CROUCH_EYE = 1.1; // 下蹲时视点高度（相机下沉）
export const CROUCH_SPEED_MULT = 0.3; // 下蹲移动倍率（同 MC sneak ≈0.3）
export const SLOW_SPEED_MULT = 0.2; // 用物品(吃东西)移动倍率（同 MC ≈0.2）
export const GRAVITY = 0.08;
export const VDRAG = 0.98;
export const JUMP = 0.42;
export const WALK_PER_TICK = 4.317 / 20; // ≈0.216 b/tick 行走速度（同 MC）
export const SPRINT_PER_TICK = 5.612 / 20; // ≈0.281 b/tick 疾跑速度（同 MC）
