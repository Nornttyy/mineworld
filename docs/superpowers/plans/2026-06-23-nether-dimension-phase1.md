# 下界维度 · 第一期「踏入下界」Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 让玩家能在主世界搭黑曜石门、打火石点燃、走进下界探索、再回主世界——上下界各自独立存档、互不干扰。

**Architecture:** 不做大重构。`Game.world`/`Game.chunks` 改为可重指；过门时建新维度的 `ChunkWorld`、用 `ChunkMeshManager.setWorld()` 复用网格管理器（清网格、换 world 引用、保留 worker），dispose 旧 `ChunkWorld`。**同一时刻只有一个维度活着**（防双世界 OOM）。`dimension` 串过生成管线（`generateChunk`/worker），存档按维度前缀键区分方块改动。

**Tech Stack:** TypeScript, Vite, Three.js, Web Workers, Vitest. 体素世界，`CHUNK_H=192`。

参考 spec：`docs/superpowers/specs/2026-06-21-nether-dimension-phase1-design.md`（用户已确认取舍）。

## Global Constraints

- **1:1 还原 MC 1.12**：坐标比例 **下界=主世界/8、回程×8**；过门延迟 **4 秒（生存）**；黑曜石**靠水浇静态岩浆获得**；岩浆**接触 4 HP / 0.5 秒**。这些是硬性数值。
- **同一时刻只有一个维度的 `ChunkWorld`+网格活着**——切维度必须 dispose 旧 `ChunkWorld`（terminate 其 gen worker），绝不让两维度世界双份常驻（[[render-perf]] 的 createImageData/array-buffer OOM 根因）。
- **绝不动渲染分辨率**（清晰度 > 帧率，已是项目铁律）。本期纯 CPU/逻辑，无新增渲染开销。
- **向后兼容老存档**：迁移只读旧 `edits`（无前缀）当主世界，永不就地改写损坏。
- **并发纪律**（贴图会话也在改 `Game.ts`）：每个 Task 完成立即 `git add <具体文件>`（**绝不 `git add -A`**，免卷入别人半成品）+ commit；改 `Game.ts` 前先 `git pull --rebase`；收尾在干净检出验 `tsc --noEmit && vitest run && vite build` 自洽。见 [[github-and-deploy]]。
- **主线程绝不同步 `meshChunk`/`generateChunk`**（卡顿铁律）——切维度的预加载走既有异步 `chunks.update`+`flushMesh`。
- 已存在、**只需接线**（不要重造）：`generateChunk(cx,cz,seed,dimension='overworld')`(terrain.ts:220)、`generateNetherChunk`(terrain.ts:181, 种子+70000)、`skyStateAt(time,dimension='overworld')`→`NETHER_SKY`(dayNight.ts:69)、`Dimension`类型(dayNight.ts:57)、下界方块 18-25 + 贴图/图标、`detectPortalFrame(isObsidian,isInterior,x,y,z)`(portal.ts)、`FLINT_AND_STEEL=294`/`NETHER_QUARTZ=295`(items.ts)、`nether_portal`(25,非实心,light11)+`isNetherPortalId`、`blockSlipperiness`(registry.ts, 冰0.98)。

---

## File Structure

| 文件 | 责任 | 本计划改动 |
|---|---|---|
| `src/core/world/chunkWorld.ts` | 区块缓存 + 生成派发 | 构造加 `dimension`，透传给 worker/同步生成 |
| `src/core/world/chunkGen.worker.ts` | 后台生成 | 消息加 `dimension`，调 `generateChunk(...,dimension)` |
| `src/render/ChunkMeshManager.ts` | 区块网格 | 加 `setWorld(world)`（清网格+换引用，留 worker） |
| `src/save/worldStore.ts` | 存档 schema | 加按维度字段 + `dimEditKey`/`editsForDim` 帮手 |
| `src/core/blocks/registry.ts` | 方块属性 | 加 `isLavaId`，`blockSlipperiness` 加 SOUL_SAND |
| `src/core/physics/step.ts` | 移动物理 | 脚下灵魂沙 → 移动速度 ×0.5 |
| `src/core/fluid/fluidSim.ts` + `FluidGrid` | 流体 | 水临岩浆 → 岩浆变黑曜石、水消耗 |
| `src/core/world/portalFill.ts` (新) | 纯逻辑 | 点火填门 + 坐标映射 + 目的地造门（可单测） |
| `src/render/SkyObjects.ts` | 天空 | `setDimension(dim)`：下界隐日月云 |
| `src/game/Game.ts` | 总装 | 维度状态、点门、过门传送、切维度、岩浆伤害、天空接线 |

---

## Task 1: `ChunkWorld` 透传 dimension 到生成管线

**Files:**
- Modify: `src/core/world/chunkWorld.ts`（构造 21、`request` 82、`getChunk` 127、worker postMessage ~93）
- Modify: `src/core/world/chunkGen.worker.ts`（`GenRequest` 6-10、`generateChunk` 调用 15、postMessage 回包带 cx/cz）
- Test: `src/core/world/chunkWorld.test.ts`（已存在，追加）

**Interfaces:**
- Produces: `new ChunkWorld(seed: number, dimension?: 'overworld' | 'nether')`（默认 `'overworld'`，旧调用不变）；新增只读字段 `readonly dimension`。

- [ ] **Step 1: 失败测试** — 在 `chunkWorld.test.ts` 追加：
```ts
import { netherrack as NETHERRACK } from ...; // 或用 id 19
it('nether 维度生成地狱岩、与主世界同坐标不同', () => {
  const ov = new ChunkWorld(123, 'overworld');
  const ne = new ChunkWorld(123, 'nether');
  const cOv = ov.getChunk(0, 0);
  const cNe = ne.getChunk(0, 0);
  // 下界某填充层应是地狱岩(19)，主世界不是
  let netherrackInNe = 0;
  for (let y = 5; y < 120; y++) if (cNe.get(0, y, 0) === 19) netherrackInNe++;
  expect(netherrackInNe).toBeGreaterThan(0);
  expect(ne.dimension).toBe('nether');
  expect(ov.dimension).toBe('overworld');
});
```
- [ ] **Step 2: 跑测试看失败** — `npx vitest run src/core/world/chunkWorld.test.ts`，预期 FAIL（构造不接受第二参 / `dimension` 字段不存在）。
- [ ] **Step 3: 实现** — `chunkWorld.ts`：
  - 构造改 `constructor(readonly seed: number, readonly dimension: 'overworld' | 'nether' = 'overworld')`。
  - worker postMessage 加字段：`this.workers[this.rr].postMessage({ cx, cz, seed: this.seed, dimension: this.dimension });`
  - 同步回退 `getChunk` 第 131 行：`c = generateChunk(cx, cz, this.seed, this.dimension);`
  - `chunkGen.worker.ts`：`GenRequest` 加 `dimension: 'overworld' | 'nether';`；解构 `const { cx, cz, seed, dimension } = e.data;`；调用 `generateChunk(cx, cz, seed, dimension)`。
- [ ] **Step 4: 跑测试看过** — `npx vitest run src/core/world/chunkWorld.test.ts`，预期 PASS。再 `npx vitest run`（确保没破坏既有 10 个 chunkWorld 测试）。
- [ ] **Step 5: 提交** — `git add src/core/world/chunkWorld.ts src/core/world/chunkGen.worker.ts src/core/world/chunkWorld.test.ts && git commit -m "feat(nether): ChunkWorld 透传 dimension 到生成管线"`

---

## Task 2: `ChunkMeshManager.setWorld()` — 切维度复用网格管理器

**Files:**
- Modify: `src/render/ChunkMeshManager.ts`（构造 90-94 的 `private readonly world`；`unload`/`meshes`）
- Test: `src/render/chunkMeshSetWorld.test.ts`（新）

**Interfaces:**
- Produces: `ChunkMeshManager.setWorld(world: ChunkWorld): void` — 卸载所有已加载区块网格、清队列/pending、把内部 `world` 引用换成新维度的 world、**保留 mesh worker 池**。

- [ ] **Step 1: 失败测试** — `chunkMeshSetWorld.test.ts`（复用 `chunkLoadDiag.test.ts` 的 `document` 桩 + dummy atlas 构造方式）：
```ts
it('setWorld 清空旧维度网格并换 world 引用', () => {
  const scene = new THREE.Scene();
  const w1 = new ChunkWorld(1, 'overworld');
  const cmm: any = new ChunkMeshManager(scene, w1, new THREE.Texture());
  cmm.setFogFar(48);
  cmm.update(0, 0, 2, 9999); cmm.flushMesh(64);
  expect(cmm.meshes.size).toBeGreaterThan(0);
  const w2 = new ChunkWorld(1, 'nether');
  cmm.setWorld(w2);
  expect(cmm.meshes.size).toBe(0);          // 旧网格清空
  expect(cmm.world).toBe(w2);               // 引用已换
});
```
（注：构造前需 `globalThis.document` 最小桩，见 `chunkLoadDiag.test.ts` 顶部写法，照抄。）
- [ ] **Step 2: 跑测试看失败** — `npx vitest run src/render/chunkMeshSetWorld.test.ts`，预期 FAIL（`setWorld` 不存在 / `world` 是 readonly）。
- [ ] **Step 3: 实现** — `ChunkMeshManager.ts`：构造参数 `world` 从 `private readonly world` 改 `private world`。加方法：
```ts
/** 切维度：卸载当前所有区块网格、清队列与在途标记、换内部 world 引用。保留 worker 池(不重建)。 */
setWorld(world: ChunkWorld): void {
  for (const k of [...this.meshes.keys()]) this.unload(k); // 释放 geometry + 从 scene 移除
  this.meshQueue.length = 0;
  this.priorityQueue.length = 0;
  this.meshPending.clear();
  this.meshPendingSince.clear();
  this.meshFails.clear();
  this.editKeys.clear();
  this.world = world;
}
```
（核对这些私有字段名与当前文件一致：`meshes`/`meshQueue`/`priorityQueue`/`meshPending`/`meshPendingSince`/`meshFails`/`editKeys`/`unload`。若某字段名不同，以当前文件为准。）
- [ ] **Step 4: 跑测试看过** — `npx vitest run src/render/chunkMeshSetWorld.test.ts` PASS；`npx vitest run` 全绿。
- [ ] **Step 5: 提交** — `git add src/render/ChunkMeshManager.ts src/render/chunkMeshSetWorld.test.ts && git commit -m "feat(nether): ChunkMeshManager.setWorld 切维度复用网格管理器"`

---

## Task 3: 按维度存档（前缀键 + 字段 + 迁移帮手）

**Files:**
- Modify: `src/save/worldStore.ts`（`WorldSave` 9-22；加纯帮手）
- Test: `src/save/worldStore.test.ts`（已存在，追加）

**Interfaces:**
- Produces:
  - `WorldSave` 新增可选字段：`currentDimension?: 'overworld' | 'nether'`、`playerByDimension?: Partial<Record<'overworld'|'nether', { x:number; y:number; z:number; yaw:number; pitch:number }>>`、`mobsByDimension?: Partial<Record<'overworld'|'nether', SerializedMob[]>>`、`portalLinks?: Record<string, [number, number, number]>`。
  - `dimEditKey(dim: 'overworld'|'nether', x: number, y: number, z: number): string` — 主世界 `"x,y,z"`、下界 `"nether:x,y,z"`（主世界不加前缀 = 向后兼容）。
  - `parseEditKey(key: string): { dim: 'overworld'|'nether'; x: number; y: number; z: number }` — 反解（有 `nether:` 前缀=下界，否则主世界）。

- [ ] **Step 1: 失败测试** — `worldStore.test.ts` 追加：
```ts
import { dimEditKey, parseEditKey } from './worldStore';
it('维度前缀键：主世界无前缀(兼容老档)、下界有前缀、不撞', () => {
  expect(dimEditKey('overworld', 1, 2, 3)).toBe('1,2,3');
  expect(dimEditKey('nether', 1, 2, 3)).toBe('nether:1,2,3');
  expect(dimEditKey('overworld', 1, 2, 3)).not.toBe(dimEditKey('nether', 1, 2, 3));
});
it('parseEditKey 反解维度与坐标', () => {
  expect(parseEditKey('1,2,3')).toEqual({ dim: 'overworld', x: 1, y: 2, z: 3 });
  expect(parseEditKey('nether:1,2,3')).toEqual({ dim: 'nether', x: 1, y: 2, z: 3 });
});
```
- [ ] **Step 2: 跑测试看失败** — `npx vitest run src/save/worldStore.test.ts`，预期 FAIL（函数不存在）。
- [ ] **Step 3: 实现** — `worldStore.ts`：在 `WorldSave` 加上述可选字段（全 optional → 旧档 `JSON.parse` 后这些是 `undefined`，零迁移损坏）。加：
```ts
export function dimEditKey(dim: 'overworld' | 'nether', x: number, y: number, z: number): string {
  return dim === 'nether' ? `nether:${x},${y},${z}` : `${x},${y},${z}`;
}
export function parseEditKey(key: string): { dim: 'overworld' | 'nether'; x: number; y: number; z: number } {
  if (key.startsWith('nether:')) {
    const [x, y, z] = key.slice(7).split(',').map(Number);
    return { dim: 'nether', x, y, z };
  }
  const [x, y, z] = key.split(',').map(Number);
  return { dim: 'overworld', x, y, z };
}
```
- [ ] **Step 4: 跑测试看过** — `npx vitest run src/save/worldStore.test.ts` PASS；`npx vitest run` 全绿。
- [ ] **Step 5: 提交** — `git add src/save/worldStore.ts src/save/worldStore.test.ts && git commit -m "feat(nether): 存档按维度前缀键 + 维度字段(向后兼容)"`

---

## Task 4: 灵魂沙减速（脚下灵魂沙 → 移动速度 ×0.5）

**Files:**
- Modify: `src/core/physics/step.ts`（`step` 89；水平移动施力处 ~129-146）
- Modify: `src/core/blocks/registry.ts`（加 `SOUL_SAND` 导出常量若无）
- Test: `src/core/physics/soulSand.test.ts`（新）

**Interfaces:**
- Consumes: `step(player, intent, world)`、`world.getBlock(x,y,z)`。
- 说明：灵魂沙是**降低主动移动速度**（按住方向键也只走一半），不是冰那种"松键打滑"。所以**不能**只塞进 `blockSlipperiness`（那只在无输入时生效）。要在"按输入加速到目标水平速度"的那段，按脚下方块乘系数。

- [ ] **Step 1: 失败测试** — `soulSand.test.ts`：构造一个最小 `VoxelWorld`，地面分别为石头(3)和灵魂沙(20)，玩家站上面、持续按前进若干 tick，比较稳定水平速度：
```ts
function flatWorld(floorId: number): any {
  return { getBlock: (_x:number,y:number,_z:number) => (y < 1 ? floorId : 0), isSolid:(_x:number,y:number,_z:number)=> y<1, isWater:()=>false };
}
function steadySpeed(floorId: number): number {
  let p:any = { pos:{x:0,y:1,z:0}, vel:{x:0,y:0,z:0}, onGround:true };
  const w = flatWorld(floorId);
  for (let i=0;i<40;i++) p = step(p, { forward:1, strafe:0, jump:false, sprint:false } as any, w);
  return Math.hypot(p.vel.x, p.vel.z);
}
it('灵魂沙上稳定速度约为石头上的一半', () => {
  const stone = steadySpeed(3), soul = steadySpeed(20);
  expect(soul).toBeLessThan(stone * 0.65);
  expect(soul).toBeGreaterThan(stone * 0.35);
});
```
（`intent` 字段名以 `MoveIntent` 实际为准——实现前先看 `step.ts` 的 `MoveIntent` 定义，把 `forward/strafe/...` 改成真实字段。）
- [ ] **Step 2: 跑测试看失败** — `npx vitest run src/core/physics/soulSand.test.ts`，预期 FAIL（两者速度相同）。
- [ ] **Step 3: 实现** — `step.ts`：在算出脚下方块 `floorId` 后（已有 `blockSlipperiness` 那段附近），求 `const speedMul = floorId === SOUL_SAND ? 0.5 : 1;`，把它乘进**水平目标速度/加速**（即按输入推进的那一项，不是无输入摩擦项）。`registry.ts` 确认/补 `export const SOUL_SAND = 20;`。
- [ ] **Step 4: 跑测试看过** — `npx vitest run src/core/physics/soulSand.test.ts` PASS；`npx vitest run` 全绿。
- [ ] **Step 5: 提交** — `git add src/core/physics/step.ts src/core/blocks/registry.ts src/core/physics/soulSand.test.ts && git commit -m "feat(nether): 灵魂沙减速(脚下→移动速度×0.5)"`

---

## Task 5: 岩浆伤害（接触 4 HP / 0.5 秒）

**Files:**
- Modify: `src/core/blocks/registry.ts`（加 `isLavaId`、`LAVA=23` 若无）
- Modify: `src/game/Game.ts`（`stepSurvival` ~707-740，仙人掌伤害 730 附近）
- Test: `src/core/blocks/registry.test.ts`（追加，测 `isLavaId`）

**Interfaces:**
- Produces: `isLavaId(id: number): boolean`（registry.ts，`id === 23`）。
- Consumes: `Game.hurtPlayer(damage, kx, kz)`(Game.ts:753)、既有 `hurtCd` 防叠计时（仙人掌同款）。

- [ ] **Step 1: 失败测试** — `registry.test.ts` 追加：
```ts
import { isLavaId } from './registry';
it('isLavaId 只认岩浆(23)', () => { expect(isLavaId(23)).toBe(true); expect(isLavaId(0)).toBe(false); expect(isLavaId(19)).toBe(false); });
```
- [ ] **Step 2: 跑测试看失败** — `npx vitest run src/core/blocks/registry.test.ts`，预期 FAIL。
- [ ] **Step 3: 实现** —
  - `registry.ts`：`export const LAVA = 23;` `export const isLavaId = (id: number): boolean => id === LAVA;`
  - `Game.ts` `stepSurvival`：仙人掌伤害块（~730）后加（用脚部 + 身体若干采样点判 AABB 触岩浆；最简：脚格与眼格）：
```ts
const feetLava = isLavaId(this.world.getBlock(px, Math.floor(this.player.pos.y), pz));
const bodyLava = isLavaId(this.world.getBlock(px, Math.floor(this.player.pos.y + 0.9), pz));
if ((feetLava || bodyLava) && this.hurtCd <= 0) this.hurtPlayer(4, 0, 0); // MC 1.12：岩浆 4HP/0.5s
```
（`px`/`pz`/`hurtCd` 沿用该函数里仙人掌伤害已有的同名变量；`hurtPlayer` 内部已含红屏+冷却，确认 `hurtCd` 冷却≈0.5s，与仙人掌一致即可。导入 `isLavaId`。）
- [ ] **Step 4: 跑测试看过** — `npx vitest run src/core/blocks/registry.test.ts` PASS；`npx tsc --noEmit` 干净；`npx vitest run` 全绿。
- [ ] **Step 5: 提交** — `git add src/core/blocks/registry.ts src/game/Game.ts src/core/blocks/registry.test.ts && git commit -m "feat(nether): 岩浆接触伤害 4HP/0.5s(1:1)"`

---

## Task 6: 水浇岩浆 → 黑曜石（黑曜石来源）

**Files:**
- Modify: `src/core/fluid/fluidSim.ts`（`evaluate` ~97-133；`FluidGrid` 接口 ~19）
- Modify: `src/game/Game.ts`（`fluidGrid` 闭包 272-278：补 `getBlock`/`setBlock`）
- Test: `src/core/fluid/lavaObsidian.test.ts`（新）

**Interfaces:**
- Produces: 流体 tick 中，**流动水**（非源）与岩浆相邻（含上下）时，岩浆格 → 黑曜石(18)，水格被消耗（设为空）。MC：流动水碰岩浆=黑曜石（源水碰则生圆石，本期只做黑曜石路径，简化）。
- `FluidGrid` 接口新增：`getBlock(x,y,z): number`、`setBlock(x,y,z,id): void`。

- [ ] **Step 1: 失败测试** — `lavaObsidian.test.ts`：用一个 in-memory 方块网格 + 最小 `FluidGrid` 实现，放一格流动水紧邻一格岩浆(23)，跑 `sim.tick(grid)`，断言岩浆变 18、水变 0：
```ts
it('流动水临岩浆 → 岩浆变黑曜石、水被消耗', () => {
  const blocks = new Map<string, number>();
  const water = new Map<string, {a:number;s:boolean;f:boolean}>();
  const K=(x:number,y:number,z:number)=>`${x},${y},${z}`;
  blocks.set(K(1,0,0), 23);                 // 岩浆
  water.set(K(0,0,0), {a:6,s:false,f:false}); // 流动水(非源)
  const grid:any = {
    isSolid:(x:number,y:number,z:number)=>{const b=blocks.get(K(x,y,z))??0; return b!==0 && b!==23;},
    amount:(x:number,y:number,z:number)=>water.get(K(x,y,z))?.a??0,
    isSource:(x:number,y:number,z:number)=>!!water.get(K(x,y,z))?.s,
    isFalling:(x:number,y:number,z:number)=>!!water.get(K(x,y,z))?.f,
    setWater:(x:number,y:number,z:number,a:number,s:boolean,f:boolean)=>{a>0?water.set(K(x,y,z),{a,s,f}):water.delete(K(x,y,z));},
    getBlock:(x:number,y:number,z:number)=>blocks.get(K(x,y,z))??0,
    setBlock:(x:number,y:number,z:number,id:number)=>{id===0?blocks.delete(K(x,y,z)):blocks.set(K(x,y,z),id);},
  };
  const sim = new FluidSim();
  sim.activate(0,0,0);
  sim.tick(grid);
  expect(blocks.get(K(1,0,0))).toBe(18);     // 岩浆→黑曜石
  expect(water.get(K(0,0,0))?.a ?? 0).toBe(0); // 水被消耗
});
```
- [ ] **Step 2: 跑测试看失败** — `npx vitest run src/core/fluid/lavaObsidian.test.ts`，预期 FAIL。
- [ ] **Step 3: 实现** —
  - `FluidGrid` 接口加 `getBlock`/`setBlock`。
  - `fluidSim.evaluate()`：处理"本格是流动水(amount>0 且非 source)"时，扫 6 邻居(4 平 + 上 + 下)，若某邻居 `g.getBlock===23` → `g.setBlock(邻居,18)`、`g.setWater(本格,0,false,false)` 并 return（本格已耗）。注意双缓冲：直接改方块用 `g.setBlock`（即时），水用既有 `setWater` propose 路径。
  - `Game.ts` `fluidGrid` 闭包补：`getBlock:(x,y,z)=>this.world.getBlock(x,y,z), setBlock:(x,y,z,id)=>this.edit(x,y,z,id),`（`edit` 会 setBlock+activate+remesh，黑曜石会正确上屏）。
- [ ] **Step 4: 跑测试看过** — `npx vitest run src/core/fluid/lavaObsidian.test.ts` PASS；`npx vitest run` 全绿（确认没破坏既有 fluid/water 测试）。
- [ ] **Step 5: 提交** — `git add src/core/fluid/fluidSim.ts src/game/Game.ts src/core/fluid/lavaObsidian.test.ts && git commit -m "feat(nether): 水浇岩浆→黑曜石(忠实MC,玩家可自采)"`

---

## Task 7: 下界天空/雾（按维度）

**Files:**
- Modify: `src/render/SkyObjects.ts`（加 `setDimension`）
- Modify: `src/game/Game.ts`（`updateDayNight` 1456：`skyStateAt(this.worldTime, this.dimension)`；切维度时调 `skyObjects.setDimension`）
- Test: `src/render/skyObjectsDimension.test.ts`（新，轻量）

**Interfaces:**
- Consumes: `this.dimension`（Task 9 加的 `Game` 字段；本任务可先用字面量 `'overworld'` 占位，Task 9 接上真实字段）。
- Produces: `SkyObjects.setDimension(dim: 'overworld' | 'nether'): void` — 下界隐藏 sun/moon/realSun/sunGlow/realMoon/voxelClouds/softClouds（全 `.visible=false`）；主世界恢复（交回 `setLightingQuality` 的显隐逻辑）。

- [ ] **Step 1: 失败测试** — `skyObjectsDimension.test.ts`（需 `document` 桩，照抄 `chunkLoadDiag.test.ts` 顶部；THREE.Scene）：
```ts
it('setDimension(nether) 隐藏日月云', () => {
  const so:any = new SkyObjects(new THREE.Scene());
  so.setDimension('nether');
  for (const m of [so.sun, so.moon, so.realSun, so.realMoon, so.voxelClouds, so.softClouds]) expect(m.visible).toBe(false);
});
```
- [ ] **Step 2: 跑测试看失败** — `npx vitest run src/render/skyObjectsDimension.test.ts`，预期 FAIL（`setDimension` 不存在）。
- [ ] **Step 3: 实现** — `SkyObjects.ts`：
```ts
setDimension(dim: 'overworld' | 'nether'): void {
  this.dim = dim;
  if (dim === 'nether') {
    for (const m of [this.sun, this.moon, this.realSun, this.sunGlow, this.realMoon, this.voxelClouds, this.softClouds]) m.visible = false;
  } else {
    this.setLightingQuality(this.lq); // 恢复主世界显隐(按当前光影档)
  }
}
```
（需存当前光影档：在 `setLightingQuality` 里记 `this.lq = q`。`update()` 里若 `this.dim==='nether'` 则跳过日月定位+云重建。）
  - `Game.ts`：`updateDayNight` 把 `skyStateAt(this.worldTime)` → `skyStateAt(this.worldTime, this.dimension)`（雾色随之变暗红）；`update` 调 `skyObjects.update` 前不变（内部已按 dim 跳过）。
- [ ] **Step 4: 跑测试看过** — `npx vitest run src/render/skyObjectsDimension.test.ts` PASS；`npx vitest run` 全绿。
- [ ] **Step 5: 提交** — `git add src/render/SkyObjects.ts src/game/Game.ts src/render/skyObjectsDimension.test.ts && git commit -m "feat(nether): 下界天空(隐日月云)+暗红雾"`

---

## Task 8: 打火石点门（填传送门块）

**Files:**
- Create: `src/core/world/portalFill.ts`（纯逻辑：点火填门 + 坐标映射 + 目的地造门）
- Create: `src/core/world/portalFill.test.ts`
- Modify: `src/game/Game.ts`（`onUseDown` 831-856：手持打火石命中黑曜石 → 点门）

**Interfaces:**
- Consumes: `detectPortalFrame(isObsidian, isInterior, x, y, z)`(portal.ts)。
- Produces（全纯函数，喂 probe/收集 setter，可单测）：
  - `ignitePortal(getBlock, x, y, z): Array<[number,number,number]> | null` — 从被点的黑曜石格出发，**以其上方格**为内部种子试 `detectPortalFrame`；命中返回要填 `nether_portal` 的内部格列表，否则 `null`。`isObsidian=(x,y,z)=>getBlock===18`，`isInterior=(x,y,z)=>{const b=getBlock; return b===0||b===25;}`。
  - `mapPortalCoord(dim: 'overworld'|'nether', x: number, z: number): [number, number]` — overworld→nether `[floor(x/8),floor(z/8)]`；nether→overworld `[x*8,z*8]`。

- [ ] **Step 1: 失败测试** — `portalFill.test.ts`：搭一个内部 2×3、四周黑曜石的网格（x 轴朝向），点最底内部格下方的黑曜石，断言返回 6 个内部格；再测坐标映射：
```ts
it('mapPortalCoord 1:8 双向', () => {
  expect(mapPortalCoord('overworld', 80, 160)).toEqual([10, 20]);
  expect(mapPortalCoord('nether', 10, 20)).toEqual([80, 160]);
});
it('ignitePortal 命中合法框返回内部 6 格', () => {
  const b = new Map<string, number>(); const K=(x:number,y:number,z:number)=>`${x},${y},${z}`;
  const get=(x:number,y:number,z:number)=>b.get(K(x,y,z))??0;
  // 内部 2 宽(x=0..1) × 3 高(y=1..3)，四边黑曜石(18)，门面朝 z（沿 x 轴）
  for (let x=-1;x<=2;x++){ b.set(K(x,0,0),18); b.set(K(x,4,0),18); }
  for (let y=0;y<=4;y++){ b.set(K(-1,y,0),18); b.set(K(2,y,0),18); }
  const inner = ignitePortal(get, 0, 0, 0); // 点底部内部格(0,1,0)正下方的黑曜石(0,0,0)
  expect(inner).not.toBeNull();
  expect(inner!.length).toBe(6);
});
```
- [ ] **Step 2: 跑测试看失败** — `npx vitest run src/core/world/portalFill.test.ts`，预期 FAIL。
- [ ] **Step 3: 实现** — 写 `portalFill.ts`：`ignitePortal` 内部种子取 `(x, y+1, z)`，构造 `isObsidian`/`isInterior` 闭包，调 `detectPortalFrame`，命中返回 `frame.inner`。`mapPortalCoord` 按上式。
  - `Game.ts` `onUseDown`：在 furnace/crafting 检查后、bow/food 前加：
```ts
if (hit && stack && stack.id === FLINT_AND_STEEL && this.world.getBlock(hit.x, hit.y, hit.z) === OBSIDIAN) {
  const inner = ignitePortal((x,y,z)=>this.world.getBlock(x,y,z), hit.x, hit.y, hit.z);
  if (inner) { for (const [x,y,z] of inner) this.edit(x, y, z, NETHER_PORTAL); return; }
}
```
（导入 `ignitePortal`、`FLINT_AND_STEEL`、`OBSIDIAN(18)`、`NETHER_PORTAL(25)`。`edit` 持久化为 edits + 上屏。`stack` 是已读的手持物。）
- [ ] **Step 4: 跑测试看过** — `npx vitest run src/core/world/portalFill.test.ts` PASS；`npx tsc --noEmit` 干净；`npx vitest run` 全绿。
- [ ] **Step 5: 提交** — `git add src/core/world/portalFill.ts src/core/world/portalFill.test.ts src/game/Game.ts && git commit -m "feat(nether): 打火石点燃黑曜石门→填传送门块"`

---

## Task 9: 切维度核心（`Game.switchDimension`）

**Files:**
- Modify: `src/game/Game.ts`（`world`/`chunks` 去 readonly 176/178；世界构造块 271-302 抽成 `buildDimension`；加 `dimension` 字段 + `switchDimension`；snapshot 426-447 存维度态；构造时按 `currentDimension` 起始）

**Interfaces:**
- Consumes: Task 1 `new ChunkWorld(seed, dim)`、Task 2 `chunks.setWorld`、Task 3 `dimEditKey`/`parseEditKey` + 存档字段、Task 7 `skyObjects.setDimension`。
- Produces: `Game.dimension: 'overworld' | 'nether'`；`switchDimension(target: 'overworld'|'nether', pos: {x:number;y:number;z:number}): void`。

- [ ] **Step 1: 抽 `buildDimension` + 去 readonly（无新行为，先保证现有测试/构建不变）**
  - `world`/`chunks` 去 `readonly`。
  - 把"建 world + 应用 edits + editHook + 建 chunks"抽成 `private buildDimension(dim): void`，**editHook 与 edits 应用改为按维度前缀键过滤**（用 `parseEditKey`：只应用 `parsed.dim === dim` 的；主世界键无前缀）。构造里原 271-302 改成 `this.dimension = save.currentDimension ?? 'overworld'; this.buildDimension(this.dimension);`。
  - 编译期占位 `private dimension: 'overworld' | 'nether' = 'overworld';`
- [ ] **Step 2: 验证未回归** — `npx tsc --noEmit` 干净；`npx vitest run` 全绿（无新测试，确保重构没破坏）。
- [ ] **Step 3: 实现 `switchDimension`**
```ts
private switchDimension(target: 'overworld' | 'nether', pos: { x: number; y: number; z: number }): void {
  // 1) 存当前维度玩家位 + 生物
  (this.save.playerByDimension ??= {})[this.dimension] = { x:this.player.pos.x, y:this.player.pos.y, z:this.player.pos.z, yaw:this.look.yaw, pitch:this.look.pitch };
  (this.save.mobsByDimension ??= {})[this.dimension] = this.mobs.map(serializeMob);
  // 2) 切维度
  const old = this.world;
  this.dimension = target;
  this.save.currentDimension = target;
  this.buildDimension(target);          // 建新 world(+按维度 edits/editHook)
  this.chunks.setWorld(this.world);     // 复用网格管理器，清旧网格、换引用
  old.dispose();                        // 关键：terminate 旧维度 gen worker，防双世界
  this.fluidSim.clear?.();              // 清流体活跃集(若有 clear；否则重置等价)
  this.mobs.length = 0;
  for (const sm of this.save.mobsByDimension?.[target] ?? []) this.mobs.push(deserializeMob(sm));
  // 3) 落点 + 天空 + 预加载
  this.player = { pos: { ...pos }, vel: { x:0, y:0, z:0 }, onGround:false };
  this.skyObjects.setDimension(target);
  this.preloadAround(pos);              // 复用既有出生预加载(异步 update+flushMesh)
  this.portalCooldown = 60;             // ~过门后 60 tick 冷却，防来回弹
}
```
  - `snapshot()`：加 `this.save.currentDimension = this.dimension;` 并把当前维度玩家/生物写进 `playerByDimension`/`mobsByDimension`（与 switch 里一致）。
  - `preloadAround(pos)`：抽取构造里出生预加载那几行（`chunks.update(...,999)`+`flushMesh`），参数化中心。
  - `portalCooldown` 字段 + 每 tick 递减。
- [ ] **Step 4: 验证** — `npx tsc --noEmit` 干净；`npx vitest run` 全绿。（切维度本身重 UI/异步，难纯单测；本任务靠类型+构建+不回归 + Task 10 的端到端手测验收。）
- [ ] **Step 5: 提交** — `git add src/game/Game.ts && git commit -m "feat(nether): Game.switchDimension 切维度(buildDimension/setWorld/dispose旧)"`

---

## Task 10: 过门传送（计时 + 链接 + 目的地造门）

**Files:**
- Modify: `src/core/world/portalFill.ts`（加 `buildDestinationPortal`）
- Modify: `src/core/world/portalFill.test.ts`（追加）
- Modify: `src/game/Game.ts`（tick 内：站门计时 → 触发；`portalLinks` 读写）

**Interfaces:**
- Consumes: Task 8 `mapPortalCoord`、Task 9 `switchDimension`、`detectPortalFrame`。
- Produces: `buildDestinationPortal(getBlock, dim, ax, az): { edits: Array<[number,number,number,number]>; spawn: {x:number;y:number;z:number} }` — 在目标维度坐标 `(ax,az)` 找安全 Y，产出要写的方块（黑曜石框 + 传送门 + 落脚地板 + 清出的 3 高空气），返回 edits 列表 `[x,y,z,id]` 与落点。**保证安全落脚**（脚下实心、身位无岩浆）。

- [ ] **Step 1: 失败测试** — `portalFill.test.ts` 追加：下界一根满是地狱岩的列，`buildDestinationPortal(get,'nether',ax,az)` 应：① edits 含至少 1 个 25(传送门)、多个 18(框)；② 落点脚下是实心、落点处及上方 2 格被清成可站（非岩浆/非实心）：
```ts
it('buildDestinationPortal 造合法门 + 安全落脚', () => {
  const b = new Map<string, number>(); const K=(x:number,y:number,z:number)=>`${x},${y},${z}`;
  for (let y=0;y<40;y++) for (let x=0;x<6;x++) for (let z=0;z<6;z++) b.set(K(x,y,z),19); // 实心地狱岩
  const get=(x:number,y:number,z:number)=>b.get(K(x,y,z))??0;
  const r = buildDestinationPortal(get, 'nether', 2, 2);
  expect(r.edits.some(([,,,id])=>id===25)).toBe(true);
  expect(r.edits.filter(([,,,id])=>id===18).length).toBeGreaterThan(5);
  // 应用 edits 后落点可站
  for (const [x,y,z,id] of r.edits) id===0?b.delete(K(x,y,z)):b.set(K(x,y,z),id);
  expect(get(Math.floor(r.spawn.x), Math.floor(r.spawn.y)-1, Math.floor(r.spawn.z))).not.toBe(0); // 脚下实心
  expect(get(Math.floor(r.spawn.x), Math.floor(r.spawn.y), Math.floor(r.spawn.z))).not.toBe(23); // 身位非岩浆
});
```
- [ ] **Step 2: 跑测试看失败** — `npx vitest run src/core/world/portalFill.test.ts`，预期新用例 FAIL。
- [ ] **Step 3: 实现**
  - `portalFill.ts` `buildDestinationPortal`：从安全 Y（下界：岩浆面 `NETHER_LAVA_Y=31` 之上、找第一段"实心顶 + 上方≥3 空"的位置；找不到就在某 Y 铺一块黑曜石平台）造 4×5 框（内 2×3）填 25，清出内部+落脚 3 高空气，落点=门内底格。返回 edits + spawn。
  - `Game.ts` tick（`stepSurvival` 后、~605）：
```ts
if (this.portalCooldown > 0) this.portalCooldown--;
const inPortal = isNetherPortalId(this.world.getBlock(px, Math.floor(this.player.pos.y), pz));
this.portalTimer = inPortal ? this.portalTimer + TICK_MS / 1000 : 0;
if (inPortal && this.portalCooldown === 0 && this.portalTimer >= 4) { // 1:1 生存 4 秒
  const target = this.dimension === 'overworld' ? 'nether' : 'overworld';
  const anchorKey = `${this.dimension}:${Math.floor(this.player.pos.x)},${Math.floor(this.player.pos.y)},${Math.floor(this.player.pos.z)}`;
  const links = (this.save.portalLinks ??= {});
  let dest = links[anchorKey];
  if (!dest) {
    const [tx, tz] = mapPortalCoord(this.dimension, this.player.pos.x, this.player.pos.z);
    const built = buildDestinationPortal((x,y,z)=>this.worldAt(target,x,y,z), target, tx, tz);
    for (const [x,y,z,id] of built.edits) this.editDim(target, x, y, z, id); // 写进目标维度 edits(前缀键)
    dest = [built.spawn.x, built.spawn.y, built.spawn.z];
    links[anchorKey] = dest;
    links[`${target}:${Math.floor(dest[0])},${Math.floor(dest[1])},${Math.floor(dest[2])}`] = [this.player.pos.x, this.player.pos.y, this.player.pos.z];
  }
  this.switchDimension(target, { x: dest[0], y: dest[1], z: dest[2] });
}
```
  - 配套小helper：`editDim(dim,x,y,z,id)` = 写 `this.save.edits[dimEditKey(dim,x,y,z)]=id`（目标维度当前未加载，只写存档；切过去 buildDimension 时应用）；`worldAt(dim,x,y,z)` = 读目标维度某格（未加载维度：`save.edits[dimEditKey]` 优先，否则 `generateChunk` 同步采样该列一次——仅造门用，量小可接受）。`portalTimer` 字段。
- [ ] **Step 4: 跑测试看过** — `npx vitest run src/core/world/portalFill.test.ts` PASS；`npx tsc --noEmit` 干净；`npx vitest run` 全绿。
- [ ] **Step 5: 提交** — `git add src/core/world/portalFill.ts src/core/world/portalFill.test.ts src/game/Game.ts && git commit -m "feat(nether): 过门4s传送 + 1:8链接 + 目的地造门(安全落脚)"`

---

## 收尾：整体验证（不是单独 Task，做完 10 个后跑）

- [ ] 干净检出自洽：`git worktree add --detach /tmp/verify HEAD && cd /tmp/verify && npm ci >/dev/null 2>&1; npx tsc --noEmit && npx vitest run && npx vite build`，全绿后 `cd - && git worktree remove /tmp/verify --force`。
- [ ] 手测脚本（用户线上验收）：主世界搭 4×5 黑曜石框 → 打火石点燃 → 站门 4 秒 → 进下界（暗红雾、地狱岩、岩浆海、无日月）→ 在下界站回程门 4 秒 → 回到主世界对应位置；水浇下界岩浆得黑曜石；踩岩浆掉血；走灵魂沙变慢；存档退出重进维度/改动都对。
- [ ] 部署 gh-pages（按 [[github-and-deploy]] worktree 法，先和线上 diff）。

---

## Self-Review（写完计划后自查）

- **Spec 覆盖**：§3 维度切换=Task1/2/9；§4 下界地形=已存在(不需任务)；§5 分维度存档=Task3/9；§6 天空=Task7；§7 传送门=Task8/10；§8 黑曜石来源=Task6、岩浆伤害=Task5、灵魂沙=Task4、方块/物品=已存在。✅ 全覆盖。
- **取舍对齐**：静态岩浆(不流动)=本期不做流动，岩浆伤害用静态块判定 ✅；不放怪=本计划无怪(留你要的 4 怪下一份 spec) ✅。
- **类型一致**：`'overworld'|'nether'` 全程一致；`dimEditKey`/`parseEditKey`/`mapPortalCoord`/`ignitePortal`/`buildDestinationPortal`/`setWorld`/`switchDimension`/`buildDimension` 命名跨任务一致 ✅。
- **占位扫描**：各 Task 均给了测试代码+实现代码+确切命令；Game.ts 大文件处给了精确插入锚点(行号)与代码，注明"以当前文件实际字段名为准"(因贴图会话在改) ✅。
- **风险**：Game.ts 与贴图会话并发——靠 Global Constraints 的"逐文件 add + 勤 rebase + 干净检出验构建"缓解。
