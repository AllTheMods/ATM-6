onEvent('recipes', e => {
  utils.listOf(['energy_cell', 'reactor', 'furnator', 'magmator', 'thermo_generator', 'solar_panel', 'player_transmitter', 'energy_hopper', 'energy_discharger', 'energizing_rod']).forEach(type => {
    utils.listOf(['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro']).forEach(tier => {
      e.shapeless(item.of(`powah:${type}_${tier}`), `powah:${type}_${tier}`)
    })
  })
  energize(e, ['powah:energy_cell_nitro', 'powah:energy_cell_nitro', 'atmadditions:atm_star', 'powah:energy_cell_nitro', 'powah:energy_cell_nitro'], 'powah:energy_cell_creative', '2147483647')
})
