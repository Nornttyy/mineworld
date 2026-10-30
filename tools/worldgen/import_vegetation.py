#!/usr/bin/env python3
"""Import selected Java 26.3 feature data, retaining source hashes for auditing."""
from pathlib import Path
from zipfile import ZipFile
import hashlib,json,sys
root=Path(__file__).resolve().parents[2]
jar=Path(sys.argv[1]); expected='e877b6a07acd633fb3bb475002175cec036e7b87'
assert hashlib.sha1(jar.read_bytes()).hexdigest()==expected
z=ZipFile(jar); records=[]
def read(path):
 b=z.read('data/minecraft/worldgen/'+path+'.json'); records.append({'path':path,'sha1':hashlib.sha1(b).hexdigest()}); return json.loads(b)
trees={name:read('feature/'+name) for name in ['oak','birch','spruce','pine']}
placed_names=['patch_grass_plain','patch_grass_forest','patch_grass_taiga_2','patch_grass_badlands','patch_grass_meadow','patch_dead_bush_2','patch_dead_bush_badlands','flower_default','flower_plains','flower_meadow','flower_flower_forest','flower_swamp']
placed={name:read('placed_feature/'+name) for name in placed_names}
features={p['feature']:read('feature/'+p['feature'].split(':')[1]) for p in placed.values()}
providers={}
for f in features.values():
 if isinstance(f.get('to_place'),str):
  name=f['to_place']; providers[name]=read('block_state_provider/'+name.split(':')[1])
biomes={}
for path in z.namelist():
 if path.startswith('data/minecraft/worldgen/biome/') and path.endswith('.json'):
  b=read('biome/'+Path(path).stem)
  selected=[v.split(':')[1] for layer in b.get('features',[]) for v in layer if v.split(':')[1] in placed]
  if selected:biomes['minecraft:'+Path(path).stem]=selected
counts={name:read('placed_feature/'+name)['placement'][0]['count'] for name in ['trees_birch','trees_taiga','trees_plains']}
result={'trees':trees,'tree_counts':counts,'placed':placed,'features':features,'providers':providers,'biomes':biomes}
out=root/'src/core/worldgen/data'
(out/'java26-vegetation.json').write_text(json.dumps(result,separators=(',',':'))+'\n')
(out/'java26-vegetation-provenance.json').write_text(json.dumps({'target':'Minecraft Java 26.3','client_sha1':expected,'source':'Official Mojang version manifest client download','scope':'Configured oak/birch/spruce/pine shapes and selected ground vegetation modifiers. No executable classes.','limits':['Placement RNG is isolated per source chunk, not Java decoration-seed sequencing','Noise-based flower selection and patch density use Mineworld value noise, not Java noise providers','Fancy, fallen, giant and unsupported tree species are not implemented','No vanilla biome zoom, leaf-distance states, bees or leaf-litter features'],'files':records},indent=2)+'\n')
print('Imported',len(trees),'tree definitions,',len(placed),'patch definitions')
