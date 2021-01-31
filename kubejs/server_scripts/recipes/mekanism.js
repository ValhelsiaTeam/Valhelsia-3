// priority: 10

events.listen('recipes', function (event) {

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
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'upgrade_aquatic:beachgrass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'upgrade_aquatic:tall_beachgrass')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'endergetic:poise_bush')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 5), 'endergetic:tall_poise_bush')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 4), 'atmospheric:passion_vine')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 7), 'farmersdelight:rice_bale')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 7), 'farmersdelight:straw_bale')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 2), 'farmersdelight:straw')
  event.recipes.mekanism.crushing(Item.of('mekanism:bio_fuel', 7), 'quark:sugar_cane_block')

  // Minecraft
  event.recipes.mekanism.crushing('minecraft:red_sand', 'minecraft:granite')

  // Immersive Engineering Compat
  event.recipes.mekanism.enriching(Item.of('mekanism:enriched_carbon', 2), '#forge:coal_coke')
  infusionConversion('mekanism:carbon', '#forge:coal_coke', 40)
  infusionConversion('mekanism:carbon', '#forge:dusts/coal_coke', 40)

})
