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

  e.shaped('8x engineersdecor:slag_brick_block', ['BBB', 'BSB', 'BBB'], {
    B: '#engineersdecor:brick_ingots',
    S: '#forge:slag'
  }).id('kubejs:engineersdecor/slag_brick_block')
  e.shaped('12x immersiveengineering:concrete', ['SBS', 'GUG', 'SBS'], {
    B: '#forge:storage_blocks/clay',
    S: ['#forge:slag', '#forge:sand'],
    G: '#forge:gravel',
    U: '#misctags:water/items'
  }).id('kubejs:immersiveengineering/concrete')
  e.shaped('8x immersivepetroleum:asphalt', ['SBS', 'GOG', 'SBS'], {
    B: '#forge:bitumen',
    S: ['#forge:sand', '#forge:slag'],
    G: '#forge:gravel',
    O: '#misctags:water/items'
  }).id('kubejs:immersivepetroleum/asphalt')

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

  e.replaceInput('immersiveengineering:hammer', '#misctags:immersive_engineering_hammer')
  e.replaceInput('immersiveengineering:wirecutter', '#misctags:immersive_engineering_wirecutter')

  removeRecipeByID(e, [
    /^immersiveengineering:crafting\/ingot_.*_to_storage_.*/,
    'immersivepetroleum:hydrotreater/sulfur_recovery',
    'immersiveengineering:crusher/nether_wart',
    'immersiveengineering:crafting/concrete2',
    'engineerstools:crushing/aluminium_grit_crushing_recipe',
    'engineersdecor:dependent/slag_brick_block_recipe',
    'immersivepetroleum:distillationtower/oilcracking'
  ])

  removeRecipeByOutput(e, [
    'immersivepetroleum:asphalt'
  ])
})
