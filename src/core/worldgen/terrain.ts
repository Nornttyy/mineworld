import { World } from '../world/world';
import { Chunk, CHUNK_W } from '../world/chunk';
import { fbm2 } from '../math/noise';
import { WATER } from '../blocks/registry';

// 方块 id（见 core/blocks/registry）
const STONE = 1;
const DIRT = 2;
const GRASS = 3;
const SAND = 5;
export const SEA_LEVEL = 18; // 海平面：低于此的地表注水、岸边铺沙

// 某世界列 (wx,wz) 的地表高度（用世界坐标采样，跨区块连续，确定性）。
// 叠加多种尺度形成：大海(大陆度)、池子(丘陵凹陷)、河流(蜿蜒细谷)。
export function columnHeight(wx: number, wz: number, seed: number): number {
  const continent = fbm2(wx / 220, wz / 220, seed, 4); // 大尺度：海(低) vs 陆(高)
  const hills = fbm2(wx / 42, wz / 42, seed + 17, 4); // 中尺度：丘陵/小池
  let h = 2 + continent * 46 + (hills - 0.5) * 12;

  // 河流：一条横贯地图的蜿蜒河谷。沿河心把地形平滑压到水下，两岸用 smoothstep
  // 渐变成谷(不是突兀的峭壁)，因此平原、丘陵都能被一条河穿过、与海/湖相连。
  // 宽度随位置变 → 河有宽有窄、有长有短。
  {
    const rn = fbm2(wx / 140, wz / 140, seed + 777, 3); // 蜿蜒场
    const dist = Math.abs(rn - 0.5); // 沿蜿蜒中线≈0
    const width = 0.035 + hills * 0.03;
    if (dist < width) {
      let t = 1 - dist / width; // 0..1，河心=1
      t = t * t * (3 - 2 * t); // smoothstep：岸边平滑过渡
      const bed = SEA_LEVEL - 2; // 河床高度
      h = h * (1 - t) + bed * t; // 向河床平滑下切
    }
  }
  return Math.floor(h);
}

// 生成单个区块列 (cx,cz)：石基→土→草顶；海平面以下注水、岸边铺沙。确定性、跨区块无缝。
export function generateChunk(cx: number, cz: number, seed: number): Chunk {
  const c = new Chunk();
  for (let lz = 0; lz < CHUNK_W; lz++) {
    for (let lx = 0; lx < CHUNK_W; lx++) {
      const height = columnHeight(cx * CHUNK_W + lx, cz * CHUNK_W + lz, seed);
      const beach = height <= SEA_LEVEL + 1; // 海平面附近用沙
      for (let y = 0; y <= height; y++) {
        let id = STONE;
        if (y === height) id = beach ? SAND : GRASS;
        else if (y >= height - 3) id = beach ? SAND : DIRT;
        c.set(lx, y, lz, id);
      }
      for (let y = height + 1; y <= SEA_LEVEL; y++) c.set(lx, y, lz, WATER); // 注水到海平面
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
