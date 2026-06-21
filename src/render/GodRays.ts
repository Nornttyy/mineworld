/**
 * GodRays — 屏幕空间体积光（放射状采样 + 遮挡）
 *
 * 算法：从当前像素向太阳屏幕 UV 方向等距采 SAMPLES 个点，
 * 每点读深度，depth ≥ 1（天空）计为 lit，累加加权亮度 → shaft。
 * 合成：sceneColor + shaft * sunColor * intensity。
 *
 * 采样数作为整数字面量嵌入 GLSL（#define 替代），满足 GLSL ES 常量循环上界约束。
 * intensity = 0 时早返回（仅输出 sceneColor），无循环开销。
 */
import * as THREE from 'three';

function buildMaterial(samples: number): THREE.ShaderMaterial {
  // samples 必须是正整数字面量（由调用者保证：24 或 48）
  const S = samples | 0; // integer guard

  const vertexShader = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`.trim();

  // GLSL ES: 循环上界必须是常量整型表达式。
  // 将 S 嵌入为字面量字符串，而非 uniform，避免 GLSL 动态索引限制。
  // 除数 float(S) 是编译期常量（S >= 1），不会 div-by-zero。
  const fragmentShader = /* glsl */ `
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform sampler2D tBloom;
uniform vec2 uSunUV;
uniform vec3 uSunColor;
uniform float uIntensity;
uniform float uDecay;
uniform float uWeight;
uniform float uBloom;

varying vec2 vUv;

void main() {
  vec3 scene = texture2D(tColor, vUv).rgb;
  vec3 bloomColor = texture2D(tBloom, vUv).rgb;

  // 太阳不可见时（强度 0）跳过体积光采样循环，但 bloom 仍叠加。
  if (uIntensity <= 0.001) {
    // 合成是自定义 ShaderMaterial，three.js 不自动做 linear→sRGB；RT 存的是线性场景，
    // 故这里手动 sRGB 编码，否则直接输出线性值会整体偏暗。
    vec3 outc = scene + bloomColor * uBloom;
    gl_FragColor = vec4(pow(clamp(outc, 0.0, 1.0), vec3(0.4545)), 1.0);
    return;
  }

  // 每步从当前像素向太阳 UV 方向移动一格（等分 [vUv → sunUV]）。
  vec2 dir = (uSunUV - vUv) / float(${S});
  vec2 uv = vUv;
  float illum = 1.0;
  float shaft = 0.0;

  for (int i = 0; i < ${S}; i++) {
    uv += dir;
    // UV 超出 [0,1] → 视为天空（不读纹理，直接计为 lit）。
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      shaft += illum * uWeight;
    } else {
      float d = texture2D(tDepth, uv).x; // 深度缓冲：天空 ≈ 1.0
      // step(edge, x) = 1 if x >= edge，0 otherwise；0.9999 ≈ far plane
      float lit = step(0.9999, d);
      shaft += lit * illum * uWeight;
    }
    illum *= uDecay;
  }

  // 归一化：除以采样数，避免 weight×decay 累加超出合理范围。
  shaft /= float(${S});

  // 体积光光束 + bloom 辉光叠加到场景色；末尾手动 sRGB 编码(自定义 ShaderMaterial three.js 不自动编码 → 否则偏暗)
  vec3 outc = scene + shaft * uSunColor * uIntensity + bloomColor * uBloom;
  gl_FragColor = vec4(pow(clamp(outc, 0.0, 1.0), vec3(0.4545)), 1.0);
}
`.trim();

  return new THREE.ShaderMaterial({
    uniforms: {
      tColor: { value: null },
      tDepth: { value: null },
      tBloom: { value: null },
      uSunUV: { value: new THREE.Vector2(0.5, 0.5) },
      uSunColor: { value: new THREE.Color(1.0, 0.95, 0.8) },
      uIntensity: { value: 0.0 },
      uDecay: { value: 0.96 },
      uWeight: { value: 0.5 },
      uBloom: { value: 0.0 },
    },
    vertexShader,
    fragmentShader,
    depthTest: false,
    depthWrite: false,
  });
}

/**
 * 单个档位的 god-ray 全屏 pass。
 * 用 OrthographicCamera(-1,1,1,-1) + PlaneGeometry(2,2) 覆盖整个 NDC。
 */
export class GodRays {
  readonly material: THREE.ShaderMaterial;
  private readonly quad: THREE.Mesh;
  private readonly quadScene = new THREE.Scene();
  private readonly quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  constructor(samples: number) {
    this.material = buildMaterial(samples);
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.quadScene.add(this.quad);
  }

  /**
   * 把 god-ray quad 渲染到当前 render target（调用前已由 Renderer 设置为 null = 屏幕）。
   * 调用者负责在调用前把 tColor/tDepth/uSunUV/uIntensity 写入 material.uniforms。
   */
  render(gl: THREE.WebGLRenderer): void {
    gl.render(this.quadScene, this.quadCam);
  }

  dispose(): void {
    this.material.dispose();
    this.quad.geometry.dispose();
  }
}
