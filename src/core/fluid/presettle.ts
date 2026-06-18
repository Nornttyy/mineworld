// 进世界前，把"待流动的水"先跑到稳态再显示——否则刚进场就看着水慢慢流过去/退下去。
// 谁激活了水？读档时会重放玩家改过的方块(挖到水边、放方块挡水等)并激活其周围的水(见 Game 构造)，
// 这些水本会在进游戏后的头几秒里慢慢流到位。这里在加载阶段先把活跃集跑到稳态(空集=瞬间返回)。
// maxTicks 兜底：极端情形(大瀑布灌深洞)不至于把加载卡死，超出的留到进游戏后继续流。
import type { FluidSim, FluidGrid } from './fluidSim';

export function presettleWater(sim: FluidSim, grid: FluidGrid, maxTicks = 240): number {
  let t = 0;
  while (sim.activeCount > 0 && t < maxTicks) {
    sim.tick(grid);
    t++;
  }
  return t;
}
