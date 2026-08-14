#!/usr/bin/env python3
"""Build MINEWORLD's standard 16x16 pixel texture pack.

The pack is deliberately authored as tiny indexed-looking tiles: every source
face is exactly 16x16, uses a compact palette, and is rendered without
anti-aliasing.  Common overworld blocks have their own classic patterns instead
of reusing the vivid pack; no AI-generated image or external game asset is used.
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


def noisy_tile(rng, base, accents, probability):
    """Flat, hard-edged palette noise: one source pixel is always one output pixel."""
    image = Image.new("RGB", (S, S), source.hx(base))
    pixels = image.load()
    colors = [source.hx(color) for color in accents]
    for y in range(S):
        for x in range(S):
            if rng.random() < probability:
                pixels[x, y] = rng.choice(colors)
    return image


def stone(rng):
    image = noisy_tile(rng, "#7d7d7d", ["#737373", "#888888", "#696969"], 0.34)
    pixels = image.load()
    for x, y in [(1, 4), (5, 1), (11, 3), (14, 8), (8, 10), (3, 13), (12, 14)]:
        pixels[x, y] = source.hx("#5f5f5f")
        if (x + y) % 2 == 0:
            pixels[(x + 1) % S, y] = source.hx("#686868")
    return image


def dirt(rng):
    image = noisy_tile(rng, "#866044", ["#755138", "#966c4d", "#67452f"], 0.38)
    pixels = image.load()
    for x, y in [(2, 2), (9, 1), (13, 5), (5, 7), (1, 10), (10, 12), (6, 15)]:
        pixels[x, y] = source.hx("#553820")
    return image


def grass_top(rng):
    image = noisy_tile(rng, "#74a844", ["#65963a", "#82b950", "#598833"], 0.42)
    pixels = image.load()
    for x, y in [(1, 2), (5, 4), (12, 1), (8, 7), (14, 9), (3, 12), (10, 14)]:
        pixels[x, y] = source.hx("#91c45c")
        if y + 1 < S:
            pixels[x, y + 1] = source.hx("#5b8c34")
    return image


def grass_side(rng):
    image = dirt(rng)
    pixels = image.load()
    depths = [4, 3, 3, 5, 3, 4, 3, 3, 5, 4, 3, 4, 3, 3, 5, 4]
    greens = [source.hx("#74a844"), source.hx("#82b950"), source.hx("#65963a")]
    dark = source.hx("#56802f")
    for x, depth in enumerate(depths):
        for y in range(depth):
            pixels[x, y] = dark if y == depth - 1 else greens[(x + y) % len(greens)]
    return image


def cobblestone(rng):
    image = Image.new("RGB", (S, S), source.hx("#505050"))
    tones = [
        ("#858585", "#989898", "#6d6d6d"),
        ("#777777", "#898989", "#606060"),
        ("#919191", "#a2a2a2", "#777777"),
        ("#6d6d6d", "#7d7d7d", "#585858"),
    ]
    centers = [(2, 2, 3), (9, 2, 3), (14, 4, 3), (5, 7, 3), (11, 9, 4), (1, 12, 3), (7, 14, 3), (14, 15, 3)]
    for index, (x, y, radius) in enumerate(centers):
        base, light, dark = tones[index % len(tones)]
        source.pebble(image, x, y, radius, base, light, dark, rng, 0.16)
    return image


def sand(rng):
    image = noisy_tile(rng, "#ddd09a", ["#d0c188", "#ebdfad", "#c6b77e"], 0.16)
    pixels = image.load()
    for x, y in [(2, 5), (9, 2), (13, 8), (5, 11), (10, 14)]:
        pixels[x, y] = source.hx("#bfae75")
    return image


def oak_planks(rng):
    image = noisy_tile(rng, "#9b7842", ["#a9844b", "#8b6938"], 0.24)
    pixels = image.load()
    groove = source.hx("#5e4524")
    light = source.hx("#b08c53")
    for y in (3, 7, 11, 15):
        for x in range(S):
            pixels[x, y] = groove
    for y in (0, 4, 8, 12):
        for x in range(S):
            if (x + y) % 3:
                pixels[x, y] = light
    for seam, top in zip((5, 12, 3, 10), (0, 4, 8, 12)):
        for y in range(top, top + 3):
            pixels[seam, y] = groove
    return image


def oak_log_side(rng):
    image = Image.new("RGB", (S, S), source.hx("#76582f"))
    pixels = image.load()
    columns = ["#4c351b", "#76582f", "#8a693a", "#664925", "#997548", "#5a3f20"]
    for x in range(S):
        base = source.hx(columns[(x * 5 + 2) % len(columns)])
        for y in range(S):
            pixels[x, y] = base
            if (x * 3 + y * 5) % 17 == 0:
                pixels[x, y] = source.hx("#3f2b15")
    return image


def oak_log_top(rng):
    image = Image.new("RGB", (S, S), source.hx("#5b4021"))
    pixels = image.load()
    rings = ["#aa824c", "#8e6939", "#b58e58", "#8a6234", "#c09a61", "#7b562d", "#b08750"]
    for y in range(1, S - 1):
        for x in range(1, S - 1):
            ring = min(6, int(max(abs(x - 7.5), abs(y - 7.5))))
            pixels[x, y] = source.hx(rings[ring])
    pixels[7, 7] = source.hx("#714a25")
    pixels[8, 8] = source.hx("#714a25")
    return image


def ore(base_image, color, light, dark, points):
    pixels = base_image.load()
    colors = [source.hx(color), source.hx(light), source.hx(dark)]
    for index, (x, y) in enumerate(points):
        pixels[x, y] = colors[index % 3]
        if index % 2 == 0 and x + 1 < S:
            pixels[x + 1, y] = colors[(index + 1) % 3]
        if index % 3 == 0 and y + 1 < S:
            pixels[x, y + 1] = colors[(index + 2) % 3]
    return base_image


def coal_ore(rng):
    return ore(stone(rng), "#292929", "#3a3a3a", "#171717", [(2, 3), (10, 2), (6, 6), (13, 7), (3, 10), (9, 11), (6, 14), (14, 13)])


def iron_ore(rng):
    return ore(stone(rng), "#b8946f", "#d0ad86", "#987654", [(3, 2), (11, 3), (7, 6), (13, 9), (2, 11), (9, 12), (5, 14)])


def diamond_ore(rng):
    """经典包的原创钻石矿；与卡通包保持 tile 顺序一致。"""
    return ore(stone(rng), "#2d9fac", "#72e2e2", "#156c78", [(2, 3), (10, 2), (6, 6), (13, 7), (3, 10), (9, 11), (6, 14), (14, 13)])


def diamond_block(rng):
    image = Image.new("RGB", (S, S), source.hx("#25a8b3"))
    pixels = image.load()
    hi, mid, lo, deep = source.hx("#71e2df"), source.hx("#3bc5c7"), source.hx("#147b88"), source.hx("#0e5e6b")
    for y in range(S):
        for x in range(S):
            if (x + y) % 9 == 0:
                pixels[x, y] = hi
            elif (x - y) % 11 == 0:
                pixels[x, y] = lo
            elif (x * 3 + y * 5) % 17 == 0:
                pixels[x, y] = mid
    for i in range(S):
        pixels[i, 0] = hi
        pixels[0, i] = hi
        pixels[i, S - 1] = deep
        pixels[S - 1, i] = deep
    return image


def oak_leaves(rng):
    image = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    pixels = image.load()
    colors = [source.hx("#315b20"), source.hx("#3d7028"), source.hx("#4a8031"), source.hx("#274a18")]
    holes = {(x + dx, y + dy) for x, y in [(1, 1), (8, 0), (13, 4), (4, 7), (10, 9), (1, 13), (14, 14)] for dx, dy in [(0, 0), (1, 0), (0, 1)]}
    for y in range(S):
        for x in range(S):
            if (x, y) not in holes:
                r, g, b = colors[(x * 3 + y * 5 + x * y) % len(colors)]
                pixels[x, y] = (r, g, b, 255)
    return image


def crafting_table_top(rng):
    image = oak_planks(rng)
    pixels = image.load()
    edge = source.hx("#493319")
    for i in range(S):
        pixels[i, 0] = edge
        pixels[i, S - 1] = edge
        pixels[0, i] = edge
        pixels[S - 1, i] = edge
        pixels[i, 7] = edge
        pixels[7, i] = edge
    return image


def crafting_table_side(rng):
    image = oak_planks(rng)
    pixels = image.load()
    dark = source.hx("#4b3318")
    steel = source.hx("#a2a2a2")
    for x in range(S):
        pixels[x, 1] = dark
    for x in range(2, 11):
        pixels[x, 6] = steel
        pixels[x, 7] = source.hx("#696969")
    for x in range(11, 15):
        for y in range(5, 10):
            pixels[x, y] = dark
    return image


def furnace_front(rng):
    image = cobblestone(rng)
    pixels = image.load()
    for y in range(7, 14):
        for x in range(4, 12):
            pixels[x, y] = source.hx("#353535") if x in (4, 11) or y in (7, 13) else source.hx("#111111")
    for x in range(6, 10):
        pixels[x, 12] = source.hx("#8a3b14")
    return image


BLOCKS.update({
    "stone": stone,
    "dirt": dirt,
    "grass_top": grass_top,
    "grass_side": grass_side,
    "cobblestone": cobblestone,
    "sand": sand,
    "oak_planks": oak_planks,
    "oak_log_side": oak_log_side,
    "oak_log_top": oak_log_top,
    "coal_ore": coal_ore,
    "iron_ore": iron_ore,
    "diamond_ore": diamond_ore,
    "diamond_block": diamond_block,
    "oak_leaves": oak_leaves,
    "crafting_table_top": crafting_table_top,
    "crafting_table_side": crafting_table_side,
    "furnace_front": furnace_front,
})

# Order must stay aligned with src/core/blocks/registry.ts and the renderer's
# 4x10 atlas constants.  The trailing cells stay transparent for future blocks.
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
    "diamond_block",
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
    "diamond_ore": ("diamond_ore", "diamond_ore"),
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
    "diamond_block": ("diamond_block", "diamond_block"),
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
    atlas = Image.new("RGBA", (S * 4, S * 10), (0, 0, 0, 0))
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
