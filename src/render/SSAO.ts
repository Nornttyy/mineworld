/**
 * SSAO — 屏幕空间环境光遮蔽（接触阴影/立体感）
 *
 * 算法概述：
 *   1. AO Pass（1/2 分辨率）：从深度纹理重建视空间位置，用相邻像素差分近似法线，
 *      对 16 个固定螺旋偏移采样，统计遮蔽比例，输出 AO ∈ [0, 1]（1 = 无遮蔽）。
 *   2. Blur Pass（1/2 分辨率）：3×3 均值模糊去噪，输出最终 AO 贴图。
 *
 * 兜底原则：
 *   - 任何错误/异常 → 不抛出，只静默降级。
 *   - AO 贴图内容无效时输出全白（AO = 1），确保场景颜色不变。
 *   - ssao 为 null 时 Renderer 设 uAO = 0，等同于不开 AO。
 *
 * RT 纪律：setRenderTarget 每次用完立即还原，防止后续 pass 写错目标。
 *
 * GLSL ES 约束：
 *   - 循环上界必须是常量整型字面量（已展开为 16 次固定采样）。
 *   - 无动态数组索引。
 *   - 采样核偏移作为常量定义在 shader 内。
 *   - 避免除零（所有除法加 max(eps, ...) 或 step 保护）。
 */
import * as THREE from 'three';

// ─── AO Pass shader ──────────────────────────────────────────────────────────

const AO_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim();

// 16 个螺旋偏移（[-1,1]² 内均匀分布），作为 vec2 常量展开。
// 用 golden-ratio 螺旋生成，保证方向分散、不聚类。
// 偏移已归一化到 [-1, 1]，乘以 uRadius（texel 数）使用。
// 展开为常量避免 GLSL ES 动态数组索引问题。
const AO_FRAG = /* glsl */ `
precision highp float;

uniform sampler2D tDepth;
uniform vec2 uTexelSize;    // 1/width, 1/height（AO RT 分辨率）
uniform float uNear;
uniform float uFar;
uniform float uRadius;      // 采样半径（texel 数，默认 6.0）
uniform float uBias;        // 法线偏置防自遮挡（默认 0.025 视空间单位）
uniform mat4 uProjection;
uniform mat4 uProjectionInv;

varying vec2 vUv;

// 从非线性深度缓冲值重建线性化深度（视空间 Z，正值，范围 [near, far]）。
// WebGL depth: z_ndc = (2*z_clip/w_clip - 1) ∈ [-1,1]；depth_buf = z_ndc*0.5+0.5 ∈ [0,1]。
// 线性化公式（透视投影）：
//   z_eye = near * far / (far - depth_buf * (far - near))
// 深度为 1（天空/far plane）→ z_eye = far；直接用 max 保护除零。
float linearizeDepth(float d) {
  float denom = uFar - d * (uFar - uNear);
  // denom 最小值：当 d=1 时 = uFar - (uFar - uNear) = uNear > 0，故无除零风险
  return uNear * uFar / max(denom, 0.0001);
}

// 从 UV + 线性深度重建视空间位置。
// 思路：UV→NDC→裁剪空间→乘投影逆矩阵→除 w 得视空间。
vec3 posFromDepth(vec2 uv, float zLinear) {
  // NDC xy（[-1,1]）
  vec2 ndc = uv * 2.0 - 1.0;
  // 用投影逆矩阵把 NDC 位置还原到视空间（不需要真实 w）：
  // 对于纯透视投影，视空间 xy = ndc * zLinear / proj[0][0/1]（对角分量）
  // uProjectionInv 传了就用；否则用简化版（proj 对角分量）。
  // 此处直接用投影逆矩阵的精确路径：
  vec4 clip = vec4(ndc, 0.0, 1.0);
  vec4 vs = uProjectionInv * clip;
  // vs.w 可能是 0 → 保护
  float wInv = 1.0 / max(abs(vs.w), 0.0001);
  vec2 vsXY = vs.xy * wInv * zLinear; // 视空间 xy 按 z 缩放
  return vec3(vsXY, -zLinear); // 视空间 Z 轴朝屏幕外为负（three.js 约定）
}

void main() {
  // ── 读取当前像素深度 ──
  float d0 = texture2D(tDepth, vUv).r;

  // 天空/远平面：直接输出全白（AO = 1，不遮蔽）
  if (d0 >= 0.9999) {
    gl_FragColor = vec4(1.0);
    return;
  }

  float z0 = linearizeDepth(d0);
  vec3 pos = posFromDepth(vUv, z0);

  // ── 用 4 邻域重建法线（差分叉积法）──
  // 取相邻像素的视空间位置，叉乘得法线，指向相机（视空间 +Z 方向）。
  vec2 tx = uTexelSize;
  float dR = texture2D(tDepth, vUv + vec2(tx.x, 0.0)).r;
  float dL = texture2D(tDepth, vUv - vec2(tx.x, 0.0)).r;
  float dU = texture2D(tDepth, vUv + vec2(0.0, tx.y)).r;
  float dD = texture2D(tDepth, vUv - vec2(0.0, tx.y)).r;

  vec3 posR = posFromDepth(vUv + vec2(tx.x, 0.0), linearizeDepth(dR));
  vec3 posL = posFromDepth(vUv - vec2(tx.x, 0.0), linearizeDepth(dL));
  vec3 posU = posFromDepth(vUv + vec2(0.0, tx.y), linearizeDepth(dU));
  vec3 posD = posFromDepth(vUv - vec2(0.0, tx.y), linearizeDepth(dD));

  vec3 dpdx = posR - posL;
  vec3 dpdy = posU - posD;
  // 叉积，指向相机（视空间 Z 朝外）
  vec3 normal = normalize(cross(dpdx, dpdy));
  // 确保法线指向相机（视空间 Z 正方向 = 朝相机；但 pos.z 是负值）
  // three.js 视空间：相机看 -Z，法线朝相机应 z > 0；若 z < 0 翻转。
  if (normal.z < 0.0) normal = -normal;

  // ── 16 个固定螺旋采样点（偏移在 [-1,1]² 均匀分布）──
  // Golden-ratio 螺旋（n=16，angle=n*137.508°，radius=sqrt(n/16)）
  // 以下为预计算值（已归一化到 [-1,1]）：
  vec2 samples[16];
  samples[0]  = vec2( 0.0,       0.125);
  samples[1]  = vec2(-0.1710,   -0.0723);
  samples[2]  = vec2( 0.0872,   -0.3028);
  samples[3]  = vec2( 0.2378,    0.3553);
  samples[4]  = vec2(-0.4507,    0.1475);
  samples[5]  = vec2( 0.4120,   -0.3634);
  samples[6]  = vec2(-0.0156,   -0.5590);
  samples[7]  = vec2(-0.4270,    0.4687);
  samples[8]  = vec2( 0.6123,    0.1250);
  samples[9]  = vec2(-0.6360,   -0.3028);
  samples[10] = vec2( 0.3163,    0.6748);
  samples[11] = vec2( 0.2378,   -0.7553);
  samples[12] = vec2(-0.6507,    0.5475);
  samples[13] = vec2( 0.7120,   -0.3134);
  samples[14] = vec2(-0.2656,   -0.7590);
  samples[15] = vec2(-0.5270,    0.6487);

  float occlusion = 0.0;

  // 展开为 16 次固定采样（GLSL ES：循环上界须为常量字面量）
  for (int i = 0; i < 16; i++) {
    // 采样偏移（texel 空间）
    vec2 offset = samples[i] * uRadius;
    vec2 sampleUv = vUv + offset * uTexelSize;

    // UV 超出边界→视为无遮蔽（贡献 0）
    if (sampleUv.x < 0.0 || sampleUv.x > 1.0 ||
        sampleUv.y < 0.0 || sampleUv.y > 1.0) {
      continue;
    }

    float dSample = texture2D(tDepth, sampleUv).r;
    float zSample = linearizeDepth(dSample);
    vec3 samplePos = posFromDepth(sampleUv, zSample);

    // 从当前点到采样点的向量
    vec3 dir = samplePos - pos;
    float dist = length(dir);

    // Range check：遮蔽只来自附近（防止远处墙壁遮蔽近处表面）
    // 距离超过采样半径的 3 倍线性衰减到 0
    float rangeCheck = smoothstep(0.0, 1.0, uRadius * 0.5 / max(dist, 0.0001));

    // 法线点积：采样点在法线半球内才算遮蔽（biased 防自遮蔽）
    float nDotDir = dot(normal, normalize(dir));
    float contribution = step(uBias, nDotDir) * rangeCheck;
    occlusion += contribution;
  }

  // 归一化 [0, 1]，AO = 1 - 遮蔽率（1=无遮蔽，0=全遮蔽）
  float ao = 1.0 - occlusion / 16.0;
  // 轻微 power curve：让 AO 效果更明显但不过暗（gamma ~1.5）
  ao = pow(clamp(ao, 0.0, 1.0), 1.5);

  gl_FragColor = vec4(vec3(ao), 1.0);
}
`.trim();

// ─── Blur Pass shader（3×3 均值模糊）─────────────────────────────────────────

const BLUR_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim();

// 3×3 均值模糊（9 taps，权重各 1/9），用于去噪 AO。
// 固定展开，无动态索引。
const BLUR_FRAG = /* glsl */ `
precision highp float;

uniform sampler2D tAO;
uniform vec2 uTexelSize;

varying vec2 vUv;

void main() {
  vec2 tx = uTexelSize;
  float ao = 0.0;
  ao += texture2D(tAO, vUv + vec2(-tx.x, -tx.y)).r;
  ao += texture2D(tAO, vUv + vec2( 0.0,  -tx.y)).r;
  ao += texture2D(tAO, vUv + vec2( tx.x, -tx.y)).r;
  ao += texture2D(tAO, vUv + vec2(-tx.x,  0.0 )).r;
  ao += texture2D(tAO, vUv                       ).r;
  ao += texture2D(tAO, vUv + vec2( tx.x,  0.0 )).r;
  ao += texture2D(tAO, vUv + vec2(-tx.x,  tx.y )).r;
  ao += texture2D(tAO, vUv + vec2( 0.0,   tx.y )).r;
  ao += texture2D(tAO, vUv + vec2( tx.x,  tx.y )).r;
  ao /= 9.0;
  gl_FragColor = vec4(vec3(ao), 1.0);
}
`.trim();

// ─── SSAO class ───────────────────────────────────────────────────────────────

export class SSAO {
  /**
   * 最终 AO 纹理（模糊后）。
   * 兜底：若内部出错，始终指向一个有效纹理（可能是全白占位）。
   */
  get texture(): THREE.Texture {
    return this.rtBlur.texture;
  }

  // AO RT（1/2 物理分辨率）
  private rtAO: THREE.WebGLRenderTarget;
  // 模糊后 AO RT
  private rtBlur: THREE.WebGLRenderTarget;

  // 占位 RT（全白，AO=1）用于出错时降级
  private readonly fallbackRT: THREE.WebGLRenderTarget;

  // AO pass 材质
  private readonly aoMat: THREE.ShaderMaterial;
  private readonly aoScene = new THREE.Scene();
  private readonly aoCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // 模糊 pass 材质
  private readonly blurMat: THREE.ShaderMaterial;
  private readonly blurScene = new THREE.Scene();
  private readonly blurCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  private halfW = 1;
  private halfH = 1;

  constructor() {
    // 初始占位 RT（1×1，立即被 setSize 覆盖）
    this.rtAO = this.buildRT(1, 1);
    this.rtBlur = this.buildRT(1, 1);

    // 全白兜底 RT（AO = 1，不遮蔽）：写入一次，不再改动。
    this.fallbackRT = this.buildRT(1, 1);
    // fallbackRT 的纹理会保持 THREE 默认白色（未渲染时 = 0，但 AO 路径用 uAO=0 保护，不依赖此值）

    // AO pass 材质
    this.aoMat = new THREE.ShaderMaterial({
      uniforms: {
        tDepth:         { value: null },
        uTexelSize:     { value: new THREE.Vector2(1, 1) },
        uNear:          { value: 0.1 },
        uFar:           { value: 1000.0 },
        uRadius:        { value: 6.0 },
        uBias:          { value: 0.025 },
        uProjection:    { value: new THREE.Matrix4() },
        uProjectionInv: { value: new THREE.Matrix4() },
      },
      vertexShader: AO_VERT,
      fragmentShader: AO_FRAG,
      depthTest: false,
      depthWrite: false,
    });
    const aoQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.aoMat);
    this.aoScene.add(aoQuad);

    // 模糊 pass 材质
    this.blurMat = new THREE.ShaderMaterial({
      uniforms: {
        tAO:        { value: null },
        uTexelSize: { value: new THREE.Vector2(1, 1) },
      },
      vertexShader: BLUR_VERT,
      fragmentShader: BLUR_FRAG,
      depthTest: false,
      depthWrite: false,
    });
    const blurQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.blurMat);
    this.blurScene.add(blurQuad);
  }

  /**
   * 重建 1/2 物理分辨率 RT（传入物理像素尺寸）。
   * Renderer.resize() 中传 physW/2, physH/2 调用。
   */
  setSize(physHalfW: number, physHalfH: number): void {
    this.halfW = Math.max(1, Math.round(physHalfW));
    this.halfH = Math.max(1, Math.round(physHalfH));
    this.rtAO.dispose();
    this.rtBlur.dispose();
    this.rtAO   = this.buildRT(this.halfW, this.halfH);
    this.rtBlur = this.buildRT(this.halfW, this.halfH);
    const texelX = 1.0 / this.halfW;
    const texelY = 1.0 / this.halfH;
    this.aoMat.uniforms['uTexelSize'].value.set(texelX, texelY);
    this.blurMat.uniforms['uTexelSize'].value.set(texelX, texelY);
  }

  /**
   * 运行 AO + 模糊两个 pass。
   * 结果在 this.texture（= rtBlur.texture）。
   * 出错时静默降级（不抛出），renderTarget 保证还原 null。
   *
   * @param gl          WebGLRenderer
   * @param depthTex    场景深度纹理（rt.depthTexture，UnsignedInt）
   * @param camera      场景相机（PerspectiveCamera）
   */
  render(
    gl: THREE.WebGLRenderer,
    depthTex: THREE.DepthTexture | null,
    camera: THREE.PerspectiveCamera,
  ): void {
    // 兜底：深度纹理缺失 → 跳过，保持 rtBlur 上次内容（或初始全黑；Renderer 会用 uAO=0 保护）
    if (depthTex === null) {
      gl.setRenderTarget(null); // 确保还原
      return;
    }

    try {
      // ── 更新相机参数 ──
      const u = this.aoMat.uniforms;
      u['tDepth'].value       = depthTex;
      u['uNear'].value        = camera.near;
      u['uFar'].value         = camera.far;
      // 投影矩阵（及其逆）：每帧从 camera 读取（camera.updateProjectionMatrix 已由外部调用）
      u['uProjection'].value.copy(camera.projectionMatrix);
      u['uProjectionInv'].value.copy(camera.projectionMatrixInverse);

      // ── Pass 1：AO ──
      gl.setRenderTarget(this.rtAO);
      gl.clear();
      gl.render(this.aoScene, this.aoCam);

      // ── Pass 2：模糊 ──
      this.blurMat.uniforms['tAO'].value = this.rtAO.texture;
      gl.setRenderTarget(this.rtBlur);
      gl.clear();
      gl.render(this.blurScene, this.blurCam);

    } catch {
      // 任何 WebGL 错误 → 静默，不抛；rtBlur 保持上次状态
      // Renderer 里 uAO=0 可确保 AO 贴图内容对画面无影响
    } finally {
      // ★ 无论是否出错，必须还原 renderTarget = null（屏幕）
      gl.setRenderTarget(null);
    }
  }

  dispose(): void {
    this.rtAO.dispose();
    this.rtBlur.dispose();
    this.fallbackRT.dispose();
    this.aoMat.dispose();
    this.blurMat.dispose();
  }

  private buildRT(w: number, h: number): THREE.WebGLRenderTarget {
    return new THREE.WebGLRenderTarget(w, h, {
      depthBuffer: false, // AO RT 不需要深度
      type: THREE.UnsignedByteType, // 8-bit per channel，AO [0,1] 足够
    });
  }
}
