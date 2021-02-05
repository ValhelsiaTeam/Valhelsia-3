// priority: 10

events.listen('recipes', function (event) {

  // Cutting Board Axe Recipes
  const axeCutting = (output, input) => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        Ingredient.of(input).toJson()
      ],
      tool: {
        type: "axe"
      },
      result: [
        Item.of(output).toResultJson(),
        Item.of("farmersdelight:tree_bark").toResultJson()
      ],
      sound: "minecraft:item.axe.strip"
    })
  }

  axeCutting('druidcraft:stripped_darkwood_log', 'druidcraft:darkwood_log')
  axeCutting('druidcraft:stripped_darkwood_wood', 'druidcraft:darkwood_wood')
  axeCutting('druidcraft:stripped_elder_log', 'druidcraft:elder_log')
  axeCutting('druidcraft:stripped_elder_wood', 'druidcraft:elder_wood')
  // TODO: All BoP woods.

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
    axeCutting('biomesoplenty:stripped_'.concat(element).concat('_log'), 'biomesoplenty:'.concat(element).concat('_log'))
    axeCutting('biomesoplenty:stripped_'.concat(element).concat('_wood'), 'biomesoplenty:'.concat(element).concat('_wood'))
  })

  // TODO: Make bark optional to do the below.
  // TODO: Sign to 1 plank (for everything non-vanilla).
  // TODO: Door to 1 plank (for everything non-vanilla).
  // TODO: Trapdoor to 1 plank (for everything non-vanilla).
  

})
