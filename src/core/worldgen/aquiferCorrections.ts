import { BlockState, FluidStatus, NoiseAquifer } from 'deepslate/worldgen';
import type { AquiferConfig, NoiseChunk } from 'deepslate/worldgen';
import type { PositionalRandom } from 'deepslate/math';

// Pinned deepslate 0.27.2 exposes these methods at runtime but marks them private
// in its typings. Adapt only the affected instance; never mutate the prototype
// (saved v1/v2 worlds must retain their original generator).
interface AquiferInternals {
  config: AquiferConfig;
  random: PositionalRandom;
  minGridX: number; minGridY: number; minGridZ: number;
  maxGridX: number; maxGridY: number; maxGridZ: number;
  aquiferLocationCache: [number, number, number][];
  skipSamplingAboveY: number;
  getIndex(x: number, y: number, z: number): number;
  globalFluidPicker(x: number, y: number, z: number): FluidStatus;
  surfaceLevel(x: number, z: number): number;
  computeSurfaceLevel(x: number, y: number, z: number, global: FluidStatus, lowest: number, underwater: boolean): number;
  computeFluidType(x: number, y: number, z: number, global: FluidStatus, level: number): BlockState;
  computeFluid(x: number, y: number, z: number): FluidStatus;
  computeRandomizedFluidSurfaceLevel(x: number, y: number, z: number, lowest: number): number;
}
const SURFACE_SAMPLING = [[-2,-1],[-1,-1],[0,-1],[1,-1],[-3,0],[-2,0],[-1,0],[0,0],[1,0],[-2,1],[-1,1],[0,1],[1,1]];
const DRY_LEVEL = -32512; // DimensionType.WAY_BELOW_MIN_Y (-2032 << 4)
export function correctAquifer(noise: NoiseChunk): void {
  if (!(noise.aquifer instanceof NoiseAquifer)) return;
  const aquifer = noise.aquifer as unknown as AquiferInternals;
  // Upstream ChunkPos.asLong sign-extends negative X, discarding Z from the
  // key. A local coordinate key avoids collisions on the western half-map.
  const surfaceCache = new Map<string, number>();
  aquifer.surfaceLevel = (x, z) => {
    const qx = (x >> 2) << 2, qz = (z >> 2) << 2, key = `${qx}:${qz}`;
    let level = surfaceCache.get(key);
    if (level === undefined) {
      level = Math.floor(aquifer.config.surfaceLevel.compute({x:qx,y:0,z:qz}));
      surfaceCache.set(key, level);
    }
    return level;
  };
  aquifer.skipSamplingAboveY -= 1;
  const surfaceLevel = aquifer.computeSurfaceLevel.bind(aquifer);
  aquifer.computeSurfaceLevel = (...args) => {
    const level = surfaceLevel(...args);
    return level === Number.MIN_SAFE_INTEGER ? DRY_LEVEL : level;
  };
  const fluidType = aquifer.computeFluidType.bind(aquifer);
  aquifer.computeFluidType = (x,y,z,global,level) => level === DRY_LEVEL ? global.type : fluidType(x,y,z,global,level);
  for (let x = aquifer.minGridX; x <= aquifer.maxGridX; x++) for (let y = aquifer.minGridY; y <= aquifer.maxGridY; y++) for (let z = aquifer.minGridZ; z <= aquifer.maxGridZ; z++) {
    const random = aquifer.random.at(x, y, z);
    aquifer.aquiferLocationCache[aquifer.getIndex(x,y,z)] = [x * 16 + random.nextInt(10), y * 12 + random.nextInt(9), z * 16 + random.nextInt(10)];
  }
  aquifer.computeFluid = function (x, y, z) {
    const global = this.globalFluidPicker(x, y, z);
    let lowest = Infinity, underwater = false;
    for (const [dx, dz] of SURFACE_SAMPLING) {
      const sx = x + dx * 16, sz = z + dz * 16;
      const level = this.surfaceLevel(sx, sz), adjusted = level + 8;
      const center = dx === 0 && dz === 0, reaches = y + 12 > adjusted;
      if (center && y - 12 > adjusted) return global;
      if (center || reaches) {
        const atSurface = this.globalFluidPicker(sx, adjusted, sz);
        if (!atSurface.at(adjusted).is(BlockState.AIR)) {
          if (center) underwater = true;
          if (reaches) return atSurface;
        }
      }
      lowest = Math.min(lowest, level);
    }
    const level = this.computeSurfaceLevel(x, y, z, global, lowest, underwater);
    return new FluidStatus(level, this.computeFluidType(x, y, z, global, level));
  };
  aquifer.computeRandomizedFluidSurfaceLevel = function (x, y, z, lowest) {
    const cy = Math.floor(y / 40);
    const spread = Math.fround(Math.fround(this.config.fluidLevelSpread.compute({ x: Math.floor(x / 16), y: cy, z: Math.floor(z / 16) })) * 10);
    return Math.min(lowest, cy * 40 + 20 + Math.floor(spread / 3) * 3);
  };
}
