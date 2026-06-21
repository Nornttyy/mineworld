# Bloom 后处理实现报告

## tsc / vitest 结果
- `npx tsc --noEmit` → **0 errors**
- `npx vitest run` → **57 test files, 349 tests, all passed**

---

## 新增 / 改动文件

### `src/render/Bloom.ts`（新建）

```ts
// 完整文件见 src/render/Bloom.ts
```

**3 个全屏 pass（全屏 quad + OrthographicCamera(-1,1,1,-1) 模式，同 GodRays）：**

| Pass | 输入 | 输出 | 说明 |
|------|------|------|------|
| 1 亮部提取 | `rt.texture`（全分辨率场景色） | bloomA（1/4 res） | `luma = dot(c, perceptual)`, `scale = max(0, luma-threshold)/luma`, 颜色按比例缩放保色调 |
| 2 横向高斯 | bloomA | bloomB | 9-tap, 偏移 -4..+4, σ≈2, 权重归一化 (0.02/0.05/0.12/0.20/0.22/0.20/0.12/0.05/0.02) |
| 3 纵向高斯 | bloomB | bloomA | 同 pass2 shader，`uHorizontal=0` |

**ping-pong 说明：**
- Pass2 读 bloomA.texture → 写 bloomB（不自读自写 ✓）
- Pass3 读 bloomB.texture → 写 bloomA（不自读自写 ✓）
- 最终结果在 bloomA.texture（`bloom.texture` getter）

**setRenderTarget 还原：** `bloom.render()` 末尾显式调 `gl.setRenderTarget(null)`，保证调用后 renderTarget=屏幕，Renderer 的后续 GodRays quad 直接写屏幕不会误入 RT。

---

### `src/render/GodRays.ts`（合成 shader 改动）

新增 uniform：
- `tBloom: sampler2D` — 辉光纹理
- `uBloom: float` — 辉光强度

**早返回路径改动（关键）：**
```glsl
// 改前：太阳不可见时只输出 scene（bloom 丢失）
if (uIntensity <= 0.001) {
  gl_FragColor = vec4(scene, 1.0);
  return;
}

// 改后：太阳不可见时输出 scene + bloom（bloom 始终保留）
if (uIntensity <= 0.001) {
  gl_FragColor = vec4(scene + bloomColor * uBloom, 1.0);
  return;
}
```

**正常路径末尾：**
```glsl
gl_FragColor = vec4(scene + shaft * uSunColor * uIntensity + bloomColor * uBloom, 1.0);
```

---

### `src/render/Renderer.ts`（render() 流程改动）

**光影关路径（白屏防护）：**
```ts
if (this.god === null || this.rt === null || this.bloom === null) {
  this.gl.render(this.scene, this.camera);  // 原直渲，零后处理
  return;
}
```
原来的 `intensity <= 0.001` 提前直渲条件已移除 — 太阳不可见时仍走 RT 路径以保留 bloom。

**render() 完整流程（光影开时）：**
1. `gl.setRenderTarget(rt)` → 场景渲到全分辨率 RT
2. `bloom.render(gl, rt.texture)` → 3 pass，结束后 renderTarget=null
3. GodRays quad 合成到屏幕（renderTarget 已是 null）：设 tColor/tDepth/tBloom/uBloom 等 uniform，调 `gr.render(gl)`

**bloom 强度按档位：**
- standard: `uBloom = 0.6`
- high: `uBloom = 1.0`
- 阈值: `uThreshold = 0.7`（亮部提取，在 Bloom.ts 的 material uniform 中）

**resize() 同步：**
- rt 重建时同步 `bloom.setSize(w*pr/4, h*pr/4)`

**setGodRays() 同步：**
- off → dispose rt + bloom
- on → 按需建 rt + bloom

---

## GLSL / 白屏 疑虑自审清单

| 检查项 | 结论 |
|--------|------|
| 光影关路径 = 原样 gl.render | ✓ `god===null` 时直接 return |
| setRenderTarget 全部还原到 null | ✓ bloom.render 末尾显式 null；GodRays 在 null 上渲染 |
| ping-pong 不自读自写 | ✓ pass2: A→B; pass3: B→A |
| GLSL 大括号/分号/类型 | ✓ 手工逐行确认 |
| 常量循环上界（GodRays 不变） | ✓ 嵌入字面量 S，未改动 |
| uHorizontal 类型 int（非 bool）| ✓ `uniform int uHorizontal`，TS 侧赋值 1/0 |
| 亮部提取 luma=0 时除零 | ✓ `luma > 0.0001` 保护，否则 scale=0 |
| bloomA.texture 与 bloomB.texture 在 setSize 后更新 | ✓ dispose+重建，getter 返回最新 bloomA.texture |
| 不抛异常路径 | ✓ 兜底条件 `god\|\|rt\|\|bloom === null` 直渲 |

---

## report path
`/workspace/MINEWORLD/.clone/worktrees/lighting/sdd/task-bloom-report.md`（即本文件）
