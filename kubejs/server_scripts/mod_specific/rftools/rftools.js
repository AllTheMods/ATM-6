onEvent('recipes', e => {
  utils.listOf(['rftoolsbase:filter_module', 'rftoolspower:dimensionalcell_simple', 'rftoolspower:dimensionalcell', 'rftoolspower:dimensionalcell_advanced', 'rftoolspower:powercell_card', 'rftoolsutility:syringe']).forEach(reset => e.shapeless(reset, reset))
  modifyShaped(e, 'rftoolsbuilder:builder', 1, ['aea', 'rmr', 'ara'], {
    a: '#forge:nuggets/allthemodium',
    e: '#forge:ender_pearls',
    r: '#forge:storage_blocks/redstone',
    m: 'rftoolsbase:machine_frame'
  })
  modifyShaped(e, 'rftoolsdim:dimension_builder', 1, ['USU', 'MCM', 'BAB'], {
    U: 'kubejs:uu_matter',
    S: 'atmadditions:dimensional_seed',
    A: 'atmadditions:atm_star',
    M: 'mekanism:pellet_antimatter',
    B: 'thermal:enderium_block',
    C: 'rftoolsbase:machine_frame'
  })
  e.recipes.thermal.press('rftoolsdim:dimensional_blank_block', '4x rftoolsbase:dimensionalshard')
  e.recipes.thermal.press('4x rftoolsbase:dimensionalshard', ['1x rftoolsdim:dimensional_blank_block', 'thermal:press_unpacking_die'])
})
