// priority: 10

events.listen('recipes', function (event) {

  const fermenter = (fluid, input, amount) => {
    event.custom({
        type: 'immersiveengineering:fermenter',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: Ingredient.of(input).toJson(),
        energy: 6400
    })
  }

  const squeezer = (fluid, input, amount) => {
    event.custom({
        type: 'immersiveengineering:squeezer',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: Ingredient.of(input).toJson(),
        energy: 6400
    })
  }

  // Aquaculture Compat
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:bone_meal', 6), 'aquaculture:fish_bones')

  // Atmospheric Compat
  event.recipes.immersiveengineering.metal_press(Item.of('atmospheric:aloe_leaves', 9), 'atmospheric:aloe_bundle', 'immersiveengineering:mold_unpacking')
  event.recipes.immersiveengineering.metal_press(Item.of('atmospheric:barrel_cactus', 9), 'atmospheric:barrel_cactus_batch', 'immersiveengineering:mold_unpacking')
  event.recipes.immersiveengineering.metal_press(Item.of('atmospheric:passion_vine', 9), 'atmospheric:passion_vine_bundle', 'immersiveengineering:mold_unpacking')
  event.recipes.immersiveengineering.cloche([Item.of('atmospheric:aloe_leaves', 2), Item.of('minecraft:yellow_dye', 2), 'atmospheric:aloe_kernels'], 'atmospheric:aloe_kernels', 'atmospheric:arid_sand', {type: 'crop', block: 'atmospheric:aloe_vera'}).time(800)
  event.recipes.immersiveengineering.crusher('atmospheric:arid_sand', 'create:gabbro')
  event.recipes.immersiveengineering.crusher('atmospheric:red_arid_sand', 'quark:jasper')

  // Atum Compat
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:bone_meal', 6), 'atum:dusty_bone')
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:bone_meal', 9), 'atum:dirty_bone_block')

  // Autumnity Compat
  event.recipes.immersiveengineering.metal_press(Item.of('autumnity:snail_slime', 9), 'autumnity:snail_slime_block', 'immersiveengineering:mold_unpacking')
  event.recipes.immersiveengineering.cloche([Item.of('autumnity:foul_berries', 2)], 'autumnity:foul_berry_pips', 'minecraft:dirt', {type: 'crop', block: 'autumnity:foul_berry_bush'}).time(560)

  // BetterEnd Compat
  event.recipes.immersiveengineering.alloy('betterendforge:aeternium_ingot', '#forge:ingots/terminite', '#forge:ingots/netherite')
  event.recipes.immersiveengineering.alloy('betterendforge:terminite_ingot', '#forge:ingots/iron', 'betterendforge:ender_dust')
  event.recipes.immersiveengineering.alloy('betterendforge:terminite_ingot', '#forge:ingots/thallasium', 'betterendforge:ender_dust')
  event.recipes.immersiveengineering.cloche(['betterendforge:amber_root_raw', 'betterendforge:amber_root_seed'], 'betterendforge:amber_root_seed', 'betterendforge:amber_moss', {type: 'crop', block: 'betterendforge:amber_root_seed'}).time(800)
  event.recipes.immersiveengineering.cloche(['betterendforge:blossom_berry', 'betterendforge:blossom_berry_seed'], 'betterendforge:blossom_berry_seed', 'betterendforge:pink_moss', {type: 'crop', block: 'betterendforge:blossom_berry_seed'}).time(800)
  event.recipes.immersiveengineering.cloche(['betterendforge:chorus_mushroom_raw', 'betterendforge:chorus_mushroom_seed'], 'betterendforge:chorus_mushroom_seed', 'betterendforge:chorus_nylium', {type: 'crop', block: 'betterendforge:chorus_mushroom_seed'}).time(800)
  event.recipes.immersiveengineering.cloche(['betterendforge:shadow_berry_raw', 'betterendforge:shadow_berry'], 'betterendforge:shadow_berry', 'betterendforge:shadow_grass', {type: 'crop', block: 'betterendforge:shadow_berry'}).time(800)
  event.recipes.immersiveengineering.crusher(Item.of('betterendforge:endstone_dust', 2), '#forge:end_stones', Item.of('bloodmagic:saltpeter').withChance(0.5))
  event.recipes.immersiveengineering.crusher(Item.of('betterendforge:ender_shard', 2), '#forge:ores/ender')

  // Blue Skies Compat
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:bone_meal', 9), 'blue_skies:azulfo_horn')
  event.recipes.immersiveengineering.crusher(Item.of('blue_skies:moonstone_shard', 4), '#blueskies:gems/moonstone')

  // BoP Compat
  event.recipes.immersiveengineering.crusher('biomesoplenty:white_sand', 'quark:marble')
  event.recipes.immersiveengineering.crusher('biomesoplenty:black_sand', 'minecraft:basalt')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:white_sand', 2), '#forge:sandstone/white', Item.of('bloodmagic:saltpeter').withChance(0.5))
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:black_sand', 2), '#forge:sandstone/black', Item.of('bloodmagic:saltpeter').withChance(0.5))
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:orange_sand', 2), '#forge:sandstone/orange', Item.of('bloodmagic:saltpeter').withChance(0.5))

  // Decorative Blocks Compat
  event.recipes.immersiveengineering.crusher('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

  // Druidcraft Compat
  squeezer('immersiveengineering:plantoil', 'druidcraft:hemp_seeds', 120)
  event.recipes.immersiveengineering.cloche(['druidcraft:hemp', 'druidcraft:hemp_seeds'], 'druidcraft:hemp_seeds', 'minecraft:dirt', {type: 'crop', block: 'druidcraft:hemp_crop'}).time(800)

  // Eidolon Compat
  event.recipes.immersiveengineering.alloy(Item.of('eidolon:pewter_ingot', 4), Ingredient.of('#forge:ingots/tin', 3), Ingredient.of('#forge:ingots/lead', 1))

  // Farmer's Delight Compat
  fermenter('immersiveengineering:ethanol', '#forge:seeds/rice', 80) // Also forward compatible with Environmental.

  // Forbidden & Arcanus Compat
  event.recipes.immersiveengineering.crusher(Item.of('forbidden_arcanus:soulless_sand', 2), '#forge:sandstone/soulless', Item.of('bloodmagic:saltpeter').withChance(0.5))
  squeezer('immersiveengineering:plantoil', 'forbidden_arcanus:golden_orchid_seeds', 40)
  event.recipes.immersiveengineering.cloche(['forbidden_arcanus:arcane_gold_nugget', 'forbidden_arcanus:golden_orchid_seeds'], 'forbidden_arcanus:golden_orchid_seeds', 'minecraft:dirt', {type: 'crop', block: 'forbidden_arcanus:golden_orchid'}).time(800)

  // Immersive Engineering Compat
  event.recipes.immersiveengineering.cloche([Item.of('immersiveengineering:hemp_fiber', 2), 'immersiveengineering:seed'], 'immersiveengineering:seed', 'minecraft:dirt', {type: 'hemp', block: 'immersiveengineering:hemp'}).time(560)

  // Industrial Foregoing Compat
  event.recipes.immersiveengineering.fertilizer('industrialforegoing:fertilizer').growthModifier(1.5)

  // Mekanism Compat
  event.recipes.immersiveengineering.blast_furnace_fuel('#mekanism:enriched/carbon').time(600)

  // MineColonies Compat
  event.recipes.immersiveengineering.fertilizer('minecolonies:compost').growthModifier(1.5)

  // Minecraft Tweaks
  event.recipes.immersiveengineering.crusher('minecraft:red_sand', 'minecraft:granite')
  // Blaze Rods are Expensive to prevent exploiting - needs to match the most dust you can get from processing them.
  event.recipes.immersiveengineering.metal_press('minecraft:blaze_rod', Item.of('minecraft:blaze_powder', 6), 'immersiveengineering:mold_rod')
  event.recipes.immersiveengineering.metal_press(Item.of('minecraft:dried_kelp', 9), 'minecraft:dried_kelp_block', 'immersiveengineering:mold_unpacking')
  event.recipes.immersiveengineering.metal_press(Item.of('minecraft:nether_wart', 4), 'minecraft:nether_wart_block', 'immersiveengineering:mold_unpacking')
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:bone_meal', 9), 'minecraft:bone_block')
  // Adjusted Nether Wart crushing to prevent duplicating nether wart.
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:nether_wart', 4), 'minecraft:nether_wart')

  // Mystical World Compat
  squeezer('immersiveengineering:plantoil', '#forge:seeds/aubergine', 60)
  event.recipes.immersiveengineering.cloche([Item.of('mysticalworld:aubergine', 2), 'mysticalworld:aubergine_seeds'], 'mysticalworld:aubergine_seeds', 'minecraft:dirt', {type: 'crop', block: 'mysticalworld:aubergine_crop'}).time(800)
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:bone_meal', 15), 'mysticalworld:antlers')

  // Neapolitan Compat
  event.recipes.immersiveengineering.cloche([Item.of('neapolitan:strawberries', 2)], 'neapolitan:strawberry_pips', 'minecraft:dirt', {type: 'crop', block: 'neapolitan:strawberry_bush'}).time(800)

  // Quark Compat
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:soul_sand', 2), '#forge:sandstone/soul', Item.of('bloodmagic:saltpeter').withChance(0.5))

  // Titanium Compat (Industrial Foregoing)
  event.recipes.immersiveengineering.metal_press('titanium:diamond_gear', Item.of('minecraft:diamond', 4), 'immersiveengineering:mold_gear')

  // Upgrade Aquatic Compat
  event.recipes.immersiveengineering.metal_press('upgrade_aquatic:prismarine_rod', Item.of('minecraft:prismarine_shard', 2), 'immersiveengineering:mold_rod')
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:bone_meal', 10), 'upgrade_aquatic:thrasher_tooth')

})
