import * as THREE from 'three';
import { drawSkyGradient, HORIZON_COLOR, type RGB } from './sky';

/** 场景、相机、天空与 WebGL 渲染器；只负责"画"，不含游戏逻辑。 */
export class Renderer {
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  private readonly gl: THREE.WebGLRenderer;
  // 天空背景：自有 canvas，昼夜更替时重画渐变（见 setSkyColors）。
  private readonly skyCanvas = document.createElement('canvas');
  private readonly skyCtx: CanvasRenderingContext2D | null;
  private readonly skyTex: THREE.CanvasTexture;
  private lastSky = ''; // 上次套用的天空配色（相同则跳过重画）

  constructor(canvas: HTMLCanvasElement) {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false });
    // ⚡ FPS：像素风游戏无需超采样。高 DPI 屏(retina=2×)按 min(DPR,2) 会渲 4× 像素=填充率杀手。
    // 锁 1×(按 CSS 像素渲染)→ 高 DPI 上 2~4× 帧率，NearestFilter 贴图仍清晰(块边硬)。
    // ⚠️ 不要加 powerPreference:'high-performance' —— 某些集显/混合显卡机器会创建上下文失败 → 进不了游戏。
    this.gl.setPixelRatio(1);
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
  }

  /** 节流重渲一次 shadow map（autoUpdate 关、靠这个触发；昼夜/玩家移动时由 Game 调）。 */
  markShadowDirty(): void {
    this.gl.shadowMap.needsUpdate = true;
  }

  render(): void {
    this.gl.render(this.scene, this.camera);
  }

  // 覆盖层（第一人称手臂等）：清掉深度后画在世界之上，永不被遮挡。
  renderOverlay(scene: THREE.Scene, camera: THREE.Camera): void {
    this.gl.autoClear = false;
    this.gl.clearDepth();
    this.gl.render(scene, camera);
    this.gl.autoClear = true;
  }
}
