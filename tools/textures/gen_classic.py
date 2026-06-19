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


def fill(im, color):
    """Flat base colour."""
    c = hx(color)
    px = im.load()
    for y in range(S):
        for x in range(S):
            px[x, y] = c


def speck(im, palette, prob, rng):
    """Sprinkle a few palette pixels over the base (seamless; keep prob low)."""
    cols = [hx(c) for c in palette]
    px = im.load()
    for y in range(S):
        for x in range(S):
            if rng.random() < prob:
                px[x, y] = rng.choice(cols)


def pebble(im, cx, cy, r, base, hi, lo, rng, jit=0.25):
    """Rounded cluster with soft top-left highlight + bottom-right shadow（立体颗粒）。
    Wraps with `% S` so it tiles seamlessly."""
    px = im.load()
    b, h, l = hx(base), hx(hi), hx(lo)
    for dy in range(-r - 1, r + 2):
        for dx in range(-r - 1, r + 2):
            d = (dx * dx + dy * dy) ** 0.5
            if d <= r - rng.random() * r * jit:
                col = b
                if dx + dy < -r * 0.45:
                    col = h
                elif dx + dy > r * 0.55:
                    col = l
                px[(cx + dx) % S, (cy + dy) % S] = col


def streak(px, color, x, y, length, rng):
    """Short random-walk line (细裂纹/纹理), wraps seamlessly."""
    c = hx(color)
    for _ in range(length):
        px[x % S, y % S] = c
        x += rng.choice([-1, 0, 1])
        y += rng.choice([0, 1, 1])


# ---- per-block generators：经典闷色 + 立体软阴影 + 低噪点 -------------------

def stone(rng):
    im = new()
    fill(im, "#888888")
    speck(im, ["#7f7f7f", "#929292"], 0.12, rng)
    for _ in range(4):  # 软颗粒
        pebble(im, rng.randrange(S), rng.randrange(S), 2, "#888888", "#9b9b9b", "#747474", rng)
    px = im.load()
    for _ in range(3):  # 细裂纹，增加岩石质感
        streak(px, "#6f6f6f", rng.randrange(S), rng.randrange(S), rng.randint(2, 4), rng)
    return im


def cobblestone(rng):
    # 圆润鹅卵石 + 深色石缝（不再是噪点砖）。石头 wraps，故石缝平铺无缝。
    im = new()
    fill(im, "#565656")  # mortar
    for cx, cy in [(3, 3), (11, 4), (7, 9), (2, 12), (13, 11), (9, 1), (14, 15), (5, 7)]:
        pebble(im, cx, cy, rng.choice([3, 3, 4]), "#8a8a8a", "#9c9c9c", "#737373", rng, 0.3)
    return im


def dirt(rng):
    im = new()
    fill(im, "#7e5a3c")
    speck(im, ["#6f4f33", "#8a6648"], 0.15, rng)
    for _ in range(5):
        pebble(im, rng.randrange(S), rng.randrange(S), rng.choice([1, 2]), "#7e5a3c", "#8f6a49", "#654227", rng)
    return im


GB, GH, GL = "#6a9a4a", "#79ad57", "#577f3c"  # 经典闷绿（base/highlight/shadow）


def grass_top(rng):
    im = new()
    fill(im, GB)
    speck(im, ["#638f45", "#73a651"], 0.15, rng)
    for _ in range(5):  # 软草簇
        pebble(im, rng.randrange(S), rng.randrange(S), 2, GB, GH, GL, rng)
    return im


def grass_side(rng):
    # 泥土身 + 顶部草带（顶行提亮、按列锯齿下垂）
    im = new()
    fill(im, "#7e5a3c")
    speck(im, ["#6f4f33", "#8a6648"], 0.14, rng)
    px = im.load()
    for _ in range(3):
        pebble(im, rng.randrange(S), rng.randrange(4, S), 2, "#7e5a3c", "#8f6a49", "#654227", rng)
    g = [GB, "#638f45", "#73a651"]
    for x in range(S):
        depth = rng.randint(3, 4)
        for y in range(depth):
            c = GH if y == 0 else (rng.choice(g) if y < depth - 1 else GL)
            px[x, y] = hx(c)
        if rng.random() < 0.4:
            px[x, depth] = hx(rng.choice(g))
    return im


def sand(rng):
    im = new()
    fill(im, "#ddd0a0")
    speck(im, ["#d4c694", "#e6daad"], 0.12, rng)
    for _ in range(3):
        pebble(im, rng.randrange(S), rng.randrange(S), 1, "#ddd0a0", "#e8dcae", "#cabd86", rng)
    return im


def oak_planks(rng):
    im = new()
    fill(im, "#9a7843")
    speck(im, ["#8c6d3c", "#a6844f"], 0.4, rng)
    px = im.load()
    groove = hx("#5f4827")
    hi = hx("#ad8a52")
    for gy in (3, 7, 11, 15):  # 木板间深槽
        for x in range(S):
            px[x, gy] = groove
    for top in (0, 4, 8, 12):  # 每块木板顶边提亮
        for x in range(S):
            if rng.random() < 0.45:
                px[x, top] = hi
    seams = [4, 11, 2, 9]  # 错位竖缝
    for i, top in enumerate((0, 4, 8, 12)):
        for y in range(top, top + 3):
            px[seams[i] % S, y] = groove
    return im


def oak_log_side(rng):
    im = new()
    bark = ["#7a5d33", "#6b5028", "#866637", "#5a4424"]
    w = [3, 3, 2, 2]
    px = im.load()
    for x in range(S):  # 竖向树皮
        cb = rng.choices(bark, w)[0]
        groove = rng.random() < 0.22
        for y in range(S):
            if groove and rng.random() < 0.6:
                px[x, y] = hx("#4e3a1e")
            else:
                px[x, y] = hx(rng.choices([cb, "#937243", "#4e3a1e"], [7, 1, 1])[0])
    return im


def oak_log_top(rng):
    im = new()
    px = im.load()
    a, b = hx("#9a7843"), hx("#866637")
    light = hx("#b08c52")
    for y in range(S):
        for x in range(S):
            d = max(abs(x - 7.5), abs(y - 7.5))
            r = int(d)
            if r >= 7:
                px[x, y] = hx("#5f4727")  # 树皮边
            else:
                base = a if (r % 2 == 0) else b
                if d < 1.6:
                    base = light  # 心材
                px[x, y] = base if rng.random() < 0.85 else b
    return im


def coal_ore(rng):
    im = stone(rng)  # 石底 + 软深灰煤块（非死黑死噪）
    for cx, cy, r in [(4, 4, 2), (11, 10, 2), (8, 13, 1), (13, 4, 1), (2, 11, 1), (6, 8, 1)]:
        pebble(im, cx, cy, r, "#2b2b2b", "#3c3c3c", "#1d1d1d", rng, 0.2)
    return im


def water(rng):
    im = new()
    fill(im, "#3a6ea5")  # 经典闷蓝
    speck(im, ["#33639a", "#4178b0"], 0.14, rng)
    px = im.load()
    for _ in range(4):  # 微波纹
        y = rng.randrange(S)
        x0 = rng.randrange(S)
        for dx in range(rng.randint(2, 4)):
            px[(x0 + dx) % S, y] = hx("#5188bf")
    return im


def oak_leaves(rng):
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    px = im.load()
    cols = ["#3f6b22", "#4a7a2a", "#365e1c", "#558736", "#2c4d16"]
    wts = [3, 3, 2, 2, 2]
    for y in range(S):
        for x in range(S):
            if rng.random() < 0.12:
                px[x, y] = (0, 0, 0, 0)  # 镂空
            else:
                r, g, b = hx(rng.choices(cols, wts)[0])
                px[x, y] = (r, g, b, 255)
    for _ in range(4):  # 软明暗叶簇
        cx, cy = rng.randrange(S), rng.randrange(S)
        for dy in range(-1, 2):
            for dx in range(-1, 2):
                if rng.random() < 0.6:
                    r, g, b = hx("#558736") if rng.random() < 0.5 else hx("#2c4d16")
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



# —— 经典风新增 4 块（建在经典石/圆石/木板上，非卡通降色）——
def iron_ore(rng):
    im = stone(rng)  # 石底 + 米黄铁矿斑
    for cx, cy, r in [(4, 5, 2), (11, 4, 2), (8, 12, 2), (13, 11, 1), (3, 12, 1)]:
        pebble(im, cx, cy, r, "#c0a079", "#d2b58a", "#a4875e", rng, 0.2)
    return im


def crafting_table_top(rng):
    im = oak_planks(rng)
    px = im.load()
    g = hx("#5f4827")
    for i in range(S):
        px[i, 7] = g; px[i, 8] = g; px[7, i] = g; px[8, i] = g  # 田字工作格
        px[i, 0] = g; px[i, S - 1] = g; px[0, i] = g; px[S - 1, i] = g  # 外框
    return im


def crafting_table_side(rng):
    im = oak_planks(rng)
    px = im.load()
    d = hx("#5f4827")
    steel, steel_d = hx("#8f8f8f"), hx("#6a6a6a")
    for x in range(S):
        px[x, 1] = d  # 顶沿
    for x in range(2, 12):
        px[x, 6] = steel_d; px[x, 7] = steel
    for x in range(2, 12):
        px[x, 8] = steel if x % 2 == 0 else steel_d  # 锯齿
    for x in range(11, 15):
        for y in range(5, 10):
            px[x, y] = hx("#6b4a23") if y in (6, 7, 8) else hx("#4e3a1e")  # 木柄
    return im


def furnace_front(rng):
    im = cobblestone(rng)  # 圆石底
    px = im.load()
    for y in range(7, 14):
        for x in range(4, 12):
            if y in (7, 13) or x in (4, 11):
                px[x, y] = hx("#3a3a3a")  # 炉口框
            else:
                px[x, y] = hx("#181310")  # 炉膛黑
    for x in range(6, 10):
        px[x, 12] = hx("#7a3a1a")  # 一点炭火微光
    return im


def gravel(rng):
    # 经典砂砾：中性灰褐底 + 大量冷暖灰小石子，比 stone 更碎更杂
    im = new()
    fill(im, "#807a73")
    speck(im, ["#6f6a64", "#928c84", "#5f5a55"], 0.16, rng)
    for _ in range(9):
        tone = rng.choice([("#8a847c", "#9a948b", "#726c65"), ("#7a736b", "#8a837a", "#645e57")])
        pebble(im, rng.randrange(S), rng.randrange(S), rng.choice([1, 2, 2]), tone[0], tone[1], tone[2], rng)
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
    ("crafting_table_top", crafting_table_top),
    ("crafting_table_side", crafting_table_side),
    ("iron_ore", iron_ore),
    ("furnace_front", furnace_front),
    ("gravel", gravel),
]

BASE_SEED = 20260616  # bump this to reroll every texture; per-block offset keeps them independent


# 把方块渲染成等距(2:1)立方体图标：顶面 + 左右两侧面，按 MC 面亮度着色。
def iso_icon(top_tex, left_tex, right_tex):
    A, B, CH = 16, 8, 16  # 顶面半宽、顶面半高、侧面高
    M = 0.04  # 相邻面微重叠，消除接缝处的缺像素
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
                if -M <= s <= 1 + M and -M <= t <= 1 + M:  # 微重叠消接缝
                    sx = min(15, max(0, int(s * 16)))
                    sy = min(15, max(0, int(t * 16)))
                    r, g, b, a = tpx[sx, sy]
                    if a >= 128:
                        cpx[ox, oy] = (int(r * shade), int(g * shade), int(b * shade), 255)
    # 补缝：透明但被 ≥5 个不透明邻居包围的像素，用邻居平均色填上（堵接缝缺像素，不外扩轮廓）
    fills = []
    for oy in range(H):
        for ox in range(W):
            if cpx[ox, oy][3]:
                continue
            nb = [
                cpx[ox + dx, oy + dy]
                for dx in (-1, 0, 1)
                for dy in (-1, 0, 1)
                if (dx or dy) and 0 <= ox + dx < W and 0 <= oy + dy < H and cpx[ox + dx, oy + dy][3]
            ]
            if len(nb) >= 5:
                n = len(nb)
                fills.append(
                    (ox, oy, (sum(c[0] for c in nb) // n, sum(c[1] for c in nb) // n, sum(c[2] for c in nb) // n, 255))
                )
    for ox, oy, c in fills:
        cpx[ox, oy] = c
    return canvas


def main():
    tex = {}
    for i, (name, fn) in enumerate(BLOCKS):
        tex[name] = fn(random.Random(BASE_SEED + i * 1000))
    # 顺序/行数必须与 gen_textures.py 及 src/core/blocks/registry.ts 一致。tile 16=gravel 占第 5 行(图集 4×4→4×5)。
    ATLAS_ORDER = ['stone', 'dirt', 'grass_top', 'grass_side', 'cobblestone',
                   'sand', 'oak_log_top', 'oak_log_side', 'oak_planks', 'coal_ore', 'water',
                   'oak_leaves', 'crafting_table_top', 'crafting_table_side', 'iron_ore', 'furnace_front',
                   'gravel']
    COLS, ROWS = 4, 5
    atlas = Image.new('RGBA', (S * COLS, S * ROWS), (0, 0, 0, 0))
    for i, nm in enumerate(ATLAS_ORDER):
        atlas.paste(tex[nm].convert('RGBA'), ((i % COLS) * S, (i // COLS) * S))
    out = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'textures', 'atlas_classic.png')
    atlas.save(out)
    print('wrote', out, atlas.size)


if __name__ == '__main__':
    main()
