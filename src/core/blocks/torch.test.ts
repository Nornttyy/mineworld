import { describe, expect, it } from 'vitest';
import { raycastVoxel } from '../world/raycast';
import { TORCH, breakTimeMs, dropFor, isSolidId, isTargetableId } from './registry';

// A torch can be directly removed without destroying its supporting block:
// https://minecraft.wiki/w/Torch#Breaking
describe('torch mining target', () => {
  it('targets a non-solid torch before the stone block behind it', () => {
    const hit = raycastVoxel(
      { x: 0.5, y: 1.5, z: 0.5 },
      { x: 1, y: 0, z: 0 },
      4.5,
      (x, y, z) => isTargetableId(y === 1 && z === 0 ? (x === 1 ? TORCH : x === 2 ? 1 : 0) : 0),
    );
    expect(hit?.x).toBe(1);
    expect(isSolidId(TORCH)).toBe(false);
    expect(breakTimeMs(TORCH)).toBe(0);
    expect(dropFor(TORCH)).toBe(TORCH);
  });
});
