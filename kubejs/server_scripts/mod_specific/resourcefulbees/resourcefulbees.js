onEvent('recipes', e => {
  e.shaped('minecraft:water_bucket', [' C ', 'CBC', ' C '], {
    C: 'resourcefulbees:water_honeycomb',
    B: 'minecraft:bucket'
  }).id(`kubejs:minecraft/water_bucket`)

  e.shaped('minecraft:lava_bucket', [' C ', 'CBC', ' C '], {
    C: 'resourcefulbees:lava_honeycomb',
    B: 'minecraft:bucket'
  }).id(`kubejs:minecraft/lava_bucket`)

  modifyShaped(e, 'resourcefulbees:bee_jar', 16, [' G ', 'G G', 'GGG'], {
    G: '#forge:glass'
  })

  modifyShaped(e, 'creativeapiary:tcreative_apiary', 1, ['HMH', 'MCM', 'TAT'], {
    H: 'compressium:honey_6',
    M: 'mekanism:pellet_antimatter',
    C: 'ctiers:centrifuge_controller_tier_creative',
    T: 'resourcefulbees:t4_apiary',
    A: 'allthemodium:unobtainium_allthemodium_alloy_block'
  })

  modifyShaped(e, 'creativeapiary:creative_apiary_storage', 1, ['HNH', 'CAC', 'NHN'], {
    H: 'compressium:honey_3',
    N: 'allthecompressed:nether_star_block',
    C: 'ctiers:centrifuge_casing_tier_creative',
    A: 'resourcefulbees:apiary_storage'
  })

  modifyShaped(e, 'creativeapiary:creative_apiary_breeder', 1, ['BNB', 'NBN', 'BNB'], {
    B: 'resourcefulbees:apiary_breeder',
    N: 'allthecompressed:nether_star_block'
  })

  modifyShaped(e, 'ctiers:centrifuge_casing_tier_creative', 1, ['IRG', 'RTR', 'DRE'], {
    I: 'compressium:iron_2',
    R: 'compressium:redstone_2',
    G: 'compressium:gold_2',
    T: 'ctiers:centrifuge_casing_tier_5',
    D: 'compressium:diamond_2',
    E: 'compressium:emerald_2'
  })

  modifyShaped(e, 'ctiers:centrifuge_controller_tier_creative', 1, ['ICG', 'HSH', 'DHE'], {
    I: 'compressium:iron_5',
    C: 'ctiers:centrifuge_casing_tier_creative',
    G: 'compressium:gold_5',
    S: 'atmadditions:atm_star',
    D: 'compressium:diamond_5',
    E: 'compressium:emerald_5',
    H: 'compressium:honey_5'
  })

  modifyShaped(e, 'resourcefulbees:elite_centrifuge_casing', 3, ['NBN', 'BNB', 'NRN'], {
    B: 'resourcefulbees:centrifuge_casing',
    N: 'minecraft:netherite_ingot',
    R: 'minecraft:redstone'
  })

  modifyShaped(e, 'resourcefulbees:elite_centrifuge_controller', 1, ['BNB', 'NCN', 'BNB'], {
    B: 'resourcefulbees:elite_centrifuge_casing',
    N: 'minecraft:netherite_block',
    C: 'resourcefulbees:centrifuge_controller'
  })

  modifyShaped(e, 'resourcefulbees:centrifuge_controller', 1, ['ICI', 'BAB', 'IRI'], {
    I: 'resourcefulbees:centrifuge_casing',
    C: 'resourcefulbees:centrifuge',
    B: 'minecraft:iron_bars',
    A: 'minecraft:comparator',
    R: '#forge:storage_blocks/redstone'
  })

  removeRecipeByOutput(e, [
    'creativeapiary:tcreative_apiary'
  ])
})
