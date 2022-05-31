// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

/**
 * Alloying recipe event handler.
 * Used to add and remove alloying recipes to the pack.
 */
onEvent('recipes', event => {
  
  /**
   * Adds an alloying recipe to multiple mods.
   * @param {(string|Item)} output Resulting alloy.
   * @param {(string|Ingredient)} input0 First ingredient.
   * @param {(string|Ingredient)} input1 Second ingredient.
   */
  const alloy = (output, input0, input1) => {
    event.recipes.immersiveengineering.alloy(output, input0, input1);

    if (Ingredient.of(input0).count == 1 && Ingredient.of(input1).count == 1) {
      event.custom({
        type: 'betterendforge:alloying',
        ingredients: [
          Ingredient.of(input0).toJson(),
          Ingredient.of(input1).toJson()
        ],
        result: Item.of(output).toResultJson(),
        experience: 3.0,
        smelttime: 450
      });
    };

    event.recipes.create.mixing(output, [input0, input1]).heated();
  };

  // Remove Old Alloying Recipes:
  [
    'betterendforge:aeternium_ingot',
    'betterendforge:terminite_ingot',
    'betterendforge:terminite_ingot_from_thallasium',
    'immersiveengineering:alloysmelter/brass',
    'immersiveengineering:alloysmelter/bronze',
    'immersiveengineering:alloysmelter/constantan',
    'immersiveengineering:alloysmelter/electrum',
    // TODO: Remove Create's recipes once added below.
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // BetterEnd
  alloy('betterendforge:aeternium_ingot', '#forge:ingots/terminite', '#forge:ingots/netherite');
  alloy('betterendforge:aeternium_ingot', '#forge:ingots/terminite', '#forge:dusts/netherite'); // Terminite has no dust form.
  alloy('betterendforge:terminite_ingot', '#forge:ingots/iron', '#forge:dusts/ender');
  alloy('betterendforge:terminite_ingot', '#forge:dusts/iron', '#forge:dusts/ender');
  alloy('betterendforge:terminite_ingot', '#forge:ingots/thallasium', '#forge:dusts/ender');
  alloy('betterendforge:terminite_ingot', '#forge:dusts/thallasium', '#forge:dusts/ender');

  // Create
  alloy('2x create:brass_ingot', '#forge:ingots/copper', '#forge:ingots/zinc');
  alloy('create:andesite_alloy', '#forge:nuggets/zinc', 'create:andesite_cobblestone');
  alloy('create:andesite_alloy', '#forge:nuggets/iron', 'create:andesite_cobblestone');
  // TODO: Add in Create's heated mixing recipes (+ some non-heated ones too).

  // Eidolon
  alloy('4x eidolon:pewter_ingot', '3x #forge:ingots/tin', '#forge:ingots/lead');
  alloy('4x eidolon:pewter_ingot', '3x #forge:dusts/tin', '#forge:dusts/lead');

  // Forbidden and Arcanus
  alloy('forbidden_arcanus:obsidian_ingot', '4x #forge:dusts/obsidian', '4x #forge:nuggets/iron');

  // Immersive Engineering
  alloy('2x immersiveengineering:ingot_constantan', '#forge:ingots/copper', '#forge:ingots/nickel');
  alloy('2x immersiveengineering:ingot_constantan', '#forge:dusts/copper', '#forge:dusts/nickel');
  alloy('2x immersiveengineering:ingot_electrum', '#forge:ingots/gold', '#forge:ingots/silver');
  alloy('2x immersiveengineering:ingot_electrum', '#forge:dusts/gold', '#forge:dusts/silver');

  // Mekanism
  alloy('4x mekanism:ingot_bronze', '3x #forge:ingots/copper', '#forge:ingots/tin');
  alloy('4x mekanism:ingot_bronze', '3x #forge:dusts/copper', '#forge:dusts/tin');
  alloy('mekanism:alloy_infused', '#forge:ingots/iron', '#forge:dusts/redstone');
  alloy('mekanism:alloy_reinforced', '#forge:alloys/advanced', '2x #forge:dusts/diamond');
  alloy('mekanism:alloy_atomic', '#forge:alloys/elite', '4x #forge:dusts/refined_obsidian');

  // Psi
  alloy('psi:ivory_psimetal', 'psi:psimetal', '8x psi:ivory_substance');
  alloy('psi:ebony_psimetal', 'psi:psimetal', '8x psi:ebony_substance');

  // Refined Storage
  alloy('4x refinedstorage:quartz_enriched_iron', '3x #forge:ingots/iron', '#forge:gems/quartz');
  alloy('4x refinedstorage:quartz_enriched_iron', '3x #forge:dusts/iron', '#forge:gems/quartz');

  // Twilight Forest
  alloy('twilightforest:fiery_ingot', '#forge:ingots/iron', '#twilightforest:fiery_vial');
  alloy('twilightforest:fiery_ingot', '#forge:dusts/iron', '#twilightforest:fiery_vial');

});