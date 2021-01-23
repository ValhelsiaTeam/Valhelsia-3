onEvent('block.tags', event => {

  // Additional blocks that can be used to build a conduit frame.
  var supportsConduit = [
    'minecraft:prismarine_bricks',
    'absentbydesign:wall_prismarine_bricks',
    'absentbydesign:gate_prismarine_brick',
    'quark:elder_prismarine',
    'quark:elder_prismarine_slab',
    'quark:elder_prismarine_stairs',
    'quark:elder_prismarine_wall',
    'quark:elder_prismarine_bricks',
    'quark:elder_prismarine_bricks_slab',
    'quark:elder_prismarine_bricks_stairs',
    'quark:dark_elder_prismarine',
    'quark:dark_elder_prismarine_slab',
    'quark:dark_elder_prismarine_stairs',
    'quark:dark_prismarine_vertical_slab',
    'quark:prismarine_vertical_slab',
    'quark:prismarine_brick_vertical_slab',
    'quark:elder_prismarine_vertical_slab',
    'quark:elder_prismarine_bricks_vertical_slab',
    'quark:dark_elder_prismarine_vertical_slab',
    'upgrade_aquatic:luminous_prismarine',
    'upgrade_aquatic:luminous_prismarine_stairs',
    'upgrade_aquatic:luminous_prismarine_slab',
    'upgrade_aquatic:luminous_prismarine_vertical_slab',
    'upgrade_aquatic:luminous_elder_prismarine',
    'upgrade_aquatic:luminous_elder_prismarine_stairs',
    'upgrade_aquatic:luminous_elder_prismarine_slab',
    'upgrade_aquatic:luminous_elder_prismarine_vertical_slab',
    'upgrade_aquatic:chiseled_prismarine_coralstone',
    'upgrade_aquatic:prismarine_coralstone_slab',
    'upgrade_aquatic:prismarine_coralstone_stairs',
    'upgrade_aquatic:prismarine_coralstone_wall',
    'upgrade_aquatic:prismarine_coralstone_vertical_slab',
    'upgrade_aquatic:chiseled_elder_prismarine_coralstone',
    'upgrade_aquatic:elder_prismarine_coralstone_slab',
    'upgrade_aquatic:elder_prismarine_coralstone_stairs',
    'upgrade_aquatic:elder_prismarine_coralstone_wall',
    'upgrade_aquatic:elder_prismarine_coralstone_vertical_slab'
  ]

  event.get('forge:supports_conduit').add(supportsConduit)

  // Missing Stair Tags
  var woodenStairs = [
    'astralsorcery:infused_wood_stairs'
  ]

  var stoneStairs = [
    'astralsorcery:marble_stairs',
    'astralsorcery:black_marble_stairs'
  ]

  event.get('minecraft:stairs')
       .add(woodenStairs)
       .add(stoneStairs)

  // Missing Slab Tags
  var woodenSlabs = [
    'astralsorcery:infused_wood_slab'
  ]

  var stoneSlabs = [
    'astralsorcery:marble_slab',
    'astralsorcery:black_marble_slab'
  ]

  event.get('minecraft:slabs')
       .add(woodenSlabs)
       .add(stoneSlabs)

  event.get('minecraft:wooden_slabs')
       .add(woodenSlabs)
})