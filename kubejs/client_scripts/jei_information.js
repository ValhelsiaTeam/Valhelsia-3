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
    addApotheosisEntry('twilightforest:tower_broodling_spawn_egg', "Carminite Broodling")
    addApotheosisEntry('twilightforest:skeleton_druid_spawn_egg', "Skeleton Druid")
    addApotheosisEntry('twilightforest:swarm_spider_spawn_egg', "Swarm Spider")
    addApotheosisEntry('twilightforest:hedge_spider_spawn_egg', "Hedge Spider")
    addApotheosisEntry('atum:forsaken_spawn_egg', "Forsaken")
    addApotheosisEntry('atum:mummy_spawn_egg', "Mummy")

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
    addApotheosisEntry('mysticalworld:deer_spawn_egg', "Deer", REQUIRES_GRASS)
    addApotheosisEntry('mysticalworld:sprout_spawn_egg', "Sprout", REQUIRES_GRASS)
    addApotheosisEntry('twilightforest:deer_spawn_egg', "Wild Deer", REQUIRES_GRASS)
    addApotheosisEntry('twilightforest:bighorn_sheep_spawn_egg', "Bighorn Sheep", REQUIRES_GRASS)
    addApotheosisEntry('twilightforest:wild_boar_spawn_egg', "Wild Boar", REQUIRES_GRASS)
    addApotheosisEntry('twilightforest:bunny_spawn_egg', "Forest Rabbit", REQUIRES_GRASS)
    addApotheosisEntry('atum:desert_rabbit_spawn_egg', "Desert Rabbit", REQUIRES_GRASS)
    addApotheosisEntry('atum:quail_spawn_egg', "Quail", REQUIRES_GRASS)

    // Atmospheric
    event.add('atmospheric:aloe_kernels', "Aloe Kernels can be planted on either Arid Sand or Red Arid Sand. When planted on Arid Sand they will grow Yellow Blossoms, and when on Red Arid Sand they instead grow faster.")
    event.add('atmospheric:yellow_blossoms', "Aloe Kernels that are planted on Red Arid Sand will eventually grow into Tall Aloe Vera, which blooms with Yellow Blossoms.")

    // Autumnity
    event.add('autumnity:sap_bottle', "Sap Bottles are created by right-clicking with a Glass Bottle on a Sappy Maple block. Sappy Maple blocks have a 25% chance to be created when stripping Autumnity Maple Logs or Wood with an axe.")
    event.add('autumnity:sappy_maple_log', "Sappy Maple Logs have a 25% chance to be created when stripping Autumnity Maple Logs. Right-clicking on Sappy Maple Log with a Glass Bottle will fill the bottle with sap.")
    event.add('autumnity:sappy_maple_wood', "Sappy Maple Wood has a 25% chance to be created when stripping Autumnity Maple Wood. Right-clicking on Sappy Maple Wood with a Glass Bottle will fill the bottle with sap.")

    event.add('autumnity:snail_slime_block', "Landing on a Snail Slime Block does not cause fall damage unless the player is sneaking.")
    event.add('autumnity:snail_slime_block', "Snail Slime Blocks cause movement on top of them to slow down unless they are touching water or a wet sponge, in which case they become slippery. Snails are not affected by snail slime blocks.")
    event.add('autumnity:snail_slime_block', "Entities that are touching the bottom of a non-slippery snail slime block will stick to the block, preventing them from falling. This does not apply to snails or entities that are sneaking.")
    event.add('autumnity:snail_slime_block', "Snail Slime Blocks act similarly to Slime Blocks and Honey Blocks when moved by a piston, but additionally won't stick to either Mulberry Jam Blocks or Aloe Gel Blocks")

    // Farmer's Delight
    event.add('farmersdelight:rice', "Rice can be grown by planting it on dirt that is in shallow water, rather than regular farmland.")

    // Forbidden and Arcanus
    event.add('forbidden_arcanus:fungyss', "Can be planted on top of Diorite and grown with bone meal.")

    // Minecraft Changes
    event.add('minecraft:sweet_berries', "Craft Sweet Berries into Sweet Berry Pips in order to be able to plant them.")

    // Mystical World
    var amethystArmour = [
      'mysticalworld:amethyst_helmet',
      'mysticalworld:amethyst_chestplate',
      'mysticalworld:amethyst_leggings',
      'mysticalworld:amethyst_boots'
    ]

    event.add(amethystArmour, ["The Serendipity statistic provides a bonus to both Fortune and Looting.", " ", "The Luck statistic provides a bonus while fishing (in the same manner as \"Luck of the Sea\") and a chance to receive better loot in some structures."])

    // Neapolitan
    event.add('neapolitan:small_banana_frond', "To grow a Banana Plant from a Small Banana Frond, place the frond onto a block of Sand or Gravel and wait for it to rain. You can also grow them with bone meal while it is raining.")
    event.add('neapolitan:banana_frond', "To grow a Banana Plant from a Banana Frond, place the frond onto a block of Sand or Gravel and wait for it to rain. You can also grow them with bone meal while it is raining.")
    event.add('neapolitan:large_banana_frond', "To grow a Banana Plant from a Large Banana Frond, place the frond onto a block of Sand or Gravel and wait for it to rain. You can also grow them with bone meal while it is raining.")
    // TODO: Neapolitan's Food Effects
    // Chocolate things give Sugar Rush which gives you a short boost of speed but then slows you down.
    // Strawberry things heal you.
    // Banana things give Agility, which lets you climb anything as though it was a ladder.
    // Mint gives Berserking, which gives a slight boost to armor and attack damage.
    // Adzuki gives Harmony.
    // Vanilla gives Vanilla Scent.

    // Savage and Ravage
    // Note: Adding NBT doesn't completely work - still shows up when pressing "U" on a white banner.
    //event.add(Item.of('minecraft:white_banner', {BlockEntityTag:{Patterns:[{Pattern:"mr",Color:9},{Pattern:"bs",Color:8},{Pattern:"cs",Color:7},{Pattern:"bo",Color:8},{Pattern:"ms",Color:15},{Pattern:"hh",Color:8},{Pattern:"mc",Color:8},{Pattern:"bo",Color:15}]},display:{Name:'{"color":"gold","translate":"block.minecraft.ominous_banner"}'}}), "test")

    // Quark
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

    event.add(quarkSlimeBlocks, "Slime blocks can be dyed Red and Blue. The primary color blocks (Red, Green, and Blue) can be combined to create secondary colors (Cyan, Magenta, and Yellow).")
    event.add(quarkSlimeBlocks, "While being moved by pistons, two slime blocks will only connect if they're the same color, or if one is made of another (so Red won't connect to Blue, but it'll connect to Magenta). Any color of slime will connect to non-slime blocks around it normally.")  

    // Valhelsia
    event.add('akashictome:tome', "When crafting an Akashic Tome, the recipe with four bookshelves will be filled with the starting manuals and the recipe with one bookshelf will be empty.")
    event.add('valhelsia_tweaks:candy_corn', "Obtainable around Halloween each year.")
    event.add('valhelsia_tweaks:lemon_candy', "Obtainable around Halloween each year.")
    event.add('valhelsia_tweaks:cherry_lollipop', "Obtainable around Halloween each year.")
    event.add('valhelsia_tweaks:spicy_mango_lollipop', "Obtainable around Halloween each year.")

    // Misc Information
    event.add('#forge:gems/amber', "Amber can be socketed into Tetra weapons at a Workbench, causing enemies to occasionally get the Earthbound effect, slowing them and preventing them from jumping.")
})
