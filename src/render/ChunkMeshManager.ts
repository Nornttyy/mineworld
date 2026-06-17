import * as THREE from 'three';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_W } from '../core/world/chunk';
import { meshChunk } from '../core/mesh/mesher';

/** 维护玩家周围已加载的区块网格：按预算加载、卸载远处、重建脏区块。 */
export class ChunkMeshManager {
  private readonly meshes = new Map<string, THREE.Mesh>();
  private readonly material: THREE.MeshBasicMaterial;

  constructor(
    private readonly scene: THREE.Scene,
    private readonly world: ChunkWorld,
    atlas: THREE.Texture,
  ) {
    this.material = new THREE.MeshBasicMaterial({ map: atlas, vertexColors: true });
  }

  private key(cx: number, cz: number): string {
    return `${cx},${cz}`;
  }

  private rebuild(cx: number, cz: number): void {
    const old = this.meshes.get(this.key(cx, cz));
    if (old) {
      this.scene.remove(old);
      old.geometry.dispose();
    }
    const data = meshChunk(this.world, cx, cz);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(data.uvs, 2));
    g.setAttribute('color', new THREE.BufferAttribute(data.colors, 3));
    g.setIndex(new THREE.BufferAttribute(data.indices, 1));
    const mesh = new THREE.Mesh(g, this.material);
    mesh.position.set(cx * CHUNK_W, 0, cz * CHUNK_W);
    this.scene.add(mesh);
    this.meshes.set(this.key(cx, cz), mesh);
    this.world.getChunk(cx, cz).dirty = false;
  }

  /**
   * 确保中心 radius 内的区块已网格化；远处卸载。每次最多(重)建 budget 个，分摊到多帧。
   * 物理用 world.getBlock 按需生成，故未渲染的区块也不会穿地——渲染只是慢慢补上。
   */
  update(centerCx: number, centerCz: number, radius: number, budget = 2): void {
    // 卸载超出 radius+1 的区块
    for (const [k, mesh] of this.meshes) {
      const [cx, cz] = k.split(',').map(Number);
      if (Math.abs(cx - centerCx) > radius + 1 || Math.abs(cz - centerCz) > radius + 1) {
        this.scene.remove(mesh);
        mesh.geometry.dispose();
        this.meshes.delete(k);
      }
    }

    // 收集需要(重)建的区块：缺网格的(按 key，不触发生成) + 已加载但变脏的
    const todo: { cx: number; cz: number; d: number }[] = [];
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        const cx = centerCx + dx;
        const cz = centerCz + dz;
        const hasMesh = this.meshes.has(this.key(cx, cz));
        const needs = !hasMesh || this.world.getChunk(cx, cz).dirty;
        if (needs) todo.push({ cx, cz, d: dx * dx + dz * dz });
      }
    }
    todo.sort((a, b) => a.d - b.d); // 由近到远
    for (let i = 0; i < Math.min(budget, todo.length); i++) {
      this.rebuild(todo[i].cx, todo[i].cz);
    }
  }
}
