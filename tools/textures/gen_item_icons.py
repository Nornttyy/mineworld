#!/usr/bin/env python3
"""物品图标：木棍/煤 + 木质&石质工具(镐/斧/锹/剑/锄)。
16×16 RGBA 透明背景、像素硬边、确定性。参照 MC 经典工具图标:柄从左下斜向右上、
作用端(头/刃)在右上，做大做清晰;木质头=暖木色，石质头=灰石色;统一 1px 深描边。
独立于 gen_textures.py / gen_ui.py。
"""
import os
from PIL import Image

ICON = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "icons")
S = 16

# ---- 调色板（暖木 / 灰石 / 深木柄，比初版更沉稳不发艳）----
HANDLE = "#6e5530"
HANDLE_HI = "#8b6f42"
HANDLE_LO = "#4f3c20"
WOOD = "#a47f45"
WOOD_HI = "#c6a064"
WOOD_LO = "#7c5e32"
STONE = "#909090"
STONE_HI = "#b4b4b4"
STONE_LO = "#686868"
OUTLINE = "#231910"        # 木色系暖深棕描边
OUTLINE_STONE = "#272727"  # 石色系冷深灰描边
COAL = "#2b2b2b"
COAL_HI = "#4c4c4c"
COAL_LO = "#161616"


def hx(s):
    s = s.lstrip("#")
    return (int(s[0:2], 16), int(s[2:4], 16), int(s[4:6], 16), 255)


def blank():
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    return im, im.load()


def put(px, pts, color):
    c = hx(color)
    for (x, y) in pts:
        if 0 <= x < S and 0 <= y < S:
            px[x, y] = c


def add_outline(px, outline):
    """给所有不透明像素的透明邻居(含对角)铺 1px 描边，让图标在灰背包格上清晰。"""
    ol = hx(outline)
    solid = [(x, y) for x in range(S) for y in range(S) if px[x, y][3] != 0]
    sset = set(solid)
    edges = set()
    for (x, y) in solid:
        for dx in (-1, 0, 1):
            for dy in (-1, 0, 1):
                nx, ny = x + dx, y + dy
                if 0 <= nx < S and 0 <= ny < S and (nx, ny) not in sset and px[nx, ny][3] == 0:
                    edges.add((nx, ny))
    for (x, y) in edges:
        px[x, y] = ol


def draw_handle(px, x0=2, y0=13, x1=9, y1=6):
    """左下→右上的 2px 木柄；上沿高光、下沿暗，返回柄像素集合。"""
    base, hi, lo = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
    cells = []
    n = max(abs(x1 - x0), abs(y1 - y0))
    for i in range(n + 1):
        x = round(x0 + (x1 - x0) * i / n)
        y = round(y0 + (y1 - y0) * i / n)
        for (cx, cy) in ((x, y), (x + 1, y)):
            if 0 <= cx < S and 0 <= cy < S:
                cells.append((cx, cy))
    cells = list(dict.fromkeys(cells))
    for (cx, cy) in cells:
        px[cx, cy] = base
    for (cx, cy) in cells:  # 左/上沿高光
        if (cx - 1, cy) not in cells and (cx, cy - 1) not in cells:
            px[cx, cy] = hi
    for (cx, cy) in cells:  # 右/下沿暗
        if (cx + 1, cy) not in cells and (cx, cy + 1) not in cells and px[cx, cy] != hi:
            px[cx, cy] = lo
    return set(cells)


def shade_head(px, pts, base, hi, lo, avoid=()):
    """给工具头着色：上/左沿高光、下/右沿暗、其余主色(跳过 avoid 内已占像素)。"""
    bs, hs, ls = hx(base), hx(hi), hx(lo)
    pset = set(pts)
    for (x, y) in pts:
        if (x, y) in avoid:
            continue
        px[x, y] = bs
    for (x, y) in pts:
        if (x, y) in avoid:
            continue
        if (x, y - 1) not in pset or (x - 1, y) not in pset:
            px[x, y] = hs
    for (x, y) in pts:
        if (x, y) in avoid:
            continue
        if ((x, y + 1) not in pset and (x + 1, y) not in pset) and px[x, y] != hs:
            px[x, y] = ls


def _hc(stone):
    return (STONE, STONE_HI, STONE_LO) if stone else (WOOD, WOOD_HI, WOOD_LO)


def make_pickaxe(stone=False):
    im, px = blank()
    handle = draw_handle(px)
    # 镐头：宽横身 + 左/中/右三个采矿齿向下，中部接柄
    head = [
        (4, 1), (5, 1), (6, 1), (7, 1), (8, 1), (9, 1), (10, 1), (11, 1), (12, 1),
        (3, 2), (4, 2), (5, 2), (6, 2), (7, 2), (8, 2), (9, 2), (10, 2), (11, 2), (12, 2), (13, 2),
        (3, 3), (8, 3), (13, 3),  # 三齿根
        (3, 4), (8, 4), (13, 4),  # 三齿尖
        (9, 4), (9, 5),           # 中部连柄
    ]
    head = [p for p in head if p not in handle]
    shade_head(px, head, *_hc(stone))
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_axe(stone=False):
    im, px = blank()
    handle = draw_handle(px)
    # 斧头：右上一大片半月刃，刃口朝右外凸
    head = [
        (8, 1), (9, 1), (10, 1), (11, 1),
        (8, 2), (9, 2), (10, 2), (11, 2), (12, 2), (13, 2),
        (8, 3), (9, 3), (10, 3), (11, 3), (12, 3), (13, 3),
        (9, 4), (10, 4), (11, 4), (12, 4), (13, 4),
        (9, 5), (10, 5), (11, 5), (12, 5),
        (10, 6), (11, 6),
    ]
    head = [p for p in head if p not in handle]
    shade_head(px, head, *_hc(stone))
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_shovel(stone=False):
    im, px = blank()
    handle = draw_handle(px)
    # 锹头：右上方铲，顶宽下收成梯形
    head = [
        (9, 1), (10, 1), (11, 1), (12, 1), (13, 1),
        (9, 2), (10, 2), (11, 2), (12, 2), (13, 2),
        (9, 3), (10, 3), (11, 3), (12, 3), (13, 3),
        (10, 4), (11, 4), (12, 4),
        (10, 5), (11, 5),
    ]
    head = [p for p in head if p not in handle]
    shade_head(px, head, *_hc(stone))
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_hoe(stone=False):
    im, px = blank()
    handle = draw_handle(px)
    # 锄头：右上横刃 + 左端向下折一格成 L
    head = [
        (8, 1), (9, 1), (10, 1), (11, 1), (12, 1), (13, 1),
        (8, 2), (9, 2),          # L 角
        (12, 2), (13, 2),        # 右端略厚
    ]
    head = [p for p in head if p not in handle]
    shade_head(px, head, *_hc(stone))
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_sword(stone=False):
    im, px = blank()
    base, hi, lo = _hc(stone)
    hb, hh, hl = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
    # 剑身：右上斜长菱形 + 中脊高光，剑尖在 (13,1)
    blade = [
        (13, 1), (12, 2), (13, 2),
        (11, 3), (12, 3),
        (10, 4), (11, 4),
        (9, 5), (10, 5),
        (8, 6), (9, 6),
        (7, 7), (8, 7),
    ]
    shade_head(px, blade, base, hi, lo)
    for (x, y) in [(12, 2), (11, 3), (10, 4), (9, 5), (8, 6)]:  # 中脊亮线
        px[x, y] = hx(hi)
    # 护手(木色十字横档)
    for (x, y) in [(5, 8), (6, 8), (7, 8), (8, 8), (9, 8)]:
        px[x, y] = hb
    px[5, 8] = hl
    px[9, 8] = hl
    # 柄 + 柄尾(左下，木色)
    for (x, y) in [(6, 9), (5, 10), (4, 11)]:
        px[x, y] = hb
    px[7, 9] = hh
    px[3, 12] = hl  # pommel
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_stick():
    im, px = blank()
    base, hi, lo = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)

    def bar(x0, y0, x1, y1):
        cells = []
        n = max(abs(x1 - x0), abs(y1 - y0))
        for i in range(n + 1):
            cells.append((round(x0 + (x1 - x0) * i / n), round(y0 + (y1 - y0) * i / n)))
        return cells

    for (x0, y0, x1, y1) in [(5, 12, 9, 4), (8, 12, 12, 4)]:  # 两节平行木棒
        cells = bar(x0, y0, x1, y1)
        for (x, y) in cells:
            px[x, y] = base
        for (x, y) in cells:  # 上沿高光
            if (x, y - 1) not in cells:
                px[x, y] = hi
        px[cells[0][0], cells[0][1]] = lo   # 端头截面暗
        px[cells[-1][0], cells[-1][1]] = lo
    add_outline(px, OUTLINE)
    return im


def make_coal():
    im, px = blank()
    block = [
        (6, 4), (7, 4), (8, 4), (9, 4),
        (5, 5), (6, 5), (7, 5), (8, 5), (9, 5), (10, 5),
        (4, 6), (5, 6), (6, 6), (7, 6), (8, 6), (9, 6), (10, 6), (11, 6),
        (4, 7), (5, 7), (6, 7), (7, 7), (8, 7), (9, 7), (10, 7), (11, 7),
        (4, 8), (5, 8), (6, 8), (7, 8), (8, 8), (9, 8), (10, 8), (11, 8),
        (5, 9), (6, 9), (7, 9), (8, 9), (9, 9), (10, 9), (11, 9),
        (6, 10), (7, 10), (8, 10), (9, 10), (10, 10),
        (7, 11), (8, 11), (9, 11),
    ]
    bs, hi, lo = hx(COAL), hx(COAL_HI), hx(COAL_LO)
    pset = set(block)
    for (x, y) in block:
        px[x, y] = bs
    for (x, y) in block:  # 右下暗
        if (x + 1, y) not in pset or (x, y + 1) not in pset:
            px[x, y] = lo
    for (x, y) in [(6, 5), (7, 5), (5, 6), (6, 6), (8, 7), (9, 7)]:  # 左上高光面
        px[x, y] = hi
    add_outline(px, OUTLINE_STONE)
    return im


def main():
    os.makedirs(ICON, exist_ok=True)
    out = {
        "stick": make_stick(),
        "coal": make_coal(),
        "wooden_pickaxe": make_pickaxe(False),
        "wooden_axe": make_axe(False),
        "wooden_shovel": make_shovel(False),
        "wooden_sword": make_sword(False),
        "wooden_hoe": make_hoe(False),
        "stone_pickaxe": make_pickaxe(True),
        "stone_axe": make_axe(True),
        "stone_shovel": make_shovel(True),
        "stone_sword": make_sword(True),
        "stone_hoe": make_hoe(True),
    }
    for name, im in out.items():
        im.save(os.path.join(ICON, f"{name}.png"))
    print(f"wrote {len(out)} item icons -> {os.path.normpath(ICON)}")


if __name__ == "__main__":
    main()
