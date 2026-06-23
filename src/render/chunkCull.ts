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

// 建图优先：玩家看得见/正走向的区块该先建，别把每帧有限的加载预算浪费在身后(cullToView 反正隐藏)的
// 区块上——否则往前走时前方新揭开的区块排在身后区块之后，预算追不上 → "前面区块加载不出来"。
export const BUILD_AHEAD_COS = -0.2; // 视向夹角 < ~101.5° 算"前方"：比 162°渲染锥再宽 ~40°，留转身余量
export const BUILD_NEAR2 = 2.25; // 近处(≤1.5 区块,以区块²为单位)恒优先，脚下/相邻别因朝向被压后

// 区块【偏移】(dCx,dCz，相对玩家所在区块，单位=区块) 是否在"优先建"的前方扇区内。
// dir=(0,0)(未传朝向) → dot=0 ≥ -0.2 → 恒 true，即退回纯距离排序(向后兼容预加载/测试)。
export function chunkAhead(
  dCx: number,
  dCz: number,
  dirX: number,
  dirZ: number,
  aheadCos = BUILD_AHEAD_COS,
  near2 = BUILD_NEAR2,
): boolean {
  const d2 = dCx * dCx + dCz * dCz;
  if (d2 <= near2) return true; // 近 → 恒优先
  return (dCx * dirX + dCz * dirZ) / Math.sqrt(d2) >= aheadCos;
}
