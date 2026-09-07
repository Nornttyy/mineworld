#!/usr/bin/env python3
"""1.12 风格物品图标：四种材质的工具拥有各自轮廓与像素细节。
16×16 RGBA 透明背景、像素硬边、确定性。布局参照 MC 真实工具图标:
- 剑/镐/锄：斜柄(左下→右上)，作用端在上/右上。
- 斧/锹：竖直柄，头在正上方(斧=顶横斧头偏左刃；锹=顶方铲)。
- 镐：柄左下，镐头是上方横弧。
所有输出均为原生 16×16 硬像素；经典/鲜明两套包分别输出，不读取或换色旧 PNG。
独立于 gen_textures.py / gen_ui.py。
"""
import os
from PIL import Image

ICON = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "icons")
ICON_CLASSIC = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "icons_classic")
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
# 火药：灰粉堆
GP = "#5e5e5e"
GP_HI = "#808080"
GP_LO = "#383838"
# 下界石英：暖白晶体（仿 MC 略带粉白）
QZ = "#ece2d6"
QZ_HI = "#fffaf4"
QZ_LO = "#d2c2b2"
# 打火石：钢条(银) + 燧石(深灰角块)
STEEL = "#b6b6c0"
STEEL_HI = "#dcdce4"
STEEL_LO = "#7e7e8a"
FLINT = "#4a4a50"
FLINT_HI = "#66666c"
FLINT_LO = "#2c2c32"


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


# 石/铁工具 = 用户手绘木质工具整体**换色**(用户要求整把换、不留木柄)，形状沿用用户的。
# 工具换色：只换【头部】(WOOD 系色)→材质色；【柄 HANDLE 系】与描边【保持木棕】——同 MC：
# 任何材质的工具，柄永远是木棍，只有头随材质变色。之前是整体换色→柄也变灰/变银(用户报"上色不对")。
WOOD_TO_STONE = {
    (164, 127, 69): (144, 144, 144),   # WOOD    → STONE
    (198, 160, 100): (180, 180, 180),  # WOOD_HI → STONE_HI
    (124, 94, 50): (104, 104, 104),    # WOOD_LO → STONE_LO
}
WOOD_TO_IRON = {
    (164, 127, 69): (205, 205, 212),   # WOOD    → 银
    (198, 160, 100): (230, 230, 236),  # WOOD_HI → 亮银
    (124, 94, 50): (150, 150, 158),    # WOOD_LO → 暗银
}
WOOD_TO_DIAMOND = {
    (164, 127, 69): (79, 201, 190),    # WOOD    → 蓝绿钻石
    (198, 160, 100): (139, 246, 231),  # WOOD_HI → 高光
    (124, 94, 50): (37, 151, 148),     # WOOD_LO → 阴影
}

# 用户手绘木镐的镐头与木柄有一部分共用同一种棕色，不能只靠 RGB 全图替换，
# 否则柄芯也会变成钻石色。显式标出镐头，保留木镐的轮廓和完整木柄。
PICKAXE_HEAD_HIGHLIGHT = {(7, 3), (8, 3), (10, 4), (11, 5)}
PICKAXE_HEAD_BASE = {(9, 3), (10, 3), (11, 4), (12, 5), (12, 6), (12, 7)}
PICKAXE_HEAD_SHADOW = {(12, 8)}


def make_torch():
    """火把：竖木棍 + 顶端火焰团（橙黄火苗）。"""
    im, px = blank()
    hh, hl = hx(HANDLE_HI), hx(HANDLE_LO)
    for y in range(8, 15):  # 竖棍 2px（左高光、右暗）
        px[7, y] = hh
        px[8, y] = hl
    fo, fm, fc = hx("#cf3c0a"), hx("#ff8c1e"), hx("#ffe24a")  # 外橙 / 中橙 / 亮黄芯
    flame = {
        (6, 7): fo, (7, 7): fm, (8, 7): fm, (9, 7): fo,
        (6, 6): fo, (7, 6): fc, (8, 6): fc, (9, 6): fo,
        (7, 5): fc, (8, 5): fm,
        (7, 4): fm, (8, 4): fo,
        (7, 3): fo,  # 火苗尖
    }
    for (x, y), c in flame.items():
        px[x, y] = c
    add_outline(px, OUTLINE)
    return im


def make_gunpowder():
    """火药：底部一堆灰粉，掺暗色颗粒。"""
    im, px = blank()
    pile = [
        (6, 7), (7, 7), (8, 7), (9, 7),
        (5, 8), (6, 8), (7, 8), (8, 8), (9, 8), (10, 8),
        (4, 9), (5, 9), (6, 9), (7, 9), (8, 9), (9, 9), (10, 9), (11, 9),
        (4, 10), (5, 10), (6, 10), (7, 10), (8, 10), (9, 10), (10, 10), (11, 10),
        (5, 11), (6, 11), (7, 11), (8, 11), (9, 11), (10, 11),
    ]
    shade_head(px, pile, GP, GP_HI, GP_LO)
    for (x, y) in [(6, 8), (9, 9), (7, 10), (5, 10), (10, 10), (8, 11)]:
        px[x, y] = hx(GP_LO)  # 暗色火药粒
    add_outline(px, OUTLINE_STONE)
    return im


def make_nether_quartz():
    """下界石英：居中六角白晶 + 中央竖向亮棱。"""
    im, px = blank()
    crystal = [
        (8, 2),
        (7, 3), (8, 3), (9, 3),
        (6, 4), (7, 4), (8, 4), (9, 4), (10, 4),
        (6, 5), (7, 5), (8, 5), (9, 5), (10, 5),
        (6, 6), (7, 6), (8, 6), (9, 6), (10, 6),
        (6, 7), (7, 7), (8, 7), (9, 7), (10, 7),
        (7, 8), (8, 8), (9, 8),
        (8, 9),
    ]
    shade_head(px, crystal, QZ, QZ_HI, QZ_LO)
    for y in (4, 5, 6, 7):
        px[8, y] = hx(QZ_HI)  # 中央亮棱
    add_outline(px, OUTLINE_STONE)
    return im


def make_flint_and_steel():
    """打火石：左上深灰燧石 + 右侧银钢条(带底钩)，斜置。"""
    im, px = blank()
    steel = [
        (10, 4), (11, 4), (11, 5), (10, 5),
        (9, 6), (10, 6),
        (8, 7), (9, 7),
        (7, 8), (8, 8),
        (6, 9), (7, 9),
        (5, 10), (6, 10),
        (5, 11), (6, 11), (5, 12), (6, 12), (7, 12),  # 底钩
    ]
    shade_head(px, steel, STEEL, STEEL_HI, STEEL_LO)
    flint = [
        (3, 4), (4, 4), (5, 4),
        (2, 5), (3, 5), (4, 5), (5, 5),
        (2, 6), (3, 6), (4, 6),
        (3, 7),
    ]
    shade_head(px, flint, FLINT, FLINT_HI, FLINT_LO)
    add_outline(px, OUTLINE_STONE)
    return im


def recolor(wood_name, table):
    """从木质工具整体换色(石/铁)：每个木色像素按 table 映射，形状沿用用户手绘。"""
    im = Image.open(os.path.join(ICON, f"{wood_name}.png")).convert("RGBA")
    px = im.load()
    for y in range(S):
        for x in range(S):
            r, g, b, a = px[x, y]
            if a > 0:
                px[x, y] = (*table.get((r, g, b), (r, g, b)), 255)
    return im


def recolor_pickaxe_head(wood_name, table):
    """只给木镐的镐头换材质色，木柄、描边和透明轮廓逐像素保留。"""
    im = Image.open(os.path.join(ICON, f"{wood_name}.png")).convert("RGBA")
    px = im.load()
    shades = (
        (PICKAXE_HEAD_HIGHLIGHT, table[(198, 160, 100)]),
        (PICKAXE_HEAD_BASE, table[(164, 127, 69)]),
        (PICKAXE_HEAD_SHADOW, table[(124, 94, 50)]),
    )
    for points, color in shades:
        for x, y in points:
            if px[x, y][3] == 0:
                raise ValueError(f"wooden pickaxe head mask misses an opaque pixel at {(x, y)}")
            px[x, y] = (*color, 255)
    return im


def make_ingot(table):
    """锭图标(铁锭)：居中梯形金属块 + 顶高光底暗，颜色取换色板。"""
    im, px = blank()
    base = (*table[(164, 127, 69)], 255)
    hi = (*table[(198, 160, 100)], 255)
    lo = (*table[(124, 94, 50)], 255)
    for y, (x0, x1) in zip(range(6, 11), [(5, 10), (4, 11), (4, 11), (4, 11), (5, 10)]):
        for x in range(x0, x1 + 1):
            px[x, y] = base
    for x in range(5, 11):
        px[x, 6] = hi
    for x in range(5, 10):
        px[x, 10] = lo
    add_outline(px, OUTLINE_STONE)
    return im


def make_diamond():
    """钻石：原创蓝绿宝石切面，不复用原版像素图。"""
    im, px = blank()
    gem = [
        (8, 2),
        (7, 3), (8, 3), (9, 3),
        (6, 4), (7, 4), (8, 4), (9, 4), (10, 4),
        (5, 5), (6, 5), (7, 5), (8, 5), (9, 5), (10, 5), (11, 5),
        (6, 6), (7, 6), (8, 6), (9, 6), (10, 6),
        (7, 7), (8, 7), (9, 7),
        (8, 8),
    ]
    shade_head(px, gem, "#4fc9be", "#8bf6e7", "#259794")
    for x, y in [(8, 3), (7, 4), (8, 4), (6, 5)]:
        px[x, y] = hx("#d9fffa")
    add_outline(px, OUTLINE_STONE)
    return im


def center_png(name):
    """把手绘图标的图案 bbox 平移居中到 16×16 正中（用户画时常偏，物品栏/手持会歪）。"""
    p = os.path.join(ICON, f"{name}.png")
    if not os.path.exists(p):
        return
    im = Image.open(p).convert("RGBA")
    bb = im.getbbox()
    if not bb:
        return
    bw, bh = bb[2] - bb[0], bb[3] - bb[1]
    out = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    out.paste(im.crop(bb), ((S - bw) // 2, (S - bh) // 2))
    out.save(p)


TOOL_PALETTES = {
    "wooden": (WOOD, WOOD_HI, WOOD_LO),
    "stone": (STONE, STONE_HI, STONE_LO),
    "iron": ("#c9cbd0", "#f1f1f4", "#858993"),
    "diamond": ("#48c9bd", "#a0fff0", "#238b8c"),
}

CLASSIC_TOOL_PALETTES = {
    "wooden": ("#9b7740", "#bb9659", "#6f522b"),
    "stone": ("#858585", "#a6a6a6", "#5e5e5e"),
    "iron": ("#c2c3c6", "#e7e7e9", "#7c7f86"),
    "diamond": ("#39b8b0", "#80e8dc", "#207a7d"),
}


def tool_head(kind):
    """五类工具的固定标准轮廓；所有材质严格共用，避免边缘歪斜。"""
    shapes = {
        # 镐头左右对称：中央接柄，两端同长度下弯。
        "pickaxe": {
            *( (x, 2) for x in range(4, 11) ),
            *( (x, 3) for x in range(3, 12) ),
            (2, 4), (3, 4), (4, 4), (7, 4), (8, 4), (9, 4), (11, 4), (12, 4), (13, 4),
            (2, 5), (3, 5), (8, 5), (12, 5), (13, 5),
        },
        # 斧刃是规整阶梯楔形，柄从刃根正中接出。
        "axe": {
            *( (x, 1) for x in range(8, 12) ),
            *( (x, 2) for x in range(7, 13) ),
            *( (x, 3) for x in range(6, 13) ),
            *( (x, 4) for x in range(6, 12) ),
            *( (x, 5) for x in range(7, 11) ),
            (8, 6), (9, 6),
        },
        # 锹头为居中的六边铲面，不再偏向一侧。
        "shovel": {
            (9, 1), (10, 1), (8, 2), (9, 2), (10, 2), (11, 2),
            *( (x, 3) for x in range(7, 13) ),
            *( (x, 4) for x in range(7, 13) ),
            (8, 5), (9, 5), (10, 5), (11, 5), (9, 6), (10, 6),
        },
        # 锄刃为水平直刃，右端等宽下折，中央接柄。
        "hoe": {
            *( (x, 2) for x in range(5, 13) ),
            *( (x, 3) for x in range(5, 14) ),
            (8, 4), (9, 4), (12, 4), (13, 4), (8, 5), (9, 5), (12, 5), (13, 5),
        },
    }
    return shapes[kind]


def straight_handle(px):
    """固定 45°、每级恰好移动一格的双像素木柄。"""
    base, hi, lo = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
    for step in range(7):
        x, y = 2 + step, 13 - step
        px[x, y] = hi
        px[x + 1, y] = base if step < 6 else lo


def material_details(px, pts, material, palette):
    """仅改头部内部纹理，不触碰统一外轮廓。"""
    ordered = sorted(pts, key=lambda p: (p[1], p[0]))
    if material == "wooden":
        picks = ordered[4::7]
    elif material == "stone":
        picks = ordered[2::6]
    elif material == "iron":
        picks = [p for p in ordered if p[1] <= 2 and (p[0] + p[1]) % 2 == 0]
    else:
        picks = ordered[1::5]
    for index, point in enumerate(picks):
        px[point] = hx(palette[1] if index % 2 == 0 else palette[2])


def make_tool(kind, material, classic=False):
    im, px = blank()
    palette = (CLASSIC_TOOL_PALETTES if classic else TOOL_PALETTES)[material]
    outline = OUTLINE if material == "wooden" else OUTLINE_STONE
    if kind == "sword":
        # 刀身轮廓同样按材质单独锻造，不从木剑复制。
        blade = {(12, 1), (13, 1), (11, 2), (12, 2), (13, 2), (10, 3), (11, 3), (12, 3),
                 (9, 4), (10, 4), (11, 4), (8, 5), (9, 5), (10, 5), (7, 6), (8, 6), (9, 6), (7, 7), (8, 7)}
        shade_head(px, blade, *palette)
        for x, y in [(13, 1), (12, 2), (11, 3), (10, 4), (9, 5), (8, 6)]:
            if (x, y) in blade: px[x, y] = hx(palette[1])
        hb, hh, hl = hx(HANDLE), hx(HANDLE_HI), hx(HANDLE_LO)
        for x in range(5, 10): px[x, 8] = hb
        px[5, 8], px[9, 8] = hl, hl
        for x, y in [(6, 9), (5, 10), (4, 11)]: px[x, y] = hb
        px[7, 9], px[3, 12] = hh, hl
    else:
        straight_handle(px)
        head = tool_head(kind)
        shade_head(px, head, *palette)
        material_details(px, head, material, palette)
    add_outline(px, outline)
    return im


def classicize(image):
    """非工具物品的经典包：压低饱和/亮度但保留逐像素边界。"""
    out = image.copy()
    px = out.load()
    for y in range(S):
        for x in range(S):
            r, g, b, a = px[x, y]
            if a:
                avg = (r + g + b) / 3
                px[x, y] = (int(r * .82 + avg * .12), int(g * .82 + avg * .12), int(b * .82 + avg * .12), a)
    return out


def main():
    os.makedirs(ICON, exist_ok=True)
    os.makedirs(ICON_CLASSIC, exist_ok=True)
    vivid = {
        "stick": make_stick(), "coal": make_coal(), "torch": make_torch(),
        "gunpowder": make_gunpowder(), "flint_and_steel": make_flint_and_steel(),
        "nether_quartz": make_nether_quartz(), "iron_ingot": make_ingot(WOOD_TO_IRON),
        "diamond": make_diamond(),
    }
    for material in ("wooden", "stone", "iron", "diamond"):
        for kind in ("pickaxe", "axe", "shovel", "sword", "hoe"):
            vivid[f"{material}_{kind}"] = make_tool(kind, material)
    for name, image in vivid.items():
        image.save(os.path.join(ICON, f"{name}.png"), optimize=True)
        prefix, _, suffix = name.partition("_")
        classic = make_tool(suffix, prefix, True) if prefix in TOOL_PALETTES and suffix in ("pickaxe", "axe", "shovel", "sword", "hoe") else classicize(image)
        classic.save(os.path.join(ICON_CLASSIC, f"{name}.png"), optimize=True)
    # 8× 放大总览用于人工检查：每个源像素仍是完整方块，不做平滑缩放。
    preview = Image.new("RGBA", (5 * S * 8, 4 * S * 8), (28, 28, 32, 255))
    for row, material in enumerate(("wooden", "stone", "iron", "diamond")):
        for col, kind in enumerate(("pickaxe", "axe", "shovel", "sword", "hoe")):
            preview.paste(vivid[f"{material}_{kind}"].resize((S * 8, S * 8), Image.Resampling.NEAREST), (col * S * 8, row * S * 8))
    preview.save(os.path.join(os.path.dirname(__file__), "_tools_preview.png"), optimize=True)
    print(f"wrote {len(vivid)} independently drawn item icons to both texture packs")


if __name__ == "__main__":
    main()
