events.listen('recipes', function (event) {

  event.shaped(item.of('decorative_blocks:chain', 2), [
    'A',
    'B',
    'A'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_nugget'
  })
  event.shaped(item.of('minecraft:chest', 1), [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: 'minecraft:oak_planks'
  })
})
