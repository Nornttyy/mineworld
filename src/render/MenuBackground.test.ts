import { afterEach, describe, expect, it, vi } from 'vitest';
import { MenuBackground } from './MenuBackground';

function backgroundStub(): MenuBackground {
  const background = Object.create(MenuBackground.prototype) as MenuBackground;
  Object.assign(background as unknown as Record<string, unknown>, {
    disposed: false,
    preloadAbort: null,
    running: false,
    x: 0.5,
    z: 0.5,
    onResize: () => undefined,
    world: {
      request: vi.fn(),
      peek: vi.fn(() => undefined),
      dispose: vi.fn(),
    },
    chunks: {
      meshBusy: vi.fn(() => true),
      update: vi.fn(),
      flushMesh: vi.fn(),
      dispose: vi.fn(),
    },
    gl: {
      dispose: vi.fn(),
      forceContextLoss: vi.fn(),
    },
  });
  return background;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('MenuBackground preload lifecycle', () => {
  it('外部超时取消后，即使区块永远不就绪也会结束预加载', async () => {
    const background = backgroundStub();
    const controller = new AbortController();
    const preload = background.preload(0, controller.signal);

    controller.abort();

    await expect(preload).resolves.toBeUndefined();
  });

  it('dispose 会立即取消仍在等待区块的预加载链', async () => {
    vi.stubGlobal('window', {
      removeEventListener: vi.fn(),
      visualViewport: undefined,
    });
    const background = backgroundStub();
    const preload = background.preload(0);

    background.dispose();

    await expect(preload).resolves.toBeUndefined();
  });
});
