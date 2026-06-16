const SENSITIVITY = 0.0025;
const PITCH_LIMIT = 1.55; // ≈89°

/** 指针锁定第一人称转视角：点击锁定，鼠标移动改 yaw/pitch。 */
export class PointerLookControls {
  yaw = 0;
  pitch = 0;

  constructor(canvas: HTMLCanvasElement, overlay: HTMLElement) {
    canvas.addEventListener('click', () => void canvas.requestPointerLock());
    document.addEventListener('pointerlockchange', () => {
      overlay.classList.toggle('hidden', document.pointerLockElement === canvas);
    });
    document.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== canvas) return;
      this.yaw += e.movementX * SENSITIVITY;
      this.pitch = Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, this.pitch - e.movementY * SENSITIVITY));
    });
  }
}
