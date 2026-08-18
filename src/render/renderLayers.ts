/** Water lives on its own layer so the renderer can capture an opaque scene for refraction. */
export const WATER_RENDER_LAYER = 1;

/**
 * Visible to the player's camera but excluded from the planar reflection camera.
 * The water shader draws its own stable sun road; reflecting the HDR sun billboard as
 * well would split that road into flashing islands when wave UVs move across it.
 */
export const NO_WATER_REFLECTION_LAYER = 2;
