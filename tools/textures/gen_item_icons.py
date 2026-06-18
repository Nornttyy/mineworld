#!/usr/bin/env python3
"""物品图标：木棍/煤 + 木质&石质工具(镐/斧/锹/剑/锄)。
16×16 RGBA 透明背景、像素硬边、确定性。布局参照 MC 真实工具图标:
- 剑/镐/锄：斜柄(左下→右上)，作用端在上/右上。
- 斧/锹：竖直柄，头在正上方(斧=顶横斧头偏左刃；锹=顶方铲)。
- 镐：柄左下，镐头是上方横弧。
木质头=暖木色，石质头=灰石色;柄=深木;统一 1px 深描边。
独立于 gen_textures.py / gen_ui.py。
"""
import os
from PIL import Image

ICON = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "icons")
S = 16

HANDLE = "#6e5530"
HANDLE_HI = "#8b6f42"
HANDLE_LO = "#4f3c20"
WOOD = "#a47f45"
WOOD_HI = "#c6a064"
WOOD_LO = "#7c5e32"
STONE = "#909090"
STONE_HI = "#b4b4b4"
STONE_LO = "#686868"
OUTLINE = "#231910"
OUTLINE_STONE = "#272727"
COAL = "#2b2b2b"
COAL_HI = "#4c4c4c"
COAL_LO = "#161616"


def hx(s):
    s = s.lstrip("#")
    return (int(s[0:2], 16), int(s[2:4], 16), int(s[4:6], 16), 255)


def blank():
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    return im, im.load()


def add_outline(px, outline):
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


def _hc(stone):
    return (STONE, STONE_HI, STONE_LO) if stone else (WOOD, WOOD_HI, WOOD_LO)


def shade_head(px, pts, base, hi, lo):
    bs, hs, ls = hx(base), hx(hi), hx(lo)
    pset = set(pts)
    for (x, y) in pts:
        px[x, y] = bs
    for (x, y) in pts:
        if (x, y - 1) not in pset or (x - 1, y) not in pset:
            px[x, y] = hs
    for (x, y) in pts:
        if ((x, y + 1) not in pset and (x + 1, y) not in pset) and px[x, y] != hs:
            px[x, y] = ls


def handle_diag(px, x0=2, y0=13, x1=8, y1=6):
    """斜柄(左下→右上)，2px 宽；上沿高光、下沿暗。"""
    base, hi, lo = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
    cells = []
    n = max(abs(x1 - x0), abs(y1 - y0))
    for i in range(n + 1):
        x = round(x0 + (x1 - x0) * i / n)
        y = round(y0 + (y1 - y0) * i / n)
        for (cx, cy) in ((x, y), (x + 1, y)):
            cells.append((cx, cy))
    cells = list(dict.fromkeys(cells))
    for (cx, cy) in cells:
        px[cx, cy] = base
    for (cx, cy) in cells:
        if (cx - 1, cy) not in cells and (cx, cy - 1) not in cells:
            px[cx, cy] = hi
    for (cx, cy) in cells:
        if (cx + 1, cy) not in cells and (cx, cy + 1) not in cells and px[cx, cy] != hi:
            px[cx, cy] = lo
    return set(cells)


def handle_vert(px, x=7, y0=14, y1=6):
    """竖直柄(斧/锹用)，2px 宽；左列高光、右列暗。"""
    base, hi, lo = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
    cells = set()
    for y in range(y1, y0 + 1):
        px[x, y] = hi
        px[x + 1, y] = lo
        cells.add((x, y))
        cells.add((x + 1, y))
    return cells


def make_pickaxe(stone=False):
    im, px = blank()
    handle_diag(px, 2, 13, 7, 4)
    base, hi, lo = _hc(stone)
    # 镐头："7"字形(MC)：顶横梁 + 右端下折成竖臂(采矿尖) + 左端小尖；柄从横梁中部向左下。
    head = [
        (4, 2), (5, 2), (6, 2), (7, 2), (8, 2), (9, 2), (10, 2),  # 顶横梁
        (4, 3),                                                    # 左端尖
        (10, 3), (11, 3), (10, 4), (11, 4), (11, 5),               # 右端下折竖臂(采矿尖)
        (7, 3),                                                    # 横梁中部接柄
    ]
    shade_head(px, head, base, hi, lo)
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_axe(stone=False):
    im, px = blank()
    handle_diag(px, 2, 13, 9, 5)
    base, hi, lo = _hc(stone)
    # 斧头：斜柄右上端的横斧头，斧刃朝左上外凸(仿 MC)
    head = [
        (7, 2), (8, 2), (9, 2), (10, 2),
        (6, 3), (7, 3), (8, 3), (9, 3), (10, 3),
        (6, 4), (7, 4), (8, 4), (9, 4), (10, 4),
        (7, 5), (8, 5), (9, 5),
    ]
    shade_head(px, head, base, hi, lo)
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_shovel(stone=False):
    im, px = blank()
    handle_diag(px, 2, 13, 9, 5)
    base, hi, lo = _hc(stone)
    # 锹头：斜柄右上端的方铲(顶宽下收)
    head = [
        (8, 2), (9, 2), (10, 2), (11, 2),
        (8, 3), (9, 3), (10, 3), (11, 3),
        (8, 4), (9, 4), (10, 4), (11, 4),
        (9, 5), (10, 5),
    ]
    shade_head(px, head, base, hi, lo)
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_hoe(stone=False):
    im, px = blank()
    handle_diag(px, 2, 13, 8, 6)
    base, hi, lo = _hc(stone)
    # 锄头：右上横刃 + 右端向下折一格(MC 的 7/L 形)
    head = [
        (7, 3), (8, 3), (9, 3), (10, 3), (11, 3), (12, 3),
        (12, 4), (12, 5),   # 右端下折
        (7, 4),             # 接柄
    ]
    shade_head(px, head, base, hi, lo)
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_sword(stone=False):
    im, px = blank()
    base, hi, lo = _hc(stone)
    hb, hh, hl = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
    # 剑身：右上斜长菱形 + 中脊高光，剑尖 (13,1)
    blade = [
        (12, 1), (13, 1),
        (11, 2), (12, 2), (13, 2),
        (10, 3), (11, 3), (12, 3),
        (9, 4), (10, 4), (11, 4),
        (8, 5), (9, 5), (10, 5),
        (7, 6), (8, 6), (9, 6),
        (7, 7), (8, 7),
    ]
    shade_head(px, blade, base, hi, lo)
    for (x, y) in [(13, 1), (12, 2), (11, 3), (10, 4), (9, 5), (8, 6)]:
        px[x, y] = hx(hi)  # 中脊亮线
    # 护手(木色十字)
    for (x, y) in [(5, 8), (6, 8), (7, 8), (8, 8), (9, 8)]:
        px[x, y] = hb
    px[5, 8] = hl
    px[9, 8] = hl
    # 柄 + 柄尾(左下)
    for (x, y) in [(6, 9), (5, 10), (4, 11)]:
        px[x, y] = hb
    px[7, 9] = hh
    px[3, 12] = hl
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_stick():
    im, px = blank()
    base, hi, lo = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
    cells = []
    x0, y0, x1, y1 = 4, 11, 11, 4
    n = max(abs(x1 - x0), abs(y1 - y0))
    for i in range(n + 1):
        x = round(x0 + (x1 - x0) * i / n)
        y = round(y0 + (y1 - y0) * i / n)
        for (cx, cy) in ((x, y), (x + 1, y)):
            cells.append((cx, cy))
    cells = list(dict.fromkeys(cells))
    for (x, y) in cells:
        px[x, y] = base
    for (x, y) in cells:
        if (x, y - 1) not in cells and (x - 1, y) not in cells:
            px[x, y] = hi
    px[cells[0][0], cells[0][1]] = lo
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
    for (x, y) in block:
        if (x + 1, y) not in pset or (x, y + 1) not in pset:
            px[x, y] = lo
    for (x, y) in [(6, 5), (7, 5), (5, 6), (6, 6), (8, 7), (9, 7)]:
        px[x, y] = hi
    add_outline(px, OUTLINE_STONE)
    return im


def main():
    os.makedirs(ICON, exist_ok=True)
    out = {
        "stick": make_stick(),
        "coal": make_coal(),
        # wooden_pickaxe 由用户手绘(paint.html)，不在此生成，避免覆盖
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
