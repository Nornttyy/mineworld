import { World } from '../world/world';
import { Chunk, CHUNK_W } from '../world/chunk';
import { fbm2 } from '../math/noise';

// 方块 id（见 core/blocks/registry）
const STONE = 1;
const DIRT = 2;
const GRASS = 3;
const SAND = 5;

// 某世界列 (wx,wz) 的地表高度（用世界坐标采样，跨区块连续）
export function columnHeight(wx: number, wz: number, seed: number): number {
  const n = fbm2(wx / 80, wz / 80, seed, 4);
  return Math.floor(12 + n * 26); // 12..38
}

// 生成单个区块列 (cx,cz)：石基→土→草顶。确定性、跨区块无缝。（沙/水等阶段 3 配海平面再加）
export function generateChunk(cx: number, cz: number, seed: number): Chunk {
  const c = new Chunk();
  for (let lz = 0; lz < CHUNK_W; lz++) {
    for (let lx = 0; lx < CHUNK_W; lx++) {
      const height = columnHeight(cx * CHUNK_W + lx, cz * CHUNK_W + lz, seed);
      for (let y = 0; y <= height; y++) {
        let id = STONE;
        if (y === height) id = GRASS;
        else if (y >= height - 3) id = DIRT;
        c.set(lx, y, lz, id);
      }
    }
  }
  c.dirty = true;
  return c;
}

export interface TerrainOptions {
  sizeX?: number;
  sizeZ?: number;
  seed?: number;
}

// 噪声高度图 → 起伏地形：石基、表层土、草顶；低洼处铺沙（"海滩"）。确定性。
export function generateTerrain(opts: TerrainOptions = {}): World {
  const sizeX = opts.sizeX ?? 64;
  const sizeZ = opts.sizeZ ?? 64;
  const seed = opts.seed ?? 1337;
  const sy = 48;
  const beach = 13; // 此高度及以下的地表用沙
  const w = new World(sizeX, sy, sizeZ);

  for (let z = 0; z < sizeZ; z++) {
    for (let x = 0; x < sizeX; x++) {
      const n = fbm2(x / 40, z / 40, seed, 4); // [0,1) 平缓丘陵
      const height = Math.floor(10 + n * 24); // 10..33
      const sandy = height <= beach;
      for (let y = 0; y <= height; y++) {
        let id = STONE;
        if (y === height) id = sandy ? SAND : GRASS;
        else if (y >= height - 3) id = sandy ? SAND : DIRT;
        w.set(x, y, z, id);
      }
    }
  }
  return w;
}

// 取某 (x,z) 列的地表高度（最高非空气块的 y），供出生点站位用
export function surfaceHeight(world: World, x: number, z: number): number {
  for (let y = world.sy - 1; y >= 0; y--) if (world.get(x, y, z) !== 0) return y;
  return 0;
}
