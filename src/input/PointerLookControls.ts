const SENSITIVITY = 0.0025;
const PITCH_LIMIT = 1.55; // ≈89°

/** 指针锁定第一人称转视角：点击锁定，鼠标移动改 yaw/pitch。 */
export class PointerLookControls {
  yaw = 0;
  pitch = 0;

  constructor(canvas: HTMLCanvasElement, usePointerLock = true) {
    if (usePointerLock) canvas.addEventListener('click', () => void canvas.requestPointerLock());
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== canvas) return;
      this.rotate(e.movementX * SENSITIVITY, -e.movementY * SENSITIVITY);
    });
  }

  /** 鼠标与触屏共用的视角增量入口（参数单位为弧度）。 */
  rotate(deltaYaw: number, deltaPitch: number): void {
    this.yaw += deltaYaw;
    this.pitch = Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, this.pitch + deltaPitch));
  }
}
