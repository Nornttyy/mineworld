// 全局设置：菜单(局外)与游戏(局内)共用，存 localStorage 跨会话保留。
// sanitize 是纯函数(可单测)；load/save 包 localStorage(node/无存储环境下静默降级)。

export type TexturePack = 'cartoon' | 'classic';

export interface Settings {
  volume: number; // 0..100（音效尚未做，先存着供将来音频用）
  shaders: boolean; // 光影：真实云 / 真实水面（渲染接入见后续，先存设置）
  texturePack: TexturePack; // 方块材质风格
}

export const DEFAULT_SETTINGS: Settings = { volume: 70, shaders: false, texturePack: 'cartoon' };

const KEY = 'mineworld.settings';

// 把任意(可能脏的)输入收敛成合法 Settings：音量夹到 0..100 整数，枚举/布尔校验，缺省补默认。
export function sanitizeSettings(raw: unknown): Settings {
  const r = (raw ?? {}) as Partial<Record<keyof Settings, unknown>>;
  const volume =
    typeof r.volume === 'number' && isFinite(r.volume) ? Math.max(0, Math.min(100, Math.round(r.volume))) : DEFAULT_SETTINGS.volume;
  const shaders = typeof r.shaders === 'boolean' ? r.shaders : DEFAULT_SETTINGS.shaders;
  const texturePack: TexturePack = r.texturePack === 'classic' ? 'classic' : 'cartoon';
  return { volume, shaders, texturePack };
}

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(KEY);
    return sanitizeSettings(raw ? JSON.parse(raw) : null);
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

export function saveSettings(s: Settings): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(sanitizeSettings(s)));
  } catch {
    /* 无 localStorage(如 SSR/测试) → 忽略 */
  }
}
