import type { MoveKeys } from './keyboard';

const LOOK_SENSITIVITY = 0.004;
const STICK_DEAD_ZONE = 0.12;

export interface TouchControlActions {
  look(deltaYaw: number, deltaPitch: number): void;
  primaryDown(): void;
  primaryUp(): void;
  useDown(): void;
  useUp(): void;
  cancelUse(): void;
  inventory(): void;
  pause(): void;
}

export interface StickVector {
  x: number;
  y: number;
  strength: number;
}

/** 把触点限制在圆形摇杆内，并应用死区。y 向上为正。 */
export function stickVector(dx: number, dy: number, radius: number): StickVector {
  const safeRadius = Math.max(1, radius);
  const rawStrength = Math.min(1, Math.hypot(dx, dy) / safeRadius);
  if (rawStrength < STICK_DEAD_ZONE) return { x: 0, y: 0, strength: 0 };
  const scale = rawStrength / (Math.hypot(dx, dy) || 1);
  return { x: dx * scale, y: -dy * scale, strength: rawStrength };
}

/** 手机/平板自动启用；?touch=1 可在桌面浏览器调试。 */
export function supportsTouchControls(): boolean {
  if (new URLSearchParams(window.location.search).get('touch') === '1') return true;
  return navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
}

let touchGuardsInstalled = false;

/** 阻止手机浏览器把快速连续操作识别成双击/双指页面缩放。 */
export function installTouchZoomGuards(): void {
  if (touchGuardsInstalled) return;
  touchGuardsInstalled = true;
  const preventGesture = (e: Event): void => e.preventDefault();
  document.addEventListener('gesturestart', preventGesture, { passive: false });
  document.addEventListener('gesturechange', preventGesture, { passive: false });
  document.addEventListener('gestureend', preventGesture, { passive: false });
  document.addEventListener('dblclick', preventGesture, { passive: false });
  document.addEventListener(
    'touchmove',
    (e) => {
      if (e.touches.length > 1) e.preventDefault();
    },
    { passive: false },
  );

  let lastTouchEnd = -Infinity;
  let lastTouchTarget: EventTarget | null = null;
  let lastTouchX = 0;
  let lastTouchY = 0;
  document.addEventListener(
    'touchend',
    (e) => {
      const now = performance.now();
      const touch = e.changedTouches[0];
      const sameSpot =
        touch !== undefined && Math.hypot(touch.clientX - lastTouchX, touch.clientY - lastTouchY) < 28;
      if (now - lastTouchEnd < 320 && e.target === lastTouchTarget && sameSpot) e.preventDefault();
      lastTouchEnd = now;
      lastTouchTarget = e.target;
      if (touch) {
        lastTouchX = touch.clientX;
        lastTouchY = touch.clientY;
      }
    },
    { passive: false },
  );
}

/**
 * 触屏第一人称输入：左摇杆移动、右半屏滑动视角，按钮负责动作。
 * Pointer Events 让多指操作成立（移动、转向、跳跃可以同时按）。
 */
export class TouchControls {
  private readonly root: HTMLElement;
  private readonly stick: HTMLElement;
  private readonly knob: HTMLElement;
  private readonly actions: TouchControlActions;
  private stickPointer: number | null = null;
  private lookPointer: number | null = null;
  private lookX = 0;
  private lookY = 0;
  private forward = 0;
  private right = 0;
  private strength = 0;
  private jumpHeld = false;
  private crouchHeld = false;
  private pendingJump = false;
  private active = false;
  private readonly releaseHolds: (() => void)[] = [];

  constructor(root: HTMLElement, actions: TouchControlActions) {
    this.root = root;
    this.actions = actions;
    this.stick = root.querySelector('.touch-stick') as HTMLElement;
    this.knob = root.querySelector('.touch-stick-knob') as HTMLElement;
    const look = root.querySelector('.touch-look') as HTMLElement;

    this.stick.addEventListener('pointerdown', (e) => {
      if (!this.active || this.stickPointer !== null) return;
      e.preventDefault();
      this.stickPointer = e.pointerId;
      this.stick.setPointerCapture(e.pointerId);
      this.updateStick(e);
    });
    this.stick.addEventListener('pointermove', (e) => {
      if (e.pointerId === this.stickPointer) this.updateStick(e);
    });
    const endStick = (e: PointerEvent): void => {
      if (e.pointerId !== this.stickPointer) return;
      this.stickPointer = null;
      this.forward = 0;
      this.right = 0;
      this.strength = 0;
      this.knob.style.transform = 'translate3d(0,0,0)';
    };
    this.stick.addEventListener('pointerup', endStick);
    this.stick.addEventListener('pointercancel', endStick);

    look.addEventListener('pointerdown', (e) => {
      if (!this.active || this.lookPointer !== null) return;
      e.preventDefault();
      this.lookPointer = e.pointerId;
      this.lookX = e.clientX;
      this.lookY = e.clientY;
      look.setPointerCapture(e.pointerId);
    });
    look.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.lookPointer) return;
      e.preventDefault();
      const dx = e.clientX - this.lookX;
      const dy = e.clientY - this.lookY;
      this.lookX = e.clientX;
      this.lookY = e.clientY;
      this.actions.look(dx * LOOK_SENSITIVITY, -dy * LOOK_SENSITIVITY);
    });
    const endLook = (e: PointerEvent): void => {
      if (e.pointerId === this.lookPointer) this.lookPointer = null;
    };
    look.addEventListener('pointerup', endLook);
    look.addEventListener('pointercancel', endLook);

    this.bindHold('touch-jump', () => {
      if (!this.jumpHeld) this.pendingJump = true;
      this.jumpHeld = true;
    }, () => (this.jumpHeld = false));
    this.bindHold('touch-crouch', () => (this.crouchHeld = true), () => (this.crouchHeld = false));
    this.bindHold('touch-mine', () => this.actions.primaryDown(), () => this.actions.primaryUp());
    this.bindHold('touch-use', () => this.actions.useDown(), () => this.actions.useUp(), () => this.actions.cancelUse());
    this.bindTap('touch-inventory', () => this.actions.inventory());
    this.bindTap('touch-pause', () => this.actions.pause());
  }

  setActive(active: boolean): void {
    this.active = active;
    this.root.classList.toggle('active', active);
    this.root.setAttribute('aria-hidden', String(!active));
    if (!active) this.reset();
  }

  get isActive(): boolean {
    return this.active;
  }

  readMove(): MoveKeys {
    return {
      forward: this.forward,
      right: this.right,
      sprint: this.forward > 0.82 && this.strength > 0.9 && !this.crouchHeld,
      jumpHeld: this.jumpHeld,
      crouch: this.crouchHeld,
    };
  }

  consumeJump(): boolean {
    const jump = this.pendingJump;
    this.pendingJump = false;
    return jump;
  }

  private updateStick(e: PointerEvent): void {
    e.preventDefault();
    const rect = this.stick.getBoundingClientRect();
    const radius = rect.width * 0.36;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const v = stickVector(dx, dy, radius);
    this.right = v.x;
    this.forward = v.y;
    this.strength = v.strength;
    this.knob.style.transform = `translate3d(${v.x * radius}px,${-v.y * radius}px,0)`;
  }

  private bindHold(id: string, down: () => void, up: () => void, cancel = up): void {
    const el = document.getElementById(id) as HTMLButtonElement;
    let pointer: number | null = null;
    el.addEventListener('pointerdown', (e) => {
      if (!this.active || pointer !== null) return;
      e.preventDefault();
      e.stopPropagation();
      pointer = e.pointerId;
      el.setPointerCapture(e.pointerId);
      el.classList.add('pressed');
      down();
    });
    const release = (finish: () => void): void => {
      if (pointer === null) return;
      pointer = null;
      el.classList.remove('pressed');
      finish();
    };
    const end = (e: PointerEvent): void => {
      if (e.pointerId !== pointer) return;
      release(up);
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', end);
    this.releaseHolds.push(() => release(cancel));
  }

  private bindTap(id: string, tap: () => void): void {
    const el = document.getElementById(id) as HTMLButtonElement;
    el.addEventListener('pointerdown', (e) => {
      if (!this.active) return;
      e.preventDefault();
      e.stopPropagation();
      tap();
    });
  }

  private reset(): void {
    this.stickPointer = null;
    this.lookPointer = null;
    this.forward = 0;
    this.right = 0;
    this.strength = 0;
    this.jumpHeld = false;
    this.crouchHeld = false;
    this.pendingJump = false;
    this.knob.style.transform = 'translate3d(0,0,0)';
    for (const release of this.releaseHolds) release();
  }
}
