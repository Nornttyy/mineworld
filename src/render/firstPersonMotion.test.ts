import * as THREE from 'three';
import { describe, expect, it, vi } from 'vitest';
import { FirstPersonHand } from './FirstPersonHand';
import {
  DEFAULT_SWING_SECONDS,
  HandMotionTracker,
  bowPullAmount,
  bowUseMatrix,
  eatingItemMatrix,
  emptyArmMatrix,
  hurtViewMatrix,
  itemSwingMatrix,
  viewBobMatrix,
  type HandMotionState,
} from './firstPersonMotion';
import { BOW, WOODEN_SWORD } from '../core/items/items';

const matrixDistance = (a: THREE.Matrix4, b: THREE.Matrix4): number =>
  Math.max(...a.elements.map((n, i) => Math.abs(n - b.elements[i])));
type View = { root: THREE.Group; equipped: number; swingT: number };

describe('verified Java 26.3 hand transforms', () => {
  it('keeps the six-tick WHACK and applies separate empty-arm and item paths', () => {
    expect(DEFAULT_SWING_SECONDS).toBe(0.3);
    // Checkpoints calculated from renderPlayerArm and the actual wide arm pivot;
    // an idle Euler tilt or applying the item chop to empty hands misses these.
    const idleTip = new THREE.Vector3(0, -6 / 16, 0).applyMatrix4(emptyArmMatrix(0));
    expect(idleTip.x).toBeCloseTo(0.755170441, 8);
    expect(idleTip.y).toBeCloseTo(-0.4379537647, 8);
    expect(idleTip.z).toBeCloseTo(-1.0952162223, 8);
    const tip = new THREE.Vector3(0, -6 / 16, 0).applyMatrix4(emptyArmMatrix(0.25));
    expect(tip.distanceTo(idleTip)).toBeGreaterThan(0.3);
    expect(matrixDistance(emptyArmMatrix(0.25), itemSwingMatrix(0.25))).toBeGreaterThan(0.5);
    expect(matrixDistance(emptyArmMatrix(0), emptyArmMatrix(1))).toBeLessThan(1e-12);
  });

  it('uses the bow quadratic power and starts tremor above 0.1, not only at full charge', () => {
    expect(bowPullAmount(0)).toBe(0);
    expect(bowPullAmount(10)).toBeCloseTo(5 / 12);
    expect(bowPullAmount(20)).toBe(1);
    expect(bowPullAmount(80)).toBe(1);
    const halfway = bowUseMatrix(10);
    expect(halfway.determinant()).toBeCloseTo(1 + (5 / 12) * 0.2);
    expect(bowUseMatrix(20).determinant()).toBeCloseTo(1.2);
    expect(matrixDistance(bowUseMatrix(20), bowUseMatrix(23))).toBeGreaterThan(0.001);
    // Scale-Z followed by rotate-Y must preserve shear, not be simplified to TRS.
    const x = new THREE.Vector3().setFromMatrixColumn(halfway, 0);
    const z = new THREE.Vector3().setFromMatrixColumn(halfway, 2);
    expect(Math.abs(x.dot(z))).toBeGreaterThan(0.05);
  });

  it('eating reaches the mouth before the equip anchor and returns exactly to idle at start', () => {
    expect(matrixDistance(eatingItemMatrix(0), itemSwingMatrix(0))).toBeLessThan(1e-12);
    const mid = eatingItemMatrix(16);
    // At half consumption: approach ~= 1, so rotation is ~Y90° X10° Z30°.
    const q = new THREE.Quaternion().setFromRotationMatrix(mid);
    const forward = new THREE.Vector3(0, 0, 1).applyQuaternion(q);
    expect(forward.x).toBeCloseTo(Math.cos((10 * Math.PI) / 180), 6);
    expect(forward.y).toBeCloseTo(-Math.sin((10 * Math.PI) / 180), 6);
    const origin = new THREE.Vector3().setFromMatrixPosition(mid);
    expect(origin.x).toBeGreaterThan(-0.2);
    expect(origin.x).toBeLessThan(0.1); // Food lands by the mouth, not at the old right-hand anchor.
    // The 4-tick abs-cos chew is a translation; two equal orientations near
    // the end differ vertically by 0.1 without invented angular jitter.
    const a = eatingItemMatrix(24),
      b = eatingItemMatrix(26);
    expect(a.elements[13] - b.elements[13]).toBeCloseTo(0.1, 7);
  });

  it('bob moves down and rotates around Z then X; hurt uses one directional 14° tilt', () => {
    const bob = viewBobMatrix(-0.5, 0.1);
    expect(bob.elements[12]).toBeCloseTo(-0.05);
    expect(bob.elements[13]).toBeCloseTo(0);
    expect(viewBobMatrix(0, 0.1).elements[13]).toBeCloseTo(-0.1);
    const strongest = hurtViewMatrix(0.5 * 0.5 ** 0.25);
    const x = new THREE.Vector3(1, 0, 0).transformDirection(strongest);
    expect(Math.atan2(x.y, x.x)).toBeCloseTo((-14 * Math.PI) / 180);
    expect(strongest.elements.slice(12, 15)).toEqual([0, 0, 0]);
    expect(matrixDistance(hurtViewMatrix(0), new THREE.Matrix4())).toBeLessThan(1e-12);
  });
});

describe('hand state and actual renderer integration', () => {
  it('feeds authoritative eat progress, suppresses attack while eating and restarts the next food', () => {
    const loader = vi
      .spyOn(THREE.TextureLoader.prototype, 'load')
      .mockReturnValue(new THREE.Texture());
    try {
      const hand = new FirstPersonHand(new THREE.Texture());
      const view = hand as unknown as View;
      hand.setHeld(256);
      hand.setEating(true, 0.8, 1.6);
      view.swingT = 0.25;
      hand.update(0, 0);
      expect(matrixDistance(view.root.matrix, eatingItemMatrix(16))).toBeLessThan(1e-12);
      hand.setEating(true, 0, 1.6); // Next item while right click is still held.
      hand.update(0, 0);
      expect(matrixDistance(view.root.matrix, itemSwingMatrix(0))).toBeLessThan(1e-12);
    } finally {
      loader.mockRestore();
    }
  });

  it('renders the bow matrix without losing its stretch, then resets all scale after release', () => {
    const loader = vi
      .spyOn(THREE.TextureLoader.prototype, 'load')
      .mockReturnValue(new THREE.Texture());
    try {
      const hand = new FirstPersonHand(new THREE.Texture());
      const view = hand as unknown as View;
      hand.setHeld(BOW);
      hand.setBowCharge(0.5);
      hand.update(0, 0);
      expect(matrixDistance(view.root.matrix, bowUseMatrix(10))).toBeLessThan(1e-12);
      expect(view.root.matrixAutoUpdate).toBe(false);
      const lossy = new THREE.Matrix4().compose(
        view.root.position,
        view.root.quaternion,
        view.root.scale,
      );
      expect(matrixDistance(lossy, view.root.matrix)).toBeGreaterThan(0.01);
      hand.setBowCharge(null);
      hand.update(0, 0);
      expect(matrixDistance(view.root.matrix, itemSwingMatrix(0))).toBeLessThan(1e-12);
      expect(view.root.scale.toArray()).toEqual([1, 1, 1]);
    } finally {
      loader.mockRestore();
    }
  });

  it('recovers a sword by item-swap speed rather than instantly raising it or resetting on attack', () => {
    const loader = vi
      .spyOn(THREE.TextureLoader.prototype, 'load')
      .mockReturnValue(new THREE.Texture());
    try {
      const hand = new FirstPersonHand(new THREE.Texture());
      const view = hand as unknown as View;
      hand.setHeld(2);
      hand.setHeld(WOODEN_SWORD);
      for (let i = 0; i < 18; i++) hand.update(1 / 60, 0);
      expect(view.equipped).toBeLessThan(0.3);
      for (let i = 0; i < 30; i++) hand.update(1 / 60, 0);
      expect(view.equipped).toBe(1);
      hand.swing();
      hand.update(1 / 60, 0);
      expect(view.equipped).toBe(1); // 26.3 onAttack resets attack ticker only.
    } finally {
      loader.mockRestore();
    }
  });
});

describe('distance and look bob input bridge', () => {
  const state: HandMotionState = {
    x: 0,
    z: 0,
    horizontalSpeed: 4.3,
    onGround: true,
    viewYaw: 0,
    viewPitch: 0,
  };

  it('uses actual distance and grounded speed, with verified one-tick 0.4 and 0.5 smoothing', () => {
    const motion = new HandMotionTracker();
    motion.setState(state);
    const m = motion.update(0.05, 0);
    expect(m.elements[13]).toBeCloseTo(-0.04); // 0 -> min(.1,.215) at 40%.
    motion.setState({ ...state, viewYaw: Math.PI / 2, onGround: false });
    const before = motion.update(0.05, 0);
    expect(before.elements[13]).toBeCloseTo(-0.024); // Ground bob decays airborne.
    for (let i = 0; i < 100; i++) motion.update(0.05, 0);
    expect(matrixDistance(motion.update(0, 0), new THREE.Matrix4())).toBeLessThan(1e-10);
    // Without walking bob, the view yaw lag after one tick is (90-45)*0.1 = 4.5°.
    const look = new HandMotionTracker();
    look.setState({ ...state, onGround: false });
    look.update(0, 0);
    look.setState({ ...state, onGround: false, viewYaw: Math.PI / 2 });
    const forward = new THREE.Vector3(0, 0, 1).transformDirection(look.update(0.05, 0));
    expect(Math.atan2(forward.x, forward.z)).toBeCloseTo((4.5 * Math.PI) / 180);
  });

  it('has equal constant-speed distance and smoothing at 30/60/120 FPS', () => {
    const results: THREE.Matrix4[] = [];
    for (const fps of [30, 60, 120]) {
      const motion = new HandMotionTracker();
      motion.setState(state);
      motion.update(0, 0);
      for (let i = 1; i <= fps; i++) {
        motion.setState({ ...state, x: (4.3 * i) / fps });
        motion.update(1 / fps, 0);
      }
      results.push(motion.update(0, 0));
    }
    expect(matrixDistance(results[0], results[1])).toBeLessThan(1e-12);
    expect(matrixDistance(results[1], results[2])).toBeLessThan(1e-12);
  });
});
