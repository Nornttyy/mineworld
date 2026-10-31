const SENSITIVITY = 0.0025;
const PITCH_LIMIT = 1.55; // ≈89°

/** Prefer Pointer Lock; embedded browsers may deny it, in which case canvas motion remains playable. */
export class PointerLookControls {
  yaw = 0;
  pitch = 0;
  onChange: (() => void) | null = null;
  private wanted = false;
  private fallback = false;
  lastFailure: string | null = null;
  private generation = 0;
  private lastState = 'paused';
  private lastPoint: { x: number; y: number } | null = null;
  private pending: {
    resolve: (locked: boolean) => void;
    timer: ReturnType<typeof setTimeout>;
  } | null = null;
  private readonly doc: Document;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly usePointerLock = true,
  ) {
    this.doc = canvas.ownerDocument ?? document;
    if (!usePointerLock) return;
    this.doc.addEventListener('pointerlockchange', this.lockChanged);
    this.doc.addEventListener('pointerlockerror', this.lockFailed);
    this.doc.addEventListener('mousemove', this.lockedMotion);
    canvas.addEventListener('mousemove', this.fallbackMotion);
    canvas.addEventListener('mouseleave', this.leaveCanvas);
    window.addEventListener('blur', this.onBlur);
  }

  get isActive(): boolean {
    return this.wanted && (this.doc.pointerLockElement === this.canvas || this.fallback);
  }

  get isFallback(): boolean {
    return this.isActive && this.doc.pointerLockElement !== this.canvas;
  }

  /** Never rejects: callers may safely request control after loading or an explicit resume. */
  async requestPlayControl(retryLock = false): Promise<boolean> {
    if (!this.usePointerLock) return false;
    if (this.isActive && (!this.isFallback || !retryLock)) return true;
    this.pause(); // Cancel any older request before creating a new one.
    this.wanted = true;
    const generation = this.generation;
    this.lastFailure = null;
    const result = new Promise<boolean>((resolve) => {
      this.pending = {
        resolve,
        timer: setTimeout(() => {
          this.lastFailure = 'Timeout';
          this.finishRequest(false);
        }, 1200),
      };
    });
    try {
      const request = this.canvas.requestPointerLock();
      // Older browsers return void and report through events; newer ones also return a Promise.
      Promise.resolve(request).then(
        () => {
          if (generation === this.generation && this.doc.pointerLockElement === this.canvas)
            this.finishRequest(true);
        },
        (error: unknown) => {
          if (generation === this.generation) {
            this.lastFailure = error instanceof Error ? error.name : 'NotAllowedError';
            this.finishRequest(false);
          }
        },
      );
    } catch (error) {
      this.lastFailure = error instanceof Error ? error.name : 'NotSupportedError';
      this.finishRequest(false);
    }
    const locked = await result;
    if (generation !== this.generation || !this.wanted) return false;
    this.fallback = !locked;
    if (locked) this.lastFailure = null;
    this.notify();
    return this.isActive;
  }

  pause(): void {
    this.generation++;
    this.wanted = false;
    this.fallback = false;
    this.lastPoint = null;
    this.finishRequest(false);
    if (this.doc.pointerLockElement === this.canvas) {
      try {
        this.doc.exitPointerLock();
      } catch {
        /* A detached document may also reject unlock. */
      }
    }
    this.notify();
  }

  dispose(): void {
    this.pause();
    this.doc.removeEventListener('pointerlockchange', this.lockChanged);
    this.doc.removeEventListener('pointerlockerror', this.lockFailed);
    this.doc.removeEventListener('mousemove', this.lockedMotion);
    this.canvas.removeEventListener('mousemove', this.fallbackMotion);
    this.canvas.removeEventListener('mouseleave', this.leaveCanvas);
    window.removeEventListener('blur', this.onBlur);
    this.onChange = null;
  }

  private finishRequest(locked: boolean): void {
    if (!this.pending) return;
    const pending = this.pending;
    this.pending = null;
    clearTimeout(pending.timer);
    pending.resolve(locked);
  }

  private notify(): void {
    const state = !this.isActive ? 'paused' : this.isFallback ? 'fallback' : 'locked';
    if (state === this.lastState) return;
    this.lastState = state;
    this.onChange?.();
  }

  private readonly lockChanged = (): void => {
    if (this.doc.pointerLockElement === this.canvas) {
      if (!this.wanted) {
        try {
          this.doc.exitPointerLock();
        } catch {
          /* Ignore a late result after pause. */
        }
        return;
      }
      this.fallback = false;
      this.lastFailure = null;
      this.finishRequest(true);
      this.notify();
    } else if (this.lastState === 'locked') {
      // Esc/unexpected lock loss pauses; it must not automatically enter fallback.
      this.pause();
    }
  };

  private readonly lockFailed = (): void => {
    this.lastFailure ??= 'NotAllowedError';
    this.finishRequest(false);
  };
  private readonly onBlur = (): void => this.pause();
  private readonly leaveCanvas = (): void => {
    this.lastPoint = null;
  };
  private readonly lockedMotion = (event: MouseEvent): void => {
    if (!this.isActive || this.isFallback) return;
    this.rotate(event.movementX * SENSITIVITY, -event.movementY * SENSITIVITY);
  };
  private readonly fallbackMotion = (event: MouseEvent): void => {
    if (!this.isFallback) return;
    if (this.lastPoint)
      this.rotate(
        (event.clientX - this.lastPoint.x) * SENSITIVITY,
        -(event.clientY - this.lastPoint.y) * SENSITIVITY,
      );
    this.lastPoint = { x: event.clientX, y: event.clientY };
  };

  /** 鼠标与触屏共用的视角增量入口（参数单位为弧度）。 */
  rotate(deltaYaw: number, deltaPitch: number): void {
    this.yaw += deltaYaw;
    this.pitch = Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, this.pitch + deltaPitch));
  }
}
