#!/usr/bin/env python3
"""Draw deterministic 64x64 box-model skins for every MINEWORLD mob.

The UV layout matches src/render/mobTextures.ts. Every face is authored on the
integer pixel grid with compact palettes and no antialiasing or borrowed assets.
"""

import os
import random
from PIL import Image, ImageDraw

SIZE = 64
OUT = os.path.join(os.path.dirname(__file__), "..", "..", "public", "textures", "mobs")
PARTS = {
    "head": (0, 0, 8, 8, 8),
    "snout": (32, 0, 4, 3, 6),
    "animalBody": (0, 16, 12, 8, 8),
    "humanBody": (0, 16, 4, 12, 8),
    "leg": (0, 36, 4, 12, 4),
    "arm": (16, 36, 4, 12, 4),
    "wing": (32, 16, 8, 6, 2),
    "tail": (32, 36, 2, 8, 2),
}
FACES = ("right", "front", "left", "back", "top", "bottom")
FACE_SHADE = {"top": 1.10, "bottom": 0.62, "right": 0.98, "front": 0.90, "left": 0.78, "back": 0.84}


def rgb(value):
    value = value.lstrip("#")
    return tuple(int(value[i:i + 2], 16) for i in (0, 2, 4)) + (255,)


def shade(value, amount):
    r, g, b, _ = rgb(value)
    return (max(0, min(255, round(r * amount))), max(0, min(255, round(g * amount))), max(0, min(255, round(b * amount))), 255)


def face_rect(part_name, face):
    u, v, x, y, z = PARTS[part_name]
    return {
        "top": (u + z, v, x, z),
        "bottom": (u + z + x, v, x, z),
        "right": (u, v + z, z, y),
        "front": (u + z, v + z, x, y),
        "left": (u + z + x, v + z, z, y),
        "back": (u + z + x + z, v + z, x, y),
    }[face]


def fill_rect(draw, rect, color):
    x, y, w, h = rect
    draw.rectangle((x, y, x + w - 1, y + h - 1), fill=color)


def paint_box(image, part, base, accent, seed):
    draw = ImageDraw.Draw(image)
    rng = random.Random(seed)
    for face in FACES:
        x, y, w, h = face_rect(part, face)
        fill_rect(draw, (x, y, w, h), shade(base, FACE_SHADE[face]))
        for _ in range(max(2, (w * h) // 11)):
            draw.point((x + rng.randrange(w), y + rng.randrange(h)), fill=shade(accent, FACE_SHADE[face]))


def face_pixels(image, part, face, color, points):
    draw = ImageDraw.Draw(image)
    x0, y0, _, _ = face_rect(part, face)
    for point in points:
        x, y, *size = point
        w, h = size if size else (1, 1)
        draw.rectangle((x0 + x, y0 + y, x0 + x + w - 1, y0 + y + h - 1), fill=rgb(color))


def paint_animal(image, kind):
    palettes = {
        "pig": ("#e7a39d", "#d98e8b", "#dc9692"),
        "cow": ("#554033", "#382b23", "#4c382c"),
        "sheep": ("#4a433d", "#625950", "#ece9e1"),
        "chicken": ("#f1f1ef", "#d9d9d6", "#d99020"),
        "rabbit": ("#9c7656", "#75543b", "#8b6549"),
    }
    base, accent, leg = palettes[kind]
    paint_box(image, "head", base, accent, 10 + len(kind))
    body_base = "#ece9e1" if kind == "sheep" else base
    paint_box(image, "animalBody", body_base, accent, 20 + len(kind))
    paint_box(image, "leg", leg, accent, 30 + len(kind))
    paint_box(image, "tail", body_base, accent, 40 + len(kind))
    if kind in ("pig", "cow"):
        snout = "#d88b8b" if kind == "pig" else "#b9a28e"
        paint_box(image, "snout", snout, accent, 50 + len(kind))
        face_pixels(image, "snout", "right", "#65434a" if kind == "pig" else "#493833", [(1, 1), (4, 1)])
    if kind == "chicken":
        paint_box(image, "wing", "#f7f7f5", "#d4d4d0", 66)
    eye_y = 3 if kind == "sheep" else 2
    face_pixels(image, "head", "right", "#171717", [(1, eye_y, 2, 2), (5, eye_y, 2, 2)])
    if kind == "cow":
        for face in ("right", "front", "left", "back", "top"):
            face_pixels(image, "animalBody", face, "#e7ddcd", [(1, 1, 3, 3), (7, 5, 3, 2)])
    elif kind == "sheep":
        for face in ("right", "front", "left", "back", "top"):
            face_pixels(image, "animalBody", face, "#faf8f2", [(0, 0, 2, 2), (4, 3, 2, 2), (8, 1, 2, 2)])
    elif kind == "rabbit":
        face_pixels(image, "head", "right", "#f1ded2", [(2, 5, 4, 2)])


def paint_humanoid(image, kind):
    if kind == "skeleton":
        for part, seed in (("head", 71), ("humanBody", 72), ("arm", 73), ("leg", 74)):
            paint_box(image, part, "#dcdcd0", "#a6a69a", seed)
        face_pixels(image, "head", "right", "#1b1b1b", [(1, 2, 2, 2), (5, 2, 2, 2)])
        face_pixels(image, "head", "right", "#77776d", [(3, 4, 2, 1), (1, 6, 6, 1)])
        face_pixels(image, "humanBody", "right", "#85857a", [(1, 2, 2, 1), (1, 5, 2, 1), (1, 8, 2, 1)])
        return
    husk = kind == "husk"
    skin = "#b29a5e" if husk else "#568746"
    skin_dark = "#8f783f" if husk else "#3f6e37"
    shirt = "#b9a66d" if husk else "#2f6a69"
    shirt_dark = "#8c7645" if husk else "#244f50"
    pants = "#66542e" if husk else "#2d3158"
    paint_box(image, "head", skin, skin_dark, 61 if not husk else 67)
    paint_box(image, "humanBody", shirt, shirt_dark, 62 if not husk else 68)
    paint_box(image, "arm", shirt, skin, 63 if not husk else 69)
    paint_box(image, "leg", pants, "#222544" if not husk else "#493b21", 64 if not husk else 70)
    face_pixels(image, "head", "right", "#242022", [(1, 2, 2, 1), (5, 2, 2, 1)])
    face_pixels(image, "head", "right", skin_dark, [(2, 6, 4, 1)])
    face_pixels(image, "humanBody", "right", skin_dark, [(0, 8, 2, 3), (2, 11, 2, 1)])
    for face in ("right", "front", "left", "back"):
        face_pixels(image, "arm", face, skin, [(0, 8, 4, 4)])


def paint_creeper(image):
    paint_box(image, "head", "#5d9f43", "#34702a", 81)
    paint_box(image, "humanBody", "#5a9840", "#3d762e", 82)
    paint_box(image, "leg", "#4d8937", "#326628", 83)
    face_pixels(image, "head", "right", "#101010", [(1, 2, 2, 2), (5, 2, 2, 2), (3, 4, 2, 2), (2, 6, 2, 2), (4, 6, 2, 2)])


def paint_spider(image):
    paint_box(image, "head", "#3c2924", "#231817", 91)
    paint_box(image, "animalBody", "#34231f", "#1f1514", 92)
    paint_box(image, "leg", "#2c1d1b", "#171010", 93)
    face_pixels(image, "head", "right", "#df3028", [(0, 2), (2, 1), (5, 1), (7, 2), (1, 4), (3, 3), (4, 3), (6, 4)])


def make_skin(kind):
    image = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    if kind in ("pig", "cow", "sheep", "chicken", "rabbit"):
        paint_animal(image, kind)
    elif kind in ("zombie", "skeleton", "husk"):
        paint_humanoid(image, kind)
    elif kind == "creeper":
        paint_creeper(image)
    else:
        paint_spider(image)
    return image


def main():
    os.makedirs(OUT, exist_ok=True)
    kinds = ("pig", "cow", "sheep", "chicken", "rabbit", "zombie", "skeleton", "creeper", "husk", "spider")
    for kind in kinds:
        make_skin(kind).save(os.path.join(OUT, f"{kind}.png"), optimize=True)
    print(f"wrote {len(kinds)} mob skins -> public/textures/mobs/")


if __name__ == "__main__":
    main()
