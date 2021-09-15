onEvent('recipes', e => {
  utils.listOf(['energy_cell', 'reactor', 'furnator', 'magmator', 'thermo_generator', 'solar_panel', 'player_transmitter', 'energy_hopper', 'energy_discharger', 'energizing_rod']).forEach(type => {
    utils.listOf(['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro']).forEach(tier => {
      e.shapeless(item.of(`powah:${type}_${tier}`), `powah:${type}_${tier}`)
    })
  })

  energize(['powah:energy_cell_nitro', 'powah:energy_cell_nitro', 'atmadditions:atm_star', 'powah:energy_cell_nitro', 'powah:energy_cell_nitro'], 'powah:energy_cell_creative', '2147483647')
  energize([{ tag: 'forge:storage_blocks/iron' }, { tag: 'forge:storage_blocks/gold' }], 'powah:energized_steel_block', '90000', 2)
  energize([{ item: 'botania:blaze_block' }], 'powah:blazing_crystal_block', '810000')
  energize([{ tag: 'forge:storage_blocks/diamond' }], 'powah:niotic_crystal_block', '2700000')
  energize([{ tag: 'forge:storage_blocks/emerald' }], 'powah:spirited_crystal_block', '9000000')

  e.shaped('powah:thermoelectric_plate', ['BAB', 'ACA', 'BAB'], {
    B: '#forge:rods/blaze',
    A: 'mekanism:alloy_infused',
    C: 'powah:capacitor_basic_tiny'
  }).id('kubejs:powah/thermoelectric_plate')

  removeRecipeByID([
    'powah:crafting/thermoelectric_plate'
  ])
})