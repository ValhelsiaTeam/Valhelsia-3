// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

/**
 * @file Stonecutter recipe additions for Valhelsia 3.
 * 
 * Includes functions for frequently used recipe templates.
 */

/**
 * Stonecutting Recipe Event Handler
 */
onEvent('recipes', function (event) {

  /**
   * Creates stonecutting recipes to convert items between each other.
   * Typically used to convert between equivalent stones from different mods (such as Create Limestone and Quark Limestone).
   * @param {(string|Item)} itemA An item, usually a type of raw stone.
   * @param {(string|Item)} itemB Another item, usually a type of raw stone.
   */
  const scReversible = (itemA, itemB) => {
    event.stonecutting(itemA, itemB);
    event.stonecutting(itemB, itemA);
  };

  // Inter-mod Raw Stone Conversions
  scReversible('astralsorcery:marble_raw', 'quark:marble');
  scReversible('betterendforge:brimstone', 'quark:brimstone');
  scReversible('create:limestone', 'quark:limestone');

  // BetterEnd
  for (stone of BETTER_END_STONES) {
    event.stonecutting(`betterendforge:${stone}_polished`, `betterendforge:${stone}`);
    event.stonecutting(`betterendforge:${stone}_tiles`, `betterendforge:${stone}`);
    event.stonecutting(`betterendforge:${stone}_pillar`, `betterendforge:${stone}`);
    event.stonecutting(`betterendforge:${stone}_stairs`, `betterendforge:${stone}`);
    event.stonecutting(`2x betterendforge:${stone}_slab`, `betterendforge:${stone}`);
    event.stonecutting(`betterendforge:${stone}_wall`, `betterendforge:${stone}`);
    event.stonecutting(`betterendforge:${stone}_button`, `betterendforge:${stone}`);
    event.stonecutting(`betterendforge:${stone}_bricks`, `betterendforge:${stone}`);
    event.stonecutting(`betterendforge:${stone}_bricks_stairs`, `betterendforge:${stone}`);
    event.stonecutting(`2x betterendforge:${stone}_bricks_slab`, `betterendforge:${stone}`);
    event.stonecutting(`betterendforge:${stone}_bricks_wall`, `betterendforge:${stone}`);
    event.stonecutting(`betterendforge:${stone}_bricks_stairs`, `betterendforge:${stone}_bricks`);
    event.stonecutting(`2x betterendforge:${stone}_bricks_slab`, `betterendforge:${stone}_bricks`);
    event.stonecutting(`betterendforge:${stone}_bricks_wall`, `betterendforge:${stone}_bricks`);
  };
  
  // Quark
  event.stonecutting('quark:chiseled_limestone_bricks', 'quark:limestone');
  event.stonecutting('quark:limestone_bricks', 'quark:limestone');
  event.stonecutting('quark:limestone_pavement', 'quark:limestone');
  event.stonecutting('quark:limestone_pillar', 'quark:limestone');
  event.stonecutting('2x quark:limestone_slab', 'quark:limestone');
  event.stonecutting('2x quark:limestone_speleothem', 'quark:limestone');
  event.stonecutting('quark:limestone_stairs', 'quark:limestone');
  event.stonecutting('quark:limestone_wall', 'quark:limestone');
  event.stonecutting('quark:polished_limestone', 'quark:limestone');
  event.stonecutting('2x quark:polished_limestone_slab', 'quark:limestone');
  event.stonecutting('quark:polished_limestone_stairs', 'quark:limestone');

  // Sandstone
  event.stonecutting('darkerdepths:cobbled_sandstone', 'minecraft:sandstone');

  // Structurize - Stone Timber Frames
  for (pattern of STRUCTURIZE_PATTERNS) {
    for (wood of STRUCTURIZE_WOODS) {
      for (material of STRUCURIZE_STONE_MATERIALS) {
        for (altPattern of STRUCTURIZE_PATTERNS) {
          if (pattern === altPattern) {
            continue;
          }
          event.stonecutting(`structurize:${altPattern}_${wood}_${material}_timber_frame`, `structurize:${pattern}_${wood}_${material}_timber_frame`);
        }
      }
    }
  }

});
