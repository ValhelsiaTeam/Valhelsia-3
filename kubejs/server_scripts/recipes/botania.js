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
      "input": {
          "item": input
      },
      "output": {
          "item": output
      },
      "mana": mana,
      "group": group,
      "catalyst": {
        "name": "botania:alchemy_catalyst"
      }
    })
  }

  // Conjuration Catalyst
  const conjuration = (output, input, mana) => {
    event.custom({
      "type": 'botania:mana_infusion',
      "input": {
          "item": input
      },
      "output": {
          "item": output,
          "count": 2
      },
      "mana": mana,
      "catalyst": {
        "name": "botania:conjuration_catalyst"
      }
    })
  }

  // Mana Infusion (without catalyst)
  const infusion = (output, input, mana) => {
    event.custom({
      "type": 'botania:mana_infusion',
      "input": {
          "item": input
      },
      "output": {
          "item": output,
          "count": 2
      },
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
  alchemy('atmospheric:grimwood_log', 'druidcraft:darkwood_log', 40, 'botania:log_cycle')
  alchemy('upgrade_aquatic:driftwood_log', 'upgrade_aquatic:river_log', 40, 'botania:log_cycle')

  // Method to obtain non-spawning Atmospheric Saplings
  alchemy('atmospheric:grimwood_sapling', 'druidcraft:darkwood_sapling', 120, 'botania:sapling_cycle')
  alchemy('atmospheric:kousa_sapling', 'atmospheric:rosewood_sapling', 120, 'botania:sapling_cycle')
  alchemy('atmospheric:aspen_sapling', 'atmospheric:yucca_sapling', 120, 'botania:sapling_cycle')

  // Orange Maple Cycle
  alchemy('biomesoplenty:orange_autumn_sapling', 'autumnity:orange_maple_sapling', 120, 'botania:sapling_cycle')
  alchemy('autumnity:orange_maple_sapling', 'biomesoplenty:orange_autumn_sapling', 120, 'botania:sapling_cycle')

  // Yellow Maple Cycle
  alchemy('biomesoplenty:yellow_autumn_sapling', 'autumnity:yellow_maple_sapling', 120, 'botania:sapling_cycle')
  alchemy('autumnity:yellow_maple_sapling', 'biomesoplenty:yellow_autumn_sapling', 120, 'botania:sapling_cycle')

  // Red Maple Cycle
  alchemy('biomesoplenty:maple_sapling', 'autumnity:red_maple_sapling', 120, 'botania:sapling_cycle')
  alchemy('autumnity:red_maple_sapling', 'biomesoplenty:maple_sapling', 120, 'botania:sapling_cycle')

  // Cherry Sapling Cycle
  alchemy('biomesoplenty:pink_cherry_sapling', 'environmental:cherry_sapling', 120, 'botania:sapling_cycle')
  alchemy('biomesoplenty:white_cherry_sapling', 'biomesoplenty:pink_cherry_sapling', 120, 'botania:sapling_cycle')
  alchemy('forbidden_arcanus:cherrywood_sapling', 'biomesoplenty:white_cherry_sapling', 120, 'botania:sapling_cycle')
  alchemy('environmental:cherry_sapling', 'forbidden_arcanus:cherrywood_sapling', 120, 'botania:sapling_cycle')

  // Rainforest Sapling Cycle
  alchemy('biomesoplenty:mahogany_sapling', 'atmospheric:morado_sapling', 120, 'botania:sapling_cycle')
  alchemy('atmospheric:morado_sapling', 'biomesoplenty:mahogany_sapling', 120, 'botania:sapling_cycle')

  // Willow Sapling Cycle
  alchemy('environmental:willow_sapling', 'biomesoplenty:willow_sapling', 120, 'botania:sapling_cycle')
  alchemy('biomesoplenty:willow_sapling', 'environmental:willow_sapling', 120, 'botania:sapling_cycle')

  // Wisteria Sapling Cycle
  alchemy('environmental:pink_wisteria_sapling', 'environmental:white_wisteria_sapling', 120, 'botania:sapling_cycle')
  alchemy('environmental:purple_wisteria_sapling', 'environmental:pink_wisteria_sapling', 120, 'botania:sapling_cycle')
  alchemy('environmental:blue_wisteria_sapling', 'environmental:purple_wisteria_sapling', 120, 'botania:sapling_cycle')
  alchemy('environmental:white_wisteria_sapling', 'environmental:blue_wisteria_sapling', 120, 'botania:sapling_cycle')

  // Coastal Sapling Cycle
  alchemy('upgrade_aquatic:river_sapling', 'biomesoplenty:palm_sapling', 120, 'botania:sapling_cycle')
  alchemy('biomesoplenty:palm_sapling', 'upgrade_aquatic:river_sapling', 120, 'botania:sapling_cycle')


  // Conjuration Infusion Recipes
  // ----------------------------

  // Mana Infusion Recipes
  // ---------------------
  
})