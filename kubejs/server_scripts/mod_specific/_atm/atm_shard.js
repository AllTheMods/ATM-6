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
    B: `powah:charged_snowball`,
    C: `thermal:energy_cell`,
    D: shard,
    E: `thermal:lightning_charge`
  })
  modifyShaped(e, 'extradisks:infinite_fluid_storage_part', 1, ['ADA', 'BCB', 'ABA'], {
    A: 'refinedstorage:advanced_processor',
    B: 'extradisks:1048576k_fluid_storage_part',
    C: shard,
    D: '#forge:ingots/unobtainium'
  })
  modifyShaped(e, 'extradisks:infinite_storage_part', 1, ['ADA', 'BCB', 'ABA'], {
    A: 'refinedstorage:advanced_processor',
    B: 'extradisks:1048576k_storage_part',
    C: shard,
    D: '#forge:ingots/unobtainium'
  })
  modifyShaped(e, 'creativewirelesstransmitter:creative_wireless_transmitter', 1, ['ABA', 'ACA', 'ADA'], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'refinedstorage:wireless_transmitter',
    C: shard,
    D: 'rsinfinitybooster:dimension_card'
  })

  removeRecipeByOutput(e, [
    shard
  ])
})