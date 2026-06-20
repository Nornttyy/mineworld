// 昼夜更替（纯逻辑，可单测）。把"世界时间"映射到天空/雾/世界亮度，渲染层只管套用结果。
//
// 时间单位 = MC 刻：一整天 = 24000 刻。约定 0 = 日出(06:00)，6000 = 正午，12000 = 日落(18:00)，
// 18000 = 午夜。以 20 TPS 推进 → 24000 刻 = 1200 秒 = 20 分钟一整天（1:1 MC）。
//
// 夜里亮度【不归零】（MC 满月夜也看得见），保证可玩。

export const DAY_LENGTH = 24000; // 一整天的刻数（= MC）
export const DAY_START = 1000; // 新世界出生时刻：清晨大白天

export type RGB = [number, number, number];

export interface SkyState {
  skyTop: RGB; // 天顶色（天空渐变上端）
  skyHorizon: RGB; // 地平线色（天空渐变下端 + 远处雾色）
  worldTint: RGB; // 世界亮度着色：乘到方块材质 .color 上（白=全亮，暗蓝=夜）
  light: number; // 约略天光强度 0..1（供未来刷怪/逻辑用）
  isNight: boolean; // 是否夜晚（约 13000..23000）
}

interface Key {
  t: number;
  top: RGB;
  hor: RGB;
  tint: RGB;
}

// 关键帧（按 t 升序）。最后一帧之后回绕到第一帧(t+24000)。颜色为 sRGB 0..1。
const KEYS: readonly Key[] = [
  { t: 0, top: [0.36, 0.48, 0.66], hor: [1.0, 0.62, 0.36], tint: [0.72, 0.64, 0.62] }, // 日出·暖
  { t: 1800, top: [0.3, 0.52, 0.79], hor: [0.81, 0.9, 0.97], tint: [1, 1, 1] }, // 清晨→白天
  { t: 11000, top: [0.3, 0.52, 0.79], hor: [0.81, 0.9, 0.97], tint: [1, 1, 1] }, // 白天
  { t: 12200, top: [0.24, 0.34, 0.55], hor: [1.0, 0.5, 0.24], tint: [0.86, 0.62, 0.5] }, // 日落·暖
  { t: 13600, top: [0.05, 0.07, 0.16], hor: [0.09, 0.12, 0.24], tint: [0.3, 0.34, 0.5] }, // 入夜
  { t: 22000, top: [0.05, 0.07, 0.16], hor: [0.09, 0.12, 0.24], tint: [0.3, 0.34, 0.5] }, // 深夜
  { t: 23200, top: [0.36, 0.48, 0.66], hor: [1.0, 0.62, 0.36], tint: [0.72, 0.64, 0.62] }, // 黎明·暖
];

const lerp = (a: number, b: number, f: number): number => a + (b - a) * f;
const lerpRGB = (a: RGB, b: RGB, f: number): RGB => [lerp(a[0], b[0], f), lerp(a[1], b[1], f), lerp(a[2], b[2], f)];

// 把任意刻数归一到 [0, DAY_LENGTH)
export function wrapTime(t: number): number {
  return ((t % DAY_LENGTH) + DAY_LENGTH) % DAY_LENGTH;
}

// MC 1:1 天光递减 skyDarken（0..11）：露天天光等级 = 15 - skyDarken。白天 0（满 15）、半夜 11（=4，偏暗可见）。
// 曲线同 Java 版 Level.getSkyDarken：darkFrac = clamp(0.5 - 2·cos(angle), 0, 1)，angle 使正午 cos=1、午夜 cos=-1
// → 黄昏/黎明陡变、午间/午夜各有平台。正午=6000 刻、午夜=18000 刻。
export function skyDarkenAt(time: number): number {
  const t = wrapTime(time);
  const ang = ((t - 6000) / DAY_LENGTH) * Math.PI * 2; // 正午→0、午夜→π
  const darkFrac = Math.max(0, Math.min(1, 0.5 - 2 * Math.cos(ang)));
  return darkFrac * 11;
}

// 取某刻的天空状态（关键帧之间线性插值，含跨午夜回绕）。
export function skyStateAt(time: number): SkyState {
  const t = wrapTime(time);
  // 找包含 t 的区间 [a, b]。KEYS[0].t===0 且最后一段 b 用首帧+DAY_LENGTH(=24000)，
  // 故 [0,24000) 必落在某段内。
  let a = KEYS[0];
  let b: Key = { ...KEYS[0], t: DAY_LENGTH };
  for (let i = 0; i < KEYS.length; i++) {
    const cur = KEYS[i];
    const nxt = KEYS[i + 1] ?? { ...KEYS[0], t: DAY_LENGTH };
    if (t >= cur.t && t < nxt.t) {
      a = cur;
      b = nxt;
      break;
    }
  }
  const f = b.t === a.t ? 0 : (t - a.t) / (b.t - a.t);
  const tint = lerpRGB(a.tint, b.tint, f);
  return {
    skyTop: lerpRGB(a.top, b.top, f),
    skyHorizon: lerpRGB(a.hor, b.hor, f),
    worldTint: tint,
    light: (tint[0] + tint[1] + tint[2]) / 3,
    isNight: t >= 13000 && t < 23000,
  };
}
