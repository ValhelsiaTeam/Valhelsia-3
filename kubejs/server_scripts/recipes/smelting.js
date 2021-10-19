// priority: 10

events.listen('recipes', function (event) {

  // Add a recipe to both furnace and blast furnace.
  const smeltAndBlast = (output, input, xp) => {
    event.smelting(output, input).xp(xp)
    event.blasting(output, input).xp(xp)
  }

  // Aquaculture (tin cans smelt into tin instead of iron)
  smeltAndBlast(Item.of('mekanism:nugget_tin', 7), 'aquaculture:tin_can', 0.1)

  // Biomes 'o' Plenty
  event.smelting('mysticalworld:mud_block', 'biomesoplenty:mud').xp(0.1)

  // Create
  smeltAndBlast(Item.of('mekanism:ingot_copper', 1), '#create:crushed_ores/copper', 0.35)

  // Immersive Engineering
  smeltAndBlast(Item.of('immersiveengineering:ingot_silver', 1), '#forge:dusts/silver', 0.35)
})
