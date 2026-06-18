import { describe, it, expect } from 'vitest';
import { ChunkWorld } from '../world/chunkWorld';
import { columnHeight, SEA_LEVEL, generateChunk } from './terrain';
import { worldToChunk, localCoord } from '../world/coords';

const OAK_LOG = 6;
const OAK_LEAVES = 10;
const SEED = 20240617;

// 找出区域内所有树根（某列草块正上方是原木 = 该列长了棵树）。
function treeRoots(
  world: ChunkWorld,
  x0: number,
  x1: number,
  z0: number,
  z1: number,
): { wx: number; wz: number; g: number }[] {
  const roots: { wx: number; wz: number; g: number }[] = [];
  for (let wx = x0; wx < x1; wx++) {
    for (let wz = z0; wz < z1; wz++) {
      const g = columnHeight(wx, wz, SEED);
      if (world.getBlock(wx, g + 1, wz) === OAK_LOG) roots.push({ wx, wz, g });
    }
  }
  return roots;
}

describe('trees', () => {
  it('生成出树木', () => {
    const world = new ChunkWorld(SEED);
    const roots = treeRoots(world, -48, 48, -48, 48);
    expect(roots.length).toBeGreaterThan(0);
  });

  it('每棵树是竖直树干 + 上方树冠', () => {
    const world = new ChunkWorld(SEED);
    const { wx, wz, g } = treeRoots(world, -48, 48, -48, 48)[0];
    // 树干至少 4 高，全是原木
    for (let dy = 1; dy <= 4; dy++) {
      expect(world.getBlock(wx, g + dy, wz)).toBe(OAK_LOG);
    }
    // 树干上方一圈应有不少树叶
    let leaves = 0;
    for (let y = g + 3; y <= g + 8; y++) {
      for (let dx = -2; dx <= 2; dx++) {
        for (let dz = -2; dz <= 2; dz++) {
          if (world.getBlock(wx + dx, y, wz + dz) === OAK_LEAVES) leaves++;
        }
      }
    }
    expect(leaves).toBeGreaterThan(15);
  });

  it('树木只长在草地上，不在水/沙滩', () => {
    const world = new ChunkWorld(SEED);
    for (const { g } of treeRoots(world, -64, 64, -64, 64)) {
      expect(g).toBeGreaterThan(SEA_LEVEL + 1);
    }
  });

  it('跨区块边界的树不断枝（枝叶探入邻块）', () => {
    const world = new ChunkWorld(SEED);
    // 找一棵根靠近 +X 区块边界的树，使其树冠跨到隔壁区块
    const edge = treeRoots(world, -128, 128, -128, 128).find(
      (r) => localCoord(r.wx) >= 14,
    );
    expect(edge, '应能在大范围内找到一棵贴边的树').toBeTruthy();
    const { wx, wz, g } = edge!;
    // wx+2 落在隔壁区块；该列(去角外的 dx=+2,dz=0)应当有树叶
    expect(worldToChunk(wx + 2)).not.toBe(worldToChunk(wx));
    let spill = 0;
    for (let y = g; y < g + 10; y++) {
      if (world.getBlock(wx + 2, y, wz) === OAK_LEAVES) spill++;
    }
    expect(spill, '隔壁区块里应有该树探入的枝叶').toBeGreaterThan(0);
  });

  it('生成是确定性的（同 seed → 同区块）', () => {
    const a = generateChunk(3, 5, SEED);
    const b = generateChunk(3, 5, SEED);
    expect(Array.from(a.blocks)).toEqual(Array.from(b.blocks));
  });
});
