// priority: 10

onEvent('recipes', event => {

  // Cutting Board Axe Stripping
  const axeStripping = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tool: "axe"
      },
      result: [
        Item.of(output).toResultJson(),
        Item.of("farmersdelight:tree_bark").toResultJson()
      ],
      sound: "minecraft:item.axe.strip"
    })
  }

  // Cutting Board Axe Chopping
  const axeChopping = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "farmersdelight:tool",
        tool: "axe"
      },
      result: [
        Item.of(output).toResultJson()
      ]
    })
  }

  // Cutting Board Knife Cutting
  const knifeCutting = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        tag: "forge:tools/knives"
      },
      result: output
      
    })
  }

  // Cooking Pot Recipes
  const cookingPot = (output, input, container) => {
    event.custom({
      type: "farmersdelight:cooking",
      ingredients: input,
      result: Item.of(output).toResultJson(),
      container: Item.of(container).toJson(),
      experience: 0.2,
      cookingtime: 200
    })
  }

  // ----- Axe Recipes -----
  // BetterEnd - Log Stripping
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

  betterEndWoodTypes.forEach(function(element) {
    axeStripping(`betterendforge:${element}_stripped_log`, `betterendforge:${element}_log`)
    axeStripping(`betterendforge:${element}_stripped_bark`, `betterendforge:${element}_bark`)

    axeChopping(`betterendforge:${element}_planks`, `betterendforge:${element}_door`)
    axeChopping(`betterendforge:${element}_planks`, `betterendforge:${element}_sign`)
    axeChopping(`betterendforge:${element}_planks`, `betterendforge:${element}_trapdoor`)
  })

  // Biomes 'o' Plenty - Log Stripping
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

  biomesOPlentyWoodTypes.forEach(function(element) {
    axeStripping('biomesoplenty:stripped_'.concat(element).concat('_log'), 'biomesoplenty:'.concat(element).concat('_log'))
    axeStripping('biomesoplenty:stripped_'.concat(element).concat('_wood'), 'biomesoplenty:'.concat(element).concat('_wood'))
    
    axeChopping('biomesoplenty:'.concat(element).concat('_planks'), 'biomesoplenty:'.concat(element).concat('_door'))
    axeChopping('biomesoplenty:'.concat(element).concat('_planks'), 'biomesoplenty:'.concat(element).concat('_trapdoor'))
  })
  
  // Druidcraft - Log Stripping
  axeStripping('druidcraft:stripped_darkwood_log', 'druidcraft:darkwood_log')
  axeStripping('druidcraft:stripped_darkwood_wood', 'druidcraft:darkwood_wood')
  axeStripping('druidcraft:stripped_elder_log', 'druidcraft:elder_log')
  axeStripping('druidcraft:stripped_elder_wood', 'druidcraft:elder_wood')

  // Forbidden and Arcanus - Log Stripping
  axeStripping('forbidden_arcanus:stripped_cherrywood_log', 'forbidden_arcanus:cherrywood_log')
  axeStripping('forbidden_arcanus:stripped_cherrywood', 'forbidden_arcanus:cherrywood')
  axeStripping('forbidden_arcanus:stripped_mysterywood_log', 'forbidden_arcanus:mysterywood_log')
  axeStripping('forbidden_arcanus:stripped_mysterywood', 'forbidden_arcanus:mysterywood')

  // Forbidden and Arcanus - Signs / Doors / Trapdoors -> Planks.
  const choppingWoodTypes = [
    'forbidden_arcanus:edelwood',
    'forbidden_arcanus:cherrywood',
    'forbidden_arcanus:mysterywood',
  ]

  choppingWoodTypes.forEach(function(element) {
    axeChopping(element.concat('_planks'), element.concat('_sign'))
    axeChopping(element.concat('_planks'), element.concat('_door'))
    axeChopping(element.concat('_planks'), element.concat('_trapdoor'))
  })

  // ----- Knife Recipes -----
  // Aquaculture
  knifeCutting([Item.of('aquaculture:frog_legs_raw'), Item.of('minecraft:bone_meal')], 'aquaculture:frog')
  knifeCutting([Item.of('quark:frog_leg', 2)], 'aquaculture:frog_legs_raw')
  knifeCutting([Item.of('quark:cooked_frog_leg', 2)], 'aquaculture:frog_legs_cooked')

  // Environmental
  knifeCutting([Item.of('environmental:cattail_seeds'), Item.of('farmersdelight:straw')], 'biomesoplenty:cattail')
  knifeCutting([Item.of('environmental:cattail_seeds'), Item.of('farmersdelight:straw')], 'environmental:cattail')
  knifeCutting([Item.of('environmental:cattail_seeds', 2), Item.of('farmersdelight:straw')], 'environmental:tall_cattail')

  // Farmer's Delight
  knifeCutting([Item.of('farmersdelight:raw_pasta')], '#forge:food/dough')

  // Mystical World
  knifeCutting([Item.of('mysticalworld:sliced_carrot', 4)], Ingredient.of('#forge:crops/carrot'))

  // ----- Cooking Pot Recipes -----
  cookingPot('aquaculture:turtle_soup', [Ingredient.of('#aquaculture:turtle'), Ingredient.of('#forge:vegetables/onion')], 'minecraft:bowl')
  cookingPot('forbidden_arcanus:bat_soup', [Ingredient.of('#forge:mushrooms'), Ingredient.of('#forge:crops/nether_wart'), Ingredient.of('forbidden_arcanus:bat_wing')], 'minecraft:bowl')
  cookingPot('mysticalworld:stewed_eggplant', [Ingredient.of('#forge:crops/eggplant'), Ingredient.of('#forge:mushrooms'), Ingredient.of('#forge:vegetables/onion')], 'minecraft:bowl')

});
