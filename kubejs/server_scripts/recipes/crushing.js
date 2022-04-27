// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('recipes', event => {
  
  // Add a crushing recipe to multiple mods.
  let crush = (output, input) => {
    // Note: Output needs to be divided into primary + secondary for certain crushing types.
    // Until this is done, don't include any secondary output recipes here.
    event.recipes.immersiveengineering.crusher(output, input)
    event.recipes.mekanism.crushing(output, input)
    event.recipes.create.crushing(output, input)
  }

  // Add a milling recipe to multiple mods.
  let mill = (output, input) => {
    event.recipes.create.milling(output, input)
    // TODO: Add Atum Quern here.
  }

  // Add a milling and crushing recipe to multiple mods.
  let millAndCrush = (output, input) => {
    crush(output, input)
    mill(output, input)
  }

  // ----- Remove Old Crushing Recipes -----
  [
    'create:milling/andesite'
    // TODO: Check Create's recipe for granite crushing, I think it needs to be removed.
    // TODO: Also check Gabbro crushing.
  ].forEach(function (remove) {
    event.remove({id: remove})
  })

  // ----- Add New Crushing Recipes -----

  // Rock to Sand Crushing
  millAndCrush('atmospheric:arid_sand', 'darkerdepths:aridrock')
  millAndCrush('atmospheric:arid_sand', 'create:gabbro')
  millAndCrush('atmospheric:red_arid_sand', 'quark:jasper')
  millAndCrush('biomesoplenty:white_sand', 'quark:marble')
  millAndCrush('biomesoplenty:black_sand', 'minecraft:basalt')
  millAndCrush('blue_skies:crystal_sand', 'create:dolomite')
  millAndCrush('blue_skies:midnight_sand', 'quark:cobbled_deepslate')
  millAndCrush('minecraft:red_sand', 'minecraft:granite')

  // Aquaculture
  millAndCrush('5x minecraft:bone_meal', 'aquaculture:fish_bones')

  // Atum
  millAndCrush('6x minecraft:bone_meal', 'atum:dusty_bone')
  millAndCrush('9x minecraft:bone_meal', 'atum:dirty_bone_block')

  // BetterEnd
  millAndCrush('betterendforge:ender_dust', 'betterendforge:ender_shard')
  millAndCrush('betterendforge:ender_dust', 'minecraft:ender_pearl')

  // Biomes 'o' Plenty
  millAndCrush('4x minecraft:rotten_flesh', 'biomesoplenty:flesh')

  // Create
  millAndCrush('create:andesite_cobblestone', 'minecraft:andesite')
  
  // Decorative Blocks
  millAndCrush('minecraft:coarse_dirt', 'decorative_blocks:rocky_dirt')
  
  // Druidcraft
  millAndCrush('druidcraft:crushed_fiery_glass', '#forge:gems/fiery_glass')

  // Mekanism
  millAndCrush('mekanism:sawdust', 'biomesoplenty:dead_branch')

  // Mystical World
  millAndCrush('15x minecraft:bone_meal', 'mysticalworld:antlers')

  // Upgrade Aquatic
  millAndCrush('10x minecraft:bone_meal', 'upgrade_aquatic:thrasher_tooth')
});