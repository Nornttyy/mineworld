#!/usr/bin/env python3
"""Read official baked chest geometry and UVs; requires JDK 25 and verified Java 26.3 jars."""
import argparse,hashlib,json,os,subprocess,tempfile
from pathlib import Path
from zipfile import ZipFile
ROOT=Path(__file__).resolve().parents[2]
def main():
 p=argparse.ArgumentParser(description=__doc__)
 for n in ['jdk','client','server-bundle']:p.add_argument('--'+n,type=Path,required=True)
 a=p.parse_args();ch=hashlib.sha1(a.client.read_bytes()).hexdigest();sh=hashlib.sha1(a.server_bundle.read_bytes()).hexdigest()
 assert ch=='e877b6a07acd633fb3bb475002175cec036e7b87';assert sh=='33680f5f2ac32864d6d7cf5e56a705fdb3e05f4c'
 with tempfile.TemporaryDirectory(prefix='mineworld-chest-') as folder:
  t=Path(folder);jars=[str(a.client)]
  with ZipFile(a.server_bundle) as z:
   for n in z.namelist():
    if n.endswith('.jar')and n.startswith('META-INF/libraries/'):
     d=t/f'{len(jars)}.jar';d.write_bytes(z.read(n));jars.append(str(d))
  cp=os.pathsep.join(jars);src=Path(__file__).with_name('MineworldChestProbe.java');out=t/'chest.json'
  subprocess.run([str(a.jdk/'bin/javac'),'-cp',cp,'-d',folder,str(src)],check=True)
  subprocess.run([str(a.jdk/'bin/java'),'-cp',folder+os.pathsep+cp,'MineworldChestProbe',str(out)],check=True)
  d=json.loads(out.read_text());d['clientSha1']=ch;d['probeSha256']=hashlib.sha256(src.read_bytes()).hexdigest()
  assert len(d['parts'])==3 and sum(len(p['quads'])for p in d['parts'])==18
  target=ROOT/'src/core/blocks/data/java26-chest-model.json';target.parent.mkdir(parents=True,exist_ok=True);target.write_text(json.dumps(d,separators=(',',':'))+'\n');print(target)
if __name__=='__main__':main()
