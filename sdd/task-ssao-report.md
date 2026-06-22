# SSAO 接触阴影实现报告

## 改动文件

- `src/render/SSAO.ts`（新增）
- `src/render/GodRays.ts`（改）
- `src/render/Renderer.ts`（改）

---

## SSAO.ts 完整逻辑

**两个 pass（1/2 物理分辨率）：**

### AO Pass

- 输入：`rt.depthTexture`（UnsignedInt）+ 相机 near/far/projectionMatrix/projectionMatrixInverse
- 深度线性化：`z_eye = near*far / (far - d*(far-near))`，分母有 `max(…,0.0001)` 防除零
- 视空间位置重建：用 `uProjectionInv` 把 NDC→视空间 xy，再按 `zLinear` 缩放
- 法线重建：4 邻域差分叉积（`cross(posR-posL, posU-posD)`），翻转保证朝相机（`z > 0`）
- 采样核：16 个固定 golden-ratio 螺旋偏移，展开为常量数组（满足 GLSL ES 循环上界约束）
- Range-check：`smoothstep(0, 1, radius*0.5/dist)` 限远处遮蔽贡献
- 法线点积过滤 + bias（默认 0.025）防自遮蔽
- 天空像素（`d >= 0.9999`）直接输出 `vec4(1.0)`（AO = 1，无遮蔽）
- 输出：`pow(ao, 1.5)`（轻微 power curve 增强立体感）

### Blur Pass

- 3×3 均值模糊（9 tap 展开，无动态索引）

---

## GodRays.ts 改动

新增两个 uniform：
```glsl
uniform sampler2D tAO;   // AO 灰度（默认 null）
uniform float uAO;       // 强度 0..1（默认 0.0）
```

AO 应用（在合成 `outc = scene + shaft + bloom` 之前，仅压暗 scene）：
```glsl
float aoFactor = mix(1.0, texture2D(tAO, vUv).r, uAO);
scene *= aoFactor;
```
- `uAO = 0` → `aoFactor = 1.0` → scene 不变（完全兜底）
- `tAO = null` 时 GLSL 读出 `vec4(0)`，但 `uAO = 0` 确保乘积为 1，无暗化
- bloom / shaft 不受 AO 影响（体积光和辉光不应被接触阴影压暗）

---

## Renderer.ts 改动

```
setGodRays(off)  → ssao.dispose() + ssao = null（随 rt/bloom 一起销毁）
setGodRays(on)   → new SSAO() + ssao.setSize(physW/2, physH/2)
resize()         → ssao.setSize(physW/2, physH/2)（null-guarded）

render() 顺序：
  Step 1: 场景 → rt（全分辨率）
  Step 2: bloom.render(rt.texture)    → renderTarget → null
  Step 2.5: ssao.render(rt.depthTexture, camera) → renderTarget → null（finally 保证）
  Step 3: GodRays.render() 写屏幕
    · ssao 有效 → tAO=ssao.texture, uAO=0.5/0.7（standard/high）
    · ssao 为 null → tAO=null, uAO=0（兜底，AO 贡献为零）
```

---

## 兜底保证（最坏情况 = 无 AO，不黑屏）

| 场景 | 保证 |
|---|---|
| quality='off' | god=null → 原直渲路径，SSAO 不存在 |
| ssao=null | uAO=0 → mix(1,ao,0)=1 → scene 不变 |
| depthTex=null | ssao.render 早返回，rtBlur 内容不更新；uAO=0（null 时调用者会传） |
| SSAO 内部 WebGL 异常 | try/catch 吃掉，finally 还原 renderTarget=null |
| tAO 纹理内容异常 | uAO=0 时完全无影响；uAO>0 最坏输出全黑→但有 fallback 路径兜 |
| 天空像素 | shader 直接 return vec4(1.0)，不参与遮蔽计算 |

---

## setRenderTarget 还原保证

- `Bloom.render()`：已有 `gl.setRenderTarget(null)` 在末尾（原有行为）
- `SSAO.render()`：finally 块 `gl.setRenderTarget(null)`，无论是否出错
- `GodRays.render()`：写入 renderTarget=null（屏幕），由调用者在 Step 3 前确认

---

## GLSL 疑虑与解答

| 疑虑 | 处理 |
|---|---|
| 循环上界须常量 | AO pass 展开 16 次 `samples[i]` + for 循环（i<16 字面量满足约束） |
| 动态数组索引 | `samples[i]` 是 vec2 数组，GLSL ES 1.0 允许常量整数变量索引 for 循环；若编译器不认，展开为 `i==0?s[0]:…` 可作备选，但标准允许 |
| 深度线性化除零 | `max(denom, 0.0001)`；天空 d=1 时 denom=near>0，安全 |
| projectionMatrixInverse | THREE.PerspectiveCamera 每次 `updateProjectionMatrix()` 后自动更新 `.projectionMatrixInverse`，直接 `copy()` 即可 |
| tAO=null 时 texture2D 结果 | GLSL 规范：sampler 绑 null 行为未定义，但 `uAO=0` 使结果 `mix(1,??,0)=1`，场景色不变 |

---

## tsc / test 结果

- `npx tsc --noEmit` → **0 errors**
- `npx vitest run` → **349 passed, 0 failed**（57 test files，无回归）

