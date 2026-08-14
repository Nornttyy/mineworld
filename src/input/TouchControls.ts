import type { MoveKeys } from './keyboard';

const LOOK_SENSITIVITY = 0.004;
/** 与键盘双击 W 一致：第二次按下前进后保持按住，即进入疾跑。 */
export const TOUCH_SPRINT_DOUBLE_TAP_MS = 320;
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

export type TouchDirection = 'forward' | 'back' | 'left' | 'right';

/**
 * 十字键允许多键同时按住：前/后、左/右相反方向会互相抵消，斜向移动则保留两个轴。
 * 保持为纯函数，方便测试，也避免输入状态和画面控件相互耦合。
 */
export function dpadAxes(held: ReadonlySet<TouchDirection>): Pick<MoveKeys, 'forward' | 'right'> {
  return {
    forward: Number(held.has('forward')) - Number(held.has('back')),
    right: Number(held.has('right')) - Number(held.has('left')),
  };
}

/** 第二次按下前进必须落在短时间窗口内，边界时间也算连续双击。 */
export function isTouchSprintDoubleTap(previousPress: number, currentPress: number): boolean {
  return currentPress - previousPress >= 0 && currentPress - previousPress <= TOUCH_SPRINT_DOUBLE_TAP_MS;
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
 * 触屏第一人称输入：左下十字键移动、右半屏滑动视角，按钮负责动作。
 * Pointer Events 让多指操作成立（移动、转向、跳跃可以同时按）。
 */
export class TouchControls {
  private readonly root: HTMLElement;
  private readonly actions: TouchControlActions;
  private lookPointer: number | null = null;
  private lookX = 0;
  private lookY = 0;
  private releaseLookCapture: (() => void) | null = null;
  private forward = 0;
  private right = 0;
  private readonly heldDirections = new Set<TouchDirection>();
  private lastForwardPress = -Infinity;
  private sprinting = false;
  private jumpHeld = false;
  private crouchHeld = false;
  private pendingJump = false;
  private active = false;
  private readonly releaseHolds: (() => void)[] = [];

  constructor(root: HTMLElement, actions: TouchControlActions) {
    this.root = root;
    this.actions = actions;
    const look = root.querySelector('.touch-look') as HTMLElement;

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
    const releaseLook = (): void => {
      const pointerId = this.lookPointer;
      if (pointerId === null) return;
      this.lookPointer = null;
      this.releasePointerCapture(look, pointerId);
    };
    this.releaseLookCapture = releaseLook;
    const endLook = (e: PointerEvent): void => {
      if (e.pointerId !== this.lookPointer) return;
      e.preventDefault();
      releaseLook();
    };
    look.addEventListener('pointerup', endLook);
    look.addEventListener('pointercancel', endLook);
    look.addEventListener('lostpointercapture', endLook);

    // 四个独立的 Pointer Events 允许同时按住，例如前进 + 左转或前进 + 跳跃。
    this.bindHold('touch-forward', () => this.pressDirection('forward'), () => this.releaseDirection('forward'));
    this.bindHold('touch-back', () => this.pressDirection('back'), () => this.releaseDirection('back'));
    this.bindHold('touch-left', () => this.pressDirection('left'), () => this.releaseDirection('left'));
    this.bindHold('touch-right', () => this.pressDirection('right'), () => this.releaseDirection('right'));
    this.bindHold('touch-jump', () => {
      if (!this.jumpHeld) this.pendingJump = true;
      this.jumpHeld = true;
    }, () => (this.jumpHeld = false));
    this.bindHold('touch-crouch', () => (this.crouchHeld = true), () => (this.crouchHeld = false));
    // MCPE Crosshair 模式的两个独立互动键：剑=挖掘/攻击，手=放置/使用。
    this.bindHold('touch-mine', () => this.actions.primaryDown(), () => this.actions.primaryUp());
    this.bindHold('touch-use', () => this.actions.useDown(), () => this.actions.useUp(), () => this.actions.cancelUse());
    this.bindTap('touch-inventory', () => this.actions.inventory());
    this.bindTap('touch-pause', () => this.actions.pause());

    // 来电、切后台或浏览器抢走手势时，必须释放所有按住的键，避免角色一直走/挖。
    window.addEventListener('blur', () => this.reset());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.reset();
    });
    window.addEventListener('pagehide', () => this.reset());
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
      // 双击只是在第二次按下时开启；只要放开前进就立刻停跑。
      sprint: this.sprinting && this.forward > 0 && !this.crouchHeld,
      jumpHeld: this.jumpHeld,
      crouch: this.crouchHeld,
    };
  }

  consumeJump(): boolean {
    const jump = this.pendingJump;
    this.pendingJump = false;
    return jump;
  }

  private pressDirection(direction: TouchDirection): void {
    // 同一方向本身不会重复压入，但不同方向可以由不同手指并行按住。
    if (this.heldDirections.has(direction)) return;
    if (direction === 'forward') {
      const now = performance.now();
      if (isTouchSprintDoubleTap(this.lastForwardPress, now)) this.sprinting = true;
      this.lastForwardPress = now;
    }
    this.heldDirections.add(direction);
    this.syncDirectionAxes();
  }

  private releaseDirection(direction: TouchDirection): void {
    this.heldDirections.delete(direction);
    // MCPE 手感：第二次前进按住才跑，松开该键必定立即取消疾跑。
    if (direction === 'forward') this.sprinting = false;
    this.syncDirectionAxes();
  }

  private syncDirectionAxes(): void {
    const axes = dpadAxes(this.heldDirections);
    this.forward = axes.forward;
    this.right = axes.right;
  }

  /** Pointer capture 可能已被系统手势抢走；先确认再释放，避免抛异常中断清理。 */
  private releasePointerCapture(el: HTMLElement, pointerId: number): void {
    if (!el.hasPointerCapture(pointerId)) return;
    try {
      el.releasePointerCapture(pointerId);
    } catch {
      // Safari/Android 切后台时 capture 可能已失效，此时状态已在上方清理完毕。
    }
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
      const pointerId = pointer;
      if (pointerId === null) return;
      pointer = null;
      el.classList.remove('pressed');
      finish();
      // reset()/blur 不会自动交还 pointer capture；主动释放以免下一根手指还被旧按钮吞掉。
      this.releasePointerCapture(el, pointerId);
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
    // 先通过每个控件自身的取消路径停掉游戏行为，再归零状态；否则 blur 时会留下挖掘/跳跃/下蹲。
    this.releaseLookCapture?.();
    for (const release of this.releaseHolds) release();
    // releaseHolds 会逐项处理 pointer capture；再清空一次防止浏览器漏发取消事件。
    this.heldDirections.clear();
    this.forward = 0;
    this.right = 0;
    this.lastForwardPress = -Infinity;
    this.sprinting = false;
    this.jumpHeld = false;
    this.crouchHeld = false;
    this.pendingJump = false;
  }
}
