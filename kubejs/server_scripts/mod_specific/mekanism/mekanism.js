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

  e.shaped(Item.of('mekanism:mekasuit_helmet', { HideFlags: 2 }), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_helmet'
  }).id(`kubejs:mekanism/mekasuit_helmet`)
  e.shaped(Item.of('mekanism:mekasuit_bodyarmor', { HideFlags: 2 }), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_chestplate'
  }).id(`kubejs:mekanism/mekasuit_bodyarmor`)
  e.shaped(Item.of('mekanism:mekasuit_pants', { HideFlags: 2 }), ['HCH', 'HUH', 'PIP'], {
    H: 'mekanism:hdpe_sheet',
    C: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:pellet_polonium',
    I: 'mekanism:basic_induction_cell',
    U: 'allthemodium:unobtainium_leggings'
  }).id(`kubejs:mekanism/mekasuit_pants`)
  e.shaped(Item.of('mekanism:mekasuit_boots', { HideFlags: 2 }), ['HCH', 'HUH', 'PIP'], {
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
  e.recipes.mekanism.sawing('8x thermal:sawdust', 'byg:imbued_nightshade_log').id('kubejs:saw/byg_log_imbued_nightshade')

  utils.listOf(['aspen', 'baobab', 'blue_enchanted', 'cherry', 'cika', 'cypress', 'ebony', 'ether', 'fir', 'green_enchanted', 'holly', 'jacaranda', 'lament', 'mahogany', 'mangrove', 'maple', 'nightshade', 'palm', 'pine', 'rainbow_eucalyptus', 'redwood', 'skyris', 'willow', 'witch_hazel', 'zelkova']).forEach(type => {
    e.recipes.mekanism.sawing(
      `6x byg:${type}_planks`,
      [`byg:stripped_${type}_log`, `byg:${type}_log`],
      Item.of('thermal:sawdust').withChance(0.25)
    ).id(`kubejs:saw/byg_log_${type}`)
  })

  mekanismMetals.forEach(metal => {
    e.remove({id: `mekanism:processing/${metal}/clump/from_shard`})
    e.remove({id: `mekanism:processing/${metal}/clump/from_ore`})
    e.remove({id: `mekanism:processing/${metal}/crystal/from_slurry`})
    e.remove({id: `mekanism:processing/${metal}/dirty_dust/from_clump`})
    e.remove({id: `mekanism:processing/${metal}/dust/from_dirty_dust`})
    e.remove({id: `mekanism:processing/${metal}/dust/from_ore`})
    e.remove({id: `mekanism:processing/${metal}/ingot/from_ore_blasting`})
    e.remove({id: `mekanism:processing/${metal}/ingot/from_ore_blasting`})
    e.remove({id: `mekanism:processing/${metal}/ore/from_dust`})
    e.remove({id: `mekanism:processing/${metal}/shard/from_crystal`})
    e.remove({id: `mekanism:processing/${metal}/shard/from_ore`})
    e.remove({id: `mekanism:processing/${metal}/slurry/dirty`})
    e.remove({id: `mekanism:processing/${metal}/slurry/clean`})
  })

  mekanismMetals.concat(['bronze']).forEach(metal => {
    e.remove({id: `mekanism:processing/${metal}/dust/from_ingot`})
    e.remove({id: `mekanism:processing/${metal}/ingot/from_block`})
    e.remove({id: `mekanism:processing/${metal}/ingot/from_dust_blasting`})
    e.remove({id: `mekanism:processing/${metal}/ingot/from_dust_smelting`})
    e.remove({id: `mekanism:processing/${metal}/ingot/from_nuggets`})
    e.remove({id: `mekanism:processing/${metal}/nugget/from_ingot`})
    e.remove({id: `mekanism:processing/${metal}/storage_blocks/from_ingots`})
    e.remove({id: `mekanism:storage_blocks/${metal}`})
  })

  removeRecipeByID(e, [
    'mekanism:nuggets/bronze',
    'mekanism:digital_miner',
    'mekanism:atomic_disassembler',
    'mekanism:mekasuit_helmet',
    'mekanism:mekasuit_bodyarmor',
    'mekanism:mekasuit_pants',
    'mekanism:mekasuit_boots',
    'mekanism:processing/diamond/to_dust',
    'mekanism:gas_conversion/salt_to_hydrogen_chloride',
    'mekanism:bio_fuel',
  ])
  removeRecipeByOutput(e, [
    'mekanism:block_charcoal',
    'mekanism:upgrade_anchor'
  ])
})
