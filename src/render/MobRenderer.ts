import * as THREE from 'three';
import type { Mob, MobKind } from '../core/entity/mob';
import { MOB_SKIN_PARTS, MOB_SKIN_SIZE, mobTexture, skinFaceRect, type SkinFace, type SkinPart } from './mobTextures';
import { creeperFuseVisual } from './creeperVisual';

// 把生物渲染成 MC 风的盒状模型。每只一套自己的材质(便于受击红闪 + 个体染色)，颜色 + 假面光烤进顶点
// (与体素世界同为 unlit)。走路摆腿 + 头点动 + 尾巴甩 + 鸡啄地 + 呼吸起伏；朝移动方向；受击 0.5s 红闪。
// BoxGeometry 面序 +X,-X,+Y(顶),-Y(底),+Z,-Z；顶亮、底暗、侧中，模仿世界的烤光(加深→更立体)。
const FACE_SHADE = [0.8, 0.8, 1.0, 0.42, 0.8, 0.8];
const SWING_RATE = 3.4; // 摆腿快慢(弧度/走过一格)，按位移推进 → 不随帧率变、不太快

const BOX_SKIN_FACES: SkinFace[] = ['right', 'left', 'top', 'bottom', 'front', 'back'];

function box(w: number, h: number, d: number, hex: number, skin?: SkinPart): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  const c = new THREE.Color(hex);
  const colors: number[] = [];
  for (let f = 0; f < 6; f++) {
    const s = FACE_SHADE[f];
    for (let v = 0; v < 4; v++) colors.push(c.r * s, c.g * s, c.b * s);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  if (skin) {
    const uv = g.attributes.uv as THREE.BufferAttribute;
    for (let face = 0; face < BOX_SKIN_FACES.length; face++) {
      const rect = skinFaceRect(skin, BOX_SKIN_FACES[face]);
      const u0 = rect.x / MOB_SKIN_SIZE;
      const u1 = (rect.x + rect.w) / MOB_SKIN_SIZE;
      const v0 = 1 - (rect.y + rect.h) / MOB_SKIN_SIZE;
      const v1 = 1 - rect.y / MOB_SKIN_SIZE;
      const offset = face * 4;
      uv.setXY(offset, u0, v1);
      uv.setXY(offset + 1, u1, v1);
      uv.setXY(offset + 2, u0, v0);
      uv.setXY(offset + 3, u1, v0);
    }
    uv.needsUpdate = true;
  }
  return g;
}

function part(g: THREE.Group, mat: THREE.Material, w: number, h: number, d: number, hex: number, x: number, y: number, z: number, skin?: SkinPart): THREE.Mesh {
  const m = new THREE.Mesh(box(w, h, d, hex, skin), mat);
  m.position.set(x, y, z);
  g.add(m);
  return m;
}

interface Model {
  group: THREE.Group;
  legs: THREE.Group[];
  arms: THREE.Group[];
  mats: THREE.MeshBasicMaterial[]; // 全部可染色材质(纯色 + 像素皮肤) → 受击染红 / 个体微染色
  base: THREE.Color; // 个体基础色(平时用，受击换红)
  head?: THREE.Mesh;
  tail?: THREE.Mesh;
  headY: number; // 头的原始 y(动画基准)
}

function addLeg(g: THREE.Group, mat: THREE.Material, legs: THREE.Group[], x: number, z: number, legH: number, legW: number): void {
  const pivot = new THREE.Group();
  pivot.position.set(x, legH, z);
  part(pivot, mat, legW, legH, legW, 0xffffff, 0, -legH / 2, 0, MOB_SKIN_PARTS.leg);
  g.add(pivot);
  legs.push(pivot);
}

function addArm(
  g: THREE.Group,
  mat: THREE.Material,
  arms: THREE.Group[],
  x: number,
  y: number,
  z: number,
  length: number,
  width: number,
  rotationZ = 0,
): THREE.Group {
  const pivot = new THREE.Group();
  pivot.position.set(x, y, z);
  pivot.rotation.z = rotationZ;
  part(pivot, mat, width, length, width, 0xffffff, 0, -length / 2, 0, MOB_SKIN_PARTS.arm);
  g.add(pivot);
  arms.push(pivot);
  return pivot;
}

// 模型本地朝 +X 为正面；x=体长、z=体宽、y 从脚(0)向上。
function buildModel(kind: MobKind): Model {
  const g = new THREE.Group();
  const legs: THREE.Group[] = [];
  const arms: THREE.Group[] = [];
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true });
  const skinMat = new THREE.MeshBasicMaterial({ map: mobTexture(kind), vertexColors: true });
  const mats: THREE.MeshBasicMaterial[] = [mat, skinMat];
  const P = (w: number, h: number, d: number, hex: number, x: number, y: number, z: number): THREE.Mesh => part(g, mat, w, h, d, hex, x, y, z);
  const S = (skin: SkinPart, w: number, h: number, d: number, x: number, y: number, z: number): THREE.Mesh =>
    part(g, skinMat, w, h, d, 0xffffff, x, y, z, skin);
  let head: THREE.Mesh | undefined;
  let tail: THREE.Mesh | undefined;

  if (kind === 'pig') {
    const lH = 0.26;
    S(MOB_SKIN_PARTS.animalBody, 0.9, 0.5, 0.6, 0, lH + 0.25, 0);
    head = S(MOB_SKIN_PARTS.head, 0.44, 0.44, 0.5, 0.55, lH + 0.28, 0);
    S(MOB_SKIN_PARTS.snout, 0.16, 0.15, 0.3, 0.79, lH + 0.2, 0);
    P(0.14, 0.12, 0.04, 0xd98c8c, 0.5, lH + 0.52, 0.2);
    P(0.14, 0.12, 0.04, 0xd98c8c, 0.5, lH + 0.52, -0.2);
    tail = S(MOB_SKIN_PARTS.tail, 0.1, 0.14, 0.1, -0.47, lH + 0.36, 0);
    for (const [x, z] of [[0.3, 0.2], [0.3, -0.2], [-0.32, 0.2], [-0.32, -0.2]] as const) addLeg(g, skinMat, legs, x, z, lH, 0.16);
  } else if (kind === 'cow') {
    const horn = 0xdcd0b8, lH = 0.52;
    S(MOB_SKIN_PARTS.animalBody, 1.0, 0.6, 0.62, 0, lH + 0.3, 0);
    head = S(MOB_SKIN_PARTS.head, 0.45, 0.48, 0.52, 0.6, lH + 0.4, 0);
    S(MOB_SKIN_PARTS.snout, 0.18, 0.2, 0.42, 0.86, lH + 0.28, 0);
    P(0.09, 0.14, 0.09, horn, 0.61, lH + 0.7, 0.2);
    P(0.09, 0.14, 0.09, horn, 0.61, lH + 0.7, -0.2);
    P(0.16, 0.1, 0.34, 0xefb6c4, -0.18, lH - 0.02, 0); // 乳房
    tail = S(MOB_SKIN_PARTS.tail, 0.1, 0.32, 0.1, -0.51, lH + 0.38, 0);
    for (const [x, z] of [[0.34, 0.21], [0.34, -0.21], [-0.34, 0.21], [-0.34, -0.21]] as const) addLeg(g, skinMat, legs, x, z, lH, 0.18);
  } else if (kind === 'sheep') {
    const wool = 0xeceae3, face = 0x47403a, lH = 0.46;
    S(MOB_SKIN_PARTS.animalBody, 0.94, 0.7, 0.76, 0, lH + 0.36, 0);
    P(0.5, 0.34, 0.42, wool, 0.4, lH + 0.6, 0); // 头顶绒
    head = S(MOB_SKIN_PARTS.head, 0.3, 0.38, 0.36, 0.57, lH + 0.38, 0);
    P(0.1, 0.1, 0.04, face, 0.52, lH + 0.56, 0.18); // 耳
    P(0.1, 0.1, 0.04, face, 0.52, lH + 0.56, -0.18);
    for (const [x, z] of [[0.28, 0.22], [0.28, -0.22], [-0.3, 0.22], [-0.3, -0.22]] as const) addLeg(g, skinMat, legs, x, z, lH, 0.15);
  } else if (kind === 'zombie') {
    const lH = 0.82;
    S(MOB_SKIN_PARTS.humanBody, 0.28, 0.66, 0.5, 0, lH + 0.33, 0);
    head = S(MOB_SKIN_PARTS.head, 0.44, 0.44, 0.44, 0, lH + 0.88, 0);
    addArm(g, skinMat, arms, 0.08, lH + 0.63, 0.35, 0.62, 0.18, 1.28);
    addArm(g, skinMat, arms, 0.08, lH + 0.63, -0.35, 0.62, 0.18, 1.28);
    for (const [, z] of [[0, 0.12], [0, -0.12]] as const) addLeg(g, skinMat, legs, 0, z, lH, 0.2);
  } else if (kind === 'skeleton') {
    const lH = 0.84;
    S(MOB_SKIN_PARTS.humanBody, 0.2, 0.62, 0.34, 0, lH + 0.31, 0);
    head = S(MOB_SKIN_PARTS.head, 0.42, 0.42, 0.42, 0, lH + 0.81, 0);
    // 持弓姿势：右臂前伸握弓、左臂垂体侧；弓=竖木条 + 上下弓梢 + 弓弦，立在身前
    addArm(g, skinMat, arms, 0.04, lH + 0.58, 0.24, 0.58, 0.11, 1.18);
    addArm(g, skinMat, arms, 0, lH + 0.58, -0.24, 0.58, 0.11, 0.12);
    const wood = 0x6b4a2b;
    P(0.06, 0.62, 0.06, wood, 0.52, lH + 0.32, 0.16); // 弓臂(竖)
    P(0.06, 0.14, 0.06, wood, 0.47, lH + 0.62, 0.16); // 上弓梢(回折)
    P(0.06, 0.14, 0.06, wood, 0.47, lH + 0.02, 0.16); // 下弓梢
    P(0.02, 0.6, 0.02, 0xeae6d8, 0.55, lH + 0.32, 0.16); // 弓弦
    for (const [, z] of [[0, 0.1], [0, -0.1]] as const) addLeg(g, skinMat, legs, 0, z, lH, 0.12);
  } else if (kind === 'husk') {
    const lH = 0.82;
    S(MOB_SKIN_PARTS.humanBody, 0.28, 0.66, 0.5, 0, lH + 0.33, 0);
    head = S(MOB_SKIN_PARTS.head, 0.44, 0.44, 0.44, 0, lH + 0.88, 0);
    addArm(g, skinMat, arms, 0.08, lH + 0.63, 0.35, 0.62, 0.18, 1.28);
    addArm(g, skinMat, arms, 0.08, lH + 0.63, -0.35, 0.62, 0.18, 1.28);
    for (const [, z] of [[0, 0.12], [0, -0.12]] as const) addLeg(g, skinMat, legs, 0, z, lH, 0.2);
  } else if (kind === 'creeper') {
    const lH = 0.36;
    S(MOB_SKIN_PARTS.humanBody, 0.34, 0.82, 0.5, 0, lH + 0.5, 0);
    head = S(MOB_SKIN_PARTS.head, 0.48, 0.48, 0.48, 0, lH + 1.12, 0);
    for (const [x, z] of [[0.16, 0.13], [0.16, -0.13], [-0.16, 0.13], [-0.16, -0.13]] as const) addLeg(g, skinMat, legs, x, z, lH, 0.16);
  } else {
    const beak = 0xe7951f, red = 0xcc3b30, lH = 0.22;
    S(MOB_SKIN_PARTS.animalBody, 0.34, 0.34, 0.3, -0.02, lH + 0.17, 0);
    S(MOB_SKIN_PARTS.wing, 0.32, 0.24, 0.06, -0.18, lH + 0.2, 0.17);
    S(MOB_SKIN_PARTS.wing, 0.32, 0.24, 0.06, -0.18, lH + 0.2, -0.17);
    tail = S(MOB_SKIN_PARTS.tail, 0.18, 0.26, 0.16, -0.34, lH + 0.34, 0);
    head = S(MOB_SKIN_PARTS.head, 0.22, 0.24, 0.2, 0.2, lH + 0.4, 0);
    P(0.13, 0.08, 0.1, beak, 0.36, lH + 0.4, 0); // 喙
    P(0.05, 0.1, 0.14, red, 0.18, lH + 0.55, 0); // 冠
    P(0.06, 0.08, 0.06, red, 0.32, lH + 0.32, 0); // 肉垂
    for (const [x, z] of [[0.06, 0.09], [0.06, -0.09]] as const) addLeg(g, skinMat, legs, x, z, lH, 0.07);
  }

  // 个体差异：每只大小/色调略不同，不像复制粘贴
  const v = 0.9 + Math.random() * 0.22; // 0.9~1.12
  g.scale.setScalar(v);
  const b = 0.9 + Math.random() * 0.16; // 亮度
  const warm = (Math.random() - 0.5) * 0.06; // 暖/冷
  const base = new THREE.Color(Math.min(1, b + warm), b, Math.max(0, b - warm));
  return { group: g, legs, arms, mats, base, head, tail, headY: head ? head.position.y : 0 };
}

const FLASH = new THREE.Color(0xff5a5a);
const WHITE = new THREE.Color(1, 1, 1); // 苦力怕引信闪白

function disposeModel(model: Model): void {
  model.group.traverse((object) => {
    if (object instanceof THREE.Mesh) object.geometry.dispose();
  });
  for (const material of model.mats) material.dispose();
}

export class MobRenderer {
  private readonly models = new Map<Mob, Model & { phase: number; t: number; baseScale: number; bright: number; dispYaw: number; swingAmt: number }>();
  constructor(private readonly scene: THREE.Scene) {}

  /** lightAt: 环境亮度采样(0..1,来自区块粗光照网格)——生物在洞里/夜里按所在处光照变暗(MC 实体光照)。
   *  不传(测试/旧调用)=恒 1(全亮,旧行为)。 */
  sync(mobs: Mob[], dt: number, lightAt?: (x: number, y: number, z: number) => number): void {
    const present = new Set(mobs);
    for (const [mob, m] of this.models) {
      if (!present.has(mob)) {
        this.scene.remove(m.group);
        disposeModel(m);
        this.models.delete(mob);
      }
    }
    for (const mob of mobs) {
      let m = this.models.get(mob);
      if (!m) {
        const built = buildModel(mob.kind);
        this.scene.add(built.group);
        // baseScale = 建模时的个体大小(g.scale)；苦力怕引信鼓胀时在它基础上放大、引信熄灭即复原
        m = { ...built, phase: 0, t: Math.random() * 10, baseScale: built.group.scale.x, bright: 1, dispYaw: mob.yaw, swingAmt: 0 }; // t 错开 → 不同步呼吸
        this.models.set(mob, m);
      }
      m.t += dt;
      // 转身平滑：显示朝向按最短弧插值逼近逻辑 yaw(原来直接跳 → 转身瞬移,僵硬感主因之一)
      let dy = -mob.yaw - m.dispYaw;
      dy = ((dy + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
      m.dispYaw += dy * Math.min(1, dt * 10);
      m.group.rotation.y = m.dispYaw;
      // 落体/跳跃前后倾(按竖直速度,轻微)
      m.group.rotation.z = Math.max(-0.18, Math.min(0.22, -mob.vel.y * 2.2));
      // 环境光：采样生物半身高处的亮度,帧间平滑(跨 4 格光照 cell 不跳变)
      const wantB = lightAt ? lightAt(mob.pos.x, mob.pos.y + 0.6, mob.pos.z) : 1;
      m.bright += (wantB - m.bright) * Math.min(1, dt * 10);
      const tint = mob.hurtCooldown > 0 ? FLASH : m.base; // 受击红闪，平时个体色
      for (const mt of m.mats) mt.color.copy(tint).multiplyScalar(m.bright);
      // 苦力怕引信（同 MC 引爆征兆）：越接近引爆越【闪白】+【鼓胀变大】，二者同步脉动；
      // fuse 归 0(走远/被墙挡)→ whiteness=0、swell=1 → 颜色与大小下一帧自动复原。
      const fv = creeperFuseVisual(mob.kind === 'creeper' ? mob.fuse : 0);
      if (fv.whiteness > 0) {
        const flash = tint.clone().lerp(WHITE, fv.whiteness);
        for (const mt of m.mats) mt.color.copy(flash).multiplyScalar(m.bright);
      }
      m.group.scale.setScalar(m.baseScale * fv.swell); // 鼓胀（非苦力怕/未点燃时 swell=1 → 恒为个体原大小）

      const speed = Math.hypot(mob.vel.x, mob.vel.z); // 格/tick
      const moving = speed > 0.002;
      if (moving) m.phase += speed * 20 * dt * SWING_RATE;

      // 摆腿：幅度渐入渐出(原来起步/停步瞬间从 0 跳满幅 → 僵硬)；走路时身体随步伐轻微起伏
      m.swingAmt += ((moving ? 1 : 0) - m.swingAmt) * Math.min(1, dt * 8);
      const swing = Math.sin(m.phase) * 0.6 * m.swingAmt;
      m.legs.forEach((leg, i) => (leg.rotation.z = i % 2 === 0 ? swing : -swing));
      if (mob.kind === 'zombie' || mob.kind === 'husk') {
        // 双臂保持前伸，但随步伐轻微错相摆动，不再是一整根静态横条。
        m.arms.forEach((arm, i) => (arm.rotation.z = 1.28 + (i ? -1 : 1) * Math.sin(m.phase) * 0.08 * m.swingAmt));
      } else if (mob.kind === 'skeleton') {
        if (m.arms[0]) m.arms[0].rotation.z = 1.18 + Math.sin(m.phase) * 0.06 * m.swingAmt;
        if (m.arms[1]) m.arms[1].rotation.z = 0.12 - swing * 0.45;
      }
      m.group.position.set(mob.pos.x, mob.pos.y + Math.abs(Math.sin(m.phase)) * 0.035 * m.swingAmt, mob.pos.z);

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
          m.head.rotation.y = Math.sin(m.t * 0.55) * 0.4 * (1 - m.swingAmt); // 待机张望(走路时归零)
        }
      }
      // 尾巴甩
      if (m.tail) m.tail.rotation.z = Math.sin(m.t * 4 + m.phase) * 0.3;
    }
  }

  clear(): void {
    for (const [, m] of this.models) {
      this.scene.remove(m.group);
      disposeModel(m);
    }
    this.models.clear();
  }
}
