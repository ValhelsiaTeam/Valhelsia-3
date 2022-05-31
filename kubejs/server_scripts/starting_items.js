// priority: 5

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('player.logged_in', event => {
  if (!event.player.stages.has('starting_items')) {

    // Give the player a custom Akashic Tome with the manuals for several mods.
    event.player.give(Item.of('akashictome:tome', akashicTomeNBT));

    // Add the Game Stage, preventing them getting it again.
    event.player.stages.add('starting_items');
  }
});