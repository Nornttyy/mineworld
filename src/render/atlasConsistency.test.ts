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
});
