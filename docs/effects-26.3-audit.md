# Breaking effects and leaf rendering — Java 26.3

This update fixes rendering and particles without changing world generation or existing block edits.

Reference: official client `e877b6a07acd633fb3bb475002175cec036e7b87`.
`tools/textures/import_java_effects.py` verifies that archive and records source hashes in
`public/textures/java-effects-provenance.json`. No executable Minecraft classes are included.

Implemented:

- All ten original destroy-stage sprites, nearest sampling, alpha cutoff 0.1, and Java's
  destination-color/source-color blend. The local stage is `floor(progress * 10)` for positive
  damage, otherwise hidden (`MultiPlayerGameMode.getDestroyStage`). Stage advancement follows
  mining progress; it is not an independent looping animation.
- Decals match the terrain's face UV orientation and clip against a leaf's alpha mask.
  Crack textures use the same build-version cache busting as other assets.
- Full block destruction emits a 4 × 4 × 4 lattice, following `ClientLevel.addDestroyBlockEffect`.
  Continuous mining emits one smaller chip at the hit face, instead of three colored points
  from the block center. Chips sample a random quarter-width/height crop of the block texture.
- TerrainParticle size, lifetime distribution, initial speed distribution, gravity, drag and
  ground friction are reproduced in seconds at fixed 20 Hz. Rendering interpolates ticks.
  Collision uses Mineworld's voxel AABB sweep rather than Java's shape collision engine.
- The world terrain atlas keeps original neutral oak/birch/spruce pixels and alpha. Inventory,
  held and dropped block icons retain their existing tinted atlas. Spruce and birch use
  0x619961 and 0x80a755. Oak uses imported biome foliage colors with block biome zoom and
  radius-two horizontal blending. The optional cartoon pack bypasses this tint.
- Transparent leaves retain the interior faces which vanilla's cutout leaves render.
  Only leaf backs are culled, so flowers and other crossed planes remain double-sided.
  Leaves remain still instead of stretching with the optional wind shader.

Validation:

- Pixel comparisons against the verified client for ten destroy sprites and three neutral
  leaf tiles, including alpha.
- Tests cover fragment count/positions, hit-face placement, texture selection, frame-rate
  independent collision, crack stage boundaries, species colors and tint seams.
- Existing suite: 1,013 tests passed, four skipped; targeted follow-up after the final decal
  change: particle/game regression tests. TypeScript and production build checked.
- Browser QA uses `tools/visual/effects-check.html` through Vite (not a production entry).
  It uses the actual ChunkMeshManager, CrackOverlay and ParticleRenderer. Also loaded a new
  survival world through the normal game UI. No console rendering errors observed.

Remaining differences: full Java lightmaps, unusual block collision/model shapes, all block
particle-material overrides, particle random sequences, fancy tree placement/canopies and
vanilla generation completeness are not certified. Grass tint remains the previous fixed
representative color. This is not a claim of complete visual or same-seed world parity.
