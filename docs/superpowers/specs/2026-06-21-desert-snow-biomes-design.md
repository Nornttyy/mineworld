# 沙漠 + 雪原群系（含尸壳）· 设计 spec

- **日期**：2026-06-21
- **目标版本**：**Minecraft 1.12**（用户入坑版本，1:1 还原以 1.12 为准）
- **状态**：草案，待用户复审
- **范围**：给世界生成加两个群系（沙漠 / 雪原 Ice Plains）+ 沙漠专属怪（尸壳）+ 配套新方块与行为

---

## 1. 目标与非目标

### 做（本 spec）
- 气温驱动的群系分布：冷 = 雪原、热 = 沙漠、温带 = 现有平原/森林（森林噪声不变）。
- 沙漠：沙 + 沙石 + 仙人掌（碰到掉血）+ 尸壳（不被太阳烧的沙色僵尸）。
- 雪原：草方块 + 薄雪层 + 水面结冰（打滑）+ 云杉。
- 6~8 个新方块贴图（图集扩容）。
- 行为：仙人掌接触伤害、冰面打滑、尸壳日间免疫 + 打中附加“饥饿”近似。

### 不做（拆出去/后续）
- 流浪者、雪原动物群、下雪天气、冰融化、沙漠神殿/雪屋、**枯灌木**（用户明确不要）、沙石变体、仙人掌自动断裂。
- **“审查现有游戏哪里不像 1.12 并修” = 做完本群系后单独一轮**（独立 spec）。

---

## 2. 架构

新增 `src/core/worldgen/biome.ts`（与已偏大的 `terrain.ts` 分离 → 隔离、可单测）：

```
export type Biome = 'snow' | 'plains' | 'forest' | 'desert';
export function temperatureAt(wx, wz, seed): number   // 大尺度 fbm2 噪声 0..1，独立 seed 偏移
export function biomeAt(wx, wz, seed): Biome           // 见 §3
export const BIOME_CONFIG: Record<Biome, {...}>        // 每群系：地表块/填充块/树种/装饰参数
```

`terrain.ts` 的 `generateChunk` 按列调用 `biomeAt` 决定地表/填充/装饰；其余流程（高度、洞穴、矿脉、海/河注水）不变。

---

## 3. 群系分布（气温带）

- `temperatureAt`：`fbm2(wx/320, wz/320, seed+OFFSET)`，大尺度 → 大片连续区域、边界由噪声自然模糊。
- `biomeAt`：
  - `temp < COLD(≈0.38)` → `snow`
  - `temp > HOT(≈0.66)` → `desert`
  - 否则 → 用现有 `biomeForest` 决定 `plains`/`forest`（阈值不变）
- 阈值可调，目标各群系都不至于太罕见（沙漠/雪原各 ~¼，温带其余）。
- **海/河/沙滩优先**：`height ≤ SEA_LEVEL+1` 的列仍按现有“沙滩沙”处理，沙漠/雪原**只作用陆地地表**（不在水下放仙人掌、不在沙滩铺雪）。雪原的水面另见 §5。

---

## 4. 新方块（注册表 + 贴图，1.12 卡通风）

新增到 `src/core/blocks/registry.ts`（id 接在现有之后，从 18 起）+ `tools/textures/gen_textures.py` 程序生成贴图 + 图集。1.12 真实硬度。

| 方块 | 行为 / 数值（1.12） | 渲染 |
|---|---|---|
| sandstone | 硬度 0.8，镐采，掉自身 | 实心不透明（单贴图，所有面同；变体后续） |
| cactus | 硬度 0.4，徒手可采掉自身；**接触伤害**（§6） | 实心；cactus_side（顶可单独 cactus_top，或先复用 side） |
| ice | 水面冻结生成；**打滑**（§6）；半透明蓝 | 实心、走 cutout/半透明渲染（细节见实现） |
| snow_layer | 贴地薄白层；徒手/锹秒破、**不掉落**（暂无雪球物品）；**无半高碰撞**（装饰，可踩没） | mesher 特判：地表一片薄四边形（类 grass_plant/torch 特判） |
| spruce_log | 同橡木原木数值，斧更快 | 深色树皮（spruce_log_side + top；top 可复用 oak_log_top 省格） |
| spruce_leaves | 同橡树叶（镂空、手挖快不掉） | 深蓝绿、cutout |

**图集扩容**：当前 18 格（4×5 用到 18）。新增约 6~8 个 tile → 图集扩到 **4×7=28**（留余量）。需同步更新引用图集行列数的三处：`gen_textures.py`（ATLAS_COLS/ROWS + ATLAS_ORDER）、`src/core/mesh/mesher.ts`（ATLAS_COLS/ROWS）、`src/render/DropRenderer.ts`。`registry.ts` 的 `T` 索引表同步加新 tile。

---

## 5. 各群系生成规则（generateChunk）

按列拿到 `biome` 后：

- **desert**：地表 SAND；其下约 3 层 SAND → 约 3~4 层 SANDSTONE → 再走 stone/矿脉。装饰：仙人掌（hash 确定性、**仅当地表是 SAND 且 biome=desert**、高 1~3、彼此间隔 ≥2、立在 height+1 起）。不长橡树、不撒草丛。
- **snow（Ice Plains）**：地表 GRASS，其上 height+1 放 SNOW_LAYER（薄雪）；填充 DIRT。**结冰**：该列若是水面（height < SEA_LEVEL，顶层注了水），把最顶层水格替换为 ICE。装饰：云杉（比森林稀疏；形状 = 简化锥形 或 复用橡树树冠换云杉块，实现时定）；零星 SNOW_LAYER。少/不撒草丛。
- **plains / forest**：维持现状（橡树 + 草丛）。

确定性：所有装饰用 `hash2`/噪声，跨区块无缝、同种子稳定（沿用现有树木/草丛做法）。

---

## 6. 行为

- **仙人掌接触伤害**：每模拟刻，玩家碰撞箱与任一 cactus 方块相邻/相交 → 掉血（1.12：1 HP/约 0.5s，走玩家无敌帧 `hurtCd`）。纯函数 `touchesCactus(playerPos, getBlock): boolean`，在 Game 的 survival/physics tick 调用。
- **冰面打滑**：`src/core/physics/player.ts` 的水平移动摩擦改为**按脚下方块**取滑度（1.12：冰 0.98 vs 普通 0.6）。加 `blockSlipperiness(id)`。⚠️ 触及移动公式，需重点测试，别破坏正常手感。
- **尸壳**：
  - `mob.ts` 加 `'husk'` 到 `MobKind` + `MOB_DEFS`（hp 20、attack 3、sense 16、hostile、**sunImmune: true**），数值同僵尸。
  - `hostileAi.ts`：把现有日晒掉血判定 `if (sunlit && !def.explosive)` 改为 `if (sunlit && !def.sunImmune)`，并给苦力怕也设 `sunImmune: true`（保持其原本不被晒的行为）。
  - **打中附加“饥饿”近似**：尸壳近战命中玩家时，除伤害外额外加一截 `exhaustion`（→ 饱和/饥饿掉得更快），近似 1.12 Hunger，无需状态系统。实现：attackPlayer 事件带来源 kind，或在 Game 命中处理里判 `mob.kind==='husk'`。
  - 贴图：`mobTextures.ts`/`MobRenderer.ts` 复用僵尸盒状模型，换沙色破烂贴图/配色。
- **尸壳生成**：`mobSpawn.ts` 在 biome=desert 处把原本刷僵尸的位置换成刷尸壳（需在刷怪时查 `biomeAt`）。沙漠地表白天也可刷（sunImmune 不会被烧光）。

---

## 7. 测试

- `biome.test.ts`：`temperatureAt` 确定性；`biomeAt` 分带（构造冷/热/温带温度 → 期望群系）。
- `terrain.test.ts`（扩展）：沙漠列含 sand→sandstone；雪原列含 grass+snow_layer，水面列顶层为 ice；仙人掌只出现在沙漠沙地上；同种子确定性。
- `registry.test.ts`（扩展）：新方块存在 + 关键标志（cactus 接触/sandstone 镐采/ice 滑/spruce 同橡木等）。
- 行为纯函数：`touchesCactus`、`blockSlipperiness`（冰>普通）、尸壳 `sunImmune`（sunlit 下不掉血）、尸壳命中加 exhaustion。
- 全量 `vitest` + `tsc` + `vite build` 不回归。

---

## 8. 并发与落地

- **在隔离 worktree 实现**：`gen_textures.py` / mesher / 渲染当前被另一会话频繁改动；图集行列数变更牵涉 mesher/DropRenderer/gen_textures 三处，须一起改。
- 落地走：worktree 实现 + 验证 → 合回 `feature/cartoon-textures`（按需先 rebase 同步图集相关改动）→ 由用户决定是否合 `main` 部署。

---

## 9. 待复审的可调点

| ID | 假设 | 默认 |
|---|---|---|
| B1 | 群系占比沙漠/雪原各约 ¼ | 是（阈值可调） |
| B2 | 雪层只做装饰、无半高碰撞 | 是（用户认可“2px≈地面”） |
| B3 | 云杉形状：简化锥形或复用橡树染色 | 实现时择一，优先简化锥形 |
| B4 | cactus/sandstone 先用单贴图（不做 top/side 变体） | 是（省图集；后续可补） |
| B5 | ice 无精准采集则不掉落（同 1.12 无精准采集） | 是 |
