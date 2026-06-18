import * as THREE from 'three';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_W } from '../core/world/chunk';
import { meshChunk, type MeshData } from '../core/mesh/mesher';
import { loadWaterFrames } from './atlas';

const WATER_FRAMES = 24; // 水动画帧数（与 gen_textures.py 的 water_frames(24) 一致）

interface ChunkMeshes {
  opaque: THREE.Mesh;
  cutout: THREE.Mesh | null;
  water: THREE.Mesh | null;
}

/** 维护玩家周围已加载的区块网格（不透明 + 半透明水）：按预算加载、卸载远处、重建脏区块。 */
export class ChunkMeshManager {
  private readonly meshes = new Map<string, ChunkMeshes>();
  private readonly opaqueMat: THREE.MeshBasicMaterial;
  private readonly cutoutMat: THREE.MeshBasicMaterial;
  private readonly waterMat: THREE.MeshBasicMaterial;
  private readonly waterFrames: THREE.Texture[];
  private readonly waterTex: THREE.Texture;
  private waterAnimT = 0;
  private waterFrame = 0;

  constructor(
    private readonly scene: THREE.Scene,
    private readonly world: ChunkWorld,
    atlas: THREE.Texture,
  ) {
    this.opaqueMat = new THREE.MeshBasicMaterial({ map: atlas, vertexColors: true });
    // 镂空(树叶)：alpha-test 裁切 + 双面渲染（透过近处孔能看到远端叶面，茂密感）
    this.cutoutMat = new THREE.MeshBasicMaterial({
      map: atlas,
      vertexColors: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    });
    // 水：半透明、不写深度（避免遮挡排序问题），单独成批。多帧动画用一个固定显示纹理，
    // 每帧换它的 image 像素（clone 出独立容器，避免污染帧源；换像素而非换 map 引用，确保 GPU 重传）。
    this.waterFrames = loadWaterFrames(WATER_FRAMES);
    this.waterTex = this.waterFrames[0].clone();
    this.waterTex.needsUpdate = true;
    this.waterMat = new THREE.MeshBasicMaterial({
      map: this.waterTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
    });
  }

  /** 昼夜更替：把世界亮度着色乘到所有方块材质 .color 上（白=全亮，暗蓝=夜）。配色不变则跳过。 */
  private lastTint = '';
  setTint(c: [number, number, number]): void {
    const sig = c.join();
    if (sig === this.lastTint) return;
    this.lastTint = sig;
    for (const mat of [this.opaqueMat, this.cutoutMat, this.waterMat]) mat.color.setRGB(c[0], c[1], c[2]);
  }

  /** 切换方块图集（卡通/经典材质切换）：换不透明/镂空材质的贴图；水有独立纹理不受影响。 */
  setAtlas(tex: THREE.Texture): void {
    this.opaqueMat.map = tex;
    this.cutoutMat.map = tex;
    this.opaqueMat.needsUpdate = true;
    this.cutoutMat.needsUpdate = true;
  }

  /** 水面动画（MC 风格帧动画）：按固定步长切换整张水纹理（所有水格同步），波纹原地流动+变化，
   *  不做 UV 平移（那样像水单向滑走）。24 帧首尾无缝循环。 */
  animateWater(dt: number): void {
    this.waterAnimT += dt;
    const FRAME_DUR = 0.09; // 每帧约 90ms（接近 MC 水的节奏）
    while (this.waterAnimT >= FRAME_DUR) {
      this.waterAnimT -= FRAME_DUR;
      this.waterFrame = (this.waterFrame + 1) % this.waterFrames.length;
      const next = this.waterFrames[this.waterFrame];
      if (next.image) {
        this.waterTex.image = next.image;
        this.waterTex.needsUpdate = true; // 只重传像素，不重编译 shader
      }
    }
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
    for (const mesh of [m.opaque, m.cutout, m.water]) {
      if (mesh) {
        this.scene.remove(mesh);
        mesh.geometry.dispose();
      }
    }
    this.meshes.delete(k);
  }

  // 把一套网格数据建成 Mesh 并入场景（空数据返回 null）
  private addMesh(data: MeshData, mat: THREE.Material, cx: number, cz: number): THREE.Mesh | null {
    if (data.indices.length === 0) return null;
    const mesh = new THREE.Mesh(this.buildGeo(data), mat);
    mesh.position.set(cx * CHUNK_W, 0, cz * CHUNK_W);
    this.scene.add(mesh);
    return mesh;
  }

  private rebuild(cx: number, cz: number): void {
    this.unload(this.key(cx, cz));
    const { opaque, cutout, water } = meshChunk(this.world, cx, cz);
    this.meshes.set(this.key(cx, cz), {
      opaque: this.addMesh(opaque, this.opaqueMat, cx, cz) ?? new THREE.Mesh(),
      cutout: this.addMesh(cutout, this.cutoutMat, cx, cz),
      water: this.addMesh(water, this.waterMat, cx, cz),
    });
    const built = this.world.peek(cx, cz);
    if (built) built.dirty = false;
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
        this.world.request(cx, cz); // 异步请求后台生成(不卡主线程)
        const c = this.world.peek(cx, cz);
        if (!c) continue; // 还没生成好 → 跳过，下次 update 再看
        if (!this.meshes.has(this.key(cx, cz)) || c.dirty) todo.push({ cx, cz, d: dx * dx + dz * dz });
      }
    }
    todo.sort((a, b) => a.d - b.d);
    for (let i = 0; i < Math.min(budget, todo.length); i++) this.rebuild(todo[i].cx, todo[i].cz);
  }

  /** 立即重建所有已加载且变脏的区块（挖/放后调用）。 */
  remeshDirty(): void {
    for (const k of [...this.meshes.keys()]) {
      const [cx, cz] = k.split(',').map(Number);
      if (this.world.peek(cx, cz)?.dirty) this.rebuild(cx, cz);
    }
  }
}
