// 世界存档：localStorage 持久化。只存"种子 + 玩家改过的方块(delta) + 玩家状态"，
// 未改动的地形由种子重新生成，省空间。

export interface WorldSave {
  id: string;
  name: string;
  seed: number;
  lastPlayed: number;
  edits: Record<string, number>; // "x,y,z" -> blockId（0=被挖空）
  player?: { x: number; y: number; z: number; yaw: number; pitch: number };
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
  localStorage.setItem(KEY, JSON.stringify(list));
}

// 按最近游玩降序
export function listWorlds(): WorldSave[] {
  return readAll().sort((a, b) => b.lastPlayed - a.lastPlayed);
}

export function getWorld(id: string): WorldSave | undefined {
  return readAll().find((w) => w.id === id);
}

// 新建一个世界（随机种子、空改动）并存盘
export function createWorld(name: string): WorldSave {
  const w: WorldSave = {
    id: `${Date.now().toString(36)}-${Math.floor(Math.random() * 1e6).toString(36)}`,
    name: name.trim() || '新的世界',
    seed: Math.floor(Math.random() * 2_000_000_000),
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
