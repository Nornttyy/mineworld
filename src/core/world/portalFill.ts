import { detectPortalFrame } from './portal';
import { isSolidId, isLavaId, OBSIDIAN, NETHER_PORTAL } from '../blocks/registry';

// 下界垂直常量（terrain.ts 未导出，这里本地复制——仅本文件造目的地门用）。
const NETHER_LAVA_Y = 31; // 岩浆面：此高度及以下灌静态岩浆
const NETHER_TOP = 127; // 下界顶（含基岩天花板）
const WORLD_TOP = 191; // CHUNK_H-1：主世界从此向下找地表

/**
 * 从被点燃的黑曜石格出发，以其正上方格为内部种子，检测合法下界门框。
 * 命中返回内部格坐标列表（需填充 nether_portal），否则返回 null。
 */
export function ignitePortal(
  getBlock: (x: number, y: number, z: number) => number,
  x: number,
  y: number,
  z: number,
): Array<[number, number, number]> | null {
  const isObsidian = (ax: number, ay: number, az: number): boolean => getBlock(ax, ay, az) === 18;
  const isInterior = (ax: number, ay: number, az: number): boolean => {
    const b = getBlock(ax, ay, az);
    return b === 0 || b === 25;
  };
  const frame = detectPortalFrame(isObsidian, isInterior, x, y + 1, z);
  return frame ? frame.inner : null;
}

/**
 * 主世界↔下界坐标换算（1:8 比例）。
 * overworld→nether: floor(x/8), floor(z/8)
 * nether→overworld: x*8, z*8
 */
export function mapPortalCoord(
  dim: 'overworld' | 'nether',
  x: number,
  z: number,
): [number, number] {
  if (dim === 'overworld') {
    return [Math.floor(x / 8), Math.floor(z / 8)];
  }
  return [x * 8, z * 8];
}

type GetBlock = (x: number, y: number, z: number) => number;

// 在目标维度 (ax,az) 选「门内底格」的 baseY：脚下实心、其上有空间落脚。
// 主世界：从天花板往下找第一段实心(地表)，站其上。
// 下界：岩浆面之上找「脚下实心 + 上方无岩浆」的最低段；找不到返回 null（调用方铺平台保底）。
function findBaseY(get: GetBlock, dim: 'overworld' | 'nether', ax: number, az: number): number | null {
  if (dim === 'overworld') {
    for (let y = WORLD_TOP; y > 1; y--) {
      if (isSolidId(get(ax, y, az)) && !isSolidId(get(ax, y + 1, az))) return y + 1; // 站地表上
    }
    return null;
  }
  // 下界：在 (岩浆面+2 .. 顶-8) 找脚下实心、身位三格无岩浆的最低 baseY
  const lo = NETHER_LAVA_Y + 2;
  const hi = NETHER_TOP - 8;
  for (let y = lo; y <= hi; y++) {
    if (!isSolidId(get(ax, y - 1, az))) continue; // 脚下需实心
    let blockedByLava = false;
    for (let dy = 0; dy < 3; dy++) if (isLavaId(get(ax, y + dy, az))) { blockedByLava = true; break; }
    if (blockedByLava) continue;
    return y;
  }
  return null;
}

/**
 * 在目标维度坐标 (ax,az) 造一座标准下界传送门并保证安全落脚。
 * - 沿 x 轴造 4 宽 × 5 高黑曜石框（内部 2 宽 × 3 高），内部填 NETHER_PORTAL。
 * - 门下铺黑曜石地板（底框即地板）；落点前方(z=az-1)也铺地板 + 清 3 高空气，便于走出。
 * - 清出落脚区(门内 + 框周边一圈)为可站空气，避免窒息/掉岩浆。
 * - 下界若找不到天然实心落脚，则在 NETHER_LAVA_Y+10 处自造黑曜石平台保底。
 * 返回 edits 列表 [x,y,z,id]（黑曜石18 / 传送门25 / 清出处 air 0）与 spawn=门内底格(脚位)。
 * 产出的框保证能被 detectPortalFrame 判为合法门。
 */
export function buildDestinationPortal(
  get: GetBlock,
  dim: 'overworld' | 'nether',
  ax: number,
  az: number,
): { edits: Array<[number, number, number, number]>; spawn: { x: number; y: number; z: number } } {
  let baseY = findBaseY(get, dim, ax, az);
  let platform = false;
  if (baseY === null) {
    baseY = dim === 'nether' ? NETHER_LAVA_Y + 10 : 64; // 保底高度：自铺平台站
    platform = true;
  }

  // 用 Map 去重(同格多次写，后写覆盖)，保证最终 edits 每格唯一、互不矛盾。
  const cells = new Map<string, [number, number, number, number]>();
  const K = (x: number, y: number, z: number) => `${x},${y},${z}`;
  const put = (x: number, y: number, z: number, id: number): void => {
    cells.set(K(x, y, z), [x, y, z, id]);
  };

  // 门内底格(脚位)、门内顶 = baseY+2；左右墙 x=ax-1 / ax+2；底框 baseY-1；顶框 baseY+3。
  const x0 = ax;
  const x1 = ax + 1; // 内部两列
  const yTopInner = baseY + 2;

  // 1) 先清出一块可站空气区：门体所在 x[ax-1..ax+2] × y[baseY-1..baseY+3] × z[az-1..az+1]
  //    （随后被框/传送门覆盖的格会在第 2、3 步重写，留下的就是空气）。
  for (let x = ax - 1; x <= ax + 2; x++) {
    for (let y = baseY - 1; y <= baseY + 3; y++) {
      for (let z = az - 1; z <= az + 1; z++) put(x, y, z, 0);
    }
  }

  // 2) 黑曜石框（4 宽×5 高，门面朝 z；底/顶覆盖 x∈[ax-1,ax+2]，左右墙覆盖 y∈[baseY-1,baseY+3]）
  for (let x = ax - 1; x <= ax + 2; x++) {
    put(x, baseY - 1, az, OBSIDIAN); // 底框(=门下地板)
    put(x, baseY + 3, az, OBSIDIAN); // 顶框
  }
  for (let y = baseY - 1; y <= baseY + 3; y++) {
    put(ax - 1, y, az, OBSIDIAN); // 左墙
    put(ax + 2, y, az, OBSIDIAN); // 右墙
  }

  // 3) 内部填传送门（2 宽×3 高）
  for (let x = x0; x <= x1; x++) {
    for (let y = baseY; y <= yTopInner; y++) put(x, y, az, NETHER_PORTAL);
  }

  // 4) 落脚地板：门内底格下方(已是底框=黑曜石)；落点前方(z=az-1)铺一格黑曜石便于走出，
  //    并把前方 baseY..baseY+1 留作空气(上面第 1 步已清)。平台保底时把整块门基铺实。
  put(x0, baseY - 1, az - 1, OBSIDIAN);
  put(x1, baseY - 1, az - 1, OBSIDIAN);
  if (platform) {
    for (let x = ax - 1; x <= ax + 2; x++) {
      for (let z = az - 1; z <= az + 1; z++) put(x, baseY - 1, z, OBSIDIAN); // 整块门基铺成黑曜石平台
    }
  }

  return {
    edits: [...cells.values()],
    spawn: { x: x0 + 0.5, y: baseY, z: az + 0.5 },
  };
}
