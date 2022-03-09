// priority: 10

onEvent('recipes', event => {

  // To simplify creation of 2x2 and 3x3 storage recipes:
  let storage2x2 = (output, input) => {
    event.shaped(output, ['AA', 'AA'], {A: input})
  }

  let storage3x3 = (output, input) => {
    event.shaped(output, ['AAA', 'AAA', 'AAA'], {A: input})
  }

  // Minecraft
  event.shaped('minecraft:bookshelf', [
    'AAA',
    'BBB',
    'AAA'
  ], {
    A: '#minecraft:planks',
    B: 'minecraft:book'
  })
  event.shaped('minecraft:chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: '#minecraft:planks'
  })
  event.shaped('4x minecraft:ladder', [
    'A A',
    'ABA',
    'A A'
  ], {
    A: '#forge:rods/wooden',
    B: '#minecraft:planks'
  })
  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'forbidden_arcanus:iron_chain'
  })
  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })
  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  })

  // Alternate recipe for Dark Prismarine: Uses any black dye instead of ink sacs.
  event.shaped('minecraft:dark_prismarine', [
    'SSS',
    'SBS',
    'SSS'
  ], {
    S: 'minecraft:prismarine_shard',
    B: '#forge:dyes/black'
  })

  // Adding this back in as it gets removed earlier in the loading process.
  storage3x3('minecraft:slime_block', 'minecraft:slime_ball')

  // Abundance
  // Adding this back in as it gets removed earlier in the loading process.
  storage3x3('abundance:lavender_basket', 'abundance:lavender')

  // Alex's Mobs
  // Alternate Trident Recipe using Shark Teeth instead of Thrasher Teeth.
  event.shaped('minecraft:trident', [
    ' TT',
    ' RT',
    'R  '
  ], {
    T: 'alexsmobs:shark_tooth',
    R: '#forge:rods/prismarine'
  })

  // Aquaculture
  storage2x2('bayou_blues:algae_thatch', 'aquaculture:algae')

  // Bayou Blues
  // Replacement for a currently broken recipe (remove me if Team Aurora accepts the PR).
  event.shaped('8x bayou_blues:gooseberry_jam_cookie', [
    'AB',
    'B '
  ], {
    A: 'bayou_blues:gooseberry_jam',
    B: '#forge:crops/wheat'
  })

  // Botania

  // Decorative Blocks
  event.shaped('2x decorative_blocks:chain', [
    'A',
    'B',
    'A'
  ], {
    A: 'minecraft:iron_ingot',
    B: 'minecraft:iron_nugget'
  })

  event.shaped('4x decorative_blocks:rocky_dirt', [
    'AB',
    'BA'
  ], {
    A: 'minecraft:dirt',
    B: 'minecraft:cobblestone'
  })

  // Druidcraft
  event.shaped('druidcraft:rope', [
    'AAA'
  ], {
    A: '#forge:fiber_hemp'
  })

  // Environmental
  // Allow Cattail Thatch to be crafted from BoP Cattail too.
  storage2x2('4x environmental:cattail_thatch', 'biomesoplenty:cattail')

  // Farmer's Delight
  storage3x3('farmersdelight:organic_compost', 'minecolonies:compost')

  // Immersive Engineering
  storage3x3('immersiveengineering:ingot_silver', '#forge:nuggets/silver')
  storage3x3('immersiveengineering:storage_silver', '#forge:ingots/silver')
  storage3x3('immersiveengineering:storage_uranium', '#forge:ingots/uranium')
  storage3x3('immersiveengineering:storage_steel', '#forge:ingots/steel')
  storage3x3('immersiveengineering:storage_copper', '#forge:ingots/copper')
  storage3x3('immersiveengineering:storage_lead', '#forge:ingots/lead')

  // Industrial Foregoing
  // Note: This deliberately can't be turned back into pink slime, to prevent avoiding gating.
  storage3x3('quark:magenta_slime_block', 'industrialforegoing:pink_slime')

  // Mystical World
  storage3x3('mysticalworld:silver_block', '#forge:ingots/silver')

  // Powah!
  storage2x2('powah:uraninite', 'mekanism:nugget_uranium')

  // Quark
  event.shaped('quark:ravager_hide', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:rabbit_hide',
    B: 'forbidden_arcanus:rotten_leather',
    C: 'quark:bonded_leather'
  })

  // Supplementaries
  // TODO: Allow the sack to be created using materials other than flax.

  // Valhelsia
  // For players who have lost their starting tome.
  event.shaped(Item.of('akashictome:tome', akashicTomeNBT), [
    ' S ',
    'SBS',
    ' S ',
  ], {
    S: '#forge:bookshelves',
    B: 'minecraft:book'
  })
});
