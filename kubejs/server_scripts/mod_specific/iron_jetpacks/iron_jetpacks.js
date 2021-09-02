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
  e.shaped('ironjetpacks:diamond_cell', [
    ' R ',
    'TCT',
    ' R '
  ], {
    'R': '#forge:dusts/redstone',
    'C': 'ironjetpacks:advanced_coil',
    'T': '#forge:gems/diamond'
  }).id(`kubejs:diamond_cell`)
  e.shaped('ironjetpacks:diamond_thruster', [
    'TAT',
    'ACA',
    'TFT'
  ], {
    'F': 'minecraft:furnace',
    'A': 'ironjetpacks:advanced_coil',
    'C': 'ironjetpacks:diamond_cell',
    'T': '#forge:gems/diamond'
  }).id(`kubejs:diamond_thruster`)
  e.shaped('ironjetpacks:diamond_capacitor', [
    'RCR',
    'RCR',
    'RCR'
  ], {
    'R': '#forge:gems/diamond',
    'C': 'ironjetpacks:diamond_cell'
  }).id(`kubejs:diamond_capacitor`)
  e.shaped('ironjetpacks:diamond_jetpack', [
    'DCD',
    'DJD',
    'TRT'
  ], {
    'D': '#forge:gems/diamond',
    'C': 'ironjetpacks:diamond_capacitor',
    'J': ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
    'T': 'ironjetpacks:diamond_thruster',
    'R': 'angelring:itemdiamondring'
  }).id(`kubejs:diamond_jetpack`)
  e.shaped('ironjetpacks:platinum_cell', [
    ' R ',
    'TCT',
    ' R '
  ], {
    'R': '#forge:dusts/redstone',
    'C': 'ironjetpacks:advanced_coil',
    'T': '#forge:ingots/platinum'
  }).id(`kubejs:platinum_cell`)
  e.shaped('ironjetpacks:platinum_thruster', [
    'TAT',
    'ACA',
    'TFT'
  ], {
    'F': 'minecraft:furnace',
    'A': 'ironjetpacks:advanced_coil',
    'C': 'ironjetpacks:platinum_cell',
    'T': '#forge:ingots/platinum'
  }).id(`kubejs:platinum_thruster`)
  e.shaped('ironjetpacks:platinum_capacitor', [
    'RCR',
    'RCR',
    'RCR'
  ], {
    'R': '#forge:ingots/platinum',
    'C': 'ironjetpacks:platinum_cell'
  }).id(`kubejs:platinum_capacitor`)
  e.shaped('ironjetpacks:platinum_jetpack', [
    'PCP',
    'PJP',
    'TRT'
  ], {
    'P': '#forge:ingots/platinum',
    'C': 'ironjetpacks:platinum_capacitor',
    'J': ['ironjetpacks:steel_jetpack', 'ironjetpacks:electrum_jetpack', 'ironjetpacks:invar_jetpack'],
    'T': 'ironjetpacks:platinum_thruster',
    'R': 'angelring:itemdiamondring'
  }).id(`kubejs:platinum_jetpack`)
})
