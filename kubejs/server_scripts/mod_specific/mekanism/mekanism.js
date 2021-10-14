onEvent('recipes', e => {
  e.shaped('mekanism:creative_energy_cube', ['ATA', 'VCV', 'ATA'], {
    A: 'mekanism:alloy_atomic',
    T: 'mekanism:energy_tablet',
    V: 'allthemodium:vibranium_block',
    C: 'mekanism:ultimate_energy_cube'
  }).id('kubejs:mekanism/creative_energy_cube')
  modifyShaped(e, 'mekanism:digital_miner', 1, ['AUA', 'LRL', 'TST'], {
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    A: '#mekanism:alloys/atomic',
    S: 'mekanism:steel_casing',
    U: '#forge:ingots/allthemodium'
  })
  modifyShaped(e, 'mekanism:atomic_disassembler', 1, ['RER', 'RUR', ' V '], {
    E: 'mekanism:energy_tablet',
    R: '#mekanism:alloys/reinforced',
    U: '#forge:circuits/ultimate',
    V: '#forge:ingots/vibranium'
  })
  modifyShaped(e, 'mekanism:chemical_oxidizer', 1, ['RCR', 'PDT', 'RCR'], {
    R: 'mekanism:alloy_infused',
    C: 'mekanism:basic_control_circuit',
    P: 'mekanism:personal_chest',
    D: 'mekanism:dynamic_tank',
    T: 'mekanism:basic_chemical_tank'
  })
  modifyShaped(e, 'mekanism:robit', 1, [' S ', 'ERE', 'OPO'], {
    R: 'mekanism:alloy_atomic',
    S: '#forge:ingots/steel',
    E: 'mekanism:energy_tablet',
    O: 'mekanism:ingot_refined_obsidian',
    P: 'mekanism:personal_chest'
  })
  modifyShaped(e, 'mekanism:laser_tractor_beam', 1, ['P', 'L'], {
    P: 'mekanism:personal_chest',
    L: 'mekanism:laser_amplifier'
  })
  modifyShaped(e, 'mekanism:mekasuit_helmet', 1, ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_helmet'
  })
  modifyShaped(e, 'mekanism:mekasuit_bodyarmor', 1, ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_chestplate'
  })
  modifyShaped(e, 'mekanism:mekasuit_pants', 1, ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_leggings'
  })
  modifyShaped(e, 'mekanism:mekasuit_boots', 1, ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_boots'
  })

  e.recipes.mekanism.crushing('2x mekanism:bio_fuel', '#misctags:biofuel2')
  e.recipes.mekanism.crushing('4x mekanism:bio_fuel', '#misctags:biofuel4')
  e.recipes.mekanism.crushing('5x mekanism:bio_fuel', '#misctags:biofuel5')
  e.recipes.mekanism.crushing('7x mekanism:bio_fuel', '#misctags:biofuel7')
  e.recipes.mekanism.crushing('8x mekanism:bio_fuel', '#misctags:biofuel8')
  e.recipes.mekanism.sawing('8x thermal:sawdust', 'byg:imbued_nightshade_log').id('kubejs:saw/byg_log_imbued_nightshade')
  e.recipes.mekanism.combining('minecraft:diamond_ore', '5x #forge:dusts/diamond', '#forge:cobblestone').id('kubejs:combiner/diamond')
  e.recipes.mekanism.combining('minecraft:emerald_ore', '5x #forge:dusts/emerald', '#forge:cobblestone').id('kubejs:combiner/emerald')

  utils.listOf(['aspen', 'baobab', 'blue_enchanted', 'cherry', 'cika', 'cypress', 'ebony', 'ether', 'fir', 'green_enchanted', 'holly', 'jacaranda', 'lament', 'mahogany', 'mangrove', 'maple', 'nightshade', 'palm', 'pine', 'rainbow_eucalyptus', 'redwood', 'skyris', 'willow', 'witch_hazel', 'zelkova']).forEach(type => {
    e.recipes.mekanism.sawing(
      `6x byg:${type}_planks`,
      [`byg:stripped_${type}_log`, `byg:${type}_log`],
      Item.of('thermal:sawdust').withChance(0.25)
    ).id(`kubejs:saw/byg_log_${type}`)
  })

  removeRecipeByID(e, [
    /^mekanism:processing\/.*\/storage_blocks\/from_ingots/,
    'mekanism:storage_blocks/bronze',
    'mekanism:processing/diamond/to_dust',
    'mekanism:gas_conversion/salt_to_hydrogen_chloride',
    'mekanism:bio_fuel',
    'mekanism:storage_blocks/bronze',
    'mekanism:processing/diamond/to_ore',
    'mekanism:processing/emerald/to_ore'
  ])
  removeRecipeByOutput(e, [
    'mekanism:block_charcoal',
    'mekanism:upgrade_anchor'
  ])

})
