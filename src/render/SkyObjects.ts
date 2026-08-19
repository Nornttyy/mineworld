import * as THREE from 'three';
import { NO_WATER_REFLECTION_LAYER, SKY_RENDER_LAYER } from './renderLayers';
import { DAY_LENGTH, skyStateAt, skyDarkenAt } from '../core/world/dayNight';
import type { LightingQuality } from '../core/settings';

// —— 真实云(光影档)：程序化 shader 云平面 ——
// 纯片元程序噪声，无贴图(旧 512² 贴图云既糊又是低内存机 OOM 稻草)：任意距离清晰、云形缓慢演变。
// 形状=4 octave 值噪声 + domain warp(菜花状积云边缘)；体积感=朝太阳方向偏移采样密度差(向阳亮/背阳暗)；
// 颜色=uTint 随昼夜(白天白/黄昏暖橙/夜暗蓝灰)；世界坐标锚定(平面跟随相机,噪声用世界 XZ→云不跟人跑)。
const CLOUD_VERT = /* glsl */ `
varying vec3 vW;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vW = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`.trim();

const CLOUD_FRAG = /* glsl */ `
uniform float uTime;
uniform vec3 uTint;
uniform vec3 uSunDir;
varying vec3 vW;
float mwH2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float mwVN(vec2 p){
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  float a = mwH2(i); float b = mwH2(i + vec2(1.0, 0.0)); float c = mwH2(i + vec2(0.0, 1.0)); float d = mwH2(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float mwFBM(vec2 p){
  float n = 0.0; float amp = 0.5;
  for (int o = 0; o < 4; o++) { n += mwVN(p) * amp; p = p * 2.13 + vec2(17.3, 9.1); amp *= 0.5; }
  return n / 0.9375;
}
void main() {
  // 更高频、稀疏的云团；旧 0.006 在低云平面上会形成遮住半个天空的巨大灰色棉团。
  vec2 p = vW.xz * 0.0115;
  // domain warp(一次,两处 fbm 共用)：云缘卷曲成团,不是均匀雾斑；第二时间尺度让云形慢慢演变
  vec2 q = p + 0.28 * vec2(mwFBM(p * 1.7 + vec2(0.0, uTime * 0.0020)), mwFBM(p * 1.7 + vec2(5.2, uTime * 0.0017)));
  vec2 drift = vec2(uTime * 0.0110, uTime * 0.0032); // 整体缓飘
  float d = mwFBM(q + drift);
  float edgeDetail = mwVN((q + drift) * 6.1 + vec2(uTime * 0.001, -uTime * 0.0013));
  float density = d + (edgeDetail - 0.5) * 0.12;
  float cov = smoothstep(0.585, 0.65, density);
  if (cov < 0.004) discard;
  // 体积感：朝太阳水平方向偏移再采一次,密度差→向阳侧亮、厚处底部暗(白天云要白,暗部别压狠)
  vec2 sunXZ = normalize(uSunDir.xz + vec2(1e-4, 0.0));
  float d2 = mwFBM(q + drift + sunXZ * 0.085);
  float lit = clamp(0.82 + (d2 - d) * 4.2, 0.62, 1.03);
  float dense = smoothstep(0.50, 0.88, d); // 厚处更白亮
  vec3 col = uTint * mix(0.9, 1.01, dense) * lit;
  float dist = length(vW.xz - cameraPosition.xz);
  float fade = 1.0 - smoothstep(360.0, 620.0, dist); // 远处淡出融进地平线雾
  gl_FragColor = vec4(col, cov * 0.64 * fade);
  #include <colorspace_fragment>
}
`.trim();

// 星空：确定性伪随机分布在天球上，随天球一起转(与日月同角速)，夜里渐显。MC 原版就有星星。
function makeStars(): THREE.Points {
  const N = 850;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const R = 310;
  let s = 12345;
  const rnd = (): number => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
  for (let i = 0; i < N; i++) {
    // 均匀球面分布
    const z = rnd() * 2 - 1;
    const a = rnd() * Math.PI * 2;
    const r = Math.sqrt(1 - z * z);
    pos[i * 3] = Math.cos(a) * r * R;
    pos[i * 3 + 1] = Math.sin(a) * r * R;
    pos[i * 3 + 2] = z * R;
    const b = 0.35 + rnd() * 0.65; // 亮度差异
    col[i * 3] = b;
    col[i * 3 + 1] = b;
    col[i * 3 + 2] = Math.min(1, b * (0.92 + rnd() * 0.16)); // 少数偏暖/偏冷
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const m = new THREE.PointsMaterial({
    size: 1.7,
    sizeAttenuation: false,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    fog: false,
  });
  const p = new THREE.Points(g, m);
  p.frustumCulled = false;
  return p;
}

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
  g.addColorStop(0, 'rgba(255,255,255,1)'); // 中心：纯白
  g.addColorStop(0.4, 'rgba(255,255,240,1)'); // 内环：近白
  g.addColorStop(0.7, 'rgba(255,251,214,1)'); // 外环：淡黄(非橙)
  g.addColorStop(0.88, 'rgba(255,248,200,0.5)'); // 边缘：淡黄半透
  g.addColorStop(1, 'rgba(255,246,190,0)'); // 外缘：透明
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

// 太阳光晕：柔和暖色径向辉光（中心半透明→边缘全透）。
// ⚠️ 曾是 0.5/0.32/0.14 的浓晕 + 150 大平面：低太阳时叠上 bloom/god-ray 把半边天糊成大白斑
// (用户截图：水面上一团白雾)。压淡压小——辉光是点缀，主亮感交给 bloom(只作用于真亮源)。
function makeSunGlowTex(): THREE.CanvasTexture {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const x = c.getContext('2d') as CanvasRenderingContext2D;
  const cx2 = S / 2;
  const r = S / 2;
  const g = x.createRadialGradient(cx2, cx2, 0, cx2, cx2, r);
  g.addColorStop(0, 'rgba(255,255,238,0.30)'); // 中心：淡白黄半透(非橙)
  g.addColorStop(0.25, 'rgba(255,252,224,0.16)'); // 内辉
  g.addColorStop(0.55, 'rgba(255,249,208,0.07)'); // 中辉
  g.addColorStop(0.8, 'rgba(255,247,198,0.02)'); // 外辉
  g.addColorStop(1, 'rgba(255,245,188,0)'); // 边缘：全透
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
  g.addColorStop(0, 'rgba(245,248,255,1)'); // 高光中心
  g.addColorStop(0.55, 'rgba(220,228,242,1)'); // 月面中部
  g.addColorStop(0.82, 'rgba(190,200,220,1)'); // 边缘暗部
  g.addColorStop(0.92, 'rgba(170,180,205,0.5)'); // 柔和边缘
  g.addColorStop(1, 'rgba(150,165,195,0)'); // 外缘透明
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
  return (
    vnoise(x, z) * 0.6 + vnoise(x * 2.3 + 5.1, z * 2.3 - 3.7) * 0.3 + vnoise(x * 4.7, z * 4.7) * 0.1
  );
}

// —— 立体云参数（MC 风：稀疏的 3D 白盒层）——
const CLOUD_CS = 16; // 每个云格边长（格）
const CLOUD_TH = 5; // 云层厚度（格）
const CLOUD_GRID = 28; // 云层覆盖格数（≈448 格，靠雾在地平线淡出）
const CLOUD_Y = 232; // 抬高云层，避免低空巨型云块贴脸遮住大半天空
const CLOUD_NOISE_SCALE = 0.18; // 噪声频率（越小云团越大越稀）
const CLOUD_THRESHOLD = 0.62; // 密度阈值（越高云越少）—— 解决"云太多"
const CLOUD_DRIFT = 0.012; // 每帧飘移（格），缓风

// 某世界云格是否有云（确定性，世界固定 → 可走出云底，符合 MC）。
function cloudOn(cx: number, cz: number): boolean {
  return fbm(cx * CLOUD_NOISE_SCALE, cz * CLOUD_NOISE_SCALE) > CLOUD_THRESHOLD;
}

// 往数组里塞一个白盒（6 面、面亮度烤进顶点色给 3D 立体感）。双面材质 → 不在意绕序。
const BOX_FACES: { o: number[][]; s: number }[] = [
  {
    o: [
      [1, -1, -1],
      [1, 1, -1],
      [1, 1, 1],
      [1, -1, 1],
    ],
    s: 0.82,
  }, // +X
  {
    o: [
      [-1, -1, 1],
      [-1, 1, 1],
      [-1, 1, -1],
      [-1, -1, -1],
    ],
    s: 0.82,
  }, // -X
  {
    o: [
      [-1, 1, -1],
      [-1, 1, 1],
      [1, 1, 1],
      [1, 1, -1],
    ],
    s: 1.0,
  }, // +Y 顶（最亮）
  {
    o: [
      [-1, -1, 1],
      [-1, -1, -1],
      [1, -1, -1],
      [1, -1, 1],
    ],
    s: 0.6,
  }, // -Y 底（最暗）
  {
    o: [
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
      [-1, -1, 1],
    ],
    s: 0.88,
  }, // +Z
  {
    o: [
      [-1, -1, -1],
      [-1, 1, -1],
      [1, 1, -1],
      [1, -1, -1],
    ],
    s: 0.88,
  }, // -Z
];
function addBox(
  P: number[],
  C: number[],
  I: number[],
  cx: number,
  cy: number,
  cz: number,
  w: number,
  h: number,
  d: number,
): void {
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

/** 天空对象：日月(随昼夜东升西落、对侧) + 云 + 星空。
 *  云按光影档切换：off = MC 立体方块云；standard/high = 程序化真实云(shader 平面,有形有影会演变)。
 *  ⚠️ 旧"真实云"是 512² fbm 贴图平面——糊斑 + OOM 稻草,已删；新版纯片元程序噪声(无贴图),
 *  云有清晰边界、向阳亮背阳暗、随昼夜染色。星空两档都有(MC 原版就有星星)。 */
export class SkyObjects {
  private readonly sun: THREE.Mesh;
  private readonly moon: THREE.Mesh;
  private readonly realSun: THREE.Mesh; // 真实发光太阳（光影开）
  private readonly sunGlow: THREE.Mesh; // 太阳柔和光晕（光影开，加法混合）
  private readonly realMoon: THREE.Mesh; // 真实月亮（光影开）
  private readonly voxelClouds: THREE.Mesh; // 立体方块云（光影关）
  private readonly realClouds: THREE.Mesh; // 程序化真实云（光影开）
  private readonly cloudUniforms: {
    uTime: { value: number };
    uTint: { value: THREE.Color };
    uSunDir: { value: THREE.Vector3 };
  };
  private readonly stars: THREE.Points; // 星空（夜里渐显，随天球转）
  private readonly starGroup: THREE.Group;
  private readonly dir = new THREE.Vector3();
  private drift = 0; // 云缓飘累计（格）
  private cloudOriginX = NaN; // 立体云已建网格的格原点（变了才重建）
  private cloudOriginZ = NaN;
  private lq: LightingQuality = 'off'; // 当前光影档（供 setDimension('overworld') 恢复）
  private dim: 'overworld' | 'nether' = 'overworld'; // 当前维度

  constructor(scene: THREE.Scene) {
    const sky = (tex: THREE.Texture): THREE.MeshBasicMaterial =>
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, fog: false });
    this.sun = new THREE.Mesh(new THREE.PlaneGeometry(46, 46), sky(makeSunTex()));
    this.moon = new THREE.Mesh(new THREE.PlaneGeometry(38, 38), sky(makeMoonTex()));

    // 真实日月（光影开时显示）
    this.realSun = new THREE.Mesh(new THREE.PlaneGeometry(52, 52), sky(makeRealSunTex()));
    this.sunGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(88, 88), // 曾 150：低太阳时半边天全是晕(大白斑)。88≈太阳盘 1.7 倍，点缀即可
      new THREE.MeshBasicMaterial({
        map: makeSunGlowTex(),
        transparent: true,
        depthWrite: false,
        fog: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.realMoon = new THREE.Mesh(new THREE.PlaneGeometry(44, 44), sky(makeRealMoonTex()));
    // 水材质会用单一 GGX BRDF 计算太阳。若把 HDR 太阳盘/光晕再次画进镜像 RT，
    // 同一光源会被计算两次并产生不稳定热像素；玩家相机启用此层，镜像相机排除它。
    this.realSun.layers.set(NO_WATER_REFLECTION_LAYER);
    this.sunGlow.layers.set(NO_WATER_REFLECTION_LAYER);
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

    // 真实云(光影档)：程序化 shader 云平面，跟随相机、噪声用世界坐标(云世界锚定)。
    this.cloudUniforms = {
      uTime: { value: 0 },
      uTint: { value: new THREE.Color(1, 1, 1) },
      uSunDir: { value: new THREE.Vector3(0.5, 0.8, 0.28) },
    };
    const cloudMat = new THREE.ShaderMaterial({
      uniforms: this.cloudUniforms,
      vertexShader: CLOUD_VERT,
      fragmentShader: CLOUD_FRAG,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.realClouds = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), cloudMat);
    this.realClouds.rotation.x = -Math.PI / 2;
    this.realClouds.frustumCulled = false;
    this.realClouds.visible = false;

    // 星空：夜里渐显。renderOrder: 穹顶(-1000) < 星(-900) < 日月(-850) < 云(-800) < 地形/水
    // ——透明物按 renderOrder 排序,云画在星和日月之上(云能遮日月/星),都不写深度、被地形正常遮挡。
    this.stars = makeStars();
    this.starGroup = new THREE.Group();
    this.starGroup.add(this.stars);
    this.stars.renderOrder = -900;
    for (const m of [this.sun, this.moon, this.realSun, this.sunGlow, this.realMoon])
      m.renderOrder = -850;
    this.realClouds.renderOrder = -800;
    this.voxelClouds.renderOrder = -800;

    // 环境天空独立成层：镜像相机可见，水下折射相机只看 layer0，因而不会把
    // 玩家看到的天空、云或月亮错误地贴进水面透射。HDR 太阳仍保留专用 layer2。
    for (const object of [
      this.sun,
      this.moon,
      this.realMoon,
      this.voxelClouds,
      this.realClouds,
      this.starGroup,
      this.stars,
    ])
      object.layers.set(SKY_RENDER_LAYER);

    scene.add(
      this.sun,
      this.moon,
      this.realSun,
      this.sunGlow,
      this.realMoon,
      this.voxelClouds,
      this.realClouds,
      this.starGroup,
    );
  }

  /** 维度切换：下界隐藏日月云星；主世界按当前光影档恢复。 */
  setDimension(dim: 'overworld' | 'nether'): void {
    this.dim = dim;
    if (dim === 'nether') {
      for (const m of [
        this.sun,
        this.moon,
        this.realSun,
        this.sunGlow,
        this.realMoon,
        this.voxelClouds,
        this.realClouds,
        this.starGroup,
      ]) {
        m.visible = false;
      }
    } else {
      this.starGroup.visible = true;
      this.setLightingQuality(this.lq); // 恢复主世界显隐（按当前光影档）
    }
  }

  /** 光影画质：off=方块像素日月+MC 体素云；standard/high=真实日月+光晕+程序化真实云。 */
  setLightingQuality(q: LightingQuality): void {
    this.lq = q;
    const on = q !== 'off';
    this.voxelClouds.visible = !on;
    this.realClouds.visible = on;
    this.sun.visible = !on;
    this.moon.visible = !on;
    this.realSun.visible = on;
    this.sunGlow.visible = on;
    this.realMoon.visible = on;
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
        addBox(
          P,
          C,
          I,
          i * CLOUD_CS + CLOUD_CS / 2,
          0,
          j * CLOUD_CS + CLOUD_CS / 2,
          w,
          CLOUD_TH,
          w,
        );
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
    if (this.dim === 'nether') return; // 下界无日月云，跳过所有定位与云重建
    const th = (worldTime / DAY_LENGTH) * Math.PI * 2; // 0=日出
    // 侧倾 0.1≈MC 1.12 celestial angle(正午过天顶,影子极短)；曾 0.28=太阳永到不了头顶,正午影子仍拖长
    this.dir.set(Math.cos(th), Math.sin(th), 0.1).normalize();
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

    // 星空：随天球转(与日月同角速)、夜里渐显(白天 0)。skyDarken 0(白天)..11(半夜)。
    this.starGroup.position.copy(camPos);
    this.starGroup.rotation.z = th;
    const night = skyDarkenAt(worldTime) / 11;
    (this.stars.material as THREE.PointsMaterial).opacity = Math.pow(night, 1.5) * 0.9;

    if (this.realClouds.visible) {
      // 真实云：平面跟随相机(噪声用世界坐标→云世界锚定不跟人跑)；昼夜染色用 worldTint
      // (白天白/黎明黄昏暖/夜暗蓝灰,与方块天光同一套关键帧,天色一致)。
      this.realClouds.position.set(camPos.x, CLOUD_Y, camPos.z);
      // uTime=drift(≈0.72/s @60fps)：×shader 内 0.011 → ~1.3 格/s 的缓飘(MC 云速量级)
      this.cloudUniforms.uTime.value = this.drift;
      const wt = skyStateAt(worldTime).worldTint;
      this.cloudUniforms.uTint.value.setRGB(wt[0], wt[1], wt[2], THREE.SRGBColorSpace);
      this.cloudUniforms.uSunDir.value.copy(this.dir);
      return; // 光影档不用重建体素云
    }

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
