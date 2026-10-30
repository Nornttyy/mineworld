# Vegetation revision 2 — 2026-10-30

New worlds persist `generator: java26v2`. `java26` and missing/legacy identities
keep their existing terrain and decoration algorithms. Both modern revisions
retain the full signed-long seed, -64..319 build range and sea level 63. Save,
WebSocket and peer-to-peer metadata tests exercise both modern revisions.

## Implemented

- Import the official oak, birch, spruce and pine feature configurations from
  the hash-verified 26.3 client. Trunk heights and foliage radius/offset providers
  are read from data, not one shared tree silhouette.
- Port blob, spruce and pine leaf-row/corner rules. The test-only
  `MineworldFoliageProbe.java` subclasses the actual official foliage placers,
  intercepting rows before world access. Nine independent outputs (seeds
  0, 42, 1337) match every emitted leaf coordinate. This checks canopy rules,
  not the complete vanilla tree placement sequence or world collision checks.
- Selected official patch counts, offsets, rarity, species weights and biome
  lists generate short grass, ferns, dead bushes and flowers. Source chunks are
  replayed in stable order, with RNG consumption independent of target culling.
- Twelve flowers, fern and dead bush append block IDs 81..94 and atlas slots
  88..101. The prior 88 atlas cells are pixel-identical; both packs now use a
  4-by-26 atlas. Sources/hashes are retained in the resource provenance files.
- Cross geometry uses the original model's 0.8..15.2 bounds and full block
  texture height. Hand and dropped plants use alpha sprites; flowers drop
  themselves, dead bushes drop 0..2 sticks, and placement checks soil/water.
  Removing supporting soil also drops flowers. Birch logs now trigger the
  existing leaf decay path, and expired birch leaves can actually disappear.

## Deliberate remaining differences

- The full Java decoration seed/feature pipeline is not ported. Source biome
  screening, tree collision/trunk rejection, patch heightmaps and spatial
  flower/count noise remain approximations. Same-seed feature locations differ.
- Fancy oak, fallen trees, giant trees, vines, bees, leaf litter and unsupported
  tree species are absent. Meadow tall-grass choices currently use short grass;
  there is no double-height plant state or grass seed/shears/bone-meal system.
- Leaf persistent/distance block states and dynamic biome tints are absent.
  Water can replace plants but does not yet create their wash-away drops.

## Verification

`npm run typecheck`, `npm test` (913 passed, 4 skipped), `npm run build`.
Production preview: created seed 36 meadow and seed 29 taiga worlds through
normal UI; checked original plant icons, held flower, terrain, movement and
150 loaded chunks without console errors/warnings. Old world compatibility,
flower mining/placement, canopy references and border replay have automated
coverage. Java reference classes are used only locally, never shipped.

Reimport data with `python3 tools/worldgen/import_vegetation.py <26.3-client.jar>`.
Texture packing uses `tools/textures/import_java_assets.py`; its pinned client
SHA-1 is recorded in each provenance document.
