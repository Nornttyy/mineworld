import * as THREE from 'three';
import { NO_WATER_REFLECTION_LAYER, SKY_RENDER_LAYER } from './renderLayers';
import { DAY_LENGTH, skyStateAt, skyDarkenAt } from '../core/world/dayNight';
import type { LightingQuality } from '../core/settings';
import {
  CLOUD_VOLUME_CONSTANTS,
  CLOUD_VOLUME_FRAG,
  CLOUD_VOLUME_VERT,
  cloudStepCount,
  makeCloudVolumeTexture,
} from './cloudVolume';

const CELESTIAL_RADIUS = 280;
const SUN_DIAMETER = 7.4; // ≈1.5°，旧 52 格巨盘约 10.6°
const MOON_DIAMETER = 8.8; // ≈1.8°，保留夜间可读性但不再占一大片天
const SUN_GLOW_DIAMETER = 32; // ≈6.5°，宽晕主要交给天空穹顶的 Mie 散射

const DISC_VERT = /* glsl */ `
varying vec2 vDisc;
void main() {
  vDisc = uv * 2.0 - 1.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`.trim();

const SUN_FRAG = /* glsl */ `
uniform float uVisibility;
varying vec2 vDisc;
void main() {
  float radius = length(vDisc);
  float aa = max(fwidth(radius) * 1.35, 0.0015);
  float mask = (1.0 - smoothstep(1.0 - aa, 1.0 + aa, radius)) * uVisibility;
  if (mask < 0.001) discard;
  float mu = sqrt(max(0.0, 1.0 - radius * radius));
  vec3 limb = mix(vec3(1.0, 0.68, 0.28), vec3(1.0, 0.97, 0.79), pow(mu, 0.55));
  float radiance = mix(2.8, 4.8, pow(mu, 0.42));
  gl_FragColor = vec4(limb * radiance, mask);
  #include <colorspace_fragment>
}
`.trim();

const SUN_GLOW_FRAG = /* glsl */ `
uniform float uVisibility;
varying vec2 vDisc;
void main() {
  float radius = length(vDisc);
  if (radius >= 1.0) discard;
  float glow = pow(1.0 - radius, 2.6) * 0.075 * uVisibility;
  gl_FragColor = vec4(vec3(1.0, 0.78, 0.38) * glow, 1.0);
  #include <colorspace_fragment>
}
`.trim();

const MOON_FRAG = /* glsl */ `
uniform float uVisibility;
varying vec2 vDisc;

float mwMoonHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float mwMoonNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = mwMoonHash(i);
  float b = mwMoonHash(i + vec2(1.0, 0.0));
  float c = mwMoonHash(i + vec2(0.0, 1.0));
  float d = mwMoonHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float mwCrater(vec2 p, vec2 centre, float radius) {
  float d = length(p - centre) / radius;
  float bowl = 1.0 - smoothstep(0.0, 0.72, d);
  float rim = smoothstep(0.64, 0.82, d) * (1.0 - smoothstep(0.82, 1.04, d));
  return bowl * 0.16 - rim * 0.045;
}
void main() {
  float r2 = dot(vDisc, vDisc);
  float radius = sqrt(r2);
  float aa = max(fwidth(radius) * 1.45, 0.0015);
  float mask = (1.0 - smoothstep(1.0 - aa, 1.0 + aa, radius)) * uVisibility;
  if (mask < 0.001) discard;

  float sphereZ = sqrt(max(0.0, 1.0 - r2));
  float maria = mwMoonNoise(vDisc * 2.15 + vec2(4.7, -2.9)) * 0.68
    + mwMoonNoise(vDisc * 5.4 + vec2(-8.2, 7.1)) * 0.32;
  float albedo = 0.94 - smoothstep(0.48, 0.73, maria) * 0.18;
  albedo -= mwCrater(vDisc, vec2(-0.33, 0.24), 0.19);
  albedo -= mwCrater(vDisc, vec2(0.28, 0.08), 0.14);
  albedo -= mwCrater(vDisc, vec2(-0.08, -0.34), 0.12);
  albedo -= mwCrater(vDisc, vec2(0.42, -0.31), 0.085);
  albedo -= mwCrater(vDisc, vec2(0.02, 0.46), 0.072);
  float sphereLight = 0.28 + 0.72 * pow(sphereZ, 0.58);
  vec3 moonTint = mix(vec3(0.46, 0.53, 0.67), vec3(0.82, 0.87, 0.96), sphereLight);
  gl_FragColor = vec4(moonTint * albedo * sphereLight, mask);
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
const CLOUD_DRIFT_SPEED = 0.72; // 每秒飘移（格），与旧 60 FPS 下的速度一致

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
 *  云按光影档切换：off = MC 立体方块云；standard/high = 有限高度体积云。
 *  光影档日月使用解析圆盘/球面材质，云用固定步进的 Beer-Lambert 体积积分；
 *  世界坐标形态、昼夜染色和太阳自遮蔽均连续，不依赖屏幕贴图或历史帧。 */
export class SkyObjects {
  private readonly sun: THREE.Mesh;
  private readonly moon: THREE.Mesh;
  private readonly realSun: THREE.Mesh; // 真实发光太阳（光影开）
  private readonly sunGlow: THREE.Mesh; // 太阳柔和光晕（光影开，加法混合）
  private readonly realMoon: THREE.Mesh; // 真实月亮（光影开）
  private readonly voxelClouds: THREE.Mesh; // 立体方块云（光影关）
  private readonly realClouds: THREE.Mesh; // 有限高度体积云（光影开）
  private readonly cloudUniforms: {
    uCloudNoise: { value: THREE.DataTexture };
    uTime: { value: number };
    uStepCount: { value: number };
    uTint: { value: THREE.Color };
    uSunDir: { value: THREE.Vector3 };
  };
  private readonly sunUniforms = { uVisibility: { value: 1 } };
  private readonly sunGlowUniforms = { uVisibility: { value: 1 } };
  private readonly moonUniforms = { uVisibility: { value: 1 } };
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

    // 光影档天体使用解析圆盘，不再把低分辨率径向渐变放大成模糊贴片。
    this.realSun = new THREE.Mesh(
      new THREE.PlaneGeometry(SUN_DIAMETER, SUN_DIAMETER),
      new THREE.ShaderMaterial({
        uniforms: this.sunUniforms,
        vertexShader: DISC_VERT,
        fragmentShader: SUN_FRAG,
        transparent: true,
        depthWrite: false,
      }),
    );
    this.sunGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(SUN_GLOW_DIAMETER, SUN_GLOW_DIAMETER),
      new THREE.ShaderMaterial({
        uniforms: this.sunGlowUniforms,
        vertexShader: DISC_VERT,
        fragmentShader: SUN_GLOW_FRAG,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.realMoon = new THREE.Mesh(
      new THREE.PlaneGeometry(MOON_DIAMETER, MOON_DIAMETER),
      new THREE.ShaderMaterial({
        uniforms: this.moonUniforms,
        vertexShader: DISC_VERT,
        fragmentShader: MOON_FRAG,
        transparent: true,
        depthWrite: false,
      }),
    );
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

    // 真实云(光影档)：有限高度 slab 内做稳定体积积分。固定 midpoint 采样不使用
    // jitter/历史帧，云具有真实厚度与自遮蔽，同时不会在移动时闪烁或拖影。
    this.cloudUniforms = {
      uCloudNoise: { value: makeCloudVolumeTexture() },
      uTime: { value: 0 },
      uStepCount: { value: cloudStepCount('standard') },
      uTint: { value: new THREE.Color(1, 1, 1) },
      uSunDir: { value: new THREE.Vector3(0.5, 0.8, 0.28) },
    };
    const cloudMat = new THREE.ShaderMaterial({
      uniforms: this.cloudUniforms,
      vertexShader: CLOUD_VOLUME_VERT,
      fragmentShader: CLOUD_VOLUME_FRAG,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.realClouds = new THREE.Mesh(
      new THREE.PlaneGeometry(CLOUD_VOLUME_CONSTANTS.extent, CLOUD_VOLUME_CONSTANTS.extent),
      cloudMat,
    );
    this.realClouds.rotation.x = -Math.PI / 2;
    this.realClouds.frustumCulled = false;
    this.realClouds.visible = false;
    this.realClouds.onBeforeRender = (_renderer, _scene, camera): void => {
      const requested = cloudStepCount(this.lq);
      this.cloudUniforms.uStepCount.value = camera.layers.isEnabled(NO_WATER_REFLECTION_LAYER)
        ? requested
        : Math.min(requested, CLOUD_VOLUME_CONSTANTS.reflectionSteps);
    };

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

  /** 光影画质：off=方块像素日月+MC 体素云；standard/high=解析日月+体积云。 */
  setLightingQuality(q: LightingQuality): void {
    this.lq = q;
    if (this.dim === 'nether') {
      for (const object of [
        this.sun,
        this.moon,
        this.realSun,
        this.sunGlow,
        this.realMoon,
        this.voxelClouds,
        this.realClouds,
        this.starGroup,
      ]) {
        object.visible = false;
      }
      return;
    }
    const on = q !== 'off';
    this.cloudUniforms.uStepCount.value = cloudStepCount(q);
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
  update(worldTime: number, camPos: THREE.Vector3, dt: number): void {
    if (this.dim === 'nether') return; // 下界无日月云，跳过所有定位与云重建
    const th = (worldTime / DAY_LENGTH) * Math.PI * 2; // 0=日出
    // 侧倾 0.1≈MC 1.12 celestial angle(正午过天顶,影子极短)；曾 0.28=太阳永到不了头顶,正午影子仍拖长
    this.dir.set(Math.cos(th), Math.sin(th), 0.1).normalize();
    const R = CELESTIAL_RADIUS;
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
    this.sunUniforms.uVisibility.value = THREE.MathUtils.smoothstep(this.dir.y, -0.055, 0.025);
    this.sunGlowUniforms.uVisibility.value = this.sunUniforms.uVisibility.value;
    this.moonUniforms.uVisibility.value = THREE.MathUtils.smoothstep(-this.dir.y, -0.055, 0.025);

    this.drift += CLOUD_DRIFT_SPEED * Math.max(0, dt); // 缓风按秒推进，不随显示器刷新率改变

    // 星空：随天球转(与日月同角速)、夜里渐显(白天 0)。skyDarken 0(白天)..11(半夜)。
    this.starGroup.position.copy(camPos);
    this.starGroup.rotation.z = th;
    const night = skyDarkenAt(worldTime) / 11;
    (this.stars.material as THREE.PointsMaterial).opacity = Math.pow(night, 1.5) * 0.9;

    if (this.realClouds.visible) {
      // 体积云入口面跟随相机(密度用世界坐标→云世界锚定不跟人跑)；昼夜染色用 worldTint
      // (白天白/黎明黄昏暖/夜暗蓝灰,与方块天光同一套关键帧,天色一致)。
      this.realClouds.position.set(camPos.x, CLOUD_VOLUME_CONSTANTS.baseY, camPos.z);
      // uTime=drift(≈0.72/s)，shader 以世界 UV 风向平移，速度与刷新率无关。
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
