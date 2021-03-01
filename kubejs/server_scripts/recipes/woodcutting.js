// priority: 10

events.listen('recipes', function (event) {

  // Woodcutting
  const woodcutting = (output, input, count) => {
    // Druidcraft Woodcutter
    event.custom({
      type: "druidcraft:woodcutting",
      ingredient: Ingredient.of(input).toJson(),
      result: output,
      count: count
    })
    // TODO: Other woodcutters here as needed (eg. Environmental Sawmill).
  }

  // Wood Types
  const minecraftOverworldWoodTypes = [
    'acacia',
    'birch',
    'dark_oak',
    'jungle',
    'oak',
    'spruce'
  ]

  const minecraftNetherWoodTypes = [
    'crimson',
    'warped'
  ]

  const atmosphericWoodTypes = [
    'rosewood',
    'morado',
    'yucca',
    'kousa',
    'aspen',
    'grimwood'
  ]

  const autumnityWoodTypes = [
    'maple'
  ]

  const biomesOPlentyWoodTypes = [
    'fir',
    'redwood',
    'cherry',
    'mahogany',
    'jacaranda',
    'palm',
    'willow',
    'dead',
    'magic',
    'umbran',
    'hellbark'
  ]

  const astralSorceryWoodTypes = [
    'infused_wood'
  ]

  const botaniaWoodTypes = [
    'livingwood',
    'mossy_livingwood',
    'dreamwood',
    'mossy_dreamwood',
    'shimmerwood'
  ]

  const druidcraftWoodTypes = [
    'darkwood',
    'elder'
  ]
  
  const endergeticExpansionWoodTypes = [
    'poise'
  ]

  // Note: This will normally be done manually.
  const engineersDecorWoodTypes = [
    'old_industrial_wood'
  ]
  
  const enhancedMushroomsWoodTypes = [
    'red_mushroom',
    'brown_mushroom',
    'glowshroom'
  ]

  // Sneak previews. ;)
  const environmentalWoodTypes = [
    'cherry',
    'willow',
    'wisteria'
  ]

  const forbiddenArcanusWoodTypes = [
    'arcane_edelwood',
    'cherrywood',
    'edelwood',
    'mysterywood'
  ]

  // Note: IE has very weird naming conventions. Best to do manually normally.
  const immersiveEngineeringWoodTypes = [
    'treated'
  ]
  
  const quarkWoodTypes = [
    'white_stained',
    'orange_stained',
    'magenta_stained',
    'light_blue_stained',
    'yellow_stained',
    'lime_stained',
    'pink_stained',
    'gray_stained',
    'light_gray_stained',
    'cyan_stained',
    'purple_stained',
    'blue_stained',
    'brown_stained',
    'green_stained',
    'red_stained',
    'black_stained',
  ]

  const structurizeWoodTypes = [
    'cactus'
  ]
  
  // Note: Driftwood's Item IDs vary for the Wood variants, ie. it is just 'driftwood', not 'driftwood_wood'.
  const upgradeAquaticWoodTypes = [
    'driftwood',
    'river'
  ]


  // OUTPUT QUANTITIES

  // Vanilla things:
  const buttons_per_plank = 4
  const doors_per_plank = 1
  const fences_per_plank = 1
  const fence_gates_per_plank = 1
  const ladders_per_plank = 2
  const planks_per_log = 4
  const pressure_plates_per_plank = 2
  const trapdoors_per_plank = 1
  const signs_per_plank = 1
  const slabs_per_plank = 2
  const stairs_per_plank = 1
  
  const buttons_per_log = buttons_per_plank * planks_per_log
  const doors_per_log = doors_per_plank * planks_per_log
  const fences_per_log = fences_per_plank * planks_per_log
  const fence_gates_per_log = fence_gates_per_plank * planks_per_log
  const ladders_per_log = ladders_per_plank * planks_per_log
  const pressure_plates_per_log = pressure_plates_per_plank * planks_per_log
  const signs_per_log = signs_per_plank * planks_per_log
  const slabs_per_log = slabs_per_plank * planks_per_log
  const stairs_per_log = stairs_per_plank * planks_per_log
  const trapdoors_per_log = trapdoors_per_plank * planks_per_log
  const wood_per_log = 1
  const stripped_wood_per_log = 1
  const stripped_logs_per_log = 1

  // Modded things:
  const panels_per_plank = 1
  const seats_per_plank = 1
  const supports_per_plank = 1
  const vertical_slabs_per_plank = slabs_per_plank
  const vertical_planks_per_plank = 1
  
  const decorative_blocks_beams_per_log = 1
  const druidcraft_beams_per_log = 1
  const panels_per_log = panels_per_plank * planks_per_log
  const pantries_per_log = 1
  const palisades_per_log = 3
  const seats_per_log = seats_per_plank * planks_per_log
  const sign_posts_per_log = signs_per_log
  const supports_per_log = supports_per_plank * planks_per_log
  const vertical_planks_per_log = planks_per_log
  const vertical_slabs_per_log = slabs_per_log
  const val_posts_per_log = 2

  const planks_per_panel = 1
  const vertical_planks_per_panel = 1

  // Abnormals
  var abnormalsLogsTags = []
  var abnormalsLogs = []
  var abnormalsStrippedLogs = []
  var abnormalsWoods = []
  var abnormalsStrippedWoods = []
  var abnormalsPlanks = []
  var abnormalsVerticalPlanks = []
  var abnormalsSlabs = []
  var abnormalsVerticalSlabs = []
  var abnormalsStairs = []
  var abnormalsSigns = []
  var abnormalsLadders = []
  var abnormalsFences = []
  var abnormalsFenceGates = []
  var abnormalsButtons = []
  var abnormalsTrapdoors = []
  var abnormalsDoors = []
  var abnormalsPressurePlates = []

  // Atmospheric
  atmosphericWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push('#atmospheric:'.concat(element).concat('_logs'))
    abnormalsLogs.push('atmospheric:'.concat(element).concat('_log'))
    abnormalsStrippedLogs.push('atmospheric:stripped_'.concat(element).concat('_log'))

    // Special cases: Rosewood and Grimwood have different naming conventions.
    if (element === 'rosewood' || element === 'grimwood') {
      abnormalsWoods.push('atmospheric:'.concat(element))
      abnormalsStrippedWoods.push('atmospheric:stripped_'.concat(element))
    } else {
      abnormalsWoods.push('atmospheric:'.concat(element).concat('_wood'))
      abnormalsStrippedWoods.push('atmospheric:stripped_'.concat(element).concat('_wood'))
    }

    abnormalsPlanks.push('atmospheric:'.concat(element).concat('_planks'))
    abnormalsVerticalPlanks.push('atmospheric:vertical_'.concat(element).concat('_planks'))
    abnormalsSlabs.push('atmospheric:'.concat(element).concat('_slab'))
    abnormalsVerticalSlabs.push('atmospheric:'.concat(element).concat('_vertical_slab'))
    abnormalsStairs.push('atmospheric:'.concat(element).concat('_stairs'))
    abnormalsSigns.push('atmospheric:'.concat(element).concat('_sign'))
    abnormalsLadders.push('atmospheric:'.concat(element).concat('_ladder'))
    abnormalsFences.push('atmospheric:'.concat(element).concat('_fence'))
    abnormalsFenceGates.push('atmospheric:'.concat(element).concat('_fence_gate'))
    abnormalsButtons.push('atmospheric:'.concat(element).concat('_button'))
    abnormalsTrapdoors.push('atmospheric:'.concat(element).concat('_trapdoor'))
    abnormalsDoors.push('atmospheric:'.concat(element).concat('_door'))
    abnormalsPressurePlates.push('atmospheric:'.concat(element).concat('_pressure_plate'))
  })

  // Autumnity
  autumnityWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push('#autumnity:'.concat(element).concat('_logs'))
    abnormalsLogs.push('autumnity:'.concat(element).concat('_log'))
    abnormalsStrippedLogs.push('autumnity:stripped_'.concat(element).concat('_log'))
    abnormalsWoods.push('autumnity:'.concat(element).concat('_wood'))
    abnormalsStrippedWoods.push('autumnity:stripped_'.concat(element).concat('_wood'))
    abnormalsPlanks.push('autumnity:'.concat(element).concat('_planks'))
    abnormalsVerticalPlanks.push('autumnity:vertical_'.concat(element).concat('_planks'))
    abnormalsSlabs.push('autumnity:'.concat(element).concat('_slab'))
    abnormalsVerticalSlabs.push('autumnity:'.concat(element).concat('_vertical_slab'))
    abnormalsStairs.push('autumnity:'.concat(element).concat('_stairs'))
    abnormalsSigns.push('autumnity:'.concat(element).concat('_sign'))
    abnormalsLadders.push('autumnity:'.concat(element).concat('_ladder'))
    abnormalsFences.push('autumnity:'.concat(element).concat('_fence'))
    abnormalsFenceGates.push('autumnity:'.concat(element).concat('_fence_gate'))
    abnormalsButtons.push('autumnity:'.concat(element).concat('_button'))
    abnormalsTrapdoors.push('autumnity:'.concat(element).concat('_trapdoor'))
    abnormalsDoors.push('autumnity:'.concat(element).concat('_door'))
    abnormalsPressurePlates.push('autumnity:'.concat(element).concat('_pressure_plate'))
  })

  // Endergetic Expansion
  endergeticExpansionWoodTypes.forEach(function(element) {
    // Note: This works because we know that the only wood in Endergetic is a mushroom type, so stems is fine to put here.
    // It will break if they add any regular trees in the future, and will have to be handled differently.
    abnormalsLogsTags.push('#endergetic:'.concat(element).concat('_stems'))
    abnormalsLogs.push('endergetic:'.concat(element).concat('_stem'))
    abnormalsStrippedLogs.push('endergetic:stripped_'.concat(element).concat('_stem'))
    abnormalsWoods.push('endergetic:'.concat(element).concat('_wood'))
    abnormalsStrippedWoods.push('endergetic:stripped_'.concat(element).concat('_wood'))
    abnormalsPlanks.push('endergetic:'.concat(element).concat('_planks'))
    abnormalsVerticalPlanks.push('endergetic:vertical_'.concat(element).concat('_planks'))
    abnormalsSlabs.push('endergetic:'.concat(element).concat('_slab'))
    abnormalsVerticalSlabs.push('endergetic:'.concat(element).concat('_vertical_slab'))
    abnormalsStairs.push('endergetic:'.concat(element).concat('_stairs'))
    abnormalsSigns.push('endergetic:'.concat(element).concat('_sign'))
    abnormalsLadders.push('endergetic:'.concat(element).concat('_ladder'))
    abnormalsFences.push('endergetic:'.concat(element).concat('_fence'))
    abnormalsFenceGates.push('endergetic:'.concat(element).concat('_fence_gate'))
    abnormalsButtons.push('endergetic:'.concat(element).concat('_button'))
    abnormalsTrapdoors.push('endergetic:'.concat(element).concat('_trapdoor'))
    abnormalsDoors.push('endergetic:'.concat(element).concat('_door'))
    abnormalsPressurePlates.push('endergetic:'.concat(element).concat('_pressure_plate'))
  })

  // Environmental
  autumnityWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push('#environmental:'.concat(element).concat('_logs'))
    abnormalsLogs.push('environmental:'.concat(element).concat('_log'))
    abnormalsStrippedLogs.push('environmental:stripped_'.concat(element).concat('_log'))
    abnormalsWoods.push('environmental:'.concat(element).concat('_wood'))
    abnormalsStrippedWoods.push('environmental:stripped_'.concat(element).concat('_wood'))
    abnormalsPlanks.push('environmental:'.concat(element).concat('_planks'))
    abnormalsVerticalPlanks.push('environmental:vertical_'.concat(element).concat('_planks'))
    abnormalsSlabs.push('environmental:'.concat(element).concat('_slab'))
    abnormalsVerticalSlabs.push('environmental:'.concat(element).concat('_vertical_slab'))
    abnormalsStairs.push('environmental:'.concat(element).concat('_stairs'))
    abnormalsSigns.push('environmental:'.concat(element).concat('_sign'))
    abnormalsLadders.push('environmental:'.concat(element).concat('_ladder'))
    abnormalsFences.push('environmental:'.concat(element).concat('_fence'))
    abnormalsFenceGates.push('environmental:'.concat(element).concat('_fence_gate'))
    abnormalsButtons.push('environmental:'.concat(element).concat('_button'))
    abnormalsTrapdoors.push('environmental:'.concat(element).concat('_trapdoor'))
    abnormalsDoors.push('environmental:'.concat(element).concat('_door'))
    abnormalsPressurePlates.push('environmental:'.concat(element).concat('_pressure_plate'))
  })
  
  // Upgrade Aquatic
  upgradeAquaticWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push('#upgrade_aquatic:'.concat(element).concat('_logs'))
    abnormalsLogs.push('upgrade_aquatic:'.concat(element).concat('_log'))
    abnormalsStrippedLogs.push('upgrade_aquatic:stripped_'.concat(element).concat('_log'))

    // Special case: Driftwood has a different naming convention.
    if (element === 'driftwood') {
      abnormalsWoods.push('upgrade_aquatic:'.concat(element))
      abnormalsStrippedWoods.push('upgrade_aquatic:stripped_'.concat(element))
    } else {
      abnormalsWoods.push('upgrade_aquatic:'.concat(element).concat('_wood'))
      abnormalsStrippedWoods.push('upgrade_aquatic:stripped_'.concat(element).concat('_wood'))
    }

    abnormalsPlanks.push('upgrade_aquatic:'.concat(element).concat('_planks'))
    abnormalsVerticalPlanks.push('upgrade_aquatic:vertical_'.concat(element).concat('_planks'))
    abnormalsSlabs.push('upgrade_aquatic:'.concat(element).concat('_slab'))
    abnormalsVerticalSlabs.push('upgrade_aquatic:'.concat(element).concat('_vertical_slab'))
    abnormalsStairs.push('upgrade_aquatic:'.concat(element).concat('_stairs'))
    abnormalsSigns.push('upgrade_aquatic:'.concat(element).concat('_sign'))
    abnormalsLadders.push('upgrade_aquatic:'.concat(element).concat('_ladder'))
    abnormalsFences.push('upgrade_aquatic:'.concat(element).concat('_fence'))
    abnormalsFenceGates.push('upgrade_aquatic:'.concat(element).concat('_fence_gate'))
    abnormalsButtons.push('upgrade_aquatic:'.concat(element).concat('_button'))
    abnormalsTrapdoors.push('upgrade_aquatic:'.concat(element).concat('_trapdoor'))
    abnormalsDoors.push('upgrade_aquatic:'.concat(element).concat('_door'))
    abnormalsPressurePlates.push('upgrade_aquatic:'.concat(element).concat('_pressure_plate'))
  })

  // Enhanced Mushrooms (technically not Abnormals, but works in the same way)
  enhancedMushroomsWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push('#enhanced_mushrooms:'.concat(element).concat('_stems'))
    abnormalsLogs.push('enhanced_mushrooms:'.concat(element).concat('_stem'))
    abnormalsStrippedLogs.push('enhanced_mushrooms:stripped_'.concat(element).concat('_stem'))
    abnormalsWoods.push('enhanced_mushrooms:'.concat(element).concat('_hyphae'))
    abnormalsStrippedWoods.push('enhanced_mushrooms:stripped_'.concat(element).concat('_hyphae'))
    abnormalsPlanks.push('enhanced_mushrooms:'.concat(element).concat('_planks'))
    abnormalsVerticalPlanks.push('enhanced_mushrooms:vertical_'.concat(element).concat('_planks'))
    abnormalsSlabs.push('enhanced_mushrooms:'.concat(element).concat('_slab'))
    abnormalsVerticalSlabs.push('enhanced_mushrooms:'.concat(element).concat('_vertical_slab'))
    abnormalsStairs.push('enhanced_mushrooms:'.concat(element).concat('_stairs'))
    abnormalsSigns.push('enhanced_mushrooms:'.concat(element).concat('_sign'))
    abnormalsLadders.push('enhanced_mushrooms:'.concat(element).concat('_ladder'))
    abnormalsFences.push('enhanced_mushrooms:'.concat(element).concat('_fence'))
    abnormalsFenceGates.push('enhanced_mushrooms:'.concat(element).concat('_fence_gate'))
    abnormalsButtons.push('enhanced_mushrooms:'.concat(element).concat('_button'))
    abnormalsTrapdoors.push('enhanced_mushrooms:'.concat(element).concat('_trapdoor'))
    abnormalsDoors.push('enhanced_mushrooms:'.concat(element).concat('_door'))
    abnormalsPressurePlates.push('enhanced_mushrooms:'.concat(element).concat('_pressure_plate'))
  })

  for (let i = 0; i < abnormalsLogsTags.length; i++) {
    // Log Woodcutting
    woodcutting(abnormalsPlanks[i], abnormalsLogsTags[i], planks_per_log)
    woodcutting(abnormalsVerticalPlanks[i], abnormalsLogsTags[i], vertical_planks_per_log)
    woodcutting(abnormalsSlabs[i], abnormalsLogsTags[i], slabs_per_log)
    woodcutting(abnormalsVerticalSlabs[i], abnormalsLogsTags[i], vertical_slabs_per_log)
    woodcutting(abnormalsStairs[i], abnormalsLogsTags[i], stairs_per_log)
    woodcutting(abnormalsSigns[i], abnormalsLogsTags[i], signs_per_log)
    woodcutting(abnormalsLadders[i], abnormalsLogsTags[i], ladders_per_log)
    woodcutting(abnormalsFences[i], abnormalsLogsTags[i], fences_per_log)
    woodcutting(abnormalsFenceGates[i], abnormalsLogsTags[i], fence_gates_per_log)
    woodcutting(abnormalsButtons[i], abnormalsLogsTags[i], buttons_per_log)
    woodcutting(abnormalsTrapdoors[i], abnormalsLogsTags[i], trapdoors_per_log)
    woodcutting(abnormalsDoors[i], abnormalsLogsTags[i], doors_per_log)
    woodcutting(abnormalsPressurePlates[i], abnormalsLogsTags[i], pressure_plates_per_log)

    // Plank Woodcutting
    woodcutting(abnormalsVerticalPlanks[i], abnormalsPlanks[i], vertical_planks_per_plank)
    woodcutting(abnormalsSlabs[i], abnormalsPlanks[i], slabs_per_plank)
    woodcutting(abnormalsVerticalSlabs[i], abnormalsPlanks[i], vertical_slabs_per_plank)
    woodcutting(abnormalsStairs[i], abnormalsPlanks[i], stairs_per_plank)
    woodcutting(abnormalsSigns[i], abnormalsPlanks[i], signs_per_plank)
    woodcutting(abnormalsLadders[i], abnormalsPlanks[i], ladders_per_plank)
    woodcutting(abnormalsFences[i], abnormalsPlanks[i], fences_per_plank)
    woodcutting(abnormalsFenceGates[i], abnormalsPlanks[i], fence_gates_per_plank)
    woodcutting(abnormalsButtons[i], abnormalsPlanks[i], buttons_per_plank)
    woodcutting(abnormalsTrapdoors[i], abnormalsPlanks[i], trapdoors_per_plank)
    woodcutting(abnormalsDoors[i], abnormalsPlanks[i], doors_per_plank)
    woodcutting(abnormalsPressurePlates[i], abnormalsPlanks[i], pressure_plates_per_plank)

    // Misc
    woodcutting(abnormalsWoods[i], abnormalsLogs[i], wood_per_log)
    woodcutting(abnormalsStrippedLogs[i], abnormalsLogs[i], stripped_logs_per_log)
    woodcutting(abnormalsStrippedWoods[i], abnormalsLogs[i], stripped_wood_per_log)
    woodcutting(abnormalsStrippedWoods[i], abnormalsWoods[i], wood_per_log)
    woodcutting(abnormalsPlanks[i], abnormalsVerticalPlanks[i], vertical_planks_per_plank)
  }

  // Biomes O Plenty
  // TODO: Way too much. :'(

  // Botania
  // TODO: All of it.

  // Decorative Blocks
  var dbLogTypes = []
  var dbPlankTypes = []
  var dbPalisades = []
  var dbSeats = []
  var dbSupports = []
  var dbBeams = []

  minecraftOverworldWoodTypes.forEach(function(element) {
    dbLogTypes.push("#minecraft:".concat(element).concat("_logs"))
    dbPlankTypes.push("minecraft:".concat(element).concat("_planks"))
    dbPalisades.push("decorative_blocks:".concat(element).concat("_palisade"))
    dbSeats.push("decorative_blocks:".concat(element).concat("_seat"))
    dbSupports.push("decorative_blocks:".concat(element).concat("_support"))
    dbBeams.push("decorative_blocks:".concat(element).concat("_beam"))
  })

  minecraftNetherWoodTypes.forEach(function(element) {
    dbLogTypes.push("#minecraft:".concat(element).concat("_stems"))
    dbPlankTypes.push("minecraft:".concat(element).concat("_planks"))
    dbPalisades.push("decorative_blocks:".concat(element).concat("_palisade"))
    dbSeats.push("decorative_blocks:".concat(element).concat("_seat"))
    dbSupports.push("decorative_blocks:".concat(element).concat("_support"))
    dbBeams.push("decorative_blocks:".concat(element).concat("_beam"))
  })

  biomesOPlentyWoodTypes.forEach(function(element) {
    dbLogTypes.push("#biomesoplenty:".concat(element).concat("_logs"))
    dbPlankTypes.push("biomesoplenty:".concat(element).concat("_planks"))
    dbPalisades.push("decorative_blocks:".concat(element).concat("_palisade"))
    dbSeats.push("decorative_blocks:".concat(element).concat("_seat"))
    dbSupports.push("decorative_blocks:".concat(element).concat("_support"))
    dbBeams.push("decorative_blocks:".concat(element).concat("_beam"))
  })

  atmosphericWoodTypes.forEach(function(element) {
    dbLogTypes.push("#atmospheric:".concat(element).concat("_logs"))
    dbPlankTypes.push("atmospheric:".concat(element).concat("_planks"))
    dbPalisades.push("decorative_blocks_abnormals:".concat(element).concat("_palisade"))
    dbSeats.push("decorative_blocks_abnormals:".concat(element).concat("_seat"))
    dbSupports.push("decorative_blocks_abnormals:".concat(element).concat("_support"))
    dbBeams.push("decorative_blocks_abnormals:".concat(element).concat("_beam"))
  })

  autumnityWoodTypes.forEach(function(element) {
    dbLogTypes.push("#autumnity:".concat(element).concat("_logs"))
    dbPlankTypes.push("autumnity:".concat(element).concat("_planks"))
    dbPalisades.push("decorative_blocks_abnormals:".concat(element).concat("_palisade"))
    dbSeats.push("decorative_blocks_abnormals:".concat(element).concat("_seat"))
    dbSupports.push("decorative_blocks_abnormals:".concat(element).concat("_support"))
    dbBeams.push("decorative_blocks_abnormals:".concat(element).concat("_beam"))
  })

  endergeticExpansionWoodTypes.forEach(function(element) {
    dbLogTypes.push("#endergetic:".concat(element).concat("_stems"))
    dbPlankTypes.push("endergetic:".concat(element).concat("_planks"))
    dbPalisades.push("decorative_blocks_abnormals:".concat(element).concat("_palisade"))
    dbSeats.push("decorative_blocks_abnormals:".concat(element).concat("_seat"))
    dbSupports.push("decorative_blocks_abnormals:".concat(element).concat("_support"))
    dbBeams.push("decorative_blocks_abnormals:".concat(element).concat("_beam"))
  })

  upgradeAquaticWoodTypes.forEach(function(element) {
    dbLogTypes.push("#upgrade_aquatic:".concat(element).concat("_logs"))
    dbPlankTypes.push("upgrade_aquatic:".concat(element).concat("_planks"))
    dbPalisades.push("decorative_blocks_abnormals:".concat(element).concat("_palisade"))
    dbSeats.push("decorative_blocks_abnormals:".concat(element).concat("_seat"))
    dbSupports.push("decorative_blocks_abnormals:".concat(element).concat("_support"))
    dbBeams.push("decorative_blocks_abnormals:".concat(element).concat("_beam"))
  })

  // Handle Enhanced Mushrooms without array since Decorative Blocks excludes glowshroom for some reason.
  dbLogTypes.push("#enhanced_mushrooms:brown_mushroom_stems")
  dbPlankTypes.push("enhanced_mushrooms:brown_mushroom_planks")
  dbPalisades.push("decorative_blocks_abnormals:brown_mushroom_palisade")
  dbSeats.push("decorative_blocks_abnormals:brown_mushroom_seat")
  dbSupports.push("decorative_blocks_abnormals:brown_mushroom_support")
  dbBeams.push("decorative_blocks_abnormals:brown_mushroom_beam")
  
  dbLogTypes.push("#enhanced_mushrooms:red_mushroom_stems")
  dbPlankTypes.push("enhanced_mushrooms:red_mushroom_planks")
  dbPalisades.push("decorative_blocks_abnormals:red_mushroom_palisade")
  dbSeats.push("decorative_blocks_abnormals:red_mushroom_seat")
  dbSupports.push("decorative_blocks_abnormals:red_mushroom_support")
  dbBeams.push("decorative_blocks_abnormals:red_mushroom_beam")

  for (let i = 0; i < dbLogTypes.length; i++) {
    woodcutting(dbPalisades[i], dbLogTypes[i], palisades_per_log)
    woodcutting(dbSeats[i], dbLogTypes[i], seats_per_log)
    woodcutting(dbSeats[i], dbPlankTypes[i], seats_per_plank)
    woodcutting(dbSupports[i], dbLogTypes[i], supports_per_log)
    woodcutting(dbSupports[i], dbPlankTypes[i], supports_per_plank)
    woodcutting(dbBeams[i], dbLogTypes[i], decorative_blocks_beams_per_log)
  }

  // Druidcraft
  woodcutting('druidcraft:acacia_panels', '#minecraft:acacia_logs', panels_per_log)
  woodcutting('druidcraft:birch_panels', '#minecraft:birch_logs', panels_per_log)
  woodcutting('druidcraft:dark_oak_panels', '#minecraft:dark_oak_logs', panels_per_log)
  woodcutting('druidcraft:darkwood_panels', '#druidcraft:darkwood_logs', panels_per_log)
  woodcutting('druidcraft:elder_panels', '#druidcraft:elder_logs', panels_per_log)
  woodcutting('druidcraft:jungle_panels', '#minecraft:jungle_logs', panels_per_log)
  woodcutting('druidcraft:oak_panels', '#minecraft:oak_logs', panels_per_log)
  woodcutting('druidcraft:spruce_panels', '#minecraft:spruce_logs', panels_per_log)
  // Make sure to check this again if Druidcraft adds Crimson / Warped panels.

  // Engineer's Decor
  // TODO: A bunch of Treated Wood stuff.

  // Farmer's Delight
  woodcutting('farmersdelight:acacia_pantry', '#minecraft:acacia_logs', pantries_per_log)
  woodcutting('farmersdelight:birch_pantry', '#minecraft:birch_logs', pantries_per_log)
  woodcutting('farmersdelight:crimson_pantry', '#minecraft:crimson_stems', pantries_per_log)
  woodcutting('farmersdelight:dark_oak_pantry', '#minecraft:dark_oak_logs', pantries_per_log)
  woodcutting('farmersdelight:jungle_pantry', '#minecraft:jungle_logs', pantries_per_log)
  woodcutting('farmersdelight:oak_pantry', '#minecraft:oak_logs', pantries_per_log)
  woodcutting('farmersdelight:spruce_pantry', '#minecraft:spruce_logs', pantries_per_log)
  woodcutting('farmersdelight:warped_pantry', '#minecraft:warped_stems', pantries_per_log)

  // Immersive Engineering
  // TODO: A bunch of Treated Wood stuff.

  // Macaw's Stuff

  // Minecraft
  var mcLogs = []
  var mcPlanks = []
  var mcSigns = []
  var mcSlabs = []
  var mcStairs = []
  var mcFences = []
  var mcFenceGates = []
  var mcTrapdoors = []
  var mcPressurePlates = []
  var mcDoors = []

  minecraftOverworldWoodTypes.forEach(function(element) {
    mcLogs.push('#minecraft:'.concat(element).concat('_logs'))
    mcPlanks.push('minecraft:'.concat(element).concat('_planks'))
    mcSigns.push('minecraft:'.concat(element).concat('_sign'))
    mcSlabs.push('minecraft:'.concat(element).concat('_slab'))
    mcStairs.push('minecraft:'.concat(element).concat('_stairs'))
    mcFences.push('minecraft:'.concat(element).concat('_fence'))
    mcFenceGates.push('minecraft:'.concat(element).concat('_fence_gate'))
    mcTrapdoors.push('minecraft:'.concat(element).concat('_trapdoor'))
    mcPressurePlates.push('minecraft:'.concat(element).concat('_pressure_plate'))
    mcDoors.push('minecraft:'.concat(element).concat('_door'))
  })
  
  minecraftNetherWoodTypes.forEach(function(element) {
    mcLogs.push('#minecraft:'.concat(element).concat('_stems'))
    mcPlanks.push('minecraft:'.concat(element).concat('_planks'))
    mcSigns.push('minecraft:'.concat(element).concat('_sign'))
    mcSlabs.push('minecraft:'.concat(element).concat('_slab'))
    mcStairs.push('minecraft:'.concat(element).concat('_stairs'))
    mcFences.push('minecraft:'.concat(element).concat('_fence'))
    mcFenceGates.push('minecraft:'.concat(element).concat('_fence_gate'))
    mcTrapdoors.push('minecraft:'.concat(element).concat('_trapdoor'))
    mcPressurePlates.push('minecraft:'.concat(element).concat('_pressure_plate'))
    mcDoors.push('minecraft:'.concat(element).concat('_door'))
  })
  
  for (let i = 0; i < mcLogs.length; i++) {
    woodcutting(mcSigns[i], mcLogs[i], signs_per_log)
    woodcutting(mcSlabs[i], mcLogs[i], slabs_per_log)
    woodcutting(mcStairs[i], mcLogs[i], stairs_per_log)
    woodcutting(mcFences[i], mcLogs[i], fences_per_log)
    woodcutting(mcFenceGates[i], mcLogs[i], fence_gates_per_log)
    woodcutting(mcTrapdoors[i], mcLogs[i], trapdoors_per_log)
    woodcutting(mcPressurePlates[i], mcLogs[i], pressure_plates_per_log)
    woodcutting(mcDoors[i], mcLogs[i], doors_per_log)

    woodcutting(mcPressurePlates[i], mcPlanks[i], pressure_plates_per_plank)
  }

  // Supplementaries - Vanilla
  woodcutting('supplementaries:item_shelf', '#minecraft:wooden_slabs', 1)
  woodcutting('supplementaries:sign_post_acacia', 'minecraft:acacia_planks', 1)
  woodcutting('supplementaries:sign_post_acacia', '#minecraft:acacia_logs', 4)
  woodcutting('supplementaries:sign_post_birch', 'minecraft:birch_planks', 1)
  woodcutting('supplementaries:sign_post_birch', '#minecraft:birch_logs', 4)
  woodcutting('supplementaries:sign_post_crimson', 'minecraft:crimson_planks', 1)
  woodcutting('supplementaries:sign_post_crimson', '#minecraft:crimson_stems', 4)
  woodcutting('supplementaries:sign_post_dark_oak', 'minecraft:dark_oak_planks', 1)
  woodcutting('supplementaries:sign_post_dark_oak', '#minecraft:dark_oak_logs', 4)
  woodcutting('supplementaries:sign_post_jungle', 'minecraft:jungle_planks', 1)
  woodcutting('supplementaries:sign_post_jungle', '#minecraft:jungle_logs', 4)
  woodcutting('supplementaries:sign_post_oak', 'minecraft:oak_planks', 1)
  woodcutting('supplementaries:sign_post_oak', '#minecraft:oak_logs', 4)
  woodcutting('supplementaries:sign_post_spruce', 'minecraft:spruce_planks', 1)
  woodcutting('supplementaries:sign_post_spruce', '#minecraft:spruce_logs', 4)
  woodcutting('supplementaries:sign_post_warped', 'minecraft:warped_planks', 1)
  woodcutting('supplementaries:sign_post_warped', '#minecraft:warped_stems', 4)

  // Supplementaries - Atmospheric
  woodcutting('supplementaries:sign_post_rosewood', 'atmospheric:rosewood_planks', 1)
  woodcutting('supplementaries:sign_post_rosewood', '#atmospheric:rosewood_logs', 4)
  woodcutting('supplementaries:sign_post_kousa', 'atmospheric:kousa_planks', 1)
  woodcutting('supplementaries:sign_post_kousa', '#atmospheric:kousa_logs', 4)
  woodcutting('supplementaries:sign_post_aspen', 'atmospheric:aspen_planks', 1)
  woodcutting('supplementaries:sign_post_aspen', '#atmospheric:aspen_logs', 4)
  woodcutting('supplementaries:sign_post_morado', 'atmospheric:morado_planks', 1)
  woodcutting('supplementaries:sign_post_morado', '#atmospheric:morado_logs', 4)
  woodcutting('supplementaries:sign_post_grimwood', 'atmospheric:grimwood_planks', 1)
  woodcutting('supplementaries:sign_post_grimwood', '#atmospheric:grimwood_logs', 4)
  woodcutting('supplementaries:sign_post_yucca', 'atmospheric:yucca_planks', 1)
  woodcutting('supplementaries:sign_post_yucca', '#atmospheric:yucca_logs', 4)

  // Supplementaries - Autumnity
  woodcutting('supplementaries:sign_post_maple', 'autumnity:maple_planks', 1)
  woodcutting('supplementaries:sign_post_maple', '#autumnity:maple_logs', 4)
  
  // Supplementaries - Endergetic Expansion
  woodcutting('supplementaries:sign_post_poise', 'endergetic:poise_planks', 1)
  woodcutting('supplementaries:sign_post_poise', '#endergetic:poise_stems', 4)

  // Supplementaries - Enhanced Mushrooms
  woodcutting('supplementaries:sign_post_red_mushroom', 'enhanced_mushrooms:red_mushroom_planks', 1)
  woodcutting('supplementaries:sign_post_red_mushroom', '#enhanced_mushrooms:red_mushroom_stems', 4)
  woodcutting('supplementaries:sign_post_brown_mushroom', 'enhanced_mushrooms:brown_mushroom_planks', 1)
  woodcutting('supplementaries:sign_post_brown_mushroom', '#enhanced_mushrooms:brown_mushroom_stems', 4)
  
  // Supplementaries - Upgrade Aquatic
  woodcutting('supplementaries:sign_post_driftwood', 'upgrade_aquatic:driftwood_planks', 1)
  woodcutting('supplementaries:sign_post_driftwood', '#upgrade_aquatic:driftwood_logs', 4)
  woodcutting('supplementaries:sign_post_river', 'upgrade_aquatic:river_planks', 1)
  woodcutting('supplementaries:sign_post_river', '#upgrade_aquatic:river_logs', 4)

  // Quark
  woodcutting('quark:vertical_acacia_planks', 'minecraft:acacia_planks', 1)
  woodcutting('quark:vertical_acacia_planks', '#minecraft:acacia_logs', 4)
  woodcutting('quark:acacia_post', '#minecraft:acacia_logs', 3)
  woodcutting('quark:stripped_acacia_post', '#minecraft:acacia_logs', 3)
  woodcutting('quark:acacia_vertical_slab', 'minecraft:acacia_planks', 2)
  woodcutting('quark:acacia_vertical_slab', '#minecraft:acacia_logs', 8)
  woodcutting('quark:acacia_ladder', 'minecraft:acacia_planks', 2)
  woodcutting('quark:acacia_ladder', '#minecraft:acacia_logs', 8)
  // TODO: Add non-acacia stuff.

  // Valhelsia Structures
  woodcutting('valhelsia_structures:acacia_post', '#minecraft:acacia_logs', 2)
  woodcutting('valhelsia_structures:birch_post', '#minecraft:birch_logs', 2)
  woodcutting('valhelsia_structures:dark_oak_post', '#minecraft:dark_oak_logs', 2)
  woodcutting('valhelsia_structures:jungle_post', '#minecraft:jungle_logs', 2)
  woodcutting('valhelsia_structures:oak_post', '#minecraft:oak_logs', 2)
  woodcutting('valhelsia_structures:spruce_post', '#minecraft:spruce_logs', 2)
  // Make sure to check this again after the Valhelsia Structures update to add the new posts.

})
