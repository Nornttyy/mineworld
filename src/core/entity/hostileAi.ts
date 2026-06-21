import { type Vec3, type VoxelWorld, GRAVITY, VDRAG, JUMP } from '../physics/player';
import { sweepAabb } from '../physics/aabbSweep';
import { MOB_DEFS, rollDrops, type Mob, type MobUpdate, type MobEvent } from './mob';
import { ARROW_GRAVITY } from './arrow';

// 骷髅射出的箭速（格/tick）。导出供 game 层生成箭实体时用同一值（否则下坠补偿对不上）。
export const SKELETON_ARROW_SPEED = 1.9;

// 敌对生物（僵尸/骷髅）AI：察觉范围内追玩家、贴近接触攻击、白天暴晒(sunlit)受损。
// 与被动 updateMob 分文件（并发隔离）：物理/防掉崖/上台阶逻辑刻意与之保持一致，只是"意图"换成追击。
// 纯函数：靠 target(玩家脚部坐标，或 null=没察觉) + sunlit(此刻是否被太阳烤) 决策，副作用走 events。

const HURT_INVULN_DECAY = 1;
const ATTACK_RANGE = 1.7; // 接触攻击水平距离（格）
const ATTACK_CD = 18; // 攻击冷却（tick，≈0.9s）
const SUN_DPS = 0.18; // 日晒每 tick 掉血（20 血约 6 秒烧死 → 天亮自然清场）
const WANDER_SPEED_MULT = 0.6; // 没目标时慢悠悠晃
// 远程（骷髅）：拉开距离站桩射击
const SHOOT_RANGE = 15; // 射程（水平格）
const RANGED_MIN = 5; // 比这近 → 后退
const RANGED_PREF = 10; // 比这远 → 靠近；之间 → 站住射
const SHOOT_CD = 35; // 射击冷却（tick，≈1.75s）
// 苦力怕引信
const FUSE_RANGE = 3; // 玩家进入此距离(格)→ 点燃引信
const FUSE_TIME = 30; // 引信 30 tick ≈ 1.5s → 引爆（同 MC）
const BLAST_RADIUS = 3; // 爆炸半径(格，MC creeper power 3)
// 水中浮力（与被动 mob.ts 一致）：浮到水面漂着、不沉底，和玩家一样一沉一浮。
const WATER_BUOY = 0.06; // 上浮加速度
const WATER_DRAG = 0.85; // 水阻尼
const WATER_RISE_MAX = 0.12; // 上浮限速（防冲出水面）

// 视线：从 a 到 b 沿线采样，中间遇到实心方块即被挡（两端各自的格不算）。
function hasLineOfSight(world: VoxelWorld, a: Vec3, b: Vec3): boolean {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dz = b.z - a.z;
  const steps = Math.ceil(Math.hypot(dx, dy, dz) / 0.5);
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    if (world.isSolid(Math.floor(a.x + dx * t), Math.floor(a.y + dy * t), Math.floor(a.z + dz * t))) {
      return false;
    }
  }
  return true;
}

function clone(m: Mob): Mob {
  return {
    ...m,
    pos: { ...m.pos },
    vel: { ...m.vel },
    ai: { ...m.ai, target: m.ai.target ? { ...m.ai.target } : null },
  };
}

export function updateHostile(
  m: Mob,
  world: VoxelWorld,
  rng: () => number,
  target: Vec3 | null, // 玩家脚部坐标；null=未察觉（太远）
  sunlit: boolean, // 此刻是否被日光直晒（白天 + 头顶通天）
): MobUpdate {
  const def = MOB_DEFS[m.kind];
  const mob = clone(m);
  const events: MobEvent[] = [];
  if (mob.hurtCooldown > 0) mob.hurtCooldown -= HURT_INVULN_DECAY;
  if (mob.atkCd > 0) mob.atkCd--;

  // —— 意图：察觉到玩家就直奔，否则随机游荡 ——
  let wishX = 0;
  let wishZ = 0;
  let speed = def.moveSpeed;
  const sense = def.sense ?? 16;
  let pdist = Infinity;
  let faceTarget: Vec3 | null = null; // 远程：站桩/后退时也面朝玩家
  if (target) {
    const dx = target.x - mob.pos.x;
    const dz = target.z - mob.pos.z;
    pdist = Math.hypot(dx, dz);
    if (pdist <= sense && pdist > 1e-3) {
      mob.ai.state = 'chase';
      mob.ai.target = { ...target };
      const ux = dx / pdist;
      const uz = dz / pdist;
      if (def.ranged) {
        faceTarget = target;
        if (pdist < RANGED_MIN) {
          wishX = -ux; // 太近 → 后退拉开
          wishZ = -uz;
        } else if (pdist > RANGED_PREF) {
          wishX = ux; // 太远 → 靠近到射程甜区
          wishZ = uz;
        } // 甜区内 → 站住不动，专心射
      } else {
        wishX = ux; // 近战 → 直奔玩家
        wishZ = uz;
      }
    }
  }
  if (wishX === 0 && wishZ === 0) {
    // 没在追：简易游荡（idle↔wander）
    speed = def.moveSpeed * WANDER_SPEED_MULT;
    mob.ai.timer--;
    if (mob.ai.state === 'chase') {
      mob.ai.state = 'idle';
      mob.ai.target = null;
      mob.ai.timer = 20 + Math.floor(rng() * 40);
    } else if (mob.ai.state === 'wander' && mob.ai.target) {
      const dx = mob.ai.target.x - mob.pos.x;
      const dz = mob.ai.target.z - mob.pos.z;
      const d = Math.hypot(dx, dz);
      if (d < 0.7 || mob.ai.timer <= 0) {
        mob.ai.state = 'idle';
        mob.ai.target = null;
        mob.ai.timer = 20 + Math.floor(rng() * 40);
      } else {
        wishX = dx / d;
        wishZ = dz / d;
      }
    } else if (mob.ai.timer <= 0) {
      mob.ai.state = 'wander';
      mob.ai.target = { x: mob.pos.x + (rng() * 2 - 1) * 8, y: mob.pos.y, z: mob.pos.z + (rng() * 2 - 1) * 8 };
      mob.ai.timer = 40 + Math.floor(rng() * 60);
    }
  }

  // —— 攻击：远程(骷髅)射箭，近战(僵尸)接触施伤，苦力怕引信 ——
  // 三者都要求【视线通畅】(怪眼高 → 玩家胸口，中间无实心方块)。近战/引信原先漏了这道检查 →
  // 会隔薄墙打/炸玩家(ATTACK_RANGE 1.7、FUSE_RANGE 3 都 > 1 格墙厚)→ "矿洞里凭空掉血/被炸"。
  const eye: Vec3 = { x: mob.pos.x, y: mob.pos.y + def.height * 0.85, z: mob.pos.z }; // 怪眼高
  const chest: Vec3 | null = target ? { x: target.x, y: target.y + 1.0, z: target.z } : null; // 瞄玩家胸口
  if (def.ranged) {
    // 射程内 + 冷却就绪 + 视线通畅 → 朝玩家胸口射一箭（from=骷髅眼高，target 为玩家脚部 +1）
    if (chest && pdist <= SHOOT_RANGE && mob.atkCd <= 0 && hasLineOfSight(world, eye, chest)) {
      // 下坠补偿：箭飞 pdist 用时 ≈ pdist/速度，期间重力下坠 0.5·g·t²；抬高瞄点抵消（×1.15 容差阻力/夹角）。
      const t = pdist / SKELETON_ARROW_SPEED;
      const drop = 0.5 * ARROW_GRAVITY * t * t * 1.15;
      const dx = chest.x - eye.x;
      const dy = chest.y + drop - eye.y;
      const dz = chest.z - eye.z;
      const len = Math.hypot(dx, dy, dz) || 1;
      events.push({
        kind: 'shootArrow',
        from: eye,
        dir: { x: dx / len, y: dy / len, z: dz / len },
        damage: def.attack ?? 2,
      });
      mob.atkCd = SHOOT_CD;
    }
  } else if (def.explosive) {
    // 苦力怕：进引信范围【且看得见玩家】→ 站定膨胀倒计时；玩家走远/被墙挡 → 熄灭重置；到点 → 引爆并自毁
    if (chest && pdist <= FUSE_RANGE && hasLineOfSight(world, eye, chest)) {
      mob.fuse++;
      wishX = 0; // 引信中站住不动(同 MC)
      wishZ = 0;
      if (mob.fuse >= FUSE_TIME) {
        events.push({ kind: 'explode', pos: { ...mob.pos }, radius: BLAST_RADIUS, damage: def.attack ?? 22 });
        events.push({ kind: 'death', pos: { ...mob.pos } }); // 自爆消失，不掉火药(同 MC)
        return { mob, events };
      }
    } else {
      mob.fuse = 0; // 玩家走远/隔墙看不见 → 引信熄灭(同 MC)
    }
  } else if (chest && pdist <= ATTACK_RANGE && mob.atkCd <= 0 && hasLineOfSight(world, eye, chest)) {
    events.push({ kind: 'attackPlayer', damage: def.attack ?? 2 });
    mob.atkCd = ATTACK_CD;
  }

  // —— 不掉崖（贴地且前方 ≥2 格落差 → 取消水平）——
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

  // —— 正前方脚高的 1 格台阶/岸（陆地起跳 & 水里爬出岸共用）——
  let stepAhead = false;
  if (wishX !== 0 || wishZ !== 0) {
    const len = Math.hypot(wishX, wishZ) || 1;
    const ax = Math.floor(mob.pos.x + (wishX / len) * (def.width / 2 + 0.3));
    const az = Math.floor(mob.pos.z + (wishZ / len) * (def.width / 2 + 0.3));
    const fy = Math.floor(mob.pos.y);
    if (world.isSolid(ax, fy, az) && !world.isSolid(ax, fy + 1, az)) stepAhead = true;
  }
  const wantJump = stepAhead && mob.onGround;

  // —— 速度 + 重力/浮力 + 起跳 ——
  mob.vel.x = wishX * speed;
  mob.vel.z = wishZ * speed;
  // 在水里像玩家一样有浮力 → 浮到水面漂着；贴着岸(stepAhead)则像跳跃一样上浮爬出，否则会困在水里上不了岸。
  const inWater = world.isWater?.(Math.floor(mob.pos.x), Math.floor(mob.pos.y), Math.floor(mob.pos.z)) ?? false;
  if (inWater) {
    const deeper = world.isWater?.(Math.floor(mob.pos.x), Math.floor(mob.pos.y) + 1, Math.floor(mob.pos.z)) ?? false;
    if (stepAhead) {
      mob.vel.y = JUMP; // 贴岸 → 上浮 + 水平意图把它带上岸
    } else {
      mob.vel.y = deeper
        ? Math.min((mob.vel.y + WATER_BUOY) * WATER_DRAG, WATER_RISE_MAX) // 还在水下 → 上浮
        : Math.min(mob.vel.y * WATER_DRAG, 0); // 到水面 → 阻尼停住，漂着
    }
  } else {
    mob.vel.y = (mob.vel.y - GRAVITY) * VDRAG;
    if (wantJump) mob.vel.y = JUMP;
  }

  const sw = sweepAabb(mob.pos, def.width, def.height, mob.vel, world);
  mob.pos = sw.pos;
  mob.vel = sw.vel;
  mob.onGround = sw.onGround;
  if (mob.onGround && mob.vel.y < 0) mob.vel.y = 0;

  if (Math.abs(mob.vel.x) > 1e-4 || Math.abs(mob.vel.z) > 1e-4) {
    mob.yaw = Math.atan2(mob.vel.z, mob.vel.x);
  }
  if (faceTarget) {
    mob.yaw = Math.atan2(faceTarget.z - mob.pos.z, faceTarget.x - mob.pos.x); // 远程：始终面朝玩家
  }

  // —— 日晒受损：白天被太阳直射 → 持续掉血，烧死即清场（天亮自然消除夜怪）——
  if (sunlit && !def.sunImmune) mob.health -= SUN_DPS; // sunImmune 怪（苦力怕/尸壳）不怕晒(同 MC 1.12)

  if (mob.health <= 0) {
    events.push({ kind: 'drops', items: rollDrops(mob.kind, rng), pos: { ...mob.pos } });
    events.push({ kind: 'death', pos: { ...mob.pos } });
  }

  return { mob, events };
}
