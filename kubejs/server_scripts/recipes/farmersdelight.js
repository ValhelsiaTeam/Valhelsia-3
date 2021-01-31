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

})
