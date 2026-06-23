import { describe, it, expect } from 'vitest';
import { ChunkWorld } from './chunkWorld';
import { CHUNK_H } from './chunk';
import { meshChunk } from '../mesh/mesher';

describe('ChunkWorld', () => {
  it('is deterministic for a seed', () => {
    const a = new ChunkWorld(99);
    const b = new ChunkWorld(99);
    expect(a.getBlock(5, 10, 7)).toBe(b.getBlock(5, 10, 7));
    expect(a.getBlock(123, 20, -45)).toBe(b.getBlock(123, 20, -45));
  });

  it('resolves negative world coords across chunk borders', () => {
    const w = new ChunkWorld(1);
    w.setBlock(-1, 20, -1, 1); // 落在区块(-1,-1)的局部(15,20,15)
    expect(w.getBlock(-1, 20, -1)).toBe(1);
    expect(w.getChunk(-1, -1).get(15, 20, 15)).toBe(1);
  });

  it('setBlock marks the chunk dirty for re-mesh', () => {
    const w = new ChunkWorld(1);
    const c = w.getChunk(0, 0);
    c.dirty = false;
    w.setBlock(3, 30, 3, 1);
    expect(c.dirty).toBe(true);
  });

  it('evictBeyond 驱逐远处区块、保留近处（治越走越卡的内存泄漏）', () => {
    const w = new ChunkWorld(1);
    w.getChunk(0, 0); // 近
    w.getChunk(2, 0); // 半径=2 边界内
    w.getChunk(10, 10); // 远
    w.evictBeyond(0, 0, 2);
    expect(w.hasChunk(0, 0)).toBe(true);
    expect(w.hasChunk(2, 0)).toBe(true); // 切比雪夫=2，不驱逐
    expect(w.hasChunk(10, 10)).toBe(false); // 远 → 驱逐
  });

  it('editHook 在区块(重)生成时复原玩家改动（驱逐后走回来不丢建筑）', () => {
    const w = new ChunkWorld(1);
    // 模拟游戏层：把"该区块的改动"在生成时贴回（这里在 (20,30,20) 放方块 id=7）
    w.editHook = (cx, cz, c): void => {
      if (cx === 1 && cz === 1) c.set(20 & 15, 30, 20 & 15, 7);
    };
    const c = w.getChunk(1, 1); // 触发生成 → 应调用 editHook
    expect(c.get(20 & 15, 30, 20 & 15)).toBe(7);
  });

  it('改角格的水会把【对角】邻块也标脏（cornerH/AO 采样对角，否则角处留旧缝）', () => {
    const w = new ChunkWorld(1);
    w.getChunk(0, 0);
    const diag = w.getChunk(1, 1);
    const ortho = w.getChunk(1, 0);
    diag.dirty = false;
    ortho.dirty = false;
    w.setWater(15, 20, 15, 5, false, false); // 区块(0,0) 的 +x+z 角格
    expect(ortho.dirty).toBe(true); // 正交邻块(原本就会标)
    expect(diag.dirty).toBe(true); // 对角邻块(BUG3 修复后也标)
  });

  it('vertical out of range is air', () => {
    const w = new ChunkWorld(1);
    expect(w.getBlock(0, -1, 0)).toBe(0);
    expect(w.getBlock(0, CHUNK_H, 0)).toBe(0);
  });
});

describe('ChunkWorld dimension', () => {
  it('nether 维度生成地狱岩、与主世界同坐标不同', () => {
    const ov = new ChunkWorld(123, 'overworld');
    const ne = new ChunkWorld(123, 'nether');
    const cOv = ov.getChunk(0, 0);
    const cNe = ne.getChunk(0, 0);
    // 下界某填充层应是地狱岩(19)，主世界不是
    let netherrackInNe = 0;
    for (let y = 5; y < 120; y++) if (cNe.get(0, y, 0) === 19) netherrackInNe++;
    expect(netherrackInNe).toBeGreaterThan(0);
    expect(ne.dimension).toBe('nether');
    expect(ov.dimension).toBe('overworld');
    // 主世界同坐标不全是地狱岩
    const netherrackInOv = Array.from({ length: 115 }, (_, i) => cOv.get(0, i + 5, 0)).filter((b) => b === 19)
      .length;
    expect(netherrackInNe).toBeGreaterThan(netherrackInOv);
  });

  it('单参构造默认 overworld（旧调用方不变）', () => {
    const w = new ChunkWorld(42);
    expect(w.dimension).toBe('overworld');
  });
});

describe('meshChunk', () => {
  it('produces geometry; every face is a quad (4 verts / 6 indices)', () => {
    const w = new ChunkWorld(7);
    const m = meshChunk(w, 0, 0).opaque;
    expect(m.indices.length).toBeGreaterThan(0);
    expect(m.positions.length).toBe((m.indices.length / 6) * 12);
  });

  it('上方有实心方块的浅水(流动) → 保持矮高度，不被画成整块', () => {
    const w = new ChunkWorld(5);
    const Y = 170; // 地形之上(地表~99-151，CHUNK_H 192)
    w.setBlock(5, Y - 1, 5, 1); // 地板
    w.setWater(5, Y, 5, 4, false, false); // 浅的流动水(量4≈高度0.44,非源头)
    w.setBlock(5, Y + 1, 5, 1); // 头顶盖实心方块
    // (6,Y,5) 保持空气 → 会出一个朝空气的侧面，其顶边高度能验证
    const water = meshChunk(w, 0, 0).water;
    let maxY = 0;
    for (let i = 1; i < water.positions.length; i += 3) maxY = Math.max(maxY, water.positions[i]);
    // 修复后：头顶有方块的浅水保持自身矮高度(不再被灌成满格)；只有源头才贴方块(见 waterMesh.test)
    expect(maxY).toBeLessThan(Y + 0.6);
  });

  it('culls faces at chunk borders against the neighbour chunk (no internal wall)', () => {
    const w = new ChunkWorld(123);
    const h = 170; // 高于地形(地表~99-151，CHUNK_H 192)，干净的浮空块便于对比
    w.setBlock(15, h, 0, 1); // 区块(0,0)的 +X 边界
    const before = meshChunk(w, 0, 0).opaque.indices.length;
    w.setBlock(16, h, 0, 1); // 区块(1,0)里紧邻其 +X 的方块
    const after = meshChunk(w, 0, 0).opaque.indices.length;
    expect(after).toBeLessThan(before); // (15,h,0) 的 +X 面被邻区块剔除
  });
});
