onEvent('recipes', e => {
  energize(e, [
    'immersiveengineering:capacitor_lv',
    'immersiveengineering:capacitor_mv',
    'immersiveengineering:capacitor_hv',
    'atmadditions:atm_star'
  ], 'immersiveengineering:capacitor_creative', '2147483647')

  e.custom({
    type: 'immersivepetroleum:hydrotreater',
    time: 1,
    energy: 512,
    result: { fluid: 'immersivepetroleum:diesel', amount: 7 },
    input: { tag: 'forge:diesel_sulfur', amount: 7 },
    secondary_input: { tag: 'minecraft:water', amount: 7 },
    secondary_result: { item: 'thermal:sulfur_dust', chance: '0.02' }
  }).id('kubejs:immersivepetroleum/hydrotreater/diesel')
  e.custom({
    type: 'immersivepetroleum:distillation',
    byproducts: [
      { item: 'thermal:bitumen', chance: 0.07 }
    ],
    results: [
      { fluid: 'immersivepetroleum:lubricant', amount: 9 },
      { fluid: 'immersivepetroleum:diesel_sulfur', amount: 14 },
      { fluid: 'immersivepetroleum:gasoline', amount: 39 }
    ],
    input: { tag: 'forge:crude_oil', amount: 75 },
    time: 1,
    energy: 2048
  }).id('kubejs:immersivepetroleum/distillation/oilcracking')

  modifyShaped(e, 'engineersdecor:slag_brick_block', 8, ['BBB', 'BSB', 'BBB'], {
    B: '#engineersdecor:brick_ingots',
    S: '#forge:slag'
  })
  modifyShaped(e, 'immersiveengineering:concrete', 12, ['SBS', 'GUG', 'SBS'], {
    B: '#forge:storage_blocks/clay',
    S: ['#forge:slag', '#forge:sand'],
    G: '#forge:gravel',
    U: '#misctags:water/items'
  })
  e.shapeless('immersiveengineering:concrete', ['immersiveengineering:slab_concrete', 'immersiveengineering:slab_concrete',]).id('kubejs:immersiveengineering/concrete_slab_combine')
  modifyShaped(e, 'immersivepetroleum:asphalt', 8, ['SBS', 'GOG', 'SBS'], {
    B: '#forge:bitumen',
    S: ['#forge:sand', '#forge:slag'],
    G: '#forge:gravel',
    O: '#misctags:water/items'
  })
  e.shapeless('immersivepetroleum:asphalt', ['immersivepetroleum:asphalt_slab', 'immersivepetroleum:asphalt_slab',]).id('kubejs:immersivepetroleum/asphalt_slab_combine')
  modifyShaped(e, 'engineerstools:crushing_hammer', 1, ['RI ', 'BS ', '  S'], {
    R: '#forge:string',
    I: '#forge:ingots/iron',
    B: '#forge:storage_blocks/iron',
    S: '#forge:rods/wooden'
  })
  modifyShaped(e, 'immersiveengineering:cloche', 1, ['GEG', 'G G', 'TRT'], {
    G: '#forge:glass',
    E: 'immersiveengineering:electron_tube',
    T: '#forge:treated_wood',
    R: 'mekanism:resistive_heater'
  })

  removeRecipeByID(e, [
    /^immersiveengineering:crafting\/ingot_.*_to_storage_.*/,
    'immersivepetroleum:hydrotreater/sulfur_recovery',
    'immersiveengineering:crusher/nether_wart',
    'engineerstools:crushing/aluminium_grit_crushing_recipe',
    'immersivepetroleum:distillationtower/oilcracking'
  ])
})
