// priority: 10

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

/**
 * @file Recipe additions for Botania's crafting methods.
 * 
 * Includes templates for adding Pure Daisy and Mana Infusion
 * recipes (with variants for each catalyst, as well as no catalyst).
 */

/**
 * Botania Recipe Event Handler
 */
onEvent('recipes', event => {

  /**
   * Creates a Pure Daisy recipe.
   * Whichever block is specified as the input will be converted into the output block over time.
   * @param {string} output The block ID of the resulting block.
   * @param {string} input The block ID of the block to convert.
   */
  const pureDaisy = (output, input) => {
    event.custom({
      type: 'botania:pure_daisy',
      input: {
          type: 'block',
          block: input
      },
      output: {
          name: output
      }
    });
  };

  /**
   * Creates an Alchemy Catalyst Mana Infusion recipe.
   * @param {(string|Item)} output One or more output items. Usually just one as alchemy is used for transformation.
   * @param {(string|Ingredient)} input A single input ingredient.
   * @param {number} mana The mana cost of the infusion. For reference, logs tend to cost 40 and saplings 120 mana.
   * @param {string} [group] The optional Botania group ID to add the recipe to. Examples: 'botania:log_cycle', 'botania:sapling_cycle', 'botania:shrub_cycle'.
   */
  const alchemy = (output, input, mana, group) => {
    if (typeof group == 'undefined') {
      // Without Group
      event.custom({
        type: 'botania:mana_infusion',
        input: Ingredient.of(input).toJson(),
        output: Item.of(output).toResultJson(),
        mana: mana,
        catalyst: {
          type: 'block',
          block: 'botania:alchemy_catalyst'
        }
      });
    } else {
      // With Group
      event.custom({
        type: 'botania:mana_infusion',
        input: Ingredient.of(input).toJson(),
        output: Item.of(output).toResultJson(),
        mana: mana,
        group: group,
        catalyst: {
          type: 'block',
          block: 'botania:alchemy_catalyst'
        }
      });
    }
  };

  /**
   * Creates a Conjuration Catalyst Mana Infusion recipe.
   * @param {(string|Item)} output One or more output item(s). Usually exactly two as conjuration is used for doubling.
   * @param {(string|Ingredient)} input A single input ingredient.
   * @param {number} mana The mana cost of the infusion. For reference, plants tend to cost 800 mana and leaves cost 2000.
   */
   const conjuration = (output, input, mana) => {
    event.custom({
      type: 'botania:mana_infusion',
      input: Ingredient.of(input).toJson(),
      output: Item.of(output).toResultJson(),
      mana: mana,
      catalyst: {
        type: 'block',
        block: 'botania:conjuration_catalyst'
      }
    });
  };

  /**
   * A shortcut to creating a plant-doubling Conjuration Catalyst Mana Infusion recipe.
   * @param {(string|Item)} plant The plant item to double. Acts as both the input and output.
   */
  const conj2xPlant = (plant) => {
    conjuration(Item.of(plant, 2), plant, 800);
  };

  /**
   * A shortcut to creating a leaf-doubling Conjuration Catalyst Mana Infusion recipe.
   * @param {(string|Item)} leaves The leaf item to double. Acts as both the input and output.
   */
  const conj2xLeaves = (leaves) => {
    conjuration(Item.of(leaves, 2), leaves, 2000);
  };

  /**
   * Creates a Mana Infusion recipe (without any catalyst being present).
   * @param {(string|Item)} output One or more output items.
   * @param {(string|Ingredient)} input A single input item.
   * @param {number} mana The mana cost of the infusion. See Botania's built-in recipes for reference.
   */
   const infusion = (output, input, mana) => {
    event.custom({
      type: 'botania:mana_infusion',
      input: Ingredient.of(input).toJson(),
      output: Item.of(output).toResultJson(),
      mana: mana
    });
  };

  // Pure Daisy Recipes
  // ------------------
  pureDaisy('forbidden_arcanus:soulless_sand', 'minecraft:soul_sand');
  pureDaisy('minecraft:sand', 'forbidden_arcanus:soulless_sand');
  pureDaisy('betterendforge:dense_emerald_ice', 'betterendforge:emerald_ice');
  pureDaisy('betterendforge:ancient_emerald_ice', 'betterendforge:dense_emerald_ice');

  // Alchemy Infusion Recipes
  // ------------------------

  // Logs
  // TODO: This should be expanded a bit.
  alchemy('atmospheric:grimwood_log', 'druidcraft:darkwood_log', 40, 'botania:log_cycle');
  alchemy('upgrade_aquatic:driftwood_log', 'upgrade_aquatic:river_log', 40, 'botania:log_cycle');
  
  // End Log Cycle (BetterEnd and Endergetic Expansion)
  // Some of these logs, at least Lucernia, are not otherwise obtainable because the trees generate with only bark blocks.
  alchemy('betterendforge:end_lotus_log', 'betterendforge:lacugrove_log', 40, 'botania:log_cycle');
  alchemy('betterendforge:lacugrove_log', 'betterendforge:mossy_glowshroom_log', 40, 'botania:log_cycle');
  alchemy('betterendforge:mossy_glowshroom_log', 'betterendforge:jellyshroom_log', 40, 'botania:log_cycle');
  alchemy('betterendforge:jellyshroom_log', 'betterendforge:umbrella_tree_log', 40, 'botania:log_cycle');
  alchemy('betterendforge:umbrella_tree_log', 'endergetic:poise_stem', 40, 'botania:log_cycle');
  alchemy('endergetic:poise_stem', 'betterendforge:pythadendron_log', 40, 'botania:log_cycle');
  alchemy('betterendforge:pythadendron_log', 'betterendforge:dragon_tree_log', 40, 'botania:log_cycle');
  alchemy('betterendforge:dragon_tree_log', 'betterendforge:tenanea_log', 40, 'botania:log_cycle');
  alchemy('betterendforge:tenanea_log', 'betterendforge:helix_tree_log', 40, 'botania:log_cycle');
  alchemy('betterendforge:helix_tree_log', 'betterendforge:lucernia_log', 40, 'botania:log_cycle');
  alchemy('betterendforge:lucernia_log', 'betterendforge:end_lotus_log', 40, 'botania:log_cycle');

  // Method to obtain non-spawning Atmospheric Saplings
  alchemy('atmospheric:grimwood_sapling', 'druidcraft:darkwood_sapling', 120, 'botania:sapling_cycle');
  alchemy('atmospheric:kousa_sapling', 'atmospheric:rosewood_sapling', 120, 'botania:sapling_cycle');
  alchemy('atmospheric:aspen_sapling', 'atmospheric:yucca_sapling', 120, 'botania:sapling_cycle');

  // Orange Maple Cycle
  alchemy('biomesoplenty:orange_autumn_sapling', 'autumnity:orange_maple_sapling', 120, 'botania:sapling_cycle');
  alchemy('autumnity:orange_maple_sapling', 'biomesoplenty:orange_autumn_sapling', 120, 'botania:sapling_cycle');

  // Yellow Maple Cycle
  alchemy('biomesoplenty:yellow_autumn_sapling', 'autumnity:yellow_maple_sapling', 120, 'botania:sapling_cycle');
  alchemy('autumnity:yellow_maple_sapling', 'biomesoplenty:yellow_autumn_sapling', 120, 'botania:sapling_cycle');

  // Red Maple Cycle
  alchemy('biomesoplenty:maple_sapling', 'autumnity:red_maple_sapling', 120, 'botania:sapling_cycle');
  alchemy('autumnity:red_maple_sapling', 'biomesoplenty:maple_sapling', 120, 'botania:sapling_cycle');

  // Cherry Sapling Cycle
  alchemy('biomesoplenty:pink_cherry_sapling', 'environmental:cherry_sapling', 120, 'botania:sapling_cycle');
  alchemy('biomesoplenty:white_cherry_sapling', 'biomesoplenty:pink_cherry_sapling', 120, 'botania:sapling_cycle');
  alchemy('forbidden_arcanus:cherrywood_sapling', 'biomesoplenty:white_cherry_sapling', 120, 'botania:sapling_cycle');
  alchemy('environmental:cherry_sapling', 'forbidden_arcanus:cherrywood_sapling', 120, 'botania:sapling_cycle');

  // Jacaranda Sapling Cycle
  alchemy('abundance:jacaranda_sapling', 'biomesoplenty:jacaranda_sapling', 120, 'botania:sapling_cycle');
  alchemy('biomesoplenty:jacaranda_sapling', 'abundance:jacaranda_sapling', 120, 'botania:sapling_cycle');

  // Rainforest Sapling Cycle
  alchemy('biomesoplenty:mahogany_sapling', 'atmospheric:morado_sapling', 120, 'botania:sapling_cycle');
  alchemy('atmospheric:morado_sapling', 'biomesoplenty:mahogany_sapling', 120, 'botania:sapling_cycle');

  // Willow Sapling Cycle
  alchemy('environmental:willow_sapling', 'biomesoplenty:willow_sapling', 120, 'botania:sapling_cycle');
  alchemy('biomesoplenty:willow_sapling', 'environmental:willow_sapling', 120, 'botania:sapling_cycle');

  // Wisteria Sapling Cycle
  alchemy('environmental:pink_wisteria_sapling', 'environmental:white_wisteria_sapling', 120, 'botania:sapling_cycle');
  alchemy('environmental:purple_wisteria_sapling', 'environmental:pink_wisteria_sapling', 120, 'botania:sapling_cycle');
  alchemy('environmental:blue_wisteria_sapling', 'environmental:purple_wisteria_sapling', 120, 'botania:sapling_cycle');
  alchemy('environmental:white_wisteria_sapling', 'environmental:blue_wisteria_sapling', 120, 'botania:sapling_cycle');

  // Coastal Sapling Cycle
  alchemy('upgrade_aquatic:river_sapling', 'biomesoplenty:palm_sapling', 120, 'botania:sapling_cycle');
  alchemy('biomesoplenty:palm_sapling', 'upgrade_aquatic:river_sapling', 120, 'botania:sapling_cycle');
  
  // End Sapling Cycle (BetterEnd and Endergetic Expansion)
  alchemy('betterendforge:end_lotus_seed', 'betterendforge:lacugrove_sapling', 120, 'botania:sapling_cycle');
  alchemy('betterendforge:lacugrove_sapling', 'betterendforge:mossy_glowshroom_sapling', 120, 'botania:sapling_cycle');
  alchemy('betterendforge:mossy_glowshroom_sapling', 'betterendforge:small_jellyshroom', 120, 'botania:sapling_cycle');
  alchemy('betterendforge:small_jellyshroom', 'betterendforge:umbrella_tree_sapling', 120, 'botania:sapling_cycle');
  alchemy('betterendforge:umbrella_tree_sapling', 'endergetic:tall_poise_bush', 120, 'botania:sapling_cycle');
  alchemy('endergetic:tall_poise_bush', 'betterendforge:pythadendron_sapling', 120, 'botania:sapling_cycle');
  alchemy('betterendforge:pythadendron_sapling', 'betterendforge:dragon_tree_sapling', 120, 'botania:sapling_cycle');
  alchemy('betterendforge:dragon_tree_sapling', 'betterendforge:tenanea_sapling', 120, 'botania:sapling_cycle');
  alchemy('betterendforge:tenanea_sapling', 'betterendforge:helix_tree_sapling', 120, 'botania:sapling_cycle');
  alchemy('betterendforge:helix_tree_sapling', 'betterendforge:lucernia_sapling', 120, 'botania:sapling_cycle');
  alchemy('betterendforge:lucernia_sapling', 'betterendforge:end_lotus_seed', 120, 'botania:sapling_cycle');

  alchemy('biomesoplenty:sprout', 'mysticalworld:assorted_seeds', 120, 'botania:shrub_cycle');

  // A method to obtain Druidcraft Blueberries (they don't generate in the current version of Druidcraft)
  alchemy('druidcraft:blueberries', 'berry_good:sweet_berry_pips', 120, 'botania:shrub_cycle');

  // Kelp <-> Seagrass Cycle
  alchemy('minecraft:kelp', 'minecraft:seagrass', 200, 'botania:aquatic_cycle');
  alchemy('minecraft:seagrass', 'minecraft:kelp', 200, 'botania:aquatic_cycle');

  // Conjuration Infusion Recipes
  // ----------------------------

  // Item Duplication
  // Reference Botania Mana Costs: 
  // 200 for Netherrack, 720 for gravel, 800 mana for grass, 1500 for soul sand, 2000 mana for leaves, 2100 for coal, 5000 for glowstone dust.

  conj2xPlant('atmospheric:arid_sprouts');
  conj2xPlant('atum:oasis_grass');
  conj2xPlant('atum:dry_grass');
  conj2xPlant('atum:tall_dry_grass');
  conj2xPlant('bayou_blues:algae');
  
  // BetterEnd Plants:
  // Excludes water plants, bushes, sky plants, wall plants, vines and ceiling plants.
  // Excludes Shadow Berry and Blossom Berry from the mod's "plants" category because they are edible.
  conjuration('2x betterendforge:umbrella_moss', 'betterendforge:umbrella_moss', 800);
  conjuration('2x betterendforge:umbrella_moss_tall', 'betterendforge:umbrella_moss_tall', 800);
  conjuration('2x betterendforge:creeping_moss', 'betterendforge:creeping_moss', 800);
  conjuration('2x betterendforge:chorus_grass', 'betterendforge:chorus_grass', 800);
  conjuration('2x betterendforge:crystal_grass', 'betterendforge:crystal_grass', 800);
  conjuration('2x betterendforge:amber_grass', 'betterendforge:amber_grass', 800);
  conjuration('2x betterendforge:shadow_plant', 'betterendforge:shadow_plant', 800);
  conjuration('2x betterendforge:murkweed', 'betterendforge:murkweed', 800);
  conjuration('2x betterendforge:needlegrass', 'betterendforge:needlegrass', 800);
  conjuration('2x betterendforge:bushy_grass', 'betterendforge:bushy_grass', 800);
  conjuration('2x betterendforge:twisted_umbrella_moss', 'betterendforge:twisted_umbrella_moss', 800);
  conjuration('2x betterendforge:twisted_umbrella_moss_tall', 'betterendforge:twisted_umbrella_moss_tall', 800);
  conjuration('2x betterendforge:jungle_grass', 'betterendforge:jungle_grass', 800);
  conjuration('2x betterendforge:blooming_cooksonia', 'betterendforge:blooming_cooksonia', 800);
  conjuration('2x betterendforge:salteago', 'betterendforge:salteago', 800);
  conjuration('2x betterendforge:vaiolush_fern', 'betterendforge:vaiolush_fern', 800);
  conjuration('2x betterendforge:fracturn', 'betterendforge:fracturn', 800);
  conjuration('2x betterendforge:small_amaranita_mushroom', 'betterendforge:small_amaranita_mushroom', 800);
  conjuration('2x betterendforge:globulagus', 'betterendforge:globulagus', 800);
  conjuration('2x betterendforge:clawfern', 'betterendforge:clawfern', 800);
  conjuration('2x betterendforge:aeridium', 'betterendforge:aeridium', 800);
  conjuration('2x betterendforge:lamellarium', 'betterendforge:lamellarium', 800);
  conjuration('2x betterendforge:bolux_mushroom', 'betterendforge:bolux_mushroom', 800);
  conjuration('2x betterendforge:orango', 'betterendforge:orango', 800);
  conjuration('2x betterendforge:lutebus', 'betterendforge:lutebus', 800);
  conjuration('2x betterendforge:cave_grass', 'betterendforge:cave_grass', 800);

  // BoP Plants:
  conjuration('2x biomesoplenty:sprout', 'biomesoplenty:sprout', 800);
  conjuration('2x biomesoplenty:bush', 'biomesoplenty:bush', 800);
  conjuration('2x biomesoplenty:dune_grass', 'biomesoplenty:dune_grass', 800);
  conjuration('2x biomesoplenty:desert_grass', 'biomesoplenty:desert_grass', 800);
  conjuration('2x biomesoplenty:dead_grass', 'biomesoplenty:dead_grass', 800);

  // Environmental Plants:
  conjuration('2x environmental:giant_tall_grass', 'environmental:giant_tall_grass', 800);
  conjuration('2x environmental:mycelium_sprouts', 'environmental:mycelium_sprouts', 800);
  conjuration('2x environmental:duckweed', 'environmental:duckweed', 800);

  // Minecraft Plants:
  conjuration('2x minecraft:nether_sprouts', 'minecraft:nether_sprouts', 800);

  // Mana Infusion Recipes
  // ---------------------

  
});