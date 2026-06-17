import * as THREE from 'three';
import { BLOCKS } from '../core/blocks/registry';
import { DROP_SIZE, type ItemDrop } from '../core/entity/itemDrop';

const ATLAS_COLS = 4;
const ATLAS_ROWS = 4;
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

/** 把核心层的掉落物列表渲染成会自转、上下浮动的小方块。按物体身份增删 mesh。 */
export class DropRenderer {
  private readonly meshes = new Map<ItemDrop, THREE.Mesh>();
  private readonly geoCache = new Map<number, THREE.BufferGeometry>();
  private readonly mat: THREE.MeshBasicMaterial;

  constructor(
    private readonly scene: THREE.Scene,
    atlas: THREE.Texture,
  ) {
    this.mat = new THREE.MeshBasicMaterial({ map: atlas });
  }

  private geo(id: number): THREE.BufferGeometry {
    let g = this.geoCache.get(id);
    if (!g) {
      g = dropGeometry(id);
      this.geoCache.set(id, g);
    }
    return g;
  }

  sync(drops: ItemDrop[]): void {
    const present = new Set(drops);
    for (const [d, mesh] of this.meshes) {
      if (!present.has(d)) {
        this.scene.remove(mesh);
        this.meshes.delete(d);
      }
    }
    for (const d of drops) {
      let mesh = this.meshes.get(d);
      if (!mesh) {
        mesh = new THREE.Mesh(this.geo(d.id), this.mat);
        this.scene.add(mesh);
        this.meshes.set(d, mesh);
      }
      const bob = 0.1 + Math.sin(d.age * 3) * 0.06; // 悬在地面之上轻轻浮动
      mesh.position.set(d.x, d.y + bob, d.z);
      mesh.rotation.y = d.age * 1.8; // 缓慢自转
    }
  }

  clear(): void {
    for (const [, mesh] of this.meshes) this.scene.remove(mesh);
    this.meshes.clear();
  }
}
