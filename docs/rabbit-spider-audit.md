# Rabbit and spider: Java 26.3 reference audit

This update replaces the two remaining procedural skins and substitute models among the ten existing mob species. It does not introduce new species or replace the other eight existing official-model adaptations.

## Source

Official client: [Java 26.3 client JAR](https://piston-data.mojang.com/v1/objects/e877b6a07acd633fb3bb475002175cec036e7b87/client.jar), SHA-1 `e877b6a07acd633fb3bb475002175cec036e7b87`.

Unmodified textures:

- `assets/minecraft/textures/entity/rabbit/rabbit_brown.png` — 64×64 adult brown rabbit.
- `assets/minecraft/textures/entity/spider/spider.png` — 64×32 spider.
- `assets/minecraft/textures/entity/spider/spider_eyes.png` — 64×32 independent eye layer.

Their output paths, dimensions and SHA-256 hashes are in `public/textures/mobs/SOURCES.json`. Original model definitions were inspected from `AdultRabbitModel.createBodyLayer`, `RabbitModel.setupAnim`, `SpiderModel.createSpiderBodyLayer` and `SpiderModel.setupAnim` in that same pinned client. This is the modern adult rabbit definition, not the older rabbit model with a 64×32 texture.

## Geometry and pose

Models retain original cube dimensions, UV origins and local pivots, in units of 1/16 block. The existing renderer converts Java's +Y-down/-Z-forward coordinates once to the project's +Y-up/+X-forward coordinates.

Rabbit uses the official nested body, head, ear, front-leg group, back-leg group and haunch hierarchy. The torso is 8×6×10 pixels, head 5×5×5, ears 2×5×1, and front legs 2×4×2. Body pitch is −0.3927 radians and the head's rest pitch +0.3927; the transformed offsets are retained to four decimal model pixels, matching the authored constants' practical precision. The nine visible cubes all read the 64×64 skin.

Spider uses an 8×8×8 head, 6×6×6 thorax, 10×8×12 abdomen, and eight 16×2×2 legs. Leg pivots are X ±4, Y 15, Z 2/1/0/−1 in model pixels. Their rest yaw and splay use the official ±π/4, ±π/8 and ±0.58119464 values. Left legs use mirrored texture coordinates. The independent additive eye material stays bright when the ordinary skin is darkened by the world-light sample and is disposed with the model.

## Animation data

`src/render/data/rabbit26Animations.json` is a numeric extraction of `RabbitAnimation.HOP` and `RabbitAnimation.IDLE_HEAD_TILT` from the official class's static definitions. Every parsed keyframe was checked to have exactly one timestamp, three vector values, and an explicit interpolation mode. HOP is a looping 0.75-second clip with 22 channels and 110 keyframes; IDLE_HEAD_TILT is a non-looping 4-second clip with 16 channels and 236 keyframes. Rotation values remain in degrees in the data; runtime conversion reproduces `degreeVec`, `posVec` (including Y inversion), and `scaleVec`. Linear/Catmull–Rom interpolation follows the destination keyframe's interpolation mode. Each application restores the rest pose first so transforms do not accumulate.

Spider motion uses the inspected `walkAnimationPos × 0.6662` phase, four offsets 0/π/π/2/3π/2, sweep `−cos(phase×2+offset)×0.4×speed`, and lift `abs(sin(phase+offset)×0.4)×speed`, mirrored between the two legs of each pair. Java's model rotation order is retained for the combined leg rotations. The old generic bobbing and velocity-based whole-body tilt are disabled for these two models.

## Remaining differences

The project has simplified mob AI and does not expose Java's animation state packets. Therefore rabbit hop starts from movement state and idle tilt is scheduled locally after six seconds of idling, instead of reproducing the original AI trigger. Spider walk state is derived from this simulation's velocity and updated at render time; the model's pose equations and constants are verified, but complete vanilla movement timing is not claimed. Rabbit color variants/babies, separate eye-look targets, world entity lighting and physical movement remain outside this update.

Validation: model hierarchy, cube dimensions, atlas bounds, spider rest/animated poses, rabbit known-keyframe values, loop/reset behavior, emissive eye disposal and actual `MobRenderer.sync` behavior are tested without a browser. The existing eight-species geometry tests continue to pass. Browser visual QA and publication belong to the root task.
