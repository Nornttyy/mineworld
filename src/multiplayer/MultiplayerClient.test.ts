import { describe, expect, it } from 'vitest';
import { multiplayerHostWorldFromSave, normalizePlayerName, normalizeRoomCode } from './MultiplayerClient';

describe('联机房间输入', () => {
  it('把房间号标准化为可分享的短代码', () => {
    expect(normalizeRoomCode(' mw-8 k!2 ')).toBe('MW-8K2');
    expect(normalizeRoomCode('abcdefghijklmnopq')).toBe('ABCDEFGHIJKLMNOP');
  });

  it('保留名字文字但移除控制字符并提供默认名', () => {
    expect(normalizePlayerName('  林克\n')).toBe('林克');
    expect(normalizePlayerName('\u0000\u0001')).toBe('玩家');
  });

  it('把本地存档的主世界和下界方块改动转换为房间初始世界', () => {
    const world = multiplayerHostWorldFromSave({
      id: 'local',
      name: '本地世界',
      seed: 2468,
      gameMode: 'survival',
      lastPlayed: 0,
      worldTime: 12_345,
      edits: { '1,64,-2': 1, 'nether:3,70,4': 49, broken: 7 },
    });
    expect(world).toEqual({
      seed: 2468,
      gameMode: 'survival',
      worldTime: 12_345,
      edits: [
        { dimension: 'overworld', x: 1, y: 64, z: -2, id: 1 },
        { dimension: 'nether', x: 3, y: 70, z: 4, id: 49 },
      ],
    });
  });
});
