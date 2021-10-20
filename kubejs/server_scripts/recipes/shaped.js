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
  event.shaped(Item.of('minecraft:ladder', 4), [
    'A A',
    'ABA',
    'A A'
  ], {
    A: '#forge:rods/wooden',
    B: '#minecraft:planks'
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

  // Adding this back in as it gets removed earlier in the loading process.
  event.shaped(Item.of('minecraft:slime_block', 1), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:slime_ball'
  })

  // Abundance
  // Adding this back in as it gets removed earlier in the loading process.
  event.shaped(Item.of('abundance:lavender_basket', 1), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'abundance:lavender'
  })

  // Bayou Blues
  // Replacement for a currently broken recipe (remove me if Team Aurora accepts the PR).
  event.shaped(Item.of('bayou_blues:gooseberry_jam_cookie', 8), [
    'AB',
    'B '
  ], {
    A: 'bayou_blues:gooseberry_jam',
    B: '#forge:crops/wheat'
  })

  // Botania
  event.shaped(Item.of('botania:ender_hand', 1), [
    'PLO',
    'LEL',
    'OL '
  ], {
    P: 'botania:mana_pearl',
    E: '#forge:chests/ender',
    L: 'minecraft:leather',
    O: '#forge:obsidian'
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

  // Farmer's Delight
  event.shaped('farmersdelight:organic_compost', [
    'CCC',
    'CCC',
    'CCC'
  ], {
    C: 'minecolonies:compost'
  })

  // Immersive Engineering
  /* May be no longer needed - testing.
  event.shaped(Item.of('immersiveengineering:treated_wood_horizontal', 8), [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: '#minecraft:planks',
    B: 'immersiveengineering:creosote_bucket'
  })
  */

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

  event.shaped(Item.of('immersiveengineering:storage_uranium', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: '#forge:ingots/uranium'
  })

  event.shaped(Item.of('immersiveengineering:storage_steel', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: '#forge:ingots/steel'
  })

  event.shaped(Item.of('immersiveengineering:storage_copper', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: '#forge:ingots/copper'
  })

  event.shaped(Item.of('immersiveengineering:storage_lead', 1), [
    'SSS',
    'SSS',
    'SSS'
  ], {
    S: '#forge:ingots/lead'
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

  // Adding this back in (removed earlier in the loading process).
  event.shaped(Item.of('industrialforegoing:black_hole_controller', 1), [
    'PGP',
    'NEN',
    'PMP'
  ], {
    P: '#forge:plastic',
    G: '#forge:gears/diamond',
    N: 'minecraft:ender_eye',
    E: '#forge:chests/ender',
    M: '#industrialforegoing:machine_frame/supreme'
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
  event.shaped(Item.of('akashictome:tome', {"akashictome:is_morphing":1,"akashictome:data":{industrialforegoing:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Industrial Foregoing's Manual"},"patchouli:book":"industrialforegoing:industrial_foregoing","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Industrial Foregoing's Manual\"}]}"}}},powah:{id:"powah:book",Count:1,tag:{"akashictome:displayName":{text:"Manual (Powah!)"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Manual (Powah!)\"}]}"}}},astralsorcery:{id:"astralsorcery:tome",Count:1,tag:{"akashictome:displayName":{text:"Astral Tome"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Astral Tome\"}]}"}}},immersiveengineering:{id:"immersiveengineering:manual",Count:1,tag:{"akashictome:displayName":{text:"Engineer's Manual"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Engineer's Manual\"}]}"}}},psi:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Encyclopaedia Psionica"},"patchouli:book":"psi:encyclopaedia_psionica","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Encyclopaedia Psionica\"}]}"}}},alexsmobs:{id:"alexsmobs:animal_dictionary",Count:1,tag:{"akashictome:displayName":{text:"Animal Dictionary"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Animal Dictionary\"}]}"}}},advancedperipherals:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Advanced Peripherals"},"patchouli:book":"advancedperipherals:manual","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Advanced Peripherals\"}]}"}}},eidolon:{id:"eidolon:codex",Count:1,tag:{"akashictome:displayName":{text:"Ars Ecclesia"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Ars Ecclesia\"}]}"}}},transport:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Advanced Transport"},"patchouli:book":"transport:guide","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Advanced Transport\"}]}"}}},engineersdecor:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Engineer's Decor"},"patchouli:book":"engineersdecor:engineersdecor_manual","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Engineer's Decor\"}]}"}}},botania:{id:"botania:lexicon",Count:1,tag:{"akashictome:displayName":{text:"Lexica Botania"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Lexica Botania\"}]}"}}},mysticalworld:{id:"mysticalworld:encyclopedia",Count:1,tag:{"akashictome:displayName":{text:"Encyclopædia Mysticum"},"akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Encyclopædia Mysticum\"}]}"}}},bloodmagic:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Sanguine Scientiem"},"patchouli:book":"bloodmagic:guide","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Sanguine Scientiem\"}]}"}}},twilightforest:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Traveller's Logbook [WIP]"},"patchouli:book":"twilightforest:guide","akashictome:is_morphing":1,display:{Name:"{\"translate\":\"akashictome.sudo_name\",\"with\":[{\"color\":\"green\",\"text\":\"Traveller's Logbook [WIP]\"}]}"}}}}}), [
    ' S ',
    'SBS',
    ' S ',
  ], {
    S: '#forge:bookshelves',
    B: 'minecraft:book'
  })
})
