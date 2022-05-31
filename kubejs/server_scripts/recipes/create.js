// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('recipes', event => {

  // Add a recipe to both crushing wheels and millstone.
  // Note: If a crushing recipe has no secondary outputs, use crushing.js instead.
  const crushAndMill = (output, input) => {
    event.recipes.create.crushing(output, input);
    event.recipes.create.milling(output, input);
  };

  // Convenience function for sandstone milling.
  // Automatically adds chance for saltpeter and sets output quantity to 2 sand. 
  const sandstoneMill = (output, input) => {
    event.recipes.create.milling([Item.of(output, 2), Item.of('bloodmagic:saltpeter').withChance(0.5)], input);
  };

  // Atmospheric
  sandstoneMill('atmospheric:arid_sand', '#forge:sandstone/arid');
  sandstoneMill('atmospheric:red_arid_sand', '#forge:sandstone/red_arid');
  crushAndMill(['2x minecraft:orange_dye', Item.of('minecraft:red_dye').withChance(0.25)], 'atmospheric:hot_monkey_brush');
  crushAndMill(['4x minecraft:light_gray_dye', Item.of('minecraft:lime_dye').withChance(0.05)], 'atmospheric:tall_yucca_flower');
  crushAndMill(['4x minecraft:purple_dye', Item.of('minecraft:lime_dye').withChance(0.05)], 'atmospheric:water_hyacinth');
  crushAndMill('2x minecraft:yellow_dye', 'atmospheric:yellow_blossoms');

  // BetterEnd
  sandstoneMill('betterendforge:endstone_dust', '#forge:end_stones');
  event.recipes.create.crushing(['2x betterendforge:ender_shard', Item.of('betterendforge:ender_shard').withChance(0.25), Item.of('minecraft:cobblestone').withChance(0.12)], '#forge:ores/ender');
  crushAndMill('2x minecraft:cyan_dye', 'betterendforge:creeping_moss');
  crushAndMill('2x minecraft:blue_dye', 'betterendforge:blue_vine_seed');
  crushAndMill('2x minecraft:cyan_dye', 'betterendforge:cyan_moss');
  crushAndMill(['2x minecraft:yellow_dye', Item.of('minecraft:cyan_dye').withChance(0.05)], 'betterendforge:umbrella_moss');
  crushAndMill(['4x minecraft:yellow_dye', Item.of('minecraft:cyan_dye').withChance(0.05)], 'betterendforge:umbrella_moss_tall');
  crushAndMill('2x minecraft:black_dye', 'betterendforge:shadow_plant');
  crushAndMill('2x minecraft:purple_dye', 'betterendforge:purple_polypore');
  crushAndMill('2x minecraft:gray_dye', 'betterendforge:tail_moss');
  crushAndMill('2x minecraft:magenta_dye', 'betterendforge:bushy_grass');
  crushAndMill(['2x minecraft:pink_dye', Item.of('minecraft:light_blue_dye').withChance(0.05)], 'betterendforge:twisted_moss');
  crushAndMill('2x minecraft:white_dye', 'betterendforge:hydralux_petal');
  crushAndMill(['2x minecraft:purple_dye', Item.of('minecraft:cyan_dye').withChance(0.05)], 'betterendforge:twisted_umbrella_moss');
  crushAndMill(['4x minecraft:purple_dye', Item.of('minecraft:cyan_dye').withChance(0.05)], 'betterendforge:twisted_umbrella_moss_tall');
  crushAndMill('2x minecraft:red_dye', 'betterendforge:charnia_red');
  crushAndMill('2x minecraft:purple_dye', 'betterendforge:charnia_purple');
  crushAndMill('2x minecraft:orange_dye', 'betterendforge:charnia_orange');
  crushAndMill('2x minecraft:light_blue_dye', 'betterendforge:charnia_light_blue');
  crushAndMill('2x minecraft:cyan_dye', 'betterendforge:charnia_cyan');
  crushAndMill('2x minecraft:green_dye', 'betterendforge:charnia_green');

  [
    'dragon_tree',
    'end_lotus',
    'helix_tree',
    'jellyshroom',
    'lacugrove',
    'lucernia',
    'mossy_glowshroom',
    'pythadendron',
    'tenanea',
    'umbrella_tree'
  ].forEach(function(element) {
    event.recipes.create.cutting(`betterendforge:${element}_stripped_log`, `betterendforge:${element}_log`);
    event.recipes.create.cutting(`betterendforge:${element}_stripped_bark`, `betterendforge:${element}_bark`);
    event.recipes.create.cutting(`betterendforge:${element}_log`, `betterendforge:${element}_bark`);
    event.recipes.create.cutting(`6x betterendforge:${element}_planks`, `betterendforge:${element}_stripped_log`);
    event.recipes.create.cutting(`6x betterendforge:${element}_planks`, `betterendforge:${element}_stripped_bark`);
  });

  // These two are currently missing from the Create integration for BetterEnd. TODO: Remove here once added there.
  event.recipes.create.pressing('betterendforge:rutiscus_path', 'betterendforge:rutiscus');
  event.recipes.create.pressing('betterendforge:sangnum_path', 'betterendforge:sangnum');

  // BoP
  crushAndMill(['2x biomesoplenty:white_sand', Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/white');
  crushAndMill(['2x biomesoplenty:black_sand', Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/black');
  crushAndMill(['2x biomesoplenty:orange_sand', Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/orange');
  event.recipes.create.splashing('mekanism:block_salt', 'biomesoplenty:dried_salt');
  
  // Farmer's Delight
  crushAndMill(['9x farmersdelight:rice', '9x farmersdelight:straw'], 'farmersdelight:rice_bale');

  event.recipes.create.mixing('farmersdelight:pie_crust', [
    {fluid: 'minecraft:milk', amount: 250},
    'create:wheat_flour',
    'create:wheat_flour',
    'create:wheat_flour'
  ]);

  // Forbidden and Arcanus
  event.recipes.create.cutting('forbidden_arcanus:stripped_cherrywood_log', 'forbidden_arcanus:cherrywood_log');
  event.recipes.create.cutting('forbidden_arcanus:stripped_mysterywood_log', 'forbidden_arcanus:mysterywood_log');
  event.recipes.create.cutting('6x forbidden_arcanus:cherrywood_planks', 'forbidden_arcanus:stripped_cherrywood_log');
  event.recipes.create.cutting('6x forbidden_arcanus:mysterywood_planks', 'forbidden_arcanus:stripped_mysterywood_log');
  crushAndMill(['2x forbidden_arcanus:soulless_sand', Item.of('bloodmagic:saltpeter').withChance(0.5)], '#forge:sandstone/soulless');

  // Mekanism
  event.recipes.create.splashing(['10x mekanism:nugget_copper', Item.of('mekanism:nugget_copper', 5).withChance(0.5)], 'create:crushed_copper_ore');

  // Minecraft
  // Sandstone crushing was already in, but this gives parity with Immersive Engineering (ie. 2 sand instead of 1, and chance for saltpeter)
  sandstoneMill('minecraft:sand', '#forge:sandstone/colorless');
  sandstoneMill('minecraft:red_sand', '#forge:sandstone/red');
  // The original Nether Wart block crushing was terribly underpowered. Now gives back exactly what was put in.
  crushAndMill(Item.of('minecraft:nether_wart', 4), 'minecraft:nether_wart_block');

  // Mystical World
  event.recipes.create.crushing(['2x minecraft:quartz', Item.of('minecraft:quartz', 4).withChance(0.5), Item.of('minecraft:granite', 1).withChance(0.125)], 'mysticalworld:granite_quartz_ore');

  // Quark
  crushAndMill(['18x minecraft:sugar', Item.of('minecraft:sugar', 2).withChance(0.5), Item.of('minecraft:sugar', 2).withChance(0.25), Item.of('minecraft:sugar', 2).withChance(0.1)], 'quark:sugar_cane_block');

  // Upgrade Aquatic
  event.recipes.create.splashing('upgrade_aquatic:driftwood_log', 'upgrade_aquatic:river_log');
  event.recipes.create.splashing('upgrade_aquatic:driftwood', 'upgrade_aquatic:river_wood');
  event.recipes.create.splashing('upgrade_aquatic:stripped_driftwood_log', 'upgrade_aquatic:stripped_river_log');
  event.recipes.create.splashing('upgrade_aquatic:stripped_driftwood', 'upgrade_aquatic:stripped_river_wood');
});
