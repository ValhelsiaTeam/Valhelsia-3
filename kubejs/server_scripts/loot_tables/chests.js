// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

/**
 * @file Chest loot table injection / replacement for Valhelsia 3.
 */

onEvent('chest.loot_tables', event => {

  // Additional Cooking Chest Loot
  // Note: It might be better to tailor this to each structure in the future.
  // This is just an initial implementation to get some interesting loot injected.
  [
    'valhelsia_structures:castle',
    'valhelsia_structures:desert_house',
    'valhelsia_structures:player_house',
  ].forEach(function(chestID) {
    event.modify(chestID, table => {
      table.addPool(pool => {
        pool.rolls = [1, 3];
        pool.addItem('farmersdelight:cooked_bacon', 18, [2, 3]);
        pool.addItem('farmersdelight:cooked_cod_slice', 18, [2, 3]);
        pool.addItem('farmersdelight:cooked_salmon_slice', 18, [2, 3]);
        pool.addItem('farmersdelight:cooked_mutton_chops', 18, [2, 3]);
        pool.addItem('farmersdelight:smoked_ham', 18, [2, 3]);
        pool.addItem('farmersdelight:rice', 15, [2, 6]);
        pool.addItem('farmersdelight:onion', 15, [2, 6]);
        pool.addItem('farmersdelight:cabbage_seeds', 15, [2, 6]);
        pool.addItem('farmersdelight:tomato_seeds', 15, [2, 6]);
        pool.addItem('farmersdelight:cooking_pot', 3);
        pool.addItem('farmersdelight:skillet', 3);
        pool.addItem('farmersdelight:cutting_board', 6);
        pool.addItem('farmersdelight:iron_knife', 4);
        pool.addItem('farmersdelight:rope', 10, [3, 9]);
        pool.addItem('farmersrespite:kettle', 3);
        pool.addItem('farmersrespite:tea_seeds', 10, [2, 6]);
        pool.addItem('farmersrespite:coffee_beans', 10, [2, 6]);
      });
    });
  });

  // Additional Forge Chest Loot
  event.modify('valhelsia_structures:forge', table => {
    table.addPool(pool => {
      pool.rolls = [1, 3];
      pool.addItem('forbidden_arcanus:stone_blacksmith_gavel', 15);
      pool.addItem('forbidden_arcanus:iron_blacksmith_gavel', 10);
      pool.addItem('forbidden_arcanus:diamond_blacksmith_gavel', 2);
      pool.addItem('chiselsandbits:chisel_stone', 12);
      pool.addItem('chiselsandbits:chisel_iron', 8);
      pool.addItem('chiselsandbits:chisel_diamond', 1);
      pool.addItem('immersiveengineering:ingot_steel', 7, [1, 3]);
      pool.addItem('pneumaticcraft:ingot_iron_compressed', 6, [1, 3]);
    });
  });

  // Better Strongholds Treasure Loot
  // Has a chance to drop End-based treasure due to proximity to End Portal.
  event.modify('betterstrongholds:treasure', table => {
    table.addPool(pool => {
      pool.rolls = [0, 1];
      pool.addItem('druidcraft:moonstone', 1, [1, 2]);
      pool.addItem('mysticalworld:sapphire', 1, [1, 2]);
      pool.addItem('mysticalworld:lustrous_pearl', 1, [1, 2]);
      pool.addItem('mysticalworld:quicksilver_ingot', 2, [2, 3]);
      pool.addItem('immersiveengineering:ingot_silver', 3, [2, 3]);
      pool.addItem('betterendforge:thallasium_ingot', 2, [2, 3]);
      pool.addItem('betterendforge:thallasium_nugget', 2, [2, 7]);
      pool.addItem('betterendforge:terminite_ingot', 2, [2, 3]);
      pool.addItem('betterendforge:terminite_nugget', 2, [2, 7]);
    });
  });

  // Better Strongholds Armoury Loot
  event.modify('betterstrongholds:armoury', table => {
    table.addPool(pool => {
      pool.rolls = {n: 1, p: 0.2};
      pool.addItem('artifacts:power_glove', 3);
      pool.addItem('artifacts:antidote_vessel', 3);
      pool.addItem('artifacts:superstitious_hat', 3);
      pool.addItem('artifacts:lucky_scarf', 3);
      pool.addItem('artifacts:aqua_dashers', 3);
      pool.addItem('artifacts:helium_flamingo', 3);
    });
  });

  // Add Ancient Tomes to Better Strongholds Libraries (and Grand Libraries)
  [
    'betterstrongholds:library_md',
    'betterstrongholds:grand_library',
  ].forEach(function(chestID) {
    event.modify(chestID, table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('quark:ancient_tome', 20).quality(2).addFunction({function: 'quark:tome_enchant'});
      });
    });
  });
  

});