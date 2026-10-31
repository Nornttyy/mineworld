"""Use original flat door item sprites instead of a lower-half block model."""
import hashlib,json,sys
from pathlib import Path
from zipfile import ZipFile
root=Path(__file__).resolve().parents[2];jar=Path(sys.argv[1]);sha=hashlib.sha1(jar.read_bytes()).hexdigest()
assert sha=='e877b6a07acd633fb3bb475002175cec036e7b87'
records=[]
with ZipFile(jar) as z:
 for name in ['oak_door','spruce_door','acacia_door']:
  source=f'assets/minecraft/textures/item/{name}.png';data=z.read(source)
  records.append({'source':source,'sha1':hashlib.sha1(data).hexdigest()})
  for folder in ['icons','icons_classic']:(root/f'public/textures/{folder}/{name}.png').write_bytes(data)
(root/'public/textures/java-architecture-items-provenance.json').write_text(json.dumps({'client_sha1':sha,'files':records},indent=2)+'\n')
