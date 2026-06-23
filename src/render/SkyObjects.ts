import * as THREE from 'three';
import { DAY_LENGTH } from '../core/world/dayNight';
import type { LightingQuality } from '../core/settings';

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

// 真实太阳：径向渐变——中心近白、边缘暖黄、外缘透明的实心亮盘。
function makeRealSunTex(): THREE.CanvasTexture {
  const S = 64;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  const cx2 = S / 2;
  const r = S / 2;
  const g = x.createRadialGradient(cx2, cx2, 0, cx2, cx2, r);
  g.addColorStop(0, 'rgba(255,255,255,1)');     // 中心：纯白
  g.addColorStop(0.4, 'rgba(255,255,240,1)');   // 内环：近白
  g.addColorStop(0.7, 'rgba(255,251,214,1)');   // 外环：淡黄(非橙)
  g.addColorStop(0.88, 'rgba(255,248,200,0.5)'); // 边缘：淡黄半透
  g.addColorStop(1, 'rgba(255,246,190,0)');      // 外缘：透明
  x.fillStyle = g;
  x.beginPath();
  x.arc(cx2, cx2, r, 0, Math.PI * 2);
  x.fill();
  const t = new THREE.CanvasTexture(c);
  t.minFilter = THREE.LinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// 太阳光晕：更大、更柔的暖色径向辉光（中心半透明→边缘全透）。
function makeSunGlowTex(): THREE.CanvasTexture {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  const cx2 = S / 2;
  const r = S / 2;
  const g = x.createRadialGradient(cx2, cx2, 0, cx2, cx2, r);
  g.addColorStop(0, 'rgba(255,255,238,0.5)');    // 中心：淡白黄半透(非橙)
  g.addColorStop(0.25, 'rgba(255,252,224,0.32)'); // 内辉
  g.addColorStop(0.55, 'rgba(255,249,208,0.14)'); // 中辉
  g.addColorStop(0.8, 'rgba(255,247,198,0.04)');  // 外辉
  g.addColorStop(1, 'rgba(255,245,188,0)');        // 边缘：全透
  x.fillStyle = g;
  x.beginPath();
  x.arc(cx2, cx2, r, 0, Math.PI * 2);
  x.fill();
  const t = new THREE.CanvasTexture(c);
  t.minFilter = THREE.LinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// 真实月亮：冷白圆盘 + 几块淡灰陨石坑斑 + 柔和边缘。
function makeRealMoonTex(): THREE.CanvasTexture {
  const S = 64;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  const cx2 = S / 2;
  const r = S / 2;
  // 月面底色：冷白柔和渐变
  const g = x.createRadialGradient(cx2 - r * 0.15, cx2 - r * 0.15, 0, cx2, cx2, r);
  g.addColorStop(0, 'rgba(245,248,255,1)');   // 高光中心
  g.addColorStop(0.55, 'rgba(220,228,242,1)'); // 月面中部
  g.addColorStop(0.82, 'rgba(190,200,220,1)'); // 边缘暗部
  g.addColorStop(0.92, 'rgba(170,180,205,0.5)'); // 柔和边缘
  g.addColorStop(1, 'rgba(150,165,195,0)');     // 外缘透明
  x.fillStyle = g;
  x.beginPath();
  x.arc(cx2, cx2, r, 0, Math.PI * 2);
  x.fill();
  // 陨石坑斑（淡灰色半透）
  const craters: [number, number, number][] = [
    [0.38, 0.32, 0.09],
    [0.62, 0.55, 0.07],
    [0.28, 0.6, 0.055],
    [0.55, 0.3, 0.05],
    [0.45, 0.68, 0.065],
  ];
  for (const [fx, fy, fr] of craters) {
    const cgx = cx2 + (fx - 0.5) * (S * 0.7);
    const cgy = cx2 + (fy - 0.5) * (S * 0.7);
    const cr = fr * S;
    const cg = x.createRadialGradient(cgx, cgy, 0, cgx, cgy, cr);
    cg.addColorStop(0, 'rgba(140,150,170,0.28)');
    cg.addColorStop(0.6, 'rgba(160,168,185,0.12)');
    cg.addColorStop(1, 'rgba(170,178,195,0)');
    x.fillStyle = cg;
    x.beginPath();
    x.arc(cgx, cgy, cr, 0, Math.PI * 2);
    x.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.minFilter = THREE.LinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
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
  private readonly realSun: THREE.Mesh;  // 真实发光太阳（光影开）
  private readonly sunGlow: THREE.Mesh;  // 太阳柔和光晕（光影开，加法混合）
  private readonly realMoon: THREE.Mesh; // 真实月亮（光影开）
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

    // 真实日月（光影开时显示）
    this.realSun = new THREE.Mesh(new THREE.PlaneGeometry(52, 52), sky(makeRealSunTex()));
    this.sunGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(150, 150),
      new THREE.MeshBasicMaterial({ map: makeSunGlowTex(), transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending }),
    );
    this.realMoon = new THREE.Mesh(new THREE.PlaneGeometry(44, 44), sky(makeRealMoonTex()));
    this.realSun.visible = this.sunGlow.visible = this.realMoon.visible = false;

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
    // ⚠️ 512² 柔云贴图(createImageData≈1MB)【延迟】到光影开时才建——光影关根本不显示柔云，不该为它付内存。
    //    它本是无条件在此创建，在低内存机上成了压垮 `new SkyObjects` 的那次 createImageData OOM(用户"进不去世界"根因)。
    this.softMat = new THREE.MeshBasicMaterial({
      transparent: true,
      depthWrite: false,
      opacity: 0.8,
      side: THREE.DoubleSide,
      fog: false,
    });
    this.softClouds = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), this.softMat);
    this.softClouds.rotation.x = -Math.PI / 2;
    this.softClouds.visible = false;

    scene.add(this.sun, this.moon, this.realSun, this.sunGlow, this.realMoon, this.voxelClouds, this.softClouds);
  }

  /** 光影画质：off → MC 立体方块云 + 方块日月；standard/high → 柔和真实云 + 真实日月。 */
  setLightingQuality(q: LightingQuality): void {
    const on = q !== 'off';
    this.shaders = on;
    if (on) this.ensureSoftCloud(); // 光影开才建 512² 柔云贴图(延迟分配；光影关不付这块内存)
    const softReady = this.softMat.map !== null;
    this.softClouds.visible = on && softReady;
    this.voxelClouds.visible = !on || !softReady; // 光影关→立体云；光影开但柔云没建成(内存不足)→回退立体云,不至于没云
    this.sun.visible = !on;
    this.moon.visible = !on;
    this.realSun.visible = on;
    this.sunGlow.visible = on;
    this.realMoon.visible = on;
  }

  /** 延迟创建 512² 柔云贴图(≈1MB)。仅光影开时调用；内存不足时 catch 降级(跳过柔云→回退立体云)，绝不让整局崩。 */
  private ensureSoftCloud(): void {
    if (this.softMat.map) return; // 已建过
    try {
      const tex = makeSoftCloudTex();
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(3, 3); // 少而大的柔云团
      this.softMat.map = tex;
      this.softMat.needsUpdate = true;
    } catch (err) {
      console.warn('[SkyObjects] 柔云贴图创建失败(内存紧张),降级为立体云:', err);
    }
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

    // 真实日月与方块版同位同朝向（setLightingQuality 控制哪组可见）
    this.realSun.position.copy(this.sun.position);
    this.realSun.lookAt(camPos);
    this.sunGlow.position.copy(this.sun.position);
    this.sunGlow.lookAt(camPos);
    this.realMoon.position.copy(this.moon.position);
    this.realMoon.lookAt(camPos);

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
  const S = 512; // 提分辨率，掠角看更清晰
  const P = 8; // 基础噪声周期 → 平铺无缝（各倍频周期都是 P 的整数倍，照样无缝）
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  const img = x.createImageData(S, S);
  // 4 倍频 FBM（周期对齐 → 仍无缝）：比原来 2 倍频自然得多，云有大团+细絮的层次，不再是糊块。
  const fbm = (u: number, v: number): number => {
    let n = 0;
    let amp = 0.5;
    let f = 1;
    let norm = 0;
    for (let o = 0; o < 4; o++) {
      n += pnoise(u * f, v * f, P * f) * amp;
      norm += amp;
      amp *= 0.5;
      f *= 2;
    }
    return n / norm;
  };
  for (let py = 0; py < S; py++) {
    for (let px = 0; px < S; px++) {
      const u = (px / S) * P;
      const v = (py / S) * P;
      let d = fbm(u, v);
      d = Math.max(0, Math.min(1, (d - 0.46) / 0.3)); // 阈值 → 蓬松、稀疏
      const a = d * d * (3 - 2 * d); // smoothstep → 软边
      const shade = 224 + 31 * a; // 厚处更亮白、薄絮偏冷白 → 有体积感（不再是纯平白）
      const i = (py * S + px) * 4;
      img.data[i] = shade;
      img.data[i + 1] = shade;
      img.data[i + 2] = Math.min(255, shade + 6); // 极轻微偏蓝 → 高空感
      img.data[i + 3] = a * 230;
    }
  }
  x.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter; // 柔和（非像素）
  t.anisotropy = 4; // 掠角（朝地平线看）更清晰
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
