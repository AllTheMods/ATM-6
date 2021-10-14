onEvent('recipes', e => {
  modifyShaped(e, 'thermal:onion_block', 1, ['XXX', 'XXX', 'XXX'], {
    X: '#forge:crops/onion',
  })
  e.recipes.mekanism.crushing('6x thermal:sulfur', 'thermal:sulfur_ore')
  e.recipes.mekanism.crushing('thermal:diamond_dust', 'minecraft:diamond')
  e.recipes.mekanism.crushing('thermal:sulfur_dust', 'thermal:sulfur')

  utils.listOf(['apatite', 'slimesteel', 'pig_iron', 'steeleaf', 'ironwood', 'aquamarine', 'azure_silver', 'crimson_iron', 'ruby', 'sapphire', 'cobalt', 'rose_gold', 'fluorite', 'knightmetal', 'fiery_ingot', 'azure_electrum', 'manyullyn', 'queens_slime', 'hepatizon', 'draconium'])
    .forEach(item => {
      e.recipes.thermal.insolator([`mysticalagriculture:${item}_essence`, `mysticalagriculture:${item}_seeds`], `mysticalagriculture:${item}_seeds`).water(500).id(`kubejs:thermal/insolator_${item}_seeds`)
    })

  removeRecipeByID(e, [
    'thermal:storage/tin_block',
    'thermal:storage/copper_block',
    'thermal:storage/lead_block',
    'thermal:storage/platinum_block',
    'thermal:storage/uranium_block',
    'thermal:storage/silver_block',
    'thermal:storage/aluminum_block',
    'thermal:storage/nickel_block',
    'thermal:storage/osmium_block',
    'thermal:storage/zinc_block',
    'thermal:machine/press/packing2x2/press_honeycomb_packing',
    'thermal:machine/press/unpacking/press_honeycomb_unpacking',
    'thermal:machine/centrifuge/centrifuge_oil_sand',
    'thermal:machine/centrifuge/centrifuge_oil_red_sand',
    'thermal:machine/pyrolyzer/pyrolyzer_coal',
    'thermal:machine/pyrolyzer/pyrolyzer_logs',
    'thermal:compat/astralsorcery/pulverizer_astralsorcery_aquamarine_ore',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_pigiron_ingot',
    'thermal:compat/tconstruct/chiller_tconstruct_pigiron_ingot',
    'thermal:compat/tconstruct/smelter_alloy_tconstruct_slimesteel_ingot',
    'thermal:compat/biomesoplenty/tree_extractor_bop_pink_cherry',
    'thermal:compat/biomesoplenty/tree_extractor_bop_white_cherry',
    'thermal:compat/biomesoplenty/tree_extractor_bop_fir', // temporary until fixed in Thermal
    'thermal:machine/chiller/chiller_honey_to_honey_block',
    'thermal:machine/bottler/bottler_honey_bottle',
    'thermal:machine/centrifuge/centrifuge_honeycomb',
    'thermal:machine/crucible/crucible_honey_block_to_honey'
  ])
})
