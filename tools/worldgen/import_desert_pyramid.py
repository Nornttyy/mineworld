#!/usr/bin/env python3
"""Capture a real Java 26.3 desert-pyramid piece using the verified official server.
Usage: python3 import_desert_pyramid.py --jdk /path/to/jdk25 --server-bundle /path/to/server.jar
"""
import argparse, hashlib, json, os, subprocess, tempfile
from pathlib import Path
from zipfile import ZipFile
ROOT=Path(__file__).resolve().parents[2]
SERVER_SHA1='33680f5f2ac32864d6d7cf5e56a705fdb3e05f4c'
def main():
 p=argparse.ArgumentParser(description=__doc__);p.add_argument('--jdk',type=Path,required=True);p.add_argument('--server-bundle',type=Path,required=True);args=p.parse_args()
 assert hashlib.sha1(args.server_bundle.read_bytes()).hexdigest()==SERVER_SHA1,'Official server bundle SHA-1 mismatch'
 with tempfile.TemporaryDirectory(prefix='mineworld-pyramid-') as folder:
  temp=Path(folder);jars=[]
  with ZipFile(args.server_bundle) as z:
   for name in z.namelist():
    if name.endswith('.jar') and name.startswith(('META-INF/versions/','META-INF/libraries/')):
     dest=temp/f'{len(jars)}.jar';dest.write_bytes(z.read(name));jars.append(str(dest))
  cp=os.pathsep.join(jars)
  source=Path(__file__).with_name('MineworldPyramidProbe.java')
  subprocess.run([str(args.jdk/'bin/javac'),'-cp',cp,'-d',folder,str(source)],check=True)
  output=temp/'pyramid.json'
  subprocess.run([str(args.jdk/'bin/java'),'-cp',folder+os.pathsep+cp,'MineworldPyramidProbe',str(output)],check=True,cwd=folder)
  result=json.loads(output.read_text());result['serverBundleSha1']=SERVER_SHA1
  assert result['size']==[21,25,21]
  assert len({tuple(b[:3]) for b in result['blocks']})==len(result['blocks'])
  names=[result['palette'][b[3]]['Name'] for b in result['blocks']]
  assert names.count('minecraft:chest')==4 and names.count('minecraft:tnt')==9
  assert names.count('minecraft:stone_pressure_plate')==1
  assert all(0<=b[i]<result['size'][i] for b in result['blocks'] for i in range(3))
  result['probeSha256']=hashlib.sha256(source.read_bytes()).hexdigest()
  dest=ROOT/'src/core/worldgen/data/java26-desert-pyramid.json';dest.write_text(json.dumps(result,separators=(',',':'))+'\n');print(dest)
if __name__=='__main__':main()
