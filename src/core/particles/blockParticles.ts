import {
  ATLAS_TILES,
  blockFaceTile,
  Face,
  GRASS,
  TORCH,
  SNOW_LAYER,
  isPlantId,
} from '../blocks/registry';
import type { Particle } from './particles';
import type { RayHit } from '../world/raycast';

export type ParticleTint = readonly [number, number, number];
export const blockParticleTile = (id: number): number =>
  id === GRASS ? ATLAS_TILES.dirt : blockFaceTile(id, Face.PosZ);

/** Full cube fallback; plant outline boxes keep small plants from exploding as a cubic metre. */
export function particleBounds(
  id: number,
): readonly [number, number, number, number, number, number] {
  if (id === TORCH) return [0.4, 0, 0.4, 0.6, 0.625, 0.6];
  if (id === SNOW_LAYER) return [0, 0, 0, 1, 0.125, 1];
  if (isPlantId(id)) return [0.1, 0, 0.1, 0.9, 0.8, 0.9];
  return [0, 0, 0, 1, 1, 1];
}

function fragment(
  x: number,
  y: number,
  z: number,
  dx: number,
  dy: number,
  dz: number,
  id: number,
  tint: ParticleTint,
  rand: () => number,
): Particle {
  const life = Math.floor(4 / (rand() * 0.9 + 0.1)) / 20;
  dx += (rand() * 2 - 1) * 0.4;
  dy += (rand() * 2 - 1) * 0.4;
  dz += (rand() * 2 - 1) * 0.4;
  const speed = (rand() + rand() + 1) * 0.15 * 0.4;
  const length = Math.hypot(dx, dy, dz) || 1;
  return {
    x,
    y,
    z,
    vx: (dx / length) * speed * 20,
    vy: ((dy / length) * speed + 0.1) * 20,
    vz: (dz / length) * speed * 20,
    age: 0,
    life,
    r: 0.6,
    g: 0.6,
    b: 0.6,
    tint,
    tile: blockParticleTile(id),
    size: 0.1 * (rand() * 0.5 + 0.5),
    u: rand() * 0.75,
    v: rand() * 0.75,
    tickRemainder: 0,
    previous: { x, y, z },
  };
}

/** Java subdivides every shape box in quarter-block steps: a full cube produces 64 fragments. */
export function spawnBlockBreak(
  x: number,
  y: number,
  z: number,
  id: number,
  tint: ParticleTint = [1, 1, 1],
  rand: () => number = Math.random,
): Particle[] {
  const [x0, y0, z0, x1, y1, z1] = particleBounds(id);
  const dx = x1 - x0,
    dy = y1 - y0,
    dz = z1 - z0;
  const nx = Math.max(2, Math.ceil(dx / 0.25)),
    ny = Math.max(2, Math.ceil(dy / 0.25)),
    nz = Math.max(2, Math.ceil(dz / 0.25));
  const out: Particle[] = [];
  for (let ix = 0; ix < nx; ix++)
    for (let iy = 0; iy < ny; iy++)
      for (let iz = 0; iz < nz; iz++) {
        const fx = (ix + 0.5) / nx,
          fy = (iy + 0.5) / ny,
          fz = (iz + 0.5) / nz;
        out.push(
          fragment(
            x + x0 + fx * dx,
            y + y0 + fy * dy,
            z + z0 + fz * dz,
            fx - 0.5,
            fy - 0.5,
            fz - 0.5,
            id,
            tint,
            rand,
          ),
        );
      }
  return out;
}

/** One small chip just outside the face being hit; Java setPower(.2), scale(.6). */
export function spawnBlockHit(
  hit: RayHit,
  id: number,
  tint: ParticleTint = [1, 1, 1],
  rand: () => number = Math.random,
): Particle {
  const [x0, y0, z0, x1, y1, z1] = particleBounds(id);
  let x = hit.x + x0 + 0.1 + rand() * Math.max(0, x1 - x0 - 0.2);
  let y = hit.y + y0 + 0.1 + rand() * Math.max(0, y1 - y0 - 0.2);
  let z = hit.z + z0 + 0.1 + rand() * Math.max(0, z1 - z0 - 0.2);
  if (hit.nx) x = hit.x + (hit.nx > 0 ? x1 + 0.1 : x0 - 0.1);
  if (hit.ny) y = hit.y + (hit.ny > 0 ? y1 + 0.1 : y0 - 0.1);
  if (hit.nz) z = hit.z + (hit.nz > 0 ? z1 + 0.1 : z0 - 0.1);
  const p = fragment(x, y, z, 0, 0, 0, id, tint, rand);
  p.collisionSize = 0.12;
  p.vx *= 0.2;
  p.vy = (p.vy - 2) * 0.2 + 2;
  p.vz *= 0.2;
  p.size! *= 0.6;
  return p;
}
