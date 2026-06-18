import * as THREE from 'three';
import type { Mob, MobKind } from '../core/entity/mob';

// 把生物渲染成 MC 风的盒状模型（第 1 期纯色，颜色 + 假面光烤进顶点；与体素世界同为 unlit）。
// 走路摆腿、朝移动方向。按物体身份增删 group（同 DropRenderer.sync 的做法）。

const sharedMat = new THREE.MeshBasicMaterial({ vertexColors: true });
// BoxGeometry 面序 +X,-X,+Y(顶),-Y(底),+Z,-Z；顶亮、底暗、侧中，模仿世界的烤光
const FACE_SHADE = [0.82, 0.82, 1.0, 0.5, 0.82, 0.82];

function box(w: number, h: number, d: number, hex: number): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  const c = new THREE.Color(hex);
  const colors: number[] = [];
  for (let f = 0; f < 6; f++) {
    const s = FACE_SHADE[f];
    for (let v = 0; v < 4; v++) colors.push(c.r * s, c.g * s, c.b * s);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  return g;
}

function part(w: number, h: number, d: number, hex: number, x: number, y: number, z: number): THREE.Mesh {
  const m = new THREE.Mesh(box(w, h, d, hex), sharedMat);
  m.position.set(x, y, z);
  return m;
}

interface Model {
  group: THREE.Group;
  legs: THREE.Group[];
}

// 在 group 里加一条腿（顶部为髋关节枢轴，绕 z 轴前后摆）。返回枢轴。
function addLeg(g: THREE.Group, legs: THREE.Group[], hex: number, x: number, z: number, legH: number, legW: number): void {
  const pivot = new THREE.Group();
  pivot.position.set(x, legH, z);
  pivot.add(part(legW, legH, legW, hex, 0, -legH / 2, 0));
  g.add(pivot);
  legs.push(pivot);
}

// 模型本地朝 +X 为正面；x=体长、z=体宽、y 从脚(0)向上。
function buildModel(kind: MobKind): Model {
  const g = new THREE.Group();
  const legs: THREE.Group[] = [];

  if (kind === 'pig') {
    const pink = 0xe8a3a3;
    const lH = 0.25;
    g.add(part(0.85, 0.42, 0.55, pink, 0, lH + 0.21, 0)); // 身
    g.add(part(0.36, 0.4, 0.46, pink, 0.5, lH + 0.25, 0)); // 头
    g.add(part(0.14, 0.16, 0.28, 0xcf8585, 0.7, lH + 0.18, 0)); // 猪鼻
    for (const [x, z] of [[0.28, 0.18], [0.28, -0.18], [-0.28, 0.18], [-0.28, -0.18]] as const)
      addLeg(g, legs, pink, x, z, lH, 0.16);
  } else if (kind === 'cow') {
    const brown = 0x53412e;
    const lH = 0.5;
    g.add(part(0.95, 0.55, 0.6, brown, 0, lH + 0.27, 0)); // 身
    g.add(part(0.4, 0.45, 0.5, brown, 0.58, lH + 0.35, 0)); // 头
    g.add(part(0.16, 0.2, 0.42, 0x6f5b45, 0.82, lH + 0.28, 0)); // 口鼻
    g.add(part(0.1, 0.12, 0.1, 0xd9cbb0, 0.58, lH + 0.62, 0.2)); // 角
    g.add(part(0.1, 0.12, 0.1, 0xd9cbb0, 0.58, lH + 0.62, -0.2));
    for (const [x, z] of [[0.32, 0.2], [0.32, -0.2], [-0.32, 0.2], [-0.32, -0.2]] as const)
      addLeg(g, legs, 0x46372a, x, z, lH, 0.18);
  } else if (kind === 'sheep') {
    const wool = 0xeae6de;
    const face = 0x9a8d7d;
    const lH = 0.45;
    g.add(part(0.85, 0.62, 0.68, wool, 0, lH + 0.31, 0)); // 蓬松羊毛身
    g.add(part(0.3, 0.36, 0.36, face, 0.52, lH + 0.34, 0)); // 头
    for (const [x, z] of [[0.28, 0.2], [0.28, -0.2], [-0.28, 0.2], [-0.28, -0.2]] as const)
      addLeg(g, legs, face, x, z, lH, 0.15);
  } else {
    // chicken
    const white = 0xefefef;
    const lH = 0.2;
    g.add(part(0.3, 0.3, 0.28, white, 0, lH + 0.15, 0)); // 身
    g.add(part(0.2, 0.22, 0.2, white, 0.18, lH + 0.34, 0)); // 头
    g.add(part(0.12, 0.07, 0.1, 0xe0892a, 0.32, lH + 0.32, 0)); // 喙
    g.add(part(0.04, 0.09, 0.13, 0xc0392b, 0.16, lH + 0.46, 0)); // 冠
    g.add(part(0.34, 0.22, 0.06, white, 0, lH + 0.16, 0.16)); // 翅
    g.add(part(0.34, 0.22, 0.06, white, 0, lH + 0.16, -0.16));
    for (const [x, z] of [[0.04, 0.09], [0.04, -0.09]] as const)
      addLeg(g, legs, 0xe0a020, x, z, lH, 0.07);
  }
  return { group: g, legs };
}

export class MobRenderer {
  private readonly models = new Map<Mob, Model & { phase: number }>();
  constructor(private readonly scene: THREE.Scene) {}

  sync(mobs: Mob[]): void {
    const present = new Set(mobs);
    for (const [mob, m] of this.models) {
      if (!present.has(mob)) {
        this.scene.remove(m.group);
        this.models.delete(mob);
      }
    }
    for (const mob of mobs) {
      let m = this.models.get(mob);
      if (!m) {
        const built = buildModel(mob.kind);
        this.scene.add(built.group);
        m = { ...built, phase: 0 };
        this.models.set(mob, m);
      }
      m.group.position.set(mob.pos.x, mob.pos.y, mob.pos.z);
      m.group.rotation.y = -mob.yaw; // 模型本地 +X 为正面
      const speed = Math.hypot(mob.vel.x, mob.vel.z);
      const moving = speed > 0.002;
      if (moving) m.phase += 0.35;
      const swing = moving ? Math.sin(m.phase) * 0.6 : 0;
      m.legs.forEach((leg, i) => {
        leg.rotation.z = i % 2 === 0 ? swing : -swing;
      });
    }
  }

  clear(): void {
    for (const [, m] of this.models) this.scene.remove(m.group);
    this.models.clear();
  }
}
