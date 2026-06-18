#!/usr/bin/env python3
"""程序生成生物掉落物的 16x16 平面像素图标(生/熟肉、皮革、羊毛、羽毛、蛋)。
独立于 gen_textures.py(避免和并发改动撞)。输出 public/textures/icons/<name>.png。"""
import os
from PIL import Image, ImageDraw

S = 16
OUT = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "icons")
os.makedirs(OUT, exist_ok=True)


def new():
    return Image.new("RGBA", (S, S), (0, 0, 0, 0))


def shade(im, dark=(0, 0, 0, 60), light=(255, 255, 255, 70)):
    """给非透明像素加：底/右描暗边、顶/左点高光，弄出一点立体。"""
    px = im.load()
    out = im.copy()
    o = out.load()
    for y in range(S):
        for x in range(S):
            if px[x, y][3] == 0:
                continue
            # 边缘(邻空)→ 暗描边
            edge = any(
                0 <= x + dx < S and 0 <= y + dy < S and px[x + dx, y + dy][3] == 0
                for dx, dy in ((1, 0), (0, 1))
            )
            if edge:
                r, g, b, a = px[x, y]
                o[x, y] = (max(0, r - 45), max(0, g - 45), max(0, b - 45), a)
    # 顶左高光
    for y in range(S):
        for x in range(S):
            if px[x, y][3] and (x == 0 or px[x - 1, y][3] == 0 or y == 0 or px[x, y - 1][3] == 0):
                r, g, b, a = o[x, y]
                o[x, y] = (min(255, r + 30), min(255, g + 30), min(255, b + 30), a)
    return out


def meat(body, bone=True):
    im = new()
    d = ImageDraw.Draw(im)
    d.ellipse([3, 5, 13, 14], fill=body)  # 肉块
    d.ellipse([5, 4, 11, 11], fill=body)
    if bone:
        d.rectangle([3, 3, 6, 6], fill=(238, 230, 214, 255))  # 骨头
        d.ellipse([2, 2, 5, 5], fill=(245, 240, 228, 255))
    return shade(im)


def drumstick(meatcol):
    im = new()
    d = ImageDraw.Draw(im)
    d.line([4, 12, 9, 7], fill=(238, 230, 214, 255), width=2)  # 骨
    d.ellipse([2, 10, 6, 14], fill=(245, 240, 228, 255))  # 骨头球
    d.ellipse([7, 3, 14, 11], fill=meatcol)  # 肉
    return shade(im)


def square(col, accents):
    im = new()
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([2, 3, 13, 13], radius=2, fill=col)
    a = im.load()
    for (x, y, c) in accents:
        if a[x, y][3]:
            ImageDraw.Draw(im).point((x, y), fill=c)
    return shade(im)


def feather():
    im = new()
    d = ImageDraw.Draw(im)
    # 羽片(叶形, 略斜) + 中间羽轴 + 下方羽柄
    d.polygon([(9, 2), (12, 6), (11, 11), (8, 14), (6, 10), (6, 6)], fill=(246, 246, 249, 255))
    d.polygon([(9, 2), (12, 6), (11, 11), (9, 13)], fill=(232, 232, 238, 255))  # 右半略暗
    d.line([9, 2, 7, 14], fill=(195, 195, 202, 255), width=1)  # 羽轴
    d.line([6, 14, 7, 12], fill=(176, 176, 184, 255), width=1)  # 羽柄
    return shade(im)


def egg():
    im = new()
    d = ImageDraw.Draw(im)
    d.ellipse([5, 3, 11, 13], fill=(244, 236, 220, 255))  # 蛋身(上窄下圆)
    d.ellipse([4, 6, 12, 14], fill=(244, 236, 220, 255))
    px = im.load()
    for (x, y) in [(7, 7), (9, 9), (8, 11), (6, 9)]:
        if px[x, y][3]:
            d.point((x, y), fill=(228, 218, 198, 255))  # 斑点
    return shade(im)


def rotten():
    im = new()
    d = ImageDraw.Draw(im)
    d.ellipse([3, 5, 13, 14], fill=(150, 116, 96, 255))  # 烂肉块
    d.ellipse([5, 4, 12, 11], fill=(150, 116, 96, 255))
    px = im.load()
    for (x, y) in [(6, 7), (9, 9), (7, 11), (10, 6), (8, 8)]:
        if px[x, y][3]:
            d.point((x, y), fill=(112, 124, 78, 255))  # 发霉绿点
    return shade(im)


def bone_icon():
    im = new()
    d = ImageDraw.Draw(im)
    col = (238, 236, 226, 255)
    d.line([5, 12, 11, 4], fill=col, width=3)  # 骨干(斜)
    d.ellipse([2, 11, 6, 15], fill=col)  # 下端两瓣
    d.ellipse([4, 12, 7, 15], fill=col)
    d.ellipse([10, 1, 14, 5], fill=col)  # 上端两瓣
    d.ellipse([9, 2, 12, 5], fill=col)
    return shade(im)


ICONS = {
    "raw_porkchop": meat((224, 132, 132, 255)),
    "cooked_porkchop": meat((176, 112, 64, 255)),
    "raw_beef": meat((201, 74, 74, 255)),
    "cooked_beef": meat((138, 85, 53, 255)),
    "raw_mutton": meat((216, 122, 122, 255)),
    "cooked_mutton": meat((154, 94, 62, 255)),
    "raw_chicken": meat((231, 184, 176, 255)),
    "cooked_chicken": drumstick((200, 138, 70, 255)),
    "leather": square((154, 107, 63, 255), [(5, 6, (120, 82, 46, 255)), (10, 9, (120, 82, 46, 255)), (7, 11, (120, 82, 46, 255))]),
    "wool": square((240, 240, 240, 255), [(5, 5, (220, 220, 220, 255)), (9, 6, (220, 220, 220, 255)), (7, 9, (224, 224, 224, 255)), (11, 10, (220, 220, 220, 255))]),
    "feather": feather(),
    "egg": egg(),
    "rotten_flesh": rotten(),
    "bone": bone_icon(),
}

for name, im in ICONS.items():
    im.save(os.path.join(OUT, name + ".png"))
print(f"wrote {len(ICONS)} mob-drop icons -> public/textures/icons/")
