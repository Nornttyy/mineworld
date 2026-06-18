// 种子化确定性伪随机数（mulberry32）。返回一个无参函数，每次调用推进内部状态、
// 产出 [0,1)。同种子 → 同序列，供实体 AI / 掉落 / 生成做可复现单测（约定同 itemDrop 的 rand）。
export function makeRng(seed: number): () => number {
  let a = seed >>> 0;
  return function (): number {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
