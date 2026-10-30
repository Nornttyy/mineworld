import { DensityFunction } from 'deepslate/worldgen';
import type { RandomState } from 'deepslate/worldgen';

/** Correct the 26.3 interval selector before the pinned parser discards a branch. */
export function correctFinalDensity(state: RandomState, definitions: Record<string,unknown>): void {
  const parsed = new Map<string,DensityFunction>();
  const parse = (json: unknown): DensityFunction => {
    // Resolve references before mapAll: HolderHolder.mapChildren discards its
    // registry key, so a later visitor cannot recover the original JSON.
    if (typeof json === 'string' && definitions[json] !== undefined) {
      let value = parsed.get(json);
      if (!value) { value = parse(definitions[json]); parsed.set(json,value); }
      return value;
    }
    if (json && typeof json === 'object' && (json as Record<string,unknown>).type === 'minecraft:interval_select') {
      const root = json as { thresholds: number[]; functions: unknown[] };
      // 0.27.2 truncates functions to thresholds.length. The terminal sentinel
      // retains all four branches, including rarity >= 0.5 for spaghetti caves.
      return DensityFunction.fromJson({ ...root, thresholds: [...root.thresholds, Infinity] }, parse);
    }
    return DensityFunction.fromJson(json, parse);
  };
  state.router.finalDensity = parse('minecraft:overworld/final_density').mapAll(state.createVisitor(false));
}
