/**
 * Bloom — 低分辨率辉光后处理（1/4 分辨率内部缓冲，游戏画面全分辨率不糊）
 *
 * 流程（5 个全屏 pass）：
 *   Pass 1  HDR 亮部提取 + 5-tap 抗闪烁降采 → bloomA（1/4 res）
 *   Pass 2..5  两轮横/纵 9-tap 高斯模糊，结果最终留在 bloomA
 *
 * 调用方：
 *   bloom.setSize(w4, h4)            — 每次 resize 时调（传 1/4 CSS 像素尺寸）
 *   bloom.render(gl, sceneColorTex)  — 每帧调；结果在 bloom.texture
 *   bloom.dispose()                  — 销毁时调
 *
 * 与 GodRays.ts 同款：OrthographicCamera(-1,1,1,-1) + PlaneGeometry(2,2) 全屏 quad。
 */
import * as THREE from 'three';

// ─── Pass 1：亮部提取 shader ────────────────────────────────────────────────

const EXTRACT_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim();

const EXTRACT_FRAG = /* glsl */ `
uniform sampler2D tScene;
uniform float uThreshold;
uniform float uKnee;
uniform vec2 uSourceTexel;
varying vec2 vUv;

vec3 extractHighlight(vec2 sampleUv) {
  vec3 c = texture2D(tScene, sampleUv).rgb;
  // 亮度（感知加权）
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  // Soft-knee 只让真正的 HDR 光源/镜面高光进入 Bloom。
  // 普通天空、雪和沙子都在 1.0 左右，最多只落在很轻的 knee 尾端，
  // 不会再整片被抽出后糊成白纱。
  float soft = clamp(luma - uThreshold + uKnee, 0.0, 2.0 * uKnee);
  soft = soft * soft / max(4.0 * uKnee, 0.0001);
  float contribution = max(luma - uThreshold, soft);
  // 按比例缩放颜色，保持色调
  float scale = (luma > 0.0001) ? (contribution / luma) : 0.0;
  return c * scale;
}

void main() {
  // 1/4 分辨率直接单点取样会让细小水光/火光随镜头闪烁。
  // 在【亮部提取后】再做 5-tap 抗闪烁降采：不会把普通像素平均成伪高光，
  // 同时能保留小面积 HDR 高光。
  vec2 o = uSourceTexel * 1.5;
  vec3 result = extractHighlight(vUv) * 0.20;
  result += extractHighlight(vUv + vec2(-o.x, -o.y)) * 0.20;
  result += extractHighlight(vUv + vec2( o.x, -o.y)) * 0.20;
  result += extractHighlight(vUv + vec2(-o.x,  o.y)) * 0.20;
  result += extractHighlight(vUv + vec2( o.x,  o.y)) * 0.20;
  gl_FragColor = vec4(result, 1.0);
}
`.trim();

// ─── Pass 2/3：分离高斯模糊 shader（横/纵通过 uHorizontal 控制）──────────────

const BLUR_VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim();

// 9-tap 高斯权重（sigma ≈ 2.0，已归一化）
// 权重：[0.0625, 0.125, 0.1875, 0.25, 0.1875, 0.125, 0.0625] = 7 tap
// 使用对称 9 tap（更宽松模糊，tap 偏移 -4..+4）：
// 高斯 sigma=2 → 权重近似（已归一化，和为 1.0）：
//   [-4]=0.02, [-3]=0.05, [-2]=0.12, [-1]=0.20, [0]=0.22, [1]=0.20, [2]=0.12, [3]=0.05, [4]=0.02
// 整数系数和 = 0.02+0.05+0.12+0.20+0.22+0.20+0.12+0.05+0.02 = 1.00 ✓
const BLUR_FRAG = /* glsl */ `
uniform sampler2D tBlur;
uniform vec2 uTexelSize;
uniform int uHorizontal;
varying vec2 vUv;

void main() {
  // 9-tap 高斯，sigma≈2，归一化权重（和=1.0）
  // 偏移 -4..+4，步长 = texel
  vec2 step0 = uTexelSize;

  vec2 d1 = (uHorizontal == 1) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

  vec3 result = vec3(0.0);
  // weights and offsets hardcoded as constants (GLSL ES requirement for constant loop bounds)
  // w[-4]=0.02, w[-3]=0.05, w[-2]=0.12, w[-1]=0.20, w[0]=0.22, w[1]=0.20, w[2]=0.12, w[3]=0.05, w[4]=0.02
  result += texture2D(tBlur, vUv + d1 * (-4.0) * step0).rgb * 0.02;
  result += texture2D(tBlur, vUv + d1 * (-3.0) * step0).rgb * 0.05;
  result += texture2D(tBlur, vUv + d1 * (-2.0) * step0).rgb * 0.12;
  result += texture2D(tBlur, vUv + d1 * (-1.0) * step0).rgb * 0.20;
  result += texture2D(tBlur, vUv                       ).rgb * 0.22;
  result += texture2D(tBlur, vUv + d1 * ( 1.0) * step0).rgb * 0.20;
  result += texture2D(tBlur, vUv + d1 * ( 2.0) * step0).rgb * 0.12;
  result += texture2D(tBlur, vUv + d1 * ( 3.0) * step0).rgb * 0.05;
  result += texture2D(tBlur, vUv + d1 * ( 4.0) * step0).rgb * 0.02;

  gl_FragColor = vec4(result, 1.0);
}
`.trim();

// ─── Bloom class ─────────────────────────────────────────────────────────────

export class Bloom {
  /** 最终辉光结果纹理（bloomA.texture），由 GodRays 合成 shader 读取。 */
  get texture(): THREE.Texture {
    return this.bloomA.texture;
  }

  private bloomA: THREE.WebGLRenderTarget;
  private bloomB: THREE.WebGLRenderTarget;

  // Pass 1：亮部提取
  private readonly extractMat: THREE.ShaderMaterial;
  private readonly extractScene = new THREE.Scene();
  private readonly extractCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  // Pass 2/3：分离高斯模糊（共用同一 material，切 uniform）
  private readonly blurMat: THREE.ShaderMaterial;
  private readonly blurScene = new THREE.Scene();
  private readonly blurCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  constructor(cssW: number, cssH: number) {
    // 初始 RT（占位 1×1，setSize 会立即重建）
    this.bloomA = this.buildRT(1, 1);
    this.bloomB = this.buildRT(1, 1);

    // Pass 1 material
    this.extractMat = new THREE.ShaderMaterial({
      uniforms: {
        tScene: { value: null },
        // 场景 RT 是线性 HalfFloat：1.0 以上才是真 HDR。1.05 会排除天空/雪/沙，
        // 0.22 soft knee 让水面高光和火光跨阈值时不会突然闪变。
        uThreshold: { value: 1.05 },
        uKnee: { value: 0.22 },
        uSourceTexel: { value: new THREE.Vector2(1, 1) },
      },
      vertexShader: EXTRACT_VERT,
      fragmentShader: EXTRACT_FRAG,
      depthTest: false,
      depthWrite: false,
    });
    const extractQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.extractMat);
    this.extractScene.add(extractQuad);

    // Pass 2/3 material（横/纵共用）
    this.blurMat = new THREE.ShaderMaterial({
      uniforms: {
        tBlur: { value: null },
        uTexelSize: { value: new THREE.Vector2(1, 1) },
        uHorizontal: { value: 1 },
      },
      vertexShader: BLUR_VERT,
      fragmentShader: BLUR_FRAG,
      depthTest: false,
      depthWrite: false,
    });
    const blurQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.blurMat);
    this.blurScene.add(blurQuad);

    // 立即建真实尺寸的 RT
    this.setSize(cssW, cssH);
  }

  /**
   * 重建 1/4 分辨率 RT。
   * Renderer.resize() 时调：传入 CSS 像素（不含 pixelRatio），这里内部乘 pr。
   * 注意：传进来的已经是 1/4 CSS px，此处再乘 pr 得物理 px。
   */
  setSize(quarterCssW: number, quarterCssH: number): void {
    this.bloomA.dispose();
    this.bloomB.dispose();
    const w = Math.max(1, Math.round(quarterCssW));
    const h = Math.max(1, Math.round(quarterCssH));
    this.bloomA = this.buildRT(w, h);
    this.bloomB = this.buildRT(w, h);
    // 输入场景 RT 是 Bloom RT 的 4 倍宽高（调用方传入物理像素 / 4）。
    this.extractMat.uniforms['uSourceTexel'].value.set(1.0 / (w * 4.0), 1.0 / (h * 4.0));
    // 更新模糊 pass 的 texel size（1/width, 1/height）
    this.blurMat.uniforms['uTexelSize'].value.set(1.0 / w, 1.0 / h);
  }

  /**
   * 运行 3 个 bloom pass。
   * 结果留在 bloomA.texture，供合成 shader 读取。
   * 调用前/后 renderTarget 保持调用者设定的状态（render() 结束前还原 null）。
   */
  render(gl: THREE.WebGLRenderer, sceneColorTexture: THREE.Texture): void {
    // ── Pass 1：亮部提取，场景色 → bloomA ──
    this.extractMat.uniforms['tScene'].value = sceneColorTexture;
    gl.setRenderTarget(this.bloomA);
    gl.clear();
    gl.render(this.extractScene, this.extractCam);

    // ── Pass 2..5：横/纵分离模糊【两轮】(1/4 res 上 4 个 pass 很廉,半径×2 → 光晕大而柔,
    //    不再是贴着亮源的小紧圈——"高级泛光"观感的关键) ──
    for (let i = 0; i < 2; i++) {
      this.blurMat.uniforms['tBlur'].value = this.bloomA.texture;
      this.blurMat.uniforms['uHorizontal'].value = 1;
      gl.setRenderTarget(this.bloomB);
      gl.clear();
      gl.render(this.blurScene, this.blurCam);
      this.blurMat.uniforms['tBlur'].value = this.bloomB.texture;
      this.blurMat.uniforms['uHorizontal'].value = 0;
      gl.setRenderTarget(this.bloomA);
      gl.clear();
      gl.render(this.blurScene, this.blurCam);
    }

    // 还原 renderTarget → null（屏幕），避免后续 pass 不知情地写入 RT。
    gl.setRenderTarget(null);
  }

  dispose(): void {
    this.bloomA.dispose();
    this.bloomB.dispose();
    this.extractMat.dispose();
    this.blurMat.dispose();
  }

  private buildRT(w: number, h: number): THREE.WebGLRenderTarget {
    return new THREE.WebGLRenderTarget(w, h, {
      type: THREE.HalfFloatType, // 与场景 RT 同为半浮点：亮部提取/模糊不丢精度(HDR 泛光)
      depthBuffer: false, // bloom 不需要深度
    });
  }
}
