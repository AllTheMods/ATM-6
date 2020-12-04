//priority: 1000

var ores = [
  'allthemodium',
  'vibranium',
  'unobtainium',
  'aluminum',
  'copper',
  'lead',
  'nickel',
  'osmium',
  'platinum',
  'silver',
  'tin',
  'uranium',
  'zinc'
]

events.listen('item.tags', e => {

})

//Item tags go here
events.listen('item.tags', function (e) {
  function add(tag, id) {
    e.get(tag).add(id)
  }

  function remove(tag, id) {
    e.get(tag).remove(id)
  }

  /*
  utils.listOf(ores).forEach(function (ore) {
    e.get('mekanism:clumps').add('kubejs:clump_' + ore)
    e.get('mekanism:clumps/' + ore).add('kubejs:clump_' + ore)
  })
  */

  //Add
  add('curios:curio', ['simplemagnets:basicmagnet', 'simplemagnets:advancedmagnet'])
  add('curios:angelring', ['botania:flight_tiara'])
  add('forge:ores/rat_gem', 'rats:ratlantean_gem_ore')
  add('forge:ores/arcane_brick', 'ars_nouveau:arcane_ore')
  add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
  add('forge:ores', ['#forge:ores/certus_quartz', '#forge:ores/oratchalcum', '#forge:ores/rat_gem', '#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
  add('forge:plastic', ['#pneumaticcraft:plastic_sheets', 'silents_mechanisms:plastic_sheet', 'mekanism:hdpe_sheet'])
  add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
  add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
  add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
  add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
  add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
  add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])
  add('misctags:biofuel2', ['#minecraft:saplings', '#minecraft:leaves', '#forge:seeds', 'minecraft:dried_kelp', 'minecraft:kelp', 'minecraft:seagrass', 'minecraft:grass'])
  add('misctags:biofuel4', ['#forge:fruits', 'minecraft:tall_grass', 'minecraft:nether_sprouts', 'minecraft:dried_kelp_block', 'minecraft:cactus', 'minecraft:sugar_cane', 'minecraft:weeping_vines', 'minecraft:twisting_vines', 'minecraft:vine', 'minecraft:melon_slice', 'byg:skyris_vine', 'byg:embur_gel_vines'])
  add('misctags:biofuel5', ['#forge:vegetables', '#forge:cookies', '#forge:flour_plants', '#forge:mushrooms', '#forge:mushroom_stems', '#minecraft:flowers', 'minecraft:lily_pad', 'minecraft:sea_pickle', 'minecraft:shroomlight', 'minecraft:large_fern', 'minecraft:fern', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:carved_pumpkin', 'minecraft:nether_wart', 'minecraft:cocoa_beans'])
  add('misctags:biofuel7', ['#minecraft:wart_blocks', '#forge:mushroom_caps', 'minecraft:baked_potato', 'minecraft:hay_block', '#forge:bread'])
  add('misctags:biofuel8', ['minecraft:cake', 'minecraft:pumpkin_pie'])
  add('forge:axes', ['byg:pendorite_battleaxe', 'engineerstools:redia_tool'])
  add('forge:shovels', ['engineerstools:redia_tool'])
  add('forge:pickaxes', ['allthemodium:alloy_pick', 'engineerstools:redia_tool'])
  add('minecraft:stone_tool_materials', ['#forge:stone', '#forge:cobblestone'])
  add('minecraft:stone_crafting_materials', ['#forge:stone', '#forge:cobblestone'])
  add('appliedenergistics2:nether_quartz_dust', '#forge:dusts/quartz')
  add('appliedenergistics2:dusts/nether_quartz', '#forge:dusts/quartz')
  add('appliedenergistics2:dusts/quartz', '#forge:dusts/quartz')
  add('forge:seeds', ['bluepower:flax_seeds', 'immersiveengineering:seed'])
  add('engineerstools:musli_bar_seeds', '#forge:seeds')
  add('forge:ingots', ['#forge:ingots/unobtainium_allthemodium_alloy', '#forge:ingots/vibranium_unobtainium_alloy', '#forge:ingots/vibranium_allthemodium_alloy', '#forge:ingots/oratchalcum'])
  add('forge:sand', ['byg:white_sand', 'byg:black_sand', 'byg:purple_sand', 'byg:blue_sand'])
  add('forge:nuggets', '#forge:nuggets/oratchalcum')
  add('forge:fruits', ['byg:holly_berries'])
  add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard')
  add('forge:storage_blocks/uraninite', 'powah:uraninite_block')
  add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
  add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
  add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
  add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
  add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
  add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
  add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
  add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
  add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
  add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
  add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
  add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
  add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
  add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
  add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus', 'byg:blue_glowshroom', 'byg:purple_glowshroom'])
  add('forge:storage_blocks', ['#forge:storage_blocks/uraninite', '#forge:storage_blocks/oratchalcum'])
  add('forge:gems/rat_gem', 'rats:gem_of_ratlantis')
  add('forge:gems', ['#forge:gems/dimensionalshard', '#forge:gems/rat_gem'])
  add('misctags:flowers/draconic_flowers', ['minecraft:dragon_egg'])
  add('misctags:flowers/end_flowers', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
  add('misctags:flowers/forest_flowers', ['#minecraft:flowers', 'minecraft:sweet_berries'])
  add('misctags:flowers/glowing_flowers', ['minecraft:shroomlight', 'minecraft:glowstone', 'minecraft:redstone_lamp'])
  add('misctags:flowers/magical_flowers', ['#botania:special_flowers', '#botania:mystical_flowers', '#botania:double_mystical_flowers'])
  add('misctags:flowers/nether_flowers', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:nether_wart', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:weeping_vines', 'minecraft:twisting_vines'])
  add('misctags:flowers/swamp_flowers', ['byg:tiny_lilypads', 'byg:reeds', 'byg:cattail', 'minecraft:lily_pad', 'minecraft:sugar_cane', 'minecraft:brown_mushroom', 'minecraft:red_mushroom'])
  add('misctags:flowers/wither_flowers', ['minecraft:wither_rose'])
  add('forge:storage_blocks/nether_star', 'kubejs:nether_star_block')
  add('forge:storage_blocks', ['#forge:storage_blocks/nether_star'])

  //Remove
  remove('forge:leather', 'forbidden_arcanus:rotten_leather')
  remove('engineerstools:musli_bar_food_blacklisted', 'minecraft:chicken')
  remove('forge:dyes', 'mekanism:dust_sulfur')
  remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
  remove('forge:nether_stars', 'forbidden_arcanus:dark_nether_star')
  remove('curios:charm', ['angelring:itemring', 'simplemagnets:basicmagnet', 'simplemagnets:advancedmagnet'])
  remove('curios:head', ['botania:flight_tiara'])
  remove('appliedenergistics2:glass', ['#forge:glass', 'minecraft:glass'])
  remove('appliedenergistics2:metal_ingots', ['#forge:ingots/gold', '#forge:ingots/iron'])
  remove('appliedenergistics2:wool', '#minecraft:wool')
  remove('appliedenergistics2:workbench', 'minecraft:crafting_table')
  remove('minecraft:beehives', ['resourcefulbees:t1_beehive', 'resourcefulbees:t2_beehive', 'resourcefulbees:t3_beehive', 'resourcefulbees:t4_beehive'])

  //Special tag systems
  function special(tags, items) {
    var tag = e.get(tags)
    ingredient.of(items).stacks.forEach(stack => tag.add(stack.id))
  }
  special('minecraft:wart_blocks', '/.+_wart_block/')
  special('forge:axes', ['/.+_axe/', '/.+_paxel/', '/.+:axe_.+/'])
  special('forge:pickaxes', ['/.+_pickaxe/', '/.+_paxel/', '/.+:pickaxe_.+/'])
  special('forge:shovels', ['/.+_shovel/', '/.+_paxel/', '/.+:shovel_.+/'])
  special('forge:swords', ['/.+_sword/', '/.+:sword_.+/'])
  special('forge:hoes', ['/.+_hoe/', '/.+:hoe_.+/'])
})

//Block tags go here
events.listen('block.tags', function (e) {
  function add(tag, id) {
    e.get(tag).add(id)
  }

  function remove(tag, id) {
    e.get(tag).remove(id)
  }

  //Add
  add('forge:ores/certus_quartz', ['appliedenergistics2:quartz_ore', 'appliedenergistics2:charged_quartz_ore'])
  add('forge:ores/oratchalcum', 'rats:oratchalcum_ore')
  add('forge:ores/cheese', 'rats:cheese_ore')
  add('forge:ores/quartz', '#forge:ores/certus_quartz')
  add('forge:ores/rat_gem', 'rats:ratlantean_gem_ore')
  add('forge:ores/arcane_brick', 'ars_nouveau:arcane_ore')
  add('forge:ores/dimensionalshard', ['rftoolsbase:dimensionalshard_overworld', 'rftoolsbase:dimensionalshard_nether', 'rftoolsbase:dimensionalshard_end'])
  add('forge:ores', ['#forge:ores/certus_quartz', '#forge:ores/oratchalcum', '#forge:ores/rat_gem', '#forge:ores/dimensionalshard', '#forge:ores/arcane_brick'])
  add('forge:relocation_not_supported', ['#minecraft:wither_immune', 'potionsmaster:cauldron', 'appliedenergistics2:cable_bus'])
  add('mekanism:cardboard_blacklist', '#forge:relocation_not_supported')
  add('bagofyurting:blacklist', '#forge:relocation_not_supported')
  add('misctags:flowers/draconic_flowers', ['minecraft:dragon_egg'])
  add('misctags:flowers/end_flowers', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
  add('misctags:flowers/forest_flowers', ['#minecraft:flowers', 'minecraft:sweet_berry_bush'])
  add('misctags:flowers/glowing_flowers', ['minecraft:shroomlight', 'minecraft:glowstone', 'minecraft:redstone_lamp'])
  add('misctags:flowers/magical_flowers', ['#botania:special_flowers', '#botania:mystical_flowers', '#botania:double_mystical_flowers'])
  add('misctags:flowers/nether_flowers', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'minecraft:nether_wart', 'minecraft:crimson_roots', 'minecraft:warped_roots', 'minecraft:weeping_vines', 'minecraft:twisting_vines'])
  add('misctags:flowers/swamp_flowers', ['byg:tiny_lilypads', 'byg:reeds', 'byg:cattail', 'minecraft:lily_pad', 'minecraft:sugar_cane', 'minecraft:brown_mushroom', 'minecraft:red_mushroom'])
  add('misctags:flowers/wither_flowers', ['minecraft:wither_rose'])
  add('resourcefulbees:valid_apiary', ['minecraft:polished_blackstone_bricks', '#misctags:concrete', '#mcwwindows:window', 'modularrouters:item_router','botania:mana_glass','botania:alf_glass'])
  add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
  add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
  add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
  add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
  add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
  add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
  add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
  add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
  add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
  add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
  add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
  add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
  add('forge:mushroom_caps', ['#forge:mushroom_caps/red_mushroom', '#forge:mushroom_caps/brown_mushroom', '#forge:mushroom_caps/blue_glowshroom', '#forge:mushroom_caps/purple_glowshroom', '#forge:mushroom_caps/green_mushroom', '#forge:mushroom_caps/black_puff_mushroom', '#forge:mushroom_caps/weeping_milkcap_mushroom'])
  add('forge:mushroom_stems', ['#forge:mushroom_stems/mushroom', '#forge:mushroom_stems/brown_mushroom', '#forge:mushroom_stems/white_mushroom', '#forge:mushroom_stems/red_glowshroom', '#forge:mushroom_stems/yellow_glowshroom'])
  add('forge:mushrooms', ['minecraft:warped_fungus', 'minecraft:crimson_fungus', 'byg:blue_glowshroom', 'byg:purple_glowshroom'])
  add('forge:storage_blocks', ['#forge:storage_blocks/uraninite', '#forge:storage_blocks/oratchalcum', '#forge:storage_blocks/nether_star'])
  add('forge:storage_blocks/nether_star', 'kubejs:nether_star_block')
  add('forge:storage_blocks/uraninite', 'powah:uraninite_block')
  add('forge:storage_blocks/oratchalcum', 'rats:oratchalcum_block')
  add('cyclic:scythe_brush', ['#minecraft:flowers'])

  //Special tag systems
  function special(tags, items) {
    var tag = e.get(tags)
    ingredient.of(items).stacks.forEach(stack => tag.add(stack.id))
  }
  special('mcwwindows:window', '/mcwwindows:.+_win/')
  special('misctags:concrete', '/minecraft:.+_concrete/')
  special('forge:relocation_not_supported', ['/refinedstorage:.+/', '/extrastorage:.+/', '/waystones:.+/', '/appliedenergistics2:.+/'])
  special('resourcefulbees:valid_apiary', ['/darkutils:filter_.+/', '/rftoolsbuilder:.+/'])//, '^\\w+_glass$'
})

//Fluid tags go here
events.listen('fluid.tags', function (e) {
  function add(tag, id) {
    e.get(tag).add(id)
  }

  function remove(tag, id) {
    e.get(tag).remove(id)
  }
  //Add
  add('forge:essence', 'pneumaticcraft:memory_essence')
})