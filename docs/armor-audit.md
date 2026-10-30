# Java 26.3 armor implementation audit

Verified against the official stable 26.3 client JAR (SHA-1 `e877b6a07acd633fb3bb475002175cec036e7b87`) and its own data generator's `reports/minecraft/components/item/*.json`. The resource files retain their original pixels except for the explicitly documented leather item-icon tint/composite. Exact source paths and SHA-256 hashes are in `public/textures/armor/provenance.json`.

## Implemented data

Order throughout the TypeScript API is head, chest, legs, feet. Regular inventory stays at 36 slots; equipment is a separate four-slot tuple. Old saves without equipment deserialize to four empty slots. `dur` remains remaining durability, preserving the existing save convention.

| Material | Armor points | Maximum durability | Toughness per piece |
| --- | --- | --- | --- |
| Leather | 1, 3, 2, 1 | 55, 80, 75, 65 | 0 |
| Iron | 2, 6, 5, 2 | 165, 240, 225, 195 | 0 |
| Gold | 2, 5, 3, 1 | 77, 112, 105, 91 | 0 |
| Diamond | 3, 8, 6, 3 | 363, 528, 495, 429 | 2 |

Every piece has maximum stack size 1. Numeric IDs 302–317 identify the 16 pieces; 318 is gold ingot, 319 raw iron, 320 raw gold. The four official shaped recipes use leather, iron ingot, gold ingot, or diamond. Both raw metal items smelt to their ingots. The existing ore-block smelting recipes are retained; they are also valid Java recipes and keep old inventories useful.

## Damage and durability

`CombatRules.getDamageAfterAbsorb` supplies the unenchanted formula implemented here:

`raw × (1 − min(20, max(armor / 5, armor − raw / (2 + toughness / 4))) / 25)`.

Fractional damage is retained. `LivingEntity.doHurtEquipment` establishes wear of `max(1, floor(acceptedRawDamage / 4))` on each damageable equipped piece, with no wear for nonpositive damage. The game calls it only for a hit accepted by the hurt cooldown, or the excess damage of a stronger hit in the same window.

The official `data/minecraft/tags/damage_type/bypasses_armor.json` includes fall, drown, starve and on_fire; these four supported damage kinds bypass both armor and armor wear. Cactus and lava are absent from that tag and remain armor-reducible. The contact damage from lava must not be conflated with ongoing burning.

The breaking-hit sequence was checked through the complete relevant method chain: `LivingEntity.getDamageAfterArmorAbsorb` calls `hurtArmor` before reading armor attributes; `ItemStack.hurtAndBreak` calls `LivingEntity.onEquippedItemBroken`, which calls `stopLocationBasedEffects`, whose modifier callback immediately removes the equipment's attributes. Therefore the implementation wears/breaks armor first, then calculates reduction from the remaining pieces. The regression suite covers this order.

## UI and geometry

Survival inventory uses the four existing original texture-backed slots for actual equipment. It rejects the wrong slot/type, preserves durability while swapping, supports right click and dragging, and Shift equips an item only into an empty matching slot. Shift unequip respects inventory capacity. Closing the panel returns crafting/cursor items only; worn pieces stay equipped. Workbench Shift transfer retains ordinary inventory transfer behavior.

HUD armor icons use the official `hud/armor_empty`, `armor_half`, `armor_full` sprites and the actual armor point total. The strip disappears at zero. Durability bars in the inventory reflect remaining durability.

`PlayerPreview.setArmor` renders the equipped pieces with the official `entity/equipment/humanoid` and `humanoid_leggings` textures. Its head/chest/legs/feet part selection follows `HumanoidModel.ADULT_ARMOR_PARTS_PER_SLOT`. `LayerDefinitions` supplies outer inflation 1 and inner inflation 0.5; `HumanoidModel.createBaseArmorMesh` reduces leg inflation by 0.1. Left limbs use mirrored UVs. Official textures are 64×32. The extra head layer in the inspected four materials is transparent and does not add visible geometry here. The preview's lighting and cursor-following camera remain the project's adaptation, not the full original rendering pipeline.

Leather uses the default dye `#A06540` found in official `items/leather_*.json` and `equipment/leather.json`, followed by its untinted overlay. Icons are a deterministic composition of those two original layers; armor textures remain unmodified and are tinted at render time.

## Scope and limits

This change covers four unenchanted sets, equipment persistence interfaces, damage, wear, crafting, icons, HUD and inventory preview. It does not add offhand equipment, armor enchantments, trims, custom dyeing, copper/chainmail/turtle/netherite sets, world or multiplayer avatar armor rendering, or the complete vanilla item interaction system. The UI does not present those absent mechanics as active equipment controls.

Validation is automated logic/geometry testing plus TypeScript checking. No browser visual verification or build was performed by this subtask; the root task performs the shared browser check.

Public supporting references: [official Java 26.3 release](https://www.minecraft.net/en-us/article/minecraft-java-edition-26-3), [armor](https://minecraft.wiki/w/Armor), [armor toughness](https://minecraft.wiki/w/Armor_toughness), [durability](https://minecraft.wiki/w/Durability). Exact implemented constants above come from the pinned official data, not from interpreting screenshots.
