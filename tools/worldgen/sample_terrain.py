#!/usr/bin/env python3
"""Generate independent Java 26.3 terrain fixtures; never starts a game server.

python3 tools/worldgen/sample_terrain.py --jdk /path/to/jdk25 \
  --server-bundle /path/to/26.3-server.jar --output /tmp/terrain.json

The official bundle is hash-checked and extracted only into a temporary folder.
Neither executable Minecraft classes nor the bundle are committed to Mineworld.
"""
import argparse
import hashlib
import os
from pathlib import Path
import subprocess
import tempfile
from zipfile import ZipFile

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--jdk', type=Path, required=True)
parser.add_argument('--server-bundle', type=Path, required=True)
parser.add_argument('--output', type=Path, required=True)
parser.add_argument('--seeds', help='Optional comma-separated signed-long seeds')
args = parser.parse_args()
expected = '33680f5f2ac32864d6d7cf5e56a705fdb3e05f4c'
if hashlib.sha1(args.server_bundle.read_bytes()).hexdigest() != expected:
    raise SystemExit('Expected the official Java 26.3 server bundle SHA-1 ' + expected)
root = Path(__file__).resolve().parents[2]
source = root / 'src/core/worldgen/reference/MineworldTerrainProbe.java'
with tempfile.TemporaryDirectory(prefix='mineworld-terrain-oracle-') as temp:
    folder = Path(temp)
    jars = []
    with ZipFile(args.server_bundle) as archive:
        for name in archive.namelist():
            if name.endswith('.jar') and name.startswith(('META-INF/versions/', 'META-INF/libraries/')):
                destination = folder / f'{len(jars)}.jar'
                destination.write_bytes(archive.read(name))
                jars.append(str(destination))
    if not jars:
        raise SystemExit('No bundled server/libraries found')
    classpath = os.pathsep.join(jars)
    subprocess.run([str(args.jdk/'bin/javac'), '-cp', classpath, '-d', temp, str(source)], check=True)
    command = [str(args.jdk/'bin/java'), '-cp', temp+os.pathsep+classpath, 'MineworldTerrainProbe', str(args.output.resolve())]
    if args.seeds:
        command.append(args.seeds)
    subprocess.run(command, check=True)
