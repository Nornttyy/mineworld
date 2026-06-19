import * as THREE from 'three';
import type { Mob, MobKind } from '../core/entity/mob';
import { bodyTexture, headTexture } from './mobTextures';

// 把生物渲染成 MC 风的盒状模型。每只一套自己的材质(便于受击红闪 + 个体染色)，颜色 + 假面光烤进顶点
// (与体素世界同为 unlit)。走路摆腿 + 头点动 + 尾巴甩 + 鸡啄地 + 呼吸起伏；朝移动方向；受击 0.5s 红闪。
// BoxGeometry 面序 +X,-X,+Y(顶),-Y(底),+Z,-Z；顶亮、底暗、侧中，模仿世界的烤光(加深→更立体)。
const FACE_SHADE = [0.8, 0.8, 1.0, 0.42, 0.8, 0.8];
const EYE_C = 0x141414;
const SWING_RATE = 3.4; // 摆腿快慢(弧度/走过一格)，按位移推进 → 不随帧率变、不太快

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

function part(g: THREE.Group, mat: THREE.Material, w: number, h: number, d: number, hex: number, x: number, y: number, z: number): THREE.Mesh {
  const m = new THREE.Mesh(box(w, h, d, hex), mat);
  m.position.set(x, y, z);
  g.add(m);
  return m;
}

interface Model {
  group: THREE.Group;
  legs: THREE.Group[];
  mats: THREE.MeshBasicMaterial[]; // 全部可染色材质(纯色 + 贴图身体) → 受击染红 / 个体微染色
  base: THREE.Color; // 个体基础色(平时用，受击换红)
  head?: THREE.Mesh;
  tail?: THREE.Mesh;
  headY: number; // 头的原始 y(动画基准)
}

function addLeg(g: THREE.Group, mat: THREE.Material, legs: THREE.Group[], hex: number, x: number, z: number, legH: number, legW: number, footHex?: number): void {
  const pivot = new THREE.Group();
  pivot.position.set(x, legH, z);
  part(pivot, mat, legW, legH, legW, hex, 0, -legH / 2, 0);
  if (footHex !== undefined) part(pivot, mat, legW + 0.02, 0.06, legW + 0.02, footHex, 0, -legH + 0.03, 0);
  g.add(pivot);
  legs.push(pivot);
}

// 模型本地朝 +X 为正面；x=体长、z=体宽、y 从脚(0)向上。
function buildModel(kind: MobKind): Model {
  const g = new THREE.Group();
  const legs: THREE.Group[] = [];
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true });
  const bodyMat = new THREE.MeshBasicMaterial({ map: bodyTexture(kind), vertexColors: true });
  const mats: THREE.MeshBasicMaterial[] = [mat, bodyMat]; // 全部可染色材质(受击红闪/个体色一起作用)
  const P = (w: number, h: number, d: number, hex: number, x: number, y: number, z: number): THREE.Mesh => part(g, mat, w, h, d, hex, x, y, z);
  // 身体用贴图材质(白顶点 → 贴图本色 × 烤光 × 个体染色)
  const B = (w: number, h: number, d: number, x: number, y: number, z: number): THREE.Mesh => part(g, bodyMat, w, h, d, 0xffffff, x, y, z);
  // 另起一块贴图材质的部件(如僵尸/骷髅的头)，登记进 mats 以便一起染色
  const T = (tex: THREE.Texture, w: number, h: number, d: number, x: number, y: number, z: number): THREE.Mesh => {
    const tm = new THREE.MeshBasicMaterial({ map: tex, vertexColors: true });
    mats.push(tm);
    return part(g, tm, w, h, d, 0xffffff, x, y, z);
  };
  let head: THREE.Mesh | undefined;
  let tail: THREE.Mesh | undefined;

  if (kind === 'pig') {
    const pink = 0xeaa6a0, dk = 0xd98c8c, lH = 0.26;
    B(0.9, 0.5, 0.6, 0, lH + 0.25, 0); // 身(贴图)
    head = P(0.42, 0.44, 0.5, pink, 0.55, lH + 0.28, 0); // 头
    P(0.16, 0.16, 0.3, dk, 0.78, lH + 0.2, 0); // 猪鼻
    P(0.05, 0.09, 0.08, EYE_C, 0.77, lH + 0.36, 0.14);
    P(0.05, 0.09, 0.08, EYE_C, 0.77, lH + 0.36, -0.14);
    P(0.14, 0.12, 0.04, dk, 0.5, lH + 0.52, 0.2); // 耳
    P(0.14, 0.12, 0.04, dk, 0.5, lH + 0.52, -0.2);
    tail = P(0.1, 0.1, 0.1, dk, -0.46, lH + 0.36, 0); // 尾
    for (const [x, z] of [[0.3, 0.2], [0.3, -0.2], [-0.32, 0.2], [-0.32, -0.2]] as const) addLeg(g, mat, legs, dk, x, z, lH, 0.16);
  } else if (kind === 'cow') {
    const brown = 0x4f3b2d, white = 0xe7ddcd, horn = 0xdcd0b8, lH = 0.52;
    B(1.0, 0.6, 0.62, 0, lH + 0.3, 0); // 身(贴图：棕底白斑)
    head = P(0.42, 0.46, 0.5, brown, 0.6, lH + 0.38, 0); // 头
    P(0.3, 0.28, 0.52, white, 0.72, lH + 0.3, 0); // 白脸
    P(0.16, 0.18, 0.42, 0x6f5a45, 0.84, lH + 0.28, 0); // 口鼻
    P(0.05, 0.1, 0.09, EYE_C, 0.82, lH + 0.46, 0.16);
    P(0.05, 0.1, 0.09, EYE_C, 0.82, lH + 0.46, -0.16);
    P(0.1, 0.13, 0.1, horn, 0.6, lH + 0.66, 0.2); // 角
    P(0.1, 0.13, 0.1, horn, 0.6, lH + 0.66, -0.2);
    P(0.16, 0.1, 0.34, 0xefb6c4, -0.18, lH - 0.02, 0); // 乳房
    tail = P(0.1, 0.12, 0.1, brown, -0.5, lH + 0.4, 0); // 尾
    for (const [x, z] of [[0.34, 0.21], [0.34, -0.21], [-0.34, 0.21], [-0.34, -0.21]] as const) addLeg(g, mat, legs, brown, x, z, lH, 0.18, white);
  } else if (kind === 'sheep') {
    const wool = 0xeceae3, face = 0x47403a, lH = 0.46;
    B(0.9, 0.66, 0.74, 0, lH + 0.34, 0); // 羊毛身(贴图)
    P(0.5, 0.34, 0.42, wool, 0.4, lH + 0.6, 0); // 头顶绒
    head = P(0.28, 0.36, 0.34, face, 0.56, lH + 0.36, 0); // 脸
    P(0.04, 0.08, 0.07, EYE_C, 0.71, lH + 0.4, 0.11);
    P(0.04, 0.08, 0.07, EYE_C, 0.71, lH + 0.4, -0.11);
    P(0.1, 0.1, 0.04, face, 0.52, lH + 0.56, 0.18); // 耳
    P(0.1, 0.1, 0.04, face, 0.52, lH + 0.56, -0.18);
    for (const [x, z] of [[0.28, 0.22], [0.28, -0.22], [-0.3, 0.22], [-0.3, -0.22]] as const) addLeg(g, mat, legs, face, x, z, lH, 0.15);
  } else if (kind === 'zombie') {
    const skin = 0x5a8f4a, pants = 0x2a2f55, lH = 0.82; // 绿皮 + 深裤
    B(0.5, 0.66, 0.28, 0, lH + 0.33, 0); // 躯干(贴图:破青衫)
    head = T(headTexture('zombie')!, 0.44, 0.44, 0.44, 0, lH + 0.88, 0); // 头(贴图:绿烂皮)
    P(0.07, 0.1, 0.08, EYE_C, 0.22, lH + 0.94, 0.11); // 眼
    P(0.07, 0.1, 0.08, EYE_C, 0.22, lH + 0.94, -0.11);
    P(0.06, 0.05, 0.22, 0x32562a, 0.22, lH + 0.8, 0); // 嘴(暗)
    P(0.6, 0.18, 0.18, skin, 0.34, lH + 0.56, 0.3); // 双臂前伸(僵尸招牌姿势)
    P(0.6, 0.18, 0.18, skin, 0.34, lH + 0.56, -0.3);
    for (const [x, z] of [[0, 0.12], [0, -0.12]] as const) addLeg(g, mat, legs, pants, x, z, lH, 0.2);
  } else if (kind === 'skeleton') {
    const bone = 0xd8d8cc, lH = 0.84; // 骨白、瘦
    B(0.32, 0.6, 0.2, 0, lH + 0.3, 0); // 胸骨(贴图:肋骨)
    head = T(headTexture('skeleton')!, 0.42, 0.42, 0.42, 0, lH + 0.81, 0); // 头骨(贴图:裂骨)
    P(0.07, 0.09, 0.08, EYE_C, 0.21, lH + 0.87, 0.1); // 眼窝(深)
    P(0.07, 0.09, 0.08, EYE_C, 0.21, lH + 0.87, -0.1);
    P(0.05, 0.05, 0.06, 0x8a8a7e, 0.22, lH + 0.79, 0); // 鼻孔
    P(0.05, 0.05, 0.22, 0x7a7a70, 0.21, lH + 0.72, 0); // 牙列/嘴
    // 持弓姿势：右臂前伸握弓、左臂垂体侧；弓=竖木条 + 上下弓梢 + 弓弦，立在身前
    P(0.46, 0.13, 0.13, bone, 0.26, lH + 0.34, 0.16); // 右臂前伸(握弓手)
    P(0.1, 0.58, 0.1, bone, 0, lH + 0.3, -0.22); // 左臂垂体侧
    const wood = 0x6b4a2b;
    P(0.06, 0.62, 0.06, wood, 0.52, lH + 0.32, 0.16); // 弓臂(竖)
    P(0.06, 0.14, 0.06, wood, 0.47, lH + 0.62, 0.16); // 上弓梢(回折)
    P(0.06, 0.14, 0.06, wood, 0.47, lH + 0.02, 0.16); // 下弓梢
    P(0.02, 0.6, 0.02, 0xeae6d8, 0.55, lH + 0.32, 0.16); // 弓弦
    for (const [x, z] of [[0, 0.1], [0, -0.1]] as const) addLeg(g, mat, legs, bone, x, z, lH, 0.12);
  } else {
    const white = 0xf2f2f2, beak = 0xe7951f, red = 0xcc3b30, lH = 0.22;
    B(0.34, 0.34, 0.3, -0.02, lH + 0.17, 0); // 身(贴图)
    P(0.32, 0.24, 0.06, white, -0.18, lH + 0.2, 0.16); // 翅
    P(0.32, 0.24, 0.06, white, -0.18, lH + 0.2, -0.16);
    tail = P(0.18, 0.26, 0.16, white, -0.34, lH + 0.34, 0); // 尾(上翘)
    head = P(0.22, 0.24, 0.2, white, 0.2, lH + 0.4, 0); // 头
    P(0.04, 0.06, 0.05, EYE_C, 0.31, lH + 0.46, 0.07);
    P(0.04, 0.06, 0.05, EYE_C, 0.31, lH + 0.46, -0.07);
    P(0.13, 0.08, 0.1, beak, 0.36, lH + 0.4, 0); // 喙
    P(0.05, 0.1, 0.14, red, 0.18, lH + 0.55, 0); // 冠
    P(0.06, 0.08, 0.06, red, 0.32, lH + 0.32, 0); // 肉垂
    for (const [x, z] of [[0.06, 0.09], [0.06, -0.09]] as const) addLeg(g, mat, legs, beak, x, z, lH, 0.07);
  }

  // 个体差异：每只大小/色调略不同，不像复制粘贴
  const v = 0.9 + Math.random() * 0.22; // 0.9~1.12
  g.scale.setScalar(v);
  const b = 0.9 + Math.random() * 0.16; // 亮度
  const warm = (Math.random() - 0.5) * 0.06; // 暖/冷
  const base = new THREE.Color(Math.min(1, b + warm), b, Math.max(0, b - warm));
  return { group: g, legs, mats, base, head, tail, headY: head ? head.position.y : 0 };
}

const FLASH = new THREE.Color(0xff5a5a);

export class MobRenderer {
  private readonly models = new Map<Mob, Model & { phase: number; t: number }>();
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
        m = { ...built, phase: 0, t: Math.random() * 10 }; // t 错开 → 不同步呼吸
        this.models.set(mob, m);
      }
      m.t += dt;
      m.group.position.set(mob.pos.x, mob.pos.y, mob.pos.z);
      m.group.rotation.y = -mob.yaw;
      const tint = mob.hurtCooldown > 0 ? FLASH : m.base; // 受击红闪，平时个体色
      for (const mt of m.mats) mt.color.copy(tint);

      const speed = Math.hypot(mob.vel.x, mob.vel.z); // 格/tick
      const moving = speed > 0.002;
      if (moving) m.phase += speed * 20 * dt * SWING_RATE;

      // 摆腿
      const swing = moving ? Math.sin(m.phase) * 0.6 : 0;
      m.legs.forEach((leg, i) => (leg.rotation.z = i % 2 === 0 ? swing : -swing));

      // 头：走路点头 / 站着呼吸或鸡啄地
      if (m.head) {
        if (moving) {
          m.head.position.y = m.headY + Math.sin(m.phase * 2) * 0.015;
          m.head.rotation.z = Math.sin(m.phase) * 0.05;
        } else if (mob.kind === 'chicken') {
          const peck = Math.max(0, Math.sin(m.t * 1.6)); // 周期低头啄地
          m.head.rotation.z = -peck * 0.5;
          m.head.position.y = m.headY - peck * 0.04;
        } else {
          m.head.position.y = m.headY + Math.sin(m.t * 1.4) * 0.012; // 呼吸起伏
          m.head.rotation.z = 0;
        }
      }
      // 尾巴甩
      if (m.tail) m.tail.rotation.z = Math.sin(m.t * 4 + m.phase) * 0.3;
    }
  }

  clear(): void {
    for (const [, m] of this.models) this.scene.remove(m.group);
    this.models.clear();
  }
}
