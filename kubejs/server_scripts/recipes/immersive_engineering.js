// priority: 10

events.listen('recipes', function (event) {
  // BoP Compat
  event.recipes.immersiveengineering.crusher('biomesoplenty:white_sand', 'quark:marble')
  event.recipes.immersiveengineering.crusher('biomesoplenty:black_sand', 'minecraft:basalt')
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:white_sand', 2), '#forge:sandstone/white', Item.of('bloodmagic:saltpeter').withChance(0.5))
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:black_sand', 2), '#forge:sandstone/black', Item.of('bloodmagic:saltpeter').withChance(0.5))
  event.recipes.immersiveengineering.crusher(Item.of('biomesoplenty:orange_sand', 2), '#forge:sandstone/orange', Item.of('bloodmagic:saltpeter').withChance(0.5))

  // Decorative Blocks Compat
  event.recipes.immersiveengineering.crusher('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')

  // Forbidden & Arcanus Compat
  event.recipes.immersiveengineering.crusher(Item.of('forbidden_arcanus:soulless_sand', 2), '#forge:sandstone/soulless')

  // Minecraft Tweaks
  event.recipes.immersiveengineering.crusher('minecraft:red_sand', 'minecraft:granite')

  // Quark Compat
  event.recipes.immersiveengineering.crusher(Item.of('minecraft:soul_sand', 2), '#forge:sandstone/soul')
  
  
})
