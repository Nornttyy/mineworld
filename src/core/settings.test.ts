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

  it('材质只认 cartoon/classic/realistic，其余回退默认包', () => {
    expect(sanitizeSettings({ texturePack: 'classic' }).texturePack).toBe('classic');
    expect(sanitizeSettings({ texturePack: 'cartoon' }).texturePack).toBe('cartoon');
    expect(sanitizeSettings({ texturePack: 'realistic' }).texturePack).toBe('realistic');
    expect(sanitizeSettings({ texturePack: 'weird' }).texturePack).toBe(DEFAULT_SETTINGS.texturePack);
  });

  it('空对象回退到默认', () => {
    expect(sanitizeSettings({}).lightingQuality).toBe(DEFAULT_SETTINGS.lightingQuality);
  });
});

describe('texture pack v4 migration', () => {
  it('新安装默认使用写实材质包', () => {
    expect(DEFAULT_SETTINGS.texturePack).toBe('realistic');
  });

  it('旧设置首次加载时迁移到写实材质包', () => {
    expect(settingsFromStorage({ texturePack: 'cartoon' }).texturePack).toBe('realistic');
  });

  it('上一版设置迁移到写实材质包', () => {
    expect(settingsFromStorage({ texturePack: 'classic', textureStyleVersion: 3 }).texturePack).toBe('realistic');
  });

  it('v4 迁移完成后尊重用户手动选择的鲜艳包', () => {
    expect(settingsFromStorage({ texturePack: 'cartoon', textureStyleVersion: 4 }).texturePack).toBe('cartoon');
  });

  it('v4 设置可以保留经典材质包', () => {
    expect(settingsFromStorage({ texturePack: 'classic', textureStyleVersion: 4 }).texturePack).toBe('classic');
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
