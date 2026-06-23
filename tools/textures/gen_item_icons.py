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


def main():
    os.makedirs(ICON, exist_ok=True)
    # 先把用户手绘工具图案居中（石质换色、手持、物品栏都基于居中后的图标）
    for n in ["wooden_pickaxe", "wooden_sword", "wooden_axe", "wooden_shovel", "stick"]:
        center_png(n)
    # 基础(脚本生成的)先存盘，供下面 recolor 读取
    base = {"coal": make_coal(), "wooden_hoe": make_hoe(False), "torch": make_torch()}  # stick 由用户手绘，不在此生成
    for name, im in base.items():
        im.save(os.path.join(ICON, f"{name}.png"))
    # 石质=整体换石、铁质=整体换银(都从木质换色)，加铁锭
    out = {
        "stone_pickaxe": recolor("wooden_pickaxe", WOOD_TO_STONE),
        "stone_axe": recolor("wooden_axe", WOOD_TO_STONE),
        "stone_shovel": recolor("wooden_shovel", WOOD_TO_STONE),
        "stone_sword": recolor("wooden_sword", WOOD_TO_STONE),
        "stone_hoe": recolor("wooden_hoe", WOOD_TO_STONE),
        "iron_pickaxe": recolor("wooden_pickaxe", WOOD_TO_IRON),
        "iron_axe": recolor("wooden_axe", WOOD_TO_IRON),
        "iron_shovel": recolor("wooden_shovel", WOOD_TO_IRON),
        "iron_sword": recolor("wooden_sword", WOOD_TO_IRON),
        "iron_hoe": recolor("wooden_hoe", WOOD_TO_IRON),
        "iron_ingot": make_ingot(WOOD_TO_IRON),
    }
    for name, im in out.items():
        im.save(os.path.join(ICON, f"{name}.png"))
    print(f"wrote {len(base) + len(out)} item icons (石/铁工具+铁锭)")


if __name__ == "__main__":
    main()
