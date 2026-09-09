#!/usr/bin/env python3
"""Build HD item icons and box-model skins for the realistic texture pack.

The checked-in AI material sheet supplies real fur/skin/bone surface detail.
Existing hand-authored silhouettes and facial markings remain the source of truth,
so every item stays readable and every mob keeps its identity and UV layout.
"""

import hashlib
import random
from pathlib import Path

from PIL import Image, ImageChops, ImageEnhance, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[2]
TEXTURES = ROOT / "public" / "textures"
ICONS = TEXTURES / "icons_realistic"
CLASSIC_ICONS = TEXTURES / "icons_classic"
CLASSIC_MOBS = TEXTURES / "mobs"
REALISTIC_MOBS = TEXTURES / "mobs_realistic"
MATERIAL_SHEET = Path(__file__).resolve().parent / "sources" / "realistic_mob_materials.png"
TOOL_SHEET = Path(__file__).resolve().parent / "sources" / "realistic_tools_sheet.png"
BOW_TOOL_SHEET = Path(__file__).resolve().parent / "sources" / "realistic_bow_tools_sheet.png"
ATLAS = TEXTURES / "atlas_realistic.png"

MOBS = (
    "pig", "cow", "sheep", "chicken",
    "rabbit", "zombie", "skeleton", "creeper",
    "husk", "spider",
)
TOOL_TIERS = ("wooden", "stone", "iron", "diamond")
TOOL_KINDS = ("pickaxe", "axe", "shovel", "sword", "hoe")

# Tile indices from src/core/blocks/registry.ts.  These give tools a real material
# grain without replacing their carefully authored silhouettes.
ITEM_MATERIAL_TILE = {
    "wooden": 8,
    "stone": 0,
    "iron": 33,
    "diamond": 36,
    "coal": 32,
    "quartz": 34,
    "wood": 8,
}


def stable_seed(name: str) -> int:
    return int.from_bytes(hashlib.sha256(name.encode("utf-8")).digest()[:8], "big")


def atlas_tile(atlas: Image.Image, index: int, size: int = 128) -> Image.Image:
    tile = 128
    x = (index % 4) * tile
    y = (index // 4) * tile
    return ImageOps.fit(atlas.crop((x, y, x + tile, y + tile)), (size, size), Image.Resampling.LANCZOS)


def material_for_item(name: str, atlas: Image.Image) -> Image.Image | None:
    if name.startswith("wooden_") or name in {"stick", "bow", "arrow"}:
        return atlas_tile(atlas, ITEM_MATERIAL_TILE["wood"])
    if name.startswith("stone_") or name in {"flint", "flint_and_steel"}:
        return atlas_tile(atlas, ITEM_MATERIAL_TILE["stone"])
    if name.startswith("iron_") or name == "iron_ingot":
        return atlas_tile(atlas, ITEM_MATERIAL_TILE["iron"])
    if name.startswith("diamond_") or name == "diamond":
        return atlas_tile(atlas, ITEM_MATERIAL_TILE["diamond"])
    if name == "coal":
        return atlas_tile(atlas, ITEM_MATERIAL_TILE["coal"])
    if name == "nether_quartz":
        return atlas_tile(atlas, ITEM_MATERIAL_TILE["quartz"])
    return None


def build_item_icon(source: Image.Image, name: str, atlas: Image.Image) -> Image.Image:
    size = 128
    source = source.convert("RGBA")
    # Keep the authored silhouette crisp, but antialias only its outer HD edge.
    # Lanczos on the whole 16px sprite made tools look blurry and swollen.
    enlarged = source.resize((size, size), Image.Resampling.NEAREST)
    alpha = enlarged.getchannel("A").filter(ImageFilter.GaussianBlur(0.65))
    rgb = enlarged.convert("RGB")

    material = material_for_item(name, atlas)
    if material is not None:
        # Keep the recognizable authored colors while exposing real grain/highlights.
        material = ImageEnhance.Contrast(material.convert("RGB")).enhance(1.08)
        rgb = Image.blend(rgb, material, 0.26)

    rng = random.Random(stable_seed(name))
    noise = Image.new("L", (size, size), 128)
    noise.putdata([rng.randrange(108, 149) for _ in range(size * size)])
    noise = noise.filter(ImageFilter.GaussianBlur(0.45))
    light = Image.new("L", (size, size))
    lp = light.load()
    for y in range(size):
        for x in range(size):
            lp[x, y] = max(92, min(170, 150 - (x + y) // 5))
    grain = ImageChops.multiply(noise, light)
    grain_rgb = Image.merge("RGB", (grain, grain, grain))
    rgb = Image.blend(rgb, grain_rgb, 0.10)

    icon = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    icon.paste(rgb, (0, 0), alpha)
    # A soft contact shadow gives held/dropped items depth but keeps a transparent asset.
    shadow_alpha = alpha.filter(ImageFilter.GaussianBlur(1.8)).point(lambda p: round(p * 0.28))
    shadow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    shadow.putalpha(ImageChops.offset(shadow_alpha, 3, 4))
    result = Image.alpha_composite(shadow, icon)
    result.putalpha(ImageChops.lighter(result.getchannel("A"), alpha))
    return result


def build_realistic_icons() -> int:
    atlas = Image.open(ATLAS).convert("RGBA")
    count = 0
    for source_path in sorted(CLASSIC_ICONS.glob("*.png")):
        source = Image.open(source_path).convert("RGBA")
        # 32px block icons were already rebuilt from the realistic atlas.  The
        # remaining 16px files are tools, food and mob drops that used to be copied.
        if source.width > 16 or source.height > 16:
            continue
        build_item_icon(source, source_path.stem, atlas).save(
            ICONS / source_path.name, optimize=True
        )
        count += 1
    build_generated_tools()
    build_generated_bow_tools()
    return count


def build_generated_tools() -> int:
    """Crop the AI-authored 5×4 tool sheet into transparent inventory assets."""
    sheet = Image.open(TOOL_SHEET).convert("RGBA")
    count = 0
    for row, tier in enumerate(TOOL_TIERS):
        for column, kind in enumerate(TOOL_KINDS):
            left = round(column * sheet.width / len(TOOL_KINDS))
            right = round((column + 1) * sheet.width / len(TOOL_KINDS))
            top = round(row * sheet.height / len(TOOL_TIERS))
            bottom = round((row + 1) * sheet.height / len(TOOL_TIERS))
            icon = sheet.crop((left, top, right, bottom))
            bbox = icon.getchannel("A").getbbox()
            if bbox:
                icon = icon.crop(bbox)
            icon.thumbnail((116, 116), Image.Resampling.LANCZOS)
            canvas = Image.new("RGBA", (128, 128), (0, 0, 0, 0))
            canvas.alpha_composite(icon, ((128 - icon.width) // 2, (128 - icon.height) // 2))
            canvas.save(ICONS / f"{tier}_{kind}.png", optimize=True)
            count += 1
    return count


def fit_transparent_icon(icon: Image.Image, size: int = 128, content: int = 116) -> Image.Image:
    bbox = icon.getchannel("A").getbbox()
    if bbox:
        icon = icon.crop(bbox)
    icon.thumbnail((content, content), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.alpha_composite(icon, ((size - icon.width) // 2, (size - icon.height) // 2))
    return canvas


def build_generated_bow_tools() -> int:
    """Install matching realistic bow charge stages and the fire striker."""
    sheet = Image.open(BOW_TOOL_SHEET).convert("RGBA")
    names = ("bow", "bow_pulling_0", "bow_pulling_1", "bow_pulling_2", "flint_and_steel")
    for column, name in enumerate(names):
        left = round(column * sheet.width / len(names))
        right = round((column + 1) * sheet.width / len(names))
        icon = fit_transparent_icon(sheet.crop((left, 0, right, sheet.height)))
        icon.save(ICONS / f"{name}.png", optimize=True)
    return len(names)


def crop_materials() -> list[Image.Image]:
    sheet = Image.open(MATERIAL_SHEET).convert("RGB")
    assert sheet.width % 4 == 0 and sheet.height % 3 == 0, sheet.size
    w, h = sheet.width // 4, sheet.height // 3
    return [
        sheet.crop(((i % 4) * w, (i // 4) * h, (i % 4 + 1) * w, (i // 4 + 1) * h))
        for i in range(12)
    ]


def build_mob_skin(kind: str, material: Image.Image) -> Image.Image:
    size = 256
    authored = Image.open(CLASSIC_MOBS / f"{kind}.png").convert("RGBA")
    authored = authored.resize((size, size), Image.Resampling.NEAREST)
    alpha = authored.getchannel("A")
    base = authored.convert("RGB")
    material = ImageOps.fit(material.convert("RGB"), (size, size), Image.Resampling.LANCZOS)
    material = ImageEnhance.Contrast(material).enhance(1.08)

    # The authored layer carries face shading and markings; the generated material
    # contributes fur, wool, skin, bone or chitin microstructure.
    merged = Image.blend(base, material, 0.58)
    gray = ImageOps.grayscale(base)
    dark_features = gray.point(lambda p: 255 if p < 58 else 0)
    dark_features = ImageChops.multiply(dark_features, alpha)
    merged.paste(base, (0, 0), dark_features)

    result = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    result.paste(merged, (0, 0), alpha)
    return result


def build_realistic_mobs() -> int:
    materials = crop_materials()
    REALISTIC_MOBS.mkdir(parents=True, exist_ok=True)
    for index, kind in enumerate(MOBS):
        build_mob_skin(kind, materials[index]).save(
            REALISTIC_MOBS / f"{kind}.png", optimize=True
        )
    return len(MOBS)


def main():
    for path in (MATERIAL_SHEET, TOOL_SHEET, BOW_TOOL_SHEET):
        if not path.exists():
            raise FileNotFoundError(f"missing generated realistic source: {path}")
    item_count = build_realistic_icons()
    mob_count = build_realistic_mobs()
    print(f"wrote {item_count} HD realistic item icons -> {ICONS}")
    print(f"wrote {mob_count} HD realistic mob skins -> {REALISTIC_MOBS}")


if __name__ == "__main__":
    main()
