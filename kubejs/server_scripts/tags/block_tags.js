// priority: 80

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('block.tags', event => {

  // Additional blocks that can be used to build a conduit frame.
  event.add('forge:supports_conduit', [
    'minecraft:prismarine_bricks',
    'absentbydesign:wall_prismarine_bricks',
    'absentbydesign:gate_prismarine_brick',
    'quark:elder_prismarine',
    'quark:elder_prismarine_slab',
    'quark:elder_prismarine_stairs',
    'quark:elder_prismarine_wall',
    'quark:elder_prismarine_bricks',
    'quark:elder_prismarine_bricks_slab',
    'quark:elder_prismarine_bricks_stairs',
    'quark:dark_elder_prismarine',
    'quark:dark_elder_prismarine_slab',
    'quark:dark_elder_prismarine_stairs',
    'quark:dark_prismarine_vertical_slab',
    'quark:prismarine_vertical_slab',
    'quark:prismarine_brick_vertical_slab',
    'quark:elder_prismarine_vertical_slab',
    'quark:elder_prismarine_bricks_vertical_slab',
    'quark:dark_elder_prismarine_vertical_slab',
    'upgrade_aquatic:luminous_prismarine',
    'upgrade_aquatic:luminous_prismarine_stairs',
    'upgrade_aquatic:luminous_prismarine_slab',
    'upgrade_aquatic:luminous_prismarine_vertical_slab',
    'upgrade_aquatic:luminous_elder_prismarine',
    'upgrade_aquatic:luminous_elder_prismarine_stairs',
    'upgrade_aquatic:luminous_elder_prismarine_slab',
    'upgrade_aquatic:luminous_elder_prismarine_vertical_slab',
    'upgrade_aquatic:chiseled_prismarine_coralstone',
    'upgrade_aquatic:prismarine_coralstone_slab',
    'upgrade_aquatic:prismarine_coralstone_stairs',
    'upgrade_aquatic:prismarine_coralstone_wall',
    'upgrade_aquatic:prismarine_coralstone_vertical_slab',
    'upgrade_aquatic:chiseled_elder_prismarine_coralstone',
    'upgrade_aquatic:elder_prismarine_coralstone_slab',
    'upgrade_aquatic:elder_prismarine_coralstone_stairs',
    'upgrade_aquatic:elder_prismarine_coralstone_wall',
    'upgrade_aquatic:elder_prismarine_coralstone_vertical_slab',
  ]);

  // Missing Wall Tags
  event.add('minecraft:walls', [
    'darkerdepths:shale_wall',
    'darkerdepths:shale_bricks_wall',
    'darkerdepths:aridrock_wall',
    'darkerdepths:aridrock_bricks_wall',
    'darkerdepths:limestone_wall',
    'darkerdepths:limestone_bricks_wall',
    'darkerdepths:grimestone_wall',
    'darkerdepths:grimestone_bricks_wall',
  ]);

  // Missing Stair Tags
  let woodenStairs = [
    'astralsorcery:infused_wood_stairs',
    'betterendforge:neon_cactus_stairs',
    'darkerdepths:petrified_stairs',
    'immersiveengineering:stairs_treated_wood_horizontal',
    'immersiveengineering:stairs_treated_wood_vertical',
    'immersiveengineering:stairs_treated_wood_packaged'
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

  event.get('minecraft:stairs')
       .add(woodenStairs)
       .add(stoneStairs)
       .add([
        'immersiveengineering:stairs_hempcrete',
        'immersiveengineering:stairs_concrete',
        'immersiveengineering:stairs_concrete_tile',
        'immersiveengineering:stairs_concrete_leaded',
        'immersivepetroleum:asphalt_stairs'
       ]);

  event.add('minecraft:wooden_stairs', woodenStairs);

  // Missing Slab Tags
  let woodenSlabs = [
    'astralsorcery:infused_wood_slab',
    'betterendforge:neon_cactus_slab',
    'darkerdepths:petrified_slab',
    'immersiveengineering:slab_treated_wood_horizontal',
    'immersiveengineering:slab_treated_wood_vertical',
    'immersiveengineering:slab_treated_wood_packaged'
  ];

  let stoneSlabs = [
    'astralsorcery:marble_slab',
    'astralsorcery:black_marble_slab',
    'betterendforge:dragon_bone_slab',
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
    'darkerdepths:grimestone_bricks_slab'
  ];

  event.get('minecraft:slabs')
       .add(woodenSlabs)
       .add(stoneSlabs)
       .add([
        'immersiveengineering:slab_hempcrete',
        'immersiveengineering:slab_concrete',
        'immersiveengineering:slab_concrete_tile',
        'immersiveengineering:slab_concrete_leaded',
        'immersiveengineering:slab_insulating_glass',
        'immersivepetroleum:asphalt_slab'
       ]);

  event.add('minecraft:wooden_slabs', woodenSlabs);

  // Vertical Slabs
  let woodenVerticalSlabs = [
    'darkerdepths:petrified_vertical_slab'
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
    'darkerdepths:grimestone_bricks_vertical_slab'
  ];

  event.get('quark:vertical_slabs').add(miscVerticalSlabs).add(woodenVerticalSlabs);
  event.add('quark:wooden_vertical_slabs', woodenVerticalSlabs);

  // Sandstone Tags
  event.add('forge:sandstone/colorless', [
    'darkerdepths:cobbled_sandstone',
    'quark:sandstone_bricks'
  ]);

  event.add('forge:sandstone/red', [
    'darkerdepths:cobbled_red_sandstone',
    'quark:red_sandstone_bricks'
  ]);

  event.add('forge:sandstone/arid', [
    'atmospheric:arid_sandstone',
    'atmospheric:smooth_arid_sandstone',
    'atmospheric:cut_arid_sandstone',
    'atmospheric:chiseled_arid_sandstone',
    'atmospheric:arid_sandstone_bricks'
  ]);

  event.add('forge:sandstone/red_arid', [
    'atmospheric:red_arid_sandstone',
    'atmospheric:smooth_red_arid_sandstone',
    'atmospheric:cut_red_arid_sandstone',
    'atmospheric:chiseled_red_arid_sandstone',
    'atmospheric:red_arid_sandstone_bricks'
  ]);

  event.add('forge:sandstone/orange', [
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:cut_orange_sandstone',
    'biomesoplenty:chiseled_orange_sandstone'
  ]);

  event.add('forge:sandstone/white', [
    'biomesoplenty:white_sandstone',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:cut_white_sandstone',
    'biomesoplenty:chiseled_white_sandstone'
  ]);

  event.add('forge:sandstone/black', [
    'biomesoplenty:black_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'biomesoplenty:cut_black_sandstone',
    'biomesoplenty:chiseled_black_sandstone'
  ]);

  event.add('forge:sandstone/soul', [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone'
  ]);

  event.add('forge:sandstone/soulless', [
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone'
  ]);

  event.add('forge:sandstone/crystal', [
    'blue_skies:crystal_sandstone',
    'blue_skies:chiseled_crystal_sandstone',
    'blue_skies:cut_crystal_sandstone',
    'blue_skies:smooth_crystal_sandstone',
    'blue_skies:crystal_sandstone_pillar'
  ]);
  
  event.add('forge:sandstone/midnight', [
    'blue_skies:midnight_sandstone',
    'blue_skies:chiseled_midnight_sandstone',
    'blue_skies:cut_midnight_sandstone',
    'blue_skies:smooth_midnight_sandstone',
    'blue_skies:midnight_sandstone_pillar'
  ]);

  // Mythic Botany Missing Block Tags
  event.add('botania:special_flowers', [
    'mythicbotany:exoblaze',
    'mythicbotany:wither_aconite',
    'mythicbotany:aquapanthus',
    'mythicbotany:hellebore',
    'mythicbotany:raindeletia'
  ]);

  event.add('botania:floating_flowers', [
    'mythicbotany:exoblaze_floating',
    'mythicbotany:wither_aconite_floating',
    'mythicbotany:aquapanthus_floating',
    'mythicbotany:hellebore_floating',
    'mythicbotany:raindeletia_floating'
  ]);

  event.add('botania:special_floating_flowers', [
    'mythicbotany:exoblaze_floating',
    'mythicbotany:wither_aconite_floating',
    'mythicbotany:aquapanthus_floating',
    'mythicbotany:hellebore_floating',
    'mythicbotany:raindeletia_floating'
  ]);

  event.add('botania:functional_special_flowers', [
    'mythicbotany:exoblaze',
    'mythicbotany:aquapanthus',
    'mythicbotany:hellebore'
  ]);

  event.add('botania:generating_special_flowers', [
    'mythicbotany:wither_aconite',
    'mythicbotany:raindeletia'
  ]);

  // Cardboard Box Blacklist
  event.add('mekanism:cardboard_blacklist', [
    'waystones:waystone',
    'waystones:mossy_waystone',
    'waystones:sandy_waystone'
  ]);

  // Buzzier Bees Flower Blacklist
  event.add('buzzier_bees:flower_blacklist', [
    '#botania:special_flowers',
    '#botania:special_floating_flowers',
    '#botania:enchanter_flowers',
    'astralsorcery:glow_flower',
  ]);

  // Missing Glass Panes Tags
  event.add('forge:glass_panes', [
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

  // Missing Mushroom Block Tags (which mod adds this tag?)
  event.add('forge:mushroom_blocks', [
    'betterendforge:bolux_mushroom',
    'betterendforge:small_amaranita_mushroom',
    'betterendforge:small_jellyshroom',
    'biomesoplenty:glowshroom',
    'biomesoplenty:toadstool',
    'blue_skies:snowcap_mushroom',
    'darkerdepths:glowshroom',
    'minecraft:red_mushroom',
    'quark:glowshroom',
  ]);

  // Windowlogging Support (for things that aren't glass panes)
  event.add('windowlogging:window', [
    'betterendforge:thallasium_bars',
    'betterendforge:terminite_bars',
    'botania:mana_glass_pane',
    'botania:elf_glass_pane',
    'botania:bifrost_pane',
    'quark:paper_wall',
    'quark:paper_wall_big',
    'quark:paper_wall_sakura',
    'quark:gold_bars',
    'quark:red_crystal_pane',
    'quark:orange_crystal_pane',
    'quark:yellow_crystal_pane',
    'quark:green_crystal_pane',
    'quark:blue_crystal_pane',
    'quark:indigo_crystal_pane',
    'quark:violet_crystal_pane',
    'quark:white_crystal_pane',
    'quark:black_crystal_pane',
    '#structurize:paper_walls',
    'valhelsia_structures:paper_wall',
  ]);

  // Windowlogging
  // Additional Blocks that can have windows added to them:
  event.add('windowlogging:windowable', [
    '#quark:vertical_slabs',
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

  // Storage Blocks
  event.add('forge:storage_blocks', [
    'darkerdepths:amber_block',
    'darkerdepths:celestine_crystal_block',
    'druidcraft:fiery_glass_block',
    'druidcraft:rockroot_block',
    'quark:gunpowder_sack',
  ]);

  // BetterEnd Missing Tags:
  event.add('forge:storage_blocks/amber', 'betterendforge:amber_block');

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

  event.add('forge:ores/gold', ['darkerdepths:aridrock_gold_ore', 'darkerdepths:limestone_gold_ore']);
  event.add('forge:ores/iron', ['darkerdepths:aridrock_iron_ore', 'darkerdepths:limestone_iron_ore']);
  event.add('forge:ores/coal', ['darkerdepths:aridrock_coal_ore', 'darkerdepths:limestone_coal_ore']);
  event.add('forge:ores/lapis', ['darkerdepths:aridrock_lapis_ore', 'darkerdepths:limestone_lapis_ore']);
  event.add('forge:ores/diamond', ['darkerdepths:aridrock_diamond_ore', 'darkerdepths:limestone_diamond_ore']);
  event.add('forge:ores/redstone', ['darkerdepths:aridrock_redstone_ore', 'darkerdepths:limestone_redstone_ore']);

  // Misc Missing Block Tags:
  event.add('forge:ores/fiery_glass', 'druidcraft:fiery_glass_ore');
  event.add('forge:ores/rockroot', 'druidcraft:rockroot_ore');
  event.add('forge:storage_blocks/fiery_glass', 'druidcraft:fiery_glass_block');
  event.add('forge:storage_blocks/rockroot', 'druidcraft:rockroot_block');
  event.add('forge:storage_blocks/gunpowder', 'quark:gunpowder_sack');
  event.add('forge:sand/arid', 'atmospheric:arid_sand');
  event.add('forge:sand/red_arid', 'atmospheric:red_arid_sand');
  event.add('valhelsia:deepslate', 'quark:deepslate');
  event.add('forbidden_arcanus:edelwood_logs', 'forbidden_arcanus:edelwood_log');
});