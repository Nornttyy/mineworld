// 下界传送门框检测（纯逻辑，可单测）。从被点燃的一个【内部格】出发，沿两个水平轴各试一次，
// 判定是否被黑曜石围成合法框（内部 2..21 宽 × 3..21 高，四边黑曜石、角不强制），返回内部格列表(要填传送门)。

export type PortalAxis = 'x' | 'z';
export interface PortalFrame {
  axis: PortalAxis;
  inner: Array<[number, number, number]>;
}

type Probe = (x: number, y: number, z: number) => boolean;
const MAXW = 21;
const MAXH = 21;

function tryAxis(isObsidian: Probe, isInterior: Probe, x: number, y: number, z: number, axis: PortalAxis): PortalFrame | null {
  // i = 沿水平轴相对点火格的偏移；j = 竖直偏移
  const at = (i: number, j: number): [number, number, number] => (axis === 'x' ? [x + i, y + j, z] : [x, y + j, z + i]);
  const interiorAt = (i: number, j: number): boolean => isInterior(...at(i, j));
  const obsidianAt = (i: number, j: number): boolean => isObsidian(...at(i, j));

  if (!interiorAt(0, 0)) return null; // 点火格本身得是内部(空气/传送门)
  // 内部沿轴范围 [iMin,iMax]、竖直范围 [jMin,jMax]（带上限防止开口框无限扫描）
  let iMin = 0;
  while (-iMin < MAXW && interiorAt(iMin - 1, 0)) iMin--;
  let iMax = 0;
  while (iMax < MAXW && interiorAt(iMax + 1, 0)) iMax++;
  let jMin = 0;
  while (-jMin < MAXH && interiorAt(0, jMin - 1)) jMin--;
  let jMax = 0;
  while (jMax < MAXH && interiorAt(0, jMax + 1)) jMax++;

  const w = iMax - iMin + 1;
  const h = jMax - jMin + 1;
  if (w < 2 || w > MAXW || h < 3 || h > MAXH) return null;

  // 内部全是内部格
  for (let i = iMin; i <= iMax; i++) for (let j = jMin; j <= jMax; j++) if (!interiorAt(i, j)) return null;
  // 左右墙（i=iMin-1, iMax+1，覆盖每个 j）= 黑曜石
  for (let j = jMin; j <= jMax; j++) if (!obsidianAt(iMin - 1, j) || !obsidianAt(iMax + 1, j)) return null;
  // 底/顶（j=jMin-1, jMax+1，覆盖每个 i）= 黑曜石
  for (let i = iMin; i <= iMax; i++) if (!obsidianAt(i, jMin - 1) || !obsidianAt(i, jMax + 1)) return null;

  const inner: Array<[number, number, number]> = [];
  for (let i = iMin; i <= iMax; i++) for (let j = jMin; j <= jMax; j++) inner.push(at(i, j));
  return { axis, inner };
}

// 从内部某格 (x,y,z) 检测合法门框；先试 x 轴(门面朝 z)，再试 z 轴。命中返回内部格列表，否则 null。
export function detectPortalFrame(isObsidian: Probe, isInterior: Probe, x: number, y: number, z: number): PortalFrame | null {
  return tryAxis(isObsidian, isInterior, x, y, z, 'x') ?? tryAxis(isObsidian, isInterior, x, y, z, 'z');
}
