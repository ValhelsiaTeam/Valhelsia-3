// priority: 10

events.listen('recipes', function (event) {
  
  // Add an alloying recipe to multiple mods.
  let alloy = (output, input0, input1) => {
    event.recipes.immersiveengineering.alloy(output, input0, input1)

    if (Ingredient.of(input0).count == 1 && Ingredient.of(input1).count == 1) {
      event.custom({
        "type": "betterendforge:alloying",
        "ingredients": [
          Ingredient.of(input0).toJson(),
          Ingredient.of(input1).toJson()
        ],
        "result": Item.of(output).toResultJson(),
        "experience": 3.0,
        "smelttime": 450
      })
    }

    // TODO: Add Create Mixing w/ heat here.
  }

  // Remove Old Alloying Recipes:
  [
    'betterendforge:aeternium_ingot',
    'betterendforge:terminite_ingot',
    'betterendforge:terminite_ingot_from_thallasium',
    'immersiveengineering:alloysmelter/brass',
    'immersiveengineering:alloysmelter/bronze',
    'immersiveengineering:alloysmelter/constantan',
    'immersiveengineering:alloysmelter/electrum'
    // TODO: Remove Create's recipes once above TODO is done.
  ].forEach(function (remove) {
    event.remove({id: remove})
  })

  // BetterEnd
  alloy('betterendforge:aeternium_ingot', '#forge:ingots/terminite', '#forge:ingots/netherite')
  alloy('betterendforge:aeternium_ingot', '#forge:ingots/terminite', '#forge:dusts/netherite') // Terminite has no dust form.
  alloy('betterendforge:terminite_ingot', '#forge:ingots/iron', '#forge:dusts/ender')
  alloy('betterendforge:terminite_ingot', '#forge:dusts/iron', '#forge:dusts/ender')
  alloy('betterendforge:terminite_ingot', '#forge:ingots/thallasium', '#forge:dusts/ender')
  alloy('betterendforge:terminite_ingot', '#forge:dusts/thallasium', '#forge:dusts/ender')

  // Create
  alloy(Item.of('create:brass_ingot', 2), '#forge:ingots/copper', '#forge:ingots/zinc')
  alloy('create:andesite_alloy', '#forge:nuggets/zinc', 'create:andesite_cobblestone')
  alloy('create:andesite_alloy', '#forge:nuggets/iron', 'create:andesite_cobblestone')
  // TODO: Add in Create's heated mixing recipes (+ some non-heated ones too).

  // Eidolon
  alloy(Item.of('eidolon:pewter_ingot', 4), Ingredient.of('#forge:ingots/tin', 3), '#forge:ingots/lead')
  alloy(Item.of('eidolon:pewter_ingot', 4), Ingredient.of('#forge:dusts/tin', 3), '#forge:dusts/lead')

  // Forbidden and Arcanus
  alloy('forbidden_arcanus:obsidian_ingot', Ingredient.of('#forge:dusts/obsidian', 4), Ingredient.of('#forge:nuggets/iron', 4))

  // Immersive Engineering
  alloy(Item.of('immersiveengineering:ingot_constantan', 2), '#forge:ingots/copper', '#forge:ingots/nickel')
  alloy(Item.of('immersiveengineering:ingot_constantan', 2), '#forge:dusts/copper', '#forge:dusts/nickel')
  alloy(Item.of('immersiveengineering:ingot_electrum', 2), '#forge:ingots/gold', '#forge:ingots/silver')
  alloy(Item.of('immersiveengineering:ingot_electrum', 2), '#forge:dusts/gold', '#forge:dusts/silver')

  // Mekanism
  alloy(Item.of('mekanism:ingot_bronze', 4), Ingredient.of('#forge:ingots/copper', 3), '#forge:ingots/tin')
  alloy(Item.of('mekanism:ingot_bronze', 4), Ingredient.of('#forge:dusts/copper', 3), '#forge:dusts/tin')
  alloy('mekanism:alloy_infused', '#forge:ingots/iron', '#forge:dusts/redstone')
  alloy('mekanism:alloy_reinforced', '#forge:alloys/advanced', Ingredient.of('#forge:dusts/diamond', 2))
  alloy('mekanism:alloy_atomic', '#forge:alloys/elite', Ingredient.of('#forge:dusts/refined_obsidian', 4))

  // Psi
  alloy('psi:ivory_psimetal', 'psi:psimetal', Ingredient.of('psi:ivory_substance', 8))
  alloy('psi:ebony_psimetal', 'psi:psimetal', Ingredient.of('psi:ebony_substance', 8))

  // Twilight Forest
  alloy('twilightforest:fiery_ingot', '#forge:ingots/iron', '#twilightforest:fiery_vial')
  alloy('twilightforest:fiery_ingot', '#forge:dusts/iron', '#twilightforest:fiery_vial')

})