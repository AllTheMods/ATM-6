onEvent('recipes', e => {
  e.shaped('rats:creative_cheese', [
    'CCC',
    'CSC',
    'CCC'
  ], {
    C: '#forge:cheese_block',
    S: 'atmadditions:atm_star'
  })

  e.shaped('rats:rat_upgrade_creative', [
    'CUC',
    'USU',
    'CUC'
  ], {
    C: '#forge:cheese_block',
    U: 'rats:rat_upgrade_block',
    S: 'atmadditions:atm_star'
  })

  e.shaped('rats:rat_upgrade_combined_creative', [
    'RUR',
    'USU',
    'RUR'
  ], {
    R: 'rats:idol_of_ratlantis',
    U: 'rats:rat_upgrade_combined',
    S: 'atmadditions:atm_star'
  })
})