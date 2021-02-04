// priority: 100

events.listen('recipes', function (event) {

  var idRemove = [
    // Aquaculture
    'aquaculture:planks_from_driftwood',

    // Botania
    'botania:pure_daisy/sand', // Replaced with a different recipe.

    // Charm
    'charm:extra_recipes/soul_torch',
    'charm:extra_recipes/trident',

    // Create
    'create:milling/sandstone', // Replaced to add output parity with IE.
    'create:crushing/nether_wart_block', // Replaced to add output parity with IE.
    'create:compat/atmospheric/milling/hot_monkey_brush', // Fix erroring recipe.
    'create:compat/upgrade_aquatic/milling/searocket_pink', // Fix erroring recipe.
    'create:compat/upgrade_aquatic/milling/searocket_white', // Fix erroring recipe.
    'create:compat/atmospheric/cutting/driftwood_log', // Fix erroring recipe.
    'create:compat/atmospheric/cutting/stripped_driftwood_log', // Fix erroring recipe.

    // Decorative Blocks
    'decorative_blocks:chain', // Replaced with a different recipe.
    'decorative_blocks:dirt_from_rocky_dirt', // Removed entirely, no neat way to uncraft with the new recipe.
    'decorative_blocks:rocky_dirt', // Replaced with a different recipe.

    // Druidcraft
    'druidcraft:acacia_pressure_plate_from_acacia_planks_woodcutting', // Replaced with a different recipe.
    'druidcraft:birch_pressure_plate_from_birch_planks_woodcutting', // Replaced with a different recipe.
    'druidcraft:dark_oak_pressure_plate_from_dark_oak_planks_woodcutting', // Replaced with a different recipe.
    'druidcraft:darkwood_pressure_plate_from_darkwood_planks_woodcutting', // Replaced with a different recipe.
    'druidcraft:elder_pressure_plate_from_elder_planks_woodcutting', // Replaced with a different recipe.
    'druidcraft:jungle_pressure_plate_from_jungle_planks_woodcutting', // Replaced with a different recipe.
    'druidcraft:oak_pressure_plate_from_oak_planks_woodcutting', // Replaced with a different recipe.
    'druidcraft:spruce_pressure_plate_from_spruce_planks_woodcutting', // Replaced with a different recipe.

    // Immersive Engineering
    'immersive_engineering:crafting/paper_from_sawdust', // Removed since Mekanism method made this redundant.

    // Industrial Foregoing
    'industrialforegoing:infinity_drill',

    // Mekanism
    'mekanism:crushing/biofuel/oak_sapling',
    'mekanism:crushing/biofuel/spruce_sapling',
    'mekanism:crushing/biofuel/birch_sapling',
    'mekanism:crushing/biofuel/jungle_sapling',
    'mekanism:crushing/biofuel/acacia_sapling',
    'mekanism:crushing/biofuel/dark_oak_sapling',
    'mekanism:crushing/biofuel/oak_leaves',
    'mekanism:crushing/biofuel/spruce_leaves',
    'mekanism:crushing/biofuel/birch_leaves',
    'mekanism:crushing/biofuel/jungle_leaves',
    'mekanism:crushing/biofuel/acacia_leaves',
    'mekanism:crushing/biofuel/dark_oak_leaves',
    'mekanism:crushing/biofuel/beetroot_seeds',
    'mekanism:crushing/biofuel/melon_seeds',
    'mekanism:crushing/biofuel/pumpkin_seeds',
    'mekanism:crushing/biofuel/wheat_seeds',
    'mekanism:crushing/biofuel/dandelion',
    'mekanism:crushing/biofuel/poppy',
    'mekanism:crushing/biofuel/blue_orchid',
    'mekanism:crushing/biofuel/allium',
    'mekanism:crushing/biofuel/azure_bluet',
    'mekanism:crushing/biofuel/red_tulip',
    'mekanism:crushing/biofuel/orange_tulip',
    'mekanism:crushing/biofuel/white_tulip',
    'mekanism:crushing/biofuel/pink_tulip',
    'mekanism:crushing/biofuel/oxeye_daisy',
    'mekanism:crushing/biofuel/cornflower',
    'mekanism:crushing/biofuel/lily_of_the_valley',
    'mekanism:crushing/biofuel/wither_rose',
    'mekanism:crushing/biofuel/sunflower',
    'mekanism:crushing/biofuel/lilac',
    'mekanism:crushing/biofuel/rose_bush',
    'mekanism:crushing/biofuel/peony',

    // MineColonies
    'minecolonies:chainmailhelmet',
    'minecolonies:chainmailchestplate',
    'minecolonies:chainmailleggings',
    'minecolonies:chainmailboots',

    // Mystical World
    'mysticalworld:ingots_silver_to_storage_block', // Duplicate recipe.

    // Quark
    'quark:building/crafting/oak_bookshelf' // Duplicate recipe.
  ]

  idRemove.forEach(function (remove) {
    event.remove({id: remove})
  })

  var outputRemove = [
    // Charm
    'charm:woodcutter', // Replaced with Druidcraft Woodcutter (and soon Environmental Sawmill)

    // Comforts
    'comforts:sleeping_bag_white', // This and below are replaced with bedrolls from Upgrade Aquatic / Druidcraft
    'comforts:sleeping_bag_orange',
    'comforts:sleeping_bag_magenta',
    'comforts:sleeping_bag_light_blue',
    'comforts:sleeping_bag_yellow',
    'comforts:sleeping_bag_lime',
    'comforts:sleeping_bag_pink',
    'comforts:sleeping_bag_gray',
    'comforts:sleeping_bag_light_gray',
    'comforts:sleeping_bag_cyan',
    'comforts:sleeping_bag_purple',
    'comforts:sleeping_bag_blue',
    'comforts:sleeping_bag_brown',
    'comforts:sleeping_bag_green',
    'comforts:sleeping_bag_red',
    'comforts:sleeping_bag_black',
    
    // Create
    'create:copper_ingot',
    'create:copper_nugget',

    // Eidolon
    'eidolon:lead_ingot',
    'eidolon:lead_nugget',
    'eidolon:lead_ore',
    
    // Immersive Engineering
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:ingot_copper',
    'immersiveengineering:nugget_copper',
    'immersiveengineering:plate_copper',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:sword_steel',
    'immersiveengineering:pickaxe_steel',
    'immersiveengineering:shovel_steel',
    'immersiveengineering:axe_steel',
    'immersiveengineering:hoe_steel',
    'immersiveengineering:plate_iron',
    'immersiveengineering:plate_gold',

    // Mekanism Tools
    'mekanismtools:steel_helmet',
    'mekanismtools:steel_chestplate',
    'mekanismtools:steel_leggings',
    'mekanismtools:steel_boots',
    'mekanismtools:lapis_lazuli_sword',
    'mekanismtools:lapis_lazuli_pickaxe',
    'mekanismtools:lapis_lazuli_axe',
    'mekanismtools:lapis_lazuli_shovel',
    'mekanismtools:lapis_lazuli_hoe',
    'mekanismtools:lapis_lazuli_paxel',
    'mekanismtools:lapis_lazuli_helmet',
    'mekanismtools:lapis_lazuli_chestplate',
    'mekanismtools:lapis_lazuli_leggings',
    'mekanismtools:lapis_lazuli_boots',
    'mekanismtools:lapis_lazuli_shield',

    // Mystical World
    'mysticalworld:tin_ingot',
    'mysticalworld:tin_dust',
    'mysticalworld:tin_nugget',
    'mysticalworld:copper_ingot',
    'mysticalworld:copper_dust',
    'mysticalworld:copper_nugget',
    'mysticalworld:silver_ingot',
    'mysticalworld:silver_dust',
    'mysticalworld:silver_nugget',
    'mysticalworld:lead_ingot',
    'mysticalworld:lead_dust',
    'mysticalworld:lead_nugget',

    // Quark
    'quark:beetroot_crate', // These crates are replaced with Farmer's Delight ones.
    'quark:carrot_crate',
    'quark:potato_crate'
  ]

  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })

})
