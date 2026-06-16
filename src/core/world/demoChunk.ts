import { Section } from './section';

// 写死、确定性的小地形：石底 → 土 → 草顶，石中散布煤矿，地面立一截橡木。
export function demoChunk(): Section {
  const s = new Section();
  const ground = 8;
  for (let z = 0; z < 16; z++) {
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y <= ground; y++) {
        let id = 1; // stone
        if (y === ground)
          id = 3; // grass 顶面
        else if (y >= ground - 2)
          id = 2; // dirt 表层下
        else if ((x * 7 + y * 13 + z * 5) % 23 === 0) id = 8; // coal_ore 散布
        s.set(x, y, z, id);
      }
    }
  }
  for (let y = ground + 1; y <= ground + 3; y++) s.set(8, y, 8, 6); // oak_log 树桩
  return s;
}
