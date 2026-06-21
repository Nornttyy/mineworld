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
  // 动态分辨率：在「设备原生(清晰)」与下限之间自动伸缩——GPU 扛不住(帧耗时高)就降分辨率保流畅，
  // 空闲就升回清晰。这样既要清晰又不卡 PPT：站着/轻负载时锐、移动/重负载时自动降一点。
  private readonly dprCap = Math.min(window.devicePixelRatio, 2); // 上限=设备原生(清晰)
  private scale = Math.min(window.devicePixelRatio, 1); // 当前倍率：从安全的 1× 起步，有余量再升到清晰、扛不住再降
  private frameEma = 16; // 平滑帧耗时(ms)
  private adaptCooldown = 60; // 调整后冷却帧数，防抖/防来回跳

  constructor(canvas: HTMLCanvasElement) {
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false });
    // ⚠️ 不要加 powerPreference:'high-performance' —— 某些集显/混合显卡机器会创建上下文失败 → 进不了游戏。
    this.gl.setPixelRatio(this.scale);
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

  /** 动态分辨率：游戏层每帧传上一帧耗时(ms)。帧耗时高→降分辨率保流畅，低→升回清晰。跨阈值才 resize(贵)，带冷却防抖。 */
  adaptResolution(frameMs: number): void {
    this.frameEma += (Math.min(frameMs, 200) - this.frameEma) * 0.1; // 平滑，限幅防卡顿尖峰带偏
    if (this.adaptCooldown > 0) {
      this.adaptCooldown--;
      return;
    }
    const FLOOR = 0.6; // 分辨率下限(再低太糊)
    if (this.frameEma > 33 && this.scale > FLOOR) {
      this.scale = Math.max(FLOOR, this.scale - 0.2); // <~30fps → 降快一点保流畅
      this.applyScale();
      this.adaptCooldown = 45;
    } else if (this.frameEma < 18 && this.scale < this.dprCap) {
      this.scale = Math.min(this.dprCap, this.scale + 0.1); // >~55fps 有余量 → 升一档(更清晰)，升得慢防来回跳
      this.applyScale();
      this.adaptCooldown = 90;
    }
  }

  private applyScale(): void {
    this.gl.setPixelRatio(this.scale);
    this.gl.setSize(window.innerWidth, window.innerHeight, false); // 重配 drawing buffer(不改 CSS 尺寸)
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
