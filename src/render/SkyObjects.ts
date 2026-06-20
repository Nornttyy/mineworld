import * as THREE from 'three';
import { DAY_LENGTH } from '../core/world/dayNight';

// 像素太阳：亮黄方块 + 暖芯（MC 风方块太阳）
function makeSunTex(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 16;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  x.fillStyle = '#fff6c0';
  x.fillRect(1, 1, 14, 14);
  x.fillStyle = '#ffe25a';
  x.fillRect(3, 3, 10, 10);
  x.fillStyle = '#ffcf26';
  x.fillRect(5, 5, 6, 6);
  return pixelTex(c);
}

// 像素月亮：青白方块 + 暗陨坑（简化满月）
function makeMoonTex(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 16;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  x.fillStyle = '#eef2f7';
  x.fillRect(2, 2, 12, 12);
  x.fillStyle = '#c2ccd8';
  x.fillRect(5, 4, 3, 3);
  x.fillRect(9, 7, 2, 2);
  x.fillRect(4, 9, 2, 3);
  x.fillRect(10, 11, 2, 2);
  return pixelTex(c);
}

function pixelTex(c: HTMLCanvasElement): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// —— 云形噪声（确定性，世界固定）——
function hash2(x: number, z: number): number {
  const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453;
  return s - Math.floor(s);
}
function vnoise(x: number, z: number): number {
  const xi = Math.floor(x);
  const zi = Math.floor(z);
  const xf = x - xi;
  const zf = z - zi;
  const u = xf * xf * (3 - 2 * xf); // smoothstep → 云团聚成块、不零散
  const v = zf * zf * (3 - 2 * zf);
  const a = hash2(xi, zi);
  const b = hash2(xi + 1, zi);
  const c = hash2(xi, zi + 1);
  const d = hash2(xi + 1, zi + 1);
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}
function fbm(x: number, z: number): number {
  return vnoise(x, z) * 0.6 + vnoise(x * 2.3 + 5.1, z * 2.3 - 3.7) * 0.3 + vnoise(x * 4.7, z * 4.7) * 0.1;
}

// —— 立体云参数（MC 风：稀疏的 3D 白盒层）——
const CLOUD_CS = 16; // 每个云格边长（格）
const CLOUD_TH = 5; // 云层厚度（格）
const CLOUD_GRID = 28; // 云层覆盖格数（≈448 格，靠雾在地平线淡出）
const CLOUD_Y = 196; // 云层世界高度（在地形之上、CHUNK_H 上方）
const CLOUD_NOISE_SCALE = 0.18; // 噪声频率（越小云团越大越稀）
const CLOUD_THRESHOLD = 0.62; // 密度阈值（越高云越少）—— 解决"云太多"
const CLOUD_DRIFT = 0.012; // 每帧飘移（格），缓风

// 某世界云格是否有云（确定性，世界固定 → 可走出云底，符合 MC）。
function cloudOn(cx: number, cz: number): boolean {
  return fbm(cx * CLOUD_NOISE_SCALE, cz * CLOUD_NOISE_SCALE) > CLOUD_THRESHOLD;
}

// 往数组里塞一个白盒（6 面、面亮度烤进顶点色给 3D 立体感）。双面材质 → 不在意绕序。
const BOX_FACES: { o: number[][]; s: number }[] = [
  { o: [[1, -1, -1], [1, 1, -1], [1, 1, 1], [1, -1, 1]], s: 0.82 }, // +X
  { o: [[-1, -1, 1], [-1, 1, 1], [-1, 1, -1], [-1, -1, -1]], s: 0.82 }, // -X
  { o: [[-1, 1, -1], [-1, 1, 1], [1, 1, 1], [1, 1, -1]], s: 1.0 }, // +Y 顶（最亮）
  { o: [[-1, -1, 1], [-1, -1, -1], [1, -1, -1], [1, -1, 1]], s: 0.6 }, // -Y 底（最暗）
  { o: [[1, -1, 1], [1, 1, 1], [-1, 1, 1], [-1, -1, 1]], s: 0.88 }, // +Z
  { o: [[-1, -1, -1], [-1, 1, -1], [1, 1, -1], [1, -1, -1]], s: 0.88 }, // -Z
];
function addBox(P: number[], C: number[], I: number[], cx: number, cy: number, cz: number, w: number, h: number, d: number): void {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;
  for (const f of BOX_FACES) {
    const base = P.length / 3;
    for (const [ox, oy, oz] of f.o) {
      P.push(cx + ox * hw, cy + oy * hh, cz + oz * hd);
      C.push(f.s, f.s, f.s); // 白云 × 面亮度
    }
    I.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
}

/** 天空对象：方块太阳 + 方块月亮(随昼夜东升西落、对侧) + 云层(默认 MC 立体云 / 光影开=柔和真实云)。 */
export class SkyObjects {
  private readonly sun: THREE.Mesh;
  private readonly moon: THREE.Mesh;
  private readonly voxelClouds: THREE.Mesh; // 立体方块云（默认）
  private readonly softClouds: THREE.Mesh; // 柔和真实云（光影开）
  private readonly softMat: THREE.MeshBasicMaterial;
  private readonly dir = new THREE.Vector3();
  private shaders = false; // 光影开关 → 切云风格
  private drift = 0; // 云缓飘累计（格）
  private cloudOriginX = NaN; // 立体云已建网格的格原点（变了才重建）
  private cloudOriginZ = NaN;

  constructor(scene: THREE.Scene) {
    const sky = (tex: THREE.Texture): THREE.MeshBasicMaterial =>
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false });
    this.sun = new THREE.Mesh(new THREE.PlaneGeometry(46, 46), sky(makeSunTex()));
    this.moon = new THREE.Mesh(new THREE.PlaneGeometry(38, 38), sky(makeMoonTex()));

    // 立体云：白盒层，半透明、受雾(地平线淡出)、双面(从下抬头也可见)。网格随玩家所在云格重建。
    const voxelMat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      color: 0xffffff,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.voxelClouds = new THREE.Mesh(new THREE.BufferGeometry(), voxelMat);
    this.voxelClouds.frustumCulled = false;

    // 真实云（光影）：高空大平面 + 柔和 fbm 云贴图，UV 缓飘。
    this.softMat = new THREE.MeshBasicMaterial({
      map: makeSoftCloudTex(),
      transparent: true,
      depthWrite: false,
      opacity: 0.8,
      side: THREE.DoubleSide,
      fog: false,
    });
    this.softClouds = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), this.softMat);
    this.softClouds.rotation.x = -Math.PI / 2;
    this.softClouds.visible = false;
    if (this.softMat.map) {
      this.softMat.map.wrapS = this.softMat.map.wrapT = THREE.RepeatWrapping;
      this.softMat.map.repeat.set(3, 3); // 少而大的柔云团
    }

    scene.add(this.sun, this.moon, this.voxelClouds, this.softClouds);
  }

  /** 光影开关：开 → 柔和真实云；关 → MC 立体方块云。 */
  setShaders(on: boolean): void {
    this.shaders = on;
    this.voxelClouds.visible = !on;
    this.softClouds.visible = on;
  }

  // 重建以 (originX,originZ) 云格为左下角、CLOUD_GRID² 范围的立体云网格（世界固定 pattern）。
  private rebuildVoxelClouds(originX: number, originZ: number): void {
    const P: number[] = [];
    const C: number[] = [];
    const I: number[] = [];
    const w = CLOUD_CS - 1; // 留 1 格缝 → 看出一块块
    for (let i = 0; i < CLOUD_GRID; i++) {
      for (let j = 0; j < CLOUD_GRID; j++) {
        if (!cloudOn(originX + i, originZ + j)) continue;
        addBox(P, C, I, i * CLOUD_CS + CLOUD_CS / 2, 0, j * CLOUD_CS + CLOUD_CS / 2, w, CLOUD_TH, w);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3));
    g.setIndex(I);
    this.voxelClouds.geometry.dispose();
    this.voxelClouds.geometry = g;
  }

  /** 每帧：太阳/月亮按世界时间走天球；云层跟玩家、缓飘（立体云世界固定可走出云底）。 */
  update(worldTime: number, camPos: THREE.Vector3): void {
    const th = (worldTime / DAY_LENGTH) * Math.PI * 2; // 0=日出
    this.dir.set(Math.cos(th), Math.sin(th), 0.28).normalize();
    const R = 280;
    this.sun.position.copy(camPos).addScaledVector(this.dir, R);
    this.sun.lookAt(camPos);
    this.moon.position.copy(camPos).addScaledVector(this.dir, -R);
    this.moon.lookAt(camPos);

    this.drift += CLOUD_DRIFT; // 缓风（单调，不随昼夜回绕跳变）

    if (this.shaders) {
      // 真实云：平面跟玩家、UV 飘
      this.softClouds.position.set(camPos.x, CLOUD_Y, camPos.z);
      if (this.softMat.map) this.softMat.map.offset.x = (this.drift * 0.0016) % 1;
    } else {
      // 立体云：云格世界固定 + 飘移；玩家跨云格才重建网格，网格本地坐标 + position 补偿 → 飘移顺滑无跳。
      const originX = Math.floor((camPos.x - this.drift) / CLOUD_CS) - CLOUD_GRID / 2;
      const originZ = Math.floor(camPos.z / CLOUD_CS) - CLOUD_GRID / 2;
      if (originX !== this.cloudOriginX || originZ !== this.cloudOriginZ) {
        this.rebuildVoxelClouds(originX, originZ);
        this.cloudOriginX = originX;
        this.cloudOriginZ = originZ;
      }
      // 云格 i 渲染在世界 (originX+i)*CS + drift → 缓飘；高度固定。
      this.voxelClouds.position.set(originX * CLOUD_CS + this.drift, CLOUD_Y, originZ * CLOUD_CS);
    }
  }
}

// 周期 value noise（贴图无缝平铺用）：hash 坐标按 period 取模 → 左右/上下边缘相接。
const emod = (a: number, n: number): number => ((a % n) + n) % n;
function pnoise(x: number, z: number, period: number): number {
  const xi = Math.floor(x);
  const zi = Math.floor(z);
  const xf = x - xi;
  const zf = z - zi;
  const u = xf * xf * (3 - 2 * xf);
  const v = zf * zf * (3 - 2 * zf);
  const h = (a: number, b: number): number => hash2(emod(a, period), emod(b, period));
  const a = h(xi, zi);
  const b = h(xi + 1, zi);
  const c = h(xi, zi + 1);
  const d = h(xi + 1, zi + 1);
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

// 柔和真实云贴图：周期 fbm → 软边白云团（少而大），透明背景，可无缝平铺。
function makeSoftCloudTex(): THREE.CanvasTexture {
  const S = 256;
  const P = 8; // 贴图覆盖 P 个噪声周期 → 无缝
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  const img = x.createImageData(S, S);
  for (let py = 0; py < S; py++) {
    for (let px = 0; px < S; px++) {
      const u = (px / S) * P;
      const v = (py / S) * P;
      let n = pnoise(u, v, P) * 0.65 + pnoise(u * 2, v * 2, P * 2) * 0.35; // 2 倍频也周期对齐
      n = Math.max(0, Math.min(1, (n - 0.5) / 0.32)); // 阈值 → 稀疏
      const a = n * n * (3 - 2 * n) * 205; // smoothstep → 蓬松软边
      const i = (py * S + px) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255;
      img.data[i + 3] = a;
    }
  }
  x.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter; // 柔和（非像素）
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
