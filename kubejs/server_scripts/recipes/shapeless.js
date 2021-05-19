// priority: 10

events.listen('recipes', function (event) {

  // Shapeless Damage Recipe (returns a selected ingredient with 1 durability less, such as with a Spindle)
  const shapelessDamage = (result, ingredients, damageItem) => {
    event.custom({
      type: 'mysticalworld:shapeless_damage_recipe',
      ingredients: ingredients,
      result: result.toResultJson(),
      damage_item: damageItem,
      damage_amount: 1
    })
  }

  // Temporary fix to allow players to convert between Mekanism and Eidolon Lead Ingots, since Eidolon has hard-coded its own Lead Ingots into some recipes.
  event.shapeless(Item.of('eidolon:lead_ingot', 1), 'mekanism:ingot_lead')
  event.shapeless(Item.of('mekanism:ingot_lead', 1), 'eidolon:lead_ingot')

  // BoP
  event.shapeless(Item.of('biomesoplenty:orange_sand', 2), ['#forge:sand/colorless', '#forge:sand/red'])

  // Create
  event.shapeless(Item.of('create:brass_sheet', 1), ['create:brass_ingot', 'immersiveengineering:hammer'])
  event.shapeless(Item.of('create:lapis_sheet', 1), ['minecraft:lapis_block', 'immersiveengineering:hammer'])

  // Eidolon
  event.shapeless(Item.of('eidolon:pewter_blend', 4), ['#forge:dusts/tin', '#forge:dusts/tin', '#forge:dusts/tin', '#forge:dusts/lead'])
  event.shapeless(Item.of('eidolon:pewter_blend', 4), ['#create:crushed_ores/tin', '#create:crushed_ores/tin', '#create:crushed_ores/tin', '#create:crushed_ores/lead'])

  // Environmental
  shapelessDamage(Item.of('minecraft:string', 3), [Ingredient.of('#forge:seeds/cattail').toJson(), Ingredient.of('#forge:seeds/cattail').toJson(),Ingredient.of('#forge:seeds/cattail').toJson(), Ingredient.of('mysticalworld:spindle').toJson()], Ingredient.of('mysticalworld:spindle').toJson())

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
  shapelessDamage(Item.of('immersiveengineering:hemp_fiber', 2), [Ingredient.of('#forge:crops/hemp').toJson(), Ingredient.of('mysticalworld:spindle').toJson()], Ingredient.of('mysticalworld:spindle').toJson())
  event.shapeless(Item.of('immersiveengineering:ingot_silver', 9), '#forge:storage_blocks/silver')
  event.shapeless(Item.of('immersiveengineering:nugget_silver', 9), '#forge:ingots/silver')

  // Minecraft
  // No idea why this recipe was gone, guessing some mod removed it in error.
  event.shapeless(Item.of('minecraft:trapped_chest', 1), ['#forge:chests/wooden', 'minecraft:tripwire_hook'])

  // Upgrade Aquatic
  event.shapeless('upgrade_aquatic:driftwood', 'aquaculture:driftwood')
  event.shapeless('upgrade_aquatic:ochre_kelp', ['minecraft:kelp', '#forge:dyes/yellow'])
  event.shapeless('upgrade_aquatic:polar_kelp', ['minecraft:kelp', '#forge:dyes/cyan'])
  event.shapeless('upgrade_aquatic:thorny_kelp', ['minecraft:kelp', '#forge:dyes/brown'])
  event.shapeless('upgrade_aquatic:tongue_kelp', ['minecraft:kelp', '#forge:dyes/red'])
})
