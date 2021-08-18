const VA = 'resourcefulbees:valid_apiary'
//Adding Valid Apiary tags
events.listen('item.tags', e => {
  e.add(VA, whitelistVA)
  e.remove(VA, blacklistVA)

  e.remove(VA, 'quark:biotite')
})

events.listen('block.tags', e => {
  e.add(VA, whitelistVA)
  e.add(VA, [
    'minecraft:lava',
    'minecraft:water',
    'allthemodium:molten_bluelava_block',
  ])
  e.remove(VA, blacklistVA)
})

const whitelistVA = [
  //Flowers
  'kubejs:atm_star_block',
  'biomesoplenty:flesh',
  'botania:blaze_block',
  'minecraft:magma_block',
  'minecraft:clay',
  'appliedenergistics2:quartz_block',
  'astralsorcery:starmetal',
  'minecraft:slime_block',
  'botania:terrasteel_block',
  'minecraft:hay_block',
  'cookingforblockheads:fridge',
  'minecraft:bone_block',

  /minecraft:.*terracotta/,
  /minecraft:.+quartz/,
  /minecraft:quartz_.*/,
  /minecraft:.+quartz_.*/,
  /minecraft:purpur_.+/,
  /minecraft:.*bricks.*/,
  /minecraft:.*basalt/,
  /minecraft:.*blackstone/,
  /minecraft:.*prismarine/,
  'minecraft:smooth_stone',
  'minecraft:sea_lantern',
  '#minecraft:base_stone_nether',
  '#minecraft:wart_blocks',
  '#forge:soul_sand',
  '#minecraft:nylium',
  'minecraft:soul_soil',
  'minecraft:soul_sand',
  'minecraft:glowstone',

  /create:.+_window/,
  /create:.*granite/,
  /create:.*diorite/,
  /create:.*andesite/,
  /create:.*limestone/,
  /create:.*dolomite/,
  /create:.*gabbro/,
  /create:.*scoria/,

  /glassential:glass_/,

  /forbidden_arcanus:.*darkstone/,

  /astralsorcery:.*marble.*/,
  /astralsorcery:infused_wood.*/,

  /immersiveengineering:slab_sheetmetal_+/,
  /immersiveengineering:sheetmetal_+/,
  '#forge:treated_wood',
  '#immersiveengineering:scaffoldings/aluminum',
  '#immersiveengineering:scaffoldings/steel',

  '#mekanismadditions:plastic_blocks',

  'compactmachines:solid_wall',

  /quark:.*bricks/,
  /quark:.*pavement/,
  /quark:.*pillar/,
  /quark:.*planks/,
  /quark:.*biotite/,
  /quark:.*shingles/,
  /quark:.*prismarine/,
  /quark:.*soul_sandstone/,
  /quark:.*vertical_slab/,
  /quark:.*duskbound.*/,
  'quark:lit_lamp',
  'quark:blaze_lantern',

  '#darkutils:filter',

  '#minecolonies:decoblocks',

  '#minecraft:alabaster_blocks',

  '#mcwwindows:window',

  'botania:mana_glass',
  'botania:elf_glass',

  'byg:nylium_soul_sand',
  'byg:nylium_soul_soil',

  '#forge:bookshelves',
  '#forge:cobblestone',
  '#forge:mushroom_caps',
  '#forge:mushroom_stems',
  '#misctags:concrete'
]

const blacklistVA = [
  '#forge:glass_panes',
  '#forge:fences',
  '#forge:fence_gates',

  '#minecraft:walls',
  '#minecraft:trap_doors',

  'create:andesite_funnel',
  'create:andesite_tunnel',
  'create:andesite_casing',

  'astralsorcery:infused_wood_column',

  'forbidden_arcanus:arcane_polished_darkstone_rod',
  'forbidden_arcanus:polished_darkstone_pressure_plate',
  'forbidden_arcanus:polished_darkstone_button'
]
