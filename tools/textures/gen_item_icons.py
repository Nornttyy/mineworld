#!/usr/bin/env python3
"""物品图标：木棍/煤 + 木质&石质工具(镐/斧/锹/剑/锄)。
画法(用户建议)：先把工具**正放**画好(柄竖直、头在正上方，形状容易画准)，
再整体**旋转 45°** 得到斜放(柄左下→头右上，与 MC 一致)。NEAREST 旋转保像素硬边。
木质头=暖木色，石质头=灰石色;柄=深木;旋转后统一 1px 深描边。
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
STONE = "#9a9a9a"
STONE_HI = "#bdbdbd"
STONE_LO = "#6f6f6f"
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


def fill(px, pts, color):
    c = hx(color)
    for (x, y) in pts:
        if 0 <= x < S and 0 <= y < S:
            px[x, y] = c


def shade(px, pts, base, hi, lo):
    """对一组像素着色：上/左沿高光、下/右沿暗、其余主色。"""
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


def vbar(x, y0, y1):
    return [(x, y) for y in range(y0, y1 + 1)] + [(x + 1, y) for y in range(y0, y1 + 1)]


def rotate45(im, outline):
    """正放图整体顺时针旋转 45°(柄竖→左下、头顶→右上)，裁回 16×16，再描边。"""
    rot = im.rotate(-45, resample=Image.NEAREST, expand=True)
    w, h = rot.size
    l, t = (w - S) // 2, (h - S) // 2
    crop = rot.crop((l, t, l + S, t + S))
    add_outline(crop.load(), outline)
    return crop


# ── 正放工具(柄竖直、头在正上方) → 旋转 ────────────────────────────────
def make_pickaxe(stone=False):
    im, px = blank()
    base, hi, lo = _hc(stone)
    shade(px, vbar(7, 6, 14), HANDLE, HANDLE_HI, HANDLE_LO)  # 竖柄
    # 正放镐头：横梁 + 右端下折竖臂(采矿尖) + 左端尖；旋转后成 MC 的"7"斜镐头
    head = [
        (3, 2), (4, 2), (5, 2), (6, 2), (7, 2), (8, 2), (9, 2), (10, 2), (11, 2),  # 横梁
        (3, 3), (3, 4),            # 左端尖
        (11, 3), (11, 4),          # 右端下折竖臂
        (7, 3),                    # 横梁中接柄
    ]
    shade(px, head, base, hi, lo)
    return rotate45(im, OUTLINE_STONE if stone else OUTLINE)


def make_axe(stone=False):
    im, px = blank()
    base, hi, lo = _hc(stone)
    shade(px, vbar(7, 6, 14), HANDLE, HANDLE_HI, HANDLE_LO)  # 竖柄
    # 正放斧头：柄顶一侧的横斧头(偏左凸刃)
    head = [
        (4, 2), (5, 2), (6, 2), (7, 2), (8, 2),
        (3, 3), (4, 3), (5, 3), (6, 3), (7, 3), (8, 3),
        (3, 4), (4, 4), (5, 4), (6, 4), (7, 4), (8, 4),
        (4, 5), (5, 5), (6, 5), (7, 5),
    ]
    shade(px, head, base, hi, lo)
    return rotate45(im, OUTLINE_STONE if stone else OUTLINE)


def make_shovel(stone=False):
    im, px = blank()
    base, hi, lo = _hc(stone)
    shade(px, vbar(7, 7, 14), HANDLE, HANDLE_HI, HANDLE_LO)  # 竖柄
    # 正放铲头：柄顶的方铲(顶宽下收)
    head = [
        (5, 2), (6, 2), (7, 2), (8, 2), (9, 2),
        (5, 3), (6, 3), (7, 3), (8, 3), (9, 3),
        (5, 4), (6, 4), (7, 4), (8, 4), (9, 4),
        (6, 5), (7, 5), (8, 5),
    ]
    shade(px, head, base, hi, lo)
    return rotate45(im, OUTLINE_STONE if stone else OUTLINE)


def make_hoe(stone=False):
    im, px = blank()
    base, hi, lo = _hc(stone)
    shade(px, vbar(7, 6, 14), HANDLE, HANDLE_HI, HANDLE_LO)  # 竖柄
    # 正放锄头：柄顶横刃 + 一端下折(旋转后成 MC 的 7/L)
    head = [
        (3, 2), (4, 2), (5, 2), (6, 2), (7, 2), (8, 2),
        (3, 3), (3, 4),    # 左端下折
        (7, 3),            # 接柄
    ]
    shade(px, head, base, hi, lo)
    return rotate45(im, OUTLINE_STONE if stone else OUTLINE)


def make_sword(stone=False):
    im, px = blank()
    base, hi, lo = _hc(stone)
    # 正放剑：竖直剑刃(菱形+中脊高光) + 护手 + 柄
    blade = [
        (7, 1),
        (6, 2), (7, 2), (8, 2),
        (6, 3), (7, 3), (8, 3),
        (6, 4), (7, 4), (8, 4),
        (6, 5), (7, 5), (8, 5),
        (6, 6), (7, 6), (8, 6),
        (6, 7), (7, 7), (8, 7),
    ]
    shade(px, blade, base, hi, lo)
    for y in range(1, 8):
        px[7, y] = hx(hi)  # 中脊亮线
    fill(px, [(4, 8), (5, 8), (6, 8), (7, 8), (8, 8), (9, 8), (10, 8)], HANDLE)  # 护手
    shade(px, vbar(7, 9, 13), HANDLE, HANDLE_HI, HANDLE_LO)  # 柄
    px[7, 13] = hx(HANDLE_LO)
    px[8, 13] = hx(HANDLE_LO)
    return rotate45(im, OUTLINE_STONE if stone else OUTLINE)


def make_stick():
    im, px = blank()
    shade(px, vbar(7, 3, 13), HANDLE, HANDLE_HI, HANDLE_LO)  # 正放竖木棒
    px[7, 3] = hx(HANDLE_LO)
    px[8, 13] = hx(HANDLE_LO)
    return rotate45(im, OUTLINE)


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
    add_outline(px, OUTLINE_STONE)  # 煤不旋转
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
