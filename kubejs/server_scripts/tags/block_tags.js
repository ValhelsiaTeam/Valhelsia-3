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

  // Sandstone Tags
  var aridSandstones = [
    'atmospheric:arid_sandstone',
    'atmospheric:smooth_arid_sandstone',
    'atmospheric:cut_arid_sandstone',
    'atmospheric:chiseled_arid_sandstone',
    'atmospheric:arid_sandstone_bricks'
  ]

  event.get('forge:sandstone/arid')
       .add(aridSandstones)

  var redAridSandstones = [
    'atmospheric:red_arid_sandstone',
    'atmospheric:smooth_red_arid_sandstone',
    'atmospheric:cut_red_arid_sandstone',
    'atmospheric:chiseled_red_arid_sandstone',
    'atmospheric:red_arid_sandstone_bricks'
  ]

  event.get('forge:sandstone/red_arid')
       .add(redAridSandstones)

  var orangeSandstones = [
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:cut_orange_sandstone',
    'biomesoplenty:chiseled_orange_sandstone'
  ]

  event.get('forge:sandstone/orange')
       .add(orangeSandstones)

  var whiteSandstones = [
    'biomesoplenty:white_sandstone',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:cut_white_sandstone',
    'biomesoplenty:chiseled_white_sandstone'
  ]

  event.get('forge:sandstone/white')
       .add(whiteSandstones)

  var blackSandstones = [
    'biomesoplenty:black_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'biomesoplenty:cut_black_sandstone',
    'biomesoplenty:chiseled_black_sandstone'
  ]

  event.get('forge:sandstone/black')
       .add(blackSandstones)

  var soulSandstones = [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone'
  ]

  event.get('forge:sandstone/soul')
       .add(soulSandstones)

     
  var soullessSandstones = [
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone'
  ]

  event.get('forge:sandstone/soulless')
       .add(soullessSandstones)

  event.add('forge:sandstone/colorless', 'quark:sandstone_bricks')
  event.add('forge:sandstone/red', 'quark:red_sandstone_bricks')
})