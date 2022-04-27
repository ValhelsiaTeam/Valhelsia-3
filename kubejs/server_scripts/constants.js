// priority: 9001

const colors = [
  'white',
  'orange',
  'magenta',
  'light_blue',
  'yellow',
  'lime',
  'pink',
  'gray',
  'light_gray',
  'cyan',
  'purple',
  'blue',
  'brown',
  'green',
  'red',
  'black'
];

const akashicTomeNBT = '{"akashictome:is_morphing":1b,"akashictome:data":{industrialforegoing:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Industrial Foregoing\'s Manual"},"patchouli:book":"industrialforegoing:industrial_foregoing","akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Industrial Foregoing\\\'s Manual"}]}\'}}},powah:{id:"powah:book",Count:1,tag:{"akashictome:displayName":{text:"Manual (Powah!)"},"akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Manual (Powah!)"}]}\'}}},astralsorcery:{id:"astralsorcery:tome",Count:1,tag:{"akashictome:displayName":{text:"Astral Tome"},"akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Astral Tome"}]}\'}}},pneumaticcraft:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"PNC:R Manual"},"patchouli:book":"pneumaticcraft:book","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"PNC:R Manual"}]}\'}}},immersiveengineering:{id:"immersiveengineering:manual",Count:1,tag:{"akashictome:displayName":{text:"Engineer\'s Manual"},"akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\\\'s Manual"}]}\'}}},psi:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Encyclopaedia Psionica"},"patchouli:book":"psi:encyclopaedia_psionica","akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Encyclopaedia Psionica"}]}\'}}},alexsmobs:{id:"alexsmobs:animal_dictionary",Count:1,tag:{"akashictome:displayName":{text:"Animal Dictionary"},"akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Animal Dictionary"}]}\'}}},advancedperipherals:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Advanced Peripherals Manual"},"patchouli:book":"advancedperipherals:manual","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Advanced Peripherals Manual"}]}\'}}},eidolon:{id:"eidolon:codex",Count:1,tag:{"akashictome:displayName":{text:"Ars Ecclesia"},"akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Ars Ecclesia"}]}\'}}},transport:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Advanced Transport"},"patchouli:book":"transport:guide","akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Advanced Transport"}]}\'}}},littlelogistics:{id:"patchouli:guide_book",Count:1b,tag:{"akashictome:displayName":{text:"Little Logistics Guide"},"patchouli:book":"littlelogistics:guide","akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Little Logistics Guide"}]}\'}}},engineersdecor:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Engineer\'s Decor Manual"},"patchouli:book":"engineersdecor:engineersdecor_manual","akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Engineer\\\'s Decor Manual"}]}\'}}},botania:{id:"botania:lexicon",Count:1,tag:{"akashictome:displayName":{text:"Lexica Botania"},"akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Lexica Botania"}]}\'}}},mysticalworld:{id:"mysticalworld:encyclopedia",Count:1,tag:{"akashictome:displayName":{text:"Encyclopædia Mysticum"},"akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Encyclopædia Mysticum"}]}\'}}},bloodmagic:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Sanguine Scientiem"},"patchouli:book":"bloodmagic:guide","akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Sanguine Scientiem"}]}\'}}},twilightforest:{id:"patchouli:guide_book",Count:1,tag:{"akashictome:displayName":{text:"Traveller\'s Logbook"},"patchouli:book":"twilightforest:guide","akashictome:is_morphing":1,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","text":"Traveller\\\'s Logbook"}]}\'}}}}}';

// For Stonecutter Recipes
const BETTER_END_STONES = [
  'flavolite',
  'violecite',
  'sulphuric_rock' // spelled "Sulfuric" in display names
];

/**
 * For woodcutter + stonecutter recipes.
 */
const STRUCTURIZE_PATTERNS = ['plain', 'double_crossed', 'framed', 'side_framed', 'up_gated', 'down_gated', 'one_crossed_lr', 'one_crossed_rl', 'horizontal_plain', 'side_framed_horizontal']; 
const STRUCTURIZE_WOODS = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'warped', 'crimson', 'cactus'];
const STRUCTURIZE_WOODEN_MATERIALS = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'warped', 'crimson', 'cactus', 'paper'];
const STUCTURIZE_STONE_MATERIALS = ['terracotta', 'white_terracotta', 'orange_terracotta', 'magenta_terracotta', 'light_blue_terracotta', 'yellow_terracotta', 'lime_terracotta', 'pink_terracotta', 'gray_terracotta', 'light_gray_terracotta', 'cyan_terracotta', 'purple_terracotta', 'blue_terracotta', 'brown_terracotta', 'green_terracotta', 'red_terracotta', 'black_terracotta', 'bricks', 'cream_brick', 'beige_brick', 'brown_brick', 'stone_bricks', 'crean_stone_brick', 'beige_stone_brick', 'brown_stone_brick', 'cobblestone', 'blackstone', 'stone'];