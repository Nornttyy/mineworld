import { afterEach, describe, expect, it } from 'vitest';
import { iconUrl, setIconTexturePack } from './itemIcons';
import { CREATIVE_ITEM_IDS } from '../core/inventory/creative';

describe('item icon texture packs', () => {
  afterEach(() => setIconTexturePack('classic'));

  it('标准与鲜艳材质分别读取各自的像素图标目录', () => {
    setIconTexturePack('classic');
    expect(iconUrl(1)).toContain('/textures/icons_classic/stone.png');
    setIconTexturePack('cartoon');
    expect(iconUrl(1)).toContain('/textures/icons/stone.png');
  });

  it('每个创造栏道具都有像素图标，不退化成文字占位', () => {
    for (const id of CREATIVE_ITEM_IDS)
      expect(iconUrl(id), `missing icon for ${id}`).not.toBeNull();
  });
});
