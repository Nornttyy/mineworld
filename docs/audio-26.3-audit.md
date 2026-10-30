# Java 26.3 sound update

## Source and coverage

The previous renderer synthesized every effect from filtered noise and oscillators.
This revision plays unchanged OGG recordings from the official Java 26.3 asset
index. `tools/audio/import_java_sounds.py` checks the index, sound-definition and
server-bundle SHA-1s, reads block sound profiles from the official block registry
without starting a server, resolves event aliases, and downloads only the selected
effects. No executable Minecraft classes or music are included.

- 98 implemented block profiles; 164 events (including the intentionally empty event).
- 398 OGG recordings, 3.64 MiB. Every file matches the official SHA-1 and byte size.
- Hashes, source path and attribution: `public/audio/java/provenance.json`.
- Asset index: `917ff6d74b9f635c46bac0d28857206bbcc1ffe4`.
- Sound definitions: `7975165ad4a3c0cb3c05078b914eac0f2c3b5f5f`.
- Registry/server bundle: `33680f5f2ac32864d6d7cf5e56a705fdb3e05f4c`.

## Behavior

Block break/hit/place/step/fall use each block's registry events, base volume and
pitch, with action multipliers. Sandstone and ordinary iron/diamond ores no longer
inherit sand or metal sounds from their names. Modern materials, leaves, flowers,
snow, mud and Nether materials use their own profiles.

Footstep distance advances once per physics tick, by horizontal displacement × 0.6;
the next threshold is floor(distance)+1. Walking into walls is silent, sprinting
naturally shortens the time between steps, and crouching/flying are silent. Water
movement uses swimming samples; entering water uses splash samples. The previous
synthetic jump sound and unconditional landing thud were removed. Damaging falls
have separate impact and block-fall events.

Eating starts its repeated effects after tick 7, at ticks 8/12/16/20/24/28, with a
final consume effect and burp at completion. This follows the inspected 26.3
`Consumable.shouldEmitParticlesAndSounds` and `emitParticlesAndSounds` rules.
Attack audio distinguishes strong, weak, critical, knockback and rejected hits.
Damage audio distinguishes drowning and fire/lava. Mobs use species-specific hurt,
death and ambient calls; creeper fuse start and chicken egg-laying now have sounds.
Arrow impacts, tools, pickups, explosions, portals and menu clicks use samples too.

## Playback

`SampleAudio` uses Web Audio buffers with event-weighted variant selection and
per-event volume/pitch. Positional world events use linear distance attenuation
and stereo panning. There is no custom compressor, reverb, filter or extra synth
layer changing the recordings. The existing master-volume setting is linear and
applies to the menu immediately, including saved mute settings.

Loads are deduplicated, capped at four preload workers, bounded by a 15-second
request timeout, and retried after failures. The decoded cache holds up to 160
samples; at most 48 voices are active. Ended sources disconnect. Pausing cancels
pending world sounds; muting/stopping/hiding the tab also invalidates pending UI
sounds. Old delayed effects are discarded rather than replayed in a burst.

The independent `sound-check.html` page shares the same player. Its check button
downloads and decodes every selected recording without playing them simultaneously.
It does not add diagnostic controls to the game's main UI/HUD. Local gameplay can
be inspected with `?audioTest=1`; only development builds log successfully started
events, and this logging is removed by production compilation.

## Validation and limits

- Hash and OGG-header verification: 398/398 files.
- Browser decoder check: 398/398 recordings; no loading/decoding errors.
- Real gameplay check (new creative seed 36): grass steps follow movement,
  block destruction plays the grass break event, nearby pigs/sheep produce their
  own calls/steps, and pause stops world playback. No browser warnings/errors.
- Unit coverage includes material profiles, distance cadence, water transitions,
  eating ticks, combat routing, pause/mute during decode, request deduplication,
  positional attenuation and failure recovery.
- Full regression suite: 1,005 passing tests, 4 skipped. The final audio lifecycle
  follow-up adds another test; all 33 targeted audio/combat tests pass. TypeScript
  checking and the production build pass.
- The main game's existing survival, combat, world-generation and save tests are
  retained. This revision does not change terrain generation or save identities.

This is **not full acoustic parity with the complete Java client**. Background
music, cave ambience, weather, all block-specific ambient loops, multiplayer remote
action sounds and the full original sound-category settings are not implemented.
The old synthetic background phrases were removed. Browser spatialization is not
Java/OpenAL HRTF, and the audio random sequence is intentionally independent of
world/entity generation. Unsupported movement cases (ladders, mixed snow layers,
vehicles) and exact species ambient timers remain outside this update.
