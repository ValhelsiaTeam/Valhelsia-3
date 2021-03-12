// priority: 90
onEvent('block.tags', event => {
  // Temporary change until Neapolitan improves their Creeper Repellent Code - causes a lot of lag currently.
  event.removeAll('neapolitan:creeper_repellents')
})