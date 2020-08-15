events.listen('recipes', function (event) {

  var idRemove = [
    //Minecraft
    'minecraft:chain',

    //Decorative Blocks
    'decorative_blocks:chain',

    //Industrial Foregoing
    'industrialforegoing:infinity_drill',
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
    'immersiveengineering:ingot_lead',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:sword_steel',
    'immersiveengineering:pickaxe_steel',
    'immersiveengineering:shovel_steel',
    'immersiveengineering:axe_steel',
    'immersiveengineering:hoe_steel',

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

    //Mekanism Tools
    'mekanismtools:steel_helmet',
    'mekanismtools:steel_chestplate',
    'mekanismtools:steel_leggings',
    'mekanismtools:steel_boots'
  ]
  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })
})
