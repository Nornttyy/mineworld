import { describe, expect, it } from 'vitest';
import { normalizePlayerName, normalizeRoomCode } from './MultiplayerClient';

describe('联机房间输入', () => {
  it('把房间号标准化为可分享的短代码', () => {
    expect(normalizeRoomCode(' mw-8 k!2 ')).toBe('MW-8K2');
    expect(normalizeRoomCode('abcdefghijklmnopq')).toBe('ABCDEFGHIJKLMNOP');
  });

  it('保留名字文字但移除控制字符并提供默认名', () => {
    expect(normalizePlayerName('  林克\n')).toBe('林克');
    expect(normalizePlayerName('\u0000\u0001')).toBe('玩家');
  });
});
