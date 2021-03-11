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
    addApotheosisEntry('mysticalworld:deer_spawn_egg', "Deer", REQUIRES_GRASS)
    addApotheosisEntry('mysticalworld:sprout_spawn_egg', "Sprout", REQUIRES_GRASS)

    // Quark Additional Information
    event.add('minecraft:chain', "When right clicking with Chains onto a boat or minecart, and then onto another, they'll link the two. Linked boats and minecarts will always remain at close distance, which allows you to make trains.")
    event.add('minecraft:slime_block', ["Slime blocks can be dyed Red and Blue. The primary color blocks (Red, Green, and Blue) can be combined to create secondary colors (Cyan, Magenta, and Yellow).", "While being moved by pistons, two slime blocks will only connect if they're the same color, or if one is made of another (so Red won't connect to Blue, but it'll connect to Magenta). Any color of slime will connect to non-slime blocks around it normally."])
    event.add('quark:iron_rod', "Pistons pushing an Iron Rod will have it work as a drill of sorts, breaking any blocks in front in the direction the rod is facing. These can break anything the piston can push.")
})
