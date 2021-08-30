onEvent('recipes', e => {
  e.remove({id:'thermal:storage/onion_block'})

  e.shaped('thermal:machine_efficiency_creative_augment', ['ABA','CDC','AEA'], {
    A: 'thermal:upgrade_augment_3',
    B: `powah:charged_snowball`,
    C: `thermal:energy_cell`,
    D: 'atmadditions:atm_star',
    E: `thermal:lightning_charge`
  })
  e.shaped('thermal:onion_block', ['OOO','OOO','OOO'], {O: '#forge:crops/onion'})
})
