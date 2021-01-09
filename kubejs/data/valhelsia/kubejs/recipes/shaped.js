events.listen('recipes', function (event) {

  //Minecarft
  event.shaped(item.of('minecraft:bookshelf', 1), [
    'AAA',
    'BBB',
    'AAA'
  ], {
    A: '#minecraft:planks',
    B: 'minecraft:book'
  })
  event.shaped(item.of('minecraft:chest', 1), [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: '#minecraft:planks'
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
  event.shaped(item.of('minecraft:chainmail_helmet', 1), [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped(item.of('minecraft:chainmail_chestplate', 1), [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped(item.of('minecraft:chainmail_leggings', 1), [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped(item.of('minecraft:chainmail_boots', 1), [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })

  //Decorative Blocks
  event.shaped(item.of('decorative_blocks:chain', 2), [
    'A',
    'B',
    'A'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_nugget'
  })

  //Powah
  event.shaped(item.of('powah:uraninite_raw_poor', 1), [
    'A'
  ], {
    A: 'mekanism:ingot_uranium'
  })

  //Immersive Engineering
  event.shaped(item.of('immersiveengineering:treated_wood_horizontal', 8), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: '#minecraft:planks',
    B: 'immersiveengineering:creosote_bucket'
  })

  event.shaped(item.of('immersiveengineering:ingot_silver', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: '#forge:nuggets/silver'
  })

  //Quark
  event.shaped(item.of('quark:ravager_hide', 1), [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:rabbit_hide',
    B: 'forbidden_arcanus:rotten_leather',
    C: 'quark:bonded_leather'
  })
  
})
