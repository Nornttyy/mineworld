#!/usr/bin/env python3
"""Build MINEWORLD's standard 16x16 pixel texture pack.

The pack is deliberately authored as tiny indexed-looking tiles: every source
face is exactly 16x16, uses a compact palette, and is rendered without
anti-aliasing.  It reuses this project's original pixel patterns from
``gen_textures.py``; no AI-generated image or external game asset is involved.
"""

import os
import random

from PIL import Image

import gen_textures as source


S = 16
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
TEXTURES = os.path.join(ROOT, "public", "textures")
ATLAS_OUT = os.path.join(TEXTURES, "atlas_classic.png")
ICONS_OUT = os.path.join(TEXTURES, "icons_classic")
BASE_SEED = 20260813


def fixed_pixel_map(rows, palette, _rng, alpha_blank=False):
    """Render an authored 16x16 character map with no jitter or interpolation."""
    assert len(rows) == S, len(rows)
    assert all(len(row) == S for row in rows), [(len(row), row) for row in rows if len(row) != S]
    mode = "RGBA" if alpha_blank else "RGB"
    image = Image.new(mode, (S, S), (0, 0, 0, 0) if alpha_blank else (0, 0, 0))
    pixels = image.load()
    for y, row in enumerate(rows):
        for x, key in enumerate(row):
            if alpha_blank and key == " ":
                continue
            rgb = source.hx(palette[key])
            pixels[x, y] = (*rgb, 255) if alpha_blank else rgb
    return image


# The source module's maps already describe individual pixels.  Removing its
# small RGB jitter makes equal palette entries remain exactly equal, which is
# important for a clean, standard pixel-art read at native resolution.
source.from_map = fixed_pixel_map

BLOCKS = dict(source.BLOCKS)

# Order must stay aligned with src/core/blocks/registry.ts and the renderer's
# 4x9 atlas constants.  The final cell is intentionally transparent.
ATLAS_ORDER = [
    "stone", "dirt", "grass_top", "grass_side",
    "cobblestone", "sand", "oak_log_top", "oak_log_side",
    "oak_planks", "coal_ore", "water", "oak_leaves",
    "crafting_table_top", "crafting_table_side", "iron_ore", "furnace_front",
    "gravel", "grass_plant", "obsidian", "netherrack",
    "soul_sand", "glowstone", "nether_quartz_ore", "lava",
    "bedrock", "nether_portal", "sandstone", "cactus",
    "ice", "snow", "spruce_log", "spruce_leaves",
    "coal_block", "iron_block", "quartz_block",
]

ICON_FACES = {
    "stone": ("stone", "stone"),
    "dirt": ("dirt", "dirt"),
    "grass": ("grass_top", "grass_side"),
    "cobblestone": ("cobblestone", "cobblestone"),
    "sand": ("sand", "sand"),
    "oak_log": ("oak_log_top", "oak_log_side"),
    "oak_planks": ("oak_planks", "oak_planks"),
    "coal_ore": ("coal_ore", "coal_ore"),
    "iron_ore": ("iron_ore", "iron_ore"),
    "furnace": ("cobblestone", "furnace_front"),
    "oak_leaves": ("oak_leaves", "oak_leaves"),
    "crafting_table": ("crafting_table_top", "crafting_table_side"),
    "gravel": ("gravel", "gravel"),
    "sandstone": ("sandstone", "sandstone"),
    "obsidian": ("obsidian", "obsidian"),
    "netherrack": ("netherrack", "netherrack"),
    "soul_sand": ("soul_sand", "soul_sand"),
    "glowstone": ("glowstone", "glowstone"),
    "nether_quartz_ore": ("nether_quartz_ore", "nether_quartz_ore"),
    "cactus": ("cactus", "cactus"),
    "ice": ("ice", "ice"),
    "spruce_log": ("oak_log_top", "spruce_log"),
    "spruce_leaves": ("spruce_leaves", "spruce_leaves"),
    "bedrock": ("bedrock", "bedrock"),
    "coal_block": ("coal_block", "coal_block"),
    "iron_block": ("iron_block", "iron_block"),
    "quartz_block": ("quartz_block", "quartz_block"),
}


def build_tiles():
    tiles = {}
    for index, name in enumerate(ATLAS_ORDER):
        generator = BLOCKS[name]
        tile = generator(random.Random(BASE_SEED + index * 1000))
        assert tile.size == (S, S), (name, tile.size)
        tiles[name] = tile
    return tiles


def build_atlas(tiles):
    atlas = Image.new("RGBA", (S * 4, S * 9), (0, 0, 0, 0))
    for index, name in enumerate(ATLAS_ORDER):
        atlas.paste(tiles[name].convert("RGBA"), ((index % 4) * S, (index // 4) * S))
    return atlas


def main():
    os.makedirs(ICONS_OUT, exist_ok=True)
    tiles = build_tiles()
    atlas = build_atlas(tiles)
    atlas.save(ATLAS_OUT, optimize=True)

    for name, (top, side) in ICON_FACES.items():
        icon = source.iso_icon(tiles[top], tiles[side], tiles[side])
        icon.save(os.path.join(ICONS_OUT, f"{name}.png"), optimize=True)

    print(f"wrote {ATLAS_OUT} ({atlas.width}x{atlas.height}; {len(ATLAS_ORDER)} 16x16 tiles)")
    print(f"wrote {len(ICON_FACES)} matching block icons to {ICONS_OUT}")


if __name__ == "__main__":
    main()
