#!/usr/bin/env python3
"""Export selected official Java 26.3 NBT templates, retaining states and block entities.
Usage: python3 tools/worldgen/import_structures.py /path/to/26.3-client.jar
No third-party Python modules are required.
"""
import argparse, gzip, hashlib, json, struct
from pathlib import Path
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[2]
EXPECTED_CLIENT_SHA1 = 'e877b6a07acd633fb3bb475002175cec036e7b87'
TEMPLATES = [
 'village/plains/houses/plains_small_house_1',
 'village/plains/houses/plains_small_house_2',
 'village/plains/town_centers/plains_fountain_01',
 'village/taiga/houses/taiga_small_house_1',
 'village/taiga/houses/taiga_small_house_2',
 'village/savanna/houses/savanna_small_house_1',
 'village/savanna/houses/savanna_small_house_2',
 'igloo/top',
 'village/plains/houses/plains_temple_3',
]

class NBTReader:
 def __init__(self, data):
  self.data = gzip.decompress(data) if data[:2] == b'\x1f\x8b' else data
  self.offset = 0
 def read(self, n):
  if n < 0 or self.offset+n > len(self.data): raise ValueError('Truncated/invalid NBT')
  result = self.data[self.offset:self.offset+n]; self.offset += n; return result
 def number(self, fmt): return struct.unpack('>'+fmt, self.read(struct.calcsize('>'+fmt)))[0]
 def string(self): return self.read(self.number('H')).decode('utf-8')
 def payload(self, tag):
  if tag == 1: return self.number('b')
  if tag == 2: return self.number('h')
  if tag == 3: return self.number('i')
  if tag == 4:
   n = self.number('q')
   # JSON must not round long values when JavaScript reads the export.
   return n if abs(n) <= 9007199254740991 else str(n)
  if tag == 5: return self.number('f')
  if tag == 6: return self.number('d')
  if tag == 7: return list(self.read(self.number('i')))
  if tag == 8: return self.string()
  if tag == 9:
   child = self.number('B'); count = self.number('i')
   if count < 0: raise ValueError('Negative NBT list size')
   return [self.payload(child) for _ in range(count)]
  if tag == 10:
   out = {}
   while True:
    child = self.number('B')
    if child == 0: return out
    name = self.string(); out[name] = self.payload(child)
  if tag == 11: return [self.number('i') for _ in range(self.number('i'))]
  if tag == 12:
   return [self.payload(4) for _ in range(self.number('i'))]
  raise ValueError('Unsupported NBT tag '+str(tag))
 def root(self):
  tag = self.number('B'); name = self.string(); value = self.payload(tag)
  if self.offset != len(self.data): raise ValueError('Trailing NBT data')
  return name, value

def main():
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('client', type=Path);args=p.parse_args()
 digest=hashlib.sha1(args.client.read_bytes()).hexdigest()
 if digest != EXPECTED_CLIENT_SHA1: raise ValueError('Official client SHA-1 mismatch')
 templates={}; provenance=[]
 with ZipFile(args.client) as jar:
  for name in TEMPLATES:
   source='data/minecraft/structure/'+name+'.nbt'; raw=jar.read(source)
   _, nbt=NBTReader(raw).root()
   if 'palettes' in nbt: raise ValueError('Multiple palettes require explicit selection: '+name)
   palette=[{'Name':v.get('Name',v.get('id')), **({'Properties':v.get('Properties',v.get('properties'))} if ('Properties' in v or 'properties' in v) else {})} for v in nbt['palette']]; size=nbt['size']; blocks=[]
   for block in nbt['blocks']:
    pos=block['pos']; state=block['state']
    if not all(0<=pos[i]<size[i] for i in range(3)): raise ValueError('Block out of bounds: '+name)
    if not 0<=state<len(palette): raise ValueError('Bad palette index: '+name)
    row=[*pos,state]
    if 'nbt' in block:row.append(block['nbt'])
    blocks.append(row)
   # Placement metadata for these selected templates: their lowest footing is
   # y=0. The first taiga house has a raised indoor floor at y=1.
   floor_y=1 if name=='village/taiga/houses/taiga_small_house_1' else 0
   doors=[{'pos':b['pos'],'facing':palette[b['state']].get('Properties',{}).get('facing')} for b in nbt['blocks'] if palette[b['state']]['Name'].endswith('_door') and palette[b['state']].get('Properties',{}).get('half')=='lower']
   templates[name]={'size':size,'palette':palette,'blocks':blocks,'entities':nbt.get('entities',[]),'groundOffset':0,'floorY':floor_y,'entrances':doors,'DataVersion':nbt.get('DataVersion')}
   provenance.append({'template':name,'source':source,'sha1':hashlib.sha1(raw).hexdigest(),'size':size,'block_count':len(blocks),'palette_count':len(palette)})
 output={'target':'Minecraft Java 26.3','client_sha1':digest,'templates':templates}
 target=ROOT/'src/core/worldgen/data/java26-structures.json';target.write_text(json.dumps(output,separators=(',',':'),ensure_ascii=False)+'\n')
 (ROOT/'src/core/worldgen/data/java26-structures-provenance.json').write_text(json.dumps({'target':output['target'],'client_sha1':digest,'source':'Official Mojang client JAR','files':provenance,'adaptations':['NBT compound objects retained as JSON; blocks compacted to [x,y,z,state,optionalNBT]','Java 26.3 id/properties palette keys normalized to Name/Properties; values preserved','Explicit air, block entities and jigsaw final_state preserved','groundOffset=0 marks the lowest footing of these selected templates; floorY and entrance coordinates are extra placement metadata','Integers outside JavaScript safe range are stored as decimal strings'],'limits':['Standalone templates are exact data; village arrangement and terrain adaptation are separate generation systems','No desert pyramid template exists: village/desert temple files are different buildings']},indent=2)+'\n')
 for name,t in templates.items(): print(name,t['size'],'ground',t['groundOffset'],'blocks',len(t['blocks']))
 print('BLOCK_NAMES',','.join(sorted({p['Name'] for t in templates.values() for p in t['palette']})))
 print('OUTPUT',target)
if __name__=='__main__':main()
