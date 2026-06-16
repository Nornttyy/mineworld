# 阶段 1 设计：可游玩的方块世界（渲染 + 第一人称移动）

- **日期**：2026-06-16
- **状态**：已通过设计评审（范围 B），待写实现计划
- **里程碑**：第一个**能在浏览器打开、能转视角、能走动**的版本

---

## 1. 背景与目标

做出 MINEWORLD 第一个可游玩里程碑：`npm run dev` → 浏览器打开 → 点击锁定鼠标 → **第一人称看四周 + WASD 走动跳跃**，脚下是一块写死的方块地形（用已生成的纹理图集）。

约束：
- 遵守架构铁律：`core/**` 纯逻辑（禁 import three/render），可 Vitest 无头单测；`render/**` 用 Three.js，靠 Playwright 截图验证。
- 移动数值 **1:1 对齐 Java 版**（见 `docs/minecraft-values.md`），关键小数实现时对照官方 Wiki 复核。
- 建在已有脚手架（TS/Vitest/ESLint）与 16×16 像素纹理之上。

---

## 2. 范围

**本期做（In scope）**
- 加 `three` + `vite` 依赖；`index.html` + `src/main.ts`；`dev`/`build`/`preview` 脚本。
- core：坐标换算、区块数据、方块注册表、面剔除网格化、写死地形、**物理（玩家 AABB 扫掠碰撞 + 重力/跳跃/行走）**。
- render：图集加载、区块几何、场景/相机/天空。
- input：指针锁定 + WASD 移动 + 鼠标转视角。
- game：**固定步长 20 TPS 模拟 + 可变帧率渲染 + 插值**。
- 图集资产：把块纹理拼成一张 atlas PNG + 格子索引。

**本期不做（Out of scope）**：世界生成（地形写死）、挖/放方块、多区块加载/卸载、昼夜、贪心网格化、自动上台阶/疾跑/潜行、背包/合成界面、生物/鸡。

---

## 3. core 模块（纯逻辑，Vitest 可测）

**`core/world/coords.ts`**
- `worldToChunk(w)= w>>4`、`localCoord(w)= w&15`（防负坐标坑，禁用 `/16|0`、`%16`）。
- 区块内索引：`idx(x,y,z)= x | (z<<4) | (y<<8)`（16³）。

**`core/world/section.ts`**
- `Section`：`Uint16Array(4096)`，`getBlock(x,y,z)`/`setBlock(x,y,z,id)`，空气=0。

**`core/blocks/registry.ts`**
- `BlockDef { id, name, solid, transparent, faces }`；`faces` 给出 6 面各自的图集格子（草：top=grass_top/side=grass_side/bottom=dirt；原木：top&bottom=oak_log_top/side=oak_log_side；其余六面同图）。
- 本期方块：air、stone、dirt、grass、cobblestone、sand、oak_log、oak_planks、coal_ore。

**`core/mesh/mesher.ts`** —— 面剔除网格化
- 输入：一个 `Section` + 方块外观查询（`blockFaceTile(id,face)`）+ 图集布局（列数/行数）。
- 输出纯数据：`{ positions: Float32Array, normals: Float32Array, uvs: Float32Array, indices: Uint32Array, colors: Float32Array }`。
- 只为"邻格透明/空气"的面生成四边形（区块边界外当空气）。
- ⭐ **1:1 面亮度烤进 `colors`**：顶 **1.0** / 南北(±Z) **0.8** / 东西(±X) **0.6** / 底 **0.5**（MC 固定面明暗），渲染用无光照材质即得原版观感。
- UV 由格子索引 + 图集列行数算出（含半像素内缩防接缝渗色）。

**`core/world/demoChunk.ts`**
- 返回一个写死、确定性的 `Section`：石底 → 数层泥土 → 草顶，撒几处煤矿，立一截橡木（log）。形成可站立、好看的小地形。

**`core/physics/`** —— 玩家移动与碰撞
- `Player { pos, vel, onGround }`：`pos`=脚部中心；AABB 宽 **0.6** 高 **1.8**。
- 世界查询接口 `VoxelWorld { isSolid(x,y,z): boolean }`（demoChunk 实现；区块外视为空气）。
- `step(player, intent, world) → Player`（纯函数，每 tick）：
  1. 重力：`vy = (vy - 0.08) * 0.98`（顺序/常数对照 Wiki 复核）。
  2. 水平意图 → 目标速度（按相机朝向的前后左右），用摩擦模型趋近行走速度。
  3. **扫掠 AABB、逐轴解算**：先 Y 后 X 后 Z，各轴对路径上的实心方块做碰撞钳制；Y 向下被挡 → `onGround=true, vy=0`。
  4. 跳跃：`onGround` 且按跳 → `vy=0.42`。
- 高速移动用扫掠避免穿墙（不靠瞬移采样）。

---

## 4. 1:1 数值（实现时对照 Wiki 复核，回归测试守住）

| 项 | 值 |
|---|---|
| 模拟刻率 | **20 TPS**（50ms/tick，累加器固定步长） |
| 重力 / 垂直阻力 | `vy -= 0.08`，`vy *= 0.98` /tick |
| 跳跃初速 | `vy = 0.42`（跳高 ≈ 1.25 格） |
| 行走速度（目标） | **4.317 b/s**（≈0.216 b/tick）；回归测试断言稳态速度在容差内 |
| 玩家碰撞箱 | **0.6 × 1.8** |
| 相机眼高 | 脚部 + **1.62** |
| 相机 FOV | **70** |

> 地面摩擦/加速完整公式（slipperiness 0.6 × 0.91 等）实现时照 Wiki *Player movement* 落地，并用"稳态速度≈4.317、跳高≈1.25"两个回归测试兜底。

---

## 5. render 模块（Three.js，Playwright 截图验证）

- **`render/atlas.ts`**：加载 atlas PNG，`THREE.NearestFilter`、关 mipmap，`colorSpace=SRGB`。
- **`render/ChunkRenderer.ts`**：core 网格数据 → `BufferGeometry`（position/normal/uv/color 属性 + index）→ `Mesh`，材质 `MeshBasicMaterial({ map: atlas, vertexColors: true })`（**无光照**＝用烤好的面亮度）。
- **`render/Renderer.ts`**：`WebGLRenderer`、`Scene`、`PerspectiveCamera`(FOV 70, near 0.1, far 1000)、天蓝 `clearColor`、窗口 resize 自适应、`render(camera)`。

---

## 6. input + game（装配与循环）

- **`input/PointerLookControls.ts`**：`canvas.requestPointerLock()`（用户点击触发）；`mousemove` → 累加 yaw/pitch，pitch 夹在 ±89°；`ESC` 释放后可重新点击锁定。
- **`input/keyboard.ts`**：WASD/Space 按键状态 → `MoveIntent { forward, right, jump }`（相对相机朝向）。
- **`game/Game.ts`**：装配 demoChunk→mesher→ChunkRenderer 入场景；**累加器循环**：每 50ms 跑一次 `physics.step`（喂入当前意图），渲染帧用上一/当前玩家状态**插值**定位相机于眼高，平滑流畅。

---

## 7. 图集资产

扩展 `tools/textures/gen_textures.py`：把现有 16×16 块纹理按固定顺序拼成一张 **atlas PNG**（如 4×4 网格，每格 16px），输出到 `public/textures/atlas.png`；格子顺序在 `core/blocks` 里以常量记录，`blockFaceTile` 映射到格子索引。列行数作为常量供 mesher 算 UV。

---

## 8. 测试计划

**core（Vitest，必须先有）**
- coords：负坐标 `-1>>4=-1`、`-1&15=15`；`idx` 往返。
- section：set/get 往返、越界/空气。
- mesher：全空 section → 0 面；孤立单块 → 6 面（24 顶点/36 索引）；两相邻实心块 → 接触面被剔除；某面 UV 命中预期格子；顶面 color=1.0、底面 0.5。
- physics：自由下落落到地面（`onGround`、`vy=0`、停在方块顶面）；走进墙被钳不穿透；跳跃 `vy=0.42` 上升约 1.25 格；高速水平移动不穿墙；**稳态行走速度 ≈ 4.317 b/s（容差内）**。

**render（Playwright 截图冒烟）**
- 起 dev server → 等 canvas → 截图：画面非空、能看到方块地形、控制台无 `error`。

---

## 9. 分期

**MVP（本期）**：上述全部 —— 打开即可第一人称走动看方块。
**Later**：世界生成、挖/放方块、多区块加载、昼夜、贪心网格化、自动上台阶/疾跑/潜行、AO。

---

## 10. 文件结构

```
index.html                         入口（canvas + “点击开始”遮罩）
vite.config.ts                     Vite 配置（已有 vitest 配置并存）
src/main.ts                        bootstrap
src/core/world/coords.ts           坐标换算 + idx
src/core/world/section.ts          Uint16Array 区块
src/core/world/demoChunk.ts        写死地形
src/core/blocks/registry.ts        方块定义 + 面→图集格子
src/core/mesh/mesher.ts            面剔除 → 顶点数据（含面亮度色）
src/core/physics/player.ts         Player 类型 + 常量
src/core/physics/step.ts           扫掠 AABB + 重力/跳跃/行走
src/render/atlas.ts                图集纹理
src/render/ChunkRenderer.ts        网格数据 → BufferGeometry
src/render/Renderer.ts             场景/相机/天空
src/input/PointerLookControls.ts   指针锁定 + 转视角
src/input/keyboard.ts              按键 → 移动意图
src/game/Game.ts                   装配 + 固定步长循环 + 插值
tools/textures/gen_textures.py     扩展：输出 atlas.png
```

---

## 11. 接口契约小结

- `VoxelWorld { isSolid(x,y,z): boolean }`：物理向世界查实心，demoChunk 实现。
- `MoveIntent { forward: -1..1, right: -1..1, jump: boolean }`：input → physics。
- mesher 输出 `{positions,normals,uvs,indices,colors}` 纯 TypedArray，render 直接灌 GPU。
