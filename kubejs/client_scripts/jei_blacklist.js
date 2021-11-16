// priority: 0

onEvent('jei.hide.items', event => {
  // Hide duplicate Refined Storage things that are just different colour variants. You can still see that they can be dyed by looking at the recipes / uses.
  event.hide([
    /refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/
  ])

  // Hide Comforts Sleeping Bags (unused in the pack)
  event.hide([
    /comforts:sleeping_bag_(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)/
  ])

  // Hide unused items.
  event.hide([
    'immersiveengineering:dust_wood',  // Replaced with Mekanism's Sawdust
    'darkerdepths:silver_ingot', // Replaced with IE Silver Ingot
    'twilightforest:uncrafting_table', // Disabled to prevent exploits.
    'druidcraft:debug', // Rarely needed by players.
    'valhelsia_tweaks:birthday_cake', // Keep it a surprise.
    'valhelsia_tweaks:valhelsia_firework_rocket' // Keep it a surprise.
  ])
  event.hide(Item.of('ftblibrary:fluid_container').ignoreNBT())

})

onEvent('jei.hide.fluids', event => {
  // Empty for now.  
})