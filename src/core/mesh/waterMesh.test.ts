import { describe, it, expect } from 'vitest';
import { ChunkWorld } from '../world/chunkWorld';
import { meshChunk } from './mesher';

// 头顶有方块的水：应按【真实水位】画出水面(不被强行灌成整块)，且水面看得见(画顶面)。
function maxWaterY(w: ChunkWorld): number {
  const water = meshChunk(w, 0, 0).water;
  let maxY = 0;
  for (let i = 1; i < water.positions.length; i += 3) if (water.positions[i] > maxY) maxY = water.positions[i];
  return maxY;
}
function waterTris(w: ChunkWorld): number {
  return meshChunk(w, 0, 0).water.indices.length / 3;
}

describe('水面高度·头顶有方块（修：放方块后水不再变整块 / 覆盖格的水看得见）', () => {
  const STONE = 1;
  const Y = 150; // 地表之上,场景可控
  const openSides = (w: ChunkWorld): void => {
    for (const [x, z] of [[6, 5], [4, 5], [5, 6], [5, 4]]) w.setBlock(x, Y, z, 0); // 四周空气(侧面会画)
  };

  it('浅水(流动 amount3)头顶有方块 → 仍是矮水，不变整块', () => {
    const w = new ChunkWorld(99);
    w.setBlock(5, Y - 1, 5, STONE); // 地板
    w.setBlock(5, Y + 1, 5, STONE); // 头顶方块
    openSides(w);
    w.setWater(5, Y, 5, 3, false, false); // 浅的流动水(非源头)
    expect(maxWaterY(w)).toBeLessThan(Y + 0.5); // ≈Y+0.33，不该被灌成满格
  });

  it('bug2: 在水上方放/不放方块，水位完全一样（放方块不再把水画成整块）', () => {
    const level = (blockAbove: boolean): number => {
      const w = new ChunkWorld(99);
      w.setBlock(5, Y - 1, 5, STONE); // 地板
      if (blockAbove) w.setBlock(5, Y + 1, 5, STONE); // 头顶方块（或不放）
      openSides(w);
      w.setWater(5, Y, 5, 7, false, false); // 较满的流动水
      return maxWaterY(w);
    };
    // 旧 bug：有方块 → 强行灌满(≈Y+1)；无方块 → 真实矮水位。两者天差地别。
    // 修后：头顶有无方块，水位【一模一样】——放方块绝不改变水的高度/外观。
    expect(level(true)).toBeCloseTo(level(false), 5);
    expect(level(true)).toBeLessThan(Y + 0.95); // 且确实不是满格
  });

  it('逐角水深(编码进 aTop)：池心角=满深度、岸边角被平均拉低(深浅渐变+岸线淡出,不按格硬切)', () => {
    // aTop=带符号【逐角】水深：|值|=角相邻4列水深平均(无水列计0)，符号=起伏 gate。
    // 逐角平均 → 相邻水格深度不同时顶点间插值成渐变(曾整格同值→透明度按格硬切,用户报"分割太直接")。
    const maxDepth = (w: ChunkWorld): number => {
      const t = meshChunk(w, 0, 0).water.top;
      if (!t || !t.length) return 0;
      let m = 0;
      for (let i = 0; i < t.length; i++) {
        const a = Math.abs(t[i]);
        if (a > m) m = a;
      }
      return m;
    };
    // 浅：3×3 一格深水池 → 池心角(4邻列全水,各深1)=1；岸角<1
    const shallow = new ChunkWorld(99);
    for (let dx = 0; dx < 3; dx++)
      for (let dz = 0; dz < 3; dz++) {
        shallow.setBlock(4 + dx, Y - 1, 4 + dz, STONE);
        shallow.setWater(4 + dx, Y, 4 + dz, 7, false, false);
      }
    expect(maxDepth(shallow)).toBeCloseTo(1, 5);
    // 深：3×3 五格深水柱 → 池心角=5(顶面画在最上层)
    const deep = new ChunkWorld(99);
    for (let dx = 0; dx < 3; dx++)
      for (let dz = 0; dz < 3; dz++) {
        deep.setBlock(4 + dx, Y - 1, 4 + dz, STONE);
        for (let dy = 0; dy < 5; dy++) deep.setWater(4 + dx, Y + dy, 4 + dz, 7, false, false);
      }
    expect(maxDepth(deep)).toBeCloseTo(5, 5);
    // 孤立单格浅水：四角都只有本列有水 → |aTop|=1/4(岸线淡出,不再是整格 1)
    const lone = new ChunkWorld(99);
    lone.setBlock(9, Y - 1, 9, STONE);
    lone.setWater(9, Y, 9, 7, false, false);
    expect(maxDepth(lone)).toBeCloseTo(0.25, 5);
  });

  it('bug1: 头顶有方块的水仍画出顶面(覆盖格的水看得见，不是隐形空洞)', () => {
    // 四周/下方全封死、仅头顶是方块：唯一可能画的面就是顶面。旧代码顶面被跳过 → 水网格为空(水隐形=bug1)。
    const w = new ChunkWorld(99);
    w.setBlock(5, Y - 1, 5, STONE); // 下
    w.setBlock(5, Y + 1, 5, STONE); // 上(方块)
    for (const [x, z] of [[6, 5], [4, 5], [5, 6], [5, 4]]) w.setBlock(x, Y, z, STONE); // 四周封死
    w.setWater(5, Y, 5, 6, false, false);
    expect(waterTris(w)).toBeGreaterThan(0); // 顶面被画出 → 水看得见
  });
});
