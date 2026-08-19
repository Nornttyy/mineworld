import * as THREE from 'three';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_W } from '../core/world/chunk';
import { meshChunk, type ChunkMesh, type MeshData } from '../core/mesh/mesher';
import MeshGenWorker from '../core/mesh/meshGen.worker?worker';
import { loadWaterFrames, loadTorchTexture } from './atlas';
import { chunkInView, chunkAhead } from './chunkCull';
import { DAY_LENGTH } from '../core/world/dayNight';
import type { LightingQuality } from '../core/settings';
import { makeCloudShadowTexture, makeDirectionalWaveTexture } from './surfaceNoise';
import { WATER_RENDER_LAYER } from './renderLayers';

const perfNow = (): number => (typeof performance !== 'undefined' ? performance.now() : Date.now());

const WATER_FRAMES = 24; // 水动画帧数（与 gen_textures.py 的 water_frames(24) 一致）
const SHADOW_MAP_SIZE = 2048; // 标准档 2K；高档会在 setLightingQuality 中升级为 4K
const SHADOW_HALF = 36; // 阴影正交相机半宽（格）——收紧覆盖区→同分辨率下更锐、深度pass更省（高档优化）

// 雾在 ~110 格就全糊了(见 Renderer 的 Fog 30..110)。某区块"最近点"超过此距离即被雾完全盖住，
// 既不必生成/网格化，也不必绘制——纯属浪费(画面零变化)。用"|d|-0.5 格"近似区块最近点。
const FOG_FAR_BLOCKS = 110; // 默认雾距(格)；实际由 setFogFar(随渲染距离)覆盖
const chunkFogged = (dCx: number, dCz: number, cullR2: number): boolean => {
  const nx = Math.max(0, Math.abs(dCx) - 0.5);
  const nz = Math.max(0, Math.abs(dCz) - 0.5);
  return nx * nx + nz * nz > cullR2; // 区块²为单位，比较平方省 sqrt
};

// MC 1:1 光照（顶点着色器用）：
//  - mcBright(等级0..15) = (l/15)/(4-3·l/15)：MC 的亮度阶梯。
//  - MC_LIGHT_GLSL：天光 effSky = max(天光-uSkyDarken,0)(夜晚 skyDarken 递减) 与方块光各过阶梯取较亮，
//    再 ×0.96+0.04 留底光(不纯黑)；vTint 在天光昼夜色与火把暖色间按主导光占比混合。
const MC_BRIGHT_GLSL =
  'float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }';
const MC_LIGHT_GLSL =
  '{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0;' +
  ' float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv);' +
  ' vSkyBright = bs; vBlockBright = bb;' +
  ' float drkFloor = (skyLv < 0.5) ? 0.03 : 0.04;' + // 纯无天光(洞穴/地下)底光。曾 0.012≈纯黑一片；MC moody 亮度下光照0也约 3~5% 灰,保留一点轮廓感,火把依旧必需
  ' vLF = max(bs, bb) * 0.96 + drkFloor;' +
  ' float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0;' +
  ' vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }';

interface ChunkMeshes {
  opaque: THREE.Mesh;
  ice: THREE.Mesh | null;
  cutout: THREE.Mesh | null;
  water: THREE.Mesh | null;
  torch: THREE.Mesh | null;
}

// TS 版 MC 亮度曲线(与 shader 的 mcBright 一致)：实体环境光照用
const mcBrightJs = (lv: number): number => {
  const f = Math.max(0, Math.min(15, lv)) / 15;
  return f / (4 - 3 * f);
};

/** 维护玩家周围已加载的区块网格（不透明 + 半透明水）：按预算加载、卸载远处、重建脏区块。 */
export class ChunkMeshManager {
  private readonly meshes = new Map<string, ChunkMeshes>();
  // 粗光照网格(worker 随网格传回,4×48×4/区块)：实体(生物/掉落物/手持)环境光照采样用
  private readonly lightGrids = new Map<string, Uint8Array>();
  private readonly opaqueMat: THREE.MeshBasicMaterial;
  private readonly iceMat: THREE.MeshBasicMaterial;
  private readonly cutoutMat: THREE.MeshBasicMaterial;
  private readonly waterMat: THREE.MeshBasicMaterial;
  private readonly torchMat: THREE.MeshBasicMaterial;
  private readonly waterFrames: THREE.Texture[];
  private readonly waterTex: THREE.Texture;
  private readonly cloudNoiseTex: THREE.DataTexture;
  private readonly waterWaveTex: THREE.DataTexture;
  private waterAnimT = 0;
  private waterFrame = 0;
  // 共享光照 uniform：uSkyMul=天光昼夜系数(白天1/夜≈0.05)；uSkyTint=天光着色(白天白/夜暗蓝)。
  // 顶点带 aLight=(天光01,方块光01)，shader 合成 亮度=曲线(max(天光×uSkyMul, 方块光))。
  // 故昼夜只缩放天光、火把(方块光)恒亮；改昼夜只动 uniform，无需重建网格。
  private readonly uSkyMul = { value: 1 };
  private readonly uSkyTint = { value: new THREE.Color(1, 1, 1) };
  // 夜晚天光按 MC 模型递减：白天 0、半夜≈11（露天天光 15-11=4 → 偏暗但看得见，同 Java 版）。
  private readonly uSkyDarken = { value: 0 };
  // 光影(真实水面)：uShaders 开关(0/1)、uTime 秒(驱动波动)、uSkyRefl 反射的天空色、uSunDir 太阳方向(高光)。
  private readonly uShaders = { value: 0 };
  private readonly uTime = { value: 0 };
  private readonly uSkyRefl = {
    value: new THREE.Color().setRGB(0.55, 0.72, 0.95, THREE.SRGBColorSpace),
  }; // 地平线色(掠角反射)
  private readonly uSkyTop = {
    value: new THREE.Color().setRGB(0.35, 0.55, 0.85, THREE.SRGBColorSpace),
  }; // 天顶色(俯角反射)
  private readonly uSunDir = { value: new THREE.Vector3(0.4, 0.85, 0.3) };
  // Renderer 先画一张“无水”的 HDR 颜色+深度图，水面再采样它做真实屏幕空间折射。
  private readonly uRefractionColor: { value: THREE.Texture | null } = { value: null };
  private readonly uRefractionDepth: { value: THREE.Texture | null } = { value: null };
  private readonly uRefractionSize = { value: new THREE.Vector2(1, 1) };
  private readonly uHasRefraction = { value: 0 };
  private readonly uReflectionColor: { value: THREE.Texture | null } = { value: null };
  private readonly uReflectionMatrix = { value: new THREE.Matrix4() };
  private readonly uHasReflection = { value: 0 };
  // 真实投影阴影：太阳 DirectionalLight 自动渲出 shadow map，方块 shader 手动采样它(自带 uniform 名，不依赖 three.js 给 Basic 材质填灯光 uniform)。
  private readonly sun = new THREE.DirectionalLight(0xffffff, 0); // 强度 0：只用它的 shadow map，不给材质打光(方块走自有天光 shader)
  private readonly uShadowMap: { value: THREE.Texture | null } = { value: null };
  private readonly uShadowMatrix = { value: new THREE.Matrix4() };
  private readonly uShadowTexel = {
    value: new THREE.Vector2(1 / SHADOW_MAP_SIZE, 1 / SHADOW_MAP_SIZE),
  };
  private readonly uShadowOn = { value: 0 }; // shadow map 就绪前为 0
  private readonly uHq = { value: 0 }; // 高档=1(4抽样软影),标准=0(2抽样,省一半阴影采样)
  private readonly uSunUp = { value: 0 }; // 白昼系数(太阳高度)：夜里/地平线 0 → 不投影，白天 1
  private leafDepthMat: THREE.MeshDepthMaterial | null = null; // 树叶投影用：带 alphaTest 的深度材质 → 镂空叶影
  // 网格化 Worker 池：把 ~81ms/区块的 meshChunk(光照BFS+greedy)挪后台，主线程只剩 buildGeo 上传。
  private readonly meshWorkers: Worker[] = [];
  private meshRr = 0; // round-robin 派发
  private readonly meshPending = new Set<string>(); // 已派 worker 网格化、还没回来的区块
  private readonly meshPendingSince = new Map<string, number>(); // 派发时刻(ms)，看门狗判 worker 丢消息超时重试
  private readonly meshFails = new Map<string, number>(); // 该区块连续网格化失败次数，超上限放弃+告警，防死循环
  private readonly meshQueue: { cx: number; cz: number; mesh: ChunkMesh }[] = []; // worker 回来的网格排队，每帧 flushMesh 限量上屏(防同帧多次 buildGeo/GPU 上传卡)
  // 玩家编辑(挖/放/流体)触发的重建走【优先队列】：flushMesh 先把它们上屏，再按 budget 放批量加载结果。
  // 否则低帧时(shader 重→budget 跌到 1)挖掉的方块结果排在一堆加载结果后面，迟迟不上屏 → "方块破坏不消失"。
  private readonly editKeys = new Set<string>(); // 标记"此区块的重建是编辑触发"，供 worker 回调分流到优先队列
  private readonly priorityQueue: { cx: number; cz: number; mesh: ChunkMesh }[] = [];
  private fogCullR2 = (FOG_FAR_BLOCKS / CHUNK_W) ** 2; // 雾剔除距离²(区块²)；随渲染距离由 setFogFar 改
  private lightingQuality: LightingQuality | null = null;
  private sunEnabled = true;

  constructor(
    private readonly scene: THREE.Scene,
    private world: ChunkWorld,
    atlas: THREE.Texture,
  ) {
    this.opaqueMat = new THREE.MeshBasicMaterial({ map: atlas, vertexColors: true });
    // 投影阴影深度 pass 渲【背面】：体素地形是闭合壳，受光面永远拿不到与自身相等的深度
    // → 平地/受光面零自阴影(shadow acne)。曾用正面+bias=0.004 仍在"高"档把玩家周围
    // ±36 格窗口内整片压暗 27%(假自阴影)，窗口外没阴影 → "玩家周围比远处暗"(用户报)。
    this.opaqueMat.shadowSide = THREE.BackSide;
    // 冰独立成批：光影档由材质内部完成折射+倒影后以不透明结果写入，避免普通 alpha 叠加排序错误。
    this.iceMat = new THREE.MeshBasicMaterial({ map: atlas, vertexColors: true });
    this.iceMat.shadowSide = THREE.BackSide;
    // 镂空(树叶)：alpha-test 裁切 + 双面渲染（透过近处孔能看到远端叶面，茂密感）
    this.cutoutMat = new THREE.MeshBasicMaterial({
      map: atlas,
      vertexColors: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    });
    // 水：半透明、不写深度（避免遮挡排序问题），单独成批。多帧动画用一个固定显示纹理，
    // 每帧换它的 image 像素（clone 出独立容器，避免污染帧源；换像素而非换 map 引用，确保 GPU 重传）。
    this.waterFrames = loadWaterFrames(WATER_FRAMES);
    this.waterTex = this.waterFrames[0].clone();
    this.waterTex.needsUpdate = true;
    this.cloudNoiseTex = makeCloudShadowTexture(128);
    this.waterWaveTex = makeDirectionalWaveTexture();
    this.waterMat = new THREE.MeshBasicMaterial({
      map: this.waterTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    // 水下仰视也能看到水面；单 pass 避免透明 DoubleSide 默认前后各画一次造成叠色和双倍 fill-rate。
    this.waterMat.forceSinglePass = true;
    // 不透明/镂空吃天光shader；水另走"天光 + 光影(波动/菲涅尔反射/高光)"shader
    this.installLight(this.opaqueMat, false, true);
    this.installLight(this.cutoutMat, true, false); // 树叶(cutout)随风轻摆
    this.installWaterShader(this.waterMat);
    this.installIceShader(this.iceMat);
    // 火把：贴火把纹理的交叉 billboard，自发光(不参与天光,始终全亮)，alpha-test 抠出火把形、双面可见
    this.torchMat = new THREE.MeshBasicMaterial({
      map: loadTorchTexture(),
      transparent: true,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    });

    // 太阳光(投影阴影)：castShadow 让 three.js 每帧把 castShadow 物体渲进 shadow map(深度)；
    // 材质用 RGBA 打包深度，方块 shader 自己采样。正交相机只覆盖玩家附近 ±SHADOW_HALF。
    this.sun.castShadow = false; // 默认关(集显 shadow PCF 每片元每帧太卡)；由 setLightingQuality 控制开
    this.sun.shadow.mapSize.set(SHADOW_MAP_SIZE, SHADOW_MAP_SIZE);
    const sc = this.sun.shadow.camera;
    sc.left = -SHADOW_HALF;
    sc.right = SHADOW_HALF;
    sc.top = SHADOW_HALF;
    sc.bottom = -SHADOW_HALF;
    sc.near = 1;
    sc.far = 260;
    this.scene.add(this.sun);
    this.scene.add(this.sun.target); // 光指向 target（每帧设为玩家脚下）
    // 树叶投影：带图集 + alphaTest 的深度材质 → 叶影是镂空的，而非实心方块大黑块
    this.leafDepthMat = new THREE.MeshDepthMaterial({
      depthPacking: THREE.RGBADepthPacking,
      map: atlas,
      alphaTest: 0.5,
    });
    // 网格化 worker 池(按核数，上限4)；无 Worker(测试/node)→ 留空，rebuild 同步回退。
    if (typeof Worker !== 'undefined') {
      const cores = typeof navigator !== 'undefined' ? navigator.hardwareConcurrency || 4 : 4;
      const n = Math.max(1, Math.min(4, cores - 1));
      for (let i = 0; i < n; i++) {
        const w = new MeshGenWorker();
        w.onmessage = (
          e: MessageEvent<{ cx: number; cz: number; mesh?: ChunkMesh; error?: string }>,
        ): void => {
          const { cx, cz, mesh, error } = e.data;
          const k = this.key(cx, cz);
          if (!this.meshPending.has(k)) return; // 已被同步 rebuild(挖/放/流水)覆盖 → 丢弃这个 stale worker 结果
          this.meshPending.delete(k);
          this.meshPendingSince.delete(k);
          if (error) {
            // 网格化失败：meshPending 已清 → 未达上限时 update() 会再派重试；告警暴露真正触发原因。
            const n = (this.meshFails.get(k) ?? 0) + 1;
            this.meshFails.set(k, n);
            console.warn(`[meshgen] 区块(${cx},${cz}) 网格化失败 #${n}: ${error.split('\n')[0]}`);
            return;
          }
          this.meshFails.delete(k);
          if (!mesh || !this.world.peek(cx, cz)) return; // 区块已卸载/无数据 → 丢弃
          if (this.editKeys.has(k)) {
            this.priorityQueue.push({ cx, cz, mesh }); // 编辑触发 → 优先上屏
            // 区块仍 dirty(派发后又被编辑)→留着优先标记，让下一个(最新)结果也插队；否则消标记
            if (!this.world.peek(cx, cz)?.dirty) this.editKeys.delete(k);
          } else {
            this.meshQueue.push({ cx, cz, mesh }); // 批量加载 → 普通队列，每帧 flushMesh 限量上屏(防卡)
          }
        };
        w.onerror = (ev): void => {
          console.error(
            '[meshgen worker] 致命错误(整个 worker 挂了，区块会停止网格化):',
            ev.message,
          );
        };
        this.meshWorkers.push(w);
      }
    }
  }

  // 给方块材质注入"天光×昼夜 + 方块光"的合成。顶点算亮度系数 vLF + 天光着色 vTint，片元相乘。
  private installLight(mat: THREE.MeshBasicMaterial, sway = false, underwater = false): void {
    mat.onBeforeCompile = (shader): void => {
      shader.uniforms.uSkyTint = this.uSkyTint;
      shader.uniforms.uSkyDarken = this.uSkyDarken;
      // 投影阴影 uniform（自己绑，不靠 three.js 给 Basic 材质填灯光 uniform）
      shader.uniforms.uShadowMap = this.uShadowMap;
      shader.uniforms.uShadowMatrix = this.uShadowMatrix;
      shader.uniforms.uShadowTexel = this.uShadowTexel;
      shader.uniforms.uShadowOn = this.uShadowOn;
      shader.uniforms.uHq = this.uHq;
      shader.uniforms.uSunUp = this.uSunUp;
      shader.uniforms.uShaders = this.uShaders; // 光影开关：阳光泽面/草木摆动门控
      shader.uniforms.uSunDirW = this.uSunDir; // 阳光方向(世界系,阳光泽面用;与水面共用)
      shader.uniforms.uTime = this.uTime;
      shader.uniforms.uSurfaceNoise = { value: this.cloudNoiseTex };
      shader.uniforms.uWaterWaves = { value: this.waterWaveTex };
      // cutout 随风摆：草丛按 aSway 高度加权（底=0根锚定，顶=1草尖摆）；树叶 aSway=1 整体摆。
      // 位移按【世界坐标(原始 position)+时间】→相邻顶点共享相位、无裂缝。×uShaders=只在光影开时摆。
      const swayCode = sway
        ? '{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3;' +
          ' transformed.x += sin(ph + uTime*1.4) * sw;' +
          ' transformed.z += sin(ph*1.3 + uTime*1.1) * sw;' +
          ' transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }\n'
        : '';
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\nattribute vec2 aLight;\nuniform vec3 uSkyTint;\nuniform float uSkyDarken;\nuniform mat4 uShadowMatrix;\nuniform float uShaders;\n' +
            (sway ? 'uniform float uTime;\nattribute float aSway;\n' : '') +
            (underwater ? 'attribute float aUnderwater;\n' : '') +
            'varying float vLF;\nvarying float vSkyBright;\nvarying float vBlockBright;\nvarying vec3 vTint;\nvarying vec4 vShadowCoord;\nvarying float vSky;\nvarying vec3 vWp;\nvarying float vUnderwater;\n' +
            MC_BRIGHT_GLSL,
        )
        .replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\n' +
            swayCode +
            MC_LIGHT_GLSL +
            '\n' +
            'vSky = aLight.x;\n' +
            'vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;\n' + // 世界坐标(阳光泽面法线/视线用)
            (underwater ? 'vUnderwater = aUnderwater;\n' : 'vUnderwater = 0.0;\n') +
            'vShadowCoord = uShadowMatrix * (modelMatrix * vec4(transformed, 1.0));',
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nvarying float vLF;\nvarying float vSkyBright;\nvarying float vBlockBright;\nvarying vec3 vTint;\nvarying vec4 vShadowCoord;\nvarying float vSky;\nvarying vec3 vWp;\nvarying float vUnderwater;\n' +
            'uniform sampler2D uShadowMap;\nuniform vec2 uShadowTexel;\nuniform float uShadowOn;\nuniform float uHq;\nuniform float uSunUp;\nuniform float uShaders;\nuniform vec3 uSunDirW;\n' +
            'uniform float uTime;\nuniform sampler2D uSurfaceNoise;\nuniform sampler2D uWaterWaves;\n' +
            // ⚠️ 解包常数必须与 three.js packing.glsl 一致：UnpackFactors=(255/256)/vec4(256³,256²,256,【1】)。
            // 曾把最后一位写成 256 → "远平面(无遮挡)"解包成 ≈0.008(贴脸遮挡) → 阴影窗口(玩家±36格)内
            // 【整片永远判成阴影、全场 50% 压暗】,窗口外正常 → 用户报"开光影后玩家周围比远处暗"。
            'float mwUnpackDepth(vec4 v){ const vec4 f = (255.0/256.0)/vec4(16777216.0,65536.0,256.0,1.0); return dot(v,f); }\n' +
            'float mwShadow(vec4 sc){\n' +
            '  vec3 c = sc.xyz / sc.w;\n' +
            '  if (c.z >= 1.0 || c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0) return 1.0;\n' +
            // 背面深度 pass 只需很小的数值 bias；旧值 0.0015 相当于约 0.39 格，会让影子悬浮。
            '  float bias = 0.00032;\n' +
            // 固定世界锁定的 Poisson 采样，不再按 gl_FragCoord 随机旋转，镜头移动时影边不会爬噪。
            '  float r = mix(1.35, 2.75, uHq);\n' +
            '  float s = 0.0;\n' +
            '  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.613, 0.617)*uShadowTexel*r)))?1.0:0.0;\n' +
            '  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.170,-0.040)*uShadowTexel*r)))?1.0:0.0;\n' +
            '  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.299,-0.791)*uShadowTexel*r)))?1.0:0.0;\n' +
            '  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.646, 0.494)*uShadowTexel*r)))?1.0:0.0;\n' +
            '  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.768,-0.250)*uShadowTexel*r)))?1.0:0.0;\n' +
            '  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.421,-0.644)*uShadowTexel*r)))?1.0:0.0;\n' +
            '  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.904, 0.032)*uShadowTexel*r)))?1.0:0.0;\n' +
            '  s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.058, 0.934)*uShadowTexel*r)))?1.0:0.0;\n' +
            '  if (uHq > 0.5) {\n' +
            '    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.332, 0.220)*uShadowTexel*r)))?1.0:0.0;\n' +
            '    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.292, 0.821)*uShadowTexel*r)))?1.0:0.0;\n' +
            '    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.744,-0.312)*uShadowTexel*r)))?1.0:0.0;\n' +
            '    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.897, 0.195)*uShadowTexel*r)))?1.0:0.0;\n' +
            '    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.079,-0.956)*uShadowTexel*r)))?1.0:0.0;\n' +
            '    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.508, 0.246)*uShadowTexel*r)))?1.0:0.0;\n' +
            '    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2(-0.482,-0.512)*uShadowTexel*r)))?1.0:0.0;\n' +
            '    s += (c.z-bias <= mwUnpackDepth(texture2D(uShadowMap,c.xy+vec2( 0.255,-0.356)*uShadowTexel*r)))?1.0:0.0;\n' +
            '    s /= 16.0;\n' +
            '  } else { s /= 8.0; }\n' +
            // 阴影相机窗口(玩家±36格)边缘渐隐：到边界 12% 内阴影淡出为无 —— 窗口外本就无阴影，
            // 不渐隐会形成一圈"里暗外亮"的硬边亮环("玩家周围比远处暗"观感的一部分)。
            '  float m = min(min(c.x, 1.0 - c.x), min(c.y, 1.0 - c.y));\n' +
            '  return mix(1.0, s, smoothstep(0.0, 0.08, m));\n' +
            '}',
        )
        .replace(
          '#include <color_fragment>',
          '#include <color_fragment>\n' +
            'vec3 mwAlbedo = diffuseColor.rgb;\n' +
            // 原网格颜色同时烤了固定面亮度与体素 AO。光影档先还原真正贴图色，
            // 再让天空、火把、太阳与 AO 各自作用；否则 X/Z 面永远保持原版固定明暗。
            '#ifdef USE_COLOR\n' +
            '  float mwBakedShade = max(vColor.r, 0.001);\n' +
            '#else\n' +
            '  float mwBakedShade = 1.0;\n' +
            '#endif\n' +
            'vec3 mwBlockAlbedo = clamp(mwAlbedo / mwBakedShade, 0.0, 1.25);\n' +
            'vec3 mwView = normalize(cameraPosition - vWp);\n' +
            'vec3 mwGeomN = normalize(cross(dFdx(vWp), dFdy(vWp)));\n' +
            'mwGeomN *= sign(dot(mwGeomN, mwView));\n' +
            'float mwFaceShade = mwGeomN.y > 0.5 ? 1.0 : (mwGeomN.y < -0.5 ? 0.5 : (abs(mwGeomN.x) > 0.5 ? 0.6 : 0.8));\n' +
            'float mwVoxelAO = clamp(mwBakedShade / mwFaceShade, 0.5, 1.0);\n' +
            'float mwStyleShade = mix(1.0, mwFaceShade, 0.12);\n' +
            // 从 16px 图集相邻像素即时构造微法线。它只影响近景太阳/材质反应，
            // 远处按屏幕 footprint 自动淡出，保持像素边缘稳定且不产生闪纹。
            'vec3 mwShadeN = mwGeomN;\n' +
            'float mwTileIndex = -1.0;\n' +
            '#ifdef USE_MAP\n' +
            '  vec2 mwAtlasSize = vec2(64.0, 160.0);\n' +
            '  vec2 mwTexel = 1.0 / mwAtlasSize;\n' +
            '  vec2 mwTileSize = vec2(0.25, 0.1);\n' +
            '  vec2 mwTileBase = floor(vMapUv / mwTileSize) * mwTileSize;\n' +
            '  mwTileIndex = floor(vMapUv.x * 4.0) + floor((1.0 - vMapUv.y) * 10.0) * 4.0;\n' +
            '  vec2 mwUvMin = mwTileBase + mwTexel * 0.55;\n' +
            '  vec2 mwUvMax = mwTileBase + mwTileSize - mwTexel * 0.55;\n' +
            '  float mwHL = dot(texture2D(map, clamp(vMapUv - vec2(mwTexel.x, 0.0), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));\n' +
            '  float mwHR = dot(texture2D(map, clamp(vMapUv + vec2(mwTexel.x, 0.0), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));\n' +
            '  float mwHD = dot(texture2D(map, clamp(vMapUv - vec2(0.0, mwTexel.y), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));\n' +
            '  float mwHU = dot(texture2D(map, clamp(vMapUv + vec2(0.0, mwTexel.y), mwUvMin, mwUvMax)).rgb, vec3(0.2126, 0.7152, 0.0722));\n' +
            '  vec3 mwDp1 = dFdx(vWp); vec3 mwDp2 = dFdy(vWp);\n' +
            '  vec2 mwDuv1 = dFdx(vMapUv); vec2 mwDuv2 = dFdy(vMapUv);\n' +
            '  vec3 mwDp2Perp = cross(mwDp2, mwGeomN);\n' +
            '  vec3 mwDp1Perp = cross(mwGeomN, mwDp1);\n' +
            '  vec3 mwT = mwDp2Perp * mwDuv1.x + mwDp1Perp * mwDuv2.x;\n' +
            '  vec3 mwB = mwDp2Perp * mwDuv1.y + mwDp1Perp * mwDuv2.y;\n' +
            '  float mwInvBasis = inversesqrt(max(0.000001, max(dot(mwT, mwT), dot(mwB, mwB))));\n' +
            '  float mwBump = mix(0.24, 0.36, uHq);\n' +
            '  vec3 mwTangentN = normalize(vec3(-(mwHR - mwHL) * mwBump, -(mwHU - mwHD) * mwBump, 1.0));\n' +
            '  vec3 mwPixelN = normalize(mwT * mwInvBasis * mwTangentN.x + mwB * mwInvBasis * mwTangentN.y + mwGeomN * mwTangentN.z);\n' +
            '  float mwFootprint = max(length(dFdx(vMapUv) * mwAtlasSize), length(dFdy(vMapUv) * mwAtlasSize));\n' +
            '  float mwDetailVis = (1.0 - smoothstep(0.72, 2.0, mwFootprint)) * uShaders;\n' +
            '  mwShadeN = normalize(mix(mwGeomN, mwPixelN, mwDetailVis));\n' +
            '#endif\n' +
            'float shadowVis = 1.0;\n' +
            'if (uShadowOn > 0.5) {\n' +
            '  float sh = mwShadow(vShadowCoord);\n' +
            '  float gate = vSky * uSunUp;\n' + // 只在受天光的面+白天投影：洞内/夜里不被二次压暗
            '  shadowVis = mix(1.0, sh, gate);\n' +
            '}\n' +
            'float openSun = vSky * uSunUp * uShaders;\n' +
            'if (uShaders < 0.5) {\n' +
            '  diffuseColor.rgb = mwAlbedo * vLF * vTint;\n' +
            '} else {\n' +
            // 天空是冷色半球光，火把是独立暖色局部光；体素 AO 主要压环境层，
            // 不再把二者先 max 后一起乘进贴图，阴影也只遮太阳直射。
            '  float mwSkyFloor = vSky < 0.03 ? 0.03 : 0.04;\n' +
            '  float mwSkyEnergy = mix(0.88, 0.58, uSunUp);\n' +
            '  float mwHemiFloor = mix(0.58, 0.45, uSunUp);\n' +
            '  float mwHemi = mix(mwHemiFloor, 1.0, smoothstep(-0.55, 0.85, mwGeomN.y));\n' +
            '  vec3 mwSkyColor = mix(vec3(0.72, 0.82, 1.05), vTint, 0.58);\n' +
            '  float mwAmbientAmount = max(mwSkyFloor, vSkyBright * mwSkyEnergy) * mwHemi;\n' +
            '  vec3 mwAmbient = mwBlockAlbedo * mwStyleShade * mwSkyColor * mwAmbientAmount;\n' +
            '  mwAmbient *= mix(0.42, 1.0, mwVoxelAO);\n' +
            // 阴影只保留轻微冷色，与暖直射形成清楚色温差；不再把整片环境天光先染暖。
            '  float mwShadowCool = openSun * (1.0 - shadowVis);\n' +
            '  mwAmbient *= mix(vec3(1.0), vec3(0.95, 0.98, 1.045), mwShadowCool * 0.65);\n' +
            '  float mwLocalAmount = vBlockBright * (1.0 - vSkyBright * 0.55);\n' +
            '  vec3 mwLocal = mwBlockAlbedo * mwStyleShade * vec3(1.12, 0.66, 0.3) * mwLocalAmount * 0.82;\n' +
            '  mwLocal *= mix(0.68, 1.0, mwVoxelAO);\n' +
            '  diffuseColor.rgb = mwAmbient + mwLocal;\n' +
            // 大尺度缓慢云影：一张 CPU 预生成的无缝纹理只采 1 次，给开阔地增加动态明暗，
            // 只调制太阳直射，不再让整块贴图随云层一起发灰。
            'float cloud = 0.0;\n' +
            'if (openSun > 0.003) {\n' +
            '  vec2 cuv = vWp.xz * 0.0055 + vec2(uTime * 0.0014, uTime * 0.0008);\n' +
            '  cloud = smoothstep(0.54, 0.78, texture2D(uSurfaceNoise, cuv).b);\n' +
            '}\n' +
            'float sunLit = openSun * shadowVis;\n' +
            'if (openSun > 0.003) {\n' +
            '  vec3 sunDir = normalize(uSunDirW);\n' +
            '  float nd = max(dot(mwShadeN, sunDir), 0.0);\n' +
            '  float sunHeight = smoothstep(0.05, 0.70, sunDir.y);\n' +
            // 受光面明确暖黄，但对白色/高饱和材质自动收敛色度，雪不染橙、草不荧光。
            '  vec3 sunTone = mix(vec3(1.20, 0.84, 0.52), vec3(1.12, 1.02, 0.86), sunHeight);\n' +
            '  float mwSunAlbedoLuma = dot(mwBlockAlbedo, vec3(0.2126, 0.7152, 0.0722));\n' +
            '  float mwSunAlbedoChroma = max(max(mwBlockAlbedo.r, mwBlockAlbedo.g), mwBlockAlbedo.b) - min(min(mwBlockAlbedo.r, mwBlockAlbedo.g), mwBlockAlbedo.b);\n' +
            '  float mwWhiteMask = smoothstep(0.72, 0.92, mwSunAlbedoLuma) * (1.0 - smoothstep(0.08, 0.20, mwSunAlbedoChroma));\n' +
            '  float mwSaturatedMask = smoothstep(0.18, 0.42, mwSunAlbedoChroma);\n' +
            '  float mwSunLuma = dot(sunTone, vec3(0.2126, 0.7152, 0.0722));\n' +
            '  float mwSunProtect = max(mwWhiteMask * 0.45, mwSaturatedMask * 0.35);\n' +
            '  sunTone = mix(sunTone, vec3(mwSunLuma), mwSunProtect);\n' +
            '  float sunCloud = 1.0 - cloud * mix(0.48, 0.62, uHq);\n' +
            '  float mwDirectStrength = mix(0.56, 0.60, uHq);\n' +
            '  vec3 mwDirect = mwBlockAlbedo * mwStyleShade * sunTone * nd * sunLit * sunCloud * mwDirectStrength;\n' +
            '  mwDirect *= mix(0.84, 1.0, mwVoxelAO);\n' +
            '  diffuseColor.rgb += mwDirect;\n' +
            (sway
              ? // 叶片/草丛的薄层透光：背向太阳时保留暖绿轮廓，是高质体素光影最明显的陆地层次之一。
                '  float mwBackLight = pow(max(dot(-mwShadeN, sunDir), 0.0), 0.7);\n' +
                '  vec3 mwTransmission = mix(sunTone, vec3(0.52, 1.02, 0.34), 0.62);\n' +
                '  diffuseColor.rgb += mwBlockAlbedo * mwTransmission * mwBackLight * openSun * sunCloud * (0.35 + 0.65 * shadowVis) * mix(0.16, 0.24, uHq);\n'
              : '') +
            // 保色相压峰：普通漫反射最高 1.04，略亮但仍低于 Bloom 阈值 1.05。
            '  float mwDiffusePeak = max(max(diffuseColor.r, diffuseColor.g), diffuseColor.b);\n' +
            '  diffuseColor.rgb *= min(1.0, 1.04 / max(mwDiffusePeak, 0.0001));\n' +
            // 只给雪、浅色石材和水下湿面一点材质反应；高色度草/泥土保持粗糙，避免全世界塑料化。
            '  float mwLuma = dot(mwBlockAlbedo, vec3(0.2126, 0.7152, 0.0722));\n' +
            '  float mwChroma = max(max(mwBlockAlbedo.r, mwBlockAlbedo.g), mwBlockAlbedo.b) - min(min(mwBlockAlbedo.r, mwBlockAlbedo.g), mwBlockAlbedo.b);\n' +
            '  float mwMineral = smoothstep(0.12, 0.72, mwLuma) * (1.0 - smoothstep(0.14, 0.42, mwChroma));\n' +
            '  float mwWet = smoothstep(0.08, 1.0, vUnderwater);\n' +
            '  float mwIron = 1.0 - step(0.5, abs(mwTileIndex - 33.0));\n' +
            '  float mwQuartz = 1.0 - step(0.5, abs(mwTileIndex - 34.0));\n' +
            '  float mwDiamond = 1.0 - step(0.5, abs(mwTileIndex - 36.0));\n' +
            '  float mwObsidian = 1.0 - step(0.5, abs(mwTileIndex - 18.0));\n' +
            '  float mwSpecialGloss = max(max(mwIron, mwDiamond), max(mwQuartz * 0.72, mwObsidian));\n' +
            '  vec3 mwHalf = normalize(sunDir + mwView);\n' +
            '  float mwSpecPower = mix(28.0, 64.0, uHq) * mix(0.72, 1.12, max(mwMineral, mwSpecialGloss));\n' +
            '  float mwSpec = pow(max(dot(mwShadeN, mwHalf), 0.0), mwSpecPower);\n' +
            '  mwSpec *= 0.014 + mwMineral * 0.075 + mwSpecialGloss * 0.12 + mwWet * 0.14;\n' +
            '  diffuseColor.rgb += sunTone * mwSpec * sunLit * sunCloud;\n' +
            '}\n' +
            // 真正发光方块单独输出 HDR，普通雪/沙/天空仍被锁在 1 以下；Bloom 因而只追踪光源与材质高光。
            '  float mwGlowstone = 1.0 - step(0.5, abs(mwTileIndex - 21.0));\n' +
            '  float mwLava = 1.0 - step(0.5, abs(mwTileIndex - 23.0));\n' +
            '  float mwPortal = 1.0 - step(0.5, abs(mwTileIndex - 25.0));\n' +
            '  diffuseColor.rgb += mwBlockAlbedo * (mwGlowstone * 0.72 + mwLava * 0.9 + mwPortal * 0.62) * mix(0.82, 1.0, uHq);\n' +
            '}\n' +
            // 焦散投射在真正的水底方块上，而不是加在水面颜色里。连续水深控制衰减，洞穴/夜晚不自发光。
            'if (uShaders > 0.5 && vUnderwater > 0.05 && uSunUp > 0.01) {\n' +
            '  vec2 sunProjected = vWp.xz - normalize(uSunDirW).xz / max(normalize(uSunDirW).y, 0.25) * vWp.y;\n' +
            '  vec2 cUv0 = sunProjected * 0.145 + vec2(uTime * 0.011, -uTime * 0.008);\n' +
            '  vec2 cUv1 = vec2(cUv0.x * 0.76 - cUv0.y * 0.65, cUv0.x * 0.65 + cUv0.y * 0.76) * 1.65 + vec2(-uTime * 0.007, uTime * 0.012);\n' +
            '  float crest0 = texture2D(uWaterWaves, cUv0).a;\n' +
            '  float crest1 = texture2D(uWaterWaves, cUv1).a;\n' +
            '  float c0 = smoothstep(0.64, 0.92, crest0);\n' +
            '  float c1 = smoothstep(0.64, 0.92, crest1);\n' +
            // 只保留两组波峰交汇形成的细网。旧 max(c0,c1) 会把任意一组载波整条投到水底，形成放射刷痕。
            '  float caustic = pow(c0 * c1, 1.35);\n' +
            '  float depthFade = exp(-vUnderwater * 0.38) * smoothstep(0.02, 0.25, vUnderwater);\n' +
            '  vec3 causticColor = mix(vec3(0.52, 0.76, 0.66), vec3(1.18, 1.08, 0.78), uSunUp);\n' +
            '  diffuseColor.rgb += diffuseColor.rgb * causticColor * caustic * depthFade * uSunUp * 0.1;\n' +
            '}',
        );
    };
  }

  /** 每帧：太阳 DirectionalLight 摆到天球方位(随昼夜)、阴影相机跟随玩家，绑 shadow map 给方块 shader 采样。 */
  updateSun(worldTime: number, px: number, py: number, pz: number): void {
    const th = (worldTime / DAY_LENGTH) * Math.PI * 2; // 同 SkyObjects：0=日出
    let nx = Math.cos(th);
    let ny = Math.sin(th);
    let nz = 0.1; // 同 SkyObjects：MC 1.12 过天顶轨道(正午影子极短)
    const len = Math.hypot(nx, ny, nz) || 1;
    nx /= len;
    ny /= len;
    nz /= len;
    // 焦点=玩家(按格吸附减少阴影抖动)；光在焦点沿太阳方向 120 格外、指向焦点
    const fx = Math.round(px);
    const fy = Math.round(py);
    const fz = Math.round(pz);
    this.sun.target.position.set(fx, fy, fz);
    this.sun.position.set(fx + nx * 120, fy + ny * 120, fz + nz * 120);
    this.sun.target.updateMatrixWorld();
    this.sun.updateMatrixWorld();
    this.uSunUp.value = Math.max(0, Math.min(1, (ny - 0.02) / 0.2)); // 太阳高度>~1°才投影
    const map = this.sun.shadow.map;
    // 必须检查 castShadow：关「光影」后 three.js 不再渲/释放 shadow map(它残留)，不加这个判断会重新采样冻结的旧影
    if (this.sun.castShadow && map && map.texture && this.uSunUp.value > 0.001) {
      this.uShadowMap.value = map.texture;
      this.uShadowMatrix.value = this.sun.shadow.matrix; // 引用 three.js 每帧在 shadow pass 更新的矩阵
      this.uShadowOn.value = 1;
    } else {
      this.uShadowOn.value = 0;
    }
  }

  // 水面专用：经典档保留 16px 帧动画；光影档改走廉价的双层法线纹理、深度吸收、
  // Fresnel 天空反射、岸线细浪和双层太阳倒影。几何只做厘米级涌浪，防止远海出现白色“冰架”。
  private installWaterShader(mat: THREE.MeshBasicMaterial): void {
    mat.onBeforeCompile = (shader): void => {
      shader.uniforms.uSkyMul = this.uSkyMul;
      shader.uniforms.uSkyTint = this.uSkyTint;
      shader.uniforms.uSkyDarken = this.uSkyDarken;
      shader.uniforms.uShaders = this.uShaders;
      shader.uniforms.uTime = this.uTime;
      shader.uniforms.uSkyRefl = this.uSkyRefl;
      shader.uniforms.uSkyTop = this.uSkyTop;
      shader.uniforms.uSunDir = this.uSunDir;
      shader.uniforms.uHq = this.uHq;
      shader.uniforms.uSurfaceNoise = { value: this.waterWaveTex };
      shader.uniforms.uCloudNoise = { value: this.cloudNoiseTex };
      shader.uniforms.uRefractionColor = this.uRefractionColor;
      shader.uniforms.uRefractionDepth = this.uRefractionDepth;
      shader.uniforms.uRefractionSize = this.uRefractionSize;
      shader.uniforms.uHasRefraction = this.uHasRefraction;
      shader.uniforms.uReflectionColor = this.uReflectionColor;
      shader.uniforms.uReflectionMatrix = this.uReflectionMatrix;
      shader.uniforms.uHasReflection = this.uHasReflection;

      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
attribute vec2 aLight;
attribute float aTop;
attribute float aShore;
uniform vec3 uSkyTint;
uniform float uSkyDarken;
uniform float uShaders;
uniform float uTime;
uniform float uHq;
uniform mat4 uReflectionMatrix;
varying float vLF;
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying vec3 vWPos;
varying vec3 vWaterBaseWPos;
varying vec2 vWaveSlope;
varying float vWaveHeight;
varying float vWaveTrust;
varying float vWaveSpatialTrust;
varying float vWaterDepth;
varying float vSkyVis;
varying float vShore;
varying vec4 vReflectionCoord;
vec3 mwWaveField(vec2 p, float t) {
  // 有界波群：长涌浪承载轮廓，两组更短的交叉波让坡度第一眼可见。
  // q 严格位于 [-1,1]；非对称整形范围为 [-0.20,+0.09] 格。
  vec2 dg = vec2(-0.300, 0.954);
  vec2 d1 = vec2(0.821, 0.571);
  vec2 d2 = vec2(-0.419, 0.908);
  vec2 d3 = vec2(0.960, -0.280);
  float pg = dot(p, dg) * 0.075 - t * 0.07;
  float sg = sin(pg);
  float cg = cos(pg);
  float group = 0.76 + 0.24 * sg;
  vec2 groupGrad = 0.24 * 0.075 * cg * dg;
  float p1 = dot(p, d1) * 0.20 + t * 0.24;
  float p2 = dot(p, d2) * 0.80 - t * 0.58;
  float p3 = dot(p, d3) * 1.08 + t * 0.80;
  float s1 = sin(p1), s2 = sin(p2), s3 = sin(p3);
  float q = 0.42 * group * s1 + 0.40 * s2 + 0.18 * s3;
  vec2 qGrad = 0.42 * (groupGrad * s1 + group * cos(p1) * 0.20 * d1)
    + 0.40 * cos(p2) * 0.80 * d2
    + 0.18 * cos(p3) * 1.08 * d3;
  float h = 0.145 * q - 0.055 * q * q;
  vec2 hGrad = (0.145 - 0.11 * q) * qGrad;
  return vec3(h, hGrad);
}
// 在顶点接近本水格上下界时，用连续 Hermite 曲线压平位移与导数。
// 旧版先硬 clamp 位置、再用 step 把法线瞬间清零，会让浅水倒影一帧亮、一帧暗。
vec3 mwLimitWave(float raw, float negativeRoom, float positiveRoom) {
  float room = raw < 0.0 ? negativeRoom : positiveRoom;
  if (room <= 0.0001) return vec3(0.0);
  float amount = abs(raw);
  float knee = max(room - 0.025, room * 0.65);
  if (amount <= knee) return vec3(raw, 1.0, 1.0);
  if (amount >= room) return vec3(sign(raw) * room, 0.0, 0.0);
  float span = max(room - knee, 0.0001);
  float x = clamp((amount - knee) / span, 0.0, 1.0);
  float curve = x + x * x - x * x * x;
  float derivative = max(0.0, 1.0 + 2.0 * x - 3.0 * x * x);
  // derivative 是真实位移导数，capTrust 则必须从 1 单调降到 0；二者不能混用。
  float capTrust = 1.0 - smoothstep(0.0, 1.0, x);
  return vec3(sign(raw) * (knee + span * curve), derivative, capTrust);
}
${MC_BRIGHT_GLSL}`,
        )
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
${MC_LIGHT_GLSL}
vec3 mwWp0 = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWaterBaseWPos = mwWp0;
// 岸边与浅水连续锚定；aTop<0 的侧壁底点/瀑布锚点保持不动。
float mwMovable = step(0.001, aTop);
float mwDepthGate = smoothstep(0.12, 0.55, abs(aTop));
float mwWet = 1.0 - clamp(aShore, 0.0, 1.0);
float mwEdgeGate = smoothstep(0.08, 0.95, mwWet);
// aTop 的绝对值是水柱深度，不是流体高度。额外按真实顶点高度衰减，
// 防止 amount=1/2 的薄水也套上深海浪后持续撞 clamp。
float mwRawBaseFrac = fract(transformed.y);
float mwIntegerTop = mwMovable * (1.0 - step(0.001, mwRawBaseFrac));
float mwBaseFrac = mix(mwRawBaseFrac, 1.0, mwIntegerTop);
float mwLevelGate = smoothstep(0.08, 0.42, mwBaseFrac);
// cornerH=1 的瀑布/水柱接合角固定在整数块顶，不能继续向上起浪。
float mwWaveGate = mwMovable * mwDepthGate * mwEdgeGate * mwLevelGate
  * (1.0 - mwIntegerTop) * uShaders;
vec3 mwWave = mwWaveField(mwWp0.xz, uTime);
float mwRawDisp = mwWave.x * mwWaveGate;
vec3 mwLimited = mwLimitWave(
  mwRawDisp,
  max(mwBaseFrac - 0.02, 0.0),
  max(0.98 - mwBaseFrac, 0.0)
);
float mwDisp = mwLimited.x;
vWaveHeight = mwDisp;
vWaveSlope = mwWave.yz * mwWaveGate * mwLimited.y;
float mwSpatialTrust = smoothstep(0.72, 0.98, mwDepthGate)
  * smoothstep(0.72, 0.98, mwEdgeGate)
  * smoothstep(0.72, 0.98, mwLevelGate);
vWaveTrust = mwSpatialTrust * mwLimited.z * (1.0 - mwIntegerTop);
// 破浪带只需要知道这里是否为开阔、完整的水面，不能混入 limiter 的 capTrust。
// 否则真正到达浪峰上限时白浪反而会被挖断，运动中又会像闪烁。
vWaveSpatialTrust = mwSpatialTrust * (1.0 - mwIntegerTop);
transformed.y += mwDisp;
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWaterDepth = abs(aTop);
vSkyVis = aLight.x;
vShore = aShore;
// 平面倒影必须用未位移的基准水面投影；若再用 vWPos，几何波会把整幅倒影
// 二次推来推去，快速跑动/转头时就表现为同步闪烁。
vReflectionCoord = uReflectionMatrix * vec4(mwWp0, 1.0);`,
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
uniform float uSkyMul;
uniform float uShaders;
uniform float uTime;
uniform float uHq;
uniform vec3 uSkyRefl;
uniform vec3 uSkyTop;
uniform vec3 uSunDir;
uniform sampler2D uSurfaceNoise;
uniform sampler2D uCloudNoise;
uniform sampler2D uRefractionColor;
uniform sampler2D uRefractionDepth;
uniform vec2 uRefractionSize;
uniform float uHasRefraction;
uniform sampler2D uReflectionColor;
uniform float uHasReflection;
varying float vLF;
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying vec3 vWPos;
varying vec3 vWaterBaseWPos;
varying vec2 vWaveSlope;
varying float vWaveHeight;
varying float vWaveTrust;
varying float vWaveSpatialTrust;
varying float vWaterDepth;
varying float vSkyVis;
varying float vShore;
varying vec4 vReflectionCoord;
vec2 mwTurn(vec2 p) { return vec2(p.x * 0.8 - p.y * 0.6, p.x * 0.6 + p.y * 0.8); }
float mwLinearDepth(float z) {
  float n = 0.1;
  float f = 1000.0;
  float ndc = z * 2.0 - 1.0;
  return (2.0 * n * f) / max(0.0001, f + n - ndc * (f - n));
}
float mwDepthMatch(vec2 uv, float centerDistance, float rejectDistance) {
  float sampleDistance = mwLinearDepth(texture2D(uRefractionDepth, uv).r);
  return 1.0 - smoothstep(rejectDistance * 0.45, rejectDistance, abs(sampleDistance - centerDistance));
}
`,
        )
        // 光影水完全由程序材质着色，跳过原 16px map 采样；off 档仍保留经典帧动画。
        .replace(
          '#include <map_fragment>',
          `#ifdef USE_MAP
if (uShaders < 0.5) diffuseColor *= texture2D(map, vMapUv);
#endif`,
        )
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
float mwFaceShade = clamp(max(max(diffuseColor.r, diffuseColor.g), diffuseColor.b), 0.48, 1.0);
if (uShaders < 0.5) {
  diffuseColor.rgb *= vLF * vTint;
} else if (uHasRefraction > 0.5) {
  vec3 toEye = cameraPosition - vWPos;
  float dist = length(toEye);
  vec3 V = toEye / max(dist, 0.0001);
  vec3 stableToEye = cameraPosition - vWaterBaseWPos;
  vec3 stableV = stableToEye / max(length(stableToEye), 0.0001);
  vec3 faceN = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  faceN *= sign(dot(faceN, V));
  // 用未位移网格识别顶面/侧壁，避免浪峰把材质分支本身来回切换。
  vec3 baseFaceN = normalize(cross(dFdx(vWaterBaseWPos), dFdy(vWaterBaseWPos)));
  baseFaceN *= sign(dot(baseFaceN, V));
  float horiz = smoothstep(0.5, 0.92, abs(baseFaceN.y));

  // 大中小四级波谱：A/B 保留到远景，C/D 按屏幕足迹淡出，避免细波小于一像素后闪烁。
  vec2 p = vWPos.xz;
  vec4 rippleA = texture2D(uSurfaceNoise, p * 0.028 + vec2(uTime * 0.006, -uTime * 0.0044));
  vec4 rippleB = texture2D(uSurfaceNoise, mwTurn(p) * 0.065 + vec2(-uTime * 0.012, uTime * 0.0085));
  vec4 rippleC = texture2D(uSurfaceNoise, mwTurn(p.yx) * 0.14 + vec2(uTime * 0.022, uTime * 0.017));
  vec4 rippleD = texture2D(uSurfaceNoise, mwTurn(p * 0.22) + vec2(-uTime * 0.036, uTime * 0.027));
  float footprint = max(length(dFdx(p)), length(dFdy(p)));
  float midVis = 1.0 - smoothstep(0.35, 1.2, footprint);
  float microVis = 1.0 - smoothstep(0.1, 0.42, footprint);
  float nearDetail = 1.0 - smoothstep(30.0, 100.0, dist);
  vec2 normalA = rippleA.rg * 2.0 - 1.0;
  vec2 normalB = rippleB.rg * 2.0 - 1.0;
  vec2 normalC = rippleC.rg * 2.0 - 1.0;
  vec2 normalD = rippleD.rg * 2.0 - 1.0;
  vec2 detailN = normalA * 0.12;
  detailN += normalB * 0.085 * mix(0.5, 1.0, midVis);
  detailN += normalC * 0.03 * midVis;
  detailN += normalD * 0.008 * microVis * nearDetail * uHq;
  detailN *= horiz;
  // 顶点函数同时给出解析坡度。它比逐三角形 faceN 连续，长浪经过网格对角线时不会
  // 突然换法线；侧壁仍使用真实几何法线，保持瀑布与水下表面方向正确。
  float faceSide = baseFaceN.y < 0.0 ? -1.0 : 1.0;
  float signedBaseY = faceSide * max(abs(baseFaceN.y), 0.18);
  vec2 baseGradient = -baseFaceN.xz / signedBaseY;
  vec2 geomGradient = baseGradient + vWaveSlope;
  // 岸角、薄水与限位区的 gate 会跨三角形变化；解析式没有包含 gate 的梯度，
  // 因此在那里连续混回真实位移面法线，避免倒影沿岸跳变。
  float signedFaceY = faceSide * max(abs(faceN.y), 0.18);
  vec2 displacedGradient = -faceN.xz / signedFaceY;
  float waveTrust = clamp(vWaveTrust, 0.0, 1.0);
  vec2 trustedGradient = mix(displacedGradient, geomGradient, waveTrust);
  vec3 geomTrustedN = normalize(vec3(-trustedGradient.x, 1.0, -trustedGradient.y)) * faceSide;
  vec3 geomN = normalize(mix(faceN, geomTrustedN, horiz));
  vec2 totalGradient = trustedGradient - detailN;
  vec3 topN = normalize(vec3(-totalGradient.x, 1.0, -totalGradient.y)) * faceSide;
  vec3 N = normalize(mix(faceN, topN, horiz));
  vec2 macroDetailN = (normalA * 0.085 + normalB * 0.06 * mix(0.55, 1.0, midVis)) * horiz;
  vec2 macroGradient = trustedGradient - macroDetailN;
  vec3 macroTopN = normalize(vec3(-macroGradient.x, 1.0, -macroGradient.y)) * faceSide;
  vec3 macroN = normalize(mix(faceN, macroTopN, horiz));
  // 屏幕空间折射/倒影必须使用 view-space 倾斜；直接拿世界 XZ 会在玩家转向时改变扰动方向。
  vec3 flatN = vec3(0.0, faceSide, 0.0);
  vec2 geomTilt = (viewMatrix * vec4(geomN - flatN, 0.0)).xy;
  vec2 macroTilt = (viewMatrix * vec4(macroN - flatN, 0.0)).xy;
  vec2 fullTilt = (viewMatrix * vec4(N - flatN, 0.0)).xy;
  vec2 macroNoiseTilt = macroTilt - geomTilt;
  vec2 microTilt = fullTilt - macroTilt;

  // 无水 HDR RT 的真实屏幕空间折射：用微法线轻推 UV，并用深度拒绝前景串色。
  vec2 screenUv = gl_FragCoord.xy / max(uRefractionSize, vec2(1.0));
  float screenEdge = min(min(screenUv.x, 1.0 - screenUv.x), min(screenUv.y, 1.0 - screenUv.y));
  // 屏幕边缘逐渐收回扰动/模糊，避免 ClampToEdge 把最后一列像素拉成固定竖色带。
  float screenEdgeFade = smoothstep(0.002, 0.022, screenEdge);
  vec2 maxRefraction = vec2(7.0) / max(uRefractionSize, vec2(1.0));
  vec2 refrPx = geomTilt * mix(36.0, 40.0, uHq)
    + macroNoiseTilt * mix(10.0, 12.0, uHq)
    + microTilt * mix(3.0, 4.0, uHq);
  vec2 refrOffset = clamp(refrPx, vec2(-7.0), vec2(7.0)) * screenEdgeFade / max(uRefractionSize, vec2(1.0));
  refrOffset = clamp(refrOffset, -maxRefraction, maxRefraction);
  vec2 provisionalUv = clamp(screenUv + refrOffset, vec2(0.004), vec2(0.996));
  float centerDepth = texture2D(uRefractionDepth, screenUv).r;
  float centerDistance = mwLinearDepth(centerDepth);
  float waterDistance = mwLinearDepth(gl_FragCoord.z);
  float centerThickness = max(0.0, centerDistance - waterDistance);
  float sceneDepth = texture2D(uRefractionDepth, provisionalUv).r;
  float sampledDistance = mwLinearDepth(sceneDepth);
  float depthDiscontinuity = abs(sampledDistance - centerDistance);
  float rejectDistance = clamp(centerThickness * 0.1, 0.45, 2.0);
  float depthValidity = 1.0 - smoothstep(0.25, rejectDistance, depthDiscontinuity);
  depthValidity *= step(gl_FragCoord.z + 0.00012, sceneDepth);
  vec2 refrUv = clamp(screenUv + refrOffset * depthValidity * depthValidity, vec2(0.004), vec2(0.996));
  // 吸收、模糊、泡沫必须由未扰动中心深度驱动。若跟着折射 UV 走，镜头移动时岸边会闪色/闪泡沫。
  float thickness = clamp(centerThickness, 0.0, 48.0);
  float blurDepth = min(thickness, max(vWaterDepth * 1.25, 1.0));
  float blurPx = clamp(0.35 + blurDepth * 0.12, 0.35, 2.5);
  vec2 blurStep = vec2(blurPx * screenEdgeFade) / max(uRefractionSize, vec2(1.0));
  vec2 refrXp = clamp(refrUv + vec2( blurStep.x, 0.0), vec2(0.0005), vec2(0.9995));
  vec2 refrXm = clamp(refrUv + vec2(-blurStep.x, 0.0), vec2(0.0005), vec2(0.9995));
  vec2 refrYp = clamp(refrUv + vec2(0.0,  blurStep.y), vec2(0.0005), vec2(0.9995));
  vec2 refrYm = clamp(refrUv + vec2(0.0, -blurStep.y), vec2(0.0005), vec2(0.9995));
  float tapReject = clamp(centerThickness * 0.08, 0.4, 1.8);
  float wxp = 0.15 * mwDepthMatch(refrXp, centerDistance, tapReject);
  float wxm = 0.15 * mwDepthMatch(refrXm, centerDistance, tapReject);
  float wyp = 0.15 * mwDepthMatch(refrYp, centerDistance, tapReject);
  float wym = 0.15 * mwDepthMatch(refrYm, centerDistance, tapReject);
  float weightSum = 0.4 + wxp + wxm + wyp + wym;
  vec3 opaqueBehind = texture2D(uRefractionColor, refrUv).rgb * 0.4;
  opaqueBehind += texture2D(uRefractionColor, refrXp).rgb * wxp;
  opaqueBehind += texture2D(uRefractionColor, refrXm).rgb * wxm;
  opaqueBehind += texture2D(uRefractionColor, refrYp).rgb * wyp;
  opaqueBehind += texture2D(uRefractionColor, refrYm).rgb * wym;
  opaqueBehind /= max(weightSum, 0.0001);

  // Beer-Lambert 吸收与水体散射：浅水保留清晰水底，深水逐渐转为青蓝而非一层透明贴纸。
  float verticalThickness = max(vWaterDepth, 0.75);
  float opticalThickness = max(0.55, min(thickness, mix(verticalThickness, thickness, 0.45)));
  vec3 transmittance = exp(-vec3(0.19, 0.088, 0.052) * opticalThickness);
  vec3 waterScatter = vec3(0.022, 0.09, 0.125) * mix(0.62, 1.0, vLF) * vTint;
  waterScatter *= mix(0.45, 1.0, uSkyMul);
  // 深水折射会被吸收成近似常量；只用低频分量留下宽缓明暗，不让微法线变成闪点。
  float broadRelief = (rippleA.b - 0.5) * 0.65 + (rippleB.b - 0.5) * 0.35;
  float scatterAmount = 1.0 - exp(-opticalThickness * 0.29);
  vec3 refracted = opaqueBehind * transmittance + waterScatter * scatterAmount;
  // 只让体色随真实光程缓慢增长；浅水约 1%，不再盖一层固定的有色玻璃膜。
  float bodyTint = (1.0 - exp(-opticalThickness * 0.2)) * 0.07;
  refracted = mix(refracted, waterScatter, bodyTint);
  // 波峰约 +0.09 格、波谷可达 -0.20 格，按两侧各自范围归一后做宽面明暗。
  // 这层始终低于 HDR/Bloom，只让正午俯视能读出浪峰和浪谷，不会产生白色闪点。
  float waveRelief = vWaveHeight >= 0.0
    ? clamp(vWaveHeight / 0.09, 0.0, 1.0)
    : clamp(vWaveHeight / 0.20, -1.0, 0.0);
  vec2 waveLightDir = normalize(uSunDir.xz + vec2(0.0001, 0.0));
  float slopeRelief = clamp(-dot(vWaveSlope, waveLightDir) * 9.0, -1.0, 1.0);
  // 解析大浪在远景仍保留约六成对比；只有纹理宽面 relief 随距离淡出。
  // 旧版把整项乘 nearDetail，30--100 格后的海面因此又退化成一张平膜。
  float relief = (waveRelief * 0.12 + slopeRelief * 0.14)
    * mix(0.62, 1.0, nearDetail) * horiz;
  relief += broadRelief * 0.04 * nearDetail * horiz;
  relief = clamp(relief, -0.18, 0.20);
  // 明暗波属于水体透射层。若再乘到明亮天空倒影上，日出时浪谷会变成灰黑斑块。
  refracted *= 1.0 + relief;

  // 天空与云层反射。用反射光线和虚拟云层求交，同一噪声也驱动地面云影，方向一致。
  vec3 R = reflect(-V, macroN);
  // Fresnel 能量按稳定的基准海平面计算；macroN 仍负责倒影方向/UV 的流动。
  // 若让移动法线同时控制 Fresnel，掠射角的五次方会把亮天空切成开关式碎白岛。
  float NoV = clamp(abs(stableV.y), 0.0, 1.0);
  float surfaceRoughness = clamp(0.11 + 0.06 * smoothstep(28.0, 110.0, dist), 0.11, 0.17);
  float skyHeight = smoothstep(-0.02, 0.72, R.y);
  vec3 reflectedSky = mix(uSkyRefl, uSkyTop, skyHeight);
  float cloudTravel = max(0.0, 232.0 - vWPos.y) / max(R.y, 0.08);
  vec2 cloudUv = (p + R.xz * min(cloudTravel, 1200.0)) * 0.0034 + vec2(uTime * 0.0014, uTime * 0.0008);
  float cloudA = texture2D(uCloudNoise, cloudUv).b;
  float cloudB = texture2D(uCloudNoise, cloudUv * 1.83 + vec2(0.31, -0.17)).b;
  float cloud = smoothstep(0.55, 0.79, cloudA * 0.68 + cloudB * 0.32) * smoothstep(0.01, 0.18, R.y);
  vec3 cloudColor = mix(uSkyRefl * 1.25, vec3(1.22, 1.16, 1.04), uSkyMul);
  // Planar RT 已经含真实云，这里只做少量兜底；过重会把浪面盖成大片灰斑。
  float proceduralCloudMix = cloud * 0.22;

  // 镜像倒影只由连续的解析几何长浪扭曲。A/B/C/D 动态纹理仍参与折射与
  // 水面细节，但不再推动高对比倒影，避免树影/云边缘在真机上细碎闪动。
  vec2 reflectionBaseUv = vReflectionCoord.xy / max(vReflectionCoord.w, 0.0001);
  vec2 reflectionUv = reflectionBaseUv;
  vec2 reflectionPx = clamp(
    geomTilt * mix(40.0, 44.0, uHq),
    vec2(-6.0),
    vec2(6.0)
  );
  reflectionUv += reflectionPx / max(uRefractionSize, vec2(1.0));
  if (uHasReflection > 0.5) {
    float reflectionBlur = 0.9 + surfaceRoughness * 4.0
      + 1.8 * pow(1.0 - NoV, 1.5)
      + 0.5 * smoothstep(30.0, 110.0, dist);
    vec2 reflectionTexel = vec2(reflectionBlur) / max(uRefractionSize, vec2(1.0));
    vec2 reflectionMargin = reflectionTexel * 1.5 + vec2(0.002);
    // 投影与主相机共用同一视锥，波纹最多只把边缘推出 6px。直接把 9 taps
    // 收进有效范围，比在这里切回另一套程序反射更连续，也不会留下固定竖色带。
    vec2 reflectionSampleUv = clamp(reflectionUv, reflectionMargin, vec2(1.0) - reflectionMargin);
    vec3 planarReflection = texture2D(uReflectionColor, reflectionSampleUv).rgb * 0.25;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2( reflectionTexel.x, 0.0)).rgb * 0.125;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(-reflectionTexel.x, 0.0)).rgb * 0.125;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(0.0,  reflectionTexel.y)).rgb * 0.125;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(0.0, -reflectionTexel.y)).rgb * 0.125;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + reflectionTexel).rgb * 0.0625;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv - reflectionTexel).rgb * 0.0625;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(reflectionTexel.x, -reflectionTexel.y)).rgb * 0.0625;
    planarReflection += texture2D(uReflectionColor, reflectionSampleUv + vec2(-reflectionTexel.x, reflectionTexel.y)).rgb * 0.0625;
    planarReflection /= vec3(1.0) + planarReflection * 0.16;
    // 镜像 RT 中仍包含太阳盘/光晕。若让它保留 HDR，再叠下面的稳定太阳光路，
    // 两套高光会在快速转头时交替跨过亮度阈值。倒影只负责天空与地形，
    // 唯一允许超过 1 的水面太阳能量由 macro road 输出。
    float planarPeak = max(max(planarReflection.r, planarReflection.g), planarReflection.b);
    planarReflection *= min(1.0, 0.9 / max(planarPeak, 0.0001));
    // 只按未扰动投影坐标做护边，避免转头时扰动本身让整条边界反复开关。
    // PlanarReflection 已多渲 8% 视野，正常屏幕范围会落在完整权重区。
    vec2 reflectionGuard = vec2(12.0) / max(uRefractionSize, vec2(1.0));
    vec2 reflectionFeather = vec2(8.0) / max(uRefractionSize, vec2(1.0));
    vec2 reflectionEdgeIn = smoothstep(reflectionGuard, reflectionGuard + reflectionFeather, reflectionBaseUv);
    vec2 reflectionEdgeOut = smoothstep(reflectionGuard, reflectionGuard + reflectionFeather, vec2(1.0) - reflectionBaseUv);
    float reflectionBlend = reflectionEdgeIn.x * reflectionEdgeIn.y * reflectionEdgeOut.x * reflectionEdgeOut.y;
    float planarMix = mix(0.52, 0.7, pow(1.0 - NoV, 2.0)) * reflectionBlend;
    // 平面 RT 已含真实云，绝不能再叠一层不同相位的程序云；双云会在水上形成
    // 与天空不对应的灰斑，运动时也会被误认成反射闪烁。
    reflectedSky = mix(reflectedSky, planarReflection, planarMix);
  } else {
    reflectedSky = mix(reflectedSky, cloudColor, proceduralCloudMix);
  }

  // 宽而受控的 Fresnel：正视保留少量反射，向掠角平缓增长；旧式五次方在中角
  // 长期接近零、临近地平线才突然铺成镜面，数学连续但视觉像硬切。
  float stableFresnel = min(0.52, 0.05 + 0.47 * pow(1.0 - NoV, 3.2));
  // 只让解析几何长浪影响 Fresnel，并严格限制在稳定平面的窄范围内。
  // 因而掠视角会出现连续的明暗浪带，但 A/B/C/D 细波不会把天空切成闪烁亮岛。
  float geomNoV = clamp(abs(dot(geomN, V)), 0.0, 1.0);
  float geomFresnel = min(0.52, 0.05 + 0.47 * pow(1.0 - geomNoV, 3.2));
  // 低可信岸角使用逐三角 faceN，只让它参与普通折射，不拿来切换高对比反射能量。
  float geomFresnelWeight = 0.72 * smoothstep(0.45, 0.92, waveTrust);
  float fresnel = mix(stableFresnel, geomFresnel, geomFresnelWeight);
  fresnel = clamp(
    fresnel,
    max(0.02, stableFresnel - 0.025),
    min(0.52, stableFresnel + 0.04)
  );
  float reflectionGate = horiz * vSkyVis * smoothstep(-0.08, 0.03, V.y);
  vec3 col = mix(refracted, reflectedSky * 0.94, fresnel * reflectionGate);

  // 普通水色压在 Bloom 阈值以下；HDR 只留给下面受控的太阳光路。
  float waterBasePeak = max(max(col.r, col.g), col.b);
  col *= min(1.0, 1.02 / max(waterBasePeak, 0.0001));

  // 固定平面只提供稳定底带，解析几何浪负责把光路分成连续波带。
  // 不接入 C/D 微法线或 crest 硬阈值，避免单像素 HDR 亮点重新闪烁。
  vec3 L = normalize(uSunDir);
  float flatAlign = max(dot(reflect(-stableV, vec3(0.0, 1.0, 0.0)), L), 0.0);
  float geomAlign = max(dot(reflect(-stableV, geomN), L), 0.0);
  float macroAlign = max(dot(reflect(-stableV, macroN), L), 0.0);
  float flatPath = pow(flatAlign, 10.0);
  float geomPath = pow(geomAlign, 18.0);
  float macroPath = pow(macroAlign, 32.0);
  // 小于一个像素的远景波带自动淡出；近中景解析波仍保留完整高光。
  float geomFootprint = fwidth(geomAlign);
  float geomAA = 1.0 - smoothstep(0.018, 0.055, geomFootprint);
  float macroFootprint = fwidth(macroAlign);
  float macroAA = 1.0 - smoothstep(0.01, 0.038, macroFootprint);
  float crestBias = mix(0.72, 1.0, smoothstep(-0.35, 0.65, waveRelief));
  // 岸角/薄水回退的是每三角 faceN，fwidth 无法跨三角边界做 AA；那里仅保留稳定底带。
  float geomRoadTrust = smoothstep(0.70, 0.95, waveTrust);
  float roadRaw = flatPath * 0.006;
  roadRaw += geomPath * geomAA * crestBias * geomRoadTrust * 0.052;
  roadRaw += macroPath * macroAA * crestBias * geomRoadTrust * 0.016;
  float specEnergy = 0.11 * (1.0 - exp(-roadRaw / 0.11));
  float sunHeight = clamp(L.y * 3.0, 0.0, 1.0);
  vec3 sunColor = mix(vec3(12.0, 4.5, 1.4), vec3(10.5, 9.8, 8.4), sunHeight);
  float sunVisible = smoothstep(0.005, 0.16, L.y) * uSkyMul * vSkyVis * horiz;
  col += sunColor * specEnergy * sunVisible;

  // 开放海面的解析破浪带：与几何中浪使用同一方向、波长和速度，因此白浪会
  // 一道一道沿真实浪峰推进，而不是粘在屏幕或倒影纹理上的噪点。
  vec2 breakerP = vWaterBaseWPos.xz;
  vec2 breakerDir = vec2(-0.419, 0.908);
  vec2 breakerTangent = vec2(-0.908, -0.419);
  float breakerSwell = dot(breakerP, vec2(0.821, 0.571)) * 0.20 + uTime * 0.24;
  float breakerAlong = dot(breakerP, breakerTangent);
  // 两级低频横向摆动把平行载波弯成自然浪脊；尺度足够大，不会产生屏幕空间噪点。
  float breakerCurve = sin(
    breakerAlong * 0.075 - uTime * 0.045 + sin(breakerSwell) * 0.60
  );
  float breakerPhase = dot(breakerP, breakerDir) * 0.80 - uTime * 0.58
    + sin(breakerSwell) * 0.38 + breakerCurve * 0.42;
  // 浪峰 pi/2 映射到周期坐标 0；相位域 fwidth 在波峰处仍可靠，远景不会缩成闪点。
  float breakerCycle = fract((breakerPhase - 1.5707963) * 0.1591549431 + 0.5) - 0.5;
  float breakerWidthWave = 0.5 + 0.5 * sin(
    breakerAlong * 0.19 - uTime * 0.031 + sin(breakerSwell * 0.73) * 0.42
  );
  float breakerWidth = mix(0.72, 1.18, breakerWidthWave);
  float breakerDistance = abs(breakerCycle) / breakerWidth;
  float breakerPixel = max(fwidth(breakerCycle) * 1.25, 0.002);
  float breakerOuter = 1.0 - smoothstep(
    0.070 - breakerPixel,
    0.105 + breakerPixel,
    breakerDistance
  );
  float breakerCore = 1.0 - smoothstep(
    0.026 - breakerPixel,
    0.052 + breakerPixel,
    breakerDistance
  );
  float breakerSubpixel = 1.0 - smoothstep(0.060, 0.135, fwidth(breakerCycle));
  breakerOuter *= breakerSubpixel;
  breakerCore *= breakerSubpixel;

  // 沿浪脊以几十格尺度缓慢分段，最低仍保留连续淡带，不使用高频噪声硬切。
  float breakerPacket01 = 0.5 + 0.5 * sin(
    breakerAlong * 0.115 + uTime * 0.025
    + 0.45 * sin(breakerAlong * 0.043 - uTime * 0.013)
  );
  float breakerPacketFine = 0.5 + 0.5 * sin(
    breakerAlong * 0.28 - uTime * 0.041
    + 0.55 * sin(breakerAlong * 0.091 + uTime * 0.017)
  );
  float breakerPacketField = breakerPacket01 * 0.64 + breakerPacketFine * 0.36;
  float breakerPacket = mix(0.06, 1.0, smoothstep(0.34, 0.69, breakerPacketField));
  float breakerFront = mix(
    0.62,
    1.0,
    smoothstep(-0.045 - breakerPixel, 0.070 + breakerPixel, breakerCycle)
  );
  // 空间可信度不包含浪峰 limiter；另以水深/岸线/视角筛掉浅滩、瀑布、岸边与水下表面。
  float breakerTrust = smoothstep(0.45, 0.90, vWaveSpatialTrust)
    * smoothstep(1.35, 3.0, vWaterDepth)
    * (1.0 - smoothstep(0.02, 0.22, vShore))
    * smoothstep(0.015, 0.12, stableV.y)
    * horiz;
  // 其他交叉波只温和调制强弱，绝不把整道浪峰瞬间开关。
  float breakerHeight = mix(0.45, 1.0, smoothstep(0.05, 0.72, waveRelief));
  float breakerSwellGate = mix(0.55, 1.0, smoothstep(-0.25, 0.65, sin(breakerSwell)));
  float breakerFoam = (breakerOuter * 0.055 + breakerCore * 0.145)
    * breakerFront * breakerPacket * breakerHeight * breakerSwellGate
    * breakerTrust * vSkyVis
    * mix(0.62, 1.0, pow(1.0 - NoV, 0.65))
    * mix(0.18, 1.0, clamp(uSkyMul, 0.0, 1.0))
    * mix(0.90, 1.10, uHq);
  breakerFoam = clamp(breakerFoam, 0.0, 0.20);
  // 白沫只能提亮水色，不能把已经更亮的太阳光路压成灰洞；它本身仍为非 HDR，
  // 因而不会制造新的 Bloom 闪点。
  vec3 breakerColor = mix(
    vec3(0.10, 0.22, 0.27),
    vec3(0.74, 0.87, 0.92),
    clamp(uSkyMul, 0.0, 1.0)
  );
  col = mix(col, max(col, breakerColor), breakerFoam);

  // 岸边只保留窄接触泡沫，不再把整片浅海刷成白边。
  float contact = (1.0 - smoothstep(0.055, 0.42, centerThickness)) * smoothstep(0.05, 0.4, vShore);
  float shore = smoothstep(0.12, 0.86, vShore) * horiz;
  float foamNoise = smoothstep(0.58, 0.88, rippleA.a * 0.55 + rippleC.a * 0.45);
  float foam = max(contact * 0.48, shore * (0.14 + foamNoise * 0.36)) * vSkyVis * mix(0.3, 1.0, uSkyMul);
  vec3 foamColor = mix(vec3(0.16, 0.31, 0.39), vec3(0.74, 0.91, 0.96), uSkyMul);
  col = mix(col, foamColor, clamp(foam, 0.0, 0.34));

  // 远景只做一次统一大气融合；折射源本身已带雾，避免旧版重复雾化成灰白海面。
  float atmosphere = 0.0;
  vec3 atmosphereColor = uSkyRefl;
  #ifdef USE_FOG
    atmosphereColor = fogColor;
    #ifdef FOG_EXP2
      atmosphere = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
    #else
      float sceneFog = smoothstep(fogNear, fogFar, vFogDepth);
      // 区块按水平径向距离剔除，而标准雾按 view-Z；侧边必须再叠径向 border fog 才不会露锯齿平台。
      float edgeFog = smoothstep(fogFar * 0.86, fogFar * 0.98, dist);
      atmosphere = max(sceneFog, edgeFog);
    #endif
  #else
    atmosphere = smoothstep(68.0, 96.0, dist);
  #endif
  col = mix(col, atmosphereColor, atmosphere);
  float below = smoothstep(0.02, 0.28, -V.y) * horiz;
  col = mix(col, col * vec3(0.54, 0.82, 1.08) + vec3(0.0, 0.016, 0.035), below * 0.34);
  diffuseColor.rgb = col;
  // 这里已经在 shader 内完成折射合成；alpha 必须为 1，否则 GPU 会把真实场景再混一次，
  // 造成用户截图里的“无色透明玻璃”与洗白水底。
  diffuseColor.a = 1.0;
} else {
  vec3 toEye = cameraPosition - vWPos;
  float dist = length(toEye);
  vec3 V = toEye / max(dist, 0.0001);

  // Only horizontal faces receive sky reflection. This is the main guard against
  // bright vertical “ice shelves” along distant chunk and waterfall walls.
  vec3 geoN = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  float horiz = smoothstep(0.46, 0.82, abs(geoN.y));
  float nearDetail = 1.0 - smoothstep(30.0, 100.0, dist);
  vec2 p = vWPos.xz;
  vec4 rippleA = texture2D(uSurfaceNoise, p * 0.026 + vec2(uTime * 0.0062, -uTime * 0.0041));
  vec4 rippleB = texture2D(uSurfaceNoise, mwTurn(p) * 0.073 + vec2(-uTime * 0.0103, uTime * 0.0074));
  vec2 slope = (rippleA.rg * 2.0 - 1.0) * 0.72 + (rippleB.rg * 2.0 - 1.0) * 0.38;
  float ridge = rippleA.a * 0.62 + rippleB.a * 0.48;
  if (uHq > 0.5) {
    vec4 rippleC = texture2D(uSurfaceNoise, mwTurn(p.yx) * 0.17 + vec2(uTime * 0.014, uTime * 0.009));
    slope += (rippleC.rg * 2.0 - 1.0) * 0.18 * nearDetail;
    ridge += rippleC.a * 0.16;
  }
  slope *= mix(0.28, 1.0, nearDetail) * horiz;
  vec3 N = normalize(vec3(slope.x * 0.86, 1.0, slope.y * 0.86));

  // Beer-Lambert-style view-path absorption: clear cyan shallows, saturated blue
  // depths, and denser water at a grazing angle without block-by-block cutoffs.
  float opticalDepth = max(0.12, vWaterDepth) / max(abs(V.y), 0.22);
  float absorption = 1.0 - exp(-opticalDepth * 0.34);
  float deep = smoothstep(0.16, 0.91, absorption);
  vec3 shallowWater = vec3(0.004, 0.19, 0.32);
  vec3 deepWater = vec3(0.002, 0.045, 0.15);
  vec3 base = mix(shallowWater, deepWater, deep) * vLF * vTint * mwFaceShade;

  float skyGate = smoothstep(-0.015, 0.025, V.y) * horiz * vSkyVis;
  vec3 reflected = reflect(-V, N);
  float skyHeight = smoothstep(0.0, 0.78, clamp(reflected.y, 0.0, 1.0));
  vec3 skyReflection = mix(uSkyRefl, uSkyTop, skyHeight) * mix(0.72, 0.92, skyHeight);
  skyReflection /= vec3(1.0) + skyReflection * 0.12;
  float fresnel = min(0.62, 0.025 + 0.975 * pow(1.0 - max(dot(V, N), 0.0), 5.0));
  vec3 col = mix(base, skyReflection, fresnel * skyGate);

  // Interference ridges imitate the moving caustic web visible through shallow
  // water. It is deliberately sunlight/sky gated so cave lakes never self-glow.
  float caustic = pow(smoothstep(0.42, 0.93, ridge), 2.0);
  col += vec3(0.23, 0.52, 0.62) * caustic * (1.0 - deep) * 0.24 * uSkyMul * vSkyVis * horiz;

  // Broad lobe forms a continuous sun road; sharp lobe breaks it into HDR sparks
  // which bloom. Low sun is amber, noon is warm white.
  vec3 L = normalize(uSunDir);
  vec3 H = normalize(L + V);
  float sunHeight = clamp(L.y * 3.0, 0.0, 1.0);
  float sunVisible = smoothstep(0.01, 0.18, L.y) * uSkyMul * skyGate;
  float nh = max(dot(N, H), 0.0);
  float broadSpec = pow(nh, 20.0) * 0.27;
  float sparkle = pow(nh, 110.0) * (1.25 + uHq * 0.55) * mix(0.65, 1.15, rippleB.b);
  vec3 sunColor = mix(vec3(1.45, 0.48, 0.12), vec3(1.22, 1.08, 0.82), sunHeight);
  col += sunColor * (broadSpec + sparkle) * sunVisible * mix(0.72, 1.0, nearDetail);

  // Exact mesher-provided shoreline mask: a narrow, animated contact line instead
  // of whitening every shallow-water tile.
  float shore = smoothstep(0.06, 0.72, vShore) * horiz;
  float foamBreakup = smoothstep(0.3, 0.86, rippleA.a * 0.7 + rippleB.a * 0.52);
  float foam = shore * (0.22 + foamBreakup * 0.78) * (0.38 + uSkyMul * 0.62) * vSkyVis;
  vec3 foamColor = mix(vec3(0.12, 0.34, 0.5), vec3(0.72, 0.92, 1.08), uSkyMul);
  col = mix(col, foamColor, min(0.48, foam * 0.42));
  col += foamColor * foam * 0.1;

  // The newly double-sided surface remains readable from below instead of
  // disappearing when the player swims underwater and looks up.
  float below = smoothstep(0.015, 0.24, -V.y) * horiz;
  col = mix(col, col * vec3(0.46, 0.8, 1.12) + vec3(0.0, 0.018, 0.045), below * 0.38);
  diffuseColor.rgb = col;

  float depthAlpha = mix(0.25, 0.76, absorption);
  float topAlpha = clamp(depthAlpha + fresnel * skyGate * 0.23 + foam * 0.16, 0.24, 0.88);
  diffuseColor.a = mix(0.52, topAlpha, horiz);
}`,
        )
        // 折射源本身已经经过场景雾；光影水在上面的材质分支做一次距离大气融合，
        // 这里仅让经典水走 three.js 默认雾，避免水面被二次洗成灰白。
        .replace(
          '#include <fog_fragment>',
          `#ifdef USE_FOG
if (uShaders < 0.5) {
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
  #else
    float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
  #endif
  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);
}
#endif`,
        );
    };
  }

  /** 冰面独立材质：无水场景折射 + 平面倒影 + 低粗糙度高光，最终以 opaque 合成写入。 */
  private installIceShader(mat: THREE.MeshBasicMaterial): void {
    mat.onBeforeCompile = (shader): void => {
      shader.uniforms.uSkyTint = this.uSkyTint;
      shader.uniforms.uSkyDarken = this.uSkyDarken;
      shader.uniforms.uShaders = this.uShaders;
      shader.uniforms.uTime = this.uTime;
      shader.uniforms.uSunDir = this.uSunDir;
      shader.uniforms.uSunUp = this.uSunUp;
      shader.uniforms.uSkyRefl = this.uSkyRefl;
      shader.uniforms.uSkyTop = this.uSkyTop;
      shader.uniforms.uWaterWaves = { value: this.waterWaveTex };
      shader.uniforms.uRefractionColor = this.uRefractionColor;
      shader.uniforms.uRefractionDepth = this.uRefractionDepth;
      shader.uniforms.uRefractionSize = this.uRefractionSize;
      shader.uniforms.uHasRefraction = this.uHasRefraction;
      shader.uniforms.uReflectionColor = this.uReflectionColor;
      shader.uniforms.uReflectionMatrix = this.uReflectionMatrix;
      shader.uniforms.uHasReflection = this.uHasReflection;

      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
attribute vec2 aLight;
uniform vec3 uSkyTint;
uniform float uSkyDarken;
uniform mat4 uReflectionMatrix;
varying float vLF;
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying float vSkyVis;
varying vec3 vWPos;
varying vec4 vReflectionCoord;
${MC_BRIGHT_GLSL}`,
        )
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
${MC_LIGHT_GLSL}
vSkyVis = aLight.x;
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vReflectionCoord = uReflectionMatrix * vec4(vWPos, 1.0);`,
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
uniform float uShaders;
uniform float uTime;
uniform float uSunUp;
uniform vec3 uSunDir;
uniform vec3 uSkyRefl;
uniform vec3 uSkyTop;
uniform sampler2D uWaterWaves;
uniform sampler2D uRefractionColor;
uniform sampler2D uRefractionDepth;
uniform vec2 uRefractionSize;
uniform float uHasRefraction;
uniform sampler2D uReflectionColor;
uniform float uHasReflection;
varying float vLF;
varying float vSkyBright;
varying float vBlockBright;
varying vec3 vTint;
varying float vSkyVis;
varying vec3 vWPos;
varying vec4 vReflectionCoord;
vec2 mwIceTurn(vec2 p) { return vec2(p.x * 0.78 - p.y * 0.63, p.x * 0.63 + p.y * 0.78); }`,
        )
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
if (uShaders < 0.5 || uHasRefraction < 0.5) {
  diffuseColor.rgb *= vLF * vTint;
} else {
  vec3 toEye = cameraPosition - vWPos;
  vec3 V = normalize(toEye);
  vec3 faceN = normalize(cross(dFdx(vWPos), dFdy(vWPos)));
  faceN *= sign(dot(faceN, V));
  float horiz = smoothstep(0.45, 0.9, abs(faceN.y));
  // 冰的微表面固定在世界坐标，不跟水纹一起流动；两层方向交错形成细小晶纹。
  vec4 iceWave0 = texture2D(uWaterWaves, vWPos.xz * 0.12 + vec2(0.17, 0.43));
  vec4 iceWave1 = texture2D(uWaterWaves, mwIceTurn(vWPos.xz) * 0.27 + vec2(0.61, 0.09));
  vec2 slope = ((iceWave0.rg * 2.0 - 1.0) * 0.032 + (iceWave1.rg * 2.0 - 1.0) * 0.016) * horiz;
  vec3 microN = normalize(vec3(-slope.x, 1.0, -slope.y));
  vec3 N = normalize(mix(faceN, microN, horiz));

  vec2 screenUv = gl_FragCoord.xy / max(uRefractionSize, vec2(1.0));
  vec2 maxOffset = vec2(4.0) / max(uRefractionSize, vec2(1.0));
  vec2 refrUv = clamp(screenUv + clamp(slope * 0.007, -maxOffset, maxOffset), vec2(0.002), vec2(0.998));
  float refrDepth = texture2D(uRefractionDepth, refrUv).r;
  if (refrDepth <= gl_FragCoord.z + 0.0001) refrUv = screenUv;
  vec2 refrBlur = vec2(1.25) / max(uRefractionSize, vec2(1.0));
  vec3 behind = texture2D(uRefractionColor, refrUv).rgb * 0.4;
  behind += texture2D(uRefractionColor, refrUv + vec2( refrBlur.x, 0.0)).rgb * 0.15;
  behind += texture2D(uRefractionColor, refrUv + vec2(-refrBlur.x, 0.0)).rgb * 0.15;
  behind += texture2D(uRefractionColor, refrUv + vec2(0.0,  refrBlur.y)).rgb * 0.15;
  behind += texture2D(uRefractionColor, refrUv + vec2(0.0, -refrBlur.y)).rgb * 0.15;

  // 冰晶微法线只负责折射细节，Fresnel 能量按稳定平面计算；否则相机移动时
  // pow(1-NoV,5) 会把每个晶纹放大成开关式白斑。
  float NoV = clamp(abs(V.y), 0.0, 1.0);
  float opticalPath = 0.82 / max(NoV, 0.24);
  vec3 transmission = exp(-vec3(0.035, 0.018, 0.008) * opticalPath);
  vec3 iceScatter = vec3(0.055, 0.16, 0.27) * vLF * vTint;
  vec3 transmitted = behind * transmission + iceScatter * (vec3(1.0) - transmission);

  vec3 R = reflect(-V, N);
  vec3 reflected = mix(uSkyRefl, uSkyTop, smoothstep(0.0, 0.72, R.y));
  vec2 reflectionBaseUv = vReflectionCoord.xy / max(vReflectionCoord.w, 0.0001);
  if (uHasReflection > 0.5) {
    vec2 rBlur = vec2(3.5) / max(uRefractionSize, vec2(1.0));
    vec2 rMargin = rBlur * 1.5 + vec2(0.002);
    vec2 reflectionUv = clamp(reflectionBaseUv, rMargin, vec2(1.0) - rMargin);
    vec3 rp = texture2D(uReflectionColor, reflectionUv).rgb * 0.25;
    rp += texture2D(uReflectionColor, reflectionUv + vec2( rBlur.x, 0.0)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(-rBlur.x, 0.0)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(0.0,  rBlur.y)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(0.0, -rBlur.y)).rgb * 0.125;
    rp += texture2D(uReflectionColor, reflectionUv + rBlur).rgb * 0.0625;
    rp += texture2D(uReflectionColor, reflectionUv - rBlur).rgb * 0.0625;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(rBlur.x, -rBlur.y)).rgb * 0.0625;
    rp += texture2D(uReflectionColor, reflectionUv + vec2(-rBlur.x, rBlur.y)).rgb * 0.0625;
    float rpPeak = max(max(rp.r, rp.g), rp.b);
    rp *= min(1.0, 0.9 / max(rpPeak, 0.0001));
    vec2 rGuard = vec2(12.0) / max(uRefractionSize, vec2(1.0));
    vec2 rFeather = vec2(8.0) / max(uRefractionSize, vec2(1.0));
    vec2 rEdgeIn = smoothstep(rGuard, rGuard + rFeather, reflectionBaseUv);
    vec2 rEdgeOut = smoothstep(rGuard, rGuard + rFeather, vec2(1.0) - reflectionBaseUv);
    float reflectionBlend = rEdgeIn.x * rEdgeIn.y * rEdgeOut.x * rEdgeOut.y;
    reflected = mix(reflected, rp, 0.62 * reflectionBlend);
  }

  float fresnel = 0.04 + 0.96 * pow(1.0 - NoV, 5.0);
  vec3 col = mix(transmitted, reflected, fresnel * vSkyVis);
  float texLuma = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
  float frost = max(smoothstep(0.58, 0.96, texLuma) * 0.72, pow(max(iceWave0.a, iceWave1.a), 4.0) * 0.42);
  vec3 iceBody = vec3(0.38, 0.61, 0.84) * vLF * vTint * mix(0.88, 1.06, frost);
  // 保留大部分真实透射/倒影，只用一层薄霜把它与流动水区分开。
  col = mix(col, iceBody, 0.07 + frost * 0.12);
  col = mix(col, col * vec3(0.86, 0.96, 1.06) + vec3(0.018, 0.042, 0.07), 0.08);

  vec3 L = normalize(uSunDir);
  // 一条连续的宽冰面光路取代 pow(N·H,72) 针状亮片。后者在高 DPI/跑动时
  // 会逐像素跨过 Bloom 阈值；宽瓣仍然明亮，但不会一块一块闪烁。
  float icePath = pow(max(dot(reflect(-V, vec3(0.0, 1.0, 0.0)), L), 0.0), 18.0);
  float iceSpecRaw = icePath * 0.08;
  float iceSpec = 0.12 * (1.0 - exp(-iceSpecRaw / 0.12));
  vec3 sunColor = mix(vec3(11.0, 4.1, 1.3), vec3(9.5, 9.0, 8.0), clamp(L.y * 3.0, 0.0, 1.0));
  col += sunColor * iceSpec * uSunUp * vSkyVis;
  diffuseColor.rgb = col;
  diffuseColor.a = 1.0;
}`,
        );
    };
  }

  /** 昼夜：天光着色 → uSkyTint（白天白、夜暗蓝），由 shader 按天光占比施加（火把照亮处不变蓝）。 */
  private lastTint = '';
  setTint(c: [number, number, number]): void {
    const sig = c.join();
    if (sig === this.lastTint) return;
    this.lastTint = sig;
    this.uSkyTint.value.setRGB(c[0], c[1], c[2]);
  }

  /** 昼夜日照系数（白天=1、夜=0）：现仅供水面太阳粼光强度用（光照走 uSkyDarken）。 */
  setSkyMul(v: number): void {
    this.uSkyMul.value = v;
  }

  /** 昼夜天光递减（MC 1:1）：白天 0、半夜≈11 → 露天天光 15-11=4，偏暗但看得见、不靠火把也行。 */
  setSkyDarken(v: number): void {
    this.uSkyDarken.value = v;
  }

  /** 光影画质：off=全关；standard=全套效果+2抽样阴影；high=4抽样软影+更强泛光/体积光。
   *  投影阴影是光影包第一辨识度(满地树影/山影)——曾只给高档,标准档画面永远是平的
   *  ("还是不像光影"主因之一)。标准用 2-tap 硬一点的影省采样,集显可担。 */
  setLightingQuality(q: LightingQuality): void {
    if (q === this.lightingQuality) return;
    this.lightingQuality = q;
    this.uShaders.value = q !== 'off' ? 1 : 0;
    // 光影水已在 shader 内把折射背景、吸收、倒影和高光合成为最终不透明颜色。
    // 它必须进入不透明队列并写深度；继续使用透明排序会让远水覆盖近水、跨 chunk 跳变，
    // 也会让实体/体积光错误地穿过水面。off 档仍是经典 alpha 水，恢复旧状态。
    const shadedWater = q !== 'off';
    this.waterMat.transparent = !shadedWater;
    this.waterMat.depthWrite = shadedWater;
    this.waterMat.opacity = shadedWater ? 1 : 0.78;
    this.waterMat.needsUpdate = true;
    this.sun.castShadow = q !== 'off' && this.sunEnabled;
    this.uHq.value = q === 'high' ? 1 : 0;
    const shadowSize = q === 'high' ? 4096 : SHADOW_MAP_SIZE;
    if (this.sun.shadow.mapSize.x !== shadowSize) {
      this.sun.shadow.mapSize.set(shadowSize, shadowSize);
      this.sun.shadow.map?.dispose();
      this.sun.shadow.map = null;
      // 下一张 shadow map 尚未生成，不能继续采样刚 dispose 的旧纹理。
      this.uShadowOn.value = 0;
      this.uShadowTexel.value.set(1 / shadowSize, 1 / shadowSize);
    }
    const shadowHalf = q === 'high' ? 56 : 46;
    const sc = this.sun.shadow.camera;
    if (sc.left !== -shadowHalf) {
      sc.left = -shadowHalf;
      sc.right = shadowHalf;
      sc.top = shadowHalf;
      sc.bottom = -shadowHalf;
      sc.updateProjectionMatrix();
    }
    if (q === 'off') this.uShadowOn.value = 0;
  }

  /** 下界没有太阳：关掉不可见的太阳阴影 pass，并防止旧 shadow texture 残留在地形上。 */
  setSunEnabled(enabled: boolean): void {
    if (enabled === this.sunEnabled) return;
    this.sunEnabled = enabled;
    this.sun.castShadow =
      enabled && this.lightingQuality !== null && this.lightingQuality !== 'off';
    if (!enabled) this.uShadowOn.value = 0;
  }

  /** 雾剔除距离(随渲染距离)：超出此距离的区块完全在雾里 → 不网格化/不绘制。far 单位=格。 */
  setFogFar(farBlocks: number): void {
    this.fogCullR2 = (farBlocks / CHUNK_W) ** 2;
  }

  /** 水面反射的天空色：地平线色(掠角) + 天顶色(俯角) → 反射出天空渐变(更真实)。 */
  setSkyReflection(horizon: [number, number, number], top?: [number, number, number]): void {
    // skyStateAt 返回的是显示用 sRGB；shader/RT 在 linear 空间工作。旧代码直接当 linear
    // 会把地平线反射抬得过亮，远海因此泛白成一层层“冰架”。
    this.uSkyRefl.value.setRGB(horizon[0], horizon[1], horizon[2], THREE.SRGBColorSpace);
    if (top) this.uSkyTop.value.setRGB(top[0], top[1], top[2], THREE.SRGBColorSpace);
  }

  /** 接收 Renderer 的无水场景颜色/深度；尺寸是物理像素，对齐 gl_FragCoord。 */
  setWaterRefraction(
    color: THREE.Texture | null,
    depth: THREE.Texture | null,
    physicalWidth: number,
    physicalHeight: number,
  ): void {
    this.uRefractionColor.value = color;
    this.uRefractionDepth.value = depth;
    this.uRefractionSize.value.set(Math.max(1, physicalWidth), Math.max(1, physicalHeight));
    this.uHasRefraction.value = color && depth ? 1 : 0;
  }

  /** 接收海平面镜像相机的 HDR 倒影及世界坐标→倒影 UV 矩阵。 */
  setWaterReflection(color: THREE.Texture | null, textureMatrix?: THREE.Matrix4): void {
    this.uReflectionColor.value = color;
    if (textureMatrix) this.uReflectionMatrix.value.copy(textureMatrix);
    this.uHasReflection.value = color ? 1 : 0;
  }

  /** 太阳方向(世界系，驱动水面镜面高光)。 */
  setSunDir(x: number, y: number, z: number): void {
    this.uSunDir.value.set(x, y, z);
  }

  /** 切换方块图集（卡通/经典材质切换）：换不透明/镂空材质的贴图；水有独立纹理不受影响。 */
  setAtlas(tex: THREE.Texture): void {
    this.opaqueMat.map = tex;
    this.iceMat.map = tex;
    this.cutoutMat.map = tex;
    this.opaqueMat.needsUpdate = true;
    this.iceMat.needsUpdate = true;
    this.cutoutMat.needsUpdate = true;
  }

  /** 水面动画（MC 风格帧动画）：按固定步长切换整张水纹理（所有水格同步），波纹原地流动+变化，
   *  不做 UV 平移（那样像水单向滑走）。24 帧首尾无缝循环。 */
  animateWater(dt: number): void {
    this.uTime.value += dt; // 驱动光影水面波动
    // 光影水跳过经典 map 采样；此时不再每 90ms 把 16px 帧重传 GPU。
    if (this.uShaders.value > 0.5) return;
    this.waterAnimT += dt;
    const FRAME_DUR = 0.09; // 每帧约 90ms（接近 MC 水的节奏）
    while (this.waterAnimT >= FRAME_DUR) {
      this.waterAnimT -= FRAME_DUR;
      this.waterFrame = (this.waterFrame + 1) % this.waterFrames.length;
      const next = this.waterFrames[this.waterFrame];
      if (next.image) {
        this.waterTex.image = next.image;
        this.waterTex.needsUpdate = true; // 只重传像素，不重编译 shader
      }
    }
  }

  private key(cx: number, cz: number): string {
    return `${cx},${cz}`;
  }

  /** 切维度：卸载当前所有区块网格、清队列与在途标记、换内部 world 引用。保留 worker 池(不重建)。 */
  setWorld(world: ChunkWorld): void {
    for (const k of [...this.meshes.keys()]) this.unload(k); // 释放 geometry + 从 scene 移除
    this.lightGrids.clear();
    this.meshQueue.length = 0;
    this.priorityQueue.length = 0;
    this.meshPending.clear();
    this.meshPendingSince.clear();
    this.meshFails.clear();
    this.editKeys.clear();
    this.world = world;
  }

  /**
   * 释放本管理器全部资源(供 MenuBackground 进游戏时调用)：卸载所有区块网格、终止网格化 worker、销毁自有材质/水纹理。
   * 修复:菜单背景的整套世界(RADIUS=6≈169 区块网格 + 4 worker + WebGL 资源)进游戏后从不释放 → 与游戏世界【双份】占内存 → 集显/低内存机 OOM。
   * 不销毁传入的共享图集 atlas、共享 waterFrames(由别处拥有/缓存)；只销毁自有的克隆 waterTex 与材质。
   */
  dispose(): void {
    for (const k of [...this.meshes.keys()]) this.unload(k); // 从场景移除 + dispose 所有 geometry
    this.lightGrids.clear();
    for (const w of this.meshWorkers) w.terminate(); // 终止网格化 worker(否则线程/内存常驻)
    this.meshWorkers.length = 0;
    this.opaqueMat.dispose();
    this.iceMat.dispose();
    this.cutoutMat.dispose();
    this.waterMat.dispose();
    this.torchMat.dispose();
    this.waterTex.dispose();
    this.cloudNoiseTex.dispose();
    this.waterWaveTex.dispose();
    this.leafDepthMat?.dispose();
    this.scene.remove(this.sun);
    this.scene.remove(this.sun.target);
  }

  private buildGeo(data: MeshData): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
    if (data.normals) g.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3)); // MeshBasicMaterial 不打灯，区块网格不带法线
    g.setAttribute('uv', new THREE.BufferAttribute(data.uvs, 2));
    g.setAttribute('color', new THREE.BufferAttribute(data.colors, 3));
    if (data.light && data.light.length)
      g.setAttribute('aLight', new THREE.BufferAttribute(data.light, 2)); // 天光/方块光(火把网格不带)
    if (data.underwater && data.underwater.length)
      g.setAttribute('aUnderwater', new THREE.BufferAttribute(data.underwater, 1)); // 不透明：面外水柱深度(水底焦散)
    if (data.top && data.top.length) g.setAttribute('aTop', new THREE.BufferAttribute(data.top, 1)); // 仅水：水面顶点标记(光影涌浪起伏)
    if (data.shore && data.shore.length)
      g.setAttribute('aShore', new THREE.BufferAttribute(data.shore, 1)); // 仅水：精确岸线覆盖率(细浪/泡沫)
    if (data.sway && data.sway.length)
      g.setAttribute('aSway', new THREE.BufferAttribute(data.sway, 1)); // cutout：摆动权重(草丛底0顶1；树叶1)
    g.setIndex(new THREE.BufferAttribute(data.indices, 1));
    return g;
  }

  /** 实体环境光采样：世界坐标 → [天光0..15, 方块光0..15]（4 格粒度粗网格）。未加载→[15,0](当露天,防黑闪)。 */
  lightLevelAt(wx: number, wy: number, wz: number): [number, number] {
    const cx = Math.floor(Math.floor(wx) / CHUNK_W);
    const cz = Math.floor(Math.floor(wz) / CHUNK_W);
    const g = this.lightGrids.get(this.key(cx, cz));
    if (!g) return [15, 0];
    const lx = Math.min(3, Math.max(0, Math.floor((wx - cx * CHUNK_W) / 4)));
    const lz = Math.min(3, Math.max(0, Math.floor((wz - cz * CHUNK_W) / 4)));
    const ly = Math.min(47, Math.max(0, Math.floor(wy / 4)));
    const v = g[lx + lz * 4 + ly * 16];
    return [v >> 4, v & 15];
  }

  /** 实体环境亮度系数 0..1：与方块 shader 完全同曲线(mcBright、skyDarken、drkFloor)。
   *  生物/掉落物/手持用它乘暗——否则在洞里/夜里全亮渲染像自发光(暗处光照 bug)。 */
  brightnessAt(wx: number, wy: number, wz: number, skyDarken: number): number {
    const [sky, blk] = this.lightLevelAt(wx, wy, wz);
    const floor = sky < 0.5 ? 0.03 : 0.04;
    return Math.min(1, Math.max(mcBrightJs(sky - skyDarken), mcBrightJs(blk)) * 0.96 + floor);
  }

  private unload(k: string): void {
    this.editKeys.delete(k); // 卸载就清掉优先标记，防 editKeys 累积已驱逐区块
    this.meshPendingSince.delete(k);
    this.meshFails.delete(k);
    this.lightGrids.delete(k);
    const m = this.meshes.get(k);
    if (!m) return;
    for (const mesh of [m.opaque, m.ice, m.cutout, m.water, m.torch]) {
      if (mesh) {
        this.scene.remove(mesh);
        mesh.geometry.dispose();
      }
    }
    this.meshes.delete(k);
  }

  // 把一套网格数据建成 Mesh 并入场景（空数据返回 null）
  private addMesh(data: MeshData, mat: THREE.Material, cx: number, cz: number): THREE.Mesh | null {
    if (data.indices.length === 0) return null;
    const mesh = new THREE.Mesh(this.buildGeo(data), mat);
    mesh.position.set(cx * CHUNK_W, 0, cz * CHUNK_W);
    if (mat === this.waterMat || mat === this.iceMat) mesh.layers.set(WATER_RENDER_LAYER);
    this.scene.add(mesh);
    return mesh;
  }

  // 把网格数据上屏(buildGeo + 入场景 + 阴影标记)。worker 回调与同步回退共用。
  /** 每帧把 worker 网格化结果【限量】上屏(buildGeo + GPU 上传)：防同帧多个 worker 一起上传导致掉帧。 */
  flushMesh(budget: number): void {
    // 先上屏【编辑触发】的结果(挖/放/流体)：即使批量加载被 budget 饿着，挖掉的方块也立刻消失。
    // 上限 8 防一次性爆发(如流体/爆炸批量脏块)同帧 buildGeo 过多卡顿；超出的下帧继续(仍排在批量加载前)。
    for (let prio = 0; prio < 8 && this.priorityQueue.length > 0; prio++) {
      const item = this.priorityQueue.shift();
      if (item && this.world.peek(item.cx, item.cz)) this.applyMesh(item.cx, item.cz, item.mesh);
    }
    for (let i = 0; i < budget && this.meshQueue.length > 0; i++) {
      const item = this.meshQueue.shift();
      if (item && this.world.peek(item.cx, item.cz)) this.applyMesh(item.cx, item.cz, item.mesh);
    }
  }

  /** 还有 worker 网格化在途，或结果待上屏（供主菜单预加载等待铺满后再显示）。 */
  meshBusy(): boolean {
    return this.meshQueue.length > 0 || this.priorityQueue.length > 0 || this.meshPending.size > 0;
  }

  /** 待上屏的网格数（供游戏层按【时间预算】逐个 flush，稳帧）。 */
  meshQueueLen(): number {
    return this.meshQueue.length + this.priorityQueue.length;
  }

  /** F3 调试用：区块管线各阶段计数。下次若再现"加载不出来/隐身"，看哪个数不对：
   *  meshed=已上屏  pending=派给 worker 还没回  queued=worker 算完还没上屏  hidden=已上屏但被剔除隐藏。 */
  pipelineStats(): { meshed: number; visible: number; pending: number; queued: number } {
    let visible = 0;
    for (const m of this.meshes.values())
      if ([m.opaque, m.ice, m.cutout, m.water, m.torch].some((s) => s && s.visible)) visible++;
    return {
      meshed: this.meshes.size,
      visible,
      pending: this.meshPending.size,
      queued: this.meshQueueLen(),
    };
  }

  private applyMesh(cx: number, cz: number, mesh: ChunkMesh): void {
    this.unload(this.key(cx, cz));
    this.lightGrids.set(this.key(cx, cz), mesh.light3d); // 实体照明粗网格(unload 已清旧的)
    const om = this.addMesh(mesh.opaque, this.opaqueMat, cx, cz) ?? new THREE.Mesh();
    const im = this.addMesh(mesh.ice, this.iceMat, cx, cz);
    const cm = this.addMesh(mesh.cutout, this.cutoutMat, cx, cz);
    const wm = this.addMesh(mesh.water, this.waterMat, cx, cz);
    const tm = this.addMesh(mesh.torch, this.torchMat, cx, cz);
    // 投影阴影：不透明方块投影+接收；树叶用镂空深度材质投影(叶影有孔，不是实心黑块)；水/火把不投影
    om.castShadow = true;
    om.receiveShadow = true;
    if (im) {
      im.castShadow = true;
      im.receiveShadow = true;
    }
    if (cm) {
      cm.castShadow = true;
      cm.receiveShadow = true;
      if (this.leafDepthMat) cm.customDepthMaterial = this.leafDepthMat;
    }
    this.meshes.set(this.key(cx, cz), { opaque: om, ice: im, cutout: cm, water: wm, torch: tm });
    // 注意：dirty 由派发方(rebuild 派 worker 时 / rebuildSync 同步重建后)清，applyMesh 不清——
    // 否则"派发后又被编辑(dirty=true)"的区块，等旧 worker 结果上屏时会被误清回 false → 丢改动。
  }

  // 同步网格化(主线程跑 meshChunk)：挖/放即时重建、无 Worker 回退、邻区没齐时兜底。
  private rebuildSync(cx: number, cz: number): void {
    const k = this.key(cx, cz);
    // 作废这个区块在途/待上屏的 worker 结果——下面同步上屏的才是最新；否则旧 worker 结果回来会把挖/放盖回去
    this.meshPending.delete(k);
    this.meshPendingSince.delete(k);
    const qi = this.meshQueue.findIndex((m) => m.cx === cx && m.cz === cz);
    if (qi >= 0) this.meshQueue.splice(qi, 1);
    const pi = this.priorityQueue.findIndex((m) => m.cx === cx && m.cz === cz);
    if (pi >= 0) this.priorityQueue.splice(pi, 1); // 同步上屏的才最新，作废优先队列里该块的旧结果
    this.applyMesh(cx, cz, meshChunk(this.world, cx, cz));
    const c = this.world.peek(cx, cz);
    if (c) c.dirty = false; // 同步重建用的是当前数据，安全清脏（applyMesh 不再清）
  }

  // 收集本+8邻区的 blocks/fluid 副本(worker 网格化时采光晕/face/AO)。任一邻区还没生成→null(这次不派)。
  private collectNeighbors(
    cx: number,
    cz: number,
  ): { blocks: Uint16Array[]; fluid: Uint8Array[] } | null {
    const blocks: Uint16Array[] = [];
    const fluid: Uint8Array[] = [];
    for (let dcx = -1; dcx <= 1; dcx++) {
      for (let dcz = -1; dcz <= 1; dcz++) {
        const c = this.world.peek(cx + dcx, cz + dcz);
        if (!c) return null;
        blocks.push(c.blocks.slice()); // 副本：原 buffer 属于 chunk，不能 transfer 走
        fluid.push(c.fluid.slice());
      }
    }
    return { blocks, fluid };
  }

  // 异步网格化(派 worker，主线程不阻塞)；无 worker / 邻区没齐 → 同步回退。
  private rebuild(cx: number, cz: number): void {
    if (this.meshWorkers.length === 0) {
      this.rebuildSync(cx, cz);
      return;
    }
    const k = this.key(cx, cz);
    if (this.meshPending.has(k)) return; // 已在排队；若期间又被编辑(dirty=true)，下帧 update() 会再派(自愈)
    if ((this.meshFails.get(k) ?? 0) >= 3) return; // 连续 3 次网格化抛异常 → 放弃(已告警)，不再每帧死循环重试
    const nb = this.collectNeighbors(cx, cz);
    if (!nb) return; // 邻区还没生成好 → 这次不网格化(留着下次 update 重试)，绝不同步 meshChunk 卡主线程
    this.meshPending.add(k);
    this.meshPendingSince.set(k, perfNow());
    const transfer = [...nb.blocks.map((b) => b.buffer), ...nb.fluid.map((f) => f.buffer)];
    this.meshWorkers[this.meshRr].postMessage(
      { cx, cz, blocks: nb.blocks, fluid: nb.fluid },
      transfer,
    );
    this.meshRr = (this.meshRr + 1) % this.meshWorkers.length;
    const built = this.world.peek(cx, cz);
    if (built) built.dirty = false; // 标记已派(清 dirty 防 update 反复派)；worker 回来才真正上屏
  }

  /** 看门狗：网格 worker 偶发丢消息/卡死 → meshPending 永不回 → 区块永久不上屏成洞。
   *  超时还没回的清掉 meshPending(下面 update 的 todo 会因 !meshes.has 再派，自愈)。每帧 update 开头调。 */
  private retryStuckMeshes(timeoutMs = 8000): void {
    const t = perfNow();
    for (const [k, since] of this.meshPendingSince) {
      if (t - since > timeoutMs) {
        this.meshPending.delete(k);
        this.meshPendingSince.delete(k);
        console.warn(
          `[meshgen] 区块 ${k} 网格化 ${Math.round((t - since) / 1000)}s 未回(worker 丢消息?) → 重试`,
        );
      }
    }
  }

  /** 确保中心 radius 内区块已网格化；远处卸载。每次最多(重)建 budget 个，分摊到多帧。
   *  dirX,dirZ=玩家单位水平视向(默认 0,0=不分朝向)：传了就【前方优先】建图——把有限预算先砸向玩家
   *  看得见/正走向的区块，别浪费在身后(cullToView 反正隐藏)的，根治"往前走前面区块加载不出来"。 */
  update(centerCx: number, centerCz: number, radius: number, budget = 2, dirX = 0, dirZ = 0): void {
    this.retryStuckMeshes(); // 看门狗：网格 worker 丢消息卡住的区块→清 pending 让下面重派(自愈，治"加载不出来的洞")
    this.world.retryStuckGen(); // 同理治生成卡住的洞
    for (const k of [...this.meshes.keys()]) {
      const [cx, cz] = k.split(',').map(Number);
      if (Math.abs(cx - centerCx) > radius + 1 || Math.abs(cz - centerCz) > radius + 1)
        this.unload(k);
    }
    // 多请求生成「radius+1」一圈邻区：让最外圈要网格化的区块也能凑齐 8 邻区、走异步 worker 网格化，
    // 不必退回同步 meshChunk(~81ms/块，卡主线程→加载抖)。生成在 worker，多生成一圈不卡主线程。
    for (let dz = -radius - 1; dz <= radius + 1; dz++) {
      for (let dx = -radius - 1; dx <= radius + 1; dx++)
        this.world.request(centerCx + dx, centerCz + dz);
    }
    const todo: { cx: number; cz: number; d: number; ahead: boolean }[] = [];
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (chunkFogged(dx, dz, this.fogCullR2)) continue; // 完全在雾里的角块：不网格化(看不见)
        const cx = centerCx + dx;
        const cz = centerCz + dz;
        const c = this.world.peek(cx, cz);
        if (!c) continue; // 还没生成好 → 跳过，下次 update 再看
        if (!this.meshes.has(this.key(cx, cz)) || c.dirty)
          todo.push({ cx, cz, d: dx * dx + dz * dz, ahead: chunkAhead(dx, dz, dirX, dirZ) });
      }
    }
    // 前方优先(ahead 先建)，同档内近的先建。dir=(0,0) 时 ahead 恒 true → 退回纯距离排序。
    todo.sort((a, b) => (a.ahead === b.ahead ? a.d - b.d : a.ahead ? -1 : 1));
    for (let i = 0; i < Math.min(budget, todo.length); i++) this.rebuild(todo[i].cx, todo[i].cz);
    // 已加载但因移动落进雾区的区块：隐藏(不绘制)而非卸载——避免来回移动时反复重建网格、无闪烁
    for (const [k, m] of this.meshes) {
      const [cx, cz] = k.split(',').map(Number);
      const vis = !chunkFogged(cx - centerCx, cz - centerCz, this.fogCullR2);
      for (const mesh of [m.opaque, m.ice, m.cutout, m.water, m.torch])
        if (mesh) mesh.visible = vis;
    }
  }

  /** 每帧：把视野外(身后/两侧)的区块隐藏，省掉它们的绘制。在 update()(已设雾可见性)之后调，
   *  只往「不可见」方向收紧——绝不把雾里的区块重新点亮。px,pz=玩家世界 XZ；dirX,dirZ=单位水平视向。 */
  cullToView(px: number, pz: number, dirX: number, dirZ: number, pitch = 0): void {
    // 俯视/仰视时屏幕会同时看到玩家四周的地面；只按水平 yaw 剔除会在海面上切出一块
    // 扇形空洞（固定俯视截图中的深蓝弧形边）。update() 已先恢复雾内可见性，此处直接跳过即可。
    if (Math.abs(pitch) > 0.42) return;
    for (const [k, m] of this.meshes) {
      const [cx, cz] = k.split(',').map(Number);
      if (chunkInView(cx * CHUNK_W + CHUNK_W / 2, cz * CHUNK_W + CHUNK_W / 2, px, pz, dirX, dirZ))
        continue;
      for (const mesh of [m.opaque, m.ice, m.cutout, m.water, m.torch])
        if (mesh) mesh.visible = false;
    }
  }

  /** 挖/放/流体/树叶腐烂后：重建变脏的已加载区块。改走 worker 异步——原来这里同步跑 meshChunk
   *  (整列 16×192×16 重建，实测 ~100~200ms/区块，挖边界格连带 ×4、流体每 5 刻批量重建)会把主线程
   *  冻成 PPT(交互 INP 飙到数百 ms)。异步代价仅是改动延迟 1~2 帧上屏(挖掉的方块晚一两帧消失)，
   *  完全值得。若某区块的旧网格还在 worker 在途，本次跳过、保持 dirty，下帧 update() 会再派最新数据
   *  (自愈，最多晚 1~2 帧)。(无 Worker 的测试/node 环境，rebuild 自动回退同步 rebuildSync，与原先一致。) */
  remeshDirty(): void {
    for (const k of [...this.meshes.keys()]) {
      const [cx, cz] = k.split(',').map(Number);
      if (this.world.peek(cx, cz)?.dirty) {
        this.editKeys.add(k); // 编辑触发的重建 → worker 回来走优先队列(立刻上屏，不被批量加载饿着)
        this.rebuild(cx, cz);
      }
    }
  }
}
