import { describe, it, expect } from 'vitest';
import cartoonSrc from '../../tools/textures/gen_textures.py?raw';
import classicSrc from '../../tools/textures/gen_classic.py?raw';
import realisticSrc from '../../tools/textures/gen_realistic.py?raw';
import chunkManagerSrc from './ChunkMeshManager.ts?raw';
import { ATLAS_TILES } from '../core/blocks/registry';
import { atlasTileAtUv, ATLAS_COLUMNS, ATLAS_ROWS } from '../core/blocks/atlasLayout';

// 三套材质(鲜艳 / 经典 / 写实)各自维护一份 ATLAS_ORDER。
// 它们必须逐一对齐——否则某 pack 缺某 tile(空槽透明)，该方块在那个 pack 下不可见。
// 本测试堵的就是「卡通加了 grass_plant、经典忘加 → 经典草不可见」这类漂移。
function atlasOrder(src: string): string[] {
  const m = src.match(/ATLAS_ORDER\s*=\s*\[([\s\S]*?)\]/);
  if (!m) throw new Error('ATLAS_ORDER not found');
  return [...m[1].matchAll(/['"]([a-z0-9_]+)['"]/g)].map((x) => x[1]);
}

describe('atlas pack consistency', () => {
  const cartoon = atlasOrder(cartoonSrc);
  const classic = atlasOrder(classicSrc);
  const realistic = atlasOrder(realisticSrc);

  it('all atlases list identical tiles in identical order', () => {
    expect(classic).toEqual(cartoon);
    expect(realistic).toEqual(cartoon);
  });

  it('all packs include grass_plant (cross-billboard 草)', () => {
    expect(cartoon).toContain('grass_plant');
    expect(classic).toContain('grass_plant');
    expect(realistic).toContain('grass_plant');
  });

  it('all packs include extended 1.12 tiles and fit the 4×12 atlas', () => {
    expect(cartoon.slice(37)).toEqual([
      'granite', 'diorite', 'andesite', 'bricks', 'mossy_cobblestone', 'red_sand',
      'birch_log_top', 'birch_log_side', 'birch_leaves',
    ]);
    expect(cartoon.length).toBeLessThanOrEqual(ATLAS_COLUMNS * ATLAS_ROWS);
  });

  it('classic pack explicitly overrides every leaf species instead of borrowing vivid leaves', () => {
    for (const leaf of ['oak_leaves', 'spruce_leaves', 'birch_leaves']) {
      expect(classicSrc).toContain(`"${leaf}": ${leaf}`);
    }
  });

  it('shader classifies the current 12-row atlas so cactus and snow cannot alias lava/portal', () => {
    const centerUv = (tile: number): [number, number] => {
      const column = tile % ATLAS_COLUMNS;
      const row = Math.floor(tile / ATLAS_COLUMNS);
      return [(column + 0.5) / ATLAS_COLUMNS, 1 - (row + 0.5) / ATLAS_ROWS];
    };
    for (let tile = 0; tile < ATLAS_COLUMNS * ATLAS_ROWS; tile++) {
      expect(atlasTileAtUv(...centerUv(tile))).toBe(tile);
    }
    expect(atlasTileAtUv(...centerUv(ATLAS_TILES.cactus))).toBe(ATLAS_TILES.cactus);
    expect(atlasTileAtUv(...centerUv(ATLAS_TILES.snow))).toBe(ATLAS_TILES.snow);
    expect([ATLAS_TILES.glowstone, ATLAS_TILES.lava, ATLAS_TILES.nether_portal]).not.toContain(
      ATLAS_TILES.cactus,
    );
    expect([ATLAS_TILES.glowstone, ATLAS_TILES.lava, ATLAS_TILES.nether_portal]).not.toContain(
      ATLAS_TILES.snow,
    );
    expect(chunkManagerSrc).toContain('${ATLAS_ROWS}.0');
    expect(chunkManagerSrc).not.toContain('(1.0 - vMapUv.y) * 10.0');
  });

  it('树叶可见网格与阴影网格使用同一套风摆位移，避免移动黑条纹', () => {
    expect(chunkManagerSrc).toContain('mineworld-cutout-sway-depth-v1');
    expect(chunkManagerSrc.match(/transformed\.x \+= sin\(ph \+ uTime\*1\.4\) \* sw;/g)).toHaveLength(2);
    expect(chunkManagerSrc.match(/transformed\.z \+= sin\(ph\*1\.3 \+ uTime\*1\.1\) \* sw;/g)).toHaveLength(2);
  });
});
