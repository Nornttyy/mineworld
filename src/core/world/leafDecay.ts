import { OAK_LEAVES, OAK_LOG } from '../blocks/registry';

// 树叶腐烂支撑判定（同 MC）：每片树叶若到最近原木的"沿树叶洪泛距离" > MAX_DIST 即失去支撑，会腐烂。
// 原木全被砍光后，整片树冠都失去支撑 → 随机慢慢消失。纯函数，可无头单测。

export const LEAF_MAX_DIST = 6; // 树叶到原木的最大支撑距离（MC=6）

type GetBlock = (x: number, y: number, z: number) => number;
export interface Cell {
  x: number;
  y: number;
  z: number;
}

const FACES: ReadonlyArray<readonly [number, number, number]> = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

const key = (x: number, y: number, z: number): string => `${x},${y},${z}`;

/**
 * 找出以 (cx,cy,cz) 为中心、半径 radius 立方区内"失去原木支撑"的树叶坐标。
 * 多源 BFS：从（区域外延 LEAF_MAX_DIST 的）所有原木出发，沿树叶扩散 ≤LEAF_MAX_DIST，
 * 标记被支撑的树叶；区域内未被标记到的树叶即应腐烂。
 * 注意：失去支撑的树叶永远不在别的树叶的支撑链上，故逐片移除时无需级联重算（调用方每次断木时调一次即可）。
 */
export function findUnsupportedLeaves(getBlock: GetBlock, cx: number, cy: number, cz: number, radius = LEAF_MAX_DIST): Cell[] {
  const scan = radius + LEAF_MAX_DIST; // 支撑原木可能在输出区外 LEAF_MAX_DIST 内，BFS 区要放大
  const dist = new Map<string, number>();
  const queue: Cell[] = [];
  // 种子：放大区内所有原木（dist 0）
  for (let x = cx - scan; x <= cx + scan; x++)
    for (let y = cy - scan; y <= cy + scan; y++)
      for (let z = cz - scan; z <= cz + scan; z++)
        if (getBlock(x, y, z) === OAK_LOG) {
          dist.set(key(x, y, z), 0);
          queue.push({ x, y, z });
        }
  // BFS 仅沿树叶扩散，距离封顶 LEAF_MAX_DIST
  for (let head = 0; head < queue.length; head++) {
    const c = queue[head];
    const d = dist.get(key(c.x, c.y, c.z)) ?? 0;
    if (d >= LEAF_MAX_DIST) continue;
    for (const [dx, dy, dz] of FACES) {
      const nx = c.x + dx;
      const ny = c.y + dy;
      const nz = c.z + dz;
      if (getBlock(nx, ny, nz) !== OAK_LEAVES) continue;
      const k = key(nx, ny, nz);
      if (dist.has(k)) continue;
      dist.set(k, d + 1);
      queue.push({ x: nx, y: ny, z: nz });
    }
  }
  // 输出区(原始半径)内未被支撑到的树叶
  const out: Cell[] = [];
  for (let x = cx - radius; x <= cx + radius; x++)
    for (let y = cy - radius; y <= cy + radius; y++)
      for (let z = cz - radius; z <= cz + radius; z++)
        if (getBlock(x, y, z) === OAK_LEAVES && !dist.has(key(x, y, z))) out.push({ x, y, z });
  return out;
}
