// 手动水平视锥剔除：区块是整列(192 高)单网格，包围球半径≈96 太大，three.js 内建视锥剔除
// 几乎剔不掉任何东西(身后区块的大包围球也与视锥相交) → 每帧把加载的区块全画了。
// 这里按区块的 XZ 方向与玩家视线方向的夹角，手动隐藏正后方/两侧明显看不见的区块(只切 .visible，
// 零额外内存、零几何改动 → 不会像竖直分段那样 OOM)。竖直(抬头/低头)不剔，靠保守阈值避免穿帮。

export const CULL_COS = 0.15; // cos(≈81°)：区块方向与视线夹角 > ~81° → 剔。留足余量(FOV+疾跑+区块宽)，绝不剔到可见的
export const CULL_NEAR2 = 24 * 24; // 这么近(格²，≈1.5 区块)以内的区块恒可见(脚下/相邻，别剔)

// 区块中心(ccx,ccz) 在相机(px,pz、单位水平朝向 dirX,dirZ)的水平视野内？太近恒可见。
export function chunkInView(
  ccx: number,
  ccz: number,
  px: number,
  pz: number,
  dirX: number,
  dirZ: number,
  cullCos = CULL_COS,
  near2 = CULL_NEAR2,
): boolean {
  const ddx = ccx - px;
  const ddz = ccz - pz;
  const d2 = ddx * ddx + ddz * ddz;
  if (d2 <= near2) return true; // 太近 → 恒可见
  const cosA = (ddx * dirX + ddz * dirZ) / Math.sqrt(d2); // 与视线夹角余弦
  return cosA >= cullCos;
}
