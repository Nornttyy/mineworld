import * as THREE from 'three';
import { BLOCKS, TORCH } from '../core/blocks/registry';
import { BOW } from '../core/items/items';
import type { LightingQuality } from '../core/settings';
import { iconUrl } from '../ui/itemIcons';
import { asset } from '../asset';
import { heldItemGeometry, type SpriteAlpha } from './heldItemGeometry';
import {
  atlasUvInset,
  ATLAS_COLUMNS,
  ATLAS_ROWS,
  CLASSIC_ATLAS_TILE_PX,
} from '../core/blocks/atlasLayout';

// 第一人称手臂 + 手持物：独立的覆盖层场景/相机，画在世界之上（清深度，不被遮挡）。
// 挖/放时摆臂，走路时轻微晃动。方块是立方体；物品按图标透明轮廓挤出薄侧壁。

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

export interface HeldSpritePose {
  size: number;
  position: readonly [number, number, number];
  rotation: readonly [number, number, number];
}

export type BowChargeStage = -1 | 0 | 1 | 2;

/** 待机=-1；蓄力时按拉弦距离切换三张像素帧。 */
export function bowChargeStage(progress: number | null): BowChargeStage {
  if (progress === null || !Number.isFinite(progress) || progress < 0) return -1;
  const p = THREE.MathUtils.clamp(progress, 0, 1);
  if (p < 0.34) return 0;
  if (p < 0.68) return 1;
  return 2;
}

/** Verified in the official Java 26.3 generated/handheld/bow resource models.
 * JSON translations are sixteenths of a block; our geometry is centred already.
 * Each icon's opaque pixels set its visible proportions, not a made-up size by type. */
export function heldSpritePose(_id: number): HeldSpritePose {
  return {
    size: 0.68,
    position: [1.13 / 16, 3.2 / 16, 1.13 / 16],
    rotation: [0, -Math.PI / 2, (25 * Math.PI) / 180],
  };
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

// Classic right-hand swing curve. Resource transforms are verified for 26.3;
// runtime contact frames and the empty-hand rig still need visual comparison.
const SWING_POS_SCALE = 1;
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

const [EPS_U, EPS_V] = atlasUvInset(CLASSIC_ATLAS_TILE_PX);
// 面亮度（同方块）：+X,-X,+Y,-Y,+Z,-Z
const SHADE = [0.6, 0.6, 1.0, 0.5, 0.8, 0.8];
const SWING_TIME = 0.3; // Existing swing timing; 26.3 contact frames are not measured.
const X_AXIS = new THREE.Vector3(1, 0, 0); // 视图右轴（主下劈绕它）
const Y_AXIS = new THREE.Vector3(0, 1, 0); // 视图上轴
const Z_AXIS = new THREE.Vector3(0, 0, 1);
const IDLE_ROTATION = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.1, -0.5, 0.4));
// Historical Java equip rate, interpolated in render time. See the 26.3 audit
// for what has (resource transforms) and has not (runtime timing) been verified.
const EQUIP_RATE = 0.4 * 20;
const EQUIP_SWAP_THRESHOLD = 0.1;

/** Preserve the ordered Y→Z→X→Y local rotation chain, not Euler addition. */
export function mcSwingQuaternion(pose: SwingPose, out = new THREE.Quaternion()): THREE.Quaternion {
  const q = new THREE.Quaternion();
  out.setFromAxisAngle(Y_AXIS, pose.ry1);
  out.multiply(q.setFromAxisAngle(Z_AXIS, pose.rz));
  out.multiply(q.setFromAxisAngle(X_AXIS, pose.rx));
  return out.multiply(q.setFromAxisAngle(Y_AXIS, pose.ry2));
}

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

/** Standard 64×64 Steve skin: right arm (40,16), sleeve (40,32).
 * The sleeve adds 0.25 model pixels on each side and keeps the same UV islands. */
export function rightArmGeometry(sleeve = false): THREE.BufferGeometry {
  const u = 40,
    v = sleeve ? 32 : 16,
    inflate = sleeve ? 0.5 : 0;
  const geometry = shadedBox((4 + inflate) / 16, (12 + inflate) / 16, (4 + inflate) / 16, 0xffffff);
  const uv = geometry.getAttribute('uv');
  const faces = [
    [u, v + 4, 4, 12],
    [u + 8, v + 4, 4, 12],
    [u + 4, v, 4, 4],
    [u + 8, v, 4, 4],
    [u + 4, v + 4, 4, 12],
    [u + 12, v + 4, 4, 12],
  ];
  for (const [face, [x, y, w, h]] of faces.entries()) {
    uv.setXY(face * 4, x / 64, 1 - y / 64);
    uv.setXY(face * 4 + 1, (x + w) / 64, 1 - y / 64);
    uv.setXY(face * 4 + 2, x / 64, 1 - (y + h) / 64);
    uv.setXY(face * 4 + 3, (x + w) / 64, 1 - (y + h) / 64);
  }
  return geometry;
}

// 手持方块的小立方体（图集贴图 + 面亮度顶点色）
function blockCube(id: number, size: number): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(size, size, size);
  const faces = BLOCKS[id].faces; // +X,-X,+Y,-Y,+Z,-Z，与 BoxGeometry 面序一致
  const uv = g.attributes.uv as THREE.BufferAttribute;
  const cols: number[] = [];
  for (let f = 0; f < 6; f++) {
    const t = faces[f];
    const col = t % ATLAS_COLUMNS;
    const row = Math.floor(t / ATLAS_COLUMNS);
    const uMin = col / ATLAS_COLUMNS + EPS_U;
    const uMax = (col + 1) / ATLAS_COLUMNS - EPS_U;
    const vMin = 1 - (row + 1) / ATLAS_ROWS + EPS_V;
    const vMax = 1 - row / ATLAS_ROWS - EPS_V;
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
  private readonly sleeve: THREE.Mesh;
  private item: THREE.Mesh | null = null;
  private itemId: number | null = null;
  private requestedItemId: number | null = null;
  private hasRequestedItem = false;
  private equipped = 1;
  private readonly swingRotation = new THREE.Quaternion();
  private readonly spriteTex = new Map<string, THREE.Texture>(); // 物品图标纹理缓存（物品+动画帧）
  private readonly spriteMasks = new WeakMap<THREE.Texture, SpriteAlpha>();
  private swingT = 0; // 0=不摆；(0,1]=摆臂进度
  private wantSwing = false;
  private bobPhase = 0;
  private eating = false; // 是否在吃东西（手持食物送嘴边抖动）
  private eatT = 0; // 吃东西计时（驱动抖动）
  private bowPull: number | null = null; // null=未拉弓；0..1=连续蓄力进度
  private bowStage: BowChargeStage = -1;
  private bowT = 0;
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

  constructor(atlas: THREE.Texture, skinTexture?: THREE.Texture) {
    this.atlas = atlas;
    const skin =
      skinTexture ??
      (typeof document === 'undefined'
        ? new THREE.Texture()
        : new THREE.TextureLoader().load(asset('textures/player/steve.png')));
    skin.magFilter = THREE.NearestFilter;
    skin.minFilter = THREE.NearestFilter;
    skin.generateMipmaps = false;
    skin.colorSpace = THREE.SRGBColorSpace;
    // Keep skin and sleeve on the same empty-hand pose; held items have their own display transforms.
    this.arm = new THREE.Mesh(
      rightArmGeometry(),
      new THREE.MeshBasicMaterial({ map: skin, vertexColors: true }),
    );
    this.sleeve = new THREE.Mesh(
      rightArmGeometry(true),
      new THREE.MeshBasicMaterial({
        map: skin,
        vertexColors: true,
        transparent: true,
        alphaTest: 0.5,
      }),
    );
    this.arm.add(this.sleeve);
    // The skin's shoulder is +Y and its fist is -Y. Point the fist toward the
    // upper-left visible tip; the shoulder/sleeve must leave the bottom-right
    // of the view. Without this local turn the blue shoulder faces the player
    // and the skin-coloured hand is below the viewport. Sleeve inherits it.
    this.arm.rotation.z = Math.PI;
    this.arm.position.set(0, -0.22, 0);
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

  // 物品图标纹理：像素包使用最近邻过滤，保持原生硬边。
  private itemTexture(id: number, variant?: string): THREE.Texture | null {
    const key = `${id}:${variant ?? ''}`;
    const cached = this.spriteTex.get(key);
    if (cached) return cached;
    const url = iconUrl(id, variant);
    if (!url) return null;
    const tex = new THREE.TextureLoader().load(url, (loaded) => this.refreshSpriteGeometry(loaded));
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.SRGBColorSpace;
    this.spriteTex.set(key, tex);
    return tex;
  }

  private spriteGeometry(texture: THREE.Texture, size: number): THREE.BufferGeometry {
    let mask = this.spriteMasks.get(texture);
    const image = texture.image as HTMLImageElement | HTMLCanvasElement | ImageBitmap | undefined;
    if (!mask && image && typeof document !== 'undefined') {
      const width = 'naturalWidth' in image ? image.naturalWidth : image.width;
      const height = 'naturalHeight' in image ? image.naturalHeight : image.height;
      if (width > 0 && height > 0) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          try {
            ctx.drawImage(image, 0, 0);
            const rgba = ctx.getImageData(0, 0, width, height).data;
            const alpha = new Uint8Array(width * height);
            for (let i = 0; i < alpha.length; i++) alpha[i] = rgba[i * 4 + 3];
            mask = { width, height, alpha };
            this.spriteMasks.set(texture, mask);
          } catch {
            /* Cross-origin/custom textures retain front and back until readable. */
          }
        }
      }
    }
    return heldItemGeometry(mask ?? { width: 1, height: 1, alpha: [0] }, size);
  }

  private refreshSpriteGeometry(texture: THREE.Texture): void {
    if (!this.item || this.itemId === null || Array.isArray(this.item.material)) return;
    if (
      !(this.item.material instanceof THREE.MeshBasicMaterial) ||
      this.item.material.map !== texture
    )
      return;
    if (heldRenderKind(this.itemId) !== 'sprite') return;
    const geometry = this.spriteGeometry(texture, heldSpritePose(this.itemId).size);
    this.item.geometry.dispose();
    this.item.geometry = geometry;
  }

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
    this.rebuildHeld(this.itemId);
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
    this.requestedItemId = id;
    if (this.hasRequestedItem) return;
    this.hasRequestedItem = true;
    this.rebuildHeld(id);
  }

  private rebuildHeld(id: number | null): void {
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
    // Normal held items render on their own; the skin arm is the empty-hand path.
    this.arm.visible = kind === 'none';
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
      // Java 26.3 block/block.json firstperson_righthand: [0,45,0], scale .4.
      this.item = new THREE.Mesh(blockCube(id, 0.4), material);
      this.item.rotation.y = Math.PI / 4;
      this.root.add(this.item);
    } else if (kind === 'sprite' && id !== null) {
      // Use the existing icon pixels for front/back and exposed outline side walls.
      const variant = id === BOW && this.bowStage >= 0 ? `pulling_${this.bowStage}` : undefined;
      const tex = this.itemTexture(id, variant);
      if (tex) {
        const pose = heldSpritePose(id);
        this.item = new THREE.Mesh(
          this.spriteGeometry(tex, pose.size),
          new THREE.MeshBasicMaterial({
            map: tex,
            transparent: true,
            alphaTest: 0.5,
            side: THREE.DoubleSide,
            vertexColors: true,
          }),
        );
        this.item.position.set(...pose.position);
        this.item.rotation.set(...pose.rotation);
        this.root.add(this.item);
      }
    }
    this.applyViewTint();
  }

  private applyViewTint(): void {
    const tint = this.underwater ? this.underwaterTint : this.neutralTint;
    const armMaterial = this.arm.material as THREE.MeshBasicMaterial;
    armMaterial.color.copy(tint).multiplyScalar(this.bright);
    (this.sleeve.material as THREE.MeshBasicMaterial).color.copy(armMaterial.color);
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
    // iconUrl 会随材质包切目录；旧缓存必须清空，否则同一个 id 仍显示切换前的物品材质。
    for (const texture of this.spriteTex.values()) texture.dispose();
    this.spriteTex.clear();
    this.rebuildHeld(this.itemId);
  }

  // 吃东西状态（手持食物时由游戏层每帧设置）：true=把食物送到嘴边快速抖动。
  setEating(active: boolean): void {
    this.eating = active;
    if (!active) this.eatT = 0;
  }

  /** 更新拉弓贴图和连续手部姿态；null 立即恢复未搭箭的待机弓。 */
  setBowCharge(progress: number | null): void {
    const pull =
      progress === null || !Number.isFinite(progress)
        ? null
        : THREE.MathUtils.clamp(progress, 0, 1);
    const nextStage = bowChargeStage(pull);
    this.bowPull = pull;
    if (pull === null) this.bowT = 0;
    if (nextStage === this.bowStage) return;
    this.bowStage = nextStage;
    if (this.itemId !== BOW || !this.item || Array.isArray(this.item.material)) return;
    if (!(this.item.material instanceof THREE.MeshBasicMaterial)) return;
    const variant = nextStage >= 0 ? `pulling_${nextStage}` : undefined;
    const texture = this.itemTexture(BOW, variant);
    if (!texture) return;
    this.item.material.map = texture;
    this.item.material.needsUpdate = true;
    this.refreshSpriteGeometry(texture);
  }

  update(dt: number, walkSpeed: number): void {
    // Keep the old item while lowering, swap out of the main view, then lift.
    // Repeated per-frame setHeld calls and fast scrolling never restart the dip.
    const changing = this.requestedItemId !== this.itemId;
    const desired = changing ? 0 : 1;
    this.equipped += THREE.MathUtils.clamp(
      desired - this.equipped,
      -EQUIP_RATE * dt,
      EQUIP_RATE * dt,
    );
    if (changing && this.equipped < EQUIP_SWAP_THRESHOLD) this.rebuildHeld(this.requestedItemId);
    // 摆臂进度
    if (this.wantSwing && this.swingT === 0) this.swingT = 0.0001;
    if (this.swingT > 0) {
      this.swingT += dt / SWING_TIME;
      if (this.swingT >= 1) this.swingT = this.wantSwing ? this.swingT % 1 : 0;
    }
    this.wantSwing = false;

    // 走路晃动
    this.bobPhase += dt * walkSpeed * 7;
    const bobX = Math.cos(this.bobPhase) * 0.012 * Math.min(1, walkSpeed);
    const bobY = Math.abs(Math.sin(this.bobPhase)) * 0.012 * Math.min(1, walkSpeed);

    // Held items use a camera-local equip anchor then the resource model display
    // transform. Keep the old empty-arm base separate so it cannot rotate items twice.
    const sp = mcSwingPose(this.swingT);
    const holding = this.item !== null;
    this.root.position.set(
      (holding ? 0.56 : 0.42) + bobX + sp.tx,
      (holding ? -0.52 : -0.28) + bobY + sp.ty - 0.6 * (1 - this.equipped),
      -0.72 + sp.tz,
    );
    mcSwingQuaternion(sp, this.swingRotation);
    this.root.quaternion.copy(this.swingRotation);
    if (!holding) this.root.quaternion.multiply(IDLE_ROTATION);

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

    // 拉弓时平滑抬手、向画面中间收紧。满弓只有极轻的张力抖动，不干扰瞄准。
    if (this.itemId === BOW && this.bowPull !== null) {
      this.bowT += dt;
      const p = 1 - (1 - this.bowPull) ** 3;
      const tension = this.bowPull > 0.96 ? Math.sin(this.bowT * 44) * 0.004 : 0;
      this.root.position.x -= 0.1 * p + tension;
      this.root.position.y += 0.07 * p + tension;
      this.root.position.z += 0.05 * p;
      this.root.rotateY(-0.3 * p);
      this.root.rotateZ(-0.18 * p + tension * 4);
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
