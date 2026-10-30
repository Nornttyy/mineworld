interface BuildVersion {
  version?: unknown;
}

export function isNewBuild(current: string, response: BuildVersion): boolean {
  return typeof response.version === 'string' && response.version.length > 0 && response.version !== current;
}

/**
 * GitHub Pages 会把入口页缓存最多 10 分钟。这里轮询构建号：新部署出现时立即
 * 在允许刷新时重新加载。游戏进行中延后，保存退出本身会重载最新构建。
 */
export function startUpdateWatcher(
  current = __ASSET_VER__,
  reload: () => void = () => location.reload(),
  canReload: () => boolean = () => true,
): () => void {
  if (import.meta.env.DEV) return () => undefined;
  let checking = false;
  let stopped = false;
  const check = async (): Promise<void> => {
    if (checking || stopped || !canReload()) return;
    checking = true;
    try {
      const url = `${import.meta.env.BASE_URL}build-version.json?t=${Date.now().toString(36)}`;
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) return;
      const version = (await response.json()) as BuildVersion;
      if (isNewBuild(current, version) && canReload()) {
        stopped = true;
        reload();
      }
    } catch {
      // 离线/网络切换期忽略；下一次轮询自动重试。
    } finally {
      checking = false;
    }
  };
  const timer = window.setInterval(() => void check(), 30_000);
  const onVisible = (): void => {
    if (document.visibilityState === 'visible') void check();
  };
  document.addEventListener('visibilitychange', onVisible);
  void check();
  return () => {
    stopped = true;
    window.clearInterval(timer);
    document.removeEventListener('visibilitychange', onVisible);
  };
}
