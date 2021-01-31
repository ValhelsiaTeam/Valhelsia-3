// priority: 10

events.listen('recipes', function (event) {

  // Add a recipe to both crushing wheels and millstone.
  const crushAndMill = (output, input) => {
    event.recipes.create.crushing(output, input)
    event.recipes.create.milling(output, input)
  }

  // Atmospheric
  crushAndMill([Item.of('atmospheric:arid_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/arid')
  crushAndMill([Item.of('atmospheric:red_arid_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/red_arid')
  crushAndMill([Item.of('minecraft:orange_dye', 2), Item.of('minecraft:red_dye').withChance(0.25)], 'atmospheric:hot_monkey_brush')
  crushAndMill([Item.of('minecraft:light_gray_dye', 4), Item.of('minecraft:lime_dye').withChance(0.05)], 'atmospheric:tall_yucca_flower')
  crushAndMill([Item.of('minecraft:purple_dye', 4), Item.of('minecraft:lime_dye').withChance(0.05)], 'atmospheric:water_hyacinth')
  crushAndMill(Item.of('minecraft:yellow_dye', 2), 'atmospheric:yellow_blossoms')

  // BoP
  crushAndMill('biomesoplenty:white_sand', 'quark:marble')
  crushAndMill('biomesoplenty:black_sand', 'minecraft:basalt')
  crushAndMill([Item.of('biomesoplenty:white_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/white')
  crushAndMill([Item.of('biomesoplenty:black_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/black')
  crushAndMill([Item.of('biomesoplenty:orange_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/orange')

  // Decorative Blocks
  crushAndMill('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

  // The Endergetic Expansion
  event.recipes.create.cutting('endergetic:stripped_poise_stem', 'endergetic:poise_stem')
  event.recipes.create.cutting('endergetic:stripped_poise_wood', 'endergetic:poise_wood')
  event.recipes.create.cutting(Item.of('endergetic:poise_planks', 5), 'endergetic:stripped_poise_stem')
  event.recipes.create.cutting(Item.of('endergetic:poise_planks', 5), 'endergetic:stripped_poise_wood')

  // Farmer's Delight
  crushAndMill([Item.of('farmersdelight:rice', 9), Item.of('farmersdelight:straw', 9)], 'farmersdelight:rice_bale')

  // Mekanism
  event.recipes.create.splashing([Item.of('mekanism:nugget_copper', 10), Item.of('mekanism:nugget_copper', 5).withChance(0.5)], 'create:crushed_copper_ore')

  // Minecraft
  // Sandstone crushing was already in, but this gives parity with Immersive Engineering (ie. 2 sand instead of 1, and chance for saltpeter)
  crushAndMill([Item.of('minecraft:sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/colorless')
  crushAndMill([Item.of('minecraft:red_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/red')
  // The original Nether Wart block crushing was terribly underpowered. Now gives back exactly what was put in.
  crushAndMill(Item.of('minecraft:nether_wart', 4), 'minecraft:nether_wart_block')

  // Quark
  crushAndMill([Item.of('minecraft:sugar', 18), Item.of('minecraft:sugar', 2).withChance(0.5), Item.of('minecraft:sugar', 2).withChance(0.25), Item.of('minecraft:sugar', 2).withChance(0.1)], 'quark:sugar_cane_block')

  // Upgrade Aquatic
  event.recipes.create.splashing('upgrade_aquatic:driftwood_log', 'upgrade_aquatic:river_log')
  event.recipes.create.splashing('upgrade_aquatic:driftwood', 'upgrade_aquatic:river_wood')
  event.recipes.create.splashing('upgrade_aquatic:stripped_driftwood_log', 'upgrade_aquatic:stripped_river_log')
  event.recipes.create.splashing('upgrade_aquatic:stripped_driftwood', 'upgrade_aquatic:stripped_river_wood')
  event.recipes.create.cutting('upgrade_aquatic:stripped_driftwood_log', 'upgrade_aquatic:driftwood_log')
  event.recipes.create.cutting('upgrade_aquatic:stripped_driftwood', 'upgrade_aquatic:driftwood')
  event.recipes.create.cutting(Item.of('upgrade_aquatic:driftwood_planks', 5), 'upgrade_aquatic:stripped_driftwood_log')
  event.recipes.create.cutting(Item.of('upgrade_aquatic:driftwood_planks', 5), 'upgrade_aquatic:stripped_driftwood')
  crushAndMill([Item.of('minecraft:pink_dye', 2), Item.of('minecraft:green_dye').withChance(0.1)], 'upgrade_aquatic:pink_searocket')
  crushAndMill([Item.of('minecraft:white_dye', 2), Item.of('minecraft:green_dye').withChance(0.1)], 'upgrade_aquatic:white_searocket')
})
