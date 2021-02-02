// priority: 10

events.listen('recipes', function (event) {
  // Temporary fix to allow players to convert between Mekanism and Eidolon Lead Ingots, since Eidolon has hard-coded its own Lead Ingots into some recipes.
  event.shapeless(Item.of('eidolon:lead_ingot', 1), 'mekanism:ingot_lead')
  event.shapeless(Item.of('mekanism:ingot_lead', 1), 'eidolon:lead_ingot')

  // BoP
  event.shapeless(Item.of('biomesoplenty:orange_sand', 2), ['#forge:sand/colorless', '#forge:sand/red'])

  // Create
  event.shapeless(Item.of('create:brass_sheet', 1), ['create:brass_ingot', 'immersiveengineering:hammer'])
  event.shapeless(Item.of('create:lapis_sheet', 1), ['minecraft:lapis_block', 'immersiveengineering:hammer'])

  // Farmer's Delight
  event.shapeless('farmersdelight:organic_compost', [
    'minecraft:dirt', 
    'farmersdelight:straw',
    'farmersdelight:straw',
    'minecraft:bone_meal',
    'minecraft:bone_meal',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood',
    '#forge:dusts/wood'
  ])

  // Immersive Engineering
  event.shapeless(Item.of('immersiveengineering:ingot_silver', 9), '#forge:storage_blocks/silver')
  event.shapeless(Item.of('immersiveengineering:nugget_silver', 9), '#forge:ingots/silver')

  // Minecraft
  // No idea why this recipe was gone, guessing some mod removed it in error.
  event.shapeless(Item.of('minecraft:trapped_chest', 1), ['#forge:chests/wooden', 'minecraft:tripwire_hook'])

  // Powah!
  event.shapeless(Item.of('powah:uraninite_raw_poor', 1), 'mekanism:ingot_uranium')

  // Upgrade Aquatic
  event.shapeless('upgrade_aquatic:driftwood', 'aquaculture:driftwood')
})
