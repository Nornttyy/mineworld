import * as THREE from 'three';
import { ChunkWorld } from '../core/world/chunkWorld';
import { CHUNK_W } from '../core/world/chunk';
import { meshChunk, type MeshData } from '../core/mesh/mesher';
import MeshGenWorker from '../core/mesh/meshGen.worker?worker';
import { splitChunkMesh, type ChunkSections } from './meshSplit';
import { loadWaterFrames } from './atlas';
import { chunkInView } from './chunkCull';
import { DAY_LENGTH } from '../core/world/dayNight';

const WATER_FRAMES = 24; // 水动画帧数（与 gen_textures.py 的 water_frames(24) 一致）
const SHADOW_MAP_SIZE = 1024; // 阴影贴图分辨率
const SHADOW_HALF = 48; // 阴影正交相机半宽（格）——只覆盖玩家附近

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
const MC_BRIGHT_GLSL = 'float mcBright(float lv){ float f = clamp(lv,0.0,15.0)/15.0; return f/(4.0-3.0*f); }';
const MC_LIGHT_GLSL =
  '{ float skyLv = aLight.x*15.0; float blkLv = aLight.y*15.0;' +
  ' float bs = mcBright(max(skyLv - uSkyDarken, 0.0)); float bb = mcBright(blkLv);' +
  ' vLF = max(bs, bb) * 0.96 + 0.04;' +
  ' float sf = (bs + bb) > 0.0001 ? bs / (bs + bb) : 1.0;' +
  ' vTint = mix(vec3(1.0, 0.91, 0.78), uSkyTint, sf); }';

// 一个区块的全部网格段（竖直分段后，四套材质各若干段拍平成一个数组）。
// 每段是独立 THREE.Mesh、包围球小 → three.js 视锥剔除能逐段剔掉看不见的地下/上方段。
interface ChunkMeshes {
  meshes: THREE.Mesh[];
}

/** 维护玩家周围已加载的区块网格（不透明 + 半透明水）：按预算加载、卸载远处、重建脏区块。 */
export class ChunkMeshManager {
  private readonly meshes = new Map<string, ChunkMeshes>();
  private readonly opaqueMat: THREE.MeshBasicMaterial;
  private readonly cutoutMat: THREE.MeshBasicMaterial;
  private readonly waterMat: THREE.MeshBasicMaterial;
  private readonly torchMat: THREE.MeshBasicMaterial;
  private readonly waterFrames: THREE.Texture[];
  private readonly waterTex: THREE.Texture;
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
  private readonly uSkyRefl = { value: new THREE.Color(0.55, 0.72, 0.95) }; // 地平线色(掠角反射)
  private readonly uSkyTop = { value: new THREE.Color(0.35, 0.55, 0.85) }; // 天顶色(俯角反射)
  private readonly uSunDir = { value: new THREE.Vector3(0.4, 0.85, 0.3) };
  // 真实投影阴影：太阳 DirectionalLight 自动渲出 shadow map，方块 shader 手动采样它(自带 uniform 名，不依赖 three.js 给 Basic 材质填灯光 uniform)。
  private readonly sun = new THREE.DirectionalLight(0xffffff, 0); // 强度 0：只用它的 shadow map，不给材质打光(方块走自有天光 shader)
  private readonly uShadowMap: { value: THREE.Texture | null } = { value: null };
  private readonly uShadowMatrix = { value: new THREE.Matrix4() };
  private readonly uShadowTexel = { value: new THREE.Vector2(1 / SHADOW_MAP_SIZE, 1 / SHADOW_MAP_SIZE) };
  private readonly uShadowOn = { value: 0 }; // shadow map 就绪前为 0
  private readonly uSunUp = { value: 0 }; // 白昼系数(太阳高度)：夜里/地平线 0 → 不投影，白天 1
  private leafDepthMat: THREE.MeshDepthMaterial | null = null; // 树叶投影用：带 alphaTest 的深度材质 → 镂空叶影
  // 网格化 Worker 池：把 ~81ms/区块的 meshChunk(光照BFS+greedy)挪后台，主线程只剩 buildGeo 上传。
  private readonly meshWorkers: Worker[] = [];
  private meshRr = 0; // round-robin 派发
  private readonly meshPending = new Set<string>(); // 已派 worker 网格化、还没回来的区块
  private readonly meshQueue: { cx: number; cz: number; mesh: ChunkSections }[] = []; // worker 回来的网格排队，每帧 flushMesh 限量上屏(防同帧多次 buildGeo/GPU 上传卡)
  private fogCullR2 = (FOG_FAR_BLOCKS / CHUNK_W) ** 2; // 雾剔除距离²(区块²)；随渲染距离由 setFogFar 改

  constructor(
    private readonly scene: THREE.Scene,
    private readonly world: ChunkWorld,
    atlas: THREE.Texture,
  ) {
    this.opaqueMat = new THREE.MeshBasicMaterial({ map: atlas, vertexColors: true });
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
    this.waterMat = new THREE.MeshBasicMaterial({
      map: this.waterTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
    });
    // 不透明/镂空吃天光shader；水另走"天光 + 光影(波动/菲涅尔反射/高光)"shader
    this.installLight(this.opaqueMat);
    this.installLight(this.cutoutMat, true); // 树叶(cutout)随风轻摆
    this.installWaterShader(this.waterMat);
    // 火把：自发光暖色十字，不参与天光(始终全亮)，双面可见
    this.torchMat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });

    // 太阳光(投影阴影)：castShadow 让 three.js 每帧把 castShadow 物体渲进 shadow map(深度)；
    // 材质用 RGBA 打包深度，方块 shader 自己采样。正交相机只覆盖玩家附近 ±SHADOW_HALF。
    this.sun.castShadow = false; // 默认关(集显 shadow PCF 每片元每帧太卡)；由 setShaders(「光影」开关)控制开
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
        w.onmessage = (e: MessageEvent<{ cx: number; cz: number; mesh: ChunkSections }>): void => {
          const { cx, cz, mesh } = e.data;
          const k = this.key(cx, cz);
          if (!this.meshPending.has(k)) return; // 已被同步 rebuild(挖/放/流水)覆盖 → 丢弃这个 stale worker 结果
          this.meshPending.delete(k);
          if (this.world.peek(cx, cz)) this.meshQueue.push({ cx, cz, mesh }); // 入队，每帧 flushMesh 限量上屏(防卡)
        };
        this.meshWorkers.push(w);
      }
    }
  }

  // 给方块材质注入"天光×昼夜 + 方块光"的合成。顶点算亮度系数 vLF + 天光着色 vTint，片元相乘。
  private installLight(mat: THREE.MeshBasicMaterial, sway = false): void {
    mat.onBeforeCompile = (shader): void => {
      shader.uniforms.uSkyTint = this.uSkyTint;
      shader.uniforms.uSkyDarken = this.uSkyDarken;
      // 投影阴影 uniform（自己绑，不靠 three.js 给 Basic 材质填灯光 uniform）
      shader.uniforms.uShadowMap = this.uShadowMap;
      shader.uniforms.uShadowMatrix = this.uShadowMatrix;
      shader.uniforms.uShadowTexel = this.uShadowTexel;
      shader.uniforms.uShadowOn = this.uShadowOn;
      shader.uniforms.uSunUp = this.uSunUp;
      if (sway) {
        shader.uniforms.uTime = this.uTime;
        shader.uniforms.uShaders = this.uShaders; // 仅「光影」开时摆（uShaders 门控）
      }
      // 树叶随风摆：按【世界坐标(原始 position)+时间】位移 → 相邻叶共享顶点=同步摆动、无裂缝。×uShaders=只在光影开时摆。
      const swayCode = sway
        ? '{ float sw = uShaders * 0.05; vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz; float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3;' +
          ' transformed.x += sin(ph + uTime*1.4) * sw;' +
          ' transformed.z += sin(ph*1.3 + uTime*1.1) * sw;' +
          ' transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }\n'
        : '';
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\nattribute vec2 aLight;\nuniform vec3 uSkyTint;\nuniform float uSkyDarken;\nuniform mat4 uShadowMatrix;\n' +
            (sway ? 'uniform float uTime;\nuniform float uShaders;\n' : '') +
            'varying float vLF;\nvarying vec3 vTint;\nvarying vec4 vShadowCoord;\nvarying float vSky;\n' + MC_BRIGHT_GLSL,
        )
        .replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\n' + swayCode + MC_LIGHT_GLSL + '\n' +
            'vSky = aLight.x;\n' +
            'vShadowCoord = uShadowMatrix * (modelMatrix * vec4(transformed, 1.0));',
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nvarying float vLF;\nvarying vec3 vTint;\nvarying vec4 vShadowCoord;\nvarying float vSky;\n' +
            'uniform sampler2D uShadowMap;\nuniform vec2 uShadowTexel;\nuniform float uShadowOn;\nuniform float uSunUp;\n' +
            'float mwUnpackDepth(vec4 v){ const vec4 f = (255.0/256.0)/vec4(16777216.0,65536.0,256.0,256.0); return dot(v,f); }\n' +
            'float mwShadow(vec4 sc){\n' +
            '  vec3 c = sc.xyz / sc.w;\n' +
            '  if (c.z >= 1.0 || c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0) return 1.0;\n' +
            '  float bias = 0.0018;\n' +
            '  float s = 0.0;\n' +
            '  for (int x=-1;x<=1;x++){ for (int y=-1;y<=1;y++){\n' +
            '    float d = mwUnpackDepth(texture2D(uShadowMap, c.xy + vec2(float(x),float(y))*uShadowTexel));\n' +
            '    s += (c.z - bias <= d) ? 1.0 : 0.0;\n' +
            '  }}\n' +
            '  return s / 9.0;\n' +
            '}',
        )
        .replace(
          '#include <color_fragment>',
          '#include <color_fragment>\n' +
            'float vis = 1.0;\n' +
            'if (uShadowOn > 0.5) {\n' +
            '  float sh = mwShadow(vShadowCoord);\n' +
            '  float gate = vSky * uSunUp;\n' + // 只在受天光的面+白天投影：洞内/夜里不被二次压暗
            '  vis = mix(1.0, mix(0.5, 1.0, sh), gate);\n' + // 阴影处降到 50%
            '}\n' +
            'diffuseColor.rgb *= vLF * vTint * vis;',
        );
    };
  }

  /** 每帧：太阳 DirectionalLight 摆到天球方位(随昼夜)、阴影相机跟随玩家，绑 shadow map 给方块 shader 采样。 */
  updateSun(worldTime: number, px: number, py: number, pz: number): void {
    const th = (worldTime / DAY_LENGTH) * Math.PI * 2; // 同 SkyObjects：0=日出
    let nx = Math.cos(th);
    let ny = Math.sin(th);
    let nz = 0.28;
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

  // 水面专用：天光烤进顶点 + "光影"(uShaders 开时)。
  // 水面【几何平静不动】(不抬降、不穿帮)；"会动"的是【波纹本身】——片元里的程序波纹(高度+坡度)，
  //   相位 ±t 多向行波 → 波纹明暗带 + 鳞光反射在水面上【看得见地流动】(波纹飘动，不是整片水起伏)。
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
      // 顶点：按 MC 1:1 烤天光(skyDarken 夜减) + 传世界坐标；水面【不位移】(平静)。
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\nattribute vec2 aLight;\nuniform vec3 uSkyTint;\nuniform float uSkyDarken;\nvarying float vLF;\nvarying vec3 vTint;\nvarying vec3 vWPos;\n' + MC_BRIGHT_GLSL,
        )
        .replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\n' + MC_LIGHT_GLSL + '\n' +
            'vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;',
        );
      // 片元：程序波纹法线 → 扰动反射/高光。相位 ±t 多向缓流=真实流动(各层方向/速度不同,无传送带感)。
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nuniform float uSkyMul;\nuniform float uShaders;\nuniform float uTime;\nuniform vec3 uSkyRefl;\nuniform vec3 uSkyTop;\nuniform vec3 uSunDir;\nvarying float vLF;\nvarying vec3 vTint;\nvarying vec3 vWPos;\n' +
            // 程序波纹：返回 vec3(高度, 坡度x, 坡度z)。4 层行波(波长2~5格)、相位 ±t 多向 → 波纹在水面流动。
            'vec3 rip(vec2 p, float t){\n' +
            '  vec3 r = vec3(0.0); float a;\n' +
            '  a = dot(p, vec2(1.00, 0.30)) * 1.3 + t * 0.9;  r += vec3(sin(a), 1.3 * 1.00 * cos(a), 1.3 * 0.30 * cos(a));\n' +
            '  a = dot(p, vec2(-0.40, 1.00)) * 1.8 - t * 1.1; r += vec3(sin(a), 1.8 * -0.40 * cos(a), 1.8 * 1.00 * cos(a));\n' +
            '  a = dot(p, vec2(0.70, -0.60)) * 2.5 + t * 0.8; r += vec3(sin(a), 2.5 * 0.70 * cos(a), 2.5 * -0.60 * cos(a));\n' +
            '  a = dot(p, vec2(-0.70, -0.55)) * 3.5 - t * 1.0; r += vec3(sin(a), 3.5 * -0.70 * cos(a), 3.5 * -0.55 * cos(a));\n' +
            '  return r;\n' +
            '}',
        )
        .replace(
          '#include <color_fragment>',
          '#include <color_fragment>\ndiffuseColor.rgb *= vLF * vTint;\n' +
            'if (uShaders > 0.5) {\n' +
            // 真实水(MC 光影风)：丢掉像素贴图，改 清澈水色 + 反射天空渐变 + 菲涅尔 + 太阳粼光。
            '  vec3 r = rip(vWPos.xz, uTime);\n' + // r.x=波纹高度(明暗带), r.yz=坡度(法线)
            '  vec3 N = normalize(vec3(-r.y * 0.16, 1.0, -r.z * 0.16));\n' + // 波纹法线：加大扰动→反射被波纹打碎、不再镜面塑料感

            '  vec3 V = normalize(cameraPosition - vWPos);\n' +
            '  vec3 Rr = reflect(-V, N);\n' + // 反射光线 → 取天空渐变(俯角见天顶、掠角见地平线)
            '  vec3 skyR = mix(uSkyRefl, uSkyTop, clamp(Rr.y, 0.0, 1.0)) * 0.8;\n' + // 略压暗,不刺白(反射别太满=别像镜子)
            '  float fres = clamp(0.02 + 0.98 * pow(1.0 - max(dot(V, N), 0.0), 5.0), 0.0, 0.66);\n' + // Schlick,封顶降低→多透水色少反光
            '  vec3 base = vec3(0.05, 0.26, 0.40) * vLF * vTint;\n' + // 清澈水色(深蓝绿,被天光照)
            '  vec3 col = mix(base, skyR, fres);\n' + // 掠角→大幅反天空、但仍透出水蓝
            '  vec3 Rs = reflect(-normalize(uSunDir), N);\n' +
            '  col += pow(max(dot(Rs, V), 0.0), 90.0) * uSkyMul * vec3(1.0, 0.96, 0.85) * 0.9;\n' + // 太阳粼光：软化(pow200→90,亮度↓)→碎银粼光非塑料硬高光
            '  col += r.x * 0.03 * vLF;\n' + // 【可见波纹明暗带】随 ±t 流动 → 一眼看见波纹在水面飘过
            '  diffuseColor.rgb = col;\n' +
            '  diffuseColor.a = mix(0.62, 0.96, fres);\n' + // 俯看清澈见底、掠角反光不透(菲涅尔透明度)
            '}',
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

  /** 光影总开关：开 → 水面波动 + 菲涅尔反射 + 太阳高光；关 → 平静水面(省性能)。 */
  setShaders(on: boolean): void {
    this.uShaders.value = on ? 1 : 0;
    // 阴影开销大(集显每帧 PCF 卡) → 归「光影」开关：关时不渲 shadow pass、shader 跳 PCF
    this.sun.castShadow = on;
    if (!on) this.uShadowOn.value = 0;
  }

  /** 雾剔除距离(随渲染距离)：超出此距离的区块完全在雾里 → 不网格化/不绘制。far 单位=格。 */
  setFogFar(farBlocks: number): void {
    this.fogCullR2 = (farBlocks / CHUNK_W) ** 2;
  }

  /** 水面反射的天空色：地平线色(掠角) + 天顶色(俯角) → 反射出天空渐变(更真实)。 */
  setSkyReflection(horizon: [number, number, number], top?: [number, number, number]): void {
    this.uSkyRefl.value.setRGB(horizon[0], horizon[1], horizon[2]);
    if (top) this.uSkyTop.value.setRGB(top[0], top[1], top[2]);
  }

  /** 太阳方向(世界系，驱动水面镜面高光)。 */
  setSunDir(x: number, y: number, z: number): void {
    this.uSunDir.value.set(x, y, z);
  }

  /** 切换方块图集（卡通/经典材质切换）：换不透明/镂空材质的贴图；水有独立纹理不受影响。 */
  setAtlas(tex: THREE.Texture): void {
    this.opaqueMat.map = tex;
    this.cutoutMat.map = tex;
    this.opaqueMat.needsUpdate = true;
    this.cutoutMat.needsUpdate = true;
  }

  /** 水面动画（MC 风格帧动画）：按固定步长切换整张水纹理（所有水格同步），波纹原地流动+变化，
   *  不做 UV 平移（那样像水单向滑走）。24 帧首尾无缝循环。 */
  animateWater(dt: number): void {
    this.uTime.value += dt; // 驱动光影水面波动
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

  private buildGeo(data: MeshData): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
    if (data.normals) g.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3)); // MeshBasicMaterial 不打灯，区块网格不带法线
    g.setAttribute('uv', new THREE.BufferAttribute(data.uvs, 2));
    g.setAttribute('color', new THREE.BufferAttribute(data.colors, 3));
    if (data.light && data.light.length) g.setAttribute('aLight', new THREE.BufferAttribute(data.light, 2)); // 天光/方块光(火把网格不带)
    if (data.top && data.top.length) g.setAttribute('aTop', new THREE.BufferAttribute(data.top, 1)); // 仅水：水面顶点标记(光影涌浪起伏)
    g.setIndex(new THREE.BufferAttribute(data.indices, 1));
    return g;
  }

  private unload(k: string): void {
    const m = this.meshes.get(k);
    if (!m) return;
    for (const mesh of m.meshes) {
      this.scene.remove(mesh);
      mesh.geometry.dispose();
    }
    this.meshes.delete(k);
  }

  // 把一套网格数据建成 Mesh 并入场景（空数据返回 null）
  private addMesh(data: MeshData, mat: THREE.Material, cx: number, cz: number): THREE.Mesh | null {
    if (data.indices.length === 0) return null;
    const mesh = new THREE.Mesh(this.buildGeo(data), mat);
    mesh.position.set(cx * CHUNK_W, 0, cz * CHUNK_W);
    this.scene.add(mesh);
    return mesh;
  }

  // 把网格数据上屏(buildGeo + 入场景 + 阴影标记)。worker 回调与同步回退共用。
  /** 每帧把 worker 网格化结果【限量】上屏(buildGeo + GPU 上传)：防同帧多个 worker 一起上传导致掉帧。 */
  flushMesh(budget: number): void {
    for (let i = 0; i < budget && this.meshQueue.length > 0; i++) {
      const item = this.meshQueue.shift();
      if (item && this.world.peek(item.cx, item.cz)) this.applyMesh(item.cx, item.cz, item.mesh);
    }
  }

  /** 还有 worker 网格化在途，或结果待上屏（供主菜单预加载等待铺满后再显示）。 */
  meshBusy(): boolean {
    return this.meshQueue.length > 0 || this.meshPending.size > 0;
  }

  /** 待上屏的网格数（供游戏层按【时间预算】逐个 flush，稳帧）。 */
  meshQueueLen(): number {
    return this.meshQueue.length;
  }

  private applyMesh(cx: number, cz: number, sm: ChunkSections): void {
    this.unload(this.key(cx, cz));
    const meshes: THREE.Mesh[] = [];
    // 不透明段：投影 + 接收阴影
    for (const d of sm.opaque) {
      const m = this.addMesh(d, this.opaqueMat, cx, cz);
      if (m) {
        m.castShadow = true;
        m.receiveShadow = true;
        meshes.push(m);
      }
    }
    // 树叶(镂空)段：用镂空深度材质投影(叶影有孔，不是实心黑块)
    for (const d of sm.cutout) {
      const m = this.addMesh(d, this.cutoutMat, cx, cz);
      if (m) {
        m.castShadow = true;
        m.receiveShadow = true;
        if (this.leafDepthMat) m.customDepthMaterial = this.leafDepthMat;
        meshes.push(m);
      }
    }
    // 水/火把段：不投影
    for (const d of sm.water) {
      const m = this.addMesh(d, this.waterMat, cx, cz);
      if (m) meshes.push(m);
    }
    for (const d of sm.torch) {
      const m = this.addMesh(d, this.torchMat, cx, cz);
      if (m) meshes.push(m);
    }
    this.meshes.set(this.key(cx, cz), { meshes });
    // 注意：dirty 由派发方(rebuild 派 worker 时 / rebuildSync 同步重建后)清，applyMesh 不清——
    // 否则"派发后又被编辑(dirty=true)"的区块，等旧 worker 结果上屏时会被误清回 false → 丢改动。
  }

  // 同步网格化(主线程跑 meshChunk)：挖/放即时重建、无 Worker 回退、邻区没齐时兜底。
  private rebuildSync(cx: number, cz: number): void {
    const k = this.key(cx, cz);
    // 作废这个区块在途/待上屏的 worker 结果——下面同步上屏的才是最新；否则旧 worker 结果回来会把挖/放盖回去
    this.meshPending.delete(k);
    const qi = this.meshQueue.findIndex((m) => m.cx === cx && m.cz === cz);
    if (qi >= 0) this.meshQueue.splice(qi, 1);
    this.applyMesh(cx, cz, splitChunkMesh(meshChunk(this.world, cx, cz))); // 同步回退路径在主线程切段(罕见：无worker/邻区没齐，单块不会OOM)
    const c = this.world.peek(cx, cz);
    if (c) c.dirty = false; // 同步重建用的是当前数据，安全清脏（applyMesh 不再清）
  }

  // 收集本+8邻区的 blocks/fluid 副本(worker 网格化时采光晕/face/AO)。任一邻区还没生成→null(这次不派)。
  private collectNeighbors(cx: number, cz: number): { blocks: Uint16Array[]; fluid: Uint8Array[] } | null {
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
    const nb = this.collectNeighbors(cx, cz);
    if (!nb) return; // 邻区还没生成好 → 这次不网格化(留着下次 update 重试)，绝不同步 meshChunk 卡主线程
    this.meshPending.add(k);
    const transfer = [...nb.blocks.map((b) => b.buffer), ...nb.fluid.map((f) => f.buffer)];
    this.meshWorkers[this.meshRr].postMessage({ cx, cz, blocks: nb.blocks, fluid: nb.fluid }, transfer);
    this.meshRr = (this.meshRr + 1) % this.meshWorkers.length;
    const built = this.world.peek(cx, cz);
    if (built) built.dirty = false; // 标记已派(清 dirty 防 update 反复派)；worker 回来才真正上屏
  }

  /** 确保中心 radius 内区块已网格化；远处卸载。每次最多(重)建 budget 个，分摊到多帧。 */
  update(centerCx: number, centerCz: number, radius: number, budget = 2): void {
    for (const k of [...this.meshes.keys()]) {
      const [cx, cz] = k.split(',').map(Number);
      if (Math.abs(cx - centerCx) > radius + 1 || Math.abs(cz - centerCz) > radius + 1) this.unload(k);
    }
    // 多请求生成「radius+1」一圈邻区：让最外圈要网格化的区块也能凑齐 8 邻区、走异步 worker 网格化，
    // 不必退回同步 meshChunk(~81ms/块，卡主线程→加载抖)。生成在 worker，多生成一圈不卡主线程。
    for (let dz = -radius - 1; dz <= radius + 1; dz++) {
      for (let dx = -radius - 1; dx <= radius + 1; dx++) this.world.request(centerCx + dx, centerCz + dz);
    }
    const todo: { cx: number; cz: number; d: number }[] = [];
    for (let dz = -radius; dz <= radius; dz++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (chunkFogged(dx, dz, this.fogCullR2)) continue; // 完全在雾里的角块：不网格化(看不见)
        const cx = centerCx + dx;
        const cz = centerCz + dz;
        const c = this.world.peek(cx, cz);
        if (!c) continue; // 还没生成好 → 跳过，下次 update 再看
        if (!this.meshes.has(this.key(cx, cz)) || c.dirty) todo.push({ cx, cz, d: dx * dx + dz * dz });
      }
    }
    todo.sort((a, b) => a.d - b.d);
    for (let i = 0; i < Math.min(budget, todo.length); i++) this.rebuild(todo[i].cx, todo[i].cz);
    // 已加载但因移动落进雾区的区块：隐藏(不绘制)而非卸载——避免来回移动时反复重建网格、无闪烁
    for (const [k, m] of this.meshes) {
      const [cx, cz] = k.split(',').map(Number);
      const vis = !chunkFogged(cx - centerCx, cz - centerCz, this.fogCullR2);
      for (const mesh of m.meshes) mesh.visible = vis;
    }
  }

  /** 每帧：把视野外(身后/两侧)的区块隐藏，省掉它们的绘制。在 update()(已设雾可见性)之后调，
   *  只往「不可见」方向收紧——绝不把雾里的区块重新点亮。px,pz=玩家世界 XZ；dirX,dirZ=单位水平视向。 */
  cullToView(px: number, pz: number, dirX: number, dirZ: number): void {
    for (const [k, m] of this.meshes) {
      const [cx, cz] = k.split(',').map(Number);
      if (chunkInView(cx * CHUNK_W + CHUNK_W / 2, cz * CHUNK_W + CHUNK_W / 2, px, pz, dirX, dirZ)) continue;
      for (const mesh of m.meshes) mesh.visible = false;
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
      if (this.world.peek(cx, cz)?.dirty) this.rebuild(cx, cz);
    }
  }
}
