// priority: 15
onEvent('item.modification', event => {
  event.modify('mekanism:sawdust', item => {item.burnTime = 100})
  event.modify('jaopca:storage_blocks.wood', item => {item.burnTime = 900})
})