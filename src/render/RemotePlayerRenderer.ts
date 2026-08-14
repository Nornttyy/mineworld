import * as THREE from 'three';

/**
 * 从联机层送来的、可以直接显示的其他玩家状态。
 *
 * 坐标是脚底中心，和 core/physics/player 的 Player.pos 一致；yaw 与游戏的
 * LookControls yaw 一致（0 朝 +X，PI / 2 朝 +Z）。网络层只需要把自己的
 * 协议字段映射成这个小而稳定的视图类型，不把 socket 细节带进渲染器。
 */
export interface RemotePlayerView {
  id: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
  name?: string;
}

interface MaterialState {
  material: THREE.MeshBasicMaterial;
  base: THREE.Color;
}

interface NameTag {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  texture: THREE.CanvasTexture;
  material: THREE.SpriteMaterial;
  sprite: THREE.Sprite;
}

interface RemoteModel {
  group: THREE.Group;
  legs: THREE.Group[];
  arms: THREE.Group[];
  materials: MaterialState[];
  target: THREE.Vector3;
  displayed: THREE.Vector3;
  targetYaw: number;
  displayedYaw: number;
  walkPhase: number;
  walkAmount: number;
  brightness: number;
  tag: NameTag;
  label: string;
}

const FACE_SHADE = [0.8, 0.8, 1, 0.42, 0.8, 0.8];
const POSITION_RESPONSE = 14;
const ROTATION_RESPONSE = 16;
const BRIGHTNESS_RESPONSE = 10;
const TELEPORT_DISTANCE = 14;

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function finite(value: number, fallback: number): number {
  return Number.isFinite(value) ? value : fallback;
}

function response(dt: number, speed: number): number {
  return 1 - Math.exp(-Math.max(0, Math.min(dt, 0.2)) * speed);
}

/** FNV-1a：同一个 id 无论何时加入都会拿到同一套颜色。 */
function idHash(id: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < id.length; i++) {
    hash ^= id.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

/** 可供 UI/测试复用的稳定玩家主色（衣服颜色）。 */
export function remotePlayerColor(id: string): number {
  const hue = (idHash(id) % 360) / 360;
  return new THREE.Color().setHSL(hue, 0.6, 0.48).getHex();
}

/** 从 current 朝 target 走最短角度；不在 ±PI 边界突然转一整圈。 */
export function interpolateRemoteYaw(current: number, target: number, amount: number): number {
  const safeAmount = clamp01(amount);
  let delta = target - current;
  delta = ((delta + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
  return current + delta * safeAmount;
}

function shadedBox(width: number, height: number, depth: number): THREE.BoxGeometry {
  const geometry = new THREE.BoxGeometry(width, height, depth);
  const colors: number[] = [];
  for (let face = 0; face < 6; face++) {
    const shade = FACE_SHADE[face];
    for (let vertex = 0; vertex < 4; vertex++) colors.push(shade, shade, shade);
  }
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  return geometry;
}

function addPart(
  parent: THREE.Object3D,
  material: THREE.MeshBasicMaterial,
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
): THREE.Mesh {
  const mesh = new THREE.Mesh(shadedBox(width, height, depth), material);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function makeMaterial(color: THREE.Color, states: MaterialState[]): THREE.MeshBasicMaterial {
  const material = new THREE.MeshBasicMaterial({ color, vertexColors: true });
  states.push({ material, base: color.clone() });
  return material;
}

function displayName(view: RemotePlayerView): string {
  const name = view.name?.trim();
  if (name) return name.slice(0, 18);
  return view.id.slice(0, 10) || '玩家';
}

function drawRoundedRect(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number): void {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function makeNameTag(label: string): NameTag {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('无法创建远端玩家名字牌画布');
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, depthTest: false });
  const sprite = new THREE.Sprite(material);
  sprite.position.set(0, 2.38, 0);
  sprite.scale.set(1.65, 0.4125, 1);
  const tag = { canvas, context, texture, material, sprite };
  redrawNameTag(tag, label);
  return tag;
}

function redrawNameTag(tag: NameTag, label: string): void {
  const { canvas, context } = tag;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'rgba(0, 0, 0, 0.58)';
  drawRoundedRect(context, 7, 7, canvas.width - 14, canvas.height - 14, 11);
  context.fill();
  context.font = 'bold 27px system-ui, sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.lineJoin = 'round';
  context.lineWidth = 4;
  context.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  context.strokeText(label, canvas.width / 2, canvas.height / 2 + 1);
  context.fillStyle = '#ffffff';
  context.fillText(label, canvas.width / 2, canvas.height / 2 + 1);
  tag.texture.needsUpdate = true;
}

function palette(id: string): { skin: THREE.Color; shirt: THREE.Color; trousers: THREE.Color; hair: THREE.Color } {
  const hash = idHash(id);
  const hue = (hash % 360) / 360;
  const skinTones = [0xf4c7a1, 0xd99a6a, 0xa86641, 0x70422d];
  const skin = new THREE.Color(skinTones[(hash >>> 9) % skinTones.length]);
  const shirt = new THREE.Color(remotePlayerColor(id));
  const trousers = new THREE.Color().setHSL((hue + 0.57) % 1, 0.35, 0.31);
  const hair = new THREE.Color().setHSL(((hash >>> 17) % 360) / 360, 0.32, 0.18 + ((hash >>> 25) % 7) * 0.025);
  return { skin, shirt, trousers, hair };
}

function makeModel(view: RemotePlayerView): RemoteModel {
  const group = new THREE.Group();
  group.name = `remote-player:${view.id}`;
  const materials: MaterialState[] = [];
  const colors = palette(view.id);
  const skin = makeMaterial(colors.skin, materials);
  const shirt = makeMaterial(colors.shirt, materials);
  const trousers = makeMaterial(colors.trousers, materials);
  const hair = makeMaterial(colors.hair, materials);
  const eye = makeMaterial(new THREE.Color(0x1f2730), materials);

  // 本地正面朝 +X；与 MobRenderer 一样用 rotation.y = -yaw 对齐游戏的 look yaw。
  addPart(group, shirt, 0.5, 0.72, 0.26, 0, 1.16, 0);
  addPart(group, skin, 0.5, 0.5, 0.5, 0, 1.77, 0);
  addPart(group, hair, 0.52, 0.12, 0.52, 0, 2.02, 0);
  // 两颗眼睛放在头的 +X 面，远看仍是清晰的像素脸。
  addPart(group, eye, 0.016, 0.1, 0.09, 0.258, 1.8, -0.13);
  addPart(group, eye, 0.016, 0.1, 0.09, 0.258, 1.8, 0.13);

  const legs: THREE.Group[] = [];
  const arms: THREE.Group[] = [];
  for (const z of [-0.13, 0.13]) {
    const pivot = new THREE.Group();
    pivot.position.set(0, 0.8, z);
    addPart(pivot, trousers, 0.24, 0.8, 0.24, 0, -0.4, 0);
    group.add(pivot);
    legs.push(pivot);
  }
  for (const z of [-0.36, 0.36]) {
    const pivot = new THREE.Group();
    pivot.position.set(0, 1.47, z);
    addPart(pivot, shirt, 0.24, 0.72, 0.24, 0, -0.36, 0);
    group.add(pivot);
    arms.push(pivot);
  }

  const tag = makeNameTag(displayName(view));
  group.add(tag.sprite);
  const target = new THREE.Vector3(view.x, view.y, view.z);
  return {
    group,
    legs,
    arms,
    materials,
    target: target.clone(),
    displayed: target,
    targetYaw: view.yaw,
    displayedYaw: view.yaw,
    walkPhase: 0,
    walkAmount: 0,
    brightness: 1,
    tag,
    label: displayName(view),
  };
}

function disposeModel(model: RemoteModel): void {
  model.group.traverse((object) => {
    if (object instanceof THREE.Mesh) object.geometry.dispose();
  });
  for (const state of model.materials) state.material.dispose();
  model.tag.texture.dispose();
  model.tag.material.dispose();
}

/**
 * 联机其他玩家的第三人称像素人渲染器。
 *
 * 它不涉及同步协议或碰撞，只负责将最新网络快照软化为连续画面。每帧都可调用
 * sync；只有 id 新增/消失时才创建/销毁 Three.js 对象。
 */
export class RemotePlayerRenderer {
  private readonly models = new Map<string, RemoteModel>();

  constructor(private readonly scene: THREE.Scene) {}

  sync(players: readonly RemotePlayerView[], dt: number, brightness: number): void {
    const present = new Set<string>();
    const frameDt = Math.max(0, Math.min(dt, 0.2));
    const targetBrightness = clamp01(finite(brightness, 1));

    for (const view of players) {
      if (!view.id || present.has(view.id)) continue;
      present.add(view.id);

      let model = this.models.get(view.id);
      if (!model) {
        model = makeModel(view);
        this.models.set(view.id, model);
        this.scene.add(model.group);
      } else {
        const nextX = finite(view.x, model.target.x);
        const nextY = finite(view.y, model.target.y);
        const nextZ = finite(view.z, model.target.z);
        const previousTarget = model.target.clone();
        model.target.set(nextX, nextY, nextZ);
        // 传送、重生或刚从很远处重新订阅时直接落位，避免穿越整张地图的滑行。
        if (previousTarget.distanceToSquared(model.target) > TELEPORT_DISTANCE * TELEPORT_DISTANCE) {
          model.displayed.copy(model.target);
        }
        model.targetYaw = finite(view.yaw, model.targetYaw);
        const label = displayName(view);
        if (label !== model.label) {
          model.label = label;
          redrawNameTag(model.tag, label);
        }
      }

      const positionAlpha = response(frameDt, POSITION_RESPONSE);
      const before = model.displayed.clone();
      model.displayed.lerp(model.target, positionAlpha);
      const moved = model.displayed.distanceTo(before);
      const moving = moved > 0.0004;
      model.walkAmount += ((moving ? 1 : 0) - model.walkAmount) * response(frameDt, 11);
      if (moving) model.walkPhase += moved * 11;

      model.displayedYaw = interpolateRemoteYaw(model.displayedYaw, model.targetYaw, response(frameDt, ROTATION_RESPONSE));
      model.brightness += (targetBrightness - model.brightness) * response(frameDt, BRIGHTNESS_RESPONSE);
      for (const state of model.materials) state.material.color.copy(state.base).multiplyScalar(model.brightness);
      model.tag.material.color.setScalar(0.68 + model.brightness * 0.32);

      const swing = Math.sin(model.walkPhase) * 0.72 * model.walkAmount;
      model.legs.forEach((leg, index) => (leg.rotation.z = index === 0 ? swing : -swing));
      model.arms.forEach((arm, index) => (arm.rotation.z = index === 0 ? -swing * 0.72 : swing * 0.72));
      const bob = Math.abs(Math.sin(model.walkPhase)) * 0.032 * model.walkAmount;
      model.group.position.set(model.displayed.x, model.displayed.y + bob, model.displayed.z);
      model.group.rotation.set(0, -model.displayedYaw, 0);
    }

    for (const [id, model] of this.models) {
      if (present.has(id)) continue;
      this.scene.remove(model.group);
      disposeModel(model);
      this.models.delete(id);
    }
  }

  dispose(): void {
    for (const [, model] of this.models) {
      this.scene.remove(model.group);
      disposeModel(model);
    }
    this.models.clear();
  }
}
