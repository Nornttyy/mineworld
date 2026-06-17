// MC 风格「光标(手持) ↔ 格子」交互——纯函数，操作 (ItemStack|null)[] + 光标，便于单测。
// UI 只负责渲染，并把鼠标事件翻译成这些调用。所有函数原地修改 slots，返回新的光标。
import { addItem, type ItemStack, type Inventory } from './inventory';

export type Slots = (ItemStack | null)[];
export type Cursor = ItemStack | null;
export type MaxStackOf = (id: number) => number;

// 左键点格 i：空手→拿起整组；持物+空格→放下整组；同类→堆叠(受上限,溢出留光标)；异类→交换。
export function leftClick(slots: Slots, i: number, cursor: Cursor, maxOf: MaxStackOf): Cursor {
  const cell = slots[i];
  if (!cursor) {
    slots[i] = null;
    return cell;
  }
  if (!cell) {
    slots[i] = cursor;
    return null;
  }
  if (cell.id === cursor.id) {
    const room = Math.max(0, maxOf(cell.id) - cell.count);
    const move = Math.min(room, cursor.count);
    cell.count += move;
    cursor.count -= move;
    return cursor.count > 0 ? cursor : null;
  }
  slots[i] = cursor;
  return cell;
}

// 右键点格 i：空手→拿一半(向上取整给光标)；持物+空/同类→放 1 个；异类→交换。
export function rightClick(slots: Slots, i: number, cursor: Cursor, maxOf: MaxStackOf): Cursor {
  const cell = slots[i];
  if (!cursor) {
    if (!cell) return null;
    const take = Math.ceil(cell.count / 2);
    const left = cell.count - take;
    slots[i] = left > 0 ? { id: cell.id, count: left } : null;
    return { id: cell.id, count: take };
  }
  if (!cell) {
    slots[i] = { id: cursor.id, count: 1 };
    cursor.count -= 1;
    return cursor.count > 0 ? cursor : null;
  }
  if (cell.id === cursor.id) {
    if (cell.count < maxOf(cell.id)) {
      cell.count += 1;
      cursor.count -= 1;
      return cursor.count > 0 ? cursor : null;
    }
    return cursor; // 已满，不放
  }
  slots[i] = cursor;
  return cell;
}

// Shift 快速转移：把 from[i] 整组尽量塞进 to 的 [start,end) 区(同类堆叠+空格)，塞不下的留原格。
export function quickMove(
  from: Slots,
  i: number,
  to: Inventory,
  maxOf: MaxStackOf,
  start = 0,
  end = to.length,
): void {
  const cell = from[i];
  if (!cell) return;
  const left = addItem(to, cell.id, cell.count, maxOf(cell.id), start, end);
  from[i] = left > 0 ? { id: cell.id, count: left } : null;
}
