#!/usr/bin/env python3
"""Deterministic 16x16 pixel-art block textures for MINEWORLD.

Why this exists:
- The dev container is headless, so we bake flat, tileable face textures here
  instead of relying on hand-painted art. Output goes to public/textures/blocks/.
- Determinism (seeded RNG) matches the project's worldgen philosophy: same seed
  -> same texture, so regenerating never silently changes assets.

Style: CARTOON pixel-art ("vibrant + soft-shaded"). Still 16x16 native, no AA
(render layer uses NearestFilter), but:
- Brighter, more saturated palettes with FEW shades and LOW per-pixel noise,
  so surfaces read clean (not TV-static realistic).
- Rounded features (pebbles, cobbles, coal, grains) get a soft top-left
  highlight + bottom-right shadow -> a chunky, "toon 3D" look.
- Everything stays seamless when tiled: per-pixel speckle is naturally seamless,
  and rounded features wrap with `% S` so they never cut at tile edges.
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


# ---- cartoon helpers ------------------------------------------------------

def fill(im, color):
    """Flat base colour — cartoon textures start from a solid fill, not noise."""
    c = hx(color)
    px = im.load()
    for y in range(S):
        for x in range(S):
            px[x, y] = c


def speck(im, palette, prob, rng):
    """Sprinkle a FEW palette pixels over the base (seamless; keep prob low so it
    stays clean, not noisy)."""
    cols = [hx(c) for c in palette]
    px = im.load()
    for y in range(S):
        for x in range(S):
            if rng.random() < prob:
                px[x, y] = rng.choice(cols)


def pebble(im, cx, cy, r, base, hi, lo, rng, jit=0.25):
    """Rounded cluster with a soft top-left highlight and bottom-right shadow ->
    the 'toon 3D' look. Wraps with `% S` so it tiles seamlessly across blocks."""
    px = im.load()
    b, h, l = hx(base), hx(hi), hx(lo)
    for dy in range(-r - 1, r + 2):
        for dx in range(-r - 1, r + 2):
            d = (dx * dx + dy * dy) ** 0.5
            if d <= r - rng.random() * r * jit:
                col = b
                if dx + dy < -r * 0.45:
                    col = h  # lit edge
                elif dx + dy > r * 0.55:
                    col = l  # shaded edge
                px[(cx + dx) % S, (cy + dy) % S] = col


# ---- per-block generators -------------------------------------------------

def stone(rng):
    im = new()
    fill(im, "#9d9d9d")
    speck(im, ["#969696", "#a9a9a9"], 0.16, rng)
    for _ in range(4):  # rounded light pebbles for soft relief
        pebble(im, rng.randrange(S), rng.randrange(S), 2, "#9d9d9d", "#bcbcbc", "#7d7d7d", rng)
    pebble(im, rng.randrange(S), rng.randrange(S), 2, "#8f8f8f", "#a4a4a4", "#787878", rng)  # one darker for definition
    return im


def cobblestone(rng):
    # Rounded cobbles packed over dark mortar (reads as cobble + cartoon, vs the
    # old straight-row look). Stones wrap, so the mortar gaps tile seamlessly.
    im = new()
    fill(im, "#565656")  # mortar
    spots = [(3, 3), (11, 4), (7, 9), (2, 12), (13, 11), (9, 1), (14, 15), (5, 7)]
    for cx, cy in spots:
        pebble(im, cx, cy, rng.choice([3, 3, 4]), "#9a9a9a", "#b6b6b6", "#7b7b7b", rng, 0.3)
    return im


def dirt(rng):
    im = new()
    fill(im, "#9d6b43")
    speck(im, ["#90603b", "#a87850"], 0.16, rng)
    for _ in range(5):  # mix of light grit and dark pebbles
        pebble(im, rng.randrange(S), rng.randrange(S), rng.choice([1, 2]), "#9d6b43", "#b5825a", "#7c5230", rng)
    return im


# Vibrant cartoon grass green (base / highlight / shadow).
G_BASE, G_HI, G_LO = "#5fc24f", "#76d965", "#44a23a"
G_MIX = ["#57ba47", "#69cf59"]


def grass_top(rng):
    im = new()
    fill(im, G_BASE)
    speck(im, G_MIX, 0.18, rng)
    for _ in range(5):  # soft tufts of lighter/darker green
        pebble(im, rng.randrange(S), rng.randrange(S), 2, G_BASE, G_HI, G_LO, rng)
    return im


def grass_side(rng):
    # Dirt body + a bright green band spilling over the top edge (lit top row).
    im = new()
    fill(im, "#9d6b43")
    speck(im, ["#90603b", "#a87850"], 0.14, rng)
    px = im.load()
    for _ in range(3):
        pebble(im, rng.randrange(S), rng.randrange(4, S), 2, "#9d6b43", "#b5825a", "#7c5230", rng)
    for x in range(S):
        depth = rng.randint(3, 4)
        for y in range(depth):
            c = G_HI if y == 0 else (rng.choice([G_BASE] + G_MIX) if y < depth - 1 else G_LO)
            px[x, y] = hx(c)
        if rng.random() < 0.4:  # occasional grass drip into the dirt
            px[x, depth] = hx(rng.choice([G_BASE] + G_MIX))
    return im


def sand(rng):
    im = new()
    fill(im, "#ebdca6")  # bright, warm cartoon sand
    speck(im, ["#e2d398", "#f5ecbe"], 0.14, rng)
    for _ in range(3):
        pebble(im, rng.randrange(S), rng.randrange(S), 1, "#ebdca6", "#f7eec0", "#d6c488", rng)
    return im


def oak_planks(rng):
    im = new()
    fill(im, "#a9854c")
    speck(im, ["#9a7740", "#b08a52"], 0.45, rng)
    px = im.load()
    groove = hx("#6e5230")
    hi = hx("#be9a5e")
    for gy in (3, 7, 11, 15):  # dark groove between planks
        for x in range(S):
            px[x, gy] = groove
    for top in (0, 4, 8, 12):  # lit top edge of each plank
        for x in range(S):
            if rng.random() < 0.5:
                px[x, top] = hi
    seams = [4, 11, 2, 9]  # one staggered vertical seam per plank
    for i, top in enumerate((0, 4, 8, 12)):
        for y in range(top, top + 3):
            px[seams[i] % S, y] = groove
    return im


def oak_log_side(rng):
    im = new()
    bark = ["#8a6a3c", "#7a5d33", "#9a7a48", "#6e5230"]
    bark_w = [3, 3, 2, 2]
    px = im.load()
    for x in range(S):  # vertical bark columns
        cbase = rng.choices(bark, bark_w)[0]
        groove = rng.random() < 0.22
        for y in range(S):
            if groove and rng.random() < 0.6:
                px[x, y] = hx("#5c4322")
            else:
                px[x, y] = hx(rng.choices([cbase, "#a98a55", "#5c4322"], [7, 1, 1])[0])
    return im


def oak_log_top(rng):
    # Concentric (square/chebyshev) growth rings + dark bark border, warmer palette.
    im = new()
    px = im.load()
    ring_a, ring_b = hx("#a9854c"), hx("#8a6a3c")
    light = hx("#c4a26c")
    for y in range(S):
        for x in range(S):
            d = max(abs(x - 7.5), abs(y - 7.5))
            r = int(d)
            if r >= 7:
                px[x, y] = hx("#6e5230")  # bark border
            else:
                base = ring_a if (r % 2 == 0) else ring_b
                if d < 1.6:
                    base = light  # bright heartwood centre
                px[x, y] = base if rng.random() < 0.85 else ring_b
    return im


def coal_ore(rng):
    im = stone(rng)  # ore = stone base + bold coal chunks
    spots = [(4, 4, 2), (11, 10, 2), (8, 13, 1), (13, 4, 1), (2, 11, 1), (6, 8, 1)]
    for cx, cy, r in spots:
        pebble(im, cx, cy, r, "#1a1a1a", "#3a3a3a", "#0d0d0d", rng, 0.2)
    return im


def water(rng):
    im = new()
    fill(im, "#3f7fc8")  # vibrant cartoon blue
    speck(im, ["#356bb0", "#4a8bd6"], 0.16, rng)
    px = im.load()
    for _ in range(5):  # short lighter ripple dashes
        y = rng.randrange(S)
        x0 = rng.randrange(S)
        for dx in range(rng.randint(2, 4)):
            px[(x0 + dx) % S, y] = hx("#5a97da")
    return im


def oak_leaves(rng):
    # Bright cartoon foliage with ~12% see-through holes (RGBA) + soft clusters.
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    px = im.load()
    cols = ["#4e9e34", "#5fb343", "#3f8a2a", "#6cc24e", "#357321"]
    wts = [3, 3, 2, 2, 2]
    for y in range(S):
        for x in range(S):
            if rng.random() < 0.12:
                px[x, y] = (0, 0, 0, 0)  # hole
            else:
                r, g, b = hx(rng.choices(cols, wts)[0])
                px[x, y] = (r, g, b, 255)
    for _ in range(4):  # soft light/dark leaf clusters for depth
        cx, cy = rng.randrange(S), rng.randrange(S)
        for dy in range(-1, 2):
            for dx in range(-1, 2):
                if rng.random() < 0.6:
                    r, g, b = hx("#6cc24e") if rng.random() < 0.5 else hx("#357321")
                    px[(cx + dx) % S, (cy + dy) % S] = (r, g, b, 255)
    return im


def crack_strip():
    """10 段挖掘裂纹（destroy_stage_0..9），横排成 160x16 RGBA。
    裂纹从中心向外随机游走生长；后一段包含前一段（单调加深）。渲染层按进度选段。"""
    STAGES = 10
    rng = random.Random(424242)
    pts, seen = [], set()
    for _ in range(7):  # 7 条裂纹分支，从中心向外游走
        x, y = 8, 8
        for _ in range(34):
            if (x, y) not in seen:
                seen.add((x, y))
                pts.append((x, y))
            x += rng.choice([-1, -1, 0, 1, 1])
            y += rng.choice([-1, -1, 0, 1, 1])
            x, y = max(0, min(S - 1, x)), max(0, min(S - 1, y))
    strip = Image.new("RGBA", (S * STAGES, S), (0, 0, 0, 0))
    sp = strip.load()
    n = len(pts)
    for k in range(STAGES):
        cut = int(round((k + 1) / STAGES * n))
        for i in range(cut):
            x, y = pts[i]
            sp[k * S + x, y] = (16, 16, 16, 210)  # 暗灰半透，像裂缝
    return strip


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

    # 挖掘裂纹条（10 段，160x16）→ public/textures/crack.png
    crack_strip().save(os.path.join(OUT, '..', 'crack.png'))
    print('wrote crack.png (10 stages)')

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
