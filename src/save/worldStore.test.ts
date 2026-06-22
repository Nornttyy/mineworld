import { describe, it, expect, beforeEach } from 'vitest';
import { createWorld, getWorld, parseSeed } from './worldStore';

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
