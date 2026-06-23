// 世界存档：localStorage 持久化。只存"种子 + 玩家改过的方块(delta) + 玩家状态 + 附近生物"，
// 未改动的地形由种子重新生成，省空间。

import type { SerializedMob } from '../core/entity/mobSave';
import type { FurnaceState } from '../core/crafting/smelting';

export type GameMode = 'survival' | 'creative';

export interface WorldSave {
  id: string;
  name: string;
  seed: number;
  gameMode?: GameMode; // 不存=survival（老档迁移）
  lastPlayed: number;
  edits: Record<string, number>; // "x,y,z" -> blockId（0=被挖空）；维度前缀："nether:x,y,z" = 下界，无前缀 = 主世界
  player?: { x: number; y: number; z: number; yaw: number; pitch: number };
  inv?: ({ id: number; count: number; dur?: number } | null)[]; // 背包；dur=工具剩余耐久
  survival?: { health: number; food: number; saturation: number; exhaustion: number }; // 生命/饥饿
  worldTime?: number; // 昼夜更替：世界时间(刻，0..24000)，不存则新世界从清晨开始
  mobs?: SerializedMob[]; // 玩家附近的生物（动物/敌对）；不存则新世界/旧档进场时撒新群
  furnaces?: Record<string, FurnaceState>; // 熔炉状态("x,y,z"→炉内料/燃料/进度)，否则重开炉内物+进度全丢失
  currentDimension?: 'overworld' | 'nether'; // 玩家当前维度；不存则主世界
  playerByDimension?: Partial<Record<'overworld' | 'nether', { x: number; y: number; z: number; yaw: number; pitch: number }>>; // 各维度玩家位置（可选）
  mobsByDimension?: Partial<Record<'overworld' | 'nether', SerializedMob[]>>; // 各维度生物群（可选）
  portalLinks?: Record<string, [number, number, number]>; // 传送门映射(待扩展)
}

const KEY = 'mineworld.saves';

function readAll(): WorldSave[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as WorldSave[]) : [];
  } catch {
    return [];
  }
}

function writeAll(list: WorldSave[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch (e) {
    // 配额溢出 / 隐私模式下 setItem 会抛——吞掉，别让自动存盘/退出流程崩(宁可这次没存上)
    console.warn('[mineworld] 存档写入失败(localStorage 配额满或不可用):', e);
  }
}

// 按最近游玩降序
export function listWorlds(): WorldSave[] {
  return readAll().sort((a, b) => b.lastPlayed - a.lastPlayed);
}

export function getWorld(id: string): WorldSave | undefined {
  return readAll().find((w) => w.id === id);
}

// 把"种子输入框"的字符串解析成种子：空→null(调用方用随机)、纯数字→该数、其它字符串→确定性哈希。
export function parseSeed(input: string): number | null {
  const s = input.trim();
  if (!s) return null;
  if (/^-?\d+$/.test(s)) return Math.abs(Math.floor(Number(s))) % 2_000_000_000;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(h, 31) + s.charCodeAt(i)) | 0;
  return Math.abs(h) % 2_000_000_000;
}

// 新建一个世界并存盘。seed 省略=随机；gameMode 默认生存。
export function createWorld(name: string, seed?: number, gameMode: GameMode = 'survival'): WorldSave {
  const w: WorldSave = {
    id: `${Date.now().toString(36)}-${Math.floor(Math.random() * 1e6).toString(36)}`,
    name: name.trim() || '新的世界',
    seed: seed ?? Math.floor(Math.random() * 2_000_000_000),
    gameMode,
    lastPlayed: Date.now(),
    edits: {},
  };
  saveWorld(w);
  return w;
}

// 写入/更新一个世界
export function saveWorld(world: WorldSave): void {
  const list = readAll().filter((w) => w.id !== world.id);
  list.push(world);
  writeAll(list);
}

export function deleteWorld(id: string): void {
  writeAll(readAll().filter((w) => w.id !== id));
}

// 按维度生成编辑键：主世界无前缀(向后兼容老档)、下界有 "nether:" 前缀。
export function dimEditKey(dim: 'overworld' | 'nether', x: number, y: number, z: number): string {
  return dim === 'nether' ? `nether:${x},${y},${z}` : `${x},${y},${z}`;
}

// 反解编辑键：有 "nether:" 前缀=下界，否则主世界。
export function parseEditKey(key: string): { dim: 'overworld' | 'nether'; x: number; y: number; z: number } {
  if (key.startsWith('nether:')) {
    const [x, y, z] = key.slice(7).split(',').map(Number);
    return { dim: 'nether', x, y, z };
  }
  const [x, y, z] = key.split(',').map(Number);
  return { dim: 'overworld', x, y, z };
}
