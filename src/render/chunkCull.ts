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

// 竖直分段剔除（配合 meshSplit）：段是矮网格(各占一段高度)。three.js 内建视锥剔除在本仓库对这类小包围盒
// 几何会"整批误剔"(同 SkyObjects/ParticleRenderer 关 frustumCulled 的原因) → 段会无故消失成空洞。
// 故段一律关 frustumCulled，改这里手动剔除：只剔"整段都在玩家脚下很深处"的段(深处洞穴/基岩，站地面绝对
// 看不见)，留足余量(VERTICAL_CULL_MARGIN)绝不剔到正在看的地表/树。下到地下时余量内的段全留(不剔身边)。
export const VERTICAL_CULL_MARGIN = 40; // 段顶低于玩家这么多格才剔(站地面≈剔掉最深洞穴段=约半数三角形)
// 某段(段顶世界 Y = sectionTopY)是否整段都深在玩家(playerY)脚下 → 可安全隐藏。
export const sectionTooDeep = (sectionTopY: number, playerY: number, margin = VERTICAL_CULL_MARGIN): boolean =>
  sectionTopY < playerY - margin;
