/** Java's auto GUI scale keeps at least a 320×240 logical viewport. */
export function javaGuiScale(width: number, height: number): number {
  return Math.max(1, Math.floor(Math.min(width / 320, height / 240)));
}

export function installGuiScale(): void {
  const update = (): void => {
    const w = window.visualViewport?.width ?? window.innerWidth;
    const h = window.visualViewport?.height ?? window.innerHeight;
    document.documentElement.style.setProperty('--gui-scale', String(javaGuiScale(w, h)));
  };
  update();
  window.addEventListener('resize', update);
  window.visualViewport?.addEventListener('resize', update);
}
