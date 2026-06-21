# 光影分档画质 + 体积光 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把布尔「光影」开关升级为三档画质（关/标准/高），标准默认就含透明蓝水面、柔和云、真实日月、草木摆动、体积光(god rays)；高档再加优化版太阳阴影。

**Architecture:** 设置层加 `lightingQuality` 枚举并迁移旧布尔；渲染层把 `setShaders(bool)` 全链路换成 `setLightingQuality(q)`，由档位派生「便宜效果开关(uShaders)」「阴影开关(castShadow)」「体积光开关+采样数」。体积光是 `Renderer` 新增的一条屏幕空间后处理（场景渲到 RT → 朝太阳放射模糊 → 叠加上屏 → 再画手臂）。

**Tech Stack:** TypeScript + three.js (r0.165) + 自定义 onBeforeCompile shader；vitest 测纯逻辑；Playwright 截图/测帧验证视觉。

## Global Constraints

- **分辨率一律不动**：游戏恒 `setPixelRatio(Math.min(devicePixelRatio,2))`（见 [[render-perf]]）；体积光**不得用低分辨率内部缓冲**，开销只靠采样数 + 太阳可见性门控 + 复用深度图。
- `lightingQuality` 默认 `'standard'`；旧存档 `shaders:true→'high'`、`false/缺失→'standard'`、非法→`'standard'`。
- 便宜效果（水面/云/日月/草木摆动）+ 体积光 → 标准 + 高都开；太阳阴影 → 仅高。
- 关档 = 零后处理开销（直接上屏，不建 RT）。
- 全程在**独立 git worktree** 实现（执行时由 using-git-worktrees 建）；改 `ChunkMeshManager.ts`/`Game.ts`/`Renderer.ts` 与并发会话隔离；收尾 `tsc --noEmit && vite build && vitest run` 验 committed HEAD 自洽。
- 视觉类任务的「验收」= Playwright 截图比对参考 + 实测帧率；shader 数值（采样数、SHADOW_HALF、水色）以截图/帧率为准微调，不是占位。

---

## Task 1: settings 加 `lightingQuality` 枚举 + 迁移（TDD）

**Files:**
- Modify: `src/core/settings.ts`
- Test: `src/core/settings.test.ts`

**Interfaces:**
- Produces: `Settings.lightingQuality: 'off' | 'standard' | 'high'`；`type LightingQuality`；`sanitizeSettings` 迁移逻辑；`DEFAULT_SETTINGS.lightingQuality === 'standard'`。`Settings.shaders` 字段**移除**。

- [ ] **Step 1: 写失败测试** —— 追加到 `src/core/settings.test.ts`

```typescript
import { describe, it, expect } from 'vitest';
import { sanitizeSettings, DEFAULT_SETTINGS } from './settings';

describe('lightingQuality 迁移', () => {
  it('默认是 standard', () => {
    expect(DEFAULT_SETTINGS.lightingQuality).toBe('standard');
  });
  it('旧存档 shaders:true → high', () => {
    expect(sanitizeSettings({ shaders: true }).lightingQuality).toBe('high');
  });
  it('旧存档 shaders:false → standard', () => {
    expect(sanitizeSettings({ shaders: false }).lightingQuality).toBe('standard');
  });
  it('缺失 → standard', () => {
    expect(sanitizeSettings({}).lightingQuality).toBe('standard');
  });
  it('已是新值则保留', () => {
    expect(sanitizeSettings({ lightingQuality: 'off' }).lightingQuality).toBe('off');
    expect(sanitizeSettings({ lightingQuality: 'high' }).lightingQuality).toBe('high');
  });
  it('非法值 → standard', () => {
    expect(sanitizeSettings({ lightingQuality: 'ultra' }).lightingQuality).toBe('standard');
  });
  it('新值优先于旧 shaders（同时存在时以 lightingQuality 为准）', () => {
    expect(sanitizeSettings({ shaders: true, lightingQuality: 'off' }).lightingQuality).toBe('off');
  });
});
```

- [ ] **Step 2: 跑测试确认失败**

Run: `npx vitest run src/core/settings.test.ts`
Expected: FAIL（`lightingQuality` 不存在 / 类型错误）

- [ ] **Step 3: 改 `src/core/settings.ts`**

把 `shaders: boolean` 改成 `lightingQuality`，并写迁移：

```typescript
export type TexturePack = 'cartoon' | 'classic';
export type LightingQuality = 'off' | 'standard' | 'high';

export interface Settings {
  volume: number;
  lightingQuality: LightingQuality; // 光影画质：关/标准/高
  texturePack: TexturePack;
  renderDistance: number;
}

export const DEFAULT_SETTINGS: Settings = {
  volume: 70,
  lightingQuality: 'standard',
  texturePack: 'cartoon',
  renderDistance: 6,
};

const KEY = 'mineworld.settings';
const LQ: LightingQuality[] = ['off', 'standard', 'high'];

export function sanitizeSettings(raw: unknown): Settings {
  const r = (raw ?? {}) as Partial<Record<string, unknown>>;
  const volume =
    typeof r.volume === 'number' && isFinite(r.volume) ? Math.max(0, Math.min(100, Math.round(r.volume))) : DEFAULT_SETTINGS.volume;
  // 光影：新枚举优先；否则从旧布尔 shaders 迁移（true→high, false→standard）；都没有→默认
  let lightingQuality: LightingQuality;
  if (typeof r.lightingQuality === 'string' && (LQ as string[]).includes(r.lightingQuality)) {
    lightingQuality = r.lightingQuality as LightingQuality;
  } else if (typeof r.shaders === 'boolean') {
    lightingQuality = r.shaders ? 'high' : 'standard';
  } else {
    lightingQuality = DEFAULT_SETTINGS.lightingQuality;
  }
  const texturePack: TexturePack = r.texturePack === 'classic' ? 'classic' : 'cartoon';
  const renderDistance =
    typeof r.renderDistance === 'number' && isFinite(r.renderDistance)
      ? Math.max(3, Math.min(12, Math.round(r.renderDistance)))
      : DEFAULT_SETTINGS.renderDistance;
  return { volume, lightingQuality, texturePack, renderDistance };
}
```

（`loadSettings`/`saveSettings` 不变。）

- [ ] **Step 4: 跑测试确认通过**

Run: `npx vitest run src/core/settings.test.ts`
Expected: PASS（含上述 7 个新用例 + 原有用例）

- [ ] **Step 5: 提交**

```bash
git add src/core/settings.ts src/core/settings.test.ts
git commit -m "feat(settings): 光影 shaders 布尔 → lightingQuality 三档(含迁移)"
```

---

## Task 2: 全链路接线 `setShaders(bool)` → `setLightingQuality(q)`

把档位派生成现有的两个内部开关（先不改观感，只换通路）。

**Files:**
- Modify: `src/render/ChunkMeshManager.ts`（`setShaders` → `setLightingQuality`）
- Modify: `src/render/SkyObjects.ts`（`setShaders` → `setLightingQuality`）
- Modify: `src/game/Game.ts`（`setShaders` → `setLightingQuality` + 初值处 269/280 附近）
- Modify: `src/main.ts`（调用处 102 附近）

**Interfaces:**
- Produces:
  - `ChunkMeshManager.setLightingQuality(q: LightingQuality): void` —— `uShaders.value = q!=='off' ? 1 : 0`；`sun.castShadow = q==='high'`；`if (q!=='high') uShadowOn.value = 0`。
  - `SkyObjects.setLightingQuality(q: LightingQuality): void` —— `const on = q!=='off'`；同原 `setShaders(on)` 逻辑。
  - `Game.setLightingQuality(q: LightingQuality): void` —— 转发 chunks/skyObjects（体积光、Renderer 接线在 Task 7 加）。
- Consumes: Task 1 的 `LightingQuality`。

- [ ] **Step 1: 改 `ChunkMeshManager.setShaders`**

```typescript
import type { LightingQuality } from '../core/settings';
// ...
/** 光影画质：off=全关；standard=便宜效果(水/云/摆/体积光)；high=再加太阳阴影。 */
setLightingQuality(q: LightingQuality): void {
  this.uShaders.value = q !== 'off' ? 1 : 0;
  this.sun.castShadow = q === 'high'; // 阴影只在高档
  if (q !== 'high') this.uShadowOn.value = 0;
}
```

- [ ] **Step 2: 改 `SkyObjects.setShaders`**

```typescript
import type { LightingQuality } from '../core/settings';
// ...
setLightingQuality(q: LightingQuality): void {
  const on = q !== 'off';
  this.shaders = on;
  this.voxelClouds.visible = !on;
  this.softClouds.visible = on;
}
```

- [ ] **Step 3: 改 `Game.ts`**

`setShaders` 改名转发；初值处（约 269、280 行 `loadSettings().shaders`）改用 `lightingQuality`：

```typescript
setLightingQuality(q: LightingQuality): void {
  this.chunks.setLightingQuality(q);
  this.skyObjects.setLightingQuality(q);
}
```
初始化：`this.chunks.setLightingQuality(loadSettings().lightingQuality);` 与 `this.skyObjects.setLightingQuality(loadSettings().lightingQuality);`（import `LightingQuality` 类型）。

- [ ] **Step 4: 改 `main.ts`**（约 102 行）

```typescript
game?.setLightingQuality(s.lightingQuality); // 光影画质即时套用
```

- [ ] **Step 5: 验证构建 + 启动不崩**

Run: `npm run typecheck && npx eslint src/render/ChunkMeshManager.ts src/render/SkyObjects.ts src/game/Game.ts src/main.ts`
Expected: 无错（仅本任务文件）。
（视觉无变化——standard 此时仍等价旧 shaders-on 的水/云/摆，high 再加阴影；体积光与日月在后续 Task。）

- [ ] **Step 6: 提交**

```bash
git add src/render/ChunkMeshManager.ts src/render/SkyObjects.ts src/game/Game.ts src/main.ts
git commit -m "refactor(render): setShaders(bool) → setLightingQuality(档位) 全链路接线"
```

---

## Task 3: 设置 UI 「光影」勾选框 → 三选

**Files:**
- Modify: `src/ui/settingsMenu.ts`

**Interfaces:**
- Consumes: `Settings.lightingQuality`、`Game.setLightingQuality`（经回调）。
- Produces: 菜单里「光影」是 关/标准/高 的 `<select>`，改动写回 settings 并即时套用。

- [ ] **Step 1: 读现状**

Run: `sed -n '40,125p' src/ui/settingsMenu.ts`
确认 `#set-shaders` 勾选框模板（约 49-50）、读取（约 69）、change 监听（约 96-97）、回填（约 118）。

- [ ] **Step 2: 把勾选框换成下拉**

模板里那行（约 49-50）：

```html
<span style="width:108px;">光影</span>
<select id="set-lighting" style="...沿用相邻控件样式...">
  <option value="off">关</option>
  <option value="standard">标准</option>
  <option value="high">高</option>
</select>
```

读取与监听（替换原 `#set-shaders` 那几处）：

```typescript
const lighting = root.querySelector('#set-lighting') as HTMLSelectElement;
lighting.value = this.settings.lightingQuality;
lighting.addEventListener('change', () => {
  this.settings = { ...this.settings, lightingQuality: lighting.value as LightingQuality };
  saveSettings(this.settings);
  this.onChange?.(this.settings); // 沿用现有 onChange/套用回调
});
```
（import `LightingQuality`；回填处 `lighting.value = this.settings.lightingQuality`。删除所有 `#set-shaders` 残留。）

- [ ] **Step 3: 验证**

Run: `npm run typecheck && npx eslint src/ui/settingsMenu.ts`
Expected: 无错。
（Task 9 的整体截图会确认菜单显示三选并能切换持久化。）

- [ ] **Step 4: 提交**

```bash
git add src/ui/settingsMenu.ts
git commit -m "feat(ui): 设置「光影」勾选框 → 关/标准/高 三选"
```

---

## Task 4: 水面调成透明蓝 + 明显粼光（4.1）

**Files:**
- Modify: `src/render/ChunkMeshManager.ts`（`installWaterShader` 片元 `#include <color_fragment>` 替换块内）

**Interfaces:** 仅改 shader 字面值，不变签名/几何/属性。

- [ ] **Step 1: 起始调色**（替换 `base`/反射/alpha 几行，作为截图调参起点）

```glsl
// 透明蓝水（替换原 vec3(0.05,0.26,0.40)）：更蓝更清透
vec3 base = vec3(0.07, 0.34, 0.62) * vLF * vTint;
// 反射略增强（掠角更明显反天空）
vec3 col = mix(base, skyR, fres);
// 太阳粼光更亮一点、保持碎银感
col += pow(max(dot(Rs, V), 0.0), 90.0) * uSkyMul * vec3(1.0, 0.97, 0.88) * 1.1;
col += r.x * 0.035 * vLF;
diffuseColor.rgb = col;
diffuseColor.a = mix(0.58, 0.95, fres); // 俯看更透(见底)、掠角更不透
```

- [ ] **Step 2: 起 dev server + 截图水面**

Run（worktree 内、避开占用端口）: `npm run dev`（记下端口）→ Playwright 导航 → 走到水边俯看 + 掠角各截一张。
Expected: 水偏透明蓝、能隐约见底、掠角反天空、有会动的太阳粼光。

- [ ] **Step 3: 对照参考微调**

对照 `/tmp/mcref/day_comp.png`、`day_bsl.png`、`water1.jpg`。偏绿/偏暗就调 `base`、反光太满就降 `fres` 上限或 `skyR` 系数、高光太硬就升 `pow` 指数。重复 Step 2 直到接近参考。

- [ ] **Step 4: 提交**

```bash
git add src/render/ChunkMeshManager.ts
git commit -m "feat(shaders): 水面调成 MC 风透明蓝 + 明显太阳粼光"
```

---

## Task 5: 草木摆动 —— 草丛按高度加权（4.2）

让草丛根部不动、草尖摆幅大；树叶维持整体摆。

**Files:**
- Modify: `src/core/mesh/mesher.ts`（`emitPlant` 与 cutout `emit` 写一个 `aSway` 顶点属性：草丛=底0顶1，树叶=1）
- Modify: `src/core/mesh/mesher.ts`（`FaceArrays` 加 `SW: number[]`；`toMeshData` 输出 `sway`；`MeshData` 加 `sway?: Float32Array`）
- Modify: `src/render/ChunkMeshManager.ts`（cutout 几何 setAttribute `aSway`；sway shader 乘 `aSway`）
- Test: `src/core/mesh/grassSway.test.ts`（新建）

**Interfaces:**
- Produces: `MeshData.sway?: Float32Array`（每顶点 1 个，0..1 摆动权重）；cutout 几何属性名 `aSway`。
- Consumes: Task 2 的 `uShaders` 门控。

- [ ] **Step 1: 写失败测试**（草丛顶点摆动权重：底≈0、顶≈1；不依赖 WebGL）

```typescript
import { describe, it, expect } from 'vitest';
import { meshChunkData } from './mesher';
const GRASS_PLANT = 16;
function meshOne(id: number) {
  const b: Record<string, number> = { [`5,100,5`]: id };
  return meshChunkData(0, 0, (x, y, z) => b[`${x},${y},${z}`] ?? 0, () => 0);
}
describe('草丛摆动权重 aSway', () => {
  it('草丛 cutout 顶点带 sway：底≈0、顶≈1', () => {
    const m = meshOne(GRASS_PLANT);
    expect(m.cutout.sway).toBeDefined();
    const sway = m.cutout.sway as Float32Array;
    const pos = m.cutout.positions;
    let minS = 1, maxS = 0;
    for (let i = 0; i < sway.length; i++) {
      const y = pos[i * 3 + 1];
      if (Math.abs(y - 100) < 0.01) minS = Math.min(minS, sway[i]); // 草根那层
      else maxS = Math.max(maxS, sway[i]); // 草尖那层
    }
    expect(minS).toBeLessThan(0.05);
    expect(maxS).toBeGreaterThan(0.8);
  });
});
```

- [ ] **Step 2: 跑测试确认失败**

Run: `npx vitest run src/core/mesh/grassSway.test.ts`
Expected: FAIL（`m.cutout.sway` undefined）

- [ ] **Step 3: mesher 写 `aSway`**

`emptyArrays()` 加 `SW: []`；`toMeshData` 加 `sway: a.SW.length ? new Float32Array(a.SW) : undefined`；`MeshData` 接口加 `sway?: Float32Array`。
`emitPlant`（草丛）每顶点按是否顶/底写权重——底两顶点 0、顶两顶点 1（emitPlant 每 quad 顶点顺序为 底左,底右,顶右,顶左）：

```typescript
// emitPlant 内每个 quad push 顶点处，同步 push sway 权重
cut.SW.push(0, 0, 1, 1); // 底左,底右,顶右,顶左
```
cutout 的 cube `emit`（树叶）每面 4 顶点 push `1`（整体摆）：在 `emit` 里当目标是 `cut` 批时 `a.SW.push(1,1,1,1)`（其它批不写）。简单起见：`emit` 末尾 `if (a === cut) a.SW.push(1, 1, 1, 1);`，`emitPlant` 用上面的 0/0/1/1。

- [ ] **Step 4: 跑测试确认通过**

Run: `npx vitest run src/core/mesh/grassSway.test.ts && npx vitest run src/core/mesh/`
Expected: PASS（且不破坏既有 mesher 测试）

- [ ] **Step 5: ChunkMeshManager 用 aSway**

`addMesh`/几何构建处给 cutout 几何加属性（仅当 `data.sway` 存在）：

```typescript
if (data.sway && data.sway.length) g.setAttribute('aSway', new THREE.BufferAttribute(data.sway, 1));
```
`installLight` 的 sway 分支：声明 `attribute float aSway;`，位移乘以 `aSway`（缺省视为 1 不破坏其他批——但 cutout 都会有；保险：在 `#include <common>` 注入 `#ifndef ...`，或在无属性时 three 默认 0 → 改为在 mesher 保证 cutout 全写）。swayCode 改：

```glsl
{ float sw = uShaders * 0.06 * aSway; vec3 wp = (modelMatrix*vec4(position,1.0)).xyz;
  float ph = wp.x*0.6 + wp.z*0.5 + wp.y*0.3;
  transformed.x += sin(ph + uTime*1.4) * sw;
  transformed.z += sin(ph*1.3 + uTime*1.1) * sw;
  transformed.y += sin(ph*0.8 + uTime*1.7) * sw * 0.5; }
```
（注意：cutout 批必须每顶点都写 aSway，否则缺属性顶点 aSway=0 不摆——Step 3 已保证草丛与树叶都写。）

- [ ] **Step 6: 验证构建 + 截图/观察**

Run: `npm run typecheck && npx vitest run src/core/mesh/`
Expected: 通过。dev server 观察：开标准后草丛根不动、尖摆；树叶仍整体摆。

- [ ] **Step 7: 提交**

```bash
git add src/core/mesh/mesher.ts src/render/ChunkMeshManager.ts src/core/mesh/grassSway.test.ts
git commit -m "feat(shaders): 草丛按高度加权摆动(根锚定尖摆) + 树叶整体摆"
```

---

## Task 6: 真实太阳和月亮（4.5）

**Files:**
- Modify: `src/render/SkyObjects.ts`（真实日月贴图 + 太阳光晕 sprite；按档位切换真实/方块）

**Interfaces:**
- Consumes: `SkyObjects.setLightingQuality`（Task 2）已切 `this.shaders`。
- Produces: 真实日月 Mesh + 太阳 glow Mesh，`on` 时显示、`off` 时显示方块版。

- [ ] **Step 1: 真实贴图 + 光晕**

加贴图生成函数（沿用现有 canvas 画贴图风格，定义在 SkyObjects.ts 顶部工具区）：
- `makeRealSunTex()`：径向渐变——中心近白、边缘暖黄、外缘透明的实心亮盘。
- `makeSunGlowTex()`：更大、更柔的暖色径向辉光（中心半透明→边缘全透）。
- `makeRealMoonTex()`：冷白圆盘 + 几块淡灰陨石坑斑 + 柔和边缘。

构造里新增（与现有 `sun`/`moon` 并存）：

```typescript
this.realSun = new THREE.Mesh(new THREE.PlaneGeometry(52, 52), sky(makeRealSunTex()));
this.sunGlow = new THREE.Mesh(new THREE.PlaneGeometry(150, 150),
  new THREE.MeshBasicMaterial({ map: makeSunGlowTex(), transparent: true, depthWrite: false, fog: false, blending: THREE.AdditiveBlending }));
this.realMoon = new THREE.Mesh(new THREE.PlaneGeometry(44, 44), sky(makeRealMoonTex()));
this.realSun.visible = this.sunGlow.visible = this.realMoon.visible = false;
scene.add(this.realSun, this.sunGlow, this.realMoon);
```

- [ ] **Step 2: 按档位切换 + 让真实日月跟随方位**

`setLightingQuality`：`on` 时显示 realSun/sunGlow/realMoon、隐藏方块 sun/moon；`off` 反之。
在每帧摆放日月方位的代码处（现 `sun`/`moon` 定位），把 realSun/sunGlow/realMoon 摆到与方块版相同的位置/朝向（glow 跟太阳同位、稍后于太阳渲染叠加）。

```typescript
setLightingQuality(q: LightingQuality): void {
  const on = q !== 'off';
  this.shaders = on;
  this.voxelClouds.visible = !on; this.softClouds.visible = on;
  this.sun.visible = !on; this.moon.visible = !on;
  this.realSun.visible = on; this.sunGlow.visible = on; this.realMoon.visible = on;
}
```

- [ ] **Step 3: 验证 + 截图**

Run: `npm run typecheck`
dev server：标准/高 → 太阳是带柔光晕的发光圆盘、月亮圆而有细节；关 → 回方块日月；日月随昼夜移动正常。

- [ ] **Step 4: 提交**

```bash
git add src/render/SkyObjects.ts
git commit -m "feat(shaders): 真实发光太阳(+光晕)与真实月亮，按档位切换"
```

---

## Task 7: 体积光 / 屏幕空间 god rays（4.3）★核心·最大

**Files:**
- Create: `src/render/GodRays.ts`（后处理 pass：occlusion-from-depth + 放射模糊 + composite 的材质/工具）
- Modify: `src/render/Renderer.ts`（光影开时场景渲到 RT → GodRays → 上屏 → 再画手臂；关时走原直接上屏）
- Modify: `src/game/Game.ts`（每帧给 Renderer 喂太阳世界方向 + 档位；档位决定采样数 / 开关）

**Interfaces:**
- Produces:
  - `Renderer.setGodRays(opts: { quality: LightingQuality; sunDirWorld: THREE.Vector3; sunColor: THREE.Color } | null): void` —— `null`/`off` 关闭后处理。
  - `Renderer.render()` 内部：`off` → `gl.render(scene,camera)`（原样）；否则 → 渲到 `rt` → `GodRays.composite(rt, sunScreenUV, samples)` 上屏。
- Consumes: 太阳世界方向（Game 已有 `updateSun` 的方位计算，可复用 `chunks.uSunDir` 或同公式）。

- [ ] **Step 1: GodRays 模块（occlusion 用深度 + 放射模糊）**

`src/render/GodRays.ts`：一个全屏三角/quad + ShaderMaterial。输入：场景颜色纹理、场景深度纹理、太阳屏幕 UV、采样数、太阳色、强度、衰减。片元逻辑：
- 从当前像素朝 `sunUV` 方向，等距取 `SAMPLES` 个点；每点采样深度，`depth>=1.0`(天空) 计为光、否则 0；按 `decay^i * weight` 累加 → `shaft`。
- 输出 `sceneColor.rgb + shaft * sunColor * exposure`。
- `SAMPLES` 作为 `#define` 由档位选材质实例：standard=24、high=48。
- 太阳在屏幕外/地平线下 → `intensity=0`（Game 传 0 时直接输出 sceneColor，省采样）。

```typescript
import * as THREE from 'three';
export class GodRays {
  readonly material: THREE.ShaderMaterial;
  private readonly quad: THREE.Mesh;
  private readonly scene = new THREE.Scene();
  private readonly cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  constructor(samples: number) {
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        tColor: { value: null }, tDepth: { value: null },
        uSunUV: { value: new THREE.Vector2(0.5, 0.5) },
        uSunColor: { value: new THREE.Color(1.0, 0.95, 0.8) },
        uIntensity: { value: 0 }, uDecay: { value: 0.96 }, uWeight: { value: 0.5 },
      },
      vertexShader: `varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0);}`,
      fragmentShader: `
        varying vec2 vUv; uniform sampler2D tColor; uniform sampler2D tDepth;
        uniform vec2 uSunUV; uniform vec3 uSunColor; uniform float uIntensity, uDecay, uWeight;
        void main(){
          vec3 scene = texture2D(tColor, vUv).rgb;
          if (uIntensity <= 0.001) { gl_FragColor = vec4(scene,1.0); return; }
          vec2 dir = (uSunUV - vUv) / float(${samples});
          vec2 uv = vUv; float illum = 1.0; float shaft = 0.0;
          for (int i=0;i<${samples};i++){
            uv += dir;
            float d = texture2D(tDepth, uv).x;     // 深度：天空≈1
            float lit = step(0.9999, d);
            shaft += lit * illum * uWeight; illum *= uDecay;
          }
          shaft /= float(${samples});
          gl_FragColor = vec4(scene + shaft * uSunColor * uIntensity, 1.0);
        }`,
      depthTest: false, depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.scene.add(this.quad);
  }
  render(gl: THREE.WebGLRenderer): void { gl.render(this.scene, this.cam); }
}
```

- [ ] **Step 2: Renderer 接管线**

`Renderer` 加：`private rt: THREE.WebGLRenderTarget | null`（含 `depthTexture`）、`private godStd/godHigh: GodRays`、`setGodRays(opts)`、resize 时重建 rt 为**全分辨率**（`innerWidth*pixelRatio`，**不降分辨率**）。`render()`：

```typescript
render(): void {
  if (!this.god) { this.gl.render(this.scene, this.camera); return; }
  this.gl.setRenderTarget(this.rt);
  this.gl.clear(); this.gl.render(this.scene, this.camera);
  this.gl.setRenderTarget(null);
  const gr = this.god.quality === 'high' ? this.godHigh : this.godStd;
  gr.material.uniforms.tColor.value = this.rt.texture;
  gr.material.uniforms.tDepth.value = this.rt.depthTexture;
  gr.material.uniforms.uSunUV.value.copy(this.god.sunUV);
  gr.material.uniforms.uIntensity.value = this.god.intensity; // 太阳不可见时 0
  gr.render(this.gl);
}
```
`renderOverlay`（手臂）维持在 `render()` 之后调用、画在屏幕上（不进 RT）。rt 用 `THREE.DepthTexture`。`setGodRays(null)` 时 `this.god=null` 走原路径。

- [ ] **Step 3: Game 每帧喂太阳屏幕位置 + 档位**

在 `updateSun` 附近：算太阳世界方向（已有），投影到 NDC→UV；`uSunUp>0 && UV 在 [0,1] 内` → intensity = 档位强度，否则 0。standard/high 都开，high 用更高采样材质。`off` → `renderer.setGodRays(null)`。

- [ ] **Step 4: 验证 god rays + 关键测帧**

dev server：① 面向太阳 → 见放射光束；被山/树挡 → 光束有缝隙明暗；② 背对太阳 → 无光束（intensity=0）；③ **standard 档集显代表场景测帧**（开 F3 或加临时 FPS 打点）——这是性能闸门。

- [ ] **Step 5: 按帧率调采样/门控（非分辨率）**

standard 掉帧就降 `samples`（24→16）或收紧可见性门控；**不准降分辨率**。high 可留 48。确认 `off` 档完全不建 RT、零开销。

- [ ] **Step 6: 提交**

```bash
git add src/render/GodRays.ts src/render/Renderer.ts src/game/Game.ts
git commit -m "feat(shaders): 屏幕空间体积光(god rays) —— 标准/高档，分辨率零改动"
```

---

## Task 8: 太阳阴影优化（4.4，仅高档）

**Files:**
- Modify: `src/render/ChunkMeshManager.ts`（`SHADOW_HALF`、PCF 采样）

- [ ] **Step 1: 收紧阴影相机 + 降 PCF**

`const SHADOW_HALF = 36;`（原 48）。`mwShadow` 的 3×3(9 抽样)循环改 4 抽样（旋转 offset）：

```glsl
float mwShadow(vec4 sc){
  vec3 c = sc.xyz / sc.w;
  if (c.z >= 1.0 || c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0) return 1.0;
  float bias = 0.0018; float s = 0.0;
  vec2 o[4]; o[0]=vec2(0.6,0.2); o[1]=vec2(-0.2,0.6); o[2]=vec2(-0.6,-0.2); o[3]=vec2(0.2,-0.6);
  for (int i=0;i<4;i++){
    float d = mwUnpackDepth(texture2D(uShadowMap, c.xy + o[i]*uShadowTexel*1.5));
    s += (c.z - bias <= d) ? 1.0 : 0.0;
  }
  return s / 4.0;
}
```

- [ ] **Step 2: 验证（高档）+ 测帧**

dev server 切「高」：白天地面/树有方向一致柔和投影、无明显痤疮/穿帮；比改前(9 抽样/48 半宽)测帧更省。痤疮就调 `bias`；锯齿太硬就调 `*1.5` 模糊半径。

- [ ] **Step 3: 提交**

```bash
git add src/render/ChunkMeshManager.ts
git commit -m "perf(shaders): 高档阴影优化 —— 收紧 frustum(48→36) + PCF 9→4 抽样"
```

---

## Task 9: 整体验收 + 部署

**Files:** 无（验证 + 部署）

- [ ] **Step 1: 全量自动化检查**

Run: `npm run typecheck && npx eslint . --ext .ts && npx vitest run`
Expected: 全过（含 settings 迁移、grassSway 等新测试 + 既有全部）。

- [ ] **Step 2: committed HEAD 自洽可构建**

Run: `npm run build`
Expected: 成功；产物 `index.html` + bundle。

- [ ] **Step 3: 三档逐一截图验收**

dev server，依次切 关/标准/高：
- 关：方块云/日月、平水面、无摆动、无光束、无阴影。
- 标准：透明蓝水+粼光、柔和云、真实日月、草木摆动、体积光；**测帧可接受**。
- 高：再加太阳阴影。
对照 `/tmp/mcref/*` 参考。不达标回对应 Task 调。

- [ ] **Step 4: 合并回主分支并部署**

worktree 工作合并回 `feature/cartoon-textures`（解并发冲突，保证 HEAD 自洽可 build）；按 [[github-and-deploy]] 主工作树 `npm run build` → worktree 推 gh-pages（先 fetch gh-pages 与线上 diff、跳冗余；guard：index.html+atlas.png 存在且文件数>50 才 push）。验证线上：`curl -s https://nornttyy.github.io/mineworld/ | grep -oE 'index-[A-Za-z0-9_-]+\.js'` 换了新 hash。

- [ ] **Step 5: 通知用户强刷验收**

提示用户 Ctrl/Cmd+Shift+R 强刷，按三档实测观感 + 帧率反馈。

---

## Self-Review（已自查）

- **Spec 覆盖**：三档+迁移(T1)、UI(T3)、水面(T4)、草木摆动(T5)、真实日月(T6)、体积光(T7)、阴影优化(T8)、分辨率硬约束(全程 Global Constraints + T7 Step5)、worktree 隔离(Global + T9)——逐条有任务。
- **占位扫描**：shader 数值（采样数/SHADOW_HALF/水色）均给了**具体起始值** + 截图/测帧验收准则，非占位。
- **类型一致**：`LightingQuality` 贯穿 T1→T2/T3；`setLightingQuality(q)` 命名在 ChunkMeshManager/SkyObjects/Game 一致；`MeshData.sway`/属性 `aSway` 在 T5 一致；`Renderer.setGodRays`/`GodRays.render` 在 T7 一致。
