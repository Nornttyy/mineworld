import { describe, it, expect } from 'vitest';
import { ChunkWorld } from '../world/chunkWorld';
import { meshChunk } from './mesher';
import { TORCH } from '../blocks/registry';

// 天光/方块光现在以每顶点 aLight=(天光01, 方块光01) 存进网格，由 shader 按昼夜合成。
// 这里直接验证 light 属性：封闭面天光≈0、露天面天光≈1；火把照亮周围(方块光>0)且自身生成网格。
describe('mesher 光照属性(天光+方块光)', () => {
  it('封闭空腔的面天光≈0，露天表面天光≈1', () => {
    const w = new ChunkWorld(42);
    const STONE = 1; // y=188 接近世界顶(CHUNK_H=192)，必在地表之上=露天
    for (const [x, y, z] of [
      [10, 188, 9],
      [8, 188, 9],
      [9, 189, 9],
      [9, 187, 9],
      [9, 188, 10],
      [9, 188, 8],
    ])
      w.setBlock(x, y, z, STONE);

    const light = meshChunk(w, 0, 0).opaque.light!;
    let skyMin = 1,
      skyMax = 0;
    for (let i = 0; i < light.length; i += 2) {
      // 偶数下标=天光
      if (light[i] < skyMin) skyMin = light[i];
      if (light[i] > skyMax) skyMax = light[i];
    }
    expect(skyMax).toBeGreaterThan(0.9); // 露天表面：天光满
    expect(skyMin).toBe(0); // 封闭面：天光 0
  });

  it('跨区块渗光：洞口在邻区块时，光仍能渗进本区块(halo>1 回归)', () => {
    // 密封石隧道(高空 y=180 层)：口开在区块 -1 的 x=-4，往 +x 一直延伸到本区块(0) x=7，x=8 封死。
    // 天光只能从洞口横向 BFS 渗入。旧实现光照网格只带 1 格光晕 → 本区块看不到 x≤-2 的光源，
    // 整条隧道在本区块内全黑(接缝黑墙 bug)；halo=8 后应看到"洞口亮、越深越暗"的 MC 式渐变。
    const w = new ChunkWorld(42);
    const STONE = 1;
    for (let x = -4; x <= 8; x++) {
      for (let z = 7; z <= 9; z++) {
        for (let y = 179; y <= 181; y++) {
          const interior = x <= 7 && z === 8 && y === 180;
          if (!interior) w.setBlock(x, y, z, STONE);
        }
      }
    }
    const m = meshChunk(w, 0, 0).opaque;
    const light = m.light!;
    const pos = m.positions;
    // 收集隧道地板顶面顶点(y=180, z∈[8,9])的天光，按本地 x 分桶
    let nearMax = 0; // x∈[0,3]：靠洞口一侧(仍隔着区块边界 4+ 格)
    let deepMax = 0; // x∈[6,8]：隧道深处
    for (let i = 0; i < pos.length / 3; i++) {
      const x = pos[i * 3];
      const y = pos[i * 3 + 1];
      const z = pos[i * 3 + 2];
      if (y !== 180 || z < 8 || z > 9) continue;
      const sky = light[i * 2];
      if (x >= 0 && x <= 3 && sky > nearMax) nearMax = sky;
      if (x >= 6 && x <= 8 && sky > deepMax) deepMax = sky;
    }
    expect(nearMax).toBeGreaterThan(0.35); // 旧 halo=1 时这里是 0(黑墙)；x=0 处应约 10/15
    expect(deepMax).toBeGreaterThan(0.08); // 深处仍有余光(约 3/15)
    expect(deepMax).toBeLessThan(nearMax); // 且比洞口侧暗(渐变方向正确)
  });

  it('粗光照网格 light3d：露天 cell 天光满、地下深处 cell 黑、火把 cell 有方块光(实体照明数据)', () => {
    const w = new ChunkWorld(42);
    w.setBlock(8, 30, 8, TORCH); // 深地下(实心石里挖不动？直接放——mesher 只看方块数据)放火把
    const m = meshChunk(w, 0, 0);
    const g = m.light3d;
    expect(g.length).toBe(4 * 48 * 4);
    const cell = (wx: number, wy: number, wz: number): number => g[(wx >> 2) + (wz >> 2) * 4 + Math.floor(wy / 4) * 16];
    expect(cell(8, 188, 8) >> 4).toBe(15); // 世界顶附近露天：天光 15
    expect(cell(2, 12, 2) >> 4).toBe(0); // 深地下(实心/洞穴)：无天光
    expect(cell(8, 30, 8) & 15).toBeGreaterThan(10); // 火把所在 cell：方块光接近 14
  });

  it('火把：生成自发光网格 + 给周围方块面带来方块光', () => {
    const w = new ChunkWorld(7);
    // 地表之上(y=186)搭一个石台 + 台上放火把，台面的面应当被方块光照亮
    const STONE = 1;
    for (let x = 6; x <= 12; x++) for (let z = 6; z <= 12; z++) w.setBlock(x, 186, z, STONE);
    w.setBlock(9, 187, 9, TORCH); // 台面中央放火把

    const m = meshChunk(w, 0, 0);
    expect(m.torch.positions.length).toBeGreaterThan(0); // 火把画出了网格(交叉片)
    // 不透明面里，方块光通道(奇数下标)应有 >0 的值(火把照亮了台面/邻块面)
    const light = m.opaque.light!;
    let blkMax = 0;
    for (let i = 1; i < light.length; i += 2) if (light[i] > blkMax) blkMax = light[i];
    expect(blkMax).toBeGreaterThan(0.5); // 紧邻火把的面方块光接近满
  });
});
