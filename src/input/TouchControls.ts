import type { MoveKeys } from './keyboard';

const LOOK_SENSITIVITY = 0.004;
const STICK_DEAD_ZONE = 0.12;
// 浏览器在掉帧、切回页面时可能合并多次 pointermove；限制单次转向，避免镜头突然甩飞。
const MAX_LOOK_DELTA = 72;

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
  private readonly moveZone: HTMLElement;
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
    this.moveZone = root.querySelector('.touch-move-zone') as HTMLElement;
    this.stick = root.querySelector('.touch-stick') as HTMLElement;
    this.knob = root.querySelector('.touch-stick-knob') as HTMLElement;
    const look = root.querySelector('.touch-look') as HTMLElement;

    // 左下半屏都可以直接起步：手指不必先精确按到小小的固定摇杆。
    // 按下后摇杆会出现在手指下方，松开再回到默认位置。
    this.moveZone.addEventListener('pointerdown', (e) => this.beginStick(e, true));
    this.moveZone.addEventListener('pointermove', (e) => {
      if (e.pointerId === this.stickPointer) this.updateStick(e);
    });
    const endMoveZoneStick = (e: PointerEvent): void => {
      if (e.pointerId !== this.stickPointer) return;
      this.endStick();
    };
    this.moveZone.addEventListener('pointerup', endMoveZoneStick);
    this.moveZone.addEventListener('pointercancel', endMoveZoneStick);
    this.moveZone.addEventListener('lostpointercapture', endMoveZoneStick);
    this.stick.addEventListener('pointerdown', (e) => {
      this.beginStick(e, false);
    });
    this.stick.addEventListener('pointermove', (e) => {
      if (e.pointerId === this.stickPointer) this.updateStick(e);
    });
    const endStick = (e: PointerEvent): void => {
      if (e.pointerId !== this.stickPointer) return;
      this.endStick();
    };
    this.stick.addEventListener('pointerup', endStick);
    this.stick.addEventListener('pointercancel', endStick);
    this.stick.addEventListener('lostpointercapture', endStick);

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
      const dx = Math.max(-MAX_LOOK_DELTA, Math.min(MAX_LOOK_DELTA, e.clientX - this.lookX));
      const dy = Math.max(-MAX_LOOK_DELTA, Math.min(MAX_LOOK_DELTA, e.clientY - this.lookY));
      this.lookX = e.clientX;
      this.lookY = e.clientY;
      this.actions.look(dx * LOOK_SENSITIVITY, -dy * LOOK_SENSITIVITY);
    });
    const endLook = (e: PointerEvent): void => {
      if (e.pointerId === this.lookPointer) this.lookPointer = null;
    };
    look.addEventListener('pointerup', endLook);
    look.addEventListener('pointercancel', endLook);
    look.addEventListener('lostpointercapture', endLook);

    this.bindHold('touch-jump', () => {
      if (!this.jumpHeld) this.pendingJump = true;
      this.jumpHeld = true;
    }, () => (this.jumpHeld = false));
    this.bindHold('touch-crouch', () => (this.crouchHeld = true), () => (this.crouchHeld = false));
    this.bindHold('touch-mine', () => this.actions.primaryDown(), () => this.actions.primaryUp());
    this.bindHold('touch-use', () => this.actions.useDown(), () => this.actions.useUp(), () => this.actions.cancelUse());
    this.bindTap('touch-inventory', () => this.actions.inventory());
    this.bindTap('touch-pause', () => this.actions.pause());

    // 来电、切后台或浏览器抢走手势时，必须释放所有按住的键，避免角色一直走/挖。
    window.addEventListener('blur', () => this.reset());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.reset();
    });
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

  private beginStick(e: PointerEvent, floating: boolean): void {
    if (!this.active || this.stickPointer !== null) return;
    e.preventDefault();
    if (floating) this.placeFloatingStick(e);
    this.stickPointer = e.pointerId;
    // 浮动摇杆的手势由大左侧区域持有；固定圆心起步则由圆本身持有。
    (floating ? this.moveZone : this.stick).setPointerCapture(e.pointerId);
    this.updateStick(e);
  }

  private endStick(): void {
    this.stickPointer = null;
    this.forward = 0;
    this.right = 0;
    this.strength = 0;
    this.knob.style.transform = 'translate3d(0,0,0)';
    this.restoreStickHome();
  }

  /** 把摇杆中心放到左侧触点，且不让它越过屏幕边缘或挡住右侧按钮。 */
  private placeFloatingStick(e: PointerEvent): void {
    const size = this.stick.getBoundingClientRect().width;
    const radius = size / 2;
    const viewport = window.visualViewport;
    const width = viewport?.width ?? window.innerWidth;
    const height = viewport?.height ?? window.innerHeight;
    const minX = radius + 12;
    const maxX = Math.max(minX, Math.min(width * 0.5 - radius - 8, width - radius - 12));
    const minY = radius + 60;
    const maxY = Math.max(minY, height - radius - 60);
    const centerX = Math.max(minX, Math.min(maxX, e.clientX));
    const centerY = Math.max(minY, Math.min(maxY, e.clientY));
    this.stick.classList.add('floating');
    this.stick.style.left = `${Math.round(centerX - radius)}px`;
    this.stick.style.top = `${Math.round(centerY - radius)}px`;
    this.stick.style.bottom = 'auto';
  }

  private restoreStickHome(): void {
    this.stick.classList.remove('floating');
    this.stick.style.left = '';
    this.stick.style.top = '';
    this.stick.style.bottom = '';
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
    const cancelEnd = (e: PointerEvent): void => {
      if (e.pointerId !== pointer) return;
      release(cancel);
    };
    el.addEventListener('pointerup', end);
    el.addEventListener('pointercancel', cancelEnd);
    // Android/iOS 系统手势、通知栏等会夺走 capture；取消不能意外把弓射出去。
    el.addEventListener('lostpointercapture', cancelEnd);
    this.releaseHolds.push(() => release(cancel));
  }

  private bindTap(id: string, tap: () => void): void {
    const el = document.getElementById(id) as HTMLButtonElement;
    el.addEventListener('pointerdown', (e) => {
      if (!this.active) return;
      e.preventDefault();
      e.stopPropagation();
      el.classList.add('pressed');
      window.setTimeout(() => el.classList.remove('pressed'), 100);
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
    this.restoreStickHome();
    for (const release of this.releaseHolds) release();
  }
}
