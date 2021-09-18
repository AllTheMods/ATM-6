onEvent('recipes', e => {
  energize([
      'immersiveengineering:capacitor_lv',
      'immersiveengineering:capacitor_mv',
      'immersiveengineering:capacitor_hv',
      'atmadditions:atm_star'
  ], 'immersiveengineering:capacitor_creative', '2147483647')

  e.custom({
      type: 'immersivepetroleum:hydrotreater',
      time: 1,
      energy: 512,
      result: {
          fluid: 'immersivepetroleum:diesel',
          amount: 7
      },
      input: {
          tag: 'forge:diesel_sulfur',
          amount: 7
      },
      secondary_input: {
          tag: 'minecraft:water',
          amount: 7
      },
      secondary_result: {
          item: 'immersiveengineering:dust_sulfur',
          chance: '0.02'
      }
  }).id('kubejs:immersivepetroleum/hydrotreater/diesel')

  e.shaped('8x engineersdecor:slag_brick_block', ['BBB', 'BSB', 'BBB'], {
      B: '#engineersdecor:brick_ingots',
      S: '#forge:slag'
  }).id('kubejs:engineersdecor/slag_brick_block')
  e.shaped('12x immersiveengineering:concrete', ['SBS', 'GUG', 'SBS'], {
      B: '#forge:clay',
      S: '#forge:slag',
      G: '#forge:gravel',
      U: ['minecraft:water_bucket', 'create:honey_bucket', 'create:chocolate_bucket', 'mahoutsukai:murky_bucket']
  }).id('kubejs:immersiveengineering/concrete')

  removeRecipeByID([
      /^immersiveengineering:crafting\/ingot_.*_to_storage_.*/,
      'immersivepetroleum:hydrotreater/sulfur_recovery',
      'immersiveengineering:crusher/nether_wart',
      'immersiveengineering:crafting/concrete2',
      'engineerstools:crushing/aluminium_grit_crushing_recipe',
      'engineersdecor:dependent/slag_brick_block_recipe'
  ])

  modifyShaped('engineerstools:crushing_hammer', 1, ['RI ', 'BS ', '  S'], {
      R: '#forge:string',
      I: '#forge:ingots/iron',
      B: '#forge:storage_blocks/iron',
      S: '#forge:rods/wooden'
  })
  modifyShaped('immersiveengineering:cloche', 1, ['GEG', 'G G', 'TRT'], {
      G: '#forge:glass',
      E: 'immersiveengineering:electron_tube',
      T: '#forge:treated_wood',
      R: 'mekanism:resistive_heater'
  })
})