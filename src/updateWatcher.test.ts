import { afterEach, describe, expect, it, vi } from 'vitest';
import { isNewBuild, startUpdateWatcher } from './updateWatcher';

afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs(); });

describe('build update watcher', () => {
  it('只在服务器返回不同的有效构建号时刷新', () => {
    expect(isNewBuild('old', { version: 'new' })).toBe(true);
    expect(isNewBuild('same', { version: 'same' })).toBe(false);
    expect(isNewBuild('old', {})).toBe(false);
    expect(isNewBuild('old', { version: 123 })).toBe(false);
  });

  it('等待退出游戏，且检查进行中开始游戏时也不会打断试玩', async () => {
    vi.stubEnv('DEV', false);
    let visible: (() => void) | undefined;
    vi.stubGlobal('window', { setInterval: vi.fn(() => 1), clearInterval: vi.fn() });
    vi.stubGlobal('document', {
      visibilityState: 'visible',
      addEventListener: (_: string, callback: () => void) => { visible = callback; },
      removeEventListener: vi.fn(),
    });
    let playing = true;
    let finishFetch: ((value: unknown) => void) | undefined;
    const fetchMock = vi.fn(() => new Promise((resolve) => { finishFetch = resolve; }));
    vi.stubGlobal('fetch', fetchMock);
    const reload = vi.fn();
    const stop = startUpdateWatcher('old', reload, () => !playing);
    expect(fetchMock).not.toHaveBeenCalled();
    playing = false;
    visible?.();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    playing = true; // 玩家在网络请求返回前开始了游戏。
    finishFetch?.({ ok: true, json: async () => ({ version: 'new' }) });
    await Promise.resolve(); await Promise.resolve(); await Promise.resolve();
    expect(reload).not.toHaveBeenCalled();
    playing = false;
    visible?.();
    finishFetch?.({ ok: true, json: async () => ({ version: 'new' }) });
    await Promise.resolve(); await Promise.resolve(); await Promise.resolve();
    expect(reload).toHaveBeenCalledTimes(1);
    stop();
  });
});
