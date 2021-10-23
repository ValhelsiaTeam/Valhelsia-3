// priority: 10
events.listen('recipes', function (event) {
  
  // Add a crushing recipe to multiple mods.
  let crush = (output, input) => {
    // Note: Output needs to be divided into primary + secondary for certain crushing types.
    // Until this is done, don't include any secondary output recipes here.
    event.recipes.immersiveengineering.crusher(output, input)
    event.recipes.mekanism.crushing(output, input)
    event.recipes.create.crushing(output, input)
  }

  // Add a milling recipe to multiple mods.
  let mill = (output, input) => {
    event.recipes.create.milling(output, input)
    // TODO: Add Atum Quern here.
  }

  // Add a milling and crushing recipe to multiple mods.
  let millAndCrush = (output, input) => {
    crush(output, input)
    mill(output, input)
  }

  // Remove Old Crushing Recipes:
  [
    'create:milling/andesite'
  ].forEach(function (remove) {
    event.remove({id: remove})
  })

  // BetterEnd
  // Ender Dust

  // Create
  millAndCrush('create:andesite_cobblestone', 'minecraft:andesite')

})