import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  createWorld,
  deleteWorld,
  getWorld,
  listWorlds,
  parseSeed,
  dimEditKey,
  parseEditKey,
  saveWorld,
} from './worldStore';
import { COBBLESTONE } from '../core/blocks/registry';
import { CHUNK_H } from '../core/world/chunk';
import {
  BOW,
  COOKED_BEEF,
  EGG,
  FLINT_AND_STEEL,
  RAW_BEEF,
  WOODEN_PICKAXE,
} from '../core/items/items';

// node 测试环境无 localStorage → 内存桩
const mem = new Map<string, string>();
let failWrites = false;
(globalThis as unknown as { localStorage: Storage }).localStorage = {
  getItem: (k: string) => mem.get(k) ?? null,
  setItem: (k: string, v: string) => {
    if (failWrites) throw new DOMException('quota exceeded', 'QuotaExceededError');
    mem.set(k, v);
  },
  removeItem: (k: string) => void mem.delete(k),
  clear: () => mem.clear(),
  key: () => null,
  length: 0,
} as Storage;

beforeEach(() => {
  failWrites = false;
  localStorage.clear();
});

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

describe('坏存档兼容', () => {
  it('顶层不是数组或 JSON 损坏时返回空列表', () => {
    mem.set('mineworld.saves', '{bad json');
    expect(listWorlds()).toEqual([]);
    mem.set('mineworld.saves', JSON.stringify({ id: 'not-an-array' }));
    expect(listWorlds()).toEqual([]);
  });

  it('原始 JSON 或顶层结构损坏时拒绝保存和删除，且不覆盖原数据', () => {
    const replacement = {
      id: 'replacement',
      name: '不能覆盖坏档',
      seed: 7,
      lastPlayed: 30,
      edits: {},
    };
    const warning = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    for (const raw of ['', '{bad json', JSON.stringify({ id: 'not-an-array' })]) {
      mem.set('mineworld.saves', raw);
      expect(saveWorld(replacement)).toBe(false);
      expect(mem.get('mineworld.saves')).toBe(raw);
      expect(deleteWorld('anything')).toBe(false);
      expect(mem.get('mineworld.saves')).toBe(raw);
    }
    expect(warning).toHaveBeenCalledTimes(6);
    warning.mockRestore();
  });

  it('保存或删除一个世界时原样保留其他未来版本及坏条目', () => {
    const futureWorld = {
      id: 'future',
      name: '未来版本世界',
      seed: 12,
      lastPlayed: 20,
      edits: { '1,2,3': 999 },
      currentDimension: 'the_end',
      futureInventory: [{ id: 9999, count: 1 }],
    };
    const currentWorld = {
      id: 'current',
      name: '当前世界',
      seed: 7,
      lastPlayed: 30,
      edits: {},
    };
    mem.set('mineworld.saves', JSON.stringify([futureWorld, 42, currentWorld]));

    expect(saveWorld({ ...currentWorld, name: '已更新' })).toBe(true);
    expect(JSON.parse(mem.get('mineworld.saves') ?? '[]')).toEqual([
      futureWorld,
      42,
      { ...currentWorld, name: '已更新' },
    ]);

    expect(deleteWorld('current')).toBe(true);
    expect(JSON.parse(mem.get('mineworld.saves') ?? '[]')).toEqual([futureWorld, 42]);
  });

  it('跳过坏条目，并保留可挽救世界中的有效数据', () => {
    mem.set(
      'mineworld.saves',
      JSON.stringify([
        null,
        42,
        { id: '', name: '坏世界', seed: 1, lastPlayed: 10, edits: {} },
        {
          id: 'good',
          name: '旧世界',
          seed: 123,
          lastPlayed: 20,
          edits: { '1,2,3': 4, 'bad-key': 5, 'nether:-1,2,3': 6 },
          inv: { definitely: 'not an array' },
          mobs: [{ kind: 'unknown', x: 0, y: 0, z: 0, yaw: 0, health: 1 }],
          currentDimension: 'the-end',
          dropsByDimension: {
            overworld: [
              {
                id: 2,
                count: 1,
                dur: 17,
                x: 1,
                y: 2,
                z: 3,
                vx: -0.1,
                vy: 0.2,
                vz: 0,
                age: 4,
                extra: true,
              },
              { id: 0, count: 1, x: 1, y: 2, z: 3, vx: 0, vy: 0, vz: 0, age: 0 },
              { id: 3, count: 1.5, x: 1, y: 2, z: 3, vx: 0, vy: 0, vz: 0, age: 0 },
            ],
            nether: 'not-an-array',
          },
          arrowsByDimension: {
            overworld: [
              {
                x: 1,
                y: 2,
                z: 3,
                vx: 0.1,
                vy: -0.2,
                vz: 0.3,
                age: 5,
                stuck: false,
                fromPlayer: true,
                damage: 4,
                extra: true,
              },
              {
                x: 1,
                y: 2,
                z: 3,
                vx: 0,
                vy: 0,
                vz: 0,
                age: 0,
                stuck: 'false',
                fromPlayer: true,
                damage: 1,
              },
            ],
          },
        },
      ]),
    );

    expect(listWorlds()).toHaveLength(1);
    expect(getWorld('good')).toMatchObject({
      id: 'good',
      edits: { '1,2,3': 4, 'nether:-1,2,3': 6 },
      mobs: [],
    });
    expect(getWorld('good')).not.toHaveProperty('inv');
    expect(getWorld('good')).not.toHaveProperty('currentDimension');
    expect(getWorld('good')?.dropsByDimension).toEqual({
      overworld: [{ id: 2, count: 1, x: 1, y: 2, z: 3, vx: -0.1, vy: 0.2, vz: 0, age: 4 }],
    });
    expect(getWorld('good')?.arrowsByDimension).toEqual({
      overworld: [
        {
          x: 1,
          y: 2,
          z: 3,
          vx: 0.1,
          vy: -0.2,
          vz: 0.3,
          age: 5,
          stuck: false,
          fromPlayer: true,
          damage: 4,
        },
      ],
    });
  });

  it('只保留注册方块/物品，并按真实堆叠与工具耐久上限修正', () => {
    const furnace = {
      input: RAW_BEEF,
      inputN: 999,
      fuel: WOODEN_PICKAXE,
      fuelN: 4,
      fuelDur: 999,
      output: COOKED_BEEF,
      outputN: 100,
      burn: 999_999,
      burnMax: 999_999,
      cook: 999_999,
    };
    mem.set(
      'mineworld.saves',
      JSON.stringify([
        {
          id: 'sanitize-items',
          name: '物品清洗',
          seed: 123,
          lastPlayed: 20,
          edits: {
            '1,2,3': COBBLESTONE,
            '2,2,3': 9999,
            '3,2,3': WOODEN_PICKAXE,
            [`4,${CHUNK_H},3`]: COBBLESTONE,
            'nether:-30000000,0,30000000': 0,
            'overworld:5,2,3': COBBLESTONE,
          },
          inv: [
            { id: 2, count: 999, dur: 17 },
            { id: WOODEN_PICKAXE, count: 9, dur: 999 },
            { id: WOODEN_PICKAXE, count: 1, dur: -1 },
            { id: WOODEN_PICKAXE, count: 1, dur: 1.5 },
            { id: EGG, count: 99 },
            { id: 9999, count: 1 },
            { id: BOW, count: 5, dur: 999 },
            { id: FLINT_AND_STEEL, count: 1, dur: 17 },
          ],
          furnaces: {
            'overworld:4,5,6': furnace,
            'nether:-3,4,5': {
              ...furnace,
              input: 9999,
              inputN: 3,
              fuel: 0,
              fuelN: 99,
              outputN: 1,
              burn: -4,
              burnMax: 'bad',
              cook: 1.5,
            },
            'bad-key': furnace,
            [`overworld:0,${CHUNK_H},0`]: furnace,
          },
          dropsByDimension: {
            overworld: [
              { id: 2, count: 999, dur: 17, x: 1, y: 2, z: 3, vx: 0, vy: 0, vz: 0, age: 4 },
              {
                id: WOODEN_PICKAXE,
                count: 8,
                dur: 999,
                x: 1,
                y: 2,
                z: 3,
                vx: 0,
                vy: 0,
                vz: 0,
                age: 4,
              },
              { id: 9999, count: 1, x: 1, y: 2, z: 3, vx: 0, vy: 0, vz: 0, age: 4 },
              {
                id: WOODEN_PICKAXE,
                count: 1,
                dur: -1,
                x: 1,
                y: 2,
                z: 3,
                vx: 0,
                vy: 0,
                vz: 0,
                age: 4,
              },
              { id: 2, count: 1, x: 1, y: 2, z: 3, vx: 129, vy: 0, vz: 0, age: 4 },
              { id: 2, count: 1, x: 1, y: 2, z: 3, vx: 0, vy: 0, vz: 0, age: 301 },
            ],
          },
        },
      ]),
    );

    const world = getWorld('sanitize-items');
    expect(world?.edits).toEqual({
      '1,2,3': COBBLESTONE,
      'nether:-30000000,0,30000000': 0,
    });
    expect(world?.inv).toEqual([
      { id: 2, count: 64 },
      { id: WOODEN_PICKAXE, count: 1, dur: 59 },
      null,
      null,
      { id: EGG, count: 16 },
      null,
      { id: BOW, count: 1, dur: 384 },
      { id: FLINT_AND_STEEL, count: 1, dur: 17 },
    ]);
    expect(world?.furnaces).toEqual({
      'overworld:4,5,6': {
        input: RAW_BEEF,
        inputN: 64,
        fuel: WOODEN_PICKAXE,
        fuelN: 1,
        fuelDur: 59,
        output: COOKED_BEEF,
        outputN: 64,
        burn: 16_000,
        burnMax: 16_000,
        cook: 200,
      },
      'nether:-3,4,5': {
        input: 0,
        inputN: 0,
        fuel: 0,
        fuelN: 0,
        output: COOKED_BEEF,
        outputN: 1,
        burn: 0,
        burnMax: 0,
        cook: 0,
      },
    });
    expect(world?.dropsByDimension).toEqual({
      overworld: [
        { id: 2, count: 64, x: 1, y: 2, z: 3, vx: 0, vy: 0, vz: 0, age: 4 },
        {
          id: WOODEN_PICKAXE,
          count: 1,
          dur: 59,
          x: 1,
          y: 2,
          z: 3,
          vx: 0,
          vy: 0,
          vz: 0,
          age: 4,
        },
      ],
    });
  });

  it('保存并重读熔炉时保留燃料木工具的损坏值', () => {
    const world = createWorld('耐久燃料', 321);
    world.furnaces = {
      'overworld:1,2,3': {
        input: 0,
        inputN: 0,
        fuel: WOODEN_PICKAXE,
        fuelN: 1,
        fuelDur: 17,
        output: 0,
        outputN: 0,
        burn: 0,
        burnMax: 0,
        cook: 0,
      },
    };

    expect(saveWorld(world)).toBe(true);

    expect(getWorld(world.id)?.furnaces?.['overworld:1,2,3']?.fuelDur).toBe(17);
  });

  it('限制玩家、生物、箭与传送门的坐标和关键状态范围', () => {
    mem.set(
      'mineworld.saves',
      JSON.stringify([
        {
          id: 'sanitize-entities',
          name: '实体清洗',
          seed: 456,
          lastPlayed: 21,
          edits: {},
          player: { x: 30_000_001, y: 80, z: 0, yaw: 0, pitch: 0 },
          playerByDimension: {
            overworld: { x: 1, y: 80, z: 2, yaw: Math.PI * 4 + 0.5, pitch: 0.2 },
            nether: { x: 1, y: 5000, z: 2, yaw: 0, pitch: 0 },
          },
          survival: {
            health: 999,
            food: 21.9,
            saturation: 99,
            exhaustion: -2,
            oxygen: 99,
            oxygenTimer: 99,
          },
          worldTime: -1,
          mobs: [
            { kind: 'cow', x: 0, y: 80, z: 0, yaw: Math.PI * 2 + 0.25, health: 999 },
            { kind: 'zombie', x: 30_000_001, y: 80, z: 0, yaw: 0, health: 20 },
            { kind: 'pig', x: 0, y: 80, z: 0, yaw: 0, health: 0 },
            { kind: 'chicken', x: 0, y: 80, z: 0, yaw: 0, health: 4, egg: 12_001 },
          ],
          arrowsByDimension: {
            overworld: [
              {
                x: 1,
                y: 80,
                z: 2,
                vx: 1,
                vy: -0.1,
                vz: 0,
                age: 1200,
                stuck: false,
                fromPlayer: true,
                damage: 9,
              },
              {
                x: 1,
                y: 80,
                z: 2,
                vx: 129,
                vy: 0,
                vz: 0,
                age: 1,
                stuck: false,
                fromPlayer: true,
                damage: 9,
              },
              {
                x: 1,
                y: 80,
                z: 2,
                vx: 1,
                vy: 0,
                vz: 0,
                age: 1.5,
                stuck: false,
                fromPlayer: true,
                damage: 9,
              },
              {
                x: 1,
                y: 80,
                z: 2,
                vx: 1,
                vy: 0,
                vz: 0,
                age: 1,
                stuck: false,
                fromPlayer: true,
                damage: 65,
              },
            ],
          },
          portalLinks: {
            'overworld:1,2,3': [4.5, 80, -6.5],
            'portal:nether:x:-1,2,3': [8.5, 75, 9.5],
            'portal:nether:y:-1,2,3': [8.5, 75, 9.5],
            '1,2,3': [4, 80, 6],
            [`nether:1,${CHUNK_H},3`]: [4, 80, 6],
            'nether:1,2,3': [30_000_001, 80, 6],
          },
        },
      ]),
    );

    const world = getWorld('sanitize-entities');
    expect(world).not.toHaveProperty('player');
    expect(world?.playerByDimension).toEqual({
      overworld: { x: 1, y: 80, z: 2, yaw: 0.5, pitch: 0.2 },
    });
    expect(world?.survival).toEqual({
      health: 20,
      food: 20,
      saturation: 20,
      exhaustion: 0,
      oxygen: 10,
      oxygenTimer: 30,
    });
    expect(world?.worldTime).toBe(23_999);
    expect(world?.mobs).toEqual([
      { kind: 'cow', x: 0, y: 80, z: 0, yaw: 0.25, health: 10 },
      { kind: 'chicken', x: 0, y: 80, z: 0, yaw: 0, health: 4 },
    ]);
    expect(world?.arrowsByDimension?.overworld).toEqual([
      {
        x: 1,
        y: 80,
        z: 2,
        vx: 1,
        vy: -0.1,
        vz: 0,
        age: 1200,
        stuck: false,
        fromPlayer: true,
        damage: 9,
      },
    ]);
    expect(world?.portalLinks).toEqual({
      'overworld:1,2,3': [4.5, 80, -6.5],
      'portal:nether:x:-1,2,3': [8.5, 75, 9.5],
    });
  });
});

describe('写入失败会可靠上报', () => {
  it('saveWorld 成功返回 true，配额异常返回 false 且旧存档不变', () => {
    const world = createWorld('可保存', 9);
    const before = mem.get('mineworld.saves');
    failWrites = true;
    const warning = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    expect(saveWorld({ ...world, name: '不应写入' })).toBe(false);
    expect(mem.get('mineworld.saves')).toBe(before);
    expect(warning).toHaveBeenCalled();
    warning.mockRestore();
  });

  it('首次创建无法持久化时抛出可理解错误', () => {
    failWrites = true;
    const warning = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    expect(() => createWorld('无法保存')).toThrow(/无法写入浏览器存档/);
    warning.mockRestore();
  });

  it('deleteWorld 返回实际写入结果', () => {
    const world = createWorld('待删除', 10);
    expect(deleteWorld(world.id)).toBe(true);
    failWrites = true;
    const warning = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    expect(deleteWorld('anything')).toBe(false);
    warning.mockRestore();
  });
});
