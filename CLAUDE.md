# MINEWORLD

> 一个单人、第一人称、体素（voxel）生存游戏，风格类似 Minecraft。
> 本文件是给 Claude / 开发者的**高信号约定文档**，每次会话都会被加载——请保持精简、准确、最新。

---

## 1. 项目是什么

- **类型**：单人、第一人称、体素方块世界的**生存**游戏（Minecraft-like）。
- **目标**：高质量、流畅（目标 60 FPS）、好玩。先把"核心沙盒"做扎实，再叠加生存玩法。
- **平台**：现代桌面浏览器（需 **WebGL2**）。`npm run dev` 后浏览器打开即玩，零安装。
- **当前阶段**：阶段 1（地基）。详见 [§12 路线图](#12-路线图分阶段逐阶段都能玩)。
- **设计哲学**：玩法循环 = **探索 → 采集 → 合成 → 建造/生存**。任何新功能都要服务于这个循环或它的乐趣。

---

## 2. 技术栈

| 用途 | 选型 | 说明 |
|---|---|---|
| 语言 | **TypeScript**（`strict` 全开） | 不用 `any`；类型即文档 |
| 渲染 | **Three.js**（最新稳定版） | 封装 WebGL2、相机、数学库 |
| 构建 / Dev Server | **Vite 5**（兼容 Node 18） | `dev` 带热更新（HMR），`build` 出静态文件 |
| 单元测试 | **Vitest** | 与 Vite 同源，无头运行 |
| 浏览器验证 | **Playwright** | 无头浏览器截图冒烟（本环境已有 MCP 工具可直接用） |
| 代码质量 | **ESLint + Prettier** | 提交前必过 |
| 包管理 | **npm**（v9） | 环境无 pnpm/yarn，统一用 npm |
| 并发 | **Web Workers** | 世界生成 + 网格化离开主线程 |

- 运行环境：**Node 18.20**，模块格式 **ESM**，编译目标 **ES2022**。
- 安装依赖时在 `package.json` 中锁定具体版本，别用浮动范围导致环境漂移。

---

## 3. ⚠️ 环境约束与验证方式（最重要，动手前先读这节）

**当前开发容器是 headless：没有 GPU、没有显示器，无法真正把游戏画面跑起来。** 这条约束塑造了整个架构，也决定了"怎么算验证通过"。

应对策略（既是被迫、也是好设计）：**逻辑层与渲染层彻底分离，让逻辑能在无头环境里测试**（见 [§5](#5-架构铁律core-与-render-彻底分离)）。

三种验证手段，按可靠性排序：

1. **Vitest 无头单测** —— 主力。验证 `src/core/**` 的全部逻辑（世界生成、网格化、碰撞、合成…）。秒级反馈，必须先有它。
2. **Playwright 截图冒烟** —— 启动 dev server 后用无头浏览器（软件渲染 SwiftShader）导航、截图，验证"页面能加载、canvas 在渲染、控制台无报错、方块可见"。⚠️ 软件渲染**慢且不代表真实性能/手感**，只用于"能不能跑起来"这一层。
3. **本机实际游玩** —— 最终的视觉与手感验证，由用户在有 GPU 的真实机器上完成。

> **铁律**：在声称"做好了 / 修复了 / 通过了"之前，**必须先跑相应验证并拿到证据**（测试输出、截图）。没有证据不许下结论。遵循 superpowers `verification-before-completion`。

---

## 4. 常用命令

> 以下为目标脚本（在搭建脚手架时写入 `package.json`）。

```bash
npm install            # 安装依赖
npm run dev            # 启 Vite 开发服务器(默认 :5173)，热更新；浏览器打开即玩
npm run build          # 打包到 dist/（静态文件，可直接部署）
npm run preview        # 本地预览 build 产物
npm test               # Vitest 跑一遍全部单测（无头，CI 用这个）
npm run test:watch     # Vitest 监听模式，开发时用
npm run lint           # ESLint 检查（含 core/render 隔离规则）
npm run format         # Prettier 格式化
npm run typecheck      # tsc --noEmit，只做类型检查
```

**怎么玩到游戏**：`npm run dev` → 浏览器访问 `http://localhost:5173` → 点击画面锁定鼠标即可操作。

---

## 5. 架构铁律：`core` 与 `render` 彻底分离

> **`src/core/**` 永远不许 `import` `three`，也不许 `import` `src/render/**`。**

- `core/` 是**纯逻辑**：输入数据 → 输出数据（纯函数 / 朴素数据结构），不碰 DOM、不碰 WebGL、不碰 Three.js。
- `render/` 负责把 `core/` 产出的数据**画出来**：建场景、传 GPU、做光照。
- 用 ESLint `no-restricted-imports` 在 `src/core/**` 上**强制**禁止 import `three` 与 `render`；`npm run lint` 会拦截违规。
- **为什么**：① 逻辑能在无头容器里跑单测；② 逻辑可复用、可移植（将来可移植到 Worker / 服务端）；③ 边界清晰，Claude 能把单个模块完整放进上下文里推理，改动更可靠。

---

## 6. 分层与数据流

| 层 | 目录 | 职责 | 依赖 Three.js? | 怎么验证 |
|---|---|---|:---:|---|
| 核心逻辑 | `src/core/` | 区块数据、世界生成、网格化、碰撞物理、方块注册表、物品栏、合成、生存数值、存档 | ❌ | Vitest 单测 |
| 渲染 | `src/render/` | 场景/相机/光照、把 core 顶点数据传 GPU、纹理图集、昼夜天空 | ✅ | Playwright 截图 |
| 输入 | `src/input/` | 指针锁定第一人称控制、按键映射 | — | 手玩 |
| 并发 | `src/workers/` | 世界生成 + 网格化（调用 core） | ❌ | 单测 core |
| 主循环 | `src/game/` | 固定步长模拟 + 渲染循环，串起各层 | — | 手玩 |
| 界面 | `src/ui/` | HUD、快捷栏、背包、菜单（DOM 覆盖层） | — | 手玩/截图 |

**数据流（生成与渲染）**：
```
seed ──> worldgen(core) ──> 体素数据(Uint16Array) ──> meshing(core, 在 Worker 里)
     ──> {positions, normals, uvs, indices}(TypedArray) ──> ChunkRenderer(render)
     ──> THREE.BufferGeometry ──> GPU
```

**数据流（输入与模拟）**：
```
键鼠输入(input) ──> 玩家意图 ──> physics(core: AABB 扫掠碰撞) ──> 玩家状态
              ──> 相机(render) / HUD(ui)
```

---

## 7. 目录结构

```
mineworld/
├── index.html                 # 入口 HTML
├── package.json
├── tsconfig.json              # strict 全开
├── vite.config.ts
├── .eslintrc / eslint.config  # 含 core/render 隔离规则
├── public/
│   └── textures/              # 方块纹理 / 图集
├── src/
│   ├── main.ts                # 入口：bootstrap 游戏
│   ├── core/                  # ⚠️ 纯逻辑，禁止 import three / render
│   │   ├── world/             #   区块、世界、坐标转换
│   │   ├── worldgen/          #   确定性地形/生物群系/洞穴/矿石/树
│   │   ├── mesh/              #   网格化：体素 → 顶点数组
│   │   ├── physics/           #   AABB 碰撞、移动
│   │   ├── blocks/            #   方块注册表与定义
│   │   ├── inventory/         #   物品栏、物品
│   │   ├── crafting/          #   合成配方与逻辑
│   │   ├── survival/          #   生命、饥饿、昼夜时钟
│   │   ├── save/              #   序列化 / 反序列化
│   │   └── math/              #   噪声、随机、向量辅助
│   ├── render/                # Three.js 渲染层
│   │   ├── Renderer.ts        #   场景、相机、光照
│   │   ├── ChunkRenderer.ts   #   core 顶点数据 → BufferGeometry
│   │   ├── atlas.ts           #   纹理图集
│   │   └── sky.ts             #   昼夜天空视觉
│   ├── input/                 # 指针锁定控制、按键映射
│   ├── workers/               # worldgen.worker.ts / mesh.worker.ts
│   ├── game/                  # Game.ts：主循环、状态机、装配
│   └── ui/                    # HUD、hotbar、背包、菜单
├── tests/                     # 或就近放 *.test.ts
└── docs/                      # 设计文档、笔记
```

---

## 8. 关键数据模型与设计（实现时遵循）

**坐标系**（集中放在 `core/world/coords.ts`，别到处手写）：
- 世界方块坐标 `(wx, wy, wz)`：整数。
- 区块列坐标 `(cx, cz)`、Section 纵向索引 `sy`。
- Section 内局部坐标 `(lx, ly, lz) ∈ [0,15]`。
- ⚠️ **负坐标陷阱**：求区块坐标用 `wx >> 4` 或 `Math.floor(wx/16)`——**不要**用 `(wx/16)|0` / `Math.trunc`（向零截断，负数会差 1）；求局部坐标用 `wx & 15`——**不要**用 `wx % 16`（负数会得负余数）。

**区块 / Section**：
- 一个 **Section = 16×16×16** 个体素，存为 `Uint16Array(4096)`，每格是方块 ID（支持 65535 种，留足余量）。
- 索引公式：`idx = x + 16*z + 256*y`（即 `x | (z<<4) | (y<<8)`）。
- 世界高度 **256**（= 16 个 Section 纵向堆叠），可配置。一个区块"列"= 同一 `(cx,cz)` 的所有 Section。
- 空气 = ID `0`。

**方块注册表**（`core/blocks/`，数据驱动）：
- 每种方块：`{ id, name, solid, transparent, emitsLight, lightLevel, hardness, textures, drops }`。
- 新增方块只改注册表数据，不改渲染/网格化代码。

**网格化（meshing）管线**：
- 输入：某 Section 的体素 + 它 6 个邻居的边界体素（剔除接缝处的面需要邻居）。
- 输出：**纯数据** `{ positions, normals, uvs, indices }`（TypedArray），**不含任何 Three.js 对象**。
- 算法：先做**面剔除**（只生成"邻格透明/空气"的面）→ 后续优化为**贪心网格化（greedy meshing）**合并同面。
- 在 **Web Worker** 里跑，用 transferable 把 buffer 零拷贝传回主线程。
- ⚠️ 改动**边界**方块时，要把**相邻 Section 也标记为脏**，否则接缝处漏面/多面。

**世界生成**（`core/worldgen/`）：
- **必须确定性**：同一 `seed` → 同一世界。用可种子化的 PRNG + simplex 噪声（建议 `simplex-noise` 库）。
- 逐列管线：高度图(2D 噪声) → 填充地表(石/土/草) → 洞穴(3D 噪声阈值) → 矿石 → 树木/装饰。
- 纯函数 + 确定性 → 可单测（如"seed=S 时 (x,y,z) 恒为方块 T"）。

**物理 / 碰撞**（`core/physics/`）：
- 玩家是一个 **AABB**（约 0.6×1.8×0.6）。对体素网格做**扫掠 AABB 碰撞**，**逐轴解算**，含重力/跳跃/行走。
- 纯函数：`(aabb, velocity, world) → { position, onGround }`。可单测。

**存档**（`core/save/`）：
- 用 **IndexedDB** 存玩家状态 + 区块。
- **只存玩家改动过的方块（delta）**，未改动的部分由 seed 重新生成——大幅省空间。
- 支持导出/导入存档文件，方便分享。

**游戏循环**（`game/Game.ts`）：
- **固定步长模拟**（20 TPS，仿 Minecraft）+ **可变帧率渲染**（`requestAnimationFrame`）+ 插值。用累加器（accumulator）模式，保证物理稳定、画面平滑。

---

## 9. 代码规范

- TypeScript `strict` 全开；**禁用 `any`**（不得已用 `unknown` 再收窄）。
- **文件小而专注**：单文件超过 ~300 行就考虑拆分；一个模块一个清晰职责。
- 优先**纯函数**，把副作用（IO、DOM、随机、时间）集中到边界。
- 命名清晰，与周围代码风格一致；ESM `import`，不用默认导出堆杂物。
- 注释解释**"为什么"**，不复述"做了什么"。
- 公共类型集中到模块的 `types.ts`，避免循环依赖。

---

## 10. 测试策略

- **TDD**：`core/` 逻辑**先写测试再实现**（遵循 superpowers `test-driven-development`）。
- **必测项**：世界生成确定性、坐标转换（含负数）、网格化面数/正确性、AABB 碰撞各种姿态、物品栏/合成、存档往返（save→load 一致）。
- 测试就近放 `*.test.ts` 或集中在 `tests/`。
- **Playwright 冒烟**：加载页面 → 等 canvas 出现 → 截图 → 断言无 `console.error`。可写成提交到仓库的 `@playwright/test` 用例，也可在本环境用 Playwright MCP 临时截图。
- `render/` 层不强求单测，靠截图 + 手玩验证。

---

## 11. 性能准则（体素专属，直接关系到"流畅"）

- **离主线程**：世界生成 + 网格化放 Web Worker；用 transferable 传 TypedArray，**零拷贝**。
- **少画面**：面剔除起步，尽快上**贪心网格化**，大幅减少三角形数。
- **少切换**：所有不透明方块共用**一张纹理图集 + 一个 material** → 合批，draw call 降到每区块一个。
- **少重建**：每个 Section 一个 `BufferGeometry`；**只重建"脏"Section**，别整世界重算。
- **少加载**：按渲染距离动态**加载/卸载**区块，近处优先入队。
- **少 GC**：全程 TypedArray，避免每帧 `new` 对象造成 GC 卡顿；复用临时向量。
- **量化**：用 `stats.js` / Spector.js 看帧时间与 draw call，**别凭感觉调优**。目标 60 FPS。

---

## 12. 路线图（分阶段，逐阶段都能玩）

1. **阶段 1 · 地基**：Vite + TS + 测试 + lint 脚手架；`core`/`render` 骨架；渲染出**一个**写死的区块并能转视角。
2. **阶段 2 · 核心沙盒**：无限世界生成、挖/放方块、第一人称移动 + 碰撞、昼夜循环、存档。→ 类创造模式，可自由建造。
3. **阶段 3 · 生存**：物品栏 + 快捷栏、合成系统、生命/饥饿、基础生物与战斗、完整采集循环。
4. **阶段 4 · 打磨**：音效、粒子、UI 完善、性能调优、更多生物群系与方块。

> 每个阶段独立成一个 spec → plan → 实现 周期。完成一个阶段、能玩、测试绿、再进下一个。

---

## 13. 开发工作流

- **相关 superpowers 技能**：`brainstorming`（定设计）→ `writing-plans`（拆计划）→ `test-driven-development`（写实现）→ `verification-before-completion`（验证）→ `requesting-code-review`（评审）。
- 这是 Git 仓库前先 `git init`；**不在 default 分支上直接开发**，先开 feature 分支。
- **小步提交**，每次提交聚焦一件事，信息说清"为什么"。
- 改完到声称完成之间，至少跑：`npm run typecheck && npm run lint && npm test`，渲染相关再补一张 Playwright 截图。

---

## 14. 常见陷阱（踩过就记在这）

- **负坐标转换**：区块坐标用 `>> 4` / `Math.floor`，局部坐标用 `& 15`；别用 `(x/16)|0` 或 `x % 16`（对负数错）。
- **网格化漏邻居**：忘了传邻居 Section 的边界，区块接缝处会漏面或多面；改边界方块要同时标脏邻居。
- **Worker 限制**：Worker 里没有 DOM、没有 Three.js；只能传可结构化克隆 / 可转移（transferable）的数据。
- **Float32 精度**：远离原点（大世界坐标）时 Float32 抖动；几何体用**区块局部坐标** + 区块世界偏移定位，极远处再考虑**浮动原点**（相对相机）。
- **指针锁定**：`requestPointerLock` 必须由用户手势触发；`ESC` 会释放，要处理重新锁定。
- **WebGL 上下文丢失**：监听 `webglcontextlost`/`restored`，必要时重建资源。
- **透明排序**：水、玻璃等半透明方块要**单独成批、按距离排序**渲染，不能和不透明方块混批。

---

## 15. 术语表

- **voxel（体素）**：3D 像素，这里就是一个方块格。
- **chunk / section（区块/段）**：16×16×16 的体素块，世界加载/网格化的最小单位。
- **greedy meshing（贪心网格化）**：把相邻同种、共面的方块面合并成大四边形，减少三角形。
- **AABB**：轴对齐包围盒，用于碰撞检测。
- **TPS**：每秒模拟刻数（本项目固定 20）。
- **atlas（图集）**：把多张小纹理拼到一张大纹理，靠 UV 偏移取用，减少 draw call。
- **AO（环境光遮蔽）**：方块凹角处压暗，增强立体感（后期打磨项）。
