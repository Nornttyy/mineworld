#!/usr/bin/env python3
"""HUD 图标：红心(满/半/空)、饥饿鸡腿(满/半/空)、苹果物品图标。像素风、确定性。
独立于 gen_textures.py。红心/鸡腿带高光+暗部，更接近真 MC。"""
import os, math
from PIL import Image

UI = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "ui")
ICON = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "icons")
S = 16


def hx(s):
    s = s.lstrip("#")
    return (int(s[0:2], 16), int(s[2:4], 16), int(s[4:6], 16), 255)


# 形状用字符网格；fills=字符→底色；hilo=指定格→高光/暗部色（覆盖底色）。
# variant: full=正常着色；half=空一半；empty=整体暗灰容器。三者轮廓一致以对齐。
# half_empty_side: 半图标哪半画空。红心在左侧条(右半空=左半留)；鸡腿在右侧 row-reverse
#   镜像条，需左半空=右半留，否则半鸡腿的肉朝向与 MC 相反（看着"左右反了"）。
def icon(shape, fills, hilo, variant, outline="#20120c", empty="#3a3a3a", half_empty_side="right"):
    w = len(shape[0])
    h = len(shape)
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    px = im.load()
    sh = set()
    for y, row in enumerate(shape):
        for x, ch in enumerate(row):
            if ch == ".":
                continue
            sh.add((x, y))
            half_empty = variant == "half" and (
                (half_empty_side == "right" and x > w // 2)
                or (half_empty_side == "left" and x < w // 2)
            )
            if variant == "empty" or half_empty:
                px[x, y] = hx(empty)
            elif (x, y) in hilo:
                px[x, y] = hx(hilo[(x, y)])
            else:
                px[x, y] = hx(fills[ch])
    ol = hx(outline)
    for (x, y) in list(sh):  # 1px 描边
        for dx in (-1, 0, 1):
            for dy in (-1, 0, 1):
                nx, ny = x + dx, y + dy
                if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in sh and px[nx, ny][3] == 0:
                    px[nx, ny] = ol
    return im


HEART = [
    ".XX...XX.",
    "XXXX.XXXX",
    "XXXXXXXXX",
    "XXXXXXXXX",
    ".XXXXXXX.",
    "..XXXXX..",
    "...XXX...",
    "....X....",
    ".........",
]
HEART_FILL = {"X": "#ec3b3b"}
HEART_HILO = {
    (1, 1): "#ff8a8a", (2, 1): "#ff8a8a", (1, 2): "#ff8a8a", (2, 2): "#ff6e6e",  # 左上高光
    (3, 6): "#a8232a", (4, 6): "#a8232a", (5, 6): "#a8232a", (4, 7): "#8f1c22",  # 底部暗
}

DRUM = [
    "...MMM...",
    "..MMMMM..",
    ".MMMMMMM.",
    ".MMMMMMM.",
    ".MMMMMMM.",
    "..MMMM...",
    "..bMMM...",
    ".bb......",
    "b........",
]
DRUM_FILL = {"M": "#c87f43", "b": "#f0e6cd"}
DRUM_HILO = {
    (3, 1): "#dd9a5e", (4, 1): "#dd9a5e", (2, 2): "#dd9a5e", (3, 2): "#dd9a5e",  # 肉的高光
    (3, 5): "#9c6232", (4, 5): "#9c6232", (3, 6): "#9c6232", (4, 6): "#9c6232",  # 肉的暗部
    (1, 8): "#cdbf9c",  # 骨头暗
}


def apple():
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    px = im.load()
    cx, cy, r = 7.3, 9.3, 5.4
    base, hi, lo, line = hx("#c0211f"), hx("#e8463a"), hx("#8e1714"), hx("#5c0f0d")
    for y in range(S):
        for x in range(S):
            d = math.hypot(x - cx, y - cy)
            if d <= r:
                if d > r - 1.0:
                    px[x, y] = line
                elif (x - cx) + (y - cy) < -2.2:
                    px[x, y] = hi
                elif (x - cx) + (y - cy) > 2.6:
                    px[x, y] = lo
                else:
                    px[x, y] = base
    for y in range(2, 6):
        px[8, y] = hx("#6b3f1d")  # 果柄
    for (lx, ly) in [(9, 3), (10, 3), (10, 4), (11, 4)]:
        px[lx, ly] = hx("#4e9e34")  # 绿叶
    px[5, 6] = hx("#f2a39a")  # 高光
    return im


def bubble(full):
    """氧气气泡：full=亮蓝带白高光，empty=暗蓝(已消耗)。"""
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    px = im.load()
    cx, cy, r = 7.5, 7.5, 5.5
    if full:
        base, hi, line = hx("#3aa6e8"), hx("#bfe9ff"), hx("#1d5f8f")
    else:
        base, hi, line = hx("#26485c"), hx("#3a7088"), hx("#19303f")
    for y in range(S):
        for x in range(S):
            d = math.hypot(x - cx, y - cy)
            if d <= r:
                if d > r - 1.1:
                    px[x, y] = line
                elif (x - cx) + (y - cy) < -2.2:
                    px[x, y] = hi
                else:
                    px[x, y] = base
    return im


os.makedirs(UI, exist_ok=True)
os.makedirs(ICON, exist_ok=True)
for v in ("full", "half", "empty"):
    icon(HEART, HEART_FILL, HEART_HILO, v).save(os.path.join(UI, f"heart_{v}.png"))
    icon(DRUM, DRUM_FILL, DRUM_HILO, v, half_empty_side="left").save(os.path.join(UI, f"food_{v}.png"))
apple().save(os.path.join(ICON, "apple.png"))
bubble(True).save(os.path.join(UI, "bubble_full.png"))
bubble(False).save(os.path.join(UI, "bubble_empty.png"))
print("wrote 6 hud sprites + apple.png + 2 bubbles")
