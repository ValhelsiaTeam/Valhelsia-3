// priority: 5

onEvent('player.logged_in', event => {
  if (!event.player.stages.has('starting_items')) {

    // Give the player a custom Akashic Tome with the manuals for several mods.
    event.player.give(Item.of('akashictome:tome', akashicTomeNBT));

    // Add the Game Stage, preventing them getting it again.
    event.player.stages.add('starting_items');
  }
});