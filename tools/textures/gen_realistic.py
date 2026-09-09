#!/usr/bin/env python3
"""Build the AI-generated 128px realistic texture pack.

The two checked-in 4x6 source sheets are produced with the built-in image
generator.  This script crops them deterministically, restores voxel cutout
masks for foliage/grass, builds the 4x12 atlas, and emits matching UI icons.
"""

import shutil
from pathlib import Path

from PIL import Image

import gen_classic as classic
import gen_textures as source


TILE = 128
COLS = 4
ROWS = 12
ROOT = Path(__file__).resolve().parents[2]
TEXTURES = ROOT / "public" / "textures"
SOURCE_DIR = Path(__file__).resolve().parent / "sources"
SHEET_A = SOURCE_DIR / "realistic_sheet_a.png"
SHEET_B = SOURCE_DIR / "realistic_sheet_b.png"
ATLAS_OUT = TEXTURES / "atlas_realistic.png"
ICONS_OUT = TEXTURES / "icons_realistic"

# Must stay aligned with registry.ts and both 16px atlas generators.
ATLAS_ORDER = [
    "stone", "dirt", "grass_top", "grass_side",
    "cobblestone", "sand", "oak_log_top", "oak_log_side",
    "oak_planks", "coal_ore", "water", "oak_leaves",
    "crafting_table_top", "crafting_table_side", "iron_ore", "furnace_front",
    "gravel", "grass_plant", "obsidian", "netherrack",
    "soul_sand", "glowstone", "nether_quartz_ore", "lava",
    "bedrock", "nether_portal", "sandstone", "cactus",
    "ice", "snow", "spruce_log", "spruce_leaves",
    "coal_block", "iron_block", "quartz_block", "diamond_ore",
    "diamond_block", "granite", "diorite", "andesite",
    "bricks", "mossy_cobblestone", "red_sand", "birch_log_top",
    "birch_log_side", "birch_leaves",
]

CUTOUT_TILES = {"oak_leaves", "grass_plant", "spruce_leaves", "birch_leaves"}


def crop_sheet(path: Path):
    sheet = Image.open(path).convert("RGB")
    assert sheet.width % 4 == 0 and sheet.height % 6 == 0, sheet.size
    cell_w, cell_h = sheet.width // 4, sheet.height // 6
    assert cell_w == cell_h, (cell_w, cell_h)
    for index in range(24):
        x = (index % 4) * cell_w
        y = (index // 4) * cell_h
        yield sheet.crop((x, y, x + cell_w, y + cell_h)).resize(
            (TILE, TILE), Image.Resampling.LANCZOS
        )


def classic_alpha_masks():
    atlas = Image.open(TEXTURES / "atlas_classic.png").convert("RGBA")
    masks = {}
    for name in CUTOUT_TILES:
        index = ATLAS_ORDER.index(name)
        x = (index % COLS) * 16
        y = (index // COLS) * 16
        mask = atlas.crop((x, y, x + 16, y + 16)).getchannel("A")
        masks[name] = mask.resize((TILE, TILE), Image.Resampling.NEAREST)
    return masks


def build_tiles():
    generated = list(crop_sheet(SHEET_A)) + list(crop_sheet(SHEET_B))
    assert len(generated) == 48
    masks = classic_alpha_masks()
    tiles = {}
    for index, name in enumerate(ATLAS_ORDER):
        tile = generated[index].convert("RGBA")
        if name in masks:
            tile.putalpha(masks[name])
        tiles[name] = tile
    return tiles


def build_atlas(tiles):
    atlas = Image.new("RGBA", (TILE * COLS, TILE * ROWS), (0, 0, 0, 0))
    for index, name in enumerate(ATLAS_ORDER):
        atlas.paste(tiles[name], ((index % COLS) * TILE, (index // COLS) * TILE))
    return atlas


def build_icons(tiles):
    ICONS_OUT.mkdir(parents=True, exist_ok=True)
    # Non-block items keep the readable classic pixel silhouettes.  Block icons
    # below overwrite their copies with generated realistic faces.
    for path in (TEXTURES / "icons_classic").glob("*.png"):
        shutil.copy2(path, ICONS_OUT / path.name)
    for name, (top, side) in classic.ICON_FACES.items():
        icon = source.iso_icon(tiles[top], tiles[side], tiles[side])
        icon.save(ICONS_OUT / f"{name}.png", optimize=True)
    plant = tiles["grass_plant"].resize((28, 28), Image.Resampling.LANCZOS)
    plant_icon = Image.new("RGBA", (32, 32), (0, 0, 0, 0))
    plant_icon.alpha_composite(plant, (2, 4))
    plant_icon.save(ICONS_OUT / "grass_plant.png", optimize=True)
    tall = plant_icon.crop((0, 2, 32, 32)).resize((32, 32), Image.Resampling.LANCZOS)
    tall.save(ICONS_OUT / "tall_grass.png", optimize=True)


def main():
    for path in (SHEET_A, SHEET_B):
        if not path.exists():
            raise FileNotFoundError(f"missing generated source sheet: {path}")
    tiles = build_tiles()
    atlas = build_atlas(tiles)
    atlas.save(ATLAS_OUT, optimize=True)
    build_icons(tiles)
    print(f"wrote {ATLAS_OUT} ({atlas.width}x{atlas.height}; {len(ATLAS_ORDER)} 128px tiles)")
    print(f"wrote realistic block icons and classic item fallbacks to {ICONS_OUT}")


if __name__ == "__main__":
    main()
