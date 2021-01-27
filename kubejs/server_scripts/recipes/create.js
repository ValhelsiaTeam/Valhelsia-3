// priority: 10

events.listen('recipes', function (event) {

  // Add a recipe to both crushing wheels and millstone.
  const crushAndMill = (output, input) => {
    event.recipes.create.crushing(output, input)
    event.recipes.create.milling(output, input)
  }

  // BoP
  crushAndMill('biomesoplenty:black_sand', 'quark:marble')
  crushAndMill('biomesoplenty:black_sand', 'minecraft:basalt')

  // Decorative Blocks
  crushAndMill('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

  // Farmer's Delight
  crushAndMill([Item.of('farmersdelight:rice', 9), Item.of('farmersdelight:straw', 9)], 'farmersdelight:rice_bale')

})
