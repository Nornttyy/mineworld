import * as THREE from 'three';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_W } from '../core/world/chunk';
import { meshChunk, type MeshData } from '../core/mesh/mesher';
import { loadWaterFrames } from './atlas';

const WATER_FRAMES = 24; // 水动画帧数（与 gen_textures.py 的 water_frames(24) 一致）

// 雾在 ~110 格就全糊了(见 Renderer 的 Fog 30..110)。某区块"最近点"超过此距离即被雾完全盖住，
// 既不必生成/网格化，也不必绘制——纯属浪费(画面零变化)。用"|d|-0.5 格"近似区块最近点。
const FOG_FAR_BLOCKS = 110;
const FOG_CULL_R2 = (FOG_FAR_BLOCKS / CHUNK_W) ** 2; // 区块²为单位，比较平方省 sqrt
const chunkFogged = (dCx: number, dCz: number): boolean => {
  const nx = Math.max(0, Math.abs(dCx) - 0.5);
  const nz = Math.max(0, Math.abs(dCz) - 0.5);
  return nx * nx + nz * nz > FOG_CULL_R2;
};

interface ChunkMeshes {
  opaque: THREE.Mesh;
  cutout: THREE.Mesh | null;
  water: THREE.Mesh | null;
  torch: THREE.Mesh | null;
}

/** 维护玩家周围已加载的区块网格（不透明 + 半透明水）：按预算加载、卸载远处、重建脏区块。 */
export class ChunkMeshManager {
  private readonly meshes = new Map<string, ChunkMeshes>();
  private readonly opaqueMat: THREE.MeshBasicMaterial;
  private readonly cutoutMat: THREE.MeshBasicMaterial;
  private readonly waterMat: THREE.MeshBasicMaterial;
  private readonly torchMat: THREE.MeshBasicMaterial;
  private readonly waterFrames: THREE.Texture[];
  private readonly waterTex: THREE.Texture;
  private waterAnimT = 0;
  private waterFrame = 0;
  // 共享光照 uniform：uSkyMul=天光昼夜系数(白天1/夜≈0.05)；uSkyTint=天光着色(白天白/夜暗蓝)。
  // 顶点带 aLight=(天光01,方块光01)，shader 合成 亮度=曲线(max(天光×uSkyMul, 方块光))。
  // 故昼夜只缩放天光、火把(方块光)恒亮；改昼夜只动 uniform，无需重建网格。
  private readonly uSkyMul = { value: 1 };
  private readonly uSkyTint = { value: new THREE.Color(1, 1, 1) };
  // 光影(真实水面)：uShaders 开关(0/1)、uTime 秒(驱动波动)、uSkyRefl 反射的天空色、uSunDir 太阳方向(高光)。
  private readonly uShaders = { value: 0 };
  private readonly uTime = { value: 0 };
  private readonly uSkyRefl = { value: new THREE.Color(0.55, 0.72, 0.95) }; // 地平线色(掠角反射)
  private readonly uSkyTop = { value: new THREE.Color(0.35, 0.55, 0.85) }; // 天顶色(俯角反射)
  private readonly uSunDir = { value: new THREE.Vector3(0.4, 0.85, 0.3) };

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
    // 不透明/镂空吃天光shader；水另走"天光 + 光影(波动/菲涅尔反射/高光)"shader
    for (const m of [this.opaqueMat, this.cutoutMat]) this.installLight(m);
    this.installWaterShader(this.waterMat);
    // 火把：自发光暖色十字，不参与天光(始终全亮)，双面可见
    this.torchMat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
  }

  // 给方块材质注入"天光×昼夜 + 方块光"的合成。顶点算亮度系数 vLF + 天光着色 vTint，片元相乘。
  private installLight(mat: THREE.MeshBasicMaterial): void {
    mat.onBeforeCompile = (shader): void => {
      shader.uniforms.uSkyMul = this.uSkyMul;
      shader.uniforms.uSkyTint = this.uSkyTint;
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\nattribute vec2 aLight;\nuniform float uSkyMul;\nuniform vec3 uSkyTint;\nvarying float vLF;\nvarying vec3 vTint;',
        )
        .replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\n{ float s = aLight.x * uSkyMul; float b = aLight.y; float lvl = max(s, b);' +
            ' vLF = 0.02 + 0.98 * pow(lvl, 1.7); float sf = lvl > 0.0001 ? s / lvl : 0.0; vTint = mix(vec3(1.0), uSkyTint, sf); }',
        );
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vLF;\nvarying vec3 vTint;')
        .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= vLF * vTint;');
    };
  }

  // 水面专用：天光烤进顶点(同 installLight) + "光影"(uShaders 开时)。
  // 波纹是【片元里的程序法线】——几层细正弦，相位 ±t 多向缓流(真实飘动；各层方向/速度不同→
  //   组合成自然流动、无单一传送带感)；用它扰动 菲涅尔反射 + 太阳高光 → 真实会流动的水面。
  //   水面几何不位移(平静不浮)，"飘动"是波纹/反光在面上流过。
  private installWaterShader(mat: THREE.MeshBasicMaterial): void {
    mat.onBeforeCompile = (shader): void => {
      shader.uniforms.uSkyMul = this.uSkyMul;
      shader.uniforms.uSkyTint = this.uSkyTint;
      shader.uniforms.uShaders = this.uShaders;
      shader.uniforms.uTime = this.uTime;
      shader.uniforms.uSkyRefl = this.uSkyRefl;
      shader.uniforms.uSkyTop = this.uSkyTop;
      shader.uniforms.uSunDir = this.uSunDir;
      // 顶点：只烤天光 + 传世界坐标；水面不位移(平静不漂)。
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\nattribute vec2 aLight;\nuniform float uSkyMul;\nuniform vec3 uSkyTint;\nvarying float vLF;\nvarying vec3 vTint;\nvarying vec3 vWPos;',
        )
        .replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\n{ float s = aLight.x * uSkyMul; float b = aLight.y; float lvl = max(s, b);' +
            ' vLF = 0.02 + 0.98 * pow(lvl, 1.7); float sf = lvl > 0.0001 ? s / lvl : 0.0; vTint = mix(vec3(1.0), uSkyTint, sf); }\n' +
            'vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;',
        );
      // 片元：程序波纹法线 → 扰动反射/高光。相位 ±t 多向缓流=真实流动(各层方向/速度不同,无传送带感)。
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nuniform float uSkyMul;\nuniform float uShaders;\nuniform float uTime;\nuniform vec3 uSkyRefl;\nuniform vec3 uSkyTop;\nuniform vec3 uSunDir;\nvarying float vLF;\nvarying vec3 vTint;\nvarying vec3 vWPos;\n' +
            'vec2 ripple(vec2 p, float t){\n' +
            '  vec2 n = vec2(0.0);\n' +
            '  n += vec2(1.0, 0.30) * cos(dot(p, vec2(1.00, 0.35)) * 1.6 + t * 0.85);\n' +
            '  n += vec2(-0.40, 1.0) * cos(dot(p, vec2(-0.45, 1.00)) * 2.3 - t * 1.05 + 1.7);\n' +
            '  n += vec2(0.70, -0.60) * cos(dot(p, vec2(0.75, -0.60)) * 3.2 + t * 0.80 + 3.1);\n' +
            '  n += vec2(-0.70, -0.50) * cos(dot(p, vec2(-0.70, -0.55)) * 4.6 - t * 1.25 + 0.5);\n' +
            '  return n;\n' +
            '}',
        )
        .replace(
          '#include <color_fragment>',
          '#include <color_fragment>\ndiffuseColor.rgb *= vLF * vTint;\n' +
            'if (uShaders > 0.5) {\n' +
            // 真实水(MC 光影风)：丢掉像素贴图，改 清澈水色 + 反射天空渐变 + 菲涅尔 + 太阳粼光。
            '  vec2 n2 = ripple(vWPos.xz, uTime);\n' +
            '  vec3 N = normalize(vec3(n2.x * 0.085, 1.0, n2.y * 0.085));\n' + // 平滑波纹法线
            '  vec3 V = normalize(cameraPosition - vWPos);\n' +
            '  vec3 Rr = reflect(-V, N);\n' + // 反射光线 → 取天空渐变(俯角见天顶、掠角见地平线)
            '  vec3 skyR = mix(uSkyRefl, uSkyTop, clamp(Rr.y, 0.0, 1.0)) * 0.9;\n' + // 略压暗,不刺白
            '  float fres = clamp(0.02 + 0.98 * pow(1.0 - max(dot(V, N), 0.0), 5.0), 0.0, 0.82);\n' + // Schlick,封顶留水色
            '  vec3 base = vec3(0.05, 0.26, 0.40) * vLF * vTint;\n' + // 清澈水色(深蓝绿,被天光照)
            '  vec3 col = mix(base, skyR, fres);\n' + // 掠角→大幅反天空、但仍透出水蓝
            '  vec3 Rs = reflect(-normalize(uSunDir), N);\n' +
            '  col += pow(max(dot(Rs, V), 0.0), 200.0) * uSkyMul * vec3(1.0, 0.95, 0.82) * 1.6;\n' + // 太阳粼光
            '  diffuseColor.rgb = col;\n' +
            '  diffuseColor.a = mix(0.62, 0.96, fres);\n' + // 俯看清澈见底、掠角反光不透(菲涅尔透明度)
            '}',
        );
    };
  }

  /** 昼夜：天光着色 → uSkyTint（白天白、夜暗蓝），由 shader 按天光占比施加（火把照亮处不变蓝）。 */
  private lastTint = '';
  setTint(c: [number, number, number]): void {
    const sig = c.join();
    if (sig === this.lastTint) return;
    this.lastTint = sig;
    this.uSkyTint.value.setRGB(c[0], c[1], c[2]);
  }

  /** 昼夜：天光亮度系数（白天=1，深夜≈0.05 → 地表变黑、要靠火把）。 */
  setSkyMul(v: number): void {
    this.uSkyMul.value = v;
  }

  /** 光影总开关：开 → 水面波动 + 菲涅尔反射 + 太阳高光；关 → 平静水面(省性能)。 */
  setShaders(on: boolean): void {
    this.uShaders.value = on ? 1 : 0;
  }

  /** 水面反射的天空色：地平线色(掠角) + 天顶色(俯角) → 反射出天空渐变(更真实)。 */
  setSkyReflection(horizon: [number, number, number], top?: [number, number, number]): void {
    this.uSkyRefl.value.setRGB(horizon[0], horizon[1], horizon[2]);
    if (top) this.uSkyTop.value.setRGB(top[0], top[1], top[2]);
  }

  /** 太阳方向(世界系，驱动水面镜面高光)。 */
  setSunDir(x: number, y: number, z: number): void {
    this.uSunDir.value.set(x, y, z);
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
    this.uTime.value += dt; // 驱动光影水面波动
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
    if (data.normals) g.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3)); // MeshBasicMaterial 不打灯，区块网格不带法线
    g.setAttribute('uv', new THREE.BufferAttribute(data.uvs, 2));
    g.setAttribute('color', new THREE.BufferAttribute(data.colors, 3));
    if (data.light && data.light.length) g.setAttribute('aLight', new THREE.BufferAttribute(data.light, 2)); // 天光/方块光(火把网格不带)
    g.setIndex(new THREE.BufferAttribute(data.indices, 1));
    return g;
  }

  private unload(k: string): void {
    const m = this.meshes.get(k);
    if (!m) return;
    for (const mesh of [m.opaque, m.cutout, m.water, m.torch]) {
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
    const { opaque, cutout, water, torch } = meshChunk(this.world, cx, cz);
    this.meshes.set(this.key(cx, cz), {
      opaque: this.addMesh(opaque, this.opaqueMat, cx, cz) ?? new THREE.Mesh(),
      cutout: this.addMesh(cutout, this.cutoutMat, cx, cz),
      water: this.addMesh(water, this.waterMat, cx, cz),
      torch: this.addMesh(torch, this.torchMat, cx, cz),
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
        if (chunkFogged(dx, dz)) continue; // 完全在雾里的角块：不生成、不网格化(看不见)
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
    // 已加载但因移动落进雾区的区块：隐藏(不绘制)而非卸载——避免来回移动时反复重建网格、无闪烁
    for (const [k, m] of this.meshes) {
      const [cx, cz] = k.split(',').map(Number);
      const vis = !chunkFogged(cx - centerCx, cz - centerCz);
      for (const mesh of [m.opaque, m.cutout, m.water, m.torch]) if (mesh) mesh.visible = vis;
    }
  }

  /** 立即重建所有已加载且变脏的区块（挖/放后调用）。 */
  remeshDirty(): void {
    for (const k of [...this.meshes.keys()]) {
      const [cx, cz] = k.split(',').map(Number);
      if (this.world.peek(cx, cz)?.dirty) this.rebuild(cx, cz);
    }
  }
}
