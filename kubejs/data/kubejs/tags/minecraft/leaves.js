events.listen('item.tags', function (event) {

  event.get('minecraft:leaves').remove('minecraft:brown_mushroom_block')

  event.get('minecraft:leaves').remove('minecraft:red_mushroom_block')
})
