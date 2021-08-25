onEvent('recipes', e => {
  e.shaped('ctiers:centrifuge_casing_tier_creative', [
    'IRG',
    'RTR',
    'DRE'
  ], {
    I: 'compressium:iron_2',
    R: 'compressium:redstone_2',
    G: 'compressium:gold_2',
    T: 'ctiers:centrifuge_casing_tier_5',
    D: 'compressium:diamond_2',
    E: 'compressium:emerald_2'
  })

  e.shaped('ctiers:centrifuge_controller_tier_creative', [
    'ICG',
    'HSH',
    'DHE'
  ], {
    I: 'compressium:iron_5',
    C: 'ctiers:centrifuge_casing_tier_creative',
    G: 'compressium:gold_5',
    S: 'atmadditions:atm_star',
    D: 'compressium:diamond_5',
    E: 'compressium:emerald_5',
    H: 'compressium:honey_5'
  })
})