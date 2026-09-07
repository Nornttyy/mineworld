/** 站在下界传送门中触发传送所需的时间（秒，同当前游戏规则）。 */
export const PORTAL_TRAVEL_SECONDS = 4;

/** 切换维度后紫色闪光淡出的时间（秒）。 */
export const PORTAL_FLASH_SECONDS = 0.72;

const clamp01 = (value: number): number => Math.max(0, Math.min(1, value));

/**
 * 计算屏幕传送门叠层的不透明度。进入门后从轻微紫色波纹逐渐增强；
 * 真正切换维度时由 flashRemaining 产生一次强闪并平滑退场。
 */
export function portalEffectOpacity(
  portalTimer: number,
  charging: boolean,
  flashRemaining: number,
): number {
  const progress = charging ? clamp01(portalTimer / PORTAL_TRAVEL_SECONDS) : 0;
  const eased = progress * progress * (3 - 2 * progress);
  const buildup = charging && portalTimer > 0 ? 0.1 + eased * 0.72 : 0;
  const flash = clamp01(flashRemaining / PORTAL_FLASH_SECONDS);
  return clamp01(Math.max(buildup, flash * flash));
}

export function portalEffectProgress(portalTimer: number, charging: boolean): number {
  return charging ? clamp01(portalTimer / PORTAL_TRAVEL_SECONDS) : 0;
}
