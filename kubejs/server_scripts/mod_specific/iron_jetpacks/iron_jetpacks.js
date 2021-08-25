onEvent('recipes', e => {
  e.shaped('ironjetpacks:creative_cell', [
    ' A ',
    'BCB',
    ' A '
  ], {
    A: '#forge:storage_blocks/redstone',
    B: 'allthemodium:unobtainium_block',
    C: 'powah:battery_nitro'
  })
  
  e.shaped('ironjetpacks:creative_thruster', [
    'ABA',
    'BCB',
    'ADA'
  ], {
    A: 'allthemodium:unobtainium_block',
    B: 'powah:nitro_crystal_block',
    C: 'ironjetpacks:creative_cell',
    D: 'ironfurnaces:unobtainium_furnace'
  })

  e.shaped('ironjetpacks:creative_capacitor', [
    'ADA',
    'BEB',
    'CFC'
  ], {
    A: 'create:refined_radiance_casing',
    B: 'create:shadow_steel_casing',
    C: 'extradisks:advanced_machine_casing',
    D: 'industrialforegoing:mycelial_reactor',
    E: 'mekanism:ultimate_induction_cell',
    F: 'powah:reactor_nitro'
  })

  e.shaped('ironjetpacks:creative_jetpack', [
    'ACA',
    'BFB',
    'DED'
  ], {
    A: 'mysticalagradditions:creative_essence',
    B: 'allthemodium:vibranium_allthemodium_alloy_block',
    C: 'ironjetpacks:creative_capacitor',
    D: 'ironjetpacks:creative_thruster',
    E: 'atmadditions:atm_star',
    F: 'ironjetpacks:unobtainium_jetpack'
  })
})
