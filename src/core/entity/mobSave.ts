import { spawnMob, type Mob, type MobKind } from './mob';

// 生物存档：只存关键状态（种类/位置/朝向/血量/鸡的蛋计时）。瞬态（速度/AI/无敌帧/攻击CD）
// 反序列化时由 spawnMob 复位即可——加载后第一刻自然会落地、重新决策。
export interface SerializedMob {
  kind: MobKind;
  x: number;
  y: number;
  z: number;
  yaw: number;
  health: number;
  egg?: number; // 仅鸡：下个蛋的 tick
}

export function serializeMob(m: Mob): SerializedMob {
  const s: SerializedMob = {
    kind: m.kind,
    x: m.pos.x,
    y: m.pos.y,
    z: m.pos.z,
    yaw: m.yaw,
    health: m.health,
  };
  if (m.kind === 'chicken') s.egg = m.eggTimer;
  return s;
}

export function deserializeMob(s: SerializedMob): Mob {
  const m = spawnMob(s.kind, s.x, s.y, s.z);
  m.yaw = s.yaw;
  m.health = s.health;
  if (s.egg !== undefined) m.eggTimer = s.egg;
  return m;
}
