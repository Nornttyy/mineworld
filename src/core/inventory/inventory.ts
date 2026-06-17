// 物品栏（生存）：一排可堆叠的格子。纯数据 + 纯函数，可单测。
// 目前只有 9 格快捷栏（暂无背包大格子）。每格 = 某方块 id × 数量，或空(null)。

export interface ItemStack {
  id: number;
  count: number;
}

export const HOTBAR_SIZE = 9;
export const STACK_MAX = 64;

export type Inventory = (ItemStack | null)[];

export function emptyInventory(): Inventory {
  return Array.from({ length: HOTBAR_SIZE }, () => null);
}

// 加入 count 个 id：先叠到已有同类未满栈，再填空槽。返回放不下的剩余数量。
// maxStack 为该物品的堆叠上限（工具=1，方块=64）。
export function addItem(inv: Inventory, id: number, count: number, maxStack = STACK_MAX): number {
  for (let i = 0; i < inv.length && count > 0; i++) {
    const s = inv[i];
    if (s && s.id === id && s.count < maxStack) {
      const add = Math.min(maxStack - s.count, count);
      s.count += add;
      count -= add;
    }
  }
  for (let i = 0; i < inv.length && count > 0; i++) {
    if (!inv[i]) {
      const add = Math.min(maxStack, count);
      inv[i] = { id, count: add };
      count -= add;
    }
  }
  return count;
}

// 背包里某物品总数
export function countItem(inv: Inventory, id: number): number {
  let n = 0;
  for (const s of inv) if (s && s.id === id) n += s.count;
  return n;
}

// 移除 count 个 id（从前往后扣）；返回实际移除数量。
export function removeItems(inv: Inventory, id: number, count: number): number {
  let need = count;
  for (let i = 0; i < inv.length && need > 0; i++) {
    const s = inv[i];
    if (s && s.id === id) {
      const take = Math.min(s.count, need);
      s.count -= take;
      need -= take;
      if (s.count <= 0) inv[i] = null;
    }
  }
  return count - need;
}

// 从某格取出 1 个；取空则置 null。返回取出的方块 id，空格返回 null。
export function takeOne(inv: Inventory, slot: number): number | null {
  const s = inv[slot];
  if (!s || s.count <= 0) return null;
  s.count--;
  const id = s.id;
  if (s.count <= 0) inv[slot] = null;
  return id;
}

// 序列化/反序列化（存档用）：直接是 (ItemStack|null)[]，已是纯数据，做个深拷贝与校验。
export function serializeInventory(inv: Inventory): (ItemStack | null)[] {
  return inv.map((s) => (s ? { id: s.id, count: s.count } : null));
}

export function deserializeInventory(data: unknown): Inventory {
  const inv = emptyInventory();
  if (!Array.isArray(data)) return inv;
  for (let i = 0; i < HOTBAR_SIZE; i++) {
    const s = data[i];
    if (s && typeof s.id === 'number' && typeof s.count === 'number' && s.count > 0) {
      inv[i] = { id: s.id, count: Math.min(STACK_MAX, s.count) };
    }
  }
  return inv;
}
