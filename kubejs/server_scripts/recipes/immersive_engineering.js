// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('recipes', event => {

  const fermenter = (fluid, input, amount) => {
    event.custom({
        type: 'immersiveengineering:fermenter',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: Ingredient.of(input).toJson(),
        energy: 6400
    });
  };

  const squeezer = (fluid, input, amount) => {
    event.custom({
        type: 'immersiveengineering:squeezer',
        fluid: {
          fluid: fluid,
          amount: amount
        },
        input: Ingredient.of(input).toJson(),
        energy: 6400
    });
  };

  // Atmospheric Compat
  event.recipes.immersiveengineering.metal_press('9x atmospheric:aloe_leaves', 'atmospheric:aloe_bundle', 'immersiveengineering:mold_unpacking');
  event.recipes.immersiveengineering.metal_press('9x atmospheric:barrel_cactus', 'atmospheric:barrel_cactus_batch', 'immersiveengineering:mold_unpacking');
  event.recipes.immersiveengineering.metal_press('9x atmospheric:passion_vine', 'atmospheric:passion_vine_bundle', 'immersiveengineering:mold_unpacking');
  event.recipes.immersiveengineering.cloche(['2x atmospheric:aloe_leaves', '2x minecraft:yellow_dye', 'atmospheric:aloe_kernels'], 'atmospheric:aloe_kernels', 'atmospheric:arid_sand', {type: 'crop', block: 'atmospheric:aloe_vera'}).time(800);

  // Autumnity Compat
  event.recipes.immersiveengineering.metal_press('9x autumnity:snail_slime', 'autumnity:snail_slime_block', 'immersiveengineering:mold_unpacking');
  event.recipes.immersiveengineering.cloche(['2x autumnity:foul_berries'], 'autumnity:foul_berry_pips', 'minecraft:dirt', {type: 'crop', block: 'autumnity:foul_berry_bush'}).time(560);

  // BetterEnd Compat
  event.recipes.immersiveengineering.cloche(['betterendforge:amber_root_raw', 'betterendforge:amber_root_seed'], 'betterendforge:amber_root_seed', 'betterendforge:amber_moss', {type: 'crop', block: 'betterendforge:amber_root_seed'}).time(800);
  event.recipes.immersiveengineering.cloche(['betterendforge:blossom_berry', 'betterendforge:blossom_berry_seed'], 'betterendforge:blossom_berry_seed', 'betterendforge:pink_moss', {type: 'crop', block: 'betterendforge:blossom_berry_seed'}).time(800);
  event.recipes.immersiveengineering.cloche(['betterendforge:chorus_mushroom_raw', 'betterendforge:chorus_mushroom_seed'], 'betterendforge:chorus_mushroom_seed', 'betterendforge:chorus_nylium', {type: 'crop', block: 'betterendforge:chorus_mushroom_seed'}).time(800);
  event.recipes.immersiveengineering.cloche(['betterendforge:shadow_berry_raw', 'betterendforge:shadow_berry'], 'betterendforge:shadow_berry', 'betterendforge:shadow_grass', {type: 'crop', block: 'betterendforge:shadow_berry'}).time(800);
  event.recipes.immersiveengineering.crusher('2x betterendforge:endstone_dust', '#forge:end_stones', Item.of('bloodmagic:saltpeter').withChance(0.5));
  event.recipes.immersiveengineering.crusher('2x betterendforge:ender_shard', '#forge:ores/ender');
  event.recipes.immersiveengineering.crusher('2x betterendforge:crystalline_sulphur', 'betterendforge:sulphur_crystal');

  // Blue Skies Compat
  event.recipes.immersiveengineering.crusher('9x minecraft:bone_meal', 'blue_skies:azulfo_horn');
  event.recipes.immersiveengineering.crusher('4x blue_skies:moonstone_shard', '#blue_skies:gems/moonstone');

  // BoP Compat
  event.recipes.immersiveengineering.crusher('2x biomesoplenty:white_sand', '#forge:sandstone/white', Item.of('bloodmagic:saltpeter').withChance(0.5));
  event.recipes.immersiveengineering.crusher('2x biomesoplenty:black_sand', '#forge:sandstone/black', Item.of('bloodmagic:saltpeter').withChance(0.5));
  event.recipes.immersiveengineering.crusher('2x biomesoplenty:orange_sand', '#forge:sandstone/orange', Item.of('bloodmagic:saltpeter').withChance(0.5));

  // Druidcraft Compat
  squeezer('immersiveengineering:plantoil', 'druidcraft:hemp_seeds', 120);
  event.recipes.immersiveengineering.cloche(['druidcraft:hemp', 'druidcraft:hemp_seeds'], 'druidcraft:hemp_seeds', 'minecraft:dirt', {type: 'crop', block: 'druidcraft:hemp_crop'}).time(800);

  // Farmer's Delight Compat
  fermenter('immersiveengineering:ethanol', '#forge:seeds/rice', 80);

  // Forbidden & Arcanus Compat
  event.recipes.immersiveengineering.crusher('2x forbidden_arcanus:soulless_sand', '#forge:sandstone/soulless', Item.of('bloodmagic:saltpeter').withChance(0.5));
  squeezer('immersiveengineering:plantoil', 'forbidden_arcanus:golden_orchid_seeds', 40);
  event.recipes.immersiveengineering.cloche(['forbidden_arcanus:arcane_gold_nugget', 'forbidden_arcanus:golden_orchid_seeds'], 'forbidden_arcanus:golden_orchid_seeds', 'minecraft:dirt', {type: 'crop', block: 'forbidden_arcanus:golden_orchid'}).time(800);

  // Immersive Engineering Compat
  event.recipes.immersiveengineering.cloche(['2x immersiveengineering:hemp_fiber', 'immersiveengineering:seed'], 'immersiveengineering:seed', 'minecraft:dirt', {type: 'hemp', block: 'immersiveengineering:hemp'}).time(560);

  // Industrial Foregoing Compat
  event.recipes.immersiveengineering.fertilizer('industrialforegoing:fertilizer').growthModifier(1.5);

  // Mekanism Compat
  event.recipes.immersiveengineering.blast_furnace_fuel('#mekanism:enriched/carbon').time(600);

  // MineColonies Compat
  event.recipes.immersiveengineering.fertilizer('minecolonies:compost').growthModifier(1.5);

  // Minecraft Tweaks
  event.recipes.immersiveengineering.metal_press('minecraft:blaze_rod', '6x minecraft:blaze_powder', 'immersiveengineering:mold_rod');
  event.recipes.immersiveengineering.metal_press('9x minecraft:dried_kelp', 'minecraft:dried_kelp_block', 'immersiveengineering:mold_unpacking');
  event.recipes.immersiveengineering.metal_press('4x minecraft:nether_wart', 'minecraft:nether_wart_block', 'immersiveengineering:mold_unpacking');
  event.recipes.immersiveengineering.crusher('9x minecraft:bone_meal', 'minecraft:bone_block');
  event.recipes.immersiveengineering.crusher('4x minecraft:nether_wart', 'minecraft:nether_wart_block');

  // Mystical World Compat
  squeezer('immersiveengineering:plantoil', '#forge:seeds/aubergine', 60);
  event.recipes.immersiveengineering.cloche(['2x mysticalworld:aubergine', 'mysticalworld:aubergine_seeds'], 'mysticalworld:aubergine_seeds', 'minecraft:dirt', {type: 'crop', block: 'mysticalworld:aubergine_crop'}).time(800);

  // Neapolitan Compat
  event.recipes.immersiveengineering.cloche(['2x neapolitan:strawberries'], 'neapolitan:strawberry_pips', 'minecraft:dirt', {type: 'crop', block: 'neapolitan:strawberry_bush'}).time(800);
  event.recipes.immersiveengineering.metal_press('3x neapolitan:banana', 'neapolitan:banana_bunch', 'immersiveengineering:mold_unpacking');
  event.recipes.immersiveengineering.metal_press('9x neapolitan:banana_bunch', 'neapolitan:banana_crate', 'immersiveengineering:mold_unpacking');

  // Quark Compat
  event.recipes.immersiveengineering.crusher('2x minecraft:soul_sand', '#forge:sandstone/soul', Item.of('bloodmagic:saltpeter').withChance(0.5));

  // Supplementaries Compat
  squeezer('immersiveengineering:plantoil', '#forge:seeds/flax', 120);

  // Titanium Compat (Industrial Foregoing)
  event.recipes.immersiveengineering.metal_press('titanium:diamond_gear', '4x minecraft:diamond', 'immersiveengineering:mold_gear');

  // Upgrade Aquatic Compat
  event.recipes.immersiveengineering.metal_press('upgrade_aquatic:prismarine_rod', '2x minecraft:prismarine_shard', 'immersiveengineering:mold_rod');

});
