onEvent('recipes', e => {
  e.shaped('thermal:machine_efficiency_creative_augment', [
    'ABA',
    'CDC',
    'AEA'
  ], {
    A: 'thermal:upgrade_augment_3',
    B: `powah:charged_snowball`,
    C: `thermal:energy_cell`,
    D: 'atmadditions:atm_star',
    E: `thermal:lightning_charge`
  })
})
