// priority: 10

events.listen('recipes', function (event) {
  // Astral Sorcery
  event.stonecutting(item.of('astralsorcery:marble_raw', 1), 'quark:marble')

  // Create
  event.stonecutting(item.of('create:limestone', 1), 'quark:limestone')

  // Quark
  event.stonecutting(item.of('quark:chiseled_limestone_bricks', 1), 'quark:limestone')
  event.stonecutting(item.of('quark:limestone_bricks', 1), 'quark:limestone')
  event.stonecutting(item.of('quark:limestone_pavement', 1), 'quark:limestone')
  event.stonecutting(item.of('quark:limestone_pillar', 1), 'quark:limestone')
  event.stonecutting(item.of('quark:limestone_slab', 2), 'quark:limestone')
  event.stonecutting(item.of('quark:limestone_speleothem', 2), 'quark:limestone')
  event.stonecutting(item.of('quark:limestone_stairs', 1), 'quark:limestone')
  event.stonecutting(item.of('quark:limestone_wall', 1), 'quark:limestone')
  event.stonecutting(item.of('quark:polished_limestone', 1), 'quark:limestone')
  event.stonecutting(item.of('quark:polished_limestone_slab', 2), 'quark:limestone')
  event.stonecutting(item.of('quark:polished_limestone_stairs', 1), 'quark:limestone')
  event.stonecutting(item.of('quark:limestone', 1), 'create:limestone')
  event.stonecutting(item.of('quark:marble', 1), 'astralsorcery:marble_raw')

  // Stone
  event.stonecutting(item.of('absentbydesign:wall_stone', 1), 'minecraft:stone')

  // Smooth Stone
  event.stonecutting(item.of('absentbydesign:wall_stone_slab', 1), 'minecraft:smooth_stone')
  event.stonecutting(item.of('absentbydesign:stairs_smooth_stone', 1), 'minecraft:smooth_stone')

  // Chiseled Stone Bricks
  event.stonecutting(item.of('absentbydesign:wall_stonebrick_carved', 1), 'minecraft:chiseled_stone_bricks')

  // Cracked Stone Bricks
  event.stonecutting(item.of('absentbydesign:wall_stonebrick_cracked', 1), 'minecraft:cracked_stone_bricks')
  event.stonecutting(item.of('absentbydesign:slab_bricks_cracked', 2), 'minecraft:cracked_stone_bricks')
  event.stonecutting(item.of('absentbydesign:stairs_bricks_cracked', 1), 'minecraft:cracked_stone_bricks')

  // Netherrack
  event.stonecutting(item.of('absentbydesign:slab_netherrack', 2), 'minecraft:netherrack')
  event.stonecutting(item.of('absentbydesign:stairs_netherrack', 1), 'minecraft:netherrack')

  // Prismarine Bricks
  event.stonecutting(item.of('absentbydesign:wall_prismarine_bricks', 1), 'minecraft:prismarine_bricks')

  // Dark Prismarine
  event.stonecutting(item.of('absentbydesign:wall_dark_prismarine', 1), 'minecraft:dark_prismarine')

  // Polished Andesite
  event.stonecutting(item.of('absentbydesign:wall_andesite_smooth', 1), 'minecraft:polished_andesite')

  // Polished Diorite
  event.stonecutting(item.of('absentbydesign:wall_diorite_smooth', 1), 'minecraft:polished_diorite')

  // Polished Granite
  event.stonecutting(item.of('absentbydesign:wall_granite_smooth', 1), 'minecraft:polished_granite')

  // End Stone
  event.stonecutting(item.of('absentbydesign:wall_end_stone', 1), 'minecraft:end_stone')
  event.stonecutting(item.of('absentbydesign:slab_end_stone', 2), 'minecraft:end_stone')
  event.stonecutting(item.of('absentbydesign:stairs_end_stone', 1), 'minecraft:end_stone')

  // End Stone Brick
  event.stonecutting(item.of('absentbydesign:gate_end_stone_bricks', 2), 'minecraft:end_stone_bricks')

  // Purpur Block
  event.stonecutting(item.of('absentbydesign:wall_purpur', 1), 'minecraft:purpur_block')

  // Quartz
  event.stonecutting(item.of('absentbydesign:wall_quartz', 1), 'minecraft:quartz_block')

  // Quartz Brick
  event.stonecutting(item.of('absentbydesign:wall_quartz_bricks', 1), 'minecraft:quartz_bricks')
  event.stonecutting(item.of('absentbydesign:slab_quartz_bricks', 2), 'minecraft:quartz_bricks')
  event.stonecutting(item.of('absentbydesign:stairs_quartz_bricks', 1), 'minecraft:quartz_bricks')

  // Smooth Red Sandstone
  event.stonecutting(item.of('absentbydesign:wall_sandstone_red_smooth', 1), 'minecraft:smooth_red_sandstone')

  // Smooth Sandstone
  event.stonecutting(item.of('absentbydesign:wall_sandstone_smooth', 1), 'minecraft:smooth_sandstone')

  // Obsidian
  event.stonecutting(item.of('absentbydesign:wall_obsidian', 1), 'minecraft:obsidian')
  event.stonecutting(item.of('absentbydesign:slab_obsidian', 2), 'minecraft:obsidian')
  event.stonecutting(item.of('absentbydesign:stairs_obsidian', 1), 'minecraft:obsidian')

  // Crying Obsidian
  event.stonecutting(item.of('absentbydesign:wall_crying_obsidian', 1), 'minecraft:crying_obsidian')
  event.stonecutting(item.of('absentbydesign:slab_crying_obsidian', 2), 'minecraft:crying_obsidian')
  event.stonecutting(item.of('absentbydesign:stairs_crying_obsidian', 1), 'minecraft:crying_obsidian')

  // Basalt
  event.stonecutting(item.of('absentbydesign:wall_basalt', 1), 'minecraft:basalt')
  event.stonecutting(item.of('absentbydesign:slab_basalt', 2), 'minecraft:basalt')
  event.stonecutting(item.of('absentbydesign:stairs_basalt', 1), 'minecraft:basalt')

  // Polished Basalt
  event.stonecutting(item.of('absentbydesign:wall_polished_basalt', 1), 'minecraft:polished_basalt')
  event.stonecutting(item.of('absentbydesign:slab_polished_basalt', 2), 'minecraft:polished_basalt')
  event.stonecutting(item.of('absentbydesign:stairs_polished_basalt', 1), 'minecraft:polished_basalt')

  // Lodestone
  event.stonecutting(item.of('absentbydesign:wall_lodestone', 1), 'minecraft:lodestone')
  event.stonecutting(item.of('absentbydesign:slab_lodestone', 2), 'minecraft:lodestone')
  event.stonecutting(item.of('absentbydesign:stairs_lodestone', 1), 'minecraft:lodestone')
})
