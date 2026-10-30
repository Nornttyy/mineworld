export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface Player {
  pos: Vec3; // 脚部中心（AABB 底面中心）
  vel: Vec3; // 方块 / tick
  onGround: boolean;
  crouching?: boolean; // 实际矮姿态；头顶受限时可与 crouch 按键不同，旧存档缺省直立
  kbx?: number; // 待并入下一刻水平惯性的击退冲量；step 消费后归零。
  kbz?: number;
  jumpDelayTicks?: number; // 持续按住跳跃时的 10 刻重跳间隔，松开清零；旧存档缺省为 0。
  didJumpFromGround?: boolean; // 仅该次 step 实际起跳时为 true，供音效/饥饿消耗消费。
}

export interface MoveIntent {
  forward: number; // -1..1
  right: number; // -1..1
  yaw: number; // 朝向（弧度）
  jump: boolean; // 起跳（边沿，一次按键一次）
  jumpHeld?: boolean; // 持续按住空格：落地后允许继续跳，受 jumpDelayTicks 控制。
  sprint?: boolean; // 疾跑（双击 W）
  swimUp?: boolean; // 水中上浮（空格按住）
  crouch?: boolean; // 下蹲（Shift/C）：碰撞变矮 + 减速 + 贴地时不走下方块边缘
  slow?: boolean; // 减速（吃东西/用物品时，同 MC 速度降到约 20%）
  fly?: boolean; // 创造飞行：无重力，竖直由 flyUp/flyDown 控制（双击空格切换，游戏层维护）
  flyUp?: boolean; // 飞行中上升（空格按住）
  flyDown?: boolean; // 飞行中下降（Shift 按住）
}

export interface VoxelWorld {
  isSolid(x: number, y: number, z: number): boolean;
  isWater?(x: number, y: number, z: number): boolean; // 可选：用于浮力/游泳
  getBlock?(x: number, y: number, z: number): number; // 可选：用于脚下方块滑度（冰面等）
}

// Default Java 26.3 constants verified in the official client; see physics-26.3-audit.md.
export const WIDTH = 0.6;
export const HEIGHT = 1.8;
export const EYE = 1.62;
export const CROUCH_HEIGHT = 1.5; // 现代 Java 站立潜行姿态，不等同于 0.6 格高的爬行
export const CROUCH_EYE = 1.27;
export const CROUCH_SPEED_MULT = 0.3; // 下蹲移动倍率（同 MC sneak ≈0.3）
export const SLOW_SPEED_MULT = 0.2; // 用物品(吃东西)移动倍率（同 MC ≈0.2）
export const GRAVITY = 0.08;
export const VDRAG = Math.fround(0.98);
export const JUMP = Math.fround(0.42);
export const INPUT_DAMPING = Math.fround(0.98);
export const MOVEMENT_SPEED = Math.fround(0.1);
export const SPRINT_MOVEMENT_SPEED = Math.fround(MOVEMENT_SPEED * (1 + Math.fround(0.3)));
export const HORIZONTAL_DRAG = Math.fround(0.91);
export const AIR_ACCELERATION = Math.fround(0.02);
export const SPRINT_AIR_ACCELERATION = Math.fround(0.025999999);
export const WATER_ACCELERATION = Math.fround(0.02);
export const WATER_DRAG = Math.fround(0.8);
export const WATER_SPRINT_DRAG = Math.fround(0.9);
export const LIQUID_JUMP_IMPULSE = Math.fround(0.04);
export const VELOCITY_EPSILON = 0.003;
// Descriptive steady-state distances; do not assign these directly as velocity.
export const WALK_PER_TICK =
  (INPUT_DAMPING * MOVEMENT_SPEED) / (1 - Math.fround(Math.fround(0.6) * HORIZONTAL_DRAG));
export const SPRINT_PER_TICK =
  (INPUT_DAMPING * SPRINT_MOVEMENT_SPEED) / (1 - Math.fround(Math.fround(0.6) * HORIZONTAL_DRAG));
// 创造飞行（每 tick）：水平约 2× 行走，疾跑再翻倍；竖直与水平同档。无重力。
export const FLY_PER_TICK = 0.42;
export const FLY_SPRINT_PER_TICK = 0.84;
export const FLY_VERT_PER_TICK = 0.42;

export function playerEyeHeight(player: Pick<Player, 'crouching'>): number {
  return player.crouching ? CROUCH_EYE : EYE;
}

export function playerHeight(player: Pick<Player, 'crouching'>): number {
  return player.crouching ? CROUCH_HEIGHT : HEIGHT;
}
