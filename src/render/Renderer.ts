import * as THREE from 'three';
import { drawSkyGradient, HORIZON_COLOR, type RGB } from './sky';
import { GodRays } from './GodRays';
import { Bloom } from './Bloom';
import type { LightingQuality } from '../core/settings';

/** God-ray パラメータ（Game から毎フレーム供给）。 */
interface GodRayOpts {
  quality: LightingQuality;
  /** 太阳屏幕坐标 UV，范围 [0,1]×[0,1]（THREE.js 坐标系，Y 轴向上）。 */
  sunUV: THREE.Vector2;
  /** 0 = 太阳不可见，1 = 正午最强。 */
  intensity: number;
  /** 太阳光束颜色（黎明偏橙，正午白）。 */
  sunColor: THREE.Color;
}

/**
 * 场景、相机、天空与 WebGL 渲染器；只负责"画"，不含游戏逻辑。
 *
 * God-ray 开关：
 *  - setGodRays(null) 或 quality='off' → this.god = null → render() 走原直接路径。
 *  - setGodRays({...}) → 场景渲到 RT → GodRays quad 合成到屏幕 → renderOverlay（手臂）画在最上层。
 */
export class Renderer {
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  private readonly gl: THREE.WebGLRenderer;

  // 天空背景：自有 canvas，昼夜更替时重画渐变（见 setSkyColors）。
  private readonly skyCanvas = document.createElement('canvas');
  private readonly skyCtx: CanvasRenderingContext2D | null;
  private readonly skyTex: THREE.CanvasTexture;
  private lastSky = ''; // 上次套用的天空配色（相同则跳过重画）

  // God-ray 后处理
  private rt: THREE.WebGLRenderTarget | null = null; // 场景颜色+深度 RT（全分辨率）
  private readonly godStd = new GodRays(24); // standard 档：24 采样
  private readonly godHigh = new GodRays(48); // high 档：48 采样
  private god: GodRayOpts | null = null; // null = off，render() 走原路径

  // Bloom 后处理（1/4 分辨率内部缓冲）
  private bloom: Bloom | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false });
    // 分辨率恒为设备原生(用户要求保清晰)；高 DPI 屏更费但更锐。卡顿改走区块加载/渲染距离优化，不降分辨率。
    // ⚠️ 曾加过动态降分辨率(adaptResolution 自动降到 0.6×)，画面发糊被用户否决、已移除——不要再加回来。
    // ⚠️ 不要加 powerPreference:'high-performance' —— 某些集显/混合显卡机器会创建上下文失败 → 进不了游戏。
    this.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // 电影级色调映射(ACES)：把"生平"的原始色分级成胶片观感——高光柔和滚降(天空不再死白)、中间调更润。
    // 后处理栈第一步(最便宜、几乎零开销、不会白屏);bloom/SSAO 随后。曝光可调。
    this.gl.toneMapping = THREE.ACESFilmicToneMapping;
    this.gl.toneMappingExposure = 1.1;
    // 真实投影阴影：开启 shadow map（太阳 DirectionalLight 投影到地面，见 ChunkMeshManager）
    this.gl.shadowMap.enabled = true;
    this.gl.shadowMap.type = THREE.PCFSoftShadowMap;
    this.gl.shadowMap.autoUpdate = false; // 不每帧重渲 shadow(开销大)；由 markShadowDirty 节流触发(昼夜慢 + 玩家移动时)
    this.skyCanvas.width = 2;
    this.skyCanvas.height = 256;
    this.skyCtx = this.skyCanvas.getContext('2d');
    if (this.skyCtx) drawSkyGradient(this.skyCtx, [0.3, 0.52, 0.79], [0.81, 0.9, 0.97]);
    this.skyTex = new THREE.CanvasTexture(this.skyCanvas);
    this.skyTex.colorSpace = THREE.SRGBColorSpace;
    this.scene.background = this.skyTex; // 渐变天空
    this.scene.fog = new THREE.Fog(HORIZON_COLOR, 30, 110); // 远处雾化，融入地平线
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000); // FOV 70，同 MC
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  // 昼夜更替：重画天空渐变（配色不变则跳过，避免每帧白重传）。
  setSkyColors(top: RGB, horizon: RGB): void {
    const sig = `${top.join()}|${horizon.join()}`;
    if (sig === this.lastSky || !this.skyCtx) return;
    this.lastSky = sig;
    drawSkyGradient(this.skyCtx, top, horizon);
    this.skyTex.needsUpdate = true;
  }

  resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.gl.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    // RT 重建为与 canvas 完全相同的分辨率（含 pixelRatio 倍数）。
    // off 档时 rt 仍为 null，无需重建。
    if (this.rt !== null) {
      this.rt.dispose();
      this.rt = this.buildRT(w, h);
    }
    // Bloom RT 重建为 1/4 分辨率（CSS 像素，Bloom 内部乘 pr）。
    if (this.bloom !== null) {
      const pr = this.gl.getPixelRatio();
      this.bloom.setSize(
        Math.max(1, Math.round((w * pr) / 4)),
        Math.max(1, Math.round((h * pr) / 4)),
      );
    }
  }

  /** 节流重渲一次 shadow map（autoUpdate 关、靠这个触发；昼夜/玩家移动时由 Game 调）。 */
  markShadowDirty(): void {
    this.gl.shadowMap.needsUpdate = true;
  }

  /**
   * 每帧由 Game 调用：设置 god-ray 参数。
   * opts = null 或 quality='off' → 关闭后处理，render() 走原直接路径（零 RT 开销）。
   */
  setGodRays(opts: GodRayOpts | null): void {
    if (opts === null || opts.quality === 'off') {
      // 关闭后处理：销毁 RT + Bloom，清空 opts。
      if (this.rt !== null) {
        this.rt.dispose();
        this.rt = null;
      }
      if (this.bloom !== null) {
        this.bloom.dispose();
        this.bloom = null;
      }
      this.god = null;
      return;
    }
    // 确保 RT 已建（首次开启或 resize 中途重建）。
    if (this.rt === null) {
      this.rt = this.buildRT(window.innerWidth, window.innerHeight);
    }
    // 确保 Bloom 已建。
    if (this.bloom === null) {
      const pr = this.gl.getPixelRatio();
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.bloom = new Bloom(
        Math.max(1, Math.round((w * pr) / 4)),
        Math.max(1, Math.round((h * pr) / 4)),
      );
    }
    this.god = opts;
  }

  /**
   * 主渲染：
   *  - god == null（off 档）→ 直接 gl.render，与改动前完全一致。
   *  - god != null          → 场景渲到 RT → god-ray quad 合成到屏幕。
   * renderOverlay（第一人称手臂）始终在此之后由 Game 调用，直接上屏（不经 RT）。
   */
  render(): void {
    // ★ off 路径（god===null 或 RT 未就绪）：直接渲染，零后处理开销，与改动前完全一致。
    // bloom 必须依赖 RT（需要场景颜色纹理），故只看 god===null / rt===null 决定直渲。
    // 不再用 intensity<=0.001 做早出（否则太阳不可见时 bloom 也会消失）。
    if (this.god === null || this.rt === null || this.bloom === null) {
      this.gl.render(this.scene, this.camera);
      return;
    }

    // ── Step 1: 场景渲到 RT（颜色 + 深度）──
    this.gl.setRenderTarget(this.rt);
    this.gl.clear(); // 清颜色 + 深度（autoClear 默认 true）
    this.gl.render(this.scene, this.camera);
    // renderTarget 此时仍是 this.rt（Step 2 会重置）

    // ── Step 2: Bloom（1/4 res，3 个 pass，结果在 bloom.texture）──
    // bloom.render() 内部会 setRenderTarget 到 bloomA/bloomB，
    // 结束后调用 setRenderTarget(null)，render() 退出时 renderTarget 已为 null。
    this.bloom.render(this.gl, this.rt.texture);
    // 此时 renderTarget = null（由 bloom.render 还原），以下写屏幕。

    // ── Step 3: God-ray + bloom 合成到屏幕 ──
    // renderTarget 已是 null（屏幕）；bloom.render 已确保还原。
    const gr = this.god.quality === 'high' ? this.godHigh : this.godStd;
    const u = gr.material.uniforms;
    u['tColor'].value = this.rt.texture;
    u['tDepth'].value = this.rt.depthTexture;
    u['tBloom'].value = this.bloom.texture;
    u['uSunUV'].value.copy(this.god.sunUV);
    u['uIntensity'].value = this.god.intensity; // 太阳不可见时 0，shader 跳过体积光但保留 bloom
    u['uSunColor'].value.copy(this.god.sunColor);
    // bloom 强度按档位
    u['uBloom'].value = this.god.quality === 'high' ? 1.0 : 0.6;
    gr.render(this.gl);
    // renderOverlay（手臂）由 Game 在此方法之后调用，直接画到屏幕，不经过 RT。
  }

  // 覆盖层（第一人称手臂等）：清掉深度后画在世界之上，永不被遮挡。
  renderOverlay(scene: THREE.Scene, camera: THREE.Camera): void {
    this.gl.autoClear = false;
    this.gl.clearDepth();
    this.gl.render(scene, camera);
    this.gl.autoClear = true;
  }

  // ─── 私有工具 ───────────────────────────────────────────────────────────────

  /**
   * 构建全分辨率场景 RT（颜色 + 独立 DepthTexture）。
   * 分辨率 = CSS 像素 × pixelRatio，与 gl.setSize 保持一致。
   * 不降 pixelRatio：用户禁止降分辨率。
   */
  private buildRT(cssW: number, cssH: number): THREE.WebGLRenderTarget {
    const pr = this.gl.getPixelRatio();
    const w = Math.max(1, Math.round(cssW * pr));
    const h = Math.max(1, Math.round(cssH * pr));
    const depthTex = new THREE.DepthTexture(w, h);
    depthTex.type = THREE.UnsignedIntType; // 24-bit depth，与 WebGLRenderer 默认匹配
    const rt = new THREE.WebGLRenderTarget(w, h, {
      depthTexture: depthTex,
      depthBuffer: true,
    });
    return rt;
  }
}
