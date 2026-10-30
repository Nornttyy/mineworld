#!/usr/bin/env python3
"""Adapt selected, hash-verified Java 26.3 resources to Mineworld's existing IDs.

Usage: python import_java_assets.py /path/to/26.3-client.jar
Only compatible textures are imported. No executable game classes are copied.
The generator keeps the renderer's atlas indices and old save block IDs stable.
"""
import hashlib
import io
import json
import sys
from pathlib import Path
from zipfile import ZipFile
from PIL import Image, ImageChops
import gen_classic as layout

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'public/textures'
EXPECTED_SHA1 = 'e877b6a07acd633fb3bb475002175cec036e7b87'
jar = Path(sys.argv[1])
assert hashlib.sha1(jar.read_bytes()).hexdigest() == EXPECTED_SHA1, 'Client SHA-1 mismatch'
z = ZipFile(jar)
records = []

def read_image(path):
    data = z.read('assets/minecraft/' + path)
    records.append({'source': path, 'sha1': hashlib.sha1(data).hexdigest()})
    return Image.open(io.BytesIO(data)).convert('RGBA')

def block(name):
    im = read_image(f'textures/block/{name}.png')
    return im.crop((0, 0, im.width, im.width))

def tint(im, rgb):
    out = ImageChops.multiply(im, Image.new('RGBA', im.size, (*rgb, 255)))
    out.putalpha(im.getchannel('A'))
    return out

aliases = {
    'grass_top': 'grass_block_top', 'grass_side': 'grass_block_side',
    'oak_log_side': 'oak_log', 'birch_log_side': 'birch_log',
    'water': 'water_still', 'lava': 'lava_still', 'grass_plant': 'short_grass',
    'cactus': 'cactus_side', 'sandstone': 'sandstone', 'quartz_block': 'quartz_block_side',
}
grass_tint = read_image('textures/colormap/grass.png').getpixel((51, 173))[:3]
leaf_tint = read_image('textures/colormap/foliage.png').getpixel((51, 173))[:3]
tints = {'grass_top': grass_tint, 'grass_plant': grass_tint, 'fern': grass_tint, 'oak_leaves': leaf_tint,
         'spruce_leaves': (97, 153, 97), 'birch_leaves': (128, 167, 85), 'water': (63, 118, 228)}
tiles = {}
for name in layout.ATLAS_ORDER:
    im = block(aliases.get(name, name))
    if name in tints: im = tint(im, tints[name])
    if name == 'grass_side':
        im.alpha_composite(tint(block('grass_block_side_overlay'), grass_tint))
    tiles[name] = im
    # Standalone tile files serve break particles and menu surfaces, too.
    im.save(OUT / 'blocks' / f'{name}.png')
layout.build_atlas(tiles).save(OUT / 'atlas_classic.png', optimize=True)

# Both texture packs share block-face indices. Fill the last two formerly empty
# slots (46/47) in the legacy fallback too; otherwise switching packs hides the
# furnace's top/sides. Preserve existing tiles and append modern terrain faces.
fallback_path = OUT / 'atlas.png'
if fallback_path.exists():
    fallback = Image.open(fallback_path).convert('RGBA')
    expanded = Image.new('RGBA', (64, ((len(layout.ATLAS_ORDER) + 3) // 4) * 16), (0,0,0,0))
    expanded.paste(fallback, (0,0))
    fallback = expanded
    for name in ['furnace_front', 'furnace_top', 'furnace_side'] + layout.MODERN_TILES + layout.VEGETATION_TILES + layout.ORE_VEIN_TILES:
        index = layout.ATLAS_ORDER.index(name)
        fallback.paste(tiles[name], ((index % 4) * 16, (index // 4) * 16))
    fallback.save(fallback_path, optimize=True)

icons = OUT / 'icons_classic'
icons.mkdir(exist_ok=True)
for name, (top, side) in layout.ICON_FACES.items():
    if name == 'furnace' and (icons / 'furnace.png').exists(): continue
    front = 'furnace_front' if name == 'furnace' else side
    layout.source.iso_icon(tiles[top], tiles[side], tiles[front]).save(icons / f'{name}.png')
legacy_icons = OUT / 'icons'
legacy_icons.mkdir(exist_ok=True)
if not (legacy_icons / 'furnace.png').exists():
    layout.source.iso_icon(tiles['furnace_top'], tiles['furnace_side'], tiles['furnace_front']).save(legacy_icons / 'furnace.png')
for name in ['deepslate', 'cobbled_deepslate', 'tuff', 'calcite', 'snow_block', 'packed_ice', 'terracotta', 'white_terracotta', 'orange_terracotta', 'magenta_terracotta', 'light_blue_terracotta', 'yellow_terracotta', 'lime_terracotta', 'pink_terracotta', 'gray_terracotta', 'light_gray_terracotta', 'cyan_terracotta', 'purple_terracotta', 'blue_terracotta', 'brown_terracotta', 'green_terracotta', 'red_terracotta', 'black_terracotta', 'coarse_dirt', 'podzol', 'mycelium', 'mud', 'red_sandstone', 'powder_snow', 'cinnabar', 'sulfur', 'gold_ore', 'deepslate_coal_ore', 'deepslate_iron_ore', 'deepslate_gold_ore', 'deepslate_diamond_ore']:
    top, side = layout.ICON_FACES[name]
    layout.source.iso_icon(tiles[top], tiles[side], tiles[side]).save(legacy_icons / f'{name}.png')
for name, original in [('grass_plant', 'short_grass'), ('tall_grass', 'tall_grass_top')]:
    tint(block(original), grass_tint).save(icons / f'{name}.png')

for name in layout.ORE_VEIN_TILES:
    layout.source.iso_icon(tiles[name], tiles[name], tiles[name]).save(legacy_icons / f'{name}.png')
for name in ['raw_copper', 'copper_ingot']:
    im = read_image(f'textures/item/{name}.png')
    im.save(icons / f'{name}.png')
    im.save(legacy_icons / f'{name}.png')

for name in layout.VEGETATION_TILES:
    tiles[name].save(icons / f'{name}.png')
    tiles[name].save(legacy_icons / f'{name}.png')

item_aliases = {'raw_porkchop': 'porkchop', 'raw_beef': 'beef', 'raw_chicken': 'chicken',
                'raw_mutton': 'mutton', 'nether_quartz': 'quartz'}
item_count = 0
for p in sorted(icons.glob('*.png')):
    name = item_aliases.get(p.stem, p.stem)
    # Leather icons already include their default dye and overlay; the raw base
    # texture alone is not a complete item sprite. Preserve those adapted icons.
    if name.startswith('leather_'): continue
    entry = f'assets/minecraft/textures/item/{name}.png'
    if entry in z.namelist():
        p.write_bytes(z.read(entry))
        records.append({'source': entry.removeprefix('assets/minecraft/'), 'sha1': hashlib.sha1(z.read(entry)).hexdigest()})
        item_count += 1
block('torch').save(OUT / 'torch_block.png')
block('torch').save(icons / 'torch.png')

# Java's water_still has 32 frames, two ticks (100 ms) each.
water = read_image('textures/block/water_still.png')
frames = water.height // water.width
for i in range(frames):
    frame = water.crop((0, i * water.width, water.width, (i + 1) * water.width))
    # Alpha is applied by the material, so do not multiply the source alpha twice.
    frame = tint(frame, tints['water'])
    frame.putalpha(255)
    frame.save(OUT / 'blocks' / f'water_{i}.png')

previous_path = OUT / 'java-resource-provenance.json'
previous = json.loads(previous_path.read_text()) if previous_path.exists() else {}
provenance = {
    'target': 'Minecraft Java 26.3', 'client_sha1': EXPECTED_SHA1,
    'source': 'Official Mojang version manifest client download',
    'copyright': 'Minecraft game textures © Mojang AB / Microsoft. Not original Mineworld artwork.',
    'adaptations': ['Atlas packing preserves existing block IDs', 'Static representative grass and foliage tint',
                    'Inventory cubes projected from face textures', 'Water frames tinted for current renderer',
                    'Furnace atlas cells 46/47 hold official top/side; fallback atlas receives same furnace pixels',
                    'Furnace icon projects one front and one side from official face textures'],
    'known_limits': ['Biome tint is not yet sampled per biome', 'Some blocks still use simplified cube models',
                     'Furnace opening is fixed north (-Z); per-block orientation and lit-front states are not implemented'],
    'files': list({r['source']: r for r in previous.get('files', []) + records}.values()),
}
provenance['adaptations'] = list(dict.fromkeys(previous.get('adaptations', []) + provenance['adaptations'] + ['Append copper ore and raw-metal blocks in slots 102..104; expand both atlases to 4x27']))
(OUT / 'java-resource-provenance.json').write_text(json.dumps(provenance, ensure_ascii=False, indent=2) + '\n')
print(f'Imported {len(tiles)} block faces, {item_count} item sprites, {frames} water frames.')

# Refresh the neutral world leaf atlas and destroy stages after every atlas import.
import subprocess
subprocess.run([sys.executable, str(Path(__file__).with_name("import_java_effects.py")), str(jar)], check=True)
