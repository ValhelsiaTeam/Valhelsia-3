events.listen('recipes', function (event) {
    // Temporary fix to allow players to convert between Mekanism and Eidolon Lead Ingots, since Eidolon has hard-coded its own Lead Ingots into some recipes.
    event.shapeless(Item.of('eidolon:lead_ingot', 1), 'mekanism:ingot_lead')
    event.shapeless(Item.of('mekanism:ingot_lead', 1), 'eidolon:lead_ingot')
})