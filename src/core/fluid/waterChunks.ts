// 探索期增量灌水的规划：以玩家所在区块为中心、Chebyshev 半径 radius 内、尚未灌过水的区块键列表，
// 按到中心的距离近→远排序（优先激活玩家附近的水）。返回的键形如 "cx,cz"。
export function chunksNeedingWater(
  pcx: number,
  pcz: number,
  radius: number,
  watered: Set<string>,
): string[] {
  const out: Array<{ key: string; d: number }> = [];
  for (let cx = pcx - radius; cx <= pcx + radius; cx++) {
    for (let cz = pcz - radius; cz <= pcz + radius; cz++) {
      const key = `${cx},${cz}`;
      if (watered.has(key)) continue;
      const dx = cx - pcx;
      const dz = cz - pcz;
      out.push({ key, d: dx * dx + dz * dz });
    }
  }
  out.sort((a, b) => a.d - b.d);
  return out.map((o) => o.key);
}
