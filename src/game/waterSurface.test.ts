import { describe, expect, it } from 'vitest';
import { WATER } from '../core/blocks/registry';
import { SEA_LEVEL } from '../core/worldgen/terrain';
import { sampleWaterWave } from '../render/waterWave';
import {
  isPointInWater,
  MAX_SEA_WAVE_DISPLACEMENT,
  probeSeaWave,
  seaWaveSurfaceY,
  type SeaSurfaceWorld,
} from './waterSurface';

const key = (x: number, y: number, z: number): string => `${x},${y},${z}`;

class SparseSea implements SeaSurfaceWorld {
  readonly blocks = new Map<string, number>();
  readonly amounts = new Map<string, number>();
  readonly sources = new Set<string>();
  generatedY = SEA_LEVEL - 6;
  reads = 0;

  getBlock(x: number, y: number, z: number): number {
    this.reads++;
    return this.blocks.get(key(x, y, z)) ?? 0;
  }

  waterAmount(x: number, y: number, z: number): number {
    this.reads++;
    return this.amounts.get(key(x, y, z)) ?? 0;
  }

  isWaterSource(x: number, y: number, z: number): boolean {
    this.reads++;
    return this.sources.has(key(x, y, z));
  }

  generatedSurfaceY(): number {
    this.reads++;
    return this.generatedY;
  }

  setWater(x: number, y: number, z: number, amount = 8, source = true): void {
    const k = key(x, y, z);
    this.blocks.set(k, WATER);
    this.amounts.set(k, amount);
    if (source) this.sources.add(k);
    else this.sources.delete(k);
  }

  fillDeepSea(radius = 6): void {
    for (let z = -radius; z <= radius; z++) {
      for (let x = -radius; x <= radius; x++) {
        for (let y = SEA_LEVEL - 3; y <= SEA_LEVEL; y++) this.setWater(x, y, z);
      }
    }
  }
}

describe('animated sea waterline', () => {
  it('recognises only a full, uncovered, continuous and deep generated sea surface', () => {
    const sea = new SparseSea();
    sea.fillDeepSea();
    const probe = probeSeaWave(0.5, 0.5, sea);

    expect(probe).not.toBeNull();
    expect(probe?.open).toBeCloseTo(1, 8);
    expect(probe?.depth).toBeCloseTo(4, 8);
    expect(probe?.ocean).toBeCloseTo(1, 8);
    // One shared 9x9 snapshot plus the small depth neighbourhood stays bounded.
    expect(sea.reads).toBeLessThan(400);
  });

  it('rejects artificial, shallow, flowing, covered, and shore-adjacent water', () => {
    const artificial = new SparseSea();
    artificial.fillDeepSea();
    artificial.generatedY = SEA_LEVEL + 2;
    expect(probeSeaWave(0.5, 0.5, artificial)).toBeNull();

    const shallow = new SparseSea();
    shallow.fillDeepSea();
    for (let z = -6; z <= 6; z++)
      for (let x = -6; x <= 6; x++)
        for (let y = SEA_LEVEL - 3; y < SEA_LEVEL; y++) {
          shallow.blocks.delete(key(x, y, z));
          shallow.amounts.delete(key(x, y, z));
          shallow.sources.delete(key(x, y, z));
        }
    expect(probeSeaWave(0.5, 0.5, shallow)).toBeNull();

    const flowing = new SparseSea();
    flowing.fillDeepSea();
    flowing.setWater(0, SEA_LEVEL, 0, 7, false);
    expect(probeSeaWave(0.5, 0.5, flowing)).toBeNull();

    const covered = new SparseSea();
    covered.fillDeepSea();
    covered.blocks.set(key(0, SEA_LEVEL + 1, 0), 1);
    expect(probeSeaWave(0.5, 0.5, covered)).toBeNull();

    const shore = new SparseSea();
    shore.fillDeepSea();
    for (let z = -6; z <= 6; z++) {
      shore.blocks.delete(key(2, SEA_LEVEL, z));
      shore.amounts.delete(key(2, SEA_LEVEL, z));
      shore.sources.delete(key(2, SEA_LEVEL, z));
    }
    expect(probeSeaWave(0.5, 0.5, shore)).toBeNull();
  });

  it('uses the exact shared wave height for both crests above the voxel and troughs inside it', () => {
    const sea = new SparseSea();
    sea.fillDeepSea(12);
    const probe = probeSeaWave(0.5, 0.5, sea);
    expect(probe).not.toBeNull();
    if (!probe) return;

    let crest: { x: number; z: number; time: number } | null = null;
    let trough: { x: number; z: number; time: number } | null = null;
    for (let time = 0; time <= 20 && (!crest || !trough); time += 0.5) {
      for (let z = -4; z <= 4 && (!crest || !trough); z += 0.5) {
        for (let x = -4; x <= 4 && (!crest || !trough); x += 0.5) {
          const h = sampleWaterWave(x, z, time, 1).height;
          if (h > 0.14) crest = { x, z, time };
          if (h < -0.1) trough = { x, z, time };
        }
      }
    }
    expect(crest).not.toBeNull();
    expect(trough).not.toBeNull();
    if (!crest || !trough) return;

    for (const point of [crest, trough]) {
      const surfaceY = seaWaveSurfaceY(point.x, point.z, point.time, probe);
      expect(isPointInWater(point.x, surfaceY - 0.001, point.z, point.time, sea, true, probe)).toBe(
        true,
      );
      expect(isPointInWater(point.x, surfaceY + 0.001, point.z, point.time, sea, true, probe)).toBe(
        false,
      );
    }

    const crestY = seaWaveSurfaceY(crest.x, crest.z, crest.time, probe);
    expect(crestY).toBeGreaterThan(SEA_LEVEL + 1); // crest reaches into the air voxel
    expect(sea.getBlock(Math.floor(crest.x), Math.floor(crestY - 0.001), Math.floor(crest.z))).toBe(
      0,
    );
    expect(isPointInWater(crest.x, crestY - 0.001, crest.z, crest.time, sea, true, probe)).toBe(
      true,
    );

    const troughY = seaWaveSurfaceY(trough.x, trough.z, trough.time, probe);
    expect(Math.floor(troughY + 0.001)).toBe(SEA_LEVEL); // trough exposes part of the water voxel
    expect(
      sea.getBlock(Math.floor(trough.x), Math.floor(troughY + 0.001), Math.floor(trough.z)),
    ).toBe(WATER);
    expect(isPointInWater(trough.x, troughY + 0.001, trough.z, trough.time, sea, true, probe)).toBe(
      false,
    );
  });

  it('keeps voxel semantics for non-sea water and when shaders are disabled', () => {
    const pool = new SparseSea();
    pool.setWater(3, 40, 7);
    expect(isPointInWater(3.5, 40.99, 7.5, 4, pool, true)).toBe(true);
    expect(isPointInWater(3.5, 41.01, 7.5, 4, pool, true)).toBe(false);

    const sea = new SparseSea();
    sea.fillDeepSea();
    const probe = probeSeaWave(0.5, 0.5, sea);
    expect(probe).not.toBeNull();
    expect(isPointInWater(0.5, SEA_LEVEL + 0.99, 0.5, 3, sea, false, probe)).toBe(true);
    expect(isPointInWater(0.5, SEA_LEVEL + 1.01, 0.5, 3, sea, false, probe)).toBe(false);
  });

  it('derives a conservative early-out bound from the shared wave constants', () => {
    for (let time = 0; time <= 24; time += 1.25) {
      for (let z = -16; z <= 16; z += 1.5) {
        for (let x = -16; x <= 16; x += 1.5) {
          expect(Math.abs(sampleWaterWave(x, z, time, 1).height)).toBeLessThanOrEqual(
            MAX_SEA_WAVE_DISPLACEMENT,
          );
        }
      }
    }
  });
});
