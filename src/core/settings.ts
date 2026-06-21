// 全局设置：菜单(局外)与游戏(局内)共用，存 localStorage 跨会话保留。
// sanitize 是纯函数(可单测)；load/save 包 localStorage(node/无存储环境下静默降级)。

export type TexturePack = 'cartoon' | 'classic';
export type LightingQuality = 'off' | 'standard' | 'high';

export interface Settings {
  volume: number; // 0..100（音效尚未做，先存着供将来音频用）
  lightingQuality: LightingQuality; // 光影画质：关/标准/高
  texturePack: TexturePack; // 方块材质风格
  renderDistance: number; // 区块加载半径(3~12)：小=雾近、区块少、流畅；大=看得远、更吃性能
}

export const DEFAULT_SETTINGS: Settings = { volume: 70, lightingQuality: 'standard', texturePack: 'cartoon', renderDistance: 6 };

const KEY = 'mineworld.settings';
const LQ: LightingQuality[] = ['off', 'standard', 'high'];

// 把任意(可能脏的)输入收敛成合法 Settings：音量夹到 0..100 整数，枚举/布尔校验，缺省补默认。
// 光影：新枚举优先；否则从旧布尔 shaders 迁移（true→high, false→standard）；都没有→默认
export function sanitizeSettings(raw: unknown): Settings {
  const r = (raw ?? {}) as Partial<Record<string, unknown>>;
  const volume =
    typeof r.volume === 'number' && isFinite(r.volume) ? Math.max(0, Math.min(100, Math.round(r.volume))) : DEFAULT_SETTINGS.volume;
  let lightingQuality: LightingQuality;
  if (typeof r.lightingQuality === 'string' && (LQ as string[]).includes(r.lightingQuality)) {
    lightingQuality = r.lightingQuality as LightingQuality;
  } else if (typeof r.shaders === 'boolean') {
    lightingQuality = r.shaders ? 'high' : 'standard';
  } else {
    lightingQuality = DEFAULT_SETTINGS.lightingQuality;
  }
  const texturePack: TexturePack = r.texturePack === 'classic' ? 'classic' : 'cartoon';
  const renderDistance =
    typeof r.renderDistance === 'number' && isFinite(r.renderDistance)
      ? Math.max(3, Math.min(12, Math.round(r.renderDistance)))
      : DEFAULT_SETTINGS.renderDistance;
  return { volume, lightingQuality, texturePack, renderDistance };
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
