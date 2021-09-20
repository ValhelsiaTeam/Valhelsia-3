// priority: 15

events.listen('recipes', function (event) {

  // Arcane Gold 
  event.replaceInput({}, 'eidolon:arcane_gold_nugget', '#forge:nuggets/arcane_gold')
  event.replaceInput({}, 'forbidden_arcanus:arcane_gold_nugget', '#forge:nuggets/arcane_gold')
  event.replaceInput({}, 'eidolon:arcane_gold_ingot', '#forge:ingots/arcane_gold')
  event.replaceInput({}, 'forbidden_arcanus:arcane_gold_ingot', '#forge:ingots/arcane_gold')

  // Replace slime balls with the slime tag to allow any type of slime to be used.
  event.replaceInput({}, 'minecraft:slime_ball', '#forge:slimeballs')

  // Allow Mekanism's Obsidian Dust to be used to make Chromatic Compound.
  event.replaceInput({}, 'create:powdered_obsidian', '#forge:dusts/obsidian')

  // Dragon Scale
  event.replaceInput({}, 'forbidden_arcanus:dragon_scale', '#forge:dragon_scales')
  event.replaceInput({}, 'quark:dragon_scale', '#forge:dragon_scales')

  // Prevent recipes from using Ender Chests or Personal Chests when they don't need to.
  event.replaceInput({}, '#forge:chests', '#forge:chests/wooden')

  // Allow Bone Piles to be made with any bones.
  event.replaceInput({output:'valhelsia_structures:bone_pile'}, 'minecraft:bone', '#forge:bones')

  // Allow any feathers or sticks to be used to craft arrows:
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:stick', '#forge:rods/wooden')

  // Misc Compatibility:
  event.replaceInput({}, 'blue_skies:cherry', '#forge:fruits/cherry')
  event.replaceInput({}, 'environmental:cherry', '#forge:fruits/cherry')
  event.replaceInput({}, 'minecraft:wheat', '#forge:grain/wheat')
  event.replaceInput({}, 'abundance:lavender', '#valhelsia:flowers/lavender')
  event.replaceInput({}, 'biomesoplenty:lavender', '#valhelsia:flowers/lavender')
  event.replaceInput({}, 'druidcraft:lavender', '#valhelsia:flowers/lavender')

  // Specific Item Compatibility:
  event.replaceInput({output:'minecraft:writable_book'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'xercamusic:music_sheet'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'botania:tornado_rod'}, 'minecraft:feather', '#forge:feathers')
  event.replaceInput({output:'botania:flight_tiara'}, 'minecraft:feather', '#forge:feathers')
  //event.replaceInput({output:'patchouli:guide_book'}, 'minecraft:feather', '#forge:feathers') // Doesn't work, presumably due to NBT data.
})