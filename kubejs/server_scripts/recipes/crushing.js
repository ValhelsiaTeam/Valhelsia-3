// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('recipes', event => {
  
  // Add a crushing recipe to multiple mods.
  const crush = (output, input) => {
    // Note: Output needs to be divided into primary + secondary for certain crushing types.
    // Until this is done, don't include any secondary output recipes here.
    event.recipes.immersiveengineering.crusher(output, input);
    event.recipes.mekanism.crushing(output, input);
    event.recipes.create.crushing(output, input);
  };

  // Add a milling recipe to multiple mods.
  // All milling recipes are also automatically made into crushing recipes.
  // Note: Currently doesn't accept secondary outputs.
  const mill = (output, input) => {
    event.recipes.create.milling(output, input);

    // Atum Quern Milling
    event.custom({
      type: 'atum:quern',
      ingredient: Ingredient.of(input).toJson(),
      result: Item.of(output).toResultJson(),
      rotations: 2 // 2 is a reasonable default for most milling here.
    });

    crush(output, input);
  };

  // ----- Remove Old Crushing and Milling Recipes -----
  [
    'create:milling/andesite',
    'create:milling/granite'
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // ----- Add New Crushing Recipes -----

  // Rock to Sand Crushing
  mill('atmospheric:arid_sand', 'darkerdepths:aridrock');
  mill('atmospheric:arid_sand', 'create:gabbro');
  mill('atmospheric:red_arid_sand', 'quark:jasper');
  mill('biomesoplenty:white_sand', 'quark:marble');
  mill('biomesoplenty:black_sand', 'minecraft:basalt');
  mill('blue_skies:crystal_sand', 'create:dolomite');
  mill('blue_skies:midnight_sand', 'quark:cobbled_deepslate');
  mill('minecraft:red_sand', 'minecraft:granite');

  // Aquaculture
  mill('5x minecraft:bone_meal', 'aquaculture:fish_bones');

  // Atum
  mill('6x minecraft:bone_meal', 'atum:dusty_bone');
  mill('9x minecraft:bone_meal', 'atum:dirty_bone_block');

  // BetterEnd
  mill('betterendforge:ender_dust', 'betterendforge:ender_shard');
  mill('betterendforge:ender_dust', 'minecraft:ender_pearl');

  // Biomes 'o' Plenty
  mill('4x minecraft:rotten_flesh', 'biomesoplenty:flesh');

  // Create
  mill('create:andesite_cobblestone', 'minecraft:andesite');
  
  // Decorative Blocks
  mill('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt');
  
  // Druidcraft
  mill('druidcraft:crushed_fiery_glass', '#forge:gems/fiery_glass');

  // Mekanism
  mill('mekanism:sawdust', 'biomesoplenty:dead_branch');

  // Mystical World
  mill('15x minecraft:bone_meal', 'mysticalworld:antlers');

  // Upgrade Aquatic
  mill('10x minecraft:bone_meal', 'upgrade_aquatic:thrasher_tooth');
});