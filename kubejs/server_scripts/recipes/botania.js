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

  // Pure Daisy Recipes
  pureDaisy('forbidden_arcanus:soulless_sand', 'minecraft:soul_sand')
  pureDaisy('minecraft:sand', 'forbidden_arcanus:soulless_sand')
})

