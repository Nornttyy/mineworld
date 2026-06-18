# 由卡通图集派生"经典"图集：降饱和 + 略压暗，得到经典闷色风。同一 tile 布局 → 运行时可直接换 map。
from PIL import Image
import os, colorsys
SRC = 'public/textures/atlas.png'
DST = 'public/textures/atlas_classic.png'
im = Image.open(SRC).convert('RGBA')
px = im.load()
W, H = im.size
for y in range(H):
    for x in range(W):
        r, g, b, a = px[x, y]
        if a == 0:
            continue
        h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
        s *= 0.5   # 降饱和 → 闷
        v *= 0.9   # 略压暗
        nr, ng, nb = colorsys.hsv_to_rgb(h, s, v)
        px[x, y] = (int(nr * 255), int(ng * 255), int(nb * 255), a)
im.save(DST)
print('wrote', DST, im.size)
