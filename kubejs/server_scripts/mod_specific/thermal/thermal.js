onEvent('recipes', e => {
  modifyShapeless(e, 'thermal:onion_block', 1, '9x #forge:crops/onion')
  e.recipes.mekanism.crushing('6x thermal:sulfur', 'thermal:sulfur_ore')
  e.recipes.mekanism.crushing('thermal:diamond_dust', 'minecraft:diamond')
  e.recipes.mekanism.crushing('thermal:sulfur_dust', 'thermal:sulfur')

  utils.listOf(['apatite', 'aquamarine', 'azure_silver', 'crimson_iron', 'ruby', 'sapphire', 'cobalt', 'fluorite', 'azure_electrum', 'hepatizon', 'draconium'])
    .forEach(item => {
      e.recipes.thermal.insolator([`mysticalagriculture:${item}_essence`, `mysticalagriculture:${item}_seeds`], `mysticalagriculture:${item}_seeds`).water(500).id(`kubejs:thermal/insolator_${item}_seeds`)
    })

  let smelterCompat = (e, input1, count1, input2, count2, output, count4, power) => {
    e.remove({ output: output, type: 'thermal:smelter' })
    e.custom({
      type: 'thermal:smelter',
      ingredients: [
        {
          value: [input1],
          count: count1
        },
        {
          value: [input2],
          count: count2
        }
      ],
      result: [{
        item: [output],
        count: count4
      }],
      energy: power
    })
  }
  smelterCompat(e, [{ "tag": "forge:ingots/tin" }, { "tag": "forge:dusts/tin" }], 1, [{ "tag": "forge:dusts/copper" }, { "tag": "forge:ingots/copper" }], 3, "thermal:bronze_ingot", 4, 6400)
  smelterCompat(e, [{ "tag": "forge:ingots/silver" }, { "tag": "forge:dusts/silver" }], 1, [{ "tag": "forge:dusts/gold" }, { "tag": "forge:ingots/gold" }], 3, "thermal:electrum_ingot", 2, 3200)
  smelterCompat(e, [{ "tag": "forge:ingots/nickel" }, { "tag": "forge:dusts/nickel" }], 1, [{ "tag": "forge:dusts/iron" }, { "tag": "forge:ingots/iron" }], 2, "thermal:invar_ingot", 3, 4800)
  smelterCompat(e, [{ "tag": "forge:ingots/nickel" }, { "tag": "forge:dusts/nickel" }], 1, [{ "tag": "forge:dusts/copper" }, { "tag": "forge:ingots/copper" }], 2, "thermal:constantan_ingot", 2, 3200)
  smelterCompat(e, [{ "tag": "forge:ingots/zinc" }, { "tag": "forge:dusts/zinc" }], 1, [{ "tag": "forge:dusts/copper" }, { "tag": "forge:ingots/copper" }], 1, "create:brass_ingot", 2, 3200)
  smelterCompat(e, [{ "tag": "forge:sand" }], 1, [{ "tag": "forge:dusts/copper" }, { "tag": "forge:ingots/copper" }], 3, "tconstruct:tinkers_bronze_ingot", 3, 4000)
  smelterCompat(e, [{ "tag": "forge:ingots/gold" }, { "tag": "forge:dusts/gold" }], 1, [{ "tag": "forge:dusts/copper" }, { "tag": "forge:ingots/copper" }], 3, "tconstruct:rose_gold_ingot", 4, 4000)

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
