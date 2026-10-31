"""Validate model transforms against an independently executed official Java client.
Run with Python/Pillow: python tools/textures/test_architecture_models.py
"""
import importlib.util,json,unittest
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
spec=importlib.util.spec_from_file_location('models',Path(__file__).with_name('import_java_architecture.py'))
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)

class ModelTests(unittest.TestCase):
 def test_all_quadrant_transforms_and_uvlock_match_official_client(self):
  refs=json.loads(Path(__file__).with_name('reference').joinpath('model-transforms26.json').read_text())
  self.assertEqual(len(refs),96)
  for row in refs:
   variant={k:row[k]for k in ['x','y']};face=row['face'];old_u,old_v=m.BASES[face]
   new_face=m.closest_direction(m.block_rotation(m.NORMALS[face],variant));new_u,new_v=m.BASES[new_face]
   ru,rv=m.block_rotation(old_u,variant),m.block_rotation(old_v,variant)
   matrix=[[m.dot(new_u,ru),m.dot(new_u,rv)],[m.dot(new_v,ru),m.dot(new_v,rv)]]
   actual=[[.5+matrix[0][0]*(u-.5)+matrix[0][1]*(v-.5),.5+matrix[1][0]*(u-.5)+matrix[1][1]*(v-.5)]for u,v in [[0,0],[0,1],[1,1],[1,0]]]
   basis=[m.block_rotation(v,variant)for v in [[1,0,0],[0,1,0],[0,0,1]]]
   for vectors,expected in [(actual,row['uv']),(basis,row['basis'])]:
    for a,b in zip(vectors,expected):
     for x,y in zip(a,b):self.assertAlmostEqual(x,y,places=5,msg=str(row))
 def test_export_coverage_and_shapes(self):
  data=json.loads((ROOT/'src/core/blocks/data/java26-architecture.json').read_text())
  self.assertEqual(data['unsupported'],[])
  self.assertEqual(len(set(s['id']for s in data['states'])),len(data['states']))
  for s in data['states']:
   self.assertGreaterEqual(s['id'],4096)
   if s.get('nativeRender')!='fluid':self.assertGreater(len(s['quads']),0,msg=s['key'])
   self.assertIn('selectionBoxes',s,msg=s['key'])
   for q in s['quads']:
    self.assertEqual(len(q['vertices']),4);self.assertEqual(len(q['uv']),4)
    n=m.unit(m.cross(m.subtract(q['vertices'][1],q['vertices'][0]),m.subtract(q['vertices'][2],q['vertices'][0])))
    for a,b in zip(n,q['normal']):self.assertAlmostEqual(a,b,places=5,msg=s['key'])
if __name__=='__main__':unittest.main()
