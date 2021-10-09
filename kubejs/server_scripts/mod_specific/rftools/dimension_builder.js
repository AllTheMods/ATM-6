onEvent('recipes', e => {
  e.remove({ id: 'rftoolsdim:dimension_builder' })

  e.shaped('rftoolsdim:dimension_builder', ['USU', 'MCM', 'BAB'], {
    U: 'kubejs:uu_matter',
    S: 'atmadditions:dimensional_seed',
    A: 'atmadditions:atm_star',
    M: 'mekanism:pellet_antimatter',
    B: 'thermal:enderium_block',
    C: 'rftoolsbase:machine_frame'
  }).id('kubejs:rftoolsdim/dimension_builder')
})
