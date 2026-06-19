// 开局：把一片区域里「能流动」的水（下方或四周挨着空气的水 front：海/湖边的瀑布口、洞穴破口等）
// 激活进流动水模拟。世界生成的水都是静止源头、从不被激活，故这些 front 本来永远不流；激活后配合
// presettleWater 就能在加载阶段一次流到位，玩家进场即见已流好的水，而非进游戏后看着它慢慢流。

export interface ActivateSink {
  activate(x: number, y: number, z: number): void;
}
export interface WaterScan {
  isWater(x: number, y: number, z: number): boolean;
  isAir(x: number, y: number, z: number): boolean; // 水能流进去的空（空气）
}
export interface Region {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
}

export function activateFlowableWater(sim: ActivateSink, scan: WaterScan, r: Region): number {
  let n = 0;
  for (let y = r.minY; y <= r.maxY; y++) {
    for (let x = r.minX; x <= r.maxX; x++) {
      for (let z = r.minZ; z <= r.maxZ; z++) {
        if (!scan.isWater(x, y, z)) continue;
        // 水永不向上爬：只看下方与四周是否有空气可流入
        if (
          scan.isAir(x, y - 1, z) ||
          scan.isAir(x + 1, y, z) ||
          scan.isAir(x - 1, y, z) ||
          scan.isAir(x, y, z + 1) ||
          scan.isAir(x, y, z - 1)
        ) {
          sim.activate(x, y, z);
          n++;
        }
      }
    }
  }
  return n;
}
