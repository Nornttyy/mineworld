import { describe, expect, it } from 'vitest';
// @ts-expect-error -- 生产服务是原生 .mjs，测试故意直接覆盖实际运行模块。
import { applyAtomicBlockBatch, applyPlayerState, parseInitialWorld } from '../server/index.mjs';

type Dimension = 'overworld' | 'nether';

interface BlockEdit {
  dimension: Dimension;
  x: number;
  y: number;
  z: number;
  id: number;
}

interface TestRoom {
  edits: Map<string, BlockEdit>;
}

interface TestPlayer {
  id: string;
  name: string;
  skin: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  dimension: Dimension;
}

function key(edit: BlockEdit): string {
  return `${edit.dimension}:${edit.x},${edit.y},${edit.z}`;
}

function context(initialEdits: BlockEdit[] = []) {
  const room: TestRoom = {
    edits: new Map(initialEdits.map((edit) => [key(edit), edit])),
  };
  const player: TestPlayer = {
    id: 'player-1',
    name: '测试玩家',
    skin: 'default',
    x: 0.5,
    y: 64,
    z: 0.5,
    yaw: 0,
    pitch: 0,
    dimension: 'overworld',
  };
  return { client: { room, player, hasState: true, lastStateAt: 0 }, room, player };
}

function destinationPortal(
  dimension: Dimension,
  ax: number,
  baseY: number,
  az: number,
): BlockEdit[] {
  const cells = new Map<string, BlockEdit>();
  const put = (x: number, y: number, z: number, id: number): void => {
    cells.set(`${x},${y},${z}`, { dimension, x, y, z, id });
  };
  for (let x = ax - 1; x <= ax + 2; x++) {
    for (let y = baseY - 1; y <= baseY + 3; y++) {
      for (let z = az - 1; z <= az + 1; z++) put(x, y, z, 0);
    }
  }
  for (let x = ax - 1; x <= ax + 2; x++) {
    put(x, baseY - 1, az, 18);
    put(x, baseY + 3, az, 18);
  }
  for (let y = baseY - 1; y <= baseY + 3; y++) {
    put(ax - 1, y, az, 18);
    put(ax + 2, y, az, 18);
  }
  for (let x = ax; x <= ax + 1; x++) {
    for (let y = baseY; y <= baseY + 2; y++) put(x, y, az, 25);
  }
  put(ax, baseY - 1, az - 1, 18);
  put(ax + 1, baseY - 1, az - 1, 18);
  return [...cells.values()];
}

const transition = {
  x: 0.5,
  y: 40,
  z: 0.5,
  yaw: 0,
  pitch: 0,
  dimension: 'nether',
};

describe('联机服务端初始世界', () => {
  it('接受存档支持范围内的负种子', () => {
    const world = {
      seed: -2_000_000_000,
      gameMode: 'survival',
      worldTime: 0,
      edits: [],
    };

    expect(parseInitialWorld(world)?.seed).toBe(-2_000_000_000);
    expect(parseInitialWorld({ ...world, seed: -2_000_000_001 })).toBeNull();
    expect(parseInitialWorld({ ...world, seed: 2_000_000_001 })).toBeNull();
  });
});

describe('联机服务端玩家维度权限', () => {
  it('连接后第一个 state 可恢复房主的下界位置', () => {
    const { client, player } = context();
    client.hasState = false;

    const result = applyPlayerState(
      client,
      { type: 'state', player: { ...transition, x: 12.5, z: -4.5 } },
      10_000,
    );

    expect(result.ok).toBe(true);
    expect(player.dimension).toBe('nether');
    expect(player.x).toBe(12.5);
    expect(client.hasState).toBe(true);
    expect(client.lastStateAt).toBe(10_000);
  });

  it('首包后普通 state 不能直接切换维度', () => {
    const { client, player } = context();
    client.lastStateAt = 10_000;

    const result = applyPlayerState(client, { type: 'state', player: transition }, 10_050);

    expect(result).toEqual({ ok: false, code: 'invalid_state' });
    expect(player.dimension).toBe('overworld');
    expect(player.x).toBe(0.5);
    expect(client.lastStateAt).toBe(10_000);
  });

  it('portal batch 拒绝后的下一帧 state 仍不能把服务端切到目标维度', () => {
    const { client, player } = context([{ dimension: 'overworld', x: 0, y: 64, z: 0, id: 25 }]);
    client.lastStateAt = 20_000;

    const portal = applyAtomicBlockBatch(client, {
      type: 'blocks',
      kind: 'portal',
      edits: [],
      transition,
    });
    const nextState = applyPlayerState(client, { type: 'state', player: transition }, 20_050);

    expect(portal).toEqual({ ok: false, code: 'invalid_blocks' });
    expect(nextState).toEqual({ ok: false, code: 'invalid_state' });
    expect(player.dimension).toBe('overworld');
    expect(client.lastStateAt).toBe(20_000);
  });

  it('通过 portal batch 后，同一 WebSocket 后续的目标维度 state 可正常更新', () => {
    const { client, player } = context([
      { dimension: 'overworld', x: 0, y: 64, z: 0, id: 25 },
      { dimension: 'nether', x: 0, y: 40, z: 0, id: 25 },
    ]);

    const portal = applyAtomicBlockBatch(
      client,
      { type: 'blocks', kind: 'portal', edits: [], transition },
      30_000,
    );
    const nextState = applyPlayerState(
      client,
      { type: 'state', player: { ...transition, x: 0.7 } },
      30_050,
    );

    expect(portal.ok).toBe(true);
    expect(nextState.ok).toBe(true);
    expect(player.dimension).toBe('nether');
    expect(player.x).toBe(0.7);
    expect(client.lastStateAt).toBe(30_050);
  });
});

describe('联机服务端批量方块协议', () => {
  it('原子创建目的地门并切换玩家维度', () => {
    const sourcePortal: BlockEdit = {
      dimension: 'overworld',
      x: 0,
      y: 64,
      z: 0,
      id: 25,
    };
    const { client, room, player } = context([sourcePortal]);
    const edits = destinationPortal('nether', 0, 40, 0);

    const result = applyAtomicBlockBatch(
      client,
      { type: 'blocks', kind: 'portal', edits, transition },
      123_456,
    );

    expect(result.ok).toBe(true);
    expect(result.batch.edits).toHaveLength(60);
    expect(player.dimension).toBe('nether');
    expect(client.lastStateAt).toBe(123_456);
    expect(room.edits.get('nether:0,40,0')?.id).toBe(25);
  });

  it('非法 portal batch 整批拒绝，不留下半座门或错误维度', () => {
    const sourcePortal: BlockEdit = {
      dimension: 'overworld',
      x: 0,
      y: 64,
      z: 0,
      id: 25,
    };
    const { client, room, player } = context([sourcePortal]);
    const edits = destinationPortal('nether', 1000, 40, 1000);

    const result = applyAtomicBlockBatch(client, {
      type: 'blocks',
      kind: 'portal',
      edits,
      transition: { ...transition, x: 1000.5, z: 1000.5 },
    });

    expect(result).toEqual({ ok: false, code: 'invalid_blocks' });
    expect(player.dimension).toBe('overworld');
    expect(room.edits.size).toBe(1);
  });

  it('已链接且两端仍存在的 portal 用空 edits 也能原子切维度', () => {
    const { client, room, player } = context([
      { dimension: 'overworld', x: 0, y: 64, z: 0, id: 25 },
      { dimension: 'nether', x: 0, y: 40, z: 0, id: 25 },
    ]);

    const result = applyAtomicBlockBatch(client, {
      type: 'blocks',
      kind: 'portal',
      edits: [],
      transition,
    });

    expect(result.ok).toBe(true);
    expect(result.batch.edits).toEqual([]);
    expect(player.dimension).toBe('nether');
    expect(room.edits.size).toBe(2);
  });

  it('portal 复用范围与客户端 128 格搜索半径一致', () => {
    const source: BlockEdit = { dimension: 'overworld', x: 0, y: 64, z: 0, id: 25 };
    const inside = context([source, { dimension: 'nether', x: 127, y: 40, z: 0, id: 25 }]);
    const accepted = applyAtomicBlockBatch(inside.client, {
      type: 'blocks',
      kind: 'portal',
      edits: [],
      transition: { ...transition, x: 127.5 },
    });
    expect(accepted.ok).toBe(true);

    const outside = context([source, { dimension: 'nether', x: 129, y: 40, z: 0, id: 25 }]);
    const rejected = applyAtomicBlockBatch(outside.client, {
      type: 'blocks',
      kind: 'portal',
      edits: [],
      transition: { ...transition, x: 129.5 },
    });
    expect(rejected).toEqual({ ok: false, code: 'invalid_blocks' });
  });

  it('explosion 允许半径内破坏，且原子接受同列重力方块终态', () => {
    const { client, room } = context();
    const accepted = applyAtomicBlockBatch(client, {
      type: 'blocks',
      kind: 'explosion',
      center: { x: 1, y: 64, z: 1 },
      edits: [
        { dimension: 'overworld', x: 1, y: 64, z: 1, id: 0 },
        { dimension: 'overworld', x: 3, y: 64, z: 1, id: 0 },
        // 爆炸后高处沙块落到 y=60：源格在球外也可以与落点同批提交。
        { dimension: 'overworld', x: 2, y: 75, z: 1, id: 0 },
        { dimension: 'overworld', x: 2, y: 60, z: 1, id: 5 },
      ],
    });
    expect(accepted.ok).toBe(true);
    expect(room.edits.size).toBe(4);
    expect(room.edits.get('overworld:2,60,1')?.id).toBe(5);

    const rejected = applyAtomicBlockBatch(client, {
      type: 'blocks',
      kind: 'explosion',
      center: { x: 1, y: 64, z: 1 },
      edits: [{ dimension: 'overworld', x: 20, y: 64, z: 1, id: 0 }],
    });
    expect(rejected).toEqual({ ok: false, code: 'invalid_blocks' });
    expect(room.edits.has('overworld:20,64,1')).toBe(false);
  });

  it('explosion center 给苦力怕 7 格引信和位置同步留出 8 格容差', () => {
    const accepted = context();
    const result = applyAtomicBlockBatch(accepted.client, {
      type: 'blocks',
      kind: 'explosion',
      center: { x: 8.4, y: 64, z: 0.5 },
      edits: [{ dimension: 'overworld', x: 8, y: 64, z: 0, id: 0 }],
    });
    expect(result.ok).toBe(true);

    const rejected = context();
    expect(
      applyAtomicBlockBatch(rejected.client, {
        type: 'blocks',
        kind: 'explosion',
        center: { x: 8.6, y: 64, z: 0.5 },
        edits: [{ dimension: 'overworld', x: 8, y: 64, z: 0, id: 0 }],
      }),
    ).toEqual({ ok: false, code: 'invalid_blocks' });
  });

  it('gravity 原子接受同一触发列的远距离下落，也接受撞火把后的纯 AIR 终态', () => {
    const landed = context();
    const result = applyAtomicBlockBatch(landed.client, {
      type: 'blocks',
      kind: 'gravity',
      center: { x: 0.5, y: 64.5, z: 0.5 },
      edits: [
        { dimension: 'overworld', x: 0, y: 64, z: 0, id: 0 },
        { dimension: 'overworld', x: 0, y: 10, z: 0, id: 5 },
      ],
    });
    expect(result.ok).toBe(true);
    expect(landed.room.edits.get('overworld:0,10,0')?.id).toBe(5);

    const dropped = context();
    expect(
      applyAtomicBlockBatch(dropped.client, {
        type: 'blocks',
        kind: 'gravity',
        center: { x: 0.5, y: 64.5, z: 0.5 },
        edits: [
          { dimension: 'overworld', x: 0, y: 64, z: 0, id: 0 },
          { dimension: 'overworld', x: 0, y: 65, z: 0, id: 0 },
        ],
      }).ok,
    ).toBe(true);
  });

  it('gravity 拒绝跨列、没有 AIR 源或与触发点脱节的改动', () => {
    const cases: BlockEdit[][] = [
      [
        { dimension: 'overworld', x: 0, y: 64, z: 0, id: 0 },
        { dimension: 'overworld', x: 1, y: 10, z: 0, id: 5 },
      ],
      [{ dimension: 'overworld', x: 0, y: 10, z: 0, id: 5 }],
      [
        { dimension: 'overworld', x: 0, y: 80, z: 0, id: 0 },
        { dimension: 'overworld', x: 0, y: 10, z: 0, id: 5 },
      ],
    ];
    for (const edits of cases) {
      expect(
        applyAtomicBlockBatch(context().client, {
          type: 'blocks',
          kind: 'gravity',
          center: { x: 0.5, y: 64.5, z: 0.5 },
          edits,
        }),
      ).toEqual({ ok: false, code: 'invalid_blocks' });
    }
  });

  it('explosion 拒绝无源落点、无落点的球外 AIR，以及横向越界重力列', () => {
    const cases = [
      [{ dimension: 'overworld', x: 1, y: 60, z: 1, id: 15 }],
      [{ dimension: 'overworld', x: 1, y: 75, z: 1, id: 0 }],
      [
        { dimension: 'overworld', x: 10, y: 75, z: 1, id: 0 },
        { dimension: 'overworld', x: 10, y: 60, z: 1, id: 5 },
      ],
    ];

    for (const edits of cases) {
      const { client, room } = context();
      const result = applyAtomicBlockBatch(client, {
        type: 'blocks',
        kind: 'explosion',
        center: { x: 1, y: 64, z: 1 },
        edits,
      });
      expect(result).toEqual({ ok: false, code: 'invalid_blocks' });
      expect(room.edits.size).toBe(0);
    }
  });

  it('explosion 可原子提交超过 local 441 格上限的重力结算，但仍受 512 格上限保护', () => {
    const { client, room } = context();
    const edits: BlockEdit[] = [];
    for (const x of [1, 2]) {
      for (let y = 0; y < 111; y++) {
        edits.push({ dimension: 'overworld', x, y, z: 1, id: 5 });
      }
      for (let y = 128; y < 239; y++) {
        edits.push({ dimension: 'overworld', x, y, z: 1, id: 0 });
      }
    }
    expect(edits).toHaveLength(444);

    const accepted = applyAtomicBlockBatch(client, {
      type: 'blocks',
      kind: 'explosion',
      center: { x: 1, y: 64, z: 1 },
      edits,
    });
    expect(accepted.ok).toBe(true);
    expect(room.edits.size).toBe(444);

    const tooMany: BlockEdit[] = Array.from({ length: 513 }, (_, index) => ({
      dimension: 'overworld',
      x: 1 + Math.floor(index / 256),
      y: index % 256,
      z: 1,
      id: 0,
    }));
    const rejected = applyAtomicBlockBatch(context().client, {
      type: 'blocks',
      kind: 'explosion',
      center: { x: 1, y: 64, z: 1 },
      edits: tooMany,
    });
    expect(rejected).toEqual({ ok: false, code: 'invalid_blocks' });
  });

  it('local batch 接受合法最大 21×21 共面门，拒绝跨平面改动', () => {
    const { client, room } = context();
    const edits = [];
    for (let x = 0; x < 21; x++) {
      for (let y = 64; y < 85; y++) {
        edits.push({ dimension: 'overworld', x, y, z: 0, id: 25 });
      }
    }
    const accepted = applyAtomicBlockBatch(client, {
      type: 'blocks',
      kind: 'local',
      center: { x: 0.5, y: 64.5, z: 0.5 },
      edits,
    });
    expect(accepted.ok).toBe(true);
    expect(room.edits.size).toBe(441);

    const rejected = applyAtomicBlockBatch(client, {
      type: 'blocks',
      kind: 'local',
      center: { x: 0.5, y: 64.5, z: 0.5 },
      edits: [
        { dimension: 'overworld', x: 0, y: 64, z: 0, id: 0 },
        { dimension: 'overworld', x: 1, y: 64, z: 1, id: 0 },
      ],
    });
    expect(rejected).toEqual({ ok: false, code: 'invalid_blocks' });
  });
});
