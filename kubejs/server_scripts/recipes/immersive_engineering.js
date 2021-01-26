// priority: 10

events.listen('recipes', function (event) {
  // BoP
  event.recipes.immersiveengineering.crusher('biomesoplenty:white_sand', 'minecraft:diorite')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:white_sand', 2), 'biomesoplenty:white_sandstone')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:white_sand', 2), 'biomesoplenty:smooth_white_sandstone')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:white_sand', 2), 'biomesoplenty:cut_white_sandstone')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:white_sand', 2), 'biomesoplenty:chiseled_white_sandstone')
  
  event.recipes.immersiveengineering.crusher('biomesoplenty:black_sand', 'minecraft:basalt')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:black_sand', 2), 'biomesoplenty:black_sandstone')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:black_sand', 2), 'biomesoplenty:smooth_black_sandstone')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:black_sand', 2), 'biomesoplenty:cut_black_sandstone')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:black_sand', 2), 'biomesoplenty:chiseled_black_sandstone')

  // Decorative Blocks
  event.recipes.immersiveengineering.crusher('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

  // Minecraft
  event.recipes.immersiveengineering.crusher('minecraft:red_sand', 'minecraft:granite')
})
