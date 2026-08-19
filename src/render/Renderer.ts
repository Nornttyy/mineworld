import * as THREE from 'three';
import { HORIZON_COLOR, type RGB } from './sky';
import { GodRays } from './GodRays';
import { Bloom } from './Bloom';
import { SSAO } from './SSAO';
import type { LightingQuality } from '../core/settings';
import { browserViewportSize } from './browserViewport';
import {
  CAMERA_AUX_RENDER_LAYER,
  NO_WATER_REFLECTION_LAYER,
  SKY_RENDER_LAYER,
  WATER_RENDER_LAYER,
} from './renderLayers';
import { PlanarRefraction } from './PlanarRefraction';
import { PlanarReflection } from './PlanarReflection';

type WaterRefractionSink = (
  color: THREE.Texture | null,
  depth: THREE.Texture | null,
  physicalWidth: number,
  physicalHeight: number,
) => void;

type WaterReflectionSink = (
  color: THREE.Texture | null,
  textureMatrix: THREE.Matrix4 | null,
  physicalWidth: number,
  physicalHeight: number,
) => void;

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
  private viewportW = 1;
  private viewportH = 1;
  private resizeQueued = false;
  private readonly onViewportChange = (): void => {
    if (this.resizeQueued) return;
    this.resizeQueued = true;
    requestAnimationFrame(() => {
      this.resizeQueued = false;
      this.resize();
    });
  };

  // 天空穹顶：跟随相机的反面球 + 顶点色渐变。
  // ⚠️ 曾用 scene.background 贴 2×256 canvas 渐变——它钉死在【屏幕】上：抬头看天顶还是地平线色、
  //   亮带跟着屏幕下缘走，完全不是 MC 那种"亮带贴住真地平线"的世界天空。穹顶按视线方向渐变才对。
  private readonly skyDome: THREE.Mesh;
  private readonly skyDomeColors: THREE.BufferAttribute;
  private lastSky = ''; // 上次套用的天空配色（相同则跳过重算顶点色）

  // God-ray 后处理
  private rt: THREE.WebGLRenderTarget | null = null; // 场景颜色+深度 RT（全分辨率）
  private planarRefraction: PlanarRefraction | null = null; // 独立相机：只捕获水面以下的真实场景
  private waterRefractionSink: WaterRefractionSink | null = null;
  private planarReflection: PlanarReflection | null = null;
  private waterReflectionSink: WaterReflectionSink | null = null;
  private waterCapturesEnabled = true;
  private readonly godStd = new GodRays(24); // standard 档：24 采样
  private readonly godHigh = new GodRays(48); // high 档：48 采样
  private god: GodRayOpts | null = null; // null = off，render() 走原路径
  private underwaterTarget = 0;
  private underwaterAmount = 0;

  // Bloom 后处理（1/4 分辨率内部缓冲）
  private bloom: Bloom | null = null;

  // SSAO 后处理（1/2 分辨率）
  private ssao: SSAO | null = null;

  constructor(canvas: HTMLCanvasElement) {
    // MSAA 4x：满屏几何锯齿是"劣质感"最大单项(光影包都带 AA)。MSAA 只平滑几何边缘,
    // 像素贴图(NearestFilter)完全不糊——正适合 MC 风。直渲路径走 canvas 的 antialias,
    // RT 路径走 rt.samples(见 buildRT)。
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: true });
    // 分辨率恒为设备原生(用户要求保清晰)；高 DPI 屏更费但更锐。卡顿改走区块加载/渲染距离优化，不降分辨率。
    // ⚠️ 曾加过动态降分辨率(adaptResolution 自动降到 0.6×)，画面发糊被用户否决、已移除——不要再加回来。
    // ⚠️ 不要加 powerPreference:'high-performance' —— 某些集显/混合显卡机器会创建上下文失败 → 进不了游戏。
    this.gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // ⚠️ 曾加 ACES 色调映射想给颜色"分级",但它把方块中间调压暗了——ACES 是给写实 HDR 的，
    // 套在我们这种亮色卡通上显暗显闷，用户反馈"方块变暗"，已移除。保持无色调映射=原始亮度。
    // 高级感改只靠 bloom(给亮处加光、不压暗)。若以后想要分级，得用更轻、不压暗中间调的方式。
    this.gl.toneMapping = THREE.NoToneMapping;
    // 真实投影阴影：开启 shadow map（太阳 DirectionalLight 投影到地面，见 ChunkMeshManager）
    this.gl.shadowMap.enabled = true;
    this.gl.shadowMap.type = THREE.PCFSoftShadowMap;
    this.gl.shadowMap.autoUpdate = false; // 不每帧重渲 shadow(开销大)；由 markShadowDirty 节流触发(昼夜慢 + 玩家移动时)
    // 天空穹顶：半径 750(相机 far 1000 以内)、反面渲染、不写深度(god-ray 深度判定仍视穹顶处为天空)、
    // 不受雾(fog:false)；每帧跟随相机(见 render)。顶点色由 setSkyColors 按昼夜配色重算。
    const domeGeo = new THREE.SphereGeometry(750, 32, 24);
    const domeVerts = domeGeo.getAttribute('position').count;
    this.skyDomeColors = new THREE.BufferAttribute(new Float32Array(domeVerts * 3), 3);
    domeGeo.setAttribute('color', this.skyDomeColors);
    const domeMat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this.skyDome = new THREE.Mesh(domeGeo, domeMat);
    this.skyDome.layers.set(SKY_RENDER_LAYER);
    this.skyDome.frustumCulled = false;
    this.skyDome.renderOrder = -1000; // 最先画，地形随后盖上来(穹顶不写深度)
    this.scene.add(this.skyDome);
    this.setSkyColors([0.3, 0.52, 0.79], [0.81, 0.9, 0.97]);
    this.scene.fog = new THREE.Fog(HORIZON_COLOR, 30, 110); // 远处雾化，融入地平线
    this.camera = new THREE.PerspectiveCamera(70, 1, 0.1, 1000); // FOV 70，同 MC
    this.camera.layers.enable(WATER_RENDER_LAYER); // 主 pass 同时看地形(layer0)和水(layer1)
    this.camera.layers.enable(NO_WATER_REFLECTION_LAYER); // 太阳正常显示，但不进入水面镜像 RT
    this.camera.layers.enable(SKY_RENDER_LAYER); // 天空可进入主画面和镜像 RT，但不进入水下折射
    this.camera.layers.enable(CAMERA_AUX_RENDER_LAYER); // 选框/裂纹/名字牌只属于玩家主画面
    this.resize();
    window.addEventListener('resize', this.onViewportChange);
    window.addEventListener('orientationchange', this.onViewportChange);
    // iOS Safari / Android Chrome 收放地址栏时不一定触发 window.resize，但一定会更新 visualViewport。
    window.visualViewport?.addEventListener('resize', this.onViewportChange);
    window.visualViewport?.addEventListener('scroll', this.onViewportChange);
  }

  // 昼夜更替：重算穹顶顶点色（配色/太阳方位不变则跳过）。渐变按【视线仰角】走：
  // 地平线亮带 → 仰角 ~0.45 以上为天顶色（近似 MC：亮带贴住真地平线，与雾色衔接）。
  // sunAz/warmth(0..1)：日出日落时太阳方位一侧地平线暖亮、背侧偏冷——真实大气的晨昏渐变。
  setSkyColors(top: RGB, horizon: RGB, sunAz = 0, warmth = 0): void {
    const sig = `${top.join()}|${horizon.join()}|${Math.round(sunAz * 50)}|${Math.round(warmth * 25)}`;
    if (sig === this.lastSky) return;
    this.lastSky = sig;
    const cTop = new THREE.Color().setRGB(top[0], top[1], top[2], THREE.SRGBColorSpace);
    const cHor = new THREE.Color().setRGB(horizon[0], horizon[1], horizon[2], THREE.SRGBColorSpace);
    const pos = (this.skyDome.geometry as THREE.SphereGeometry).getAttribute('position');
    const arr = this.skyDomeColors.array as Float32Array;
    for (let i = 0; i < pos.count; i++) {
      const ny = pos.getY(i) / 750; // -1..1 仰角
      const t = ny <= 0 ? 0 : Math.min(1, ny / 0.45);
      const s = t * t * (3 - 2 * t); // smoothstep
      let r = cHor.r + (cTop.r - cHor.r) * s;
      let g = cHor.g + (cTop.g - cHor.g) * s;
      let b = cHor.b + (cTop.b - cHor.b) * s;
      if (warmth > 0.01) {
        // 太阳方位夹角 → 暖染集中在太阳侧(^2.5)；只染地平线带(1-s)
        const az = Math.atan2(pos.getZ(i), pos.getX(i));
        const azFac = Math.pow(Math.max(0, Math.cos(az - sunAz) * 0.5 + 0.5), 2.5);
        const k = warmth * (1 - s);
        const shR = 0.88 + (1.24 - 0.88) * azFac; // 背侧偏冷(×0.88) ↔ 太阳侧暖亮(×1.24)
        const shG = 0.9 + (0.97 - 0.9) * azFac;
        const shB = 1.05 + (0.75 - 1.05) * azFac;
        r *= 1 + (shR - 1) * k;
        g *= 1 + (shG - 1) * k;
        b *= 1 + (shB - 1) * k;
      }
      arr[i * 3] = r;
      arr[i * 3 + 1] = g;
      arr[i * 3 + 2] = b;
    }
    this.skyDomeColors.needsUpdate = true;
  }

  resize(): void {
    const { width: w, height: h } = browserViewportSize(window);
    this.viewportW = w;
    this.viewportH = h;
    this.gl.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    // RT 重建为与 canvas 完全相同的分辨率（含 pixelRatio 倍数）。
    // off 档时 rt 仍为 null，无需重建。
    if (this.rt !== null) {
      this.rt.dispose();
      this.rt = this.buildRT(w, h);
    }
    if (this.planarRefraction !== null) {
      const pr = this.gl.getPixelRatio();
      this.planarRefraction.resize(
        Math.max(1, Math.round(w * pr)),
        Math.max(1, Math.round(h * pr)),
      );
      this.publishRefractionTarget();
    }
    if (this.planarReflection !== null) {
      const pr = this.gl.getPixelRatio();
      this.planarReflection.resize(
        Math.max(1, Math.round(w * pr)),
        Math.max(1, Math.round(h * pr)),
      );
      this.publishReflectionTarget();
    }
    // Bloom RT 重建为 1/4 分辨率（CSS 像素，Bloom 内部乘 pr）。
    if (this.bloom !== null) {
      const pr = this.gl.getPixelRatio();
      this.bloom.setSize(
        Math.max(1, Math.round((w * pr) / 4)),
        Math.max(1, Math.round((h * pr) / 4)),
      );
    }
    // SSAO RT 重建为 1/2 物理分辨率。
    if (this.ssao !== null) {
      const pr = this.gl.getPixelRatio();
      this.ssao.setSize(
        Math.max(1, Math.round((w * pr) / 2)),
        Math.max(1, Math.round((h * pr) / 2)),
      );
    }
  }

  /** 节流重渲一次 shadow map（autoUpdate 关、靠这个触发；昼夜/玩家移动时由 Game 调）。 */
  markShadowDirty(): void {
    this.gl.shadowMap.needsUpdate = true;
  }

  /** Chunk water shader subscribes once; Renderer republishes textures after enable/resize/disable. */
  setWaterRefractionSink(sink: WaterRefractionSink | null): void {
    this.waterRefractionSink = sink;
    this.publishRefractionTarget();
  }

  /** Water shader subscribes to the true mirrored sea-surface scene. */
  setWaterReflectionSink(sink: WaterReflectionSink | null): void {
    this.waterReflectionSink = sink;
    this.publishReflectionTarget();
  }

  /** Skip both auxiliary water scene passes in dimensions that contain no water. */
  setWaterCapturesEnabled(enabled: boolean): void {
    if (enabled === this.waterCapturesEnabled) return;
    this.waterCapturesEnabled = enabled;
    if (!enabled) {
      this.planarRefraction?.dispose();
      this.planarRefraction = null;
      this.planarReflection?.dispose();
      this.planarReflection = null;
      this.publishRefractionTarget();
      this.publishReflectionTarget();
    } else {
      // Keep the sinks empty until this frame renders fresh captures; otherwise one frame
      // could sample the previous dimension's scene.
      this.waterRefractionSink?.(null, null, 1, 1);
      this.waterReflectionSink?.(null, null, 1, 1);
      if (this.god !== null) this.ensureWaterCaptureTargets();
    }
  }

  /**
   * 每帧由 Game 调用：设置 god-ray 参数。
   * opts = null 或 quality='off' → 关闭后处理，render() 走原直接路径（零 RT 开销）。
   */
  setGodRays(opts: GodRayOpts | null): void {
    if (opts === null || opts.quality === 'off') {
      // 关闭后处理：销毁 RT + Bloom + SSAO，清空 opts。
      if (this.rt !== null) {
        this.rt.dispose();
        this.rt = null;
      }
      if (this.planarRefraction !== null) {
        this.planarRefraction.dispose();
        this.planarRefraction = null;
      }
      this.publishRefractionTarget();
      if (this.planarReflection !== null) {
        this.planarReflection.dispose();
        this.planarReflection = null;
      }
      this.publishReflectionTarget();
      if (this.bloom !== null) {
        this.bloom.dispose();
        this.bloom = null;
      }
      if (this.ssao !== null) {
        this.ssao.dispose();
        this.ssao = null;
      }
      this.god = null;
      return;
    }
    // 确保 RT 已建（首次开启或 resize 中途重建）。
    if (this.rt === null) {
      this.rt = this.buildRT(this.viewportW, this.viewportH);
    }
    this.ensureWaterCaptureTargets();
    // 确保 Bloom 已建。
    if (this.bloom === null) {
      const pr = this.gl.getPixelRatio();
      const w = this.viewportW;
      const h = this.viewportH;
      this.bloom = new Bloom(
        Math.max(1, Math.round((w * pr) / 4)),
        Math.max(1, Math.round((h * pr) / 4)),
      );
    }
    // SSAO 暂停用：半分辨率 + 粗糙深度重建在平面方块上产生"网格/细条纹"伪影(用户报"开光影有条纹"),
    // 且体素地形已有【烤进顶点的体素 AO】(干净无伪影)给立体感,SSAO 收益有限还吃显存(本机内存吃紧)。
    // 保留 SSAO.ts 备用;此处不构建 → ssao 恒 null → render() 跳过 AO pass、合成 uAO=0(无暗化)。
    this.god = opts;
  }

  /** 相机是否位于水下。后处理会平滑过渡，避免穿过浪面时整屏颜色硬切。 */
  setUnderwater(underwater: boolean): void {
    this.underwaterTarget = underwater ? 1 : 0;
  }

  /**
   * 主渲染：
   *  - god == null（off 档）→ 直接 gl.render，与改动前完全一致。
   *  - god != null          → 场景渲到 RT → god-ray quad 合成到屏幕。
   * renderOverlay（第一人称手臂）始终在此之后由 Game 调用，直接上屏（不经 RT）。
   */
  render(): void {
    this.skyDome.position.copy(this.camera.position); // 穹顶跟随相机(玩家永远在天空球心)
    this.underwaterAmount += (this.underwaterTarget - this.underwaterAmount) * 0.16;
    // ★ off 路径（god===null 或 RT 未就绪）：直接渲染，零后处理开销，与改动前完全一致。
    // bloom 必须依赖 RT（需要场景颜色纹理），故只看 god===null / rt===null 决定直渲。
    // 不再用 intensity<=0.001 做早出（否则太阳不可见时 bloom 也会消失）。
    if (this.god === null || this.rt === null || this.bloom === null) {
      this.gl.render(this.scene, this.camera);
      return;
    }

    // ── Step -1: 海平面镜像相机 → 真实倒影 RT ──
    // 这里渲染的是镜像世界，不是复制玩家屏幕。斜裁剪面排除水下几何，
    // water/aux/sun 图层也不进入此 pass，因此岸、树和生物会在正确的接触线下方出现。
    if (
      this.waterCapturesEnabled &&
      this.planarReflection !== null &&
      this.camera.position.y > this.planarReflection.planeY + 0.05
    ) {
      this.planarReflection.render(
        this.gl,
        this.scene,
        this.camera,
        (reflectionCamera) => this.skyDome.position.copy(reflectionCamera.position),
        () => this.skyDome.position.copy(this.camera.position),
      );
      this.publishReflectionTarget(true);
    } else {
      this.publishReflectionTarget(false);
    }

    // ── Step 0: 独立的另一介质场景 → 折射 RT ──
    // 水上时只保留水面以下的真实地形/生物；水下时反向保留水面以上的岸景与天空。
    // 相机姿态/投影始终与玩家一致，但这不是玩家画面的屏幕拷贝：水面自身不会进入 RT，
    // 且裁剪平面保证只传输界面另一侧真正存在的内容。
    if (this.waterCapturesEnabled && this.planarRefraction !== null) {
      const previousFog = this.scene.fog;
      this.scene.fog = null; // 空气雾不属于水体；水 shader 会按真实光程做吸收/散射。
      try {
        this.planarRefraction.render(
          this.gl,
          this.scene,
          this.camera,
          undefined,
          undefined,
          this.underwaterTarget > 0.5 ? 'above' : 'below',
        );
      } finally {
        this.scene.fog = previousFog;
      }
      this.publishRefractionTarget();
    }

    // ── Step 1: 完整场景渲到 RT（颜色 + 深度）──
    this.gl.setRenderTarget(this.rt);
    this.gl.clear(); // 清颜色 + 深度（autoClear 默认 true）
    this.gl.render(this.scene, this.camera);
    // renderTarget 此时仍是 this.rt（Step 2 会重置）

    // ── Step 2: Bloom（1/4 res，3 个 pass，结果在 bloom.texture）──
    // bloom.render() 内部会 setRenderTarget 到 bloomA/bloomB，
    // 结束后调用 setRenderTarget(null)，render() 退出时 renderTarget 已为 null。
    this.bloom.render(this.gl, this.rt.texture);
    // 此时 renderTarget = null（由 bloom.render 还原）。

    // ── Step 2.5: SSAO（1/2 res，2 个 pass，结果在 ssao.texture）──
    // ssao.render() 内部保证 setRenderTarget(null) 还原，且出错时静默兜底。
    if (this.ssao !== null) {
      this.ssao.render(this.gl, this.rt.depthTexture, this.camera);
    }
    // 此时 renderTarget = null（由 ssao.render 还原）。

    // ── Step 3: God-ray + bloom + AO 合成到屏幕 ──
    // renderTarget 已是 null（屏幕）。
    const gr = this.god.quality === 'high' ? this.godHigh : this.godStd;
    const u = gr.material.uniforms;
    u['tColor'].value = this.rt.texture;
    u['tDepth'].value = this.rt.depthTexture;
    u['tBloom'].value = this.bloom.texture;
    u['uSunUV'].value.copy(this.god.sunUV);
    u['uIntensity'].value = this.god.intensity; // 太阳不可见时 0，shader 跳过体积光但保留 bloom
    u['uSunColor'].value.copy(this.god.sunColor);
    // bloom 强度按档位。曾 1.0/0.6=全画面蒙白纱；0.45/0.3 用户嫌不够夸张 → 0.55/0.38
    // (阈值 0.78 只筛真亮源,高光辉光更明显但亮沙/天空不再整片过阈值)。
    u['uBloom'].value = this.god.quality === 'high' ? 0.68 : 0.5;
    u['uUnderwater'].value = this.underwaterAmount;
    // AO：ssao 存在时传贴图和档位强度；否则 uAO=0（shader 中 mix(1,ao,0)=1 → 无暗化，完全兜底）。
    if (this.ssao !== null) {
      u['tAO'].value = this.ssao.texture;
      // 保守起步：AO 只压暗凹角/接缝(不动平面)，但 shader 里还叠了 pow(ao,1.5) 加深，
      // 0.7 易过暗(用户多次反馈"太暗")。先 0.55/0.4，看截图再按需调高。
      u['uAO'].value = this.god.quality === 'high' ? 0.55 : 0.4;
    } else {
      u['tAO'].value = null;
      u['uAO'].value = 0.0;
    }
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
    // ⚠️ 颜色必须 HalfFloat：场景以【线性】存进 RT,8-bit 线性在暗部只剩 1~3/255 级,
    // 合成端 pow(0.4545) 伽马再放大 → 洞穴/夜晚全是彩色量化噪点+色带("暗处怪怪的"根因)。
    // 16-bit 半浮点暗部精度足够,泛光也因此变成真 HDR。若低端机不支持(WebGL2 核心必支持
    // EXT_color_buffer_float,理论都行)或过慢,退路=8-bit RT 存 sRGB+合成端改编码语义。
    const rt = new THREE.WebGLRenderTarget(w, h, {
      type: THREE.HalfFloatType,
      depthTexture: depthTex,
      depthBuffer: true,
      samples: 4, // MSAA(three 自动 resolve;深度纹理照常给 god-ray)
    });
    return rt;
  }

  private publishRefractionTarget(): void {
    if (!this.waterRefractionSink) return;
    if (!this.waterCapturesEnabled || !this.planarRefraction) {
      this.waterRefractionSink(null, null, 1, 1);
      return;
    }
    this.waterRefractionSink(
      this.planarRefraction.texture,
      this.planarRefraction.depthTexture,
      this.planarRefraction.renderTarget.width,
      this.planarRefraction.renderTarget.height,
    );
  }

  private ensureWaterCaptureTargets(): void {
    if (!this.waterCapturesEnabled) return;
    const pr = this.gl.getPixelRatio();
    const width = Math.max(1, Math.round(this.viewportW * pr));
    const height = Math.max(1, Math.round(this.viewportH * pr));
    if (this.planarRefraction === null) {
      this.planarRefraction = new PlanarRefraction(width, height);
    }
    if (this.planarReflection === null) {
      this.planarReflection = new PlanarReflection(width, height);
    }
  }

  private publishReflectionTarget(active = true): void {
    if (!this.waterReflectionSink) return;
    if (!active || !this.waterCapturesEnabled || !this.planarReflection) {
      this.waterReflectionSink(null, null, 1, 1);
      return;
    }
    this.waterReflectionSink(
      this.planarReflection.texture,
      this.planarReflection.textureMatrix,
      this.planarReflection.renderTarget.width,
      this.planarReflection.renderTarget.height,
    );
  }
}
