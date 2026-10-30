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

  it('材质只认 cartoon/classic，已下线的写实包回退默认包', () => {
    expect(sanitizeSettings({ texturePack: 'classic' }).texturePack).toBe('classic');
    expect(sanitizeSettings({ texturePack: 'cartoon' }).texturePack).toBe('cartoon');
    expect(sanitizeSettings({ texturePack: 'realistic' }).texturePack).toBe('classic');
    expect(sanitizeSettings({ texturePack: 'weird' }).texturePack).toBe(DEFAULT_SETTINGS.texturePack);
  });

  it('空对象回退到默认', () => {
    expect(sanitizeSettings({}).lightingQuality).toBe(DEFAULT_SETTINGS.lightingQuality);
  });
});

describe('Java visual preset v6 migration', () => {
  it('新安装默认使用标准像素包', () => {
    expect(DEFAULT_SETTINGS.texturePack).toBe('classic');
  });

  it('旧设置首次加载时迁移到标准像素包', () => {
    expect(settingsFromStorage({ texturePack: 'realistic' }).texturePack).toBe('classic');
  });

  it('上一版写实设置迁移到标准像素包', () => {
    expect(settingsFromStorage({ texturePack: 'realistic', textureStyleVersion: 4 }).texturePack).toBe('classic');
  });

  it('旧光影设置首次迁移到原版画面，之后保留手动选择', () => {
    expect(settingsFromStorage({ lightingQuality: 'high', textureStyleVersion: 5 }).lightingQuality).toBe('off');
    expect(settingsFromStorage({ lightingQuality: 'high', textureStyleVersion: 6 }).lightingQuality).toBe('high');
  });

  it('v6 迁移完成后尊重用户手动选择的鲜艳包', () => {
    expect(settingsFromStorage({ texturePack: 'cartoon', textureStyleVersion: 6 }).texturePack).toBe('cartoon');
  });

  it('v6 设置可以保留经典材质包', () => {
    expect(settingsFromStorage({ texturePack: 'classic', textureStyleVersion: 6 }).texturePack).toBe('classic');
  });
});

describe('lightingQuality 迁移', () => {
  it('新安装默认基础光照', () => {
    expect(DEFAULT_SETTINGS.lightingQuality).toBe('off');
  });
  it('旧存档 shaders:true → high', () => {
    expect(sanitizeSettings({ shaders: true }).lightingQuality).toBe('high');
  });
  it('旧存档 shaders:false → standard', () => {
    expect(sanitizeSettings({ shaders: false }).lightingQuality).toBe('standard');
  });
  it('非布尔 shaders 使用默认基础光照', () => {
    expect(sanitizeSettings({ shaders: 'yes' }).lightingQuality).toBe('off');
  });
  it('缺失使用默认基础光照', () => {
    expect(sanitizeSettings({}).lightingQuality).toBe('off');
  });
  it('已是新值则保留', () => {
    expect(sanitizeSettings({ lightingQuality: 'off' }).lightingQuality).toBe('off');
    expect(sanitizeSettings({ lightingQuality: 'high' }).lightingQuality).toBe('high');
  });
  it('非法值使用默认基础光照', () => {
    expect(sanitizeSettings({ lightingQuality: 'ultra' }).lightingQuality).toBe('off');
  });
  it('新值优先于旧 shaders（同时存在时以 lightingQuality 为准）', () => {
    expect(sanitizeSettings({ shaders: true, lightingQuality: 'off' }).lightingQuality).toBe('off');
  });
});
