# Java 26.3 same-seed terrain audit — revision 3

New worlds use `java26v3`. Existing `java26`, `java26v2`, and legacy saves keep
exactly their previous generator identities. This update does **not** establish
complete vanilla-world parity.

## Independent reference

`src/core/worldgen/reference/MineworldTerrainProbe.java` calls the official
26.3 server's noise-fill and surface-material stages on a ProtoChunk, with the
official biome preset, seed, random state and biome manager. It does not start a
server. `tools/worldgen/sample_terrain.py` verifies the original bundle SHA-1
`33680f5f2ac32864d6d7cf5e56a705fdb3e05f4c`, extracts it in a temporary directory,
compiles the harness with JDK 25, and writes its output. No game executable
classes or JARs are included in the repository.

The checked-in `terrain26.fixtures.json` contains palette/RLE block names,
column diagnostics and independent ore random streams. Output order is Z, X, Y,
with Y from -64 through 319. Each chunk contains 98,304 positions.

| Parameter | Samples |
| --- | --- |
| Seeds | 0, 36, 4294967297, -1, -9223372036854775808, 9223372036854775807 |
| Chunk coordinates for each seed | (0,0), (-1,0), (16,-16), (-64,64), (1024,-1024) |
| Noise + aquifer stage | 30/30 chunks; 2,949,120/2,949,120 block types equal |
| Surface/material stage | 30/30 chunks; 2,949,120/2,949,120 block types equal |
| Surface diagnostics | 270 column heights/depths match |
| Old-save compatibility | Four decorated v1/v2 chunks match pre-change block/fluid SHA-256 hashes |

The original harness was rebuilt using the committed runner and reproduced all
five seed-0 chunks in both stages. Tests also verify source-fluid bytes, SHA-256
biome seed encoding, ore random sequences and cache/loading-order stability.

## Concrete corrections

- Read `chunk_surface_level` rather than silently treating it as zero. This
  prevents grass/dirt from replacing underground cave surfaces.
- Read `add_stone_depth` for water/Y conditions and truncate surface depth toward
  zero as Java does. This restores submerged dirt layers and related surfaces.
- Apply the block-level biome Voronoi zoom: SHA-256 seed, signed-long LCG jitter,
  eight quart-cell candidates and original distance/tie ordering.
- Correct positional random seeds: Java's 32-bit X multiply before widening,
  unsigned 64-bit Xoroshiro rotations, and zero-state handling.
- Correct aquifer X/Z sampling offsets, the 9-value Y random range, center
  surface return condition, spread scaling and Z cell width, dry-level sentinel,
  and skip threshold. Replace the upstream negative-X cache key that discarded
  Z through sign extension.
- Preserve the last interval-selector branch. The upstream parser truncated
  four functions to three thresholds, altering spaghetti cave density.
- Implement copper/iron large-vein material rules. Add copper ore, raw copper
  blocks and raw iron blocks with textures, icons, harvesting, raw-metal
  compression/decompression and copper smelting.

All adapters are per-state/per-instance and enabled only for revision 3; no
shared library prototype or registry is modified to change old saves.

## Reproduce

```sh
python3 tools/worldgen/sample_terrain.py \
  --jdk /path/to/jdk25 \
  --server-bundle /path/to/26.3-server.jar \
  --output /tmp/terrain26.json
node node_modules/vite-node/vite-node.mjs tools/worldgen/compare_terrain.ts /tmp/terrain26.json
npm test -- src/core/worldgen/terrainParity.test.ts
```

The comparison tool exits nonzero on any mismatch and reports actual/expected
materials and the first mismatching coordinates. It accepts an optional second
output-path argument to save the comparison report.

## Remaining differences

These are **pre-feature terrain** comparisons, not completed playable worlds.
No structures or structure density adjustment, carving stage, full placed-feature
pipeline, complete tree species, badlands bands/pillars, or icebergs are covered.
Ordinary ore/plant/tree placement still uses Mineworld's existing approximation.
The Nether remains the previous generator. Java float intermediates and every
possible biome boundary are not proven bit-identical. Block orientation and
other block-state properties are not part of this block-type comparison.

Consequently, entering the same seed in both finished games can still produce
visible differences. Use a newly created world to try revision 3; reopening an
old save intentionally preserves its terrain.
