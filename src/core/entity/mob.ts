import { type Vec3, type VoxelWorld, GRAVITY, VDRAG, JUMP } from '../physics/player';
import { sweepAabb } from '../physics/aabbSweep';
import {
  RAW_PORKCHOP,
  RAW_BEEF,
  LEATHER,
  RAW_MUTTON,
  WOOL,
  RAW_CHICKEN,
  FEATHER,
  ROTTEN_FLESH,
  BONE,
  STRING,
  ARROW,
  GUNPOWDER,
} from '../items/items';

// 被动动物（猪/牛/羊/鸡）——朴素数据 + 纯函数（AI/物理/受伤/掉落），可无头单测。
// 渲染在 render/MobRenderer；副作用（生成掉落物 ItemDrop、移除死亡实体）由 game/ 按事件施加。

export type MobKind = 'pig' | 'cow' | 'sheep' | 'chicken' | 'zombie' | 'skeleton' | 'creeper' | 'husk';

export interface MobDef {
  hp: number;
  width: number; // AABB footprint 边长
  height: number;
  moveSpeed: number; // 格/tick（游荡）
  fallImmune: boolean; // 鸡=true：扇翅缓降、不受摔伤
  hostile?: boolean; // 敌对：会追玩家、接触造成伤害、白天日晒受损（僵尸/骷髅）
  attack?: number; // 攻击伤害（近战接触 / 远程箭，半心=1）
  sense?: number; // 察觉/追击半径（格）
  ranged?: boolean; // 远程：拉开距离、射箭（骷髅），不靠接触伤
  explosive?: boolean; // 苦力怕：不近战，靠近玩家点燃引信、到点自爆（炸方块+伤玩家）
  sunImmune?: boolean; // 日晒免疫：白天不被烧（苦力怕/尸壳，同 MC 1.12）
}

// 1:1 MC Java（生命=2×心；体型/移速按手感+Wiki）。僵尸/骷髅敌对、夜行、白天暴晒受损。
export const MOB_DEFS: Record<MobKind, MobDef> = {
  pig: { hp: 10, width: 0.9, height: 0.9, moveSpeed: 0.09, fallImmune: false },
  cow: { hp: 10, width: 0.9, height: 1.4, moveSpeed: 0.08, fallImmune: false },
  sheep: { hp: 8, width: 0.9, height: 1.3, moveSpeed: 0.08, fallImmune: false },
  chicken: { hp: 4, width: 0.4, height: 0.7, moveSpeed: 0.07, fallImmune: true },
  // 敌对怪移速：原 ~0.05 只有玩家走速(~0.216)的 1/4 → 永远追不上你。提到 ~0.15(≈0.7×走速)：能贴身威胁、疾跑仍可甩开(同 MC 感觉)。
  zombie: { hp: 20, width: 0.6, height: 1.9, moveSpeed: 0.15, fallImmune: false, hostile: true, attack: 3, sense: 16 },
  skeleton: { hp: 20, width: 0.6, height: 1.95, moveSpeed: 0.14, fallImmune: false, hostile: true, attack: 2, sense: 16, ranged: true },
  creeper: { hp: 20, width: 0.6, height: 1.7, moveSpeed: 0.15, fallImmune: false, hostile: true, attack: 22, sense: 16, explosive: true, sunImmune: true }, // attack=爆心最大伤害，按距离衰减
  husk: { hp: 20, width: 0.6, height: 1.95, moveSpeed: 0.15, fallImmune: false, hostile: true, attack: 3, sense: 16, sunImmune: true }, // 沙漠僵尸变种(MC 1.12)：日晒免疫
};

export const isHostile = (kind: MobKind): boolean => MOB_DEFS[kind].hostile === true;

export interface Mob {
  kind: MobKind;
  pos: Vec3; // 脚部中心
  vel: Vec3; // 格/tick
  yaw: number; // 朝向（弧度，0→+X）
  onGround: boolean;
  health: number;
  hurtCooldown: number; // 受击无敌帧（tick）
  ai: { state: 'idle' | 'wander' | 'panic' | 'chase'; timer: number; target: Vec3 | null };
  eggTimer: number; // 仅鸡：下个蛋的 tick
  atkCd: number; // 敌对：攻击冷却（tick），>0 时不再造成接触伤害
  fuse: number; // 苦力怕：引信计时（tick，0=未点燃；到 FUSE_TIME 引爆）
}

export interface MobDrop {
  id: number;
  count: number;
}
export type MobEvent =
  | { kind: 'drops'; items: MobDrop[]; pos: Vec3 }
  | { kind: 'layEgg'; pos: Vec3 }
  | { kind: 'death'; pos: Vec3 }
  | { kind: 'hurt' }
  | { kind: 'attackPlayer'; damage: number } // 敌对接触攻击 → 游戏层对玩家施伤
  | { kind: 'shootArrow'; from: Vec3; dir: Vec3; damage: number } // 骷髅射箭 → 游戏层生成箭实体
  | { kind: 'explode'; pos: Vec3; radius: number; damage: number }; // 苦力怕引爆 → 游戏层炸方块 + 伤玩家
export interface MobUpdate {
  mob: Mob;
  events: MobEvent[];
}

const PANIC_MULT = 1.8;
const HURT_INVULN = 10; // tick（≈0.5s，同 MC）
const KNOCK_H = 0.4; // 水平击退
const KNOCK_UP = 0.36; // 向上击退
const CHICKEN_FALL_CLAMP = -0.05; // 鸡下落速度下限（缓降）
const WATER_BUOY = 0.06; // 水中上浮加速度（浮力）
const WATER_DRAG = 0.85; // 水阻尼
const WATER_RISE_MAX = 0.12; // 上浮限速（防止冲出水面）

export function spawnMob(kind: MobKind, x: number, y: number, z: number): Mob {
  return {
    kind,
    pos: { x, y, z },
    vel: { x: 0, y: 0, z: 0 },
    yaw: 0,
    onGround: false,
    health: MOB_DEFS[kind].hp,
    hurtCooldown: 0,
    ai: { state: 'idle', timer: 20, target: null },
    eggTimer: kind === 'chicken' ? 6000 : 0,
    atkCd: 0,
    fuse: 0,
  };
}

function clone(m: Mob): Mob {
  return {
    ...m,
    pos: { ...m.pos },
    vel: { ...m.vel },
    ai: { ...m.ai, target: m.ai.target ? { ...m.ai.target } : null },
  };
}

function pickTarget(pos: Vec3, rng: () => number): Vec3 {
  return { x: pos.x + (rng() * 2 - 1) * 8, y: pos.y, z: pos.z + (rng() * 2 - 1) * 8 };
}

const idleTime = (rng: () => number): number => 20 + Math.floor(rng() * 40); // 1–3s

export function updateMob(m: Mob, world: VoxelWorld, rng: () => number): MobUpdate {
  const def = MOB_DEFS[m.kind];
  const mob = clone(m);
  const events: MobEvent[] = [];

  if (mob.hurtCooldown > 0) mob.hurtCooldown--;

  // —— AI：决定水平意图 ——
  mob.ai.timer--;
  let wishX = 0;
  let wishZ = 0;
  let speed = def.moveSpeed;

  if (mob.ai.state === 'idle') {
    if (mob.ai.timer <= 0) {
      mob.ai.state = 'wander';
      mob.ai.target = pickTarget(mob.pos, rng);
      mob.ai.timer = 40 + Math.floor(rng() * 60);
    }
  } else if (mob.ai.state === 'wander') {
    if (!mob.ai.target || mob.ai.timer <= 0) {
      mob.ai.state = 'idle';
      mob.ai.target = null;
      mob.ai.timer = idleTime(rng);
    } else {
      const dx = mob.ai.target.x - mob.pos.x;
      const dz = mob.ai.target.z - mob.pos.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 0.7) {
        mob.ai.state = 'idle';
        mob.ai.target = null;
        mob.ai.timer = idleTime(rng);
      } else {
        wishX = dx / dist;
        wishZ = dz / dist;
      }
    }
  } else {
    // panic：朝当前朝向快跑
    speed = def.moveSpeed * PANIC_MULT;
    if (mob.ai.timer <= 0) {
      mob.ai.state = 'idle';
      mob.ai.target = null;
      mob.ai.timer = idleTime(rng);
    } else {
      wishX = Math.cos(mob.yaw);
      wishZ = Math.sin(mob.yaw);
    }
  }

  // —— 不掉崖：贴地且前方是 ≥2 格落差 → 取消本步水平、重选目标 ——
  if ((wishX !== 0 || wishZ !== 0) && mob.onGround) {
    const ahead = 0.5 + def.width / 2;
    const fx = Math.floor(mob.pos.x + wishX * ahead);
    const fz = Math.floor(mob.pos.z + wishZ * ahead);
    const fy = Math.floor(mob.pos.y);
    if (!world.isSolid(fx, fy - 1, fz) && !world.isSolid(fx, fy - 2, fz)) {
      wishX = 0;
      wishZ = 0;
      mob.ai.target = null;
    }
  }

  // —— 正前方脚高是否有「1 格实心台阶、其上为空」(台阶/岸)：陆地用来起跳，水里用来爬出岸 ——
  let stepAhead = false;
  if (wishX !== 0 || wishZ !== 0) {
    const len = Math.hypot(wishX, wishZ) || 1;
    const ax = Math.floor(mob.pos.x + (wishX / len) * (def.width / 2 + 0.3));
    const az = Math.floor(mob.pos.z + (wishZ / len) * (def.width / 2 + 0.3));
    const fy = Math.floor(mob.pos.y);
    if (world.isSolid(ax, fy, az) && !world.isSolid(ax, fy + 1, az)) stepAhead = true;
  }
  const wantJump = stepAhead && mob.onGround; // 陆地起跳仍需贴地（2 格墙跳不上就不跳）

  // —— 速度：水平意图 + 重力（鸡缓降钳速）；起跳覆盖本帧重力，才能跳满 1 格（同玩家：满速起跳）——
  mob.vel.x = wishX * speed;
  mob.vel.z = wishZ * speed;
  // 竖直：在水里像玩家一样有浮力 → 浮到水面漂着；贴着岸(stepAhead)则像跳跃一样用力上浮，
  // 配合水平意图爬出水面（否则牛/猪等掉进水里会一直困在水面、上不了地面）。
  const inWater = world.isWater?.(Math.floor(mob.pos.x), Math.floor(mob.pos.y), Math.floor(mob.pos.z)) ?? false;
  if (inWater) {
    const deeper = world.isWater?.(Math.floor(mob.pos.x), Math.floor(mob.pos.y) + 1, Math.floor(mob.pos.z)) ?? false;
    if (stepAhead) {
      mob.vel.y = JUMP; // 贴岸 → 上浮 + 水平意图把它带上岸
    } else {
      mob.vel.y = deeper
        ? Math.min((mob.vel.y + WATER_BUOY) * WATER_DRAG, WATER_RISE_MAX) // 还在水下 → 上浮
        : Math.min(mob.vel.y * WATER_DRAG, 0); // 到水面 → 阻尼停住，漂着（不冲出水面）
    }
  } else {
    mob.vel.y = (mob.vel.y - GRAVITY) * VDRAG;
    if (wantJump) mob.vel.y = JUMP;
    if (def.fallImmune && mob.vel.y < CHICKEN_FALL_CLAMP) mob.vel.y = CHICKEN_FALL_CLAMP;
  }

  // —— 物理扫掠 ——
  const sw = sweepAabb(mob.pos, def.width, def.height, mob.vel, world);
  mob.pos = sw.pos;
  mob.vel = sw.vel;
  mob.onGround = sw.onGround;
  if (mob.onGround && mob.vel.y < 0) mob.vel.y = 0;

  // —— 朝向跟随移动 ——
  if (Math.abs(mob.vel.x) > 1e-4 || Math.abs(mob.vel.z) > 1e-4) {
    mob.yaw = Math.atan2(mob.vel.z, mob.vel.x);
  }

  // —— 鸡下蛋 ——
  if (mob.kind === 'chicken') {
    mob.eggTimer--;
    if (mob.eggTimer <= 0) {
      events.push({ kind: 'layEgg', pos: { ...mob.pos } });
      mob.eggTimer = 6000 + Math.floor(rng() * 6001);
    }
  }

  return { mob, events };
}

export function hurtMob(
  m: Mob,
  amount: number,
  knock: { x: number; z: number },
  rng: () => number,
): MobUpdate {
  const mob = clone(m);
  const events: MobEvent[] = [];
  if (mob.hurtCooldown > 0) return { mob, events }; // 无敌帧内免伤

  mob.health -= amount;
  mob.hurtCooldown = HURT_INVULN;
  events.push({ kind: 'hurt' });

  const len = Math.hypot(knock.x, knock.z) || 1;
  mob.vel.x = (knock.x / len) * KNOCK_H;
  mob.vel.z = (knock.z / len) * KNOCK_H;
  mob.vel.y = KNOCK_UP;
  mob.onGround = false;
  mob.yaw = Math.atan2(mob.vel.z, mob.vel.x);

  mob.ai.state = 'panic';
  mob.ai.target = null;
  mob.ai.timer = 30 + Math.floor(rng() * 10);

  if (mob.health <= 0) {
    events.push({ kind: 'drops', items: rollDrops(mob.kind, rng), pos: { ...mob.pos } });
    events.push({ kind: 'death', pos: { ...mob.pos } });
  }
  return { mob, events };
}

// 掉落表（1:1 MC）。rng 决定数量/概率。
export function rollDrops(kind: MobKind, rng: () => number): MobDrop[] {
  switch (kind) {
    case 'pig':
      return [{ id: RAW_PORKCHOP, count: 1 + Math.floor(rng() * 3) }];
    case 'cow': {
      const out: MobDrop[] = [{ id: RAW_BEEF, count: 1 + Math.floor(rng() * 3) }];
      const leather = Math.floor(rng() * 3);
      if (leather > 0) out.push({ id: LEATHER, count: leather });
      return out;
    }
    case 'sheep':
      return [
        { id: WOOL, count: 1 },
        { id: RAW_MUTTON, count: 1 + Math.floor(rng() * 2) },
      ];
    case 'chicken': {
      const out: MobDrop[] = [{ id: RAW_CHICKEN, count: 1 }];
      const f = Math.floor(rng() * 3);
      if (f > 0) out.push({ id: FEATHER, count: f });
      return out;
    }
    case 'zombie':
    case 'husk': {
      const n = Math.floor(rng() * 3); // 0–2 腐肉（尸壳同僵尸，MC 1.12）
      return n > 0 ? [{ id: ROTTEN_FLESH, count: n }] : [];
    }
    case 'skeleton': {
      const out: MobDrop[] = [];
      const bones = Math.floor(rng() * 3); // 0–2 骨头（MC）
      if (bones > 0) out.push({ id: BONE, count: bones });
      const str = Math.floor(rng() * 3); // 0–2 线（无蜘蛛，骷髅替代来源 → 够做弓）
      if (str > 0) out.push({ id: STRING, count: str });
      const arr = Math.floor(rng() * 2); // 0–1 箭（MC 骷髅也掉箭）
      if (arr > 0) out.push({ id: ARROW, count: arr });
      return out;
    }
    case 'creeper': {
      const n = Math.floor(rng() * 3); // 0–2 火药（仅被打死时掉；自爆不掉，同 MC）
      return n > 0 ? [{ id: GUNPOWDER, count: n }] : [];
    }
  }
}
