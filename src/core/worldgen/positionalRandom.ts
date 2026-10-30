import { XoroshiroRandom } from 'deepslate/math';
import type { PositionalRandom } from 'deepslate/math';
import type { RandomState } from 'deepslate/worldgen';

export function javaPositionSeed(x: number, y: number, z: number): bigint {
  const s = BigInt(Math.imul(x, 3129871)) ^ (BigInt(z) * 116129781n) ^ BigInt(y);
  return BigInt.asIntN(64, s * s * 42317861n + s * 11n) >> 16n;
}
const corrected = new WeakSet<PositionalRandom>();
function correctFactory(factory: PositionalRandom): PositionalRandom {
  if (corrected.has(factory)) return factory;
  const [lo, hi] = factory.seedKey();
  factory.at = (x, y, z) => {
    let low = BigInt.asUintN(64, lo ^ javaPositionSeed(x, y, z)), high = BigInt.asUintN(64, hi);
    if ((low | high) === 0n) { low = BigInt.asUintN(64, -7046029254386353131n); high = 7640891576956012809n; }
    return new XoroshiroRandom([low, high]);
  };
  corrected.add(factory);
  return factory;
}
/** Keep rotations unsigned and preserve Java's 32-bit multiply before widening. */
export function correctPositionalRandoms(state: RandomState): void {
  correctFactory(state.random);
  const get = state.getOrCreateRandom.bind(state);
  state.getOrCreateRandom = id => correctFactory(get(id));
}
