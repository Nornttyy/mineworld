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
  SPRINT_PER_TICK,
  CROUCH_HEIGHT,
  CROUCH_SPEED_MULT,
  SLOW_SPEED_MULT,
  KB_DECAY,
  FLY_PER_TICK,
  FLY_SPRINT_PER_TICK,
  FLY_VERT_PER_TICK,
} from './player';
import { blockSlipperiness } from '../blocks/registry';

const HW = WIDTH / 2;
type Axis = 'x' | 'y' | 'z';

// 玩家 AABB 是否与任一实心体素重叠（height 可传下蹲高度）
function overlaps(p: Vec3, world: VoxelWorld, height = HEIGHT): boolean {
  const e = 1e-6;
  const x0 = Math.floor(p.x - HW + e);
  const x1 = Math.ceil(p.x + HW - e) - 1;
  const y0 = Math.floor(p.y + e);
  const y1 = Math.ceil(p.y + height - e) - 1;
  const z0 = Math.floor(p.z - HW + e);
  const z1 = Math.ceil(p.z + HW - e) - 1;
  for (let y = y0; y <= y1; y++)
    for (let x = x0; x <= x1; x++)
      for (let z = z0; z <= z1; z++) if (world.isSolid(x, y, z)) return true;
  return false;
}

// 沿单轴扫掠移动 delta；碰撞则精确钳到接触面。返回是否撞到。
function resolveAxis(p: Vec3, axis: Axis, delta: number, world: VoxelWorld, height = HEIGHT): boolean {
  if (delta === 0) return false;
  const sign = Math.sign(delta);
  const SUB = 0.2; // 子步 ≤0.2 < 0.6 AABB，防高速穿越
  let remaining = Math.abs(delta);
  while (remaining > 1e-9) {
    const amt = Math.min(remaining, SUB) * sign;
    remaining -= Math.abs(amt);
    p[axis] += amt;
    if (overlaps(p, world, height)) {
      p[axis] -= amt; // 退回，再二分逼近接触面
      let fine = amt / 2;
      for (let i = 0; i < 24 && Math.abs(fine) > 1e-5; i++) {
        p[axis] += fine;
        if (overlaps(p, world, height)) p[axis] -= fine;
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
function isOnGround(pos: Vec3, world: VoxelWorld, height = HEIGHT): boolean {
  if (overlaps(pos, world, height)) return false;
  return overlaps({ x: pos.x, y: pos.y - 0.06, z: pos.z }, world, height);
}

/** 一个 tick 的玩家模拟（纯函数）：跳跃 → 水平意图 → 逐轴扫掠碰撞 → 末尾施加重力。 */
export function step(player: Player, intent: MoveIntent, world: VoxelWorld): Player {
  const pos: Vec3 = { ...player.pos };
  const vel: Vec3 = { ...player.vel };

  // 创造飞行：无重力/无水浮力/无击退。水平按意图、竖直由上升/下降键控制；仍逐轴扫掠碰撞(不能穿墙)。
  if (intent.fly) {
    const wish = wishDir(intent);
    const sp = intent.sprint ? FLY_SPRINT_PER_TICK : FLY_PER_TICK;
    vel.x = wish.x * sp;
    vel.z = wish.z * sp;
    vel.y = (intent.flyUp ? FLY_VERT_PER_TICK : 0) - (intent.flyDown ? FLY_VERT_PER_TICK : 0);
    if (resolveAxis(pos, 'y', vel.y, world)) vel.y = 0;
    if (resolveAxis(pos, 'x', vel.x, world)) vel.x = 0;
    if (resolveAxis(pos, 'z', vel.z, world)) vel.z = 0;
    return { pos, vel, onGround: isOnGround(pos, world), kbx: 0, kbz: 0 };
  }

  const crouch = intent.crouch === true;
  const h = crouch ? CROUCH_HEIGHT : HEIGHT; // 下蹲时碰撞箱变矮

  const grounded = isOnGround(pos, world, h);
  // 脚部是否在水里（到水面即算出水，可正常起跳跃上岸）
  const inWater =
    world.isWater?.(Math.floor(pos.x), Math.floor(pos.y + 0.1), Math.floor(pos.z)) ?? false;

  let jumped = false;
  if (intent.jump && (grounded || inWater)) {
    vel.y = inWater ? 0.5 : JUMP; // 水里跳得更猛，克服水阻力跃出水面上岸
    jumped = true;
  }

  const wish = wishDir(intent);
  // 基础速度：水中略慢；下蹲时不疾跑。再按下蹲/用物品(吃)逐级减速。
  let speed = inWater ? WALK_PER_TICK * 0.7 : intent.sprint && !crouch ? SPRINT_PER_TICK : WALK_PER_TICK;
  if (crouch) speed *= CROUCH_SPEED_MULT;
  if (intent.slow) speed *= SLOW_SPEED_MULT;
  // 击退速度叠加到移动意图上（被怪打中时由 Game 设置），逐刻衰减，碰墙归零靠下面的扫掠
  const kbx = player.kbx ?? 0;
  const kbz = player.kbz ?? 0;

  // 冰面打滑：脚下方块的滑度决定水平速度保留系数（MC 1.12：冰 0.98，普通地面 0.6）。
  // 有移动意图时直接设定目标速度（与原逻辑一致）；
  // 无移动意图且贴地时，用滑度保留当前水平速度（冰上滑行，普通地面快速减速）。
  const hasHorizIntent = Math.hypot(wish.x, wish.z) > 1e-9;
  if (hasHorizIntent || !grounded || inWater) {
    // 有输入 / 在水中 / 空中：直接设定速度（保持原行为）
    vel.x = wish.x * speed + kbx;
    vel.z = wish.z * speed + kbz;
  } else {
    // 无输入且贴地：按脚下方块滑度保留水平速度（冰面惯性滑行）
    const floorBx = Math.floor(pos.x);
    const floorBy = Math.floor(pos.y - 0.1);
    const floorBz = Math.floor(pos.z);
    const floorId = world.getBlock?.(floorBx, floorBy, floorBz) ?? 0;
    const slip = blockSlipperiness(floorId);
    vel.x = vel.x * slip + kbx;
    vel.z = vel.z * slip + kbz;
  }

  // 逐轴扫掠解算：先 Y，再 X、Z（撞到则该轴速度归零）
  if (resolveAxis(pos, 'y', vel.y, world, h)) vel.y = 0;
  // 下蹲且本帧贴地：水平移动若会把人挪出支撑(走到方块边缘外)→ 撤销该轴，停在边缘不掉落
  const sneakEdge = crouch && grounded && vel.y <= 0;
  const beforeX = pos.x;
  if (resolveAxis(pos, 'x', vel.x, world, h)) vel.x = 0;
  if (sneakEdge && !isOnGround(pos, world, h)) {
    pos.x = beforeX;
    vel.x = 0;
  }
  const beforeZ = pos.z;
  if (resolveAxis(pos, 'z', vel.z, world, h)) vel.z = 0;
  if (sneakEdge && !isOnGround(pos, world, h)) {
    pos.z = beforeZ;
    vel.z = 0;
  }

  const onGround = isOnGround(pos, world, h);
  if (jumped) {
    // 起跳/跃出水面：当作起跳处理，重力照常（不被水阻尼），跳够高上岸
    vel.y = (vel.y - GRAVITY) * VDRAG;
  } else if (inWater) {
    // 水中：按住空格上浮；否则轻阻尼(保留上冲余速→能带出水面)+缓沉
    if (intent.swimUp) vel.y = 0.16;
    else vel.y = Math.max(vel.y * 0.8 - 0.02, -0.15);
  } else if (onGround) {
    vel.y = 0;
  } else {
    // ⚠️ 重力放在移动之后：起跳第一帧升满 0.42 → 跳高 ≈1.25 格（同 MC）
    vel.y = (vel.y - GRAVITY) * VDRAG;
  }

  // 击退衰减；撞墙(vel 那一轴被归零)则击退也清掉，免得贴墙抖
  const nkbx = vel.x === 0 ? 0 : kbx * KB_DECAY;
  const nkbz = vel.z === 0 ? 0 : kbz * KB_DECAY;
  return { pos, vel, onGround, kbx: Math.abs(nkbx) < 0.005 ? 0 : nkbx, kbz: Math.abs(nkbz) < 0.005 ? 0 : nkbz };
}
