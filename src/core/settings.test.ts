import { describe, it, expect } from 'vitest';
import { sanitizeSettings, settingsFromStorage, DEFAULT_SETTINGS } from './settings';

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

  it('材质只认 cartoon/classic，其余回退默认经典包', () => {
    expect(sanitizeSettings({ texturePack: 'classic' }).texturePack).toBe('classic');
    expect(sanitizeSettings({ texturePack: 'cartoon' }).texturePack).toBe('cartoon');
    expect(sanitizeSettings({ texturePack: 'weird' }).texturePack).toBe('classic');
  });

  it('空对象回退到默认', () => {
    expect(sanitizeSettings({}).lightingQuality).toBe(DEFAULT_SETTINGS.lightingQuality);
  });
});

describe('texture pack v3 migration', () => {
  it('新安装默认使用经典像素包', () => {
    expect(DEFAULT_SETTINGS.texturePack).toBe('classic');
  });

  it('旧版卡通设置首次加载时迁移到经典像素包', () => {
    expect(settingsFromStorage({ texturePack: 'cartoon' }).texturePack).toBe('classic');
  });

  it('上一版近似纹样再次迁移到新的标准像素包', () => {
    expect(settingsFromStorage({ texturePack: 'cartoon', textureStyleVersion: 2 }).texturePack).toBe('classic');
  });

  it('v3 迁移完成后尊重用户手动选择的鲜艳包', () => {
    expect(settingsFromStorage({ texturePack: 'cartoon', textureStyleVersion: 3 }).texturePack).toBe('cartoon');
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
  it('非布尔 shaders(如 "yes") → standard', () => {
    expect(sanitizeSettings({ shaders: 'yes' }).lightingQuality).toBe('standard');
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
