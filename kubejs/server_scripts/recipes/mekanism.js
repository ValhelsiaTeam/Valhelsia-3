// priority: 10

events.listen('recipes', function (event) {

  // NOTE: Mekanism Sawmill recipes can be found in woodcutting.js so that arrays can be reused.

  // Infusion Conversion
  const infusionConversion = (type, ingredient, amount) => {
    event.custom({
      type: 'mekanism:infusion_conversion',
      input: {
        ingredient: Ingredient.of(ingredient).toJson()
      },
      output: {
        infuse_type: type,
        amount: amount
      }
    })
  }

  // Aquaculture
  event.recipes.mekanism.crushing(Item.of('minecraft:bone_meal', 5), 'aquaculture:fish_bones')

  // Atmospheric
  event.recipes.mekanism.crushing(Item.of('atmospheric:arid_sand', 2), '#forge:sandstone/arid')
  event.recipes.mekanism.crushing(Item.of('atmospheric:red_arid_sand', 2), '#forge:sandstone/red_arid')
  event.recipes.mekanism.crushing(Item.of('atmospheric:arid_sand', 1), 'create:gabbro')
  event.recipes.mekanism.crushing(Item.of('atmospheric:red_arid_sand', 1), 'quark:jasper')

  // Atum
  event.recipes.mekanism.crushing(Item.of('minecraft:bone_meal', 9), 'atum:dirty_bone_block')

  // Bayou Blues
  event.recipes.mekanism.sawing(Item.of('mekanism:sawdust', 1), 'bayou_blues:cypress_branch')
  event.recipes.mekanism.sawing(Item.of('mekanism:sawdust', 2), 'bayou_blues:cypress_knee')
  event.recipes.mekanism.sawing(Item.of('mekanism:sawdust', 4), 'bayou_blues:large_cypress_knee')

  // BoP
  event.recipes.mekanism.crushing(Item.of('mekanism:sawdust', 1), 'biomesoplenty:dead_branch')
  event.recipes.mekanism.crushing('biomesoplenty:white_sand', 'quark:marble')
  event.recipes.mekanism.crushing('biomesoplenty:black_sand', 'minecraft:basalt')

  // Create
  event.recipes.mekanism.metallurgic_infusing('create:rose_quartz', 'minecraft:quartz', 'mekanism:redstone', 80) // 1 redstone = 10. Keeping in line w/ manual recipe
  event.recipes.mekanism.combining(Item.of('create:polished_rose_quartz', 8), Ingredient.of('create:rose_quartz', 8), '#forge:sandstone')

  // Decorative Blocks
  event.recipes.mekanism.crushing('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

  // Forbidden and Arcanus
  event.recipes.mekanism.crushing(Item.of('forbidden_arcanus:soulless_sand', 2), '#forge:sandstone/soulless')

  // Mekanism Combiner
  colors.forEach(function(element) {
    // Minecraft Dying
    event.recipes.mekanism.combining(Item.of(`minecraft:${element}_stained_glass`, 16), Ingredient.of('minecraft:glass', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`minecraft:${element}_stained_glass_pane`, 16), Ingredient.of('minecraft:glass_pane', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`minecraft:${element}_wool`, 8), Ingredient.of('#minecraft:wool', 8), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`minecraft:${element}_carpet`, 16), Ingredient.of('#minecraft:carpets', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`minecraft:${element}_terracotta`, 16), Ingredient.of('#forge:terracotta', 16), `#forge:dyes/${element}`)

    // Environmental Terracotta Bricks Dying
    event.recipes.mekanism.combining(Item.of(`environmental:${element}_terracotta_bricks`, 16), Ingredient.of('environmental:terracotta_bricks', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`environmental:chiseled_${element}_terracotta_bricks`, 16), Ingredient.of('environmental:chiseled_terracotta_bricks', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`environmental:${element}_terracotta_brick_stairs`, 16), Ingredient.of('environmental:terracotta_brick_stairs', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`environmental:${element}_terracotta_brick_slab`, 16), Ingredient.of('environmental:terracotta_brick_slab', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`environmental:${element}_terracotta_brick_wall`, 16), Ingredient.of('environmental:terracotta_brick_wall', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`environmental:${element}_terracotta_brick_vertical_slab`, 16), Ingredient.of('environmental:terracotta_brick_vertical_slab', 16), `#forge:dyes/${element}`)

    // Atum Crystal Glass Dying
    event.recipes.mekanism.combining(Item.of(`atum:${element}_stained_crystal_glass`, 16), Ingredient.of('atum:crystal_glass', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`atum:${element}_stained_crystal_glass_pane`, 16), Ingredient.of('atum:crystal_glass_pane', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`atum:${element}_stained_palm_framed_crystal_glass_pane`, 16), Ingredient.of('atum:palm_framed_crystal_glass_pane', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`atum:${element}_stained_palm_framed_crystal_glass`, 16), Ingredient.of('atum:palm_framed_crystal_glass', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`atum:${element}_stained_deadwood_framed_crystal_glass_pane`, 16), Ingredient.of('atum:deadwood_framed_crystal_glass_pane', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`atum:${element}_stained_deadwood_framed_crystal_glass`, 16), Ingredient.of('atum:deadwood_framed_crystal_glass', 16), `#forge:dyes/${element}`)

    // BetterEnd Hydralux Petal Block Dying
    event.recipes.mekanism.combining(Item.of(`betterendforge:hydralux_petal_block_${element}`, 16), Ingredient.of('betterendforge:hydralux_petal_block', 16), `#forge:dyes/${element}`)

    // Cooking For Blockheads Kitchen Floor Dying
    event.recipes.mekanism.combining(Item.of(`cookingforblockheads:${element}_kitchen_floor`, 16), Ingredient.of('cookingforblockheads:white_kitchen_floor', 16), `#forge:dyes/${element}`)

    // Druidcraft Soulfire Dying
    event.recipes.mekanism.combining(Item.of(`druidcraft:${element}_soulfire`, 8), Ingredient.of('#druidcraft:soulfire', 8), `#forge:dyes/${element}`)

    // Mekanism Plastic Dying
    event.recipes.mekanism.combining(Item.of(`mekanismadditions:${element}_plastic`, 16), Ingredient.of('#mekanismadditions:plastic_blocks/plastic', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`mekanismadditions:${element}_plastic`, 8), Ingredient.of('mekanism:hdpe_sheet', 8), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`mekanismadditions:${element}_plastic_road`, 16), Ingredient.of('#mekanismadditions:plastic_blocks/road', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`mekanismadditions:${element}_reinforced_plastic`, 16), Ingredient.of('#mekanismadditions:plastic_blocks/reinforced', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`mekanismadditions:${element}_plastic_fence`, 16), Ingredient.of('#forge:fences/plastic', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`mekanismadditions:${element}_plastic_fence_gate`, 16), Ingredient.of('#forge:fence_gates/plastic', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`mekanismadditions:${element}_plastic_transparent_stairs`, 16), Ingredient.of('#forge:stairs/plastic/transparent', 16), `#forge:dyes/${element}`)

    // IE Sheetmetal Dying
    event.recipes.mekanism.combining(Item.of(`immersiveengineering:sheetmetal_colored_${element}`, 16), Ingredient.of('#forge:sheetmetals', 16), `#forge:dyes/${element}`)

    // IE Concrete -> Vanilla Concrete
    event.recipes.mekanism.combining(Item.of(`minecraft:${element}_concrete`, 16), Ingredient.of('immersiveengineering:concrete', 16), `#forge:dyes/${element}`)

    // Quark Dying
    event.recipes.mekanism.combining(Item.of(`quark:${element}_framed_glass`, 16), Ingredient.of('quark:framed_glass', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`quark:${element}_framed_glass_pane`, 16), Ingredient.of('quark:framed_glass_pane', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`quark:${element}_stained_planks`, 16), Ingredient.of('#minecraft:planks', 16), `#forge:dyes/${element}`)
    event.recipes.mekanism.combining(Item.of(`quark:${element}_shingles`, 16), Ingredient.of('quark:shingles', 16), `#forge:dyes/${element}`)
  })

  // Mekanism - Bio Fuel
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), '#minecraft:flowers')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), '#minecraft:saplings')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), '#minecraft:leaves')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), '#forge:seeds')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), '#valhelsia:hanging_leaves')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'atmospheric:yucca_fruit')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'atmospheric:aloe_leaves')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'atmospheric:passionfruit')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'atmospheric:passion_vine')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'atum:ophidian_tongue')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'autumnity:foul_berries')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'bayou_blues:algae')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'bayou_blues:beard_moss')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 7), 'bayou_blues:beard_moss_block')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'bayou_blues:giant_fern')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'bayou_blues:gooseberries')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'bayou_blues:gooseberry_sack')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'betterendforge:bulb_vine')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'betterendforge:dense_vine')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'betterendforge:jungle_vine')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'betterendforge:twisted_vine')
  // TODO: Add more BetterEnd items here.

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:barley')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'biomesoplenty:bramble')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:bush')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:cattail')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:clover')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:dead_grass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:desert_grass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:dune_grass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:huge_clover_petal')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:mangrove_root')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:reed')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'biomesoplenty:spanish_moss')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:sprout')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'biomesoplenty:watergrass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'biomesoplenty:willow_vine')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'druidcraft:blueberries')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'druidcraft:elderberries')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'endergetic:poise_bush')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'endergetic:tall_poise_bush')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'environmental:cattail')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 7), 'environmental:cattail_seed_sack')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'environmental:cherries')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'environmental:duckweed')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'environmental:tall_cattail')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 7), 'farmersdelight:rice_bale')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 7), 'farmersdelight:straw_bale')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'farmersdelight:straw')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'farmersdelight:rice_panicle')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'farmersdelight:cabbage')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'farmersdelight:tomato')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'farmersdelight:onion')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'neapolitan:banana')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'neapolitan:strawberries')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'neapolitan:white_strawberries')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 7), 'quark:sugar_cane_block')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'supplementaries:flax')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'twilightforest:torchberries')
  // TODO: Add more Twilight Forest items here.

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'upgrade_aquatic:beachgrass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'upgrade_aquatic:tall_beachgrass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'upgrade_aquatic:mulberry')

  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'valhelsia_structures:hanging_vines')

  // Minecraft
  event.recipes.mekanism.crushing('minecraft:red_sand', 'minecraft:granite')
  event.recipes.mekanism.crushing(Item.of('minecraft:bone_meal', 5), 'minecraft:bone')
  event.recipes.mekanism.crushing(Item.of('minecraft:bone_meal', 9), 'minecraft:bone_block')

  // Mystical World
  event.recipes.mekanism.crushing(Item.of('minecraft:bone_meal', 15), 'mysticalworld:antlers')

  // Immersive Engineering Compat
  event.recipes.mekanism.enriching(Item.of('mekanism:enriched_carbon', 2), '#forge:coal_coke')
  infusionConversion('mekanism:carbon', '#forge:coal_coke', 40)
  infusionConversion('mekanism:carbon', '#forge:dusts/coal_coke', 40)

  // Upgrade Aquatic - converts more kelp per dye.
  event.recipes.mekanism.combining(Item.of('upgrade_aquatic:ochre_kelp', 8), Ingredient.of('minecraft:kelp', 8), '#forge:dyes/yellow')
  event.recipes.mekanism.combining(Item.of('upgrade_aquatic:polar_kelp', 8), Ingredient.of('minecraft:kelp', 8), '#forge:dyes/cyan')
  event.recipes.mekanism.combining(Item.of('upgrade_aquatic:thorny_kelp', 8), Ingredient.of('minecraft:kelp', 8), '#forge:dyes/brown')
  event.recipes.mekanism.combining(Item.of('upgrade_aquatic:tongue_kelp', 8), Ingredient.of('minecraft:kelp', 8), '#forge:dyes/red')
  event.recipes.mekanism.crushing(Item.of('minecraft:bone_meal', 10), 'upgrade_aquatic:thrasher_tooth')
})
