import source from './data/java26-architecture.json';
import type { BlockDef } from './registry';

export type Box = readonly [number, number, number, number, number, number];
export interface ModelQuad {
  vertices: number[][];
  uv: number[][];
  tile: number;
  cullFace?: number;
  direction?: number;
  normal?: number[];
  shade: boolean;
  ao?: boolean;
  tint?: number;
  forceTranslucent?: boolean;
}
export interface ArchitectureState {
  id: number;
  key: string;
  name: string;
  properties: Record<string, string>;
  fullCube?: boolean;
  canOcclude?: boolean;
  lightEmission?: number;
  hardness?: number;
  needsTool?: boolean;
  quads: ModelQuad[];
  boxes: Box[];
  selectionBoxes?: Box[];
  particle: number;
}
interface ArchitectureData {
  labels?: Record<string, string>;
  atlasRows: number;
  names: string[];
  defaults: Record<string, string>;
  states: ArchitectureState[];
}
export const architectureData = source as unknown as ArchitectureData;
const short = (name: string) => name.replace('minecraft:', '');
export function stateKey(name: string, properties: Record<string, string> = {}): string {
  const props = Object.keys(properties)
    .sort()
    .map((k) => `${k}=${properties[k]}`)
    .join(',');
  return `minecraft:${short(name)}${props ? `[${props}]` : ''}`;
}
const byKey = new Map(architectureData.states.map((s) => [s.key, s]));
const byId = new Map(architectureData.states.map((s) => [s.id, s]));
const bases = new Map<string, number>();
const defaults = new Map<number, ArchitectureState>();
const definitions = new Map<number, BlockDef>();
export const ARCHITECTURE_FIRST_BLOCK = 113;
export const architectureModel = (id: number): ArchitectureState | undefined =>
  id < ARCHITECTURE_FIRST_BLOCK ? undefined : byId.get(id) ?? defaults.get(id);
export const baseBlockId = (id: number): number => {
  if (id < 4096) return id;
  const s = byId.get(id);
  return s ? bases.get(short(s.name)) ?? id : id;
};
export const architectureBaseIds = (): number[] => [...defaults.keys()];
export function architectureStateId(name: string, props: Record<string, string> = {}): number {
  const normalized = short(name);
  if (normalized === 'water') return 9;
  if (normalized === 'lava') return 23;
  if (normalized === 'ice') return 28;
  if (
    normalized === 'air' ||
    normalized === 'cave_air' ||
    normalized === 'void_air' ||
    normalized === 'structure_void' ||
    normalized === 'structure_block'
  )
    return 0;
  const exact = byKey.get(stateKey(name, props));
  if (exact) return exact.id;
  const state = architectureData.states.find(
    (s) =>
      short(s.name) === normalized &&
      Object.entries(props).every(([k, v]) => s.properties[k] === v),
  );
  if (state) return state.id;
  const base = bases.get(normalized);
  if (base !== undefined && Object.keys(props).length === 0) return base;
  throw new Error(`Unsupported structure state: ${stateKey(name, props)}`);
}
export function changedArchitectureState(id: number, changes: Record<string, string>): number {
  const s = architectureModel(id);
  if (!s) return id;
  return architectureStateId(s.name, { ...s.properties, ...changes });
}
export function architectureBoxes(id: number): readonly Box[] | undefined {
  return architectureModel(id)?.boxes;
}
export function architectureOpaque(id: number): boolean | undefined {
  const m = architectureModel(id);
  if (!m) return undefined;
  return m.fullCube === true && m.canOcclude === true;
}
export const architectureDefinition = (id: number): BlockDef | undefined => definitions.get(id);

/** Base inventory IDs remain below 256; persistent oriented states live at 4096+. */
export function installArchitecture(blocks: BlockDef[]): void {
  for (const b of blocks) bases.set(b.name, b.id);
  bases.set('grass_block', 3);
  bases.set('snow', 29);
  bases.set('short_grass', 16);
  for (const fullName of architectureData.names) {
    const name = short(fullName);
    if (
      bases.has(name) ||
      /^(air|cave_air|void_air|structure_void|structure_block|jigsaw)$/.test(name)
    )
      continue;
    const model =
      byKey.get(architectureData.defaults[fullName] ?? architectureData.defaults[name]) ??
      architectureData.states.find((s) => short(s.name) === name);
    if (!model) continue;
    const id = blocks.length;
    if (id >= 256) throw new Error('Block inventory ID space exhausted');
    const wood = /oak|spruce|birch|acacia|jungle|cherry|wood|chest|crafting|barrel|ladder/.test(
      name,
    );
    const soft = /snow|carpet|bed|glass|torch|lantern|flower/.test(name);
    const faces = [
      model.particle,
      model.particle,
      model.particle,
      model.particle,
      model.particle,
      model.particle,
    ] as BlockDef['faces'];
    const block: BlockDef = {
      id,
      name,
      solid: model.boxes.length > 0,
      transparent: architectureOpaque(model.id) !== true,
      faces,
      hardness: model.hardness ?? (soft ? 0.3 : wood ? 2 : 1.5),
      drop: name.includes('glass') ? null : id,
      needsTool: model.needsTool ?? (!wood && !soft),
      tool: wood ? 'axe' : soft ? null : 'pickaxe',
      light: model.lightEmission ?? 0,
    };
    blocks.push(block);
    bases.set(name, id);
    defaults.set(id, model);
  }
  for (const state of architectureData.states) {
    const base = blocks[bases.get(short(state.name)) ?? 0];
    const shape = architectureBoxes(state.id) ?? [];
    const faces = [...base.faces] as BlockDef['faces'];
    for (let f = 0; f < 6; f++) {
      const q = state.quads.find((q) => (q.direction ?? q.cullFace) === f);
      faces[f] = q?.tile ?? state.particle;
    }
    definitions.set(state.id, {
      ...base,
      id: state.id,
      solid: shape.length > 0,
      transparent: architectureOpaque(state.id) !== true,
      faces,
      light: state.lightEmission ?? base.light,
      hardness: state.hardness ?? base.hardness,
      needsTool: state.needsTool ?? base.needsTool,
    });
  }
}
