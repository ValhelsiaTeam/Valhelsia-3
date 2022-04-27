// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

/**
 * @file Smelting recipe additions for Valhelsia 3.
 * 
 * Includes functions for frequently used recipe templates.
 */
onEvent('recipes', function (event) {

  /**
   * Adds a recipe to both the furnace and blast furnace.
   * @param {(string|Item)} output Resulting smelted item.
   * @param {(string|Ingredient)} input Ingredient to be smelted.
   * @param {number} xp Experience given by smelting the item.
   */
  const smeltAndBlast = (output, input, xp) => {
    event.smelting(output, input).xp(xp);
    event.blasting(output, input).xp(xp);
  };

  // Aquaculture (tin cans smelt into tin instead of iron)
  smeltAndBlast(Item.of('mekanism:nugget_tin', 7), 'aquaculture:tin_can', 0.1);

  // Biomes 'o' Plenty
  event.smelting('mysticalworld:mud_block', 'biomesoplenty:mud').xp(0.1);

  // Create
  smeltAndBlast(Item.of('mekanism:ingot_copper', 1), '#create:crushed_ores/copper', 0.35);

  // Immersive Engineering
  smeltAndBlast(Item.of('immersiveengineering:ingot_silver', 1), '#forge:dusts/silver', 0.35);

  // Mekanism
  event.smelting('biomesoplenty:dried_salt', 'mekanism:block_salt').xp(0.1);
});
