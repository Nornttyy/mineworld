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


# ---- per-block generators：MC 1.12 原版风 ----------------------------------

# ── 手绘像素纹样(2026-07-17 用户"我要改材质,不是只换颜色")──────────────────
# 每块 16×16 逐像素手绘(按 1.12 原版纹样结构临摹)：块面图案是【设计出来的】连贯图形,
# 不是随机噪声。rng 只做 ±3 通道微抖动(有机感),图案本身固定。
def from_map(rows, pal, rng, alpha_blank=False):
    assert len(rows) == 16, len(rows)
    for r in rows:
        assert len(r) == 16, (len(r), r)
    im = Image.new("RGBA" if alpha_blank else "RGB", (S, S), (0, 0, 0, 0))
    px = im.load()
    for y, row in enumerate(rows):
        for x, ch in enumerate(row):
            if alpha_blank and ch == " ":
                continue
            c = hx(pal[ch])
            j = rng.randint(-3, 3)
            v = (max(0, min(255, c[0] + j)), max(0, min(255, c[1] + j)), max(0, min(255, c[2] + j)))
            px[x, y] = (v[0], v[1], v[2], 255) if alpha_blank else v
    return im


# 2026-07-17 用户拍板"按照(我的世界)游戏贴图画"：从鲜艳卡通转向 1.12 原版观感——
# 土色系中饱和度、逐像素 3-5 色噪声(原版贴图噪感明显)、标志性图案(石头团块/木板缝/
# 年轮/草侧锯齿边)。全程程序生成(不搬 Mojang 素材,按风格临摹)。% S 包裹保证无缝平铺。

def stone(rng):
    # 1.12 石头：斜向流动的深浅斑块 + 1px 暗缝(手绘纹样)。
    rows = [
        "LLl..dd..llLL..d",
        "Ll..dDDd..lLL.dd",
        "l..dDDd....L..dD",
        "..dDd..ll....dDd",
        ".dDd..lLLl..dDd.",
        ".dd..lLLl..dDd..",
        "....lLl...dDd..l",
        ".ll..l..dDDd..lL",
        "lLLl...dDd...lL.",
        "lLl..dDd...ll...",
        ".l..dDd..llLLl..",
        "...dDd..lLLl..d.",
        "..dDd..lLl..dDDd",
        ".dDd........dDd.",
        "dDd..lll..dDd...",
        "Dd..lLLl..dd...L",
    ]
    return from_map(rows, {".": "#7d7d7d", "l": "#8a8a8a", "L": "#949494", "d": "#6f6f6f", "D": "#5f5f5f"}, rng)

def cobblestone(rng):
    # 1.12 圆石：大块圆润卵石马赛克 + 深色石缝,石块顶缘高光/底缘阴影(手绘)。
    rows = [
        ".hbb..hcb..hbb..",
        "abbbd.bcbd.abbd.",
        "abbd..bbd..abbd.",
        ".ad.hbbd.hcb.ad.",
        "hcb.abbbd.bcbd.h",
        "bcbd.abd..bbd..b",
        "abbd..d.hbbd..ab",
        ".ad..hcb.abbd.ab",
        "..hbb.bcbd.ad..a",
        ".abbbd.abd...hbb",
        ".abbd...d..hcbbd",
        "h.ad..hbb..bcbd.",
        "cbd..abbbd.abd..",
        "bbd..abbd...d.hb",
        "ad.hcb.ad..hbb.b",
        "..bcbd...hbbbd.a",
    ]
    return from_map(rows, {".": "#5b5b5b", "a": "#7a7a7a", "b": "#858585", "c": "#909090", "h": "#9c9c9c", "d": "#6a6a6a"}, rng)

def dirt(rng):
    # 1.12 泥土：棕底 + 深色土坷垃团 + 零星亮砂/近黑碎石(手绘)。
    rows = [
        "..l.dd.l..ld...l",
        ".lLl.d..dDd..l..",
        "..l..l.dDd..lLl.",
        "d...ld..d.l..l.d",
        "Dd.lLl....dd...D",
        "d...l..dd.dDd.d.",
        "..ld...dDd.d...l",
        ".lLl.l..d...lLl.",
        "..l.dDd...l..l..",
        "l...dkd.lLl....d",
        "Ll.l.d..l....dDd",
        "l..........dd.d.",
        "..dd..lLl.dDd..l",
        ".dDd...l...d..lL",
        "..d.l....dd....l",
        "l..lLl..dDd.l...",
    ]
    return from_map(rows, {".": "#866748", "l": "#96775a", "L": "#a58868", "d": "#75573b", "D": "#634830", "k": "#54402a"}, rng)

GB, GH, GL = "#74a83f", "#84bc4c", "#5f8c33"  # 1.12 平原草绿(base/亮/暗)


def grass_top(rng):
    # 1.12 草顶：短横划(2px 草叶)密织,四色交错(手绘)。
    rows = [
        ".ll.dd.l.LL.d.ll",
        "l.DD.ll.d..ll.D.",
        ".ll..L.dd.Ll..dd",
        "D..lL..l.D..lL..",
        ".dd.l.DD.ll.d.Ll",
        "l.Ll.d..l..DD.l.",
        ".d..ll.Ld.l..ll.",
        "lL.dd.l..ll.dD.d",
        "..l.DD.lL..l..l.",
        "dd.l..d..DD.lL..",
        ".Ll..ll.d..l..dd",
        "l..dD..Ll.dd.l.L",
        ".ll.l.d..l.DD.l.",
        "d..LL.dd.lL...d.",
        ".dd..l.D..l.ll.L",
        "l.l.dd.ll.dd.l..",
    ]
    return from_map(rows, {".": "#74a83f", "l": "#7fb54a", "L": "#8ac153", "d": "#699a37", "D": "#5e8c30"}, rng)

def grass_side(rng):
    # 1.12 草侧：手绘泥土身 + 顶部草皮带(固定锯齿深度 + 深绿唇边)。
    im = dirt(rng)
    px = im.load()
    depths = [3, 2, 3, 4, 2, 3, 3, 2, 4, 3, 2, 3, 2, 3, 4, 3]
    greens = ["#74a83f", "#7fb54a", "#8ac153"]
    for x in range(S):
        dep = depths[x]
        for y in range(dep):
            if y == dep - 1:
                px[x, y] = hx("#5e8c30")  # 唇边深绿
            else:
                px[x, y] = hx(greens[(x + y) % 3])
    return im

def sand(rng):
    # 1.12 沙子：淡卡其 + 稀疏波状起伏点(手绘,大片留白=原版的"平")。
    rows = [
        "...ll....d..ll..",
        ".ll..dd......dd.",
        "......dDd..l....",
        ".d..l....lLl...d",
        "..dd......l..dd.",
        "....lLl......d..",
        ".l..l..dd...l..l",
        "......dDd..lLl..",
        ".dd......l..l...",
        "...lLl........d.",
        "l...l...dd..lL..",
        "..d....dDd...l..",
        "....ll..d......d",
        ".dd..L......ll..",
        "...l....dd..L...",
        ".l...dd..d....l.",
    ]
    return from_map(rows, {".": "#d7cda0", "l": "#e0d7ad", "L": "#e8e0bc", "d": "#cbc192", "D": "#bdb384"}, rng)

def oak_planks(rng):
    # 1.12 橡木板：4 条板(顶缘亮线/底缘深缝/板内木纹划/错位竖接缝)全手绘。
    rows = [
        "hh.shhhhhh.hhhh.",
        "..gs...g......g.",
        ".g.s..g....gg...",
        "ssssssssssssssss",
        "hhhh.hhhhhh.shhh",
        "..g......g..s.g.",
        ".g...gg.....s..g",
        "ssssssssssssssss",
        "hh.hhhh.shhhhhh.",
        ".g....g.s...g...",
        "...gg...s.g....g",
        "ssssssssssssssss",
        "hhhhh.hhhhhh.shh",
        "..g.....g....s.g",
        ".g...gg......s..",
        "ssssssssssssssss",
    ]
    return from_map(rows, {".": "#a2814e", "h": "#b08d58", "g": "#93743f", "s": "#6b5330"}, rng)

def oak_log_side(rng):
    im = new()
    bark = ["#6b5334", "#61492c", "#75593a", "#573f24"]  # 1.12 橡木树皮棕
    w = [3, 3, 2, 2]
    px = im.load()
    for x in range(S):
        cb = rng.choices(bark, w)[0]
        groove = rng.random() < 0.22
        for y in range(S):
            if groove and rng.random() < 0.6:
                px[x, y] = hx("#3f3018")  # 深沟
            else:
                px[x, y] = hx(rng.choices([cb, "#7d6340", "#3f3018"], [8, 1, 1])[0])
    return im


def oak_log_top(rng):
    im = new()
    px = im.load()
    a, b = hx("#a2814e"), hx("#8a6d42")  # 年轮双色
    light = hx("#b89158")  # 心材
    for y in range(S):
        for x in range(S):
            d = max(abs(x - 7.5), abs(y - 7.5))
            r = int(d)
            if r >= 7:
                px[x, y] = hx(rng.choice(["#6b5334", "#61492c"]))  # 树皮框
            else:
                base = a if (r % 2 == 0) else b
                if d < 1.6:
                    base = light
                px[x, y] = base if rng.random() < 0.88 else b
    return im


def coal_ore(rng):
    im = stone(rng)  # 石底 + 近黑煤斑(原版布点)
    for cx, cy, r in [(4, 4, 2), (11, 10, 2), (8, 13, 1), (13, 4, 1), (2, 11, 1), (6, 8, 1)]:
        pebble(im, cx, cy, r, "#2f2f2f", "#4a4a4a", "#191919", rng, 0.2)
    return im


def iron_ore(rng):
    im = stone(rng)  # 石底 + 米橙铁斑
    for cx, cy, r in [(4, 4, 2), (11, 10, 2), (8, 13, 1), (13, 4, 1), (2, 11, 1), (6, 8, 1)]:
        pebble(im, cx, cy, r, "#d8af94", "#e8c8ae", "#b08464", rng, 0.2)
    return im


def diamond_ore(rng):
    """原创 16px 钻石矿：石底上嵌蓝绿色晶簇，保留经典像素块感。"""
    im = stone(rng)
    for cx, cy, r in [(4, 4, 2), (11, 4, 1), (8, 9, 2), (3, 12, 1), (13, 12, 2), (7, 14, 1)]:
        pebble(im, cx, cy, r, "#2dabb5", "#73e6e8", "#167681", rng, 0.18)
    return im


def furnace_front(rng):
    """熔炉正面：原版灰石壳 + 深炉口 + 底部余烬。"""
    im = new()
    fill(im, "#828282")
    speck(im, ["#757575", "#8f8f8f", "#6f6f6f"], 0.35, rng)
    px = im.load()
    for i in range(S):  # 外框略深(原版熔炉边)
        px[i, 0] = hx("#6a6a6a")
        px[i, S - 1] = hx("#5c5c5c")
        px[0, i] = hx("#6a6a6a")
        px[S - 1, i] = hx("#6a6a6a")
    dk, md, em = hx("#171717"), hx("#2c2c2c"), hx("#3c3c3c")
    for x in range(4, 12):  # 炉膛
        for y in range(5, 13):
            px[x, y] = dk if (5 < x < 11 and 5 < y < 12) else md
    for x in range(3, 13):
        px[x, 4] = em
    for x in range(5, 11):  # 余烬
        px[x, 11] = hx("#b34d1c") if x % 2 == 0 else hx("#7a2c0e")
    px[6, 12] = hx("#d0721e")
    px[9, 12] = hx("#d0721e")
    return im


def _water_still():
    """1.12 静水：原版水色 #3F76E4 + 低对比细鳞纹(位置固定)。"""
    rng = random.Random(7_654_321)
    im = new()
    fill(im, "#3f76e4")  # 1.12 水色(原版 water tint)
    speck(im, ["#3d72de", "#427ae8"], 0.03, rng)
    px = im.load()
    for _ in range(6):
        y = rng.randrange(S)
        x0 = rng.randrange(S)
        col = "#4b84ea" if rng.random() < 0.55 else "#355fd0"
        for dx in range(rng.randint(2, 4)):
            px[(x0 + dx) % S, y] = hx(col)
    return im


def water(rng):
    return _water_still()  # 图集水块：与动画帧同一张静水(rng 忽略，保证完全一致)


def water_frames(n):
    """1.12 风水动画：纹样固定位置淡入淡出(不平移),24 帧无缝循环。"""
    import math

    base = hx("#3f76e4")  # 1.12 水色
    rng = random.Random(424242)
    marks = []
    for _ in range(14):
        y = rng.randrange(S)
        x0 = rng.randrange(S)
        ln = rng.randint(2, 4)
        col = hx("#4f88ec") if rng.random() < 0.55 else hx("#3260cc")
        mid = tuple((base[k] + col[k]) // 2 for k in range(3))
        marks.append((y, x0, ln, col, mid, rng.uniform(0, 2 * math.pi)))
    frames = []
    for f in range(n):
        ph = 2 * math.pi * f / n
        im = new()
        fill(im, "#3f76e4")
        px = im.load()
        for (y, x0, ln, col, mid, phase) in marks:
            s = math.sin(ph + phase)
            c = col if s > 0.55 else mid if s > 0.1 else None
            if c is not None:
                for dx in range(ln):
                    px[(x0 + dx) % S, y] = c
        frames.append(im)
    return frames


def oak_leaves(rng):
    # 1.12 橡叶：暗绿叶撮 + 【大块连片透明孔】(2~3px 豁口,~35%,双面渲染透出内层=蓬松)。
    rows = [
        "Ll.d  .Ll.  dl..",
        ".l.   dl.   .l.d",
        "d.Ll  ..    Ll..",
        " .l.d Ll.  dl.  ",
        "  ..  .l.d  ..  ",
        "Ll  d  ..  Ll  d",
        ".l.dD    .dl.d  ",
        "..    Ll  ...   ",
        " Ll.  .l.d   Ll.",
        "dl..   ..  D.l..",
        "..  Ll    Ll ..d",
        "  d .l.dD.l.d   ",
        "Ll.   ..  ..  Ll",
        ".l.d    Ll.   dl",
        "..  .Ll dl.d  ..",
        "d   dl..  ..  d ",
    ]
    return from_map(rows, {".": "#37701a", "l": "#448a20", "L": "#55a82c", "d": "#2b5a13", "D": "#1e430c"}, rng, alpha_blank=True)

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
    """工作台侧：木板底 + 顶沿 + 横放锯子(1.12 工具面意象)。"""
    im = oak_planks(rng)
    px = im.load()
    d = hx("#4a3a1e")
    steel = hx("#b0b0b8")
    steel_d = hx("#76767e")
    handle = hx("#5c4629")
    handle_d = hx("#3f3018")
    for x in range(S):
        px[x, 1] = d
    for x in range(2, 12):
        px[x, 6] = steel_d
        px[x, 7] = steel
    for x in range(2, 12):
        px[x, 8] = steel if x % 2 == 0 else steel_d
    px[2, 7] = steel_d
    for x in range(11, 15):
        for y in range(5, 10):
            px[x, y] = handle if (y in (6, 7, 8)) else handle_d
    px[13, 7] = handle_d
    px[3, 12] = d
    px[12, 12] = d
    return im


def crafting_table_top(rng):
    """工作台顶：木板底 + 外框 + 田字刻线(1.12 顶面工作格)。"""
    im = oak_planks(rng)
    px = im.load()
    d = hx("#5a4526")
    hl = hx("#b08d58")
    for i in range(S):
        px[i, 0] = d
        px[i, S - 1] = d
        px[0, i] = d
        px[S - 1, i] = d
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
    px[11, 11] = d
    px[12, 12] = d
    return im


def gravel(rng):
    # 1.12 砾石：小卵石密铺马赛克(带微粉调),全手绘。
    rows = [
        ".ab.cd.e..ab.cd.",
        "abbc.d.eea.bbc.d",
        ".ac..e.d.e..ac..",
        "c.d.abb..cd.e.ab",
        ".e..abc.d..e..ab",
        "d.eea.d.abb.cd..",
        ".d.e..c.abc..d.e",
        "ab..cd.e..d.ee..",
        "bbc.d..eea..abc.",
        "ac..e.d.e.c.abc.",
        ".d.abb..d.e..ac.",
        "e..abc.cd.abb..d",
        ".eea.d..e.abc.d.",
        "d.e..cd.ee..c..e",
        ".d.ab..d.abb.cd.",
        "c..bbc.e.aac..d.",
    ]
    return from_map(rows, {".": "#807c78", "a": "#8d8984", "b": "#98938c", "c": "#736f6b", "d": "#615d5a", "e": "#8a8078"}, rng)

def grass_plant(rng):
    # 草丛(cross billboard)：1.12 草绿细叶。
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    dk, mid, hi = (73, 109, 40, 255), (97, 142, 54, 255), (118, 168, 66, 255)
    blades = [(4, 2, 4), (6, 5, 2), (8, 8, 1), (10, 11, 3), (12, 14, 5), (7, 6, 6), (9, 10, 7)]
    for bx, tx, ty in blades:
        steps = 15 - ty
        for i in range(steps + 1):
            t = i / max(1, steps)
            x = round(bx + (tx - bx) * t)
            y = 15 - i
            col = dk if t < 0.34 else (mid if t < 0.72 else hi)
            if 0 <= x < S and 0 <= y < S:
                im.putpixel((x, y), col)
            if t < 0.55 and 0 <= x + 1 < S and 0 <= y < S:
                im.putpixel((x + 1, y), dk if t < 0.34 else mid)
    return im


def sandstone(rng):
    # 1.12 砂岩：平顶带 + 长层理缝 + 蚀坑点(手绘)。
    rows = [
        "tttttttttttttttt",
        "t.t..t...t..t.t.",
        "................",
        "..d.......d.....",
        "dddDdddddDdddddd",
        "................",
        ".....k....k.....",
        "................",
        "dddddDddddddDddd",
        "................",
        "..d.......d.....",
        "................",
        "dddDddddddDddddd",
        "................",
        "....k.......k...",
        "DDDDDDDDDDDDDDDD",
    ]
    return from_map(rows, {".": "#d5c98f", "t": "#dcd2a0", "d": "#c4b87e", "D": "#b3a76d", "k": "#a89a5e"}, rng)

def cactus(rng):
    # 1.12 仙人掌侧：绿柱 + 暗边棱 + 亮中带 + 淡刺点。
    im = new()
    fill(im, "#587c27")
    px = im.load()
    for y in range(S):
        px[0, y] = hx("#3a5c1a")
        px[1, y] = hx("#476b20")
        px[S - 2, y] = hx("#476b20")
        px[S - 1, y] = hx("#3a5c1a")
    for y in range(S):
        px[7, y] = hx("#6d9433")
        px[8, y] = hx("#658b2e")
    speck(im, ["#4c6f22", "#618530"], 0.2, rng)
    for _ in range(6):
        sx = rng.choice([2, 3, 12, 13])
        sy = rng.randrange(1, S - 1)
        px[sx, sy] = hx("#d8e8b0")
    return im


def ice(rng):
    # 1.12 冰：蓝紫调 + 白色裂纹高光。
    im = new()
    fill(im, "#91b7fd")
    speck(im, ["#87adf5", "#9dc1ff"], 0.2, rng)
    px = im.load()
    for i in range(S):  # 斜向高光裂纹
        for j in range(max(0, i - 2), min(S, i + 1)):
            if rng.random() < 0.5:
                px[j, i] = hx("#d4e4ff") if rng.random() < 0.5 else hx("#b8d2ff")
    for i in range(S):
        x = S - 1 - i
        y = i
        if 0 <= x < S and 0 <= y < S and rng.random() < 0.7:
            px[x, y] = hx("#7ba2ef")
    return im


def snow(rng):
    # 1.12 雪：近白 + 稀疏冰晶点(手绘)。
    rows = [
        "...l....d.......",
        ".d.....l....l...",
        "......d......d..",
        "..l........l....",
        "........d......d",
        ".d...l......d...",
        "...........l....",
        "....d..d........",
        ".l..........d..l",
        "......l.........",
        ".d........d.....",
        "........l......d",
        "..d.l...........",
        "...........d....",
        ".l.....d......l.",
        "......l....d....",
    ]
    return from_map(rows, {".": "#f6fbfb", "l": "#ffffff", "d": "#e7eff2", "D": "#dae4ea"}, rng)

def spruce_log(rng):
    # 1.12 云杉原木侧：深冷褐竖条树皮。
    im = new()
    bark = ["#3a2513", "#31200f", "#452c17", "#2a1a0d"]
    w = [3, 3, 2, 2]
    px = im.load()
    for x in range(S):
        cb = rng.choices(bark, w)[0]
        groove = rng.random() < 0.25
        for y in range(S):
            if groove and rng.random() < 0.6:
                px[x, y] = hx("#1c1108")
            else:
                px[x, y] = hx(rng.choices([cb, "#553a1e", "#1c1108"], [8, 1, 1])[0])
    return im


def spruce_leaves(rng):
    # 1.12 云杉叶：深蓝绿冷调,大孔略少(~25%,针叶更密)。
    rows = [
        "Ll.d ..Ll.  dl..",
        ".l..  dl..  .l.d",
        "d.Ll  ...  Ll...",
        "..l.d Ll.  dl. .",
        ".d..  .l.d  ...d",
        "Ll .d  ..  Ll  d",
        ".l.dD .. .dl.d..",
        "...  Ll.  ....  ",
        ".Ll. .l.d  .Ll..",
        "dl..  ...  D.l..",
        "..  Ll. . Ll ..d",
        ". d .l.dD.l.d  .",
        "Ll..  ..  ..  Ll",
        ".l.d  . Ll..  dl",
        "...  Ll dl.d  ..",
        "d.  dl...  ..  d",
    ]
    return from_map(rows, {".": "#2c4f31", "l": "#35603b", "L": "#427548", "d": "#213f26", "D": "#16301b"}, rng, alpha_blank=True)

# ── 下界方块(1.12 原版风) ────────────────────────────────────────────────────
def obsidian(rng):
    im = new()
    fill(im, "#15121f")
    speck(im, ["#201b30", "#2b2540"], 0.25, rng)
    px = im.load()
    for _ in range(4):  # 紫灰亮斑(原版黑曜石的紫棱)
        pebble(im, rng.randrange(S), rng.randrange(S), 2, "#221d36", "#3a3156", "#0e0b16", rng, 0.3)
    for _ in range(4):
        px[rng.randrange(S), rng.randrange(S)] = hx("#574a80")
    return im


def netherrack(rng):
    # 1.12 地狱岩：红褐斑驳(手绘竖向蜿蜒纹)。
    rows = [
        ".dl.Ld.l.dD.l.d.",
        "d.D.l.dL.l.d.Ld.",
        ".l.dD.l..dD.l..d",
        "L.d.l.Dd.l.Ld.l.",
        ".dD.Ld..D.l..dD.",
        "l.d..l.dL.dD.l.d",
        ".Ld.dD.l..l.d.L.",
        "d..l.d.Dd.Ld..dl",
        ".dD.Ld.l.d..l.D.",
        "l..d.l.dD.dL.d..",
        ".Ld.D..l.d.l.dDl",
        "d.l.dLd..Dd..l..",
        ".d..l.dD.l.dL.dD",
        "D.lL.d..dl..d.l.",
        ".d.l.dD.L.dD..d.",
        "l.D.d.l..d.l.dLl",
    ]
    return from_map(rows, {".": "#6f3634", "l": "#7f403d", "L": "#8f4a47", "d": "#5e2b29", "D": "#4c211f"}, rng)

def soul_sand(rng):
    im = new()
    fill(im, "#55402f")
    speck(im, ["#483527", "#624c39", "#4f3a2a"], 0.35, rng)
    for cx, cy in [(4, 5), (11, 6), (7, 11)]:  # 凹陷"脸"
        pebble(im, cx, cy, 2, "#55402f", "#443122", "#39291d", rng, 0.1)
    return im


def glowstone(rng):
    # 1.12 萤石：棕底 + 亮金晶簇团(手绘晶粒,亮芯 W 可触发泛光)。
    rows = [
        "..dCC..d..cC....",
        ".cCWC.d..cCCc..d",
        ".cCCc.....cCc..d",
        "..cc..dcC..c....",
        "d....cCWCc....d.",
        "...d.cCCc..dCCc.",
        ".cC...cc..dCWCc.",
        "cCWc.d....cCCc..",
        ".cCc...dc..cc..d",
        "..c..dcCCc.....d",
        "d...cCWCc..cC...",
        "..d.cCCc..cCWc..",
        "CC...cc..d.cCc.d",
        "WCc.d....d..c...",
        "CCc...dCC......c",
        "cc..d.cCWc..d.cC",
    ]
    return from_map(rows, {".": "#8a6238", "d": "#75512c", "c": "#e0a95c", "C": "#f6d391", "W": "#fff0c0"}, rng)

def nether_quartz_ore(rng):
    im = netherrack(rng)
    for _ in range(7):
        pebble(im, rng.randrange(S), rng.randrange(S), 1, "#ded7d0", "#f4f0ea", "#b8ada4", rng, 0.1)
    return im


def lava(rng):
    im = new()
    fill(im, "#cf5a0e")
    speck(im, ["#b34b0a", "#e06c15"], 0.3, rng)
    px = im.load()
    for _ in range(5):
        streak(px, "#f2a231", rng.randrange(S), rng.randrange(S), rng.randint(3, 5), rng)
    for _ in range(3):
        streak(px, "#ffd97a", rng.randrange(S), rng.randrange(S), rng.randint(2, 3), rng)
    for _ in range(3):
        streak(px, "#8f3c08", rng.randrange(S), rng.randrange(S), rng.randint(2, 3), rng)
    return im


def bedrock(rng):
    # 1.12 基岩：高对比大块斑(近黑↔亮灰)手绘。
    rows = [
        "DDd.lLL.dDD..lLl",
        "Dd..lLl.dDDd.lL.",
        "d..dd..l.dD..ll.",
        "..dDDd....d...l.",
        "lLl.dDd.lLl..dDd",
        "LLl..dd.lL..dDDd",
        "Ll....l...dDDd..",
        "l..dDd..ll.dd..L",
        "..dDDd.lLLl...lL",
        ".dDd...lLl..dd.l",
        "dDd..ll....dDDd.",
        "Dd..lLLl..dDd..d",
        "d..lLl..dDd...dD",
        "..ll...dDd..lLl.",
        ".l..dDd....lLLl.",
        "l..dDDd..l..lL..",
    ]
    return from_map(rows, {".": "#565656", "l": "#7a7a7a", "L": "#8f8f8f", "d": "#3a3a3a", "D": "#232323"}, rng)

def nether_portal(rng):
    im = new()
    fill(im, "#6a1cb0")
    px = im.load()
    for x in range(S):
        for y in range(S):
            w = (x * 3 + y * 2 + rng.randrange(4)) % 7
            if w < 2:
                px[x, y] = hx("#b465e8")
            elif w > 5:
                px[x, y] = hx("#3d1266")
    return im


def coal_block(rng):
    # 1.12 煤炭块：近黑 + 微弱面块切面。
    im = new()
    fill(im, "#131313")
    speck(im, ["#0d0d0d", "#1c1c1c"], 0.25, rng)
    for _ in range(4):
        pebble(im, rng.randrange(S), rng.randrange(S), 2, "#171717", "#242424", "#0a0a0a", rng, 0.2)
    return im


def iron_block(rng):
    # 1.12 铁块：亮银灰平滑 + 底缘压暗。
    im = new()
    fill(im, "#e6e6e6")
    speck(im, ["#dedede", "#eeeeee"], 0.15, rng)
    px = im.load()
    for i in range(S):
        px[i, 0] = hx("#f4f4f4")
        px[i, S - 1] = hx("#b0b0b0")
        px[i, S - 2] = hx("#cccccc")
    return im


def quartz_block(rng):
    # 1.12 石英块：米白 + 淡竖纹。
    im = new()
    fill(im, "#ece9e2")
    speck(im, ["#e4e0d7", "#f2f0ea"], 0.15, rng)
    px = im.load()
    for x in range(S):
        px[x, 0] = hx("#f2f0ea")
        px[x, S - 1] = hx("#d8d4c8")
    for x in range(2, S, 5):
        for y in range(1, S - 1):
            if rng.random() < 0.7:
                px[x, y] = hx("#e2ded4")
    return im


def diamond_block(rng):
    """原创钻石块：青蓝金属面与斜向晶面，不复制原版纹样。"""
    im = new()
    fill(im, "#29aeb8")
    px = im.load()
    hi, mid, lo, deep = hx("#74e8e3"), hx("#43c9c9"), hx("#168590"), hx("#0e6572")
    for y in range(S):
        for x in range(S):
            if (x + y) % 9 == 0:
                px[x, y] = hi
            elif (x - y) % 11 == 0:
                px[x, y] = lo
            elif (x * 3 + y * 5) % 17 == 0:
                px[x, y] = mid
    for i in range(S):
        px[i, 0] = hi
        px[0, i] = hi
        px[i, S - 1] = deep
        px[S - 1, i] = deep
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
    ("diamond_ore", diamond_ore),
    ("furnace_front", furnace_front),
    ("water", water),
    ("oak_leaves", oak_leaves),
    ("crafting_table_top", crafting_table_top),
    ("crafting_table_side", crafting_table_side),
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
    ("coal_block", coal_block),
    ("iron_block", iron_block),
    ("quartz_block", quartz_block),
    ("diamond_block", diamond_block),
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

    # Pack block tiles into one atlas (4 cols × 7 rows = 28 slots, 16px each) for single-material rendering.
    # 顺序必须与 src/core/blocks/registry.ts 的 tile 索引一致。
    # 4×10=40 槽: 0-17 基础, 18-25 下界, 26-31 沙漠/雪原, 32-36 合成储存/钻石方块
    # 改行数时务必同步 mesher.ts / DropRenderer.ts / FirstPersonHand.ts 的 ATLAS_ROWS，否则全方块 UV 错位。
    ATLAS_ORDER = ['stone', 'dirt', 'grass_top', 'grass_side', 'cobblestone',
                   'sand', 'oak_log_top', 'oak_log_side', 'oak_planks', 'coal_ore', 'water',
                   'oak_leaves', 'crafting_table_top', 'crafting_table_side', 'iron_ore', 'furnace_front',
                   'gravel', 'grass_plant',
                   'obsidian', 'netherrack', 'soul_sand', 'glowstone', 'nether_quartz_ore', 'lava', 'bedrock', 'nether_portal',
                   'sandstone', 'cactus', 'ice', 'snow', 'spruce_log', 'spruce_leaves',
                   'coal_block', 'iron_block', 'quartz_block', 'diamond_ore', 'diamond_block']
    ATLAS_COLS, ATLAS_ROWS = 4, 10  # 4×10=40 槽；同步 mesher/DropRenderer/FirstPersonHand 的 ATLAS_ROWS=10
    atlas = Image.new('RGBA', (S * ATLAS_COLS, S * ATLAS_ROWS), (0, 0, 0, 0))
    for i, nm in enumerate(ATLAS_ORDER):
        if nm in tex:
            atlas.paste(tex[nm].convert('RGBA'), ((i % ATLAS_COLS) * S, (i // ATLAS_COLS) * S))
        # 下界占位名（无 draw fn）→ 保持透明，下界会话补贴图
    atlas.save(os.path.join(OUT, '..', 'atlas.png'))
    print(f'wrote atlas.png ({S * ATLAS_COLS}x{S * ATLAS_ROWS}, {len(ATLAS_ORDER)} tiles)')

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
        'diamond_ore': ('diamond_ore', 'diamond_ore'),
        'furnace': ('cobblestone', 'furnace_front'),
        'oak_leaves': ('oak_leaves', 'oak_leaves'),
        'crafting_table': ('crafting_table_top', 'crafting_table_side'),
        'gravel': ('gravel', 'gravel'),
        'sandstone': ('sandstone', 'sandstone'),
        'coal_block': ('coal_block', 'coal_block'),
        'iron_block': ('iron_block', 'iron_block'),
        'quartz_block': ('quartz_block', 'quartz_block'),
        'diamond_block': ('diamond_block', 'diamond_block'),
        # 生物群系/下界方块的等距图标(之前漏了→快捷栏/背包没图标)
        'obsidian': ('obsidian', 'obsidian'),
        'netherrack': ('netherrack', 'netherrack'),
        'soul_sand': ('soul_sand', 'soul_sand'),
        'glowstone': ('glowstone', 'glowstone'),
        'nether_quartz_ore': ('nether_quartz_ore', 'nether_quartz_ore'),
        'cactus': ('cactus', 'cactus'),
        'ice': ('ice', 'ice'),
        'spruce_log': ('oak_log_top', 'spruce_log'),
        'spruce_leaves': ('spruce_leaves', 'spruce_leaves'),
        'bedrock': ('bedrock', 'bedrock'),
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
