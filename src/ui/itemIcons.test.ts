import { afterEach, describe, expect, it } from 'vitest';
import { iconUrl, isRealisticIconPack, setIconTexturePack } from './itemIcons';
import { CREATIVE_ITEM_IDS } from '../core/inventory/creative';

describe('item icon texture packs', () => {
  afterEach(() => setIconTexturePack('classic'));

  it('routes the realistic pack to its generated icon directory', () => {
    setIconTexturePack('realistic');
    expect(isRealisticIconPack()).toBe(true);
    expect(iconUrl(1)).toContain('/textures/icons_realistic/stone.png');
    expect(iconUrl(292, 'pulling_2')).toContain('/textures/icons_realistic/bow_pulling_2.png');
  });

  it('每个创造栏道具都有像素图标，不退化成文字占位', () => {
    for (const id of CREATIVE_ITEM_IDS)
      expect(iconUrl(id), `missing icon for ${id}`).not.toBeNull();
  });
});
