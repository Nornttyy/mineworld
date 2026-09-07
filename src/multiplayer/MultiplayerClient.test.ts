import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  MultiplayerClient,
  isMultiplayerHostWorldValid,
  multiplayerHostWorldFromSave,
  multiplayerServerUrl,
  normalizePlayerName,
  normalizeRoomCode,
  type BlockBatch,
  type BlockEdit,
} from './MultiplayerClient';

function bareClient(sent: string[] = []): MultiplayerClient {
  vi.stubGlobal('WebSocket', { OPEN: 1 });
  const client = Object.create(MultiplayerClient.prototype) as MultiplayerClient;
  Object.assign(client, {
    socket: { readyState: 1, send: (raw: string) => sent.push(raw), close: vi.fn() },
    _room: null,
    _closed: false,
    blockHandler: null,
    blockBatchHandler: null,
    worldTimeHandler: null,
    pendingBlockEvents: [],
  });
  return client;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

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

  it('允许与单机存档一致的负种子创建房间', () => {
    const world = {
      seed: -2_000_000_000,
      gameMode: 'survival' as const,
      worldTime: 0,
      edits: [],
    };

    expect(isMultiplayerHostWorldValid(world)).toBe(true);
    expect(isMultiplayerHostWorldValid({ ...world, seed: -2_000_000_001 })).toBe(false);
    expect(isMultiplayerHostWorldValid({ ...world, seed: 2_000_000_001 })).toBe(false);
  });

  it('浏览器禁用 localStorage 时仍回退到默认联机地址', () => {
    vi.stubGlobal('window', { location: { search: '', hostname: 'mineworld.example' } });
    vi.stubGlobal('localStorage', {
      getItem: () => {
        throw new Error('storage disabled');
      },
    });

    expect(multiplayerServerUrl()).toBe('wss://mineworld-multiplayer-nornttyy.onrender.com/ws');
  });
});

describe('联机原子方块批量协议', () => {
  it('sendBlockBatch 发送 kind、中心与整批 edits，不逐格拆包', () => {
    const sent: string[] = [];
    const client = bareClient(sent);
    client.sendBlockBatch(
      'explosion',
      [
        { dimension: 'overworld', x: 1, y: 64, z: 1, id: 0 },
        { dimension: 'overworld', x: 2, y: 64, z: 1, id: 0 },
      ],
      { center: { x: 1.5, y: 64.5, z: 1.5 } },
    );

    expect(sent).toHaveLength(1);
    expect(JSON.parse(sent[0])).toEqual({
      type: 'blocks',
      kind: 'explosion',
      edits: [
        { dimension: 'overworld', x: 1, y: 64, z: 1, id: 0 },
        { dimension: 'overworld', x: 2, y: 64, z: 1, id: 0 },
      ],
      center: { x: 1.5, y: 64.5, z: 1.5 },
    });
  });

  it('批量包只调用一次 batch handler，并保留与单格包的到达顺序', () => {
    const client = bareClient();
    const calls: string[] = [];
    const internals = client as unknown as {
      receive(raw: unknown): unknown;
    };
    const first: BlockEdit = { dimension: 'overworld', x: 0, y: 64, z: 0, id: 1 };
    const batch: BlockBatch = {
      kind: 'local',
      edits: [{ dimension: 'overworld', x: 1, y: 64, z: 0, id: 25 }],
      center: { x: 0.5, y: 64.5, z: 0.5 },
    };
    internals.receive(JSON.stringify({ type: 'block', ...first }));
    internals.receive(JSON.stringify({ type: 'blocks', ...batch }));

    // 先装 batch handler 时，队头单格包尚不能越过，等 block handler 装好后一并按序交付。
    client.setBlockBatchHandler((incoming) => calls.push(`batch:${incoming.edits.length}`));
    expect(calls).toEqual([]);
    client.setBlockHandler((edit) => calls.push(`block:${edit.x}`));
    expect(calls).toEqual(['block:0', 'batch:1']);
  });

  it('没有 batch handler 的旧调用方仍会逐格收到批量包', () => {
    const client = bareClient();
    const seen: number[] = [];
    client.setBlockHandler((edit) => seen.push(edit.x));
    (
      client as unknown as {
        receive(raw: unknown): unknown;
      }
    ).receive(
      JSON.stringify({
        type: 'blocks',
        kind: 'explosion',
        edits: [
          { dimension: 'overworld', x: 3, y: 64, z: 0, id: 0 },
          { dimension: 'overworld', x: 4, y: 64, z: 0, id: 0 },
        ],
        center: { x: 3.5, y: 64.5, z: 0.5 },
      }),
    );
    expect(seen).toEqual([3, 4]);
  });

  it('已入房后的业务 error 只上报提示，不由客户端主动断线', () => {
    const client = bareClient();
    const errors: string[] = [];
    Object.assign(client, {
      _room: { id: 'room', seed: 1, gameMode: 'survival', worldTime: 1000 },
    });
    client.onServerError = (message) => errors.push(message);

    (
      client as unknown as {
        receive(raw: unknown): unknown;
      }
    ).receive(JSON.stringify({ type: 'error', code: 'rate_limited', message: '操作过于频繁。' }));

    expect(errors).toEqual(['操作过于频繁。']);
    expect(
      (client as unknown as { socket: { close: ReturnType<typeof vi.fn> } }).socket.close,
    ).not.toHaveBeenCalled();
  });
});
