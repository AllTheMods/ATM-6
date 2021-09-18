onEvent('recipes', e => {
  e.shaped('mekanism:creative_energy_cube', ['ATA', 'VCV', 'ATA'], {
      A: 'mekanism:alloy_atomic',
      T: 'mekanism:energy_tablet',
      V: 'allthemodium:vibranium_block',
      C: 'mekanism:ultimate_energy_cube'
  }).id('kubejs:mekanism/creative_energy_cube')
  e.shaped('mekanism:digital_miner', ['AUA', 'LRL', 'TST'], {
      L: 'mekanism:logistical_sorter',
      R: 'mekanism:robit',
      T: 'mekanism:teleportation_core',
      A: '#mekanism:alloys/atomic',
      S: 'mekanism:steel_casing',
      U: '#forge:ingots/allthemodium'
  }).id(`kubejs:mekanism/digital_miner`)
  e.shaped('mekanism:atomic_disassembler', ['RER', 'RUR', ' V '], {
      E: 'mekanism:energy_tablet',
      R: '#mekanism:alloys/reinforced',
      U: '#forge:circuits/ultimate',
      V: '#forge:ingots/vibranium'
  }).id(`kubejs:mekanism/atomic_disassembler`)
  e.shaped('mekanismgenerators:wind_generator', [' O ', 'OCO', 'EBE'], {
      E: 'mekanism:energy_tablet',
      C: 'mekanismgenerators:electromagnetic_coil',
      B: '#forge:circuits/basic',
      O: '#forge:ingots/osmium'
  }).id(`kubejs:mekanism/wind_generator`)
  e.shaped('mekanism:advanced_bin', [' C ', 'ABA', ' U '], {
      C: 'mekanism:advanced_control_circuit',
      A: 'mekanism:alloy_infused',
      B: 'mekanism:basic_bin',
      U: 'storagedrawers:gold_storage_upgrade'
  }).id(`kubejs:mekanism/advanced_bin`)
  e.shaped('mekanism:elite_bin', [' C ', 'ABA', ' U '], {
      C: 'mekanism:elite_control_circuit',
      A: 'mekanism:alloy_reinforced',
      B: 'mekanism:advanced_bin',
      U: 'storagedrawers:diamond_storage_upgrade'
  }).id(`kubejs:mekanism/elite_bin`)
  e.shaped('mekanism:ultimate_bin', [' C ', 'ABA', ' U '], {
      C: 'mekanism:ultimate_control_circuit',
      A: 'mekanism:alloy_atomic',
      B: 'mekanism:elite_bin',
      U: 'storagedrawers:emerald_storage_upgrade'
  }).id(`kubejs:mekanism/ultimate_bin`)
  e.shaped('mekanism:basic_tier_installer', ['RCR', 'MPM', 'RCR'], {
      R: 'minecraft:redstone',
      C: 'mekanism:basic_control_circuit',
      M: 'mekanism:ingot_steel',
      P: '#minecraft:planks'
  }).id(`kubejs:mekanism/basic_tier_installer`)
  e.shaped('mekanism:advanced_tier_installer', ['RCR', 'MPM', 'RCR'], {
      R: 'mekanism:alloy_infused',
      C: 'mekanism:advanced_control_circuit',
      M: 'minecraft:gold_ingot',
      P: '#minecraft:planks'
  }).id(`kubejs:mekanism/wind_generator`)
  e.shaped('mekanism:advanced_tier_installer', ['RCR', 'MPM', 'RCR'], {
      R: 'mekanism:alloy_reinforced',
      C: 'mekanism:elite_control_circuit',
      M: 'minecraft:diamond',
      P: '#minecraft:planks'
  }).id(`kubejs:mekanism/elite_tier_installer`)
  e.shaped('mekanism:ultimate_tier_installer', ['RCR', 'MPM', 'RCR'], {
      R: 'mekanism:alloy_atomic',
      C: 'mekanism:ultimate_control_circuit',
      M: 'mekanism:ingot_refined_obsidian',
      P: '#minecraft:planks'
  }).id(`kubejs:mekanism/ultimate_tier_installer`)
  e.shaped('mekanism:chemical_oxidizer', ['RCR', 'PDT', 'RCR'], {
      R: 'mekanism:alloy_infused',
      C: 'mekanism:basic_control_circuit',
      P: 'mekanism:personal_chest',
      D: 'mekanism:dynamic_tank',
      T: 'mekanism:basic_chemical_tank'
  }).id(`kubejs:mekanism/chemical_oxidizer`)
  e.shaped('mekanism:robit', [' S ', 'ERE', 'OPO'], {
      R: 'mekanism:alloy_atomic',
      S: '#forge:ingots/steel',
      E: 'mekanism:energy_tablet',
      O: 'mekanism:ingot_refined_obsidian',
      P: 'mekanism:personal_chest'
  }).id(`kubejs:mekanism/robit`)
  e.shaped('mekanism:laser_tractor_beam', ['P', 'L'], {
      P: 'mekanism:personal_chest',
      L: 'mekanism:laser_amplifier'
  }).id(`kubejs:mekanism/laser_tractor_beam`)
  e.shaped(Item.of('mekanism:mekasuit_helmet', {
      HideFlags: 2
  }), ['HCH', 'HUH', 'PIP'], {
      H: 'mekanism:hdpe_sheet',
      C: 'mekanism:ultimate_control_circuit',
      P: 'mekanism:pellet_polonium',
      I: 'mekanism:basic_induction_cell',
      U: 'allthemodium:unobtainium_helmet'
  }).id(`kubejs:mekanism/mekasuit_helmet`)
  e.shaped(Item.of('mekanism:mekasuit_bodyarmor', {
      HideFlags: 2
  }), ['HCH', 'HUH', 'PIP'], {
      H: 'mekanism:hdpe_sheet',
      C: 'mekanism:ultimate_control_circuit',
      P: 'mekanism:pellet_polonium',
      I: 'mekanism:basic_induction_cell',
      U: 'allthemodium:unobtainium_chestplate'
  }).id(`kubejs:mekanism/mekasuit_bodyarmor`)
  e.shaped(Item.of('mekanism:mekasuit_pants', {
      HideFlags: 2
  }), ['HCH', 'HUH', 'PIP'], {
      H: 'mekanism:hdpe_sheet',
      C: 'mekanism:ultimate_control_circuit',
      P: 'mekanism:pellet_polonium',
      I: 'mekanism:basic_induction_cell',
      U: 'allthemodium:unobtainium_leggings'
  }).id(`kubejs:mekanism/mekasuit_pants`)
  e.shaped(Item.of('mekanism:mekasuit_boots', {
      HideFlags: 2
  }), ['HCH', 'HUH', 'PIP'], {
      H: 'mekanism:hdpe_sheet',
      C: 'mekanism:ultimate_control_circuit',
      P: 'mekanism:pellet_polonium',
      I: 'mekanism:basic_induction_cell',
      U: 'allthemodium:unobtainium_boots'
  }).id(`kubejs:mekanism/mekasuit_boots`)
  e.shaped('kubejs:yellow_cake_uranium_block', ['UUU', 'UUU', 'UUU'], {
    U: 'mekanism:yellow_cake_uranium'
}).id(`kubejs:mekanism/yellow_cake_uranium_block`)

  e.recipes.mekanism.crushing('2x mekanism:bio_fuel', '#misctags:biofuel2')
  e.recipes.mekanism.crushing('4x mekanism:bio_fuel', '#misctags:biofuel4')
  e.recipes.mekanism.crushing('5x mekanism:bio_fuel', '#misctags:biofuel5')
  e.recipes.mekanism.crushing('7x mekanism:bio_fuel', '#misctags:biofuel7')
  e.recipes.mekanism.crushing('8x mekanism:bio_fuel', '#misctags:biofuel8')
  e.recipes.mekanism.sawing('8x mekanism:sawdust', 'byg:imbued_nightshade_log').id('kubejs:saw/byg_log_imbued_nightshade')

  utils.listOf(['aspen', 'baobab', 'blue_enchanted', 'cherry', 'cika', 'cypress', 'ebony', 'ether', 'fir', 'green_enchanted', 'holly', 'jacaranda', 'lament', 'mahogany', 'mangrove', 'maple', 'nightshade', 'palm', 'pine', 'rainbow_eucalyptus', 'redwood', 'skyris', 'willow', 'witch_hazel', 'zelkova']).forEach(type => {
      e.recipes.mekanism.sawing(
          `6x byg:${type}_planks`,
          [`byg:stripped_${type}_log`, `byg:${type}_log`],
          Item.of('mekanism:sawdust').withChance(0.25)
      ).id(`kubejs:saw/byg_log_${type}`)
  })

  removeRecipeByID([
      /^mekanism:processing\/.*\/storage_blocks\/from_ingots/,
      'mekanism:storage_blocks/bronze',
      'mekanism:digital_miner',
      'mekanism:atomic_disassembler',
      'mekanismgenerators:wind_generator',
      'mekanism:advanced_bin',
      'mekanism:elite_bin',
      'mekanism:ultimate_bin',
      'mekanism:basic_tier_installer',
      'mekanism:advanced_tier_installer',
      'mekanism:elite_tier_installer',
      'mekanism:ultimate_tier_installer',
      'mekanism:mekasuit_helmet',
      'mekanism:mekasuit_bodyarmor',
      'mekanism:mekasuit_pants',
      'mekanism:mekasuit_boots',
      'mekanism:processing/diamond/to_dust',
      'mekanism:gas_conversion/salt_to_hydrogen_chloride',
      'mekanism:chemical_oxidizer',
      'mekanism:robit',
      'mekanism:bio_fuel',
      'mekanism:laser_tractor_beam',
      'mekanism:storage_blocks/bronze'
  ])
  removeRecipeByOutput([
      'mekanism:block_charcoal',
      'mekanism:upgrade_anchor'
  ])

  modifyShaped('mekanismgenerators:solar_panel', 1, ['PPP', 'RIR', 'OOO'], {
      P: 'powah:solar_panel_starter',
      R: '#forge:dusts/redstone',
      I: 'mekanism:alloy_infused',
      O: '#forge:ingots/osmium'
  })
})