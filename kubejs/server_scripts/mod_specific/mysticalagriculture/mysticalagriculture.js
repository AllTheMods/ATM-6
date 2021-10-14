onEvent('recipes', e => {
  let mainfusion = (output, middle, item1, item2, item3, item4, item5, item6, item7, item8) => {
    e.recipes.mysticalagriculture.infusion({
      input: { item: middle },
      ingredients: [
        { item: item1 },
        { item: item2 },
        { item: item3 },
        { item: item4 },
        { item: item5 },
        { item: item6 },
        { item: item7 },
        { item: item8 }
      ],
      result: { item: output }
    }).id(`kubejs:${output.replace(':', '/')}/infusion`)
  }
  function essenceCircle(result, count, name) {
    e.shaped(item.of(result, count), ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${name}_essence` }).id(`kubejs:mysticalagriculture/${name}_essence_crafting`)
  }

  mainfusion('kubejs:magical_soil', 'botania:overgrowth_seed', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block', 'botania:gaia_ingot', 'mysticalagradditions:insanium_block')
  mainfusion('mysticalagriculture:saltpeter_seeds', 'mysticalagriculture:prosperity_seed_base', 'thermal:niter_dust', 'mysticalagriculture:prudentium_essence', 'thermal:niter_dust', 'mysticalagriculture:prudentium_essence', 'thermal:niter_dust', 'mysticalagriculture:prudentium_essence', 'thermal:niter_dust', 'mysticalagriculture:prudentium_essence')

  essenceCircle('allthemodium:allthemodium_nugget', 1, 'allthemodium')
  essenceCircle('allthemodium:vibranium_nugget', 1, 'vibranium')
  essenceCircle('allthemodium:unobtainium_nugget', 1, 'unobtainium')
  essenceCircle('silentgear:azure_silver_ingot', 6, 'azure_silver')
  essenceCircle('silentgear:azure_electrum_ingot', 4, 'azure_electrum')
  essenceCircle('silentgear:crimson_iron_ingot', 6, 'crimson_iron')
  essenceCircle('astralsorcery:aquamarine', 8, 'aquamarine')

  modifyShaped(e, 'mysticalagriculture:unattuned_augment', 1, ['PMP', 'AMA', 'PMP'], {
    P: 'mysticalagriculture:prosperity_ingot',
    M: 'botania:manasteel_ingot',
    A: '#forge:nuggets/allthemodium'
  })

  e.recipes.mysticalagriculture.infusion({
    input: { item: 'mysticalagriculture:prosperity_seed_base' },
    ingredients: [{ tag: 'chisel:marble' }, { item: 'mysticalagriculture:prudentium_essence' }, { tag: 'chisel:marble' }, { item: 'mysticalagriculture:prudentium_essence' }, { tag: 'chisel:marble' }, { item: 'mysticalagriculture:prudentium_essence' }, { tag: 'chisel:marble' }, { item: 'mysticalagriculture:prudentium_essence' }],
    result: { item: 'mysticalagriculture:marble_seeds' }
  }).id('kubejs:mysticalagriculture/marble_seeds')

  removeRecipeByID(e, [
    'mysticalagriculture:oratchalcum_seeds_infusion',
    'mysticalagriculture:crimson_steel_seeds_infusion',
    'mysticalagriculture:essence/astralsorcery/rock_crystal',
    'mysticalagriculture:essence/astralsorcery/aquamarine',
    'mysticalagriculture:essence/astralsorcery/starmetal_ingot',
    'mysticalagriculture:essence/thermal/basalz_rod',
    'mysticalagriculture:essence/thermal/blitz_rod',
    'mysticalagriculture:essence/thermal/blizz_rod',
    'mysticalagriculture:essence/thermal/enderium_ingot',
    'mysticalagriculture:essence/thermal/lumium_ingot',
    'mysticalagriculture:essence/thermal/signalum_ingot',
    'mysticalagriculture:essence/quark/ender_biotite',
    'mysticalagriculture:essence/powah/blazing_crystal',
    'mysticalagriculture:essence/powah/energized_steel',
    'mysticalagriculture:essence/powah/niotic_crystal',
    'mysticalagriculture:essence/powah/spirited_crystal',
    'mysticalagriculture:essence/botania/elementium_ingot',
    'mysticalagriculture:essence/botania/manasteel_ingot',
    'mysticalagriculture:essence/botania/terrasteel_ingot',
    'mysticalagriculture:essence/common/brass_ingot',
    'mysticalagriculture:essence/common/bronze_ingot',
    'mysticalagriculture:essence/common/constantan_ingot',
    'mysticalagriculture:essence/common/electrum_ingot',
    'mysticalagriculture:essence/common/graphite_ingot',
    'mysticalagriculture:essence/common/invar_ingot',
    'mysticalagriculture:essence/common/silicon',
    'mysticalagriculture:essence/common/steel_ingot',
    'mysticalagriculture:essence/common/sulfur',
    'mysticalagriculture:essence/immersiveengineering/hop_graphite_ingot',
    'mysticalagriculture:essence/pneumaticcraft/compressed_iron_ingot',
    'mysticalagriculture:essence/appliedenergistics2/fluix',
    'mysticalagriculture:essence/appliedenergistics2/sky_stone',
    'mysticalagriculture:essence/appliedenergistics2/silicon_press',
    'mysticalagriculture:essence/appliedenergistics2/calculation_press',
    'mysticalagriculture:essence/appliedenergistics2/engineering_press',
    'mysticalagriculture:essence/appliedenergistics2/logic_press',
    'mysticalagriculture:essence/refinedstorage/quartz_enriched_iron_ingot',
    'mysticalagriculture:essence/mekanism/refined_glowstone_ingot',
    'mysticalagriculture:essence/mekanism/refined_obsidian_ingot',
    'mysticalagriculture:seed/infusion/basalz',
    'mysticalagriculture:seed/infusion/blazing_crystal',
    'mysticalagriculture:seed/infusion/blitz',
    'mysticalagriculture:seed/infusion/blizz',
    'mysticalagriculture:seed/infusion/brass',
    'mysticalagriculture:seed/infusion/bronze',
    'mysticalagriculture:seed/infusion/compressed_iron',
    'mysticalagriculture:seed/infusion/constantan',
    'mysticalagriculture:seed/infusion/electrum',
    'mysticalagriculture:seed/infusion/elementium',
    'mysticalagriculture:seed/infusion/enderium',
    'mysticalagriculture:seed/infusion/ender_biotite',
    'mysticalagriculture:seed/infusion/energized_steel',
    'mysticalagriculture:seed/infusion/fluix',
    'mysticalagriculture:seed/infusion/graphite',
    'mysticalagriculture:seed/infusion/hop_graphite',
    'mysticalagriculture:seed/infusion/invar',
    'mysticalagriculture:seed/infusion/lumium',
    'mysticalagriculture:seed/infusion/manasteel',
    'mysticalagriculture:seed/infusion/marble',
    'mysticalagriculture:seed/infusion/niotic_crystal',
    'mysticalagriculture:seed/infusion/nitro_crystal',
    'mysticalagriculture:seed/infusion/quartz_enriched_iron',
    'mysticalagriculture:seed/infusion/refined_glowstone',
    'mysticalagriculture:seed/infusion/refined_obsidian',
    'mysticalagriculture:seed/infusion/rock_crystal',
    'mysticalagriculture:seed/infusion/signalum',
    'mysticalagriculture:seed/infusion/silicon',
    'mysticalagriculture:seed/infusion/sky_stone',
    'mysticalagriculture:seed/infusion/spirited_crystal',
    'mysticalagriculture:seed/infusion/starmetal',
    'mysticalagriculture:seed/infusion/steel',
    'mysticalagriculture:seed/infusion/sulfur',
    'mysticalagriculture:seed/infusion/terrasteel',
    'mysticalagradditions:nitro_crystal_crux',
    'mysticalagradditions:essence/nitro_crystal'
  ])
})
