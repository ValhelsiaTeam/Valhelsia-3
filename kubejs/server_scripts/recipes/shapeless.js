// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('recipes', event => {

  // Shapeless Damage Recipe (returns a selected ingredient with 1 durability less, such as with a Spindle)
  const shapelessDamage = (result, ingredients, damageItem) => {
    event.custom({
      type: 'mysticalworld:shapeless_damage_recipe',
      ingredients: ingredients,
      result: Item.of(result).toResultJson(),
      damage_item: Ingredient.of(damageItem).toJson(),
      damage_amount: 1
    });
  };

  // Temporary fix to allow players to convert between Mekanism and Eidolon Lead Ingots, since Eidolon has hard-coded its own Lead Ingots into some recipes.
  // This is getting less temporary, since Eidolon hasn't had any updates. :(
  event.shapeless('eidolon:lead_ingot', 'mekanism:ingot_lead');
  event.shapeless('mekanism:ingot_lead', 'eidolon:lead_ingot');

  // Atmospheric
  event.shapeless('2x atmospheric:red_arid_sand', ['atmospheric:arid_sand', 'minecraft:red_sand']);

  // BoP
  event.shapeless('2x biomesoplenty:orange_sand', ['minecraft:sand', 'minecraft:red_sand']); // Not using a tag since arid sand shouldn't work in this recipe.

  // Create
  event.shapeless('create:brass_sheet', ['#forge:ingots/brass', '#forge:tools/hammer']);
  event.shapeless('create:iron_sheet', ['#forge:ingots/iron', '#forge:tools/hammer']);
  event.shapeless('create:golden_sheet', ['#forge:ingots/gold', '#forge:tools/hammer']);
  event.shapeless('create:copper_sheet', ['#forge:ingots/copper', '#forge:tools/hammer']);

  // Darker Depths
  event.shapeless('darkerdepths:mossy_grimestone', ['darkerdepths:grimestone', 'darkerdepths:glowspire']);

  // Eidolon
  event.shapeless('4x eidolon:pewter_blend', ['#forge:dusts/tin', '#forge:dusts/tin', '#forge:dusts/tin', '#forge:dusts/lead']);
  event.shapeless('4x eidolon:pewter_blend', ['#create:crushed_ores/tin', '#create:crushed_ores/tin', '#create:crushed_ores/tin', '#create:crushed_ores/lead']);

  // Environmental
  shapelessDamage('3x minecraft:string', [Ingredient.of('#forge:seeds/cattail'), Ingredient.of('#forge:seeds/cattail'), Ingredient.of('#forge:seeds/cattail'), Ingredient.of('#forge:tools/spindle')], 'mysticalworld:spindle');

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
  ]);

  // Immersive Engineering
  shapelessDamage('2x immersiveengineering:hemp_fiber', [Ingredient.of('#forge:crops/hemp'), Ingredient.of('#forge:tools/spindle')], 'mysticalworld:spindle');
  event.shapeless('9x immersiveengineering:ingot_silver', '#forge:storage_blocks/silver');
  event.shapeless('9x immersiveengineering:nugget_silver', '#forge:ingots/silver');

  // Minecraft
  // No idea why this recipe was gone, guessing some mod removed it in error.
  event.shapeless('minecraft:trapped_chest', ['#forge:chests/wooden', 'minecraft:tripwire_hook']);

  // Quark
  event.shapeless('2x quark:cobbled_deepslate', ['minecraft:basalt', 'minecraft:cobblestone']);

  // Upgrade Aquatic
  event.shapeless('upgrade_aquatic:driftwood', 'aquaculture:driftwood');
  event.shapeless('upgrade_aquatic:ochre_kelp', ['minecraft:kelp', '#forge:dyes/yellow']);
  event.shapeless('upgrade_aquatic:polar_kelp', ['minecraft:kelp', '#forge:dyes/cyan']);
  event.shapeless('upgrade_aquatic:thorny_kelp', ['minecraft:kelp', '#forge:dyes/brown']);
  event.shapeless('upgrade_aquatic:tongue_kelp', ['minecraft:kelp', '#forge:dyes/red']);
});
