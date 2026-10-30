#!/usr/bin/env python3
"""Compile the official bitmap/Unihex glyphs used by this UI into web fonts.

Requires Pillow, fonttools[woff] and brotli. Inputs are the verified 26.3 client
and its official unifont.zip resource. The game font em is 9 logical pixels.
"""
import hashlib
import io
import json
import sys
from pathlib import Path
from zipfile import ZipFile
from PIL import Image
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.ttGlyphPen import TTGlyphPen

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'public/fonts'
jar = Path(sys.argv[1])
unifont = Path(sys.argv[2])
assert hashlib.sha1(jar.read_bytes()).hexdigest() == 'e877b6a07acd633fb3bb475002175cec036e7b87'
assert hashlib.sha1(unifont.read_bytes()).hexdigest() == 'ccd5ac4767ce0a9c71d1dd62f2dc25449789b5dd'
z = ZipFile(jar)

def compile_font(glyphs, family, filename, copyright_text):
    names = ['.notdef'] + [f'u{cp:05X}' for cp in sorted(glyphs)]
    font = FontBuilder(1152, isTTF=True)  # 9 px × 128 units
    font.setupGlyphOrder(names)
    font.setupCharacterMap({cp: f'u{cp:05X}' for cp in glyphs})
    outlines = {'.notdef': TTGlyphPen(None).glyph()}
    metrics = {'.notdef': (768, 0)}
    for cp, (pixels, unit, advance) in glyphs.items():
        pen = TTGlyphPen(None)
        for y, row in enumerate(pixels):
            x = 0
            while x < len(row):
                if not row[x]: x += 1; continue
                start = x
                while x < len(row) and row[x]: x += 1
                left, right = start * unit, x * unit
                top, bottom = 896 - y * unit, 896 - (y + 1) * unit
                pen.moveTo((left, bottom)); pen.lineTo((left, top))
                pen.lineTo((right, top)); pen.lineTo((right, bottom)); pen.closePath()
        name = f'u{cp:05X}'
        outlines[name] = pen.glyph()
        metrics[name] = (round(advance * 128), 0)
    font.setupGlyf(outlines)
    font.setupHorizontalMetrics(metrics)
    font.setupHorizontalHeader(ascent=896, descent=-256, lineGap=0)
    font.setupNameTable({'familyName': family, 'styleName': 'Regular',
                        'uniqueFontIdentifier': family + ' Java 26.3',
                        'fullName': family, 'psName': family.replace(' ', ''),
                        'version': 'Version 26.3', 'copyright': copyright_text})
    font.setupOS2(sTypoAscender=896, sTypoDescender=-256, sTypoLineGap=0,
                 usWinAscent=896, usWinDescent=256)
    font.setupPost()
    font.font.flavor = 'woff2'
    font.font.save(OUT / filename)
    print(f'{filename}: {len(glyphs)} glyphs')

providers = json.loads(z.read('assets/minecraft/font/include/default.json'))['providers']
latin = {32: ([], 128, 4)}
for provider in providers:
    if provider.get('type') != 'bitmap': continue
    rows = provider['chars']
    path = 'assets/minecraft/textures/' + provider['file'].split(':', 1)[1]
    im = Image.open(io.BytesIO(z.read(path))).convert('RGBA')
    cw, ch = im.width // len(rows[0]), im.height // len(rows)
    for y, row in enumerate(rows):
        for x, char in enumerate(row):
            cp = ord(char)
            if not (33 <= cp <= 255) or cp in latin: continue
            tile = im.crop((x*cw, y*ch, (x+1)*cw, (y+1)*ch))
            pixels = [[tile.getpixel((xx, yy))[3] > 127 for xx in range(cw)] for yy in range(ch)]
            right = max((xx for r in pixels for xx, px in enumerate(r) if px), default=0)
            latin[cp] = (pixels, 128, right + 2)
compile_font(latin, 'Minecraft Seven', 'minecraft-seven.woff2', 'Minecraft bitmap glyphs © Mojang AB / Microsoft')

needed = set()
for p in [ROOT / 'index.html', *ROOT.joinpath('src').rglob('*.ts')]:
    needed.update(ord(c) for c in p.read_text() if ord(c) > 255)
uz = ZipFile(unifont)
unicode = {}
for entry in uz.namelist():
    if not entry.endswith('.hex'): continue
    for line in uz.read(entry).decode().splitlines():
        code, bits = line.split(':', 1)
        cp = int(code, 16)
        if cp not in needed: continue
        width = len(bits) // 4
        stride = width // 4
        pixels = [[b == '1' for b in f'{int(bits[y*stride:(y+1)*stride],16):0{width}b}'] for y in range(16)]
        if 0x3000 <= cp <= 0x9fff: left, right = 0, 15
        else:
            columns = [x for r in pixels for x, p in enumerate(r) if p]
            left, right = min(columns, default=0), max(columns, default=width-1)
        pixels = [r[left:right+1] for r in pixels]
        unicode[cp] = (pixels, 64, (right-left+1)/2 + 1)
compile_font(unicode, 'Minecraft Unicode', 'minecraft-unicode.woff2', 'GNU Unifont contributors; bitmap source supplied by Minecraft Java 26.3')
for entry in uz.namelist():
    if 'license' in entry.lower() or 'copying' in entry.lower():
        (OUT / ('unifont-' + Path(entry).name)).write_bytes(uz.read(entry))
