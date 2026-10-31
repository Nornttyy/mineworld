#!/usr/bin/env python3
"""Append revision-4 biome materials, retaining every existing block and atlas ID."""
import hashlib, io, json, sys
from pathlib import Path
from zipfile import ZipFile
from PIL import Image, ImageChops
import gen_classic as layout
ROOT=Path(__file__).resolve().parents[2]
jar=Path(sys.argv[1]); digest=hashlib.sha1(jar.read_bytes()).hexdigest()
assert digest=='e877b6a07acd633fb3bb475002175cec036e7b87'
z=ZipFile(jar); out=ROOT/'public/textures'; records=[]
names=[]
for wood in ['acacia','jungle','dark_oak','cherry']:
 names += [wood+'_log',wood+'_log_top',wood+'_leaves',wood+'_planks']
names += ['red_mushroom_block','brown_mushroom_block','mushroom_stem','mushroom_block_inside']
colors=json.loads((ROOT/'src/core/worldgen/data/java26-foliage-colors.json').read_text())
tints={'acacia_leaves':colors['minecraft:savanna'],'jungle_leaves':colors['minecraft:jungle'],'dark_oak_leaves':colors['minecraft:dark_forest']}
tiles={}; raw={}
for name in names:
 path=f'assets/minecraft/textures/block/{name}.png'; data=z.read(path)
 records.append({'source':path,'sha1':hashlib.sha1(data).hexdigest()})
 im=Image.open(io.BytesIO(data)).convert('RGBA'); im=im.crop((0,0,16,16));raw[name]=im.copy()
 if name in tints:
  c=tints[name];im=ImageChops.multiply(im,Image.new('RGBA',im.size,((c>>16)&255,(c>>8)&255,c&255,255)))
 tiles[name]=im;im.save(out/'blocks'/f'{name}.png')
for filename in ['atlas.png','atlas_classic.png','atlas_terrain.png']:
 atlas=Image.new('RGBA',(64,512));atlas.paste(Image.open(out/filename).convert('RGBA'),(0,0))
 for i,name in enumerate(names,105):atlas.paste((raw if filename=='atlas_terrain.png' else tiles)[name],((i%4)*16,(i//4)*16))
 atlas.save(out/filename,optimize=True)
for name in names:
 if name.endswith('_log_top') or name=='mushroom_block_inside':continue
 top=name+'_top' if name.endswith('_log') else name
 for icons in ['icons','icons_classic']:
  layout.source.iso_icon(tiles[top],tiles[name],tiles[name]).save(out/icons/f'{name}.png')
(out/'java-biomes-provenance.json').write_text(json.dumps({'target':'Minecraft Java 26.3','client_sha1':digest,'files':records,'adaptations':['Append 20 tiles in slots 105..124; all three atlases are 4x32','Neutral leaf RGB and alpha preserved in terrain atlas; inventory foliage receives representative biome tint','Cube inventory icons projected from face textures; mushroom per-face block states are simplified']},indent=2)+'\n')
print('Imported 20 biome tiles and 15 block icons; atlases 64x512')
