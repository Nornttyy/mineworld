// 生命/饥饿核心逻辑（纯数据，禁止 import three / render）。目标为 Java 26.3 普通难度。
// 先结算疲劳，再走回血/掉血计时；已核实规则与未覆盖项见 docs/survival-audit.md。

export const MAX_HEALTH = 20; // 10 颗心（半心 = 1 HP）
export const MAX_FOOD = 20; // 10 个鸡腿
export const MAX_OXYGEN = 10; // 10 个气泡（水下憋气）
// Java：食物值必须大于 6（即至少 7）才能开始或保持疾跑。
export const MIN_SPRINT_FOOD = 7;
const STARVE_FLOOR = 1; // 普通难度：1 HP = 半颗心，此时饥饿不再扣血
const HEAL_EXHAUSTION = 6; // 自然回血每 1 HP（半颗心）的耗竭（Java 1.11+）
const REGEN_TICKS = 80; // 慢速回血 / 掉血周期（4s）
const FAST_REGEN_TICKS = 10; // 满饥饿+饱和时的快速回血周期（0.5s）
export const OXYGEN_AIR_TICKS = 300; // 最大空气容量，供 HUD 与模拟共享。
const OXY_DRAIN_TICKS = OXYGEN_AIR_TICKS / MAX_OXYGEN; // 头在水下每 30 刻(1.5s)耗 1 气泡（10 泡≈15s）
const DROWN_TICKS = 20; // 气泡耗尽后每 20 刻(1s)淹溺掉 2 血
const AIR_RECOVERY_PER_TICK = 4; // 现代 Java 出水逐刻回气，0→300 需 75 刻。

export interface Survival {
  health: number; // 0..MAX_HEALTH
  food: number; // 0..MAX_FOOD
  saturation: number; // 0..food（隐藏值）
  exhaustion: number; // 0..40，>4 时结算
  foodTimer: number; // 朝下一次回血/掉血累计的刻数
  oxygen: number; // 0..MAX_OXYGEN 气泡数（仅头在水下时消耗）
  oxygenTimer: number; // 与气泡编码空气刻数：oxygen * 30 - oxygenTimer，兼容旧存档
}

export interface FoodValue {
  nutrition: number; // 回多少饥饿点
  saturationModifier: number; // 饱和系数（MC food 属性）
}

export function newSurvival(): Survival {
  return {
    health: MAX_HEALTH,
    food: MAX_FOOD,
    saturation: 5,
    exhaustion: 0,
    foodTimer: 0,
    oxygen: MAX_OXYGEN,
    oxygenTimer: 0,
  };
}

// 只判断生存模式的食物门槛；创造模式由游戏层绕过此限制。
export function canSprint(s: Pick<Survival, 'food'>): boolean {
  return s.food >= MIN_SPRINT_FOOD;
}

export function addExhaustion(s: Survival, amount: number): void {
  s.exhaustion = Math.min(s.exhaustion + amount, 40);
}

export function applyDamage(s: Survival, amount: number): void {
  s.health = Math.max(0, s.health - amount);
}

export function isDead(s: Survival): boolean {
  return s.health <= 0;
}

export function eat(s: Survival, food: FoodValue): void {
  s.food = Math.min(MAX_FOOD, s.food + food.nutrition);
  // 饱和度 = 当前 + 营养×系数×2，且永不超过当前饥饿值
  s.saturation = Math.min(s.saturation + food.nutrition * food.saturationModifier * 2, s.food);
}

// 摔落伤害：落地超过 3 格，每多 1 格 1 点。1.12 用 MathHelper.ceil：摔 3.1 格就有 1 点(floor 会系统性少 1)。
export function fallDamage(distance: number): number {
  return Math.max(0, Math.ceil(distance - 3));
}

// 每刻推进摔落距离并在落地时结算伤害。dy = 本刻竖直位移（下落为负）。
// 水里取消摔落（无伤害、清零）；落地结算并清零；空中只累计下落量（上升不减）。
export function trackFall(
  fallDistance: number,
  dy: number,
  onGround: boolean,
  inWater: boolean,
): { fallDistance: number; damage: number } {
  if (inWater) return { fallDistance: 0, damage: 0 };
  if (onGround) return { fallDistance: 0, damage: fallDamage(fallDistance) };
  return { fallDistance: dy < 0 ? fallDistance - dy : fallDistance, damage: 0 };
}

// 推进一个模拟刻（20 TPS）。
export function tickSurvival(s: Survival): void {
  // 1) 疲劳 >4 → 扣 4，并扣 1 饱和（没饱和则扣 1 饥饿）
  if (s.exhaustion > 4) {
    s.exhaustion -= 4;
    if (s.saturation > 0) s.saturation = Math.max(0, s.saturation - 1);
    else s.food = Math.max(0, s.food - 1);
  }

  // 2) 回血 / 掉血计时
  const canHeal = s.health > 0 && s.health < MAX_HEALTH;
  if (s.food >= MAX_FOOD && s.saturation > 0 && canHeal) {
    // 满饥饿且有饱和：低饱和度恢复小于 1 HP，同时按比例增加耗竭。
    if (++s.foodTimer >= FAST_REGEN_TICKS) {
      const regeneration = Math.min(s.saturation, HEAL_EXHAUSTION);
      s.health = Math.min(MAX_HEALTH, s.health + regeneration / HEAL_EXHAUSTION);
      addExhaustion(s, regeneration);
      s.foodTimer = 0;
    }
  } else if (s.food >= 18 && canHeal) {
    // 饥饿≥18：慢速回血
    if (++s.foodTimer >= REGEN_TICKS) {
      s.health = Math.min(MAX_HEALTH, s.health + 1);
      addExhaustion(s, HEAL_EXHAUSTION);
      s.foodTimer = 0;
    }
  } else if (s.food <= 0) {
    // 饥饿耗尽：掉血至下限
    if (++s.foodTimer >= REGEN_TICKS) {
      if (s.health > STARVE_FLOOR) applyDamage(s, 1);
      s.foodTimer = 0;
    }
  } else {
    s.foodTimer = 0;
  }
}

export function oxygenAirTicks(s: Pick<Survival, 'oxygen' | 'oxygenTimer'>): number {
  return s.oxygen * OXY_DRAIN_TICKS - s.oxygenTimer;
}

// 保留旧气泡+计时两个存档字段，无损表示正空气与 -19..0 的淹溺等待。
// 头在水下每刻 -1 air；出水每刻 +4 air，不能靠一瞬出水回满。
// headInWater 由游戏层（玩家眼睛所在格是否为水）传入。
export function tickOxygen(s: Survival, headInWater: boolean): void {
  let air = oxygenAirTicks(s);
  air = headInWater ? air - 1 : Math.min(MAX_OXYGEN * OXY_DRAIN_TICKS, air + AIR_RECOVERY_PER_TICK);
  if (headInWater && air <= -DROWN_TICKS) {
    applyDamage(s, 2);
    air = 0;
  }
  s.oxygen = Math.max(0, Math.ceil(air / OXY_DRAIN_TICKS));
  s.oxygenTimer = s.oxygen * OXY_DRAIN_TICKS - air;
}
