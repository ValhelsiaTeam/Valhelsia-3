events.listen('recipes', function (event) {

  var idRemove = [
    //Decorative Blocks
    'decorative_blocks:chain',

    //Industrial Foregoing
    'industrialforegoing:infinity_drill',

    //MineColonies
    'minecolonies:chainmailhelmet',
    'minecolonies:chainmailchestplate',
    'minecolonies:chainmailleggings',
    'minecolonies:chainmailboots',
  ]
  idRemove.forEach(function (remove) {
    event.remove({id: remove})
  })
  var outputRemove = [
    //Immersive Engineering
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

    //Comforts
    'comforts:sleeping_bag_white',
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

    //Eidolon
    'eidolon:lead_ingot',
    'eidolon:lead_nugget',
    'eidolon:lead_ore',

    //Mekanism Tools
    'mekanismtools:steel_helmet',
    'mekanismtools:steel_chestplate',
    'mekanismtools:steel_leggings',
    'mekanismtools:steel_boots',

    //Mystical World
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

    //Create
    'create:copper_ingot',
    'create:copper_nugget',
  ]
  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })
})
