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
  event.shaped(item.of('minecraft:chainmail_helmet', 1), [
    'AAA',
    'A A'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped(item.of('minecraft:chainmail_chestplate', 1), [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped(item.of('minecraft:chainmail_leggings', 1), [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped(item.of('minecraft:chainmail_boots', 1), [
    'A A',
    'A A'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
})
