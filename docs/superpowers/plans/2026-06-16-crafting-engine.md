# 合成引擎 实现计划（Crafting Engine）

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 实现合成引擎纯逻辑模块（item 注册表 + 配方数据 + 匹配引擎），并搭起最小 TS/Vitest/ESLint 脚手架，全程 TDD、无头单测。

**Architecture:** `src/core/**` 纯逻辑，禁 import `three`/`render`（ESLint 强制）。物品=字符串 id + 注册表；配方=MC 风格"图案+图例"(有序) / 多重集(无序)；匹配=包围盒裁剪(位置无关) + 有序水平镜像 + 无序多重集；全部纯函数。

**Tech Stack:** TypeScript 5（strict）、Vitest 1、ESLint 8 + @typescript-eslint 7、Prettier 3、npm、ESM、ES2022。

**依据 spec：** `docs/superpowers/specs/2026-06-16-crafting-system-design.md`

**提交约定：** 每个 commit 信息结尾加一行 `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`（下文示例省略该行）。在分支 `feature/crafting-system` 上开发。

---

## 文件结构

| 文件                                | 职责                                                           |
| ----------------------------------- | -------------------------------------------------------------- |
| `package.json`                      | 依赖锁版本 + 脚本（test/typecheck/lint/format）                |
| `tsconfig.json`                     | strict 全开，ES2022/ESM，noEmit                                |
| `vitest.config.ts`                  | 测试包含路径                                                   |
| `.eslintrc.cjs`                     | 通用规则 + `src/core/**` 禁 import three/render                |
| `.prettierrc.json`                  | 格式化配置                                                     |
| `src/core/item/types.ts`            | `ItemId` / `ItemStack` / `ItemDef`                             |
| `src/core/item/registry.ts`         | 物品定义 + `getItem`/`maxStack`/`hasItem`                      |
| `src/core/item/registry.test.ts`    | 注册表测试                                                     |
| `src/core/crafting/types.ts`        | `CraftGrid` / `Recipe`(shaped\|shapeless) / `RecipeResult`     |
| `src/core/crafting/recipes.ts`      | 16 条 1:1 配方数据                                             |
| `src/core/crafting/recipes.test.ts` | 配方数据完整性测试                                             |
| `src/core/crafting/match.ts`        | 裁剪/有序+镜像/无序/`findRecipe`/`getCraftingResult`/`consume` |
| `src/core/crafting/match.test.ts`   | 匹配引擎测试                                                   |

---

## Task 1: 最小脚手架与工具链

**Files:**

- Create: `package.json`, `tsconfig.json`, `vitest.config.ts`, `.eslintrc.cjs`, `.prettierrc.json`
- Test: `tests/smoke.test.ts`（验证后删除）

- [ ] **Step 1: 写 `package.json`**

```json
{
  "name": "mineworld",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "engines": { "node": ">=18.20" },
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit",
    "lint": "eslint . --ext .ts",
    "format": "prettier --write ."
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "7.13.0",
    "@typescript-eslint/parser": "7.13.0",
    "eslint": "8.57.0",
    "prettier": "3.3.2",
    "typescript": "5.4.5",
    "vitest": "1.6.0"
  }
}
```

- [ ] **Step 2: 写 `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true
  },
  "include": ["src", "tests"]
}
```

- [ ] **Step 3: 写 `vitest.config.ts`**

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
  },
});
```

- [ ] **Step 4: 写 `.eslintrc.cjs`（含 core 隔离规则）**

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: { node: true, es2022: true },
  parserOptions: { ecmaVersion: 2022, sourceType: 'module' },
  ignorePatterns: ['dist', 'node_modules'],
  overrides: [
    {
      // 架构铁律：core 不许依赖渲染层与 three
      files: ['src/core/**/*.ts'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: [{ name: 'three', message: 'core 是纯逻辑，禁止 import three' }],
            patterns: [
              { group: ['**/render/**', '**/render'], message: 'core 禁止依赖 render 层' },
            ],
          },
        ],
      },
    },
  ],
};
```

- [ ] **Step 5: 写 `.prettierrc.json`**

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

- [ ] **Step 6: 安装依赖**

Run: `npm install`
Expected: 成功，生成 `node_modules/` 与 `package-lock.json`，无 ERR。

- [ ] **Step 7: 写冒烟测试 `tests/smoke.test.ts`**

```ts
import { describe, it, expect } from 'vitest';

describe('smoke', () => {
  it('toolchain runs', () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 8: 跑测试确认工具链可用**

Run: `npm test`
Expected: PASS，1 个测试通过。

- [ ] **Step 9: 删除冒烟测试**

Run: `rm tests/smoke.test.ts`

- [ ] **Step 10: 提交脚手架**

```bash
git add package.json package-lock.json tsconfig.json vitest.config.ts .eslintrc.cjs .prettierrc.json
git commit -m "chore: 最小 TS/Vitest/ESLint 脚手架（含 core 隔离 lint 规则）"
```

---

## Task 2: 物品类型与注册表

**Files:**

- Create: `src/core/item/types.ts`, `src/core/item/registry.ts`, `src/core/item/registry.test.ts`

- [ ] **Step 1: 写 `src/core/item/types.ts`**

```ts
export type ItemId = string;

export interface ItemStack {
  item: ItemId;
  count: number;
}

export interface ItemDef {
  id: ItemId;
  name: string;
  maxStack: number;
}
```

- [ ] **Step 2: 写失败测试 `src/core/item/registry.test.ts`**

```ts
import { describe, it, expect } from 'vitest';
import { getItem, maxStack, hasItem } from './registry';

describe('item registry', () => {
  it('returns a known item def', () => {
    expect(getItem('oak_planks')).toEqual({
      id: 'oak_planks',
      name: 'Oak Planks',
      maxStack: 64,
    });
  });

  it('tools stack to 1, eggs to 16, blocks to 64', () => {
    expect(maxStack('wooden_pickaxe')).toBe(1);
    expect(maxStack('egg')).toBe(16);
    expect(maxStack('cobblestone')).toBe(64);
  });

  it('hasItem reports membership; getItem throws on unknown', () => {
    expect(hasItem('stick')).toBe(true);
    expect(hasItem('nonsense')).toBe(false);
    expect(() => getItem('nonsense')).toThrow(/Unknown item/);
  });
});
```

- [ ] **Step 3: 跑测试确认失败**

Run: `npx vitest run src/core/item/registry.test.ts`
Expected: FAIL（`registry` 模块不存在 / 无法解析导入）。

- [ ] **Step 4: 写实现 `src/core/item/registry.ts`**

```ts
import type { ItemDef, ItemId } from './types';

function def(id: ItemId, name: string, maxStack = 64): ItemDef {
  return { id, name, maxStack };
}

const DEFS: ItemDef[] = [
  def('oak_log', 'Oak Log'),
  def('oak_planks', 'Oak Planks'),
  def('cobblestone', 'Cobblestone'),
  def('crafting_table', 'Crafting Table'),
  def('chest', 'Chest'),
  def('furnace', 'Furnace'),
  def('torch', 'Torch'),
  def('stick', 'Stick'),
  def('coal', 'Coal'),
  def('feather', 'Feather'),
  def('raw_chicken', 'Raw Chicken'),
  def('cooked_chicken', 'Cooked Chicken'),
  def('egg', 'Egg', 16),
  def('wooden_pickaxe', 'Wooden Pickaxe', 1),
  def('wooden_axe', 'Wooden Axe', 1),
  def('wooden_shovel', 'Wooden Shovel', 1),
  def('wooden_sword', 'Wooden Sword', 1),
  def('wooden_hoe', 'Wooden Hoe', 1),
  def('stone_pickaxe', 'Stone Pickaxe', 1),
  def('stone_axe', 'Stone Axe', 1),
  def('stone_shovel', 'Stone Shovel', 1),
  def('stone_sword', 'Stone Sword', 1),
  def('stone_hoe', 'Stone Hoe', 1),
];

export const ITEMS: ReadonlyMap<ItemId, ItemDef> = new Map(DEFS.map((d) => [d.id, d]));

export function getItem(id: ItemId): ItemDef {
  const d = ITEMS.get(id);
  if (!d) throw new Error(`Unknown item: ${id}`);
  return d;
}

export function maxStack(id: ItemId): number {
  return getItem(id).maxStack;
}

export function hasItem(id: ItemId): boolean {
  return ITEMS.has(id);
}
```

- [ ] **Step 5: 跑测试确认通过**

Run: `npx vitest run src/core/item/registry.test.ts`
Expected: PASS（3 个测试）。

- [ ] **Step 6: 提交**

```bash
git add src/core/item
git commit -m "feat(item): 物品类型与注册表（maxStack：方块64/蛋16/工具1）"
```

---

## Task 3: 配方类型与数据

**Files:**

- Create: `src/core/crafting/types.ts`, `src/core/crafting/recipes.ts`, `src/core/crafting/recipes.test.ts`

- [ ] **Step 1: 写 `src/core/crafting/types.ts`**

```ts
import type { ItemId, ItemStack } from '../item/types';

export type CraftGrid = (ItemStack | null)[][];

export interface RecipeResult {
  item: ItemId;
  count: number;
}

export interface ShapedRecipe {
  type: 'shaped';
  pattern: string[]; // 紧凑图案（已去全空边行/列），每字符一格，' ' = 空
  key: Record<string, ItemId>;
  result: RecipeResult;
}

export interface ShapelessRecipe {
  type: 'shapeless';
  ingredients: ItemId[];
  result: RecipeResult;
}

export type Recipe = ShapedRecipe | ShapelessRecipe;
```

- [ ] **Step 2: 写失败测试 `src/core/crafting/recipes.test.ts`**

```ts
import { describe, it, expect } from 'vitest';
import { RECIPES } from './recipes';
import { hasItem } from '../item/registry';

describe('recipe data', () => {
  it('contains all 16 recipes', () => {
    expect(RECIPES).toHaveLength(16);
  });

  it('every referenced item id exists in the registry', () => {
    for (const r of RECIPES) {
      expect(hasItem(r.result.item)).toBe(true);
      if (r.type === 'shapeless') {
        for (const id of r.ingredients) expect(hasItem(id)).toBe(true);
      } else {
        for (const id of Object.values(r.key)) expect(hasItem(id)).toBe(true);
      }
    }
  });

  it('produces 4 planks from one log (shapeless)', () => {
    const planks = RECIPES.find((r) => r.type === 'shapeless' && r.result.item === 'oak_planks');
    expect(planks?.result.count).toBe(4);
  });
});
```

- [ ] **Step 3: 跑测试确认失败**

Run: `npx vitest run src/core/crafting/recipes.test.ts`
Expected: FAIL（`recipes` 模块不存在）。

- [ ] **Step 4: 写实现 `src/core/crafting/recipes.ts`**

```ts
import type { ItemId } from '../item/types';
import type { Recipe, ShapedRecipe } from './types';

// MC 工具图案（P=主材料，S=木棍，' '=空）；存为紧凑形式
const PICKAXE = ['PPP', ' S ', ' S '];
const AXE = ['PP', 'PS', ' S'];
const SHOVEL = ['P', 'S', 'S'];
const SWORD = ['P', 'P', 'S'];
const HOE = ['PP', ' S', ' S'];

function toolRecipe(pattern: string[], material: ItemId, result: ItemId): ShapedRecipe {
  return {
    type: 'shaped',
    pattern,
    key: { P: material, S: 'stick' },
    result: { item: result, count: 1 },
  };
}

export const RECIPES: Recipe[] = [
  { type: 'shapeless', ingredients: ['oak_log'], result: { item: 'oak_planks', count: 4 } },
  {
    type: 'shaped',
    pattern: ['#', '#'],
    key: { '#': 'oak_planks' },
    result: { item: 'stick', count: 4 },
  },
  {
    type: 'shaped',
    pattern: ['##', '##'],
    key: { '#': 'oak_planks' },
    result: { item: 'crafting_table', count: 1 },
  },
  {
    type: 'shaped',
    pattern: ['###', '# #', '###'],
    key: { '#': 'oak_planks' },
    result: { item: 'chest', count: 1 },
  },
  {
    type: 'shaped',
    pattern: ['###', '# #', '###'],
    key: { '#': 'cobblestone' },
    result: { item: 'furnace', count: 1 },
  },
  {
    type: 'shaped',
    pattern: ['C', 'S'],
    key: { C: 'coal', S: 'stick' },
    result: { item: 'torch', count: 4 },
  },
  toolRecipe(PICKAXE, 'oak_planks', 'wooden_pickaxe'),
  toolRecipe(AXE, 'oak_planks', 'wooden_axe'),
  toolRecipe(SHOVEL, 'oak_planks', 'wooden_shovel'),
  toolRecipe(SWORD, 'oak_planks', 'wooden_sword'),
  toolRecipe(HOE, 'oak_planks', 'wooden_hoe'),
  toolRecipe(PICKAXE, 'cobblestone', 'stone_pickaxe'),
  toolRecipe(AXE, 'cobblestone', 'stone_axe'),
  toolRecipe(SHOVEL, 'cobblestone', 'stone_shovel'),
  toolRecipe(SWORD, 'cobblestone', 'stone_sword'),
  toolRecipe(HOE, 'cobblestone', 'stone_hoe'),
];
```

- [ ] **Step 5: 跑测试确认通过**

Run: `npx vitest run src/core/crafting/recipes.test.ts`
Expected: PASS（3 个测试）。

- [ ] **Step 6: 提交**

```bash
git add src/core/crafting/types.ts src/core/crafting/recipes.ts src/core/crafting/recipes.test.ts
git commit -m "feat(crafting): 配方类型与 16 条 1:1 配方数据"
```

---

## Task 4: 匹配引擎 — 无序（shapeless）切片

**Files:**

- Create: `src/core/crafting/match.ts`, `src/core/crafting/match.test.ts`

- [ ] **Step 1: 写失败测试 `src/core/crafting/match.test.ts`**

```ts
import { describe, it, expect } from 'vitest';
import type { CraftGrid } from './types';
import { findRecipe, getCraftingResult } from './match';

function stack(item: string, count = 1) {
  return { item, count };
}

describe('shapeless matching', () => {
  it('one log anywhere in a 2x2 grid -> 4 planks', () => {
    const grid: CraftGrid = [
      [null, stack('oak_log')],
      [null, null],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'oak_planks', count: 4 });
  });

  it('empty grid -> null', () => {
    const grid: CraftGrid = [
      [null, null],
      [null, null],
    ];
    expect(findRecipe(grid)).toBeNull();
  });
});
```

- [ ] **Step 2: 跑测试确认失败**

Run: `npx vitest run src/core/crafting/match.test.ts`
Expected: FAIL（`match` 模块不存在）。

- [ ] **Step 3: 写实现 `src/core/crafting/match.ts`（仅无序）**

```ts
import type { ItemId, ItemStack } from '../item/types';
import type { CraftGrid, Recipe, ShapelessRecipe } from './types';
import { RECIPES } from './recipes';

// 只有 count>=1 的格子才算"有物品"
function cellItem(stack: ItemStack | null): ItemId | null {
  return stack && stack.count >= 1 ? stack.item : null;
}

function collectItems(grid: CraftGrid): ItemId[] {
  const ids: ItemId[] = [];
  for (const row of grid) {
    for (const stack of row) {
      const item = cellItem(stack);
      if (item) ids.push(item);
    }
  }
  return ids;
}

function multiset(ids: ItemId[]): Map<ItemId, number> {
  const m = new Map<ItemId, number>();
  for (const id of ids) m.set(id, (m.get(id) ?? 0) + 1);
  return m;
}

function matchesShapeless(recipe: ShapelessRecipe, ids: ItemId[]): boolean {
  if (recipe.ingredients.length !== ids.length) return false;
  const a = multiset(recipe.ingredients);
  const b = multiset(ids);
  if (a.size !== b.size) return false;
  for (const [k, v] of a) if (b.get(k) !== v) return false;
  return true;
}

export function findRecipe(grid: CraftGrid): Recipe | null {
  const ids = collectItems(grid);
  if (ids.length === 0) return null;
  for (const recipe of RECIPES) {
    if (recipe.type === 'shapeless' && matchesShapeless(recipe, ids)) return recipe;
  }
  return null;
}

export function getCraftingResult(grid: CraftGrid): ItemStack | null {
  const recipe = findRecipe(grid);
  return recipe ? { item: recipe.result.item, count: recipe.result.count } : null;
}
```

- [ ] **Step 4: 跑测试确认通过**

Run: `npx vitest run src/core/crafting/match.test.ts`
Expected: PASS（2 个测试）。

- [ ] **Step 5: 提交**

```bash
git add src/core/crafting/match.ts src/core/crafting/match.test.ts
git commit -m "feat(crafting): 无序匹配 findRecipe/getCraftingResult"
```

---

## Task 5: 匹配引擎 — 有序 + 位置无关 + 镜像

**Files:**

- Modify: `src/core/crafting/match.ts`（扩成完整版）
- Modify: `src/core/crafting/match.test.ts`（追加有序测试）

- [ ] **Step 1: 追加失败测试到 `src/core/crafting/match.test.ts`**

在文件末尾追加：

```ts
describe('shaped matching', () => {
  it('two planks stacked -> 4 sticks', () => {
    const grid: CraftGrid = [
      [stack('oak_planks'), null],
      [stack('oak_planks'), null],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'stick', count: 4 });
  });

  it('2x2 planks -> crafting table, in any corner of a 3x3 grid (position independent)', () => {
    const grid: CraftGrid = [
      [null, null, null],
      [null, stack('oak_planks'), stack('oak_planks')],
      [null, stack('oak_planks'), stack('oak_planks')],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'crafting_table', count: 1 });
  });

  it('ring of 8 cobblestone -> furnace', () => {
    const c = () => stack('cobblestone');
    const grid: CraftGrid = [
      [c(), c(), c()],
      [c(), null, c()],
      [c(), c(), c()],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'furnace', count: 1 });
  });

  it('matches the mirror image of an asymmetric tool (axe)', () => {
    // 标准木斧: ['PP',' PS? ...]; 这里摆其水平镜像
    const P = () => stack('oak_planks');
    const S = () => stack('stick');
    const grid: CraftGrid = [
      [P(), P()],
      [S(), P()],
      [S(), null],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'wooden_axe', count: 1 });
  });
});
```

- [ ] **Step 2: 跑测试确认新测试失败**

Run: `npx vitest run src/core/crafting/match.test.ts`
Expected: FAIL（有序配方暂未实现，shaped 测试返回 null）。

- [ ] **Step 3: 用完整版替换 `src/core/crafting/match.ts`**

```ts
import type { ItemId, ItemStack } from '../item/types';
import type { CraftGrid, Recipe, ShapedRecipe, ShapelessRecipe } from './types';
import { RECIPES } from './recipes';

type Cell = ItemId | null;
type Matrix = Cell[][];

// 只有 count>=1 的格子才算"有物品"
function cellItem(stack: ItemStack | null): Cell {
  return stack && stack.count >= 1 ? stack.item : null;
}

function toMatrix(grid: CraftGrid): Matrix {
  return grid.map((row) => row.map(cellItem));
}

function collectItems(grid: CraftGrid): ItemId[] {
  const ids: ItemId[] = [];
  for (const row of grid) {
    for (const stack of row) {
      const item = cellItem(stack);
      if (item) ids.push(item);
    }
  }
  return ids;
}

// 非空格的紧凑包围盒；全空返回 null。裁剪即实现"配方可放任意位置"
function trim(m: Matrix): Matrix | null {
  let minR = Infinity;
  let maxR = -1;
  let minC = Infinity;
  let maxC = -1;
  for (let r = 0; r < m.length; r++) {
    for (let c = 0; c < m[r].length; c++) {
      if (m[r][c] !== null) {
        if (r < minR) minR = r;
        if (r > maxR) maxR = r;
        if (c < minC) minC = c;
        if (c > maxC) maxC = c;
      }
    }
  }
  if (maxR === -1) return null;
  const out: Matrix = [];
  for (let r = minR; r <= maxR; r++) out.push(m[r].slice(minC, maxC + 1));
  return out;
}

function patternMatrix(recipe: ShapedRecipe): Matrix {
  return recipe.pattern.map((row) =>
    Array.from(row, (ch) => (ch === ' ' ? null : recipe.key[ch] ?? null)),
  );
}

function mirror(m: Matrix): Matrix {
  return m.map((row) => [...row].reverse());
}

function equals(a: Matrix, b: Matrix): boolean {
  if (a.length !== b.length) return false;
  for (let r = 0; r < a.length; r++) {
    if (a[r].length !== b[r].length) return false;
    for (let c = 0; c < a[r].length; c++) {
      if (a[r][c] !== b[r][c]) return false;
    }
  }
  return true;
}

function matchesShaped(recipe: ShapedRecipe, input: Matrix): boolean {
  const pattern = trim(patternMatrix(recipe));
  if (!pattern) return false;
  return equals(pattern, input) || equals(mirror(pattern), input);
}

function multiset(ids: ItemId[]): Map<ItemId, number> {
  const m = new Map<ItemId, number>();
  for (const id of ids) m.set(id, (m.get(id) ?? 0) + 1);
  return m;
}

function matchesShapeless(recipe: ShapelessRecipe, ids: ItemId[]): boolean {
  if (recipe.ingredients.length !== ids.length) return false;
  const a = multiset(recipe.ingredients);
  const b = multiset(ids);
  if (a.size !== b.size) return false;
  for (const [k, v] of a) if (b.get(k) !== v) return false;
  return true;
}

export function findRecipe(grid: CraftGrid): Recipe | null {
  const ids = collectItems(grid);
  if (ids.length === 0) return null;
  const input = trim(toMatrix(grid));
  for (const recipe of RECIPES) {
    if (recipe.type === 'shaped') {
      if (input && matchesShaped(recipe, input)) return recipe;
    } else if (matchesShapeless(recipe, ids)) {
      return recipe;
    }
  }
  return null;
}

export function getCraftingResult(grid: CraftGrid): ItemStack | null {
  const recipe = findRecipe(grid);
  return recipe ? { item: recipe.result.item, count: recipe.result.count } : null;
}
```

- [ ] **Step 4: 跑全部匹配测试确认通过**

Run: `npx vitest run src/core/crafting/match.test.ts`
Expected: PASS（6 个测试）。

- [ ] **Step 5: 提交**

```bash
git add src/core/crafting/match.ts src/core/crafting/match.test.ts
git commit -m "feat(crafting): 有序匹配（包围盒位置无关 + 水平镜像）"
```

---

## Task 6: `consume` + 负例 + 工具/材料区分

**Files:**

- Modify: `src/core/crafting/match.ts`（加 `consume`）
- Modify: `src/core/crafting/match.test.ts`（追加测试）

- [ ] **Step 1: 追加失败测试到 `src/core/crafting/match.test.ts`**

在文件末尾追加：

```ts
import { consume } from './match';

describe('consume', () => {
  it('decrements every non-empty cell by 1; cells reaching 0 become null', () => {
    const grid: CraftGrid = [
      [stack('oak_planks', 1), stack('oak_planks', 3)],
      [null, null],
    ];
    expect(consume(grid)).toEqual([
      [null, { item: 'oak_planks', count: 2 }],
      [null, null],
    ]);
  });

  it('does not mutate the input grid', () => {
    const grid: CraftGrid = [[stack('oak_planks', 2)]];
    consume(grid);
    expect(grid[0][0]).toEqual({ item: 'oak_planks', count: 2 });
  });
});

describe('negative & material cases', () => {
  it('unknown combination -> null', () => {
    const grid: CraftGrid = [
      [stack('oak_planks'), stack('coal')],
      [null, null],
    ];
    expect(findRecipe(grid)).toBeNull();
  });

  it('same shape, different material -> stone variant', () => {
    const grid: CraftGrid = [
      [stack('cobblestone'), stack('cobblestone'), stack('cobblestone')],
      [null, stack('stick'), null],
      [null, stack('stick'), null],
    ];
    expect(getCraftingResult(grid)).toEqual({ item: 'stone_pickaxe', count: 1 });
  });
});
```

- [ ] **Step 2: 跑测试确认 `consume` 测试失败**

Run: `npx vitest run src/core/crafting/match.test.ts`
Expected: FAIL（`consume` 未导出）。

- [ ] **Step 3: 在 `src/core/crafting/match.ts` 末尾追加 `consume`**

```ts
export function consume(grid: CraftGrid): CraftGrid {
  return grid.map((row) =>
    row.map((stack) => {
      if (!stack || stack.count < 1) return null;
      const count = stack.count - 1;
      return count >= 1 ? { item: stack.item, count } : null;
    }),
  );
}
```

- [ ] **Step 4: 跑测试确认全部通过**

Run: `npx vitest run src/core/crafting/match.test.ts`
Expected: PASS（10 个测试）。

- [ ] **Step 5: 提交**

```bash
git add src/core/crafting/match.ts src/core/crafting/match.test.ts
git commit -m "feat(crafting): consume 扣减 + 负例/材料区分测试"
```

---

## Task 7: 全量验证（typecheck + lint + 全测试）

**Files:** 无新增；跑全套质量门。

- [ ] **Step 1: 类型检查**

Run: `npm run typecheck`
Expected: 无错误退出（exit 0）。

- [ ] **Step 2: Lint（含 core 隔离规则）**

Run: `npm run lint`
Expected: 无错误。若报 core 隔离误报，检查是否误 import 了 three/render（本模块不应有）。

- [ ] **Step 3: 全部单测**

Run: `npm test`
Expected: PASS，全部测试通过（item 3 + recipes 3 + match 10 = 16）。

- [ ] **Step 4: 收尾提交（若 lint/format 有改动）**

```bash
npm run format
git add -A
git commit -m "chore(crafting): 通过 typecheck/lint/format 全量质量门"
```

---

## 自审（写完计划后对照 spec）

**1. spec 覆盖：**

- 物品模型(§3) → Task 2 ✅
- 配方数据 16 条(§4) → Task 3 ✅
- 有序+镜像、无序、包围盒位置无关(§5) → Task 5 ✅
- `findRecipe`/`getCraftingResult`/`consume`(§5) → Task 4/5/6 ✅
- 文件拆分(§6) → 文件结构表 ✅
- 测试项(§7)：2x2/3x3、位置无关、镜像、材料区分、负例、产量、consume → Task 4/5/6 ✅
- 脚手架(§8) → Task 1 ✅
- 1:1 保真(§9)：配方形状/产量按 spec 表 → Task 3 数据 ✅

**2. 占位符扫描：** 无 TBD/TODO；每步含完整代码与命令。✅

**3. 类型一致性：** `ItemId/ItemStack/ItemDef/CraftGrid/Recipe/ShapedRecipe/ShapelessRecipe/RecipeResult` 跨任务一致；`findRecipe/getCraftingResult/consume/getItem/maxStack/hasItem/RECIPES` 命名一致。✅

> 注：spec §9 要求配方形状/产量对照官方 Wiki 复核——执行 Task 3 时确认木斧/木锄等不对称图案与镜像规则无误。
