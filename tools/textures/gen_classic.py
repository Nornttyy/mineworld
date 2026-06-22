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
    # 真 vanilla 石头：均匀中性灰 + 平铺细噪（不是带高光暗部的立体卵石），零星更深小点。
    im = new()
    fill(im, "#7e7e7e")  # map color #8b8b8b 偏亮，纹理本体略深更耐看
    speck(im, ["#757575", "#888888", "#6e6e6e"], 0.34, rng)  # 紧致细噪，读作岩石颗粒而非静电
    px = im.load()
    for _ in range(9):  # 零星更深的 1-2 像素小点（矿物斑感，不做立体）
        x, y = rng.randrange(S), rng.randrange(S)
        px[x, y] = hx("#636363")
        if rng.random() < 0.45:
            px[(x + 1) % S, y] = hx("#676767")
    return im


def cobblestone(rng):
    # 圆润鹅卵石 + 深色石缝。真 MC 圆石：卵石深浅不一(冷暖灰交错)，对比比石头强。wraps 故无缝。
    im = new()
    fill(im, "#535353")  # 深石缝
    tones = [
        ("#8c8c8c", "#9e9e9e", "#757575"),  # 亮卵石
        ("#7b7b7b", "#8b8b8b", "#666666"),  # 中卵石
        ("#9a9a9a", "#ababab", "#828282"),  # 更亮卵石
        ("#6f6f6f", "#7f7f7f", "#5c5c5c"),  # 暗卵石
    ]
    for cx, cy in [(3, 3), (11, 4), (7, 9), (2, 12), (13, 11), (9, 1), (14, 15), (5, 7)]:
        t = rng.choice(tones)
        pebble(im, cx, cy, rng.choice([3, 3, 4]), t[0], t[1], t[2], rng, 0.32)
    px = im.load()
    for _ in range(10):  # 卵石上零星颗粒，去塑料感
        x, y = rng.randrange(S), rng.randrange(S)
        if px[x, y] != hx("#535353"):
            px[x, y] = hx(rng.choice(["#828282", "#909090", "#6e6e6e"]))
    return im


def dirt(rng):
    # 真 vanilla 泥土：扁平棕色细噪 + 零星深色小石粒（不做立体卵石）。base 贴近 map color #a9704f 但略沉。
    im = new()
    fill(im, "#866043")
    speck(im, ["#79553a", "#946b49", "#6e4d33"], 0.34, rng)
    px = im.load()
    for _ in range(7):  # 零星 1 像素深色土砾
        x, y = rng.randrange(S), rng.randrange(S)
        px[x, y] = hx("#5d4029")
    return im


GB, GH, GL = "#83b154", "#94c065", "#6f9a45"  # 真 MC 平原草绿（map #8db360 / 草 tint #7cbd6b 一族）


def grass_top(rng):
    # 真 vanilla 草顶：饱满平原绿 + 平铺细噪（无立体草簇），零星深/亮草点。
    im = new()
    fill(im, GB)
    speck(im, ["#7aa84d", "#8dba5e", "#6f9a45"], 0.34, rng)
    px = im.load()
    for _ in range(8):
        x, y = rng.randrange(S), rng.randrange(S)
        px[x, y] = hx(rng.choice([GL, GH, "#669040"]))
    return im


def grass_side(rng):
    # 真 MC 草侧：泥土身(同新 dirt) + 顶部绿草带按列锯齿下垂(overhang)。
    im = new()
    fill(im, "#866043")
    speck(im, ["#79553a", "#946b49", "#6e4d33"], 0.32, rng)
    px = im.load()
    for _ in range(6):  # 零星深土砾
        px[rng.randrange(S), rng.randrange(4, S)] = hx("#5d4029")
    g = [GB, "#7aa84d", "#8dba5e"]
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
    fill(im, "#3a55c0")  # 真 MC 水偏靛蓝（之前偏青绿）
    speck(im, ["#3349ad", "#4763cc"], 0.14, rng)
    px = im.load()
    for _ in range(4):  # 微波纹
        y = rng.randrange(S)
        x0 = rng.randrange(S)
        for dx in range(rng.randint(2, 4)):
            px[(x0 + dx) % S, y] = hx("#5a78da")
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


def grass_plant(rng):
    # 经典风草丛：透明底 + 一簇闷色绿叶(底深顶亮、顶端收尖)。与卡通版同形状，只换经典平原草绿(不鲜艳)。
    # 供 cross billboard(草/长草)用，cutout alpha-test。必须随卡通一起进图集，否则经典 pack 下草不可见。
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    dk, mid, hi = (60, 92, 42, 255), hx(GL) + (255,), hx(GB) + (255,)
    blades = [(4, 2, 4), (6, 5, 2), (8, 8, 1), (10, 11, 3), (12, 14, 5), (7, 6, 6), (9, 10, 7)]
    for bx, tx, ty in blades:  # 叶子从底(y=15)长到(tx,ty)，逐像素上移、上亮下深
        steps = 15 - ty
        for i in range(steps + 1):
            t = i / max(1, steps)
            x = round(bx + (tx - bx) * t)
            y = 15 - i
            col = dk if t < 0.34 else (mid if t < 0.72 else hi)
            if 0 <= x < S and 0 <= y < S:
                im.putpixel((x, y), col)
            if t < 0.55 and 0 <= x + 1 < S and 0 <= y < S:  # 底部加粗一点
                im.putpixel((x + 1, y), dk if t < 0.34 else mid)
    return im


# —— 经典风新增 6 块（沙漠/雪原/云杉，对齐 gen_textures.py ATLAS_ORDER 槽 18-23）——

def sandstone(rng):
    # 经典沙石：米黄底 + 平铺细噪 + 水平沉积纹（横线每 4 行），顶底不提亮保持经典扁平。
    im = new()
    fill(im, "#c8b882")  # 经典沙石米黄（比 vanilla 地图色 #ded39f 略沉）
    speck(im, ["#bfaf78", "#d2c28c"], 0.18, rng)  # 经典感细噪
    px = im.load()
    # 水平沉积纹：每隔 4 行一条略深横线（经典沙石标志）
    for ly in (3, 7, 11):
        for x in range(S):
            px[x, ly] = hx("#b0a06c")
    # 顶底各一条更深线，强化层次感
    for x in range(S):
        px[x, 0] = hx("#d8c890")
        px[x, S - 1] = hx("#a89060")
    return im


def cactus(rng):
    # 经典仙人掌：中等饱和绿 + 左右暗边（圆柱轮廓）+ 稀疏白刺点，经典低调调色。
    im = new()
    fill(im, "#567d36")  # 经典 MC 仙人掌绿（偏橄榄，不鲜艳）
    speck(im, ["#4d7030", "#60893e"], 0.12, rng)
    px = im.load()
    # 左右两列暗边
    for y in range(S):
        px[0, y] = hx("#3a5822")
        px[1, y] = hx("#456628")
        px[S - 2, y] = hx("#456628")
        px[S - 1, y] = hx("#3a5822")
    # 中心略亮条（受顶光，低对比）
    for y in range(S):
        px[7, y] = hx("#658e3e")
        px[8, y] = hx("#618a3c")
    # 白刺点（稀疏，2px 小点）
    for _ in range(5):
        sx = rng.choice([2, 3, 12, 13])
        sy = rng.randrange(2, S - 2)
        px[sx, sy] = hx("#d0ceb0")
    return im


def ice(rng):
    # 经典冰：冷浅蓝 + 平铺细噪 + 斜向亮条（低对比折射感），颜色接近 vanilla 1.12 冰（#7eb8ff tint）。
    im = new()
    fill(im, "#8bb8d4")  # 经典冰底（比卡通版更沉、偏灰蓝）
    speck(im, ["#80aec8", "#96c2de"], 0.14, rng)
    px = im.load()
    # 低对比斜向亮条（左上→右下，模拟冰面光泽，不夸张）
    for i in range(0, S, 4):
        for j in range(max(0, i - 1), min(S, i + 2)):
            if rng.random() < 0.5:
                px[j, i] = hx("#a8cce0")
    # 顶底微差，不做 AO（经典扁平风）
    for x in range(S):
        px[x, 0] = hx("#a0c8dc")
        px[x, S - 1] = hx("#78a8c0")
    return im


def snow(rng):
    # 经典雪：近白底 + 极淡冷灰细噪，经典 MC 雪色（map #ffffff，纹理本体偏冷白）。
    im = new()
    fill(im, "#e8eef4")  # 经典冷白（略带蓝调，比卡通版更冷暗）
    speck(im, ["#dce4ec", "#f0f4f8"], 0.18, rng)
    px = im.load()
    # 少量淡蓝阴影小点（雪坑感，经典低调）
    for _ in range(6):
        x, y = rng.randrange(S), rng.randrange(1, S - 1)
        px[x, y] = hx("#ccd6e0")
    # 顶行最亮（纯白日光），底行淡阴影
    for x in range(S):
        px[x, 0] = hx("#f8fafc")
        px[x, S - 1] = hx("#c4d0dc")
    return im


def spruce_log(rng):
    # 经典云杉原木侧：深红褐冷调竖条树皮（比橡木 oak_log_side 更暗更冷），经典 MC 云杉风格。
    im = new()
    bark = ["#4a3828", "#3e3022", "#52402e", "#342a1e"]  # 深红褐冷调（比橡木更深）
    w = [3, 3, 2, 2]
    px = im.load()
    for x in range(S):  # 竖向树皮条
        cb = rng.choices(bark, w)[0]
        groove = rng.random() < 0.22
        for y in range(S):
            if groove and rng.random() < 0.6:
                px[x, y] = hx("#261a10")  # 深沟槽（比橡木更深）
            else:
                px[x, y] = hx(rng.choices([cb, "#5e4432", "#261a10"], [7, 1, 1])[0])
    return im


def spruce_leaves(rng):
    # 经典云杉叶：深蓝绿 + 镂空 cutout（比橡树叶更深更冷），alpha 纹理。
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    px = im.load()
    cols = ["#2a4a30", "#304f36", "#234028", "#38563e", "#1e3824"]  # 经典深蓝绿
    wts = [3, 3, 2, 2, 2]
    for y in range(S):
        for x in range(S):
            if rng.random() < 0.13:
                px[x, y] = (0, 0, 0, 0)  # 镂空（针叶比橡树叶略稀）
            else:
                r, g, b = hx(rng.choices(cols, wts)[0])
                px[x, y] = (r, g, b, 255)
    # 简单软明暗（低对比，经典扁平感）
    for _ in range(3):
        cx, cy = rng.randrange(S), rng.randrange(S)
        for dy in range(-1, 2):
            for dx in range(-1, 2):
                if rng.random() < 0.5:
                    r, g, b = hx("#38563e") if rng.random() < 0.5 else hx("#1e3824")
                    px[(cx + dx) % S, (cy + dy) % S] = (r, g, b, 255)
    return im


# ── 下界方块（经典闷色风）──────────────────────────────────────────────────────
def obsidian(rng):
    im = new()
    fill(im, "#140c1c")
    speck(im, ["#1f1430", "#2c1d44"], 0.06, rng)
    px = im.load()
    for _ in range(4):
        px[rng.randrange(S), rng.randrange(S)] = hx("#4a2f78")
    return im


def netherrack(rng):
    im = new()
    fill(im, "#5e2828")
    speck(im, ["#4d2020", "#6e3232", "#5a2626"], 0.2, rng)
    px = im.load()
    for _ in range(4):
        streak(px, "#401a1a", rng.randrange(S), rng.randrange(S), rng.randint(2, 4), rng)
    return im


def soul_sand(rng):
    im = new()
    fill(im, "#443226")
    speck(im, ["#382a1f", "#4e3a2c"], 0.18, rng)
    for cx, cy in [(4, 5), (11, 6), (7, 11)]:
        pebble(im, cx, cy, 2, "#443226", "#352820", "#221913", rng, 0.1)
    return im


def glowstone(rng):
    im = new()
    fill(im, "#cba85a")
    speck(im, ["#d8bd78", "#b8943e"], 0.2, rng)
    for _ in range(6):
        pebble(im, rng.randrange(S), rng.randrange(S), 2, "#cba85a", "#e6cf8e", "#a87f34", rng)
    return im


def nether_quartz_ore(rng):
    im = netherrack(rng)
    for _ in range(7):
        pebble(im, rng.randrange(S), rng.randrange(S), 1, "#d8d2cc", "#efe9e2", "#b8afa6", rng, 0.1)
    return im


def lava(rng):
    im = new()
    fill(im, "#c84e10")
    speck(im, ["#b2440c", "#d8641c"], 0.18, rng)
    px = im.load()
    for _ in range(5):
        streak(px, "#e8b833", rng.randrange(S), rng.randrange(S), rng.randint(3, 5), rng)
    for _ in range(3):
        streak(px, "#963205", rng.randrange(S), rng.randrange(S), rng.randint(2, 3), rng)
    return im


def bedrock(rng):
    im = new()
    fill(im, "#2b2b2c")
    speck(im, ["#202021", "#383839"], 0.3, rng)
    for _ in range(6):
        pebble(im, rng.randrange(S), rng.randrange(S), 2, "#2b2b2c", "#424244", "#161617", rng)
    return im


def nether_portal(rng):
    im = new()
    fill(im, "#4e2682")
    px = im.load()
    for x in range(S):
        for y in range(S):
            w = (x * 3 + y * 2 + rng.randrange(4)) % 7
            if w < 2:
                px[x, y] = hx("#7a4cb0")
            elif w > 5:
                px[x, y] = hx("#37185e")
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
    ("grass_plant", grass_plant),
    ("sandstone", sandstone),
    ("cactus", cactus),
    ("ice", ice),
    ("snow", snow),
    ("spruce_log", spruce_log),
    ("spruce_leaves", spruce_leaves),
    ("obsidian", obsidian),
    ("netherrack", netherrack),
    ("soul_sand", soul_sand),
    ("glowstone", glowstone),
    ("nether_quartz_ore", nether_quartz_ore),
    ("lava", lava),
    ("bedrock", bedrock),
    ("nether_portal", nether_portal),
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
    # 顺序/行数必须与 gen_textures.py 及 src/core/blocks/registry.ts 一致。
    # 4×8=32 槽: 0-17 基础, 18-25 下界(占位透明), 26-31 沙漠/雪原
    ATLAS_ORDER = ['stone', 'dirt', 'grass_top', 'grass_side', 'cobblestone',
                   'sand', 'oak_log_top', 'oak_log_side', 'oak_planks', 'coal_ore', 'water',
                   'oak_leaves', 'crafting_table_top', 'crafting_table_side', 'iron_ore', 'furnace_front',
                   'gravel', 'grass_plant',
                   'obsidian', 'netherrack', 'soul_sand', 'glowstone', 'nether_quartz_ore', 'lava', 'bedrock', 'nether_portal',
                   'sandstone', 'cactus', 'ice', 'snow', 'spruce_log', 'spruce_leaves']
    COLS, ROWS = 4, 8
    atlas = Image.new('RGBA', (S * COLS, S * ROWS), (0, 0, 0, 0))
    for i, nm in enumerate(ATLAS_ORDER):
        if nm in tex:
            atlas.paste(tex[nm].convert('RGBA'), ((i % COLS) * S, (i // COLS) * S))
        # 下界占位名（无 draw fn）→ 保持透明，下界会话补贴图
    out = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'textures', 'atlas_classic.png')
    atlas.save(out)
    print('wrote', out, atlas.size)


if __name__ == '__main__':
    main()
