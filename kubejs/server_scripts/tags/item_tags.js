// priority: 80

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('item.tags', event => {
  // Allows Autumnity snail slime to be used in a few more recipes.
  event.add('forge:slime', 'autumnity:snail_slime');
  event.add('forge:slimeballs', 'autumnity:snail_slime');
  event.add('forge:storageblocks/slime', 'autumnity:snail_slime_block');

  // Add Compatibility between all of the mods that use knives (excluding Druidcraft's one, which has no durability).
  // Mystical World Knives
  let mwKnives = [
    'mysticalworld:sapphire_knife',
    'mysticalworld:cactus_knife',
    'mysticalworld:copper_knife',
    'mysticalworld:lead_knife',
    'mysticalworld:quicksilver_knife',
    'mysticalworld:silver_knife',
    'mysticalworld:tin_knife',
    'mysticalworld:stone_knife',
    'mysticalworld:wood_knife',
    'mysticalworld:diamond_knife',
    'mysticalworld:gold_knife',
    'mysticalworld:iron_knife',
  ];
  event.add('farmersdelight:tools/knives', mwKnives);
  event.add('forge:tools/knives', mwKnives);
  event.add('forge:fillet_knife', mwKnives);

  // Farmer's Delight Knives
  let fdKnives = [
    'farmersdelight:flint_knife',
    'farmersdelight:iron_knife',
    'farmersdelight:diamond_knife',
    'farmersdelight:netherite_knife',
    'farmersdelight:golden_knife',
  ];
  event.add('forge:tools/knife', fdKnives);
  event.add('forge:fillet_knife', fdKnives);

  // Aquaculture Knives
  let aqKnives = [
    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    'aquaculture:neptunium_fillet_knife'
  ];
  event.add('farmersdelight:tools/knives', aqKnives);
  event.add('forge:tools/knives', aqKnives);
  event.add('forge:tools/knife', aqKnives);
  event.add('forge:tools', aqKnives);
  
  // Other Tools
  event.add('forge:tools/hammer', [
    'immersiveengineering:hammer',
    //'#betterendforge:hammers' // Not adding right now - they use durability differently to IE's hammer.
  ]);
  event.add('forge:tools/spindle', 'mysticalworld:spindle');

  // Missing #forge:seed item tags.
  event.add('forge:seeds', [
    'betterendforge:amber_root_seed',
    'betterendforge:blossom_berry_seed',
    'betterendforge:blue_vine_seed',
    'betterendforge:bulb_vine_seed',
    'betterendforge:chorus_mushroom_seed',
    'betterendforge:end_lily_seed',
    'betterendforge:end_lotus_seed',
    'betterendforge:glowing_pillar_seed',
    'betterendforge:lanceleaf_seed',
    'betterendforge:lumecorn_seed',
    'betterendforge:shadow_berry', // This is the seed item, despite the ID.
    'environmental:cattail_seeds',
    'mysticalworld:aubergine_seeds',
  ]);

  // Additional Autumnity Snail Foods
  event.add('autumnity:snail_foods', [
    'betterendforge:bolux_mushroom',
    'betterendforge:chorus_mushroom_raw',
    'betterendforge:small_amaranita_mushroom',
    'betterendforge:small_jellyshroom',
    'biomesoplenty:glowshroom',
    'biomesoplenty:toadstool',
    'blue_skies:snowcap_mushroom',
    'darkerdepths:glowshroom',
  ]);

  // Additional Autumnity Snail Glowing Foods
  event.add('autumnity:snail_glowing_foods', [
    'biomesoplenty:glowshroom',
    'darkerdepths:glowshroom',
  ]);
  
  event.add('autumnity:snail_temptation_items', [
    '#forge:mushrooms',
  ]);

  // Missing #forge:sapling item tags (which mod even uses this?).
  event.add('forge:sapling', [
    'quark:yellow_blossom_sapling',
    'quark:lavender_blossom_sapling',
    'quark:pink_blossom_sapling',
    'quark:blue_blossom_sapling',
    'quark:orange_blossom_sapling',
    'quark:red_blossom_sapling',
    'autumnity:red_maple_sapling',
    'autumnity:orange_maple_sapling',
    'autumnity:yellow_maple_sapling',
    'autumnity:maple_sapling',
    'upgrade_aquatic:river_sapling',
    'atmospheric:rosewood_sapling',
    'atmospheric:morado_sapling',
    'atmospheric:yucca_sapling',
    'atmospheric:kousa_sapling',
    'atmospheric:aspen_sapling',
    'atmospheric:grimwood_sapling',
    'betterendforge:dragon_tree_sapling',
    'betterendforge:helix_tree_sapling',
    'betterendforge:lacugrove_sapling',
    'betterendforge:lucernia_sapling',
    'betterendforge:mossy_glowshroom_sapling',
    'betterendforge:pythadendron_sapling',
    'betterendforge:tenanea_sapling',
    'betterendforge:umbrella_tree_sapling',
    'biomesoplenty:origin_sapling',
    'biomesoplenty:flowering_oak_sapling',
    'biomesoplenty:rainbow_birch_sapling',
    'biomesoplenty:yellow_autumn_sapling',
    'biomesoplenty:orange_autumn_sapling',
    'biomesoplenty:maple_sapling',
    'biomesoplenty:fir_sapling',
    'biomesoplenty:redwood_sapling',
    'biomesoplenty:white_cherry_sapling',
    'biomesoplenty:pink_cherry_sapling',
    'biomesoplenty:mahogany_sapling',
    'biomesoplenty:jacaranda_sapling',
    'biomesoplenty:palm_sapling',
    'biomesoplenty:willow_sapling',
    'biomesoplenty:dead_sapling',
    'biomesoplenty:magic_sapling',
    'biomesoplenty:umbran_sapling',
    'biomesoplenty:hellbark_sapling',
    'druidcraft:darkwood_sapling',
    'druidcraft:elder_sapling',
    'forbidden_arcanus:cherrywood_sapling',
    'forbidden_arcanus:mysterywood_sapling',
    'twilightforest:rainboak_sapling',
    'twilightforest:twilight_oak_sapling',
    'twilightforest:canopy_sapling',
    'twilightforest:mangrove_sapling',
    'twilightforest:darkwood_sapling',
    'twilightforest:hollow_oak_sapling',
    'twilightforest:time_sapling',
    'twilightforest:transformation_sapling',
    'twilightforest:mining_sapling',
    'twilightforest:sorting_sapling',
  ]);

  // Missing #minecraft:logs_that_burn item tags.
  event.add('minecraft:logs_that_burn', [
    'druidcraft:darkwood_log',
    'druidcraft:stripped_darkwood_log',
    'druidcraft:darkwood_wood',
    'druidcraft:stripped_darkwood_wood',
    'druidcraft:elder_log',
    'druidcraft:stripped_elder_log',
    'druidcraft:elder_wood',
    'druidcraft:stripped_elder_wood',
    'forbidden_arcanus:cherrywood_log',
    'forbidden_arcanus:stripped_cherrywood_log',
    'forbidden_arcanus:cherrywood',
    'forbidden_arcanus:stripped_cherrywood',
    'forbidden_arcanus:mysterywood',
    'forbidden_arcanus:stripped_mysterywood',
  ]);

  // Forbidden and Arcanus Enchantment Indestructible Blacklist.
  event.add('forbidden_arcanus:indestructible_blacklisted', [
    'tetra:modular_sword',
    'tetra:modular_single',
    'tetra:modular_double',
    'tetra:modular_bow',
    'tetra:modular_crossbow',
    'tetra:modular_shield',
    'twilightforest:glass_sword', // Has one durability, meant to be a one use item.
  ]);
  
  // Missing Wall Tags
  let woodenWalls = [
    'blockcarpentry:frame_wall',
    'blockcarpentry:illusion_wall',
  ];

  let stoneWalls = [
    'betterendforge:flavolite_wall',
    'betterendforge:flavolite_bricks_wall',
    'betterendforge:violecite_wall',
    'betterendforge:violecite_bricks_wall',
    'betterendforge:sulphuric_rock_wall',
    'betterendforge:sulphuric_rock_bricks_wall',
    'bloodmagic:dungeon_brick_wall',
    'bloodmagic:dungeon_polished_wall',
    'darkerdepths:shale_wall',
    'darkerdepths:shale_bricks_wall',
    'darkerdepths:aridrock_wall',
    'darkerdepths:aridrock_bricks_wall',
    'darkerdepths:limestone_wall',
    'darkerdepths:limestone_bricks_wall',
    'darkerdepths:grimestone_wall',
    'darkerdepths:grimestone_bricks_wall',
    'eidolon:smooth_stone_bricks_wall',
  ];

  event.get('minecraft:walls')
       .add(woodenWalls)
       .add(stoneWalls);

  // Missing Stair Tags
  let woodenStairs = [
    'absentbydesign:stairs_red_mushroom',
    'absentbydesign:stairs_brown_mushroom',
    'absentbydesign:stairs_mushroom_stem',
    'absentbydesign:stairs_mushroom_polished',
    'astralsorcery:infused_wood_stairs',
    'darkerdepths:petrified_stairs',
    'immersiveengineering:stairs_treated_wood_horizontal',
    'immersiveengineering:stairs_treated_wood_vertical',
    'immersiveengineering:stairs_treated_wood_packaged',
  ];

  let stoneStairs = [
    'astralsorcery:marble_stairs',
    'astralsorcery:black_marble_stairs',
    'betterendforge:dragon_bone_stairs',
    'betterendforge:flavolite_stairs',
    'betterendforge:flavolite_bricks_stairs',
    'betterendforge:violecite_stairs',
    'betterendforge:violecite_bricks_stairs',
    'betterendforge:sulphuric_rock_stairs',
    'betterendforge:sulphuric_rock_bricks_stairs',
    'darkerdepths:cobbled_sandstone_stairs',
    'darkerdepths:cobbled_red_sandstone_stairs',
    'darkerdepths:shale_stairs',
    'darkerdepths:polished_shale_stairs',
    'darkerdepths:shale_bricks_stairs',
    'darkerdepths:aridrock_stairs',
    'darkerdepths:polished_aridrock_stairs',
    'darkerdepths:aridrock_bricks_stairs',
    'darkerdepths:limestone_stairs',
    'darkerdepths:polished_limestone_stairs',
    'darkerdepths:limestone_bricks_stairs',
    'darkerdepths:grimestone_stairs',
    'darkerdepths:polished_grimestone_stairs',
    'darkerdepths:grimestone_bricks_stairs'
  ];

  let miscStairs = [
    'immersiveengineering:stairs_concrete',
    'immersiveengineering:stairs_concrete_tile',
    'immersiveengineering:stairs_concrete_leaded',
    'immersivepetroleum:asphalt_stairs'
  ];

  event.get('minecraft:stairs')
       .add(woodenStairs)
       .add(stoneStairs)
       .add(miscStairs);

  event.add('minecraft:wooden_stairs', woodenStairs);

  // Missing Slab Tags
  let woodenSlabs = [
    'absentbydesign:slab_mushroom_stem',
    'absentbydesign:slab_red_mushroom',
    'absentbydesign:slab_brown_mushroom',
    'absentbydesign:slab_mushroom_polished',
    'astralsorcery:infused_wood_slab',
    'betterendforge:neon_cactus_slab',
    'darkerdepths:petrified_slab',
    'immersiveengineering:slab_treated_wood_horizontal',
    'immersiveengineering:slab_treated_wood_vertical',
    'immersiveengineering:slab_treated_wood_packaged',
  ];

  let stoneSlabs = [
    'astralsorcery:marble_slab',
    'astralsorcery:black_marble_slab',
    'darkerdepths:cobbled_sandstone_slab',
    'darkerdepths:cobbled_red_sandstone_slab',
    'darkerdepths:shale_slab',
    'darkerdepths:polished_shale_slab',
    'darkerdepths:shale_bricks_slab',
    'darkerdepths:aridrock_slab',
    'darkerdepths:polished_aridrock_slab',
    'darkerdepths:aridrock_bricks_slab',
    'darkerdepths:limestone_slab',
    'darkerdepths:polished_limestone_slab',
    'darkerdepths:limestone_bricks_slab',
    'darkerdepths:grimestone_slab',
    'darkerdepths:polished_grimestone_slab',
    'darkerdepths:grimestone_bricks_slab',
  ];

  let concreteSlabs = [
    'immersiveengineering:slab_hempcrete',
    'immersiveengineering:slab_concrete',
    'immersiveengineering:slab_concrete_tile',
    'immersiveengineering:slab_concrete_leaded',
  ];

  let miscSlabs = [
    'immersiveengineering:slab_insulating_glass',
    'betterendforge:dragon_bone_slab',
    'immersivepetroleum:asphalt_slab',
  ];

  event.get('minecraft:slabs')
       .add(woodenSlabs)
       .add(stoneSlabs)
       .add(concreteSlabs)
       .add(miscSlabs);

  event.add('minecraft:wooden_slabs', woodenSlabs);
       
  // Vertical Slabs
  let woodenVerticalSlabs = [
    'darkerdepths:petrified_vertical_slab',
  ];

  let miscVerticalSlabs = [
    'darkerdepths:cobbled_sandstone_vertical_slab',
    'darkerdepths:cobbled_red_sandstone_vertical_slab',
    'darkerdepths:shale_vertical_slab',
    'darkerdepths:polished_shale_vertical_slab',
    'darkerdepths:shale_bricks_vertical_slab',
    'darkerdepths:aridrock_vertical_slab',
    'darkerdepths:polished_aridrock_vertical_slab',
    'darkerdepths:aridrock_bricks_vertical_slab',
    'darkerdepths:limestone_vertical_slab',
    'darkerdepths:polished_limestone_vertical_slab',
    'darkerdepths:limestone_bricks_vertical_slab',
    'darkerdepths:grimestone_vertical_slab',
    'darkerdepths:polished_grimestone_vertical_slab',
    'darkerdepths:grimestone_bricks_vertical_slab',
  ];

  event.get('quark:vertical_slabs').add(miscVerticalSlabs).add(woodenVerticalSlabs);
  event.add('quark:wooden_vertical_slabs', woodenVerticalSlabs);
       
  // Sandstone Tags
  event.add('forge:sandstone/colorless', [
    'darkerdepths:cobbled_sandstone',
    'quark:sandstone_bricks',
  ]);

  event.add('forge:sandstone/red', [
    'darkerdepths:cobbled_red_sandstone',
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/arid', [
    'atmospheric:arid_sandstone',
    'atmospheric:smooth_arid_sandstone',
    'atmospheric:cut_arid_sandstone',
    'atmospheric:chiseled_arid_sandstone',
    'atmospheric:arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/red_arid', [
    'atmospheric:red_arid_sandstone',
    'atmospheric:smooth_red_arid_sandstone',
    'atmospheric:cut_red_arid_sandstone',
    'atmospheric:chiseled_red_arid_sandstone',
    'atmospheric:red_arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/orange', [
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:cut_orange_sandstone',
    'biomesoplenty:chiseled_orange_sandstone',
  ]);

  event.add('forge:sandstone/white', [
    'biomesoplenty:white_sandstone',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:cut_white_sandstone',
    'biomesoplenty:chiseled_white_sandstone',
  ]);

  event.add('forge:sandstone/black', [
    'biomesoplenty:black_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'biomesoplenty:cut_black_sandstone',
    'biomesoplenty:chiseled_black_sandstone',
  ]);

  event.add('forge:sandstone/soul', [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone',
  ]);

  event.add('forge:sandstone/soulless', [
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone',
  ]);

  event.add('forge:sandstone/crystal', [
    'blue_skies:crystal_sandstone',
    'blue_skies:chiseled_crystal_sandstone',
    'blue_skies:cut_crystal_sandstone',
    'blue_skies:smooth_crystal_sandstone',
    'blue_skies:crystal_sandstone_pillar',
  ]);
  
  event.add('forge:sandstone/midnight', [
    'blue_skies:midnight_sandstone',
    'blue_skies:chiseled_midnight_sandstone',
    'blue_skies:cut_midnight_sandstone',
    'blue_skies:smooth_midnight_sandstone',
    'blue_skies:midnight_sandstone_pillar',
  ]);

  // Industrial Foregoing Enchantment Extractor Blacklist  
  event.add('industrialforegoing:enchantment_extractor_blacklist', [
    'tetra:modular_sword',
    'tetra:modular_single',
    'tetra:modular_double',
    'tetra:modular_bow',
    'tetra:modular_crossbow',
    'tetra:modular_shield',
  ]);

  // Missing Create Crushed Ore Tags (for JAOPCA compatibility in recipes)
  event.add('create:crushed_ores/iron', 'create:crushed_iron_ore');
  event.add('create:crushed_ores/gold', 'create:crushed_gold_ore');
  event.add('create:crushed_ores/copper', 'create:crushed_copper_ore');
  event.add('create:crushed_ores/zinc', 'create:crushed_zinc_ore');
  event.add('create:crushed_ores/brass', 'create:crushed_brass');
  event.add('create:crushed_ores/osmium', 'create:crushed_osmium_ore');
  event.add('create:crushed_ores/silver', 'create:crushed_silver_ore');
  event.add('create:crushed_ores/tin', 'create:crushed_tin_ore');
  event.add('create:crushed_ores/lead', 'create:crushed_lead_ore');
  event.add('create:crushed_ores/quicksilver', 'create:crushed_quicksilver_ore');
  event.add('create:crushed_ores/aluminum', 'create:crushed_aluminum_ore');
  event.add('create:crushed_ores/bauxite', 'create:crushed_aluminum_ore');
  event.add('create:crushed_ores/uranium', 'create:crushed_uranium_ore');
  event.add('create:crushed_ores/nickel', 'create:crushed_nickel_ore');

  // Supplementaries Throwable Bricks
  event.add('supplementaries:throwable_bricks', 'environmental:mud_brick');

  // Missing Mud Brick Tags
  event.add('forge:ingots/mud_brick', ['environmental:mud_brick', 'biomesoplenty:mud_brick']);
  event.add('engineersdecor:brick_ingots', 'environmental:mud_brick', 'biomesoplenty:mud_brick');

  // Missing Glass Panes Tags
  event.get('forge:glass_panes').add([
    'atum:white_stained_crystal_glass_pane',
    'atum:orange_stained_crystal_glass_pane',
    'atum:magenta_stained_crystal_glass_pane',
    'atum:light_blue_stained_crystal_glass_pane',
    'atum:yellow_stained_crystal_glass_pane',
    'atum:lime_stained_crystal_glass_pane',
    'atum:pink_stained_crystal_glass_pane',
    'atum:pink_stained_crystal_glass_pane',
    'atum:gray_stained_crystal_glass_pane',
    'atum:light_gray_stained_crystal_glass_pane',
    'atum:cyan_stained_crystal_glass_pane',
    'atum:purple_stained_crystal_glass_pane',
    'atum:blue_stained_crystal_glass_pane',
    'atum:brown_stained_crystal_glass_pane',
    'atum:green_stained_crystal_glass_pane',
    'atum:red_stained_crystal_glass_pane',
    'atum:black_stained_crystal_glass_pane',
    'atum:white_stained_palm_framed_crystal_glass_pane',
    'atum:orange_stained_palm_framed_crystal_glass_pane',
    'atum:magenta_stained_palm_framed_crystal_glass_pane',
    'atum:light_blue_stained_palm_framed_crystal_glass_pane',
    'atum:yellow_stained_palm_framed_crystal_glass_pane',
    'atum:lime_stained_palm_framed_crystal_glass_pane',
    'atum:pink_stained_palm_framed_crystal_glass_pane',
    'atum:pink_stained_palm_framed_crystal_glass_pane',
    'atum:gray_stained_palm_framed_crystal_glass_pane',
    'atum:light_gray_stained_palm_framed_crystal_glass_pane',
    'atum:cyan_stained_palm_framed_crystal_glass_pane',
    'atum:purple_stained_palm_framed_crystal_glass_pane',
    'atum:blue_stained_palm_framed_crystal_glass_pane',
    'atum:brown_stained_palm_framed_crystal_glass_pane',
    'atum:green_stained_palm_framed_crystal_glass_pane',
    'atum:red_stained_palm_framed_crystal_glass_pane',
    'atum:black_stained_palm_framed_crystal_glass_pane',
    'atum:white_stained_deadwood_framed_crystal_glass_pane',
    'atum:orange_stained_deadwood_framed_crystal_glass_pane',
    'atum:magenta_stained_deadwood_framed_crystal_glass_pane',
    'atum:light_blue_stained_deadwood_framed_crystal_glass_pane',
    'atum:yellow_stained_deadwood_framed_crystal_glass_pane',
    'atum:lime_stained_deadwood_framed_crystal_glass_pane',
    'atum:pink_stained_deadwood_framed_crystal_glass_pane',
    'atum:pink_stained_deadwood_framed_crystal_glass_pane',
    'atum:gray_stained_deadwood_framed_crystal_glass_pane',
    'atum:light_gray_stained_deadwood_framed_crystal_glass_pane',
    'atum:cyan_stained_deadwood_framed_crystal_glass_pane',
    'atum:purple_stained_deadwood_framed_crystal_glass_pane',
    'atum:blue_stained_deadwood_framed_crystal_glass_pane',
    'atum:brown_stained_deadwood_framed_crystal_glass_pane',
    'atum:green_stained_deadwood_framed_crystal_glass_pane',
    'atum:red_stained_deadwood_framed_crystal_glass_pane',
    'atum:black_stained_deadwood_framed_crystal_glass_pane',
  ]);

  // Beacon Payment Items
  event.add('minecraft:beacon_payment_items', [
    'aquaculture:neptunium_ingot',
    'betterendforge:thallasium_ingot',
    'betterendforge:terminite_ingot',
    'betterendforge:aeternium_ingot',
    'botania:manasteel_ingot',
    'botania:terrasteel_ingot',
    'botania:elementium_ingot',
    'create:brass_ingot',
    'create:zinc_ingot',
    'eidolon:arcane_gold_ingot',
    'eidolon:lead_ingot',
    'eidolon:pewter_ingot',
    'forbidden_arcanus:arcane_gold_ingot',
    'forbidden_arcanus:obsidian_ingot',
    'immersiveengineering:ingot_aluminum',
    'immersiveengineering:ingot_silver',
    'immersiveengineering:ingot_nickel',
    'immersiveengineering:ingot_constantan',
    'immersiveengineering:ingot_electrum',
    'mysticalworld:quicksilver_ingot',
    'twilightforest:ironwood_ingot',
    'twilightforest:fiery_ingot',
    'twilightforest:knightmetal_ingot'
  ]);

  // Curios Glasses
  event.add('curios:glasses', [
    'artifacts:night_vision_goggles',
  ]);

  // Curios Charms
  event.add('curios:charm', [
    'twilightforest:charm_of_life_1',
    'twilightforest:charm_of_life_2',
    'twilightforest:charm_of_keeping_1',
    'twilightforest:charm_of_keeping_2',
    'twilightforest:charm_of_keeping_3',
  ]);
  
  // Curios Back
  event.add('curios:back', [
    // This is functional but does not render in this slot. I think this is still preferable to not having it though.
    'alexsmobs:tarantula_hawk_elytra',
  ]);

  // Hanging Leaves
  event.add('valhelsia:hanging_leaves', [
    'bayou_blues:hanging_cypress_leaves',
    'environmental:hanging_willow_leaves',
    'environmental:pink_hanging_wisteria_leaves',
    'environmental:blue_hanging_wisteria_leaves',
    'environmental:purple_hanging_wisteria_leaves',
    'environmental:white_hanging_wisteria_leaves',
  ]);

  // Vines
  event.add('valhelsia:vines/green', [
    'minecraft:vine',
    'atmospheric:passion_vine',
    'atum:ophidian_tongue',
    'valhelsia_structures:hanging_vines',
    'biomesoplenty:willow_vine',
  ]);
  event.add('valhelsia:vines', '#valhelsia:vines/green');

  // Aquaculture Tackle Box Green (ideally this shouldn't even exist)
  event.add('aquaculture:tackle_box_green', [
    'bayou_blues:algae',
    '#forge:dyes/green',
  ]);

  // Ores
  event.add('forge:ores', [
    'darkerdepths:aridrock_gold_ore',
    'darkerdepths:aridrock_iron_ore',
    'darkerdepths:aridrock_coal_ore',
    'darkerdepths:aridrock_lapis_ore',
    'darkerdepths:aridrock_diamond_ore',
    'darkerdepths:aridrock_redstone_ore',
    'darkerdepths:limestone_gold_ore',
    'darkerdepths:limestone_iron_ore',
    'darkerdepths:limestone_coal_ore',
    'darkerdepths:limestone_lapis_ore',
    'darkerdepths:limestone_diamond_ore',
    'darkerdepths:limestone_redstone_ore',
    'druidcraft:fiery_glass_ore',
    'druidcraft:rockroot_ore',
  ]);

  // Stones
  event.add('forge:stone', [
    'darkerdepths:aridrock',
    'darkerdepths:limestone',
    'darkerdepths:grimestone',
  ]);

  // Gems
  event.add('forge:gems', [
    'astralsorcery:aquamarine',
    'betterendforge:amber_gem',
    'blue_skies:moonstone_shard',
    'blue_skies:moonstone',
    'blue_skies:pearl',
    'darkerdepths:amber',
    'darkerdepths:celestine_crystal',
    'druidcraft:brightstone',
  ]);

  // Storage Blocks
  event.add('forge:storage_blocks', [
    'darkerdepths:amber_block',
    'darkerdepths:celestine_crystal_block',
    'druidcraft:fiery_glass_block',
    'druidcraft:rockroot_block',
    'quark:gunpowder_sack',
  ]);

  // Ingots
  event.add('forge:ingots', [
    'biomesoplenty:mud_brick',
    'environmental:mud_brick',
  ]);

  // Dusts
  event.add('forge:dusts', [
    'astralsorcery:illumination_powder',
    'astralsorcery:nocturnal_powder',
    'astralsorcery:stardust',
    'bloodmagic:corrupted_dust',
    'botania:mana_powder',
    'botania:pixie_dust',
    'druidcraft:crushed_fiery_glass',
    'fluxnetworks:flux_dust',
    'immersiveengineering:dust_coke',
    'immersiveengineering:dust_hop_graphite',
    'immersiveengineering:dust_saltpeter',
    'immersivepetroleum:petcoke_dust',
    'minecraft:blaze_powder',
    'twilightforest:transformation_powder',
    'waystones:warp_dust',
  ]);
  
  // Specific Dusts
  event.add('forge:dusts/illumination', 'astralsorcery:illumination_powder');
  event.add('forge:dusts/nocturnal', 'astralsorcery:nocturnal_powder');
  event.add('forge:dusts/star', 'astralsorcery:stardust');
  event.add('forge:dusts/sulfur', 'betterendforge:crystalline_sulphur');
  event.add('forge:dusts/ender', 'betterendforge:ender_dust');
  event.add('forge:dusts/corrupted', 'bloodmagic:corrupted_dust');
  event.add('forge:dusts/mana', 'botania:mana_powder');
  event.add('forge:dusts/pixie', 'botania:pixie_dust');
  event.add('forge:dusts/obsidian', 'create:powdered_obsidian');
  event.add('forge:dusts/flux', 'fluxnetworks:flux_dust');
  event.add('forge:dusts/psi', 'psi:psidust');
  event.add('forge:dusts/transformation', 'twilightforest:transformation_powder');
  event.add('forge:dusts/warp', 'waystones:warp_dust');

  // Leathers
  event.add('forge:leather', [
    'blue_skies:fox_pelt',
    'mysticalworld:pelt',
    'nethers_delight:hoglin_hide',
    'alexsmobs:kangaroo_hide',
  ]);

  // Feathers
  event.add('forge:feathers', [
    'alexsmobs:emu_feather',
    'alexsmobs:roadrunner_feather',
  ]);

  // Lavenders
  event.add('valhelsia:flowers/lavender', [
    'abundance:lavender',
    'biomesoplenty:lavender',
    'druidcraft:lavender',
  ]);

  // Leaf Carpets
  event.add('valhelsia:leaf_carpets', [
    'abundance:jacaranda_leaf_carpet',
    'abundance:budding_jacaranda_leaf_carpet',
    'abundance:flowering_jacaranda_leaf_carpet',
    'abundance:redbud_leaf_carpet',
    'abundance:budding_redbud_leaf_carpet',
    'abundance:flowering_redbud_leaf_carpet',
    'atmospheric:rosewood_leaf_carpet',
    'atmospheric:morado_leaf_carpet',
    'atmospheric:flowering_morado_leaf_carpet',
    'atmospheric:yucca_leaf_carpet',
    'atmospheric:kousa_leaf_carpet',
    'atmospheric:aspen_leaf_carpet',
    'atmospheric:grimwood_leaf_carpet',
    'autumnity:maple_leaf_carpet',
    'autumnity:orange_maple_leaf_carpet',
    'autumnity:red_maple_leaf_carpet',
    'autumnity:yellow_maple_leaf_carpet',
    'bayou_blues:cypress_leaf_carpet',
    'environmental:willow_leaf_carpet',
    'environmental:cherry_leaf_carpet',
    'environmental:pink_wisteria_leaf_carpet',
    'environmental:blue_wisteria_leaf_carpet',
    'environmental:purple_wisteria_leaf_carpet',
    'environmental:white_wisteria_leaf_carpet',
    'fruitful:flowering_oak_leaf_carpet',
    'fruitful:budding_oak_leaf_carpet',
    'fruitful:blossoming_oak_leaf_carpet',
    'fruitful:apple_oak_leaf_carpet',
    'quark:oak_leaf_carpet',
    'quark:spruce_leaf_carpet',
    'quark:birch_leaf_carpet',
    'quark:jungle_leaf_carpet',
    'quark:acacia_leaf_carpet',
    'quark:dark_oak_leaf_carpet',
    'quark:yellow_blossom_leaf_carpet',
    'quark:pink_blossom_leaf_carpet',
    'quark:red_blossom_leaf_carpet',
    'quark:orange_blossom_leaf_carpet',
    'quark:blue_blossom_leaf_carpet',
    'quark:lavender_blossom_leaf_carpet',
    'upgrade_aquatic:river_leaf_carpet',
  ]);

  // All leaf carpets should be compostable in MineColonies.
  event.add('minecolonies:compostables_poor', '#valhelsia:leaf_carpets');

  // Other MineColonies Compostables:
  event.add('minecolonies:compostables_poor', 'minecraft:poisonous_potato'); // Yes, I know Mojang wants it to be useless. Don't care.

  // BetterEnd Missing Tags:
  event.add('forge:gems/amber', 'betterendforge:amber_gem');
  event.add('forge:storage_blocks/amber', 'betterendforge:amber_block');
  event.add('forge:dusts/ender_pearl', 'betterendforge:ender_dust');

  // Blue Skies Missing Tags (more in food_tags.js)
  event.add('forge:gems/moonstone_shard', '#blue_skies:gems/moonstone_shard');
  //event.add('forge:gems/moonstone', '#blue_skies:gems/moonstone'); // Not added for balancing reasons.
  event.add('forge:gems/pearl', 'blue_skies:pearl');
  event.add('forge:ingots/falsite', '#blue_skies:ingots/falsite');
  event.add('forge:ingots/horizonite', '#blue_skies:ingots/horizonite');
  event.add('forge:ingots/ventium', '#blue_skies:ingots/ventium');
  event.add('forge:buckets/water', 'blue_skies:ventium_water_bucket');
  
  // Darker Depths Missing Tags:
  event.add('minecraft:planks', ['darkerdepths:petrified_planks', 'darkerdepths:vertical_petrified_planks']);
  event.add('minecraft:logs', [
    'darkerdepths:petrified_log', 
    'darkerdepths:stripped_petrified_log', 
    'darkerdepths:porous_petrified_log'
  ]);
  event.add('minecraft:wooden_pressure_plates', 'darkerdepths:petrified_pressure_plate');
  event.add('forge:fence_gates', 'darkerdepths:petrified_fence_gate');
  event.add('forge:fence_gates/wooden', 'darkerdepths:petrified_fence_gate');
  event.add('forge:gems/amber', 'darkerdepths:amber');
  event.add('forge:storage_blocks/amber', 'darkerdepths:amber_block');
  event.add('forge:gems/celestine', 'darkerdepths:celestine_crystal');
  event.add('forge:storage_blocks/celestine', 'darkerdepths:celestine_crystal_block');

  event.add('minecraft:gold_ores', ['darkerdepths:aridrock_gold_ore', 'darkerdepths:limestone_gold_ore']);
  event.add('forge:ores/gold', ['darkerdepths:aridrock_gold_ore', 'darkerdepths:limestone_gold_ore']);
  event.add('forge:ores/iron', ['darkerdepths:aridrock_iron_ore', 'darkerdepths:limestone_iron_ore']);
  event.add('forge:ores/coal', ['darkerdepths:aridrock_coal_ore', 'darkerdepths:limestone_coal_ore']);
  event.add('forge:ores/lapis', ['darkerdepths:aridrock_lapis_ore', 'darkerdepths:limestone_lapis_ore']);
  event.add('forge:ores/diamond', ['darkerdepths:aridrock_diamond_ore', 'darkerdepths:limestone_diamond_ore']);
  event.add('forge:ores/redstone', ['darkerdepths:aridrock_redstone_ore', 'darkerdepths:limestone_redstone_ore']);

  // Druidcraft Missing Item Tags
  event.add('forge:ores/fiery_glass', 'druidcraft:fiery_glass_ore');
  event.add('forge:ores/rockroot', 'druidcraft:rockroot_ore');
  event.add('forge:gems/fiery_glass', 'druidcraft:fiery_glass');
  event.add('forge:gems/brightstone', 'druidcraft:brightstone');
  event.add('forge:storage_blocks/fiery_glass', 'druidcraft:fiery_glass_block');
  event.add('forge:storage_blocks/rockroot', 'druidcraft:rockroot_block');
  event.add('forge:dusts/fiery_glass', 'druidcraft:crushed_fiery_glass');

  // Misc Missing Item Tags
  event.add('forge:seeds/cattail', 'environmental:cattail_seeds');
  event.add('forge:seeds/aubergine', 'mysticalworld:aubergine_seeds');
  event.add('forbidden_arcanus:edelwood_logs', 'forbidden_arcanus:edelwood_log');
  event.add('forge:dragon_scales', 'quark:dragon_scale');
  event.add('forge:chests/ender', 'enderstorage:ender_chest');
  event.add('forge:bones', 'aquaculture:fish_bones');
  event.add('forge:furnace', '#betterendforge:furnaces');
  event.add('minecraft:planks', 'forbidden_arcanus:cherrywood_planks');
  event.add('minecraft:planks', 'forbidden_arcanus:carved_cherrywood_planks');
  event.add('forge:storage_blocks/gunpowder', 'quark:gunpowder_sack');
  event.add('forge:sand/arid', 'atmospheric:arid_sand');
  event.add('forge:sand/red_arid', 'atmospheric:red_arid_sand');
});