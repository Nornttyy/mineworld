import * as THREE from 'three';
import { BLOCKS, TORCH } from '../core/blocks/registry';
import type { LightingQuality } from '../core/settings';
import { iconUrl } from '../ui/itemIcons';

// 第一人称手臂 + 手持物：独立的覆盖层场景/相机，画在世界之上（清深度，不被遮挡）。
// 挖/放时摆臂，走路时轻微晃动。手持方块=3D 立方体；手持物品(工具/食物/材料)=平面图标精灵；空手只露手臂。

export type HeldKind = 'block' | 'sprite' | 'none';

export interface HandBlockMaterialProfile {
  roughness: number;
  specularIntensity: number;
}

/** 手持块只分少量可靠材质档；绝不把泥土/草统一涂成高光塑料。 */
export function handBlockMaterialProfile(id: number): HandBlockMaterialProfile {
  const name = BLOCKS[id]?.name ?? '';
  if (['obsidian'].includes(name)) return { roughness: 0.38, specularIntensity: 0.62 };
  if (['iron_block', 'diamond_block', 'quartz_block'].includes(name))
    return { roughness: 0.54, specularIntensity: 0.5 };
  if (name.includes('log') || ['oak_planks', 'crafting_table'].includes(name))
    return { roughness: 0.8, specularIntensity: 0.34 };
  return { roughness: 0.91, specularIntensity: 0.26 };
}

export interface HandLightingState {
  skyLevel: number;
  blockLevel: number;
  skyDarken: number;
  sunEnabled: boolean;
  skyColor: THREE.Color;
  sunDirectionWorld: THREE.Vector3;
  cameraQuaternion: THREE.Quaternion;
}

// 手持物如何渲染：注册表里的方块画 3D 立方体；有图标的物品(id≥256)画平面精灵；其余只露手臂。
export function heldRenderKind(id: number | null): HeldKind {
  if (id === null || id <= 0) return 'none';
  // 火把不是立方体(世界里画成细十字),手持也用图标精灵——别走方块分支画成 3D 立方体(火把无图集面→采错纹理,"拿着的贴图不对")
  if (id === TORCH) return iconUrl(id) ? 'sprite' : 'none';
  if (BLOCKS[id]) return 'block';
  if (iconUrl(id)) return 'sprite';
  return 'none';
}

// 挥击姿态：在静止姿上叠加的平移(格)+旋转(弧度，按 mulPose 顺序 Y→Z→X→Y 应用)。
export interface SwingPose {
  tx: number;
  ty: number;
  tz: number;
  ry1: number;
  rz: number;
  rx: number;
  ry2: number;
}

// 1:1 复刻 MC ItemInHandRenderer 的右手挥击：sqrt(t) 时序(出手快收手稳)，
// 平移往中间+前方+上下颠，主旋转是绕 X 的大幅 −80° 下劈。t∈[0,1]，t=0 即静止(净零旋转)。
const SWING_POS_SCALE = 0.8; // 适配本手臂的平移尺度（MC 静止位移略大）
export function mcSwingPose(t: number): SwingPose {
  const D = Math.PI / 180;
  const ft = Math.sin(Math.sqrt(Math.max(0, t)) * Math.PI); // 主弧线项 sin(√t·π)
  const ft2 = Math.sin(t * t * Math.PI); // Y 旋转项 sin(t²·π)
  return {
    tx: -0.4 * ft * SWING_POS_SCALE, // 往中间(右手向左)
    ty: 0.2 * Math.sin(Math.sqrt(Math.max(0, t)) * Math.PI * 2) * SWING_POS_SCALE, // 上下颠(双峰)
    tz: -0.2 * Math.sin(t * Math.PI) * SWING_POS_SCALE, // 往画面里(前方)
    ry1: (45 + ft2 * -20) * D,
    rz: ft * -20 * D,
    rx: ft * -80 * D, // 主下劈：绕 X 最多 −80°
    ry2: -45 * D,
  };
}

const ATLAS_COLS = 4;
const ATLAS_ROWS = 10; // 4×10=40 槽（18-25 下界, 26-31 群系, 32-36 储存/钻石）；与 gen_textures.py、mesher、DropRenderer 同步
const TILE_PX = 16;
const EPS = 0.01 / (TILE_PX * ATLAS_COLS);
// 面亮度（同方块）：+X,-X,+Y,-Y,+Z,-Z
const SHADE = [0.6, 0.6, 1.0, 0.5, 0.8, 0.8];
const SWING_TIME = 0.3; // 一次摆臂 0.3 秒（同 MC）
const X_AXIS = new THREE.Vector3(1, 0, 0); // 视图右轴（主下劈绕它）
const Y_AXIS = new THREE.Vector3(0, 1, 0); // 视图上轴

// 把面亮度烤进盒子顶点色，给纯色盒子一点立体感
function shadedBox(w: number, h: number, d: number, color: number): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  const c = new THREE.Color(color);
  const cols: number[] = [];
  for (let f = 0; f < 6; f++) {
    for (let v = 0; v < 4; v++) cols.push(c.r * SHADE[f], c.g * SHADE[f], c.b * SHADE[f]);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  return g;
}

// 手持方块的小立方体（图集贴图 + 面亮度顶点色）
function blockCube(id: number, size: number): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(size, size, size);
  const faces = BLOCKS[id].faces; // +X,-X,+Y,-Y,+Z,-Z，与 BoxGeometry 面序一致
  const uv = g.attributes.uv as THREE.BufferAttribute;
  const cols: number[] = [];
  for (let f = 0; f < 6; f++) {
    const t = faces[f];
    const col = t % ATLAS_COLS;
    const row = Math.floor(t / ATLAS_COLS);
    const uMin = col / ATLAS_COLS + EPS;
    const uMax = (col + 1) / ATLAS_COLS - EPS;
    const vMin = 1 - (row + 1) / ATLAS_ROWS + EPS;
    const vMax = 1 - row / ATLAS_ROWS - EPS;
    const o = f * 4;
    uv.setXY(o + 0, uMin, vMax);
    uv.setXY(o + 1, uMax, vMax);
    uv.setXY(o + 2, uMin, vMin);
    uv.setXY(o + 3, uMax, vMin);
    for (let v = 0; v < 4; v++) cols.push(SHADE[f], SHADE[f], SHADE[f]);
  }
  uv.needsUpdate = true;
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  return g;
}

export class FirstPersonHand {
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(70, 1, 0.01, 10);
  private atlas: THREE.Texture;
  private readonly root = new THREE.Group(); // 手臂+手持物的根（摆臂/晃动作用于它）
  private readonly arm: THREE.Mesh;
  private item: THREE.Mesh | null = null;
  private itemId: number | null = null;
  private readonly spriteTex = new Map<number, THREE.Texture>(); // 物品图标纹理缓存（按 id）
  private swingT = 0; // 0=不摆；(0,1]=摆臂进度
  private wantSwing = false;
  private bobPhase = 0;
  private eating = false; // 是否在吃东西（手持食物送嘴边抖动）
  private eatT = 0; // 吃东西计时（驱动抖动）
  private hurtT = 0; // 受击抖动余量 1→0（被攻击时置 1，逐帧衰减；驱动手快速抖一下）
  private bright = 1; // 环境亮度(0..1)：洞里/夜里手臂+手持物一起变暗(MC 实体光照)，setBrightness 平滑喂入
  private underwater = false;
  private lightingQuality: LightingQuality = 'off';
  private readonly skyLight = new THREE.HemisphereLight(0xdcecff, 0x182031, 0);
  private readonly skyFill = new THREE.AmbientLight(0xdcecff, 0);
  private readonly blockLight = new THREE.AmbientLight(0xff8d3a, 0);
  private readonly sunLight = new THREE.DirectionalLight(0xffffff, 0);
  private readonly invViewQ = new THREE.Quaternion();
  private readonly viewSun = new THREE.Vector3();
  private readonly viewUp = new THREE.Vector3();
  private readonly coolSky = new THREE.Color().setRGB(0.68, 0.82, 1.0);
  private readonly lowSun = new THREE.Color().setRGB(1.38, 0.58, 0.16);
  private readonly noonSun = new THREE.Color().setRGB(1.08, 1.0, 0.88);
  private readonly underwaterTint = new THREE.Color().setRGB(0.62, 0.84, 0.96);
  private readonly neutralTint = new THREE.Color(1, 1, 1);

  constructor(atlas: THREE.Texture) {
    this.atlas = atlas;
    // 手臂：肤色盒子，从右下角斜插入画面
    this.arm = new THREE.Mesh(
      shadedBox(0.14, 0.5, 0.14, 0xe8b07a),
      new THREE.MeshBasicMaterial({ vertexColors: true }),
    );
    this.arm.position.set(0, -0.22, 0); // 盒子主体在根的下方
    this.root.add(this.arm);
    this.root.position.set(0.5, -0.45, -0.7); // 右下、稍前
    this.root.rotation.set(0.2, -0.5, 0.45); // 斜插入
    this.scene.add(this.root);
    this.sunLight.castShadow = false;
    this.scene.add(
      this.skyLight,
      this.skyFill,
      this.blockLight,
      this.sunLight,
      this.sunLight.target,
    );
  }

  resize(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  // 物品图标纹理（按 id 缓存）：最近邻、关 mipmap、保像素硬边。
  private itemTexture(id: number): THREE.Texture | null {
    const cached = this.spriteTex.get(id);
    if (cached) return cached;
    const url = iconUrl(id);
    if (!url) return null;
    const tex = new THREE.TextureLoader().load(url);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.SRGBColorSpace;
    this.spriteTex.set(id, tex);
    return tex;
  }

  // 设置手持物（null=空手，只露手臂）：方块→3D 立方体；物品→平面图标精灵。
  /** 环境亮度(由 Game 每帧采玩家眼睛处光照传入)：乘到手臂/手持材质色上。内部平滑,跨光照格不跳变。 */
  setBrightness(b: number): void {
    this.bright += (b - this.bright) * 0.12;
    this.applyViewTint();
  }

  /** 覆盖层不经过世界后处理，因此在这里施加相同的近距离水体光谱过滤。 */
  setUnderwater(underwater: boolean): void {
    if (underwater === this.underwater) return;
    this.underwater = underwater;
    this.applyViewTint();
  }

  /** 光影档手持块使用与世界一致的冷天光、暖火光和太阳方向；off 保留原版固定面亮度。 */
  setLightingQuality(q: LightingQuality): void {
    if (q === this.lightingQuality) return;
    this.lightingQuality = q;
    if (q === 'off') {
      this.skyLight.intensity = 0;
      this.skyFill.intensity = 0;
      this.blockLight.intensity = 0;
      this.sunLight.intensity = 0;
    }
    const id = this.itemId;
    this.itemId = null;
    this.setHeld(id);
  }

  setLighting(state: HandLightingState): void {
    if (this.lightingQuality === 'off') return;
    const mcBright = (level: number): number => {
      const f = THREE.MathUtils.clamp(level, 0, 15) / 15;
      return f / (4 - 3 * f);
    };
    const sky = state.sunEnabled ? mcBright(state.skyLevel - state.skyDarken) : 0;
    const block = mcBright(state.blockLevel);
    const approach = (current: number, target: number): number =>
      current + (target - current) * 0.14;
    this.skyLight.color.copy(state.skyColor).lerp(this.coolSky, 0.25);
    if (this.underwater) this.skyLight.color.multiply(this.underwaterTint);
    this.skyLight.groundColor.setRGB(0.25, 0.3, 0.4);
    // 世界 shader 在无光处仍留 3–4% 轮廓；手持块保持同样下限，并平滑跨越粗光照格。
    this.skyLight.intensity = approach(this.skyLight.intensity, Math.max(0.035, sky * 1.05));
    this.skyFill.color.copy(this.skyLight.color);
    this.skyFill.intensity = approach(this.skyFill.intensity, Math.max(0.012, sky * 0.32));
    this.blockLight.color.setRGB(1.0, 0.56, 0.25);
    this.blockLight.intensity = approach(this.blockLight.intensity, block * 0.62);

    this.invViewQ.copy(state.cameraQuaternion).invert();
    this.viewSun.copy(state.sunDirectionWorld).applyQuaternion(this.invViewQ).normalize();
    this.viewUp.set(0, 1, 0).applyQuaternion(this.invViewQ).normalize();
    this.sunLight.position.copy(this.viewSun).multiplyScalar(5);
    this.sunLight.target.position.set(0, 0, 0);
    this.skyLight.position.copy(this.viewUp);
    const sunHeight = THREE.MathUtils.clamp(state.sunDirectionWorld.y * 3, 0, 1);
    this.sunLight.color.copy(this.lowSun).lerp(this.noonSun, sunHeight);
    if (this.underwater) this.sunLight.color.multiply(this.underwaterTint);
    const sunAccess = state.sunEnabled ? THREE.MathUtils.smoothstep(state.skyLevel, 11, 15) : 0;
    const sunUp = THREE.MathUtils.smoothstep(state.sunDirectionWorld.y, 0.02, 0.2);
    this.sunLight.intensity = approach(
      this.sunLight.intensity,
      sunAccess * sunUp * 1.55 * (this.underwater ? 0.62 : 1.0),
    );
  }

  setHeld(id: number | null): void {
    if (id === this.itemId) return;
    this.itemId = id;
    if (this.item) {
      this.root.remove(this.item);
      this.item.geometry.dispose();
      if (Array.isArray(this.item.material)) {
        for (const material of this.item.material) material.dispose();
      } else {
        this.item.material.dispose();
      }
      this.item = null;
    }
    const kind = heldRenderKind(id);
    if (kind === 'block' && id !== null) {
      const profile = handBlockMaterialProfile(id);
      const material =
        this.lightingQuality === 'off'
          ? new THREE.MeshBasicMaterial({ map: this.atlas, vertexColors: true })
          : new THREE.MeshPhysicalMaterial({
              map: this.atlas,
              roughness: profile.roughness,
              metalness: 0,
              ior: 1.35,
              specularIntensity: profile.specularIntensity,
            });
      this.item = new THREE.Mesh(blockCube(id, 0.32), material);
      this.item.position.set(-0.02, 0.16, 0.04); // 握在手臂上端
      this.item.rotation.set(-0.1, 0.6, 0.1);
      this.root.add(this.item);
    } else if (kind === 'sprite' && id !== null) {
      // 物品：用图标贴一个平面，斜握在手里（同 MC 手持物品=平面精灵）
      const tex = this.itemTexture(id);
      if (tex) {
        this.item = new THREE.Mesh(
          new THREE.PlaneGeometry(0.34, 0.34),
          new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
          }),
        );
        this.item.position.set(0.04, 0.2, 0.04);
        this.item.rotation.set(0, -0.35, 0.35); // 斜一点，像握着柄
        this.root.add(this.item);
      }
    }
    this.applyViewTint();
  }

  private applyViewTint(): void {
    const tint = this.underwater ? this.underwaterTint : this.neutralTint;
    const armMaterial = this.arm.material as THREE.MeshBasicMaterial;
    armMaterial.color.copy(tint).multiplyScalar(this.bright);
    if (!this.item || Array.isArray(this.item.material)) return;
    if (this.item.material instanceof THREE.MeshPhysicalMaterial) {
      // 物理材质的亮度来自灯光，只乘水体色；避免与环境光再重复变暗。
      this.item.material.color.copy(tint);
    } else if (this.item.material instanceof THREE.MeshBasicMaterial) {
      this.item.material.color.copy(tint).multiplyScalar(this.bright);
    }
  }

  // 触发摆臂（挖到方块/放方块时调用；按住挖时每帧调用以连续摆）
  swing(): void {
    this.wantSwing = true;
  }

  // 触发受击抖动（玩家被攻击时调用）：手在视野里快速抖一下，与闪红光同步。
  hurtShake(): void {
    this.hurtT = 1;
  }

  // 切换方块图集（材质风格切换）：换图集并重建当前手持(若是方块)以套用。
  setAtlas(tex: THREE.Texture): void {
    this.atlas = tex;
    const id = this.itemId;
    this.itemId = null; // 强制 setHeld 重建
    this.setHeld(id);
  }

  // 吃东西状态（手持食物时由游戏层每帧设置）：true=把食物送到嘴边快速抖动。
  setEating(active: boolean): void {
    this.eating = active;
    if (!active) this.eatT = 0;
  }

  update(dt: number, walkSpeed: number): void {
    // 摆臂进度
    if (this.wantSwing && this.swingT === 0) this.swingT = 0.0001;
    if (this.swingT > 0) {
      this.swingT += dt / SWING_TIME;
      if (this.swingT >= 1) this.swingT = this.wantSwing ? 0.0001 : 0;
    }
    this.wantSwing = false;

    // 走路晃动
    this.bobPhase += dt * walkSpeed * 7;
    const bobX = Math.cos(this.bobPhase) * 0.012 * Math.min(1, walkSpeed);
    const bobY = Math.abs(Math.sin(this.bobPhase)) * 0.012 * Math.min(1, walkSpeed);

    // 挥击：静止基姿 + MC 挥臂。主下劈绕【视图】X 轴(世界轴)做，保证永远朝正下-前方挥，
    // 不被静止基姿的偏航带歪；再叠加一点朝中间的偏转。
    const sp = mcSwingPose(this.swingT);
    this.root.position.set(0.42 + bobX + sp.tx, -0.28 + bobY + sp.ty, -0.72 + sp.tz);
    this.root.rotation.set(0.1, -0.5, 0.4); // 静止基姿（手臂斜插入）
    this.root.rotateOnWorldAxis(X_AXIS, sp.rx); // 主下劈：绕视图 X，最多 −80°
    this.root.rotateOnWorldAxis(Y_AXIS, sp.rz); // 轻微朝中间偏

    // 吃东西：把食物抬到嘴边(往中间+往脸前) + 高频抖动（叠加在静止/挥击之上）。
    if (this.eating) {
      this.eatT += dt;
      const j = Math.sin(this.eatT * 30); // 快速抖
      this.root.position.x += -0.18 + j * 0.015; // 往中间靠
      this.root.position.y += 0.16 + j * 0.02; // 抬到嘴边 + 上下抖
      this.root.position.z += 0.18; // 凑近脸
      this.root.rotateX(0.4 + j * 0.12); // 前倾 + 抖
      this.root.rotateZ(-0.25);
    }

    // 受击抖动：高频快速抖一下，幅度随余量平方衰减（约 0.25s 抖完），叠加在最终姿态上。
    if (this.hurtT > 0) {
      this.hurtT = Math.max(0, this.hurtT - dt * 4);
      const k = this.hurtT * this.hurtT;
      const h = Math.sin(this.hurtT * 45);
      this.root.position.x += h * 0.05 * k;
      this.root.position.y += -0.06 * k; // 手往下一缩
      this.root.rotateZ(h * 0.35 * k);
    }
  }
}
