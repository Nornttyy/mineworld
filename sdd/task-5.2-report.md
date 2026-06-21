# Task 5.2 Report: 尸壳沙漠刷新 + 命中附加饥饿

## Branch
`biomes-impl` (confirmed via `git rev-parse --abbrev-ref HEAD`)

## Where `hostileKindFor` lives
`src/core/entity/mobSpawn.ts` — exported pure function at the top of the file, after the `TORCH_LIGHT` constant. Signature:
```ts
export function hostileKindFor(biome: Biome, roll: number): MobKind
```
Distribution: roll<0.4 → zombie (or husk in desert), roll<0.75 → skeleton, else → creeper.

## How spawn gets biome + seed
- `Game.ts` already stores the save (with seed) as `this.save`. The spawn tick (line ~1158) now calls:
  ```ts
  const biome = biomeAt(px, pz, this.save.seed);
  const kind: MobKind = hostileKindFor(biome, rk);
  ```
- `biomeAt` is imported from `src/core/worldgen/biome.ts` (already exported, added in Phase 4/Task 5.1).
- `hostileKindFor` is imported from `src/core/entity/mobSpawn.ts`.

## Desert surface spawn in daylight
The surface ring spawn guard was `skyStateAt(this.worldTime).isNight`. Changed to:
```ts
if (room > 0 && (skyStateAt(this.worldTime).isNight || MOB_DEFS[kind].sunImmune)) {
```
Husks are `sunImmune: true` (already set in mob.ts), so they pass through in daylight in desert biomes.

## Hunger wired in Game.ts
In the `attackPlayer` event handler (line ~1114), after `hurtPlayer`:
```ts
if (mob.kind === 'husk') addExhaustion(this.survival, 3);
```
`addExhaustion` was already imported from `../core/survival/survival`.

## RED / GREEN
- RED: `hostileKindFor is not a function` — 5 new tests failed before implementation
- GREEN: all 5 new tests pass after implementation

## Full suite + tsc
- `npx tsc --noEmit`: clean (no output)
- `npx vitest run`: **362 tests passed (58 test files)**, 0 failures

## Commit
See git log for hash.
