# Realistic texture sources

`realistic_sheet_a.png` and `realistic_sheet_b.png` were generated with the
built-in image-generation tool as production source sheets for MINEWORLD's
realistic texture pack.

Both images use a strict 4×6 grid of orthographic, edge-to-edge, tileable PBR
materials with neutral diffuse lighting and no text, logos, scene objects, or
Minecraft source artwork. Sheet A contains atlas cells 0–23; sheet B contains
cells 24–45 followed by two unused stone placeholders.

Run `python3 tools/textures/gen_realistic.py` after regenerating the classic
atlas. The script crops every cell to 128×128, applies the game's cutout masks
to foliage and grass, and writes the final atlas and inventory icons.
