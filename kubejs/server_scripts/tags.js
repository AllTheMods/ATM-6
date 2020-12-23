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
//events.listen('item.tags', function (e) {
events.listen('item.tags', e => {
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
    add('forge:dusts/certus_quartz', ['appliedenergistics2:certus_quartz_dust'])
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
    remove('forge:dusts/certus_quartz', 'jaopca:dusts.certus_quartz')
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
events.listen('block.tags', function(e) {
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

    //Resourceful Bees Apiary Tags
    add('resourcefulbees:valid_apiary', ['#repurposed_structures:nether_stronghold_bookshelves', '#misctags:concrete', '#mcwwindows:window', 'modularrouters:item_router', 'botania:mana_glass', 'botania:alf_glass', 'minecraft:soul_sand', '#minecraft:nylium', 'byg:nylium_soul_sand', 'byg:nylium_soul_soil', 'minecraft:soul_soil', 'minecraft:glowstone', 'minecraft:water'])
    add('resourcefulbees:valid_apiary', ['#minecraft:base_stone_nether', '#minecraft:stone_bricks', '#minecraft:wart_blocks', '#minecolonies:decoblocks', '#forge:bookshelves', '#forge:cobblestone', '#forge:mushroom_caps', '#forge:mushroom_stems', '#forge:terracotta'])
    add('resourcefulbees:valid_apiary', ['minecraft:white_glazed_terracotta', 'minecraft:orange_glazed_terracotta', 'minecraft:magenta_glazed_terracotta', 'minecraft:light_blue_glazed_terracotta', 'minecraft:yellow_glazed_terracotta', 'minecraft:lime_glazed_terracotta', 'minecraft:pink_glazed_terracotta', 'minecraft:gray_glazed_terracotta', 'minecraft:light_gray_glazed_terracotta', 'minecraft:cyan_glazed_terracotta', 'minecraft:purple_glazed_terracotta', 'minecraft:blue_glazed_terracotta', 'minecraft:brown_glazed_terracotta', 'minecraft:green_glazed_terracotta', 'minecraft:red_glazed_terracotta', 'minecraft:black_glazed_terracotta'])
    add('resourcefulbees:valid_apiary', ['minecraft:polished_basalt', 'minecraft:crying_obsidian', 'minecraft:smooth_quartz', 'minecraft:quartz_pillar', 'minecraft:quartz_bricks', 'minecraft:chiseled_quartz_block', 'minecraft:chiseled_nether_bricks', 'minecraft:cracked_nether_bricks', 'minecraft:nether_bricks', 'minecraft:red_nether_bricks'])
    add('resourcefulbees:valid_apiary', ['minecraft:purpur_block', 'minecraft:purpur_pillar', 'minecraft:end_stone_bricks'])
    add('resourcefulbees:valid_apiary', ['minecraft:sea_lantern', 'minecraft:dark_prismarine', 'minecraft:prismarine_bricks', 'minecraft:prismarine'])
    add('resourcefulbees:valid_apiary', ['minecraft:bone_block', 'minecraft:permafrost_bricks', 'minecraft:smooth_stone'])
    //Enviromats
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_white', 'enviromats:alabaster_white_cobble', 'enviromats:alabaster_white_polished', 'enviromats:alabaster_white_brick', 'enviromats:alabaster_white_brick_small', 'enviromats:alabaster_white_tile', 'enviromats:alabaster_white_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_orange', 'enviromats:alabaster_orange_cobble', 'enviromats:alabaster_orange_polished', 'enviromats:alabaster_orange_brick', 'enviromats:alabaster_orange_brick_small', 'enviromats:alabaster_orange_tile', 'enviromats:alabaster_orange_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_magenta', 'enviromats:alabaster_magenta_cobble', 'enviromats:alabaster_magenta_polished', 'enviromats:alabaster_magenta_brick', 'enviromats:alabaster_magenta_brick_small', 'enviromats:alabaster_magenta_tile', 'enviromats:alabaster_magenta_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_light_blue', 'enviromats:alabaster_light_blue_cobble', 'enviromats:alabaster_light_blue_polished', 'enviromats:alabaster_light_blue_brick', 'enviromats:alabaster_light_blue_brick_small', 'enviromats:alabaster_light_blue_tile', 'enviromats:alabaster_light_blue_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_yellow', 'enviromats:alabaster_yellow_cobble', 'enviromats:alabaster_yellow_polished', 'enviromats:alabaster_yellow_brick', 'enviromats:alabaster_yellow_brick_small', 'enviromats:alabaster_yellow_tile', 'enviromats:alabaster_yellow_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_lime', 'enviromats:alabaster_lime_cobble', 'enviromats:alabaster_lime_polished', 'enviromats:alabaster_lime_brick', 'enviromats:alabaster_lime_brick_small', 'enviromats:alabaster_lime_tile', 'enviromats:alabaster_lime_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_pink', 'enviromats:alabaster_pink_cobble', 'enviromats:alabaster_pink_polished', 'enviromats:alabaster_pink_brick', 'enviromats:alabaster_pink_brick_small', 'enviromats:alabaster_pink_tile', 'enviromats:alabaster_pink_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_gray', 'enviromats:alabaster_gray_cobble', 'enviromats:alabaster_gray_polished', 'enviromats:alabaster_gray_brick', 'enviromats:alabaster_gray_brick_small', 'enviromats:alabaster_gray_tile', 'enviromats:alabaster_gray_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_light_gray', 'enviromats:alabaster_light_gray_cobble', 'enviromats:alabaster_light_gray_polished', 'enviromats:alabaster_light_gray_brick', 'enviromats:alabaster_light_gray_brick_small', 'enviromats:alabaster_light_gray_tile', 'enviromats:alabaster_light_gray_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_cyan', 'enviromats:alabaster_cyan_cobble', 'enviromats:alabaster_cyan_polished', 'enviromats:alabaster_cyan_brick', 'enviromats:alabaster_cyan_brick_small', 'enviromats:alabaster_cyan_tile', 'enviromats:alabaster_cyan_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_purple', 'enviromats:alabaster_purple_cobble', 'enviromats:alabaster_purple_polished', 'enviromats:alabaster_purple_brick', 'enviromats:alabaster_purple_brick_small', 'enviromats:alabaster_purple_tile', 'enviromats:alabaster_purple_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_blue', 'enviromats:alabaster_blue_cobble', 'enviromats:alabaster_blue_polished', 'enviromats:alabaster_blue_brick', 'enviromats:alabaster_blue_brick_small', 'enviromats:alabaster_blue_tile', 'enviromats:alabaster_blue_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_brown', 'enviromats:alabaster_brown_cobble', 'enviromats:alabaster_brown_polished', 'enviromats:alabaster_brown_brick', 'enviromats:alabaster_brown_brick_small', 'enviromats:alabaster_brown_tile', 'enviromats:alabaster_brown_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_green', 'enviromats:alabaster_green_cobble', 'enviromats:alabaster_green_polished', 'enviromats:alabaster_green_brick', 'enviromats:alabaster_green_brick_small', 'enviromats:alabaster_green_tile', 'enviromats:alabaster_green_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_red', 'enviromats:alabaster_red_cobble', 'enviromats:alabaster_red_polished', 'enviromats:alabaster_red_brick', 'enviromats:alabaster_red_brick_small', 'enviromats:alabaster_red_tile', 'enviromats:alabaster_red_tile_small'])
    add('resourcefulbees:valid_apiary', ['enviromats:alabaster_black', 'enviromats:alabaster_black_cobble', 'enviromats:alabaster_black_polished', 'enviromats:alabaster_black_brick', 'enviromats:alabaster_black_brick_small', 'enviromats:alabaster_black_tile', 'enviromats:alabaster_black_tile_small'])
    //Quark
    add('resourcefulbees:valid_apiary', ['#quark:crystal', 'quark:red_crystal_pane', 'quark:orange_crystal_pane', 'quark:yellow_crystal_pane', 'quark:green_crystal_pane', 'quark:blue_crystal_pane', 'quark:indigo_crystal_pane', 'quark:violet_crystal_pane', 'quark:white_crystal_pane', 'quark:black_crystal_pane'])
    add('resourcefulbees:valid_apiary', ['#quark:vertical_slab', 'quark:vertical_white_stained_planks', 'quark:vertical_orange_stained_planks', 'quark:vertical_magenta_stained_planks', 'quark:vertical_light_blue_stained_planks', 'quark:vertical_yellow_stained_planks', 'quark:vertical_lime_stained_planks', 'quark:vertical_pink_stained_planks', 'quark:vertical_gray_stained_planks', 'quark:vertical_light_gray_stained_planks', 'quark:vertical_cyan_stained_planks', 'quark:vertical_purple_stained_planks', 'quark:vertical_blue_stained_planks', 'quark:vertical_brown_stained_planks', 'quark:vertical_green_stained_planks', 'quark:vertical_red_stained_planks', 'quark:vertical_black_stained_planks'])
    add('resourcefulbees:valid_apiary', ['quark:white_stained_planks', 'quark:orange_stained_planks', 'quark:magenta_stained_planks', 'quark:light_blue_stained_planks', 'quark:yellow_stained_planks', 'quark:lime_stained_planks', 'quark:pink_stained_planks', 'quark:gray_stained_planks', 'quark:light_gray_stained_planks', 'quark:cyan_stained_planks', 'quark:purple_stained_planks', 'quark:blue_stained_planks', 'quark:brown_stained_planks', 'quark:green_stained_planks', 'quark:red_stained_planks', 'quark:black_stained_planks'])
    add('resourcefulbees:valid_apiary', ['quark:sandy_bricks', 'quark:snow_bricks', 'quark:charred_nether_bricks', 'quark:blue_nether_bricks', 'quark:sandstone_bricks', 'quark:red_sandstone_bricks', 'quark:soul_sandstone_bricks', 'quark:magma_bricks'])
    add('resourcefulbees:valid_apiary', ['quark:biotite_block', 'quark:smooth_biotite', 'quark:chiseled_biotite_block', 'quark:biotite_pillar', 'quark:biotite_bricks'])
    add('resourcefulbees:valid_apiary', ['quark:granite_bricks', 'quark:chiseled_granite_bricks', 'quark:granite_pavement', 'quark:granite_pillar'])
    add('resourcefulbees:valid_apiary', ['quark:diorite_bricks', 'quark:chiseled_diorite_bricks', 'quark:diorite_pavement', 'quark:diorite_pillar'])
    add('resourcefulbees:valid_apiary', ['quark:andesite_bricks', 'quark:chiseled_andesite_bricks', 'quark:andesite_pavement', 'quark:andesite_pillar'])
    add('resourcefulbees:valid_apiary', ['quark:marble_bricks', 'quark:chiseled_marble_bricks', 'quark:marble_pavement', 'quark:marble_pillar'])
    add('resourcefulbees:valid_apiary', ['quark:limestone_bricks', 'quark:chiseled_limestone_bricks', 'quark:limestone_pavement', 'quark:limestone_pillar'])
    add('resourcefulbees:valid_apiary', ['quark:jasper_bricks', 'quark:chiseled_jasper_bricks', 'quark:jasper_pavement', 'quark:jasper_pillar'])
    add('resourcefulbees:valid_apiary', ['quark:slate_bricks', 'quark:chiseled_slate_bricks', 'quark:slate_pavement', 'quark:slate_pillar'])
    add('resourcefulbees:valid_apiary', ['quark:basalt_bricks', 'quark:chiseled_basalt_bricks', 'quark:basalt_pavement', 'quark:basalt_pillar'])
    add('resourcefulbees:valid_apiary', ['quark:sugar_cane_block', 'quark:bamboo_block', 'quark:cactus_block', 'quark:chorus_fruit_block', 'quark:stick_block', 'quark:midori_block', 'quark:midori_pillar'])
    add('resourcefulbees:valid_apiary', ['quark:shingles', 'quark:white_shingles', 'quark:orange_shingles', 'quark:magenta_shingles', 'quark:light_blue_shingles', 'quark:yellow_shingles', 'quark:lime_shingles', 'quark:pink_shingles', 'quark:gray_shingles', 'quark:light_gray_shingles', 'quark:cyan_shingles', 'quark:purple_shingles', 'quark:blue_shingles', 'quark:brown_shingles', 'quark:green_shingles', 'quark:red_shingles', 'quark:black_shingles'])
    add('resourcefulbees:valid_apiary', ['quark:elder_prismarine', 'quark:elder_prismarine_bricks', 'quark:dark_elder_prismarine', 'quark:elder_sea_lantern', 'quark:myalite_crystal', 'quark:duskbound_block', 'quark:duskbound_lantern'])
    add('resourcefulbees:valid_apiary', ['quark:brimstone_bricks', 'quark:blaze_lantern', 'quark:soul_sandstone', 'quark:chiseled_soul_sandstone', 'quark:cut_soul_sandstone', 'quark:smooth_soul_sandstone'])
    add('resourcefulbees:valid_apiary', ['quark:lit_lamp', 'quark:paper_wall', 'quark:paper_wall_big', 'quark:paper_wall_sakura'])
    //Apotheosis
    add('resourcefulbees:valid_apiary', ['apotheosis:hellshelf', 'apotheosis:blazing_hellshelf', 'apotheosis:glowing_hellshelf', 'apotheosis:seashelf', 'apotheosis:crystal_seashelf', 'apotheosis:heart_seashelf', 'apotheosis:endshelf', 'apotheosis:draconic_endshelf', 'apotheosis:pearl_endshelf', 'apotheosis:beeshelf', 'apotheosis:melonshelf'])
    //Special tag systems
    function special(tags, items) {
        var tag = e.get(tags)
        ingredient.of(items).stacks.forEach(stack => tag.add(stack.id))
    }
    special('mcwwindows:window', '/mcwwindows:.+_win/')
    special('misctags:concrete', '/minecraft:.+_concrete/')
    special('forge:relocation_not_supported', ['/refinedstorage:.+/', '/extrastorage:.+/', '/waystones:.+/', '/appliedenergistics2:.+/'])
    special('resourcefulbees:valid_apiary', ['/darkutils:filter_.+/', '/rftoolsbuilder:.+/']) //, '^\\w+_glass$'
})

//Fluid tags go here
events.listen('fluid.tags', function(e) {
    function add(tag, id) {
        e.get(tag).add(id)
    }

    function remove(tag, id) {
        e.get(tag).remove(id)
    }
    //Add
    add('forge:essence', 'pneumaticcraft:memory_essence')
})
