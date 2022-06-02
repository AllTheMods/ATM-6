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
  essenceCircle('alltheores:copper_ingot', 6, 'copper')

  e.remove({id: 'mysticalagriculture:essence/common/aluminum_ingot'})
  essenceCircle('alltheores:aluminum_ingot', 4, 'aluminum')


  modifyShaped(e, 'mysticalagriculture:unattuned_augment', 1, ['PMP', 'AMA', 'PMP'], {
    P: 'mysticalagriculture:prosperity_ingot',
    M: 'botania:manasteel_ingot',
    A: '#forge:nuggets/allthemodium'
  })
  e.shaped('8x bloodmagic:saltpeter', [' A ', ' A ', ' A '], {
    A: 'mysticalagriculture:saltpeter_essence'
  }).id('kubejs:mysticalagriculture/bloodmagic/saltpeter')
  removeRecipeByID(e, ['mysticalagriculture:essence/common/saltpeter', 'mysticalagriculture:essence/common/copper_ingot'])
  e.recipes.mysticalagriculture.infusion({
    input: { item: 'mysticalagriculture:prosperity_seed_base' },
    ingredients: [{ tag: 'chisel:marble' }, { item: 'mysticalagriculture:prudentium_essence' }, { tag: 'chisel:marble' }, { item: 'mysticalagriculture:prudentium_essence' }, { tag: 'chisel:marble' }, { item: 'mysticalagriculture:prudentium_essence' }, { tag: 'chisel:marble' }, { item: 'mysticalagriculture:prudentium_essence' }],
    result: { item: 'mysticalagriculture:marble_seeds' }
  }).id('kubejs:mysticalagriculture/marble_seeds')

  maDisabledSeeds.forEach(type => {
    utils.listOf(['seeds', 'essence']).forEach(name => {
      e.remove({ output: `mysticalagriculture:${type}_${name}` , id: '/mysticalagriculture/' })
      e.remove({ input: `mysticalagriculture:${type}_${name}` , id: '/mysticalagriculture/' })
    })
  })

  let fish = [
    'aquaculture:arapaima',
    'aquaculture:atlantic_cod',
    'aquaculture:atlantic_halibut',
    'aquaculture:atlantic_herring',
    'aquaculture:bayad',
    'aquaculture:blackfish',
    'aquaculture:bluegill',
    'aquaculture:boulti',
    'aquaculture:brown_shrooma',
    'aquaculture:brown_trout',
    'aquaculture:capitaine',
    'aquaculture:carp',
    'aquaculture:catfish',
    'aquaculture:gar',
    'aquaculture:minnow',
    'aquaculture:muskellunge',
    'aquaculture:pacific_halibut',
    'aquaculture:perch',
    'aquaculture:pink_salmon',
    'aquaculture:piranha',
    'aquaculture:pollock',
    'aquaculture:rainbow_trout',
    'aquaculture:red_grouper',
    'aquaculture:red_shrooma',
    'aquaculture:smallmouth_bass',
    'aquaculture:synodontis',
    'aquaculture:tambaqui',
    'aquaculture:tuna',
    'upgrade_aquatic:lionfish',
    'upgrade_aquatic:perch',
    'upgrade_aquatic:pike',
  ];

  fish.forEach(name => {
    e.custom({
      type: 'mysticalagriculture:soul_extraction',
      input: {
        item: name
      },
      output: {
        type: 'mysticalagriculture:fish',
        souls: 0.5
      }
    })
  })
})
