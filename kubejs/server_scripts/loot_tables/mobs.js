// priority: 10

onEvent('entity.loot_tables', event => {

  // Add a chance for some mobs to drop additonal loot, as a bonus incentive to farm them.
  // Particularly useful since Strays and Husks are now guaranteed spawns in some biomes.

  // Wraith
  event.modifyEntity('eidolon:wraith', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_lead');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

  // Stray
  event.modifyEntity('minecraft:stray', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('immersiveengineering:ingot_silver');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

  // Husk
  event.modifyEntity('minecraft:husk', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_tin');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });

  // Drowned (Note: This would be better as a replacement for Gold, but other mods modify the loot table already, making replacement via JSON not feasible)
  event.modifyEntity('minecraft:drowned', table => {
    table.addPool(pool => {
      pool.rolls = 1;
      pool.addItem('mekanism:ingot_copper');
      pool.killedByPlayer();
      pool.addCondition({"condition": "minecraft:random_chance_with_looting", "chance": 0.11, "looting_multiplier": 0.02});
    });
  });
});