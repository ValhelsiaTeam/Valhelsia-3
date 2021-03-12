events.listen('jei.information', function (event) {

    // Apotheosis
    const addApotheosisEntry = (id, mob, extra) => {
      extra = (typeof extra !== 'undefined') ?  extra : ""

      event.add(id, "Using a ".concat(mob).concat(" Spawn Egg on a spawner will convert the spawner into a ".concat(mob).concat(" spawner.".concat(extra))))
    }

    const REQUIRES_GRASS = " Requires a Grass Block surface for the spawner to work."
    const REQUIRES_MYCELIUM = " Requires a Mycelium surface for the spawner to work."

    // Apotheosis - Minecraft Mobs
    addApotheosisEntry('minecraft:creeper_spawn_egg', "Creeper")
    addApotheosisEntry('minecraft:husk_spawn_egg', "Husk")
    addApotheosisEntry('minecraft:zombie_spawn_egg', "Zombie")
    addApotheosisEntry('minecraft:cave_spider_spawn_egg', "Cave Spider")
    addApotheosisEntry('minecraft:spider_spawn_egg', "Spider")
    addApotheosisEntry('minecraft:stray_spawn_egg', "Stray")
    addApotheosisEntry('minecraft:skeleton_spawn_egg', "Skeleton")

    // Apotheosis - Modded Mobs
    addApotheosisEntry('savageandravage:skeleton_villager_spawn_egg', "Skeleton Villager")
    addApotheosisEntry('quark:wrapped_spawn_egg', "Wrapped")
    addApotheosisEntry('neapolitan:plantain_spider_spawn_egg', "Plantain Spider")

    // Apotheosis - Minecraft Animals
    addApotheosisEntry('minecraft:pig_spawn_egg', "Pig", REQUIRES_GRASS)
    addApotheosisEntry('minecraft:sheep_spawn_egg', "Sheep", REQUIRES_GRASS)
    addApotheosisEntry('minecraft:rabbit_spawn_egg', "Rabbit", REQUIRES_GRASS)
    addApotheosisEntry('minecraft:chicken_spawn_egg', "Chicken", REQUIRES_GRASS)
    addApotheosisEntry('minecraft:cow_spawn_egg', "Cow", REQUIRES_GRASS)
    addApotheosisEntry('minecraft:mooshroom_spawn_egg', "Mooshroom", REQUIRES_MYCELIUM)

    // Apotheosis - Modded Animals
    addApotheosisEntry('autumnity:turkey_spawn_egg', "Turkey", REQUIRES_GRASS)
    addApotheosisEntry('buzzier_bees:moobloom_spawn_egg', "Moobloom", REQUIRES_GRASS)
    addApotheosisEntry('environmental:deer_spawn_egg', "Deer", REQUIRES_GRASS)
    addApotheosisEntry('environmental:duck_spawn_egg', "Duck", REQUIRES_GRASS)
    addApotheosisEntry('environmental:slabfish_spawn_egg', "Slabfish", REQUIRES_GRASS)
    addApotheosisEntry('mysticalworld:deer_spawn_egg', "Deer", REQUIRES_GRASS)
    addApotheosisEntry('mysticalworld:sprout_spawn_egg', "Sprout", REQUIRES_GRASS)

    // Autumnity Additional Information
    event.add('autumnity:sappy_maple_log', "Sappy Maple Logs have a 25% chance to be created when stripping Maple Logs. Right-clicking on Sappy Maple Log with a Glass Bottle will fill the bottle with sap.")
    event.add('autumnity:sappy_maple_wood', "Sappy Maple Wood has a 25% chance to be created when stripping Maple Wood. Right-clicking on Sappy Maple Wood with a Glass Bottle will fill the bottle with sap.")

    event.add('autumnity:snail_slime_block', "Landing on a Snail Slime Block does not cause fall damage unless the player is sneaking.")
    event.add('autumnity:snail_slime_block', "Snail Slime Blocks cause movement on top of them to slow down unless they are touching water or a wet sponge, in which case they become slippery. Snails are not affected by snail slime blocks.")
    event.add('autumnity:snail_slime_block', "Entities that are touching the bottom of a non-slippery snail slime block will stick to the block, preventing them from falling. This does not apply to snails or entities that are sneaking.")
    event.add('autumnity:snail_slime_block', "Snail Slime Blocks act similarly to Slime Blocks and Honey Blocks when moved by a piston, but will also not stick to Mulberry Jam Blocks or Aloe Gel Blocks")

    // Minecraft Changes
    event.add('minecraft:sweet_berries', "To plant Sweet Berries, craft them into Sweet Berry Pips in order to be able to plant them.")

    // Quark Additional Information
    event.add('minecraft:chain', "When right-clicking with Chains onto a boat or minecart, and then onto another, they'll link the two. Linked boats and minecarts will always remain at close distance, which allows you to make trains.")
    event.add('quark:iron_rod', "Pistons pushing an Iron Rod will have it work as a drill of sorts, breaking any blocks in front in the direction the rod is facing. These can break anything the piston can push.")

    var quarkSlimeBlocks = [
      'minecraft:slime_block',
      'quark:red_slime_block',
      'quark:blue_slime_block',
      'quark:cyan_slime_block',
      'quark:magenta_slime_block',
      'quark:yellow_slime_block'
    ]

    quarkSlimeBlocks.forEach(function(element) {
      event.add(element, "Slime blocks can be dyed Red and Blue. The primary color blocks (Red, Green, and Blue) can be combined to create secondary colors (Cyan, Magenta, and Yellow).")
      event.add(element, "While being moved by pistons, two slime blocks will only connect if they're the same color, or if one is made of another (so Red won't connect to Blue, but it'll connect to Magenta). Any color of slime will connect to non-slime blocks around it normally.")
    })
    
})
