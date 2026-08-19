import { isWaterId } from '../core/blocks/registry';
import { SEA_LEVEL } from '../core/worldgen/terrain';
import { sampleWaterWave, WATER_WAVE_CONSTANTS } from '../render/waterWave';

/** Full source water is rendered at amount / 9, matching mesher.cornerH. */
export const SEA_WATER_BASE_Y = SEA_LEVEL + 8 / 9;
export const SEA_WAVE_OPEN_RADIUS = 4;

const EDGE_DISTANCE = Math.SQRT1_2;
const MIN_OPEN_WATER = 0.82;
const MIN_DEEP_WATER = 2.5;

// q is bounded by the sum of its component amplitudes. Keep this derived from
// the shared coefficients so the cheap vertical early-out cannot drift behind
// the shader when the art direction changes again.
const wave = WATER_WAVE_CONSTANTS;
const MAX_GROUP = wave.groupBase + Math.abs(wave.groupAmplitude);
const MAX_Q =
  Math.abs(wave.wave1Weight) * MAX_GROUP + Math.abs(wave.wave2Weight) + Math.abs(wave.wave3Weight);
export const MAX_SEA_WAVE_DISPLACEMENT =
  Math.abs(wave.oceanLinear) * MAX_Q +
  Math.abs(wave.oceanQuadratic) * (MAX_Q * MAX_Q + Math.abs(wave.quadraticBias));

export interface SeaSurfaceWorld {
  getBlock(x: number, y: number, z: number): number;
  waterAmount(x: number, y: number, z: number): number;
  isWaterSource(x: number, y: number, z: number): boolean;
  /** Original terrain height, before player edits. */
  generatedSurfaceY(x: number, z: number): number;
}

export interface SeaWaveProbe {
  /** Same deep-ocean blend parameter passed to sampleWaterWave/GLSL. */
  ocean: number;
  open: number;
  depth: number;
}

function smoothstep(edge0: number, edge1: number, value: number): number {
  const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function bilerp(a00: number, a01: number, a11: number, a10: number, u: number, v: number): number {
  return (a00 * (1 - v) + a01 * v) * (1 - u) + (a10 * (1 - v) + a11 * v) * u;
}

/**
 * Reconstructs the mesher's local wave-open/depth gates around one point.
 *
 * Only a full generated sea source can opt in. A shallow pool, flowing water,
 * cave water, ice edge, covered water, or player-built water therefore keeps
 * the original voxel behaviour. The 9x9 surface snapshot is shared by all four
 * corner estimates, so a probe is bounded rather than doing four radius scans.
 */
export function probeSeaWave(x: number, z: number, world: SeaSurfaceWorld): SeaWaveProbe | null {
  const bx = Math.floor(x);
  const bz = Math.floor(z);
  if (world.generatedSurfaceY(bx, bz) >= SEA_LEVEL) return null;

  const safeSurface = (wx: number, wz: number): boolean =>
    world.waterAmount(wx, SEA_LEVEL, wz) === 8 &&
    world.isWaterSource(wx, SEA_LEVEL, wz) &&
    world.getBlock(wx, SEA_LEVEL + 1, wz) === 0;

  if (!safeSurface(bx, bz)) return null;

  // Four mesh corners around this cell collectively inspect bx/z +/- 4.
  const safe = new Map<string, boolean>();
  for (let dz = -SEA_WAVE_OPEN_RADIUS; dz <= SEA_WAVE_OPEN_RADIUS; dz++) {
    for (let dx = -SEA_WAVE_OPEN_RADIUS; dx <= SEA_WAVE_OPEN_RADIUS; dx++) {
      const wx = bx + dx;
      const wz = bz + dz;
      safe.set(`${wx},${wz}`, safeSurface(wx, wz));
    }
  }

  const cornerOpen = (cwx: number, cwz: number): number => {
    let nearestObstacle = SEA_WAVE_OPEN_RADIUS;
    const radiusSq = SEA_WAVE_OPEN_RADIUS * SEA_WAVE_OPEN_RADIUS;
    for (let dz = -SEA_WAVE_OPEN_RADIUS; dz < SEA_WAVE_OPEN_RADIUS; dz++) {
      for (let dx = -SEA_WAVE_OPEN_RADIUS; dx < SEA_WAVE_OPEN_RADIUS; dx++) {
        const ddx = dx + 0.5;
        const ddz = dz + 0.5;
        const distanceSq = ddx * ddx + ddz * ddz;
        if (distanceSq > radiusSq) continue;
        if (safe.get(`${cwx + dx},${cwz + dz}`) !== true) {
          nearestObstacle = Math.min(nearestObstacle, Math.sqrt(distanceSq));
        }
      }
    }
    return smoothstep(
      0,
      1,
      (nearestObstacle - EDGE_DISTANCE) / (SEA_WAVE_OPEN_RADIUS - EDGE_DISTANCE),
    );
  };

  const u = x - bx;
  const v = z - bz;
  const open = bilerp(
    cornerOpen(bx, bz),
    cornerOpen(bx, bz + 1),
    cornerOpen(bx + 1, bz + 1),
    cornerOpen(bx + 1, bz),
    u,
    v,
  );
  // The pronounced ocean curve is fully active only past the shader's upper
  // gate. Before that point, retaining voxel semantics is safer at shore seams.
  if (open < MIN_OPEN_WATER) return null;

  const columnDepth = (wx: number, wz: number): number => {
    if (world.waterAmount(wx, SEA_LEVEL, wz) <= 0) return 0;
    let depth = 1;
    for (let y = SEA_LEVEL - 1; y >= 0 && depth < 7; y--) {
      if (world.waterAmount(wx, y, wz) <= 0) break;
      depth++;
    }
    return depth;
  };
  const cornerDepth = (cwx: number, cwz: number): number =>
    (columnDepth(cwx - 1, cwz - 1) +
      columnDepth(cwx, cwz - 1) +
      columnDepth(cwx - 1, cwz) +
      columnDepth(cwx, cwz)) /
    4;
  const depth = bilerp(
    cornerDepth(bx, bz),
    cornerDepth(bx, bz + 1),
    cornerDepth(bx + 1, bz + 1),
    cornerDepth(bx + 1, bz),
    u,
    v,
  );
  if (depth < MIN_DEEP_WATER) return null;

  return {
    open,
    depth,
    ocean: smoothstep(0.25, 0.82, open) * smoothstep(1.25, 2.5, depth),
  };
}

export function seaWaveSurfaceY(x: number, z: number, time: number, probe: SeaWaveProbe): number {
  return SEA_WATER_BASE_Y + sampleWaterWave(x, z, time, probe.ocean).height;
}

/**
 * Point-accurate water membership near the animated sea surface. Elsewhere it
 * deliberately falls back to the old voxel test.
 */
export function isPointInWater(
  x: number,
  y: number,
  z: number,
  time: number,
  world: SeaSurfaceWorld,
  wavesEnabled: boolean,
  cachedProbe?: SeaWaveProbe | null,
): boolean {
  const bx = Math.floor(x);
  const by = Math.floor(y);
  const bz = Math.floor(z);
  const voxelWater = isWaterId(world.getBlock(bx, by, bz));
  if (!wavesEnabled || (by !== SEA_LEVEL && by !== SEA_LEVEL + 1)) return voxelWater;

  // Avoid the radius probe for points that no possible value of the shared
  // ocean curve can reach. This is especially useful for physics queries.
  if (
    y < SEA_WATER_BASE_Y - MAX_SEA_WAVE_DISPLACEMENT ||
    y > SEA_WATER_BASE_Y + MAX_SEA_WAVE_DISPLACEMENT
  ) {
    return voxelWater;
  }

  const probe = cachedProbe === undefined ? probeSeaWave(x, z, world) : cachedProbe;
  if (!probe) return voxelWater;
  return y < seaWaveSurfaceY(x, z, time, probe);
}
