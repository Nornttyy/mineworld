import * as THREE from 'three';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_W } from '../core/world/chunk';
import { meshChunk, type MeshData } from '../core/mesh/mesher';

interface ChunkMeshes {
  opaque: THREE.Mesh;
  water: THREE.Mesh | null;
}

/** 维护玩家周围已加载的区块网格（不透明 + 半透明水）：按预算加载、卸载远处、重建脏区块。 */
export class ChunkMeshManager {
  private readonly meshes = new Map<string, ChunkMeshes>();
  private readonly opaqueMat: THREE.MeshBasicMaterial;
  private readonly waterMat: THREE.MeshBasicMaterial;

  constructor(
    private readonly scene: THREE.Scene,
    private readonly world: ChunkWorld,
    atlas: THREE.Texture,
  ) {
    this.opaqueMat = new THREE.MeshBasicMaterial({ map: atlas, vertexColors: true });
    // 水：半透明、不写深度（避免遮挡排序问题），单独成批
    this.waterMat = new THREE.MeshBasicMaterial({
      map: atlas,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
    });
  }

  private key(cx: number, cz: number): string {
    return `${cx},${cz}`;
  }

  private buildGeo(data: MeshData): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(data.uvs, 2));
    g.setAttribute('color', new THREE.BufferAttribute(data.colors, 3));
    g.setIndex(new THREE.BufferAttribute(data.indices, 1));
    return g;
  }

  private unload(k: string): void {
    const m = this.meshes.get(k);
    if (!m) return;
    this.scene.remove(m.opaque);
    m.opaque.geometry.dispose();
    if (m.water) {
      this.scene.remove(m.water);
      m.water.geometry.dispose();
    }
    this.meshes.delete(k);
  }

  private rebuild(cx: number, cz: number): void {
    this.unload(this.key(cx, cz));
    const { opaque, water } = meshChunk(this.world, cx, cz);
    const om = new THREE.Mesh(this.buildGeo(opaque), this.opaqueMat);
    om.position.set(cx * CHUNK_W, 0, cz * CHUNK_W);
    this.scene.add(om);
    let wm: THREE.Mesh | null = null;
    if (water.indices.length > 0) {
      wm = new THREE.Mesh(this.buildGeo(water), this.waterMat);
      wm.position.set(cx * CHUNK_W, 0, cz * CHUNK_W);
      this.scene.add(wm);
    }
    this.meshes.set(this.key(cx, cz), { opaque: om, water: wm });
    this.world.getChunk(cx, cz).dirty = false;
  }

  /** 确保中心 radius 内区块已网格化；远处卸载。每次最多(重)建 budget 个，分摊到多帧。 */
  update(centerCx: number, centerCz: number, radius: number, budget = 2): void {
    for (const k of [...this.meshes.keys()]) {
      const [cx, cz] = k.split(',').map(Number);
      if (Math.abs(cx - centerCx) > radius + 1 || Math.abs(cz - centerCz) > radius + 1) this.unload(k);
    }
    const todo: { cx: number; cz: number; d: number }[] = [];
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        const cx = centerCx + dx;
        const cz = centerCz + dz;
        const needs = !this.meshes.has(this.key(cx, cz)) || this.world.getChunk(cx, cz).dirty;
        if (needs) todo.push({ cx, cz, d: dx * dx + dz * dz });
      }
    }
    todo.sort((a, b) => a.d - b.d);
    for (let i = 0; i < Math.min(budget, todo.length); i++) this.rebuild(todo[i].cx, todo[i].cz);
  }

  /** 立即重建所有已加载且变脏的区块（挖/放后调用）。 */
  remeshDirty(): void {
    for (const k of [...this.meshes.keys()]) {
      const [cx, cz] = k.split(',').map(Number);
      if (this.world.getChunk(cx, cz).dirty) this.rebuild(cx, cz);
    }
  }
}
