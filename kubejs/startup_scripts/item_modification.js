// priority: 15

//             _ _          _     _         _____ 
// /\   /\__ _| | |__   ___| |___(_) __ _  |___ / 
// \ \ / / _` | | '_ \ / _ \ / __| |/ _` |   |_ \ 
//  \ V / (_| | | | | |  __/ \__ \ | (_| |  ___) |
//   \_/ \__,_|_|_| |_|\___|_|___/_|\__,_| |____/ 
//

onEvent('item.modification', event => {
  event.modify('mekanism:sawdust', item => {item.burnTime = 100});
  event.modify('jaopca:storage_blocks.wood', item => {item.burnTime = 900});
});