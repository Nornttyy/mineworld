import { type Vec3, type VoxelWorld, GRAVITY, VDRAG, JUMP } from '../physics/player';
import { sweepAabb } from '../physics/aabbSweep';
import { MOB_DEFS, rollDrops, type Mob, type MobUpdate, type MobEvent } from './mob';

// 敌对生物（僵尸/骷髅）AI：察觉范围内追玩家、贴近接触攻击、白天暴晒(sunlit)受损。
// 与被动 updateMob 分文件（并发隔离）：物理/防掉崖/上台阶逻辑刻意与之保持一致，只是"意图"换成追击。
// 纯函数：靠 target(玩家脚部坐标，或 null=没察觉) + sunlit(此刻是否被太阳烤) 决策，副作用走 events。

const HURT_INVULN_DECAY = 1;
const ATTACK_RANGE = 1.7; // 接触攻击水平距离（格）
const ATTACK_CD = 18; // 攻击冷却（tick，≈0.9s）
const SUN_DPS = 0.18; // 日晒每 tick 掉血（20 血约 6 秒烧死 → 天亮自然清场）
const WANDER_SPEED_MULT = 0.6; // 没目标时慢悠悠晃

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
  if (target) {
    const dx = target.x - mob.pos.x;
    const dz = target.z - mob.pos.z;
    pdist = Math.hypot(dx, dz);
    if (pdist <= sense && pdist > 1e-3) {
      wishX = dx / pdist;
      wishZ = dz / pdist;
      mob.ai.state = 'chase';
      mob.ai.target = { ...target };
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

  // —— 接触攻击：在攻击距离内 + 冷却就绪 → 对玩家施伤 ——
  if (target && pdist <= ATTACK_RANGE && mob.atkCd <= 0) {
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

  // —— 上 1 格台阶 ——
  let wantJump = false;
  if ((wishX !== 0 || wishZ !== 0) && mob.onGround) {
    const len = Math.hypot(wishX, wishZ) || 1;
    const ax = Math.floor(mob.pos.x + (wishX / len) * (def.width / 2 + 0.3));
    const az = Math.floor(mob.pos.z + (wishZ / len) * (def.width / 2 + 0.3));
    const fy = Math.floor(mob.pos.y);
    if (world.isSolid(ax, fy, az) && !world.isSolid(ax, fy + 1, az)) wantJump = true;
  }

  // —— 速度 + 重力 + 起跳 ——
  mob.vel.x = wishX * speed;
  mob.vel.z = wishZ * speed;
  mob.vel.y = (mob.vel.y - GRAVITY) * VDRAG;
  if (wantJump) mob.vel.y = JUMP;

  const sw = sweepAabb(mob.pos, def.width, def.height, mob.vel, world);
  mob.pos = sw.pos;
  mob.vel = sw.vel;
  mob.onGround = sw.onGround;
  if (mob.onGround && mob.vel.y < 0) mob.vel.y = 0;

  if (Math.abs(mob.vel.x) > 1e-4 || Math.abs(mob.vel.z) > 1e-4) {
    mob.yaw = Math.atan2(mob.vel.z, mob.vel.x);
  }

  // —— 日晒受损：白天被太阳直射 → 持续掉血，烧死即清场（天亮自然消除夜怪）——
  if (sunlit) mob.health -= SUN_DPS;

  if (mob.health <= 0) {
    events.push({ kind: 'drops', items: rollDrops(mob.kind, rng), pos: { ...mob.pos } });
    events.push({ kind: 'death', pos: { ...mob.pos } });
  }

  return { mob, events };
}
