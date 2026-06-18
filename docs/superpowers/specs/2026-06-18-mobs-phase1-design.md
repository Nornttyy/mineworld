# 生物 第 1 期 · 生物地基（猪 / 牛 / 羊 / 鸡）设计

- **日期**：2026-06-18
- **状态**：已与用户确认范围（用户选「全套 MC」，分期推进，本期 = 第 1 期地基）
- **承接**：扩展 [2026-06-16-chicken-entity-design](./2026-06-16-chicken-entity-design.md) 的「通用实体层」到 4 种被动动物
- **约束**：1:1 还原 MC Java；`src/core/**` 纯逻辑（禁 import three/render），无头可单测

---

## 1. 路线图（用户要「全套 MC」，分 3 期交付，每期可玩）

- **第 1 期（本期）· 地基**：4 种动物自然刷新 + 游荡 AI + 重力/碰撞/不掉崖 + 可攻击击杀 + 击退 + 受击惊慌逃跑 + 死亡掉落 + 渲染。掉落接通熔炉(熟肉)与饥饿(吃)。鸡下蛋(逻辑简单，含入本期)。
- **第 2 期 · 繁殖**：喂食→恋爱→幼崽→成长、手持食物跟随。（需先加小麦/胡萝卜/种子来源）
- **第 3 期 · 物种特性**：羊吃草/剪羊毛/羊毛再生、蛋孵化等。

---

## 2. 通用实体模型（扩展自鸡 spec §3）

```ts
export type MobKind = 'pig' | 'cow' | 'sheep' | 'chicken';

export interface Mob {
  id: number;
  kind: MobKind;
  pos: Vec3;          // 脚部中心
  vel: Vec3;          // 方块/tick
  yaw: number;        // 朝向（弧度，0 朝 +X，与玩家 wishDir 一致）
  onGround: boolean;
  health: number;
  hurtCooldown: number; // tick，>0 时不可再次受击（MC 无敌帧 10t）
  ai: { state: 'idle' | 'wander' | 'panic'; timer: number; target: Vec3 | null };
  eggTimer: number;     // 仅鸡用；下个蛋的 tick
}
```

每种的固定属性查 `MOB_DEFS[kind]`（HP、宽、高、moveSpeed、fallImmune、掉落表）。

## 3. 四种动物 1:1 数值（MC Java）

| 动物 | HP | 宽×高 | 走速(格/tick) | 免摔 | 击杀掉落 | 熔炉熟食 |
|---|---|---|---|---|---|---|
| 鸡 chicken | 4 | 0.4×0.7 | 0.07 | 是(扇翅缓降) | 0–2 羽毛 + 1 生鸡肉 | 熟鸡肉；下蛋 6000–12000t |
| 猪 pig | 10 | 0.9×0.9 | 0.09 | 否 | 1–3 生猪排 | 熟猪排 |
| 牛 cow | 10 | 0.9×1.4 | 0.08 | 否 | 1–3 生牛肉 + 0–2 皮革 | 牛排(熟牛肉) |
| 羊 sheep | 8 | 0.9×1.3 | 0.08 | 否 | 1–2 生羊肉 + 1 羊毛 | 熟羊肉 |

> 走速按「比玩家慢、看着对」调（玩家走 0.216/tick）；panic 时 ×1.8。MC 移速属性映射复杂，实现时按手感+Wiki 复核。

## 4. 新增物品（`core/items/items.ts`，id 续 275+）

食物（nutrition, saturationModifier，MC 值）：
- raw_porkchop 3/0.3 → cooked_porkchop 8/0.8
- raw_beef 3/0.3 → steak(cooked_beef) 8/0.8
- raw_mutton 2/0.3 → cooked_mutton 6/0.8
- raw_chicken 2/0.3 → cooked_chicken 6/0.6

非食物：leather、wool、feather、egg（egg 暂只作掉落物，孵化留后期）。

冶炼表（`core/crafting/smelting.ts`）：4 种生肉 → 对应熟肉。

## 5. AI / 物理（纯函数，可单测；照 itemDrop.ts + 鸡 spec §4 的事件管线）

- `updateMob(m, world, rng, physics) → { mob, events }`：AI 决策→施加到 vel→物理步进→鸡免摔钳速→鸡下蛋计时→汇总事件。
- `hurtMob(m, amount, knockbackDir, rng) → { mob, events }`：扣血→进 panic+击退→血≤0 出 `death`+`drops` 事件。
- 状态机：`idle`(随机短停)↔`wander`(选附近~10格落点走向它)；受击→`panic`(快跑 1.5–2s)。
- **不掉崖**：wander 选向若前方下落 ≥2 格则不走该向（边缘检测）。
- 物理：通用 AABB 扫掠 `sweepAabb(pos,w,h,vel,world)`（新增，参数化尺寸；不动玩家 step.ts），重力同玩家 0.08/tick；鸡下落 vy 钳到 ≈-0.05（缓降、免摔）。
- 事件 `MobEvent`：`{drops, pos}` / `{layEgg, pos}` / `{death, pos}` / `{hurt}`。由 `game/` 施加副作用（生成掉落物 ItemDrop、移除实体）。

## 6. 自然生成（`core/entity/mobSpawn.ts`，纯函数 + WorldView stub 可测）

- `canSpawnAt(world,x,y,z)`：脚下草方块 && 上方 2 格空 && (亮度≥9，若有光照接口；否则按地表 y 判定)。
- `spawnGroup(kind, center, rng, world)`：成群 4 只散布在可生成格。
- Game 在区块加载/世界生成时按低概率撒群，维持全局上限（防性能）。

## 7. 战斗（接入 Game.ts；现仅玩家可被伤，本期加打实体）

- 左键攻击：从准星射线/前方圆内取最近 Mob（攻击距离 ~3 格），调 `hurtMob`。
- 伤害 1:1：拳 1 / 木剑 4 / 石剑 5 / 铁剑 6（查 hotbar 当前物品）。带击退 + 受击红闪 + 无敌帧。

## 8. 渲染（`render/MobRenderer.ts`，照 DropRenderer.sync()）

- 每只一个 `THREE.Group`，多盒子拼 MC 体型：身/头/腿（鸡另加喙/冠/翅；牛/羊加角；猪加鼻）。
- **第 1 期用纯色 + 配色块**（粉猪、棕白牛、白羊、白鸡）——一眼能认、快；像素贴图留作后续美术抛光。
- 动画：走路摆腿（相位由速度）、朝 yaw、轻微头晃；鸡下落扇翅。

## 9. 持久化（存档）

- Mob 列表存进世界存档：每只 `{kind,pos,yaw,health,eggTimer}`。加载时还原。
- 掉落物（ItemDrop）维持现状（不长期存）。

## 10. 文件清单

- `core/math/rng.ts`(+test)：种子化 RNG（mulberry32）。
- `core/physics/aabbSweep.ts`(+test)：参数化 AABB 扫掠（宽/高）。
- `core/entity/mob.ts`(+test)：Mob 模型 + MOB_DEFS + updateMob + hurtMob + rollDrops + AI。
- `core/entity/mobSpawn.ts`(+test)：生成规则。
- `core/items/items.ts`、`core/crafting/smelting.ts`：增物品 + 冶炼。
- `render/MobRenderer.ts`：渲染。
- `game/Game.ts`：接线（数组、tick、渲染同步、攻击、掉落、生成、存档）。

## 11. 测试（TDD，纯逻辑 + FakeWorld/stub）

RNG 确定性；AABB 扫掠撞墙钳停/落地 onGround；AI idle↔wander 选向与朝向；不掉崖；hurt→panic+扣血+无敌帧；血≤0→一次 death+drops；rollDrops 各物种分布(数量区间+必含项+皮革/羊毛/羽毛概率)；鸡免摔+缓降；鸡下蛋恰一次且重置区间；spawn 仅草地+空中达标。渲染靠手玩/截图。

## 12. 本期不做（留后期）

繁殖/幼崽/成长、羊吃草/剪毛/毛再生、蛋孵化、手持食物跟随、音效、像素贴图美术终稿。
