"""Extract grass tint colors from the verified client; keep existing atlas pixels unchanged."""
import hashlib,io,json,sys
from pathlib import Path
from zipfile import ZipFile
from PIL import Image
root=Path(__file__).resolve().parents[2];jar=Path(sys.argv[1])
assert hashlib.sha1(jar.read_bytes()).hexdigest()=='e877b6a07acd633fb3bb475002175cec036e7b87'
with ZipFile(jar) as z:
 image=Image.open(io.BytesIO(z.read('assets/minecraft/textures/colormap/grass.png'))).convert('RGB');colors={}
 for path in sorted(z.namelist()):
  if not path.startswith('data/minecraft/worldgen/biome/') or not path.endswith('.json'):continue
  b=json.loads(z.read(path));t=max(0,min(1,b['temperature']));h=max(0,min(1,b['downfall']))*t
  r,g,bl=image.getpixel((int((1-t)*255),int((1-h)*255)));c=(r<<16)|(g<<8)|bl
  effects=b.get('effects',{});c=int(effects.get('grass_color',f'#{c:06x}')[1:],16)
  if effects.get('grass_color_modifier')=='dark_forest':c=((c&0xfefefe)+0x28340a)>>1
  colors['minecraft:'+Path(path).stem]=c
 (root/'src/core/worldgen/data/java26-grass-colors.json').write_text(json.dumps(colors,indent=2)+'\n')
