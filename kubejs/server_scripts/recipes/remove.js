// priority: 100

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('recipes', event => {

  var idRemove = [

    // Abnormals Delight
    'abnormals_delight:environmental/cooking/squid_ink_risotto', // Squid Ink Risotto has been removed from Environmental.

    // Abundance
    'abundance:crafting/lavender_basket', // Removed but re-added later.

    // Autumnity
    'autumnity:lead_from_snail_slime', // Redundant.
    'autumnity:sticky_piston_from_snail_slime', // Redundant.

    // Aquaculture
    'aquaculture:planks_from_driftwood', // Replaced with Upgrade Aquatic Driftwood.
    'aquaculture:tin_can_to_iron_nugget', // Replaced with tin nuggets.
    'aquaculture:tin_can_to_iron_nugget_from_blasting', // Replaced with tin nuggets.

    // Atum 2
    'atum:pumpkin_pie', // Duplicate recipe.
    'atum:gold_ingot', // Duplicate recipe.
    'atum:gold_ingot_from_blasting', // Duplicate recipe.
    'atum:iron_ingot', // Duplicate recipe.
    'atum:iron_ingot_from_blasting', // Duplicate recipe.
    'atum:ore_brewing_stand',
    'atum:ore_magma_cream', // Duplicate recipe.

    // Bayou Blues
    'bayou_blues:crafting/gooseberry_jam_cookie_bent', // Broken recipe (remove me if Team Aurora accept the PR).

    // Biomes 'o' Plenty
    'biomesoplenty:purple_dye_from_lavender', // Redundant.
    'biomesoplenty:mossy_cobblestone_from_willow_vine', // Redundant.
    'biomesoplenty:mossy_stone_bricks_from_willow_vine', // Redundant.

    // Botania
    'botania:pure_daisy/sand', // Replaced with a different recipe.

    // Blood Magic
    'bloodmagic:smelting/ingot_gold', // Duplicate recipe.
    'bloodmagic:arc/ore/dustgold', // Duplicate recipe.
    'bloodmagic:smelting/ingot_iron', // Duplicate recipe.
    'bloodmagic:arc/ore/dustiron', // Duplicate recipe.

    // Create
    'create:milling/sandstone', // Replaced to add output parity with IE.
    'create:crushing/nether_wart_block', // Replaced to add output parity with IE.
    'create:compat/atmospheric/milling/hot_monkey_brush', // Fix erroring recipe.
    'create:compat/upgrade_aquatic/milling/searocket_pink', // Fix erroring recipe.
    'create:compat/upgrade_aquatic/milling/searocket_white', // Fix erroring recipe.
    'create:compat/atmospheric/cutting/driftwood_log', // Fix erroring recipe.
    'create:compat/atmospheric/cutting/stripped_driftwood_log', // Fix erroring recipe.
    'create:compat/bop/milling/lavender', // Redundant.

    // Create Crafts & Additions
    'createaddition:compat/immersiveengineering/lapis_sheet_metal_press', // Duplicate recipe.

    // Darker Depths
    'darkerdepths:aridrock_silver_ore_from_blasting',
    'darkerdepths:limestone_silver_ore_from_blasting',
    'darkerdepths:silver_ingot_from_blasting',
    'darkerdepths:silver_ingot_from_blasting_raw_silver',
    'darkerdepths:aridrock_silver_ore',
    'darkerdepths:limestone_silver_ore',
    'darkerdepths:silver_ingot',
    'darkerdepths:silver_ingot_from_smelting_raw_silver',
    'darkerdepths:silver_ingot_from_silver_block',
    'darkerdepths:aridrock_gold_ore_from_blasting',
    'darkerdepths:limestone_gold_ore_from_blasting',
    'darkerdepths:aridrock_gold_ore',
    'darkerdepths:limestone_gold_ore',
    'darkerdepths:aridrock_iron_ore_from_blasting',
    'darkerdepths:limestone_iron_ore_from_blasting',
    'darkerdepths:aridrock_iron_ore',
    'darkerdepths:limestone_iron_ore',

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

    // Eidolon
    'eidolon:pewter_blend',
    'eidolon:smelt_stone_brick', // Conflicts with vanilla recipe.
    
    // Immersive Engineering
    'immersiveengineering:crafting/paper_from_sawdust', // Removed since Mekanism method made this redundant.
    'immersiveengineering:crafting/gold_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/gold_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust_from_blasting', // Duplicate recipe.
    'immersiveengineering:crafting/iron_ingot_from_dust', // Duplicate recipe.
    'immersiveengineering:crusher/nether_gold',
    'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
    'immersiveengineering:crafting/ingot_silver_to_storage_silver',
    'immersiveengineering:crafting/storage_silver_to_ingot_silver',
    'immersiveengineering:crafting/ingot_silver_from_dust',
    'immersiveengineering:crafting/ingot_silver_from_dust_from_blasting',
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
    'immersiveengineering:crafting/ingot_steel_to_storage_steel',
    'immersiveengineering:crafting/ingot_copper_to_storage_copper',
    'immersiveengineering:crafting/ingot_lead_to_storage_lead',
    'immersiveengineering:crusher/nether_wart', // Default recipe leads to dupe exploit.

    // Industrial Foregoing

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
    'mekanism:crushing/biofuel/melon_slice', // #blameurmet

    // Mekanism - Combiner (remove all ore to prevent infinite ore exploits)
    'jaopca:mekanism.dust_to_ore.aluminum',
    'jaopca:mekanism.dust_to_ore.nickel',
    'jaopca:mekanism.dust_to_ore.amber',
    'jaopca:mekanism.dust_to_ore.silver',
    'jaopca:mekanism.dust_to_ore.zinc',
    'jaopca:mekanism.dust_to_ore.amethyst',
    'jaopca:mekanism.dust_to_ore.moonstone',
    'jaopca:mekanism.dust_to_ore.arcane_crystal',
    'jaopca:mekanism.dust_to_ore.quicksilver',
    'jaopca:mekanism.dust_to_ore.biotite',
    'jaopca:mekanism.dust_to_ore.fluorite',
    'jaopca:mekanism.dust_to_ore.nebu',
    'jaopca:mekanism.dust_to_ore.thallasium',
    'mekanism:processing/copper/ore/from_dust',
    'mekanism:processing/lead/ore/from_dust',
    'mekanism:processing/gold/ore/from_dust',
    'mekanism:processing/gold/ore/nether_from_dust',
    'mekanism:processing/iron/ore/from_dust',
    'mekanism:processing/osmium/ore/from_dust',
    'mekanism:processing/tin/ore/from_dust',
    'mekanism:processing/uranium/ore/from_dust',
    'mekanism:processing/coal/to_ore',
    'mekanism:processing/diamond/to_ore',
    'mekanism:processing/emerald/to_ore',
    'mekanism:processing/fluorite/to_ore',
    'mekanism:processing/lapis_lazuli/to_ore',
    'mekanism:processing/netherite/dust_to_ancient_debris',
    'mekanism:processing/redstone/to_ore',
    'mekanism:processing/quartz/to_ore',

    // MineColonies
    'minecolonies:chainmailhelmet',
    'minecolonies:chainmailchestplate',
    'minecolonies:chainmailleggings',
    'minecolonies:chainmailboots',

    // Minecraft
    'minecraft:dark_prismarine', // Replaced with a different recipe.
    'minecraft:slime_block', // Removed but re-added later in another script to avoid being hit by the replaceInput of slime balls.

    // Mystical World
    'mysticalworld:ingots_silver_to_storage_block', // Duplicate recipe.
    'mysticalworld:gold_ingot_from_smelting_dust', // Duplicate recipe.
    'mysticalworld:gold_ingot_from_blasting_dust', // Duplicate recipe.
    'mysticalworld:iron_ingot_from_smelting_dust', // Duplicate recipe.
    'mysticalworld:iron_ingot_from_blasting_dust', // Duplicate recipe.

    // Quark
    'quark:building/crafting/oak_bookshelf', // Duplicate recipe.
    'quark:building/crafting/oak_ladder', // Duplicate recipe.
    'quark:building/crafting/charcoal_block_uncompress' // Duplicate recipe.
  ]

  idRemove.forEach(function (remove) {
    event.remove({id: remove})
  })

  var outputRemove = [
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
    'quark:carrot_crate', // Although they could probably be disabled in the config for Quark instead.
    'quark:potato_crate'
  ]

  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })

});
