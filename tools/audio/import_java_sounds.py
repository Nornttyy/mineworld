#!/usr/bin/env python3
"""Import only implemented sound events from hash-verified official Java 26.3 assets.

python3 tools/audio/import_java_sounds.py --jdk /path/to/jdk25 \
  --server-bundle /path/to/server.jar --asset-index /path/to/34.json \
  --sounds-json /path/to/sounds.json

OGG samples are preserved byte-for-byte. No music or executable game code is copied.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import tempfile
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[2]
INDEX_HASH = '917ff6d74b9f635c46bac0d28857206bbcc1ffe4'
SERVER_HASH = '33680f5f2ac32864d6d7cf5e56a705fdb3e05f4c'

def verified(path, expected):
    data = path.read_bytes()
    if hashlib.sha1(data).hexdigest() != expected:
        raise ValueError('SHA-1 mismatch: ' + str(path))
    return data

def main():
    p = argparse.ArgumentParser(description=__doc__)
    for name in ('jdk', 'server-bundle', 'asset-index', 'sounds-json'):
        p.add_argument('--' + name, type=Path, required=True)
    args = p.parse_args()
    index = json.loads(verified(args.asset_index, INDEX_HASH))['objects']
    sounds_hash = index['minecraft/sounds.json']['hash']
    sounds = json.loads(verified(args.sounds_json, sounds_hash))
    verified(args.server_bundle, SERVER_HASH)
    with tempfile.TemporaryDirectory(prefix='mineworld-sound-registry-') as temp:
        jars = []
        with ZipFile(args.server_bundle) as z:
            for name in z.namelist():
                if name.endswith('.jar') and name.startswith(('META-INF/versions/', 'META-INF/libraries/')):
                    dest = Path(temp) / f'{len(jars)}.jar'
                    dest.write_bytes(z.read(name))
                    jars.append(str(dest))
        cp = os.pathsep.join(jars)
        subprocess.run([str(args.jdk/'bin/javac'), '-cp', cp, '-d', temp, str(Path(__file__).with_name('MineworldSoundProbe.java'))], check=True)
        output = Path(temp)/'blocks.json'
        subprocess.run([str(args.jdk/'bin/java'), '-cp', temp+os.pathsep+cp, 'MineworldSoundProbe', str(output)], check=True)
        types = json.loads(output.read_text())
    names = sorted(set(re.findall(r"name: '([^']+)'", (ROOT/'src/core/blocks/registry.ts').read_text())))
    aliases = {'grass': 'grass_block', 'grass_plant': 'short_grass', 'snow_layer': 'snow', 'flowing_water': 'water', 'flowing_lava': 'lava'}
    blocks = {name: types[aliases.get(name, name)] for name in names}
    events = {v[a] for v in blocks.values() for a in ('break', 'step', 'place', 'hit', 'fall')}
    events.update([
        'ui.button.click', 'entity.player.hurt', 'entity.player.death',
        'entity.player.hurt_drown', 'entity.player.hurt_on_fire',
        'entity.player.small_fall', 'entity.player.big_fall',
        'entity.player.swim', 'entity.player.splash', 'entity.player.splash.high_speed',
        'entity.player.attack.strong', 'entity.player.attack.weak', 'entity.player.attack.crit',
        'entity.player.attack.knockback', 'entity.player.attack.nodamage',
        'entity.generic.eat', 'entity.player.burp', 'entity.item.pickup', 'entity.item.break',
        'entity.arrow.shoot', 'entity.arrow.hit', 'entity.arrow.hit_player',
        'entity.generic.explode', 'entity.creeper.primed', 'block.portal.travel',
        'entity.chicken.egg',
    ])
    for mob in ('pig', 'cow', 'sheep', 'chicken', 'rabbit', 'zombie', 'skeleton', 'creeper', 'husk', 'spider'):
        events.update('entity.'+mob+'.'+action for action in ('ambient','hurt','death','step') if 'entity.'+mob+'.'+action in sounds)
    resolved = {}
    files = {}
    def resolve(event, visiting=()):
        if event == 'intentionally_empty': return []
        if event in visiting: raise ValueError('Sound reference cycle: ' + event)
        result = []
        for entry in sounds[event].get('sounds', []):
            entry = {'name':entry} if isinstance(entry, str) else entry
            name = entry['name'].removeprefix('minecraft:')
            if entry.get('type') == 'event':
                nested = resolve(name, (*visiting,event))
                total = sum(x['weight'] for x in nested)
                for sub in nested:
                    result.append({**sub, 'volume':sub['volume']*entry.get('volume',1), 'pitch':sub['pitch']*entry.get('pitch',1), 'weight':sub['weight']/total*entry.get('weight',1)})
            else:
                path = 'minecraft/sounds/'+name+'.ogg'
                info = index[path]
                files[name] = {'path': name+'.ogg', 'sha1': info['hash'], 'size':info['size']}
                result.append({'name':name, 'volume':entry.get('volume',1), 'pitch':entry.get('pitch',1), 'weight':entry.get('weight',1)})
        return result
    for event in sorted(events):
        resolved[event] = resolve(event)
    folder = ROOT/'public/audio/java'
    def download(info):
        dest = folder/info['path']
        if dest.exists() and hashlib.sha1(dest.read_bytes()).hexdigest() == info['sha1']: return
        h = info['sha1']
        # System curl uses the host's trusted CA store; keep TLS verification on.
        data = subprocess.run(['curl', '--http1.1', '--fail', '--silent', '--show-error', '--retry', '2', '--max-time', '45', f'https://resources.download.minecraft.net/{h[:2]}/{h}'], check=True, capture_output=True).stdout
        if len(data)!=info['size'] or hashlib.sha1(data).hexdigest()!=h: raise ValueError('Invalid download: '+info['path'])
        dest.parent.mkdir(parents=True,exist_ok=True)
        dest.write_bytes(data)
    with ThreadPoolExecutor(max_workers=8) as pool: list(pool.map(download,files.values()))
    data_dir=ROOT/'src/audio/data'
    data_dir.mkdir(parents=True,exist_ok=True)
    for name,data in [('block-sounds',blocks),('sound-events',resolved)]:
        (data_dir/(name+'.json')).write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
    (folder/'provenance.json').write_text(json.dumps({'target':'Minecraft Java 26.3','asset_index_sha1':INDEX_HASH,'sound_definitions_sha1':sounds_hash,'server_sha1':SERVER_HASH,'source':'https://resources.download.minecraft.net/','copyright':'Minecraft sound recordings © Mojang AB / Microsoft and respective authors. Not original Mineworld audio.','scope':'Selected sound effects only; unchanged OGG bytes; no music.','events':sorted(events),'files':list(files.values())},ensure_ascii=False,indent=2)+'\n')
    print(f'Imported {len(blocks)} block profiles, {len(events)} events, {len(files)} OGG files ({sum(f["size"] for f in files.values())/1024/1024:.2f} MiB).')

if __name__ == '__main__': main()
