onEvent('recipes', e => {
  utils.listOf(['energy_cell', 'reactor', 'furnator', 'magmator', 'thermo_generator', 'solar_panel', 'player_transmitter', 'energy_hopper', 'energy_discharger', 'energizing_rod']).forEach(type => {
    utils.listOf(['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro']).forEach(tier => {
      e.shapeless(item.of(`powah:${type}_${tier}`), `powah:${type}_${tier}`).id(`kubejs:powah/nbt_reset/${type}/${tier}`)
    })
  })
  energize(e, ['powah:energy_cell_nitro', 'powah:energy_cell_nitro', 'atmadditions:atm_star', 'powah:energy_cell_nitro', 'powah:energy_cell_nitro'], 'powah:energy_cell_creative', '2147483647')

  modifyShaped(e, 'powah:reactor_basic', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_starter',
    C: 'powah:capacitor_basic_large',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(e, 'powah:reactor_hardened', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_basic',
    C: 'powah:capacitor_hardened',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(e, 'powah:reactor_blazing', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_hardened',
    C: 'powah:capacitor_blazing',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(e, 'powah:reactor_niotic', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_blazing',
    C: 'powah:capacitor_niotic',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(e, 'powah:reactor_spirited', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_niotic',
    C: 'powah:capacitor_spirited',
    D: 'powah:dielectric_casing'
  })
  modifyShaped(e, 'powah:reactor_nitro', 4, ['RCR', 'CDC', 'RCR'], {
    R: 'powah:reactor_spirited',
    C: 'powah:capacitor_nitro',
    D: 'powah:dielectric_casing'
  })
  removeRecipeByID(e, [
    'powah:crafting/energy_cell_basic'
  ])
})
