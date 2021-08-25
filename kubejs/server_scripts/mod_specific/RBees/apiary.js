onEvent('recipes', e => {
  e.shaped('creativeapiary:tcreative_apiary', [
    'HMH',
    'MCM',
    'TAT'
  ], {
    H: 'compressium:honey_6',
    M: 'mekanism:pellet_antimatter',
    C: 'ctiers:centrifuge_controller_tier_creative',
    T: 'resourcefulbees:t4_apiary',
    A: 'allthemodium:unobtainium_allthemodium_alloy_block'
  })

  e.shaped('creativeapiary:creative_apiary_storage', [
    'HNH',
    'CAC',
    'NHN'
  ], {
    H: 'compressium:honey_3',
    N: 'kubejs:nether_star_block',
    C: 'ctiers:centrifuge_casing_tier_creative',
    A: 'resourcefulbees:apiary_storage'
  })

  e.shaped('creativeapiary:creative_apiary_breeder', [
    'BNB',
    'NBN',
    'BNB'
  ], {
    B: 'resourcefulbees:apiary_breeder',
    N: 'kubejs:nether_star_block'
  })
})