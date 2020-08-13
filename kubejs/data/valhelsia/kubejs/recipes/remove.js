events.listen('recipes', function (event) {

  var idRemove = [
    //Minecraft
    'minecraft:chain',

    //Decorative Blocks
    'decorative_blocks:chain',

    //Industrial Foregoing
    'industrialforegoing:infinity_drill'
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
    'immersiveengineering:nugget_lead'
  ]
  outputRemove.forEach(function (remove) {
    event.remove({output: remove})
  })
})
