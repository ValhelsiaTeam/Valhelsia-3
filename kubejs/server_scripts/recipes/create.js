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

  // BoP
  crushAndMill('biomesoplenty:white_sand', 'quark:marble')
  crushAndMill('biomesoplenty:black_sand', 'minecraft:basalt')
  crushAndMill([Item.of('biomesoplenty:white_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/white')
  crushAndMill([Item.of('biomesoplenty:black_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/black')
  crushAndMill([Item.of('biomesoplenty:orange_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/orange')

  // Decorative Blocks
  crushAndMill('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

  // Farmer's Delight
  crushAndMill([Item.of('farmersdelight:rice', 9), Item.of('farmersdelight:straw', 9)], 'farmersdelight:rice_bale')

  // Minecraft
  // Sandstone crushing was already in, but this gives parity with Immersive Engineering (ie. 2 sand instead of 1, and chance for saltpeter)
  crushAndMill([Item.of('minecraft:sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/colorless')
  crushAndMill([Item.of('minecraft:red_sand', 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/red')

  // Quark
  crushAndMill([Item.of('minecraft:sugar', 18), Item.of('minecraft:sugar', 2).withChance(0.5), Item.of('minecraft:sugar', 2).withChance(0.25), Item.of('minecraft:sugar', 2).withChance(0.1)], 'quark:sugar_cane_block')

})
