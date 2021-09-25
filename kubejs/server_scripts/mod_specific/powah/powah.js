onEvent('recipes', e => {
  utils.listOf(['energy_cell', 'reactor', 'furnator', 'magmator', 'thermo_generator', 'solar_panel', 'player_transmitter', 'energy_hopper', 'energy_discharger', 'energizing_rod']).forEach(type => {
    utils.listOf(['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro']).forEach(tier => {
      e.shapeless(item.of(`powah:${type}_${tier}`), `powah:${type}_${tier}`)
    })
  })

  energize(e, ['powah:energy_cell_nitro', 'powah:energy_cell_nitro', 'atmadditions:atm_star', 'powah:energy_cell_nitro', 'powah:energy_cell_nitro'], 'powah:energy_cell_creative', '2147483647')

  e.shaped('powah:thermoelectric_plate', ['BAB', 'ACA', 'BAB'], {
    B: '#forge:rods/blaze',
    A: 'mekanism:alloy_infused',
    C: 'powah:capacitor_basic_tiny'
  }).id('kubejs:powah/thermoelectric_plate')

  removeRecipeByID(e, [
    'powah:crafting/thermoelectric_plate'
  ])
})