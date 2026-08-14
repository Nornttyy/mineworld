import * as THREE from 'three';
import { BLOCKS } from '../core/blocks/registry';
import { isItem } from '../core/items/items';
import { iconUrl } from '../ui/itemIcons';
import { asset } from '../asset';
import { DROP_SIZE, type ItemDrop } from '../core/entity/itemDrop';

const ATLAS_COLS = 4;
const ATLAS_ROWS = 10; // 4×10=40 槽（18-25 下界, 26-31 群系, 32-36 储存/钻石）；与 gen_textures.py、mesher 同步
const TILE_PX = 16;
const EPS = 0.5 / (TILE_PX * ATLAS_COLS);

// 给某方块 id 造一个用图集贴图的小立方体几何（6 面各取对应 tile 的 UV）。
function dropGeometry(id: number): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(DROP_SIZE, DROP_SIZE, DROP_SIZE);
  const faces = BLOCKS[id].faces; // 顺序 +X,-X,+Y,-Y,+Z,-Z，与 BoxGeometry 面序一致
  const uv = g.attributes.uv as THREE.BufferAttribute;
  for (let f = 0; f < 6; f++) {
    const t = faces[f];
    const col = t % ATLAS_COLS;
    const row = Math.floor(t / ATLAS_COLS);
    const uMin = col / ATLAS_COLS + EPS;
    const uMax = (col + 1) / ATLAS_COLS - EPS;
    const vMin = 1 - (row + 1) / ATLAS_ROWS + EPS; // 图集 V 翻转
    const vMax = 1 - row / ATLAS_ROWS - EPS;
    const o = f * 4;
    uv.setXY(o + 0, uMin, vMax);
    uv.setXY(o + 1, uMax, vMax);
    uv.setXY(o + 2, uMin, vMin);
    uv.setXY(o + 3, uMax, vMin);
  }
  uv.needsUpdate = true;
  return g;
}

/** 把核心层的掉落物列表渲染成会自转、上下浮动的小物体。方块用图集小立方体，
 *  非方块物品(如苹果)用带贴图的扁平方片。按物体身份增删 mesh。 */
export class DropRenderer {
  private readonly meshes = new Map<ItemDrop, THREE.Mesh>();
  private readonly geoCache = new Map<number, THREE.BufferGeometry>();
  private readonly mat: THREE.MeshBasicMaterial;
  private readonly itemMats = new Map<number, THREE.MeshBasicMaterial>();

  constructor(
    private readonly scene: THREE.Scene,
    atlas: THREE.Texture,
  ) {
    this.mat = new THREE.MeshBasicMaterial({ map: atlas });
  }

  /** 切换方块图集（材质风格切换）：换方块掉落物的贴图。物品掉落用各自图标，不受影响。
   *  每个掉落物的材质是克隆件(为了逐个按环境光变暗)，得一并换贴图。 */
  setAtlas(tex: THREE.Texture): void {
    this.mat.map = tex;
    this.mat.needsUpdate = true;
    for (const [d, mesh] of this.meshes) {
      if (!isItem(d.id)) {
        (mesh.material as THREE.MeshBasicMaterial).map = tex;
        (mesh.material as THREE.MeshBasicMaterial).needsUpdate = true;
      }
    }
  }

  // 非方块物品掉落：按 id 取对应图标(icons/<name>.png)做扁平方片材质，缓存复用。
  // （以前硬编码成苹果，导致煤/工具掉落都显示苹果。）
  private itemMat(id: number): THREE.MeshBasicMaterial {
    let m = this.itemMats.get(id);
    if (!m) {
      const tex = new THREE.TextureLoader().load(iconUrl(id) ?? asset('textures/icons/apple.png'));
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.colorSpace = THREE.SRGBColorSpace;
      m = new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.5, side: THREE.DoubleSide });
      this.itemMats.set(id, m);
    }
    return m;
  }

  private geo(id: number): THREE.BufferGeometry {
    let g = this.geoCache.get(id);
    if (!g) {
      g = isItem(id) ? new THREE.PlaneGeometry(DROP_SIZE, DROP_SIZE) : dropGeometry(id);
      this.geoCache.set(id, g);
    }
    return g;
  }

  /** lightAt: 环境亮度采样(0..1)——掉落物在洞里/夜里按所在处光照变暗(MC 实体光照)。不传=恒 1。 */
  sync(drops: ItemDrop[], lightAt?: (x: number, y: number, z: number) => number): void {
    const present = new Set(drops);
    for (const [d, mesh] of this.meshes) {
      if (!present.has(d)) {
        this.scene.remove(mesh);
        (mesh.material as THREE.Material).dispose(); // 材质是克隆件(逐个调亮度),移除时释放;共享贴图不受影响
        this.meshes.delete(d);
      }
    }
    for (const d of drops) {
      let mesh = this.meshes.get(d);
      if (!mesh) {
        // 材质克隆：让每个掉落物能独立按环境光变暗(共享材质会互相打架)
        mesh = new THREE.Mesh(this.geo(d.id), (isItem(d.id) ? this.itemMat(d.id) : this.mat).clone());
        this.scene.add(mesh);
        this.meshes.set(d, mesh);
      }
      if (lightAt) {
        const b = lightAt(d.x, d.y + 0.5, d.z);
        (mesh.material as THREE.MeshBasicMaterial).color.setScalar(b);
      }
      const bob = 0.1 + Math.sin(d.age * 3) * 0.06; // 悬在地面之上轻轻浮动
      mesh.position.set(d.x, d.y + bob, d.z);
      mesh.rotation.y = d.age * 1.8; // 缓慢自转
    }
  }

  clear(): void {
    for (const [, mesh] of this.meshes) {
      this.scene.remove(mesh);
      (mesh.material as THREE.Material).dispose(); // 克隆材质逐个释放
    }
    this.meshes.clear();
  }
}
