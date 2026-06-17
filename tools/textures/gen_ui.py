#!/usr/bin/env python3
"""HUD 图标：红心(满/半/空)、饥饿鸡腿(满/半/空)、苹果物品图标。像素风、确定性。
独立于 gen_textures.py，避免和方块贴图生成搅在一起。"""
import os, math
from PIL import Image

UI = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "ui")
ICON = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "icons")

def hx(s):
    s = s.lstrip("#"); return (int(s[0:2],16), int(s[2:4],16), int(s[4:6],16), 255)

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
DRUM = [
    "..XXXX...",
    ".XXXXXX..",
    ".XXXXXXX.",
    ".XXXXXXX.",
    "..XXXXXX.",
    "...XXXb..",
    "....Xbb..",
    ".....bb..",
    "......b..",
]

def sprite(mask, fill, variant, outline="#1a1a1a", empty="#3a3a3a"):
    """variant: 'full' | 'half' | 'empty'. fill: dict char->hex. half = 左半填充、右半空。"""
    w = len(mask[0]); h = len(mask)
    im = Image.new("RGBA", (w, h), (0,0,0,0)); px = im.load()
    shape = set()
    for y,row in enumerate(mask):
        for x,ch in enumerate(row):
            if ch != ".":
                shape.add((x,y))
                if variant == "empty" or (variant == "half" and x > w//2):
                    px[x,y] = hx(empty)
                else:
                    px[x,y] = hx(fill[ch])
    ol = hx(outline)
    for (x,y) in list(shape):  # 1px 黑描边（按整体轮廓，三种变体对齐）
        for dx in (-1,0,1):
            for dy in (-1,0,1):
                nx,ny = x+dx, y+dy
                if 0<=nx<w and 0<=ny<h and (nx,ny) not in shape and px[nx,ny][3]==0:
                    px[nx,ny] = ol
    return im

def apple():
    S=16; im=Image.new("RGBA",(S,S),(0,0,0,0)); px=im.load()
    cx,cy,r = 7.3, 9.3, 5.4
    base,hi,lo,line = hx("#c0211f"), hx("#e8463a"), hx("#8e1714"), hx("#5c0f0d")
    for y in range(S):
        for x in range(S):
            d=math.hypot(x-cx,y-cy)
            if d<=r:
                if d>r-1.0: px[x,y]=line
                elif (x-cx)+(y-cy) < -2.2: px[x,y]=hi
                elif (x-cx)+(y-cy) > 2.6: px[x,y]=lo
                else: px[x,y]=base
    for y in range(2,6):  # 棕色果柄
        px[8,y]=hx("#6b3f1d")
    for (lx,ly) in [(9,3),(10,3),(10,4),(11,4)]:  # 绿叶
        px[lx,ly]=hx("#4e9e34")
    px[5,6]=hx("#f2a39a")  # 高光点
    return im

os.makedirs(UI, exist_ok=True); os.makedirs(ICON, exist_ok=True)
HEART_FILL={"X":"#ff2a2a"}
DRUM_FILL={"X":"#c46a30","b":"#efe0c0"}
for v in ("full","half","empty"):
    sprite(HEART, HEART_FILL, v).save(os.path.join(UI, f"heart_{v}.png"))
    sprite(DRUM, DRUM_FILL, v).save(os.path.join(UI, f"food_{v}.png"))
apple().save(os.path.join(ICON, "apple.png"))
print("wrote 6 hud sprites ->", UI)
print("wrote apple.png ->", ICON)
