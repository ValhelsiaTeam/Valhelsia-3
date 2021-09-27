// priority: 15

events.listen('recipes', function (event) {
  // Prevent recipes from using Ender Chests or Personal Chests when they don't need to.
  event.replaceInput({}, '#forge:chests', '#forge:chests/wooden')

  // Replace specific item inputs with tags for all recipes that use them.
  event.replaceInput({}, 'eidolon:arcane_gold_nugget', '#forge:nuggets/arcane_gold')
  event.replaceInput({}, 'forbidden_arcanus:arcane_gold_nugget', '#forge:nuggets/arcane_gold')
  event.replaceInput({}, 'eidolon:arcane_gold_ingot', '#forge:ingots/arcane_gold')
  event.replaceInput({}, 'forbidden_arcanus:arcane_gold_ingot', '#forge:ingots/arcane_gold')
  event.replaceInput({}, 'minecraft:slime_ball', '#forge:slimeballs')
  event.replaceInput({}, 'blue_skies:cherry', '#forge:fruits/cherry')
  event.replaceInput({}, 'environmental:cherry', '#forge:fruits/cherry')
  event.replaceInput({}, 'minecraft:wheat', '#forge:grain/wheat')
  event.replaceInput({}, 'abundance:lavender', '#valhelsia:flowers/lavender')
  event.replaceInput({}, 'biomesoplenty:lavender', '#valhelsia:flowers/lavender')
  event.replaceInput({}, 'druidcraft:lavender', '#valhelsia:flowers/lavender')
  event.replaceInput({}, 'forbidden_arcanus:dragon_scale', '#forge:dragon_scales')
  event.replaceInput({}, 'quark:dragon_scale', '#forge:dragon_scales')
  event.replaceInput({}, 'create:powdered_obsidian', '#forge:dusts/obsidian')

  // Replace specific item inputs with tags for any outputs that match the tag.
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:stick', '#forge:rods/wooden')

  // Replace specific item inputs with tags for specific item outputs.
  event.replaceInput({output:'minecraft:writable_book'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'xercamusic:music_sheet'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'botania:tornado_rod'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'botania:flight_tiara'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'betterendforge:end_stone_smelter'}, '#betterendforge:furnaces', '#forge:furnace')
  event.replaceInput({output:'valhelsia_structures:bone_pile'}, 'minecraft:bone', '#forge:bones')
  //event.replaceInput({output:'patchouli:guide_book'}, 'minecraft:feather', '#forge:feathers') // Doesn't work, presumably due to NBT data.
})