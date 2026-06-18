import * as THREE from 'three';
import type { Particle } from '../core/particles/particles';

const MAX = 600; // 同屏粒子上限（预分配缓冲）

/** 把碎屑粒子画成一批带色的点（单个 Points，按帧刷新 position/color）。在世界场景里。 */
export class ParticleRenderer {
  private readonly geom = new THREE.BufferGeometry();
  private readonly pos = new Float32Array(MAX * 3);
  private readonly col = new Float32Array(MAX * 3);
  private readonly posAttr: THREE.BufferAttribute;
  private readonly colAttr: THREE.BufferAttribute;
  private readonly points: THREE.Points;

  constructor(scene: THREE.Scene) {
    this.posAttr = new THREE.BufferAttribute(this.pos, 3);
    this.colAttr = new THREE.BufferAttribute(this.col, 3);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.colAttr.setUsage(THREE.DynamicDrawUsage);
    this.geom.setAttribute('position', this.posAttr);
    this.geom.setAttribute('color', this.colAttr);
    this.geom.setDrawRange(0, 0);
    const mat = new THREE.PointsMaterial({
      size: 0.13,
      vertexColors: true,
      sizeAttenuation: true, // 近大远小
      transparent: true,
      depthWrite: false, // 不写深度，避免粒子互相遮挡/闪烁（仍被地形正确遮挡）
    });
    this.points = new THREE.Points(this.geom, mat);
    this.points.frustumCulled = false; // 颗粒分布零散，关剔除免整批消失
    scene.add(this.points);
  }

  // 用当前存活粒子刷新缓冲（超出 MAX 的丢弃）。
  sync(ps: Particle[]): void {
    const n = Math.min(ps.length, MAX);
    for (let i = 0; i < n; i++) {
      const p = ps[i];
      this.pos[i * 3] = p.x;
      this.pos[i * 3 + 1] = p.y;
      this.pos[i * 3 + 2] = p.z;
      this.col[i * 3] = p.r;
      this.col[i * 3 + 1] = p.g;
      this.col[i * 3 + 2] = p.b;
    }
    this.geom.setDrawRange(0, n);
    this.posAttr.needsUpdate = true;
    this.colAttr.needsUpdate = true;
  }
}
