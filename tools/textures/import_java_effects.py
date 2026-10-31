#!/usr/bin/env python3
"""Import Java 26.3 destroy stages and foliage colors from the verified client."""
import hashlib, io, json, sys
from pathlib import Path
from zipfile import ZipFile
from PIL import Image
ROOT = Path(__file__).resolve().parents[2]
jar = Path(sys.argv[1])
assert hashlib.sha1(jar.read_bytes()).hexdigest() == 'e877b6a07acd633fb3bb475002175cec036e7b87'
z = ZipFile(jar)
records = []
def read(path):
    data = z.read(path)
    records.append({'source': path, 'sha1': hashlib.sha1(data).hexdigest()})
    return data
out = ROOT / 'public/textures'
stages = Image.new('RGBA', (160,16))
for i in range(10):
    path = f'assets/minecraft/textures/block/destroy_stage_{i}.png'
    stages.paste(Image.open(io.BytesIO(read(path))).convert('RGBA'), (i*16,0))
stages.save(out / 'crack.png')
foliage = Image.open(io.BytesIO(read('assets/minecraft/textures/colormap/foliage.png'))).convert('RGB')
colors = {}
for path in sorted(z.namelist()):
    if not path.startswith('data/minecraft/worldgen/biome/') or not path.endswith('.json'): continue
    b = json.loads(read(path)); t = max(0,min(1,b['temperature'])); h=max(0,min(1,b['downfall']))*t
    rgb = foliage.getpixel((int((1-t)*255), int((1-h)*255)))
    color = (rgb[0]<<16) | (rgb[1]<<8) | rgb[2]
    colors['minecraft:'+Path(path).stem] = int(b.get('effects',{}).get('foliage_color',f'#{color:06x}')[1:],16)
(ROOT / 'src/core/worldgen/data/java26-foliage-colors.json').write_text(json.dumps(colors, indent=2)+'\n')
# Keep a neutral leaf atlas for biome tinting. Standalone inventory icons keep their colors.
atlas = Image.open(out / 'atlas_classic.png').convert('RGBA')
for name,index in [('oak_leaves',11),('spruce_leaves',31),('birch_leaves',45),('acacia_leaves',107),('jungle_leaves',111),('dark_oak_leaves',115),('cherry_leaves',119)]:
    atlas.paste(Image.open(io.BytesIO(read(f'assets/minecraft/textures/block/{name}.png'))).convert('RGBA'), ((index%4)*16,(index//4)*16))
atlas.save(out / 'atlas_terrain.png')
(out / 'java-effects-provenance.json').write_text(json.dumps({'target':'Minecraft Java 26.3','client_sha1':hashlib.sha1(jar.read_bytes()).hexdigest(),'files':records,'adaptations':['Ten unchanged destroy sprites packed horizontally','Leaf atlas cells retain neutral RGB and original alpha; biome/species tint is applied at render time']},indent=2)+'\n')
print('Imported 10 destroy stages, 7 original leaf tiles and',len(colors),'biome foliage colors')
