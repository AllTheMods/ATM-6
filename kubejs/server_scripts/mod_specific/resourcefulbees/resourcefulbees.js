onEvent('recipes', e => {
  e.shaped('16x resourcefulbees:bee_jar', [' G ', 'G G', 'GGG'], { G: '#forge:glass' }).id(`kubejs:resourcefulbees/bee_jar`)
  e.shaped('creativeapiary:tcreative_apiary', ['HMH', 'MCM', 'TAT'], {
    H: 'compressium:honey_6',
    M: 'mekanism:pellet_antimatter',
    C: 'ctiers:centrifuge_controller_tier_creative',
    T: 'resourcefulbees:t4_apiary',
    A: 'allthemodium:unobtainium_allthemodium_alloy_block'
  }).id(`kubejs:resourcefulbees/tcreative_apiary`)
  e.shaped('creativeapiary:creative_apiary_storage', ['HNH', 'CAC', 'NHN'], {
    H: 'compressium:honey_3',
    N: 'allthecompressed:nether_star_block',
    C: 'ctiers:centrifuge_casing_tier_creative',
    A: 'resourcefulbees:apiary_storage'
  }).id(`kubejs:resourcefulbees/creative_apiary_storage`)
  e.shaped('creativeapiary:creative_apiary_breeder', ['BNB', 'NBN', 'BNB'], {
    B: 'resourcefulbees:apiary_breeder',
    N: 'allthecompressed:nether_star_block'
  }).id(`kubejs:resourcefulbees/creative_apiary_breeder`)
  e.shaped('minecraft:water_bucket', [' C ', 'CBC', ' C '], {
    C: 'resourcefulbees:water_honeycomb',
    B: 'minecraft:bucket'
  }).id(`kubejs:minecraft/water_bucket`)
  e.shaped('minecraft:lava_bucket', [' C ', 'CBC', ' C '], {
    C: 'resourcefulbees:lava_honeycomb',
    B: 'minecraft:bucket'
  }).id(`kubejs:minecraft/lava_bucket`)
  e.shaped('ctiers:centrifuge_casing_tier_creative', ['IRG', 'RTR', 'DRE'], {
    I: 'compressium:iron_2',
    R: 'compressium:redstone_2',
    G: 'compressium:gold_2',
    T: 'ctiers:centrifuge_casing_tier_5',
    D: 'compressium:diamond_2',
    E: 'compressium:emerald_2'
  }).id(`kubejs:resourcefulbees/centrifuge_casing_tier_creative`)
  e.shaped('ctiers:centrifuge_controller_tier_creative', ['ICG', 'HSH', 'DHE'], {
    I: 'compressium:iron_5',
    C: 'ctiers:centrifuge_casing_tier_creative',
    G: 'compressium:gold_5',
    S: 'atmadditions:atm_star',
    D: 'compressium:diamond_5',
    E: 'compressium:emerald_5',
    H: 'compressium:honey_5'
  }).id(`kubejs:resourcefulbees/centrifuge_controller_tier_creative`)
  e.shaped('3x resourcefulbees:elite_centrifuge_casing', ['NBN', 'BNB', 'NRN'], {
    B: 'resourcefulbees:centrifuge_casing',
    N: 'minecraft:netherite_ingot',
    R: 'minecraft:redstone'
  }).id(`kubejs:resourcefulbees/elite_centrifuge_casing`)
  e.shaped('resourcefulbees:elite_centrifuge_controller', ['BNB', 'NCN', 'BNB'], {
    B: 'resourcefulbees:elite_centrifuge_casing',
    N: 'minecraft:netherite_block',
    C: 'resourcefulbees:centrifuge_controller'
  }).id(`kubejs:resourcefulbees/elite_centrifuge_controller`)

  removeRecipeByID(e, [
    'resourcefulbees:elite_centrifuge_casing',
    'resourcefulbees:elite_centrifuge_controller',
    'creativeapiary:tcreative_apiary',
    'creativeapiary:creative_apiary_storage',
    'creativeapiary:creative_apiary_breeder'
  ])

  removeRecipeByOutput(e, [
    'resourcefulbees:bee_jar',
    'ctiers:centrifuge_casing_tier_creative',
    'ctiers:centrifuge_controller_tier_creative'
  ])

  modifyShaped(e, 'resourcefulbees:centrifuge_controller', 1, ['ICI', 'BAB', 'IRI'], {
    I: 'resourcefulbees:centrifuge_casing',
    C: 'resourcefulbees:centrifuge',
    B: 'minecraft:iron_bars',
    A: 'minecraft:comparator',
    R: '#forge:storage_blocks/redstone'
  })
})