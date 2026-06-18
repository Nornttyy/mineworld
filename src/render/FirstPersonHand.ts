import * as THREE from 'three';
import { BLOCKS } from '../core/blocks/registry';
import { iconUrl } from '../ui/itemIcons';

// 第一人称手臂 + 手持物：独立的覆盖层场景/相机，画在世界之上（清深度，不被遮挡）。
// 挖/放时摆臂，走路时轻微晃动。手持方块=3D 立方体；手持物品(工具/食物/材料)=平面图标精灵；空手只露手臂。

export type HeldKind = 'block' | 'sprite' | 'none';

// 手持物如何渲染：注册表里的方块画 3D 立方体；有图标的物品(id≥256)画平面精灵；其余只露手臂。
export function heldRenderKind(id: number | null): HeldKind {
  if (id === null || id <= 0) return 'none';
  if (BLOCKS[id]) return 'block';
  if (iconUrl(id)) return 'sprite';
  return 'none';
}

const ATLAS_COLS = 4;
const ATLAS_ROWS = 4;
const TILE_PX = 16;
const EPS = 0.01 / (TILE_PX * ATLAS_COLS);
// 面亮度（同方块）：+X,-X,+Y,-Y,+Z,-Z
const SHADE = [0.6, 0.6, 1.0, 0.5, 0.8, 0.8];
const SWING_TIME = 0.3; // 一次摆臂 0.3 秒（同 MC）

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
  private readonly atlas: THREE.Texture;
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
  setHeld(id: number | null): void {
    if (id === this.itemId) return;
    this.itemId = id;
    if (this.item) {
      this.root.remove(this.item);
      this.item.geometry.dispose();
      this.item = null;
    }
    const kind = heldRenderKind(id);
    if (kind === 'block' && id !== null) {
      this.item = new THREE.Mesh(
        blockCube(id, 0.32),
        new THREE.MeshBasicMaterial({ map: this.atlas, vertexColors: true }),
      );
      this.item.position.set(-0.02, 0.16, 0.04); // 握在手臂上端
      this.item.rotation.set(-0.1, 0.6, 0.1);
      this.root.add(this.item);
    } else if (kind === 'sprite' && id !== null) {
      // 物品：用图标贴一个平面，斜握在手里（同 MC 手持物品=平面精灵）
      const tex = this.itemTexture(id);
      if (tex) {
        this.item = new THREE.Mesh(
          new THREE.PlaneGeometry(0.34, 0.34),
          new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.5, side: THREE.DoubleSide }),
        );
        this.item.position.set(0.04, 0.2, 0.04);
        this.item.rotation.set(0, -0.35, 0.35); // 斜一点，像握着柄
        this.root.add(this.item);
      }
    }
  }

  // 触发摆臂（挖到方块/放方块时调用；按住挖时每帧调用以连续摆）
  swing(): void {
    this.wantSwing = true;
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

    // 摆臂弧线：向前下方挥出再收回（sin 上凸）。z 取负=往画面里(前方)挥，不是往脸前(后方)缩。
    const s = Math.sin(this.swingT * Math.PI);
    let px = 0.42 + bobX - s * 0.08;
    let py = -0.28 + bobY - s * 0.22;
    let pz = -0.72 - s * 0.14;
    let rx = 0.1 + s * 0.7;
    const ry = -0.5 + s * 0.35;
    let rz = 0.4 - s * 0.15;

    // 吃东西：把食物抬到嘴边(往中间+往脸前) + 高频抖动（同 MC 啃食抖动）。
    if (this.eating) {
      this.eatT += dt;
      const j = Math.sin(this.eatT * 30); // 快速抖
      px += -0.18 + j * 0.015; // 往中间靠
      py += 0.16 + j * 0.02; // 抬到嘴边 + 上下抖
      pz += 0.18; // 凑近脸
      rx += 0.4 + j * 0.12; // 前倾 + 抖
      rz += -0.25;
    }

    this.root.position.set(px, py, pz);
    this.root.rotation.set(rx, ry, rz);
  }
}
