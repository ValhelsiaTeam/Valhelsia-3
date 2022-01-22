// priority: 10

events.listen('recipes', function (event) {
  // Astral Sorcery
  event.stonecutting(item.of('astralsorcery:marble_raw', 1), 'quark:marble')
  
  // BetterEnd
  const betterEndStoneTypes = [
    'flavolite',
    'violecite',
    'sulphuric_rock' // spelled "Sulfuric" in display names
  ]
  betterEndStoneTypes.forEach(function(element) {
    event.stonecutting(item.of(`betterendforge:${element}_polished`, 1), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_tiles`, 1), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_pillar`, 1), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_stairs`, 1), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_slab`, 2), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_wall`, 1), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_button`, 1), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_bricks`, 1), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_bricks_stairs`, 1), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_bricks_slab`, 2), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_bricks_wall`, 1), `betterendforge:${element}`)
    event.stonecutting(item.of(`betterendforge:${element}_bricks_stairs`, 1), `betterendforge:${element}_bricks`)
    event.stonecutting(item.of(`betterendforge:${element}_bricks_slab`, 2), `betterendforge:${element}_bricks`)
    event.stonecutting(item.of(`betterendforge:${element}_bricks_wall`, 1), `betterendforge:${element}_bricks`)
  })
  event.stonecutting(item.of('betterendforge:brimstone', 1), 'quark:brimstone')

  // Create
  event.stonecutting(item.of('create:limestone', 1), 'quark:limestone')

  // Quark
  event.stonecutting(item.of('quark:brimstone', 1), 'betterendforge:brimstone')
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

  // Sandstone
  event.stonecutting('darkerdepths:cobbled_sandstone', 'minecraft:sandstone')

})
