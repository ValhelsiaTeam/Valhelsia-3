onEvent('item.tags', event => {
  // Allows Autumnity snail slime to be used in a few recipes.
  event.add('forge:slime', 'autumnity:snail_slime')
  event.add('forge:slimeballs', 'autumnity:snail_slime')
  event.add('forge:storageblocks/slime', 'autumnity:snail_slime_block')

  // Farmer's Delight Knife Compat
  var knives = [
    'mysticalworld:amethyst_knife',
    'mysticalworld:cactus_knife',
    'mysticalworld:copper_knife',
    'mysticalworld:lead_knife',
    'mysticalworld:quicksilver_knife',
    'mysticalworld:silver_knife',
    'mysticalworld:tin_knife',
    'mysticalworld:stone_knife',
    'mysticalworld:wood_knife',
    'mysticalworld:diamond_knife',
    'mysticalworld:gold_knife',
    'mysticalworld:iron_knife'
  ]

  event.get('farmersdelight:tools/knives').add(knives)
  event.get('forge:tools/knives').add(knives)

  // Missing #forge:seed item tags.
  var seeds = [
    'mysticalworld:aubergine_seeds'
  ]
  event.get('forge:seeds').add(seeds)

  // Missing #forge:sapling item tags.
  var saplings = [
    'quark:yellow_blossom_sapling',
    'quark:lavender_blossom_sapling',
    'quark:pink_blossom_sapling',
    'quark:blue_blossom_sapling',
    'quark:orange_blossom_sapling',
    'quark:red_blossom_sapling',
    'autumnity:red_maple_sapling',
    'autumnity:orange_maple_sapling',
    'autumnity:yellow_maple_sapling',
    'autumnity:maple_sapling',
    'upgrade_aquatic:river_sapling',
    'atmospheric:rosewood_sapling',
    'atmospheric:morado_sapling',
    'atmospheric:yucca_sapling',
    'atmospheric:kousa_sapling',
    'atmospheric:aspen_sapling',
    'atmospheric:grimwood_sapling',
    'biomesoplenty:origin_sapling',
    'biomesoplenty:flowering_oak_sapling',
    'biomesoplenty:rainbow_birch_sapling',
    'biomesoplenty:yellow_autumn_sapling',
    'biomesoplenty:orange_autumn_sapling',
    'biomesoplenty:maple_sapling',
    'biomesoplenty:fir_sapling',
    'biomesoplenty:redwood_sapling',
    'biomesoplenty:white_cherry_sapling',
    'biomesoplenty:pink_cherry_sapling',
    'biomesoplenty:mahogany_sapling',
    'biomesoplenty:jacaranda_sapling',
    'biomesoplenty:palm_sapling',
    'biomesoplenty:willow_sapling',
    'biomesoplenty:dead_sapling',
    'biomesoplenty:magic_sapling',
    'biomesoplenty:umbran_sapling',
    'biomesoplenty:hellbark_sapling',
    'druidcraft:darkwood_sapling',
    'druidcraft:elder_sapling',
    'forbidden_arcanus:cherrywood_sapling',
    'forbidden_arcanus:mysterywood_sapling'
  ]
  event.get('forge:sapling').add(saplings)
  
  // Misc Missing Tags
  event.add('forge:seeds/aubergine', 'mysticalworld:aubergine_seeds')
})