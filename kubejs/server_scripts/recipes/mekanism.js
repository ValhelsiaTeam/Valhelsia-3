// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('recipes', event => {

  // NOTE: Mekanism Sawmill recipes can be found in woodcutting.js so that arrays can be reused.

  // Infusion Conversion
  const infusionConversion = (type, ingredient, amount) => {
    event.custom({
      type: 'mekanism:infusion_conversion',
      input: {
        ingredient: Ingredient.of(ingredient).toJson()
      },
      output: {
        infuse_type: type,
        amount: amount
      }
    });
  };

  // Turn a block into a mossy version of it.
  const mossify = (output, input) => {
    event.recipes.mekanism.metallurgic_infusing(output, input, 'mekanism:bio', 10);
  };

  // Turn a block into a fungal version if it.
  const fungify = (output, input) => {
    event.recipes.mekanism.metallurgic_infusing(output, input, 'mekanism:fungi', 10);
  };

  // Biofuel Creation Shortcut Template
  const bioCrush = (input, quantity) => {
    event.recipes.mekanism.crushing(`${quantity}x mekanism:bio_fuel`, input);
  };

  // Atmospheric
  event.recipes.mekanism.crushing('2x atmospheric:arid_sand', '#forge:sandstone/arid');
  event.recipes.mekanism.crushing('2x atmospheric:red_arid_sand', '#forge:sandstone/red_arid');

  // Bayou Blues
  event.recipes.mekanism.sawing('mekanism:sawdust', 'bayou_blues:cypress_branch');
  event.recipes.mekanism.sawing('2x mekanism:sawdust', 'bayou_blues:cypress_knee');
  event.recipes.mekanism.sawing('4x mekanism:sawdust', 'bayou_blues:large_cypress_knee');

  // BetterEnd
  event.recipes.mekanism.crushing('2x betterendforge:endstone_dust', '#forge:end_stones');
  event.recipes.mekanism.enriching('2x betterendforge:ender_shard', '#forge:ores/ender');
  event.recipes.mekanism.enriching('2x minecraft:blue_dye', 'betterendforge:blue_vine_seed');
  event.recipes.mekanism.enriching('2x minecraft:cyan_dye', 'betterendforge:creeping_moss');
  event.recipes.mekanism.enriching('2x minecraft:cyan_dye', 'betterendforge:cyan_moss');
  event.recipes.mekanism.enriching('2x minecraft:yellow_dye', 'betterendforge:umbrella_moss');
  event.recipes.mekanism.enriching('4x minecraft:yellow_dye', 'betterendforge:umbrella_moss_tall');
  event.recipes.mekanism.enriching('2x minecraft:black_dye', 'betterendforge:shadow_plant');
  event.recipes.mekanism.enriching('2x minecraft:purple_dye', 'betterendforge:purple_polypore');
  event.recipes.mekanism.enriching('2x minecraft:gray_dye', 'betterendforge:tail_moss');
  event.recipes.mekanism.enriching('2x minecraft:magenta_dye', 'betterendforge:bushy_grass');
  event.recipes.mekanism.enriching('2x minecraft:pink_dye', 'betterendforge:twisted_moss');
  event.recipes.mekanism.enriching('2x minecraft:white_dye', 'betterendforge:hydralux_petal');
  event.recipes.mekanism.enriching('2x minecraft:purple_dye', 'betterendforge:twisted_umbrella_moss');
  event.recipes.mekanism.enriching('4x minecraft:purple_dye', 'betterendforge:twisted_umbrella_moss_tall');
  event.recipes.mekanism.enriching('2x minecraft:red_dye', 'betterendforge:charnia_red');
  event.recipes.mekanism.enriching('2x minecraft:purple_dye', 'betterendforge:charnia_purple');
  event.recipes.mekanism.enriching('2x minecraft:orange_dye', 'betterendforge:charnia_orange');
  event.recipes.mekanism.enriching('2x minecraft:light_blue_dye', 'betterendforge:charnia_light_blue');
  event.recipes.mekanism.enriching('2x minecraft:cyan_dye', 'betterendforge:charnia_cyan');
  event.recipes.mekanism.enriching('2x minecraft:green_dye', 'betterendforge:charnia_green');
  mossify('betterendforge:end_moss', 'minecraft:end_stone');
  fungify('betterendforge:end_mycelium', 'minecraft:end_stone');

  // Blue Skies
  event.recipes.mekanism.crushing('9x minecraft:bone_meal', 'blue_skies:azulfo_horn');
  event.recipes.mekanism.crushing('4x blue_skies:moonstone_shard', '#blue_skies:gems/moonstone');

  // Create
  event.recipes.mekanism.combining('8x create:polished_rose_quartz', '8x create:rose_quartz', '#forge:sandstone');
  mossify('create:mossy_granite', 'minecraft:granite');
  mossify('create:mossy_diorite', 'minecraft:diorite');
  mossify('create:mossy_andesite', 'minecraft:andesite');
  mossify('create:mossy_limestone', 'create:limestone');
  mossify('create:mossy_granite', 'create:weathered_limestone');
  mossify('create:mossy_dolomite', 'create:dolomite');
  mossify('create:mossy_gabbro', 'create:gabbro');
  mossify('create:mossy_scoria', 'create:scoria');
  mossify('create:mossy_dark_scoria', 'create:dark_scoria');

  // Darker Depths
  mossify('darkerdepths:lush_aridrock', 'darkerdepths:aridrock');
  mossify('darkerdepths:mossy_grimestone', 'darkerdepths:grimestone');

  // Forbidden and Arcanus
  event.recipes.mekanism.crushing('2x forbidden_arcanus:soulless_sand', '#forge:sandstone/soulless');

  // Mekanism Combiner
  colors.forEach(function(element) {
    let dye = `#forge:dyes/${element}`;

    // Minecraft Dying
    event.recipes.mekanism.combining(`16x minecraft:${element}_stained_glass`, '16x minecraft:glass', dye);
    event.recipes.mekanism.combining(`16x minecraft:${element}_stained_glass_pane`, '16x minecraft:glass_pane', dye);
    event.recipes.mekanism.combining(`8x minecraft:${element}_wool`, '8x #minecraft:wool', dye);
    event.recipes.mekanism.combining(`16x minecraft:${element}_carpet`, '16x #minecraft:carpets', dye);
    event.recipes.mekanism.combining(`16x minecraft:${element}_terracotta`, '16x #forge:terracotta', dye);

    // Environmental Terracotta Bricks Dying
    event.recipes.mekanism.combining(`16x environmental:${element}_terracotta_bricks`, '16x environmental:terracotta_bricks', dye);
    event.recipes.mekanism.combining(`16x environmental:chiseled_${element}_terracotta_bricks`, '16x environmental:chiseled_terracotta_bricks', dye);
    event.recipes.mekanism.combining(`16x environmental:${element}_terracotta_brick_stairs`, '16x environmental:terracotta_brick_stairs', dye);
    event.recipes.mekanism.combining(`16x environmental:${element}_terracotta_brick_slab`, '16x environmental:terracotta_brick_slab', dye);
    event.recipes.mekanism.combining(`16x environmental:${element}_terracotta_brick_wall`, '16x environmental:terracotta_brick_wall', dye);
    event.recipes.mekanism.combining(`16x environmental:${element}_terracotta_brick_vertical_slab`, '16x environmental:terracotta_brick_vertical_slab', dye);

    // Atum Crystal Glass Dying
    event.recipes.mekanism.combining(`16x atum:${element}_stained_crystal_glass`, '16x atum:crystal_glass', dye);
    event.recipes.mekanism.combining(`16x atum:${element}_stained_crystal_glass_pane`, '16x atum:crystal_glass_pane', dye);
    event.recipes.mekanism.combining(`16x atum:${element}_stained_palm_framed_crystal_glass_pane`, '16x atum:palm_framed_crystal_glass_pane', dye);
    event.recipes.mekanism.combining(`16x atum:${element}_stained_palm_framed_crystal_glass`, '16x atum:palm_framed_crystal_glass', dye);
    event.recipes.mekanism.combining(`16x atum:${element}_stained_deadwood_framed_crystal_glass_pane`, '16x atum:deadwood_framed_crystal_glass_pane', dye);
    event.recipes.mekanism.combining(`16x atum:${element}_stained_deadwood_framed_crystal_glass`, '16x atum:deadwood_framed_crystal_glass', dye);

    // BetterEnd Hydralux Petal Block Dying
    event.recipes.mekanism.combining(`16x betterendforge:hydralux_petal_block_${element}`, '16x betterendforge:hydralux_petal_block', dye);

    // Cooking For Blockheads Kitchen Floor Dying
    event.recipes.mekanism.combining(`16x cookingforblockheads:${element}_kitchen_floor`, '16x cookingforblockheads:white_kitchen_floor', dye);

    // Druidcraft Soulfire Dying
    event.recipes.mekanism.combining(`8x druidcraft:${element}_soulfire`, '8x #druidcraft:soulfire', dye);

    // Mekanism Plastic Dying
    event.recipes.mekanism.combining(`16x mekanismadditions:${element}_plastic`, '16x #mekanismadditions:plastic_blocks/plastic', dye);
    event.recipes.mekanism.combining(`8x mekanismadditions:${element}_plastic`, '8x mekanism:hdpe_sheet', dye);
    event.recipes.mekanism.combining(`16x mekanismadditions:${element}_plastic_road`, '16x #mekanismadditions:plastic_blocks/road', dye);
    event.recipes.mekanism.combining(`16x mekanismadditions:${element}_reinforced_plastic`, '16x #mekanismadditions:plastic_blocks/reinforced', dye);
    event.recipes.mekanism.combining(`16x mekanismadditions:${element}_plastic_fence`, '16x #forge:fences/plastic', dye);
    event.recipes.mekanism.combining(`16x mekanismadditions:${element}_plastic_fence_gate`, '16x #forge:fence_gates/plastic', dye);
    event.recipes.mekanism.combining(`16x mekanismadditions:${element}_plastic_transparent_stairs`, '16x #forge:stairs/plastic/transparent', dye);

    // IE Sheetmetal Dying
    event.recipes.mekanism.combining(`16x immersiveengineering:sheetmetal_colored_${element}`, '16x #forge:sheetmetals', dye);

    // IE Concrete -> Vanilla Concrete
    event.recipes.mekanism.combining(`16x minecraft:${element}_concrete`, '16x immersiveengineering:concrete', dye);

    // Quark Dying
    event.recipes.mekanism.combining(`16x quark:${element}_framed_glass`, '16x quark:framed_glass', dye);
    event.recipes.mekanism.combining(`16x quark:${element}_framed_glass_pane`, '16x quark:framed_glass_pane', dye);
    event.recipes.mekanism.combining(`16x quark:${element}_stained_planks`, '16x #minecraft:planks', dye);
    event.recipes.mekanism.combining(`16x quark:${element}_shingles`, '16x quark:shingles', dye);
  });

  // Mekanism - Bio Fuel
  // TODO: Add several new tags to simplify this - perhaps #valhelsia:grasses and #valhelsia:small_plants?
  bioCrush('#minecraft:flowers', 5);
  bioCrush('#minecraft:saplings', 2);
  bioCrush('#forge:seeds', 2);
  bioCrush('#valhelsia:hanging_leaves', 2);
  // TODO: Convert others to shortcut template as tags are made.

  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'atmospheric:yucca_fruit');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'atmospheric:aloe_leaves');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'atmospheric:passionfruit');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'atmospheric:passion_vine');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'atum:ophidian_tongue');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'autumnity:foul_berries');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'bayou_blues:algae');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'bayou_blues:beard_moss');
  event.recipes.mekanism.crushing('7x mekanism:bio_fuel', 'bayou_blues:beard_moss_block');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'bayou_blues:giant_fern');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'bayou_blues:gooseberries');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'bayou_blues:gooseberry_sack');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:umbrella_moss');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:umbrella_moss_tall');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:creeping_moss');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:chorus_grass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:cave_grass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:crystal_grass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:amber_grass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:shadow_plant');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:bushy_grass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:jungle_grass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:blooming_cooksonia');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:salteago');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:vaiolush_fern');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:fracturn');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:globulagus');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:clawfern');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:aeridium');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:orango');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:lutebus');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:lamellarium');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'betterendforge:bolux_mushroom');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'betterendforge:blue_vine_lantern');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:blue_vine_fur');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:cave_bush');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'betterendforge:end_lily_leaf');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:end_lotus_stem');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:murkweed');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:needlegrass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:charnia_red');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:charnia_purple');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:charnia_orange');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:charnia_light_blue');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:charnia_cyan');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:charnia_green');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:hydralux_sapling');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:hydralux_petal_block');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:lumecorn_rod');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'betterendforge:glowing_pillar_luminophor');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:glowing_pillar_leaves');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:twisted_umbrella_moss');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:twisted_umbrella_moss_tall');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:small_jellyshroom');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:neon_cactus');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:purple_polypore');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:aurant_polypore');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:tail_moss');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:cyan_moss');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:twisted_moss');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:bulb_moss');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:tube_worm');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:jungle_fern');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:ruscus');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:pond_anemone');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:dense_vine');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:twisted_vine');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:bulb_vine');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:jungle_vine');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'betterendforge:rubinea');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:shadow_berry_raw');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'betterendforge:blossom_berry');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'betterendforge:amber_root_raw');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'betterendforge:chorus_mushroom_raw');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:barley');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'biomesoplenty:bramble');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:bush');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:cattail');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:clover');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:dead_grass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:desert_grass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:dune_grass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:huge_clover_petal');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:mangrove_root');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:reed');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'biomesoplenty:spanish_moss');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:sprout');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'biomesoplenty:watergrass');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'biomesoplenty:willow_vine');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'druidcraft:blueberries');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'druidcraft:elderberries');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'endergetic:poise_bush');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'endergetic:tall_poise_bush');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'environmental:cattail');
  event.recipes.mekanism.crushing('7x mekanism:bio_fuel', 'environmental:cattail_seed_sack');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'environmental:cherries');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'environmental:duckweed');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'environmental:tall_cattail');
  event.recipes.mekanism.crushing('7x mekanism:bio_fuel', 'farmersdelight:rice_bale');
  event.recipes.mekanism.crushing('7x mekanism:bio_fuel', 'farmersdelight:straw_bale');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'farmersdelight:straw');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'farmersdelight:rice_panicle');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'farmersdelight:cabbage');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'farmersdelight:tomato');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'farmersdelight:onion');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'minecraft:melon_slice'); // #blameurmet
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'neapolitan:banana');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'neapolitan:strawberries');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'neapolitan:white_strawberries');
  event.recipes.mekanism.crushing('7x mekanism:bio_fuel', 'quark:sugar_cane_block');
  event.recipes.mekanism.crushing('5x mekanism:bio_fuel', 'supplementaries:flax');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'twilightforest:torchberries');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'upgrade_aquatic:beachgrass');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'upgrade_aquatic:tall_beachgrass');
  event.recipes.mekanism.crushing('2x mekanism:bio_fuel', 'upgrade_aquatic:mulberry');
  event.recipes.mekanism.crushing('4x mekanism:bio_fuel', 'valhelsia_structures:hanging_vines');

  // Minecraft
  event.recipes.mekanism.crushing('5x minecraft:bone_meal', 'minecraft:bone');
  event.recipes.mekanism.crushing('9x minecraft:bone_meal', 'minecraft:bone_block');

  // Mystical World
  event.recipes.mekanism.crushing('15x minecraft:bone_meal', 'mysticalworld:antlers');

  // Immersive Engineering Compat
  event.recipes.mekanism.enriching('2x mekanism:enriched_carbon', '#forge:coal_coke');
  infusionConversion('mekanism:carbon', '#forge:coal_coke', 40);
  infusionConversion('mekanism:carbon', '#forge:dusts/coal_coke', 40);

  // Powah
  event.recipes.mekanism.enriching('4x mekanism:nugget_uranium', 'powah:uraninite');

  // Upgrade Aquatic - converts more kelp per dye.
  event.recipes.mekanism.combining('8x upgrade_aquatic:ochre_kelp', '8x minecraft:kelp', '#forge:dyes/yellow');
  event.recipes.mekanism.combining('8x upgrade_aquatic:polar_kelp', '8x minecraft:kelp', '#forge:dyes/cyan');
  event.recipes.mekanism.combining('8x upgrade_aquatic:thorny_kelp', '8x minecraft:kelp', '#forge:dyes/brown');
  event.recipes.mekanism.combining('8x upgrade_aquatic:tongue_kelp', '8x minecraft:kelp', '#forge:dyes/red');
  
});
