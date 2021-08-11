// priority: 10

events.listen('recipes', function (event) {

  // Pure Daisy Support Function
  const pureDaisy = (output, input) => {
    event.custom({
      "type": 'botania:pure_daisy',
      "input": {
          "type": "block",
          "block": input
      },
      "output": {
          "name": output
      }
    })
  }

  // Alchemy Catalyst
  const alchemy = (output, input, mana, group) => {
    event.custom({
      "type": 'botania:mana_infusion',
      "input": input.toJson(),
      "output": output.toResultJson(),
      "mana": mana,
      "group": group,
      "catalyst": {
        "type": "block",
        "block": "botania:alchemy_catalyst"
      }
    })
  }

  // Conjuration Catalyst
  const conjuration = (output, input, mana) => {
    event.custom({
      "type": 'botania:mana_infusion',
      "input": input.toJson(),
      "output": output.toResultJson(),
      "mana": mana,
      "catalyst": {
        "type": "block",
        "block": "botania:conjuration_catalyst"
      }
    })
  }

  // Mana Infusion (without catalyst)
  const infusion = (output, input, mana) => {
    event.custom({
      "type": 'botania:mana_infusion',
      "input": input.toJson(),
      "output": output.toResultJson(),
      "mana": mana
    })
  }

  // Pure Daisy Recipes
  // ------------------
  pureDaisy('forbidden_arcanus:soulless_sand', 'minecraft:soul_sand')
  pureDaisy('minecraft:sand', 'forbidden_arcanus:soulless_sand')
  pureDaisy('betterendforge:dense_emerald_ice', 'betterendforge:emerald_ice')
  pureDaisy('betterendforge:ancient_emerald_ice', 'betterendforge:dense_emerald_ice')

  // Alchemy Infusion Recipes
  // ------------------------

  // Logs
  // TODO: This should be expanded a bit.
  alchemy(Item.of('atmospheric:grimwood_log'), Ingredient.of('druidcraft:darkwood_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('upgrade_aquatic:driftwood_log'), Ingredient.of('upgrade_aquatic:river_log'), 40, 'botania:log_cycle')
  
  // End Log Cycle (BetterEnd and Endergetic Expansion)
  // Some of these logs, at least Lucernia, are not otherwise obtainable because the trees generate with only bark blocks.
  alchemy(Item.of('betterendforge:end_lotus_log'), Ingredient.of('betterendforge:lacugrove_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:lacugrove_log'), Ingredient.of('betterendforge:mossy_glowshroom_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:mossy_glowshroom_log'), Ingredient.of('betterendforge:jellyshroom_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:jellyshroom_log'), Ingredient.of('betterendforge:umbrella_tree_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:umbrella_tree_log'), Ingredient.of('endergetic:poise_stem'), 40, 'botania:log_cycle')
  alchemy(Item.of('endergetic:poise_stem'), Ingredient.of('betterendforge:pythadendron_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:pythadendron_log'), Ingredient.of('betterendforge:dragon_tree_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:dragon_tree_log'), Ingredient.of('betterendforge:tenanea_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:tenanea_log'), Ingredient.of('betterendforge:helix_tree_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:helix_tree_log'), Ingredient.of('betterendforge:lucernia_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('betterendforge:lucernia_log'), Ingredient.of('betterendforge:end_lotus_log'), 40, 'botania:log_cycle')

  // Method to obtain non-spawning Atmospheric Saplings
  alchemy(Item.of('atmospheric:grimwood_sapling'), Ingredient.of('druidcraft:darkwood_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('atmospheric:kousa_sapling'), Ingredient.of('atmospheric:rosewood_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('atmospheric:aspen_sapling'), Ingredient.of('atmospheric:yucca_sapling'), 120, 'botania:sapling_cycle')

  // Orange Maple Cycle
  alchemy(Item.of('biomesoplenty:orange_autumn_sapling'), Ingredient.of('autumnity:orange_maple_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('autumnity:orange_maple_sapling'), Ingredient.of('biomesoplenty:orange_autumn_sapling'), 120, 'botania:sapling_cycle')

  // Yellow Maple Cycle
  alchemy(Item.of('biomesoplenty:yellow_autumn_sapling'), Ingredient.of('autumnity:yellow_maple_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('autumnity:yellow_maple_sapling'), Ingredient.of('biomesoplenty:yellow_autumn_sapling'), 120, 'botania:sapling_cycle')

  // Red Maple Cycle
  alchemy(Item.of('biomesoplenty:maple_sapling'), Ingredient.of('autumnity:red_maple_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('autumnity:red_maple_sapling'), Ingredient.of('biomesoplenty:maple_sapling'), 120, 'botania:sapling_cycle')

  // Cherry Sapling Cycle
  alchemy(Item.of('biomesoplenty:pink_cherry_sapling'), Ingredient.of('environmental:cherry_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('biomesoplenty:white_cherry_sapling'), Ingredient.of('biomesoplenty:pink_cherry_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('forbidden_arcanus:cherrywood_sapling'), Ingredient.of('biomesoplenty:white_cherry_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('environmental:cherry_sapling'), Ingredient.of('forbidden_arcanus:cherrywood_sapling'), 120, 'botania:sapling_cycle')

  // Jacaranda Sapling Cycle
  alchemy(Item.of('abundance:jacaranda_sapling'), Ingredient.of('biomesoplenty:jacaranda_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('biomesoplenty:jacaranda_sapling'), Ingredient.of('abundance:jacaranda_sapling'), 120, 'botania:sapling_cycle')

  // Rainforest Sapling Cycle
  alchemy(Item.of('biomesoplenty:mahogany_sapling'), Ingredient.of('atmospheric:morado_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('atmospheric:morado_sapling'), Ingredient.of('biomesoplenty:mahogany_sapling'), 120, 'botania:sapling_cycle')

  // Willow Sapling Cycle
  alchemy(Item.of('environmental:willow_sapling'), Ingredient.of('biomesoplenty:willow_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('biomesoplenty:willow_sapling'), Ingredient.of('environmental:willow_sapling'), 120, 'botania:sapling_cycle')

  // Wisteria Sapling Cycle
  alchemy(Item.of('environmental:pink_wisteria_sapling'), Ingredient.of('environmental:white_wisteria_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('environmental:purple_wisteria_sapling'), Ingredient.of('environmental:pink_wisteria_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('environmental:blue_wisteria_sapling'), Ingredient.of('environmental:purple_wisteria_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('environmental:white_wisteria_sapling'), Ingredient.of('environmental:blue_wisteria_sapling'), 120, 'botania:sapling_cycle')

  // Coastal Sapling Cycle
  alchemy(Item.of('upgrade_aquatic:river_sapling'), Ingredient.of('biomesoplenty:palm_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('biomesoplenty:palm_sapling'), Ingredient.of('upgrade_aquatic:river_sapling'), 120, 'botania:sapling_cycle')
  
  // End Sapling Cycle (BetterEnd and Endergetic Expansion)
  alchemy(Item.of('betterendforge:end_lotus_seed'), Ingredient.of('betterendforge:lacugrove_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:lacugrove_sapling'), Ingredient.of('betterendforge:mossy_glowshroom_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:mossy_glowshroom_sapling'), Ingredient.of('betterendforge:small_jellyshroom'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:small_jellyshroom'), Ingredient.of('betterendforge:umbrella_tree_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:umbrella_tree_sapling'), Ingredient.of('endergetic:tall_poise_bush'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('endergetic:tall_poise_bush'), Ingredient.of('betterendforge:pythadendron_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:pythadendron_sapling'), Ingredient.of('betterendforge:dragon_tree_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:dragon_tree_sapling'), Ingredient.of('betterendforge:tenanea_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:tenanea_sapling'), Ingredient.of('betterendforge:helix_tree_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:helix_tree_sapling'), Ingredient.of('betterendforge:lucernia_sapling'), 120, 'botania:sapling_cycle')
  alchemy(Item.of('betterendforge:lucernia_sapling'), Ingredient.of('betterendforge:end_lotus_seed'), 120, 'botania:sapling_cycle')

  alchemy(Item.of('biomesoplenty:sprout'), Ingredient.of('mysticalworld:assorted_seeds'), 120, 'botania:shrub_cycle')

  // A method to obtain Druidcraft Blueberries (they don't generate in the current version of Druidcraft)
  alchemy(Item.of('druidcraft:blueberries'), Ingredient.of('berry_good:sweet_berry_pips'), 120, 'botania:shrub_cycle')

  // Conjuration Infusion Recipes
  // ----------------------------

  // Item Duplication
  // Reference Botania Mana Costs: 
  // 200 for Netherrack, 720 for gravel, 800 mana for grass, 1500 for soul sand, 2000 mana for leaves, 2100 for coal, 5000 for glowstone dust.

  // Atmospheric Plants:
  conjuration(Item.of('atmospheric:arid_sprouts', 2), Ingredient.of('atmospheric:arid_sprouts'), 800)
  
  // Atum Plants:
  conjuration(Item.of('atum:oasis_grass', 2), Ingredient.of('atum:oasis_grass'), 800)
  conjuration(Item.of('atum:dry_grass', 2), Ingredient.of('atum:dry_grass'), 800)
  conjuration(Item.of('atum:tall_dry_grass', 2), Ingredient.of('atum:tall_dry_grass'), 800)

  // Bayou Blues Plants:
  conjuration(Item.of('bayou_blues:algae', 2), Ingredient.of('bayou_blues:algae'), 800)
  
  // BetterEnd Plants:
  // Excludes water plants, bushes, sky plants, wall plants, vines and ceiling plants.
  // Excludes Shadow Berry and Blossom Berry from the mod's "plants" category because they are edible.
  conjuration(Item.of('betterendforge:umbrella_moss', 2), Ingredient.of('betterendforge:umbrella_moss'), 800)
  conjuration(Item.of('betterendforge:umbrella_moss_tall', 2), Ingredient.of('betterendforge:umbrella_moss_tall'), 800)
  conjuration(Item.of('betterendforge:creeping_moss', 2), Ingredient.of('betterendforge:creeping_moss'), 800)
  conjuration(Item.of('betterendforge:chorus_grass', 2), Ingredient.of('betterendforge:chorus_grass'), 800)
  conjuration(Item.of('betterendforge:crystal_grass', 2), Ingredient.of('betterendforge:crystal_grass'), 800)
  conjuration(Item.of('betterendforge:amber_grass', 2), Ingredient.of('betterendforge:amber_grass'), 800)
  conjuration(Item.of('betterendforge:shadow_plant', 2), Ingredient.of('betterendforge:shadow_plant'), 800)
  conjuration(Item.of('betterendforge:murkweed', 2), Ingredient.of('betterendforge:murkweed'), 800)
  conjuration(Item.of('betterendforge:needlegrass', 2), Ingredient.of('betterendforge:needlegrass'), 800)
  conjuration(Item.of('betterendforge:bushy_grass', 2), Ingredient.of('betterendforge:bushy_grass'), 800)
  conjuration(Item.of('betterendforge:twisted_umbrella_moss', 2), Ingredient.of('betterendforge:twisted_umbrella_moss'), 800)
  conjuration(Item.of('betterendforge:twisted_umbrella_moss_tall', 2), Ingredient.of('betterendforge:twisted_umbrella_moss_tall'), 800)
  conjuration(Item.of('betterendforge:jungle_grass', 2), Ingredient.of('betterendforge:jungle_grass'), 800)
  conjuration(Item.of('betterendforge:blooming_cooksonia', 2), Ingredient.of('betterendforge:blooming_cooksonia'), 800)
  conjuration(Item.of('betterendforge:salteago', 2), Ingredient.of('betterendforge:salteago'), 800)
  conjuration(Item.of('betterendforge:vaiolush_fern', 2), Ingredient.of('betterendforge:vaiolush_fern'), 800)
  conjuration(Item.of('betterendforge:fracturn', 2), Ingredient.of('betterendforge:fracturn'), 800)
  conjuration(Item.of('betterendforge:small_amaranita_mushroom', 2), Ingredient.of('betterendforge:small_amaranita_mushroom'), 800)
  conjuration(Item.of('betterendforge:globulagus', 2), Ingredient.of('betterendforge:globulagus'), 800)
  conjuration(Item.of('betterendforge:clawfern', 2), Ingredient.of('betterendforge:clawfern'), 800)
  conjuration(Item.of('betterendforge:aeridium', 2), Ingredient.of('betterendforge:aeridium'), 800)
  conjuration(Item.of('betterendforge:lamellarium', 2), Ingredient.of('betterendforge:lamellarium'), 800)
  conjuration(Item.of('betterendforge:bolux_mushroom', 2), Ingredient.of('betterendforge:bolux_mushroom'), 800)
  conjuration(Item.of('betterendforge:orango', 2), Ingredient.of('betterendforge:orango'), 800)
  conjuration(Item.of('betterendforge:lutebus', 2), Ingredient.of('betterendforge:lutebus'), 800)
  conjuration(Item.of('betterendforge:cave_grass', 2), Ingredient.of('betterendforge:cave_grass'), 800)

  // BoP Plants:
  conjuration(Item.of('biomesoplenty:sprout', 2), Ingredient.of('biomesoplenty:sprout'), 800)
  conjuration(Item.of('biomesoplenty:bush', 2), Ingredient.of('biomesoplenty:bush'), 800)
  conjuration(Item.of('biomesoplenty:dune_grass', 2), Ingredient.of('biomesoplenty:dune_grass'), 800)
  conjuration(Item.of('biomesoplenty:desert_grass', 2), Ingredient.of('biomesoplenty:desert_grass'), 800)
  conjuration(Item.of('biomesoplenty:dead_grass', 2), Ingredient.of('biomesoplenty:dead_grass'), 800)

  // Environmental Plants:
  conjuration(Item.of('environmental:giant_tall_grass', 2), Ingredient.of('environmental:giant_tall_grass'), 800)
  conjuration(Item.of('environmental:mycelium_sprouts', 2), Ingredient.of('environmental:mycelium_sprouts'), 800)
  conjuration(Item.of('environmental:duckweed', 2), Ingredient.of('environmental:duckweed'), 800)

  // Minecraft Plants:
  conjuration(Item.of('minecraft:nether_sprouts', 2), Ingredient.of('minecraft:nether_sprouts'), 800)

  // Mana Infusion Recipes
  // ---------------------

  
})