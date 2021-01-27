// priority: 10

events.listen('recipes', function (event) {
  // Create
  event.blasting(Item.of('mekanism:ingot_copper', 1), 'create:crushed_copper_ore').xp(0.1)

  // Immersive Engineering
  event.blasting(Item.of('immersiveengineering:ingot_silver', 1), '#forge:dusts/silver').xp(0.35)
  
})
