// priority: 10

events.listen('recipes', function (event) {

  // Minecraft
  event.shaped(Item.of('minecraft:bookshelf', 1), [
    'AAA',
    'BBB',
    'AAA'
  ], {
    A: '#minecraft:planks',
    B: 'minecraft:book'
  })
  event.shaped(Item.of('minecraft:chest', 1), [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: '#minecraft:planks'
  })
  event.shaped(Item.of('minecraft:chainmail_helmet', 1), [
    'AAA',
    'A A'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped(Item.of('minecraft:chainmail_chestplate', 1), [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped(Item.of('minecraft:chainmail_leggings', 1), [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped(Item.of('minecraft:chainmail_boots', 1), [
    'A A',
    'A A'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped(Item.of('minecraft:chainmail_helmet', 1), [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped(Item.of('minecraft:chainmail_chestplate', 1), [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped(Item.of('minecraft:chainmail_leggings', 1), [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped(Item.of('minecraft:chainmail_boots', 1), [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })

  // Alternate recipe for Dark Prismarine: Uses any black dye instead of ink sacs.
  event.shaped(Item.of('minecraft:dark_prismarine', 1), [
    'SSS',
    'SBS',
    'SSS'
  ], {
    S: 'minecraft:prismarine_shard',
    B: '#forge:dyes/black'
  })

  event.shaped(Item.of('minecraft:slime_block', 1), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:slime_ball'
  })

  // Decorative Blocks
  event.shaped(Item.of('decorative_blocks:chain', 2), [
    'A',
    'B',
    'A'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_nugget'
  })

  event.shaped(Item.of('decorative_blocks:rocky_dirt', 4), [
    'AB',
    'BA'
  ], {
    A: 'minecraft:dirt',
    B: 'minecraft:cobblestone'
  })

  // Druidcraft
  event.shaped(Item.of('druidcraft:rope', 1), [
    'AAA'
  ], {
    A: '#forge:fiber_hemp'
  })

  // Immersive Engineering
  event.shaped(Item.of('immersiveengineering:treated_wood_horizontal', 8), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: '#minecraft:planks',
    B: 'immersiveengineering:creosote_bucket'
  })

  event.shaped(Item.of('immersiveengineering:ingot_silver', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: '#forge:nuggets/silver'
  })
  
  event.shaped(Item.of('immersiveengineering:storage_silver', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: '#forge:ingots/silver'
  })

  // Industrial Foregoing
  // Note: This deliberately can't be turned back into pink slime, to prevent avoiding gating.
  event.shaped(Item.of('quark:magenta_slime_block', 1), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'industrialforegoing:pink_slime'
  })

  // Mystical World
  event.shaped(Item.of('mysticalworld:silver_block', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: '#forge:ingots/silver'
  })

  // Powah!
  event.shaped(Item.of('powah:uraninite', 1), [
    'NN',
    'NN'
  ], {
    N: 'mekanism:nugget_uranium'
  })

  // Quark
  event.shaped(Item.of('quark:ravager_hide', 1), [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:rabbit_hide',
    B: 'forbidden_arcanus:rotten_leather',
    C: 'quark:bonded_leather'
  })

})
