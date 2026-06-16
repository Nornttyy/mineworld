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
  let x = intent.forward * c + intent.right * s;
  let z = intent.forward * s - intent.right * c;
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

/** 一个 tick 的玩家模拟（纯函数）：跳跃 → 重力 → 水平意图 → 逐轴扫掠碰撞。 */
export function step(player: Player, intent: MoveIntent, world: VoxelWorld): Player {
  const vel: Vec3 = { ...player.vel };
  let onGround = player.onGround;

  if (onGround && intent.jump) {
    vel.y = JUMP;
    onGround = false;
  }
  vel.y -= GRAVITY;

  const wish = wishDir(intent);
  vel.x = wish.x * WALK_PER_TICK;
  vel.z = wish.z * WALK_PER_TICK;

  const pos: Vec3 = { ...player.pos };

  // 逐轴解算：先 Y（决定 onGround），再 X、Z
  if (resolveAxis(pos, 'y', vel.y, world)) {
    if (vel.y < 0) onGround = true;
    vel.y = 0;
  } else {
    onGround = false;
  }
  if (resolveAxis(pos, 'x', vel.x, world)) vel.x = 0;
  if (resolveAxis(pos, 'z', vel.z, world)) vel.z = 0;

  vel.y *= VDRAG; // 垂直阻力

  return { pos, vel, onGround };
}
