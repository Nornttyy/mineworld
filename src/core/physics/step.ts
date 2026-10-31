import { architectureBoxes } from '../blocks/architecture';
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
  INPUT_DAMPING,
  MOVEMENT_SPEED,
  SPRINT_MOVEMENT_SPEED,
  HORIZONTAL_DRAG,
  AIR_ACCELERATION,
  SPRINT_AIR_ACCELERATION,
  WATER_ACCELERATION,
  WATER_DRAG,
  WATER_SPRINT_DRAG,
  LIQUID_JUMP_IMPULSE,
  VELOCITY_EPSILON,
  CROUCH_HEIGHT,
  CROUCH_SPEED_MULT,
  SLOW_SPEED_MULT,
  FLY_PER_TICK,
  FLY_SPRINT_PER_TICK,
  FLY_VERT_PER_TICK,
} from './player';
import { blockSlipperiness, SOUL_SAND } from '../blocks/registry';

const HW = WIDTH / 2;
const MOVEMENT_SUPPORT_OFFSET = Math.fround(0.500001);
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
  for (let y = y0 - 1; y <= y1; y++)
    for (let x = x0; x <= x1; x++)
      for (let z = z0; z <= z1; z++) {
        const shapes=world.getBlock ? architectureBoxes(world.getBlock(x,y,z)) : undefined;
        if(shapes) { for(const b of shapes) if(p.x+HW>x+b[0]+e && p.x-HW<x+b[3]-e && p.y+height>y+b[1]+e && p.y<y+b[4]-e && p.z+HW>z+b[2]+e && p.z-HW<z+b[5]-e) return true; }
        else if(y>=y0 && world.isSolid(x,y,z)) return true;
      }
  return false;
}

// 沿单轴扫掠移动 delta；碰撞则精确钳到接触面。返回是否撞到。
function resolveAxis(
  p: Vec3,
  axis: Axis,
  delta: number,
  world: VoxelWorld,
  height = HEIGHT,
): boolean {
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

function tryModelStep(pos:Vec3,axis:Axis,delta:number,world:VoxelWorld,height:number):boolean {
  if(!world.getBlock)return false;
  const edge={...pos,[axis]:pos[axis]+Math.sign(delta)*(HW+.02)};
  const boxes=architectureBoxes(world.getBlock(Math.floor(edge.x),Math.floor(pos.y+.1),Math.floor(edge.z)));
  if(!boxes?.length||!boxes.some(b=>b[4]<=.6))return false;
  const candidate={...pos,y:pos.y+.6};
  if(overlaps(candidate,world,height)||resolveAxis(candidate,axis,delta,world,height))return false;
  resolveAxis(candidate,'y',-.6,world,height);Object.assign(pos,candidate);return true;
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

/** LocalPlayer.modifyInput / modifyInputSpeedForSquareMovement, then Entity.moveRelative.
 * Preserve analog strength; keyboard diagonals are normalized before this step. */
function movementInput(intent: MoveIntent, crouch: boolean): { x: number; z: number } {
  const f = Math.fround;
  const initialLength = Math.max(1, Math.hypot(intent.forward, intent.right));
  let forward = f(f(intent.forward / initialLength) * INPUT_DAMPING);
  let right = f(f(intent.right / initialLength) * INPUT_DAMPING);
  if (intent.slow) {
    forward = f(forward * f(SLOW_SPEED_MULT));
    right = f(right * f(SLOW_SPEED_MULT));
  }
  if (crouch) {
    forward = f(forward * f(CROUCH_SPEED_MULT));
    right = f(right * f(CROUCH_SPEED_MULT));
  }
  const length = f(Math.sqrt(f(f(forward * forward) + f(right * right))));
  if (length === 0) return { x: 0, z: 0 };
  const nf = f(forward * f(1 / length)),
    nr = f(right * f(1 / length));
  const ratio = Math.min(Math.abs(nf), Math.abs(nr)) / Math.max(Math.abs(nf), Math.abs(nr));
  const squareDistance = f(Math.sqrt(f(1 + f(f(ratio) * f(ratio)))));
  const magnitude = Math.min(f(length * squareDistance), 1);
  forward = f(nf * magnitude);
  right = f(nr * magnitude);
  const l2 = forward * forward + right * right;
  if (l2 < 1e-7) return { x: 0, z: 0 };
  if (l2 > 1) {
    const l = Math.sqrt(l2);
    forward /= l;
    right /= l;
  }
  const c = Math.cos(intent.yaw),
    s = Math.sin(intent.yaw);
  return { x: forward * c - right * s, z: forward * s + right * c };
}

/** The world currently exposes full water voxels, not per-cell fluid surface heights.
 * Sample the player's whole AABB so touching a shoreline does not erase fluid contact. */
function waterDepth(pos: Vec3, world: VoxelWorld, height: number): number {
  if (!world.isWater) return 0;
  const e = 1e-6;
  let surface = pos.y;
  for (let y = Math.floor(pos.y + e); y <= Math.ceil(pos.y + height - e) - 1; y++)
    for (let x = Math.floor(pos.x - HW + e); x <= Math.ceil(pos.x + HW - e) - 1; x++)
      for (let z = Math.floor(pos.z - HW + e); z <= Math.ceil(pos.z + HW - e) - 1; z++)
        if (world.isWater(x, y, z)) surface = Math.max(surface, y + 1);
  return Math.max(0, surface - pos.y);
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
    return {
      pos,
      vel,
      onGround: isOnGround(pos, world),
      kbx: 0,
      kbz: 0,
      crouching: false,
      jumpDelayTicks: 0,
      didJumpFromGround: false,
    };
  }

  // 松开潜行时先检查站立空间。头顶受限但矮姿态能容纳时保持低姿态，
  // 避免立即扩大 AABB 穿进天花板；相机必须使用返回的实际 crouching。
  const crouch =
    intent.crouch === true ||
    (overlaps(pos, world, HEIGHT) && !overlaps(pos, world, CROUCH_HEIGHT));
  const h = crouch ? CROUCH_HEIGHT : HEIGHT; // 下蹲时碰撞箱变矮

  const grounded = isOnGround(pos, world, h);
  const depth = waterDepth(pos, world, h);
  const inWater = depth > 0;
  const sprint = intent.sprint === true && !crouch && !intent.slow;
  const input = movementInput(intent, crouch);
  const floorId =
    world.getBlock?.(
      Math.floor(pos.x),
      Math.floor(pos.y - MOVEMENT_SUPPORT_OFFSET),
      Math.floor(pos.z),
    ) ?? 0;
  const friction = grounded ? Math.fround(blockSlipperiness(floorId)) : 1;

  // Game supplies pending impulses; consume once into inertia, rather than
  // adding the same knockback again on every subsequent tick.
  vel.x += player.kbx ?? 0;
  vel.z += player.kbz ?? 0;
  if (vel.x * vel.x + vel.z * vel.z < VELOCITY_EPSILON ** 2) vel.x = vel.z = 0;
  if (Math.abs(vel.y) < VELOCITY_EPSILON) vel.y = 0;

  let jumpDelayTicks = Math.max(0, (player.jumpDelayTicks ?? 0) - 1);
  let didJumpFromGround = false;
  if (inWater && intent.crouch) vel.y -= LIQUID_JUMP_IMPULSE;
  if (intent.jump || intent.jumpHeld || (inWater && intent.swimUp)) {
    if (inWater && (!grounded || depth > 0.4)) {
      vel.y += LIQUID_JUMP_IMPULSE;
    } else if ((grounded || (inWater && depth <= 0.4)) && jumpDelayTicks === 0) {
      vel.y = Math.max(vel.y, JUMP);
      jumpDelayTicks = 10;
      didJumpFromGround = true;
      if (sprint) {
        vel.x += Math.cos(intent.yaw) * 0.2;
        vel.z += Math.sin(intent.yaw) * 0.2;
      }
    }
  } else jumpDelayTicks = 0;

  let acceleration: number;
  if (inWater) acceleration = WATER_ACCELERATION;
  else if (grounded) {
    const speed = sprint ? SPRINT_MOVEMENT_SPEED : MOVEMENT_SPEED;
    // In 26.3 low-friction blocks no longer increase acceleration below 0.6.
    acceleration =
      friction > 0.6
        ? Math.fround(
            speed *
              Math.fround(
                Math.fround(0.21600002) / Math.fround(Math.fround(friction * friction) * friction),
              ),
          )
        : speed;
  } else acceleration = sprint ? SPRINT_AIR_ACCELERATION : AIR_ACCELERATION;
  vel.x += input.x * acceleration;
  vel.z += input.z * acceleration;
  const fallingInWater = vel.y <= 0;
  const oldY = pos.y;

  // 逐轴扫掠解算：先 Y，再 X、Z（撞到则该轴速度归零）
  if (resolveAxis(pos, 'y', vel.y, world, h)) vel.y = 0;
  // 下蹲且本帧贴地：水平移动若会把人挪出支撑(走到方块边缘外)→ 撤销该轴，停在边缘不掉落
  const sneakEdge = crouch && grounded && vel.y <= 0;
  const beforeX = pos.x;
  let hitX = resolveAxis(pos, 'x', vel.x, world, h);
  if (hitX && grounded && !crouch && tryModelStep(pos, 'x', vel.x-(pos.x-beforeX), world, h)) hitX=false;
  if (hitX) vel.x = 0;
  if (sneakEdge && !isOnGround(pos, world, h)) {
    pos.x = beforeX;
    vel.x = 0;
  }
  const beforeZ = pos.z;
  let hitZ = resolveAxis(pos, 'z', vel.z, world, h);
  if (hitZ && grounded && !crouch && tryModelStep(pos, 'z', vel.z-(pos.z-beforeZ), world, h)) hitZ=false;
  if (hitZ) vel.z = 0;
  if (sneakEdge && !isOnGround(pos, world, h)) {
    pos.z = beforeZ;
    vel.z = 0;
  }

  const onGround = isOnGround(pos, world, h);
  // Entity.move applies the block speed factor after displacement, before
  // travel's drag. Soul sand is not a multiplier on the player's input speed.
  const endFloor =
    world.getBlock?.(
      Math.floor(pos.x),
      Math.floor(pos.y - MOVEMENT_SUPPORT_OFFSET),
      Math.floor(pos.z),
    ) ?? 0;
  if (!inWater && endFloor === SOUL_SAND) {
    vel.x *= Math.fround(0.4);
    vel.z *= Math.fround(0.4);
  }
  if (inWater) {
    const drag = sprint ? WATER_SPRINT_DRAG : WATER_DRAG;
    vel.x *= drag;
    vel.z *= drag;
    vel.y *= WATER_DRAG;
    if (!sprint) {
      const fluidGravity = GRAVITY / 16;
      vel.y =
        fallingInWater && Math.abs(vel.y - 0.005) >= 0.003 && Math.abs(vel.y - fluidGravity) < 0.003
          ? -0.003
          : vel.y - fluidGravity;
    }
    // Only a collision next to a dry, empty raised AABB gives the official
    // 0.3 exit assist. Deep-water jump presses never become a free land jump.
    if (hitX || hitZ) {
      const raised = { x: pos.x + vel.x, y: oldY + vel.y + Math.fround(0.6), z: pos.z + vel.z };
      if (!overlaps(raised, world, h) && waterDepth(raised, world, h) === 0)
        vel.y = Math.fround(0.3);
    }
  } else {
    const drag = Math.fround(friction * HORIZONTAL_DRAG);
    vel.x *= drag;
    vel.z *= drag;
    // Gravity follows movement even on the floor. The next collision removes
    // the downward component; grounded is a contact state, not vy === 0.
    vel.y = (vel.y - GRAVITY) * VDRAG;
  }
  return {
    pos,
    vel,
    onGround,
    crouching: crouch,
    kbx: 0,
    kbz: 0,
    jumpDelayTicks,
    didJumpFromGround,
  };
}
