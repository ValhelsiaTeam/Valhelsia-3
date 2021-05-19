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

  // Environmental
  // Allow Cattail Thatch to be crafted from BoP Cattail too.
  event.shaped(Item.of('environmental:cattail_thatch', 4), [
    'CC',
    'CC'
  ], {
    C: 'biomesoplenty:cattail'
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

  // Valhelsia
  // For players who have lost their starting tome.
  event.shaped({item: 'akashictome:tome', nbt: {"akashictome:is_morphing":true,"akashictome:data":{industrialforegoing:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Industrial Foregoing's Manual"},"patchouli:book":"industrialforegoing:industrial_foregoing","akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Industrial Foregoing\'s Manual"}]}'}}},powah:{id:"powah:book",Count:1,tag:{"akashictome:displayName":{text:"Manual (Powah!)"},"akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Manual (Powah!)"}]}'}}},botania:{id:"botania:lexicon",Count:1,tag:{"akashictome:displayName":{text:"Lexica Botania"},"akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Lexica Botania"}]}'}}},mysticalworld:{id:"mysticalworld:encyclopedia",Count:1,tag:{"akashictome:displayName":{text:"Encyclopædia Mysticum"},"akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Encyclopædia Mysticum"}]}'}}},astralsorcery:{id:"astralsorcery:tome",Count:1,tag:{"akashictome:displayName":{text:"Astral Tome"},"akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Astral Tome"}]}'}}},immersiveengineering:{id:"immersiveengineering:manual",Count:1,tag:{"akashictome:displayName":{text:"Engineer's Manual"},"akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Manual"}]}'}}},psi:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Encyclopaedia Psionica"},"patchouli:book":"psi:encyclopaedia_psionica","akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Encyclopaedia Psionica"}]}'}}},alexsmobs:{id:"alexsmobs:animal_dictionary",Count:1,tag:{"akashictome:displayName":{text:"Animal Dictionary"},"akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Animal Dictionary"}]}'}}},bloodmagic:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Sanguine Scientiem"},"patchouli:book":"bloodmagic:guide","akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Sanguine Scientiem"}]}'}}},eidolon:{id:"eidolon:codex",Count:1,tag:{"akashictome:displayName":{text:"Ars Ecclesia"},"akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Ars Ecclesia"}]}'}}},transport:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Advanced Transport"},"patchouli:book":"transport:guide","akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Advanced Transport"}]}'}}},engineersdecor:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Engineer's Decor"},"patchouli:book":"engineersdecor:engineersdecor_manual","akashictome:is_morphing":true,display:{Name:'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\'s Decor"}]}'}}}}}}, [
    ' S ',
    'SBS',
    ' S ',
  ], {
    S: '#forge:bookshelves',
    B: 'minecraft:book'
  })

})
