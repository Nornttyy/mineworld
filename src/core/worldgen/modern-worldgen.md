# Java 26.3 terrain adapter

`generator: 'java26v3'` now identifies a versioned target/configuration. It is not a
claim that this browser game reproduces every vanilla block at the same seed.
Old worlds continue using the unchanged `terrain.ts` generator and 0..191 Y.

## Source and scope

- [deepslate 0.27.2](https://github.com/misode/deepslate), MIT (Misode), provides
  Xoroshiro random, modern noise/density evaluation, aquifers, climate search
  and material-rule primitives. The dependency is pinned by the lockfile.
- The selected density, noise, material and ore JSON comes directly from the
  official 26.3 client, SHA1 `e877b6a07acd633fb3bb475002175cec036e7b87`.
- All 7,594 biome parameter entries come from the official 26.3 server's data
  generator, SHA1 `33680f5f2ac32864d6d7cf5e56a705fdb3e05f4c`. The JAR only has
  an `overworld` preset reference; an older version's climate table was not used.
- Exact archive paths, hashes and copyright are in `data/java26-provenance.json`.
  These are Mojang/Microsoft game data, not MIT-licensed original artwork/code.
  No complete client/server JAR or game class is included in the project.

The adapter uses -64..319 world Y, sea level 63, full signed 64-bit decimal
seeds, the official final-density expression (including noise caves), climate
parameters and aquifer configuration. It applies material rules to all 256
columns. Modern material IDs append at 45; old IDs 0..44 stay fixed. Atlas
indices 0..47 retain their previous pixels; indices 48..87 add official faces.

## Upstream gaps handled here

The library's current `NoiseChunkGenerator` is a preview implementation:
`MaterialSystem.buildSurface` loops only over z=0 and its caller supplies a
fixed plains biome. The adapter performs its own 16x16 surface pass with real
biomes, true world Y and integer surface depth. Revision 3 uses block-level biome
zoom for material rules; revisions 1/2 preserve their original quart lookups. It also seeds
`settings.aquifers` using the `RandomState` density visitor before constructing
`NoiseChunk`; directly passing parsed aquifers leaves their noises uninitialized.
The absent `hole` and `steep` material conditions are implemented locally.
Biome-zoom jitter and resolved quart-cell labels are cached within each chunk.
Library interpolation caches are periodically discarded; sampler/height
caches are bounded so exploration does not retain the entire sampled world.

## Revision 3 chunk audit (2026-10-30)

See `docs/terrain-26.3-audit.md` for the complete reproducible audit. Against the
actual Java 26.3 engine, 30 chunks across six signed-long seeds match every block
in both tested stages: noise/aquifers and surface/material rules. The comparison
covers 2,949,120 block positions per stage, including large copper/iron veins.
It explicitly excludes carvers, structures, placed features and block properties.

Revision 3 fixes the renamed chunk-surface and water/stone-depth fields; uses
Java's biome zoom; restores the omitted interval-selector branch for caves;
corrects signed positional random state and integer overflow; corrects aquifer
sampling coordinates, Y bounds, fluid spread, dry-level sentinel and negative-X
cache collisions; and implements the large ore-vein material rule. Revisions
`java26` and `java26v2` keep their original terrain and decoration algorithms.

## Earlier point comparison

`reference/MineworldNoiseProbe.java` is a small test harness written for this
project. It calls official 26.3 `RandomState.sampleBlockValueUncached` and the
official preset's climate lookup, without starting a server/world. Compile it
with JDK 25 and the official server's extracted JAR/libraries on the classpath.
The committed output is `data/java26-reference-samples.json`.

Five seeds, including values above 32 bits and the minimum signed long, were
sampled at ten coordinates each, including negative coordinates and Y:

- 50/50 quart-cell biome labels match.
- Density maximum absolute error: **0.00000279942668479638**.
- All 50 sampled density signs match. Java uses float density intermediates;
  the library uses JavaScript numbers. This is not bit-identical evaluation.

Tests compare against those independently generated outputs with a 0.00001
absolute tolerance. They also test 256 bedrock columns, true-Y array bounds,
registered material IDs, fluid source bytes, 64-bit seeds and cache resets.
These samples do not establish exact parity over an entire world, particularly
where density is extremely close to zero or climate boundaries tie.

Initial local Node measurements: ~34 ms to create a noise state, ~166 ms for
98,304 density values; a complete terrain/material/feature chunk takes longer.
For seed 4242, a 7x7 region including materials and features takes **15.99 s
serial**, averaging 326 ms per chunk, versus 51.98 s before caching repeated
quart-cell queries. Three representative chunks retain byte-identical block
and fluid SHA256s across this optimization. Generation belongs in workers.
These measurements are not mobile guarantees.

## Deliberate, visible remaining differences

- No structures, structure density adjustment, carvers, geodes, lakes or full
  configured/placed-feature engine. The density-function `beardifier` is zero
  without structures; old/new world blending is not used.
- Revision 3 implements block-level biome zoom. Climate float rounding and
  tie-breaking are not proven exact across every coordinate; the full-chunk
  results are a finite sample, not a proof over all seeds.
- Badlands colour-band material currently returns the correct terracotta
  material but does not reproduce band colours. Eroded-badlands pillars and
  frozen-ocean icebergs are still absent. Revision 3 does implement the large
  copper/iron ore-vein material rule, with separate ore, raw-metal and filler blocks.
- `modernFeatures.ts` reads official coal/iron/gold/diamond attempt counts,
  height providers, vein sizes, replaceable tags and exposure probabilities.
  Its salted candidate RNG, ellipsoid sequence and external-column exposure
  checks differ from Java's complete feature-step pipeline. Mineral locations
  for these ordinary ore features therefore do not match vanilla seeds. Ores crossing chunks are regenerated
  from a fixed ordered 3x3 source-chunk set, independent of loading order.
- Saved `java26` worlds retain their original approximate tree candidates and
  canopies. `java26v2` and new `java26v3` worlds use configured small oak/birch/spruce/pine
  foliage rules and selected biome vegetation patches. See
  `docs/vegetation-26.3-audit.md`. Exact feature coordinates and unsupported
  tree species remain absent.
- Snow blocks currently lack snowball drops; powder snow is a visible full
  cube without sinking/freezing mechanics. These material IDs do not imply
  all related mechanics exist.

## Integration interface

`generateModernChunk(cx, cz, seed: number|string, revision: 1|2|3 = 1, stage: 'noise'|'surface'|'decorated' = 'decorated'): Chunk` returns
`new Chunk(-64, 384)`, with real world-Y `get/set` and fluid bytes.
It also fills `surfaceHeights: Int16Array(256)`, indexed by `x + z*16`, so loaded
terrain height can be transferred to the main thread without recomputation.
`modernColumnHeight(x,z,seed)` returns top solid **ground** Y, not Y+1 and not
the canopy. A 16,384-entry cache is isolated by generator revision. In revision 3,
this estimate is based on density only so feature placement cannot depend on
which neighboring chunks have already generated aquifer barriers. Actual chunk
heights are always returned in `surfaceHeights`. Spawn logic
must still check headroom/collision after decoration.
`modernBiomeAt(x,z,seed,y=63)` returns a `minecraft:*` quart-cell biome name.
`modernDensityAt(x,y,z,seed)` and `modernSeed(seed)` are exposed for verification.
Unsafe numeric seeds are rejected; pass decimal strings to preserve long values.
