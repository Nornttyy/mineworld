#!/usr/bin/env python3
"""Enrich baked architecture models with actual Java collision/selection shapes.
Usage: python import_architecture_shapes.py --jdk /path/to/jdk --client /path/to/client.jar --libraries /path/to/libraries
"""
import argparse,hashlib,json,os,subprocess,tempfile
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
FILE=ROOT/'src/core/blocks/data/java26-architecture.json'
p=argparse.ArgumentParser(description=__doc__)
for name in ['jdk','client','libraries']:p.add_argument('--'+name,type=Path,required=True)
a=p.parse_args();assert hashlib.sha1(a.client.read_bytes()).hexdigest()=='e877b6a07acd633fb3bb475002175cec036e7b87'
cp=os.pathsep.join([str(a.client),*[str(v)for v in a.libraries.rglob('*.jar')]])
with tempfile.TemporaryDirectory(prefix='mineworld-shapes-')as tmp:
 subprocess.run([str(a.jdk/'bin/javac'),'-cp',cp,'-d',tmp,str(Path(__file__).with_name('ArchitectureShapeProbe.java'))],check=True)
 output=Path(tmp)/'shapes.json'
 subprocess.run([str(a.jdk/'bin/java'),'-cp',tmp+os.pathsep+cp,'ArchitectureShapeProbe',str(FILE),str(output)],check=True,cwd=tmp)
 shapes=json.loads(output.read_text())
 data=json.loads(FILE.read_text())
 for state in data['states']:
  state.setdefault('modelBoxes',state['boxes'])
  state.update(shapes[state['key']])
 data['shapeSource']='Official BlockState.getCollisionShape/getShape, EmptyBlockGetter, zero block position'
 FILE.write_text(json.dumps(data,separators=(',',':'))+'\n')
 # Keep data that can be re-applied without Java after a model-only re-import.
 cache=ROOT/'src/core/blocks/data/java26-architecture-shapes.json'
 cache.write_text(json.dumps(shapes,separators=(',',':'))+'\n')
print('Imported exact collision, outline, occlusion and material data for',len(shapes),'states')
