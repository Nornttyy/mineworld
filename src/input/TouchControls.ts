import type { MoveKeys } from './keyboard';

const LOOK_SENSITIVITY = 0.004;
/** 与键盘双击 W 一致：第二次按下前进后保持按住，即进入疾跑。 */
export const TOUCH_SPRINT_DOUBLE_TAP_MS = 320;
/** 空白世界操作区按住多久才算长按；短一点能及时开始挖掘，又不给普通轻点造成明显延迟。 */
export const TOUCH_INTERACT_HOLD_MS = 280;
/** 超过这个位移便固定判为“拖动视角”，不会在松手时意外使用/放置。 */
export const TOUCH_LOOK_DRAG_DISTANCE = 12;
// 浏览器在掉帧、切回页面时可能合并多次 pointermove；限制单次转向，避免镜头突然甩飞。
const MAX_LOOK_DELTA = 72;

export interface TouchControlActions {
  look(deltaYaw: number, deltaPitch: number): void;
  /** 空白世界区域轻点：使用物品 / 放置方块 / 操作工作台。 */
  interactTap(): void;
  /** 空白世界区域长按开始：游戏会按手持物决定挖掘/攻击，或吃东西/拉弓。 */
  interactHoldStart(): void;
  /** 正常抬手：结束挖掘，或完成吃东西/放箭。 */
  interactHoldEnd(): void;
  /** 系统取消、切后台或手指改为滑动视角：不能留下挖掘，也不能误放箭。 */
  interactHoldCancel(): void;
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

/**
 * 空白世界操作区的手势分类保持为纯函数，既避免“微小抖动算拖动”，也方便在无 DOM 的测试里覆盖边界。
 */
export function isTouchLookDrag(startX: number, startY: number, currentX: number, currentY: number): boolean {
  return Math.hypot(currentX - startX, currentY - startY) >= TOUCH_LOOK_DRAG_DISTANCE;
}

export type TouchLookRelease = 'tap' | 'hold-end' | 'none';

/** 拖动永远优先；已经开始的长按只在正常松手时结束，取消事件不会变成轻点。 */
export function touchLookReleaseAction(dragged: boolean, holdStarted: boolean, cancelled = false): TouchLookRelease {
  if (dragged || cancelled) return 'none';
  return holdStarted ? 'hold-end' : 'tap';
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
 * 触屏第一人称输入：左下十字键移动；按钮和快捷栏之外的空白世界区域用于轻点/长按互动与滑动视角。
 * Pointer Events 让多指操作成立（移动、转向、跳跃可以同时按）。
 */
export class TouchControls {
  private readonly root: HTMLElement;
  private readonly actions: TouchControlActions;
  private lookPointer: number | null = null;
  private lookStartX = 0;
  private lookStartY = 0;
  private lookX = 0;
  private lookY = 0;
  private lookDragging = false;
  private lookHoldStarted = false;
  private lookHoldTimer: number | null = null;
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
      this.lookStartX = e.clientX;
      this.lookStartY = e.clientY;
      this.lookX = e.clientX;
      this.lookY = e.clientY;
      this.lookDragging = false;
      this.lookHoldStarted = false;
      this.capturePointer(look, e.pointerId);
      this.lookHoldTimer = window.setTimeout(() => {
        this.lookHoldTimer = null;
        // 长按计时器可能恰好和 pointerup/cancel 同一帧排队；再次核对状态，绝不在已经结束后开挖。
        if (this.lookPointer === null || this.lookDragging || !this.active) return;
        this.lookHoldStarted = true;
        this.actions.interactHoldStart();
      }, TOUCH_INTERACT_HOLD_MS);
    });
    const moveLook = (e: PointerEvent): void => {
      if (e.pointerId !== this.lookPointer) return;
      e.preventDefault();
      if (!this.lookDragging && isTouchLookDrag(this.lookStartX, this.lookStartY, e.clientX, e.clientY)) {
        this.lookDragging = true;
        this.clearLookHoldTimer();
        // 用户在长按后又开始滑动，优先把它当作转视角；取消而非松开，避免弓误射。
        if (this.lookHoldStarted) {
          this.lookHoldStarted = false;
          this.actions.interactHoldCancel();
        }
      }
      if (!this.lookDragging) return;
      const dx = Math.max(-MAX_LOOK_DELTA, Math.min(MAX_LOOK_DELTA, e.clientX - this.lookX));
      const dy = Math.max(-MAX_LOOK_DELTA, Math.min(MAX_LOOK_DELTA, e.clientY - this.lookY));
      this.lookX = e.clientX;
      this.lookY = e.clientY;
      this.actions.look(dx * LOOK_SENSITIVITY, -dy * LOOK_SENSITIVITY);
    };
    const finishLook = (cancelled: boolean): void => {
      const pointerId = this.lookPointer;
      if (pointerId === null) return;
      const release = touchLookReleaseAction(this.lookDragging, this.lookHoldStarted, cancelled);
      this.clearLookHoldTimer();
      this.lookPointer = null;
      this.lookDragging = false;
      this.lookHoldStarted = false;
      // 在派发游戏动作前交还 pointer capture：打开背包/暂停时就不会留下被浏览器吞住的指针。
      this.releasePointerCapture(look, pointerId);
      if (release === 'tap') this.actions.interactTap();
      else if (release === 'hold-end') this.actions.interactHoldEnd();
      else if (cancelled) this.actions.interactHoldCancel();
    };
    this.releaseLookCapture = () => finishLook(true);
    const endLook = (e: PointerEvent): void => {
      if (e.pointerId !== this.lookPointer) return;
      e.preventDefault();
      finishLook(false);
    };
    const cancelLook = (e: PointerEvent): void => {
      if (e.pointerId !== this.lookPointer) return;
      e.preventDefault();
      finishLook(true);
    };
    // move/up 额外挂到 window：少数 Safari/Android 情况下 pointer capture 被系统抢走，仍能安全收尾。
    window.addEventListener('pointermove', moveLook);
    window.addEventListener('pointerup', endLook);
    window.addEventListener('pointercancel', cancelLook);
    look.addEventListener('lostpointercapture', cancelLook);

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
    // MCPE 直接触控：按钮和快捷栏之外的空白世界区域就是交互区——轻点使用/放置，长按挖掘/攻击，拖动只转视角。
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

  /** Safari 在切后台或系统手势开始时可能拒绝 capture；不让异常破坏后续的 reset/cancel。 */
  private capturePointer(el: HTMLElement, pointerId: number): void {
    try {
      el.setPointerCapture(pointerId);
    } catch {
      // 后面的 window pointerup/pointercancel 监听会兜底结束这次手势。
    }
  }

  private clearLookHoldTimer(): void {
    if (this.lookHoldTimer === null) return;
    window.clearTimeout(this.lookHoldTimer);
    this.lookHoldTimer = null;
  }

  private bindHold(id: string, down: () => void, up: () => void, cancel = up): void {
    const el = document.getElementById(id) as HTMLButtonElement;
    let pointer: number | null = null;
    el.addEventListener('pointerdown', (e) => {
      if (!this.active || pointer !== null) return;
      e.preventDefault();
      e.stopPropagation();
      pointer = e.pointerId;
      this.capturePointer(el, e.pointerId);
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
