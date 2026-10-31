# Biomes and buildings — generator revision 4

New worlds use `java26v4`. Existing `legacy`, `java26`, `java26v2` and `java26v3` saves keep their generator identity, including in multiplayer. The Java 26.3 climate/noise/surface pipeline is unchanged from revision 3; this update populates previously sparse biomes rather than adding new climate parameters.

## Added content

- Savanna: crooked acacia trees with flat crowns.
- Jungle: small jungle trees and tall 2×2 jungle trunks with branches.
- Dark forest: 2×2 dark oak trunks, broad crowns and occasional huge mushrooms.
- Cherry grove: forked cherry trees, original pink leaf textures with no green biome tint.
- Mushroom fields: red and brown huge mushrooms.
- Old-growth taiga and grove: tall spruce trees; swamp: broad oak crowns.
- 15 stable appended block IDs (98–112), 20 appended face tiles (105–124), both inventory packs, four wood crafting families, furnace fuel, foliage tint/decay/cutout rendering and original sound profiles.

Four hand-authored structure templates: a three-house village with paths and well, a sandstone desert ruin, a woodland stone tower, and a snow igloo. Buildings have open two-block-high entrances and crafting tables/furnaces/torches. They use the existing full-block system; doors, glass windows, stairs, loot chests and villagers are not added by this update. These are Mineworld layouts and placement rules, not vanilla NBT/jigsaw structures or vanilla seed-exact feature placement.

## Placement and persistence

Immutable tree plans replay neighboring source chunks in a fixed order. Branches remain face-connected, all trunks precede leaves, and terrain/water cannot be replaced by trees. Structures use a separate full signed-64-bit seed stream, one candidate per 160-block region with five attempts. Water, steep sites and unsuitable biomes are rejected. Templates fit within a 24-block region margin. Foundation columns extend into the terrain; doors/interiors explicitly clear blocks and fluid. Structure start caching is bounded and cleared with terrain caches.

Old saves must not be switched to revision 4: saves persist edits over generated terrain, not complete chunks. Create a new world to see the new content.

## Reproducible landmarks

| Seed | Structure | X | Floor Y | Z |
|---|---|---:|---:|---:|
| 9 | Plains village | 72 | 65 | -70 |
| 10 | Snow igloo | 36 | 66 | 225 |
| 22 | Savanna village | 31 | 68 | 256 |
| 42 | Dark-forest stone tower | -62 | 73 | 95 |

## Validation

- TypeScript typecheck and production build pass.
- Full suite: 1,051 passed; four pre-existing skipped tests.
- Includes actual seed-9 generation, signed seed limits, negative coordinates, four-chunk building replay, two-block entrances, branch connectivity, wood crafting/fuel, and generator metadata round trips.
- Browser inspection with the game's renderer: village, desert ruin, cherry trees/tower, igloo, and full natural seed-9 village / seed-42 forest chunks. Developer inspection page: `/tools/visual/biomes-check.html` (not in production build).
- Compared complete decorated block+fluid buffers against independently bundled source at baseline commit `76619a5b14ef21d5f8c0e4f0ddcdd4c9f52a9e75`. All four samples unchanged:

| Revision | Seed / chunk | SHA-256 |
|---|---|---|
| 3 | 9 / (4,-5) | `72194ef68aceef7d2946f10b6c4a42ce5db013cf2501bebef5aaac5d23b05c67` |
| 3 | 42 / (-4,5) | `65d275c8991a77466b404a7e601bd75470ba510c48556f803bba546442fd4e24` |
| 2 | -9223372036854775808 / (0,0) | `95b61d40496eb6f0be0f20de654dc893e1ba6380d4a446de3d43860ef7094ca2` |
| 1 | 9223372036854775807 / (-1,0) | `b95f0c61216fbd94750b347c98945b17c28e9a23cc0595328cc62dcbd4c4e711` |

Texture provenance is in `public/textures/java-biomes-provenance.json`. `tools/textures/import_java_assets.py` chains effect and biome imports from the hash-verified official client. Audio importer now records 113 block sound profiles, 174 events and 419 unchanged OGG samples.
