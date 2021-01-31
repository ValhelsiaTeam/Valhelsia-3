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
      "group": group,
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
      "mana": mana,
      "group": group,
      "catalyst": {
        "name": "botania:conjuration_catalyst"
      }
    })
  }

  // Pure Daisy Recipes
  pureDaisy('forbidden_arcanus:soulless_sand', 'minecraft:soul_sand')
  pureDaisy('minecraft:sand', 'forbidden_arcanus:soulless_sand')

  // Alchemy Infusion Recipes

  // Logs
  alchemy('atmospheric:grimwood_log', 'druidcraft:darkwood_log', 40, 'botania:log_cycle')
  alchemy('upgrade_aquatic:driftwood_log', 'upgrade_aquatic:river_log', 40, 'botania:log_cycle')

  // Saplings
  alchemy('atmospheric:grimwood_sapling', 'druidcraft:darkwood_sapling', 120, 'botania:sapling_cycle')
  alchemy('atmospheric:kousa_sapling', 'atmospheric:rosewood_sapling', 120, 'botania:sapling_cycle')
  alchemy('atmospheric:aspen_sapling', 'atmospheric:yucca_sapling', 120, 'botania:sapling_cycle')

  alchemy('biomesoplenty:orange_autumn_sapling', 'autumnity:orange_maple_sapling', 120, 'botania:sapling_cycle')
  alchemy('autumnity:orange_maple_sapling', 'biomesoplenty:orange_autumn_sapling', 120, 'botania:sapling_cycle')

  alchemy('biomesoplenty:yellow_autumn_sapling', 'autumnity:yellow_maple_sapling', 120, 'botania:sapling_cycle')
  alchemy('autumnity:yellow_maple_sapling', 'biomesoplenty:yellow_autumn_sapling', 120, 'botania:sapling_cycle')

  alchemy('biomesoplenty:maple_sapling', 'autumnity:red_maple_sapling', 120, 'botania:sapling_cycle')
  alchemy('autumnity:red_maple_sapling', 'biomesoplenty:maple_sapling', 120, 'botania:sapling_cycle')

  alchemy('biomesoplenty:pink_cherry_sapling', 'forbidden_arcanus:cherrywood_sapling', 120, 'botania:sapling_cycle')
  alchemy('biomesoplenty:white_cherry_sapling', 'biomesoplenty:pink_cherry_sapling', 120, 'botania:sapling_cycle')
  alchemy('forbidden_arcanus:cherrywood_sapling', 'biomesoplenty:white_cherry_sapling', 120, 'botania:sapling_cycle')


  // Conjuration Infusion Recipes

  // Mana Infusion Recipes
})

