import * as THREE from 'three';
import type { Arrow } from '../core/entity/arrow';

// 飞行/插地的箭：细长杆 + 灰箭头 + 白尾羽的小模型，按速度方向定向。
// 按物体身份增删 mesh（与 DropRenderer 同套路）。无光照材质，匹配全局 unlit 风格。
const FORWARD = new THREE.Vector3(0, 0, 1); // 模型本地朝向（箭头指 +Z）

export class ArrowRenderer {
  private readonly meshes = new Map<Arrow, THREE.Object3D>();
  private readonly geoShaft = new THREE.BoxGeometry(0.05, 0.05, 0.5);
  private readonly geoHead = new THREE.BoxGeometry(0.09, 0.09, 0.14);
  private readonly geoFletch = new THREE.BoxGeometry(0.16, 0.02, 0.12);
  private readonly matShaft = new THREE.MeshBasicMaterial({ color: 0x6b4a2b });
  private readonly matHead = new THREE.MeshBasicMaterial({ color: 0x9a9aa2 });
  private readonly matFletch = new THREE.MeshBasicMaterial({ color: 0xe8e8ec });
  private readonly tmp = new THREE.Vector3();

  constructor(private readonly scene: THREE.Scene) {}

  private make(): THREE.Object3D {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(this.geoShaft, this.matShaft));
    const head = new THREE.Mesh(this.geoHead, this.matHead);
    head.position.z = 0.3;
    g.add(head);
    const f1 = new THREE.Mesh(this.geoFletch, this.matFletch);
    f1.position.z = -0.22;
    g.add(f1);
    const f2 = new THREE.Mesh(this.geoFletch, this.matFletch);
    f2.position.z = -0.22;
    f2.rotation.z = Math.PI / 2;
    g.add(f2);
    return g;
  }

  sync(arrows: Arrow[]): void {
    const present = new Set(arrows);
    for (const [a, m] of this.meshes) {
      if (!present.has(a)) {
        this.scene.remove(m);
        this.meshes.delete(a);
      }
    }
    for (const a of arrows) {
      let m = this.meshes.get(a);
      if (!m) {
        m = this.make();
        this.scene.add(m);
        this.meshes.set(a, m);
      }
      m.position.set(a.x, a.y, a.z);
      const speed = Math.hypot(a.vx, a.vy, a.vz);
      if (speed > 1e-4) {
        // 飞行中：沿速度方向定向；插地后速度=0 → 保留最后朝向（mesh 按身份留存）
        this.tmp.set(a.vx / speed, a.vy / speed, a.vz / speed);
        m.quaternion.setFromUnitVectors(FORWARD, this.tmp);
      }
    }
  }

  clear(): void {
    for (const [, m] of this.meshes) this.scene.remove(m);
    this.meshes.clear();
  }
}
