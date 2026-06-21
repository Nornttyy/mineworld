import { WIDTH, HEIGHT } from '../physics/player';
import { isCactus } from '../blocks/registry';

/**
 * 判断玩家碰撞箱是否贴住仙人掌（MC 1.12：接触即伤害）。
 * 纯逻辑函数，无 three/render 依赖。
 *
 * @param px 玩家中心 x（世界坐标）
 * @param py 玩家脚底 y
 * @param pz 玩家中心 z
 * @param getBlock 世界方块查询函数
 */
export function touchesCactus(
  px: number,
  py: number,
  pz: number,
  getBlock: (x: number, y: number, z: number) => number,
): boolean {
  const e = 0.1; // 检测扩展余量，比碰撞箱略大，确保贴边触发
  const hw = WIDTH / 2;
  const x0 = Math.floor(px - hw - e);
  const x1 = Math.floor(px + hw + e);
  const y0 = Math.floor(py);
  const y1 = Math.floor(py + HEIGHT);
  const z0 = Math.floor(pz - hw - e);
  const z1 = Math.floor(pz + hw + e);
  for (let x = x0; x <= x1; x++) {
    for (let y = y0; y <= y1; y++) {
      for (let z = z0; z <= z1; z++) {
        if (isCactus(getBlock(x, y, z))) return true;
      }
    }
  }
  return false;
}
