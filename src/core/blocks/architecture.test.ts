import { describe, it, expect } from 'vitest';
import { BLOCKS, isSolidId } from './registry';
import {
  architectureData,
  architectureStateId as state,
  architectureModel,
  baseBlockId,
  changedArchitectureState,
} from './architecture';
import { connectedArchitectureState } from './architecturePlacement';
import { meshChunkData } from '../mesh/mesher';
import { raycastVoxel } from '../world/raycast';
import { step } from '../physics/step';
import type { Player, VoxelWorld } from '../physics/player';
import { architectureGeometry } from '../../render/architectureGeometry';

describe('original state models in runtime', () => {
  it('keeps inventory IDs separate from persistent world states', () => {
    expect(BLOCKS.length).toBeLessThan(256);
    for (const m of architectureData.states) {
      if (m.name === 'minecraft:water') continue;
      expect(BLOCKS[m.id].id).toBe(m.id);
      expect(baseBlockId(m.id)).toBeLessThan(256);
    }
  });
  it('renders a half slab and hand-held slab at half height', () => {
    const id = state('sandstone_slab', { type: 'bottom', waterlogged: 'false' });
    const mesh = meshChunkData(
      0,
      0,
      (x, y, z) => (x === 1 && y === 1 && z === 1 ? id : 0),
      () => 0,
      0,
      4,
    );
    const positions = mesh.cutout.positions;
    expect(Math.max(...Array.from(positions).filter((_, i) => i % 3 === 1))).toBe(1.5);
    const g = architectureGeometry(id, 1)!;
    g.computeBoundingBox();
    expect(g.boundingBox!.max.y - g.boundingBox!.min.y).toBe(0.5);
    g.dispose();
  });
  it('retains tiles beyond 255 and sends colored glass through transparency', () => {
    const id = state('yellow_stained_glass_pane', {
      north: 'false',
      south: 'false',
      east: 'false',
      west: 'false',
      waterlogged: 'false',
    });
    const mesh = meshChunkData(
      0,
      0,
      (x, y, z) => (x === 1 && y === 1 && z === 1 ? id : 0),
      () => 0,
      0,
      4,
    );
    expect(mesh.glass!.indices.length).toBeGreaterThan(0);
    expect(Math.max(...mesh.glass!.tiles!)).toBeGreaterThan(255);
  });
  it('ray targeting passes over the empty half of a slab', () => {
    const slab = state('sandstone_slab', { type: 'bottom', waterlogged: 'false' }),
      get = (x: number, y: number, z: number) =>
        x === 1 && y === 0 && z === 0 ? slab : x === 3 && y === 0 && z === 0 ? 1 : 0;
    const ray = (y: number) =>
      raycastVoxel(
        { x: 0, y, z: 0.5 },
        { x: 1, y: 0, z: 0 },
        5,
        (x, y, z) => isSolidId(get(x, y, z)),
        (x, y, z) => architectureModel(get(x, y, z))?.selectionBoxes,
      );
    expect(ray(0.75)?.x).toBe(3);
    expect(ray(0.25)?.x).toBe(1);
  });
  it('opens a door by changing real collision and rendered orientation', () => {
    const closed = state('oak_door', {
        facing: 'east',
        half: 'lower',
        hinge: 'left',
        open: 'false',
        powered: 'false',
      }),
      opened = changedArchitectureState(closed, { open: 'true' });
    expect(architectureModel(opened)!.boxes).not.toEqual(architectureModel(closed)!.boxes);
    expect(architectureModel(opened)!.quads).not.toEqual(architectureModel(closed)!.quads);
  });
  it('joins glass panes and shapes stair corners after placement', () => {
    const pane = state('glass_pane', {
      north: 'false',
      south: 'false',
      east: 'false',
      west: 'false',
      waterlogged: 'false',
    });
    const connected = connectedArchitectureState(pane, 0, 0, 0, (x, y, z) =>
      x === 1 && y === 0 && z === 0 ? pane : 0,
    );
    expect(architectureModel(connected)!.properties.east).toBe('true');
    const stair = state('oak_stairs', {
        facing: 'east',
        half: 'bottom',
        shape: 'straight',
        waterlogged: 'false',
      }),
      north = changedArchitectureState(stair, { facing: 'north' });
    expect(
      architectureModel(
        connectedArchitectureState(stair, 0, 0, 0, (x, y, z) =>
          x === 1 && y === 0 && z === 0 ? north : 0,
        ),
      )!.properties.shape,
    ).toBe('outer_left');
  });
  it('walks up a lower slab and stairs without walking through a full block', () => {
    const slab = state('sandstone_slab', { type: 'bottom', waterlogged: 'false' }),
      stair = state('oak_stairs', {
        facing: 'east',
        half: 'bottom',
        shape: 'straight',
        waterlogged: 'false',
      });
    const travel = (obstacle: number) => {
      const get = (x: number, y: number, _z: number) =>
        y < 0 ? 1 : x === 2 && y === 0 ? obstacle : 0;
      const world: VoxelWorld = { getBlock: get, isSolid: (x, y, z) => isSolidId(get(x, y, z)) };
      let p: Player = { pos: { x: 0.5, y: 0, z: 0.5 }, vel: { x: 0, y: 0, z: 0 }, onGround: true },
        maxY = 0;
      for (let i = 0; i < 35; i++) {
        p = step(p, { forward: 1, right: 0, yaw: 0, jump: false }, world);
        maxY = Math.max(maxY, p.pos.y);
      }
      return { p, maxY };
    };
    expect(travel(slab).maxY).toBeCloseTo(0.5, 2);
    expect(travel(slab).p.pos.x).toBeGreaterThan(3);
    expect(travel(stair).maxY).toBeCloseTo(1, 2);
    expect(travel(stair).p.pos.x).toBeGreaterThan(3);
    expect(travel(1).p.pos.x).toBeLessThan(2);
  });
});
