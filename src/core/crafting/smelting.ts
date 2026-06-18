// 熔炉冶炼：纯逻辑（配方表 + 燃料表 + 单熔炉状态机 tick）。UI/存档/调度在游戏层。
import { COAL, STICK, IRON_INGOT } from '../items/items';
import { OAK_LOG, OAK_PLANKS, IRON_ORE } from '../blocks/registry';

export const COOK_TICKS = 200; // 炼 1 个耗 200 刻(=10s @20TPS，同 MC)
export const MAX_STACK = 64;

// 冶炼配方：原料 id → 产物 id
const SMELT: Record<number, number> = {
  [IRON_ORE]: IRON_INGOT,
};
// 燃料：id → 可燃烧刻数（MC：煤 1600(炼8)、原木/木板 300(炼1.5)、棍 100(炼0.5)）
const FUEL: Record<number, number> = {
  [COAL]: 1600,
  [OAK_LOG]: 300,
  [OAK_PLANKS]: 300,
  [STICK]: 100,
};

export const smeltResult = (id: number): number | undefined => SMELT[id];
export const fuelTicks = (id: number): number => FUEL[id] ?? 0;
export const isFuel = (id: number): boolean => fuelTicks(id) > 0;
export const isSmeltable = (id: number): boolean => id in SMELT;

// 一个熔炉的状态（三槽 + 燃烧/冶炼进度）。id=0 表示空槽。
export interface FurnaceState {
  input: number;
  inputN: number;
  fuel: number;
  fuelN: number;
  output: number;
  outputN: number;
  burn: number; // 剩余燃烧刻
  burnMax: number; // 本份燃料的总刻（UI 画火焰比例）
  cook: number; // 当前冶炼进度刻（0..COOK_TICKS）
}

export function newFurnace(): FurnaceState {
  return { input: 0, inputN: 0, fuel: 0, fuelN: 0, output: 0, outputN: 0, burn: 0, burnMax: 0, cook: 0 };
}

// 当前是否“能炼”：有可冶炼的原料，且产物槽放得下结果。
function canCook(s: FurnaceState): boolean {
  if (s.inputN <= 0) return false;
  const r = smeltResult(s.input);
  if (r === undefined) return false;
  return s.outputN === 0 || (s.output === r && s.outputN < MAX_STACK);
}

// 推进 1 刻：燃料燃烧 → 必要时点燃新燃料 → 有火且能炼则推进进度、满则产出。
// 原地修改 s；返回是否发生了可见变化(供 UI 节流刷新)。
export function tickFurnace(s: FurnaceState): boolean {
  const before = s.burn > 0 || s.cook > 0;
  const cook = canCook(s);

  if (s.burn > 0) s.burn--; // 燃料持续燃烧

  // 没火但有料可炼且有燃料 → 烧掉一份燃料
  if (s.burn === 0 && cook && s.fuelN > 0) {
    s.burnMax = fuelTicks(s.fuel);
    s.burn = s.burnMax;
    s.fuelN--;
    if (s.fuelN === 0) s.fuel = 0;
  }

  // 有火且能炼 → 进度++；满 COOK_TICKS 出一个成品
  if (s.burn > 0 && cook) {
    s.cook++;
    if (s.cook >= COOK_TICKS) {
      s.cook = 0;
      const r = smeltResult(s.input) as number;
      s.inputN--;
      if (s.inputN === 0) s.input = 0;
      s.output = r;
      s.outputN++;
    }
  } else {
    s.cook = 0; // 没火/没料：进度清零(MC 是缓慢回退，这里简化)
  }

  return before || s.burn > 0 || s.cook > 0;
}

// 熔炉是否“活跃”(还在烧、或有料且有燃料能开炼)——供调度只 tick 活跃熔炉，省算力。
export function furnaceActive(s: FurnaceState): boolean {
  return s.burn > 0 || (s.fuelN > 0 && canCook(s));
}
