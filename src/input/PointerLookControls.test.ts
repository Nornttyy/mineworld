import { afterEach, describe, expect, it, vi } from 'vitest';
import { PointerLookControls } from './PointerLookControls';

function fixture(request: () => void | Promise<void>) {
  const doc = Object.assign(new EventTarget(), {
    pointerLockElement: null as EventTarget | null,
    exitPointerLock: vi.fn(() => {
      doc.pointerLockElement = null;
      doc.dispatchEvent(new Event('pointerlockchange'));
    }),
  });
  const win = new EventTarget();
  const canvas = Object.assign(new EventTarget(), {
    ownerDocument: doc,
    requestPointerLock: vi.fn(request),
  });
  vi.stubGlobal('document', doc);
  vi.stubGlobal('window', win);
  const look = new PointerLookControls(canvas as unknown as HTMLCanvasElement);
  const changed = vi.fn();
  look.onChange = changed;
  return { look, doc, win, canvas, changed };
}

function motion(target: EventTarget, x: number, y: number): void {
  target.dispatchEvent(
    Object.assign(new Event('mousemove'), {
      clientX: x,
      clientY: y,
      movementX: x,
      movementY: y,
    }),
  );
}

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('Pointer Lock with explicit playable fallback', () => {
  it('keeps normal pointer-lock movement and pauses on lock loss', async () => {
    const f = fixture(() => {
      f.doc.pointerLockElement = f.canvas;
      f.doc.dispatchEvent(new Event('pointerlockchange'));
      return Promise.resolve();
    });
    await expect(f.look.requestPlayControl()).resolves.toBe(true);
    expect(f.look.isFallback).toBe(false);
    motion(f.doc, 20, -10);
    expect(f.look.yaw).toBeCloseTo(0.05);
    expect(f.look.pitch).toBeCloseTo(0.025);
    f.doc.exitPointerLock();
    expect(f.look.isActive).toBe(false);
    expect(f.look.isFallback).toBe(false);
    f.canvas.dispatchEvent(new Event('click'));
    expect(f.canvas.requestPointerLock).toHaveBeenCalledOnce();
    f.look.dispose();
  });

  it.each(['throw', 'reject', 'error-event'] as const)(
    'handles %s without an unhandled rejection',
    async (failure) => {
      const f = fixture(() => {
        if (failure === 'throw') throw new DOMException('Embedded document', 'WrongDocumentError');
        if (failure === 'reject')
          return Promise.reject(new DOMException('Embedded document', 'WrongDocumentError'));
        f.doc.dispatchEvent(new Event('pointerlockerror'));
        return undefined;
      });
      await expect(f.look.requestPlayControl()).resolves.toBe(true);
      expect(f.look.isActive).toBe(true);
      expect(f.look.isFallback).toBe(true);
      motion(f.canvas, 100, 100);
      motion(f.canvas, 120, 90);
      expect(f.look.yaw).toBeCloseTo(0.05);
      expect(f.look.pitch).toBeCloseTo(0.025);
      motion(f.doc, 999, 999); // Moving over a menu or outside the canvas cannot turn the camera.
      expect(f.look.yaw).toBeCloseTo(0.05);
      f.canvas.dispatchEvent(new Event('mouseleave'));
      motion(f.canvas, 700, 500); // Re-entry starts a new baseline, not a huge jump.
      expect(f.look.yaw).toBeCloseTo(0.05);
      f.look.dispose();
    },
  );

  it('waits for the event-based API before deciding to fall back', async () => {
    const f = fixture(() => undefined);
    const request = f.look.requestPlayControl();
    expect(f.look.isActive).toBe(false);
    f.doc.pointerLockElement = f.canvas;
    f.doc.dispatchEvent(new Event('pointerlockchange'));
    await expect(request).resolves.toBe(true);
    expect(f.look.isFallback).toBe(false);
    f.look.dispose();
  });

  it('falls back when an embedded browser never reports a result', async () => {
    vi.useFakeTimers();
    const f = fixture(() => undefined);
    const request = f.look.requestPlayControl();
    await vi.advanceTimersByTimeAsync(1200);
    await expect(request).resolves.toBe(true);
    expect(f.look.isFallback).toBe(true);
    f.look.dispose();
  });

  it('blur cancels a pending request; its later rejection cannot resume play', async () => {
    let reject!: (reason: Error) => void;
    const f = fixture(
      () =>
        new Promise<void>((_resolve, fail) => {
          reject = fail;
        }),
    );
    const request = f.look.requestPlayControl();
    f.win.dispatchEvent(new Event('blur'));
    reject(new Error('late rejection'));
    await expect(request).resolves.toBe(false);
    await Promise.resolve();
    expect(f.look.isActive).toBe(false);
    expect(f.changed).not.toHaveBeenCalled();
    f.doc.pointerLockElement = f.canvas;
    f.doc.dispatchEvent(new Event('pointerlockchange'));
    expect(f.doc.exitPointerLock).toHaveBeenCalledOnce();
    expect(f.look.isActive).toBe(false);
    f.look.dispose();
  });

  it('fallback pause requires explicit resume and avoids repeated rejected requests', async () => {
    const f = fixture(() => Promise.reject(new Error('denied')));
    await f.look.requestPlayControl();
    f.win.dispatchEvent(new Event('blur'));
    motion(f.canvas, 100, 100);
    motion(f.canvas, 200, 200);
    f.canvas.dispatchEvent(new Event('click'));
    expect(f.look.isActive).toBe(false);
    expect(f.look.yaw).toBe(0);
    await f.look.requestPlayControl();
    expect(f.look.isFallback).toBe(true);
    expect(f.canvas.requestPointerLock).toHaveBeenCalledOnce();
    f.look.dispose();
  });
});
