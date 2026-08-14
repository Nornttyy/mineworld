import type { MoveKeys } from './keyboard';

// 触屏相比鼠标需要更少的手指位移才能转过同样角度；与 8px 手势死区配合，既灵敏也不会一碰就甩镜头。
const LOOK_SENSITIVITY = 0.006;
/** 与键盘双击 W 一致：第二次按下前进后保持按住，即进入疾跑。 */
export const TOUCH_SPRINT_DOUBLE_TAP_MS = 320;
/** 空白世界操作区按住多久才算长按；留出明确的轻点窗口，减少转视角时误开挖。 */
export const TOUCH_INTERACT_HOLD_MS = 380;
/**
 * 手指离开起点这么远就固定判为“拖动视角”。阈值小于普通手指划屏的第一小段，
 * 但仍能容忍轻点时的细微抖动；一旦越过绝不再回退成轻点/长按。
 */
export const TOUCH_LOOK_DRAG_DISTANCE = 8;
// 浏览器在掉帧、切回页面时可能合并多次 pointermove；限制单次转向，避免镜头突然甩飞。
const MAX_LOOK_DELTA = 96;

/** 触屏坐标使用浏览器 viewport 的 CSS 像素；交互始终取按下处，防止滑动后目标漂移。 */
export type TouchWorldPoint = Readonly<{ x: number; y: number }>;

export interface TouchControlActions {
  look(deltaYaw: number, deltaPitch: number): void;
  /** 空白世界区域轻点：使用物品 / 放置方块 / 操作工作台。 */
  interactTap(point: TouchWorldPoint): void;
  /** 空白世界区域长按开始：游戏会按手持物决定挖掘/攻击，或吃东西/拉弓。 */
  interactHoldStart(point: TouchWorldPoint): void;
  /** 正常抬手：结束挖掘，或完成吃东西/放箭。 */
  interactHoldEnd(point: TouchWorldPoint): void;
  /** 系统取消、切后台或手指改为滑动视角：不能留下挖掘，也不能误放箭。 */
  interactHoldCancel(point: TouchWorldPoint): void;
  inventory(): void;
  pause(): void;
}

export type TouchMoveAxes = Pick<MoveKeys, 'forward' | 'right'>;

/** 移动盘中心的小死区：放开拇指回到正中时角色立即停下，不会因手指抖动慢慢漂移。 */
export const TOUCH_DPAD_DEAD_ZONE = 0.2;
// 22.5° 为八方向的分界；比这个比例更偏向一个轴时显示为纯前/后/左/右。
const TOUCH_DPAD_CARDINAL_RATIO = 1 + Math.SQRT2;

/**
 * 将相对移动盘中心的归一化坐标映射到八个离散移动方向。
 * x 向右为正，y 向下为正；返回的 forward 与游戏键盘输入一致（前进为正）。
 *
 * 保持为纯函数，手势层可以持续把同一根手指的滑动喂进来，测试也能覆盖八向边界。
 */
export function slidingDpadAxes(normalizedX: number, normalizedY: number): TouchMoveAxes {
  const distance = Math.hypot(normalizedX, normalizedY);
  if (distance < TOUCH_DPAD_DEAD_ZONE) return { forward: 0, right: 0 };

  const horizontal = Math.abs(normalizedX);
  const vertical = Math.abs(normalizedY);
  if (vertical > horizontal * TOUCH_DPAD_CARDINAL_RATIO) {
    return { forward: normalizedY < 0 ? 1 : -1, right: 0 };
  }
  if (horizontal > vertical * TOUCH_DPAD_CARDINAL_RATIO) {
    return { forward: 0, right: normalizedX > 0 ? 1 : -1 };
  }
  return {
    forward: normalizedY < 0 ? 1 : -1,
    right: normalizedX > 0 ? 1 : -1,
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

/**
 * 拖动、系统取消永远优先。最后一个参数处理低端手机掉帧：若计时器来不及执行，
 * 但手指确实已按够时长，也必须按长按收尾，不能误变成“放置”。
 */
export function touchLookReleaseAction(
  dragged: boolean,
  holdStarted: boolean,
  cancelled = false,
  heldForMs = 0,
): TouchLookRelease {
  if (dragged || cancelled) return 'none';
  return holdStarted || heldForMs >= TOUCH_INTERACT_HOLD_MS ? 'hold-end' : 'tap';
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
  /** 本次交互锁定的落点。即使用户后来划屏取消，也不会把动作错投到划过的方块上。 */
  private lookPoint: TouchWorldPoint | null = null;
  private lookStartedAt = 0;
  /** 防止 Android/Safari 迟到的 timeout 落到下一次恰好复用的 pointerId 上。 */
  private lookGesture = 0;
  private lookStartX = 0;
  private lookStartY = 0;
  private lookX = 0;
  private lookY = 0;
  private lookDragging = false;
  private lookHoldStarted = false;
  private lookHoldTimer: number | null = null;
  private releaseLookCapture: (() => void) | null = null;
  /** 左下移动盘只占用一根左手手指；右手仍可同时在空白区转视角/交互。 */
  private dpadPointer: number | null = null;
  private forward = 0;
  private right = 0;
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
      if (!this.active) return;
      e.preventDefault();
      // 左手仍按方向键时，右手只允许一根手指负责视角/世界交互；第二根手指不能穿透成页面滚动或一次额外放置。
      if (this.lookPointer !== null) return;
      this.lookPointer = e.pointerId;
      this.lookPoint = { x: e.clientX, y: e.clientY };
      this.lookStartedAt = performance.now();
      const gesture = ++this.lookGesture;
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
        if (this.lookPointer !== e.pointerId || this.lookGesture !== gesture || this.lookDragging || !this.active) return;
        const point = this.lookPoint;
        if (point === null) return;
        this.lookHoldStarted = true;
        this.actions.interactHoldStart(point);
      }, TOUCH_INTERACT_HOLD_MS);
    });
    const moveLook = (e: PointerEvent): void => {
      if (e.pointerId !== this.lookPointer) return;
      e.preventDefault();
      // 有些安卓浏览器会把一次快速划动合并成一个 PointerEvent；逐个样本处理，既更顺滑，也能可靠地阻止“快速划一下却放了方块”。
      const coalesced = typeof e.getCoalescedEvents === 'function' ? e.getCoalescedEvents() : [];
      const samples = coalesced.length > 0 ? coalesced : [e];
      for (const sample of samples) this.moveLookTo(sample.clientX, sample.clientY);
    };
    const finishLook = (cancelled: boolean, endPoint?: TouchWorldPoint): void => {
      const pointerId = this.lookPointer;
      const point = this.lookPoint;
      if (pointerId === null || point === null) return;
      // 部分 WebView 在非常快的 swipe 中只给 pointerup；把抬手位置也纳入判定，绝不把它误认为轻点。
      if (!cancelled && endPoint) this.moveLookTo(endPoint.x, endPoint.y);
      const holdStarted = this.lookHoldStarted;
      const release = touchLookReleaseAction(
        this.lookDragging,
        holdStarted,
        cancelled,
        performance.now() - this.lookStartedAt,
      );
      this.clearLookHoldTimer();
      this.lookPointer = null;
      this.lookPoint = null;
      this.lookStartedAt = 0;
      this.lookDragging = false;
      this.lookHoldStarted = false;
      // 在派发游戏动作前交还 pointer capture：打开背包/暂停时就不会留下被浏览器吞住的指针。
      this.releasePointerCapture(look, pointerId);
      if (release === 'tap') this.actions.interactTap(point);
      else if (release === 'hold-end') {
        // 计时器在掉帧中没来得及跑时，仍按长按而非轻点处理，防止挖矿手势变成放方块。
        if (!holdStarted) this.actions.interactHoldStart(point);
        this.actions.interactHoldEnd(point);
      } else if (holdStarted) {
        // 只有真正开始过的动作才需要取消，避免系统取消一记轻点时打断别的游戏行为。
        this.actions.interactHoldCancel(point);
      }
    };
    this.releaseLookCapture = () => finishLook(true);
    const endLook = (e: PointerEvent): void => {
      if (e.pointerId !== this.lookPointer) return;
      e.preventDefault();
      finishLook(false, { x: e.clientX, y: e.clientY });
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

    // 左拇指在同一块 MC 风方向盘中滑动即可切换八个方向，不必抬手重按每一个箭头。
    this.bindSlidingDpad(root.querySelector('#touch-dpad') as HTMLElement);
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

  /**
   * 用每一个 pointer 样本驱动镜头。首次越过阈值后手势就永久进入 look 模式，
   * 因而用户即使把手指划回原处，也不会在松手时误触使用/放置。
   */
  private moveLookTo(x: number, y: number): void {
    const point = this.lookPoint;
    if (point === null) return;
    if (!this.lookDragging && isTouchLookDrag(this.lookStartX, this.lookStartY, x, y)) {
      this.lookDragging = true;
      this.clearLookHoldTimer();
      // 用户在长按后又开始滑动，优先把它当作转视角；取消而非松开，避免弓误射。
      if (this.lookHoldStarted) {
        this.lookHoldStarted = false;
        this.actions.interactHoldCancel(point);
      }
      // 划过手势阈值的那一小段只用于“确认是转视角”，不把它突然灌给镜头；
      // 从当前位置开始计算后续位移，能消除轻微拖动刚触发时的跳镜。
      this.lookX = x;
      this.lookY = y;
      return;
    }
    if (!this.lookDragging) return;
    const dx = Math.max(-MAX_LOOK_DELTA, Math.min(MAX_LOOK_DELTA, x - this.lookX));
    const dy = Math.max(-MAX_LOOK_DELTA, Math.min(MAX_LOOK_DELTA, y - this.lookY));
    this.lookX = x;
    this.lookY = y;
    this.actions.look(dx * LOOK_SENSITIVITY, -dy * LOOK_SENSITIVITY);
  }

  /**
   * 一个手指驱动整个移动盘。按下时立即按落点走，移动时持续重算八方向；
   * 因而从“前进”斜滑到“左前”、再滑到“后退”都不会有松手的停顿。
   */
  private bindSlidingDpad(dpad: HTMLElement): void {
    const update = (x: number, y: number): void => this.updateSlidingDpad(dpad, x, y);
    const finish = (): void => {
      const pointerId = this.dpadPointer;
      if (pointerId === null) return;
      this.dpadPointer = null;
      this.setMoveAxes(dpad, { forward: 0, right: 0 });
      dpad.style.setProperty('--touch-dpad-stick-x', '0px');
      dpad.style.setProperty('--touch-dpad-stick-y', '0px');
      dpad.dataset.moving = 'false';
      this.releasePointerCapture(dpad, pointerId);
    };
    dpad.addEventListener('pointerdown', (e) => {
      if (!this.active || this.dpadPointer !== null) return;
      e.preventDefault();
      e.stopPropagation();
      this.dpadPointer = e.pointerId;
      this.capturePointer(dpad, e.pointerId);
      update(e.clientX, e.clientY);
    });
    const move = (e: PointerEvent): void => {
      if (e.pointerId !== this.dpadPointer) return;
      e.preventDefault();
      update(e.clientX, e.clientY);
    };
    const end = (e: PointerEvent): void => {
      if (e.pointerId !== this.dpadPointer) return;
      e.preventDefault();
      finish();
    };
    // 即使 Safari 拒绝/丢失 pointer capture，window 仍会接到最后一帧，角色不会卡在前进状态。
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
    dpad.addEventListener('lostpointercapture', end);
    this.releaseHolds.push(finish);
  }

  private updateSlidingDpad(dpad: HTMLElement, clientX: number, clientY: number): void {
    const rect = dpad.getBoundingClientRect();
    const radius = Math.max(1, Math.min(rect.width, rect.height) / 2);
    const x = (clientX - (rect.left + rect.width / 2)) / radius;
    const y = (clientY - (rect.top + rect.height / 2)) / radius;
    const axes = slidingDpadAxes(x, y);
    this.setMoveAxes(dpad, axes);

    // 视觉摇杆的行程限制在中心格内，方向箭头依旧清楚可见；超过方向盘边缘时也不会把摇杆甩出界。
    const magnitude = Math.hypot(x, y);
    const clamp = magnitude > 0 ? Math.min(1, magnitude) / magnitude : 0;
    const stickLimit = radius * 0.42;
    dpad.style.setProperty('--touch-dpad-stick-x', `${Math.round(x * clamp * stickLimit)}px`);
    dpad.style.setProperty('--touch-dpad-stick-y', `${Math.round(y * clamp * stickLimit)}px`);
    dpad.dataset.moving = String(axes.forward !== 0 || axes.right !== 0);
  }

  private setMoveAxes(dpad: HTMLElement, axes: TouchMoveAxes): void {
    // 只有“进入前进”这一刻参与双击判定；从前进平滑滑到左前时不会把它错误地当成新按键。
    if (axes.forward > 0 && this.forward <= 0) {
      const now = performance.now();
      if (isTouchSprintDoubleTap(this.lastForwardPress, now)) this.sprinting = true;
      this.lastForwardPress = now;
    }
    // MCPE 手感：前进轴一松开或改为后退，疾跑立刻结束；左右滑动不会打断仍在前进的疾跑。
    if (axes.forward <= 0) this.sprinting = false;
    this.forward = axes.forward;
    this.right = axes.right;
    dpad.dataset.forward = String(axes.forward);
    dpad.dataset.right = String(axes.right);
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
    // releaseHolds 会逐项处理 pointer capture；再归零一次防止浏览器漏发取消事件。
    this.dpadPointer = null;
    this.forward = 0;
    this.right = 0;
    this.lastForwardPress = -Infinity;
    this.sprinting = false;
    this.jumpHeld = false;
    this.crouchHeld = false;
    this.pendingJump = false;
  }
}
