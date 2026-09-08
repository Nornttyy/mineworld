import { afterEach, describe, expect, it } from 'vitest';
import { iconUrl, setIconTexturePack } from './itemIcons';

describe('item icon texture packs', () => {
  afterEach(() => setIconTexturePack('classic'));

  it('routes the realistic pack to its generated icon directory', () => {
    setIconTexturePack('realistic');
    expect(iconUrl(1)).toContain('/textures/icons_realistic/stone.png');
    expect(iconUrl(292, 'pulling_2')).toContain(
      '/textures/icons_realistic/bow_pulling_2.png',
    );
  });
});
