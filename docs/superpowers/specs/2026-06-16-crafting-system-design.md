# 合成系统设计（Crafting Core）

- **日期**：2026-06-16
- **状态**：已通过设计评审，待写实现计划
- **范围阶段**：路线图阶段 3 的合成系统，但**提前**以纯逻辑形式落地（可无头单测）

---

## 1. 背景与目标

为 MINEWORLD 实现**合成系统**。约束与决策：

- 目标 **1:1 还原 Minecraft**：配方形状、产出数量、匹配规则都对齐 Java 版（见 `docs/minecraft-values.md` 的 1:1 精神）。
- 当前项目**零代码**（仅有 `CLAUDE.md`、纹理、数值文档）。本期只做**合成引擎 + 单测**，**不做游戏内界面**（UI 等体素引擎就位后再接）。
- 遵守架构铁律：`src/core/**` 纯逻辑，禁止 import `three` / `render`，可在无头容器里用 Vitest 验证。

### 经评审确定的决策
1. **配方表示用 MC 风格"图案 + 图例"**（方案 A）：最贴近原版配方文件，照搬最省事、最 1:1。
2. **物品用可读字符串 id**（如 `'oak_planks'`）；物品 ↔ 方块数字 ID 的桥接**留接口预留位**，本期不实现。
3. 本期**只做引擎 + TDD 测试**，不做界面。
4. 初始种**代表性配方集（16 条 = 6 基础 + 5 木工具 + 5 石工具）**，足以覆盖引擎全部匹配规则；以后加配方只是改数据。

---

## 2. 范围

**本期做（In scope）**
- 最小项目脚手架（TypeScript strict + Vitest + ESLint/Prettier，含 core 隔离 lint 规则），让测试可跑——同时正式开启阶段 1 地基的"逻辑/测试工具链"部分。
- `src/core/item/`：物品身份模型 + 最小注册表。
- `src/core/crafting/`：配方数据 + 匹配引擎 + 纯函数 API。
- TDD 单测，覆盖所有匹配规则与边界。

**本期不做（Out of scope）**
- 合成界面 / DOM / 拖拽交互（无承载引擎）。
- Vite/Three 渲染工具链（做渲染层时再加）。
- 物品 ↔ 方块桥接、工具耐久、熔炼（smelting）、shift 一次合成满栈、配方优先级冲突解决（当前配方集无重叠）。
- item tag/谓词系统（方案 C，等出现多种木头/矿石再上）。

---

## 3. 物品模型（`src/core/item/`）

```ts
// types.ts
export type ItemId = string;                       // 如 'oak_planks' | 'stick' | 'wooden_pickaxe'
export interface ItemStack { item: ItemId; count: number; }
export interface ItemDef { id: ItemId; name: string; maxStack: number; }
```

- `maxStack` 默认 **64**，工具类为 **1**（对齐 MC）。
- `registry.ts`：登记本期配方涉及的物品（数据驱动，新增物品只改这里）。
- **预留**（本期不加字段）：将来物品可挂 `placesBlock?: blockId` 把物品与体素方块打通。

需登记的物品：`oak_log`、`oak_planks`、`stick`、`cobblestone`、`coal`、`crafting_table`、`chest`、`furnace`、`torch`，以及工具 `wooden_/stone_` × `pickaxe/axe/shovel/sword/hoe`。

---

## 4. 配方模型与数据（`src/core/crafting/`）

```ts
// types.ts
export type CraftGrid = (ItemStack | null)[][];     // N×N，N ∈ {2,3}
export interface RecipeResult { item: ItemId; count: number; }

export interface ShapedRecipe {
  type: 'shaped';
  pattern: string[];               // 紧凑图案（已去除全空的边行/列），每字符一格，' ' = 空
  key: Record<string, ItemId>;     // 符号 → 物品 id
  result: RecipeResult;
}
export interface ShapelessRecipe {
  type: 'shapeless';
  ingredients: ItemId[];           // 物品多重集（每项占一格）
  result: RecipeResult;
}
export type Recipe = ShapedRecipe | ShapelessRecipe;
```

### 配方清单（`recipes.ts`，全部对齐 Java 版；符号 `P`=主材料、`S`=木棍、`#`=同一材料）

| # | 名称 | 类型 | 图案 / 成分 | 产出 |
|---|---|---|---|---|
| 1 | 橡木板 | 无序 | `[oak_log]` | 4 × oak_planks |
| 2 | 木棍 | 有序 | `['#','#']`, `#=oak_planks` | 4 × stick |
| 3 | 工作台 | 有序 | `['##','##']`, `#=oak_planks` | 1 × crafting_table |
| 4 | 箱子 | 有序 | `['###','# #','###']`, `#=oak_planks` | 1 × chest |
| 5 | 熔炉 | 有序 | `['###','# #','###']`, `#=cobblestone` | 1 × furnace |
| 6 | 火把 | 有序 | `['C','S']`, `C=coal, S=stick` | 4 × torch |
| 7 | 木镐 | 有序 | `['PPP',' S ',' S ']` P=oak_planks | 1 × wooden_pickaxe |
| 8 | 木斧 | 有序 | `['PP','PS',' S']` | 1 × wooden_axe |
| 9 | 木锹 | 有序 | `['P','S','S']` | 1 × wooden_shovel |
| 10 | 木剑 | 有序 | `['P','P','S']` | 1 × wooden_sword |
| 11 | 木锄 | 有序 | `['PP',' S',' S']` | 1 × wooden_hoe |
| 12–16 | 石质工具 | 有序 | 同 7–11，但 `P=cobblestone` | 1 × stone_* |

> 斧/锄是不对称图案，匹配时**水平镜像也算**（见 §5），对齐 MC。

---

## 5. 匹配算法（`match.ts`，核心，严格对齐 MC）

输入：`CraftGrid`（2×2 或 3×3）。

**通用预处理**：求非空格的**包围盒（bounding box）**，裁出紧凑子网格。这一步自动实现 MC 的"配方可放在网格任意位置"（位置无关）。

**有序匹配（shaped）**
1. 把裁剪后的子网格映射成"物品 id 矩阵"。
2. 对每个 `ShapedRecipe`：若其 `pattern` 行列尺寸 == 子网格尺寸，逐格比对（图案符号经 `key` 解析出的物品 id 必须等于该格物品；图案空格处该格必须为空）。
3. **同时比对该 pattern 的水平镜像**（每行字符串反转）。命中任一即算匹配。
4. 每个非空格要求 `count ≥ 1`（合成消耗每格 1 个）。

**无序匹配（shapeless）**
1. 收集所有非空格的物品 id，构成**多重集**。
2. 若某 `ShapelessRecipe` 的 `ingredients` 多重集与之**完全相等**（同物品、同个数），即匹配。

**返回**：第一个命中的配方（本期配方集无重叠，顺序无歧义）；无命中返回 `null`。

### 对外纯函数 API
```ts
findRecipe(grid: CraftGrid): Recipe | null;
getCraftingResult(grid: CraftGrid): ItemStack | null;   // = findRecipe(grid)?.result ?? null
consume(grid: CraftGrid): CraftGrid;                     // 每个非空格 count-1 的新网格；扣到 0 的格变 null（不可变；背包据此扣减）
```
全部为纯函数，不可变（返回新数据，不改入参）。

---

## 6. 文件拆分（小而专注，单文件 < ~300 行）

```
src/core/item/types.ts        ItemId / ItemStack / ItemDef
src/core/item/registry.ts     物品数据
src/core/crafting/types.ts    Recipe(shaped|shapeless) / CraftGrid / RecipeResult
src/core/crafting/recipes.ts  §4 的 ~14–16 条配方（纯数据）
src/core/crafting/match.ts    裁剪 / 有序+镜像 / 无序 / findRecipe / getCraftingResult / consume
src/core/crafting/match.test.ts  TDD 测试
```

---

## 7. 测试计划（TDD，先写测试）

- **无序**：log → 4 板；log 放 2×2 / 3×3 任意一格都命中。
- **位置无关**：2×2 工作台配方放进 3×3 的任意角落都命中。
- **有序基本**：竖排 2 板 → 4 棍；环状 8 板 → 箱子、8 圆石 → 熔炉。
- **镜像**：木斧/木锄的镜像摆法也命中；其镜像不应误命中别的配方。
- **材料区分**：石镐图案用木板**不**命中木镐之外的；cobblestone 版产出 stone_*。
- **产出数量**：板 ×4、棍 ×4、火把 ×4，工具 ×1。
- **负例**：空网格 → null；乱放/未知组合 → null；数量不足（理论上 count 0）不命中。
- **consume**：每个非空格扣 1，扣到 0 变 null，空格不变；不改入参。

`render/` 层无需单测（本期也不涉及）。

---

## 8. 脚手架（最小，让测试能跑）

- `package.json`：锁版本 `typescript` / `vitest` / `eslint` / `prettier`（npm；ESM；ES2022）。
- `tsconfig.json`：`strict` 全开，禁 `any`。
- ESLint：`no-restricted-imports` 规则强制 `src/core/**` 不许 import `three` 与 `src/render/**`。
- `vitest` 配置；脚本 `test` / `typecheck` / `lint` / `format`。
- Vite / Three 等渲染工具链等做渲染层时再加（不在本期）。

---

## 9. 1:1 保真校验

- 每条配方的**形状与产出数量**对照官方 Minecraft Wiki 核对后再落 `recipes.ts`（log→4 板、2 板→4 棍、8 圆石→熔炉、煤+棍→4 火把、工具图案与镜像规则等）。
- 匹配规则（包围盒位置无关、有序水平镜像、无序多重集）对照 Wiki *Crafting* 条目确认。

---

## 10. 未来衔接的接口缝（本期只留位，不实现）

- 物品 ↔ 方块桥接（`placesBlock`），合成产物能放进体素世界。
- 合成界面：3×3 工作台 + 2×2 背包格 + 拖拽，复用本引擎的 `findRecipe/consume`。
- item tag 系统（多种木头/矿石时）、工具耐久、熔炼、shift 满栈合成、配方冲突优先级。
