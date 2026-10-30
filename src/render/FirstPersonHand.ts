import * as THREE from 'three';
import { isCrossPlantId } from '../core/blocks/registry';
import { BLOCKS, TORCH } from '../core/blocks/registry';
import { BOW } from '../core/items/items';
import type { LightingQuality } from '../core/settings';
import { iconUrl } from '../ui/itemIcons';
import { asset } from '../asset';
import { heldItemGeometry, type SpriteAlpha } from './heldItemGeometry';
import { meleeAttributes } from '../core/combat/melee';
import {
  DEFAULT_EAT_SECONDS,
  DEFAULT_SWING_SECONDS,
  EQUIP_RATE,
  EQUIP_SWAP_THRESHOLD,
  HandMotionTracker,
  type HandMotionState,
  itemSwingMatrix,
  emptyArmMatrix,
  bowUseMatrix,
  eatingItemMatrix,
  hurtViewMatrix,
} from './firstPersonMotion';
export { mcSwingPose, mcSwingQuaternion, type SwingPose } from './firstPersonMotion';
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
  if (p < 0.65) return 0;
  if (p < 0.9) return 1;
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
  if (id === TORCH || isCrossPlantId(id)) return iconUrl(id) ? 'sprite' : 'none';
  if (BLOCKS[id]) return 'block';
  if (iconUrl(id)) return 'sprite';
  return 'none';
}

const [EPS_U, EPS_V] = atlasUvInset(CLASSIC_ATLAS_TILE_PX);
// 面亮度（同方块）：+X,-X,+Y,-Y,+Z,-Z
const SHADE = [0.6, 0.6, 1.0, 0.5, 0.8, 0.8];
const SWING_TIME = DEFAULT_SWING_SECONDS; // 26.3 SwingAnimation.DEFAULT: WHACK, 6 ticks.

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
    [u + 8, v + 4, 4, 12],
    [u, v + 4, 4, 12],
    [u + 4, v, 4, 4],
    [u + 8, v, 4, 4],
    [u + 4, v + 4, 4, 12],
    [u + 12, v + 4, 4, 12],
  ];
  const p = geometry.getAttribute('position');
  for (const [face, [u0, v0, w, h]] of faces.entries()) {
    for (let k = 0; k < 4; k++) {
      const i = face * 4 + k;
      const x = (p.getX(i) * 16) / (4 + inflate) + 0.5;
      const y = (p.getY(i) * 16) / (12 + inflate) + 0.5;
      const z = (p.getZ(i) * 16) / (4 + inflate) + 0.5;
      // Steve's Y-up/Z-front cube frame, converted with the rig as a whole.
      const fu = [1 - z, z, x, x, x, 1 - x][face];
      const fv = [1 - y, 1 - y, z, 1 - z, 1 - y, 1 - y][face];
      uv.setXY(i, (u0 + fu * w) / 64, 1 - (v0 + fv * h) / 64);
    }
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
  private swapElapsed = 1000;
  private readonly poseMatrix = new THREE.Matrix4();
  private readonly motionMatrix = new THREE.Matrix4();
  private readonly hurtMatrix = new THREE.Matrix4();
  private readonly motion = new HandMotionTracker();
  private readonly spriteTex = new Map<string, THREE.Texture>(); // 物品图标纹理缓存（物品+动画帧）
  private readonly spriteMasks = new WeakMap<THREE.Texture, SpriteAlpha>();
  private swingT = 0; // 0=不摆；(0,1]=摆臂进度
  private wantSwing = false;
  private eating = false; // 是否在吃东西（手持食物送嘴边抖动）
  private eatT = 0;
  private eatDuration = DEFAULT_EAT_SECONDS;
  private externalEatTime = false;
  private bowPull: number | null = null; // null=未拉弓；0..1=连续蓄力进度
  private bowStage: BowChargeStage = -1;
  private bowT = 0;
  private hurtT = 0;
  private hurtDuration = 0.5; // Official default hurtDuration: 10 ticks.
  private hurtDirection = 0;
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
    // The complete official arm chain, model pivot and frame conversion are
    // composed in emptyArmMatrix; do not add a second ad-hoc idle rotation here.
    this.root.add(this.arm);
    this.root.matrixAutoUpdate = false;
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
    if (this.hasRequestedItem && id !== this.requestedItemId) this.swapElapsed = 0;
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
  hurtShake(direction = 0, durationSeconds = 0.5): void {
    this.hurtDuration = Math.max(0.05, durationSeconds);
    this.hurtT = this.hurtDuration;
    this.hurtDirection = direction;
  }

  setMotionState(state: HandMotionState): void {
    this.motion.setState(state);
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
  setEating(active: boolean, elapsedSeconds?: number, durationSeconds = DEFAULT_EAT_SECONDS): void {
    this.eating = active;
    this.eatDuration = Math.max(0.05, durationSeconds);
    this.externalEatTime = elapsedSeconds !== undefined && Number.isFinite(elapsedSeconds);
    if (!active) this.eatT = 0;
    else if (this.externalEatTime)
      this.eatT = THREE.MathUtils.clamp(elapsedSeconds!, 0, this.eatDuration);
  }

  /** 更新拉弓贴图和连续手部姿态；null 立即恢复未搭箭的待机弓。 */
  setBowCharge(progress: number | null): void {
    const pull =
      progress === null || !Number.isFinite(progress)
        ? null
        : THREE.MathUtils.clamp(progress, 0, 1);
    const nextStage = bowChargeStage(pull);
    if (pull === null) this.bowT = 0;
    else if (pull < 1 || this.bowPull === null) this.bowT = pull;
    else this.bowT = Math.max(1, this.bowT);
    this.bowPull = pull;
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
    this.swapElapsed += Math.max(0, dt);
    // 26.3 itemSwapTicker is separate from attackStrengthTicker: swinging must
    // not restart this dip. The current item's attack-speed attribute sets recovery.
    const swapScale = Math.min(
      1,
      (this.swapElapsed + 1 / 20) * meleeAttributes(this.requestedItemId).speed,
    );
    const desired = changing ? 0 : swapScale ** 3;
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

    const unequipped = 1 - this.equipped;
    if (!this.item) {
      emptyArmMatrix(this.swingT, unequipped, this.poseMatrix);
    } else if (this.eating) {
      if (!this.externalEatTime) this.eatT = (this.eatT + dt) % this.eatDuration;
      eatingItemMatrix(this.eatT * 20, this.eatDuration * 20, unequipped, this.poseMatrix);
    } else if (this.itemId === BOW && this.bowPull !== null) {
      // Game clamps charge at one second; keep the official tiny tension motion
      // running while a fully drawn bow is held without changing its power.
      if (this.bowPull >= 1) this.bowT += dt;
      bowUseMatrix(this.bowT * 20, unequipped, this.poseMatrix);
    } else {
      itemSwingMatrix(this.swingT, unequipped, this.poseMatrix);
    }

    this.motion.update(dt, walkSpeed, this.motionMatrix);
    this.hurtT = Math.max(0, this.hurtT - dt);
    hurtViewMatrix(this.hurtT, this.hurtDuration, this.hurtDirection, this.hurtMatrix);
    this.root.matrix.copy(this.hurtMatrix).multiply(this.motionMatrix).multiply(this.poseMatrix);
    // Expose TRS for inspection, but render the original matrix: the bow's
    // scale-then-rotation has shear and cannot be faithfully rebuilt as TRS.
    this.root.matrix.decompose(this.root.position, this.root.quaternion, this.root.scale);
    this.root.matrixWorldNeedsUpdate = true;
  }
}
