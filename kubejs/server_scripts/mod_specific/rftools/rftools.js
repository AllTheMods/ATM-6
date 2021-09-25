onEvent('recipes', e => {
  e.shaped('rftoolsbuilder:builder', ['aea', 'rmr', 'ara'], {
    a: '#forge:nuggets/allthemodium',
    e: '#forge:ender_pearls',
    r: '#forge:storage_blocks/redstone',
    m: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftools/builder`)

  utils.listOf(['rftoolsbase:filter_module', 'rftoolspower:dimensionalcell_simple', 'rftoolspower:dimensionalcell', 'rftoolspower:dimensionalcell_advanced', 'rftoolspower:powercell_card', 'rftoolsutility:syringe']).forEach(reset => e.shapeless(reset, reset))

  removeRecipeByID(e, [
    'rftoolsbuilder:builder'
  ])
})