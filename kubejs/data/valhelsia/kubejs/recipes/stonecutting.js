events.listen('recipes', function (event) {

  //Quark
  event.stonecutting(item.of('create:limestone', 1), 'quark:limestone')
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
  event.stonecutting(item.of('quark:marble', 1), 'astralsorcery:marble_raw')

  //Create
  event.stonecutting(item.of('quark:limestone', 1), 'create:limestone')

  //Astral Sorcery
  event.stonecutting(item.of('astralsorcery:marble_raw', 1), 'quark:marble')
})
