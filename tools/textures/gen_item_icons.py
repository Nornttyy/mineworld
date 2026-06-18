#!/usr/bin/env python3
"""物品图标：木棍/煤 + 木质&石质工具(镐/斧/锹/剑/锄)。
16×16 RGBA 透明背景、像素硬边、确定性。MC 风格鲜艳卡通，配合本项目卡通材质。

风格约定：
- 工具斜放(柄从左下→右上)；柄=木棍色，工具头按类型区分。
- 木质工具头=暖黄木色，石质工具头=灰石色。
- 画完图形后统一加 1px 深色描边，使其在灰色背包格上清晰可辨。
独立于 gen_textures.py / gen_ui.py。
"""
import os
from PIL import Image

ICON = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "icons")
S = 16

# ---- 调色板 ----
HANDLE = "#8a6a3a"   # 木棍/工具柄 基色
HANDLE_HI = "#a98750"  # 柄高光
HANDLE_LO = "#6b5029"  # 柄暗部
WOOD = "#caa24e"     # 木质工具头 基色(暖黄木)
WOOD_HI = "#e6c878"  # 木质头 高光
WOOD_LO = "#9c7a34"  # 木质头 暗部
STONE = "#9a9a9a"    # 石质工具头 基色(灰)
STONE_HI = "#bcbcbc"  # 石质头 高光
STONE_LO = "#6f6f6f"  # 石质头 暗部
OUTLINE = "#241a10"  # 木色系描边(暖深棕)
OUTLINE_STONE = "#2b2b2b"  # 石色系描边(冷深灰)
COAL = "#2b2b2b"     # 煤 基色
COAL_HI = "#4a4a4a"  # 煤 高光
COAL_LO = "#161616"  # 煤 暗部


def hx(s):
    s = s.lstrip("#")
    return (int(s[0:2], 16), int(s[2:4], 16), int(s[4:6], 16), 255)


def add_outline(px, outline):
    """对所有不透明像素的空透明邻居(4+对角)铺 1px 描边。"""
    ol = hx(outline)
    solid = [(x, y) for x in range(S) for y in range(S) if px[x, y][3] != 0]
    solid_set = set(solid)
    edges = set()
    for (x, y) in solid:
        for dx in (-1, 0, 1):
            for dy in (-1, 0, 1):
                nx, ny = x + dx, y + dy
                if 0 <= nx < S and 0 <= ny < S and (nx, ny) not in solid_set and px[nx, ny][3] == 0:
                    edges.add((nx, ny))
    for (x, y) in edges:
        px[x, y] = ol


def blank():
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    return im, im.load()


def put(px, pts, color):
    c = hx(color)
    for (x, y) in pts:
        if 0 <= x < S and 0 <= y < S:
            px[x, y] = c


# ======================================================================
# 柄：从左下(2,13) 斜向右上(10,5) 的一条 2px 宽木棒。
# 各工具复用，让斜向一致；返回占用的柄像素集合(用于不重叠描边)。
# ======================================================================
def draw_handle(px, x0=2, y0=13, x1=10, y1=5):
    # 沿对角铺 2px 宽柄：主对角 + 右侧补一格成斜带
    base, hi, lo = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
    cells = []
    n = max(abs(x1 - x0), abs(y1 - y0))
    for i in range(n + 1):
        x = round(x0 + (x1 - x0) * i / n)
        y = round(y0 + (y1 - y0) * i / n)
        for (cx, cy) in ((x, y), (x + 1, y)):  # 2px 宽(向右补一格)
            if 0 <= cx < S and 0 <= cy < S:
                cells.append((cx, cy))
    cells = list(dict.fromkeys(cells))
    for (cx, cy) in cells:
        px[cx, cy] = base
    # 高光走柄上沿(左/上侧)，暗部走下沿
    for (cx, cy) in cells:
        if (cx - 1, cy) not in cells and (cx, cy - 1) not in cells:
            px[cx, cy] = hi
    for (cx, cy) in cells:
        if (cx + 1, cy) not in cells and (cx, cy + 1) not in cells and px[cx, cy] != hi:
            px[cx, cy] = lo
    return set(cells)


# ======================================================================
# 工具头：画在柄右上端(约 8..13 x, 2..7 y)区域。
# head/hi/lo 三色按形状着色。
# ======================================================================
def shade_head(px, pts, base, hi, lo):
    bs, hs, ls = hx(base), hx(hi), hx(lo)
    pset = set(pts)
    for (x, y) in pts:
        px[x, y] = bs
    for (x, y) in pts:  # 上/左沿高光
        if (x, y - 1) not in pset or (x - 1, y) not in pset:
            px[x, y] = hs
    for (x, y) in pts:  # 下/右沿暗
        if ((x, y + 1) not in pset and (x + 1, y) not in pset) and px[x, y] != hs:
            px[x, y] = ls


def make_pickaxe(stone=False):
    im, px = blank()
    draw_handle(px)
    base, hi, lo = (STONE, STONE_HI, STONE_LO) if stone else (WOOD, WOOD_HI, WOOD_LO)
    # 镐头：横跨顶部的弧形三齿(左中右)，中部与柄连接
    head = [
        (5, 3), (6, 3), (7, 3), (8, 2), (9, 2), (10, 2), (11, 3), (12, 3), (13, 3),  # 顶横排
        (5, 4), (6, 4), (9, 3), (12, 4), (13, 4),  # 左齿垂、中接、右齿垂
        (5, 5), (9, 4),  # 左尖 + 中柱
    ]
    shade_head(px, head, base, hi, lo)
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_axe(stone=False):
    im, px = blank()
    draw_handle(px)
    base, hi, lo = (STONE, STONE_HI, STONE_LO) if stone else (WOOD, WOOD_HI, WOOD_LO)
    # 斧头：单侧(右上)斧刃，半月块状贴在柄上端
    head = [
        (8, 2), (9, 2), (10, 2),
        (8, 3), (9, 3), (10, 3), (11, 3), (12, 3),
        (9, 4), (10, 4), (11, 4), (12, 4), (13, 4),
        (10, 5), (11, 5), (12, 5),  # 刃下收
    ]
    shade_head(px, head, base, hi, lo)
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_shovel(stone=False):
    im, px = blank()
    draw_handle(px)
    base, hi, lo = (STONE, STONE_HI, STONE_LO) if stone else (WOOD, WOOD_HI, WOOD_LO)
    # 锹头：柄端一个扁平方铲头(顶宽、底略收，像铲面)
    head = [
        (8, 1), (9, 1), (10, 1), (11, 1), (12, 1),  # 铲面顶沿(宽)
        (8, 2), (9, 2), (10, 2), (11, 2), (12, 2),  # 铲面主体
        (9, 3), (10, 3), (11, 3),                   # 收向柄(梯形)
    ]
    shade_head(px, head, base, hi, lo)
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_sword(stone=False):
    im, px = blank()
    base, hi, lo = (STONE, STONE_HI, STONE_LO) if stone else (WOOD, WOOD_HI, WOOD_LO)
    hb, hh, hl = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
    # 短柄(木色)：左下，含尾端 pommel
    handle = [(3, 12), (4, 11), (5, 10)]
    for (x, y) in handle:
        px[x, y] = hb
    px[2, 13] = hl  # pommel(柄尾)
    px[5, 10] = hh
    # 护手(木色，与剑身垂直的十字横档，骑在柄与剑身之间)
    for (x, y) in [(7, 11), (6, 10), (4, 9), (5, 8)]:
        px[x, y] = hl
    # 剑身：斜向右上的宽菱形长条 + 中脊高光，剑尖在(13,3)
    blade = [
        (5, 9), (6, 9), (6, 8), (7, 8),       # 身根(贴护手)
        (7, 7), (8, 7), (8, 6), (9, 6),
        (9, 5), (10, 5), (10, 4), (11, 4),
        (11, 3), (12, 3), (12, 2), (13, 3),   # 剑尖
    ]
    shade_head(px, blade, base, hi, lo)
    # 中脊高光(贯穿剑身一条亮线)
    for (x, y) in [(7, 8), (8, 7), (9, 6), (10, 5), (11, 4)]:
        px[x, y] = hx(hi)
    px[12, 2] = hx(hi)  # 剑尖高光
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_hoe(stone=False):
    im, px = blank()
    draw_handle(px)
    base, hi, lo = (STONE, STONE_HI, STONE_LO) if stone else (WOOD, WOOD_HI, WOOD_LO)
    # 锄头：L 形——柄顶端向右横出一短刃，左端向下折一小块成 L 角
    head = [
        (8, 2), (9, 2), (10, 2), (11, 2), (12, 2),  # 顶横刃(1px 薄)
        (8, 3),  # L 角(向下折一格)
    ]
    shade_head(px, head, base, hi, lo)
    add_outline(px, OUTLINE_STONE if stone else OUTLINE)
    return im


def make_stick():
    im, px = blank()
    # 两节细木棒斜放(平行)：上下两条 1.5px 斜棒
    base, hi, lo = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)

    def bar(x0, y0, x1, y1):
        cells = []
        n = max(abs(x1 - x0), abs(y1 - y0))
        for i in range(n + 1):
            x = round(x0 + (x1 - x0) * i / n)
            y = round(y0 + (y1 - y0) * i / n)
            cells.append((x, y))
        return cells

    b1 = bar(4, 12, 9, 5)   # 第一节
    b2 = bar(7, 12, 12, 5)  # 第二节(右移平行)
    for cells in (b1, b2):
        for (x, y) in cells:
            px[x, y] = base
        for (x, y) in cells:  # 上沿高光、下沿暗
            if (x, y - 1) not in cells:
                px[x, y] = hi
        # 端头略暗(木纹截面)
        px[cells[0][0], cells[0][1]] = lo
        px[cells[-1][0], cells[-1][1]] = lo
    add_outline(px, OUTLINE)
    return im


def make_coal():
    im, px = blank()
    # 不规则黑色小块带高光
    block = [
        (6, 4), (7, 4), (8, 4),
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
    # 暗部走右下沿
    for (x, y) in block:
        if (x + 1, y) not in pset or (x, y + 1) not in pset:
            px[x, y] = lo
    # 几处不规则高光面(左上)
    for (x, y) in [(6, 5), (7, 5), (6, 6), (5, 6), (8, 7), (9, 7)]:
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
    print(", ".join(out.keys()))


if __name__ == "__main__":
    main()
