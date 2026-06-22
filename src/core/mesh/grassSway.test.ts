import { describe, it, expect } from 'vitest';
import { meshChunkData } from './mesher';

const GRASS_PLANT = 16;

function meshOne(id: number) {
  const b: Record<string, number> = { [`5,100,5`]: id };
  return meshChunkData(0, 0, (x, y, z) => b[`${x},${y},${z}`] ?? 0, () => 0);
}

describe('草丛摆动权重 aSway', () => {
  it('草丛 cutout 顶点带 sway：底≈0、顶≈1', () => {
    const m = meshOne(GRASS_PLANT);
    expect(m.cutout.sway).toBeDefined();
    const sway = m.cutout.sway as Float32Array;
    const pos = m.cutout.positions;
    let minS = 1, maxS = 0;
    for (let i = 0; i < sway.length; i++) {
      const y = pos[i * 3 + 1];
      if (Math.abs(y - 100) < 0.01) minS = Math.min(minS, sway[i]); // 草根那层
      else maxS = Math.max(maxS, sway[i]); // 草尖那层
    }
    expect(minS).toBeLessThan(0.05);
    expect(maxS).toBeGreaterThan(0.8);
  });
});
