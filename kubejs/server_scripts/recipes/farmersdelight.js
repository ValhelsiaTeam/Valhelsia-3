// priority: 10

events.listen('recipes', function (event) {

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

  axeStripping('druidcraft:stripped_darkwood_log', 'druidcraft:darkwood_log')
  axeStripping('druidcraft:stripped_darkwood_wood', 'druidcraft:darkwood_wood')
  axeStripping('druidcraft:stripped_elder_log', 'druidcraft:elder_log')
  axeStripping('druidcraft:stripped_elder_wood', 'druidcraft:elder_wood')

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

  const choppingWoodTypes = [
    'enhanced_mushrooms:red_mushroom',
    'enhanced_mushrooms:brown_mushroom',
    'enhanced_mushrooms:glowshroom',
    'forbidden_arcanus:edelwood',
    'forbidden_arcanus:cherrywood',
    'forbidden_arcanus:mysterywood',
  ]

  choppingWoodTypes.forEach(function(element) {
    axeChopping(element.concat('_planks'), element.concat('_sign'))
    axeChopping(element.concat('_planks'), element.concat('_door'))
    axeChopping(element.concat('_planks'), element.concat('_trapdoor'))
  })
})
