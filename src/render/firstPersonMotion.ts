import * as THREE from 'three';

// Verified against official Java 26.3 classes; see docs/first-person-26.3-audit.md.
// All matrices multiply in PoseStack order. Keep non-uniform bow stretch as a
// matrix: decomposing it and rebuilding TRS would discard the resulting shear.
const D = Math.PI / 180;
const step = new THREE.Matrix4();
const tx = (m: THREE.Matrix4, x: number, y: number, z: number): void => {
  m.multiply(step.makeTranslation(x, y, z));
};
const rx = (m: THREE.Matrix4, angle: number): void => {
  m.multiply(step.makeRotationX(angle));
};
const ry = (m: THREE.Matrix4, angle: number): void => {
  m.multiply(step.makeRotationY(angle));
};
const rz = (m: THREE.Matrix4, angle: number): void => {
  m.multiply(step.makeRotationZ(angle));
};
const clamp = THREE.MathUtils.clamp;

export const DEFAULT_SWING_SECONDS = 6 / 20;
export const DEFAULT_EAT_SECONDS = 32 / 20;
export const EQUIP_RATE = 0.4 * 20;
export const EQUIP_SWAP_THRESHOLD = 0.1;

export interface SwingPose {
  tx: number;
  ty: number;
  tz: number;
  ry1: number;
  rz: number;
  rx: number;
  ry2: number;
}

export function mcSwingPose(progress: number): SwingPose {
  const t = clamp(progress, 0, 1);
  const arc = Math.sin(Math.sqrt(t) * Math.PI);
  return {
    tx: -0.4 * arc,
    ty: 0.2 * Math.sin(Math.sqrt(t) * Math.PI * 2),
    tz: -0.2 * Math.sin(t * Math.PI),
    ry1: (45 - 20 * Math.sin(t * t * Math.PI)) * D,
    rz: -20 * arc * D,
    rx: -80 * arc * D,
    ry2: -45 * D,
  };
}

export function mcSwingQuaternion(pose: SwingPose, out = new THREE.Quaternion()): THREE.Quaternion {
  const m = new THREE.Matrix4();
  ry(m, pose.ry1);
  rz(m, pose.rz);
  rx(m, pose.rx);
  ry(m, pose.ry2);
  return out.setFromRotationMatrix(m);
}

function itemAnchor(m: THREE.Matrix4, unequipped: number): void {
  tx(m, 0.56, -0.52 - 0.6 * unequipped, -0.72);
}

export function itemSwingMatrix(
  progress: number,
  unequipped = 0,
  out = new THREE.Matrix4(),
): THREE.Matrix4 {
  out.identity();
  itemAnchor(out, unequipped);
  const p = mcSwingPose(progress);
  tx(out, p.tx, p.ty, p.tz);
  ry(out, p.ry1);
  rz(out, p.rz);
  rx(out, p.rx);
  ry(out, p.ry2);
  return out;
}

/** renderPlayerArm, followed by the wide right arm's model pivot and cube centre.
 * The final X flip converts our Y-up skin box to Java's Y-down/Z-back model frame. */
export function emptyArmMatrix(
  progress: number,
  unequipped = 0,
  out = new THREE.Matrix4(),
): THREE.Matrix4 {
  const t = clamp(progress, 0, 1);
  const arc = Math.sin(Math.sqrt(t) * Math.PI);
  out.identity();
  tx(
    out,
    0.64 - 0.3 * arc,
    -0.6 + 0.4 * Math.sin(Math.sqrt(t) * Math.PI * 2) - 0.6 * unequipped,
    -0.72 - 0.4 * Math.sin(t * Math.PI),
  );
  ry(out, 45 * D);
  ry(out, arc * 70 * D);
  rz(out, -20 * Math.sin(t * t * Math.PI) * D);
  tx(out, -1, 3.6, 3.5);
  rz(out, 120 * D);
  rx(out, 200 * D);
  ry(out, -135 * D);
  tx(out, 5.6, 0, 0);
  tx(out, -5 / 16, 2 / 16, 0); // HumanoidModel right arm pivot
  rz(out, 0.1); // AvatarRenderer.renderHand sets rightArm.zRot = 0.1 radians
  tx(out, -1 / 16, 4 / 16, 0); // centre of (-3,-2,-2)+(4,12,4)/2
  rx(out, Math.PI);
  return out;
}

export function bowPullAmount(elapsedTicks: number): number {
  const t = Math.max(0, elapsedTicks) / 20;
  return Math.min(1, (t * t + 2 * t) / 3);
}

export function bowUseMatrix(
  elapsedTicks: number,
  unequipped = 0,
  out = new THREE.Matrix4(),
): THREE.Matrix4 {
  const ticks = Math.max(0, elapsedTicks);
  const pull = bowPullAmount(ticks);
  out.identity();
  itemAnchor(out, unequipped);
  tx(out, -0.2785682, 0.18344387, 0.15731531);
  rx(out, -13.935 * D);
  ry(out, 35.3 * D);
  rz(out, -9.785 * D);
  if (pull > 0.1) tx(out, 0, Math.sin((ticks - 0.1) * 1.3) * (pull - 0.1) * 0.004, 0);
  tx(out, 0, 0, pull * 0.04);
  out.multiply(step.makeScale(1, 1, 1 + pull * 0.2));
  ry(out, -45 * D);
  return out;
}

export function eatingItemMatrix(
  elapsedTicks: number,
  durationTicks = 32,
  unequipped = 0,
  out = new THREE.Matrix4(),
): THREE.Matrix4 {
  const duration = Math.max(1, durationTicks);
  const remaining = duration - clamp(elapsedTicks, 0, duration);
  const ratio = remaining / duration;
  const approach = 1 - ratio ** 27;
  out.identity();
  if (ratio < 0.8) tx(out, 0, Math.abs(Math.cos((remaining / 4) * Math.PI) * 0.1), 0);
  tx(out, approach * 0.6, approach * -0.5, 0);
  ry(out, approach * 90 * D);
  rx(out, approach * 10 * D);
  rz(out, approach * 30 * D);
  // Eating has a custom arm transform: this anchor comes AFTER the eating
  // rotations, unlike bow/use transforms. Order changes where the food lands.
  itemAnchor(out, unequipped);
  return out;
}

export function viewBobMatrix(
  backwardsWalkDistance: number,
  bob: number,
  out = new THREE.Matrix4(),
): THREE.Matrix4 {
  const phase = backwardsWalkDistance * Math.PI;
  out.identity();
  tx(out, Math.sin(phase) * bob * 0.5, -Math.abs(Math.cos(phase) * bob), 0);
  rz(out, Math.sin(phase) * bob * 3 * D);
  rx(out, Math.abs(Math.cos(phase - 0.2) * bob) * 5 * D);
  return out;
}

export function hurtViewMatrix(
  remaining: number,
  duration = 0.5,
  direction = 0,
  out = new THREE.Matrix4(),
): THREE.Matrix4 {
  const fraction = duration > 0 ? clamp(remaining / duration, 0, 1) : 0;
  out.identity();
  ry(out, -direction);
  rz(out, -14 * Math.sin(fraction ** 4 * Math.PI) * D);
  ry(out, direction);
  return out;
}

export interface HandMotionState {
  /** Interpolated camera/player position in blocks; used for actual walking distance. */
  x: number;
  z: number;
  /** Blocks per second, NOT the physics velocity in blocks per tick. */
  horizontalSpeed: number;
  onGround: boolean;
  swimming?: boolean;
  /** Radians. Java pitch is positive down; pass -Mineworld look.pitch. */
  viewYaw: number;
  viewPitch: number;
}

/** Bridges the render-time inputs to verified Java bob formulas. The fractional
 * tick exponential is an adaptation; the physics tick/interpolation remains in Game. */
export class HandMotionTracker {
  private state: HandMotionState | null = null;
  private lastX = 0;
  private lastZ = 0;
  private initialized = false;
  private walkDistance = 0;
  private bob = 0;
  private yawBob = 0;
  private pitchBob = 0;

  setState(state: HandMotionState): void {
    this.state = state;
  }

  update(dt: number, fallbackWalkSpeed: number, out = new THREE.Matrix4()): THREE.Matrix4 {
    const s = this.state;
    let targetBob: number;
    if (s) {
      if (!this.initialized) {
        this.lastX = s.x;
        this.lastZ = s.z;
        this.yawBob = s.viewYaw;
        this.pitchBob = s.viewPitch;
        this.initialized = true;
      }
      const distance = Math.hypot(s.x - this.lastX, s.z - this.lastZ);
      // Spawn/teleport is not walking. Avoid letting a world change rotate the hand arbitrarily.
      if (distance < 4) this.walkDistance += distance * 0.6;
      this.lastX = s.x;
      this.lastZ = s.z;
      targetBob =
        s.onGround && !s.swimming ? Math.min(0.1, Math.max(0, s.horizontalSpeed) / 20) : 0;
    } else {
      // Compatibility until Game supplies actual distance/ground state.
      const speed = Math.max(0, fallbackWalkSpeed) * 4.4;
      this.walkDistance += speed * dt * 0.6;
      targetBob = Math.min(0.1, speed / 20);
    }
    this.bob += (targetBob - this.bob) * (1 - 0.6 ** (dt * 20));
    viewBobMatrix(-this.walkDistance, this.bob, out);
    if (s) {
      const yawDelta = Math.atan2(
        Math.sin(s.viewYaw - this.yawBob),
        Math.cos(s.viewYaw - this.yawBob),
      );
      const alpha = 1 - 0.5 ** (dt * 20);
      this.yawBob = s.viewYaw - yawDelta * (1 - alpha);
      this.pitchBob += (s.viewPitch - this.pitchBob) * alpha;
      rx(out, (s.viewPitch - this.pitchBob) * 0.1);
      ry(out, (s.viewYaw - this.yawBob) * 0.1);
    }
    return out;
  }
}
