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


# ---- per-block generators：鲜艳干净卡通色 + 强明暗分块 + 极低噪点 -----------
# 卡通方向：主色高饱和+高亮度，高光更亮、暗部更深，色块清晰；speck 概率压到很低
# 让色块干净通透。NearestFilter 渲染，全程无抗锯齿。继续用 % S 包裹保证无缝平铺。

def stone(rng):
    im = new()
    fill(im, "#a3a6b0")  # 干净中灰（略带冷调，更通透不发黄）
    speck(im, ["#9396a0", "#b4b7c1"], 0.05, rng)  # 噪点压到极低
    for _ in range(4):  # 软颗粒，强高光/深暗，立体感更分明
        pebble(im, rng.randrange(S), rng.randrange(S), 2, "#a3a6b0", "#c2c5cf", "#7f828c", rng)
    px = im.load()
    for _ in range(2):  # 少量细裂纹，保留岩石质感但更干净
        streak(px, "#7a7d87", rng.randrange(S), rng.randrange(S), rng.randint(2, 3), rng)
    return im


def cobblestone(rng):
    # 圆润鹅卵石 + 深色石缝。卡通：石头更亮更干净，石缝更深，对比拉满。
    im = new()
    fill(im, "#43454e")  # 深石缝（更暗 → 卵石更跳）
    for cx, cy in [(3, 3), (11, 4), (7, 9), (2, 12), (13, 11), (9, 1), (14, 15), (5, 7)]:
        pebble(im, cx, cy, rng.choice([3, 3, 4]), "#a8abb5", "#c6c9d3", "#83868f", rng, 0.3)
    return im


def dirt(rng):
    im = new()
    fill(im, "#9a6638")  # 温暖鲜棕
    speck(im, ["#8a5a30", "#aa7444"], 0.06, rng)  # 噪点压低
    for _ in range(5):  # 强明暗土块
        pebble(im, rng.randrange(S), rng.randrange(S), rng.choice([1, 2]), "#9a6638", "#b27e4c", "#774c28", rng)
    return im


GB, GH, GL = "#5fbf3a", "#74d84c", "#469328"  # 翠绿卡通草（base/亮/暗），饱和拉高


def grass_top(rng):
    im = new()
    fill(im, GB)
    speck(im, ["#57b234", "#6ccf45"], 0.06, rng)  # 干净，噪点极低
    for _ in range(5):  # 软草簇，强高光暗部
        pebble(im, rng.randrange(S), rng.randrange(S), 2, GB, GH, GL, rng)
    return im


def grass_side(rng):
    # 暖棕泥土身 + 顶部翠绿草带（顶行提亮、按列锯齿下垂），上下对比强。
    im = new()
    fill(im, "#9a6638")
    speck(im, ["#8a5a30", "#aa7444"], 0.06, rng)
    px = im.load()
    for _ in range(3):
        pebble(im, rng.randrange(S), rng.randrange(4, S), 2, "#9a6638", "#b27e4c", "#774c28", rng)
    g = [GB, "#57b234", "#6ccf45"]
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
    fill(im, "#f2dc82")  # 明黄沙
    speck(im, ["#e8d070", "#f8e89a"], 0.05, rng)  # 干净
    for _ in range(3):  # 柔和立体颗粒
        pebble(im, rng.randrange(S), rng.randrange(S), 1, "#f2dc82", "#fbec9e", "#dcc468", rng)
    return im


def oak_planks(rng):
    im = new()
    fill(im, "#bf9050")  # 暖亮木
    speck(im, ["#b3854a", "#cb9d5b"], 0.18, rng)  # 噪点压低，保留一点木纹
    px = im.load()
    groove = hx("#6e5128")  # 深槽，对比更强
    hi = hx("#d3aa66")      # 顶边高光更亮
    for gy in (3, 7, 11, 15):  # 木板间深槽
        for x in range(S):
            px[x, gy] = groove
    for top in (0, 4, 8, 12):  # 每块木板顶边提亮
        for x in range(S):
            if rng.random() < 0.5:
                px[x, top] = hi
    seams = [4, 11, 2, 9]  # 错位竖缝
    for i, top in enumerate((0, 4, 8, 12)):
        for y in range(top, top + 3):
            px[seams[i] % S, y] = groove
    return im


def oak_log_side(rng):
    im = new()
    bark = ["#9a713e", "#8a6435", "#a87f48", "#7a5830"]  # 更暖更亮的树皮
    w = [3, 3, 2, 2]
    px = im.load()
    for x in range(S):  # 竖向树皮
        cb = rng.choices(bark, w)[0]
        groove = rng.random() < 0.20
        for y in range(S):
            if groove and rng.random() < 0.6:
                px[x, y] = hx("#5e4424")  # 深沟槽，强对比
            else:
                px[x, y] = hx(rng.choices([cb, "#b88f52", "#5e4424"], [8, 1, 1])[0])
    return im


def oak_log_top(rng):
    im = new()
    px = im.load()
    a, b = hx("#bf9050"), hx("#a87f48")  # 暖亮年轮双色
    light = hx("#d6ac66")  # 心材高光
    for y in range(S):
        for x in range(S):
            d = max(abs(x - 7.5), abs(y - 7.5))
            r = int(d)
            if r >= 7:
                px[x, y] = hx("#6e5128")  # 树皮边（深，框住木心）
            else:
                base = a if (r % 2 == 0) else b
                if d < 1.6:
                    base = light  # 心材
                px[x, y] = base if rng.random() < 0.9 else b
    return im


def coal_ore(rng):
    im = stone(rng)  # 干净石底 + 分明的近黑煤块（高光/暗部清晰）
    for cx, cy, r in [(4, 4, 2), (11, 10, 2), (8, 13, 1), (13, 4, 1), (2, 11, 1), (6, 8, 1)]:
        pebble(im, cx, cy, r, "#26262c", "#3d3d46", "#141418", rng, 0.2)
    return im


def iron_ore(rng):
    im = stone(rng)  # 干净石底 + 米橙色铁矿斑点（仿 MC 铁矿）
    for cx, cy, r in [(4, 4, 2), (11, 10, 2), (8, 13, 1), (13, 4, 1), (2, 11, 1), (6, 8, 1)]:
        pebble(im, cx, cy, r, "#cf9b6c", "#e6c19a", "#a06a3c", rng, 0.2)
    return im


def water(rng):
    im = new()
    fill(im, "#2f86e0")  # 鲜艳卡通蓝（单帧静态，不做动画）
    speck(im, ["#2877cc", "#3f93ec"], 0.06, rng)  # 干净
    px = im.load()
    for _ in range(4):  # 微波纹高光
        y = rng.randrange(S)
        x0 = rng.randrange(S)
        for dx in range(rng.randint(2, 4)):
            px[(x0 + dx) % S, y] = hx("#6db4f5")
    return im


def water_frames(n):
    """N 帧卡通水动画：两道斜向正弦波纹随相位流动+变化。
    横纵频率取 2π/S 的整数倍 → 平铺无缝；帧相位 0..2π 整循环 → 首尾无缝。
    渲染层每帧整张切 material.map（所有水格同步），不做 UV 平移。"""
    import math

    base, hi, dk = hx("#2f86e0")[:3], hx("#6db4f5")[:3], hx("#2877cc")[:3]
    frames = []
    for f in range(n):
        ph = 2 * math.pi * f / n
        im = new()
        px = im.load()
        for y in range(S):
            for x in range(S):
                w = math.sin(2 * math.pi * (2 * x + y) / S + ph) + 0.7 * math.sin(
                    2 * math.pi * (x - 2 * y) / S - ph * 1.3
                )
                px[x, y] = hi if w > 1.35 else dk if w < -1.45 else base
        frames.append(im)
    return frames


def oak_leaves(rng):
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    px = im.load()
    cols = ["#4fa024", "#5bb52c", "#43881d", "#6fcb3c", "#3a751a"]  # 鲜翠叶，饱和高
    wts = [3, 3, 2, 2, 2]
    for y in range(S):
        for x in range(S):
            if rng.random() < 0.10:
                px[x, y] = (0, 0, 0, 0)  # 镂空（略减少，色块更整）
            else:
                r, g, b = hx(rng.choices(cols, wts)[0])
                px[x, y] = (r, g, b, 255)
    for _ in range(4):  # 软明暗叶簇，强高光/暗部
        cx, cy = rng.randrange(S), rng.randrange(S)
        for dy in range(-1, 2):
            for dx in range(-1, 2):
                if rng.random() < 0.6:
                    r, g, b = hx("#6fcb3c") if rng.random() < 0.5 else hx("#3a751a")
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


def crafting_table_side(rng):
    """工作台侧：木板底 + 顶沿 + 一把横放的锯(钢刃带齿 + 木柄)。仿 MC 工作台侧面工具。"""
    im = oak_planks(rng)
    px = im.load()
    d = hx("#3d2b13")       # 刻线/暗木
    steel = hx("#b9bcc6")   # 锯刃(亮钢)
    steel_d = hx("#7d818c")  # 锯刃暗边
    handle = hx("#6b4a23")  # 锯柄(木)
    handle_d = hx("#4a3418")
    # 顶沿(桌面边)
    for x in range(S):
        px[x, 1] = d
    # 锯刃：横放，刃背在上、齿在下，刃尖朝左
    for x in range(2, 12):
        px[x, 6] = steel_d   # 刃背
        px[x, 7] = steel     # 刃身
    for x in range(2, 12):   # 锯齿(隔格)
        px[x, 8] = steel if x % 2 == 0 else steel_d
    px[2, 7] = steel_d       # 刃尖收一下
    # 木柄(右端握把)
    for x in range(11, 15):
        for y in range(5, 10):
            px[x, y] = handle if (y in (6, 7, 8)) else handle_d
    px[13, 7] = handle_d     # 握孔
    # 两颗钉(角落细节)
    px[3, 12] = d
    px[12, 12] = d
    return im


def crafting_table_top(rng):
    """工作台顶：木板底 + 外框 + 田字刻线(凹槽带高光) + 角落小节疤。仿 MC 顶面工作格。"""
    im = oak_planks(rng)
    px = im.load()
    d = hx("#3d2b13")       # 刻线(暗)
    hl = hx("#caa24e")      # 刻线高光(凹槽立体感)
    # 外框
    for i in range(S):
        px[i, 0] = d
        px[i, S - 1] = d
        px[0, i] = d
        px[S - 1, i] = d
    # 田字刻线(2px) + 紧贴的一侧高光，做出"刻进去"的凹槽
    for i in range(1, S - 1):
        px[7, i] = d
        px[8, i] = d
        px[i, 7] = d
        px[i, 8] = d
    for i in range(1, S - 1):
        if px[6, i] != d:
            px[6, i] = hl
        if px[i, 6] != d:
            px[i, 6] = hl
    # 小节疤(右下格)
    px[11, 11] = d
    px[12, 12] = d
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
    ("iron_ore", iron_ore),
    ("water", water),
    ("oak_leaves", oak_leaves),
    ("crafting_table_top", crafting_table_top),
    ("crafting_table_side", crafting_table_side),
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
                   'oak_leaves', 'crafting_table_top', 'crafting_table_side', 'iron_ore']
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
        'iron_ore': ('iron_ore', 'iron_ore'),
        'oak_leaves': ('oak_leaves', 'oak_leaves'),
        'crafting_table': ('crafting_table_top', 'crafting_table_side'),
    }
    icons_dir = os.path.join(OUT, '..', 'icons')
    os.makedirs(icons_dir, exist_ok=True)
    for nm, (top, side) in ICON_FACES.items():
        iso_icon(tex[top], tex[side], tex[side]).save(os.path.join(icons_dir, nm + '.png'))
    print(f'wrote {len(ICON_FACES)} iso icons -> public/textures/icons/')

    # 挖掘裂纹条（10 段，160x16）→ public/textures/crack.png
    crack_strip().save(os.path.join(OUT, '..', 'crack.png'))
    print('wrote crack.png (10 stages)')

    # 水帧动画序列 → public/textures/blocks/water_0..N-1.png（渲染层切 material.map 播放）
    for i, wim in enumerate(water_frames(24)):
        wim.save(os.path.join(OUT, f'water_{i}.png'))
    print('wrote 24 water animation frames')

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
