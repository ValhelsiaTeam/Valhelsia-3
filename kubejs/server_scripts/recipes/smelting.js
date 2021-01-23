events.listen('recipes', function (event) {
  // Immersive Engineering
  event.smelting(Item.of('immersiveengineering:ingot_silver', 1), '#forge:dusts/silver').xp(0.35)
})
