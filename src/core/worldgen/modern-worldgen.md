# Java 26.3 terrain adapter

`generator: 'java26'` identifies a versioned target/configuration. It is not a
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
quart-cell biomes, true world Y and integer surface depth. It also seeds
`settings.aquifers` using the `RandomState` density visitor before constructing
`NoiseChunk`; directly passing parsed aquifers leaves their noises uninitialized.
The absent `hole` and `steep` material conditions are implemented locally.
Quart-cell biome results are reused for all 64 blocks within each 4x4x4 cell.
Library interpolation caches are periodically discarded; sampler/height
caches are bounded so exploration does not retain the entire sampled world.

## Actual vanilla comparison

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
- Quart-cell biome selection is used directly. Java's block-level biome zoom,
  climate quantization/tie-breaking and all surface outputs are not separately
  proven exact by the 50-point comparison.
- Badlands colour-band material currently returns the correct terracotta
  material but does not reproduce band colours. The modern large ore-vein
  material rule is not implemented. Terracotta colours and modern mineral
  blocks exist as real assets, not aliases to stone.
- `modernFeatures.ts` reads official coal/iron/gold/diamond attempt counts,
  height providers, vein sizes, replaceable tags and exposure probabilities.
  Its salted candidate RNG, ellipsoid sequence and external-column exposure
  checks differ from Java's complete feature-step pipeline. Mineral locations
  therefore do not match vanilla seeds. Ores crossing chunks are regenerated
  from a fixed ordered 3x3 source-chunk set, independent of loading order.
- Oak/birch/spruce wood supplies use explicitly approximate tree candidates
  and canopy geometry with stable cross-chunk placement. Other biome tree
  species, grass/flower decoration and exact Java feature positions are absent.
- Snow blocks currently lack snowball drops; powder snow is a visible full
  cube without sinking/freezing mechanics. These material IDs do not imply
  all related mechanics exist.

## Integration interface

`generateModernChunk(cx, cz, seed: number|string): Chunk` returns
`new Chunk(-64, 384)`, with real world-Y `get/set` and fluid bytes.
It also fills `surfaceHeights: Int16Array(256)`, indexed by `x + z*16`, so loaded
terrain height can be transferred to the main thread without recomputation.
`modernColumnHeight(x,z,seed)` returns top solid **ground** Y, not Y+1 and not
the canopy. Generated ground heights populate a 16,384-entry cache. Spawn logic
must still check headroom/collision after decoration.
`modernBiomeAt(x,z,seed,y=63)` returns a `minecraft:*` quart-cell biome name.
`modernDensityAt(x,y,z,seed)` and `modernSeed(seed)` are exposed for verification.
Unsafe numeric seeds are rejected; pass decimal strings to preserve long values.
