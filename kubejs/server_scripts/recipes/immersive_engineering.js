// priority: 10

events.listen('recipes', function (event) {
  // Atmospheric Compat
  event.recipes.immersiveengineering.metal_press(Item.of('atmospheric:aloe_leaves', 9), 'atmospheric:aloe_bundle', 'immersiveengineering:mold_unpacking')
  event.recipes.immersiveengineering.metal_press(Item.of('atmospheric:barrel_cactus', 9), 'atmospheric:barrel_cactus_batch', 'immersiveengineering:mold_unpacking')
  event.recipes.immersiveengineering.metal_press(Item.of('atmospheric:passion_vine', 9), 'atmospheric:passion_vine_bundle', 'immersiveengineering:mold_unpacking')

  // Autumnity Compat
  event.recipes.immersiveengineering.metal_press(Item.of('autumnity:snail_slime', 9), 'autumnity:snail_slime_block', 'immersiveengineering:mold_unpacking')

  // BoP Compat
  event.recipes.immersiveengineering.crusher('biomesoplenty:white_sand', 'quark:marble')
  event.recipes.immersiveengineering.crusher('biomesoplenty:black_sand', 'minecraft:basalt')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:white_sand', 2), '#forge:sandstone/white', Item.of('bloodmagic:saltpeter').withChance(0.5))
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:black_sand', 2), '#forge:sandstone/black', Item.of('bloodmagic:saltpeter').withChance(0.5))
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:orange_sand', 2), '#forge:sandstone/orange', Item.of('bloodmagic:saltpeter').withChance(0.5))

  // Create Compat
  event.recipes.immersiveengineering.metal_press('create:lapis_sheet', 'minecraft:lapis_block', 'immersiveengineering:mold_plate')

  // Decorative Blocks Compat
  event.recipes.immersiveengineering.crusher('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

  // Forbidden & Arcanus Compat
  event.recipes.immersiveengineering.crusher(Item.of('forbidden_arcanus:soulless_sand', 2), '#forge:sandstone/soulless')

  // IE -> Minecraft Compat
  event.recipes.immersiveengineering.crusher('minecraft:red_sand', 'minecraft:granite')
  // Blaze Rods are Expensive to prevent exploiting - needs to match the most dust you can get from processing them.
  event.recipes.immersiveengineering.metal_press('minecraft:blaze_rod', Item.of('minecraft:blaze_powder', 6), 'immersiveengineering:mold_rod') 
  event.recipes.immersiveengineering.metal_press(Item.of('minecraft:dried_kelp', 9), 'minecraft:dried_kelp_block', 'immersiveengineering:mold_unpacking')
  event.recipes.immersiveengineering.metal_press(Item.of('minecraft:nether_wart', 4), 'minecraft:nether_wart_block', 'immersiveengineering:mold_unpacking')

  // Quark Compat
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:soul_sand', 2), '#forge:sandstone/soul')
  
  // Titanium Compat (Industrial Foregoing)
  event.recipes.immersiveengineering.metal_press('titanium:diamond_gear', Item.of('minecraft:diamond', 4), 'immersiveengineering:mold_gear')

  // Upgrade Aquatic Compat
  event.recipes.immersiveengineering.metal_press('upgrade_aquatic:prismarine_rod', Item.of('minecraft:prismarine_shard', 2), 'immersiveengineering:mold_rod')
  
})
