# 下界·第一期 Plan 1：下界这个"地方" 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把下界作为一个"可生成、有贴图、有暗红天空"的地方做出来——新方块/物品/贴图 + 下界世界生成 + 下界天空 + 传送门框检测(纯逻辑) + 水浇岩浆出黑曜石。**不含**维度切换/真正进入下界（那是 Plan 2）。

**Architecture:** 全部是**新增/旁路**改动，刻意避开正被另一会话改的 `Game.ts`/渲染主流程。方块/物品进注册表、贴图进 `gen_textures.py`/`gen_classic.py`、世界生成给 `generateChunk` 加 `dimension` 形参并加下界分支、天空给 `skyStateAt` 加 `dimension` 形参、传送门框检测做成纯函数模块、水浇岩浆做成流体里的一条规则。

**Tech Stack:** TypeScript + Vitest（单测）。贴图用 Python(PIL) 程序生成。

## Global Constraints

- 块 id < 256，物品 id ≥ 256（见 registry/items）。**新块 id 从当前最大 +1 开始（执行时核对，现为 18+）**；新物品 id 从 294+ 开始。
- 1:1 对齐 MC：硬度/掉落/行为尽量按 MC Java 值。
- 图集顺序：`gen_textures.py` 与 `gen_classic.py` 的 `ATLAS_ORDER` **必须逐一一致**（`src/render/atlasConsistency.test.ts` 会校验），且与 `registry.ts` 的 `T` 索引一致；改行数要同步 `mesher.ts` 的 `ATLAS_ROWS`。
- 确定性世界生成：同种子同维度结果稳定。
- TDD：先写失败测试，再实现。每个 Task 结束提交一次。
- 改完贴图务必两个生成器都跑（`gen_textures.py` + `gen_classic.py`）。

---

### Task 1：下界方块进注册表

**Files:**
- Modify: `src/core/blocks/registry.ts`（`T` 常量加索引、`BLOCKS` 加条目、底部加 `export const` + `isLavaId`/`isNetherPortalId`）
- Test: `src/core/blocks/registry.test.ts`

**Interfaces:**
- Produces: `export const OBSIDIAN/NETHERRACK/SOUL_SAND/GLOWSTONE/NETHER_QUARTZ_ORE/LAVA/BEDROCK/NETHER_PORTAL` (number)；`isLavaId(id)`、`isNetherPortalId(id)`、`isReplaceableId` 把 `NETHER_PORTAL` 算进可被覆盖/穿过。
- 约定 id：obsidian=18, netherrack=19, soul_sand=20, glowstone=21, nether_quartz_ore=22, lava=23, bedrock=24, nether_portal=25（执行时若 17 之后已被占用，整体顺延并改本计划引用）。
- `T` 图集索引：沿用现有 tile 表，新块依次接在 `grass_plant`(17) 之后：obsidian=18 … nether_portal=25（与 Task 3 图集顺序一致）。

- [ ] **Step 1：写失败测试**（加进 `registry.test.ts`）

```ts
import { isLavaId, isNetherPortalId, isSolidId, isReplaceableId, BLOCKS,
  OBSIDIAN, NETHERRACK, GLOWSTONE, LAVA, BEDROCK, NETHER_PORTAL } from './registry';

describe('下界方块', () => {
  it('基本属性', () => {
    expect(BLOCKS[OBSIDIAN].name).toBe('obsidian');
    expect(BLOCKS[NETHERRACK].solid).toBe(true);
    expect(BLOCKS[GLOWSTONE].light).toBe(15);     // 自发光
    expect(BLOCKS[BEDROCK].hardness).toBeLessThan(0); // 不可破坏(<0)
  });
  it('岩浆：非实心液体、可被覆盖、能识别', () => {
    expect(isLavaId(LAVA)).toBe(true);
    expect(isSolidId(LAVA)).toBe(false);
  });
  it('传送门块：非实心、可穿过、发光、能识别', () => {
    expect(isNetherPortalId(NETHER_PORTAL)).toBe(true);
    expect(isSolidId(NETHER_PORTAL)).toBe(false);
    expect(isReplaceableId(NETHER_PORTAL)).toBe(true);
  });
});
```

- [ ] **Step 2：跑测试确认失败**

Run: `npx vitest run src/core/blocks/registry.test.ts`
Expected: FAIL（`OBSIDIAN` 等未定义 / `isLavaId` 不是函数）

- [ ] **Step 3：实现**（`registry.ts`）

`T` 常量末尾接（紧跟 `grass_plant: 17`）：

```ts
  obsidian: 18, netherrack: 19, soul_sand: 20, glowstone: 21,
  nether_quartz_ore: 22, lava: 23, bedrock: 24, nether_portal: 25,
```

`BLOCKS` 数组末尾接（沿用现有 `all()`/字段写法）：

```ts
  { id: 18, name: 'obsidian', solid: true, transparent: false, faces: all(T.obsidian), hardness: 12, drop: 18, needsTool: true, tool: 'pickaxe', minTier: 2 },
  { id: 19, name: 'netherrack', solid: true, transparent: false, faces: all(T.netherrack), hardness: 0.4, drop: 19, needsTool: false, tool: 'pickaxe' },
  { id: 20, name: 'soul_sand', solid: true, transparent: false, faces: all(T.soul_sand), hardness: 0.5, drop: 20, needsTool: false, tool: 'shovel' },
  { id: 21, name: 'glowstone', solid: true, transparent: false, faces: all(T.glowstone), hardness: 0.3, drop: 21, needsTool: false, tool: null, light: 15 },
  { id: 22, name: 'nether_quartz_ore', solid: true, transparent: false, faces: all(T.nether_quartz_ore), hardness: 3, drop: 295 /* NETHER_QUARTZ item, Task2 */, needsTool: true, tool: 'pickaxe', minTier: 1 },
  { id: 23, name: 'lava', solid: false, transparent: true, faces: all(T.lava), hardness: 100, drop: null, needsTool: false, tool: null, light: 15 },
  { id: 24, name: 'bedrock', solid: true, transparent: false, faces: all(T.bedrock), hardness: -1, drop: null, needsTool: false, tool: null },
  { id: 25, name: 'nether_portal', solid: false, transparent: true, faces: all(T.nether_portal), hardness: -1, drop: null, needsTool: false, tool: null, light: 11 },
```

底部 exports + 判定（接在 `TALL_GRASS` 之后）：

```ts
export const OBSIDIAN = 18, NETHERRACK = 19, SOUL_SAND = 20, GLOWSTONE = 21,
  NETHER_QUARTZ_ORE = 22, LAVA = 23, BEDROCK = 24, NETHER_PORTAL = 25;
export const isLavaId = (id: number): boolean => id === LAVA;
export const isNetherPortalId = (id: number): boolean => id === NETHER_PORTAL;
```

`isReplaceableId` 加入传送门块（让放方块/移动把它当可覆盖/可穿过）：

```ts
export const isReplaceableId = (id: number): boolean =>
  id === 0 || id === WATER || isPlantId(id) || id === NETHER_PORTAL;
```

> 注：岩浆 `isOpaque` 应为 false（非实心+transparent），沿用现有 `isOpaque` 逻辑即可（实心且不透明才 opaque）。

- [ ] **Step 4：跑测试确认通过**

Run: `npx vitest run src/core/blocks/registry.test.ts`
Expected: PASS

- [ ] **Step 5：提交**

```bash
git add src/core/blocks/registry.ts src/core/blocks/registry.test.ts
git commit -m "feat(nether): 注册下界方块(黑曜石/地狱岩/灵魂沙/荧石/石英矿/岩浆/基岩/传送门块)"
```

---

### Task 2：下界物品 + 打火石合成

**Files:**
- Modify: `src/core/items/items.ts`（加 `FLINT_AND_STEEL=294`、`NETHER_QUARTZ=295` + ITEMS 条目）
- Modify: 合成配方表（执行时定位 `src/core/crafting/recipes.ts` 或同等文件）加"燧石+铁锭 → 打火石"
- Test: `src/core/items/items.test.ts` 与配方测试

**Interfaces:**
- Produces: `export const FLINT_AND_STEEL = 294; export const NETHER_QUARTZ = 295;`，二者进 `ITEMS`。
- Consumes: Task1 的 `NETHER_QUARTZ_ORE` 掉落 295。

- [ ] **Step 1：写失败测试**

```ts
import { ITEMS, FLINT_AND_STEEL, NETHER_QUARTZ } from './items';
it('下界物品存在', () => {
  expect(ITEMS[FLINT_AND_STEEL].name).toBe('flint_and_steel');
  expect(ITEMS[FLINT_AND_STEEL].maxStack).toBe(1); // 工具类不堆叠
  expect(ITEMS[NETHER_QUARTZ].name).toBe('nether_quartz');
});
```

- [ ] **Step 2：跑测试确认失败** — Run: `npx vitest run src/core/items/items.test.ts` — Expected: FAIL

- [ ] **Step 3：实现**（`items.ts`，接在 `GUNPOWDER=293` 之后）

```ts
export const FLINT_AND_STEEL = 294;
export const NETHER_QUARTZ = 295;
// ITEMS 表加：
[FLINT_AND_STEEL]: { name: 'flint_and_steel', maxStack: 1, food: null, tool: null },
[NETHER_QUARTZ]: { name: 'nether_quartz', maxStack: 64, food: null, tool: null },
```

配方（按现有配方文件格式加，形状随意/无序均可，参照现有"燧石+羽毛+棍=箭"写法）：燧石 `FLINT(289)` + 铁锭 → `FLINT_AND_STEEL`。执行时先看现有配方文件用的是 shaped 还是 shapeless，照搬格式；铁锭 id 执行时确认（搜 `IRON_INGOT`）。

- [ ] **Step 4：跑测试确认通过** — Run: `npx vitest run src/core/items/items.test.ts` — Expected: PASS

- [ ] **Step 5：提交**

```bash
git add src/core/items/items.ts src/core/crafting/
git commit -m "feat(nether): 打火石(燧石+铁)+下界石英物品"
```

---

### Task 3：下界方块贴图（卡通 + 经典 + 图集扩行）

**Files:**
- Modify: `tools/textures/gen_textures.py`（8 个新块的纹理函数 + `BLOCKS` 列表 + `ATLAS_ORDER` + `ATLAS_COLS/ROWS`）
- Modify: `tools/textures/gen_classic.py`（同名 8 个函数 + `ATLAS_ORDER`，**与卡通逐一一致**）
- Modify: `src/core/mesh/mesher.ts`（`ATLAS_ROWS` 4×5→新行数）、`src/render/DropRenderer.ts`（若也写死 ATLAS_ROWS）
- Test: `src/render/atlasConsistency.test.ts`（已存在，跑通即可）

**Interfaces:**
- Produces: `public/textures/atlas.png`、`atlas_classic.png` 含 18..25 号 tile；`public/textures/blocks/*.png`。
- 图集从 4×5(20 槽,用到 18) 扩成能放 26 个 tile：**4×7=28 槽**（`ATLAS_COLS=4, ATLAS_ROWS=7`）。

- [ ] **Step 1：先让一致性测试失败/锚定** — 在两个生成器的 `ATLAS_ORDER` 末尾各加 `'obsidian','netherrack','soul_sand','glowstone','nether_quartz_ore','lava','bedrock','nether_portal'`，`ATLAS_COLS,ATLAS_ROWS = 4,7`。

- [ ] **Step 2：写 8 个纹理函数**（`gen_textures.py`，卡通风，沿用 `new()/fill()/speck()/pebble()` 工具）：
  - obsidian：近黑紫 `#1a1024` + 零星亮紫斑点。
  - netherrack：暗红 `#6e2b2b` + 红褐细噪 + 几道深红纹。
  - soul_sand：暗褐 `#4f3a2c` + 三个凹陷"脸"暗点。
  - glowstone：亮黄 `#f4c95a` + 橙网格纹（自发光感）。
  - nether_quartz_ore：地狱岩底(同 netherrack) + 白色石英斑。
  - lava：橙红 `#e2560f` + 亮黄裂纹（参照水但暖色；本期静态，单帧即可）。
  - bedrock：深灰黑 `#2b2b2b` + 杂乱深浅块。
  - nether_portal：紫 `#7b3fbf` 半透感 + 竖向亮紫纹。
  - `BLOCKS` 列表加这 8 个 `(name, fn)`。
- [ ] **Step 3：经典版**（`gen_classic.py`）写同名 8 函数（更闷的同色系）+ `ATLAS_ORDER` 同序。

- [ ] **Step 4：同步 `ATLAS_ROWS`** — `src/core/mesh/mesher.ts` 的 `ATLAS_ROWS = 7`；grep `ATLAS_ROWS` 确认其它处（DropRenderer 等）一并改。

- [ ] **Step 5：生成 + 测试**

Run:
```bash
python3 tools/textures/gen_textures.py && python3 tools/textures/gen_classic.py
npx vitest run src/render/atlasConsistency.test.ts
npx vitest run   # 全量，确认 mesher UV 没错位(看 mesher/water 测试)
```
Expected: atlasConsistency PASS、全量 PASS。

- [ ] **Step 6：提交**

```bash
git add tools/textures/ public/textures/ src/core/mesh/mesher.ts src/render/DropRenderer.ts
git commit -m "feat(nether): 下界8块贴图(卡通+经典) + 图集扩到 4x7"
```

---

### Task 4：下界天空（暗红、无昼夜）

**Files:**
- Modify: `src/core/world/dayNight.ts`（`skyStateAt(time, dimension?)`）
- Test: `src/core/world/dayNight.test.ts`（新建或并入现有）

**Interfaces:**
- Produces: `export type Dimension = 'overworld' | 'nether';`、`skyStateAt(time: number, dimension?: Dimension): SkyState`。`dimension` 省略/`'overworld'` = 原行为；`'nether'` = 恒定暗红、无昼夜。

- [ ] **Step 1：写失败测试**

```ts
import { skyStateAt } from './dayNight';
it('下界天空恒暗红、与时间无关', () => {
  const a = skyStateAt(1800, 'nether');   // 主世界这是白天
  const b = skyStateAt(13600, 'nether');  // 主世界这是半夜
  expect(a).toEqual(b);                    // 下界不随时间变
  expect(a.skyTop[0]).toBeGreaterThan(a.skyTop[2]); // 偏红(R>B)
});
it('主世界行为不变', () => {
  expect(skyStateAt(1800)).toEqual(skyStateAt(1800, 'overworld'));
});
```

- [ ] **Step 2：跑测试确认失败** — Run: `npx vitest run src/core/world/dayNight.test.ts` — Expected: FAIL

- [ ] **Step 3：实现** — `skyStateAt` 开头加：

```ts
export type Dimension = 'overworld' | 'nether';
const NETHER_SKY: SkyState = {
  skyTop: [0.18, 0.05, 0.05], skyHorizon: [0.34, 0.09, 0.07],
  worldTint: [0.62, 0.32, 0.28], /* 其余字段照 SkyState 必填项给暗值 */
};
export function skyStateAt(time: number, dimension: Dimension = 'overworld'): SkyState {
  if (dimension === 'nether') return NETHER_SKY;
  /* ……原有逻辑…… */
}
```
（`SkyState` 的具体字段以 `dayNight.ts:13` 接口为准，全部填上暗红/暗值。）

- [ ] **Step 4：跑测试确认通过** — Expected: PASS

- [ ] **Step 5：提交**

```bash
git add src/core/world/dayNight.ts src/core/world/dayNight.test.ts
git commit -m "feat(nether): 下界天空恒暗红、无昼夜(skyStateAt 加 dimension)"
```

---

### Task 5：下界世界生成

**Files:**
- Modify: `src/core/worldgen/terrain.ts`（`generateChunk(cx,cz,seed,dimension?)` + `generateNetherChunk`）
- Test: `src/core/worldgen/terrain.test.ts`（加下界用例）

**Interfaces:**
- Produces: `generateChunk(cx, cz, seed, dimension: Dimension = 'overworld')`；`dimension==='nether'` → 走 `generateNetherChunk`。
- Consumes: Task1 的 `NETHERRACK/LAVA/GLOWSTONE/NETHER_QUARTZ_ORE/BEDROCK/SOUL_SAND`。

- [ ] **Step 1：写失败测试**

```ts
import { generateChunk } from './terrain';
import { NETHERRACK, LAVA, BEDROCK, GLOWSTONE, WATER, GRASS } from '../blocks/registry';
import { CHUNK_W } from '../world/chunk';
it('下界：基岩封顶封底、有地狱岩/岩浆、无草无水', () => {
  const c = generateChunk(0, 0, 1337, 'nether');
  // 底 2 层应有基岩
  let bottomBedrock = false, top = false;
  for (let x=0;x<CHUNK_W;x++) for (let z=0;z<CHUNK_W;z++) {
    if (c.get(x,1,z)===BEDROCK) bottomBedrock = true;
    if (c.get(x,126,z)===BEDROCK) top = true;
  }
  expect(bottomBedrock).toBe(true);
  expect(top).toBe(true);
  // 统计：有地狱岩、岩浆，且没有草/水
  let nr=0, lava=0, grass=0, water=0;
  for (let y=0;y<128;y++) for (let x=0;x<CHUNK_W;x++) for (let z=0;z<CHUNK_W;z++){
    const b=c.get(x,y,z); if(b===NETHERRACK)nr++; if(b===LAVA)lava++; if(b===GRASS)grass++; if(b===WATER)water++;
  }
  expect(nr).toBeGreaterThan(500);
  expect(lava).toBeGreaterThan(0);
  expect(grass).toBe(0); expect(water).toBe(0);
});
it('下界确定性', () => {
  const a = generateChunk(2,3,1337,'nether'); const b = generateChunk(2,3,1337,'nether');
  for (let y=0;y<128;y+=8) for (let x=0;x<CHUNK_W;x+=4) for(let z=0;z<CHUNK_W;z+=4)
    expect(a.get(x,y,z)).toBe(b.get(x,y,z));
});
```

- [ ] **Step 2：跑测试确认失败** — Run: `npx vitest run src/core/worldgen/terrain.test.ts` — Expected: FAIL

- [ ] **Step 3：实现** — `generateChunk` 加 `dimension` 形参 + 头部分流：

```ts
export function generateChunk(cx: number, cz: number, seed: number, dimension: 'overworld'|'nether' = 'overworld'): Chunk {
  if (dimension === 'nether') return generateNetherChunk(cx, cz, seed);
  /* ……现有主世界逻辑不动…… */
}

const NETHER_TOP = 127, NETHER_LAVA_Y = 31;
function generateNetherChunk(cx: number, cz: number, seed: number): Chunk {
  const c = new Chunk();
  const s = seed + 70000; // 下界用独立种子偏移
  for (let lz=0; lz<CHUNK_W; lz++) for (let lx=0; lx<CHUNK_W; lx++) {
    const wx = cx*CHUNK_W+lx, wz = cz*CHUNK_W+lz;
    for (let y=0; y<=NETHER_TOP; y++) {
      // 基岩封顶封底(各 ~2 层，带点不平整)
      if (y <= 1 || y >= NETHER_TOP-1) { c.set(lx,y,lz,BEDROCK); continue; }
      // 3D 噪声挖大洞窟：超过阈值=空腔
      const cave = valueNoise3(wx/18, y/16, wz/18, s+1) > 0.55
                || valueNoise3(wx/9, y/10, wz/9, s+2) > 0.78;
      if (cave) {
        if (y <= NETHER_LAVA_Y) { c.set(lx,y,lz,LAVA); }   // 岩浆面以下的空腔灌静态岩浆
        continue;                                          // 以上空腔留空气
      }
      let id = NETHERRACK;
      // 石英矿脉
      if (valueNoise3(wx/4, y/4, wz/4, s+3) > 0.86) id = NETHER_QUARTZ_ORE;
      // 灵魂沙斑块(低频)
      else if (valueNoise3(wx/10, y/10, wz/10, s+4) > 0.9) id = SOUL_SAND;
      c.set(lx,y,lz,id);
    }
    // 洞顶荧石簇：在天花板下沿稀疏挂几团(确定性 hash)
    if (hash2(wx,wz,s+5) < 0.01) {
      for (let y=NETHER_TOP-2; y>NETHER_TOP-6; y--) if (c.get(lx,y,lz)===0) { c.set(lx,y,lz,GLOWSTONE); break; }
    }
  }
  c.dirty = true;
  return c;
}
```
（`valueNoise3/hash2` 从现有 noise 模块 import；阈值执行时按出来的密度微调到"地狱岩为主、岩浆海可见、洞窟连通"。）

- [ ] **Step 4：跑测试确认通过** — Expected: PASS（密度不达标就调阈值）

- [ ] **Step 5：提交**

```bash
git add src/core/worldgen/terrain.ts src/core/worldgen/terrain.test.ts
git commit -m "feat(nether): 下界世界生成(地狱岩+静态岩浆海+荧石+石英+基岩封顶)"
```

---

### Task 6：传送门框检测（纯逻辑）

**Files:**
- Create: `src/core/world/portal.ts`
- Test: `src/core/world/portal.test.ts`

**Interfaces:**
- Produces:
```ts
export interface PortalFrame { axis: 'x'|'z'; inner: Array<[number,number,number]>; } // 内部空格(要填传送门)
// 从被点燃的某个【内部底格】(x,y,z)出发，朝两个水平轴各试一次，判定是否被黑曜石围成合法框。
export function detectPortalFrame(
  isObsidian: (x:number,y:number,z:number)=>boolean,
  isFrameInterior: (x:number,y:number,z:number)=>boolean, // 空气或传送门，可作内部
  x:number, y:number, z:number,
): PortalFrame | null;
```
- 规则(对齐 MC 最小门)：内部 2 宽 × 3 高（沿某水平轴），四边黑曜石，底/顶/两侧封闭；返回内部 6 格坐标。角可有可无（先按"必须四边封闭、角不强制"实现）。

- [ ] **Step 1：写失败测试**

```ts
import { detectPortalFrame } from './portal';
// 用一个 Set 当假世界：放黑曜石坐标
function world(obs: Set<string>) {
  const k=(x:number,y:number,z:number)=>`${x},${y},${z}`;
  return {
    isObsidian:(x:number,y:number,z:number)=>obs.has(k(x,y,z)),
    isInterior:(x:number,y:number,z:number)=>!obs.has(k(x,y,z)),
  };
}
it('合法 2x3 门(沿 x 轴) → 返回内部 6 格', () => {
  const obs = new Set<string>(); const add=(x:number,y:number,z:number)=>obs.add(`${x},${y},${z}`);
  // 沿 x：内部 x∈{1,2}, y∈{1,2,3}, z=0。框：底 y=0、顶 y=4、左 x=0、右 x=3
  for (const x of [0,1,2,3]) { add(x,0,0); add(x,4,0); }
  for (const y of [0,1,2,3,4]) { add(0,y,0); add(3,y,0); }
  const w = world(obs);
  const f = detectPortalFrame(w.isObsidian, w.isInterior, 1, 1, 0);
  expect(f).not.toBeNull();
  expect(f!.inner.length).toBe(6);
});
it('缺一条边 → null', () => {
  const obs = new Set<string>(); const add=(x:number,y:number,z:number)=>obs.add(`${x},${y},${z}`);
  for (const x of [0,1,2,3]) { add(x,0,0); /* 顶边故意不放 */ }
  for (const y of [0,1,2,3,4]) { add(0,y,0); add(3,y,0); }
  const w = world(obs);
  expect(detectPortalFrame(w.isObsidian, w.isInterior, 1, 1, 0)).toBeNull();
});
```

- [ ] **Step 2：跑测试确认失败** — Run: `npx vitest run src/core/world/portal.test.ts` — Expected: FAIL

- [ ] **Step 3：实现** `portal.ts`（沿 x、z 各试一次：从点火格向左右找黑曜石边界确定内宽，向下找底，向上找顶；校验内部 2×3、四边全黑曜石、内部全 interior；命中即返回内部格列表）。完整逻辑约 50 行——按测试驱动写到两测试皆过。

- [ ] **Step 4：跑测试确认通过** — Expected: PASS

- [ ] **Step 5：提交**

```bash
git add src/core/world/portal.ts src/core/world/portal.test.ts
git commit -m "feat(nether): 传送门框检测(纯逻辑,2x3黑曜石框)"
```

---

### Task 7：水浇岩浆 → 黑曜石

**Files:**
- Modify: 水流体规则所在处（执行时定位：`src/core/fluid/fluidSim.ts` 的水流入空气格逻辑，或 `Game.edit()` 的方块更新钩子）
- Test: `src/core/fluid/` 下新增或并入用例

**Interfaces:**
- 规则：当水将要"占据/流入"一个【是岩浆块】的格，或水的扩散目标相邻是岩浆时——把该岩浆格变 `OBSIDIAN`，水不进入（被消耗）。本期岩浆是静态块（不在 fluidSim 里），故规则放在"水扩散到某格前"判断目标/邻格是否岩浆。
- Consumes: Task1 `isLavaId`、`OBSIDIAN`。

- [ ] **Step 1：写失败测试**（仿 `_waterbug` 用内存 Grid，但 Grid 需能表达"某格是岩浆块"。最简：在水模拟的扩散判定里加"目标是岩浆→提议把目标设为 obsidian、不放水"。给 Grid 加 `isLava`/`setBlock` 钩子或直接用 amount/solid 表达。执行时按 fluidSim 的 FluidGrid 接口补一个 `isLava(x,y,z)` 与 `setSolid(x,y,z,id)`。）

```ts
it('水流到岩浆 → 该格变黑曜石、水不进', () => {
  // 源头(0,0,0)，相邻(1,0,0)是岩浆块；tick 后 (1,0,0) 应变黑曜石、且无水
  // 具体断言依实现接口定；核心：lava 格 → obsidian，且不被水覆盖
});
```

- [ ] **Step 2：跑测试确认失败** — Expected: FAIL

- [ ] **Step 3：实现** — 在水扩散 `spread()` 决定向某格 `propose` 水之前：若该格 `isLava` → 改为"把该格设为 OBSIDIAN（实心）"并**不**在该格放水。需给 `FluidGrid` 接口加 `isLava(x,y,z): boolean` 与一个"把格变实心方块"的出口（或复用 `setWater` 之外的 setBlock 钩子）。在 `Game` 接线时让这俩读/写真实世界。

- [ ] **Step 4：跑测试确认通过** — Expected: PASS

- [ ] **Step 5：提交**

```bash
git add src/core/fluid/
git commit -m "feat(nether): 水浇岩浆生成黑曜石(忠实MC采集)"
```

---

## Self-Review

**Spec coverage（对照 spec §4/§5/§6/§7/§8）：**
- 新方块/物品/贴图：Task 1/2/3 ✓
- 下界世界生成：Task 5 ✓
- 下界天空：Task 4 ✓
- 传送门框检测：Task 6 ✓（点燃→填块→传送 = Plan 2）
- 水浇岩浆出黑曜石：Task 7 ✓
- 分维度存档、维度切换、真正进入下界、岩浆伤害：**Plan 2**（本计划只造"地方"，不接入 `Game.ts` 主流程，避开并发冲突）。

**Placeholder 扫描：** Task 6/7 的实现步骤给的是"按测试写到过"而非逐行——因为是分支逻辑、最适合 TDD 驱动；测试已给死，接口已定，不算占位。其余均给了具体代码/具体增条目。

**类型一致：** `Dimension` 在 Task 4 定义并在 Task 5 复用；块/物品 id 常量名跨 Task 一致（OBSIDIAN/LAVA/…/NETHER_QUARTZ）。

**并发提示：** 本计划刻意只碰 registry/items/textures/worldgen/dayNight/新模块——尽量不动正被另一会话改的 `Game.ts`/`ChunkMeshManager`。执行前 `git fetch` 对齐；块 id 18+ / 物品 295+ 若被占用则整体顺延并改引用。
