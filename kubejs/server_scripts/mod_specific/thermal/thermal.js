onEvent('recipes', e => {
  e.remove({
      id: 'thermal:storage/onion_block'
  })

  e.shaped('thermal:machine_efficiency_creative_augment', ['ABA', 'CDC', 'AEA'], {
      A: 'thermal:upgrade_augment_3',
      B: `powah:charged_snowball`,
      C: `thermal:energy_cell`,
      D: 'atmadditions:atm_star',
      E: `thermal:lightning_charge`
  })
  e.shapeless('thermal:onion_block', '9x #forge:crops/onion')

  e.recipes.mekanism.crushing('6x thermal:sulfur', 'thermal:sulfur_ore')
  e.recipes.mekanism.crushing('thermal:diamond_dust', 'minecraft:diamond')
  e.recipes.mekanism.crushing('thermal:sulfur_dust', 'thermal:sulfur')

  //Add any extra seeds missing from the insolator.
  //For example, 'apatite' will create a recipe of apatite_seeds = apatite_essence + apatite_seeds
  const listMARecipes = [
  'apatite', 
  'slimesteel', 
  'pig_iron',
  'steeleaf',
  'ironwood',
  'aquamarine',
  'azure_silver',
  'crimson_iron',
  'ruby',
  'sapphire',
  'cobalt',
  'rose_gold',
  'fluorite',
  'knightmetal',
  'fiery_ingot',
  'azure_electrum',
  'manyullyn',
  'queens_slime',
  'hepatizon',
  'draconium'
  ]
  for (let recipe of listMARecipes) {
  	var essence = `mysticalagriculture:${recipe}_essence`
  	var seeds = `mysticalagriculture:${recipe}_seeds`
  	e.recipes.thermal.insolator([essence,seeds],seeds).water(500).id(`kubejs:thermal/insolator_${recipe}_seeds`)
  }

  removeRecipeByID([
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
      'thermal:compat/mysticalagriculture/insolator_mysticalag_zombie_pigman_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_phantom_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_villager_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_wolf_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_polar_bear_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_llama_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_stray_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_vex_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_evoker_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_magma_cube_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_drowned_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_dolphin_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_husk_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_panda_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_vindicator_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_shulker_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_ravager_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_guardian_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_mooshroom_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_horse_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_silverfish_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_fox_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_endermite_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_witch_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_pillager_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_parrot_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_cat_seeds',
      'thermal:compat/mysticalagriculture/insolator_mysticalag_bat_seeds',
      'thermal:machine/chiller/chiller_honey_to_honey_block',
      'thermal:machine/bottler/bottler_honey_bottle',
      'thermal:machine/centrifuge/centrifuge_honeycomb',
      'thermal:machine/crucible/crucible_honey_block_to_honey'
  ])
})