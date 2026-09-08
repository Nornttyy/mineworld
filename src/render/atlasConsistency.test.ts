import { describe, it, expect } from 'vitest';
import cartoonSrc from '../../tools/textures/gen_textures.py?raw';
import classicSrc from '../../tools/textures/gen_classic.py?raw';

// 两套材质(卡通 gen_textures / 经典 gen_classic)各自维护一份 ATLAS_ORDER。
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

  it('cartoon and classic atlases list identical tiles in identical order', () => {
    expect(classic).toEqual(cartoon);
  });

  it('both packs include grass_plant (cross-billboard 草)', () => {
    expect(cartoon).toContain('grass_plant');
    expect(classic).toContain('grass_plant');
  });

  it('both packs include all extended 1.12 tiles and fit the 4×12 atlas', () => {
    expect(cartoon.slice(37)).toEqual([
      'granite', 'diorite', 'andesite', 'bricks', 'mossy_cobblestone', 'red_sand',
      'birch_log_top', 'birch_log_side', 'birch_leaves',
    ]);
    expect(cartoon.length).toBeLessThanOrEqual(48);
  });

  it('classic pack explicitly overrides every leaf species instead of borrowing vivid leaves', () => {
    for (const leaf of ['oak_leaves', 'spruce_leaves', 'birch_leaves']) {
      expect(classicSrc).toContain(`"${leaf}": ${leaf}`);
    }
  });
});
