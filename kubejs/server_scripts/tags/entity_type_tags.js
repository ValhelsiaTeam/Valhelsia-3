// priority: 80

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('entity_type.tags', event => {

  // Halloween Event Candy
  event.add('valhelsia_tweaks:drops_candy', [
    'minecraft:zombie',
    'minecraft:husk',
    'minecraft:skeleton',
    'minecraft:stray',
    'minecraft:witch',
    'minecraft:spider',
    'minecraft:phantom',
    'minecraft:cave_spider',
    'blue_skies:venom_spider',
    'blue_skies:nested_spider',
    'dungeons_mobs:armored_zombie',
    'dungeons_mobs:jungle_zombie',
    'dungeons_mobs:frozen_zombie',
    'dungeons_mobs:armored_skeleton',
    'dungeons_mobs:mossy_skeleton',
    'dungeons_mobs:skeleton_vanguard',
    'dungeons_mobs:skeleton_horseman',
    'dungeons_mobs:necromancer',
    'twilightforest:swarm_spider',
    'twilightforest:hedge_spider',
    'eidolon:zombie_brute',
  ]);

});