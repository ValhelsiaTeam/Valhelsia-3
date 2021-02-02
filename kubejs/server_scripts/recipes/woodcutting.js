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


  // Atmospheric
  var atmosphericLogsTags = []
  var atmosphericStrippedLogs = []
  var atmosphericWoods = []
  var atmosphericStrippedWoods = []
  var atmosphericPlanks = []
  var atmosphericVerticalPlanks = []
  var atmosphericSlabs = []
  var atmosphericVerticalSlabs = []
  var atmosphericStairs = []
  var atmosphericSigns = []
  var atmosphericLadders = []
  var atmosphericFences = []
  var atmosphericFenceGates = []
  var atmosphericButtons = []
  var atmosphericTrapdoors = []
  var atmosphericDoors = []
  var atmosphericPressurePlates = []

  atmosphericWoodTypes.forEach(function(element) {
    atmosphericLogsTags.push('#atmospheric:'.concat(element).concat('_logs'))
    atmosphericStrippedLogs.push('atmospheric:stripped_'.concat(element).concat('_log'))
    atmosphericWoods.push('atmospheric:'.concat(element).concat('_log'))
    atmosphericStrippedWoods.push('atmospheric:stripped_'.concat(element).concat('_log'))
    atmosphericPlanks.push('atmospheric:'.concat(element).concat('_planks'))
    atmosphericVerticalPlanks.push('atmospheric:vertical_'.concat(element).concat('_planks'))
    atmosphericSlabs.push('atmospheric:'.concat(element).concat('_slab'))
    atmosphericVerticalSlabs.push('atmospheric:'.concat(element).concat('_vertical_slab'))
    atmosphericStairs.push('atmospheric:'.concat(element).concat('_stairs'))
    atmosphericSigns.push('atmospheric:'.concat(element).concat('_sign'))
    atmosphericLadders.push('atmospheric:'.concat(element).concat('_ladder'))
    atmosphericFences.push('atmospheric:'.concat(element).concat('_fence'))
    atmosphericFenceGates.push('atmospheric:'.concat(element).concat('_fence_gate'))
    atmosphericButtons.push('atmospheric:'.concat(element).concat('_button'))
    atmosphericTrapdoors.push('atmospheric:'.concat(element).concat('_trapdoor'))
    atmosphericDoors.push('atmospheric:'.concat(element).concat('_door'))
    atmosphericPressurePlates.push('atmospheric:'.concat(element).concat('_pressure_plate'))
  })

  for (let i = 0; i < atmosphericWoodTypes.length; i++) {
    // Log Woodcutting
    woodcutting(atmosphericPlanks[i], atmosphericLogsTags[i], planks_per_log)
    woodcutting(atmosphericVerticalPlanks[i], atmosphericLogsTags[i], vertical_planks_per_log)
    woodcutting(atmosphericSlabs[i], atmosphericLogsTags[i], slabs_per_log)
    woodcutting(atmosphericVerticalSlabs[i], atmosphericLogsTags[i], vertical_slabs_per_log)
    woodcutting(atmosphericStairs[i], atmosphericLogsTags[i], stairs_per_log)
    woodcutting(atmosphericSigns[i], atmosphericLogsTags[i], signs_per_log)
    woodcutting(atmosphericLadders[i], atmosphericLogsTags[i], ladders_per_log)
    woodcutting(atmosphericFences[i], atmosphericLogsTags[i], fences_per_log)
    woodcutting(atmosphericFenceGates[i], atmosphericLogsTags[i], fence_gates_per_log)
    woodcutting(atmosphericButtons[i], atmosphericLogsTags[i], buttons_per_log)
    woodcutting(atmosphericTrapdoors[i], atmosphericLogsTags[i], trapdoors_per_log)
    woodcutting(atmosphericDoors[i], atmosphericLogsTags[i], doors_per_log)
    woodcutting(atmosphericPressurePlates[i], atmosphericLogsTags[i], pressure_plates_per_log)

    // Plank Woodcutting
    woodcutting(atmosphericVerticalPlanks[i], atmosphericPlanks[i], vertical_planks_per_plank)
    woodcutting(atmosphericSlabs[i], atmosphericPlanks[i], slabs_per_plank)
    woodcutting(atmosphericVerticalSlabs[i], atmosphericPlanks[i], vertical_slabs_per_plank)
    woodcutting(atmosphericStairs[i], atmosphericPlanks[i], stairs_per_plank)
    woodcutting(atmosphericSigns[i], atmosphericPlanks[i], signs_per_plank)
    woodcutting(atmosphericLadders[i], atmosphericPlanks[i], ladders_per_plank)
    woodcutting(atmosphericFences[i], atmosphericPlanks[i], fences_per_plank)
    woodcutting(atmosphericFenceGates[i], atmosphericPlanks[i], fence_gates_per_plank)
    woodcutting(atmosphericButtons[i], atmosphericPlanks[i], buttons_per_plank)
    woodcutting(atmosphericTrapdoors[i], atmosphericPlanks[i], trapdoors_per_plank)
    woodcutting(atmosphericDoors[i], atmosphericPlanks[i], doors_per_plank)
    woodcutting(atmosphericPressurePlates[i], atmosphericPlanks[i], pressure_plates_per_plank)

    // Misc
    woodcutting(atmosphericPlanks[i], atmosphericVerticalPlanks[i], vertical_planks_per_plank)
  }

  // Autumnity
  // TODO: Planks, Vertical Planks, Slabs, Stairs, Ladders, Signs, Fences, Fence Gates, Buttons, Doors

  // Biomes O Plenty
  // TODO: Way too much. :'(

  // Botania
  // TODO: All of it.

  // Decorative Blocks
  woodcutting('decorative_blocks:acacia_palisade', '#minecraft:acacia_logs', 3)
  woodcutting('decorative_blocks:acacia_seat', 'minecraft:acacia_planks', 1)
  woodcutting('decorative_blocks:acacia_seat', '#minecraft:acacia_logs', 4)
  woodcutting('decorative_blocks:acacia_support', 'minecraft:acacia_planks', 1)
  woodcutting('decorative_blocks:acacia_support', '#minecraft:acacia_logs', 4)
  woodcutting('decorative_blocks:acacia_beam', '#minecraft:acacia_logs', 1)
  // TODO: Add non-acacia stuff.

  // Decorative Blocks - Biomes O Plenty
  // TODO: All of it. :/

  // Decorative Blocks - Abnormals
  // TODO: All of it. :/

  // Druidcraft
  woodcutting('druidcraft:acacia_panels', '#minecraft:acacia_logs', 4)
  woodcutting('druidcraft:birch_panels', '#minecraft:birch_logs', 4)
  woodcutting('druidcraft:dark_oak_panels', '#minecraft:dark_oak_logs', 4)
  woodcutting('druidcraft:darkwood_panels', '#druidcraft:darkwood_logs', 4)
  woodcutting('druidcraft:elder_panels', '#druidcraft:elder_logs', 4)
  woodcutting('druidcraft:jungle_panels', '#minecraft:jungle_logs', 4)
  woodcutting('druidcraft:oak_panels', '#minecraft:oak_logs', 4)
  woodcutting('druidcraft:spruce_panels', '#minecraft:spruce_logs', 4)
  // Make sure to check this again if Druidcraft adds Crimson / Warped panels.

  // Endergetic Expansion
  // TODO: Planks, Vertical Planks, Slabs, Stairs, Ladders, Signs, Fences, Fence Gates, Buttons, Doors

  // Engineer's Decor
  // TODO: A bunch of Treated Wood stuff.

  // Enhanced Mushrooms
  // TODO: Planks, Vertical Planks, Slabs, Stairs, Ladders, Signs, Fences, Fence Gates, Buttons, Doors

  // Environmental
  // (do this whenever it actually releases)
  // TODO: Planks, Vertical Planks, Slabs, Stairs, Ladders, Signs, Fences, Fence Gates, Buttons, Doors
  
  // Farmer's Delight
  woodcutting('farmersdelight:acacia_pantry', '#minecraft:acacia_logs', 1)
  woodcutting('farmersdelight:birch_pantry', '#minecraft:birch_logs', 1)
  woodcutting('farmersdelight:crimson_pantry', '#minecraft:crimson_stems', 1)
  woodcutting('farmersdelight:dark_oak_pantry', '#minecraft:dark_oak_logs', 1)
  woodcutting('farmersdelight:jungle_pantry', '#minecraft:jungle_logs', 1)
  woodcutting('farmersdelight:oak_pantry', '#minecraft:oak_logs', 1)
  woodcutting('farmersdelight:spruce_pantry', '#minecraft:spruce_logs', 1)
  woodcutting('farmersdelight:warped_pantry', '#minecraft:warped_stems', 1)

  // Immersive Engineering
  // TODO: A bunch of Treated Wood stuff.

  // Macaw's Stuff

  // Minecraft
  woodcutting('minecraft:acacia_sign', '#minecraft:acacia_logs', 2)
  woodcutting('minecraft:acacia_slab', '#minecraft:acacia_logs', 8)
  woodcutting('minecraft:acacia_stairs', '#minecraft:acacia_logs', 4)
  woodcutting('minecraft:acacia_fence', '#minecraft:acacia_logs', 3)
  woodcutting('minecraft:acacia_fence_gate', '#minecraft:acacia_logs', 2)
  woodcutting('minecraft:acacia_trapdoor', '#minecraft:acacia_logs', 4)
  woodcutting('minecraft:acacia_pressure_plate', 'minecraft:acacia_planks', 2)
  woodcutting('minecraft:acacia_pressure_plate', '#minecraft:acacia_logs', 8)
  woodcutting('minecraft:acacia_door', '#minecraft:acacia_logs', 2)
  // TODO: Add non-acacia stuff.

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

  // Upgrade Aquatic
  // TODO: Planks, Vertical PLanks, Slabs, Stairs, Ladders, Signs, Fences, Fence Gates, Buttons, Doors

  // Valhelsia Structures
  woodcutting('valhelsia_structures:acacia_post', '#minecraft:acacia_logs', 2)
  woodcutting('valhelsia_structures:birch_post', '#minecraft:birch_logs', 2)
  woodcutting('valhelsia_structures:dark_oak_post', '#minecraft:dark_oak_logs', 2)
  woodcutting('valhelsia_structures:jungle_post', '#minecraft:jungle_logs', 2)
  woodcutting('valhelsia_structures:oak_post', '#minecraft:oak_logs', 2)
  woodcutting('valhelsia_structures:spruce_post', '#minecraft:spruce_logs', 2)
  // Make sure to check this again after the Valhelsia Structures update to add the new posts.

})
