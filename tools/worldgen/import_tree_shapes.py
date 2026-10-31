#!/usr/bin/env python3
"""Capture official Java 26.3 tree feature placements on a flat empty sample world."""
import argparse, hashlib, json, os, subprocess, tempfile
from pathlib import Path
from zipfile import ZipFile
ROOT=Path(__file__).resolve().parents[2]
SERVER_SHA1='33680f5f2ac32864d6d7cf5e56a705fdb3e05f4c'

def main():
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('--jdk',type=Path,required=True);p.add_argument('--server-bundle',type=Path,required=True);args=p.parse_args()
 assert hashlib.sha1(args.server_bundle.read_bytes()).hexdigest()==SERVER_SHA1,'Official server bundle SHA-1 mismatch'
 with tempfile.TemporaryDirectory(prefix='mineworld-trees-') as folder:
  temp=Path(folder);jars=[];inner=None
  with ZipFile(args.server_bundle) as z:
   for name in z.namelist():
    if name.endswith('.jar') and name.startswith(('META-INF/versions/','META-INF/libraries/')):
     dest=temp/f'{len(jars)}.jar';dest.write_bytes(z.read(name));jars.append(str(dest))
     if name.startswith('META-INF/versions/'):inner=dest
  assert inner
  with ZipFile(inner) as z:
   raw={name.removeprefix('data/minecraft/tags/block/').removesuffix('.json'):json.loads(z.read(name)) for name in z.namelist() if name.startswith('data/minecraft/tags/block/') and name.endswith('.json')}
  resolved={}
  def resolve(name):
   if name in resolved:return resolved[name]
   values=[]
   for item in raw[name]['values']:
    val=item if isinstance(item,str) else item['id']
    if val.startswith('#'): values.extend(resolve(val[1:].removeprefix('minecraft:')))
    else:values.append(val if ':' in val else 'minecraft:'+val)
   resolved[name]=list(dict.fromkeys(values));return resolved[name]
  tags=temp/'block-tags.json';tags.write_text(json.dumps({'minecraft:'+name:resolve(name) for name in sorted(raw)}))
  cp=os.pathsep.join(jars);source=Path(__file__).with_name('MineworldTreeProbe.java')
  subprocess.run([str(args.jdk/'bin/javac'),'-cp',cp,'-d',folder,str(source)],check=True)
  output=temp/'trees.json';subprocess.run([str(args.jdk/'bin/java'),'-cp',folder+os.pathsep+cp,'MineworldTreeProbe',str(output),str(tags)],check=True)
  result=json.loads(output.read_text());result['serverBundleSha1']=SERVER_SHA1;result['probeSha256']=hashlib.sha256(source.read_bytes()).hexdigest()
  assert len(result['samples'])==36
  for sample in result['samples']:
   assert sample['blocks'] and len({tuple(b[:3]) for b in sample['blocks']})==len(sample['blocks'])
   assert all(0<=b[3]<len(result['palette']) for b in sample['blocks'])
  dest=ROOT/'src/core/worldgen/data/java26-tree-shapes.json';dest.write_text(json.dumps(result,separators=(',',':'))+'\n');print(dest)

if __name__=='__main__':main()
