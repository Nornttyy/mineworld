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

describe('meshChunk', () => {
  it('produces geometry; every face is a quad (4 verts / 6 indices)', () => {
    const w = new ChunkWorld(7);
    const m = meshChunk(w, 0, 0).opaque;
    expect(m.indices.length).toBeGreaterThan(0);
    expect(m.positions.length).toBe((m.indices.length / 6) * 12);
  });

  it('上方有实心方块的水 → 渲染灌满到顶(不在方块下露空洞)', () => {
    const w = new ChunkWorld(5);
    const Y = 170; // 地形之上(地表~99-151，CHUNK_H 192)
    w.setBlock(5, Y - 1, 5, 1); // 地板
    w.setWater(5, Y, 5, 4, false, false); // 浅水(量4≈高度0.44)
    w.setBlock(5, Y + 1, 5, 1); // 头顶盖实心方块
    // (6,Y,5) 保持空气 → 会出一个朝空气的侧面，其顶边高度能验证
    const water = meshChunk(w, 0, 0).water;
    let maxY = 0;
    for (let i = 1; i < water.positions.length; i += 3) maxY = Math.max(maxY, water.positions[i]);
    // 被方块盖住 → 水面应灌到 ~Y+1（满），而不是 Y+4/9≈Y+0.44
    expect(maxY).toBeGreaterThan(Y + 0.9);
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
