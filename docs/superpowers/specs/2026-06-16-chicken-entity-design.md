# 鸡 + 最小实体层 设计（First Mob: Chicken）

- **日期**：2026-06-16
- **状态**：已通过设计评审，**design-ahead**（本期只出设计，不写实现码）
- **范围阶段**：路线图阶段 3（生存）；**依赖阶段 1–2 的地基**（世界、物理、渲染），实现待这些就位

---

## 1. 背景与决策

为 MINEWORLD 设计**第一只生物：鸡**，并借此立起**通用实体层**。约束与已定决策：

- 目标 **1:1 还原 Minecraft**：数值/行为对齐 Java 版（见 `docs/minecraft-values.md`），实现时逐项对照官方 Wiki 复核。
- 鸡**不能空做**：它要存在，先得有世界/地形、`core/physics`、渲染、实体系统——目前都没有。故本期**只产设计 spec**，不写代码。
- 遵守架构铁律：`src/core/**` 纯逻辑，禁 import `three`/`render`，可无头单测。

### 评审确定的决策
1. **实体用"朴素数据 + 纯函数"（数据导向，方案 A）**：实体是普通结构体，行为是纯函数 `update(...)→{entity, events}`；和 worldgen/mesh/physics 同一路子，AI 用种子化 RNG 可确定性单测。
2. **本期 spec 覆盖全套 1:1 行为，但明确标出 MVP 子集**（§9 分期）。
3. **物理/世界/渲染只定接口契约**（§5），实现留到地基阶段；鸡的纯逻辑可先靠 stub 单测。

---

## 2. 范围

**本期做**：设计文档（本文件）。

**实现期会做（待地基）**
- `core/entity/`：通用实体模型 + 更新管线 + 鸡的 AI/计时器/掉落（纯逻辑，可单测）。
- 鸡渲染模型 + 纹理（render 层）。
- 自然生成（依赖世界/光照）。

**Out of scope（更后期）**：繁殖/幼年成长、种子吸引跟随、水上漂浮、行走/扇翅动画、音效。

---

## 3. 通用实体模型（`core/entity/types.ts`）

```ts
export type EntityType = 'chicken';            // 以后扩成联合类型

export interface Entity {
  id: number;
  type: EntityType;
  pos: Vec3;            // 脚部中心，世界方块坐标
  vel: Vec3;            // 方块/tick
  yaw: number;          // 朝向
  onGround: boolean;
  health: number;
  width: number;        // AABB footprint（鸡 0.4）
  height: number;       // 鸡 0.7
  fallImmune: boolean;  // 鸡 = true
  ai: ChickenAI;        // 类型专属状态（多生物后改为联合）
}
// AABB 由 pos/width/height 推出：x,z ∈ pos ± width/2，y ∈ [pos.y, pos.y+height]。
// yaw 单位用弧度，0 朝 +Z（实现时与相机/渲染约定一致）。

export interface ChickenAI {
  state: 'idle' | 'wander' | 'panic';
  stateTimer: number;   // 当前状态剩余 tick
  target: Vec3 | null;  // wander 目标点
  eggTimer: number;     // 距下一个蛋的 tick
}
```

---

## 4. 更新管线与事件（每 tick，20 TPS，全纯函数）

```ts
export type EntityEvent =
  | { kind: 'layEgg'; pos: Vec3 }
  | { kind: 'drops'; items: ItemStack[]; pos: Vec3 }
  | { kind: 'hurt'; amount: number }
  | { kind: 'death'; pos: Vec3 };

export interface UpdateResult { entity: Entity; events: EntityEvent[]; }

// 流程：AI 决策(intent) → 施加到 vel(locomotion) → physics 步进(AABB扫掠+重力)
//       → 鸡免摔/扇翅钳速 → 类型计时器(下蛋) → 汇总 events
export function updateEntity(
  e: Entity, world: WorldView, rng: RNG, physics: PhysicsStep,
): UpdateResult;

// 受伤单独入口（命中/着火等）：扣血 → 进 PANIC/击退 → 可能 death+drops
export function hurtEntity(
  e: Entity, amount: number, opts: { onFire: boolean }, rng: RNG,
): UpdateResult;
```

`events` 由 `game/` 主循环统一施加：`layEgg`/`drops` 在世界里生成掉落物，`death` 移除实体等。**核心不碰世界副作用**，只产出事件。

---

## 5. 接口契约（"缝"——定义但本期不实现，让鸡现在就能被单测）

```ts
// core/world：只读世界视图
export interface WorldView {
  getBlock(x: number, y: number, z: number): number;   // BlockId
  isSolid(x: number, y: number, z: number): boolean;
  getLight(x: number, y: number, z: number): number;   // 0..15
}

// core/physics：AABB 扫掠步进（逐轴解算 + 重力，详见数值表）
export interface SweepResult { pos: Vec3; vel: Vec3; onGround: boolean; }
export type PhysicsStep = (aabb: AABB, vel: Vec3, world: WorldView) => SweepResult;

// core/math：可种子化确定性 RNG
export interface RNG { next(): number; }   // [0,1)

// core/item：掉落与蛋复用【合成 spec 的 item 注册表】
//   需登记物品：feather / raw_chicken / cooked_chicken / egg
```

> 测试期用 `FakeWorld`（如一片平坦草地）+ 真重力公式或物理 stub，配合种子化 RNG 做确定性断言。

---

## 6. 鸡的行为与 1:1 数值

**AI 状态机**（`core/entity/chicken.ts`）
- `IDLE`：站立/张望，随机短停顿后转 `WANDER`。
- `WANDER`：偶尔在附近（~10 格内）选一个地面落点，朝它走；到达或超时后重选。移速属性 **0.25**。
- `PANIC`：受击后进入，短时间（约 1.5–2 秒）加速乱跑，结束回 `IDLE`。

**1:1 数值（实现时对照 Wiki 复核）**
| 项 | 值 |
|---|---|
| 生命 | **4**（2 心） |
| 碰撞箱（宽×高） | **0.4 × 0.7** |
| 移速属性 | **0.25** |
| 摔落伤害 | **免疫**；下落时扇翅减速（下落速度钳到约 -0.08 方块/tick，常数待复核） |
| 下蛋间隔 | **6000–12000 tick（5–10 分钟）** |
| 死亡掉落 | **0–2 羽毛** + **1 生鸡肉**（着火死亡 → 熟鸡肉） |
| 自然生成 | 草地、亮度 **≥9**、成群 **4** 只、**5%** 幼年（数值待复核） |

**下蛋逻辑**：`eggTimer` 递减，≤0 时产出 `layEgg` 事件并重置为 `6000 + floor(rng*6001)`。

**掉落逻辑（纯函数）**
```ts
export function rollChickenDrops(rng: RNG, onFire: boolean): ItemStack[];
//  羽毛: floor(rng()*3) => 0..2（>0 才进列表）
//  鸡肉: 1 × (onFire ? 'cooked_chicken' : 'raw_chicken')
```

**免摔/扇翅**：`fallImmune=true` 使摔落伤害计算跳过；下落中 `vel.y` 被钳到小幅，模拟扇翅缓降。

**自然生成**（`core/entity/spawn.ts`，实现期且依赖世界）
```ts
canSpawnChicken(world, x, y, z): boolean;   // 脚下是草方块 && 亮度≥9 && 上方 2 格为空
spawnChickenGroup(...): Entity[];           // 4 只，每只 5% 幼年
```

---

## 7. 渲染模型（`render/`，本期只 spec 不实现）

忠实还原 MC 鸡的盒状模型：**身体 / 头 / 喙 / 红肉垂(wattle) / 2 条腿 / 2 只翅膀**，单张鸡纹理（MC 为 64×32）。动画：走路摆腿、下落扇翅、头部轻晃。鸡纹理届时按**经典像素风**生成（与方块同一套确定性脚本做法，见 [[texture-art-direction]]）。盒子精确尺寸实现时对照 MC 模型核对。

---

## 8. 测试计划（TDD，纯逻辑 + stub）

- **游荡**：种子化 RNG 下选定 target，`vel` 朝向 target；到达/超时重选。
- **PANIC**：`hurtEntity` 后血量下降、进入 `panic`、移速更高，计时结束回 `idle`。
- **下蛋**：跑 N tick 后**恰好触发一次** `layEgg`，且 `eggTimer` 重置到 6000–12000。
- **掉落分布**：`rollChickenDrops` 羽毛 ∈ [0,2]、必含 1 鸡肉；`onFire` → 熟鸡肉。
- **免摔**：用 FakeWorld 模拟自由下落，落地后**不掉血**、下落速度被钳。
- **死亡**：血量 ≤0 触发**一次** `drops` + `death`。
- **生成规则**：仅在草地+亮度≥9 处可生成，成群 4 只（用 FakeWorld 断言）。

`render/` 不强求单测，靠截图 + 手玩。

---

## 9. 分期

**MVP（地基就绪后第一批）**：实体模型 + `updateEntity` 管线；鸡 `IDLE/WANDER/PANIC`；免摔；下蛋；掉落；`hurt/death`；**调试用手动生成**。
**Later**：自然生成（光照/群组/幼年）、繁殖（种子）、幼年成长、种子吸引跟随、水上漂、行走/扇翅动画、音效。

---

## 10. 实现前置依赖与顺序

鸡的实现需按序具备：
1. **item 注册表**（来自合成 spec）——掉落/蛋所需。
2. **`core/math`**：种子化 RNG + 向量。
3. **`core/physics`**：AABB 扫掠 + 重力（阶段 2）。
4. **`core/world` + `WorldView`**：区块/方块/光照（阶段 2）。
5. **render 层 + 鸡纹理**（阶段 1+）。

> 实体层的**纯逻辑**（通用模型 + 更新管线 + 鸡 AI/计时/掉落）只要 #1–#3 与一个 `WorldView` stub 到位即可单测；**完整接入**世界要等 #4–#5。故鸡落在**阶段 2 之后**。

---

## 11. 未来衔接的接口缝（留位）

- `EntityType` 扩为联合类型、`ai` 改判别式联合，容纳更多生物。
- 掉落物 / 蛋 作为**掉落物实体**（itemEntity，本身也是一种 entity）。
- 通用 AI"目标(goal)"权重系统（贴近 MC 的 goal selector），替换手写状态机。
- 繁殖/幼年/驯服等被动生物通用机制。
