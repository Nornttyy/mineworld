import { detectPortalFrame } from './portal';

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
