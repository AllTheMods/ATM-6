onEvent('recipes', e => {
  let shard = 'atmadditions:atm_star_shard'

  modifyShapeless(e, 'atmadditions:allthecatalystium', 32, shard)
  modifyShaped(e, 'pipez:infinity_upgrade', 16, ['ABA', 'BCB', 'ADA'], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'compressium:redstone_4',
    C: 'pipez:ultimate_upgrade',
    D: shard
  })
  modifyShaped(e, 'thermal:machine_efficiency_creative_augment', 1, ['ABA', 'CDC', 'AEA'], {
    A: 'thermal:upgrade_augment_3',
    B: 'powah:charged_snowball',
    C: 'thermal:energy_cell',
    D: shard,
    E: 'thermal:lightning_charge'
  })

  removeRecipeByOutput(e, [
    shard
  ])
})
