import * as THREE from 'three';
import type { Mob, MobKind } from '../core/entity/mob';

// 把生物渲染成 MC 风的盒状模型。每只一套自己的材质(便于受击红闪)，颜色 + 假面光烤进顶点
// (与体素世界同为 unlit)。走路摆腿、朝移动方向、受击 0.5s 红闪。
// BoxGeometry 面序 +X,-X,+Y(顶),-Y(底),+Z,-Z；顶亮、底暗、侧中，模仿世界的烤光。
const FACE_SHADE = [0.84, 0.84, 1.0, 0.55, 0.84, 0.84];
const EYE_C = 0x141414; // 眼睛(近黑)
const SWING_RATE = 3.4; // 摆腿快慢(弧度/走过一格)，按实际位移推进 → 不随帧率变、也不会太快

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

function part(g: THREE.Group, mat: THREE.Material, w: number, h: number, d: number, hex: number, x: number, y: number, z: number): void {
  const m = new THREE.Mesh(box(w, h, d, hex), mat);
  m.position.set(x, y, z);
  g.add(m);
}

interface Model {
  group: THREE.Group;
  legs: THREE.Group[];
  mat: THREE.MeshBasicMaterial; // 整只共用 → 受击时整体染红
}

// 在 group 里加一条腿（顶部为髋关节枢轴，绕 z 轴前后摆）。
function addLeg(g: THREE.Group, mat: THREE.Material, legs: THREE.Group[], hex: number, x: number, z: number, legH: number, legW: number, footHex?: number): void {
  const pivot = new THREE.Group();
  pivot.position.set(x, legH, z);
  part(pivot, mat, legW, legH, legW, hex, 0, -legH / 2, 0);
  if (footHex !== undefined) part(pivot, mat, legW + 0.02, 0.06, legW + 0.02, footHex, 0, -legH + 0.03, 0); // 脚/蹄
  g.add(pivot);
  legs.push(pivot);
}

// 模型本地朝 +X 为正面；x=体长、z=体宽、y 从脚(0)向上。
function buildModel(kind: MobKind): Model {
  const g = new THREE.Group();
  const legs: THREE.Group[] = [];
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true });
  const P = (w: number, h: number, d: number, hex: number, x: number, y: number, z: number): void => part(g, mat, w, h, d, hex, x, y, z);

  if (kind === 'pig') {
    const pink = 0xeaa6a0;
    const dk = 0xd98c8c;
    const lH = 0.26;
    P(0.9, 0.5, 0.6, pink, 0, lH + 0.25, 0); // 身
    P(0.42, 0.44, 0.5, pink, 0.55, lH + 0.28, 0); // 头
    P(0.16, 0.16, 0.3, dk, 0.78, lH + 0.2, 0); // 猪鼻
    P(0.05, 0.09, 0.08, EYE_C, 0.77, lH + 0.36, 0.14); // 眼
    P(0.05, 0.09, 0.08, EYE_C, 0.77, lH + 0.36, -0.14);
    P(0.14, 0.12, 0.04, dk, 0.5, lH + 0.52, 0.2); // 耳
    P(0.14, 0.12, 0.04, dk, 0.5, lH + 0.52, -0.2);
    P(0.1, 0.1, 0.1, dk, -0.46, lH + 0.36, 0); // 尾根
    for (const [x, z] of [[0.3, 0.2], [0.3, -0.2], [-0.32, 0.2], [-0.32, -0.2]] as const)
      addLeg(g, mat, legs, dk, x, z, lH, 0.16);
  } else if (kind === 'cow') {
    const brown = 0x4f3b2d;
    const white = 0xe7ddcd;
    const horn = 0xdcd0b8;
    const lH = 0.52;
    P(1.0, 0.6, 0.62, brown, 0, lH + 0.3, 0); // 身
    P(0.5, 0.34, 0.64, white, -0.05, lH + 0.34, 0); // 白斑(背中)
    P(0.42, 0.46, 0.5, brown, 0.6, lH + 0.38, 0); // 头
    P(0.3, 0.28, 0.52, white, 0.72, lH + 0.3, 0); // 白脸
    P(0.16, 0.18, 0.42, 0x6f5a45, 0.84, lH + 0.28, 0); // 口鼻
    P(0.05, 0.1, 0.09, EYE_C, 0.82, lH + 0.46, 0.16); // 眼
    P(0.05, 0.1, 0.09, EYE_C, 0.82, lH + 0.46, -0.16);
    P(0.1, 0.13, 0.1, horn, 0.6, lH + 0.66, 0.2); // 角
    P(0.1, 0.13, 0.1, horn, 0.6, lH + 0.66, -0.2);
    P(0.16, 0.1, 0.34, 0xefb6c4, -0.18, lH - 0.02, 0); // 乳房
    P(0.1, 0.12, 0.1, brown, -0.5, lH + 0.4, 0); // 尾根
    for (const [x, z] of [[0.34, 0.21], [0.34, -0.21], [-0.34, 0.21], [-0.34, -0.21]] as const)
      addLeg(g, mat, legs, brown, x, z, lH, 0.18, white);
  } else if (kind === 'sheep') {
    const wool = 0xeceae3;
    const face = 0x47403a;
    const lH = 0.46;
    P(0.9, 0.66, 0.74, wool, 0, lH + 0.34, 0); // 蓬松羊毛身
    P(0.5, 0.34, 0.42, wool, 0.4, lH + 0.6, 0); // 头顶绒毛
    P(0.28, 0.36, 0.34, face, 0.56, lH + 0.36, 0); // 脸
    P(0.04, 0.08, 0.07, EYE_C, 0.71, lH + 0.4, 0.11); // 眼
    P(0.04, 0.08, 0.07, EYE_C, 0.71, lH + 0.4, -0.11);
    P(0.1, 0.1, 0.04, face, 0.52, lH + 0.56, 0.18); // 耳
    P(0.1, 0.1, 0.04, face, 0.52, lH + 0.56, -0.18);
    for (const [x, z] of [[0.28, 0.22], [0.28, -0.22], [-0.3, 0.22], [-0.3, -0.22]] as const)
      addLeg(g, mat, legs, face, x, z, lH, 0.15);
  } else {
    // chicken
    const white = 0xf2f2f2;
    const beak = 0xe7951f;
    const red = 0xcc3b30;
    const lH = 0.22;
    P(0.34, 0.34, 0.3, white, -0.02, lH + 0.17, 0); // 身
    P(0.32, 0.24, 0.06, white, -0.18, lH + 0.2, 0.16); // 翅
    P(0.32, 0.24, 0.06, white, -0.18, lH + 0.2, -0.16);
    P(0.18, 0.26, 0.16, white, -0.34, lH + 0.34, 0); // 尾(上翘)
    P(0.22, 0.24, 0.2, white, 0.2, lH + 0.4, 0); // 头
    P(0.04, 0.06, 0.05, EYE_C, 0.31, lH + 0.46, 0.07); // 眼
    P(0.04, 0.06, 0.05, EYE_C, 0.31, lH + 0.46, -0.07);
    P(0.13, 0.08, 0.1, beak, 0.36, lH + 0.4, 0); // 喙
    P(0.05, 0.1, 0.14, red, 0.18, lH + 0.55, 0); // 冠
    P(0.06, 0.08, 0.06, red, 0.32, lH + 0.32, 0); // 肉垂
    for (const [x, z] of [[0.06, 0.09], [0.06, -0.09]] as const)
      addLeg(g, mat, legs, beak, x, z, lH, 0.07);
  }
  return { group: g, legs, mat };
}

const FLASH = new THREE.Color(0xff5a5a); // 受击红闪(乘到顶点色上)
const NORMAL = new THREE.Color(0xffffff);

export class MobRenderer {
  private readonly models = new Map<Mob, Model & { phase: number }>();
  constructor(private readonly scene: THREE.Scene) {}

  sync(mobs: Mob[], dt: number): void {
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
      m.mat.color.copy(mob.hurtCooldown > 0 ? FLASH : NORMAL); // 受击红闪
      const speed = Math.hypot(mob.vel.x, mob.vel.z); // 格/tick
      const moving = speed > 0.002;
      if (moving) m.phase += speed * 20 * dt * SWING_RATE; // 按实际位移推进(格/秒×秒×弧度/格)，慢而自然
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
