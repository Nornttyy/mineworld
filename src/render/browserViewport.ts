export interface BrowserViewportSource {
  innerWidth: number;
  innerHeight: number;
  visualViewport?: { width: number; height: number } | null;
}

export interface BrowserViewportSize {
  width: number;
  height: number;
}

/**
 * 手机浏览器的地址栏/底栏收放只会可靠更新 visualViewport；桌面则回退到 innerWidth/innerHeight。
 * 向上取整可避免高 DPI 与安全区换算产生 1px 裂缝。
 */
export function browserViewportSize(source: BrowserViewportSource): BrowserViewportSize {
  const visual = source.visualViewport;
  const rawWidth = visual && visual.width > 0 ? visual.width : source.innerWidth;
  const rawHeight = visual && visual.height > 0 ? visual.height : source.innerHeight;
  return {
    width: Math.max(1, Math.ceil(rawWidth)),
    height: Math.max(1, Math.ceil(rawHeight)),
  };
}
