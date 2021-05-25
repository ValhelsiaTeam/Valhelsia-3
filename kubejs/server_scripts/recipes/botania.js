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

  // Alchemy Infusion Recipes
  // ------------------------

  // Logs
  // TODO: This should be expanded a bit.
  alchemy(Item.of('atmospheric:grimwood_log'), Ingredient.of('druidcraft:darkwood_log'), 40, 'botania:log_cycle')
  alchemy(Item.of('upgrade_aquatic:driftwood_log'), Ingredient.of('upgrade_aquatic:river_log'), 40, 'botania:log_cycle')

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

  alchemy(Item.of('biomesoplenty:sprout'), Ingredient.of('mysticalworld:assorted_seeds'), 120, 'botania:shrub_cycle')

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