// priority: 15

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('recipes', event => {
  let replaceInput = (from, to) => {
    event.replaceInput({}, from, to, true)
  }

  // Prevent recipes from using Ender Chests or Personal Chests when they don't need to.
  replaceInput('#forge:chests', '#forge:chests/wooden')

  // Replace specific item inputs with tags for all recipes that use them.
  replaceInput('eidolon:arcane_gold_nugget', '#forge:nuggets/arcane_gold')
  replaceInput('forbidden_arcanus:arcane_gold_nugget', '#forge:nuggets/arcane_gold')
  replaceInput('eidolon:arcane_gold_ingot', '#forge:ingots/arcane_gold')
  replaceInput('forbidden_arcanus:arcane_gold_ingot', '#forge:ingots/arcane_gold')
  replaceInput('darkerdepths:silver_ingot', '#forge:ingots/silver')
  replaceInput('minecraft:slime_ball', '#forge:slimeballs')
  replaceInput('blue_skies:cherry', '#forge:fruits/cherry')
  replaceInput('environmental:cherry', '#forge:fruits/cherry')
  replaceInput('minecraft:wheat', '#forge:grain/wheat')
  replaceInput('abundance:lavender', '#valhelsia:flowers/lavender')
  replaceInput('biomesoplenty:lavender', '#valhelsia:flowers/lavender')
  replaceInput('druidcraft:lavender', '#valhelsia:flowers/lavender')
  replaceInput('forbidden_arcanus:dragon_scale', '#forge:dragon_scales')
  replaceInput('quark:dragon_scale', '#forge:dragon_scales')
  replaceInput('create:powdered_obsidian', '#forge:dusts/obsidian')
  replaceInput('immersiveengineering:ore_silver', '#forge:ores/silver')
  replaceInput('minecraft:iron_ore', '#forge:ores/iron')
  replaceInput('minecraft:gold_ore', '#forge:ores/gold')

  // Replace specific item inputs by recipe type:
  event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:vine', '#valhelsia:vines/green', true)

  // Replace specific item inputs with tags for any outputs that match the tag.
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers', true)
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:stick', '#forge:rods/wooden', true)

  // Replace specific item inputs with tags for specific item outputs.
  event.replaceInput({output:'minecraft:writable_book'}, 'minecraft:feather', '#forge:feathers', true)
  event.replaceInput({output:'xercamusic:music_sheet'}, 'minecraft:feather', '#forge:feathers', true)
  event.replaceInput({output:'botania:tornado_rod'}, 'minecraft:feather', '#forge:feathers', true)
  event.replaceInput({output:'botania:flight_tiara'}, 'minecraft:feather', '#forge:feathers', true)
  event.replaceInput({output:'betterendforge:end_stone_smelter'}, '#betterendforge:furnaces', '#forge:furnace', true)
  event.replaceInput({output:'valhelsia_structures:bone_pile'}, 'minecraft:bone', '#forge:bones', true)
  event.replaceInput({output:'botania:vine_ball'}, 'minecraft:vine', '#valhelsia:vines/green', true)
  event.replaceInput({output:'botania:thorn_chakram'}, 'minecraft:vine', '#valhelsia:vines/green', true)
  event.replaceInput({output:'supplementaries:jar'}, 'minecraft:glass', '#forge:glass/colorless', true)
  //event.replaceInput({output:'patchouli:guide_book'}, 'minecraft:feather', '#forge:feathers') // Doesn't work, presumably due to NBT data.
});