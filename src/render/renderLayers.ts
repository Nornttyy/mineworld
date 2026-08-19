/** Water lives on its own layer so the renderer can capture an opaque scene for refraction. */
export const WATER_RENDER_LAYER = 1;

/**
 * Visible to the player's camera but excluded from water reflection/refraction captures.
 * The water shader evaluates the sun once through its GGX BRDF; reflecting the HDR
 * billboard as well would double-count the same light and create unstable hot pixels.
 */
export const NO_WATER_REFLECTION_LAYER = 2;

/**
 * 天空穹顶、云、星与普通日月所在层。主相机和镜像反射相机可见，
 * 水下折射相机不可见，防止把玩家眼前的天空/云复制进水体透射。
 */
export const SKY_RENDER_LAYER = 3;

/**
 * Camera-facing helpers that belong to gameplay feedback rather than the physical world.
 * They remain visible in the main view but are excluded from reflection/refraction captures.
 */
export const CAMERA_AUX_RENDER_LAYER = 4;
