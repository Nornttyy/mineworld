import { architectureModel, changedArchitectureState } from './architecture';
import { isOpaque } from './registry';
const directions = { north: [0, -1], east: [1, 0], south: [0, 1], west: [-1, 0] } as const;
type Facing = keyof typeof directions;
const left: Record<Facing, Facing> = { north: 'west', west: 'south', south: 'east', east: 'north' };
const right: Record<Facing, Facing> = {
  north: 'east',
  east: 'south',
  south: 'west',
  west: 'north',
};
/** Recompute connections after a player edit, keeping imported template states intact. */
export function connectedArchitectureState(
  id: number,
  x: number,
  y: number,
  z: number,
  get: (x: number, y: number, z: number) => number,
): number {
  const model = architectureModel(id);
  if (!model) return id;
  const p = model.properties;
  if (/(_pane|_fence)$/.test(model.name)) {
    const updates: Record<string, string> = {};
    for (const [direction, [dx, dz]] of Object.entries(directions)) {
      const other = get(x + dx, y, z + dz),
        name = architectureModel(other)?.name ?? '';
      updates[direction] = String(
        isOpaque(other) ||
          (model.name.endsWith('_pane')
            ? name.endsWith('_pane')
            : name.endsWith('_fence') || name.endsWith('_fence_gate')),
      );
    }
    return changedArchitectureState(id, updates);
  }
  if (model.name.endsWith('_stairs')) {
    const f = p.facing as Facing,
      [dx, dz] = directions[f];
    const side = (direction: Facing) => {
      const [sx, sz] = directions[direction],
        s = architectureModel(get(x + sx, y, z + sz));
      return !(
        s?.name.endsWith('_stairs') &&
        s.properties.facing === f &&
        s.properties.half === p.half
      );
    };
    const front = architectureModel(get(x + dx, y, z + dz)),
      back = architectureModel(get(x - dx, y, z - dz));
    const corner = (s: typeof front) =>
      s?.name.endsWith('_stairs') &&
      s.properties.half === p.half &&
      (s.properties.facing === left[f] || s.properties.facing === right[f]);
    if (corner(front)) {
      const ff = front!.properties.facing as Facing,
        opposite = left[left[ff]];
      if (side(opposite))
        return changedArchitectureState(id, {
          shape: ff === left[f] ? 'outer_left' : 'outer_right',
        });
    }
    if (corner(back) && side(back!.properties.facing as Facing))
      return changedArchitectureState(id, {
        shape: back!.properties.facing === left[f] ? 'inner_left' : 'inner_right',
      });
    return changedArchitectureState(id, { shape: 'straight' });
  }
  return id;
}
export function bedPartner(
  id: number,
  x: number,
  y: number,
  z: number,
): [number, number, number] | undefined {
  const m = architectureModel(id);
  if (!m?.name.endsWith('_bed')) return;
  const [dx, dz] = directions[m.properties.facing as Facing],
    sign = m.properties.part === 'foot' ? 1 : -1;
  return [x + dx * sign, y, z + dz * sign];
}
