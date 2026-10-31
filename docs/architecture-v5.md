# Official building models and shapes — generator revision 5

Revision 5 replaces revision 4's hand-authored building and expanded-tree silhouettes. New saves use `java26v5`. Older saves retain their generator version because they store block edits over regenerated terrain; upgrading them implicitly would overwrite the meaning of existing edits.

## What is imported

- Nine byte-verified original NBT structures: two small houses each for plains, taiga and savanna; the plains fountain, plains temple 3, and igloo top. Original block states, orientation, explicit air, block-entity data and jigsaw final states are retained in the source data.
- The complete 21×25×21 desert-pyramid piece, captured by executing the official server's `postProcess` and `afterPlace`. It contains the underground room, four chest positions, nine TNT blocks, pressure plate and archaeology extension.
- Thirty-six actual `Feature.place` captures: four each of acacia, cherry, dark oak, jungle, mega jungle, brown/red huge mushrooms, mega spruce and swamp oak. These preserve original branch coordinates, leaf shapes, vines, mushroom faces and podzol.
- 844 literal block states across 78 names. Official blockstates, inherited JSON models, rotations, UV lock and multipart selection are baked into quads. Chest geometry uses the official chest model; collision, selection, occlusion, hardness, tool requirements and emission come from actual block-state methods.
- 155 additional texture tiles, slots 128–282, with three 64×1136 atlases. Original slots 0–124 retain their pixels. Numeric vertex tile attributes are now 16-bit. Existing inventory IDs are retained, new inventory IDs remain below 256, and persistent oriented world states use IDs 4096–4943.

Sources are the hash-verified official Java 26.3 client/server, not leaked source. No executable JARs/classes are stored in the repository. Client SHA-1: `e877b6a07acd633fb3bb475002175cec036e7b87`; server bundle: `33680f5f2ac32864d6d7cf5e56a705fdb3e05f4c`. Asset copyright remains with Mojang/Microsoft; the assets are not original Mineworld artwork.

## Placement semantics and current scope

Village `LegacySinglePoolElement` replaces `STRUCTURE_BLOCK` with `STRUCTURE_AND_AIR`, so all template air is ignored. `JigsawReplacementProcessor` ignores final `structure_void`. Village ground-level delta is 1 and the first rigid piece origin is `firstFreeHeight - 1`. Igloo placement ignores structure blocks but preserves air; its top origin is also `H-1`. Without a basement the top trapdoor is replaced with snow, matching the original post-processing rule.

The individual building units and tree samples are original. **Village assembly, roads, structure candidate coordinates, tree capture selection and feature placement remain Mineworld algorithms. They are not Java seed-exact placement.** The old invented stone tower is replaced with the imported small plains temple at those candidate locations. Foundations adapt to Mineworld terrain. Village processors such as random mossification, all jigsaw pools, igloo basements, chest inventories/loot, villagers, TNT/redstone and bed sleeping are not implemented by this change. The corresponding blocks currently provide their appearance and physical shapes; bed halves and door interaction are connected.

Render limitations: weighted model variants use their first choice; animated architecture textures use their first frame; biome grass swamp noise and exact vanilla model ambient occlusion are not fully reproduced. The established renderer supplies lighting and smooth vertex shading. This update does not claim a complete 1:1 game.

## Runtime behavior

- Real partial models in chunks, hand-held blocks and drops; original flat door item sprites.
- Colored glass has its own transparent material batch; normal glass/door cutouts retain alpha.
- Partial collision/selection, 0.6-block stepping onto stairs/slabs, door/trapdoor toggling, matching upper/lower door halves, bed placement/removal, slab merging, stair corner and pane/fence connections.
- Shape-derived outlines and crack overlay; particles use original particle texture and selection volumes.
- New building blocks are available in creative inventory. Stairs, doors, trapdoors, sandstone slabs, acacia fences, cobblestone walls and chests have recipes. Spruce logs now produce spruce planks.
- Sound profiles cover all added inventory blocks (156 profiles, 189 events, 445 original OGG samples).
- Pointer lock denial no longer permanently disables later attempts. The fallback HUD has an explicit “点击锁定鼠标” button which issues a fresh request in a user gesture; Esc, blur, inventory and late-result guards remain.

## Inspection and reproduction

`/tools/visual/biomes-check.html` uses the actual game mesher and contains close-up, structure, tree and natural-terrain views. Seed `9` has a plains village around X=72, floor Y=65, Z=-70 in a newly created revision-5 world.

Import structures and captures with `tools/worldgen/import_structures.py`, `import_desert_pyramid.py`, `import_tree_shapes.py`, and `import_chest_model.py`. Their command-line headers document required JDK/JAR arguments. `tools/textures/import_java_assets.py CLIENT_JAR` chains base textures, effects, biome tiles, architecture models, grass colors and item sprites. Collision metadata can be recaptured with `import_architecture_shapes.py`; the checked-in shape cache is reapplied by model-only imports. `test_architecture_models.py` checks all 96 independently captured official rotation/UV transforms, normals, state coverage and shape metadata.

Validation includes 1,081 passing runtime tests (four pre-existing skips; updated old spruce-to-oak expectations). One integration-suite import hook timed out under simultaneous browser/build/test load; its four tests passed when rerun alone, TypeScript typecheck, production build and the two Python model tests. Browser inspection covers the small house, pyramid, tree samples, igloo and real seed-9 village. The screenshot evidence and final deployment revision are recorded in the task.

In the in-app browser, both the automatic and explicit retry request still fell back after browser denial. The UI remained playable and Esc paused correctly. The retry fix removes the application-side permanent suppression; it cannot grant Pointer Lock permission on behalf of a browser.
