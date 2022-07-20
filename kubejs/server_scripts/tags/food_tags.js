// priority: 90

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('item.tags', event => {

  // Fruits
  event.add('forge:fruits', [
    'atmospheric:passionfruit',
    'autumnity:foul_berries',
    'bayou_blues:gooseberries',
    'betterendforge:blossom_berry',
    'betterendforge:shadow_berry_raw',
    'blue_skies:cherry',
    'blue_skies:scalefruit',
    'blue_skies:crescent_fruit',
    'blue_skies:brewberry',
    'blue_skies:pink_brewberry',
    'blue_skies:black_brewberry',
    'minecraft:sweet_berries',
    'neapolitan:white_strawberries',
  ]);
  
  // Specific Fruits
  event.add('forge:fruits/cherry', 'blue_skies:cherry');
  event.add('forge:fruits/scalefruit', 'blue_skies:scalefruit');
  event.add('forge:fruits/pine_fruit', 'blue_skies:pine_fruit');
  event.add('forge:fruits/crescent_fruit', 'blue_skies:crescent_fruit');
  event.add('forge:fruits/brewberry', 'blue_skies:brewberry');
  event.add('forge:fruits/brewberry', 'blue_skies:pink_brewberry');
  event.add('forge:fruits/brewberry', 'blue_skies:black_brewberry');
  event.add('forge:fruits/strawberry', 'neapolitan:white_strawberries');
  
  // Vegetables
  event.add('forge:vegetables', [
    'betterendforge:amber_root_raw',
    'blue_skies:cryo_root',
    'blue_skies:fiery_beans',
    'blue_skies:winter_leaves',
    'culturaldelights:avocado',
    'culturaldelights:cut_avocado',
    'culturaldelights:corn_cob',
    'culturaldelights:cucumber',
    'culturaldelights:cut_cucumber',
    'culturaldelights:eggplant',
    'culturaldelights:cut_eggplant',
    'culturaldelights:pickle',
    'culturaldelights:popcorn',
    'culturaldelights:cut_pickle',
    'culturaldelights:white_eggplant',
  ]);

  // Specific Vegetables
  event.add('forge:vegetables/amber_root', 'betterendforge:amber_root_raw');
  event.add('forge:vegetables/aubergine', 'culturaldelights:eggplant', 'mysticalworld:aubergine');
  event.add('forge:vegetables/corn', 'culturaldelights:corn_cob');
  event.add('forge:vegetables/cryo_root', 'blue_skies:cryo_root');
  event.add('forge:vegetables/eggplant', 'culturaldelights:eggplant', 'mysticalworld:aubergine');
  event.add('forge:vegetables/fiery_beans', 'blue_skies:fiery_beans');
  event.add('forge:vegetables/white_eggplant', 'culturaldelights:white_eggplant');
  event.add('forge:vegetables/winter_leaves', 'blue_skies:winter_leaves');

  // Cooked Vegetables
  event.add('forge:cooked_vegetables', [
    'seasonals:roasted_pumpkin',
    'culturaldelights:smoked_corn',
    'culturaldelights:smoked_eggplant',
    'culturaldelights:smoked_cut_eggplant',
    'culturaldelights:smoked_white_eggplant',
    'culturaldelights:smoked_tomato',
  ]);

  // Aubergine
  event.add('forge:cooked_vegetables/aubergine', [
    'culturaldelights:smoked_eggplant', 
    'culturaldelights:smoked_cut_eggplant', 
    'mysticalworld:cooked_aubergine',
  ]);

  // Crops
  event.add('forge:crops', [
    'culturaldelights:avocado',
    'culturaldelights:cut_avocado',
    'culturaldelights:cucumber',
    'culturaldelights:cut_cucumber',
    'culturaldelights:eggplant',
    'culturaldelights:cut_eggplant',
    'culturaldelights:white_eggplant',
  ]);

  // Specific Crops
  event.add('forge:crops/aubergine', ['culturaldelights:eggplant', 'culturaldelights:cut_eggplant']);
  event.add('forge:crops/avocado', ['culturaldelights:avocado', 'culturaldelights:cut_avocado']);
  event.add('forge:crops/cucumber', ['culturaldelights:cucumber', 'culturaldelights:cut_cucumber']);
  event.add('forge:crops/eggplant', ['culturaldelights:eggplant', 'culturaldelights:cut_eggplant']);
  event.add('forge:crops/white_eggplant', ['culturaldelights:white_eggplant']);

  // Cookies (mainly so that they can be added to Jars)
  event.add('supplementaries:cookies', [
    'abnormals_delight:cherry_cookie',
    'abnormals_delight:mulberry_cookie',
    'abnormals_delight:maple_cookie',
    'cookielicious:chocolate_cookie',
    'cookielicious:banana_cookie',
    'cookielicious:mint_cookie',
    'cookielicious:adzuki_cookie',
  ]);

  // Dough
  event.add('forge:food/dough', [ // Using the tag that Atum already uses.
    'create:dough',
    'culturaldelights:corn_dough',
    'farmersdelight:wheat_dough',
    'minecolonies:bread_dough',
    // Deliberately excluding Cookie Dough here - this is intended to be fairly neutral doughs.
  ]);

  // Eggs
  event.add('forge:eggs', [
    'atum:quail_egg',
  ]);

  // Ice
  event.add('forge:ice', [
    'betterendforge:emerald_ice',
    'betterendforge:dense_emerald_ice',
    'betterendforge:ancient_emerald_ice',
  ]);

  // Mushrooms
  event.add('forge:mushrooms', [
    'betterendforge:bolux_mushroom',
    'betterendforge:chorus_mushroom_raw',
    'betterendforge:small_amaranita_mushroom',
    'betterendforge:small_jellyshroom',
    'blue_skies:snowcap_mushroom',
    'darkerdepths:glowshroom',
    'forbidden_arcanus:fungyss',
  ]);

  // Raw Fishes
  event.add('forge:raw_fishes', [
    'betterendforge:end_fish_raw',
    'blue_skies:grittle_flatfish',
    'blue_skies:municipal_monkfish',
    'blue_skies:charscale_moki',
    'blue_skies:horizofin_tunid',
  ]);

  // Cooked Fishes
  event.add('forge:cooked_fishes', [
    'betterendforge:end_fish_cooked',
    'blue_skies:cooked_grittle_flatfish',
    'blue_skies:cooked_municipal_monkfish',
    'blue_skies:cooked_charscale_moki',
    'blue_skies:cooked_horizofin_tunid',
  ]);
  
  // Raw Venison
  event.add('forge:raw_venison', [
    'blue_skies:venison',
    'mysticalworld:venison',
    'twilightforest:raw_venison',
  ]);

  // Cooked Venison
  event.add('forge:cooked_venison', [
    'blue_skies:cooked_venison',
    'mysticalworld:cooked_venison',
    'twilightforest:cooked_venison',
  ]);
  
  // Proteins
  event.add('mysticalworld:proteins', [
    'alexsmobs:blobfish',
    'alexsmobs:boiled_emu_egg',
    'alexsmobs:maggot',
    'alexsmobs:lobster_tail',
    'alexsmobs:cooked_lobster_tail',
    'alexsmobs:kangaroo_meat',
    'alexsmobs:cooked_kangaroo_meat',
    'alexsmobs:moose_ribs',
    'alexsmobs:cooked_moose_ribs',
    'blue_skies:carabeef',
    'blue_skies:cooked_carabeef',
    'blue_skies:monitor_tail',
    'blue_skies:cooked_monitor_tail',
    'blue_skies:bug_guts',
    'environmental:scrambled_eggs',
    '#forge:raw_duck',
    '#forge:cooked_duck',
    '#forge:cooked_venison',
    '#forge:raw_venison',
    '#forge:raw_fishes',
    '#forge:cooked_fishes',
    '#forge:eggs',
    '#forge:cooked_eggs',
  ]);

  event.add('mysticalworld:sugars', [
    'abnormals_delight:vanilla_cake_slice', // Example - many more are missing here (TODO).
  ]);

  // Wolf Prey
  event.add('farmersdelight:wolf_prey', [
    'mysticalworld:venison',
  ]);

});