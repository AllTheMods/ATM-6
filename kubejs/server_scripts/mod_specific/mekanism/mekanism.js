onEvent('recipes', e => {
  e.shaped('mekanism:creative_energy_cube', [
    'ATA',
    'VCV',
    'ATA'
  ], {
    A: 'mekanism:alloy_atomic',
    T: 'mekanism:energy_tablet',
    V: 'allthemodium:vibranium_block',
    C: 'mekanism:ultimate_energy_cube'
  })
})
