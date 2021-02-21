// priority: 15

events.listen('recipes', function (event) {

  // Arcane Gold 
  event.replaceInput({}, 'eidolon:arcane_gold_nugget', '#forge:nuggets/arcane_gold')
  event.replaceInput({}, 'forbidden_arcanus:arcane_gold_nugget', '#forge:nuggets/arcane_gold')
  event.replaceInput({}, 'eidolon:arcane_gold_ingot', '#forge:ingots/arcane_gold')
  event.replaceInput({}, 'forbidden_arcanus:arcane_gold_ingot', '#forge:ingots/arcane_gold')

  // Replace slime balls with the slime tag to allow any type of slime to be used.
  event.replaceInput({}, 'minecraft:slime_ball', '#forge:slimeballs')

})