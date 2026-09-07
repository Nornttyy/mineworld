// 世界存档：localStorage 持久化。只存"种子 + 玩家改过的方块(delta) + 玩家状态 + 附近生物"，
// 未改动的地形由种子重新生成，省空间。

import { BLOCKS } from '../core/blocks/registry';
import { COOK_TICKS, type FurnaceState } from '../core/crafting/smelting';
import { MOB_DEFS, type MobKind } from '../core/entity/mob';
import type { SerializedMob } from '../core/entity/mobSave';
import type { ItemDrop } from '../core/entity/itemDrop';
import type { Arrow } from '../core/entity/arrow';
import { INV_SIZE } from '../core/inventory/inventory';
import { isItem, itemMaxDurability, itemMaxStack } from '../core/items/items';
import { MAX_FOOD, MAX_HEALTH, MAX_OXYGEN } from '../core/survival/survival';
import { CHUNK_H } from '../core/world/chunk';

export type GameMode = 'survival' | 'creative';
export type Dimension = 'overworld' | 'nether';

export interface WorldSave {
  id: string;
  name: string;
  seed: number;
  gameMode?: GameMode; // 不存=survival（老档迁移）
  lastPlayed: number;
  edits: Record<string, number>; // "x,y,z" -> blockId（0=被挖空）；维度前缀："nether:x,y,z" = 下界，无前缀 = 主世界
  player?: { x: number; y: number; z: number; yaw: number; pitch: number };
  inv?: ({ id: number; count: number; dur?: number } | null)[]; // 背包；dur=工具剩余耐久
  survival?: {
    health: number;
    food: number;
    saturation: number;
    exhaustion: number;
    oxygen?: number;
    oxygenTimer?: number;
  }; // 生命/饥饿
  worldTime?: number; // 昼夜更替：世界时间(刻，0..24000)，不存则新世界从清晨开始
  mobs?: SerializedMob[]; // 玩家附近的生物（动物/敌对）；不存则新世界/旧档进场时撒新群
  furnaces?: Record<string, FurnaceState>; // 熔炉状态("overworld:x,y,z"/"nether:x,y,z"→炉内料/燃料/进度)
  currentDimension?: Dimension; // 玩家当前维度；不存则主世界
  playerByDimension?: Partial<
    Record<Dimension, { x: number; y: number; z: number; yaw: number; pitch: number }>
  >; // 各维度玩家位置（可选）
  mobsByDimension?: Partial<Record<Dimension, SerializedMob[]>>; // 各维度生物群（可选）
  dropsByDimension?: Partial<Record<Dimension, ItemDrop[]>>; // 各维度地面掉落物；不存则为空
  arrowsByDimension?: Partial<Record<Dimension, Arrow[]>>; // 各维度飞行/插地箭；不存则为空
  portalLinks?: Record<string, [number, number, number]>; // 传送门映射(待扩展)
}

const KEY = 'mineworld.saves';
const MAX_WORLD_COORD = 30_000_000; // 与原版世界边界同量级；挡住会让区块坐标/循环溢出的伪造值
const MIN_ENTITY_Y = -1024;
const MAX_ENTITY_Y = 4096; // 仍允许创造模式飞到世界顶层上方
const MAX_ENTITY_SPEED = 128;
const MAX_SAVED_ENTITIES = 4096;
const MAX_DROP_AGE = 300;
const MAX_ARROW_AGE = 1200;
const MAX_ARROW_DAMAGE = 64;
const MAX_EGG_TIMER = 12_000;
const MAX_FURNACE_BURN = 16_000; // 当前最长燃料：煤炭块
const DAY_TICKS = 24_000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function finite(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

function finiteInRange(value: unknown, min: number, max: number): value is number {
  return finite(value) && value >= min && value <= max;
}

function integerInRange(value: unknown, min: number, max: number): value is number {
  return Number.isSafeInteger(value) && (value as number) >= min && (value as number) <= max;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function wrapYaw(yaw: number): number {
  const wrapped = yaw % (Math.PI * 2);
  return wrapped > Math.PI
    ? wrapped - Math.PI * 2
    : wrapped < -Math.PI
      ? wrapped + Math.PI * 2
      : wrapped;
}

function validEntityCoordinates(x: unknown, y: unknown, z: unknown): x is number {
  return (
    finiteInRange(x, -MAX_WORLD_COORD, MAX_WORLD_COORD) &&
    finiteInRange(y, MIN_ENTITY_Y, MAX_ENTITY_Y) &&
    finiteInRange(z, -MAX_WORLD_COORD, MAX_WORLD_COORD)
  );
}

function sanitizePosition(value: unknown): NonNullable<WorldSave['player']> | undefined {
  if (
    !isRecord(value) ||
    !validEntityCoordinates(value.x, value.y, value.z) ||
    !finite(value.yaw) ||
    !finiteInRange(value.pitch, -Math.PI / 2, Math.PI / 2)
  )
    return undefined;
  return {
    x: value.x,
    y: value.y as number,
    z: value.z as number,
    yaw: wrapYaw(value.yaw),
    pitch: value.pitch,
  };
}

function blockCoordinates(
  key: string,
  allowOverworldPrefix: boolean,
): [number, number, number] | null {
  let coordinates = key;
  if (key.startsWith('nether:')) coordinates = key.slice(7);
  else if (allowOverworldPrefix && key.startsWith('overworld:')) coordinates = key.slice(10);
  else if (key.includes(':')) return null;
  const parts = coordinates.split(',');
  if (parts.length !== 3 || !parts.every((part) => /^-?\d+$/.test(part))) return null;
  const [x, y, z] = parts.map(Number);
  if (
    !integerInRange(x, -MAX_WORLD_COORD, MAX_WORLD_COORD) ||
    !integerInRange(y, 0, CHUNK_H - 1) ||
    !integerInRange(z, -MAX_WORLD_COORD, MAX_WORLD_COORD)
  )
    return null;
  return [x, y, z];
}

function validEditKey(key: string): boolean {
  return blockCoordinates(key, false) !== null;
}

function validFurnaceKey(key: string): boolean {
  return blockCoordinates(key, true) !== null;
}

function validPortalKey(key: string): boolean {
  // 新档以整座门的维度/朝向/锚点为键；旧档则以某个门内方块为键，读档时仍需兼容迁移。
  const canonical = /^portal:(overworld|nether):(x|z):(.+)$/.exec(key);
  if (canonical) return blockCoordinates(canonical[3], false) !== null;
  return (key.startsWith('overworld:') || key.startsWith('nether:')) && validFurnaceKey(key);
}

function isRegisteredBlock(id: unknown): id is number {
  return Number.isInteger(id) && (id as number) >= 0 && BLOCKS[id as number]?.id === id;
}

function isHoldableId(id: unknown): id is number {
  return (
    Number.isInteger(id) &&
    (id as number) > 0 &&
    (BLOCKS[id as number]?.id === id || isItem(id as number))
  );
}

type SavedStack = NonNullable<NonNullable<WorldSave['inv']>[number]>;

function sanitizeStack(value: unknown): SavedStack | null {
  if (
    !isRecord(value) ||
    !isHoldableId(value.id) ||
    !Number.isInteger(value.count) ||
    (value.count as number) <= 0
  )
    return null;

  const id = value.id;
  const stack: SavedStack = {
    id,
    count: Math.min(value.count as number, itemMaxStack(id)),
  };
  const maxDurability = itemMaxDurability(id);
  if (maxDurability !== null && value.dur !== undefined) {
    // 损坏耐久不能当成“满耐久”修复；过大的旧值则安全截到该工具真实上限。
    if (!integerInRange(value.dur, 0, Number.MAX_SAFE_INTEGER)) return null;
    stack.dur = Math.min(value.dur, maxDurability);
  }
  return stack;
}

function sanitizeEdits(value: unknown): Record<string, number> {
  const edits: Record<string, number> = {};
  if (!isRecord(value)) return edits;
  for (const [key, id] of Object.entries(value)) {
    if (validEditKey(key) && isRegisteredBlock(id)) edits[key] = id;
  }
  return edits;
}

function sanitizeInventory(value: unknown): WorldSave['inv'] | undefined {
  if (!Array.isArray(value)) return undefined;
  return value.slice(0, INV_SIZE).map((entry) => {
    if (entry === null) return null;
    return sanitizeStack(entry);
  });
}

function isMobKind(value: unknown): value is MobKind {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(MOB_DEFS, value);
}

function sanitizeMobs(value: unknown): SerializedMob[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const mobs: SerializedMob[] = [];
  for (const entry of value.slice(0, MAX_SAVED_ENTITIES)) {
    if (
      !isRecord(entry) ||
      !isMobKind(entry.kind) ||
      !validEntityCoordinates(entry.x, entry.y, entry.z) ||
      !finite(entry.yaw) ||
      !finiteInRange(entry.health, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER)
    )
      continue;
    const mob: SerializedMob = {
      kind: entry.kind,
      x: entry.x,
      y: entry.y as number,
      z: entry.z as number,
      yaw: wrapYaw(entry.yaw),
      health: Math.min(entry.health, MOB_DEFS[entry.kind].hp),
    };
    if (entry.kind === 'chicken' && integerInRange(entry.egg, 0, MAX_EGG_TIMER))
      mob.egg = entry.egg;
    mobs.push(mob);
  }
  return mobs;
}

function sanitizeFurnaceSlot(id: unknown, count: unknown): [number, number] {
  if (!isHoldableId(id) || !Number.isInteger(count) || (count as number) <= 0) return [0, 0];
  return [id, Math.min(count as number, itemMaxStack(id))];
}

function sanitizeTimer(value: unknown, max: number): number {
  return Number.isSafeInteger(value) && (value as number) >= 0 ? Math.min(value as number, max) : 0;
}

function sanitizeFurnaces(value: unknown): WorldSave['furnaces'] | undefined {
  if (!isRecord(value)) return undefined;
  const furnaces: Record<string, FurnaceState> = {};
  for (const [key, entry] of Object.entries(value)) {
    if (!validFurnaceKey(key) || !isRecord(entry)) continue;
    const [input, inputN] = sanitizeFurnaceSlot(entry.input, entry.inputN);
    let [fuel, fuelN] = sanitizeFurnaceSlot(entry.fuel, entry.fuelN);
    const [output, outputN] = sanitizeFurnaceSlot(entry.output, entry.outputN);
    let fuelDur: number | undefined;
    if (fuel !== 0 && entry.fuelDur !== undefined) {
      const maxDurability = itemMaxDurability(fuel);
      if (maxDurability !== null) {
        if (integerInRange(entry.fuelDur, 0, Number.MAX_SAFE_INTEGER)) {
          fuelDur = Math.min(entry.fuelDur, maxDurability);
        } else {
          // 不能把损坏值非法的工具当“未写耐久=满耐久”修复；与背包清洗一致，
          // 只丢弃这一个坏槽，不影响同一座熔炉的原料、产物和计时。
          fuel = 0;
          fuelN = 0;
        }
      }
    }
    const burnMax = sanitizeTimer(entry.burnMax, MAX_FURNACE_BURN);
    const furnace: FurnaceState = {
      input,
      inputN,
      fuel,
      fuelN,
      output,
      outputN,
      burn: Math.min(sanitizeTimer(entry.burn, MAX_FURNACE_BURN), burnMax),
      burnMax,
      cook: sanitizeTimer(entry.cook, COOK_TICKS),
    };
    if (fuelDur !== undefined && fuelN > 0) furnace.fuelDur = fuelDur;
    furnaces[key] = furnace;
  }
  return furnaces;
}

function sanitizeSurvival(value: unknown): WorldSave['survival'] | undefined {
  if (!isRecord(value)) return undefined;
  const required = ['health', 'food', 'saturation', 'exhaustion'] as const;
  if (!required.every((field) => finite(value[field]))) return undefined;
  const food = Math.floor(clamp(value.food as number, 0, MAX_FOOD));
  const survival: NonNullable<WorldSave['survival']> = {
    health: clamp(value.health as number, 0, MAX_HEALTH),
    food,
    saturation: clamp(value.saturation as number, 0, food),
    exhaustion: clamp(value.exhaustion as number, 0, 40),
  };
  if (finite(value.oxygen)) survival.oxygen = Math.floor(clamp(value.oxygen, 0, MAX_OXYGEN));
  if (finite(value.oxygenTimer)) survival.oxygenTimer = Math.floor(clamp(value.oxygenTimer, 0, 30));
  return survival;
}

function sanitizePlayerByDimension(value: unknown): WorldSave['playerByDimension'] | undefined {
  if (!isRecord(value)) return undefined;
  const result: NonNullable<WorldSave['playerByDimension']> = {};
  const overworld = sanitizePosition(value.overworld);
  const nether = sanitizePosition(value.nether);
  if (overworld) result.overworld = overworld;
  if (nether) result.nether = nether;
  return result;
}

function sanitizeMobsByDimension(value: unknown): WorldSave['mobsByDimension'] | undefined {
  if (!isRecord(value)) return undefined;
  const result: NonNullable<WorldSave['mobsByDimension']> = {};
  const overworld = sanitizeMobs(value.overworld);
  const nether = sanitizeMobs(value.nether);
  if (overworld) result.overworld = overworld;
  if (nether) result.nether = nether;
  return result;
}

function sanitizeDrops(value: unknown): ItemDrop[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const drops: ItemDrop[] = [];
  for (const entry of value.slice(0, MAX_SAVED_ENTITIES)) {
    const stack = sanitizeStack(entry);
    if (
      !isRecord(entry) ||
      !stack ||
      !validEntityCoordinates(entry.x, entry.y, entry.z) ||
      !finiteInRange(entry.vx, -MAX_ENTITY_SPEED, MAX_ENTITY_SPEED) ||
      !finiteInRange(entry.vy, -MAX_ENTITY_SPEED, MAX_ENTITY_SPEED) ||
      !finiteInRange(entry.vz, -MAX_ENTITY_SPEED, MAX_ENTITY_SPEED) ||
      !finiteInRange(entry.age, 0, MAX_DROP_AGE)
    )
      continue;
    const drop: ItemDrop = {
      id: stack.id,
      count: stack.count,
      x: entry.x,
      y: entry.y as number,
      z: entry.z as number,
      vx: entry.vx,
      vy: entry.vy,
      vz: entry.vz,
      age: entry.age,
    };
    if (stack.dur !== undefined) drop.dur = stack.dur;
    drops.push(drop);
  }
  return drops;
}

function sanitizeDropsByDimension(value: unknown): WorldSave['dropsByDimension'] | undefined {
  if (!isRecord(value)) return undefined;
  const result: NonNullable<WorldSave['dropsByDimension']> = {};
  const overworld = sanitizeDrops(value.overworld);
  const nether = sanitizeDrops(value.nether);
  if (overworld) result.overworld = overworld;
  if (nether) result.nether = nether;
  return result;
}

function sanitizeArrows(value: unknown): Arrow[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const arrows: Arrow[] = [];
  for (const entry of value.slice(0, MAX_SAVED_ENTITIES)) {
    if (
      !isRecord(entry) ||
      !validEntityCoordinates(entry.x, entry.y, entry.z) ||
      !finiteInRange(entry.vx, -MAX_ENTITY_SPEED, MAX_ENTITY_SPEED) ||
      !finiteInRange(entry.vy, -MAX_ENTITY_SPEED, MAX_ENTITY_SPEED) ||
      !finiteInRange(entry.vz, -MAX_ENTITY_SPEED, MAX_ENTITY_SPEED) ||
      !integerInRange(entry.age, 0, MAX_ARROW_AGE) ||
      !finiteInRange(entry.damage, Number.MIN_VALUE, MAX_ARROW_DAMAGE) ||
      typeof entry.stuck !== 'boolean' ||
      typeof entry.fromPlayer !== 'boolean'
    )
      continue;
    arrows.push({
      x: entry.x,
      y: entry.y as number,
      z: entry.z as number,
      vx: entry.vx,
      vy: entry.vy,
      vz: entry.vz,
      age: entry.age,
      stuck: entry.stuck,
      fromPlayer: entry.fromPlayer,
      damage: entry.damage,
    });
  }
  return arrows;
}

function sanitizeArrowsByDimension(value: unknown): WorldSave['arrowsByDimension'] | undefined {
  if (!isRecord(value)) return undefined;
  const result: NonNullable<WorldSave['arrowsByDimension']> = {};
  const overworld = sanitizeArrows(value.overworld);
  const nether = sanitizeArrows(value.nether);
  if (overworld) result.overworld = overworld;
  if (nether) result.nether = nether;
  return result;
}

function sanitizePortalLinks(value: unknown): WorldSave['portalLinks'] | undefined {
  if (!isRecord(value)) return undefined;
  const result: NonNullable<WorldSave['portalLinks']> = {};
  for (const [key, destination] of Object.entries(value)) {
    if (
      validPortalKey(key) &&
      Array.isArray(destination) &&
      destination.length === 3 &&
      validEntityCoordinates(destination[0], destination[1], destination[2])
    )
      result[key] = [destination[0], destination[1] as number, destination[2] as number];
  }
  return result;
}

/**
 * localStorage 是用户可编辑且会跨版本保留的输入，不能直接断言成 WorldSave。
 * 必要的世界标识损坏时跳过该条；局部可选字段损坏时只丢弃坏字段，尽量挽救旧世界。
 * 用 spread 保留未来版本新增且本版本不认识的字段，避免一次读取后再保存就把它们抹掉。
 */
function sanitizeWorld(value: unknown): WorldSave | null {
  if (
    !isRecord(value) ||
    typeof value.id !== 'string' ||
    value.id.length === 0 ||
    typeof value.name !== 'string' ||
    !integerInRange(value.seed, -2_000_000_000, 2_000_000_000) ||
    !integerInRange(value.lastPlayed, 0, Number.MAX_SAFE_INTEGER)
  )
    return null;

  const world = { ...value, edits: sanitizeEdits(value.edits) } as unknown as WorldSave;
  if (value.gameMode !== 'survival' && value.gameMode !== 'creative') delete world.gameMode;
  if (value.currentDimension !== 'overworld' && value.currentDimension !== 'nether')
    delete world.currentDimension;
  const player = sanitizePosition(value.player);
  if (player) world.player = player;
  else delete world.player;
  const inv = sanitizeInventory(value.inv);
  if (inv) world.inv = inv;
  else delete world.inv;
  const survival = sanitizeSurvival(value.survival);
  if (survival) world.survival = survival;
  else delete world.survival;
  if (finite(value.worldTime)) {
    const normalized = Math.floor(value.worldTime) % DAY_TICKS;
    world.worldTime = normalized < 0 ? normalized + DAY_TICKS : normalized;
  } else delete world.worldTime;
  const mobs = sanitizeMobs(value.mobs);
  if (mobs) world.mobs = mobs;
  else delete world.mobs;
  const furnaces = sanitizeFurnaces(value.furnaces);
  if (furnaces) world.furnaces = furnaces;
  else delete world.furnaces;
  const players = sanitizePlayerByDimension(value.playerByDimension);
  if (players) world.playerByDimension = players;
  else delete world.playerByDimension;
  const mobsByDimension = sanitizeMobsByDimension(value.mobsByDimension);
  if (mobsByDimension) world.mobsByDimension = mobsByDimension;
  else delete world.mobsByDimension;
  const dropsByDimension = sanitizeDropsByDimension(value.dropsByDimension);
  if (dropsByDimension) world.dropsByDimension = dropsByDimension;
  else delete world.dropsByDimension;
  const arrowsByDimension = sanitizeArrowsByDimension(value.arrowsByDimension);
  if (arrowsByDimension) world.arrowsByDimension = arrowsByDimension;
  else delete world.arrowsByDimension;
  const portalLinks = sanitizePortalLinks(value.portalLinks);
  if (portalLinks) world.portalLinks = portalLinks;
  else delete world.portalLinks;
  return world;
}

type ReadResult =
  | { ok: true; worlds: WorldSave[]; rawEntries: unknown[] }
  | { ok: false; worlds: []; rawEntries: []; error: unknown };

function readStoredWorlds(): ReadResult {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === null) return { ok: true, worlds: [], rawEntries: [] };
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed))
      return {
        ok: false,
        worlds: [],
        rawEntries: [],
        error: new Error('存档顶层结构不是数组'),
      };
    return {
      ok: true,
      worlds: parsed.map(sanitizeWorld).filter((world): world is WorldSave => world !== null),
      // 列表展示读清洗后的数据；写入时则用原始条目保住别的世界里当前版本
      // 尚不认识的字段/物品。保存一个世界不能顺带改坏或删除另一个世界。
      rawEntries: parsed,
    };
  } catch (error) {
    return { ok: false, worlds: [], rawEntries: [], error };
  }
}

function readAll(): WorldSave[] {
  return readStoredWorlds().worlds;
}

function writeAll(list: readonly unknown[]): boolean {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    // 配额溢出 / 隐私模式下 setItem 会抛。调用者必须能知道这次没有存上，
    // 尤其“保存并退出”不能在失败后仍刷新页面造成静默丢档。
    console.warn('[mineworld] 存档写入失败(localStorage 配额满或不可用):', e);
    return false;
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
export function createWorld(
  name: string,
  seed?: number,
  gameMode: GameMode = 'survival',
): WorldSave {
  const w: WorldSave = {
    id: `${Date.now().toString(36)}-${Math.floor(Math.random() * 1e6).toString(36)}`,
    name: name.trim() || '新的世界',
    seed: seed ?? Math.floor(Math.random() * 2_000_000_000),
    gameMode,
    lastPlayed: Date.now(),
    edits: {},
  };
  if (!saveWorld(w)) throw new Error('无法写入浏览器存档，请检查隐私模式或清理网站存储空间。');
  return w;
}

// 写入/更新一个世界
export function saveWorld(world: WorldSave): boolean {
  const safe = sanitizeWorld(world);
  if (!safe) {
    console.warn('[mineworld] 拒绝写入结构损坏的世界存档');
    return false;
  }
  const stored = readStoredWorlds();
  if (!stored.ok) {
    console.warn('[mineworld] 原存档无法读取，拒绝覆盖以免丢失数据:', stored.error);
    return false;
  }
  // 只替换目标 id；其他原始条目逐字义保留。过去这里把所有世界先 sanitize 再回写，
  // 会在保存当前世界时悄悄抹掉另一个未来版本世界中的新字段/新方块，甚至整个坏条目。
  const list: unknown[] = [];
  let replaced = false;
  for (const entry of stored.rawEntries) {
    if (isRecord(entry) && entry.id === safe.id) {
      if (!replaced) list.push(safe);
      replaced = true;
    } else list.push(entry);
  }
  if (!replaced) list.push(safe);
  return writeAll(list);
}

export function deleteWorld(id: string): boolean {
  const stored = readStoredWorlds();
  if (!stored.ok) {
    console.warn('[mineworld] 原存档无法读取，拒绝删除以免丢失数据:', stored.error);
    return false;
  }
  // 删除也只按原始条目的 id 定点移除，不把其余世界借机清洗/降级。
  return writeAll(stored.rawEntries.filter((entry) => !isRecord(entry) || entry.id !== id));
}

// 按维度生成编辑键：主世界无前缀(向后兼容老档)、下界有 "nether:" 前缀。
export function dimEditKey(dim: 'overworld' | 'nether', x: number, y: number, z: number): string {
  return dim === 'nether' ? `nether:${x},${y},${z}` : `${x},${y},${z}`;
}

// 反解编辑键：有 "nether:" 前缀=下界，否则主世界。
export function parseEditKey(key: string): {
  dim: 'overworld' | 'nether';
  x: number;
  y: number;
  z: number;
} {
  if (key.startsWith('nether:')) {
    const [x, y, z] = key.slice(7).split(',').map(Number);
    return { dim: 'nether', x, y, z };
  }
  const [x, y, z] = key.split(',').map(Number);
  return { dim: 'overworld', x, y, z };
}
