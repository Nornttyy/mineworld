import {
  type Player,
  type MoveIntent,
  type VoxelWorld,
  type Vec3,
  WIDTH,
  HEIGHT,
  GRAVITY,
  VDRAG,
  JUMP,
  WALK_PER_TICK,
} from './player';

const HW = WIDTH / 2;
type Axis = 'x' | 'y' | 'z';

// 玩家 AABB 是否与任一实心体素重叠
function overlaps(p: Vec3, world: VoxelWorld): boolean {
  const e = 1e-6;
  const x0 = Math.floor(p.x - HW + e);
  const x1 = Math.ceil(p.x + HW - e) - 1;
  const y0 = Math.floor(p.y + e);
  const y1 = Math.ceil(p.y + HEIGHT - e) - 1;
  const z0 = Math.floor(p.z - HW + e);
  const z1 = Math.ceil(p.z + HW - e) - 1;
  for (let y = y0; y <= y1; y++)
    for (let x = x0; x <= x1; x++)
      for (let z = z0; z <= z1; z++) if (world.isSolid(x, y, z)) return true;
  return false;
}

// 沿单轴扫掠移动 delta；碰撞则精确钳到接触面。返回是否撞到。
function resolveAxis(p: Vec3, axis: Axis, delta: number, world: VoxelWorld): boolean {
  if (delta === 0) return false;
  const sign = Math.sign(delta);
  const SUB = 0.2; // 子步 ≤0.2 < 0.6 AABB，防高速穿越
  let remaining = Math.abs(delta);
  while (remaining > 1e-9) {
    const amt = Math.min(remaining, SUB) * sign;
    remaining -= Math.abs(amt);
    p[axis] += amt;
    if (overlaps(p, world)) {
      p[axis] -= amt; // 退回，再二分逼近接触面
      let fine = amt / 2;
      for (let i = 0; i < 24 && Math.abs(fine) > 1e-5; i++) {
        p[axis] += fine;
        if (overlaps(p, world)) p[axis] -= fine;
        fine /= 2;
      }
      return true;
    }
  }
  return false;
}

// 由意图与朝向求水平单位方向（yaw=0 时 forward=+X）
function wishDir(intent: MoveIntent): { x: number; z: number } {
  const c = Math.cos(intent.yaw);
  const s = Math.sin(intent.yaw);
  let x = intent.forward * c - intent.right * s;
  let z = intent.forward * s + intent.right * c;
  const len = Math.hypot(x, z);
  if (len > 1e-9) {
    x /= len;
    z /= len;
  } else {
    x = 0;
    z = 0;
  }
  return { x, z };
}

// 脚下极薄一层是否实心（独立于速度的贴地检测，避免 vy≈0 时误判）
function isOnGround(pos: Vec3, world: VoxelWorld): boolean {
  if (overlaps(pos, world)) return false;
  return overlaps({ x: pos.x, y: pos.y - 0.06, z: pos.z }, world);
}

/** 一个 tick 的玩家模拟（纯函数）：跳跃 → 水平意图 → 逐轴扫掠碰撞 → 末尾施加重力。 */
export function step(player: Player, intent: MoveIntent, world: VoxelWorld): Player {
  const pos: Vec3 = { ...player.pos };
  const vel: Vec3 = { ...player.vel };

  // 起跳判定用"移动前"的贴地状态
  if (isOnGround(pos, world) && intent.jump) vel.y = JUMP;

  const wish = wishDir(intent);
  vel.x = wish.x * WALK_PER_TICK;
  vel.z = wish.z * WALK_PER_TICK;

  // 逐轴扫掠解算：先 Y，再 X、Z（撞到则该轴速度归零）
  if (resolveAxis(pos, 'y', vel.y, world)) vel.y = 0;
  if (resolveAxis(pos, 'x', vel.x, world)) vel.x = 0;
  if (resolveAxis(pos, 'z', vel.z, world)) vel.z = 0;

  // ⚠️ 重力放在移动之后：起跳第一帧能升满 0.42 → 跳高 ≈1.25 格（同 MC），跳得上一格方块
  const onGround = isOnGround(pos, world);
  if (onGround) {
    vel.y = 0;
  } else {
    vel.y = (vel.y - GRAVITY) * VDRAG;
  }

  return { pos, vel, onGround };
}
