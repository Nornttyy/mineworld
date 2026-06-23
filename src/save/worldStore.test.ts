import { describe, it, expect, beforeEach } from 'vitest';
import { createWorld, getWorld, parseSeed, dimEditKey, parseEditKey } from './worldStore';

// node 测试环境无 localStorage → 内存桩
const mem = new Map<string, string>();
(globalThis as unknown as { localStorage: Storage }).localStorage = {
  getItem: (k: string) => mem.get(k) ?? null,
  setItem: (k: string, v: string) => void mem.set(k, v),
  removeItem: (k: string) => void mem.delete(k),
  clear: () => mem.clear(),
  key: () => null,
  length: 0,
} as Storage;

beforeEach(() => localStorage.clear());

describe('createWorld（名/种子/模式）', () => {
  it('指定种子 + 创造模式', () => {
    const w = createWorld('我的天地', 12345, 'creative');
    expect(w.name).toBe('我的天地');
    expect(w.seed).toBe(12345);
    expect(w.gameMode).toBe('creative');
    expect(getWorld(w.id)?.gameMode).toBe('creative'); // 已存盘
  });

  it('默认：生存模式 + 空名给默认名', () => {
    const w = createWorld('');
    expect(w.name).toBe('新的世界');
    expect(w.gameMode).toBe('survival');
    expect(Number.isFinite(w.seed)).toBe(true);
  });
});

describe('parseSeed', () => {
  it('空 → null（调用方用随机种子）', () => {
    expect(parseSeed('')).toBeNull();
    expect(parseSeed('   ')).toBeNull();
  });
  it('数字 → 取该数字', () => {
    expect(parseSeed('42')).toBe(42);
    expect(parseSeed('  100  ')).toBe(100);
  });
  it('字符串 → 确定性哈希成种子（同串同种子、不同串多半不同）', () => {
    expect(parseSeed('hello')).toBe(parseSeed('hello'));
    expect(parseSeed('hello')).not.toBe(parseSeed('world'));
    expect(Number.isInteger(parseSeed('hello') as number)).toBe(true);
  });
});

describe('维度前缀键', () => {
  it('主世界无前缀(兼容老档)、下界有前缀、不撞', () => {
    expect(dimEditKey('overworld', 1, 2, 3)).toBe('1,2,3');
    expect(dimEditKey('nether', 1, 2, 3)).toBe('nether:1,2,3');
    expect(dimEditKey('overworld', 1, 2, 3)).not.toBe(dimEditKey('nether', 1, 2, 3));
  });
});

describe('parseEditKey 反解维度与坐标', () => {
  it('解析无前缀 = 主世界、有前缀 = 下界', () => {
    expect(parseEditKey('1,2,3')).toEqual({ dim: 'overworld', x: 1, y: 2, z: 3 });
    expect(parseEditKey('nether:1,2,3')).toEqual({ dim: 'nether', x: 1, y: 2, z: 3 });
  });
});
