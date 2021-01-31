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

  // Atmospheric
  // TODO: Planks, Vertical Planks, Slabs, Stairs, Ladders, Signs, Fences, Fence Gates, Buttons, Doors

  // Autumnity
  // TODO: Planks, Vertical Planks, Slabs, Stairs, Ladders, Signs, Fences, Fence Gates, Buttons, Doors

  // Biomes O Plenty
  // TODO: Way too much. :'(

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
