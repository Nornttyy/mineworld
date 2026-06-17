#!/usr/bin/env python3
"""Deterministic 16x16 pixel-art block textures for MINEWORLD.

Why this exists:
- The dev container is headless, so we bake flat, tileable face textures here
  instead of relying on hand-painted art. Output goes to public/textures/blocks/.
- Determinism (seeded RNG) matches the project's worldgen philosophy: same seed
  -> same texture, so regenerating never silently changes assets.

Style goals (classic Minecraft look, NOT photoreal):
- 16x16 native, no anti-aliasing (render layer must use NearestFilter).
- Tight palettes (3-5 close shades) + per-pixel noise -> reads as "stone/dirt"
  without TV-static. Per-pixel noise is automatically seamless when tiled.
"""

import os
import random
from PIL import Image, ImageDraw, ImageFont

S = 16  # native tile size (px)
OUT = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "blocks")
PREVIEW = os.path.join(os.path.dirname(__file__), "_preview.png")


def hx(s):
    s = s.lstrip("#")
    return (int(s[0:2], 16), int(s[2:4], 16), int(s[4:6], 16))


def new():
    return Image.new("RGB", (S, S))


def noise(im, palette, weights, rng):
    """Fill every pixel with a weighted-random palette colour (seamless when tiled)."""
    cols = [hx(c) for c in palette]
    px = im.load()
    for y in range(S):
        for x in range(S):
            px[x, y] = rng.choices(cols, weights)[0]


def blob(im, cx, cy, r, color, rng, jitter=0.45):
    """Paint a rough roundish cluster (used for ore inclusions, pebbles)."""
    px = im.load()
    c = hx(color)
    for dy in range(-r, r + 1):
        for dx in range(-r, r + 1):
            d = (dx * dx + dy * dy) ** 0.5
            if d <= r - rng.random() * (r * jitter):
                px[(cx + dx) % S, (cy + dy) % S] = c


# ---- per-block generators -------------------------------------------------

def stone(rng):
    im = new()
    noise(im, ["#888888", "#7e7e7e", "#757575", "#6d6d6d"], [3, 4, 3, 2], rng)
    for _ in range(5):  # a few darker speckle clusters for texture
        blob(im, rng.randrange(S), rng.randrange(S), 1, "#666666", rng)
    return im


def cobblestone(rng):
    im = new()
    noise(im, ["#8a8a8a", "#7e7e7e", "#6f6f6f"], [3, 4, 3], rng)
    # Irregular cobbles separated by dark mortar. Draw mortar as broken lines.
    px = im.load()
    mortar = hx("#4d4d4d")
    seams_y = [0, 5, 10]
    for sy in seams_y:
        for x in range(S):
            if rng.random() < 0.85:
                px[x, (sy + rng.randint(0, 1)) % S] = mortar
    seams_x = [(0, 0, 5), (8, 5, 10), (3, 10, 16), (12, 10, 16)]
    for sx, y0, y1 in seams_x:
        for y in range(y0, y1):
            if rng.random() < 0.85:
                px[(sx + rng.randint(0, 1)) % S, y] = mortar
    for _ in range(6):  # subtle highlights on cobble tops
        blob(im, rng.randrange(S), rng.randrange(S), 1, "#9a9a9a", rng)
    return im


def dirt(rng):
    im = new()
    noise(im, ["#8a6443", "#7e5a3c", "#735133", "#92694a"], [3, 4, 3, 2], rng)
    for _ in range(6):
        blob(im, rng.randrange(S), rng.randrange(S), 1, "#5e4228", rng)  # pebbles
    for _ in range(3):
        blob(im, rng.randrange(S), rng.randrange(S), 0, "#9c7350", rng)  # light grit
    return im


GRASS = ["#6aa84f", "#5f9e45", "#74b357", "#569140", "#7cbf60"]
GRASS_W = [4, 3, 3, 2, 2]
DIRT_P = ["#8a6443", "#7e5a3c", "#735133", "#92694a"]
DIRT_W = [3, 4, 3, 2]


def grass_top(rng):
    im = new()
    noise(im, GRASS, GRASS_W, rng)
    for _ in range(4):
        blob(im, rng.randrange(S), rng.randrange(S), 1, "#4d8636", rng)
    return im


def grass_side(rng):
    im = new()
    # Body is dirt; grass spills over the top edge with a jagged, per-column depth.
    noise(im, DIRT_P, DIRT_W, rng)
    px = im.load()
    gcols = [hx(c) for c in GRASS]
    for x in range(S):
        depth = rng.randint(3, 5)
        for y in range(depth):
            px[x, y] = rng.choices(gcols, GRASS_W)[0]
        if rng.random() < 0.5:  # occasional drip of grass lower into the dirt
            px[x, depth] = rng.choices(gcols, GRASS_W)[0]
    return im


def sand(rng):
    im = new()
    noise(im, ["#e0d6a0", "#dbd098", "#d6ca90", "#e6dcab"], [3, 4, 3, 2], rng)
    for _ in range(4):
        blob(im, rng.randrange(S), rng.randrange(S), 0, "#c9bd82", rng)
    return im


def oak_planks(rng):
    im = new()
    base = ["#a07d45", "#94703c", "#ab8950"]
    noise(im, base, [4, 3, 3], rng)
    px = im.load()
    line = hx("#6f5128")
    # Four horizontal planks (4px tall). Dark groove between planks + staggered
    # vertical seams so it tiles and looks like offset planking.
    for gy in (3, 7, 11, 15):
        for x in range(S):
            px[x, gy] = line
    seams = [4, 12, 2, 9]  # one vertical seam per plank, staggered
    for i, plank_top in enumerate((0, 4, 8, 12)):
        sx = seams[i]
        for y in range(plank_top, plank_top + 3):
            px[sx % S, y] = line
    blob(im, 6, 5, 1, "#5f4422", rng)  # a knot
    return im


def oak_log_side(rng):
    im = new()
    # Vertical bark: each column gets a base shade + occasional darker streak.
    bark = ["#6b5028", "#5a4222", "#7a5d33", "#4e3a1e"]
    bark_w = [3, 3, 3, 2]
    cols = [hx(c) for c in bark]
    px = im.load()
    for x in range(S):
        cbase = rng.choices(cols, bark_w)[0]
        streak = rng.random() < 0.3
        for y in range(S):
            if streak and rng.random() < 0.6:
                px[x, y] = hx("#3f3018")
            else:
                # slight per-pixel jitter around the column base
                px[x, y] = rng.choices([cbase, hx("#876a3a"), hx("#4e3a1e")], [6, 1, 1])[0]
    return im


def oak_log_top(rng):
    im = new()
    # Concentric growth rings around centre + dark bark ring at the border.
    px = im.load()
    ring_a, ring_b = hx("#a07d45"), hx("#8a6a38")
    light = hx("#b89556")
    for y in range(S):
        for x in range(S):
            d = max(abs(x - 7.5), abs(y - 7.5))  # square rings (chebyshev)
            r = int(d)
            if r >= 7:
                px[x, y] = hx("#5f4727")  # bark border
            else:
                base = ring_a if (r % 2 == 0) else ring_b
                if d < 1.6:
                    base = light  # bright heartwood centre
                # tiny jitter so rings aren't dead-flat
                px[x, y] = base if rng.random() < 0.85 else ring_b
    return im


def _coal_cluster(px, cx, cy, R, rng, core, dark, edge):
    """Paint one rough coal blob of radius R: dark core, ragged probabilistic edge."""
    rad = int(R) + 1
    for dy in range(-rad, rad + 1):
        for dx in range(-rad, rad + 1):
            d = (dx * dx + dy * dy) ** 0.5
            r = rng.random()
            if d < 0.7:
                px[(cx + dx) % S, (cy + dy) % S] = core
            elif d <= R * 0.65 and r < 0.9:
                px[(cx + dx) % S, (cy + dy) % S] = dark
            elif d <= R and r < 0.45:  # ragged outline
                px[(cx + dx) % S, (cy + dy) % S] = edge


def coal_ore(rng):
    im = stone(rng)  # ore = stone base + mineral deposits
    px = im.load()
    core, dark, edge = hx("#0e0e0e"), hx("#1a1a1a"), hx("#2b2b2b")
    # Mix of sizes (cx, cy, radius): a couple of big chunks, some medium, many
    # small flecks — matches how real coal ore reads, not one uniform grain size.
    clusters = [
        (4, 4, 2.7), (11, 11, 2.5),                       # large
        (12, 3, 1.6), (3, 11, 1.7), (8, 7, 1.5),          # medium
        (14, 8, 0.8), (7, 1, 0.8), (1, 7, 0.9),
        (10, 14, 0.8), (14, 14, 0.8), (6, 13, 0.9),       # small
    ]
    for cx, cy, radius in clusters:
        _coal_cluster(px, cx, cy, radius, rng, core, dark, edge)
    for _ in range(6):  # stray single flecks
        px[rng.randrange(S), rng.randrange(S)] = dark
    return im


def water(rng):
    # 不透明蓝噪声；半透明由渲染材质的 opacity 统一处理
    im = new()
    noise(im, ["#3b6fb0", "#3568a6", "#4279bd", "#3060a0"], [3, 3, 2, 2], rng)
    return im


def oak_leaves(rng):
    # 带透明孔洞的树叶（RGBA）：约 14% 像素镂空，能透看后面
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    px = im.load()
    cols = [hx(c) for c in ["#3f6b22", "#4f7e2b", "#365e1c", "#5a8a32", "#2c4d16"]]
    wts = [3, 3, 2, 2, 2]
    for y in range(S):
        for x in range(S):
            if rng.random() < 0.14:
                px[x, y] = (0, 0, 0, 0)  # 镂空
            else:
                r, g, b = rng.choices(cols, wts)[0]
                px[x, y] = (r, g, b, 255)
    return im


BLOCKS = [
    ("stone", stone),
    ("cobblestone", cobblestone),
    ("dirt", dirt),
    ("grass_top", grass_top),
    ("grass_side", grass_side),
    ("sand", sand),
    ("oak_planks", oak_planks),
    ("oak_log_side", oak_log_side),
    ("oak_log_top", oak_log_top),
    ("coal_ore", coal_ore),
    ("water", water),
    ("oak_leaves", oak_leaves),
]

BASE_SEED = 20260616  # bump this to reroll every texture; per-block offset keeps them independent


# 把方块渲染成等距(2:1)立方体图标：顶面 + 左右两侧面，按 MC 面亮度着色。
def iso_icon(top_tex, left_tex, right_tex):
    A, B, CH = 16, 8, 16  # 顶面半宽、顶面半高、侧面高
    W, H = 2 * A, 2 * B + CH
    cx = A
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    cpx = canvas.load()
    Lp = (cx - A, B)        # 左顶点
    Tp = (cx, 0)            # 上顶点
    Rp = (cx + A, B)        # 右顶点
    Bp = (cx, 2 * B)        # 下顶点
    faces = [
        (top_tex, Lp, (Tp[0] - Lp[0], Tp[1] - Lp[1]), (Bp[0] - Lp[0], Bp[1] - Lp[1]), 1.0),   # 顶
        (left_tex, Lp, (Bp[0] - Lp[0], Bp[1] - Lp[1]), (0, CH), 0.62),                          # 左
        (right_tex, Bp, (Rp[0] - Bp[0], Rp[1] - Bp[1]), (0, CH), 0.80),                         # 右
    ]
    for tex, p0, u, v, shade in faces:
        det = u[0] * v[1] - u[1] * v[0]
        if det == 0:
            continue
        i0, i1, i2, i3 = v[1] / det, -v[0] / det, -u[1] / det, u[0] / det
        tpx = tex.convert("RGBA").load()
        for oy in range(H):
            for ox in range(W):
                dx = ox - p0[0] + 0.5
                dy = oy - p0[1] + 0.5
                s = i0 * dx + i1 * dy
                t = i2 * dx + i3 * dy
                if 0 <= s < 1 and 0 <= t < 1:
                    r, g, b, a = tpx[min(15, int(s * 16)), min(15, int(t * 16))]
                    if a >= 128:
                        cpx[ox, oy] = (int(r * shade), int(g * shade), int(b * shade), 255)
    return canvas


def main():
    os.makedirs(OUT, exist_ok=True)
    tex = {}
    for i, (name, fn) in enumerate(BLOCKS):
        rng = random.Random(BASE_SEED + i * 1000)
        im = fn(rng)
        im.save(os.path.join(OUT, name + ".png"))
        tex[name] = im
        print(f"wrote {name}.png")

    # Pack block tiles into one atlas (4x4 grid, 16px each) for single-material rendering.
    # 顺序必须与 src/core/blocks/registry.ts 的 tile 索引一致。
    ATLAS_ORDER = ['stone', 'dirt', 'grass_top', 'grass_side', 'cobblestone',
                   'sand', 'oak_log_top', 'oak_log_side', 'oak_planks', 'coal_ore', 'water',
                   'oak_leaves']
    atlas = Image.new('RGBA', (S * 4, S * 4), (0, 0, 0, 0))
    for i, nm in enumerate(ATLAS_ORDER):
        atlas.paste(tex[nm].convert('RGBA'), ((i % 4) * S, (i // 4) * S))
    atlas.save(os.path.join(OUT, '..', 'atlas.png'))
    print(f'wrote atlas.png ({S * 4}x{S * 4}, {len(ATLAS_ORDER)} tiles)')

    # 快捷栏用的等距方块图标（顶面, 侧面）
    ICON_FACES = {
        'stone': ('stone', 'stone'),
        'dirt': ('dirt', 'dirt'),
        'grass': ('grass_top', 'grass_side'),
        'cobblestone': ('cobblestone', 'cobblestone'),
        'sand': ('sand', 'sand'),
        'oak_log': ('oak_log_top', 'oak_log_side'),
        'oak_planks': ('oak_planks', 'oak_planks'),
        'coal_ore': ('coal_ore', 'coal_ore'),
        'oak_leaves': ('oak_leaves', 'oak_leaves'),
    }
    icons_dir = os.path.join(OUT, '..', 'icons')
    os.makedirs(icons_dir, exist_ok=True)
    for nm, (top, side) in ICON_FACES.items():
        iso_icon(tex[top], tex[side], tex[side]).save(os.path.join(icons_dir, nm + '.png'))
    print(f'wrote {len(ICON_FACES)} iso icons -> public/textures/icons/')

    # Build a labelled 3x3-tiled preview so seams/quality are easy to judge.
    cols, scale, tilepx, lbl = 5, 8, None, 16
    cell = S * 3 * scale  # 384px per cell? too big -> use smaller scale below
    scale = 3
    cell = S * 3 * scale  # 144px tiled preview per cell
    pad = 8
    cw, ch = cell + pad * 2, cell + lbl + pad * 2
    rows = (len(BLOCKS) + cols - 1) // cols
    sheet = Image.new("RGB", (cw * cols, ch * rows), (28, 28, 32))
    draw = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.load_default()
    except Exception:
        font = None
    for i, (name, _) in enumerate(BLOCKS):
        r, c = divmod(i, cols)
        tiled = Image.new("RGB", (S * 3, S * 3))
        for ty in range(3):
            for tx in range(3):
                tiled.paste(tex[name], (tx * S, ty * S))
        big = tiled.resize((cell, cell), Image.NEAREST)
        ox, oy = c * cw + pad, r * ch + pad
        sheet.paste(big, (ox, oy))
        draw.text((ox, oy + cell + 2), name, fill=(220, 220, 220), font=font)
    sheet.save(PREVIEW)
    print(f"wrote preview -> {PREVIEW}")


if __name__ == "__main__":
    main()
