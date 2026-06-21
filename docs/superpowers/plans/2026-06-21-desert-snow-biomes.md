# 沙漠 + 雪原群系（含尸壳）实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 给世界加沙漠/雪原两个群系（气温驱动）+ 沙漠专属怪尸壳，对齐 MC 1.12。

**Architecture:** 新增 `biome.ts`（气温噪声→群系判定）供 `terrain.ts` 按列查询，决定地表/填充/装饰；新增 6 个方块（沙石/仙人掌/冰/雪层/云杉原木/云杉叶），图集 4×5→4×7；行为（仙人掌伤害、冰打滑、尸壳日间免疫+饥饿近似）走纯函数 + 既有 tick。

**Tech Stack:** TypeScript + Vite + Vitest；THREE.js（渲染）；Python/Pillow（`gen_textures.py` 程序生成贴图）。

## Global Constraints

- 目标还原版本 **Minecraft 1.12**（数值/内容以 1.12 为准；没有 1.13+ 新方块/机制）。
- 20 TPS 模拟刻；方块硬度/掉落对齐 MC 真实值。
- 纯逻辑模块（biome/registry/survival/物理）**禁止 import three/render**。
- 贴图风格：鲜艳卡通（高饱和、干净、强对比、AO 立体感），与现有 `gen_textures.py` 一致。
- 全程 TDD：先写失败测试→看它失败→最小实现→看通过→提交。每个 Task 末尾 `npx vitest run` + 该任务相关测试必须绿。
- 在**隔离 worktree** 实现（`gen_textures.py`/mesher/render 正被另一会话改动）；图集行列数改动须同步 `gen_textures.py` / `mesher.ts` / `DropRenderer.ts` 三处。
- 提交时只 `git add` 本任务涉及的文件，避免卷入并发会话的未提交改动。

---

## File Structure

| 文件 | 责任 |
|---|---|
| `src/core/worldgen/biome.ts`（新） | 气温噪声 + `Biome` 枚举 + `biomeAt` + `BIOME_CONFIG`（纯逻辑） |
| `src/core/worldgen/biome.test.ts`（新） | biome 确定性 + 分带测试 |
| `src/core/blocks/registry.ts`（改） | 新方块 `T` 索引 + `BLOCKS` 条目 + 常量 + `blockSlipperiness`/`isCactus` 等 helper |
| `src/core/blocks/registry.test.ts`（改） | 新方块注册 + helper 测试 |
| `tools/textures/gen_textures.py`（改） | 6~8 个新 tile 绘制函数 + ATLAS_ORDER + ATLAS_COLS/ROWS=4/7 |
| `src/core/mesh/mesher.ts`（改） | `ATLAS_ROWS=7`；雪层薄四边形特判；云杉叶并入 cutout；冰半透明批 |
| `src/render/DropRenderer.ts`（改） | `ATLAS_ROWS=7`（掉落物图标用对图集格） |
| `src/core/worldgen/terrain.ts`（改） | `generateChunk` 按 biome 选地表/填充 + 仙人掌/云杉/雪层/结冰装饰 |
| `src/core/worldgen/terrain.test.ts`（改） | 沙漠/雪原列组成、仙人掌只在沙、冰只在雪原水面 |
| `src/core/physics/player.ts`（改） | 水平摩擦按脚下方块取滑度（冰打滑） |
| `src/core/physics/playerSlip.test.ts`（新） | 冰滑度 > 普通、移动公式不回归 |
| `src/core/survival/cactus.ts`（新） | `touchesCactus(pos,getBlock)` 纯函数 |
| `src/core/survival/cactus.test.ts`（新） | 贴住仙人掌=true、隔空=false |
| `src/core/entity/mob.ts`（改） | `'husk'` 加入 `MobKind` + `MOB_DEFS` + `sunImmune` 标志 |
| `src/core/entity/hostileAi.ts`（改） | 日晒掉血改 `!def.sunImmune`；尸壳命中带 hunger 标记 |
| `src/core/entity/hostileAi.test.ts`（改） | 尸壳 sunlit 不掉血；苦力怕仍不掉血 |
| `src/core/entity/mobSpawn.ts`（改） | 沙漠群系刷尸壳替代僵尸（查 `biomeAt`） |
| `src/render/mobTextures.ts`（改） | 尸壳沙色贴图 |
| `src/render/MobRenderer.ts`（改） | 尸壳复用僵尸盒模型 |
| `src/game/Game.ts`（改） | 每刻调 `touchesCactus`→掉血；尸壳命中额外加 exhaustion |

---

# Phase 1 — 新方块基础（贴图 + 图集 + 注册表 + 渲染）

> 产出：6 个新方块存在、能渲染、能放/挖。后续阶段依赖它们的 id/索引。

### Task 1.1：图集扩到 4×7 + 注册表占位（先打通维度）

**Files:**
- Modify: `tools/textures/gen_textures.py`（ATLAS_COLS/ROWS、ATLAS_ORDER 末尾追加占位名）
- Modify: `src/core/mesh/mesher.ts:9`（`ATLAS_ROWS = 5` → `7`）
- Modify: `src/render/DropRenderer.ts`（同处 ATLAS_ROWS）
- Modify: `src/core/blocks/registry.ts`（`T` 表加新 tile 索引 18..23）

**Interfaces:**
- Produces: `T.sandstone=18, T.cactus=19, T.ice=20, T.snow=21, T.spruce_log_side=22, T.spruce_leaves=23`（若 cactus/spruce 需 top 另占，按实际追加并相应增大图集到 4×7=28，最多 28 格）

- [ ] **Step 1：确认现有图集维度引用处**

Run: `grep -rn "ATLAS_ROWS\|ATLAS_COLS\|ATLAS_ORDER" src tools`
Expected: 命中 `gen_textures.py`、`mesher.ts`、`DropRenderer.ts`、`registry.ts` 注释。逐处准备改。

- [ ] **Step 2：改 `mesher.ts` 与 `DropRenderer.ts` 的 `ATLAS_ROWS` 为 7**

`src/core/mesh/mesher.ts`：
```ts
const ATLAS_COLS = 4;
const ATLAS_ROWS = 7; // 4×7=28 槽（18..23 为沙漠/雪原新方块）；与 gen_textures.py、DropRenderer 同步
```
`DropRenderer.ts` 同名常量同改为 7。

- [ ] **Step 3：`registry.ts` 的 `T` 表追加新索引**

```ts
  gravel: 16,
  grass_plant: 17,
  sandstone: 18,
  cactus: 19,
  ice: 20,
  snow: 21,        // 雪层贴图
  spruce_log: 22,  // 云杉树皮（侧）；顶面复用 oak_log_top 省格
  spruce_leaves: 23,
```

- [ ] **Step 4：`gen_textures.py` 改图集维度 + ATLAS_ORDER 追加**

`ATLAS_COLS, ATLAS_ROWS = 4, 7`；`ATLAS_ORDER` 末尾按上面顺序追加 `'sandstone','cactus','ice','snow','spruce_log','spruce_leaves'`（先不画也能跑：缺图为透明，Step 在 Task 1.2 填）。

- [ ] **Step 5：跑现有测试确认无回归**

Run: `npx vitest run src/core/mesh src/core/blocks`
Expected: PASS（维度改动不破坏现有 mesh/registry 测试；UV 仍对齐——现有 tile 0..17 行号不变，因为按 `tile/COLS` 算行，新行只在底部）。

- [ ] **Step 6：提交**
```bash
git add src/core/mesh/mesher.ts src/render/DropRenderer.ts src/core/blocks/registry.ts tools/textures/gen_textures.py
git commit -m "chore(atlas): 图集扩到 4×7，预留沙漠/雪原 6 个新 tile 索引"
```

---

### Task 1.2：6 个新方块贴图（gen_textures.py）

**Files:**
- Modify: `tools/textures/gen_textures.py`（新增绘制函数 + 注册到 `BLOCKS`）
- Regenerate: `public/textures/atlas.png` + `public/textures/blocks/*.png`

**贴图设计（16×16，卡通：高饱和 + 顶亮底暗 AO）：**
- `sandstone`：米黄 `#d8c89a` 底 + 顶部一条更浅横带 + 底部细横纹（沉积层感）。
- `cactus`：饱和绿 `#3f7d2e`，竖直方向略亮中线 + 两侧暗边；点缀几个白/黄小刺点。
- `ice`：浅蓝青 `#9fd0e8` 半透感（实际 alpha 留给渲染），斜向高光条。
- `snow`：近白 `#f4f8fb` + 极淡蓝阴影颗粒（别纯白死板）。
- `spruce_log`：深褐 `#43342a` 竖条树皮纹（比 oak 更深更冷）。
- `spruce_leaves`：深蓝绿 `#274d33`，比 oak_leaves 更暗更冷，带镂空噪点（cutout 用）。

- [ ] **Step 1：仿现有风格写一个绘制函数（以 sandstone 为范例）**

参照文件内现有 `dirt(rng)`/`stone(rng)` 等的写法（`Image.new`、逐像素、`rng` 取自 per-block seed）：
```python
def sandstone(rng):
    im = Image.new("RGBA", (S, S), (216, 200, 154, 255))  # 米黄底
    for y in range(S):
        for x in range(S):
            n = rng.randint(-10, 10)
            c = (216 + n, 200 + n, 154 + n, 255)
            im.putpixel((x, y), tuple(max(0, min(255, v)) for v in c))
    for x in range(S):  # 顶亮带 + 底暗纹
        im.putpixel((x, 0), (236, 222, 180, 255))
        im.putpixel((x, S - 1), (188, 172, 130, 255))
    return im
```
其余 5 个按上面设计同法实现（`cactus`、`ice`、`snow`、`spruce_log`、`spruce_leaves`）；`spruce_leaves` 像 `oak_leaves` 那样留透明噪点（cutout）。

- [ ] **Step 2：把 6 个函数注册进 `BLOCKS` 列表**

在 `BLOCKS = [...]` 末尾追加 `("sandstone", sandstone), ("cactus", cactus), ("ice", ice), ("snow", snow), ("spruce_log", spruce_log), ("spruce_leaves", spruce_leaves),`（名字须与 ATLAS_ORDER 一致）。

- [ ] **Step 3：运行脚本重建图集**

Run: `python3 tools/textures/gen_textures.py`
Expected: 重写 `public/textures/atlas.png`（4×7）+ 各 `public/textures/blocks/*.png`；无报错。
（人工可选：打开 `tools/textures/_preview.png` 目测 6 个新图。）

- [ ] **Step 4：提交**
```bash
git add tools/textures/gen_textures.py public/textures/atlas.png public/textures/blocks/
git commit -m "feat(textures): 沙石/仙人掌/冰/雪/云杉原木/云杉叶 6 个新方块贴图（1.12 卡通）"
```

---

### Task 1.3：注册表方块定义 + helper（含滑度/仙人掌判定）

**Files:**
- Modify: `src/core/blocks/registry.ts`
- Test: `src/core/blocks/registry.test.ts`

**Interfaces:**
- Produces：
  - 常量 `SANDSTONE=18, CACTUS=19, ICE=20, SNOW_LAYER=21, SPRUCE_LOG=22, SPRUCE_LEAVES=23`
  - `blockSlipperiness(id:number):number`（冰 0.98，其余 0.6）
  - `isCactus(id:number):boolean`
  - `SPRUCE_LEAVES` 并入 `isCutoutId`；`SNOW_LAYER` 并入 `isPlantId`（走薄四边形特判、非实心可穿、瞬破）

- [ ] **Step 1：写失败测试**

`src/core/blocks/registry.test.ts` 追加：
```ts
import {
  BLOCKS, isCutoutId, isPlantId, isSolidId,
  SANDSTONE, CACTUS, ICE, SNOW_LAYER, SPRUCE_LOG, SPRUCE_LEAVES,
  blockSlipperiness, isCactus,
} from './registry';

describe('沙漠/雪原新方块', () => {
  it('注册了 6 个新方块且名字正确', () => {
    expect(BLOCKS[SANDSTONE].name).toBe('sandstone');
    expect(BLOCKS[CACTUS].name).toBe('cactus');
    expect(BLOCKS[ICE].name).toBe('ice');
    expect(BLOCKS[SNOW_LAYER].name).toBe('snow_layer');
    expect(BLOCKS[SPRUCE_LOG].name).toBe('spruce_log');
    expect(BLOCKS[SPRUCE_LEAVES].name).toBe('spruce_leaves');
  });
  it('冰打滑、其余正常摩擦', () => {
    expect(blockSlipperiness(ICE)).toBeGreaterThan(blockSlipperiness(1)); // 冰 > 石
    expect(blockSlipperiness(1)).toBeCloseTo(0.6, 5);
    expect(blockSlipperiness(ICE)).toBeCloseTo(0.98, 5);
  });
  it('云杉叶是镂空、雪层是可穿草类、仙人掌可判定', () => {
    expect(isCutoutId(SPRUCE_LEAVES)).toBe(true);
    expect(isPlantId(SNOW_LAYER)).toBe(true);
    expect(isSolidId(SNOW_LAYER)).toBe(false); // 装饰薄层可穿
    expect(isCactus(CACTUS)).toBe(true);
    expect(isCactus(1)).toBe(false);
  });
});
```

- [ ] **Step 2：运行看失败**

Run: `npx vitest run src/core/blocks/registry.test.ts`
Expected: FAIL（常量/helper 未定义）。

- [ ] **Step 3：实现 registry 改动**

在 `BLOCKS` 数组末尾（接 gravel 之后，仿现有条目格式）追加：
```ts
  // 沙石：沙漠沙层之下，镐采。MC 硬度 0.8。
  { id: 18, name: 'sandstone', solid: true, transparent: false, faces: all(T.sandstone), hardness: 0.8, drop: 18, needsTool: true, tool: 'pickaxe' },
  // 仙人掌：沙上生长，徒手可采；接触伤害(游戏层处理)。MC 硬度 0.4。渲染为实心方块。
  { id: 19, name: 'cactus', solid: true, transparent: true, faces: all(T.cactus), hardness: 0.4, drop: 19, needsTool: false, tool: null },
  // 冰：雪原水面冻结；打滑(物理层)；MC 硬度 0.5，无精准采集→不掉(drop:null)。半透明渲染。
  { id: 20, name: 'ice', solid: true, transparent: true, faces: all(T.ice), hardness: 0.5, drop: null, needsTool: true, tool: 'pickaxe' },
  // 雪层：贴地薄装饰，非实心(可穿)、瞬破不掉(暂无雪球)；mesher 画薄四边形。
  { id: 21, name: 'snow_layer', solid: false, transparent: true, faces: all(T.snow), hardness: 0, drop: null, needsTool: false, tool: 'shovel' },
  // 云杉原木：同橡木原木数值，斧更快。顶/底复用 oak_log_top。
  { id: 22, name: 'spruce_log', solid: true, transparent: false, faces: column(T.spruce_log, T.oak_log_top, T.oak_log_top), hardness: 3.33, drop: 22, needsTool: false, tool: 'axe' },
  // 云杉树叶：同橡树叶(镂空、手挖快不掉)。
  { id: 23, name: 'spruce_leaves', solid: true, transparent: true, faces: all(T.spruce_leaves), hardness: 0.2, drop: null, needsTool: false, tool: null },
```
导出常量：
```ts
export const SANDSTONE = 18;
export const CACTUS = 19;
export const ICE = 20;
export const SNOW_LAYER = 21;
export const SPRUCE_LOG = 22;
export const SPRUCE_LEAVES = 23;
```
扩展 helper：
```ts
export const isCutoutId = (id: number): boolean => id === OAK_LEAVES || id === SPRUCE_LEAVES; // 镂空(树叶)
export const isPlantId = (id: number): boolean => id === GRASS_PLANT || id === TALL_GRASS || id === SNOW_LAYER; // cross/薄层 特判
export const isCactus = (id: number): boolean => id === CACTUS;
// 方块滑度（水平移动摩擦用）：冰滑(同 MC 0.98)，其余普通 0.6。
export const blockSlipperiness = (id: number): number => (id === ICE ? 0.98 : 0.6);
```

- [ ] **Step 4：运行看通过 + 全量**

Run: `npx vitest run src/core/blocks/registry.test.ts && npx vitest run`
Expected: PASS（注意：`isPlantId` 加了 SNOW_LAYER → 确认 mesher 现有 plant 特判会渲染它；Task 1.4 处理薄层高度）。

- [ ] **Step 5：提交**
```bash
git add src/core/blocks/registry.ts src/core/blocks/registry.test.ts
git commit -m "feat(blocks): 注册沙石/仙人掌/冰/雪层/云杉×2 + 滑度/仙人掌 helper"
```

---

### Task 1.4：mesher 渲染特判（雪层薄层 + 冰半透明）

**Files:**
- Modify: `src/core/mesh/mesher.ts`
- Modify: `src/core/mesh/mesher.test.ts`（如有现成 plant/cutout 用例，加雪层用例）

**说明：** `grass_plant`/`tall_grass` 已走 `emitPlant`（交叉竖片）。雪层要的是**贴地一片平四边形**（高度极低）。给 mesher 的 plant 分支按 id 分流：snow_layer → `emitSnowLayer`（一张水平四边形在 y≈0.06）；其余 → 现有 `emitPlant`。冰是实心半透明：归到 cutout 批或单独半透明批（最简：归 cutout，`transparent:true` 已让它进 cutout 路径——确认现有 mesher 对 `transparent && solid && !water && !cutout` 的处理；ice 既非 isCutoutId 也非 plant，需让它走 cutout 渲染。最简实现：把 ICE 也并入 `isCutoutId` 渲染批，但 alphaTest 会切边——改用 opaque 批 + 贴图本身不透明即可，先按 opaque 处理，半透明留后续）。

- [ ] **Step 1：写失败测试（雪层产出薄四边形）**

`src/core/mesh/mesher.test.ts` 追加（仿现有 grass_plant 测试）：
```ts
it('雪层渲染为贴地薄四边形（顶面高度很低）', () => {
  // 构造一个底部实心、其上一格 snow_layer 的小网格，断言 cutout/plant 批里 snow_layer 顶点 y 最大值很小
  // （具体用现有 meshChunkData 测试工具构造；断言 positions 中该格顶点 y ≤ 0.2）
});
```

- [ ] **Step 2：运行看失败** → `npx vitest run src/core/mesh/mesher.test.ts` Expected: FAIL。

- [ ] **Step 3：实现 `emitSnowLayer` + 分流**

在 mesher 的 plant 分支：
```ts
} else if (isPlantId(id)) {
  if (id === SNOW_LAYER) emitSnowLayer(lx, ly, lz, blockFaceTile(id, Face.PosY));
  else emitPlant(lx, ly, lz, blockFaceTile(id, Face.PosY), id === TALL_GRASS ? 1.45 : 0.82);
}
```
`emitSnowLayer`：在 `cut`（或单独批）push 一张水平四边形，4 角在 `(lx,ly+0.06,lz)`..`(lx+1,ly+0.06,lz+1)`，UV 用整张 snow tile，光照取本格 `skyAt/blkAt`，shade≈1.0。索引一个四边形（双面由 cutout 材质 DoubleSide 提供）。

- [ ] **Step 4：运行看通过 + 全量** → `npx vitest run` Expected: PASS。

- [ ] **Step 5：提交**
```bash
git add src/core/mesh/mesher.ts src/core/mesh/mesher.test.ts
git commit -m "feat(render): 雪层贴地薄四边形特判（冰先按不透明渲染）"
```

---

# Phase 2 — 群系模块

### Task 2.1：`biome.ts`（气温 + 判定）

**Files:**
- Create: `src/core/worldgen/biome.ts`
- Create: `src/core/worldgen/biome.test.ts`

**Interfaces:**
- Produces:
  - `type Biome = 'snow' | 'plains' | 'forest' | 'desert'`
  - `temperatureAt(wx:number, wz:number, seed:number): number`（0..1）
  - `biomeAt(wx:number, wz:number, seed:number): Biome`

- [ ] **Step 1：写失败测试**

`src/core/worldgen/biome.test.ts`：
```ts
import { describe, it, expect } from 'vitest';
import { temperatureAt, biomeAt } from './biome';

describe('biome 群系', () => {
  it('temperatureAt 同种子确定、范围 0..1', () => {
    const a = temperatureAt(123, 456, 7);
    const b = temperatureAt(123, 456, 7);
    expect(a).toBe(b);
    expect(a).toBeGreaterThanOrEqual(0);
    expect(a).toBeLessThanOrEqual(1);
  });
  it('扫一大片能同时出现沙漠/雪原/温带', () => {
    const seen = new Set<string>();
    for (let x = 0; x < 4000; x += 40)
      for (let z = 0; z < 400; z += 40) seen.add(biomeAt(x, z, 1337));
    expect(seen.has('desert')).toBe(true);
    expect(seen.has('snow')).toBe(true);
    expect([...seen].some((b) => b === 'plains' || b === 'forest')).toBe(true);
  });
});
```

- [ ] **Step 2：运行看失败** → `npx vitest run src/core/worldgen/biome.test.ts` Expected: FAIL（模块不存在）。

- [ ] **Step 3：实现**
```ts
import { fbm2 } from '../math/noise';
import { biomeForest } from './terrain';

export type Biome = 'snow' | 'plains' | 'forest' | 'desert';

const TEMP_SCALE = 320; // 大尺度 → 群系成片
const COLD = 0.38;
const HOT = 0.66;

// 0..1：大尺度气温场，独立 seed 偏移，避免与高度/森林噪声相关。
export function temperatureAt(wx: number, wz: number, seed: number): number {
  return fbm2(wx / TEMP_SCALE, wz / TEMP_SCALE, seed + 9001, 3);
}

export function biomeAt(wx: number, wz: number, seed: number): Biome {
  const t = temperatureAt(wx, wz, seed);
  if (t < COLD) return 'snow';
  if (t > HOT) return 'desert';
  return biomeForest(wx, wz, seed) > 0.62 ? 'forest' : 'plains'; // 温带内用现有森林噪声
}
```
（`biomeForest` 已在 terrain.ts 导出。若产生循环依赖，把 `biomeForest` 拆到 biome.ts 并让 terrain.ts re-export。）

- [ ] **Step 4：运行看通过** → `npx vitest run src/core/worldgen/biome.test.ts` Expected: PASS。若分带断言不过，微调 `COLD/HOT`/`TEMP_SCALE` 直到一大片里三类都出现。

- [ ] **Step 5：提交**
```bash
git add src/core/worldgen/biome.ts src/core/worldgen/biome.test.ts
git commit -m "feat(worldgen): biome 模块（气温带 → 雪原/沙漠/温带）"
```

---

# Phase 3 — 世界生成整合

### Task 3.1：地表/填充按群系

**Files:**
- Modify: `src/core/worldgen/terrain.ts`（`generateChunk` 列循环）
- Modify: `src/core/worldgen/terrain.test.ts`

**说明：** 现有列循环（约 187-205 行）按 `beach` 选 SAND/GRASS/DIRT。改为：先 `const biome = biomeAt(wx, wz, seed)`；非沙滩时按 biome 决定地表/填充：
- desert：`y===height`→SAND；`y>=height-3`→SAND；`height-3 > y >= height-7`→SANDSTONE；其下 oreAt。
- snow：`y===height`→GRASS；`y>=height-3`→DIRT（同温带）；其下 oreAt。雪层与结冰在 Task 3.2。
- plains/forest：维持现状。

- [ ] **Step 1：写失败测试**
```ts
import { biomeAt } from './biome';
// 找一个 desert 列与一个 snow 列（扫描 biomeAt），断言其列组成
it('沙漠列：地表沙、其下有沙石', () => {
  const seed = 1337;
  // 扫描找到 biomeAt==='desert' 且陆地(height>SEA_LEVEL+1)的 (wx,wz)
  // generateChunk 该列所在区块，断言 height 处=SAND(5)、height-5 处=SANDSTONE(18)
});
it('雪原列地表是草方块(其上雪层在 3.2)', () => { /* 同法断言 GRASS */ });
```

- [ ] **Step 2：运行看失败** → Expected: FAIL。

- [ ] **Step 3：实现列循环 biome 分支**（在 `for y` 之前算 `biome`，把 `id = beach ? SAND : GRASS` 一段替换为 biome 分支；沙石层用 `SANDSTONE` 常量，import 自 registry）。

- [ ] **Step 4：运行看通过 + 全量** → `npx vitest run` Expected: PASS（注意现有 terrain 确定性测试仍须过：biome 是确定性的）。

- [ ] **Step 5：提交**
```bash
git add src/core/worldgen/terrain.ts src/core/worldgen/terrain.test.ts
git commit -m "feat(worldgen): 沙漠(沙+沙石)/雪原(草)地表按群系生成"
```

---

### Task 3.2：装饰——仙人掌 / 云杉 / 雪层 / 结冰

**Files:**
- Modify: `src/core/worldgen/terrain.ts`（装饰 pass + 注水段）
- Modify: `src/core/worldgen/terrain.test.ts`

**说明：**
- 结冰：现有 `for (y=height+1; y<=SEA_LEVEL; y++) set WATER` 段后，若 `biome==='snow'`，把**最顶层水格**（y===SEA_LEVEL 或该列水柱顶）改成 ICE。
- 雪层：列建完后，若 `biome==='snow'` 且地表是 GRASS 且其上空气，`set(height+1, SNOW_LAYER)`（大概率，留少量空缺）。
- 仙人掌：装饰 pass（仿 `placeTree` 的 hash 剔除），`biomeAt==='desert'` 且地表 SAND 且稀疏 → 立 1~3 高 CACTUS 柱（每柱彼此间隔，避免连片）。
- 云杉：装饰 pass，`biomeAt==='snow'` 且地表 GRASS → 稀疏种云杉（复用 `placeTree` 逻辑，传 SPRUCE_LOG/SPRUCE_LEAVES；形状先复用橡树树冠，B3 可后续改锥形）。
- 温带的橡树/草丛 pass 加 `biomeAt==='plains'||'forest'` 守卫（别在沙漠/雪原长橡树/草丛）。

- [ ] **Step 1：写失败测试**
```ts
it('仙人掌只立在沙漠的沙地上', () => {
  // 扫描若干区块，凡 CACTUS 方块，其下方必是 SAND 且该列 biomeAt==='desert'
});
it('雪原水面顶层是冰', () => {
  // 找 snow 且 height<SEA_LEVEL 的列，断言其水柱顶格 === ICE
});
```

- [ ] **Step 2：运行看失败** → Expected: FAIL。

- [ ] **Step 3：实现装饰 pass + 守卫**（仙人掌/云杉用 `hash2` 确定性；仙人掌高度 `1+hash%3`；间隔通过密度阈值控制）。

- [ ] **Step 4：运行看通过 + 全量** → `npx vitest run` Expected: PASS。

- [ ] **Step 5：提交**
```bash
git add src/core/worldgen/terrain.ts src/core/worldgen/terrain.test.ts
git commit -m "feat(worldgen): 仙人掌/云杉/雪层/水面结冰 + 群系守卫橡树草丛"
```

---

# Phase 4 — 行为

### Task 4.1：仙人掌接触伤害

**Files:**
- Create: `src/core/survival/cactus.ts`
- Create: `src/core/survival/cactus.test.ts`
- Modify: `src/game/Game.ts`（每刻调用）

**Interfaces:**
- Produces: `touchesCactus(px:number, py:number, pz:number, getBlock:(x,y,z)=>number): boolean`（玩家碰撞箱贴住任一仙人掌）

- [ ] **Step 1：写失败测试**
```ts
import { describe, it, expect } from 'vitest';
import { touchesCactus } from './cactus';
import { CACTUS } from '../blocks/registry';
const only = (cx:number,cy:number,cz:number) => (x:number,y:number,z:number)=> (x===cx&&y===cy&&z===cz?CACTUS:0);
it('紧贴仙人掌→true', () => {
  // 玩家在 (5.5,1,5.5)，仙人掌在 (6,1,5)：x 方向贴着(玩家半宽0.3，仙人掌面在 x=6)
  expect(touchesCactus(5.71, 1, 5.5, only(6,1,5))).toBe(true);
});
it('隔一格空气→false', () => {
  expect(touchesCactus(5.0, 1, 5.5, only(7,1,5))).toBe(false);
});
```

- [ ] **Step 2：运行看失败** → `npx vitest run src/core/survival/cactus.test.ts` Expected: FAIL。

- [ ] **Step 3：实现**（用玩家碰撞箱 `WIDTH/HEIGHT` 向外扩 ~0.1 检测重叠的整数格里有没有 CACTUS）：
```ts
import { WIDTH, HEIGHT } from '../physics/player';
import { isCactus } from '../blocks/registry';
export function touchesCactus(px:number, py:number, pz:number, getBlock:(x:number,y:number,z:number)=>number): boolean {
  const e = 0.1, hw = WIDTH/2;
  const x0=Math.floor(px-hw-e), x1=Math.floor(px+hw+e);
  const y0=Math.floor(py), y1=Math.floor(py+HEIGHT);
  const z0=Math.floor(pz-hw-e), z1=Math.floor(pz+hw+e);
  for (let x=x0;x<=x1;x++) for (let y=y0;y<=y1;y++) for (let z=z0;z<=z1;z++)
    if (isCactus(getBlock(x,y,z))) return true;
  return false;
}
```

- [ ] **Step 4：运行看通过** → Expected: PASS。

- [ ] **Step 5：接入 Game.ts**（在 `stepSurvival` 或每刻：若 `touchesCactus(...)` 且 `hurtCd<=0` → `hurtPlayer(1, 0, 0)`，复用现有无敌帧）。

- [ ] **Step 6：全量 + 提交**
```bash
npx vitest run
git add src/core/survival/cactus.ts src/core/survival/cactus.test.ts src/game/Game.ts
git commit -m "feat(survival): 仙人掌接触掉血(1.12)"
```

---

### Task 4.2：冰面打滑

**Files:**
- Modify: `src/core/physics/player.ts`（水平摩擦按脚下方块滑度）
- Create: `src/core/physics/playerSlip.test.ts`

**说明：** 在 `step()` 水平速度阻尼/加速处，把固定摩擦换成 `blockSlipperiness(脚下方块 id)`。MC 公式：地面 `friction = slipperiness`，速度乘 `friction*0.91`，加速度 `≈ 0.1 * (0.6/friction)^3`。先做**保守版**：滑度只放大水平速度的保留系数（冰上更难停），不改变最大速度太多，确保不破坏正常手感。脚下方块 = `getBlock(floor(px), floor(py-0.1), floor(pz))`。

- [ ] **Step 1：写失败测试**
```ts
// 给定相同输入，站在冰上比站在石头上：松开方向键后水平速度衰减更慢(滑得更远)
it('冰上比石头上更滑(同初速，下一刻保留更多水平速度)', () => {
  // 构造 VoxelWorld：一块站石头、一块站冰；step 一刻(无输入)；断言冰上 |vel.xz| 更大
});
```

- [ ] **Step 2：运行看失败** → Expected: FAIL。

- [ ] **Step 3：实现**（`player.ts` 读脚下 `blockSlipperiness`，水平阻尼用它）。

- [ ] **Step 4：运行看通过 + 全量**（重点确认现有玩家物理测试不回归）→ `npx vitest run` Expected: PASS。

- [ ] **Step 5：提交**
```bash
git add src/core/physics/player.ts src/core/physics/playerSlip.test.ts
git commit -m "feat(physics): 冰面打滑(脚下方块滑度，1.12 冰0.98)"
```

---

# Phase 5 — 尸壳

### Task 5.1：尸壳定义 + 日间免疫（sunImmune）

**Files:**
- Modify: `src/core/entity/mob.ts`
- Modify: `src/core/entity/hostileAi.ts`
- Modify: `src/core/entity/hostileAi.test.ts`

**Interfaces:**
- Produces: `MobKind` 含 `'husk'`；`MOB_DEFS.husk`（hp20 attack3 sense16 hostile sunImmune:true）；`MOB_DEFS.creeper.sunImmune=true`

- [ ] **Step 1：写失败测试**

`hostileAi.test.ts` 追加：
```ts
it('尸壳白天日晒不掉血(不同于僵尸)', () => {
  const h = spawnMob('husk', 5, 1, 5);
  const r = updateHostile(h, flat, rng, null, true); // sunlit=true
  expect(r.mob.health).toBe(h.health);
});
it('僵尸白天仍会被晒掉血(回归保护)', () => {
  const z = spawnMob('zombie', 5, 1, 5);
  const r = updateHostile(z, flat, rng, null, true);
  expect(r.mob.health).toBeLessThan(z.health);
});
```

- [ ] **Step 2：运行看失败** → `npx vitest run src/core/entity/hostileAi.test.ts` Expected: FAIL（'husk' 未知 / 尸壳被晒掉血）。

- [ ] **Step 3：实现**
- `mob.ts`：`MobKind` 加 `'husk'`；`MobDef` 加可选 `sunImmune?: boolean`；`MOB_DEFS.husk = { hp:20, width:0.6, height:1.95, moveSpeed:0.048, fallImmune:false, hostile:true, attack:3, sense:16, sunImmune:true }`；给 `creeper` 加 `sunImmune:true`。`spawnMob` 支持 'husk'（同僵尸初值）。
- `hostileAi.ts:224`：`if (sunlit && !def.explosive)` → `if (sunlit && !def.sunImmune)`。

- [ ] **Step 4：运行看通过 + 全量** → `npx vitest run` Expected: PASS（含原有苦力怕"不怕晒"用例仍过，因为 creeper.sunImmune=true）。

- [ ] **Step 5：提交**
```bash
git add src/core/entity/mob.ts src/core/entity/hostileAi.ts src/core/entity/hostileAi.test.ts
git commit -m "feat(mob): 尸壳定义 + sunImmune(日间不烧；苦力怕并入)"
```

---

### Task 5.2：尸壳命中加饥饿 + 沙漠刷新

**Files:**
- Modify: `src/core/entity/hostileAi.ts`（attackPlayer 事件区分尸壳，或 Game 命中处判 kind）
- Modify: `src/core/entity/mobSpawn.ts`（沙漠刷尸壳替代僵尸）
- Modify: `src/game/Game.ts`（尸壳命中→额外 exhaustion）
- Modify: 相应 test（mobSpawn 若有测试则加；否则在 terrain/biome 层验证 biome 查询）

**说明：**
- 饥饿近似：Game.ts 处理 `attackPlayer` 时，若 `mob.kind==='husk'` → 除 `hurtPlayer` 外 `addExhaustion(this.survival, 3)`（约掉一截饱和，近似 Hunger）。
- 沙漠刷新：`mobSpawn.ts` 选 kind 处（现 `rk<0.4?'zombie':...`）传入或查 `biomeAt(bx,bz,seed)`；若 desert，把 'zombie' 结果换成 'husk'。需要 spawn 函数能拿到 seed/biome（从 SpawnWorld 或新增参数）。沙漠地表白天也可刷（sunImmune）。

- [ ] **Step 1：写失败测试（尸壳命中加 exhaustion 的纯逻辑，或 spawn 在沙漠返回 husk）**

优先测可纯化的部分。例如把"按 biome 选敌对 kind"抽成纯函数 `hostileKindFor(biome, roll)` 并测：
```ts
it('沙漠选到的近战怪是尸壳而非僵尸', () => {
  expect(hostileKindFor('desert', 0.1)).toBe('husk');
  expect(hostileKindFor('plains', 0.1)).toBe('zombie');
});
```

- [ ] **Step 2：运行看失败** → Expected: FAIL。

- [ ] **Step 3：实现** `hostileKindFor` + 在 mobSpawn 用它；Game.ts attackPlayer 分支加尸壳 exhaustion。

- [ ] **Step 4：运行看通过 + 全量** → `npx vitest run` Expected: PASS。

- [ ] **Step 5：提交**
```bash
git add src/core/entity/hostileAi.ts src/core/entity/mobSpawn.ts src/game/Game.ts src/core/entity/*.test.ts
git commit -m "feat(mob): 尸壳沙漠刷新 + 命中附加饥饿近似(1.12)"
```

---

### Task 5.3：尸壳贴图 + 模型

**Files:**
- Modify: `src/render/mobTextures.ts`（husk 沙色贴图）
- Modify: `src/render/MobRenderer.ts`（husk 复用僵尸 buildModel 分支）

**说明：** 纯渲染、无单测（仿现有僵尸贴图函数改沙色 `#c2b280` 系 + 破烂深斑）。MobRenderer 的 `buildModel(kind)` 里 husk 走 zombie 同款盒模型，贴图换 husk。

- [ ] **Step 1：mobTextures 加 husk 贴图**（仿 zombie，主色改干沙色、暗斑）。
- [ ] **Step 2：MobRenderer buildModel 让 'husk' 复用僵尸体型 + husk 贴图**。
- [ ] **Step 3：typecheck + build** → `npx tsc --noEmit && npx vite build` Expected: 通过。
- [ ] **Step 4：提交**
```bash
git add src/render/mobTextures.ts src/render/MobRenderer.ts
git commit -m "feat(mob): 尸壳沙色贴图 + 模型(复用僵尸体型)"
```

---

## 收尾验证（全部 Task 后）

- [ ] `npx vitest run`（全绿）+ `npx tsc --noEmit`（干净）+ `npx vite build`（成功）。
- [ ] 人工/Playwright（若环境允许）：进世界走到沙漠见沙石/仙人掌/尸壳、走到雪原见雪层/冰/云杉。
- [ ] 合回 `feature/cartoon-textures`（按需 rebase 同步图集相关并发改动）。
- [ ] 由用户决定是否合 `main` 部署。

## 风险

- **图集行列数**改动牵涉 mesher/DropRenderer/gen_textures，且并发会话在改 gen_textures → worktree 内先 rebase。
- **冰打滑**触及移动公式 → 重点回归现有物理测试，手感别坏。
- **biomeForest 循环依赖**（biome.ts↔terrain.ts）→ 必要时把 biomeForest 移入 biome.ts。
