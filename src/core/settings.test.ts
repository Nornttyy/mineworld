import { describe, it, expect } from 'vitest';
import { sanitizeSettings, DEFAULT_SETTINGS } from './settings';

describe('settings sanitize', () => {
  it('空/脏输入 → 默认值', () => {
    expect(sanitizeSettings(null)).toEqual(DEFAULT_SETTINGS);
    expect(sanitizeSettings('garbage')).toEqual(DEFAULT_SETTINGS);
    expect(sanitizeSettings({})).toEqual(DEFAULT_SETTINGS);
  });

  it('音量夹到 0..100 并取整', () => {
    expect(sanitizeSettings({ volume: 250 }).volume).toBe(100);
    expect(sanitizeSettings({ volume: -10 }).volume).toBe(0);
    expect(sanitizeSettings({ volume: 33.7 }).volume).toBe(34);
    expect(sanitizeSettings({ volume: NaN }).volume).toBe(DEFAULT_SETTINGS.volume);
  });

  it('材质只认 cartoon/classic，其余回退 cartoon', () => {
    expect(sanitizeSettings({ texturePack: 'classic' }).texturePack).toBe('classic');
    expect(sanitizeSettings({ texturePack: 'cartoon' }).texturePack).toBe('cartoon');
    expect(sanitizeSettings({ texturePack: 'weird' }).texturePack).toBe('cartoon');
  });

  it('光影开关：非布尔回退默认', () => {
    expect(sanitizeSettings({ shaders: true }).shaders).toBe(true);
    expect(sanitizeSettings({ shaders: 'yes' }).shaders).toBe(DEFAULT_SETTINGS.shaders);
  });
});
