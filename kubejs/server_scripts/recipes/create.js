// priority: 10

events.listen('recipes', function (event) {

  // Add a recipe to both crushing wheels and millstone.
  const crushAndMill = (output, input) => {
    event.recipes.create.crushing(output, input)
    event.recipes.create.milling(output, input)
  }

  // Decorative Blocks
  crushAndMill('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

})
