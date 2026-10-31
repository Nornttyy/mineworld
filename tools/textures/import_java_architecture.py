#!/usr/bin/env python3
"""Bake selected official Java 26.3 model data, preserving existing atlas and state IDs.

Usage: python import_java_architecture.py /path/to/26.3-client.jar
Reads exported vanilla NBT palettes and the official desert-pyramid piece fixture.
A state uses its literal official properties; non-rendering properties are preserved.
No executable game classes are copied to the project.
"""
import argparse, hashlib, io, itertools, json, math, sys
from functools import lru_cache
from pathlib import Path
from zipfile import ZipFile
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'public/textures'
DEST = ROOT / 'src/core/blocks/data/java26-architecture.json'
EXPECTED = 'e877b6a07acd633fb3bb475002175cec036e7b87'
DIRECTIONS = ['east','west','up','down','south','north']
NORMALS = {'east':[1,0,0],'west':[-1,0,0],'up':[0,1,0],'down':[0,-1,0],'south':[0,0,1],'north':[0,0,-1]}
# Official FaceInfo vertex extents, verified against the 26.3 client class.
CORNERS = {
 'down':[(0,0,1),(0,0,0),(1,0,0),(1,0,1)],
 'up':[(0,1,0),(0,1,1),(1,1,1),(1,1,0)],
 'north':[(1,1,0),(1,0,0),(0,0,0),(0,1,0)],
 'south':[(0,1,1),(0,0,1),(1,0,1),(1,1,1)],
 'west':[(0,1,0),(0,0,0),(0,0,1),(0,1,1)],
 'east':[(1,1,1),(1,0,1),(1,0,0),(1,1,0)],
}
# Texture U and V bases for a default face (V is down in the source PNG).
BASES = {'up':([1,0,0],[0,0,1]),'down':([1,0,0],[0,0,-1]),
 'north':([-1,0,0],[0,-1,0]),'south':([1,0,0],[0,-1,0]),
 'west':([0,0,1],[0,-1,0]),'east':([0,0,-1],[0,-1,0])}

def canonical(resource):
 return resource if ':' in resource else 'minecraft:'+resource

def resource_path(folder, resource, suffix='.json'):
 namespace,path=canonical(resource).split(':',1)
 return f'assets/{namespace}/{folder}/{path}{suffix}'

def key(name, props):
 return canonical(name)+(('['+','.join(f'{k}={props[k]}' for k in sorted(props))+']') if props else '')

def clean(v):
 v=round(v,7)
 return 0 if abs(v)<1e-7 else int(v) if v==int(v) else v

def dot(a,b):return sum(x*y for x,y in zip(a,b))
def subtract(a,b):return [x-y for x,y in zip(a,b)]
def cross(a,b):return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]
def unit(a):
 l=math.sqrt(dot(a,a));return [clean(v/l) for v in a] if l>1e-9 else [0,1,0]

def rotate(v,axis,degrees):
 a=math.radians(degrees);c=math.cos(a);s=math.sin(a);x,y,z=v
 if axis=='x':return [x,y*c-z*s,y*s+z*c]
 if axis=='y':return [x*c+z*s,y,-x*s+z*c]
 return [x*c-y*s,x*s+y*c,z]

def block_rotation(v,variant):
 return rotate(rotate(v,'x',-variant.get('x',0)),'y',-variant.get('y',0))

def closest_direction(n):return max(NORMALS,key=lambda d:dot(n,NORMALS[d]))

def point(v,element,variant):
 p=list(v)
 if 'rotation' in element:
  r=element['rotation'];o=r.get('origin',[8,8,8]);p=subtract(p,o)
  p=rotate(p,r['axis'],r['angle'])
  if r.get('rescale'):
   scale=1/math.cos(math.radians(r['angle']))
   p=[a if 'xyz'[i]==r['axis'] else a*scale for i,a in enumerate(p)]
  p=[a+b for a,b in zip(p,o)]
 p=block_rotation([v-8 for v in p],variant)
 return [clean((v+8)/16) for v in p]

def default_uv(face,lo,hi):
 x,y,z=lo;X,Y,Z=hi
 return {'down':[x,16-Z,X,16-z],'up':[x,z,X,Z],
  'north':[16-X,16-Y,16-x,16-y],'south':[x,16-Y,X,16-y],
  'west':[z,16-Y,Z,16-y],'east':[16-Z,16-Y,16-z,16-y]}[face]

def condition_matches(condition,props):
 if not condition:return True
 if 'OR' in condition:return any(condition_matches(c,props) for c in condition['OR'])
 if 'AND' in condition:return all(condition_matches(c,props) for c in condition['AND'])
 for k,vs in condition.items():
  values=str(vs).split('|');actual=props.get(k)
  if values[0].startswith('!'):
   if actual in [v.lstrip('!') for v in values]:return False
  elif actual not in values:return False
 return True

def condition_domains(condition,domains):
 if 'OR' in condition or 'AND' in condition:
  for child in condition.get('OR',condition.get('AND',[])):condition_domains(child,domains)
 else:
  for k,v in condition.items():
   domains.setdefault(k,set()).update(str(v).lstrip('!').split('|'))

class Importer:
 def __init__(self,jar):
  self.jar=jar;self.z=ZipFile(jar);self.records={};self.textures=set();self.unsupported=[];self.customTextures={}
 def read(self,path):
  b=self.z.read(path);self.records[path]=hashlib.sha1(b).hexdigest();return b
 def json(self,path):return json.loads(self.read(path))
 @lru_cache(None)
 def model(self,resource):
  obj=self.json(resource_path('models',resource));parent={}
  if 'parent' in obj and not canonical(obj['parent']).split(':',1)[1].startswith('builtin/'):
   parent=self.model(canonical(obj['parent']))
  result={**parent,**obj,'textures':{**parent.get('textures',{}),**obj.get('textures',{})}}
  return result
 def texture_definition(self,value,textures):
  seen=set()
  while isinstance(value,str) and value.startswith('#'):
   name=value[1:]
   if name in seen:raise ValueError('Cyclic texture alias '+str(seen))
   seen.add(name)
   value=textures[name]
  return value if isinstance(value,dict) else {'sprite':value}
 def texture(self,value,textures):
  value=self.texture_definition(value,textures)['sprite']
  result=canonical(value);self.textures.add(result);return result
 def bake_model(self,variant):
  obj=self.model(canonical(variant['model']));quads=[];boxes=[];textures=obj.get('textures',{})
  particle=self.texture(textures.get('particle',next(iter(textures.values()),'minecraft:block/stone')),textures)
  for element in obj.get('elements',[]):
   lo=element['from'];hi=element['to']
   pts=[point([hi[i] if bits[i] else lo[i] for i in range(3)],element,variant) for bits in itertools.product([0,1],repeat=3)]
   bounds=[min(v[i] for v in pts) for i in range(3)]+[max(v[i] for v in pts) for i in range(3)]
   if all(bounds[i+3]-bounds[i]>1e-6 for i in range(3)):boxes.append(bounds)
   for face,definition in element.get('faces',{}).items():
    vertices=[point([hi[i] if bits[i] else lo[i] for i in range(3)],element,variant) for bits in CORNERS[face]]
    normal=unit(cross(subtract(vertices[1],vertices[0]),subtract(vertices[2],vertices[0])))
    uv=definition.get('uv',default_uv(face,lo,hi));turn=int(definition.get('rotation',0)/90)
    corners=[[uv[0],uv[1]],[uv[0],uv[3]],[uv[2],uv[3]],[uv[2],uv[1]]]
    corners=[corners[(i+turn)%4] for i in range(4)]
    if variant.get('uvlock'):
     # Preserve texture axes after the model's quadrant transform, around UV centre.
     old_u,old_v=BASES[face];new_face=closest_direction(block_rotation(NORMALS[face],variant));new_u,new_v=BASES[new_face]
     ru,rv=block_rotation(old_u,variant),block_rotation(old_v,variant)
     matrix=[[dot(new_u,ru),dot(new_u,rv)],[dot(new_v,ru),dot(new_v,rv)]]
     corners=[[8+matrix[0][0]*(u-8)+matrix[0][1]*(v-8),8+matrix[1][0]*(u-8)+matrix[1][1]*(v-8)] for u,v in corners]
    q={'vertices':vertices,'uv':[[clean(a/16) for a in v] for v in corners],
       'texture':self.texture(definition['texture'],textures),'normal':normal,'direction':DIRECTIONS.index(closest_direction(normal)),
       'shade':element.get('shade',True),'ao':obj.get('ambientocclusion',True)}
    if 'shade_direction_override' in element:q['shadeDirection']=DIRECTIONS.index(element['shade_direction_override'])
    if 'tintindex' in definition:q['tint']=definition['tintindex']
    if self.texture_definition(definition['texture'],textures).get('force_translucent'):q['forceTranslucent']=True
    if 'cullface' in definition:q['cullFace']=DIRECTIONS.index(closest_direction(block_rotation(NORMALS[definition['cullface']],variant)))
    quads.append(q)
  return quads,boxes,particle
 def chest(self,name,props):
  fixture=ROOT/'src/core/blocks/data/java26-chest-model.json'
  if not fixture.exists():return None
  source=json.loads(fixture.read_text());texture=Image.open(io.BytesIO(self.read(source['texture']))).convert('RGBA')
  angle=source['facingYRotationDegrees'].get(props.get('facing','north'),-180)
  quads=[];boxes=[]
  for part in source['parts']:
   for bi,b in enumerate(part['boxes']):
    pts=[rotate([p[0]-.5,p[1],p[2]-.5],'y',angle)for p in itertools.product([b[0],b[3]],[b[1],b[4]],[b[2],b[5]])]
    boxes.append([clean(min(p[i] for p in pts)+(.5 if i!=1 else 0))for i in range(3)]+[clean(max(p[i] for p in pts)+(.5 if i!=1 else 0))for i in range(3)])
   for qi,q in enumerate(part['quads']):
    u0=round(min(p[0]for p in q['uv'])*64);v0=round(min(p[1]for p in q['uv'])*64)
    u1=round(max(p[0]for p in q['uv'])*64);v1=round(max(p[1]for p in q['uv'])*64)
    assert u1-u0<=16 and v1-v0<=16
    cropped=Image.new('RGBA',(16,16));cropped.paste(texture.crop((u0,v0,u1,v1)),(0,0))
    tile='minecraft:architecture/chest_'+part['name']+'_'+str(qi)
    self.customTextures[tile]=cropped;self.textures.add(tile)
    vertices=[]
    for p in q['vertices']:
     v=rotate([p[0]-.5,p[1],p[2]-.5],'y',angle);vertices.append([clean(v[0]+.5),clean(v[1]),clean(v[2]+.5)])
    normal=[clean(n)for n in rotate(q['normal'],'y',angle)]
    quads.append({'vertices':vertices,'uv':[[clean((u*64-u0)/16),clean((v*64-v0)/16)]for u,v in q['uv']], 'texture':tile,'normal':normal,'direction':DIRECTIONS.index(closest_direction(normal)),'shade':True,'ao':True})
  return {'key':key(name,props),'name':name,'properties':props,'quads':quads,'boxes':boxes,'particle':quads[3]['texture']}
 def bake_state(self,name,props,definition):
  if name=='minecraft:chest':
   result=self.chest(name,props)
   if result:return result
  variants=[]
  if 'variants' in definition:
   for test,variant in definition['variants'].items():
    conditions=dict(p.split('=',1) for p in test.split(',') if p)
    if condition_matches(conditions,props):variants.append(variant);break
  for part in definition.get('multipart',[]):
   if condition_matches(part.get('when',{}),props):variants.append(part['apply'])
  quads=[];boxes=[];particle='minecraft:block/stone'
  for variant in variants:
   # Weighted cosmetic alternatives are not replayed from the Java RNG.
   # Keep a deterministic first model; provenance records this adaptation.
   if isinstance(variant,list):variant=variant[0]
   q,b,particle=self.bake_model(variant);quads+=q;boxes+=b
  result={'key':key(name,props),'name':name,'properties':props,'quads':quads,'boxes':boxes,'particle':particle}
  if name in ['minecraft:water','minecraft:lava']:result['nativeRender']='fluid'
  elif not quads and name not in ['minecraft:air','minecraft:cave_air','minecraft:void_air']:
   result['entityModel']=True;self.unsupported.append(result['key'])
  return result

 def inventory(self,name):
  path=resource_path('items',name)
  if path not in self.z.namelist():return None
  entry=self.json(path)['model']
  def tint_color(tint):
   if tint['type']=='minecraft:constant':
    v=tint['value'];return[(v>>16)&255,(v>>8)&255,v&255]
   if tint['type']=='minecraft:grass':
    temperature=max(0,min(1,tint['temperature']));downfall=max(0,min(1,tint['downfall']))*temperature
    colormap=Image.open(io.BytesIO(self.read('assets/minecraft/textures/colormap/grass.png'))).convert('RGB')
    return list(colormap.getpixel((int((1-temperature)*255),int((1-downfall)*255))))
   raise ValueError('Unsupported item tint '+str(tint))
  def visit(part):
   if part['type']=='minecraft:composite':
    result=[]
    for child in part['models']:
     value=visit(child)
     if value is None or isinstance(value,Image.Image):return None
     result+=value
    return result
   if part['type']!='minecraft:model':return None
   obj=self.model(part['model'])
   if not obj.get('elements'):
    tex=obj.get('textures',{}).get('layer0')
    if not tex:return None
    if tex.startswith('#'):tex=obj['textures'][tex[1:]]
    raw=self.read(resource_path('textures',tex,'.png'));image=Image.open(io.BytesIO(raw)).convert('RGBA')
    if part.get('tints'):
     color=tint_color(part['tints'][0]);pixels=image.load()
     image.putdata([tuple(round(pixels[x,y][i]*color[i]/255)for i in range(3))+(pixels[x,y][3],)for y in range(image.height)for x in range(image.width)])
    return image.crop((0,0,image.width,image.width)).resize((64,64),Image.Resampling.NEAREST)
   quads,_,_=self.bake_model({'model':part['model']})
   for q in quads:
    if 'tint' in q and q['tint']<len(part.get('tints',[])):q['tintRGB']=tint_color(part['tints'][q['tint']])
   transform=part.get('transformation',{});translation=transform.get('translation',[0,0,0]);scale=transform.get('scale',[1,1,1])
   for q in quads:q['vertices']=[[clean(p[i]*scale[i]+translation[i])for i in range(3)]for p in q['vertices']]
   return quads
  result=visit(entry)
  return result if isinstance(result,Image.Image) or result is None else {'quads':result}

 def split_large_textures(self,models):
  """Keep 32-pixel sign detail on the existing 16-pixel atlas by splitting faces."""
  sizes={};aliases={}
  for name in list(self.textures):
   if name in self.customTextures:continue
   image=Image.open(io.BytesIO(self.read(resource_path('textures',name,'.png')))).convert('RGBA')
   if image.width==16:continue
   if image.width%16 or image.height<image.width:raise ValueError(f'Unsupported texture dimensions {name}: {image.size}')
   size=image.width;sizes[name]=size
   for y in range(size//16):
    for x in range(size//16):
     tile=name+f'_tile_{x}_{y}';self.customTextures[tile]=image.crop((x*16,y*16,x*16+16,y*16+16));self.textures.add(tile)
   aliases[name]=name+'_tile_0_0';self.textures.remove(name)
  for model in models:
   if model.get('particle') in aliases:model['particle']=aliases[model['particle']]
   result=[]
   for q in model['quads']:
    texture=q['texture']
    if texture not in sizes:result.append(q);continue
    size=sizes[texture];uv=q['uv'];verts=q['vertices'];p0=uv[0];da=subtract(uv[1],p0);db=subtract(uv[3],p0);det=da[0]*db[1]-db[0]*da[1]
    if abs(det)<1e-12:continue
    # Clip the quad in UV space, carrying actual model positions through the same affine map.
    for y in range(size//16):
     for x in range(size//16):
      poly=[list(v)for v in uv]
      for axis,limit,sign in [(0,x*16/size,1),(0,(x+1)*16/size,-1),(1,y*16/size,1),(1,(y+1)*16/size,-1)]:
       clipped=[]
       for a,b in zip(poly,poly[1:]+poly[:1]):
        aa=(a[axis]-limit)*sign;bb=(b[axis]-limit)*sign
        if aa>=-1e-9:clipped.append(a)
        if (aa>1e-9 and bb<-1e-9)or(aa<-1e-9 and bb>1e-9):
         t=(limit-a[axis])/(b[axis]-a[axis]);clipped.append([a[i]+t*(b[i]-a[i])for i in range(2)])
       poly=clipped
      if len(poly)<3:continue
      if max(p[0]for p in poly)-min(p[0]for p in poly)<1e-8 or max(p[1]for p in poly)-min(p[1]for p in poly)<1e-8:continue
      assert len(poly)==4,(texture,poly)
      newverts=[]
      for p in poly:
       d=subtract(p,p0);a=(d[0]*db[1]-db[0]*d[1])/det;b=(da[0]*d[1]-d[0]*da[1])/det
       newverts.append([clean(verts[0][i]+a*(verts[1][i]-verts[0][i])+b*(verts[3][i]-verts[0][i]))for i in range(3)])
      result.append({**q,'texture':texture+f'_tile_{x}_{y}','vertices':newverts,'uv':[[clean(p[0]*size/16-x),clean(p[1]*size/16-y)]for p in poly]})
   model['quads']=result

def render_icon(state,images):
 """Orthographic pixel rasterization of baked quads; no substitute cube icons."""
 size=64;image=Image.new('RGBA',(size,size));depth=[-1e9]*(size*size)
 quads=[]
 def project(v):return [(v[0]-v[2])*.8660254,(v[0]+v[2])*.5-v[1],sum(v)]
 for q in state['quads']:
  if dot(q['normal'],[1,1,1])<=1e-8:continue
  quads.append((q,[project(v)for v in q['vertices']]))
 if not quads:return image
 all_points=[v for _,p in quads for v in p];left=min(p[0]for p in all_points);right=max(p[0]for p in all_points);top=min(p[1]for p in all_points);bottom=max(p[1]for p in all_points)
 scale=min(56/max(right-left,1e-5),56/max(bottom-top,1e-5));off_x=(64-(right-left)*scale)/2;off_y=(64-(bottom-top)*scale)/2
 pixels=image.load()
 for q,positions in quads:
  p=[[(v[0]-left)*scale+off_x,(v[1]-top)*scale+off_y,v[2]]for v in positions];texture=images[q['tile']];sample=texture.load()
  shade=[.6,.6,1,.5,.8,.8][q.get('shadeDirection',q['direction'])]if q.get('shade',True)else 1
  for ids in [(0,1,2),(0,2,3)]:
   a,b,c=[p[i]for i in ids];den=(b[1]-c[1])*(a[0]-c[0])+(c[0]-b[0])*(a[1]-c[1])
   if abs(den)<1e-8:continue
   for y in range(max(0,math.floor(min(a[1],b[1],c[1]))),min(size,math.ceil(max(a[1],b[1],c[1])))):
    for x in range(max(0,math.floor(min(a[0],b[0],c[0]))),min(size,math.ceil(max(a[0],b[0],c[0])))):
     aa=((b[1]-c[1])*(x+.5-c[0])+(c[0]-b[0])*(y+.5-c[1]))/den;bb=((c[1]-a[1])*(x+.5-c[0])+(a[0]-c[0])*(y+.5-c[1]))/den;cc=1-aa-bb
     if min(aa,bb,cc)<-1e-6:continue
     d=aa*a[2]+bb*b[2]+cc*c[2];k=x+y*size
     if d<depth[k]-1e-6:continue
     u=sum(w*q['uv'][i][0]for w,i in zip([aa,bb,cc],ids));v=sum(w*q['uv'][i][1]for w,i in zip([aa,bb,cc],ids));r,g,bv,alpha=sample[min(15,max(0,int(u*16))),min(15,max(0,int(v*16)))]
     if alpha<25:continue
     if 'tint' in q:r,g,bv=[round(v*t/255)for v,t in zip([r,g,bv],q.get('tintRGB',[72,181,24]))]
     pixels[x,y]=(round(r*shade),round(g*shade),round(bv*shade),alpha);depth[k]=d
 return image


def main():
 parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('client',type=Path);parser.add_argument('--language',type=Path);args=parser.parse_args()
 jar=args.client;assert hashlib.sha1(jar.read_bytes()).hexdigest()==EXPECTED,'Client SHA-1 mismatch'
 imp=Importer(jar);palette=[];input_sources=[]
 for name in ['java26-structures.json','java26-desert-pyramid.json','java26-tree-shapes.json']:
  p=ROOT/'src/core/worldgen/data'/name
  if not p.exists():continue
  input_sources.append({'file':str(p.relative_to(ROOT)),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
  obj=json.loads(p.read_text())
  if 'templates' in obj:
   for template in obj['templates'].values():
    palette.extend(template['palette'])
    for block in template['blocks']:
     if len(block)>4 and 'final_state' in block[4]:
      final=block[4]['final_state'];name,_,raw=final.partition('[')
      palette.append({'Name':canonical(name),'Properties':dict(p.split('=',1)for p in raw.rstrip(']').split(',')if p)})
  else:palette.extend(obj['palette'])
 if not palette:raise ValueError('Export structure palettes first')
 # Architectural tools may place these even when they do not occur in the selected NBT.
 for name in ['sandstone_stairs','sandstone_slab','chiseled_sandstone','cut_sandstone','stone_pressure_plate','tnt','chest']:
  palette.append({'Name':'minecraft:'+name})
 palette=[p for p in palette if p['Name'] not in ['minecraft:air','minecraft:cave_air','minecraft:void_air','minecraft:jigsaw','minecraft:structure_block','minecraft:structure_void']]
 by_name={}
 for state in palette:by_name.setdefault(state['Name'],[]).append(state.get('Properties',{}))
 old=json.loads(DEST.read_text()) if DEST.exists() else {};old_ids={s['key']:s['id'] for s in old.get('states',[])}
 next_id=max([4095,*old_ids.values()])+1
 states=[];defaults={}
 for name,actual in sorted(by_name.items()):
  path=resource_path('blockstates',name);definition=imp.json(path);domains={};base={}
  for props in actual:
   for k,v in props.items():base.setdefault(k,v)
  for test in definition.get('variants',{}):
   for clause in test.split(','):
    if clause:
     k,v=clause.split('=',1);domains.setdefault(k,set()).update(v.split('|'))
  for part in definition.get('multipart',[]):condition_domains(part.get('when',{}),domains)
  # Multipart conditions sometimes mention only the true arm.
  for k,v in domains.items():
   if v <= {'true','false'}:v.update(['true','false'])
  if name.endswith('chest'):
   domains.update(facing=set(['north','east','south','west']),type=set(['single']))
   base.update(waterlogged='false')
  defaults_for={'facing':'north','half':'lower' if name.endswith('_door') else 'bottom','hinge':'left','open':'false','powered':'false',
   'waterlogged':'false','axis':'y','shape':'straight','part':'foot','occupied':'false','type':'bottom' if name.endswith('_slab') else 'single',
   'north':'false','east':'false','south':'false','west':'false','up':'true','lit':'false','snowy':'false','layers':'1','age':'0','hanging':'false'}
  default_props={**base,**{k:defaults_for.get(k,sorted(v)[0]) if defaults_for.get(k,sorted(v)[0]) in v else sorted(v)[0] for k,v in domains.items()}}
  defaults[name]=key(name,default_props)
  combinations=[dict(zip(domains,values)) for values in itertools.product(*(sorted(v) for v in domains.values()))]
  all_props={key(name,{**base,**p}):{**base,**p} for p in combinations}
  for p in actual:
   if not domains or all(k in p for k in domains):all_props[key(name,p)]=p
  all_props[key(name,default_props)]=default_props
  for props in all_props.values():states.append(imp.bake_state(name,props,definition))
 for state in sorted(states,key=lambda s:s['key']):
  state['id']=old_ids.get(state['key'],next_id)
  if state['key'] not in old_ids:next_id+=1
 icon_models={name:imp.inventory(name)for name in by_name}
 imp.split_large_textures(states+[m for m in icon_models.values()if isinstance(m,dict)])
 # State IDs and texture slots survive future additions.
 tiles=dict(old.get('tiles',{}));next_tile=max([127,*tiles.values()])+1
 for name in sorted(imp.textures):
  if name not in tiles:tiles[name]=next_tile;next_tile+=1
 for state in states:
  state['particle']=tiles[state['particle']]
  for q in state['quads']:q['tile']=tiles[q.pop('texture')]
 for model in icon_models.values():
  if isinstance(model,dict):
   for q in model['quads']:q['tile']=tiles[q.pop('texture')]
 rows=math.ceil(next_tile/4)
 atlas_paths=[OUT/n for n in ['atlas.png','atlas_classic.png','atlas_terrain.png']]
 atlases=[]
 for p in atlas_paths:
  image=Image.new('RGBA',(64,rows*16));image.paste(Image.open(p).convert('RGBA'),(0,0));atlases.append(image)
 folder=OUT/'architecture';folder.mkdir(exist_ok=True)
 images={}
 for texture,index in tiles.items():
  image=imp.customTextures.get(texture)
  if image is None:
   raw=imp.read(resource_path('textures',texture,'.png'));image=Image.open(io.BytesIO(raw)).convert('RGBA')
  if image.width!=16:raise ValueError(f'Unexpected tile width {texture}: {image.size}')
  image=image.crop((0,0,16,16));images[index]=image
  for atlas in atlases:atlas.paste(image,((index%4)*16,(index//4)*16))
  image.save(folder/(texture.replace(':','_').replace('/','_')+'.png'))
 for p,image in zip(atlas_paths,atlases):image.save(p,optimize=True)
 by_key={s['key']:s for s in states}
 for name,state_key in defaults.items():
  if name in ['minecraft:air','minecraft:water','minecraft:lava']:continue
  paths=[OUT/folder/(name.split(':')[1]+'.png')for folder in ['icons','icons_classic']]
  if all(p.exists()for p in paths):continue
  icon_state=by_key[state_key]
  if name=='minecraft:chest':icon_state=by_key.get(key(name,{**icon_state['properties'],'facing':'south'}),icon_state)
  icon_model=icon_models.get(name)
  icon=icon_model if isinstance(icon_model,Image.Image) else render_icon(icon_model or icon_state,images)
  if icon.getbbox():
   for p in paths:
    if not p.exists():icon.save(p)
 for name in ['normal','normal_left','normal_right']:
  path=f'assets/minecraft/textures/entity/chest/{name}.png'
  if path in imp.z.namelist():(folder/f'chest_{name}.png').write_bytes(imp.read(path))
 names=list(old.get('names',[]))+[n for n in sorted(by_name) if n not in old.get('names',[])]
 labels=dict(old.get('labels',{}))
 if args.language:
  raw=args.language.read_bytes();assert hashlib.sha1(raw).hexdigest()=='0f670c974705eb4868baf9d6760ad2f5ea52fc2b'
  language=json.loads(raw);labels={name:language.get('block.'+name.replace(':','.'),name.split(':')[1])for name in names}
 elif 'labels' in old:labels=old['labels']
 out={'target':'Minecraft Java 26.3','client_sha1':EXPECTED,'atlasRows':rows,'tiles':tiles,'names':names,'defaults':defaults,'labels':labels,'states':sorted(states,key=lambda s:s['id']),'unsupported':sorted(set(imp.unsupported))}
 shape_file=DEST.with_name('java26-architecture-shapes.json')
 if shape_file.exists():
  shapes=json.loads(shape_file.read_text())
  for state in out['states']:
   if state['key'] in shapes:
    state['modelBoxes']=state['boxes'];state.update(shapes[state['key']])
  out['shapeSource']='Official BlockState.getCollisionShape/getShape/getOcclusionShape, EmptyBlockGetter, zero block position'
 DEST.parent.mkdir(exist_ok=True,parents=True);DEST.write_text(json.dumps(out,separators=(',',':'))+'\n')
 (OUT/'java-architecture-provenance.json').write_text(json.dumps({'target':out['target'],'client_sha1':EXPECTED,'files':[{'source':p,'sha1':sha} for p,sha in sorted(imp.records.items())],
  'input_palettes':input_sources,
  'shape_probe_sha256':hashlib.sha256(Path(__file__).with_name('ArchitectureShapeProbe.java').read_bytes()).hexdigest(),
  'adaptations':['Official block models flattened to baked quads; face UV rotations, element rotations, blockstate rotations and uvlock applied','Original PNG first frames packed from tile 128, preserving earlier atlas slots; 32px sign texture is tiled with face subdivision, retaining original pixel resolution','Weighted model alternatives use the first listed model; no arbitrary substituted geometry','Official collision and selection shapes are merged from java26-architecture-shapes.json; pre-merge modelBoxes retain transformed element AABBs','Native fluids are explicitly marked nativeRender=fluid and use the existing runtime fluid renderer'],
  'language_sha1':'0f670c974705eb4868baf9d6760ad2f5ea52fc2b' if args.language else None,'unsupported_entity_models':out['unsupported']},indent=2)+'\n')
 print(json.dumps({'states':len(states),'names':len(names),'tiles':len(tiles),'atlasRows':rows,'unsupported':out['unsupported']},ensure_ascii=False))
if __name__=='__main__':main()
