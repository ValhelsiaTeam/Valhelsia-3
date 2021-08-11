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

  const abundanceWoodTypes = [
    'jacaranda',
    'redbud'
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

  const bayouBluesWoodTypes = [
    'cypress'
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

  const betterEndWoodTypes = [
    'dragon_tree',
    'end_lotus',
    'helix_tree',
    'jellyshroom',
    'lacugrove',
    'lucernia',
    'mossy_glowshroom',
    'pythadendron',
    'tenanea',
    'umbrella_tree'
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

  const environmentalWoodTypes = [
    'cherry',
    'willow',
    'wisteria'
  ]

  // Also has Arcane Edelwood, but only for certain things.
  const forbiddenArcanusWoodTypes = [
    'cherrywood',
    'edelwood',
    'mysterywood'
  ]

  // Note: IE has very weird naming conventions. Best to do manually normally.
  const immersiveEngineeringWoodTypes = [
    'treated'
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
  const sticks_per_plank = 2
  
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
  const sticks_per_log = sticks_per_plank * planks_per_log
  const bowls_per_log = 6
  const wood_per_log = 1
  const stripped_wood_per_log = 1
  const stripped_logs_per_log = 1

  // Modded things:
  const panels_per_plank = 1
  const seats_per_plank = 1
  const supports_per_plank = 1
  const vertical_slabs_per_plank = slabs_per_plank
  const vertical_planks_per_plank = 1
  const sign_posts_per_plank = signs_per_plank
  
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
  const val_cut_posts_per_log = val_posts_per_log * 4
  const quark_posts_per_log = 3

  const planks_per_panel = 1
  const vertical_planks_per_panel = 1

  // Mekanism Sawmill:
  const planks_per_log_mekanism = 6
  const sticks_per_plank_mekanism = 6
  const sawdust_chance_normal = 0.25
  const sawdust_chance_slab = 0.13
  const sawdust_chance_stair = 0.38

  // Abnormals
  var mod = ""
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
  var abnormalsPantries = []

  // Atmospheric
  mod = "atmospheric"
  atmosphericWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push(`#${mod}:${element}_logs`)
    abnormalsLogs.push(`${mod}:${element}_log`)
    abnormalsStrippedLogs.push(`${mod}:stripped_${element}_log`)

    // Special cases: Rosewood and Grimwood have different naming conventions.
    if (element === 'rosewood' || element === 'grimwood') {
      abnormalsWoods.push(`${mod}:${element}`)
      abnormalsStrippedWoods.push(`${mod}:stripped_${element}`)
    } else {
      abnormalsWoods.push(`${mod}:${element}_wood`)
      abnormalsStrippedWoods.push(`${mod}:stripped_${element}_wood`)
    }

    abnormalsPlanks.push(`${mod}:${element}_planks`)
    abnormalsVerticalPlanks.push(`${mod}:vertical_${element}_planks`)
    abnormalsSlabs.push(`${mod}:${element}_slab`)
    abnormalsVerticalSlabs.push(`${mod}:${element}_vertical_slab`)
    abnormalsStairs.push(`${mod}:${element}_stairs`)
    abnormalsSigns.push(`${mod}:${element}_sign`)
    abnormalsLadders.push(`${mod}:${element}_ladder`)
    abnormalsFences.push(`${mod}:${element}_fence`)
    abnormalsFenceGates.push(`${mod}:${element}_fence_gate`)
    abnormalsButtons.push(`${mod}:${element}_button`)
    abnormalsTrapdoors.push(`${mod}:${element}_trapdoor`)
    abnormalsDoors.push(`${mod}:${element}_door`)
    abnormalsPressurePlates.push(`${mod}:${element}_pressure_plate`)
    abnormalsPantries.push(`abnormals_delight:${element}_pantry`)
  })

  // Autumnity
  mod = "autumnity"
  autumnityWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push(`#${mod}:${element}_logs`)
    abnormalsLogs.push(`${mod}:${element}_log`)
    abnormalsStrippedLogs.push(`${mod}:stripped_${element}_log`)
    abnormalsWoods.push(`${mod}:${element}_wood`)
    abnormalsStrippedWoods.push(`${mod}:stripped_${element}_wood`)
    abnormalsPlanks.push(`${mod}:${element}_planks`)
    abnormalsVerticalPlanks.push(`${mod}:vertical_${element}_planks`)
    abnormalsSlabs.push(`${mod}:${element}_slab`)
    abnormalsVerticalSlabs.push(`${mod}:${element}_vertical_slab`)
    abnormalsStairs.push(`${mod}:${element}_stairs`)
    abnormalsSigns.push(`${mod}:${element}_sign`)
    abnormalsLadders.push(`${mod}:${element}_ladder`)
    abnormalsFences.push(`${mod}:${element}_fence`)
    abnormalsFenceGates.push(`${mod}:${element}_fence_gate`)
    abnormalsButtons.push(`${mod}:${element}_button`)
    abnormalsTrapdoors.push(`${mod}:${element}_trapdoor`)
    abnormalsDoors.push(`${mod}:${element}_door`)
    abnormalsPressurePlates.push(`${mod}:${element}_pressure_plate`)
    abnormalsPantries.push(`abnormals_delight:${element}_pantry`)
  })


  // Environmental
  mod = "environmental"
  environmentalWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push(`#${mod}:${element}_logs`)
    abnormalsLogs.push(`${mod}:${element}_log`)
    abnormalsStrippedLogs.push(`${mod}:stripped_${element}_log`)
    abnormalsWoods.push(`${mod}:${element}_wood`)
    abnormalsStrippedWoods.push(`${mod}:stripped_${element}_wood`)
    abnormalsPlanks.push(`${mod}:${element}_planks`)
    abnormalsVerticalPlanks.push(`${mod}:vertical_${element}_planks`)
    abnormalsSlabs.push(`${mod}:${element}_slab`)
    abnormalsVerticalSlabs.push(`${mod}:${element}_vertical_slab`)
    abnormalsStairs.push(`${mod}:${element}_stairs`)
    abnormalsSigns.push(`${mod}:${element}_sign`)
    abnormalsLadders.push(`${mod}:${element}_ladder`)
    abnormalsFences.push(`${mod}:${element}_fence`)
    abnormalsFenceGates.push(`${mod}:${element}_fence_gate`)
    abnormalsButtons.push(`${mod}:${element}_button`)
    abnormalsTrapdoors.push(`${mod}:${element}_trapdoor`)
    abnormalsDoors.push(`${mod}:${element}_door`)
    abnormalsPressurePlates.push(`${mod}:${element}_pressure_plate`)
    abnormalsPantries.push(`abnormals_delight:${element}_pantry`)
  })
  
  // Upgrade Aquatic
  mod = "upgrade_aquatic"
  upgradeAquaticWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push(`#${mod}:${element}_logs`)
    abnormalsLogs.push(`${mod}:${element}_log`)
    abnormalsStrippedLogs.push(`${mod}:stripped_${element}_log`)

    // Special case: Driftwood uses a different naming convention.
    if (element === 'driftwood') {
      abnormalsWoods.push(`${mod}:${element}`)
      abnormalsStrippedWoods.push(`${mod}:stripped_${element}`)
    } else {
      abnormalsWoods.push(`${mod}:${element}_wood`)
      abnormalsStrippedWoods.push(`${mod}:stripped_${element}_wood`)
    }

    abnormalsPlanks.push(`${mod}:${element}_planks`)
    abnormalsVerticalPlanks.push(`${mod}:vertical_${element}_planks`)
    abnormalsSlabs.push(`${mod}:${element}_slab`)
    abnormalsVerticalSlabs.push(`${mod}:${element}_vertical_slab`)
    abnormalsStairs.push(`${mod}:${element}_stairs`)
    abnormalsSigns.push(`${mod}:${element}_sign`)
    abnormalsLadders.push(`${mod}:${element}_ladder`)
    abnormalsFences.push(`${mod}:${element}_fence`)
    abnormalsFenceGates.push(`${mod}:${element}_fence_gate`)
    abnormalsButtons.push(`${mod}:${element}_button`)
    abnormalsTrapdoors.push(`${mod}:${element}_trapdoor`)
    abnormalsDoors.push(`${mod}:${element}_door`)
    abnormalsPressurePlates.push(`${mod}:${element}_pressure_plate`)
    abnormalsPantries.push(`abnormals_delight:${element}_pantry`)
  })

  // Endergetic Expansion
  mod = "endergetic"
  endergeticExpansionWoodTypes.forEach(function(element) {
    // Note: This works because we know that the only wood in Endergetic is a mushroom type, so stems is fine to put here.
    // It will break if they add any regular trees in the future, and will have to be handled differently.
    abnormalsLogsTags.push(`#${mod}:${element}_stems`)
    abnormalsLogs.push(`${mod}:${element}_stem`)
    abnormalsStrippedLogs.push(`${mod}:stripped_${element}_stem`)
    abnormalsWoods.push(`${mod}:${element}_wood`)
    abnormalsStrippedWoods.push(`${mod}:stripped_${element}_wood`)
    abnormalsPlanks.push(`${mod}:${element}_planks`)
    abnormalsVerticalPlanks.push(`${mod}:vertical_${element}_planks`)
    abnormalsSlabs.push(`${mod}:${element}_slab`)
    abnormalsVerticalSlabs.push(`${mod}:${element}_vertical_slab`)
    abnormalsStairs.push(`${mod}:${element}_stairs`)
    abnormalsSigns.push(`${mod}:${element}_sign`)
    abnormalsLadders.push(`${mod}:${element}_ladder`)
    abnormalsFences.push(`${mod}:${element}_fence`)
    abnormalsFenceGates.push(`${mod}:${element}_fence_gate`)
    abnormalsButtons.push(`${mod}:${element}_button`)
    abnormalsTrapdoors.push(`${mod}:${element}_trapdoor`)
    abnormalsDoors.push(`${mod}:${element}_door`)
    abnormalsPressurePlates.push(`${mod}:${element}_pressure_plate`)
    abnormalsPantries.push(`abnormals_delight:${element}_pantry`)
  })

  // Handle Pantries before adding Team Aurora mods and BetterEnd, since they don't have pantries.
  for (let i = 0; i < abnormalsLogsTags.length; i++) {
    woodcutting(abnormalsPantries[i], abnormalsLogsTags[i], pantries_per_log)
  }

  // Abundance
  mod="abundance"
  abundanceWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push(`#${mod}:${element}_logs`)
    abnormalsLogs.push(`${mod}:${element}_log`)
    abnormalsStrippedLogs.push(`${mod}:stripped_${element}_log`)
    abnormalsWoods.push(`${mod}:${element}_wood`)
    abnormalsStrippedWoods.push(`${mod}:stripped_${element}_wood`)
    abnormalsPlanks.push(`${mod}:${element}_planks`)
    abnormalsVerticalPlanks.push(`${mod}:vertical_${element}_planks`)
    abnormalsSlabs.push(`${mod}:${element}_slab`)
    abnormalsVerticalSlabs.push(`${mod}:${element}_vertical_slab`)
    abnormalsStairs.push(`${mod}:${element}_stairs`)
    abnormalsSigns.push(`${mod}:${element}_sign`)
    abnormalsLadders.push(`${mod}:${element}_ladder`)
    abnormalsFences.push(`${mod}:${element}_fence`)
    abnormalsFenceGates.push(`${mod}:${element}_fence_gate`)
    abnormalsButtons.push(`${mod}:${element}_button`)
    abnormalsTrapdoors.push(`${mod}:${element}_trapdoor`)
    abnormalsDoors.push(`${mod}:${element}_door`)
    abnormalsPressurePlates.push(`${mod}:${element}_pressure_plate`)
  })

  // Bayou Blues
  mod="bayou_blues"
  bayouBluesWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push(`#${mod}:${element}_logs`)
    abnormalsLogs.push(`${mod}:${element}_log`)
    abnormalsStrippedLogs.push(`${mod}:stripped_${element}_log`)
    abnormalsWoods.push(`${mod}:${element}_wood`)
    abnormalsStrippedWoods.push(`${mod}:stripped_${element}_wood`)
    abnormalsPlanks.push(`${mod}:${element}_planks`)
    abnormalsVerticalPlanks.push(`${mod}:vertical_${element}_planks`)
    abnormalsSlabs.push(`${mod}:${element}_slab`)
    abnormalsVerticalSlabs.push(`${mod}:${element}_vertical_slab`)
    abnormalsStairs.push(`${mod}:${element}_stairs`)
    abnormalsSigns.push(`${mod}:${element}_sign`)
    abnormalsLadders.push(`${mod}:${element}_ladder`)
    abnormalsFences.push(`${mod}:${element}_fence`)
    abnormalsFenceGates.push(`${mod}:${element}_fence_gate`)
    abnormalsButtons.push(`${mod}:${element}_button`)
    abnormalsTrapdoors.push(`${mod}:${element}_trapdoor`)
    abnormalsDoors.push(`${mod}:${element}_door`)
    abnormalsPressurePlates.push(`${mod}:${element}_pressure_plate`)
  })

  // Enhanced Mushrooms
  mod="enhanced_mushrooms"
  enhancedMushroomsWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push(`#${mod}:${element}_stems`)
    abnormalsLogs.push(`${mod}:${element}_stem`)
    abnormalsStrippedLogs.push(`${mod}:stripped_${element}_stem`)
    abnormalsWoods.push(`${mod}:${element}_hyphae`)
    abnormalsStrippedWoods.push(`${mod}:stripped_${element}_hyphae`)
    abnormalsPlanks.push(`${mod}:${element}_planks`)
    abnormalsVerticalPlanks.push(`${mod}:vertical_${element}_planks`)
    abnormalsSlabs.push(`${mod}:${element}_slab`)
    abnormalsVerticalSlabs.push(`${mod}:${element}_vertical_slab`)
    abnormalsStairs.push(`${mod}:${element}_stairs`)
    abnormalsSigns.push(`${mod}:${element}_sign`)
    abnormalsLadders.push(`${mod}:${element}_ladder`)
    abnormalsFences.push(`${mod}:${element}_fence`)
    abnormalsFenceGates.push(`${mod}:${element}_fence_gate`)
    abnormalsButtons.push(`${mod}:${element}_button`)
    abnormalsTrapdoors.push(`${mod}:${element}_trapdoor`)
    abnormalsDoors.push(`${mod}:${element}_door`)
    abnormalsPressurePlates.push(`${mod}:${element}_pressure_plate`)
  })
  
  // Handle Vertical Planks and Vertical Slabs before adding BetterEnd, since it doesn't have verticals.
  for (let i = 0; i < abnormalsLogsTags.length; i++) {
    woodcutting(abnormalsVerticalPlanks[i], abnormalsLogsTags[i], vertical_planks_per_log)
    woodcutting(abnormalsVerticalSlabs[i], abnormalsLogsTags[i], vertical_slabs_per_log)

    woodcutting(abnormalsVerticalPlanks[i], abnormalsPlanks[i], vertical_planks_per_plank)
    woodcutting(abnormalsVerticalSlabs[i], abnormalsPlanks[i], vertical_slabs_per_plank)

    woodcutting(abnormalsPlanks[i], abnormalsVerticalPlanks[i], vertical_planks_per_plank)
  }

  // BetterEnd
  mod = "betterendforge"
  betterEndWoodTypes.forEach(function(element) {
    abnormalsLogsTags.push(`#${mod}:${element}_logs`)
    abnormalsLogs.push(`${mod}:${element}_log`)
    abnormalsStrippedLogs.push(`${mod}:${element}_stripped_log`)
    abnormalsWoods.push(`${mod}:${element}_bark`)
    abnormalsStrippedWoods.push(`${mod}:${element}_stripped_bark`)
    abnormalsPlanks.push(`${mod}:${element}_planks`)
    abnormalsSlabs.push(`${mod}:${element}_slab`)
    abnormalsStairs.push(`${mod}:${element}_stairs`)
    abnormalsSigns.push(`${mod}:${element}_sign`)
    abnormalsLadders.push(`${mod}:${element}_ladder`)
    abnormalsFences.push(`${mod}:${element}_fence`)
    abnormalsFenceGates.push(`${mod}:${element}_gate`)
    abnormalsButtons.push(`${mod}:${element}_button`)
    abnormalsTrapdoors.push(`${mod}:${element}_trapdoor`)
    abnormalsDoors.push(`${mod}:${element}_door`)
    abnormalsPressurePlates.push(`${mod}:${element}_pressure_plate`)
  })

  for (let i = 0; i < abnormalsLogsTags.length; i++) {
    // Log Woodcutting
    woodcutting(abnormalsPlanks[i], abnormalsLogsTags[i], planks_per_log)
    woodcutting(abnormalsSlabs[i], abnormalsLogsTags[i], slabs_per_log)
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
    woodcutting(abnormalsSlabs[i], abnormalsPlanks[i], slabs_per_plank)
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
    woodcutting(abnormalsStrippedWoods[i], abnormalsWoods[i], 1)
  }

  // BetterEnd
  betterEndWoodTypes.forEach(function(element) {
    woodcutting(`betterendforge:${element}_crafting_table`, `#betterendforge:${element}_logs`, 1)
    woodcutting(`betterendforge:${element}_composter`, `#betterendforge:${element}_logs`, 1)
    
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, planks_per_log_mekanism), `#betterendforge:${element}_logs`, Item.of('mekanism:sawdust').chance(sawdust_chance_normal))
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, 2), `betterendforge:${element}_door`)
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, 2), `betterendforge:${element}_gate`, Item.of('minecraft:stick', 4).chance(1))
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, 2), `betterendforge:${element}_pressure_plate`)
    event.recipes.mekanism.sawing(Item.of(`betterendforge:${element}_planks`, 3), `betterendforge:${element}_trapdoor`)
  })
  
  woodcutting('betterendforge:neon_cactus_stairs', 'betterendforge:neon_cactus_block', stairs_per_plank)
  woodcutting('betterendforge:neon_cactus_slab', 'betterendforge:neon_cactus_block', slabs_per_plank)

  // Biomes O Plenty
  biomesOPlentyWoodTypes.forEach(function(element) {
    // Stripping
    woodcutting(`biomesoplenty:stripped_${element}_log`, `biomesoplenty:${element}_log`, 1)
    woodcutting(`biomesoplenty:stripped_${element}_wood`, `biomesoplenty:${element}_wood`, 1)

    // Log Processing
    woodcutting(`biomesoplenty:${element}_planks`, `#biomesoplenty:${element}_logs`, planks_per_log)
    woodcutting(`biomesoplenty:${element}_stairs`, `#biomesoplenty:${element}_logs`, stairs_per_log)
    woodcutting(`biomesoplenty:${element}_slab`, `#biomesoplenty:${element}_logs`, slabs_per_log)
    woodcutting(`biomesoplenty:${element}_fence`, `#biomesoplenty:${element}_logs`, fences_per_log)
    woodcutting(`biomesoplenty:${element}_fence_gate`, `#biomesoplenty:${element}_logs`, fence_gates_per_log)
    woodcutting(`biomesoplenty:${element}_door`, `#biomesoplenty:${element}_logs`, doors_per_log)
    woodcutting(`biomesoplenty:${element}_trapdoor`, `#biomesoplenty:${element}_logs`, trapdoors_per_log)
    woodcutting(`biomesoplenty:${element}_pressure_plate`, `#biomesoplenty:${element}_logs`, pressure_plates_per_log)
    woodcutting(`biomesoplenty:${element}_button`, `#biomesoplenty:${element}_logs`, buttons_per_log)
    woodcutting(`biomesoplenty:${element}_boat`, `#biomesoplenty:${element}_logs`, 1)

    // Plank Processing
    woodcutting(`biomesoplenty:${element}_stairs`, `biomesoplenty:${element}_planks`, stairs_per_plank)
    woodcutting(`biomesoplenty:${element}_slab`, `biomesoplenty:${element}_planks`, slabs_per_plank)
    woodcutting(`biomesoplenty:${element}_fence`, `biomesoplenty:${element}_planks`, fences_per_plank)
    woodcutting(`biomesoplenty:${element}_fence_gate`, `biomesoplenty:${element}_planks`, fence_gates_per_plank)
    woodcutting(`biomesoplenty:${element}_door`, `biomesoplenty:${element}_planks`, doors_per_plank)
    woodcutting(`biomesoplenty:${element}_trapdoor`, `biomesoplenty:${element}_planks`, trapdoors_per_plank)
    woodcutting(`biomesoplenty:${element}_pressure_plate`, `biomesoplenty:${element}_planks`, pressure_plates_per_plank)
    woodcutting(`biomesoplenty:${element}_button`, `biomesoplenty:${element}_planks`, buttons_per_plank)
  })

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
    dbLogTypes.push(`#minecraft:${element}_logs`)
    dbPlankTypes.push(`minecraft:${element}_planks`)
    dbPalisades.push(`decorative_blocks:${element}_palisade`)
    dbSeats.push(`decorative_blocks:${element}_seat`)
    dbSupports.push(`decorative_blocks:${element}_support`)
    dbBeams.push(`decorative_blocks:${element}_beam`)
  })

  minecraftNetherWoodTypes.forEach(function(element) {
    dbLogTypes.push(`#minecraft:${element}_stems`)
    dbPlankTypes.push(`minecraft:${element}_planks`)
    dbPalisades.push(`decorative_blocks:${element}_palisade`)
    dbSeats.push(`decorative_blocks:${element}_seat`)
    dbSupports.push(`decorative_blocks:${element}_support`)
    dbBeams.push(`decorative_blocks:${element}_beam`)
  })

  biomesOPlentyWoodTypes.forEach(function(element) {
    dbLogTypes.push(`#biomesoplenty:${element}_logs`)
    dbPlankTypes.push(`biomesoplenty:${element}_planks`)
    dbPalisades.push(`decorative_blocks:${element}_palisade`)
    dbSeats.push(`decorative_blocks:${element}_seat`)
    dbSupports.push(`decorative_blocks:${element}_support`)
    dbBeams.push(`decorative_blocks:${element}_beam`)
  })

  atmosphericWoodTypes.forEach(function(element) {
    if (element === 'kousa' || element === 'aspen' || element === 'grimwood') {
      // Decorative Blocks Abnormals doesn't support every Atmospheric wood type yet.
      return
    }
    
    dbLogTypes.push(`#atmospheric:${element}_logs`)
    dbPlankTypes.push(`atmospheric:${element}_planks`)
    dbPalisades.push(`decorative_blocks_abnormals:${element}_palisade`)
    dbSeats.push(`decorative_blocks_abnormals:${element}_seat`)
    dbSupports.push(`decorative_blocks_abnormals:${element}_support`)
    dbBeams.push(`decorative_blocks_abnormals:${element}_beam`)
  })

  autumnityWoodTypes.forEach(function(element) {
    dbLogTypes.push(`#autumnity:${element}_logs`)
    dbPlankTypes.push(`autumnity:${element}_planks`)
    dbPalisades.push(`decorative_blocks_abnormals:${element}_palisade`)
    dbSeats.push(`decorative_blocks_abnormals:${element}_seat`)
    dbSupports.push(`decorative_blocks_abnormals:${element}_support`)
    dbBeams.push(`decorative_blocks_abnormals:${element}_beam`)
  })

  endergeticExpansionWoodTypes.forEach(function(element) {
    dbLogTypes.push(`#endergetic:${element}_stems`)
    dbPlankTypes.push(`endergetic:${element}_planks`)
    dbPalisades.push(`decorative_blocks_abnormals:${element}_palisade`)
    dbSeats.push(`decorative_blocks_abnormals:${element}_seat`)
    dbSupports.push(`decorative_blocks_abnormals:${element}_support`)
    dbBeams.push(`decorative_blocks_abnormals:${element}_beam`)
  })

  // TODO: Add Environmental Decorative Blocks compatibility once the "Decorative Blocks Abnormals" mod updates.

  upgradeAquaticWoodTypes.forEach(function(element) {
    dbLogTypes.push(`#upgrade_aquatic:${element}_logs`)
    dbPlankTypes.push(`upgrade_aquatic:${element}_planks`)
    dbPalisades.push(`decorative_blocks_abnormals:${element}_palisade`)
    dbSeats.push(`decorative_blocks_abnormals:${element}_seat`)
    dbSupports.push(`decorative_blocks_abnormals:${element}_support`)
    dbBeams.push(`decorative_blocks_abnormals:${element}_beam`)
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
  minecraftOverworldWoodTypes.forEach(function(element) {
    woodcutting(`druidcraft:${element}_panels`, `#minecraft:${element}_logs`, panels_per_log)
  })
  druidcraftWoodTypes.forEach(function(element) {
    woodcutting(`druidcraft:${element}_panels`, `#druidcraft:${element}_logs`, panels_per_log)
  })
  // Make sure to check this again if Druidcraft adds Crimson / Warped panels.

  // Eidolon
  woodcutting("eidolon:wooden_altar", "#minecraft:logs", 2)

  // Engineer's Decor
  // TODO: A bunch of Treated Wood stuff.

  // Farmer's Delight
  minecraftOverworldWoodTypes.forEach(function(element) {
    woodcutting(`farmersdelight:${element}_pantry`, `#minecraft:${element}_logs`, pantries_per_log)
  })

  minecraftNetherWoodTypes.forEach(function(element) {
    woodcutting(`farmersdelight:${element}_pantry`, `#minecraft:${element}_stems`, pantries_per_log)
  })

  woodcutting("farmersdelight:cutting_board", "#minecraft:logs", 1)

  // Forbidden & Arcanus
  forbiddenArcanusWoodTypes.forEach(function(element) {
    // TODO: Druidcraft Woodcutting recipes for Forbidden and Arcanus.
    event.recipes.mekanism.sawing(Item.of(`forbidden_arcanus:${element}_planks`, planks_per_log_mekanism), `#forbidden_arcanus:${element}_logs`, Item.of('mekanism:sawdust').chance(sawdust_chance_normal))
  })
  event.recipes.mekanism.sawing(Item.of('forbidden_arcanus:edelwood_stick', sticks_per_plank_mekanism), 'forbidden_arcanus:edelwood_planks', Item.of('mekanism:sawdust').chance(sawdust_chance_normal))

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
    mcLogs.push(`#minecraft:${element}_logs`)
    mcPlanks.push(`minecraft:${element}_planks`)
    mcSigns.push(`minecraft:${element}_sign`)
    mcSlabs.push(`minecraft:${element}_slab`)
    mcStairs.push(`minecraft:${element}_stairs`)
    mcFences.push(`minecraft:${element}_fence`)
    mcFenceGates.push(`minecraft:${element}_fence_gate`)
    mcTrapdoors.push(`minecraft:${element}_trapdoor`)
    mcPressurePlates.push(`minecraft:${element}_pressure_plate`)
    mcDoors.push(`minecraft:${element}_door`)
  })
  
  minecraftNetherWoodTypes.forEach(function(element) {
    mcLogs.push(`#minecraft:${element}_stems`)
    mcPlanks.push(`minecraft:${element}_planks`)
    mcSigns.push(`minecraft:${element}_sign`)
    mcSlabs.push(`minecraft:${element}_slab`)
    mcStairs.push(`minecraft:${element}_stairs`)
    mcFences.push(`minecraft:${element}_fence`)
    mcFenceGates.push(`minecraft:${element}_fence_gate`)
    mcTrapdoors.push(`minecraft:${element}_trapdoor`)
    mcPressurePlates.push(`minecraft:${element}_pressure_plate`)
    mcDoors.push(`minecraft:${element}_door`)
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

  woodcutting("minecraft:crafting_table", "#minecraft:logs", 1)
  woodcutting("minecraft:bowl", "#minecraft:logs", bowls_per_log)
  woodcutting("minecraft:stick", "#minecraft:logs", sticks_per_log)
  woodcutting("minecraft:stick", "#minecraft:planks", sticks_per_plank)
  woodcutting("minecraft:composter", "#minecraft:logs", 1)

  // Structurize
  woodcutting("structurize:blockbarreldeco_standing", "#minecraft:logs", 1)
  woodcutting("structurize:blockbarreldeco_onside", "#minecraft:logs", 1)

  // Supplementaries - Vanilla
  woodcutting('supplementaries:item_shelf', '#minecraft:wooden_slabs', 1)
  
  minecraftOverworldWoodTypes.forEach(function(element) {
    woodcutting(`supplementaries:sign_post_${element}`, `minecraft:${element}_planks`, sign_posts_per_plank)
    woodcutting(`supplementaries:sign_post_${element}`, `#minecraft:${element}_logs`, sign_posts_per_log)
  })

  minecraftNetherWoodTypes.forEach(function(element) {
    woodcutting(`supplementaries:sign_post_${element}`, `minecraft:${element}_planks`, sign_posts_per_plank)
    woodcutting(`supplementaries:sign_post_${element}`, `#minecraft:${element}_stems`, sign_posts_per_log)
  })

  // Supplementaries - Atmospheric
  atmosphericWoodTypes.forEach(function(element) {
    woodcutting(`supplementaries:sign_post_${element}`, `atmospheric:${element}_planks`, sign_posts_per_plank)
    woodcutting(`supplementaries:sign_post_${element}`, `#atmospheric:${element}_logs`, sign_posts_per_log)
  })

  // Supplementaries - Autumnity
  woodcutting('supplementaries:sign_post_maple', 'autumnity:maple_planks', sign_posts_per_plank)
  woodcutting('supplementaries:sign_post_maple', '#autumnity:maple_logs', sign_posts_per_log)
  
  // Supplementaries - BetterEnd
  betterEndWoodTypes.forEach(function(element) {
    woodcutting(`supplementaries:sign_post_${element}`, `betterendforge:${element}_planks`, sign_posts_per_plank)
    woodcutting(`supplementaries:sign_post_${element}`, `#betterendforge:${element}_logs`, sign_posts_per_log)
  })
  
  // Supplementaries - Endergetic Expansion
  woodcutting('supplementaries:sign_post_poise', 'endergetic:poise_planks', sign_posts_per_plank)
  woodcutting('supplementaries:sign_post_poise', '#endergetic:poise_stems', sign_posts_per_log)

  // Supplementaries - Enhanced Mushrooms
  woodcutting('supplementaries:sign_post_red_mushroom', 'enhanced_mushrooms:red_mushroom_planks', sign_posts_per_plank)
  woodcutting('supplementaries:sign_post_red_mushroom', '#enhanced_mushrooms:red_mushroom_stems', sign_posts_per_log)
  woodcutting('supplementaries:sign_post_brown_mushroom', 'enhanced_mushrooms:brown_mushroom_planks', sign_posts_per_plank)
  woodcutting('supplementaries:sign_post_brown_mushroom', '#enhanced_mushrooms:brown_mushroom_stems', sign_posts_per_log)
  
  // Supplementaries - Upgrade Aquatic
  woodcutting('supplementaries:sign_post_driftwood', 'upgrade_aquatic:driftwood_planks', sign_posts_per_plank)
  woodcutting('supplementaries:sign_post_driftwood', '#upgrade_aquatic:driftwood_logs', sign_posts_per_log)
  woodcutting('supplementaries:sign_post_river', 'upgrade_aquatic:river_planks', sign_posts_per_plank)
  woodcutting('supplementaries:sign_post_river', '#upgrade_aquatic:river_logs', sign_posts_per_log)

  // Quark
  minecraftOverworldWoodTypes.forEach(function(element) {
    woodcutting(`quark:vertical_${element}_planks`, `minecraft:${element}_planks`, vertical_planks_per_plank)
    woodcutting(`quark:vertical_${element}_planks`, `#minecraft:${element}_logs`, vertical_planks_per_log)
    woodcutting(`quark:${element}_post`, `#minecraft:${element}_logs`, quark_posts_per_log)
    woodcutting(`quark:stripped_${element}_post`, `#minecraft:${element}_logs`, quark_posts_per_log)
    woodcutting(`quark:${element}_vertical_slab`, `minecraft:${element}_planks`, vertical_slabs_per_plank)
    woodcutting(`quark:${element}_vertical_slab`, `#minecraft:${element}_logs`, vertical_slabs_per_log)
    if (element === "oak") {
      woodcutting(`minecraft:ladder`, `minecraft:${element}_planks`, ladders_per_plank)
      woodcutting(`minecraft:ladder`, `#minecraft:${element}_logs`, ladders_per_log)
    } else {
      woodcutting(`quark:${element}_ladder`, `minecraft:${element}_planks`, ladders_per_plank)
      woodcutting(`quark:${element}_ladder`, `#minecraft:${element}_logs`, ladders_per_log)
    }
  })

  minecraftNetherWoodTypes.forEach(function(element) {
    woodcutting(`quark:vertical_${element}_planks`, `minecraft:${element}_planks`, vertical_planks_per_plank)
    woodcutting(`quark:vertical_${element}_planks`, `#minecraft:${element}_stems`, vertical_planks_per_log)
    woodcutting(`quark:${element}_post`, `#minecraft:${element}_stems`, quark_posts_per_log)
    woodcutting(`quark:stripped_${element}_post`, `#minecraft:${element}_stems`, quark_posts_per_log)
    woodcutting(`quark:${element}_vertical_slab`, `minecraft:${element}_planks`, vertical_slabs_per_plank)
    woodcutting(`quark:${element}_vertical_slab`, `#minecraft:${element}_stems`, vertical_slabs_per_log)
    woodcutting(`quark:${element}_ladder`, `minecraft:${element}_planks`, ladders_per_plank)
    woodcutting(`quark:${element}_ladder`, `#minecraft:${element}_stems`, ladders_per_log)
  })

  colors.forEach(function(element) {
    woodcutting(`quark:vertical_${element}_stained_planks`, `quark:${element}_stained_planks`, vertical_planks_per_plank)
    woodcutting(`quark:${element}_stained_planks_slab`, `quark:${element}_stained_planks`, slabs_per_plank)
    woodcutting(`quark:${element}_stained_planks_stairs`, `quark:${element}_stained_planks`, stairs_per_plank)
    woodcutting(`quark:${element}_stained_planks_vertical_slab`, `quark:${element}_stained_planks`, vertical_slabs_per_plank)
    woodcutting(`quark:${element}_stained_planks_vertical_slab`, `quark:${element}_stained_planks_slab`, 1)
    woodcutting(`quark:${element}_stained_planks_slab`, `quark:${element}_stained_planks_vertical_slab`, 1)
  })

  woodcutting("quark:chute", "#minecraft:logs", 1)

  // Valhelsia Structures
  minecraftOverworldWoodTypes.forEach(function(element) {
    woodcutting(`valhelsia_structures:${element}_post`, `#minecraft:${element}_logs`, val_posts_per_log)
    woodcutting(`valhelsia_structures:cut_${element}_post`, `#minecraft:${element}_logs`, val_cut_posts_per_log)
  })

  minecraftNetherWoodTypes.forEach(function(element) {
    woodcutting(`valhelsia_structures:${element}_post`, `#minecraft:${element}_stems`, val_posts_per_log)
    woodcutting(`valhelsia_structures:cut_${element}_post`, `#minecraft:${element}_stems`, val_cut_posts_per_log)
  })

})
