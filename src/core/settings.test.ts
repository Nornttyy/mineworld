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

  it('old shaders 布尔值迁移到 lightingQuality', () => {
    expect(sanitizeSettings({ shaders: true }).lightingQuality).toBe('high');
    expect(sanitizeSettings({ shaders: false }).lightingQuality).toBe('standard');
  });
});

describe('lightingQuality 迁移', () => {
  it('默认是 standard', () => {
    expect(DEFAULT_SETTINGS.lightingQuality).toBe('standard');
  });
  it('旧存档 shaders:true → high', () => {
    expect(sanitizeSettings({ shaders: true }).lightingQuality).toBe('high');
  });
  it('旧存档 shaders:false → standard', () => {
    expect(sanitizeSettings({ shaders: false }).lightingQuality).toBe('standard');
  });
  it('缺失 → standard', () => {
    expect(sanitizeSettings({}).lightingQuality).toBe('standard');
  });
  it('已是新值则保留', () => {
    expect(sanitizeSettings({ lightingQuality: 'off' }).lightingQuality).toBe('off');
    expect(sanitizeSettings({ lightingQuality: 'high' }).lightingQuality).toBe('high');
  });
  it('非法值 → standard', () => {
    expect(sanitizeSettings({ lightingQuality: 'ultra' }).lightingQuality).toBe('standard');
  });
  it('新值优先于旧 shaders（同时存在时以 lightingQuality 为准）', () => {
    expect(sanitizeSettings({ shaders: true, lightingQuality: 'off' }).lightingQuality).toBe('off');
  });
});
