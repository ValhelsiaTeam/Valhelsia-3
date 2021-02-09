events.listen('jei.information', function (event) {

    //Apotheosis - Minecraft: Mobs
    event.add('minecraft:creeper_spawn_egg', 'Using a Creeper Spawn Egg on a spawner will change the spawner to a creeper spawner.')
    event.add('minecraft:husk_spawn_egg', 'Using a Husk Spawn Egg on a spawner will change the spawner to a husk spawner.')
    event.add('minecraft:zombie_spawn_egg', 'Using a Zombie Spawn Egg on a spawner will change the spawner to a zombie spawner.')
    event.add('minecraft:cave_spider_spawn_egg', 'Using a Cave Spider Spawn Egg on a spawner will change the spawner to a cave spider spawner.')
    event.add('minecraft:spider_spawn_egg', 'Using a Spider Spawn Egg on a spawner will change the spawner to a spider spawner.')
    event.add('minecraft:stray_spawn_egg', 'Using a Stray Spawn Egg on a spawner will change the spawner to a stray spawner.')
    event.add('minecraft:skeleton_spawn_egg', 'Using a Skeleton Spawn Egg on a spawner will change the spawner to a skeleton spawner.')

    //Apotheosis - Savage & Ravage: Mob
    event.add('savageandravage:skeleton_villager_spawn_egg', 'Using a Skeleton Villager Spawn Egg on a spawner will change the spawner to a skeleton villager spawner.')

    //Apotheosis - Quark: Mob
    event.add('quark:wrapped_spawn_egg', 'Using a Wrapped Spawn Egg on a spawner will change the spawner to a wrapped spawner.')

    //Apotheosis - Neapolitan: Mob
    event.add('neapolitan:plantain_spider_spawn_egg', 'Using a Plantain Spider Spawn Egg on a spawner will change the spawner to a plantain spider spawner.')

    
    //Apotheosis - Minecraft: Animals
    event.add('minecraft:pig_spawn_egg', ['Using a Pig Spawn Egg on a spawner will change the spawner to a pig spawner.', 'Requires a grass block surface for the spawner to work.'])
    event.add('minecraft:sheep_spawn_egg', ['Using a Sheep Spawn Egg on a spawner will change the spawner to a sheep spawner.', 'Requires a grass block surface for the spawner to work.'])
    event.add('minecraft:rabbit_spawn_egg', ['Using a Rabbit Spawn Egg on a spawner will change the spawner to a rabbit spawner.', 'Requires a grass block surface for the spawner to work.'])
    event.add('minecraft:chicken_spawn_egg', ['Using a Chicken Spawn Egg on a spawner will change the spawner to a chicken spawner.', 'Requires a grass block surface for the spawner to work.'])
    event.add('minecraft:cow_spawn_egg', ['Using a Cow Spawn Egg on a spawner will change the spawner to a cow spawner.', 'Requires a grass block surface for the spawner to work.'])
    event.add('minecraft:mooshroom_spawn_egg', ['Using a Mooshroom Spawn Egg on a spawner will change the spawner to a mooshroom spawner.', 'Requires a mycelium surface for the spawner to work.'])

    //Apotheosis - Quark: Animal
    event.add('mysticalworld:sprout_spawn_egg', ['Using a Sprout Spawn Egg on a spawner will change the spawner to a sprout spawner.', 'Requires a grass block surface for the spawner to work.'])

    //Apotheosis - Buzzier Bees: Animal
    event.add('buzzier_bees:moobloom_spawn_egg', ['Using a Moobloom Spawn Egg on a spawner will change the spawner to a moobloom spawner.', 'Requires a grass block surface for the spawner to work.'])

    //Apotheosis - Autumnity: Animal
    event.add('autumnity:turkey_spawn_egg', ['Using a Turkey Spawn Egg on a spawner will change the spawner to a turkey spawner.', 'Requires a grass block surface for the spawner to work.'])

    //Apotheosis - Mystical World: Animal
    event.add('mysticalworld:deer_spawn_egg', ['Using a Deer Spawn Egg on a spawner will change the spawner to a deer spawner.', 'Requires a grass block surface for the spawner to work.'])

})
