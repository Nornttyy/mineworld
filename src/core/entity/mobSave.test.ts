import { describe, it, expect } from 'vitest';
import { serializeMob, deserializeMob } from './mobSave';
import { spawnMob } from './mob';

describe('mob 存档序列化（往返）', () => {
  it('保留 种类/位置/朝向/血量/蛋计时', () => {
    const m = spawnMob('chicken', 3.5, 12, -4.5);
    m.yaw = 1.2;
    m.health = 2;
    m.eggTimer = 4321;
    const r = deserializeMob(serializeMob(m));
    expect(r.kind).toBe('chicken');
    expect(r.pos).toEqual({ x: 3.5, y: 12, z: -4.5 });
    expect(r.yaw).toBeCloseTo(1.2);
    expect(r.health).toBe(2);
    expect(r.eggTimer).toBe(4321);
  });

  it('非鸡也能正确往返（含敌对生物）', () => {
    const m = spawnMob('cow', 1, 2, 3);
    m.health = 7;
    const r = deserializeMob(serializeMob(m));
    expect(r.kind).toBe('cow');
    expect(r.health).toBe(7);
    expect(r.pos).toEqual({ x: 1, y: 2, z: 3 });
  });

  it('反序列化后瞬态字段复位（vel / ai / 无敌帧）', () => {
    const m = spawnMob('pig', 0, 0, 0);
    m.health = 5;
    m.vel = { x: 9, y: 9, z: 9 };
    m.hurtCooldown = 8;
    m.ai.state = 'panic';
    const r = deserializeMob(serializeMob(m));
    expect(r.vel).toEqual({ x: 0, y: 0, z: 0 });
    expect(r.ai.state).toBe('idle');
    expect(r.hurtCooldown).toBe(0);
  });
});
