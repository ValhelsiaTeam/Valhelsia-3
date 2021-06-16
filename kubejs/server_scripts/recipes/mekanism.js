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

  // Bayou Blues
  event.recipes.mekanism.sawing(Item.of('mekanism:sawdust', 1), 'bayou_blues:cypress_branch')
  event.recipes.mekanism.sawing(Item.of('mekanism:sawdust', 2), 'bayou_blues:cypress_knee')
  event.recipes.mekanism.sawing(Item.of('mekanism:sawdust', 4), 'bayou_blues:large_cypress_knee')

  // BoP
  event.recipes.mekanism.crushing('biomesoplenty:white_sand', 'quark:marble')
  event.recipes.mekanism.crushing('biomesoplenty:black_sand', 'minecraft:basalt')

  // Decorative Blocks
  event.recipes.mekanism.crushing('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

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
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'autumnity:foul_berries')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'bayou_blues:algae')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'bayou_blues:beard_moss')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 7), 'bayou_blues:beard_moss_block')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'bayou_blues:giant_fern')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'bayou_blues:gooseberries')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'bayou_blues:gooseberry_sack')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'druidcraft:blueberries')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'druidcraft:elderberries')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'endergetic:poise_bush')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'endergetic:tall_poise_bush')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'environmental:cherries')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'environmental:duckweed')
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
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'upgrade_aquatic:beachgrass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'upgrade_aquatic:tall_beachgrass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'upgrade_aquatic:mulberry')

  // Minecraft
  event.recipes.mekanism.crushing('minecraft:red_sand', 'minecraft:granite')

  // Immersive Engineering Compat
  event.recipes.mekanism.enriching(Item.of('mekanism:enriched_carbon', 2), '#forge:coal_coke')
  infusionConversion('mekanism:carbon', '#forge:coal_coke', 40)
  infusionConversion('mekanism:carbon', '#forge:dusts/coal_coke', 40)

  // Quark
  colors.forEach(function(element) {
    // Stained Planks - get double the planks for the same amount of dye.
    event.recipes.mekanism.combining(Item.of(`quark:${element}_stained_planks`, 16), Item.of(`#minecraft:planks`, 16), `#forge:dyes/${element}`)
  })

  // Upgrade Aquatic - converts more kelp per dye.
  event.recipes.mekanism.combining(Item.of('upgrade_aquatic:ochre_kelp', 8), Item.of('minecraft:kelp', 8), '#forge:dyes/yellow')
  event.recipes.mekanism.combining(Item.of('upgrade_aquatic:polar_kelp', 8), Item.of('minecraft:kelp', 8), '#forge:dyes/cyan')
  event.recipes.mekanism.combining(Item.of('upgrade_aquatic:thorny_kelp', 8), Item.of('minecraft:kelp', 8), '#forge:dyes/brown')
  event.recipes.mekanism.combining(Item.of('upgrade_aquatic:tongue_kelp', 8), Item.of('minecraft:kelp', 8), '#forge:dyes/red')

  // Create
  event.recipes.mekanism.metallurgic_infusing('create:rose_quartz', 'minecraft:quartz', 'mekanism:redstone', 80) // 1 redstone = 10. Keeping in line w/ manual recipe
  event.recipes.mekanism.combining(Item.of('create:polished_rose_quartz', 8), Item.of('create:rose_quartz', 8), '#forge:sandstone')
})
